const HYUNDAI_EC_QUARTERS = [
  { quarter: "2021 Q2", revenue: 43835, operatingIncome: 1410 },
  { quarter: "2021 Q3", revenue: 43520, operatingIncome: 2204 },
  { quarter: "2021 Q4", revenue: 51804, operatingIncome: 1913 },
  { quarter: "2022 Q1", revenue: 41453, operatingIncome: 1715 },
  { quarter: "2022 Q2", revenue: 55794, operatingIncome: 1754 },
  { quarter: "2022 Q3", revenue: 54308, operatingIncome: 1537 },
  { quarter: "2022 Q4", revenue: 60834, operatingIncome: 813 },
  { quarter: "2023 Q1", revenue: 60311, operatingIncome: 1735 },
  { quarter: "2023 Q2", revenue: 71563, operatingIncome: 2236 },
  { quarter: "2023 Q3", revenue: 76202, operatingIncome: 2455 },
  { quarter: "2023 Q4", revenue: 85984, operatingIncome: 1444 },
  { quarter: "2024 Q1", revenue: 85453, operatingIncome: 2509 },
  { quarter: "2024 Q2", revenue: 86212, operatingIncome: 1473 },
  { quarter: "2024 Q3", revenue: 82569, operatingIncome: 1143 },
  { quarter: "2024 Q4", revenue: 72469, operatingIncome: -17759 },
  { quarter: "2025 Q1", revenue: 74556, operatingIncome: 2137 },
  { quarter: "2025 Q2", revenue: 77207, operatingIncome: 2170 },
  { quarter: "2025 Q3", revenue: 78265, operatingIncome: 1035 },
  { quarter: "2025 Q4", revenue: 80601, operatingIncome: 1188 },
  { quarter: "2026 Q1", revenue: 62813, operatingIncome: 1809 }
];

const HYUNDAI_EC_20260712 = {
  researchDate: "2026-07-12",
  archiveNote: "현대건설 첫 분석",
  status: "active",
  tags: ["종합건설", "원전·SMR", "해외 플랜트", "도시정비"],
  thesis:
    "현대건설은 국내 주택·도시정비와 중동 대형 플랜트, 원전·SMR 시공 역량을 함께 보유한 국내 대표 종합건설사입니다. 2025년 말 약 95.1조원의 수주잔고는 장기 매출 기반이지만, 2024년 해외현장 원가 재산정으로 드러난 실행 리스크와 2026년 1분기 신규수주 둔화를 함께 봐야 합니다. 최근 원전 기대를 선반영한 급등 뒤 변동성도 커져 가격 안전마진이 중요합니다.",
  quote: {
    source: "Yahoo Finance",
    priceLabel: "107,200원",
    changeLabel: "+8.39%",
    changeDirection: "up",
    dateLabel: "2026-07-10 종가",
    volumeLabel: "546,029주",
    extra: [
      { label: "당일 범위", value: "99,600원 ~ 110,000원" },
      { label: "52주 범위", value: "54,100원 ~ 198,400원" }
    ]
  },
  facts: [
    { label: "종목코드 / 시장", value: "000720 · KOSPI" },
    { label: "가격 기준", value: "107,200원 · 2026-07-10 종가" },
    { label: "2026 Q1 실적", value: "매출 6조 2,813억원 · 영업이익 1,809억원" },
    { label: "2025 연간 실적", value: "매출 31조 629억원 · 영업이익 6,530억원" },
    { label: "2025년 말 수주잔고", value: "약 95조 896억원 · 약 3년 5개월치" },
    { label: "2025 결산배당", value: "주당 800원 · 현 주가 기준 약 0.75%" }
  ],
  stockChart: {
    name: "현대건설",
    ticker: "000720",
    symbol: "KRX:000720",
    yahooSymbol: "000720.KS",
    embed: false,
    provider: "저장된 1년 가격 차트",
    note: "공유 페이지에서 TradingView 임베드가 정상 표시되는지 검증되지 않은 종목이므로, 오류 문구 대신 같은 페이지 안에서 바로 볼 수 있는 저장 일봉 차트를 표시합니다."
  },
  userAssessment: {
    total: 1.5,
    stance: "기간별 의견",
    status: "사용자 평가 입력",
    recommendations: [
      { period: "단기", stance: "매도", reason: "주봉 200선까지 추가 하락할 가능성과 단기 반등 뒤 재하락 가능성을 함께 봅니다." },
      { period: "중기", stance: "중립", reason: "낙폭 이후 반등 여지는 있으나 추세 전환을 확인하기 전까지는 중립 관점입니다." },
      { period: "장기", stance: "매수", reason: "7만원 부근이 온다면 장기 매수 포인트가 될 수 있다고 판단합니다." }
    ],
    note: "주봉 200선까지 내려올 가능성이 있고, 여기부터 단기 반등은 있을 수도 있지만 다시 내려오긴 할 것 같음. 70,000원 부근이 온다면 매수 포인트 예상.",
    scoreItems: [
      { label: "1번 항목", score: 2, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 1, weight: 1 },
      { label: "4번 항목", score: 1, weight: 1 },
      { label: "5번 항목", score: 1, weight: 1 },
      { label: "6번 항목", score: 1, weight: 1 },
      { label: "7번 항목", score: 1, weight: 2 },
      { label: "8번 항목", score: 2, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 2.9,
    stance: "중립",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "중립",
      reason: "원전·SMR 경쟁력과 대형 수주잔고는 강점이지만, 2026년 신규수주 둔화와 2024년 대규모 원가 재산정, 약 22배의 2026년 예상 PER을 감안하면 현재 가격에서 추격할 안전마진은 크지 않습니다."
    },
    note:
      "현대건설은 원전과 중동 플랜트에서 국내 최고 수준의 레퍼런스를 갖고 있고 수주잔고도 충분합니다. 다만 자회사 현대엔지니어링의 해외현장 손실이 보여준 원가·공정 통제 문제와 낮은 이익률, 최근 테마성 급등을 감안하면 수주가 실제 이익으로 전환되는지 확인해야 합니다. 제 평가는 사용자 의견과 독립적으로 작성했으며, 현 가격에서는 중립입니다.",
    metrics: [
      { label: "성장성", score: 3.2, note: "대형 해외 플랜트와 원전·SMR 기회는 크지만 2026 Q1 매출이 전년 동기보다 15.8% 감소했습니다." },
      { label: "수익성", score: 2.0, note: "2025년 흑자 전환에도 영업이익률은 약 2.1%이며 프로젝트 원가 변동에 매우 민감합니다." },
      { label: "현금흐름 질", score: 2.4, note: "선수금과 공정 진행에 따라 현금흐름 변동이 크고 프로젝트 손실이 뒤늦게 반영될 위험이 있습니다." },
      { label: "재무 안정성", score: 3.1, note: "2026 Q1 부채비율 157.6%, 당좌비율 144.7%로 유동성은 방어되지만 과거보다 부채 부담이 높아졌습니다." },
      { label: "밸류 부담", score: 2.0, note: "107,200원은 2026년 예상 EPS 4,820원 기준 약 22.2배로 전통 건설주 대비 높은 성장 프리미엄이 반영됐습니다." },
      { label: "경쟁우위", score: 4.3, note: "대형 원전·SMR, 중동 플랜트와 도시정비의 설계·조달·시공 레퍼런스가 강한 진입장벽입니다." },
      { label: "실적 가시성", score: 3.4, note: "약 95.1조원 수주잔고는 매출 가시성을 높이지만 원가율과 손실 인식 시점의 불확실성이 큽니다." },
      { label: "자본배분", score: 2.5, note: "배당은 유지됐지만 낮은 수익성과 대형 프로젝트 운전자금, 자회사 리스크가 자본 효율을 제약합니다." },
      { label: "촉매/모멘텀", score: 4.1, note: "해외 원전 수주, SMR 상용화, 중동 메가프로젝트와 국내 도시정비 수주가 강한 촉매입니다." },
      { label: "리스크 관리", score: 2.0, note: "2024년 4분기 1조 7,759억원 영업손실은 해외현장 원가·공정 관리 위험을 분명하게 보여줬습니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "현대건설 공시·IR 및 분기 실적 발표 기준",
    note: "연결 기준 매출과 영업이익입니다. 일부 과거 분기 값은 당시 잠정 실적 기준이며, 이후 회계 재분류·연간 확정 과정에서 연간 합계와 소폭 차이가 날 수 있습니다. 2024 Q4는 연간 확정치에서 1~3분기를 차감한 값입니다.",
    periods: HYUNDAI_EC_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 2024년 해외현장 비용을 선반영한 뒤 2025~2026년에 수익성이 정상화되는 흐름입니다. 다만 2026 Q1 신규수주가 3조 9,621억원으로 연간 목표의 11.9%에 그쳤고 주가가 원전 기대를 빠르게 반영했기 때문에, 다음 상승은 수주 발표보다 실제 마진 개선이 확인돼야 지속될 가능성이 큽니다.",
    positives: [
      "2025년 영업이익 6,530억원으로 2024년 대규모 적자에서 흑자 전환했습니다.",
      "2025년 말 수주잔고 약 95.1조원은 약 3년 5개월치 일감으로 중장기 매출 기반이 충분합니다.",
      "대형 원전과 SMR, 중동 석유화학·가스 프로젝트에서 축적한 시공 레퍼런스가 신규 수주 경쟁력입니다.",
      "국내 도시정비와 인프라 사업은 해외 플랜트 변동성을 일부 보완합니다."
    ],
    risks: [
      "2024 Q4 해외현장 원가 재산정으로 1조 7,759억원 영업손실을 기록해 프로젝트 실행 리스크가 현실화됐습니다.",
      "2026 Q1 신규수주는 전년 동기 대비 58.0% 감소했고 연간 목표 달성률은 11.9%였습니다.",
      "2026 Q1 매출과 영업이익이 전년 동기보다 각각 15.8%, 15.4% 감소했습니다.",
      "원전 기대를 반영한 급등으로 52주 고저 변동폭이 커졌고 밸류에이션 부담도 높아졌습니다."
    ],
    watch: [
      "2026년 신규수주 목표 달성률과 해외 원전·SMR 본계약",
      "현대엔지니어링 해외현장의 추가 원가 재산정 여부",
      "분기 영업이익률 3% 회복과 현금흐름 개선",
      "약 95.1조원 수주잔고의 매출·이익 전환 속도",
      "주봉 200선 및 사용자 기준 70,000원 부근의 지지 여부"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "해외 원전 본계약과 중동 수주가 늘고 기존 현장의 원가율이 안정", evidence: "신규수주 목표 초과, 영업이익률 3% 이상, 추가 손실 없음" },
      { type: "base", label: "기본", condition: "수주잔고는 매출로 전환되지만 낮은 마진과 신규수주 둔화가 주가 프리미엄을 제한", evidence: "연간 영업이익 8천억원 안팎, 수주 목표 근접, 밸류 배수 정상화" },
      { type: "bear", label: "하방", condition: "해외현장 추가 손실과 수주 공백이 겹치고 원전 기대가 약화", evidence: "원가율 재상승, 가이던스 하향, 7만원대 재진입" }
    ]
  },
  valuation: {
    note: "107,200원을 2026년 시장 예상 EPS 4,820원에 적용하면 예상 PER은 약 22.2배입니다. 2026 Q1 BPS 81,251원 기준 PBR은 약 1.32배이며, 2025년 주당배당금 800원 기준 단순 배당수익률은 약 0.75%입니다. 원전 성장 프리미엄을 인정해도 전통 건설업의 이익 변동성을 감안하면 싸다고 보기는 어렵습니다.",
    metrics: [
      { label: "2026E PER", value: "약 22.2배", context: "107,200원 ÷ 예상 EPS 4,820원" },
      { label: "2026 Q1 BPS 기준 PBR", value: "약 1.32배", context: "107,200원 ÷ BPS 81,251원" },
      { label: "2025 결산 주당배당금", value: "800원", context: "현 주가 기준 단순 배당수익률 약 0.75%" },
      { label: "52주 가격 위치", value: "중간권", context: "54,100원 ~ 198,400원 범위" }
    ],
    financialChecks: [
      { label: "2026 Q1 부채비율", value: "157.57%" },
      { label: "2026 Q1 당좌비율", value: "144.68%" },
      { label: "2025 ROE", value: "4.58%" },
      { label: "2026 Q1 BPS", value: "81,251원" }
    ]
  },
  catalysts: [
    "해외 대형 원전 수주와 SMR 최초호기·상용화 프로젝트 참여",
    "사우디 등 중동 메가 프로젝트의 신규 수주와 공정 본격화",
    "2024년 비용 선반영 이후 해외현장 원가율 정상화",
    "국내 도시정비·재건축 수주 확대",
    "2026년 신규수주 목표 달성과 수주잔고의 이익 전환"
  ],
  risks: [
    "현대엔지니어링 해외현장의 추가 원가 재산정과 공사 지연",
    "원자재·인건비 상승과 낮은 건설 마진",
    "2026년 신규수주 둔화와 대형 프로젝트 발주 지연",
    "국내 주택경기·PF·미분양 위험",
    "원전 기대 선반영에 따른 높은 밸류와 큰 주가 변동성"
  ],
  sources: [
    { label: "현대건설 경영실적", detail: "2023~2025 연간 매출·영업이익·재무정보", url: "https://www.hdec.kr/kr/invest/finance_01.aspx" },
    { label: "현대건설 IR 일정·자료", detail: "분기 실적 발표와 IR 자료", url: "https://www.hdec.kr/kr/invest/schedule.aspx" },
    { label: "2026 Q1 실적 분석", detail: "매출·영업이익·신규수주와 연간 목표 달성률", url: "https://kbthink.com/securities-view.html?docId=20260428075611020K" },
    { label: "Naver Finance 분기 재무", detail: "2025 Q1~2026 Q1 실적·부채비율·당좌비율·BPS", url: "https://m.stock.naver.com/api/stock/000720/finance/quarter" },
    { label: "Naver Finance 연간 재무", detail: "2023~2025 실적·2026 컨센서스·EPS·BPS·배당", url: "https://m.stock.naver.com/api/stock/000720/finance/annual" },
    { label: "2024 Q2 실적", detail: "매출 8조 6,212억원·영업이익 1,473억원", url: "https://www.yna.co.kr/view/AKR20240719083251527" },
    { label: "2024 Q3 실적", detail: "매출 8조 2,569억원·영업이익 1,143억원", url: "https://www.yna.co.kr/view/AKR20241022096551527" },
    { label: "Yahoo Finance 000720.KS", detail: "2026-07-10 종가·거래량·52주 범위와 저장 차트", url: "https://finance.yahoo.com/quote/000720.KS/history/" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
