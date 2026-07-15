(() => {
  const root = document.querySelector("#top3-root");
  const stocks = window.STOCK_ANALYSES || [];
  const priceHistory = window.STOCK_PRICE_HISTORY?.series || {};
  if (!root) return;

  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const isFiniteNumber = (value) => value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
  const isValidPrice = (value) => isFiniteNumber(value) && Number(value) > 0;
  const months = [...new Set(stocks.flatMap((stock) => (stock.snapshots || []).map((snapshot) => snapshot.researchDate.slice(0, 7))))].sort((a, b) => b.localeCompare(a));
  let selectedMonth = months[0] || new Date().toISOString().slice(0, 7);

  function resolveScore(assessment = {}) {
    if (isFiniteNumber(assessment.total)) return Number(assessment.total);
    const items = assessment.scoreItems || assessment.criteria || assessment.metrics || [];
    if (!Array.isArray(items) || !items.length) return null;

    const usesCodexMetrics = !assessment.scoreItems && !assessment.criteria && Array.isArray(assessment.metrics);
    const defaultWeights = [1, 1, 1, 1, 1, 1, 2, 2];
    const usableItems = usesCodexMetrics ? items : items.slice(0, 8);
    const result = usableItems.reduce((acc, item, index) => {
      const score = typeof item === "number" ? item : item?.score;
      const weight = typeof item === "object" && isFiniteNumber(item.weight)
        ? Number(item.weight)
        : (usesCodexMetrics ? 1 : defaultWeights[index]);
      if (!isFiniteNumber(score) || !isFiniteNumber(weight)) return acc;
      acc.sum += Number(score) * Number(weight);
      acc.weight += Number(weight);
      return acc;
    }, { sum: 0, weight: 0 });
    return result.weight ? result.sum / result.weight : null;
  }

  function monthlyEntries(month) {
    return stocks.map((stock) => {
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
  }

  function sortedTop(entries, scoreKey) {
    return entries
      .filter((entry) => isFiniteNumber(entry[scoreKey]))
      .sort((a, b) => Number(b[scoreKey]) - Number(a[scoreKey])
        || b.snapshot.researchDate.localeCompare(a.snapshot.researchDate)
        || (a.stock.shortName || a.stock.name).localeCompare(b.stock.shortName || b.stock.name, "ko"))
      .slice(0, 3);
  }

  function parseQuotePrice(quote = {}) {
    if (isValidPrice(quote.price)) return Number(quote.price);
    const cleaned = String(quote.priceLabel || "").replace(/,/g, "").replace(/[^0-9.-]/g, "");
    return isValidPrice(cleaned) ? Number(cleaned) : null;
  }

  function performanceFor(entry) {
    const startPrice = parseQuotePrice(entry.snapshot.quote);
    const storedPoints = [...(priceHistory[entry.stock.id]?.points || [])]
      .filter((point) => isValidPrice(point.close))
      .sort((a, b) => b.date.localeCompare(a.date));
    const laterSnapshots = (entry.stock.snapshots || []).map((snapshot) => ({
      date: snapshot.researchDate,
      close: parseQuotePrice(snapshot.quote),
      source: "분석 기록 저장가격"
    })).filter((point) => isValidPrice(point.close));
    const latest = [...storedPoints, ...laterSnapshots]
      .filter((point) => point.date >= entry.snapshot.researchDate)
      .sort((a, b) => b.date.localeCompare(a.date))[0];

    if (!isValidPrice(startPrice) || !latest || latest.date <= entry.snapshot.researchDate) {
      return { status: "pending", startPrice, latest };
    }

    const returnPct = ((Number(latest.close) / Number(startPrice)) - 1) * 100;
    return { status: "ready", startPrice, latest, returnPct };
  }

  function recommendationLabel(assessment = {}) {
    if (Array.isArray(assessment.recommendations) && assessment.recommendations.length) {
      return assessment.recommendations
        .map((plan) => [plan.period || plan.horizon, plan.stance].filter(Boolean).join(" "))
        .filter(Boolean)
        .join(" / ");
    }
    const plan = assessment.recommendation || {};
    const values = [plan.period || plan.horizon, plan.stance || assessment.stance].filter((value) => value && !String(value).includes("미입력"));
    return values.length ? values.join(" · ") : "평가 의견 기록";
  }

  function formatPrice(value, stockId) {
    if (!isValidPrice(value)) return "-";
    const currency = priceHistory[stockId]?.currency || (stockId === "META" ? "USD" : "KRW");
    return currency === "USD"
      ? `$${Number(value).toLocaleString("ko-KR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `${Math.round(Number(value)).toLocaleString("ko-KR")}원`;
  }

  function renderRankCard(entry, index, scoreKey, owner) {
    const score = Number(entry[scoreKey]);
    const assessment = owner === "user" ? entry.snapshot.userAssessment || {} : entry.snapshot.codexAssessment || {};
    const performance = performanceFor(entry);
    const performanceClass = performance.status === "ready" ? (performance.returnPct >= 0 ? "up" : "down") : "pending";
    const performanceLabel = performance.status === "ready"
      ? `${performance.returnPct >= 0 ? "+" : ""}${performance.returnPct.toFixed(2)}%`
      : "추적 대기";
    const latestLabel = performance.status === "ready"
      ? `${formatPrice(performance.latest.close, entry.stock.id)} · ${performance.latest.date} · ${performance.latest.source || "저장가격"}`
      : "분석일 이후 저장가격이 생기면 자동 계산";
    const href = `?view=stock&id=${encodeURIComponent(entry.stock.id)}&date=${encodeURIComponent(entry.snapshot.researchDate)}`;

    return `<a class="top3-rank-card" href="${href}">
      <span class="top3-rank-number">${index + 1}</span>
      <div class="top3-rank-main">
        <small>${escape(recommendationLabel(assessment))}</small>
        <strong>${escape(entry.stock.shortName || entry.stock.name)}</strong>
        <span>평가일 ${escape(entry.snapshot.researchDate)}</span>
      </div>
      <div class="top3-score"><small>${owner === "user" ? "내 점수" : "Codex 점수"}</small><strong>${score.toFixed(1)}<i>/5</i></strong></div>
      <div class="top3-return ${performanceClass}"><small>분석 이후</small><strong>${performanceLabel}</strong></div>
      <div class="top3-price-track">
        <span><small>기준가격</small><b>${formatPrice(performance.startPrice, entry.stock.id)}</b></span>
        <span><small>최신 저장가격</small><b>${escape(latestLabel)}</b></span>
      </div>
    </a>`;
  }

  function renderBoard(title, subtitle, entries, scoreKey, owner) {
    const cards = entries.length
      ? entries.map((entry, index) => renderRankCard(entry, index, scoreKey, owner)).join("")
      : `<div class="top3-empty"><strong>아직 집계할 점수가 없습니다.</strong><p>${owner === "user" ? "내 점수가 입력된 주식부터 이곳에 순위가 만들어집니다." : "해당 월의 Codex 평가가 추가되면 자동으로 집계합니다."}</p></div>`;
    return `<section class="top3-board ${owner}">
      <header><div><p class="eyebrow">${owner === "user" ? "USER RANKING" : "CODEX RANKING"}</p><h3>${escape(title)}</h3></div><p>${escape(subtitle)}</p></header>
      <div class="top3-rank-list">${cards}</div>
    </section>`;
  }

  function monthLabel(month) {
    const [year, value] = month.split("-");
    return `${year}년 ${Number(value)}월`;
  }

  function render() {
    const entries = monthlyEntries(selectedMonth);
    const userTop = sortedTop(entries, "userScore");
    const codexTop = sortedTop(entries, "codexScore");
    const currentMonth = new Date().toISOString().slice(0, 7);
    const status = selectedMonth === currentMonth ? "집계 중" : "월간 기록";

    root.innerHTML = `<div class="top3-toolbar">
      <div><p class="eyebrow">MONTHLY ARCHIVE</p><strong>${monthLabel(selectedMonth)}</strong><span>${status}</span></div>
      <div class="top3-months">${months.map((month) => `<button type="button" class="top3-month ${month === selectedMonth ? "active" : ""}" data-top3-month="${escape(month)}">${monthLabel(month)}</button>`).join("")}</div>
    </div>
    <div class="top3-summary">
      <span><small>집계 종목</small><strong>${entries.length}개</strong></span>
      <span><small>내 점수 입력</small><strong>${entries.filter((entry) => isFiniteNumber(entry.userScore)).length}개</strong></span>
      <span><small>Codex 평가</small><strong>${entries.filter((entry) => isFiniteNumber(entry.codexScore)).length}개</strong></span>
      <span><small>수익률 가격 기준</small><strong>${escape(window.STOCK_PRICE_HISTORY?.generatedAt || "업데이트 대기")}</strong></span>
    </div>
    <div class="top3-boards">
      ${renderBoard("나의 평가 TOP 3", "내 최종 가중점수만 사용합니다.", userTop, "userScore", "user")}
      ${renderBoard("Codex 평가 TOP 3", "내 평가와 독립적으로 계산합니다.", codexTop, "codexScore", "codex")}
    </div>
    <p class="top3-method-note">동일 종목의 월중 분석이 여러 번이면 가장 최신 기록만 사용하며, 동점은 분석일이 최근인 종목을 우선합니다. 표시 수익률은 배당·환율·세금이 반영되지 않은 저장가격 기준 주가 수익률입니다.</p>`;

    root.querySelectorAll("[data-top3-month]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedMonth = button.dataset.top3Month;
        render();
      });
    });
  }

  render();
})();
