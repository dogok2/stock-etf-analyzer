
const LGES_QUARTERS = [
  { quarter: "2021 Q2", revenue: 51310, operatingIncome: 7243 },
  { quarter: "2021 Q3", revenue: 40274, operatingIncome: -3728 },
  { quarter: "2021 Q4", revenue: 44394, operatingIncome: 757 },
  { quarter: "2022 Q1", revenue: 43423, operatingIncome: 2589 },
  { quarter: "2022 Q2", revenue: 50706, operatingIncome: 1956 },
  { quarter: "2022 Q3", revenue: 76482, operatingIncome: 5219 },
  { quarter: "2022 Q4", revenue: 85375, operatingIncome: 2374 },
  { quarter: "2023 Q1", revenue: 87471, operatingIncome: 6332 },
  { quarter: "2023 Q2", revenue: 87735, operatingIncome: 4606 },
  { quarter: "2023 Q3", revenue: 82235, operatingIncome: 7312 },
  { quarter: "2023 Q4", revenue: 80013, operatingIncome: 3382 },
  { quarter: "2024 Q1", revenue: 61287, operatingIncome: 1573 },
  { quarter: "2024 Q2", revenue: 61619, operatingIncome: 1953 },
  { quarter: "2024 Q3", revenue: 68778, operatingIncome: 4483 },
  { quarter: "2024 Q4", revenue: 64512, operatingIncome: -2255 },
  { quarter: "2025 Q1", revenue: 67227, operatingIncome: 3747 },
  { quarter: "2025 Q2", revenue: 55654, operatingIncome: 4922 },
  { quarter: "2025 Q3", revenue: 56999, operatingIncome: 6013 },
  { quarter: "2025 Q4", revenue: 61415, operatingIncome: -1220 },
  { quarter: "2026 Q1", revenue: 65550, operatingIncome: -2078 }
];

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
    embed: false,
    provider: "저장된 1년 가격 차트",
    note:
      "KRX:373220은 TradingView 사이트 안에서는 조회되지만 외부 임베드 위젯에서는 'TradingView에서만 제공' 문구가 뜨는 것으로 확인했습니다. 그래서 페이지 안에서는 저장 가격 차트를 기본으로 보여주고, TradingView 링크는 보조 확인용으로 유지합니다."
  },
  userAssessment: {
    total: 3.1,
    stance: "중립",
    status: "사용자 평가 입력",
    recommendation: {
      period: "장기",
      stance: "중립",
      reason: "30만 라인 유지 여부를 가장 중요하게 봅니다."
    },
    note: "30만 라인이 매우 중요. 깨진다면 저번 저점 이하까지도 무너지지 않을까.",
    scoreItems: [
      { label: "1번 항목", score: 3, weight: 1 },
      { label: "2번 항목", score: 3, weight: 1 },
      { label: "3번 항목", score: 3, weight: 1 },
      { label: "4번 항목", score: 3, weight: 1 },
      { label: "5번 항목", score: 3, weight: 1 },
      { label: "6번 항목", score: 2, weight: 1 },
      { label: "7번 항목", score: 4, weight: 2 },
      { label: "8번 항목", score: 3, weight: 2 }
    ]
  },
  codexAssessment: {
    total: 2.8,
    stance: "중립",
    confidence: "중간",
    author: "Codex 독립 평가",
    recommendation: {
      period: "장기",
      stance: "중립",
      reason: "배터리 업황 회복은 장기 변수지만, 현재는 흑자 전환과 마진 회복을 확인하기 전이라 공격적 매수보다는 관찰이 맞습니다."
    },
    note:
      "사용자 평가와 독립적으로 작성한 10개 항목 5점 만점 평균 평가입니다. 장기 배터리 수요와 글로벌 고객 기반은 긍정적이지만, 최근 수익성 둔화와 업황 불확실성이 커서 현재 판단은 중립에 둡니다.",
    metrics: [
      { label: "성장성", score: 3.5, note: "ESS와 전기차 장기 수요는 유효하지만 단기 EV 수요 둔화가 부담입니다." },
      { label: "수익성", score: 2.0, note: "2026 Q1 영업손실 전환으로 마진 회복 확인이 필요합니다." },
      { label: "현금흐름 질", score: 2.2, note: "대규모 설비투자 산업이라 업황 둔화기에는 현금흐름 압박이 커질 수 있습니다." },
      { label: "재무 안정성", score: 3.0, note: "대형 제조업 특성상 투자 부담이 크며, 업황 회복 전 현금흐름 확인이 필요합니다." },
      { label: "밸류 부담", score: 2.5, note: "장기 기대가 남아 있어 업황 회복 전에는 밸류에이션 안전마진이 넉넉하다고 보기 어렵습니다." },
      { label: "경쟁우위", score: 3.7, note: "글로벌 OEM 고객 기반과 생산 경험은 강점이나 중국 업체와 가격 경쟁은 부담입니다." },
      { label: "실적 가시성", score: 2.4, note: "EV 수요, 보조금, 원재료 가격, 고객사 재고 조정에 따라 분기 실적 변동성이 큽니다." },
      { label: "자본배분", score: 2.8, note: "성장 투자는 필요하지만 업황 회복 전까지 투자 효율과 재무 부담을 같이 봐야 합니다." },
      { label: "촉매/모멘텀", score: 3.0, note: "ESS 성장, EV 수요 회복, AMPC 효과가 촉매지만 확인 전까지는 제한적으로 봅니다." },
      { label: "리스크 관리", score: 2.5, note: "EV 수요, 원재료, 중국 경쟁, 정책 보조금 변동이 모두 실적 변동성을 키웁니다." }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "KRW",
    unit: "억원",
    coverage: "2021 Q2 ~ 2026 Q1, 20개 분기",
    asOf: "LG에너지솔루션 공식 연결재무제표·실적발표 기준, 2026 Q1까지 반영",
    note:
      "LG에너지솔루션 분사 이후 공식 연결재무제표와 실적발표 자료의 매출·영업이익을 정리했습니다. 4분기 개별값은 공식 연간 누계에서 3분기 누계를 차감해 계산했으며, 표시 단위에 맞춰 억원 단위로 반올림했습니다.",
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
    { label: "LG에너지솔루션 연결재무제표", detail: "2021 Q2~2026 Q1 공식 연결 검토·감사보고서", url: "https://www.lgensol.com/kr/investors/consolidated-financial-statements" },
    { label: "LG에너지솔루션 실적발표", detail: "2022년 이후 분기별 매출·영업이익 발표자료", url: "https://www.lgensol.com/kr/investors/earnings-announcement" },
    { label: "DART LG에너지솔루션 검색", detail: "공식 사업보고서·분기보고서 교차 확인", url: "https://dart.fss.or.kr/dsab007/detailSearch.ax?textCrpNM=LG%EC%97%90%EB%84%88%EC%A7%80%EC%86%94%EB%A3%A8%EC%85%98" }
  ],
  sourcePolicy: STOCK_SOURCE_POLICY
};
