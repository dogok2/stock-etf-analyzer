const STOCK_TEMPLATE_QUARTERS = [
  "2021 Q3", "2021 Q4",
  "2022 Q1", "2022 Q2", "2022 Q3", "2022 Q4",
  "2023 Q1", "2023 Q2", "2023 Q3", "2023 Q4",
  "2024 Q1", "2024 Q2", "2024 Q3", "2024 Q4",
  "2025 Q1", "2025 Q2", "2025 Q3", "2025 Q4",
  "2026 Q1", "2026 Q2"
];

const STOCK_TEMPLATE_20260709 = {
  researchDate: "2026-07-09",
  archiveNote: "주식 분석 뼈대",
  status: "template",
  tags: ["실제 종목 아님", "구조 미리보기", "날짜별 저장"],
  thesis:
    "첫 종목을 알려주면 이 템플릿에 실제 공시와 공식 자료를 채웁니다. 사용자 평가와 Codex 평가는 섞지 않고, 모든 판단은 분석 당시의 근거와 함께 날짜별로 보존합니다.",
  quote: null,
  facts: [
    { label: "종목명·티커", value: "종목 입력 후 표시" },
    { label: "상장 시장", value: "국내·해외 구분" },
    { label: "업종·사업", value: "핵심 매출원 요약" },
    { label: "분석 기준일", value: "각 기록에 고정" },
    { label: "실적 통화", value: "KRW·USD 등" },
    { label: "다음 실적일", value: "공식 일정 확인" }
  ],
  userAssessment: {
    total: null,
    stance: "미입력",
    status: "평가 방식 확정 전",
    note: "평가 항목과 배점은 사용자가 정한 방식 그대로 연결합니다. Codex 점수로 덮어쓰지 않습니다.",
    fields: [
      { label: "나의 투자 논리", value: "왜 이 회사를 보는지 직접 기록" },
      { label: "내가 보는 핵심 지표", value: "추후 사용자의 지표와 배점 연결" },
      { label: "매수·보유·매도 조건", value: "판단이 바뀌는 조건을 사전에 기록" },
      { label: "나의 코멘트", value: "공유하고 싶은 개인 의견을 원문 그대로 보존" }
    ]
  },
  codexAssessment: {
    total: null,
    confidence: "근거 자료 입력 후 산정",
    author: "Codex 평가",
    note: "공식 실적·공시·산업 자료를 근거로 항목별 점수와 이유를 함께 기록합니다.",
    metrics: [
      { label: "성장성", score: null, note: "매출·영업이익 성장과 시장 확대" },
      { label: "수익성", score: null, note: "영업이익률과 수익 구조의 질" },
      { label: "재무 안정성", score: null, note: "현금·부채·이자 부담" },
      { label: "밸류에이션", score: null, note: "과거 밴드와 동종 기업 비교" },
      { label: "경쟁력", score: null, note: "진입장벽·점유율·고객 고착도" },
      { label: "주주환원", score: null, note: "배당·자사주·희석 여부" },
      { label: "위험 관리", score: null, note: "핵심 리스크의 크기와 통제 가능성" }
    ]
  },
  quarterlyPerformance: {
    title: "최근 5년 분기 실적",
    currency: "종목 통화",
    unit: "회사 공시 단위",
    asOf: "종목 입력 후 최신 공시 기준",
    note: "매출과 영업이익 원자료를 저장하고 전년 동기 대비 성장률·영업이익률은 자동 계산합니다.",
    periods: STOCK_TEMPLATE_QUARTERS.map((quarter) => ({ quarter, revenue: null, operatingIncome: null }))
  },
  outlook: {
    author: "Codex 작성",
    status: "근거 자료 확인 전",
    summary: "전망은 사실처럼 단정하지 않고, 확인된 수주·가이던스·산업 지표를 근거로 조건부 판단을 작성합니다.",
    positives: ["실적 개선을 설명하는 확인 가능한 동력", "시장 성장·점유율·신제품 등 구체적인 촉매"],
    risks: ["실적 추정이 틀릴 수 있는 핵심 변수", "경쟁·규제·환율·원가·고객 집중 위험"],
    watch: ["다음 분기 매출과 영업이익", "회사가 제시한 가이던스 달성 여부", "전망을 무효화하는 조건"],
    scenarios: [
      { type: "bull", label: "낙관", condition: "핵심 지표가 예상보다 빠르게 개선", evidence: "확인할 실적·산업 지표를 연결" },
      { type: "base", label: "기본", condition: "현재 추세와 회사 가이던스가 대체로 유지", evidence: "기준 가정과 예상 범위를 기록" },
      { type: "bear", label: "비관", condition: "성장 둔화 또는 마진 훼손이 확인", evidence: "판단 철회·하향 조건을 명시" }
    ]
  },
  valuation: {
    note: "업종에 맞는 지표만 선택하고 현재 값, 과거 범위, 동종 기업을 함께 비교합니다.",
    metrics: [
      { label: "PER", value: "—", context: "이익이 안정적인 기업" },
      { label: "PBR", value: "—", context: "자산·금융 업종 참고" },
      { label: "PSR", value: "—", context: "초기 성장 기업 참고" },
      { label: "EV/EBITDA", value: "—", context: "부채 포함 기업가치 비교" }
    ],
    financialChecks: [
      { label: "순현금·순부채", value: "—" },
      { label: "영업현금흐름", value: "—" },
      { label: "주식 수 변화", value: "—" },
      { label: "배당·자사주", value: "—" }
    ]
  },
  catalysts: ["실적 발표", "신제품·수주", "산업 수요 변화", "정책·규제 변화"],
  risks: ["실적 미달", "밸류에이션 축소", "경쟁 심화", "재무·희석 위험"],
  sources: [],
  sourcePolicy: [
    "실적은 회사 IR·사업보고서·거래소 공시를 우선 사용",
    "전망의 사실 근거와 Codex 해석을 문장 단위로 구분",
    "각 숫자에 기준일을 붙이고 새 분석이 생겨도 과거 기록은 수정하지 않음"
  ]
};

window.STOCK_ANALYSES = [
  {
    id: "STOCK-TEMPLATE",
    name: "주식 분석 템플릿",
    shortName: "첫 종목을 기다리는 중",
    category: "사용자 평가 · Codex 평가 · 5년 분기 실적",
    listingMarket: "template",
    listingLabel: "구조 미리보기",
    isTemplate: true,
    snapshots: [STOCK_TEMPLATE_20260709]
  }
];
