(() => {
  const stocks = window.STOCK_ANALYSES || [];
  const list = document.querySelector("#stock-list");
  const report = document.querySelector("#stock-report");
  const search = document.querySelector("#stock-search");
  if (!list || !report || !search) return;

  let selectedId = stocks[0]?.id || null;
  let selectedDate = stocks[0]?.snapshots?.[0]?.researchDate || null;

  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const latest = (item) => [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate))[0];

  function renderList(query = "") {
    const needle = query.trim().toLowerCase();
    const filtered = stocks.filter((item) => `${item.name} ${item.shortName || ""} ${item.id} ${item.category}`.toLowerCase().includes(needle));
    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">아직 등록되지 않은 주식입니다. 분석할 종목명과 티커를 알려주세요.</div>';
      report.innerHTML = "";
      return;
    }
    if (!filtered.some((item) => item.id === selectedId)) {
      selectedId = filtered[0].id;
      selectedDate = latest(filtered[0]).researchDate;
    }
    list.innerHTML = filtered.map((item) => {
      const snapshot = latest(item);
      return `<button class="stock-card ${item.id === selectedId ? "active" : ""}" data-stock-id="${escape(item.id)}">
        <span class="card-kicker"><span>${escape(item.category)}</span><i class="card-dot"></i></span>
        <span class="card-meta-row"><span class="listing-badge stock">${escape(item.listingLabel)}</span><small class="archive-count">분석 기록 ${item.snapshots.length}회</small></span>
        <h3>${escape(item.shortName || item.name)}</h3><p>${escape(item.id)} · 최근 분석 ${snapshot.researchDate}</p>
      </button>`;
    }).join("");

    list.querySelectorAll("[data-stock-id]").forEach((button) => button.addEventListener("click", () => {
      selectedId = button.dataset.stockId;
      const item = stocks.find((entry) => entry.id === selectedId);
      selectedDate = latest(item).researchDate;
      renderList(search.value);
      renderReport(selectedId, selectedDate);
      report.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    renderReport(selectedId, selectedDate);
  }

  function renderReport(id, researchDate) {
    const item = stocks.find((entry) => entry.id === id);
    if (!item) return;
    const snapshots = [...item.snapshots].sort((a, b) => b.researchDate.localeCompare(a.researchDate));
    const snapshot = snapshots.find((entry) => entry.researchDate === researchDate) || snapshots[0];
    selectedDate = snapshot.researchDate;

    const sections = [
      stockSection("01", "두 평가를 분리해서 기록", "사용자의 판단은 사용자 원문으로, Codex 판단은 근거와 신뢰도를 붙여 별도로 보존합니다.", renderAssessments(snapshot)),
      stockSection("02", "최근 5년 분기 실적", "매출과 영업이익 20개 분기를 한 흐름으로 보고 성장률과 영업이익률을 자동 계산합니다.", renderQuarterly(snapshot.quarterlyPerformance)),
      stockSection("03", "Codex 전망 코멘트", "확인된 사실과 조건부 해석을 구분하고, 전망이 틀렸다고 판단할 조건까지 남깁니다.", renderOutlook(snapshot.outlook)),
      stockSection("04", "밸류에이션과 재무 점검", "업종에 맞는 배수, 재무 안정성, 주식 수 변화와 주주환원을 함께 봅니다.", renderValuation(snapshot.valuation)),
      stockSection("05", "촉매와 위험", "주가를 움직일 사건과 투자 가설을 훼손할 변수를 같은 무게로 기록합니다.", renderCatalysts(snapshot)),
      stockSection("06", "출처와 작성 원칙", "공유했을 때 사실·사용자 의견·Codex 의견의 경계가 흐려지지 않도록 합니다.", renderStockSources(snapshot))
    ];

    report.innerHTML = `<div class="history-strip stock-history">
      <div><p class="eyebrow">STOCK RESEARCH ARCHIVE</p><strong>분석 날짜별 기록</strong><small>새 분석을 추가해도 당시 평가와 전망을 그대로 보존합니다.</small></div>
      <div class="history-dates">${snapshots.map((entry) => `<button class="stock-history-date history-date ${entry.researchDate === snapshot.researchDate ? "active" : ""}" data-stock-date="${entry.researchDate}"><b>${entry.researchDate}</b><small>${escape(entry.archiveNote)}</small></button>`).join("")}</div>
    </div>
    <header class="report-hero stock-report-hero"><div>
      <div class="report-badges"><span class="badge accent">${escape(item.listingLabel)}</span>${snapshot.tags.map((tag) => `<span class="badge">${escape(tag)}</span>`).join("")}</div>
      <h2>${escape(item.shortName || item.name)}</h2><p class="official-name">${escape(item.name)}</p><p class="report-thesis">${escape(snapshot.thesis)}</p>
    </div><aside class="quote-panel stock-template-panel"><small>분석 상태</small><strong>종목 입력 대기</strong><p>첫 종목을 알려주면 실제 숫자와 출처로 교체됩니다.</p></aside></header>
    <div class="report-body"><div class="stock-fact-grid fact-grid">${snapshot.facts.map((fact) => `<div class="fact"><small>${escape(fact.label)}</small><strong>${escape(fact.value)}</strong></div>`).join("")}</div>${sections.join("")}</div>`;

    report.querySelectorAll("[data-stock-date]").forEach((button) => button.addEventListener("click", () => renderReport(item.id, button.dataset.stockDate)));
  }

  function stockSection(index, title, description, body) {
    return `<div class="section-head stock-section-head"><div><p class="eyebrow">${index} / STOCK</p><h3>${title}</h3></div><p>${description}</p></div><section class="report-section stock-report-section">${body}</section>`;
  }

  function renderAssessments(snapshot) {
    const user = snapshot.userAssessment;
    const codex = snapshot.codexAssessment;
    return `<div class="assessment-columns">
      <article class="assessment-panel user-assessment"><div class="assessment-title"><span>USER</span><div><small>나의 평가</small><strong>${user.total == null ? "—" : user.total}<i>/100</i></strong></div><b>${escape(user.stance)}</b></div><p>${escape(user.note)}</p>
        <div class="user-fields">${user.fields.map((field) => `<div><small>${escape(field.label)}</small><strong>${escape(field.value)}</strong></div>`).join("")}</div>
      </article>
      <article class="assessment-panel codex-assessment"><div class="assessment-title"><span>AI</span><div><small>${escape(codex.author)}</small><strong>${codex.total == null ? "—" : codex.total}<i>/100</i></strong></div><b>${escape(codex.confidence)}</b></div><p>${escape(codex.note)}</p>
        <div class="codex-metrics">${codex.metrics.map((metric) => `<div><span><strong>${escape(metric.label)}</strong><b>${metric.score == null ? "미평가" : metric.score}</b></span><i><em style="width:${metric.score == null ? 0 : metric.score}%"></em></i><small>${escape(metric.note)}</small></div>`).join("")}</div>
      </article>
    </div>`;
  }

  function renderQuarterly(performance) {
    const hasData = performance.periods.some((period) => Number.isFinite(period.revenue) || Number.isFinite(period.operatingIncome));
    return `<div class="quarterly-shell"><div class="quarterly-meta"><span><small>범위</small><strong>최근 20개 분기</strong></span><span><small>핵심 원자료</small><strong>매출 · 영업이익</strong></span><span><small>자동 계산</small><strong>YoY · 영업이익률</strong></span></div>
      <div class="quarterly-chart ${hasData ? "has-data" : "is-template"}">${performance.periods.map((period) => `<div class="quarter-column"><div class="quarter-bars"><i class="revenue" style="height:${hasData && period.revenue ? "70%" : "18%"}"></i><i class="profit" style="height:${hasData && period.operatingIncome ? "45%" : "8%"}"></i></div><small>${escape(period.quarter.replace("20", "'"))}</small></div>`).join("")}</div>
      <div class="quarterly-legend"><span><i class="revenue"></i>매출</span><span><i class="profit"></i>영업이익</span><b>${hasData ? escape(performance.asOf) : "종목을 추가하면 실제 분기 막대로 교체"}</b></div><p class="data-note">${escape(performance.note)} · 단위: ${escape(performance.currency)} / ${escape(performance.unit)}</p></div>`;
  }

  function renderOutlook(outlook) {
    return `<div class="outlook-shell"><div class="outlook-author"><span>${escape(outlook.author)}</span><div><small>${escape(outlook.status)}</small><strong>${escape(outlook.summary)}</strong></div></div>
      <div class="outlook-columns"><div class="outlook-list positive"><h4>긍정 근거</h4><ul>${outlook.positives.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div><div class="outlook-list negative"><h4>부정 근거</h4><ul>${outlook.risks.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div><div class="outlook-list watch"><h4>다음 확인</h4><ul>${outlook.watch.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div></div>
      <div class="stock-scenarios">${outlook.scenarios.map((scenario) => `<div class="${scenario.type}"><span>${escape(scenario.label)}</span><strong>${escape(scenario.condition)}</strong><p>${escape(scenario.evidence)}</p></div>`).join("")}</div></div>`;
  }

  function renderValuation(valuation) {
    return `<p class="valuation-note">${escape(valuation.note)}</p><div class="valuation-layout"><div class="valuation-grid">${valuation.metrics.map((metric) => `<div><small>${escape(metric.label)}</small><strong>${escape(metric.value)}</strong><p>${escape(metric.context)}</p></div>`).join("")}</div><div class="financial-checks"><h4>재무·주주환원</h4>${valuation.financialChecks.map((metric) => `<div><span>${escape(metric.label)}</span><strong>${escape(metric.value)}</strong></div>`).join("")}</div></div>`;
  }

  function renderCatalysts(snapshot) {
    return `<div class="analysis-columns"><div class="analysis-box opportunity"><h4>주가 촉매</h4><ul>${snapshot.catalysts.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div><div class="analysis-box risk"><h4>핵심 위험</h4><ul>${snapshot.risks.map((text) => `<li>${escape(text)}</li>`).join("")}</ul></div></div>`;
  }

  function renderStockSources(snapshot) {
    const sources = snapshot.sources.length ? `<div class="source-list">${snapshot.sources.map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer"><span><strong>${escape(source.label)}</strong><small>${escape(source.detail)}</small></span><b>↗</b></a>`).join("")}</div>` : '<div class="archive-warning"><strong>실제 종목 출처 대기</strong><p>종목을 추가하면 회사 IR, 거래소 공시, 사업보고서와 산업 원문이 이곳에 연결됩니다.</p></div>';
    return `${sources}<ol class="source-policy">${snapshot.sourcePolicy.map((text) => `<li>${escape(text)}</li>`).join("")}</ol>`;
  }

  search.addEventListener("input", (event) => renderList(event.target.value));
  renderList();
})();
