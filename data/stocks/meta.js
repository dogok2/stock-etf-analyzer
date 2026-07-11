
const META_QUARTERS = [
  { quarter: "2021 Q2", revenue: 29077, operatingIncome: 12367 },
  { quarter: "2021 Q3", revenue: 29010, operatingIncome: 10423 },
  { quarter: "2021 Q4", revenue: 33671, operatingIncome: 12585 },
  { quarter: "2022 Q1", revenue: 27908, operatingIncome: 8524 },
  { quarter: "2022 Q2", revenue: 28822, operatingIncome: 8358 },
  { quarter: "2022 Q3", revenue: 27714, operatingIncome: 5664 },
  { quarter: "2022 Q4", revenue: 32165, operatingIncome: 6398 },
  { quarter: "2023 Q1", revenue: 28645, operatingIncome: 7227 },
  { quarter: "2023 Q2", revenue: 31999, operatingIncome: 9392 },
  { quarter: "2023 Q3", revenue: 34146, operatingIncome: 13748 },
  { quarter: "2023 Q4", revenue: 40112, operatingIncome: 16384 },
  { quarter: "2024 Q1", revenue: 36455, operatingIncome: 13818 },
  { quarter: "2024 Q2", revenue: 39071, operatingIncome: 14847 },
  { quarter: "2024 Q3", revenue: 40589, operatingIncome: 17350 },
  { quarter: "2024 Q4", revenue: 48386, operatingIncome: 23365 },
  { quarter: "2025 Q1", revenue: 42314, operatingIncome: 17555 },
  { quarter: "2025 Q2", revenue: 47516, operatingIncome: 20441 },
  { quarter: "2025 Q3", revenue: 51242, operatingIncome: 20535 },
  { quarter: "2025 Q4", revenue: 59894, operatingIncome: 24745 },
  { quarter: "2026 Q1", revenue: 56311, operatingIncome: 22872 }
];

const META_20260709 = {
  researchDate: "2026-07-09",
  archiveNote: "META 첫 실제 주식 분석",
  status: "active",
  tags: ["미국 상장", "AI·광고 플랫폼", "대형 성장주"],
  thesis:
    "META는 광고 수익성과 AI 추천·광고 효율 개선이 실적을 끌고 있지만, AI 인프라 투자와 Reality Labs 손실이 밸류에이션 부담을 같이 만든다. 이번 기록은 강한 실적 흐름과 투자비 확대 리스크를 동시에 남기는 첫 기준점이다.",
  quote: {
    source: "Nasdaq",
    priceLabel: "$582.41",
    changeLabel: "-3.43%",
    changeDirection: "down",
    dateLabel: "2026-07-09 09:37 ET 실시간",
    volumeLabel: "3,025,328주",
    extra: [
      { label: "당일 범위", value: "$577.07 ~ $585.60" },
      { label: "52주 범위", value: "$520.26 ~ $796.25" }
    ]
  },
  facts: [
    { label: "티커 / 시장", value: "META · NASDAQ" },
    { label: "가격 기준", value: "$582.41 · 2026-07-09 09:37 ET" },
    { label: "최근 공식 실적", value: "2026 Q1 매출 $56.3B, 영업이익 $22.9B" },
    { label: "핵심 사업", value: "Facebook·Instagram·WhatsApp 광고, AI 추천·광고 인프라, Reality Labs" },
    { label: "실적 통화", value: "USD 백만 달러" },
    { label: "기록 방식", value: "ETF처럼 날짜별 스냅샷 보존" }
  ],
  stockChart: {
    name: "Meta Platforms",
    ticker: "META",
    symbol: "NASDAQ:META",
    yahooSymbol: "META",
    embed: true,
    provider: "TradingView 실시간 차트",
    note:
      "TradingView에서 바로 표시 가능한 종목으로 보아 페이지 안에 실시간 차트를 임베드합니다. 시세 지연과 거래소 제공 범위는 TradingView 정책을 따릅니다."
  },
  userAssessment: {
    total: 3.3,
    stance: "중립",
    status: "사용자 평가 입력",
    recommendation: {
      period: "단기",
      stance: "중립",
      reason: "540 라인 부근 사수 여부를 가장 중요하게 봅니다."
    },
    note: "540 라인 부근 사수 매우 중요. 불안한 상승 모양이지만 흐름을 잘 타면 900 이상도 가능.",
    scoreItems: [
      { label: "1번 항목", score: 3, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 2, weight: 1 },
      { label: "4번 항목", score: 3, weight: 1 },
      { label: "5번 항목", score: 1, weight: 1 },
      { label: "6번 항목", score: 1, weight: 1 },
      { label: "7번 항목", score: 5, weight: 2 },
      { label: "8번 항목", score: 5, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 3.9,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "매수",
      reason: "단기 변동성보다 광고 성장과 AI 투자 회수 여부를 몇 개 분기 확인하면서 가져가는 쪽이 더 적합합니다."
    },
    note:
      "사용자 평가와 독립적으로 작성한 10개 항목 5점 만점 평균 평가입니다. 광고 플랫폼의 이익 체력과 경쟁우위는 높게 보지만, AI 투자비와 규제·밸류에이션 부담 때문에 강력매수까지는 두지 않았습니다.",
    metrics: [
      { label: "성장성", score: 4.5, note: "2026 Q1 매출이 전년 동기 대비 크게 증가했고 광고·AI 추천 효율 개선이 핵심 동력입니다." },
      { label: "수익성", score: 4.5, note: "최근 분기 영업이익률이 40% 안팎으로 높은 편입니다." },
      { label: "현금흐름 질", score: 4.2, note: "광고 플랫폼의 현금창출력은 강하지만 AI 인프라 투자 확대로 잉여현금흐름 변동성은 확인해야 합니다." },
      { label: "재무 안정성", score: 4.0, note: "초대형 플랫폼의 현금창출력은 강하나 AI CAPEX 확대는 계속 확인해야 합니다." },
      { label: "밸류 부담", score: 2.5, note: "실적은 좋지만 성장 기대가 이미 주가에 일부 반영되어 안전마진은 제한적입니다." },
      { label: "경쟁우위", score: 4.7, note: "Facebook, Instagram, WhatsApp의 네트워크 효과와 광고 데이터 규모가 강한 방어막입니다." },
      { label: "실적 가시성", score: 4.2, note: "광고 매출 기반은 반복성이 높지만 경기 민감성과 규제 변수는 분기 변동성을 만듭니다." },
      { label: "자본배분", score: 3.8, note: "자사주와 비용 효율화는 긍정적이나 AI·Reality Labs 투자 배분의 성과 검증이 필요합니다." },
      { label: "촉매/모멘텀", score: 4.0, note: "AI 광고 도구, Reels 수익화, 비용 효율화가 중기 촉매로 남아 있습니다." },
      { label: "리스크 관리", score: 3.0, note: "규제, 개인정보, Reality Labs 손실, AI 투자 회수 기간이 주요 감점 요인입니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "USD",
    unit: "백만 달러",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "SEC companyfacts 기준, 2026 Q1까지 반영",
    note:

      "미국 SEC XBRL companyfacts의 매출과 영업이익 항목을 기준으로 정리했습니다. Q4는 연간값에서 Q1~Q3 누적값을 차감해 계산했습니다.",
    periods: META_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary:
      "기본 시나리오는 광고 성장과 AI 효율 개선이 이어지지만, 인프라 투자 확대가 이익 증가 속도를 일부 누르는 흐름입니다. 핵심은 매출 성장률보다 AI 투자비가 얼마만큼 수익성으로 회수되는지입니다.",
    positives: [
      "광고 플랫폼의 규모와 데이터 네트워크가 여전히 강력합니다.",
      "AI 추천·광고 자동화가 매출 성장과 광고주 ROI 개선을 동시에 만들 수 있습니다.",
      "2023년 이후 비용 효율화 효과가 분기 영업이익률에 뚜렷하게 나타났습니다."
    ],
    risks: [
      "AI 데이터센터와 GPU 투자가 늘수록 단기 자유현금흐름 부담이 커질 수 있습니다.",
      "Reality Labs 손실이 장기 옵션이면서도 실적 변동성 요인입니다.",
      "개인정보·독점·청소년 보호 규제는 지역별로 계속 비용을 만들 수 있습니다."
    ],
    watch: [
      "다음 분기 매출 성장률과 광고 노출·단가 방향",
      "AI CAPEX 가이던스와 영업이익률 변화",
      "Reality Labs 손실 규모와 주주환원 지속성"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "AI 투자비가 광고 매출 성장과 마진 개선으로 빠르게 회수", evidence: "매출 성장률 재가속, 영업이익률 유지, CAPEX 가이던스 안정" },
      { type: "base", label: "기본", condition: "광고 성장은 이어지지만 AI 투자비가 이익 증가 속도를 조절", evidence: "두 자릿수 성장과 높은 마진은 유지하되 밸류에이션 재평가는 제한" },
      { type: "bear", label: "하방", condition: "CAPEX 확대와 규제 비용이 동시에 올라가며 이익률 하락", evidence: "영업이익률 둔화, Reality Labs 손실 확대, 규제 관련 비용 증가" }
    ]
  },
  valuation: {
    note:
      "현재 버전은 확정 실적과 가격 위치 중심의 1차 점검입니다. 다음 업데이트에서 EPS, FCF, 순현금, 자사주 매입 규모까지 자동 입력 항목으로 보강하면 더 좋아집니다.",
    metrics: [
      { label: "주가 위치", value: "52주 범위 하단~중단", context: "$582.41은 52주 범위 $520.26~$796.25 안에서 하단에 더 가깝습니다." },
      { label: "매출 성장", value: "2026 Q1 +33.1% YoY", context: "2025 Q1 $42.3B → 2026 Q1 $56.3B 기준입니다." },
      { label: "영업이익률", value: "2026 Q1 40.6%", context: "영업이익 $22.9B / 매출 $56.3B 기준입니다." },
      { label: "밸류 판단", value: "성장주 프리미엄", context: "높은 이익 체력은 긍정, AI 투자 회수 기간은 할인 요인입니다." }
    ],
    financialChecks: [
      { label: "핵심 확인", value: "AI CAPEX" },
      { label: "수익성", value: "영업이익률 40%대" },
      { label: "주주환원", value: "자사주·배당 보강 예정" },
      { label: "다음 보강", value: "EPS·FCF·순현금" }
    ]
  },
  catalysts: [
    "AI 광고 도구의 매출 기여 확대",
    "Reels·Instagram 광고 단가 개선",
    "자사주 매입과 비용 효율화 지속",
    "Reality Labs 손실 축소 또는 명확한 성과 지표 제시"
  ],
  risks: [
    "AI 인프라 투자비가 예상보다 더 빠르게 증가",
    "규제·소송·개인정보 비용 확대",
    "광고 경기 둔화 또는 경쟁 플랫폼으로 예산 이동",
    "Reality Labs 장기 손실 지속"
  ],
  sources: [
    { label: "Nasdaq META quote", detail: "2026-07-09 09:37 ET 주가·거래량·52주 범위", url: "https://www.nasdaq.com/market-activity/stocks/meta" },
    { label: "SEC companyfacts", detail: "META XBRL 매출·영업이익 공식 데이터", url: "https://data.sec.gov/api/xbrl/companyfacts/CIK0001326801.json" },
    { label: "Meta Investor Relations", detail: "실적 발표·10-K·10-Q 확인용", url: "https://investor.fb.com/financials/" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
