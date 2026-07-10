(() => {
  const data = window.OTHER_INDICATORS;
  const root = document.querySelector("#indicators-root");
  const view = document.querySelector("#indicators-view");
  if (!data || !root || !view) return;

  let selectedChartId = data.marketCharts?.[0]?.id || null;
  let chartHydrated = false;

  const escape = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  const escapeAttr = escape;

  function render() {
    const firstFed = data.fedWatch?.meetings?.[0];
    const firstFedTop = topProbability(firstFed);

    root.innerHTML = `
      <header class="indicator-hero">
        <div>
          <div class="report-badges">
            <span class="badge accent">MACRO</span>
            <span class="badge">주간 경제 이벤트</span>
            <span class="badge">차트 오류 fallback</span>
          </div>
          <h2>기타 지표</h2>
          <p class="report-thesis">시장 전체 온도를 먼저 확인하고 ETF·주식 분석으로 들어가기 위한 보조 화면입니다. 환율, 원자재, 코인, 고중요도 경제 이벤트, FOMC 확률을 한 번에 봅니다.</p>
        </div>
        <aside class="quote-panel indicator-status-panel">
          <small>업데이트 기준</small>
          <strong>${escape(data.asOf)}</strong>
          <span class="quote-change flat">주간 캘린더 + 차트 대시보드</span>
          <div class="quote-meta">
            <span><small>차트</small><strong>${data.marketCharts.length}개</strong></span>
            <span><small>다음 FOMC</small><strong>${escape(firstFedTop)}</strong></span>
          </div>
        </aside>
      </header>
      <div class="report-body indicator-body">
        ${renderSummary()}
        ${sectionHeader("01", "고중요도 경제 이벤트", "Investing.com의 이번 주 중요도 3 필터에서 확인된 이벤트만 모았습니다.", renderCalendar())}
        ${sectionHeader("02", "환율·코인·원자재 차트", "가능하면 TradingView를 바로 보여주고, 임베드 차단 심볼은 저장 차트로 안전하게 대체합니다.", renderCharts())}
        ${sectionHeader("03", "FedWatch 확률", "다음 3개 FOMC의 목표금리 확률을 스냅샷으로 저장합니다.", renderFedWatch())}
        ${sectionHeader("04", "데이터 사용 원칙", "실시간성, 지연 시세, 저장 차트의 경계를 명확히 둡니다.", renderPolicy())}
      </div>`;

    root.querySelectorAll("[data-indicator-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedChartId = button.dataset.indicatorId;
        activateChart();
      });
    });
  }

  function sectionHeader(index, title, description, body) {
    return `<div class="section-head indicator-section-head"><div><p class="eyebrow">${index} / MACRO</p><h3>${escape(title)}</h3></div><p>${escape(description)}</p></div><section class="report-section indicator-report-section">${body}</section>`;
  }

  function renderSummary() {
    const firstFed = data.fedWatch?.meetings?.[0];
    const top = topProbability(firstFed);
    return `<div class="indicator-summary">
      <div><small>경제 캘린더</small><strong>${data.calendar.events.length}개</strong><p>${escape(data.calendar.periodLabel)} · 중요도 ★★★</p></div>
      <div><small>시장 차트</small><strong>${data.marketCharts.length}개</strong><p>환율·코인·귀금속·원자재</p></div>
      <div><small>다음 FOMC</small><strong>${escape(top)}</strong><p>${escape(data.fedWatch.asOf)} 기준</p></div>
    </div>`;
  }

  function renderCalendar() {
    const calendar = data.calendar;
    return `<div class="calendar-shell">
      <div class="calendar-note">
        <span>${escape(calendar.periodLabel)} · ${escape(calendar.weekStart)} ~ ${escape(calendar.weekEnd)}</span>
        <p>${escape(calendar.note)}<br /><small>${escape(calendar.filter)}</small></p>
        <a href="${escapeAttr(calendar.sourceUrl)}" target="_blank" rel="noreferrer">${escape(calendar.source)} 원문 보기</a>
      </div>
      <div class="event-table-wrap">
        <table class="event-table">
          <thead><tr><th>날짜</th><th>국가</th><th>이벤트</th><th>중요도</th><th>Actual</th><th>Forecast</th><th>Previous</th><th>메모</th></tr></thead>
          <tbody>
            ${calendar.events.map((event) => `<tr>
              <td><strong>${escape(event.date)}</strong><br /><small>${escape(event.time)} KST</small></td>
              <td><span class="country-pill">${escape(event.country)}</span><br /><small>${escape(event.currency)}</small></td>
              <td><strong>${escape(event.event)}</strong></td>
              <td><span class="impact-stars">${escape(event.impact)}</span></td>
              <td>${escape(event.actual)}</td>
              <td>${escape(event.forecast)}</td>
              <td>${escape(event.previous)}</td>
              <td>${escape(event.memo)}</td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
  }

  function renderCharts() {
    const first = data.marketCharts.find((item) => item.id === selectedChartId) || data.marketCharts[0];
    return `<div class="security-chart-shell indicator-chart-shell">
      <div class="security-chart-copy">
        <strong>차트 표시 규칙</strong>
        <p>TradingView 임베드가 되는 심볼은 그대로 보여주고, 선물 연속물처럼 페이지 안에서 막히는 심볼은 저장 차트로 전환합니다. 그래서 공유 화면에 TradingView 전용 심볼 오류 문구가 남지 않습니다.</p>
      </div>
      <div class="security-chart-layout indicator-chart-layout">
        <div class="security-list indicator-list" role="group" aria-label="기타 지표 차트 선택">
          ${data.marketCharts.map((item) => `<button class="security-item indicator-item ${item.id === first.id ? "active" : ""}" data-indicator-id="${escapeAttr(item.id)}" aria-pressed="${item.id === first.id ? "true" : "false"}">
            <span><b>${escape(item.name)}</b><small>${escape(item.memo)}</small></span>
            <span class="security-item-side"><em>${escape(item.ticker)}</em><small class="chart-mode ${chartModeClass(item)}">${escape(chartModeLabel(item))}</small></span>
          </button>`).join("")}
        </div>
        <div class="security-chart-area">
          <div class="security-chart-meta indicator-chart-meta">
            <span>
              <strong data-indicator-name>${escape(first.name)}</strong>
              <small data-indicator-symbol>${escape(displaySymbol(first))}</small>
              <small class="chart-provider" data-indicator-provider>${escape(chartProviderLabel(first))}</small>
            </span>
            <div class="chart-link-row">
              <a data-indicator-link href="${tradingViewLink(first.symbol)}" target="_blank" rel="noreferrer">TradingView</a>
            </div>
          </div>
          <div class="market-chart-container" data-indicator-chart>
            <div class="chart-fallback">기타 지표 탭을 열면 차트가 로드됩니다.</div>
          </div>
        </div>
      </div>
      <p class="data-note">구리, WTI유, 천연가스는 현재 공유 페이지에서 TradingView 선물 연속물 임베드가 막히는 케이스라 저장 차트로 표시합니다. 원문 TradingView 링크는 보조 확인용입니다.</p>
    </div>`;
  }

  function renderFedWatch() {
    const fed = data.fedWatch;
    return `<div class="fedwatch-shell">
      <div class="fedwatch-note">
        <div>
          <small>현재 목표금리</small>
          <strong>${escape(fed.currentTarget)}</strong>
        </div>
        <p>${escape(fed.note)}</p>
        <div class="indicator-source-links compact">
          <a href="${escapeAttr(fed.sourceUrl)}" target="_blank" rel="noreferrer">Fed Rate Monitor</a>
          <a href="${escapeAttr(fed.cmeUrl)}" target="_blank" rel="noreferrer">CME FedWatch</a>
        </div>
      </div>
      <div class="fedwatch-grid">
        ${fed.meetings.map((meeting) => `<article class="fedwatch-card">
          <div class="fedwatch-card-head">
            <span>${escape(meeting.label)}</span>
            <strong>${escape(meeting.date)}</strong>
            <small>${escape(meeting.dominant)}</small>
          </div>
          <div class="probability-list">
            ${meeting.probabilities.map((row) => probabilityRow(row)).join("")}
          </div>
          <p>${escape(meeting.meetingTime)} · ${escape(fed.asOf)} 업데이트</p>
        </article>`).join("")}
      </div>
    </div>`;
  }

  function probabilityRow(row) {
    const width = Math.max(0, Math.min(100, Number(row.probability) || 0));
    return `<div class="probability-row">
      <span><b>${escape(row.range)}%</b><em>${Number(row.probability).toFixed(1)}%</em></span>
      <i class="probability-track"><strong style="width:${width}%"></strong></i>
      <small>전일 ${Number(row.previousDay).toFixed(1)}% · 전주 ${Number(row.previousWeek).toFixed(1)}%</small>
    </div>`;
  }

  function renderPolicy() {
    return `<ol class="source-policy indicator-policy">${data.sourcePolicy.map((text) => `<li>${escape(text)}</li>`).join("")}</ol>`;
  }

  function activateChart() {
    const item = data.marketCharts.find((entry) => entry.id === selectedChartId) || data.marketCharts[0];
    const container = root.querySelector("[data-indicator-chart]");
    if (!item || !container) return;

    root.querySelectorAll("[data-indicator-id]").forEach((button) => {
      const active = button.dataset.indicatorId === item.id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const name = root.querySelector("[data-indicator-name]");
    const symbol = root.querySelector("[data-indicator-symbol]");
    const provider = root.querySelector("[data-indicator-provider]");
    const link = root.querySelector("[data-indicator-link]");
    if (name) name.textContent = item.name;
    if (symbol) symbol.textContent = displaySymbol(item);
    if (provider) provider.textContent = chartProviderLabel(item);
    if (link) link.href = tradingViewLink(item.symbol);

    if (typeof renderMarketChart === "function") {
      renderMarketChart(container, {
        name: item.name,
        ticker: item.ticker,
        symbol: item.symbol,
        yahooSymbol: item.yahooSymbol || "",
        embed: item.embed !== false
      });
      chartHydrated = true;
      return;
    }

    container.dataset.chartType = "external";
    container.innerHTML = `<div class="external-chart-card">
      <span class="external-chart-icon">↗</span>
      <h4>${escape(item.name)}</h4>
      <p>차트 렌더러를 찾지 못했습니다. 아래 링크에서 원문 차트를 확인하세요.</p>
      <div class="external-chart-actions"><a href="${tradingViewLink(item.symbol)}" target="_blank" rel="noreferrer">TradingView에서 열기</a></div>
    </div>`;
  }

  function hydrateIfVisible() {
    if (chartHydrated || view.classList.contains("hidden")) return;
    activateChart();
  }

  function chartModeClass(item) {
    return item.embed === false ? "inline" : "tv";
  }

  function chartModeLabel(item) {
    return item.embed === false ? (item.provider || "저장 차트") : "TradingView";
  }

  function chartProviderLabel(item) {
    return item.embed === false ? (item.provider || "저장 차트") : "TradingView 차트";
  }

  function displaySymbol(item) {
    return item.embed === false && item.yahooSymbol ? `${item.yahooSymbol} · 원문 ${item.symbol}` : item.symbol;
  }

  function topProbability(meeting) {
    if (!meeting?.probabilities?.length) return "확률 대기";
    const top = [...meeting.probabilities].sort((a, b) => b.probability - a.probability)[0];
    return `${top.range}% ${Number(top.probability).toFixed(1)}%`;
  }

  function tradingViewLink(symbol) {
    return `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol || "")}`;
  }

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.view === "indicators") {
        window.setTimeout(hydrateIfVisible, 0);
      }
    });
  });

  render();
  hydrateIfVisible();
})();
