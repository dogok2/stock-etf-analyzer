(() => {
  const stocks = window.STOCK_ANALYSES || [];
  const list = document.querySelector("#stock-list");
  const report = document.querySelector("#stock-report");
  const search = document.querySelector("#stock-search");
  const marketButtons = document.querySelectorAll(".stock-market-filter");
  const allStockList = document.querySelector("#stock-all-list");
  const allStockToggle = document.querySelector("#stock-all-toggle");
  const stockListCount = document.querySelector("#stock-list-count");
  if (!list || !report || !search) return;

  const numberFormat = new Intl.NumberFormat("ko-KR");
  const routeParams = new URLSearchParams(window.location.search);
  const requestedStockId = routeParams.get("view") === "stock" ? routeParams.get("id") : null;
  const requestedStockDate = routeParams.get("view") === "stock" ? routeParams.get("date") : null;

  let selectedId = stocks.some((item) => item.id === requestedStockId) ? requestedStockId : stocks[0]?.id || null;
  let selectedDate = requestedStockDate || stocks.find((item) => item.id === selectedId)?.snapshots?.[0]?.researchDate || null;
  let selectedMarket = "all";
  let showAllStockIndex = false;

  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const escapeAttr = escape;
  const isFiniteNumber = (value) => value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
  const latest = (item) => [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate))[0];

  function renderList(query = "") {
    const needle = query.trim().toLowerCase();
    const filtered = stocks.filter((item) => {
      const matchesText = `${item.name} ${item.shortName || ""} ${item.id} ${item.category}`.toLowerCase().includes(needle);
      const matchesMarket = selectedMarket === "all" || item.listingMarket === selectedMarket;
      return matchesText && matchesMarket;
    }).sort((a, b) => {
      const dateOrder = latest(b).researchDate.localeCompare(latest(a).researchDate);
      return dateOrder || (a.shortName || a.name).localeCompare(b.shortName || b.name, "ko");
    });
    const visible = needle ? filtered : filtered.slice(0, 6);

    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">아직 등록되지 않은 주식입니다. 분석할 종목명과 티커를 알려주세요.</div>';
      report.innerHTML = "";
      renderAllStockIndex(filtered);
      return;
    }

    if (!filtered.some((item) => item.id === selectedId)) {
      selectedId = filtered[0].id;
      selectedDate = latest(filtered[0]).researchDate;
    }

    list.innerHTML = visible.map((item) => {
      const snapshot = latest(item);
      const quote = snapshot.quote;
      const scoreSummary = renderStockCardScores(snapshot);
      return `<button class="stock-card ${item.id === selectedId ? "active" : ""}" data-stock-id="${escapeAttr(item.id)}">
        <span class="card-kicker"><span>${escape(item.category)}</span><i class="card-dot"></i></span>
        <span class="card-meta-row">
          <span class="listing-badge stock ${escapeAttr(item.listingMarket || "")}">${escape(item.listingLabel)}</span>
          <small class="archive-count">분석 기록 ${item.snapshots.length}회</small>
          ${scoreSummary}
        </span>
        <h3>${escape(item.shortName || item.name)}</h3>
        <p>${escape(item.id)} · 최근 분석 ${snapshot.researchDate}</p>
        <span class="stock-card-quote">${quote ? `${escape(quote.priceLabel)} · ${escape(quote.changeLabel)}` : "가격 입력 대기"}</span>
      </button>`;
    }).join("");

    list.querySelectorAll("[data-stock-id]").forEach((button) => button.addEventListener("click", () => {
      selectedId = button.dataset.stockId;
      const item = stocks.find((entry) => entry.id === selectedId);
      selectedDate = latest(item).researchDate;
      renderList(search.value);
      renderReport(selectedId, selectedDate);
      window.DeepTickerRoute?.set("stock", selectedId, selectedDate);
      report.scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    renderAllStockIndex(filtered);
    renderReport(selectedId, selectedDate);
  }

  function renderAllStockIndex(filtered) {
    if (!allStockList || !allStockToggle || !stockListCount) return;

    stockListCount.textContent = `검색 가능한 주식 ${filtered.length}개 · 기본 화면은 최근 6개`;
    allStockToggle.textContent = showAllStockIndex ? "전체 분석 목록 닫기" : "전체 분석 목록 보기";
    allStockToggle.setAttribute("aria-expanded", String(showAllStockIndex));
    allStockList.classList.toggle("hidden", !showAllStockIndex);
    allStockList.innerHTML = filtered.length
      ? filtered.map((item) => {
        const snapshot = latest(item);
        const userScore = resolveWeightedScore(snapshot.userAssessment || {});
        const codexScore = resolveWeightedScore(snapshot.codexAssessment || {});
        return `<button class="analysis-index-row ${item.id === selectedId ? "active" : ""}" type="button" data-stock-index-id="${escapeAttr(item.id)}">
          <span><strong>${escape(item.shortName || item.name)}</strong><small>${escape(item.id)} · ${escape(item.category)}</small></span>
          <span><b>${escape(snapshot.researchDate)}</b><small>내 점수 ${scoreLabel(userScore)} · Codex ${scoreLabel(codexScore)}</small></span>
        </button>`;
      }).join("")
      : '<div class="analysis-index-empty">현재 검색 조건에 맞는 주식이 없습니다.</div>';

    allStockList.querySelectorAll("[data-stock-index-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedId = button.dataset.stockIndexId;
        const item = stocks.find((entry) => entry.id === selectedId);
        selectedDate = latest(item).researchDate;
        renderList(search.value);
        renderReport(selectedId, selectedDate);
        window.DeepTickerRoute?.set("stock", selectedId, selectedDate);
        report.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderReport(id, researchDate) {
    const item = stocks.find((entry) => entry.id === id);
    if (!item) return;

    const snapshots = [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate));
    const snapshot = snapshots.find((entry) => entry.researchDate === researchDate) || snapshots[0];
    selectedDate = snapshot.researchDate;

    const sections = [
      stockSection("01", "나의 평가와 Codex 평가", "사용자 점수는 8개 항목 가중평균, Codex 점수는 10개 항목 평균으로 분리해 보여주고, 보유 방식은 단기·중기·장기 중 추천 관점 하나로 남깁니다.", renderAssessments(snapshot)),
      stockSection("02", "주가 차트", "ETF 구성 종목 차트와 같은 방식으로, TradingView에서 표시 가능한 종목은 페이지 안에 바로 띄웁니다.", renderStockChart(snapshot.stockChart)),
      stockSection("03", "최근 5년 분기 실적", "매출과 영업이익 20개 분기를 한 흐름으로 보고, 확인 가능한 구간은 막대와 표로 함께 표시합니다.", renderQuarterly(snapshot.quarterlyPerformance)),
      stockSection("04", "Codex 전망 코멘트", "확인된 사실과 조건부 해석을 구분하고, 전망이 틀렸다고 판단할 조건까지 남깁니다.", renderOutlook(snapshot.outlook)),
      stockSection("05", "밸류에이션과 재무 점검", "업종에 맞는 배수, 재무 안정성, 주식 수 변화와 주주환원을 함께 봅니다.", renderValuation(snapshot.valuation)),
      stockSection("06", "촉매와 위험", "주가를 움직일 사건과 투자 가설을 훼손할 변수를 같은 무게로 기록합니다.", renderCatalysts(snapshot)),
      stockSection("07", "출처와 작성 원칙", "공유했을 때 사실·사용자 의견·Codex 의견의 경계가 흐려지지 않도록 합니다.", renderStockSources(snapshot))
    ];

    report.innerHTML = `<div class="history-strip stock-history">
      <div>
        <p class="eyebrow">STOCK RESEARCH ARCHIVE</p>
        <strong>분석 날짜별 기록</strong>
      </div>
      <div class="history-dates">
        ${snapshots.map((entry) => `<button class="stock-history-date history-date ${entry.researchDate === snapshot.researchDate ? "active" : ""}" data-stock-date="${escapeAttr(entry.researchDate)}"><b>${escape(entry.researchDate)}</b><small>${escape(entry.archiveNote)}</small></button>`).join("")}
      </div>
    </div>
    <header class="report-hero stock-report-hero ${escapeAttr(item.listingMarket || "")}-market">
      <div>
        <div class="report-badges">
          <span class="badge accent">${escape(item.listingLabel)}</span>
          ${(snapshot.tags || []).map((tag) => `<span class="badge">${escape(tag)}</span>`).join("")}
        </div>
        <h2>${escape(item.shortName || item.name)}</h2>
        <p class="official-name">${escape(item.name)}</p>
        <p class="report-thesis">${escape(snapshot.thesis)}</p>
      </div>
      ${renderStockQuote(snapshot.quote)}
    </header>
    <div class="report-body">
      <div class="stock-fact-grid fact-grid">${(snapshot.facts || []).map((fact) => `<div class="fact"><small>${escape(fact.label)}</small><strong>${escape(fact.value)}</strong></div>`).join("")}</div>
      ${sections.join("")}
    </div>`;

    report.querySelectorAll("[data-stock-date]").forEach((button) => {
      button.addEventListener("click", () => {
        renderReport(item.id, button.dataset.stockDate);
        window.DeepTickerRoute?.set("stock", item.id, button.dataset.stockDate);
      });
    });

    hydrateStockCharts();
  }

  function stockSection(index, title, description, body) {
    return `<div class="section-head stock-section-head"><div><p class="eyebrow">${index} / STOCK</p><h3>${escape(title)}</h3></div><p>${escape(description)}</p></div><section class="report-section stock-report-section">${body}</section>`;
  }

  function renderStockQuote(quote) {
    if (!quote) {
      return `<aside class="quote-panel stock-template-panel">
        <small>분석 상태</small>
        <strong>가격 입력 대기</strong>
        <p>실제 종목을 추가하면 검색 날짜 기준 가격과 거래량을 이곳에 고정합니다.</p>
      </aside>`;
    }

    const direction = quote.changeDirection || "flat";
    const extra = quote.extra || [];
    return `<aside class="quote-panel stock-quote-panel">
      <small>${escape(quote.source || "가격 출처")}</small>
      <strong class="quote-price">${escape(quote.priceLabel)}</strong>
      <span class="quote-change ${escapeAttr(direction)}">${escape(quote.changeLabel || "변동률 확인 중")}</span>
      <p>${escape(quote.dateLabel || "가격 기준일 확인 중")}</p>
      <div class="quote-meta">
        <span><small>거래량</small><strong>${escape(quote.volumeLabel || "-")}</strong></span>
        ${extra.map((item) => `<span><small>${escape(item.label)}</small><strong>${escape(item.value)}</strong></span>`).join("")}
      </div>
    </aside>`;
  }

  function renderAssessments(snapshot) {
    const user = snapshot.userAssessment || {};
    const codex = snapshot.codexAssessment || {};
    const userScore = resolveWeightedScore(user);
    const codexScore = resolveWeightedScore(codex);
    return `<div class="assessment-columns">
      <article class="assessment-panel user-assessment">
        <div class="assessment-title">
          <span>USER</span>
          <div><small>나의 최종점수</small><strong>${formatScore(userScore)}<i>/5</i></strong></div>
          <b>${escape(user.stance || "미입력")}</b>
        </div>
        <p>${escape(user.note || "")}</p>
        ${renderHoldingPlan(user.recommendations || user.recommendation, "내 추천 보유 방식")}
      </article>
      <article class="assessment-panel codex-assessment">
        <div class="assessment-title">
          <span>AI</span>
          <div><small>${escape(codex.author || "Codex 평가")}</small><strong>${formatScore(codexScore)}<i>/5</i></strong></div>
          <b>${escape(codex.stance || codex.confidence || "미평가")}</b>
        </div>
        <p>${escape(codex.note || "")}</p>
        ${renderHoldingPlan(codex.recommendation, "Codex 추천 보유 방식")}
        <div class="codex-metrics">${(codex.metrics || []).map((metric) => {
          const width = isFiniteNumber(metric.score) ? Math.max(0, Math.min(100, (Number(metric.score) / 5) * 100)) : 0;
          return `<div><span><strong>${escape(metric.label)}</strong><b>${isFiniteNumber(metric.score) ? `${Number(metric.score).toFixed(1)}점` : "미평가"}</b></span><i><em style="width:${width}%"></em></i><small>${escape(metric.note)}</small></div>`;
        }).join("")}</div>
      </article>
    </div>`;
  }

  function renderHoldingPlan(plan = {}, title) {
    const plans = Array.isArray(plan) ? plan : [plan];
    return `<div class="holding-plan-list">${plans.map((entry) => {
      const period = entry?.period || entry?.horizon || "미입력";
      const stance = entry?.stance || "미입력";
      const reason = entry?.reason || "보유 기간과 투자 의견을 함께 기록합니다.";
      return `<div class="holding-plan">
        <small>${escape(title)}</small>
        <strong>${escape(period)}</strong>
        <b>${escape(stance)}</b>
        <p>${escape(reason)}</p>
      </div>`;
    }).join("")}</div>`;
  }

  function renderStockCardScores(snapshot = {}) {
    const userScore = resolveWeightedScore(snapshot.userAssessment || {});
    const codexScore = resolveWeightedScore(snapshot.codexAssessment || {});
    return `<span class="stock-card-scores">
      <small class="stock-score-pill user">내 점수 ${scoreLabel(userScore)}</small>
      <small class="stock-score-pill codex">Codex ${scoreLabel(codexScore)}</small>
    </span>`;
  }

  function resolveWeightedScore(assessment = {}) {
    if (isFiniteNumber(assessment.total)) {
      return Number(assessment.total);
    }

    const items = assessment.scoreItems || assessment.criteria || assessment.metrics || [];
    if (!Array.isArray(items) || !items.length) {
      return null;
    }

    const usesCodexMetrics = !assessment.scoreItems && !assessment.criteria && Array.isArray(assessment.metrics);
    const defaultWeights = [1, 1, 1, 1, 1, 1, 2, 2];
    const usableItems = usesCodexMetrics ? items : items.slice(0, 8);
    const aggregate = usableItems.reduce(
      (acc, item, index) => {
        const score = typeof item === "number" ? item : item?.score;
        const weight = typeof item === "object" && isFiniteNumber(item.weight)
          ? Number(item.weight)
          : (usesCodexMetrics ? 1 : defaultWeights[index]);
        if (!isFiniteNumber(score) || !isFiniteNumber(weight)) {
          return acc;
        }
        acc.sum += Number(score) * Number(weight);
        acc.weight += Number(weight);
        return acc;
      },
      { sum: 0, weight: 0 }
    );

    return aggregate.weight ? aggregate.sum / aggregate.weight : null;
  }

  function renderHorizon(horizon = {}, title) {
    const rows = [
      ["단기", horizon.shortTerm],
      ["중기", horizon.midTerm],
      ["장기", horizon.longTerm]
    ];

    return `<div class="horizon-box">
      <small>${escape(title)}</small>
      <div class="horizon-grid">${rows.map(([label, value]) => `<span><em>${label}</em><strong>${escape(value || "미입력")}</strong></span>`).join("")}</div>
    </div>`;
  }

  function renderStockChart(chart) {
    if (!chart) {
      return `<div class="archive-warning"><strong>차트 연결 정보 없음</strong><p>종목 티커를 추가하면 TradingView 또는 자체 저장 차트로 연결합니다.</p></div>`;
    }

    return `<div class="security-chart-shell stock-price-chart"
      data-stock-price-chart
      data-name="${escapeAttr(chart.name || chart.ticker)}"
      data-ticker="${escapeAttr(chart.ticker)}"
      data-symbol="${escapeAttr(chart.symbol)}"
      data-yahoo="${escapeAttr(chart.yahooSymbol || "")}"
      data-embed="${chart.embed === true ? "true" : "false"}">
      <div class="security-chart-copy">
        <strong>${escape(chart.provider || "주가 차트")}</strong>
        <p>${escape(chart.note || "차트는 외부 위젯 또는 저장된 일봉 데이터로 표시합니다.")}</p>
      </div>
      <div class="security-chart-area">
        <div class="security-chart-meta">
          <span>
            <strong>${escape(chart.name || chart.ticker)}</strong>
            <small>${escape(chart.symbol || chart.ticker)}</small>
            <small class="chart-provider">${chart.embed === true ? "TradingView 실시간 차트" : "저장된 1년 일봉"}</small>
          </span>
          <div class="chart-link-row">
            <a href="${stockTradingViewLink(chart.symbol)}" target="_blank" rel="noreferrer">TradingView</a>
            ${chart.yahooSymbol ? `<a href="${stockYahooFinanceLink(chart.yahooSymbol)}" target="_blank" rel="noreferrer">Yahoo Finance</a>` : ""}
          </div>
        </div>
        <div class="market-chart-container" data-market-chart data-tv-symbol="${escapeAttr(chart.symbol)}">
          <div class="chart-fallback">차트를 준비하는 중입니다.</div>
        </div>
      </div>
    </div>`;
  }

  function hydrateStockCharts() {
    report.querySelectorAll("[data-stock-price-chart]").forEach((shell) => {
      const container = shell.querySelector("[data-market-chart]");
      const item = {
        name: shell.dataset.name,
        ticker: shell.dataset.ticker,
        symbol: shell.dataset.symbol,
        yahooSymbol: shell.dataset.yahoo,
        embed: shell.dataset.embed === "true"
      };

      if (typeof renderMarketChart === "function") {
        renderMarketChart(container, item);
        return;
      }

      container.dataset.chartType = "external";
      container.innerHTML = `<div class="external-chart-card">
        <span class="external-chart-icon">↗</span>
        <h4>${escape(item.name)}</h4>
        <p>차트 위젯을 불러오지 못했습니다. 아래 링크에서 보조 확인할 수 있습니다.</p>
        <div class="external-chart-actions">
          <a href="${stockTradingViewLink(item.symbol)}" target="_blank" rel="noreferrer">TradingView에서 열기</a>
          ${item.yahooSymbol ? `<a href="${stockYahooFinanceLink(item.yahooSymbol)}" target="_blank" rel="noreferrer">Yahoo Finance</a>` : ""}
        </div>
      </div>`;
    });
  }

  function renderQuarterly(performance) {
    if (!performance || !Array.isArray(performance.periods)) {
      return `<div class="archive-warning"><strong>분기 실적 데이터 없음</strong><p>매출과 영업이익 데이터를 추가하면 최근 5년 흐름을 표시합니다.</p></div>`;
    }

    const periods = performance.periods;
    const hasData = periods.some((period) => isFiniteNumber(period.revenue) || isFiniteNumber(period.operatingIncome));
    const maxRevenue = Math.max(...periods.filter((period) => isFiniteNumber(period.revenue)).map((period) => Math.abs(Number(period.revenue))), 1);
    const maxProfit = Math.max(...periods.filter((period) => isFiniteNumber(period.operatingIncome)).map((period) => Math.abs(Number(period.operatingIncome))), 1);
    const recentRows = periods.slice(-8);

    return `<div class="quarterly-shell">
      <div class="quarterly-meta">
        <span><small>범위</small><strong>${escape(performance.coverage || "최근 20개 분기")}</strong></span>
        <span><small>핵심 원자료</small><strong>매출 · 영업이익</strong></span>
        <span><small>자동 계산</small><strong>YoY · 영업이익률</strong></span>
      </div>
      <div class="quarterly-chart ${hasData ? "has-data" : "is-template"}">
        ${periods.map((period) => renderQuarterColumn(period, maxRevenue, maxProfit)).join("")}
      </div>
      <div class="quarterly-legend">
        <span><i class="revenue"></i>매출</span>
        <span><i class="profit"></i>영업이익</span>
        <span><i class="profit negative"></i>영업손실</span>
        <b>${escape(performance.asOf || "")}</b>
      </div>
      ${renderQuarterTable(recentRows, periods, performance)}
      <p class="data-note">${escape(performance.note)} · 단위: ${escape(performance.currency)} / ${escape(performance.unit)}</p>
    </div>`;
  }

  function renderQuarterColumn(period, maxRevenue, maxProfit) {
    const hasRevenue = isFiniteNumber(period.revenue);
    const hasProfit = isFiniteNumber(period.operatingIncome);
    const revenue = hasRevenue ? Number(period.revenue) : null;
    const profit = hasProfit ? Number(period.operatingIncome) : null;
    const revenueHeight = hasRevenue ? Math.max(8, Math.min(100, (Math.abs(revenue) / maxRevenue) * 100)) : 8;
    const profitHeight = hasProfit ? Math.max(8, Math.min(92, (Math.abs(profit) / maxProfit) * 92)) : 8;
    const title = `${period.quarter} · 매출 ${hasRevenue ? numberFormat.format(revenue) : "미기록"} · 영업이익 ${hasProfit ? numberFormat.format(profit) : "미기록"}`;

    return `<div class="quarter-column" title="${escapeAttr(title)}">
      <div class="quarter-bars">
        <i class="revenue ${hasRevenue ? "" : "missing"}" style="height:${revenueHeight}%"></i>
        <i class="profit ${hasProfit ? "" : "missing"} ${hasProfit && profit < 0 ? "negative" : ""}" style="height:${profitHeight}%"></i>
      </div>
      <small>${escape(period.quarter.replace("20", "'"))}</small>
    </div>`;
  }

  function renderQuarterTable(rows, allPeriods, performance) {
    return `<div class="quarterly-table-wrap">
      <table class="quarterly-table">
        <thead><tr><th>분기</th><th>매출</th><th>영업이익</th><th>영업이익률</th><th>매출 YoY</th></tr></thead>
        <tbody>
          ${rows.map((period) => {
            const index = allPeriods.indexOf(period);
            const previous = allPeriods[index - 4];
            return `<tr class="${period.note ? "needs-source" : ""}">
              <td>${escape(period.quarter)}</td>
              <td>${formatQuarterValue(period.revenue, performance)}</td>
              <td>${formatQuarterValue(period.operatingIncome, performance)}</td>
              <td>${formatMargin(period)}</td>
              <td>${formatYoY(period, previous)}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>`;
  }

  function renderOutlook(outlook) {
    return `<div class="outlook-shell">
      <div class="outlook-author"><span>${escape(outlook.author)}</span><div><small>${escape(outlook.status)}</small><strong>${escape(outlook.summary)}</strong></div></div>
      <div class="outlook-columns">
        <div class="outlook-list positive"><h4>긍정 근거</h4><ul>${outlook.positives.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div>
        <div class="outlook-list negative"><h4>부정 근거</h4><ul>${outlook.risks.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div>
        <div class="outlook-list watch"><h4>다음 확인</h4><ul>${outlook.watch.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div>
      </div>
      <div class="stock-scenarios">${outlook.scenarios.map((scenario) => `<div class="${escapeAttr(scenario.type)}"><span>${escape(scenario.label)}</span><strong>${escape(scenario.condition)}</strong><p>${escape(scenario.evidence)}</p></div>`).join("")}</div>
    </div>`;
  }

  function renderValuation(valuation) {
    return `<p class="valuation-note">${escape(valuation.note)}</p>
    <div class="valuation-layout">
      <div class="valuation-grid">${valuation.metrics.map((metric) => `<div><small>${escape(metric.label)}</small><strong>${escape(metric.value)}</strong><p>${escape(metric.context)}</p></div>`).join("")}</div>
      <div class="financial-checks"><h4>재무·주주환원</h4>${valuation.financialChecks.map((metric) => `<div><span>${escape(metric.label)}</span><strong>${escape(metric.value)}</strong></div>`).join("")}</div>
    </div>`;
  }

  function renderCatalysts(snapshot) {
    return `<div class="analysis-columns">
      <div class="analysis-box opportunity"><h4>주가 촉매</h4><ul>${snapshot.catalysts.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div>
      <div class="analysis-box risk"><h4>핵심 위험</h4><ul>${snapshot.risks.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div>
    </div>`;
  }

  function renderStockSources(snapshot) {
    const sources = snapshot.sources?.length
      ? `<div class="source-list">${snapshot.sources.map((source) => `<a class="source-link" href="${escapeAttr(source.url)}" target="_blank" rel="noreferrer"><span><strong>${escape(source.label)}</strong><small>${escape(source.detail)}</small></span><b>↗</b></a>`).join("")}</div>`
      : '<div class="archive-warning"><strong>실제 종목 출처 대기</strong><p>종목을 추가하면 회사 IR, 거래소 공시, 사업보고서와 산업 원문이 이곳에 연결됩니다.</p></div>';

    return `${sources}<ol class="source-policy">${(snapshot.sourcePolicy || []).map((text) => `<li>${escape(text)}</li>`).join("")}</ol>`;
  }

  function formatScore(value) {
    return isFiniteNumber(value) ? Number(value).toFixed(1) : "—";
  }

  function scoreLabel(value) {
    return isFiniteNumber(value) ? `${Number(value).toFixed(1)}/5` : "미입력";
  }

  function formatQuarterValue(value) {
    if (!isFiniteNumber(value)) return "—";
    return numberFormat.format(Number(value));
  }

  function formatMargin(period) {
    if (!isFiniteNumber(period.revenue) || !isFiniteNumber(period.operatingIncome)) return "—";
    const revenue = Number(period.revenue);
    const profit = Number(period.operatingIncome);
    if (revenue === 0) return "—";
    return `${((profit / revenue) * 100).toFixed(1)}%`;
  }

  function formatYoY(period, previous) {
    if (!isFiniteNumber(period.revenue) || !isFiniteNumber(previous?.revenue)) return "—";
    const revenue = Number(period.revenue);
    const previousRevenue = Number(previous.revenue);
    if (previousRevenue === 0) return "—";
    const value = ((revenue - previousRevenue) / Math.abs(previousRevenue)) * 100;
    return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
  }

  function stockTradingViewLink(symbol) {
    return `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol || "")}`;
  }

  function stockYahooFinanceLink(symbol) {
    return symbol ? `https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}/chart/` : "#";
  }

  search.addEventListener("input", (event) => renderList(event.target.value));
  allStockToggle?.addEventListener("click", () => {
    showAllStockIndex = !showAllStockIndex;
    renderList(search.value);
  });
  marketButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedMarket = button.dataset.stockMarket || "all";
      marketButtons.forEach((entry) => entry.classList.toggle("active", entry === button));
      renderList(search.value);
    });
  });
  renderList();
})();
