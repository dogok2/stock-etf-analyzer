const analyses = window.ETF_ANALYSES || [];
const listElement = document.querySelector("#etf-list");
const reportElement = document.querySelector("#etf-report");
const searchElement = document.querySelector("#etf-search");
const numberFormat = new Intl.NumberFormat("ko-KR");

let selectedId = analyses[0]?.id || null;

function renderList(query = "") {
  const needle = query.trim().toLowerCase();
  const filtered = analyses.filter((item) =>
    `${item.name} ${item.id} ${item.category}`.toLowerCase().includes(needle)
  );

  if (!filtered.length) {
    listElement.innerHTML = '<div class="empty-state">아직 등록되지 않은 ETF입니다. 분석할 이름을 알려주세요.</div>';
    return;
  }

  listElement.innerHTML = filtered
    .map(
      (item) => `
        <button class="etf-card ${item.id === selectedId ? "active" : ""}" data-id="${item.id}">
          <span class="card-kicker"><span>${item.category}</span><i class="card-dot"></i></span>
          <h3>${item.name}</h3>
          <p>${item.id} · 업데이트 ${item.updatedAt}</p>
        </button>`
    )
    .join("");

  listElement.querySelectorAll(".etf-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      renderList(searchElement.value);
      renderReport(selectedId);
      reportElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderReport(id) {
  const item = analyses.find((analysis) => analysis.id === id);
  if (!item) {
    reportElement.innerHTML = "";
    return;
  }

  const topTenWeight = item.holdings.reduce((sum, holding) => sum + holding.weight, 0);
  const quoteDirection = item.quote.changePct >= 0 ? "up" : "down";
  const quoteSign = item.quote.changePct > 0 ? "+" : "";

  reportElement.innerHTML = `
    <header class="report-hero">
      <div>
        <div class="report-badges">
          <span class="badge accent">상세 분석</span>
          ${item.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <h2>${item.name}</h2>
        <p class="report-thesis">${item.thesis}</p>
      </div>
      <aside class="quote-panel">
        <small>${item.quote.date} 종가</small>
        <strong class="quote-price">${numberFormat.format(item.quote.price)}원</strong>
        <span class="quote-change ${quoteDirection}">${quoteSign}${item.quote.changePct.toFixed(2)}%</span>
        <div class="quote-meta">
          <span><small>iNAV</small><strong>${numberFormat.format(item.quote.nav)}원</strong></span>
          <span><small>거래량</small><strong>${numberFormat.format(item.quote.volume)}주</strong></span>
        </div>
      </aside>
    </header>

    <div class="report-body">
      ${sectionHeader("01", "상품의 정체", "먼저 무엇을 사고 있는 ETF인지 구조부터 확인합니다.")}
      <section class="report-section">
        <div class="fact-grid">
          ${item.facts.map((fact) => `<div class="fact"><small>${fact.label}</small><strong>${fact.value}</strong></div>`).join("")}
        </div>
      </section>

      ${sectionHeader("02", "분석 레이더", "5점 만점의 상대적 관찰 점수입니다. 수익률 예측이나 매수 등급이 아닙니다.")}
      <section class="report-section">
        <div class="score-grid">
          ${item.scores.map((score) => `
            <div class="score-card">
              <small>${score.label}</small><strong>${score.score.toFixed(1)}</strong>
              <div class="meter"><i style="width:${score.score * 20}%"></i></div>
              <p>${score.note}</p>
            </div>`).join("")}
        </div>
      </section>

      ${sectionHeader("03", "지수는 어떻게 고르나", item.indexMethod.summary)}
      <section class="report-section">
        <ol class="check-list">
          ${item.indexMethod.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ol>
      </section>

      ${sectionHeader("04", "어디에 투자하나", `기초지수 상위 구성 종목 · ${item.holdingsAsOf} 기준`)}
      <section class="report-section">
        <div class="holdings-layout">
          <div>
            ${item.holdings.map((holding) => `
              <div class="holding-row">
                <b>${holding.name}<small>${holding.role}</small></b>
                <div class="bar-track"><i style="width:${Math.min(100, holding.weight * 10)}%"></i></div>
                <span>${holding.weight.toFixed(2)}%</span>
              </div>`).join("")}
          </div>
          <aside class="concentration-card">
            <small>상위 10종목 집중도</small>
            <strong>${topTenWeight.toFixed(1)}%</strong>
            <p>${item.concentrationNote}</p>
          </aside>
        </div>
      </section>

      ${sectionHeader("05", "성과와 흔들림", `${item.indexPerformance.asOf} 기준. ${item.indexPerformance.note}`)}
      <section class="report-section">
        <div class="performance-grid">
          ${item.indexPerformance.periods.map((period) => `
            <div class="return-card"><small>${period.label}</small><span class="${period.value < 0 ? "negative" : ""}">${period.value > 0 ? "+" : ""}${period.value.toFixed(2)}%</span></div>`).join("")}
        </div>
        <p class="data-note">${item.indexPerformance.stats.join(" · ")}</p>
      </section>

      ${sectionHeader("06", "기회와 위험", "좋은 이야기와 불편한 이야기를 같은 화면에 둡니다.")}
      <section class="report-section">
        <div class="analysis-columns">
          <div class="analysis-box opportunity"><h4>상승 동력</h4><ul>${item.opportunities.map((text) => `<li>${text}</li>`).join("")}</ul></div>
          <div class="analysis-box risk"><h4>핵심 위험</h4><ul>${item.risks.map((text) => `<li>${text}</li>`).join("")}</ul></div>
        </div>
      </section>

      ${sectionHeader("07", "세 가지 경로", "가격 목표가 아닌, 투자 가설이 어떻게 달라질 수 있는지 보는 시나리오입니다.")}
      <section class="report-section">
        <div class="table-wrap">
          <table class="scenario-table">
            <thead><tr><th>경로</th><th>조건</th><th>계속 볼 지표</th></tr></thead>
            <tbody>${item.scenarios.map((scenario) => `
              <tr><td><span class="scenario-tag ${scenario.type}">${scenario.label}</span></td><td>${scenario.condition}</td><td>${scenario.watch}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>

      ${sectionHeader("08", "매수 전에 확인할 것", "테마의 매력보다 먼저 거래 조건과 감당 가능한 위험을 점검합니다.")}
      <section class="report-section">
        <ol class="check-list">${item.checklist.map((text) => `<li>${text}</li>`).join("")}</ol>
        <p class="data-note"><strong>과세 메모:</strong> ${item.taxNote}</p>
      </section>

      ${sectionHeader("09", "원문 출처", `리포트 업데이트 ${item.updatedAt} · 숫자마다 기준일이 다를 수 있습니다.`)}
      <section class="report-section">
        <div class="source-list">
          ${item.sources.map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer"><span><strong>${source.label}</strong><small>${source.detail}</small></span><b>↗</b></a>`).join("")}
        </div>
        <p class="data-note">구성 종목의 사업 구분은 이해를 돕기 위한 분석용 요약입니다. ETF 실제 보유 내역은 운용사 PDF, 지수 구성은 Solactive 최신 자료를 우선하세요.</p>
      </section>
    </div>`;
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

searchElement.addEventListener("input", (event) => renderList(event.target.value));
renderList();
renderReport(selectedId);
