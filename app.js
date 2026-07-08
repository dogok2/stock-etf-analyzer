const analyses = window.ETF_ANALYSES || [];
const listElement = document.querySelector("#etf-list");
const reportElement = document.querySelector("#etf-report");
const searchElement = document.querySelector("#etf-search");
const marketButtons = document.querySelectorAll(".market-filter");
const numberFormat = new Intl.NumberFormat("ko-KR");

let selectedId = analyses[0]?.id || null;
let selectedResearchDate = analyses[0]?.snapshots?.[0]?.researchDate || null;
let selectedMarket = "all";

function latestSnapshot(item) {
  return [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate))[0];
}

function getFilteredAnalyses(query = "") {
  const needle = query.trim().toLowerCase();
  return analyses.filter((item) => {
    const matchesText = `${item.name} ${item.shortName || ""} ${item.id} ${item.category}`
      .toLowerCase()
      .includes(needle);
    const matchesMarket = selectedMarket === "all" || item.listingMarket === selectedMarket;
    return matchesText && matchesMarket;
  });
}

function syncSelectionToList(filtered) {
  if (!filtered.length || filtered.some((item) => item.id === selectedId)) {
    return false;
  }

  const first = filtered[0];
  selectedId = first.id;
  selectedResearchDate = latestSnapshot(first).researchDate;
  return true;
}

function renderList(query = "") {
  const filtered = getFilteredAnalyses(query);
  const selectionChanged = syncSelectionToList(filtered);

  if (!filtered.length) {
    listElement.innerHTML = '<div class="empty-state">아직 등록되지 않은 ETF입니다. 분석할 이름을 알려주세요.</div>';
    return;
  }

  listElement.innerHTML = filtered
    .map((item) => {
      const snapshot = latestSnapshot(item);
      return `
        <button class="etf-card ${item.id === selectedId ? "active" : ""}" data-id="${item.id}">
          <span class="card-kicker"><span>${item.category}</span><i class="card-dot"></i></span>
          <span class="card-meta-row">
            <span class="listing-badge ${item.listingMarket}">${item.listingLabel}</span>
            <small class="archive-count">분석 기록 ${item.snapshots.length}회</small>
          </span>
          <h3>${item.shortName || item.name}</h3>
          <p>${item.id} · 최근 분석 ${snapshot.researchDate}</p>
        </button>`;
    })
    .join("");

  listElement.querySelectorAll(".etf-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      selectedResearchDate = latestSnapshot(analyses.find((item) => item.id === selectedId)).researchDate;
      renderList(searchElement.value);
      renderReport(selectedId, selectedResearchDate);
      reportElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (selectionChanged) {
    renderReport(selectedId, selectedResearchDate);
  }
}

function renderReport(id, researchDate) {
  const item = analyses.find((analysis) => analysis.id === id);
  if (!item) {
    reportElement.innerHTML = "";
    return;
  }

  const orderedSnapshots = [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate));
  const snapshot = orderedSnapshots.find((entry) => entry.researchDate === researchDate) || orderedSnapshots[0];
  selectedResearchDate = snapshot.researchDate;

  const quoteDirection = snapshot.quote.changePct == null ? "flat" : snapshot.quote.changePct >= 0 ? "up" : "down";
  const quoteChange = snapshot.quote.changePct == null
    ? "당일 등락 미기록"
    : `${snapshot.quote.changePct > 0 ? "+" : ""}${snapshot.quote.changePct.toFixed(2)}%`;
  const sections = [];
  let sectionIndex = 1;
  const addSection = (title, description, body) => {
    sections.push(`${sectionHeader(String(sectionIndex++).padStart(2, "0"), title, description)}<section class="report-section">${body}</section>`);
  };

  addSection(
    "상품의 정체",
    "먼저 무엇을 사고 있는 ETF인지 구조부터 확인합니다.",
    `<div class="fact-grid">${snapshot.facts
      .map((fact) => `<div class="fact"><small>${fact.label}</small><strong>${fact.value}</strong></div>`)
      .join("")}</div>`
  );

  addSection(
    "분석 레이더",
    "5점 만점의 상대적 관찰 점수입니다. 수익률 예측이나 매수 등급이 아닙니다.",
    `<div class="score-grid">${snapshot.scores
      .map(
        (score) => `
          <div class="score-card">
            <small>${score.label}</small><strong>${score.score.toFixed(1)}</strong>
            <div class="meter"><i style="width:${score.score * 20}%"></i></div>
            <p>${score.note}</p>
          </div>`
      )
      .join("")}</div>`
  );

  addSection(
    "지수는 어떻게 고르나",
    snapshot.indexMethod.summary,
    `<ol class="check-list">${snapshot.indexMethod.details.map((detail) => `<li>${detail}</li>`).join("")}</ol>`
  );

  addSection(
    "구성은 어떻게 생겼나",
    snapshot.composition
      ? `${snapshot.composition.asOf} 기준. 버튼을 눌러 서로 다른 구성 차트를 볼 수 있습니다.`
      : `${snapshot.holdingsAsOf} 기준 당시 기록된 상위 종목입니다.`,
    renderComposition(snapshot)
  );

  addSection(
    snapshot.securityCharts?.title || "구성 종목 주가 차트",
    snapshot.securityCharts?.description || "상위 구성 종목을 누르면 실제 편입 주식의 주가 차트를 볼 수 있습니다.",
    renderSecurityCharts(snapshot)
  );

  addSection(
    "배당·분배금",
    snapshot.distribution
      ? "분배 주기, 최근 지급액, 수익률의 의미와 과세를 따로 봅니다."
      : "이 분석 날짜에는 배당 상세 데이터가 아직 기록되지 않았습니다.",
    renderDistribution(snapshot.distribution)
  );

  addSection(
    snapshot.performance.title,
    `${snapshot.performance.asOf} 기준. ${snapshot.performance.note}`,
    `<div class="performance-grid">${snapshot.performance.periods
      .map(
        (period) => `
          <div class="return-card"><small>${period.label}</small><span class="${period.value < 0 ? "negative" : ""}">${period.value > 0 ? "+" : ""}${period.value.toFixed(2)}%</span></div>`
      )
      .join("")}</div><p class="data-note">${snapshot.performance.stats.join(" · ")}</p>`
  );

  addSection(
    "기회와 위험",
    "좋은 이야기와 불편한 이야기를 같은 화면에 둡니다.",
    `<div class="analysis-columns">
      <div class="analysis-box opportunity"><h4>상승 동력</h4><ul>${snapshot.opportunities.map((text) => `<li>${text}</li>`).join("")}</ul></div>
      <div class="analysis-box risk"><h4>핵심 위험</h4><ul>${snapshot.risks.map((text) => `<li>${text}</li>`).join("")}</ul></div>
    </div>`
  );

  addSection(
    "세 가지 경로",
    "가격 목표가 아닌, 투자 가설이 어떻게 달라질 수 있는지 보는 시나리오입니다.",
    `<div class="table-wrap"><table class="scenario-table">
      <thead><tr><th>경로</th><th>조건</th><th>계속 볼 지표</th></tr></thead>
      <tbody>${snapshot.scenarios
        .map((scenario) => `<tr><td><span class="scenario-tag ${scenario.type}">${scenario.label}</span></td><td>${scenario.condition}</td><td>${scenario.watch}</td></tr>`)
        .join("")}</tbody>
    </table></div>`
  );

  addSection(
    "매수 전에 확인할 것",
    "상품의 매력보다 먼저 거래 조건과 감당 가능한 위험을 점검합니다.",
    `<ol class="check-list">${snapshot.checklist.map((text) => `<li>${text}</li>`).join("")}</ol>
     <p class="data-note"><strong>과세 메모:</strong> ${snapshot.taxNote}</p>`
  );

  addSection(
    "원문 출처",
    `분석 기록 ${snapshot.researchDate} · 숫자마다 기준일이 다를 수 있습니다.`,
    `<div class="source-list">${snapshot.sources
      .map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer"><span><strong>${source.label}</strong><small>${source.detail}</small></span><b>↗</b></a>`)
      .join("")}</div>
     <p class="data-note">분석용 분류와 의견은 공식 수치에 대한 해석입니다. 거래 전 각 링크의 최신 원문을 우선하세요.</p>`
  );

  reportElement.innerHTML = `
    <div class="history-strip">
      <div>
        <p class="eyebrow">RESEARCH ARCHIVE</p>
        <strong>분석 날짜별 기록</strong>
        <small>새 업데이트가 생겨도 이전 분석은 그대로 남습니다.</small>
      </div>
      <div class="history-dates" role="group" aria-label="분석 날짜 선택">
        ${orderedSnapshots
          .map((entry) => `<button class="history-date ${entry.researchDate === snapshot.researchDate ? "active" : ""}" data-date="${entry.researchDate}"><b>${entry.researchDate}</b><small>${entry.archiveNote}</small></button>`)
          .join("")}
      </div>
    </div>
    <header class="report-hero ${item.listingMarket === "us" ? "us-market" : ""}">
      <div>
        <div class="report-badges">
          <span class="badge accent">${item.listingLabel}</span>
          ${snapshot.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <h2>${item.shortName || item.name}</h2>
        ${item.shortName ? `<p class="official-name">${item.name}</p>` : ""}
        <p class="report-thesis">${snapshot.thesis}</p>
      </div>
      <aside class="quote-panel">
        <small>${snapshot.quote.date} 가격</small>
        <strong class="quote-price">${formatMoney(snapshot.quote.price, snapshot.quote.currency)}</strong>
        <span class="quote-change ${quoteDirection}">${quoteChange}</span>
        <div class="quote-meta">
          <span><small>NAV / iNAV</small><strong>${formatMoney(snapshot.quote.nav, snapshot.quote.currency)}</strong></span>
          <span><small>거래량</small><strong>${numberFormat.format(snapshot.quote.volume)}주</strong></span>
        </div>
      </aside>
    </header>
    <div class="report-body">${sections.join("")}</div>`;

  bindReportInteractions(item);
}

function renderComposition(snapshot) {
  if (!snapshot.composition) {
    const total = snapshot.holdings.reduce((sum, holding) => sum + holding.weight, 0);
    return `<div class="holdings-layout">
      <div>${renderBars(snapshot.holdings.map((item) => ({ label: item.name, sub: item.role, value: item.weight })))}</div>
      <aside class="concentration-card"><small>상위 10종목 집중도</small><strong>${total.toFixed(1)}%</strong><p>${snapshot.concentrationNote}</p></aside>
    </div><p class="archive-warning">이 날짜의 분석에는 구성 차트 분류가 아직 추가되지 않았습니다.</p>`;
  }

  const views = snapshot.composition.views;
  return `<div class="chart-shell">
    <div class="chart-tabs" role="group" aria-label="구성 차트 선택">
      ${views.map((view, index) => `<button class="chart-tab ${index === 0 ? "active" : ""}" data-chart-view="${view.id}">${view.label}</button>`).join("")}
    </div>
    ${views.map((view, index) => `<div class="chart-panel ${index === 0 ? "active" : ""}" data-chart-panel="${view.id}">${view.type === "donut" ? renderDonut(view.items) : renderBars(view.items)}</div>`).join("")}
    <p class="data-note">${snapshot.composition.note}</p>
  </div>`;
}

function renderSecurityCharts(snapshot) {
  const chartConfig = snapshot.securityCharts || {};
  const chartItems = chartConfig.symbols || (snapshot.holdings || []).filter((holding) => holding.chartSymbol);

  if (!chartItems.length) {
    return `<div class="archive-warning"><strong>차트 연결 정보 없음</strong><p>이 날짜의 분석에는 TradingView에 연결할 구성 종목 티커가 아직 기록되지 않았습니다.</p></div>`;
  }

  const first = chartItems[0];
  return `<div class="security-chart-shell" data-security-chart>
    <div class="security-chart-copy">
      <strong>${chartConfig.asOf ? `${chartConfig.asOf} 기준` : "현재 기록 기준"}</strong>
      <p>왼쪽 종목을 누르면 오른쪽 차트가 해당 종목으로 바뀝니다. 비중 차트가 아니라 실제 편입 주식/참고 지표의 가격 차트입니다.</p>
    </div>
    <div class="security-chart-layout">
      <div class="security-list" role="group" aria-label="차트 종목 선택">
        ${chartItems
          .map(
            (item, index) => `
              <button class="security-item ${index === 0 ? "active" : ""}" data-symbol="${escapeAttr(item.chartSymbol)}" data-name="${escapeAttr(item.name)}" data-ticker="${escapeAttr(item.exchange ? `${item.exchange}:${item.ticker}` : item.ticker)}" aria-pressed="${index === 0 ? "true" : "false"}">
                <span><b>${item.name}</b><small>${item.role || ""}</small></span>
                <em>${item.weight ? `${item.weight.toFixed(2)}%` : item.ticker}</em>
              </button>`
          )
          .join("")}
      </div>
      <div class="security-chart-area">
        <div class="security-chart-meta">
          <span><strong data-chart-name>${first.name}</strong><small data-chart-symbol>${first.exchange ? `${first.exchange}:${first.ticker}` : first.ticker}</small></span>
          <a data-chart-link href="${tradingViewLink(first.chartSymbol)}" target="_blank" rel="noreferrer">TradingView에서 크게 보기</a>
        </div>
        <div class="tradingview-widget-container" data-tv-widget data-tv-symbol="${escapeAttr(first.chartSymbol)}">
          <div class="chart-fallback">차트를 불러오는 중입니다. 인터넷 연결이나 TradingView 제공 범위에 따라 표시가 늦을 수 있습니다.</div>
        </div>
      </div>
    </div>
    <p class="data-note">${chartConfig.note || "차트는 외부 TradingView 위젯으로 표시됩니다. 실시간성, 지연 시세, 거래소 제공 범위는 TradingView 정책을 따릅니다."}</p>
  </div>`;
}

function renderBars(items) {
  const max = Math.max(...items.map((item) => item.value), 1);
  return `<div class="composition-bars">${items
    .map((item) => `<div class="holding-row"><b>${item.label}<small>${item.sub || ""}</small></b><div class="bar-track"><i style="width:${(item.value / max) * 100}%"></i></div><span>${item.value.toFixed(2)}%</span></div>`)
    .join("")}</div>`;
}

function renderDonut(items) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let cursor = 0;
  const gradient = items
    .map((item, index) => {
      const start = cursor;
      cursor += (item.value / total) * 100;
      return `${item.color || chartColor(index)} ${start.toFixed(2)}% ${cursor.toFixed(2)}%`;
    })
    .join(", ");
  return `<div class="donut-layout">
    <div class="donut-chart" style="background:conic-gradient(${gradient})"><span><b>${total.toFixed(0)}%</b><small>구성 합계</small></span></div>
    <div class="donut-legend">${items.map((item, index) => `<div><i style="background:${item.color || chartColor(index)}"></i><span>${item.label}</span><b>${item.value.toFixed(2)}%</b></div>`).join("")}</div>
  </div>`;
}

function renderDistribution(distribution) {
  if (!distribution) {
    return `<div class="archive-warning"><strong>배당 상세 미기록</strong><p>이전 날짜의 분석을 원본 그대로 보존하고 있습니다. 최신 분석 날짜를 누르면 새로 추가된 배당 정보를 볼 수 있습니다.</p></div>`;
  }

  const maxAmount = Math.max(...distribution.rows.map((row) => row.amount), 1);
  return `<div class="distribution-summary">
      <div><small>지급 주기</small><strong>${distribution.frequency}</strong><p>${distribution.schedule}</p></div>
      <div><small>최근 주당 분배</small><strong>${distribution.latestAmount}</strong><p>${distribution.rows[0].payDate} 지급</p></div>
      <div><small>${distribution.secYield ? "30일 SEC 수익률" : "최근 4회 합계"}</small><strong>${distribution.secYield || distribution.trailingAmount}</strong><p>${distribution.yieldAsOf}</p></div>
      <div><small>12개월 분배수익률</small><strong>${distribution.trailingYield}</strong><p>${distribution.yieldAsOf}</p></div>
    </div>
    <div class="distribution-explain">${distribution.explanation}</div>
    <div class="distribution-layout">
      <div class="distribution-chart" aria-label="분배금 이력 차트">
        ${distribution.rows.map((row) => `<div class="distribution-bar"><span>${row.recordDate.slice(2, 7)}</span><i><b style="width:${(row.amount / maxAmount) * 100}%"></b></i><strong>${formatDistribution(row.amount, distribution.currency)}</strong></div>`).join("")}
      </div>
      <div class="distribution-table-wrap"><table class="distribution-table"><thead><tr><th>기준일</th><th>지급일</th><th>주당 금액</th><th>분배율</th></tr></thead><tbody>
        ${distribution.rows.map((row) => `<tr><td>${row.recordDate}</td><td>${row.payDate}</td><td>${formatDistribution(row.amount, distribution.currency)}</td><td>${row.rate || "-"}</td></tr>`).join("")}
      </tbody></table></div>
    </div>
    <p class="tax-callout"><strong>세금 메모</strong>${distribution.tax}</p>`;
}

function bindReportInteractions(item) {
  reportElement.querySelectorAll(".history-date").forEach((button) => {
    button.addEventListener("click", () => renderReport(item.id, button.dataset.date));
  });

  reportElement.querySelectorAll(".chart-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const shell = button.closest(".chart-shell");
      shell.querySelectorAll(".chart-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
      shell.querySelectorAll(".chart-panel").forEach((panel) => panel.classList.toggle("active", panel.dataset.chartPanel === button.dataset.chartView));
    });
  });

  reportElement.querySelectorAll("[data-security-chart]").forEach((shell) => {
    const buttons = Array.from(shell.querySelectorAll(".security-item"));
    const container = shell.querySelector("[data-tv-widget]");
    const nameElement = shell.querySelector("[data-chart-name]");
    const symbolElement = shell.querySelector("[data-chart-symbol]");
    const linkElement = shell.querySelector("[data-chart-link]");

    const activate = (button) => {
      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      nameElement.textContent = button.dataset.name;
      symbolElement.textContent = button.dataset.ticker;
      linkElement.href = tradingViewLink(button.dataset.symbol);
      mountTradingViewChart(container, button.dataset.symbol);
    };

    buttons.forEach((button) => button.addEventListener("click", () => activate(button)));
    if (buttons[0]) {
      activate(buttons[0]);
    }
  });
}

function mountTradingViewChart(container, symbol) {
  if (!container || !symbol) {
    return;
  }

  container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  script.async = true;
  script.innerHTML = JSON.stringify({
    autosize: true,
    symbol,
    interval: "D",
    timezone: "Asia/Seoul",
    theme: "light",
    style: "1",
    locale: "kr",
    allow_symbol_change: false,
    calendar: false,
    support_host: "https://www.tradingview.com"
  });
  container.appendChild(script);
}

function formatMoney(value, currency) {
  return currency === "$" ? `$${value.toFixed(2)}` : `${numberFormat.format(value)}${currency}`;
}

function formatDistribution(value, currency) {
  return currency === "$" ? `$${value.toFixed(6)}` : `${numberFormat.format(value)}${currency}`;
}

function tradingViewLink(symbol) {
  return `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol)}`;
}

function escapeAttr(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function chartColor(index) {
  return ["#112b3b", "#69b79c", "#c9f31d", "#ff6b52", "#d8d9d2"][index % 5];
}

function sectionHeader(index, title, description) {
  return `<div class="section-head"><div><p class="eyebrow">${index} / REPORT</p><h3>${title}</h3></div><p>${description}</p></div>`;
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#etf-view").classList.toggle("hidden", button.dataset.view !== "etf");
    document.querySelector("#stock-view").classList.toggle("hidden", button.dataset.view !== "stock");
  });
});

marketButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMarket = button.dataset.market;
    marketButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderList(searchElement.value);
  });
});

searchElement.addEventListener("input", (event) => renderList(event.target.value));
renderList();
renderReport(selectedId, selectedResearchDate);
