#!/usr/bin/env node

/**
 * Update the stored closing prices used by the monthly stock TOP3 board.
 *
 * Every stock that has appeared in either the user's or Codex's monthly TOP3
 * remains in the tracking set, so past monthly boards keep showing an updated
 * return. ETF data is intentionally outside this workflow.
 */

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const STOCK_DATA_DIR = path.join(ROOT, "data", "stocks");
const STOCKS_INDEX_PATH = path.join(ROOT, "data", "stocks.js");
const PRICE_HISTORY_PATH = path.join(ROOT, "data", "stock-price-history.js");
const INDEX_PATH = path.join(ROOT, "index.html");
const KST_TIME_ZONE = "Asia/Seoul";
const SCRIPT_ARGS = typeof process !== "undefined" && Array.isArray(process.argv) ? process.argv : [];
const SELF_TEST = SCRIPT_ARGS.includes("--self-test") || globalThis.__TOP3_SELF_TEST__ === true;
const DRY_RUN = SCRIPT_ARGS.includes("--dry-run") || typeof globalThis.nodeRepl !== "undefined";

function finiteNumber(value) {
  return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
}

function resolveScore(assessment = {}) {
  if (finiteNumber(assessment.total)) return Number(assessment.total);

  const items = assessment.scoreItems || assessment.criteria || assessment.metrics || [];
  if (!Array.isArray(items) || !items.length) return null;

  const usesCodexMetrics = !assessment.scoreItems && !assessment.criteria && Array.isArray(assessment.metrics);
  const defaultWeights = [1, 1, 1, 1, 1, 1, 2, 2];
  const usableItems = usesCodexMetrics ? items : items.slice(0, 8);
  const result = usableItems.reduce((acc, item, index) => {
    const score = typeof item === "number" ? item : item?.score;
    const weight = typeof item === "object" && finiteNumber(item.weight)
      ? Number(item.weight)
      : (usesCodexMetrics ? 1 : defaultWeights[index]);
    if (!finiteNumber(score) || !finiteNumber(weight)) return acc;
    acc.sum += Number(score) * Number(weight);
    acc.weight += Number(weight);
    return acc;
  }, { sum: 0, weight: 0 });

  return result.weight ? result.sum / result.weight : null;
}

function sortedTop(entries, scoreKey) {
  return entries
    .filter((entry) => finiteNumber(entry[scoreKey]))
    .sort((a, b) => Number(b[scoreKey]) - Number(a[scoreKey])
      || b.snapshot.researchDate.localeCompare(a.snapshot.researchDate)
      || (a.stock.shortName || a.stock.name).localeCompare(b.stock.shortName || b.stock.name, "ko"))
    .slice(0, 3);
}

function top3StockIds(stocks) {
  const months = [...new Set(stocks.flatMap((stock) =>
    (stock.snapshots || []).map((snapshot) => snapshot.researchDate.slice(0, 7))))];
  const ids = new Set();

  for (const month of months) {
    const entries = stocks.map((stock) => {
      const snapshot = [...(stock.snapshots || [])]
        .filter((entry) => entry.researchDate.startsWith(month))
        .sort((a, b) => b.researchDate.localeCompare(a.researchDate))[0];
      if (!snapshot) return null;
      return {
        stock,
        snapshot,
        userScore: resolveScore(snapshot.userAssessment || {}),
        codexScore: resolveScore(snapshot.codexAssessment || {})
      };
    }).filter(Boolean);

    for (const entry of [...sortedTop(entries, "userScore"), ...sortedTop(entries, "codexScore")]) {
      ids.add(entry.stock.id);
    }
  }

  return ids;
}

async function loadStockAnalyses() {
  const context = vm.createContext({ window: {}, console });
  const filenames = (await fs.readdir(STOCK_DATA_DIR))
    .filter((filename) => filename.endsWith(".js") && filename !== "shared.js")
    .sort();
  const orderedFiles = ["shared.js", ...filenames];

  for (const filename of orderedFiles) {
    const source = await fs.readFile(path.join(STOCK_DATA_DIR, filename), "utf8");
    new vm.Script(source, { filename }).runInContext(context);
  }

  const stocksIndex = await fs.readFile(STOCKS_INDEX_PATH, "utf8");
  new vm.Script(stocksIndex, { filename: "data/stocks.js" }).runInContext(context);
  return context.window.STOCK_ANALYSES || [];
}

async function loadPriceHistory() {
  const context = vm.createContext({ window: {} });
  const source = await fs.readFile(PRICE_HISTORY_PATH, "utf8");
  new vm.Script(source, { filename: "data/stock-price-history.js" }).runInContext(context);
  return context.window.STOCK_PRICE_HISTORY || { generatedAt: "-", series: {} };
}

function dateInTimeZone(timestampSeconds, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(timestampSeconds * 1000));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function latestCompletedClose(result, nowSeconds = Date.now() / 1000) {
  const timestamps = result.timestamp || [];
  const closes = result.indicators?.quote?.[0]?.close || [];
  const timeZone = result.meta?.exchangeTimezoneName || "UTC";
  const regularSession = result.meta?.currentTradingPeriod?.regular;
  const sessionStart = Number(regularSession?.start);
  const sessionEnd = Number(regularSession?.end);
  const incompleteSessionDate = Number.isFinite(sessionStart)
    && Number.isFinite(sessionEnd)
    && nowSeconds < sessionEnd
    ? dateInTimeZone(sessionStart, timeZone)
    : null;

  const points = timestamps.map((timestamp, index) => ({
    date: dateInTimeZone(timestamp, timeZone),
    close: Number(closes[index])
  })).filter((point) => Number.isFinite(point.close)
    && point.close > 0
    && point.date !== incompleteSessionDate);

  return points.at(-1) || null;
}

function kstTimestamp(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: KST_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    label: `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute} KST`,
    cache: `${values.year}${values.month}${values.day}-${values.hour}${values.minute}`
  };
}

async function fetchYahooClose(symbol) {
  const endpoint = new URL(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`);
  endpoint.searchParams.set("range", "10d");
  endpoint.searchParams.set("interval", "1d");
  endpoint.searchParams.set("events", "div,splits");

  const response = await fetch(endpoint, {
    headers: {
      "User-Agent": "Mozilla/5.0 DeepTicker/1.0",
      "Accept": "application/json"
    },
    signal: AbortSignal.timeout(25_000)
  });
  if (!response.ok) throw new Error(`Yahoo Finance HTTP ${response.status}`);

  const payload = await response.json();
  if (payload?.chart?.error) throw new Error(payload.chart.error.description || "Yahoo Finance chart error");
  const result = payload?.chart?.result?.[0];
  if (!result) throw new Error("Yahoo Finance returned no chart result");

  const latest = latestCompletedClose(result);
  if (!latest) throw new Error("Yahoo Finance returned no positive completed daily close");

  const currency = result.meta?.currency || (symbol.endsWith(".KS") ? "KRW" : "USD");
  const close = currency === "KRW"
    ? Math.round(latest.close)
    : Number(latest.close.toFixed(4));
  return {
    date: latest.date,
    close,
    currency,
    source: "Yahoo Finance daily close",
    sourceUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}/history/`
  };
}

function runSelfTest() {
  const day14 = Date.parse("2026-07-14T00:00:00Z") / 1000;
  const day15 = Date.parse("2026-07-15T00:00:00Z") / 1000;
  const regularStart = Date.parse("2026-07-15T00:00:00Z") / 1000;
  const regularEnd = Date.parse("2026-07-15T06:30:00Z") / 1000;
  const fixture = {
    timestamp: [day14, day15],
    meta: {
      exchangeTimezoneName: "Asia/Seoul",
      currentTradingPeriod: { regular: { start: regularStart, end: regularEnd } }
    },
    indicators: { quote: [{ close: [322000, 0] }] }
  };
  const duringSession = latestCompletedClose(
    fixture,
    Date.parse("2026-07-15T00:08:00Z") / 1000
  );
  if (duringSession?.date !== "2026-07-14" || duringSession.close !== 322000) {
    throw new Error("Self-test failed: zero or incomplete daily candle was selected");
  }

  fixture.indicators.quote[0].close[1] = 323500;
  const afterSession = latestCompletedClose(
    fixture,
    Date.parse("2026-07-15T07:00:00Z") / 1000
  );
  if (afterSession?.date !== "2026-07-15" || afterSession.close !== 323500) {
    throw new Error("Self-test failed: completed positive daily close was not selected");
  }
  console.log("Self-test passed: invalid and incomplete daily candles are rejected.");
}

function upsertPoint(history, stockId, point) {
  if (!finiteNumber(point.close) || Number(point.close) <= 0) {
    throw new Error(`Refusing to store a non-positive close for ${stockId}`);
  }
  const series = history.series[stockId] || { currency: point.currency, points: [] };
  series.currency = point.currency || series.currency;
  series.points = Array.isArray(series.points) ? series.points : [];
  const existingIndex = series.points.findIndex((entry) => entry.date === point.date);
  const nextPoint = {
    date: point.date,
    close: point.close,
    source: point.source,
    sourceUrl: point.sourceUrl
  };

  let changed = false;
  if (existingIndex >= 0) {
    const existing = series.points[existingIndex];
    if (Number(existing.close) !== Number(point.close)
      || existing.source !== point.source
      || existing.sourceUrl !== point.sourceUrl) {
      series.points[existingIndex] = nextPoint;
      changed = true;
    }
  } else {
    series.points.push(nextPoint);
    changed = true;
  }

  series.points.sort((a, b) => a.date.localeCompare(b.date));
  history.series[stockId] = series;
  return changed;
}

async function updateCacheVersion(cacheStamp) {
  const html = await fs.readFile(INDEX_PATH, "utf8");
  const next = html.replace(
    /data\/stock-price-history\.js\?v=[^"']+/,
    `data/stock-price-history.js?v=top3-${cacheStamp}`
  );
  if (next === html) throw new Error("Could not find the stock price history script tag in index.html");
  await fs.writeFile(INDEX_PATH, next, "utf8");
}

async function main() {
  const stocks = await loadStockAnalyses();
  const trackingIds = top3StockIds(stocks);
  const trackedStocks = stocks.filter((stock) => trackingIds.has(stock.id));
  if (!trackedStocks.length) throw new Error("No monthly TOP3 stocks were found");

  const history = await loadPriceHistory();
  history.series = history.series || {};
  let changed = false;
  let successes = 0;
  const failures = [];

  for (const stock of trackedStocks) {
    const latestSnapshot = [...(stock.snapshots || [])]
      .sort((a, b) => b.researchDate.localeCompare(a.researchDate))[0];
    const symbol = latestSnapshot?.stockChart?.yahooSymbol;
    if (!symbol) {
      console.log(`::warning title=TOP3 price skipped::${stock.name} has no Yahoo symbol.`);
      continue;
    }

    try {
      const point = await fetchYahooClose(symbol);
      successes += 1;
      changed = upsertPoint(history, stock.id, point) || changed;
      console.log(`${stock.shortName || stock.name}: ${point.date} ${point.close} ${point.currency}`);
    } catch (error) {
      failures.push(`${stock.id}: ${error.message}`);
      console.log(`::warning title=TOP3 price fetch failed::${stock.name}: ${error.message}`);
    }
  }

  if (!successes) throw new Error(`Every TOP3 price request failed (${failures.join(" | ")})`);
  if (!changed) {
    console.log("No new or corrected TOP3 closing prices.");
    return;
  }

  const timestamp = kstTimestamp();
  history.generatedAt = timestamp.label;
  const output = `window.STOCK_PRICE_HISTORY = ${JSON.stringify(history, null, 2)};\n`;

  if (DRY_RUN) {
    console.log(output);
    console.log("Dry run: files were not changed.");
    return;
  }

  await fs.writeFile(PRICE_HISTORY_PATH, output, "utf8");
  await updateCacheVersion(timestamp.cache);
  console.log(`Updated ${PRICE_HISTORY_PATH} at ${timestamp.label}.`);
}

if (SELF_TEST) {
  runSelfTest();
} else {
  await main();
}
