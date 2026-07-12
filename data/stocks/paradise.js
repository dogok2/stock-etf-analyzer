const PARADISE_QUARTERS = [
  { quarter: "2021 Q2", revenue: 846, operatingIncome: -274 },
  { quarter: "2021 Q3", revenue: 1218, operatingIncome: 48 },
  { quarter: "2021 Q4", revenue: 1115, operatingIncome: -203 },
  { quarter: "2022 Q1", revenue: 997, operatingIncome: -255 },
  { quarter: "2022 Q2", revenue: 1052, operatingIncome: -206 },
  { quarter: "2022 Q3", revenue: 1895, operatingIncome: 383 },
  { quarter: "2022 Q4", revenue: 1932, operatingIncome: 182 },
  { quarter: "2023 Q1", revenue: 1915, operatingIncome: 190 },
  { quarter: "2023 Q2", revenue: 2753, operatingIncome: 549 },
  { quarter: "2023 Q3", revenue: 2856, operatingIncome: 571 },
  { quarter: "2023 Q4", revenue: 2418, operatingIncome: 147 },
  { quarter: "2024 Q1", revenue: 2648, operatingIncome: 484 },
  { quarter: "2024 Q2", revenue: 2733, operatingIncome: 320 },
  { quarter: "2024 Q3", revenue: 2682, operatingIncome: 362 },
  { quarter: "2024 Q4", revenue: 2658, operatingIncome: 195 },
  { quarter: "2025 Q1", revenue: 2833, operatingIncome: 573 },
  { quarter: "2025 Q2", revenue: 2845, operatingIncome: 429 },
  { quarter: "2025 Q3", revenue: 2882, operatingIncome: 395 },
  { quarter: "2025 Q4", revenue: 2939, operatingIncome: 167 },
  { quarter: "2026 Q1", revenue: 2940, operatingIncome: 373 }
];

const PARADISE_20260712 = {
  researchDate: "2026-07-12",
  archiveNote: "파라다이스 첫 실제 주식 분석",
  status: "active",
  tags: ["국내 상장", "외국인 카지노", "복합리조트", "인바운드 관광"],
  thesis:
    "파라다이스는 외국인 전용 카지노 4개소와 파라다이스시티·호텔 사업을 보유해 방한 관광객 증가를 실적으로 연결할 수 있는 국내 대표 인바운드 레저 기업입니다. 2025년 매출과 영업이익이 성장했고 현재 주가는 장부가치 대비 낮지만, 카지노 홀드율과 월별 매출 변동성이 크고 그랜드 하얏트 인천 웨스트타워 인수 이후 비용 부담이 늘었다는 점을 함께 봐야 합니다.",
  quote: {
    source: "Naver Finance · Yahoo Finance",
    priceLabel: "12,660원",
    changeLabel: "+3.69%",
    changeDirection: "up",
    dateLabel: "2026-07-10 정규장 종가",
    volumeLabel: "614,277주",
    extra: [
      { label: "당일 범위", value: "12,340원 ~ 13,100원" },
      { label: "52주 범위", value: "12,070원 ~ 24,000원" }
    ]
  },
  facts: [
    { label: "종목코드 / 시장", value: "034230 · KOSPI" },
    { label: "가격 기준", value: "12,660원 · 2026-07-10 종가" },
    { label: "2026 Q1 실적", value: "매출 2,940억원 · 영업이익 373억원" },
    { label: "2025 연간 실적", value: "매출 1조 1,499억원 · 영업이익 1,564억원" },
    { label: "핵심 사업", value: "외국인 전용 카지노 · 파라다이스시티 · 호텔" },
    { label: "2025 결산배당", value: "주당 150원 · 현 주가 기준 약 1.18%" }
  ],
  stockChart: {
    name: "Paradise Co., Ltd.",
    ticker: "034230",
    symbol: "KRX:034230",
    yahooSymbol: "034230.KS",
    embed: false,
    provider: "저장된 1년 가격 차트",
    note:
      "TradingView 종목코드는 KRX:034230입니다. 공유 페이지 안의 임베드가 정상 표시된다는 직접 검증 전까지 오류 위젯 대신 저장된 1년 가격 차트를 기본으로 보여주며, TradingView 링크는 보조 확인용으로 유지합니다."
  },
  userAssessment: {
    total: 3.7,
    stance: "기간별 의견",
    status: "사용자 평가 입력",
    recommendations: [
      { period: "단기", stance: "중립", reason: "11,000원 부근까지 추가로 내려올 가능성을 열어둔 판단입니다." },
      { period: "중기", stance: "매수", reason: "11,000원 부근에서 지지와 상승 흐름 전환이 확인되면 매수 강도가 높아지는 관점입니다." },
      { period: "장기", stance: "매수", reason: "낮아진 가격대에서 중장기 인바운드·복합리조트 회복 가능성을 긍정적으로 보는 판단입니다." }
    ],
    note: "11,000원 부근까지 내려올 가능성이 있고, 그 부근에서 상승 흐름으로 전환된다면 강력매수.",
    scoreItems: [
      { label: "1번 항목", score: 3.5, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 3, weight: 1 },
      { label: "4번 항목", score: 3, weight: 1 },
      { label: "5번 항목", score: 4, weight: 1 },
      { label: "6번 항목", score: 3, weight: 1 },
      { label: "7번 항목", score: 3.5, weight: 2 },
      { label: "8번 항목", score: 5, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 3.5,
    stance: "매수",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "중기",
      stance: "매수",
      reason: "현재 가격은 2026 Q1 BPS 대비 약 0.64배로 부담이 낮아졌고 인바운드 성장 축도 유효합니다. 다만 6월 카지노 매출 급감과 하얏트 인수 비용을 감안해 분할 접근이 적절합니다."
    },
    note:
      "사용자 평가와 독립적으로 작성한 10개 항목 5점 만점 평균 평가입니다. 2025년 사상 최대권 외형과 낮은 PBR은 긍정적이지만, 월별 홀드율 변동과 인수 이후 비용 증가 때문에 단기 강력매수보다 중기 분할매수로 판단합니다.",
    metrics: [
      { label: "성장성", score: 4.0, note: "2025년 매출이 7.3% 성장했고 방한 외국인과 카지노 드롭액 확대가 중장기 외형 성장 근거입니다." },
      { label: "수익성", score: 3.7, note: "2025년 영업이익은 개선됐지만 2026 Q1 영업이익이 전년 동기 대비 34.9% 감소해 비용 정상화 확인이 필요합니다." },
      { label: "현금흐름 질", score: 3.2, note: "카지노·호텔 영업 현금창출력은 있으나 복합리조트 투자와 호텔 인수로 잉여현금흐름 변동성이 커질 수 있습니다." },
      { label: "재무 안정성", score: 3.0, note: "2026 Q1 부채비율은 약 87.5%로 과도하지 않지만 당좌비율은 약 70.6%이고 인수 후 재무 부담을 계속 확인해야 합니다." },
      { label: "밸류 부담", score: 4.0, note: "12,660원은 2025 EPS 기준 PER 약 12.3배, 2026 Q1 BPS 기준 PBR 약 0.64배로 최근 실적 대비 부담이 낮은 구간입니다." },
      { label: "경쟁우위", score: 3.9, note: "서울·인천·부산·제주의 외국인 카지노 네트워크와 파라다이스시티 복합리조트 자산이 차별화 요소입니다." },
      { label: "실적 가시성", score: 3.3, note: "인바운드 방문객 증가 방향은 분명하지만 홀드율에 따라 월별·분기별 카지노 매출과 이익 변동이 큽니다." },
      { label: "자본배분", score: 3.0, note: "하얏트 인수는 고객 수용력 확대에 도움이 되지만 시너지보다 비용이 먼저 반영될 가능성이 있어 실행 확인이 필요합니다." },
      { label: "촉매/모멘텀", score: 4.0, note: "하얏트 객실 활용, 중국·일본 인바운드 성장, 카지노 매출 정상화와 낮은 밸류에이션이 재평가 촉매입니다." },
      { label: "리스크 관리", score: 3.0, note: "카지노 규제·경쟁·홀드율·마케팅비·경기 민감도가 동시에 작용해 가격 매력만으로 리스크가 사라지지는 않습니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "파라다이스 공시·IR 및 Naver Finance 연결 기준, 2026 Q1까지 반영",
    note:
      "연결 기준 매출과 영업이익을 억원 단위로 반올림했습니다. 2021~2024년 일부 4분기 값은 공식 연간 실적에서 1~3분기를 차감해 확인했으며, 2025년 이후는 회사 IR과 Naver Finance 분기 재무자료를 교차 확인했습니다.",
    periods: PARADISE_QUARTERS
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 기반 전망",
    summary:
      "기본 시나리오는 방한 외국인 증가와 하얏트 객실 활용이 카지노·복합리조트 매출을 다시 끌어올리되, 인수 비용과 마케팅비 때문에 이익률 개선은 외형보다 늦게 나타나는 흐름입니다. 11,000원대 접근 여부보다 6월 급락 이후 월별 카지노 매출과 홀드율이 정상화되는지를 함께 확인하는 것이 중요합니다.",
    positives: [
      "2025년 연결 매출은 1조 1,499억원으로 전년보다 7.3% 성장했고 영업이익도 증가했습니다.",
      "파라다이스시티와 외국인 전용 카지노 네트워크는 중국·일본 인바운드 회복의 직접 수혜 자산입니다.",
      "그랜드 하얏트 인천 웨스트타워 객실 확보는 VIP 콤프와 복합리조트 수용력을 높일 수 있습니다.",
      "현 주가는 2026 Q1 BPS 대비 약 0.64배로 자산가치 대비 할인 폭이 큰 편입니다."
    ],
    risks: [
      "2026 Q1 영업이익은 전년 동기 대비 34.9% 감소해 인수·마케팅 비용 부담이 확인됐습니다.",
      "2026년 6월 카지노 매출은 전월 대비 약 35.6%, 전년 동월 대비 약 21.2% 감소해 월별 변동성이 확대됐습니다.",
      "홀드율은 고객이 칩을 구매한 드롭액과 실제 카지노 매출 사이 변동을 키워 실적 예측을 어렵게 합니다.",
      "인스파이어 등 수도권 복합리조트 경쟁과 카지노 규제 변화가 고객 유치비용을 높일 수 있습니다."
    ],
    watch: [
      "7월 이후 카지노 매출과 홀드율의 정상화 여부",
      "하얏트 인수 이후 객실점유율·평균객실단가·VIP 콤프 효과",
      "2026 Q2 이후 영업이익률과 마케팅비 추이",
      "중국·일본 VIP 방문객과 드롭액 증가율",
      "11,000원 부근 접근 시 거래량을 동반한 지지·추세 전환 여부"
    ],
    scenarios: [
      { type: "bull", label: "상방", condition: "카지노 매출이 정상화되고 하얏트 객실 시너지가 비용 증가를 빠르게 상쇄", evidence: "월별 매출 반등, 드롭액 성장, 영업이익률 15% 안팎 회복" },
      { type: "base", label: "기본", condition: "인바운드 성장으로 외형은 늘지만 인수·마케팅 비용이 이익률 회복 속도를 제한", evidence: "매출 성장 지속, 영업이익은 완만한 개선, PBR 할인 일부 축소" },
      { type: "bear", label: "하방", condition: "낮은 홀드율과 경쟁 비용이 이어지고 11,000원 지지선까지 주가 조정", evidence: "카지노 매출 부진 지속, 영업이익 추정치 하향, 거래량 동반 저점 이탈" }
    ]
  },
  valuation: {
    note:
      "12,660원을 2025년 EPS 1,026원에 적용한 단순 PER은 약 12.3배입니다. 2026 Q1 BPS 19,751원 기준 PBR은 약 0.64배이고, 2025년 주당배당금 150원 기준 단순 배당수익률은 약 1.18%입니다. 자산가치 대비 할인은 매력적이지만 낮은 ROE와 월별 카지노 실적 변동성이 할인 요인입니다.",
    metrics: [
      { label: "2025 EPS 기준 PER", value: "약 12.3배", context: "12,660원 ÷ 1,026원 단순 계산입니다." },
      { label: "2026 Q1 BPS 기준 PBR", value: "약 0.64배", context: "12,660원 ÷ 19,751원 단순 계산입니다." },
      { label: "2025 결산 주당배당금", value: "150원", context: "현재가 기준 단순 배당수익률은 약 1.18%입니다." },
      { label: "52주 가격 위치", value: "저점권", context: "12,070원~24,000원 범위에서 하단에 가깝습니다." }
    ],
    financialChecks: [
      { label: "2026 Q1 부채비율", value: "87.49%" },
      { label: "2026 Q1 당좌비율", value: "70.64%" },
      { label: "2025 ROE", value: "5.62%" },
      { label: "2026 Q1 BPS", value: "19,751원" }
    ]
  },
  catalysts: [
    "중국·일본 방한객과 VIP 방문객 증가",
    "6월 급감 이후 월별 카지노 매출·홀드율 정상화",
    "그랜드 하얏트 인천 웨스트타워 객실 시너지 가시화",
    "영업이익률 회복과 PBR 할인 축소",
    "파라다이스시티 복합리조트 콘텐츠·객실 가동률 상승"
  ],
  risks: [
    "카지노 홀드율에 따른 월별 실적 급변",
    "하얏트 인수 관련 인건비·감가상각비·마케팅비 증가",
    "인스파이어 등 복합리조트 경쟁 심화",
    "중국·일본 경기와 환율·항공편 변화",
    "카지노 규제 및 사행산업 정책 변화"
  ],
  sources: [
    { label: "파라다이스 2026 Q1 실적자료", detail: "매출·영업이익·사업부별 실적과 하얏트 인수 영향", url: "https://paradisegroup.co.kr/public/2026/05/6/16/44/51/d322a1c8-622e-4a72-b5b8-d5562643d062.pdf" },
    { label: "파라다이스 IR 자료실", detail: "2026년 6월 Monthly IR Pack과 과거 분기 IR Pack", url: "https://paradisegroup.co.kr/ko/invest/ir/reference" },
    { label: "Naver Finance 분기 재무", detail: "2025 Q1~2026 Q1 매출·영업이익·재무비율·BPS", url: "https://m.stock.naver.com/api/stock/034230/finance/quarter" },
    { label: "Naver Finance 연간 재무", detail: "2023~2025 연간 실적·EPS·PER·PBR·배당", url: "https://m.stock.naver.com/api/stock/034230/finance/annual" },
    { label: "Yahoo Finance 034230.KS", detail: "2026-07-10 종가·거래량·52주 범위와 1년 가격", url: "https://finance.yahoo.com/quote/034230.KS/history/" },
    { label: "파라다이스 2026 Q1 실적 공시 기사", detail: "영업이익 감소율과 비용 증가 배경 교차 확인", url: "https://kbthink.com/securities-view.sbk.html?docId=20260506210232577K" },
    { label: "2026년 6월 카지노 실적", detail: "6월 카지노 매출의 전월·전년 대비 감소율", url: "https://www.ggrasia.com/gkl-paradise-co-see-sharp-m-o-m-dips-in-casino-sales-for-june" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
