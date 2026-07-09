const STOCK_SOURCE_POLICY = [
  "가격, 실적, 공시 수치는 기준일과 원문 출처를 함께 남깁니다.",
  "사용자 평가는 사용자 판단 기록으로 보존하고, Codex 평가는 별도 독립 의견으로 작성합니다.",
  "Codex 평가는 투자 조언이 아니라 리서치 보조 의견이며, 새 분석을 추가해도 과거 날짜 기록은 덮어쓰지 않습니다."
];

const USER_ASSESSMENT_PENDING = {
  total: null,
  stance: "사용자 기준 정리 전",
  status: "미입력",
  horizon: {
    shortTerm: "미입력",
    midTerm: "미입력",
    longTerm: "미입력"
  },
  note:
    "단기·중기·장기 의견은 사용자가 정한 기준이 생기면 강력매수, 매수, 중립, 매도, 강력매도 중 하나로 기록합니다. 이 영역은 Codex 점수와 섞지 않습니다.",
  fields: [
    { label: "내 투자 논리", value: "아직 사용자 기준 정리 전" },
    { label: "내가 보는 핵심 지표", value: "추후 사용자 배점 항목 연결" },
    { label: "매수·보유·매도 조건", value: "판단이 바뀌는 조건을 날짜별로 기록 예정" },
    { label: "공유용 코멘트", value: "남에게 보여줘도 맥락이 남도록 원문 형태로 보존" }
  ]
};

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

const LGES_QUARTERS = [
  { quarter: "2021 Q2", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2021 Q3", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2021 Q4", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2022 Q1", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2022 Q2", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2022 Q3", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2022 Q4", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2023 Q1", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2023 Q2", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2023 Q3", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2023 Q4", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2024 Q1", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2024 Q2", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2024 Q3", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2024 Q4", revenue: null, operatingIncome: null, note: "분기 원문 보강 예정" },
  { quarter: "2025 Q1", revenue: 67227, operatingIncome: 3747 },
  { quarter: "2025 Q2", revenue: 55654, operatingIncome: 4922 },
  { quarter: "2025 Q3", revenue: 56999, operatingIncome: 6013 },
  { quarter: "2025 Q4", revenue: 61415, operatingIncome: -1220 },
  { quarter: "2026 Q1", revenue: 65550, operatingIncome: -2078 }
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
  userAssessment: USER_ASSESSMENT_PENDING,
  codexAssessment: {
    total: 3.7,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    horizon: {
      shortTerm: "중립",
      midTerm: "매수",
      longTerm: "매수"
    },
    note:
      "사용자 평가와 독립적으로 작성한 5점 만점 평균 평가입니다. 광고 플랫폼의 이익 체력은 높게 보지만, AI 투자비와 규제·밸류에이션 부담 때문에 강력매수까지는 두지 않았습니다.",
    metrics: [
      { label: "성장성", score: 4.5, note: "2026 Q1 매출이 전년 동기 대비 크게 증가했고 광고·AI 추천 효율 개선이 핵심 동력입니다." },
      { label: "수익성", score: 4.5, note: "최근 분기 영업이익률이 40% 안팎으로 높은 편입니다." },
      { label: "재무 안정성", score: 4.0, note: "초대형 플랫폼의 현금창출력은 강하나 AI CAPEX 확대는 계속 확인해야 합니다." },
      { label: "밸류 부담", score: 2.5, note: "실적은 좋지만 성장 기대가 이미 주가에 일부 반영되어 안전마진은 제한적입니다." },
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

const LGES_20260709 = {
  researchDate: "2026-07-09",
  archiveNote: "LG에너지솔루션 첫 실제 주식 분석",
  status: "active",
  tags: ["국내 상장", "2차전지", "전기차·ESS"],
  thesis:
    "LG에너지솔루션은 글로벌 배터리 공급망과 ESS 성장 옵션을 가진 기업이지만, 전기차 수요 둔화와 가격 경쟁, 보조금·AMPC 의존도, 최근 영업손실 전환이 단기 부담이다. 첫 기록은 업황 회복 확인 전까지 중립에 가까운 기준점으로 둔다.",
  quote: {
    source: "Naver Finance",
    priceLabel: "313,500원",
    changeLabel: "-0.63%",
    changeDirection: "down",
    dateLabel: "2026-07-09 정규장 종가",
    volumeLabel: "505,757주",
    extra: [
      { label: "시간외 단일가", value: "316,500원 (+0.32%)" },
      { label: "시가총액", value: "73.36조원" }
    ]
  },
  facts: [
    { label: "종목코드 / 시장", value: "373220 · KOSPI" },
    { label: "가격 기준", value: "313,500원 · 2026-07-09 종가" },
    { label: "최근 확인 실적", value: "2026 Q1 매출 65,550억원, 영업손실 2,078억원" },
    { label: "핵심 사업", value: "EV 배터리, ESS, 원통형·파우치형 셀, 글로벌 OEM 공급" },
    { label: "실적 통화", value: "KRW 억원" },
    { label: "기록 방식", value: "ETF처럼 날짜별 스냅샷 보존" }
  ],
  stockChart: {
    name: "LG Energy Solution",
    ticker: "373220",
    symbol: "KRX:373220",
    yahooSymbol: "373220.KS",
    embed: true,
    provider: "TradingView 실시간 차트",
    note:
      "KRX 상장 종목은 TradingView 심볼로 우선 표시합니다. 위젯 제공 범위가 바뀌면 다음 업데이트에서 자체 저장 차트로 전환할 수 있습니다."
  },
  userAssessment: USER_ASSESSMENT_PENDING,
  codexAssessment: {
    total: 2.7,
    stance: "중립",
    confidence: "중간",
    author: "Codex 독립 평가",
    horizon: {
      shortTerm: "중립",
      midTerm: "중립",
      longTerm: "매수"
    },
    note:
      "사용자 평가와 독립적으로 작성한 5점 만점 평균 평가입니다. 장기 배터리 수요와 글로벌 고객 기반은 긍정적이지만, 최근 수익성 둔화와 업황 불확실성이 커서 현재 판단은 중립에 둡니다.",
    metrics: [
      { label: "성장성", score: 3.5, note: "ESS와 전기차 장기 수요는 유효하지만 단기 EV 수요 둔화가 부담입니다." },
      { label: "수익성", score: 2.0, note: "2026 Q1 영업손실 전환으로 마진 회복 확인이 필요합니다." },
      { label: "재무 안정성", score: 3.0, note: "대형 제조업 특성상 투자 부담이 크며, 업황 회복 전 현금흐름 확인이 필요합니다." },
      { label: "밸류 부담", score: 2.5, note: "장기 기대가 남아 있어 업황 회복 전에는 밸류에이션 안전마진이 넉넉하다고 보기 어렵습니다." },
      { label: "리스크 관리", score: 2.5, note: "EV 수요, 원재료, 중국 경쟁, 정책 보조금 변동이 모두 실적 변동성을 키웁니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1 틀, 현재 2025 Q1~2026 Q1 실제치 우선 반영",
    asOf: "Naver Finance 최근 분기 표 기준, 2026 Q1까지 반영",
    note:
      "현재 공개 페이지에서 확인한 최근 실제 분기값을 먼저 넣었습니다. 과거 5년치 분기 원문은 DART 사업·분기보고서에서 추가로 보강할 예정이라 빈 막대와 표의 '—'로 표시합니다.",
    periods: LGES_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary:
      "기본 시나리오는 EV 배터리 업황이 서서히 바닥을 확인하고 ESS가 완충 역할을 하는 흐름입니다. 다만 주가 재평가에는 영업이익률 회복과 수주·가동률 개선이 먼저 필요합니다.",
    positives: [
      "글로벌 OEM 고객 기반과 생산 경험은 진입장벽으로 작동합니다.",
      "ESS 수요 확대는 전기차 둔화 구간에서 보완 성장 축이 될 수 있습니다.",
      "업황이 회복될 경우 고정비 레버리지로 이익률 개선 폭이 커질 수 있습니다."
    ],
    risks: [
      "전기차 수요 둔화와 OEM 재고 조정이 매출 회복을 늦출 수 있습니다.",
      "중국 배터리 업체와 가격 경쟁이 마진을 압박할 수 있습니다.",
      "AMPC 등 정책성 혜택 변동은 실적 가시성을 낮춥니다."
    ],
    watch: [
      "2026 Q2 이후 영업이익 흑자 전환 여부",
      "ESS 매출 비중과 수익성",
      "주요 고객사의 EV 생산 계획과 장기 공급계약 변화"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "EV 수요 회복과 ESS 성장으로 가동률·마진이 함께 개선", evidence: "분기 흑자 전환, 수주 증가, AMPC 제외 수익성 개선" },
      { type: "base", label: "기본", condition: "업황은 개선되지만 가격 경쟁과 투자 부담이 수익성 회복을 제한", evidence: "매출 회복은 확인되나 영업이익률은 낮은 수준 유지" },
      { type: "bear", label: "하방", condition: "EV 수요 둔화와 가격 경쟁이 길어져 손실 또는 저마진 지속", evidence: "영업손실 지속, 가동률 하락, 고객 주문 조정" }
    ]
  },
  valuation: {
    note:
      "현재 버전은 가격·최근 분기 실적·업황 체크 중심입니다. 다음 업데이트에서 PER/PBR, 순차입금, CAPEX, AMPC 제외 이익을 따로 넣으면 배터리 업종 판단력이 좋아집니다.",
    metrics: [
      { label: "주가 기준", value: "313,500원", context: "2026-07-09 정규장 종가 기준입니다." },
      { label: "시가총액", value: "73.36조원", context: "Naver Finance 실시간 요약 기준입니다." },
      { label: "최근 분기 수익성", value: "영업손실 2,078억원", context: "2026 Q1 기준, 흑자 전환 확인이 핵심입니다." },
      { label: "밸류 판단", value: "회복 확인 필요", context: "장기 성장성은 있으나 단기 실적 가시성이 낮아 중립으로 둡니다." }
    ],
    financialChecks: [
      { label: "핵심 확인", value: "흑자 전환" },
      { label: "업황 지표", value: "EV·ESS 수요" },
      { label: "정책 변수", value: "AMPC·보조금" },
      { label: "다음 보강", value: "PBR·순차입금·CAPEX" }
    ]
  },
  catalysts: [
    "2026 Q2 이후 영업이익 흑자 전환",
    "ESS 수주와 매출 비중 확대",
    "주요 완성차 고객의 EV 생산 계획 상향",
    "원재료 가격 안정과 가격 경쟁 완화"
  ],
  risks: [
    "EV 수요 둔화 장기화",
    "중국 업체와 가격 경쟁 심화",
    "AMPC 등 정책성 수익 변동",
    "대규모 CAPEX 부담과 가동률 하락"
  ],
  sources: [
    { label: "Naver Finance 373220", detail: "2026-07-09 종가·거래량·시가총액·최근 분기 실적", url: "https://finance.naver.com/item/main.naver?code=373220" },
    { label: "Naver 일별 시세 API", detail: "2026-07-01~2026-07-09 일별 종가 확인", url: "https://api.stock.naver.com/chart/domestic/item/373220/day?startDateTime=202607010000&endDateTime=202607092359" },
    { label: "DART LG에너지솔루션 검색", detail: "공식 사업보고서·분기보고서 보강용", url: "https://dart.fss.or.kr/dsab007/detailSearch.ax?textCrpNM=LG%EC%97%90%EB%84%88%EC%A7%80%EC%86%94%EB%A3%A8%EC%85%98" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};

window.STOCK_ANALYSES = [
  {
    id: "META",
    name: "Meta Platforms, Inc.",
    shortName: "META",
    category: "미국 주식 · AI 광고 플랫폼",
    listingMarket: "us",
    listingLabel: "미국 상장",
    snapshots: [META_20260709]
  },
  {
    id: "373220",
    name: "LG에너지솔루션",
    shortName: "LG에너지솔루션",
    category: "국내 주식 · 2차전지",
    listingMarket: "kr",
    listingLabel: "국내 상장",
    snapshots: [LGES_20260709]
  }
];
