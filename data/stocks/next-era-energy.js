const NEE_QUARTERS = [
  { quarter: "2021 Q2", revenue: 3927, operatingIncome: 510 },
  { quarter: "2021 Q3", revenue: 4370, operatingIncome: 379 },
  { quarter: "2021 Q4", revenue: 5046, operatingIncome: 1355 },
  { quarter: "2022 Q1", revenue: 2890, operatingIncome: -775 },
  { quarter: "2022 Q2", revenue: 5183, operatingIncome: 948 },
  { quarter: "2022 Q3", revenue: 6719, operatingIncome: 1862 },
  { quarter: "2022 Q4", revenue: 6164, operatingIncome: 2046 },
  { quarter: "2023 Q1", revenue: 6716, operatingIncome: 2942 },
  { quarter: "2023 Q2", revenue: 7349, operatingIncome: 2799 },
  { quarter: "2023 Q3", revenue: 7172, operatingIncome: 1836 },
  { quarter: "2023 Q4", revenue: 6877, operatingIncome: 2660 },
  { quarter: "2024 Q1", revenue: 5731, operatingIncome: 2013 },
  { quarter: "2024 Q2", revenue: 6069, operatingIncome: 1670 },
  { quarter: "2024 Q3", revenue: 7567, operatingIncome: 2856 },
  { quarter: "2024 Q4", revenue: 5386, operatingIncome: 940 },
  { quarter: "2025 Q1", revenue: 6247, operatingIncome: 2256 },
  { quarter: "2025 Q2", revenue: 6700, operatingIncome: 1911 },
  { quarter: "2025 Q3", revenue: 7966, operatingIncome: 2527 },
  { quarter: "2025 Q4", revenue: 6499, operatingIncome: 1586 },
  { quarter: "2026 Q1", revenue: 6701, operatingIncome: 2208 }
];

const NEE_20260712 = {
  researchDate: "2026-07-12",
  archiveNote: "NextEra Energy 첫 분석",
  status: "active",
  tags: ["전력·유틸리티", "재생에너지", "데이터센터 전력", "Dominion 합병 예정"],
  thesis:
    "NextEra Energy는 플로리다의 규제 유틸리티 FPL과 미국 최대급 재생에너지·배터리·전력 인프라 개발사 NEER를 함께 보유한 복합 성장 유틸리티입니다. 2026년 1분기 조정 EPS 성장과 33GW 백로그는 장기 성장의 근거지만, 약 978억달러의 장기부채와 대규모 투자, Dominion Energy 합병 승인·통합 리스크를 감안하면 현재 가격에서는 성장성과 재무 부담을 동시에 봐야 합니다.",
  quote: {
    source: "Investing.com 역사적 시세",
    priceLabel: "$87.96",
    changeLabel: "+0.99%",
    changeDirection: "up",
    dateLabel: "2026-07-10 미국장 종가",
    volumeLabel: "11.22M주",
    extra: [
      { label: "당일 범위", value: "$87.07 ~ $87.97" },
      { label: "52주 범위", value: "$69.24 ~ $98.75" }
    ]
  },
  facts: [
    { label: "티커 / 시장", value: "NEE · NYSE" },
    { label: "가격 기준", value: "$87.96 · 2026-07-10 종가" },
    { label: "2026 Q1 실적", value: "매출 $6.70B · 영업이익 $2.21B" },
    { label: "조정 EPS 가이던스", value: "2026년 $3.92~$4.02" },
    { label: "핵심 사업", value: "FPL 규제 유틸리티 · NEER 에너지 인프라" },
    { label: "분기 배당", value: "$0.6232 · 전년 대비 10% 인상" }
  ],
  stockChart: {
    name: "NextEra Energy",
    ticker: "NEE",
    symbol: "NYSE:NEE",
    yahooSymbol: "NEE",
    embed: false,
    provider: "저장된 최근 50거래일 차트",
    note: "공유 페이지 안의 TradingView 임베드가 직접 검증되기 전까지, 같은 페이지에서 바로 볼 수 있는 저장 일봉 차트를 표시합니다."
  },
  userAssessment: {
    total: 2.8,
    stance: "기간별 의견",
    status: "사용자 평가 입력",
    recommendations: [
      { period: "단기", stance: "매도", reason: "81달러까지 떨어질 가능성을 높게 보고 단기적으로는 매도 관점입니다." },
      { period: "중기", stance: "매수", reason: "81달러 부근에서 유지된다면 강한 상승 흐름과 이전 고점 돌파, 120달러 가능성을 봅니다." }
    ],
    note: "81까지 떨어질 가능성 농후. 이 부근에서 유지된다면 강력한 상승 흐름이 예상되며, 이전 고점 이상을 넘어 120도 충분히 노려볼 만하다.",
    scoreItems: [
      { label: "1번 항목", score: 4, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 2, weight: 1 },
      { label: "4번 항목", score: 3, weight: 1 },
      { label: "5번 항목", score: 1, weight: 1 },
      { label: "6번 항목", score: 1, weight: 1 },
      { label: "7번 항목", score: 4, weight: 2 },
      { label: "8번 항목", score: 3, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 3.4,
    stance: "중립",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "중립",
      reason: "조정 EPS 성장과 전력 수요의 가시성은 좋지만, 현재 약 22배의 2026년 조정 EPS 배수와 높은 부채, Dominion 합병 승인·통합 위험을 함께 반영했습니다."
    },
    note:
      "FPL의 규제자산 성장과 NEER의 장기계약 백로그는 미국 전력 수요 확대를 흡수할 강점입니다. 다만 대규모 투자와 자본시장 의존도가 높고 Dominion 합병이라는 큰 변수가 추가돼, 현재 가격에서는 성장 프리미엄을 더 지불하기보다 실행을 확인하는 중립 판단이 적절하다고 봅니다.",
    metrics: [
      { label: "성장성", score: 4.3, note: "2026년 조정 EPS 가이던스와 2032년까지 연 8% 이상 성장 목표, 33GW 백로그가 성장 가시성을 높입니다." },
      { label: "수익성", score: 3.7, note: "FPL의 규제 수익 기반은 안정적이지만 헤지·자산 처분에 따라 GAAP 영업이익 변동성이 큽니다." },
      { label: "현금흐름 질", score: 2.3, note: "2026 Q1 영업현금흐름 $2.61B보다 투자액 $11.06B가 훨씬 커 외부 조달이 필수입니다." },
      { label: "재무 안정성", score: 2.3, note: "현금 $2.0B 대비 장기부채가 약 $97.8B이며 금리와 신용등급 유지가 중요한 자본집약 구조입니다." },
      { label: "밸류 부담", score: 2.6, note: "$87.96은 2026년 조정 EPS 가이던스 기준 약 21.9~22.4배로 전통 유틸리티보다 성장 프리미엄이 큽니다." },
      { label: "경쟁우위", score: 4.6, note: "FPL의 규모와 규제 기반, NEER의 개발·조달·운영 역량과 대규모 백로그가 강한 진입장벽입니다." },
      { label: "실적 가시성", score: 4.4, note: "규제 유틸리티와 장기계약 발전 자산 비중이 높고 회사의 장기 EPS 성장 목표가 구체적입니다." },
      { label: "자본배분", score: 3.2, note: "배당 성장과 대규모 투자 기회는 긍정적이나 합병·설비투자·차입을 동시에 관리해야 합니다." },
      { label: "촉매/모멘텀", score: 3.8, note: "Dominion 합병, 데이터센터 전력 수요, 9.5GW 가스발전 프로젝트와 재생에너지 백로그가 촉매입니다." },
      { label: "리스크 관리", score: 2.8, note: "규제 승인, 금리, 허리케인, 정책·세액공제, 건설비와 합병 통합 위험이 동시에 존재합니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "USD",
    unit: "백만 달러",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "SEC companyfacts · 2026 Q1 10-Q 기준",
    note: "SEC XBRL의 RegulatedAndUnregulatedOperatingRevenue와 OperatingIncomeLoss를 사용했습니다. 4분기는 연간 값에서 1~3분기 값을 차감해 계산했으며, 파생상품과 자산 처분 영향 때문에 GAAP 영업이익 변동성이 큽니다.",
    periods: NEE_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 FPL의 규제자산 성장과 NEER의 백로그 실행이 조정 EPS를 연 8% 안팎으로 키우는 흐름입니다. Dominion 합병이 승인되면 성장 경로가 더 넓어질 수 있지만, 승인 지연·통합비용·자본조달 부담이 주가 프리미엄을 제한할 수 있습니다.",
    positives: [
      "FPL은 2026 Q1 규제자본이 전년 대비 약 8.8% 증가했고 플로리다 고객도 약 10만 명 늘었습니다.",
      "NEER는 2026 Q1에 재생에너지·저장장치 4GW를 신규 수주해 백로그가 약 33GW로 확대됐습니다.",
      "회사는 2026년 조정 EPS $3.92~$4.02와 2032년까지 연 8% 이상 성장 목표를 유지했습니다.",
      "분기배당은 $0.6232로 전년 동기 대비 10% 증가해 배당 성장 기록을 이어갔습니다."
    ],
    risks: [
      "2026 Q1 장기부채는 유동분 포함 약 $97.8B로 금리와 자본시장 접근성이 수익성에 직접 영향을 줍니다.",
      "같은 기간 투자액 $11.06B가 영업현금흐름 $2.61B를 크게 웃돌아 지속적인 외부 조달이 필요합니다.",
      "Dominion 합병은 주주·연방·원자력·주 규제기관 승인이 필요하며 종결까지 12~18개월을 예상합니다.",
      "허리케인, 공사비 상승, 세액공제·에너지정책 변화와 전력요금 규제가 프로젝트 수익률을 흔들 수 있습니다."
    ],
    watch: [
      "Dominion 합병 S-4·주주투표·FERC·NRC와 주 규제기관 승인 일정",
      "FPL 규제자본 성장률과 고객 증가, 전력 판매량",
      "NEER 33GW 백로그의 착공·상업운전 전환 속도",
      "장기금리, 신규 차입비용과 신용등급",
      "2026년 조정 EPS $3.92~$4.02 달성 여부"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "합병 승인이 순조롭고 대형 전력 수요·백로그가 계획대로 실적으로 전환", evidence: "조정 EPS 8~9%대 성장, 규제자본 두 자릿수 성장, 차입비용 안정" },
      { type: "base", label: "기본", condition: "FPL과 NEER가 기존 성장 목표를 달성하되 합병 불확실성과 높은 금리가 프리미엄을 제한", evidence: "조정 EPS 가이던스 달성, 백로그 유지, 배당 6% 성장 경로" },
      { type: "bear", label: "하방", condition: "합병 승인 지연·무산, 공사비와 금리 상승, 규제 회수 지연이 동시에 발생", evidence: "신용지표 약화, 추가 자본조달, 가이던스 하향, 백로그 취소" }
    ]
  },
  valuation: {
    note: "$87.96을 2026년 조정 EPS 가이던스 $3.92~$4.02에 적용하면 약 21.9~22.4배입니다. 배당수익률은 현재 분기배당을 연환산해 약 2.83%로 계산됩니다. 성장형 유틸리티 프리미엄은 인정되지만 부채와 합병 변수를 감안하면 넉넉한 안전마진으로 보기는 어렵습니다.",
    metrics: [
      { label: "2026E 조정 PER", value: "약 21.9~22.4배", context: "$87.96 ÷ 조정 EPS $4.02~$3.92 단순 계산" },
      { label: "연환산 배당", value: "$2.4928", context: "최근 분기배당 $0.6232 × 4" },
      { label: "단순 배당수익률", value: "약 2.83%", context: "$2.4928 ÷ $87.96, 세전·환율 미반영" },
      { label: "추정 시가총액", value: "약 $183.4B", context: "2026 Q1 발행주식수 약 20.85억주 × $87.96" }
    ],
    financialChecks: [
      { label: "현금", value: "$2.0B" },
      { label: "장기부채", value: "$97.8B" },
      { label: "Q1 영업현금", value: "$2.61B" },
      { label: "Q1 투자액", value: "$11.06B" }
    ]
  },
  catalysts: [
    "Dominion Energy 합병 승인과 즉시 조정 EPS 증가 기대",
    "데이터센터·대형 전력수요를 겨냥한 30개 이상 허브와 9.5GW 가스발전 개발",
    "NEER의 약 33GW 재생에너지·저장장치 백로그 실행",
    "FPL의 플로리다 고객·규제자본 성장",
    "2026년 10%, 이후 2028년까지 연 6% 배당 성장 정책"
  ],
  risks: [
    "Dominion 합병의 규제 승인 지연·조건부 승인·통합 실패",
    "높은 금리와 약 $97.8B 장기부채에 따른 조달비용 상승",
    "투자액이 영업현금흐름을 크게 웃도는 구조와 추가 자본조달 가능성",
    "허리케인·공사 지연·원가 상승과 규제기관의 비용 회수 제한",
    "재생에너지 세액공제·관세·에너지정책 변화"
  ],
  sources: [
    { label: "NextEra Energy Q1 2026 Results", detail: "조정 EPS·FPL·NEER 백로그·2026 가이던스", url: "https://www.investor.nexteraenergy.com/~/media/Files/N/NEE-IR/reports-and-fillings/quarterly-earnings/2026/Q1%202026/2026-0423%20NEEQ12026News%20Release%20vF.pdf" },
    { label: "SEC 2026 Q1 Form 10-Q", detail: "매출·영업이익·현금·부채·현금흐름·투자계획", url: "https://www.sec.gov/Archives/edgar/data/753308/000075330826000031/nee-20260331.htm" },
    { label: "NextEra-Dominion 합병 발표", detail: "교환비율·소유구조·성장목표·승인 일정", url: "https://www.investor.nexteraenergy.com/news-and-events/news-releases/2026/05-18-2026-123054903" },
    { label: "NextEra Energy 배당 이력", detail: "2026년 분기배당 $0.6232와 지급일", url: "https://www.investor.nexteraenergy.com/stock-information/dividend-history" },
    { label: "NEE 역사적 시세", detail: "2026-07-10 종가·거래량·52주 범위", url: "https://www.investing.com/equities/nextera-energy-inc-historical-data" },
    { label: "SEC companyfacts", detail: "20개 분기 매출·영업이익 XBRL 원자료", url: "https://data.sec.gov/api/xbrl/companyfacts/CIK0000753308.json" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
