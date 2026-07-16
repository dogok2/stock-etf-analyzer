const HYUNDAI_MOTOR_QUARTERS = [
  { quarter: "2021 Q2", revenue: 303261, operatingIncome: 18860 },
  { quarter: "2021 Q3", revenue: 288672, operatingIncome: 16067 },
  { quarter: "2021 Q4", revenue: 310265, operatingIncome: 15297 },
  { quarter: "2022 Q1", revenue: 302986, operatingIncome: 19289 },
  { quarter: "2022 Q2", revenue: 359999, operatingIncome: 29798 },
  { quarter: "2022 Q3", revenue: 377054, operatingIncome: 15518 },
  { quarter: "2022 Q4", revenue: 381476, operatingIncome: 33644 },
  { quarter: "2023 Q1", revenue: 377700, operatingIncome: 36423 },
  { quarter: "2023 Q2", revenue: 422332, operatingIncome: 42483 },
  { quarter: "2023 Q3", revenue: 409911, operatingIncome: 38285 },
  { quarter: "2023 Q4", revenue: 416692, operatingIncome: 34078 },
  { quarter: "2024 Q1", revenue: 406585, operatingIncome: 35574 },
  { quarter: "2024 Q2", revenue: 450206, operatingIncome: 42791 },
  { quarter: "2024 Q3", revenue: 429283, operatingIncome: 35809 },
  { quarter: "2024 Q4", revenue: 466237, operatingIncome: 28222 },
  { quarter: "2025 Q1", revenue: 444078, operatingIncome: 36336 },
  { quarter: "2025 Q2", revenue: 482867, operatingIncome: 36016 },
  { quarter: "2025 Q3", revenue: 467214, operatingIncome: 25373 },
  { quarter: "2025 Q4", revenue: 468386, operatingIncome: 16954 },
  { quarter: "2026 Q1", revenue: 459389, operatingIncome: 25147 }
];

const HYUNDAI_MOTOR_20260717 = {
  researchDate: "2026-07-17",
  archiveNote: "현대자동차 첫 분석",
  status: "active",
  tags: ["국내 상장", "완성차", "하이브리드·전기차", "Genesis·로보틱스"],
  thesis:
    "현대자동차는 현대·Genesis 브랜드, 글로벌 생산·판매망, 금융 계열사를 기반으로 내연기관부터 하이브리드·EV까지 유연하게 대응하는 완성차 기업입니다. 2026년 1분기 하이브리드 판매 호조로 역대 1분기 최대 매출을 기록했지만 미국 관세 영향으로 영업이익은 30.8% 감소했습니다. 강한 제품 믹스와 현지화, 최소 주당배당 1만원 정책은 장점이지만 관세·인센티브·환율과 대규모 투자 부담이 단기 이익 회복 속도를 좌우합니다.",
  quote: {
    source: "Naver Finance 정규장",
    priceLabel: "425,000원",
    changeLabel: "-2.07%",
    changeDirection: "down",
    dateLabel: "2026-07-16 정규장 종가",
    volumeLabel: "1,151,442주",
    extra: [
      { label: "당일 범위", value: "412,000원 ~ 431,500원" },
      { label: "52주 범위", value: "204,000원 ~ 787,000원" }
    ]
  },
  facts: [
    { label: "종목코드 / 시장", value: "005380 · KOSPI" },
    { label: "가격 기준", value: "425,000원 · 2026-07-16 종가" },
    { label: "2026 Q1 실적", value: "매출 45.94조원 · 영업이익 2.51조원" },
    { label: "2025 연간 실적", value: "매출 186.25조원 · 영업이익 11.47조원" },
    { label: "Q1 전동화 판매", value: "242,612대 · 전체의 24.9%" },
    { label: "주주환원", value: "2025 DPS 10,000원 · 2026 Q1 배당 2,500원" }
  ],
  stockChart: {
    name: "Hyundai Motor Company",
    ticker: "005380",
    symbol: "KRX:005380",
    yahooSymbol: "005380.KS",
    embed: false,
    provider: "저장된 최근 1년 가격 차트",
    note: "TradingView 종목 페이지에는 존재하지만 외부 임베드가 제한되는 심볼입니다. 오류 문구 대신 페이지 안의 저장 가격 차트를 기본으로 보여주고 TradingView는 보조 링크로 제공합니다."
  },
  userAssessment: USER_ASSESSMENT_PENDING,
  codexAssessment: {
    total: 3.7,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "장기",
      stance: "매수",
      reason: "글로벌 브랜드·하이브리드 경쟁력과 현지 생산 확대, 35% 이상 TSR 정책은 장기 가치를 지지합니다. 다만 미국 관세로 이익률이 크게 낮아졌고 현재 주가가 과거 저PBR 구간에서 재평가된 만큼 단기 추격보다 관세 부담 완화와 마진 회복을 확인하는 분할 접근이 적절합니다."
    },
    note:
      "2026년 1분기 핵심은 판매대수 감소에도 하이브리드와 고가 차종으로 매출이 늘었지만, 미국 관세가 그 효과를 넘어 영업이익률을 5.5%로 낮췄다는 점입니다. 현대차는 단순 완성차 외에도 Genesis, 금융, 미국 현지화, 로보틱스·소프트웨어 선택지를 보유하지만 현재 가치는 여전히 본업의 이익 회복이 우선 결정합니다.",
    metrics: [
      { label: "성장성", score: 3.7, note: "2026 Q1 매출은 3.4% 증가해 1분기 최대였지만 글로벌 도매 판매는 2.5%, 상반기 판매는 4.9% 감소했습니다." },
      { label: "수익성", score: 3.1, note: "하이브리드 믹스 개선에도 미국 관세로 Q1 영업이익이 30.8% 감소하고 영업이익률이 5.5%로 낮아졌습니다." },
      { label: "현금흐름 질", score: 3.0, note: "자동차 본업의 현금창출력은 크지만 금융 계열사와 연 17.8조원 투자 계획 때문에 연결 현금흐름 해석과 자금 배분이 복잡합니다." },
      { label: "재무 안정성", score: 3.5, note: "금융 부문 때문에 연결 부채비율은 190.3%지만 자동차 본업의 규모와 신용도, 현지 생산 기반이 완충 역할을 합니다." },
      { label: "밸류 부담", score: 3.6, note: "현재 PER 13.1배와 PBR 0.93배는 자산가치 아래지만 과거 저평가 구간 대비 재평가가 진행돼 이익 회복이 필요합니다." },
      { label: "경쟁우위", score: 4.5, note: "현대·Genesis의 제품력, 전 세계 생산망과 하이브리드·EV·내연기관을 병행하는 파워트레인 유연성이 강점입니다." },
      { label: "실적 가시성", score: 3.5, note: "신차와 하이브리드 수요는 가시성이 높지만 관세·인센티브·환율이 차량 믹스 효과를 빠르게 바꿀 수 있습니다." },
      { label: "자본배분", score: 4.5, note: "2025~2027년 TSR 35% 이상, 최소 DPS 10,000원, 분기배당과 자사주 소각 정책이 명확합니다." },
      { label: "촉매/모멘텀", score: 4.3, note: "미국 현지 생산, 하이브리드 라인업 확대, Genesis 신차, SDV·로보틱스 사업 진전이 재평가 촉매입니다." },
      { label: "리스크 관리", score: 3.0, note: "관세·무역정책, 리콜·품질, 노사, 경기순환과 EV 가격경쟁을 글로벌 공급망 전체에서 관리해야 합니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "현대자동차 IR·연결 재무제표 · 2026 Q1 기준",
    note: "연결 기준 매출과 영업이익을 억원 단위로 반올림했습니다. 2022·2023년 4분기는 연간 값에서 1~3분기를 차감해 계산했고, 2026 Q2 컨센서스는 발표 실적이 아니므로 포함하지 않았습니다.",
    periods: HYUNDAI_MOTOR_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 하이브리드·Genesis 중심 믹스와 미국 현지 생산 확대가 관세 충격을 점진적으로 흡수해 영업이익률을 6%대로 회복시키는 흐름입니다. 다만 2026년 상반기 판매량이 감소했고 관세 비용이 계속되는 만큼, 주가의 추가 재평가에는 판매 증가보다 이익률 회복이 더 중요합니다.",
    positives: [
      "2026 Q1 매출은 45.94조원으로 3.4% 증가해 역대 1분기 최대를 기록했습니다.",
      "전동화 차량 판매는 242,612대로 14.2% 증가했고 하이브리드 비중은 역대 최고 17.8%였습니다.",
      "글로벌 점유율은 4.6%에서 4.9%, 미국 점유율은 5.6%에서 6.0%로 상승했습니다.",
      "2025~2027년 TSR 35% 이상과 최소 DPS 10,000원 정책이 주가 하방을 보완합니다."
    ],
    risks: [
      "2026 Q1 영업이익은 미국 관세 영향으로 30.8% 감소했고 영업이익률은 5.5%에 그쳤습니다.",
      "2026년 상반기 글로벌 판매는 196.6만대로 4.9% 감소해 신차 출시 후 회복이 필요합니다.",
      "EV 가격경쟁과 인센티브 상승, 배터리·원재료 가격 변동이 제품 믹스 개선을 상쇄할 수 있습니다.",
      "미국 무역정책, 환율, 리콜·품질비용과 노사관계가 대규모 글로벌 생산망의 변동성을 키웁니다."
    ],
    watch: [
      "미국 관세의 분기 영업이익 영향과 현지 생산 상쇄 속도",
      "2026년 영업이익률 가이던스 6.3~7.3% 달성 여부",
      "북미 하이브리드·Genesis 판매와 인센티브 추이",
      "상반기 판매 감소 이후 주요 신차 출시 효과",
      "TSR 35% 이상 정책에 따른 배당·자사주 매입·소각 실행"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "현지 생산과 가격·믹스 개선이 관세를 빠르게 상쇄하고 하이브리드·Genesis 판매가 확대", evidence: "영업이익률 7%대 회복, 미국 점유율 상승, 가이던스 상단 달성" },
      { type: "base", label: "기본", condition: "매출은 완만히 증가하고 관세 부담이 남아 영업이익률이 6%대에서 회복", evidence: "2026 가이던스 중간 수준 달성, 분기배당 유지, 판매량 하반기 반등" },
      { type: "bear", label: "하방", condition: "관세·인센티브·판매 감소가 겹치고 EV 투자 부담과 품질비용이 증가", evidence: "영업이익률 5% 이하, 가이던스 하향, 재고와 인센티브 상승" }
    ]
  },
  valuation: {
    note: "425,000원 기준 Naver Finance의 현재 PER은 13.10배, PBR은 0.93배입니다. 2025년 주당배당금 10,000원을 적용한 단순 배당수익률은 약 2.35%입니다. 장부가 아래라는 점은 긍정적이지만 2026 Q1 영업이익 감소와 52주 중 큰 주가 변동을 감안하면 과거의 극단적 저평가 구간과는 구분해야 합니다.",
    metrics: [
      { label: "현재 PER", value: "13.10배", context: "Naver Finance 표시 EPS 32,437원 기준" },
      { label: "현재 PBR", value: "0.93배", context: "2026 Q1 BPS 456,242원 기준" },
      { label: "2025 연간배당", value: "주당 10,000원", context: "현재가 기준 단순 배당수익률 약 2.35%" },
      { label: "주주환원 목표", value: "TSR 35% 이상", context: "2025~2027년, 최소 DPS 10,000원" }
    ],
    financialChecks: [
      { label: "2026 Q1 영업이익률", value: "5.47%" },
      { label: "2026 Q1 부채비율", value: "190.28%" },
      { label: "2026 Q1 ROE", value: "7.50%" },
      { label: "2026 Q1 BPS", value: "456,242원" }
    ]
  },
  catalysts: [
    "미국 현지 생산 확대를 통한 관세 부담 완화",
    "하이브리드 라인업과 Genesis 신차 판매 확대",
    "2026년 주요 신차 출시와 하반기 판매 회복",
    "2025~2027년 TSR 35% 이상·최소 DPS 10,000원 정책",
    "SDV·로보틱스·Boston Dynamics 사업가치 구체화"
  ],
  risks: [
    "미국 관세와 글로벌 무역정책 변화",
    "판매 감소·인센티브 상승과 자동차 경기순환",
    "EV 가격경쟁·배터리 원가와 대규모 투자 부담",
    "환율·원자재·공급망 변동",
    "리콜·품질비용·노사관계와 금융부문 신용 위험"
  ],
  sources: [
    { label: "Hyundai Motor 2026 Q1 Results", detail: "매출·영업이익·판매·전동화 비중·관세 영향", url: "https://www.hyundai.com/worldwide/en/newsroom/detail/0000001162" },
    { label: "Hyundai Quarterly Earnings", detail: "2026 Q1 발표자료와 연결 재무제표", url: "https://www.hyundai.com/worldwide/en/company/ir/financial-information/quarterly-earnings" },
    { label: "Hyundai 2025 Annual Results", detail: "연간 실적·2026 가이던스·연간 DPS 10,000원", url: "https://www.hyundai.com/worldwide/en/newsroom/detail/0000001116.html" },
    { label: "Hyundai 주주환원정책", detail: "분기배당·배당성향·배당 이력", url: "https://www.hyundai.com/worldwide/en/company/ir/stock-information/shareholder-return-policy" },
    { label: "2025 CEO Investor Day", detail: "2025~2027 TSR 35% 이상·최소 DPS 10,000원", url: "https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-company-unveils-bold-2030-vision-and-product-roadmap-at-2025-ceo-investor-day-0000001018" },
    { label: "2026년 6월 판매 실적", detail: "6월·상반기 국내외 판매대수", url: "https://www.hyundai.com/worldwide/en/company/ir/notices/view-0000000370-en-10-1-" },
    { label: "Naver Finance 시세·재무", detail: "2026-07-16 종가·거래량·52주 범위·현재 밸류", url: "https://m.stock.naver.com/domestic/stock/005380/total" },
    { label: "StockAnalysis 분기 재무", detail: "공시 기반 최근 20개 분기 매출·영업이익 원자료 교차 확인", url: "https://stockanalysis.com/quote/krx/005380/financials/?p=quarterly" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
