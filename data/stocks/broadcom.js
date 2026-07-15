const BROADCOM_QUARTERS = [
  { quarter: "FY2021 Q3", revenue: 6778, operatingIncome: 2126 },
  { quarter: "FY2021 Q4", revenue: 7407, operatingIncome: 2581 },
  { quarter: "FY2022 Q1", revenue: 7706, operatingIncome: 3108 },
  { quarter: "FY2022 Q2", revenue: 8103, operatingIncome: 3394 },
  { quarter: "FY2022 Q3", revenue: 8464, operatingIncome: 3737 },
  { quarter: "FY2022 Q4", revenue: 8930, operatingIncome: 3986 },
  { quarter: "FY2023 Q1", revenue: 8915, operatingIncome: 4103 },
  { quarter: "FY2023 Q2", revenue: 8733, operatingIncome: 4008 },
  { quarter: "FY2023 Q3", revenue: 8876, operatingIncome: 3856 },
  { quarter: "FY2023 Q4", revenue: 9295, operatingIncome: 4240 },
  { quarter: "FY2024 Q1", revenue: 11961, operatingIncome: 2083 },
  { quarter: "FY2024 Q2", revenue: 12487, operatingIncome: 2965 },
  { quarter: "FY2024 Q3", revenue: 13072, operatingIncome: 3788 },
  { quarter: "FY2024 Q4", revenue: 14054, operatingIncome: 4627 },
  { quarter: "FY2025 Q1", revenue: 14916, operatingIncome: 6260 },
  { quarter: "FY2025 Q2", revenue: 15004, operatingIncome: 5829 },
  { quarter: "FY2025 Q3", revenue: 15952, operatingIncome: 5887 },
  { quarter: "FY2025 Q4", revenue: 18015, operatingIncome: 7508 },
  { quarter: "FY2026 Q1", revenue: 19311, operatingIncome: 8563 },
  { quarter: "FY2026 Q2", revenue: 22187, operatingIncome: 10788 }
];

const BROADCOM_20260715 = {
  researchDate: "2026-07-15",
  archiveNote: "Broadcom 첫 분석",
  status: "active",
  tags: ["미국 상장", "AI 반도체", "네트워킹", "인프라 소프트웨어"],
  thesis:
    "Broadcom은 맞춤형 AI 가속기와 데이터센터 네트워킹에서 강한 설계 자산을 보유하고, VMware를 중심으로 한 인프라 소프트웨어 현금흐름까지 결합한 고수익 기술 기업입니다. FY2026 Q2 AI 반도체 매출이 $10.8B로 143% 증가했고 다음 분기 총매출 가이던스도 84% 성장을 제시했지만, 높은 기대 수준과 약 $64.9B의 총부채, 소수 대형 고객 집중은 밸류와 변동성을 동시에 키웁니다.",
  quote: {
    source: "Yahoo Finance 일봉",
    priceLabel: "$384.05",
    changeLabel: "-3.98%",
    changeDirection: "down",
    dateLabel: "2026-07-13 미국장 종가",
    volumeLabel: "21.29M주",
    extra: [
      { label: "당일 범위", value: "$383.42 ~ $395.75" },
      { label: "최근 1년 범위", value: "$273.00 ~ $495.00" }
    ]
  },
  facts: [
    { label: "티커 / 시장", value: "AVGO · NASDAQ" },
    { label: "가격 기준", value: "$384.05 · 2026-07-13 종가" },
    { label: "FY2026 Q2", value: "매출 $22.19B · 영업이익 $10.79B" },
    { label: "AI 반도체 매출", value: "$10.8B · 전년 대비 +143%" },
    { label: "FY2026 Q3 가이던스", value: "매출 약 $29.4B · +84%" },
    { label: "분기 배당", value: "$0.65 · 연간 목표 $2.60" }
  ],
  stockChart: {
    name: "Broadcom",
    ticker: "AVGO",
    symbol: "NASDAQ:AVGO",
    yahooSymbol: "AVGO",
    embed: true,
    provider: "TradingView 실시간 차트",
    note: "공유 페이지에서 바로 볼 수 있도록 TradingView 차트를 사용합니다."
  },
  userAssessment: USER_ASSESSMENT_PENDING,
  codexAssessment: {
    total: 4.2,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "매수",
      reason: "맞춤형 AI 가속기와 네트워킹의 성장 속도, 46%대 FCF 마진은 강력합니다. 다만 비GAAP 이익 기준으로도 높은 기대가 반영돼 있어 다음 분기 가이던스 달성 여부를 확인하는 중기 관점이 적절합니다."
    },
    note:
      "Broadcom의 핵심 강점은 AI 가속기만이 아니라 네트워킹과 VMware 소프트웨어를 함께 공급해 고객의 데이터센터 지출 전반에서 수익을 얻는 구조입니다. 현재 성장률은 매우 강하지만 고객 집중, 수출 규제, VMware 라이선스 정책과 높은 밸류가 작은 실망도 큰 주가 변동으로 연결할 수 있습니다.",
    metrics: [
      { label: "성장성", score: 5.0, note: "FY2026 Q2 매출이 48%, AI 반도체 매출이 143% 증가했고 Q3 매출 가이던스는 84% 성장입니다." },
      { label: "수익성", score: 4.8, note: "Q2 GAAP 영업이익률은 약 48.6%, 조정 EBITDA 마진은 69%로 매우 높습니다." },
      { label: "현금흐름 질", score: 4.9, note: "Q2 영업현금 $10.49B, CAPEX $0.23B로 FCF $10.26B와 46%의 FCF 마진을 기록했습니다." },
      { label: "재무 안정성", score: 3.2, note: "현금 $19.6B가 충분하지만 단기·장기부채가 약 $64.9B로 VMware 인수 후 순부채가 큽니다." },
      { label: "밸류 부담", score: 2.3, note: "$384.05는 최근 4개 분기 비GAAP EPS 합계 약 $8.13 기준 약 47.2배로 높은 성장 기대를 요구합니다." },
      { label: "경쟁우위", score: 4.9, note: "맞춤형 ASIC, 스위칭·광통신, 무선·스토리지 반도체와 VMware 소프트웨어 포트폴리오가 깊은 진입장벽입니다." },
      { label: "실적 가시성", score: 4.6, note: "대형 고객의 AI 클러스터 투자와 Q3 $29.4B 가이던스가 단기 가시성을 높이지만 고객 집중도는 변수입니다." },
      { label: "자본배분", score: 3.8, note: "15년 연속 연간배당 증가와 자사주 매입은 긍정적이나 부채 감축과 대규모 환원을 함께 관리해야 합니다." },
      { label: "촉매/모멘텀", score: 5.0, note: "Q3 AI 반도체 매출 $16B 전망, 맞춤형 AI 고객 확대와 차세대 네트워킹 수요가 강한 촉매입니다." },
      { label: "리스크 관리", score: 3.0, note: "대형 고객 집중, 수출 통제, 반도체 사이클, VMware 규제·고객 반발과 높은 기대치를 동시에 관리해야 합니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "USD",
    unit: "백만 달러",
    coverage: "FY2021 Q3 ~ FY2026 Q2, 20개 분기",
    asOf: "SEC companyfacts · FY2026 Q2 10-Q 기준",
    note: "Broadcom 회계연도 기준입니다. SEC XBRL의 매출과 GAAP 영업이익을 사용했고 Q4는 연간 값에서 Q1~Q3를 차감해 계산했습니다. VMware 인수 이후 무형자산 상각과 주식보상 영향으로 GAAP·비GAAP 이익 차이가 큽니다.",
    periods: BROADCOM_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 맞춤형 AI 가속기와 네트워킹 매출이 고성장을 이어가고 VMware 비용 효율화가 소프트웨어 현금흐름을 지지하는 흐름입니다. FY2026 Q3 매출 가이던스가 매우 강해 실적 모멘텀은 분명하지만, 현재 밸류는 가이던스 달성뿐 아니라 이후에도 높은 성장률이 유지될 것을 상당 부분 요구합니다.",
    positives: [
      "FY2026 Q2 매출은 $22.19B로 48%, AI 반도체 매출은 $10.8B로 143% 증가했습니다.",
      "Q3 매출 가이던스는 약 $29.4B, 비GAAP 영업이익률 가이던스는 약 67%입니다.",
      "분기 FCF가 $10.26B로 매출의 46%에 달해 성장과 부채 감축·주주환원을 동시에 지원합니다.",
      "반도체 솔루션과 인프라 소프트웨어가 각각 68%, 32%를 차지해 AI와 반복 소프트웨어 매출이 결합됩니다."
    ],
    risks: [
      "맞춤형 AI 가속기 매출이 소수 하이퍼스케일 고객의 투자 일정에 집중돼 주문 변동성이 클 수 있습니다.",
      "최근 4개 분기 비GAAP EPS 기준 약 47배의 가격은 가이던스 미달이나 성장 둔화에 민감합니다.",
      "VMware 라이선스·파트너 정책은 고객 이탈과 규제기관 조사 위험을 만들 수 있습니다.",
      "약 $64.9B의 총부채와 수출 통제·반도체 공급망 위험이 자본배분과 성장에 영향을 줄 수 있습니다."
    ],
    watch: [
      "FY2026 Q3 매출 $29.4B와 비GAAP 영업이익률 67% 달성 여부",
      "AI 반도체 매출 $16B 전망과 주요 고객 수",
      "Tomahawk·Jericho·광통신 등 AI 네트워킹 성장률",
      "VMware 인프라 소프트웨어 성장과 고객 유지율",
      "순부채 감소 속도와 자사주 매입 규모"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "AI 고객과 가속기 프로그램이 확대되고 네트워킹·VMware 마진이 동반 상승", evidence: "Q3 가이던스 상회, AI 매출 200% 이상 성장, FCF 마진 45%대 유지" },
      { type: "base", label: "기본", condition: "Q3 가이던스를 달성한 뒤 성장률이 높은 수준에서 점진적으로 정상화", evidence: "AI 가속기 수요 유지, 소프트웨어 한 자릿수 성장, 부채 감소" },
      { type: "bear", label: "하방", condition: "대형 고객 주문 지연과 수출 규제, VMware 고객 이탈이 겹쳐 높은 밸류가 조정", evidence: "AI 가이던스 미달, 마진 하락, 재고·매출채권 증가, 순부채 정체" }
    ]
  },
  valuation: {
    note: "$384.05를 FY2025 Q3부터 FY2026 Q2까지의 비GAAP 희석 EPS $1.69+$1.95+$2.05+$2.44에 적용하면 단순 PER은 약 47.2배입니다. 높은 성장률과 FCF 마진은 프리미엄을 뒷받침하지만, 다음 분기 이후에도 AI 매출 고성장이 유지돼야 현재 기대를 정당화할 수 있습니다.",
    metrics: [
      { label: "TTM 비GAAP PER", value: "약 47.2배", context: "$384.05 ÷ 최근 4개 분기 비GAAP EPS $8.13" },
      { label: "Q2 GAAP 영업이익률", value: "약 48.6%", context: "$10.79B ÷ $22.19B" },
      { label: "Q2 FCF 마진", value: "약 46.3%", context: "$10.26B ÷ $22.19B" },
      { label: "단순 배당수익률", value: "약 0.68%", context: "연간 목표배당 $2.60 ÷ $384.05" }
    ],
    financialChecks: [
      { label: "현금", value: "$19.6B" },
      { label: "단기·장기부채", value: "$64.9B" },
      { label: "Q2 영업현금", value: "$10.49B" },
      { label: "Q2 잉여현금", value: "$10.26B" }
    ]
  },
  catalysts: [
    "FY2026 Q3 AI 반도체 매출 $16B 전망 달성",
    "맞춤형 AI 가속기 고객과 프로그램 확대",
    "Tomahawk·Jericho·광통신 기반 AI 네트워킹 성장",
    "VMware 반복매출과 비용 효율화",
    "강한 FCF를 활용한 부채 감축·배당·자사주 매입"
  ],
  risks: [
    "소수 하이퍼스케일 고객과 AI 투자주기 의존",
    "높은 밸류와 가이던스 기대치",
    "미국의 대중국 수출 통제와 공급망 위험",
    "VMware 가격·라이선스 정책에 대한 고객 반발과 규제",
    "VMware 인수 관련 부채와 대규모 무형자산 상각"
  ],
  sources: [
    { label: "Broadcom FY2026 Q2 Results", detail: "매출·AI 반도체·FCF·배당·Q3 가이던스", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial" },
    { label: "SEC FY2026 Q2 Form 10-Q", detail: "GAAP 영업이익·현금·부채·현금흐름·위험요인", url: "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000054/avgo-20260503.htm" },
    { label: "Broadcom FY2025 Q4 Results", detail: "연간배당 목표 $2.60과 Q4 비GAAP EPS", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025" },
    { label: "Broadcom FY2026 Q1 Results", detail: "Q1 비GAAP EPS와 자사주 매입", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial" },
    { label: "SEC companyfacts", detail: "20개 분기 매출·영업이익 XBRL 원자료", url: "https://data.sec.gov/api/xbrl/companyfacts/CIK0001730168.json" },
    { label: "AVGO 역사적 시세", detail: "2026-07-13 확정 종가·거래량·일중 범위", url: "https://finance.yahoo.com/quote/AVGO/history/" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
