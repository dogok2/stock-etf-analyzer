const JYP_QUARTERS = [
  { quarter: "2021 Q2", revenue: 406, operatingIncome: 96 },
  { quarter: "2021 Q3", revenue: 573, operatingIncome: 182 },
  { quarter: "2021 Q4", revenue: 638, operatingIncome: 163 },
  { quarter: "2022 Q1", revenue: 678, operatingIncome: 192 },
  { quarter: "2022 Q2", revenue: 678, operatingIncome: 243 },
  { quarter: "2022 Q3", revenue: 951, operatingIncome: 275 },
  { quarter: "2022 Q4", revenue: 1152, operatingIncome: 257 },
  { quarter: "2023 Q1", revenue: 1180, operatingIncome: 420 },
  { quarter: "2023 Q2", revenue: 1517, operatingIncome: 457 },
  { quarter: "2023 Q3", revenue: 1397, operatingIncome: 438 },
  { quarter: "2023 Q4", revenue: 1571, operatingIncome: 379 },
  { quarter: "2024 Q1", revenue: 1365, operatingIncome: 336 },
  { quarter: "2024 Q2", revenue: 957, operatingIncome: 93 },
  { quarter: "2024 Q3", revenue: 1705, operatingIncome: 483 },
  { quarter: "2024 Q4", revenue: 1991, operatingIncome: 369 },
  { quarter: "2025 Q1", revenue: 1408, operatingIncome: 196 },
  { quarter: "2025 Q2", revenue: 2158, operatingIncome: 529 },
  { quarter: "2025 Q3", revenue: 2326, operatingIncome: 408 },
  { quarter: "2025 Q4", revenue: 2326, operatingIncome: 419 },
  { quarter: "2026 Q1", revenue: 1860, operatingIncome: 334 }
];

const JYP_20260717 = {
  researchDate: "2026-07-17",
  archiveNote: "JYP Ent. 첫 분석",
  status: "active",
  tags: ["국내 상장", "엔터테인먼트", "글로벌 공연", "아티스트 IP·MD"],
  thesis:
    "JYP Ent.는 TWICE·Stray Kids·DAY6·ITZY·NMIXX 등 다층적인 아티스트 IP를 음반·음원뿐 아니라 공연, MD, 광고와 라이선스로 확장하는 엔터테인먼트 기업입니다. 2026년 1분기 매출은 32.1%, 영업이익은 70.0% 증가했고 MD·공연·광고가 성장을 이끌었습니다. 다만 아티스트 일정과 흥행, 재계약, 앨범 판매 변동성이 분기 실적에 크게 작용하므로 현재의 낮아진 밸류와 실적 지속성을 함께 봐야 합니다.",
  quote: {
    source: "Naver Finance 정규장",
    priceLabel: "46,650원",
    changeLabel: "-2.61%",
    changeDirection: "down",
    dateLabel: "2026-07-16 정규장 종가",
    volumeLabel: "249,786주",
    extra: [
      { label: "당일 범위", value: "46,450원 ~ 47,900원" },
      { label: "52주 범위", value: "46,450원 ~ 105,100원" }
    ]
  },
  facts: [
    { label: "종목코드 / 시장", value: "035900 · KOSDAQ" },
    { label: "가격 기준", value: "46,650원 · 2026-07-16 종가" },
    { label: "2026 Q1 실적", value: "매출 1,860억원 · 영업이익 334억원" },
    { label: "2025 연간 실적", value: "매출 8,219억원 · 영업이익 1,552억원" },
    { label: "Q1 성장 동력", value: "MD 606억원 · 공연 409억원 · 광고 136억원" },
    { label: "2025 결산배당", value: "주당 877원 · 현재가 기준 약 1.88%" }
  ],
  stockChart: {
    name: "JYP Entertainment",
    ticker: "035900",
    symbol: "KRX:035900",
    yahooSymbol: "",
    embed: false,
    provider: "저장된 최근 1년 가격 차트",
    note: "TradingView 종목 페이지에는 존재하지만 외부 임베드가 제한되는 심볼입니다. 오류 문구 대신 페이지 안의 저장 가격 차트를 기본으로 보여주고 TradingView는 보조 링크로 제공합니다."
  },
  userAssessment: USER_ASSESSMENT_PENDING,
  codexAssessment: {
    total: 4.1,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "매수",
      reason: "MD·공연 중심의 이익 구조 개선과 낮은 부채, 13배대 현재 PER을 긍정적으로 봅니다. 다만 아티스트 일정과 흥행이 분기 실적을 크게 흔들 수 있어 한 번에 비중을 싣기보다 활동 성과를 확인하는 분할 접근이 적절합니다."
    },
    note:
      "2026년 1분기는 앨범 매출 감소를 MD·공연·광고가 상쇄하며 영업이익률을 17.9%로 끌어올렸다는 점이 핵심입니다. Blue Garage와 글로벌 투어가 IP당 수익을 높이는 구조는 긍정적이지만, 2025년 순이익에는 디어유 지분 매각 이익이 포함돼 있어 PER만으로 싸다고 단정하기보다 본업 영업이익과 현금화 속도를 중심으로 판단했습니다.",
    metrics: [
      { label: "성장성", score: 4.5, note: "2026 Q1 매출이 32.1% 늘었고 MD 85.2%, 공연 88.7%, 광고 50.9% 성장으로 수익원이 넓어졌습니다." },
      { label: "수익성", score: 4.4, note: "Q1 영업이익이 70.0% 증가하고 영업이익률이 17.9%로 4.0%p 개선됐습니다." },
      { label: "현금흐름 질", score: 3.6, note: "IP 기반 사업은 자본집약도가 낮지만 공연 선급비용과 MD 재고, 디어유 매각 같은 일회성 이익을 구분해 봐야 합니다." },
      { label: "재무 안정성", score: 4.5, note: "2026 Q1 부채비율 38.5%로 재무 레버리지가 낮아 아티스트 육성과 글로벌 사업 투자 여력이 충분합니다." },
      { label: "밸류 부담", score: 3.8, note: "현재 PER 13.45배와 PBR 2.47배는 과거 성장주 프리미엄보다 낮지만 실적 변동성을 감안하면 절대 저평가로만 보기는 어렵습니다." },
      { label: "경쟁우위", score: 4.4, note: "다수 세대의 글로벌 아티스트와 자체 제작·트레이닝 시스템, 팬덤 기반 공연·MD 확장 역량이 진입장벽입니다." },
      { label: "실적 가시성", score: 3.5, note: "공개된 투어와 컴백 일정은 가시성을 주지만 흥행 성과와 공연 인식 시점에 따라 분기 편차가 큽니다." },
      { label: "자본배분", score: 4.2, note: "2026~2028년 연결 순이익의 15~20% 배당정책과 IP·플랫폼 투자를 병행하는 방향이 명확합니다." },
      { label: "촉매/모멘텀", score: 4.6, note: "TWICE·Stray Kids 대형 투어, SKZOO 라이선싱, Blue Garage의 글로벌 MD 확대가 강한 촉매입니다." },
      { label: "리스크 관리", score: 3.2, note: "아티스트 의존, 재계약, 건강·활동 공백, 흥행 실패와 지역별 규제·환율 위험이 실적에 직접 연결됩니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "JYP IR·분기 재무자료 · 2026 Q1 기준",
    note: "연결 기준 매출과 영업이익을 억원 단위로 반올림했습니다. 2026 Q2 컨센서스는 아직 발표 실적이 아니므로 포함하지 않았습니다.",
    periods: JYP_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 대형 아티스트 투어와 MD·라이선스 매출이 앨범 의존도를 낮추고 10%대 후반 영업이익률을 지지하는 흐름입니다. 현재 주가는 52주 저점 부근까지 내려왔지만, 이것이 기회가 되려면 2026년 2분기 이후에도 Blue Garage의 성장과 투어 수익성이 유지되는지 확인해야 합니다.",
    positives: [
      "2026 Q1 매출 1,860억원, 영업이익 334억원으로 각각 32.1%, 70.0% 증가했습니다.",
      "MD 매출은 606억원으로 85.2%, 공연 매출은 409억원으로 88.7% 증가해 앨범 외 수익화가 강화됐습니다.",
      "광고 매출은 136억원으로 50.9% 늘어 분기 사상 최대를 기록했습니다.",
      "Blue Garage 매출은 409억원으로 180.5% 늘었고 영업이익률 11.1%를 기록했습니다."
    ],
    risks: [
      "2026 Q1 앨범 매출은 252억원으로 15.1% 감소해 핵심 팬덤 지표의 회복 여부를 확인해야 합니다.",
      "아티스트 건강·재계약·컴백과 투어 일정 변경은 매출 인식 시점과 이익률을 크게 흔들 수 있습니다.",
      "2025 Q1 디어유 지분 매각 이익 때문에 순이익 전년 비교와 단순 PER 해석이 왜곡될 수 있습니다.",
      "글로벌 공연 원가, 물류·MD 재고, 환율과 국가별 규제가 수익성 개선을 제한할 수 있습니다."
    ],
    watch: [
      "TWICE·Stray Kids 투어 관객 수와 회당 매출·수익성",
      "Blue Garage 매출 성장과 영업이익률 유지 여부",
      "앨범 판매 감소가 음원·MD·공연으로 계속 상쇄되는지",
      "신인 KickFlip·NEXZ·NMIXX의 팬덤 확장과 손익분기 진입",
      "2026 Q2 이후 영업이익률 17%대 유지 여부"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "대형 투어와 SKZOO·MD 글로벌 확장이 이어지고 신인 수익화가 빨라짐", evidence: "MD·공연 두 자릿수 성장, 영업이익률 20% 접근, 앨범 판매 회복" },
      { type: "base", label: "기본", condition: "앨범 부진을 공연·MD·광고가 상쇄하며 10%대 후반 이익률을 유지", evidence: "분기 매출 1,800~2,300억원대, Blue Garage 성장 지속" },
      { type: "bear", label: "하방", condition: "주요 아티스트 일정 공백과 흥행 둔화, MD 재고·공연 원가가 동시에 증가", evidence: "앨범·공연 매출 동반 감소, 영업이익률 10%대 초반 하락" }
    ]
  },
  valuation: {
    note: "46,650원 기준 Naver Finance의 현재 PER은 13.45배, PBR은 2.47배입니다. 2025년 결산 주당배당금 877원을 적용한 단순 배당수익률은 약 1.88%입니다. 가격은 52주 저점 46,450원에 매우 가깝지만, 2025년 순이익의 디어유 매각 이익을 제외한 본업 이익을 중심으로 안전마진을 판단해야 합니다.",
    metrics: [
      { label: "현재 PER", value: "13.45배", context: "Naver Finance 표시 EPS 3,469원 기준" },
      { label: "현재 PBR", value: "2.47배", context: "2026 Q1 BPS 18,887원 기준" },
      { label: "2025 결산배당", value: "주당 877원", context: "현재가 기준 단순 배당수익률 약 1.88%" },
      { label: "52주 가격 위치", value: "저점 부근", context: "46,450원 ~ 105,100원 범위에서 하단 약 0.3%" }
    ],
    financialChecks: [
      { label: "2026 Q1 영업이익률", value: "17.95%" },
      { label: "2026 Q1 부채비율", value: "38.54%" },
      { label: "2026 Q1 ROE", value: "21.29%" },
      { label: "2026 Q1 BPS", value: "18,887원" }
    ]
  },
  catalysts: [
    "TWICE·Stray Kids·DAY6 등 대형 아티스트의 글로벌 투어",
    "SKZOO 글로벌 팝업·라이선싱과 Blue Garage 이커머스 효율화",
    "NMIXX·KickFlip·NEXZ 등 성장 아티스트의 수익 기여 확대",
    "앨범 외 MD·공연·광고 매출 비중 상승",
    "낮아진 밸류와 2026~2028년 15~20% 배당성향 정책"
  ],
  risks: [
    "주요 아티스트 흥행·재계약·건강과 활동 일정 의존",
    "앨범 판매 감소와 팬덤 성장 둔화",
    "공연·물류 원가와 MD 재고 부담",
    "환율·지역 규제·지정학적 변수",
    "디어유 매각 같은 일회성 요인에 따른 순이익 왜곡"
  ],
  sources: [
    { label: "JYP 2026 Q1 실적 설명", detail: "매출·영업이익·사업부문 성장률과 비용 구조", url: "https://www.jype.com/ko/Board/Detail?gubun=irdata&jbst_sq=6984" },
    { label: "JYP 2026 Q1 IR 자료", detail: "분기 실적·아티스트 활동·사업 계획", url: "https://www.jype.com/ko/Board/Detail?gubun=irdata&jbst_sq=6980" },
    { label: "JYP 배당정책", detail: "2025 DPS 877원과 FY2026~FY2028 배당성향 15~20%", url: "https://www.jype.com/ko/IR/DividendStatus" },
    { label: "Naver Finance 분기 재무", detail: "2025 Q1~2026 Q1 실적·재무비율·BPS", url: "https://m.stock.naver.com/api/stock/035900/finance/quarter" },
    { label: "Naver Finance 연간 재무", detail: "2023~2025 연간 실적·EPS·배당", url: "https://m.stock.naver.com/api/stock/035900/finance/annual" },
    { label: "Naver Finance 시세", detail: "2026-07-16 종가·거래량·52주 범위·현재 밸류", url: "https://m.stock.naver.com/domestic/stock/035900/total" },
    { label: "StockAnalysis 분기 재무", detail: "공시 기반 최근 20개 분기 매출·영업이익 원자료 교차 확인", url: "https://stockanalysis.com/quote/kosdaq/035900/financials/?p=quarterly" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
