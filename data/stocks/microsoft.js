const MICROSOFT_QUARTERS = [
  { quarter: "FY2021 Q4", revenue: 46152, operatingIncome: 19095 },
  { quarter: "FY2022 Q1", revenue: 45317, operatingIncome: 20238 },
  { quarter: "FY2022 Q2", revenue: 51728, operatingIncome: 22247 },
  { quarter: "FY2022 Q3", revenue: 49360, operatingIncome: 20364 },
  { quarter: "FY2022 Q4", revenue: 51865, operatingIncome: 20534 },
  { quarter: "FY2023 Q1", revenue: 50122, operatingIncome: 21518 },
  { quarter: "FY2023 Q2", revenue: 52747, operatingIncome: 20399 },
  { quarter: "FY2023 Q3", revenue: 52857, operatingIncome: 22352 },
  { quarter: "FY2023 Q4", revenue: 56189, operatingIncome: 24254 },
  { quarter: "FY2024 Q1", revenue: 56517, operatingIncome: 26895 },
  { quarter: "FY2024 Q2", revenue: 62020, operatingIncome: 27032 },
  { quarter: "FY2024 Q3", revenue: 61858, operatingIncome: 27581 },
  { quarter: "FY2024 Q4", revenue: 64727, operatingIncome: 27925 },
  { quarter: "FY2025 Q1", revenue: 65585, operatingIncome: 30552 },
  { quarter: "FY2025 Q2", revenue: 69632, operatingIncome: 31653 },
  { quarter: "FY2025 Q3", revenue: 70066, operatingIncome: 32000 },
  { quarter: "FY2025 Q4", revenue: 76441, operatingIncome: 34323 },
  { quarter: "FY2026 Q1", revenue: 77673, operatingIncome: 37961 },
  { quarter: "FY2026 Q2", revenue: 81273, operatingIncome: 38275 },
  { quarter: "FY2026 Q3", revenue: 82886, operatingIncome: 38398 }
];

const MICROSOFT_20260715 = {
  researchDate: "2026-07-15",
  archiveNote: "Microsoft 첫 분석",
  status: "active",
  tags: ["미국 상장", "클라우드", "AI 플랫폼", "기업용 소프트웨어"],
  thesis:
    "Microsoft는 Azure, Microsoft 365, 보안, 데이터·개발 도구를 하나의 기업 생태계로 묶고 Copilot을 추가해 AI 수요를 기존 구독 매출로 전환할 수 있는 대표 플랫폼입니다. FY2026 Q3의 Azure 성장률 40%와 상업용 잔여계약가치 $627B는 성장 가시성을 높이지만, 분기 설비투자 $30.9B와 클라우드 총마진 하락은 AI 인프라 투자 회수 속도를 반드시 함께 봐야 한다는 뜻입니다.",
  quote: {
    source: "Yahoo Finance 일봉",
    priceLabel: "$390.99",
    changeLabel: "+1.53%",
    changeDirection: "up",
    dateLabel: "2026-07-13 미국장 종가",
    volumeLabel: "28.91M주",
    extra: [
      { label: "당일 범위", value: "$384.15 ~ $393.65" },
      { label: "최근 1년 범위", value: "$349.20 ~ $555.45" }
    ]
  },
  facts: [
    { label: "티커 / 시장", value: "MSFT · NASDAQ" },
    { label: "가격 기준", value: "$390.99 · 2026-07-13 종가" },
    { label: "FY2026 Q3", value: "매출 $82.89B · 영업이익 $38.40B" },
    { label: "클라우드", value: "$54.5B · 전년 대비 +29%" },
    { label: "Azure 성장률", value: "+40% · 환율 고정 +39%" },
    { label: "분기 배당", value: "$0.91 · 2026년 9월 지급 예정" }
  ],
  stockChart: {
    name: "Microsoft",
    ticker: "MSFT",
    symbol: "NASDAQ:MSFT",
    yahooSymbol: "MSFT",
    embed: true,
    provider: "TradingView 실시간 차트",
    note: "공유 페이지에서 바로 볼 수 있도록 TradingView 차트를 사용합니다."
  },
  userAssessment: {
    total: 2.8,
    stance: "기간별 의견",
    status: "사용자 평가 입력",
    recommendations: [
      { period: "단기", stance: "중립", reason: "저번 저점인 355달러 부근의 지지 여부를 확인해야 한다는 관점입니다." },
      { period: "중기", stance: "매수", reason: "355달러 부근을 지키는 동안에는 중기 매수 관점을 유지합니다." },
      { period: "장기", stance: "강력매수", reason: "단기 가격 변동보다 장기 보유 매력을 더 높게 평가합니다." }
    ],
    note: "저번 저점인 355달러 부근이 깨진다면 매우 위험.",
    scoreItems: [
      { label: "1번 항목", score: 4, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 3.5, weight: 1 },
      { label: "4번 항목", score: 2.5, weight: 1 },
      { label: "5번 항목", score: 3, weight: 1 },
      { label: "6번 항목", score: 3.5, weight: 1 },
      { label: "7번 항목", score: 2, weight: 2 },
      { label: "8번 항목", score: 2, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 4.4,
    stance: "매수",
    confidence: "높음",
    author: "Codex 독립 평가",
    recommendation: {
      period: "장기",
      stance: "매수",
      reason: "Azure·Microsoft 365·보안의 반복 매출과 AI 확장성이 강하고 재무 체력도 우수합니다. 다만 AI 설비투자 급증과 공급 제약이 마진 및 현금흐름에 주는 영향을 감안해 장기 보유 관점으로 판단합니다."
    },
    note:
      "기업용 소프트웨어 배포망과 Azure 인프라를 동시에 보유한 점이 가장 큰 강점입니다. 현재 실적은 AI 수요가 실제 매출과 계약잔고로 이어지고 있음을 보여주지만, 대규모 데이터센터 투자가 먼저 집행되는 구조라 단기 분기보다 장기적인 투자 회수율을 확인하는 접근이 적절합니다.",
    metrics: [
      { label: "성장성", score: 4.7, note: "FY2026 Q3 매출이 18% 증가했고 Azure는 40%, Microsoft Cloud는 29% 성장했습니다." },
      { label: "수익성", score: 4.8, note: "분기 영업이익률이 약 46.3%로 매우 높고 영업이익 증가율도 20%를 기록했습니다." },
      { label: "현금흐름 질", score: 4.2, note: "분기 영업현금 $46.7B에서 설비투자 $30.9B를 차감한 단순 잉여현금은 약 $15.8B입니다." },
      { label: "재무 안정성", score: 4.8, note: "현금·단기투자 $78.3B가 유동분 포함 장기부채 약 $40.3B를 웃돕니다." },
      { label: "밸류 부담", score: 3.2, note: "$390.99는 TTM GAAP 희석 EPS 약 $16.79 기준 단순 PER 약 23.3배입니다. OpenAI 투자 평가손익 영향을 감안해야 합니다." },
      { label: "경쟁우위", score: 4.9, note: "Azure, Microsoft 365, Windows, GitHub, 보안·데이터 제품을 묶는 기업 생태계와 전환비용이 강력합니다." },
      { label: "실적 가시성", score: 4.8, note: "상업용 잔여계약가치가 $627B로 99% 증가해 장기 계약 매출의 가시성이 높습니다." },
      { label: "자본배분", score: 4.2, note: "AI 투자와 연구개발을 확대하면서도 분기 $10.2B를 배당과 자사주 매입으로 환원했습니다." },
      { label: "촉매/모멘텀", score: 4.6, note: "Azure 공급 확대, Copilot 유료 좌석 증가, AI 사업 연환산 매출 $37B 돌파가 주요 촉매입니다." },
      { label: "리스크 관리", score: 3.9, note: "AI 투자 회수, OpenAI 의존·경쟁, 반독점 규제, 사이버보안과 클라우드 공급 제약을 관리해야 합니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "USD",
    unit: "백만 달러",
    coverage: "FY2021 Q4 ~ FY2026 Q3, 20개 분기",
    asOf: "SEC companyfacts · FY2026 Q3 10-Q 기준",
    note: "Microsoft 회계연도 기준입니다. SEC XBRL의 매출과 영업이익을 사용했고 Q4는 연간 값에서 Q1~Q3를 차감해 계산했습니다.",
    periods: MICROSOFT_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary: "기본 시나리오는 Azure 공급 확대와 Copilot의 좌석·사용량 증가가 두 자릿수 매출 성장을 이어가고, 규모의 경제가 AI 인프라 비용을 점진적으로 흡수하는 흐름입니다. 단기적으로는 설비투자와 감가상각이 빠르게 늘어 클라우드 총마진을 누를 수 있지만, 계약잔고와 기업 고객 기반은 장기 성장 가시성을 지지합니다.",
    positives: [
      "FY2026 Q3 Microsoft Cloud 매출은 $54.5B로 29% 증가했고 Azure 성장률은 40%였습니다.",
      "상업용 잔여계약가치는 $627B로 99% 증가해 대형 장기계약이 크게 쌓였습니다.",
      "회사는 FY2026 Q4 총매출을 $86.7B~$87.8B, Azure 환율 고정 성장률을 39~40%로 전망했습니다.",
      "현금·단기투자자산이 부채보다 많아 AI 투자 확대를 견딜 재무 여력이 충분합니다."
    ],
    risks: [
      "분기 설비투자 $30.9B와 AI 관련 감가상각 증가는 잉여현금흐름과 클라우드 총마진을 압박할 수 있습니다.",
      "AI 용량 공급이 수요를 따라가지 못하면 매출 인식이 지연되고 반대로 과잉투자가 되면 투자수익률이 낮아질 수 있습니다.",
      "OpenAI와의 경제적 관계, 경쟁 모델 확산, 반독점·클라우드 규제는 장기 수익구조의 변수입니다.",
      "Windows·Xbox 등 소비자 사업의 약세가 클라우드 성장 일부를 상쇄할 수 있습니다."
    ],
    watch: [
      "Azure 성장률과 AI 용량 공급 제약 완화 여부",
      "Microsoft Cloud 총마진과 분기 설비투자",
      "Copilot 유료 좌석·사용량 및 ARPU",
      "상업용 잔여계약가치의 실제 매출 전환 속도",
      "OpenAI 투자손익을 제외한 본업 EPS 성장"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "AI 공급 확대와 Copilot 수익화가 예상보다 빨라지고 클라우드 마진이 안정", evidence: "Azure 40% 안팎 성장 유지, 계약잔고 고성장, FCF 회복" },
      { type: "base", label: "기본", condition: "두 자릿수 매출·영업이익 성장을 유지하되 높은 투자비가 마진 개선 속도를 제한", evidence: "FY2026 Q4 가이던스 달성, 클라우드 총마진 60%대 중반, CAPEX 고점 유지" },
      { type: "bear", label: "하방", condition: "AI 투자 회수가 지연되고 경쟁·규제로 가격과 마진이 동시에 압박", evidence: "Azure 성장 둔화, 계약잔고 전환 지연, 감가상각 급증, 가이던스 하향" }
    ]
  },
  valuation: {
    note: "$390.99를 FY2026 9개월 GAAP 희석 EPS $13.14와 FY2025 Q4 EPS $3.65를 합친 TTM 약 $16.79에 적용하면 단순 PER은 약 23.3배입니다. 강한 성장성과 순현금 구조를 감안하면 과도한 수준은 아니지만, OpenAI 투자 평가손익과 AI CAPEX를 분리해서 볼 필요가 있습니다.",
    metrics: [
      { label: "TTM GAAP PER", value: "약 23.3배", context: "$390.99 ÷ TTM 희석 EPS 약 $16.79" },
      { label: "분기 영업이익률", value: "약 46.3%", context: "$38.40B ÷ $82.89B" },
      { label: "연환산 배당", value: "$3.64", context: "최근 분기배당 $0.91 × 4" },
      { label: "단순 배당수익률", value: "약 0.93%", context: "$3.64 ÷ $390.99, 세전" }
    ],
    financialChecks: [
      { label: "현금·단기투자", value: "$78.3B" },
      { label: "유동분 포함 장기부채", value: "$40.3B" },
      { label: "Q3 영업현금", value: "$46.7B" },
      { label: "Q3 설비투자", value: "$30.9B" }
    ]
  },
  catalysts: [
    "Azure AI 용량 확대와 40% 안팎 성장 유지",
    "Microsoft 365 Copilot·GitHub Copilot 유료 사용량 증가",
    "$627B 상업용 잔여계약가치의 매출 전환",
    "AI 인프라 효율화에 따른 클라우드 총마진 안정",
    "보안·데이터·에이전트 제품의 교차판매 확대"
  ],
  risks: [
    "AI 데이터센터 투자 급증과 감가상각 부담",
    "OpenAI 관계 변화와 AI 모델 경쟁 심화",
    "미국·유럽의 반독점 및 클라우드 규제",
    "사이버보안 사고와 서비스 장애",
    "Windows·Gaming 수요 둔화와 환율 변동"
  ],
  sources: [
    { label: "Microsoft FY2026 Q3 Results", detail: "매출·영업이익·Azure·클라우드·계약잔고", url: "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast" },
    { label: "Microsoft FY2026 Q3 Income Statements", detail: "GAAP 손익계산서와 분기·누적 수치", url: "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/income-statements" },
    { label: "Microsoft FY2026 Q3 Earnings Call", detail: "FY2026 Q4 가이던스와 AI 투자·공급 설명", url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3" },
    { label: "SEC FY2026 Q3 Form 10-Q", detail: "현금·부채·현금흐름·위험요인", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312526191507/msft-20260331.htm" },
    { label: "Microsoft 분기배당 발표", detail: "주당 $0.91, 2026년 9월 지급", url: "https://news.microsoft.com/source/2026/06/10/microsoft-announces-quarterly-dividend-29/" },
    { label: "SEC companyfacts", detail: "20개 분기 매출·영업이익 XBRL 원자료", url: "https://data.sec.gov/api/xbrl/companyfacts/CIK0000789019.json" },
    { label: "MSFT 역사적 시세", detail: "2026-07-13 확정 종가·거래량·일중 범위", url: "https://finance.yahoo.com/quote/MSFT/history/" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
