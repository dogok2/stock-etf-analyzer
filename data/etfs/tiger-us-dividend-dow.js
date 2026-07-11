
const TIGER_US_DIVIDEND_DOW_20260709 = {
  researchDate: "2026-07-09",
  dataAsOf: "2026-07-09",
  archiveNote: "첫 분석 기록",
  tags: ["국내상장", "미국 배당성장", "월분배", "환노출"],
  thesis:
    "미국 배당주 100개에 분산 투자하면서 원화로 거래할 수 있는 국내상장 배당형 ETF입니다. 이름은 ‘다우존스 배당’이지만 다우 30종목을 사는 상품이 아니라, Dow Jones U.S. Dividend 100 지수를 따라가는 SCHD 계열 배당 퀄리티 ETF에 가깝습니다. 배당 현금흐름과 낮은 보수가 강점이고, 성장주 장세에서는 나스닥·S&P500보다 뒤처질 수 있으며 환헤지를 하지 않아 달러·원 환율도 수익률에 직접 반영됩니다.",
  quote: {
    price: 15480,
    changePct: -0.32,
    nav: 15502,
    navLabel: "15,502원 · 괴리율 약 -0.14%",
    volume: 2415842,
    date: "2026-07-09",
    label: "2026-07-09 종가",
    currency: "원",
    sourceLabel: "Naver Finance · KRX 장마감"
  },
  facts: [
    { label: "종목코드", value: "458730" },
    { label: "운용사", value: "미래에셋자산운용" },
    { label: "상장시장", value: "KOSPI ETF" },
    { label: "상장일", value: "2023.06.20" },
    { label: "총보수(연)", value: "0.01%" },
    { label: "실부담비율", value: "0.0894%" },
    { label: "기초지수", value: "Dow Jones U.S. Dividend 100 Price Return Index" },
    { label: "투자유형", value: "해외주식형 · 미국 배당주" },
    { label: "분배주기", value: "월분배" },
    { label: "연간 분배율", value: "약 3.00%" },
    { label: "구성종목수", value: "100개" },
    { label: "순자산", value: "약 4조 356억원" },
    { label: "52주 범위", value: "11,645원 ~ 15,975원" },
    { label: "환헤지", value: "미실시(USD/KRW 환노출)" }
  ],
  scores: [
    { label: "배당 지속성", score: 4.0, note: "지수 자체가 배당 지속성과 펀더멘털을 함께 선별" },
    { label: "비용 효율", score: 4.5, note: "총보수 0.01%, 실부담비율도 낮은 편" },
    { label: "분산 안정성", score: 4.0, note: "100개 종목과 방어적 업종 비중으로 단일주 위험 완화" },
    { label: "성장 탄력", score: 3.2, note: "고성장 빅테크 장세에서는 상대 성과가 약할 수 있음" },
    { label: "환율·세후 관리", score: 2.8, note: "환노출과 월분배 과세가 원화 투자자 체감 수익률을 흔듦" }
  ],
  indexMethod: {
    summary:
      "미국 주식시장 내 배당을 꾸준히 지급해 온 기업 중 재무 건전성, 수익성, 배당수익률, 배당 성장성을 함께 보는 배당 퀄리티 지수입니다. ETF는 국내에 상장되어 원화로 거래되지만, 실제 기초자산은 미국 주식과 달러에 노출됩니다.",
    details: [
      "미국 상장 보통주 중 유동성과 규모, 배당 지속성 기준을 통과한 기업을 우선 선별",
      "현금흐름 대비 부채, 자기자본이익률, 배당수익률, 최근 배당 성장성 등 펀더멘털 항목을 반영",
      "최종 약 100개 종목으로 구성되어 단일 고배당주보다 배당 함정 위험을 낮추는 구조",
      "기초지수는 Price Return 방식이라 지수 자체는 배당 재투자를 포함하지 않으며, ETF가 받은 배당은 월분배 형태로 지급",
      "환헤지를 하지 않아 미국 주식 수익률과 달러·원 환율 변동이 함께 반영"
    ]
  },
  holdingsAsOf: "2026-07-09",
  holdings: [
    { name: "UnitedHealth Group", ticker: "UNH", exchange: "NYSE", chartSymbol: "NYSE:UNH", yahooSymbol: "UNH", embed: true, role: "헬스케어 · 보험", weight: 4.47 },
    { name: "Merck & Co.", ticker: "MRK", exchange: "NYSE", chartSymbol: "NYSE:MRK", yahooSymbol: "MRK", embed: true, role: "헬스케어 · 제약", weight: 4.43 },
    { name: "Home Depot", ticker: "HD", exchange: "NYSE", chartSymbol: "NYSE:HD", yahooSymbol: "HD", embed: true, role: "경기소비재 · 주택개선", weight: 4.35 },
    { name: "Abbott Laboratories", ticker: "ABT", exchange: "NYSE", chartSymbol: "NYSE:ABT", yahooSymbol: "ABT", embed: true, role: "헬스케어 · 의료기기", weight: 4.33 },
    { name: "Procter & Gamble", ticker: "PG", exchange: "NYSE", chartSymbol: "NYSE:PG", yahooSymbol: "PG", embed: true, role: "필수소비재", weight: 4.29 },
    { name: "Amgen", ticker: "AMGN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMGN", yahooSymbol: "AMGN", embed: true, role: "헬스케어 · 바이오", weight: 4.29 },
    { name: "Coca-Cola", ticker: "KO", exchange: "NYSE", chartSymbol: "NYSE:KO", yahooSymbol: "KO", embed: true, role: "필수소비재 · 음료", weight: 4.2 },
    { name: "PepsiCo", ticker: "PEP", exchange: "NASDAQ", chartSymbol: "NASDAQ:PEP", yahooSymbol: "PEP", embed: true, role: "필수소비재 · 음료/스낵", weight: 4.01 },
    { name: "Texas Instruments", ticker: "TXN", exchange: "NASDAQ", chartSymbol: "NASDAQ:TXN", yahooSymbol: "TXN", embed: true, role: "반도체 · 아날로그칩", weight: 3.74 },
    { name: "Chevron", ticker: "CVX", exchange: "NYSE", chartSymbol: "NYSE:CVX", yahooSymbol: "CVX", embed: true, role: "에너지", weight: 3.61 }
  ],
  concentrationNote:
    "상위 10개 종목 합산 비중은 약 41.7%입니다. 배당 ETF 치고는 상위 종목 영향이 작지 않지만, 특정 1~2개 성장주가 전체를 좌우하는 구조는 아닙니다. 헬스케어와 필수소비재 비중이 높아 방어적 성격이 강하고, 기술주 비중은 S&P500·나스닥 대비 낮습니다.",
  composition: {
    asOf: "2026-07-09",
    note: "상위 종목과 비중은 GoInsider의 공개 보유비중 기준입니다. 업종 성격은 이해를 돕기 위해 상위 10개 종목을 분석용으로 분류했습니다.",
    views: [
      {
        id: "holdings",
        label: "상위 종목",
        type: "bars",
        items: [
          { label: "UnitedHealth Group", sub: "UNH · 헬스케어", value: 4.47 },
          { label: "Merck & Co.", sub: "MRK · 제약", value: 4.43 },
          { label: "Home Depot", sub: "HD · 경기소비재", value: 4.35 },
          { label: "Abbott Laboratories", sub: "ABT · 의료기기", value: 4.33 },
          { label: "Procter & Gamble", sub: "PG · 필수소비재", value: 4.29 },
          { label: "Amgen", sub: "AMGN · 바이오", value: 4.29 },
          { label: "Coca-Cola", sub: "KO · 음료", value: 4.2 },
          { label: "PepsiCo", sub: "PEP · 음료/스낵", value: 4.01 },
          { label: "Texas Instruments", sub: "TXN · 반도체", value: 3.74 },
          { label: "Chevron", sub: "CVX · 에너지", value: 3.61 }
        ]
      },
      {
        id: "roles",
        label: "상위 10개 성격",
        type: "donut",
        items: [
          { label: "헬스케어", value: 17.52, color: "#112b3b" },
          { label: "필수소비재", value: 12.5, color: "#69b79c" },
          { label: "경기소비재", value: 4.35, color: "#c9f31d" },
          { label: "반도체", value: 3.74, color: "#8bd3ff" },
          { label: "에너지", value: 3.61, color: "#f7a072" },
          { label: "기타 90개 종목", value: 58.28, color: "#d8d9d2" }
        ]
      },
      {
        id: "dividendLens",
        label: "배당 관점",
        type: "bars",
        items: [
          { label: "월 현금흐름", sub: "분배 주기", value: 4.0 },
          { label: "배당 퀄리티", sub: "지수 선별 기준", value: 4.0 },
          { label: "분배금 변동성", sub: "월별 금액 차이", value: 3.0 },
          { label: "성장주 대체성", sub: "나스닥 대비", value: 2.5 },

          { label: "세후 효율", sub: "배당소득세·보유기간과세", value: 2.8 }
        ]
      }
    ]
  },
  securityCharts: {
    title: "ETF·상위 구성 종목 주가 차트",
    description:
      "ETF 자체 가격과 실제 편입 미국 주식의 차트를 함께 봅니다. 배당 ETF는 분배금만 보면 착시가 생길 수 있어, 상위 구성주의 가격 흐름과 ETF 가격을 같이 보는 편이 좋습니다.",
    asOf: "2026-07-09",
    note:
      "미국 상장 구성주는 TradingView 임베드가 안정적으로 표시되는 심볼을 사용합니다. ETF 자체 KRX:458730은 외부 임베드에서 TradingView 전용 심볼 안내가 확인되어 저장된 가격 차트로 고정했습니다.",
    symbols: [
      { name: "TIGER 미국배당다우존스", ticker: "458730", exchange: "KRX", chartSymbol: "KRX:458730", yahooSymbol: "458730.KS", embed: false, role: "ETF 가격", weight: 100 },
      { name: "UnitedHealth Group", ticker: "UNH", exchange: "NYSE", chartSymbol: "NYSE:UNH", yahooSymbol: "UNH", embed: true, role: "헬스케어 · 보험", weight: 4.47 },
      { name: "Merck & Co.", ticker: "MRK", exchange: "NYSE", chartSymbol: "NYSE:MRK", yahooSymbol: "MRK", embed: true, role: "제약", weight: 4.43 },
      { name: "Home Depot", ticker: "HD", exchange: "NYSE", chartSymbol: "NYSE:HD", yahooSymbol: "HD", embed: true, role: "주택개선", weight: 4.35 },
      { name: "Abbott Laboratories", ticker: "ABT", exchange: "NYSE", chartSymbol: "NYSE:ABT", yahooSymbol: "ABT", embed: true, role: "의료기기", weight: 4.33 },
      { name: "Procter & Gamble", ticker: "PG", exchange: "NYSE", chartSymbol: "NYSE:PG", yahooSymbol: "PG", embed: true, role: "필수소비재", weight: 4.29 },
      { name: "Amgen", ticker: "AMGN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMGN", yahooSymbol: "AMGN", embed: true, role: "바이오", weight: 4.29 },
      { name: "Coca-Cola", ticker: "KO", exchange: "NYSE", chartSymbol: "NYSE:KO", yahooSymbol: "KO", embed: true, role: "음료", weight: 4.2 },
      { name: "PepsiCo", ticker: "PEP", exchange: "NASDAQ", chartSymbol: "NASDAQ:PEP", yahooSymbol: "PEP", embed: true, role: "음료/스낵", weight: 4.01 },
      { name: "Texas Instruments", ticker: "TXN", exchange: "NASDAQ", chartSymbol: "NASDAQ:TXN", yahooSymbol: "TXN", embed: true, role: "반도체", weight: 3.74 },
      { name: "Chevron", ticker: "CVX", exchange: "NYSE", chartSymbol: "NYSE:CVX", yahooSymbol: "CVX", embed: true, role: "에너지", weight: 3.61 }
    ]
  },
  distribution: {
    frequency: "매월",
    schedule: "월말 지급기준일, 통상 다음 달 초 실제 지급",
    latestAmount: "45원",
    trailingAmount: "최근 6회 합계 220원",
    trailingYield: "약 3.00%",
    yieldAsOf: "연간 분배율은 GoInsider 공개 데이터 기준, 최근 지급 내역은 2026-06-30 기준",
    explanation:
      "월분배형 ETF라 매달 현금흐름을 만들기 쉽지만, 매월 같은 금액이 보장되는 상품은 아닙니다. 미국 구성주 배당 수취 시점, 환율, 보유 현금, 운용상 조정에 따라 월별 분배금은 달라집니다. 최근 지급액은 2026년 6월 기준 45원으로 이전 5개월보다 높았고, 최근 6회 합계는 220원입니다.",
    rows: [
      { recordDate: "2026-06-30", payDate: "2026-07-02", amount: 45, rate: "0.29%" },
      { recordDate: "2026-05-29", payDate: "2026-06-02", amount: 36, rate: "0.23%" },
      { recordDate: "2026-04-30", payDate: "2026-05-06", amount: 33, rate: "0.21%" },
      { recordDate: "2026-03-31", payDate: "2026-04-02", amount: 36, rate: "0.23%" },
      { recordDate: "2026-02-27", payDate: "2026-03-04", amount: 38, rate: "0.25%" },
      { recordDate: "2026-01-30", payDate: "2026-02-03", amount: 32, rate: "0.21%" },
      { recordDate: "2025-12", payDate: "월별 지급", amount: 40, rate: "0.26%" },
      { recordDate: "2025-11", payDate: "월별 지급", amount: 38, rate: "0.25%" }
    ],
    currency: "원",
    tax:
      "국내상장 해외주식형 ETF는 매매차익과 분배금에 배당소득세 방식의 과세가 적용될 수 있습니다. 일반계좌, ISA, 연금계좌에 따라 세후 결과가 달라지므로 실제 매수 전에는 본인 계좌의 과세 방식을 증권사 안내로 확인하는 게 좋습니다."
  },
  performance: {
    title: "최근 가격·분배 관점 성과",
    asOf: "2026-07-09",
    note: "가격 수익률은 네이버 금융 기준입니다. 분배금 재투자 여부와 세금, 환율에 따라 실제 체감 수익률은 달라집니다.",
    periods: [
      { label: "1일", value: -0.32 },
      { label: "1주", value: -1.56 },
      { label: "1개월", value: -0.61 },
      { label: "3개월", value: 7.87 },
      { label: "6개월", value: 21.88 },
      { label: "1년", value: 35.44 }
    ],
    stats: [
      "2026-07-09 종가 15,480원, NAV 15,502원으로 약 -0.14% 할인 상태",
      "최근 52주 가격 범위는 11,645원~15,975원",
      "시가총액은 약 4조 356억원, 거래량은 241.6만주",
      "GoInsider 기준 최근 1년 최대낙폭은 약 -3.5%, 연간 분배율은 약 3.00%",
      "월분배를 받더라도 가격 하락과 환율 변동이 총수익을 압도할 수 있음"
    ]
  },
  opportunities: [
    "매달 원화 분배금을 받는 구조라 현금흐름 중심 포트폴리오에 넣기 쉽습니다.",
    "미국 배당 퀄리티 주식에 한 번에 분산되어 개별 고배당주 배당 삭감 리스크를 낮출 수 있습니다.",
    "총보수가 낮아 장기 보유 비용 부담이 작은 편입니다.",
    "성장주 편중이 부담스러운 투자자에게 미국 주식 내 가치·배당 스타일 보완재 역할을 할 수 있습니다.",
    "원화 약세 구간에서는 환노출이 원화 기준 수익률에 우호적으로 작용할 수 있습니다."
  ],
  risks: [
    "환헤지를 하지 않아 ETF 가격이 미국 주식보다 달러·원 환율에 의해 크게 달라질 수 있습니다.",
    "월분배금은 고정 이자가 아니며, 분배금이 높아 보여도 가격 하락을 보전한다는 뜻은 아닙니다.",
    "나스닥·S&P500을 주도하는 고성장 빅테크 비중이 낮아 강한 성장주 장세에서는 상대적으로 뒤처질 수 있습니다.",
    "배당주 스타일은 금리 상승기 또는 경기 방어주 선호가 약해지는 구간에서 멀티플 압박을 받을 수 있습니다.",
    "국내상장 해외ETF 과세 구조상 일반계좌에서는 세후 수익률이 기대보다 낮아질 수 있습니다."
  ],
  scenarios: [
    { type: "bull", label: "낙관", condition: "미국 경기 연착륙과 금리 안정으로 배당 퀄리티주가 재평가되고 원화 약세가 겹침", watch: "미국 금리, 달러·원, 헬스케어·필수소비재 상대강도, 월분배금" },
    { type: "base", label: "중립", condition: "분배수익과 완만한 주가 흐름이 합쳐져 지수형 성장 ETF보다 안정적인 총수익을 제공", watch: "NAV 괴리율, 월분배금 변동, 상위 10종목 비중, 환율" },
    { type: "bear", label: "비관", condition: "성장주 쏠림이 재개되거나 달러 약세·배당주 멀티플 하락이 동시에 발생", watch: "나스닥 대비 상대성과, 원화 강세, 배당 삭감 뉴스, ETF 자금 유출" }
  ],
  checklist: [
    "매수 전 2026-07-09 종가와 현재 호가·iNAV 괴리율을 다시 확인하기",
    "월분배금만 보지 말고 최근 1년 총수익률과 세후 분배수익률을 같이 보기",
    "계좌가 일반계좌인지 ISA·연금계좌인지에 따라 세후 결과를 따로 계산하기",
    "S&P500·나스닥100 ETF와 겹치지 않는 보완 목적 비중인지 확인하기",
    "환노출 ETF이므로 달러·원 전망 또는 전체 달러자산 비중을 함께 점검하기",
    "분배금이 줄어드는 달이 생겨도 매도 기준이 흔들리지 않도록 기대 현금흐름 범위를 미리 정하기"
  ],
  taxNote:
    "국내상장 해외주식형 ETF는 해외주식을 직접 사는 것과 세금 계산 방식이 다릅니다. 일반계좌에서는 매매차익과 분배금이 배당소득 과세 체계로 처리될 수 있고, ISA·연금계좌에서는 과세 이연 또는 분리과세 효과가 달라질 수 있습니다. 투자 전 본인 계좌 유형 기준으로 증권사 세금 안내를 확인하세요.",
  sources: [
    { label: "Naver Finance 458730", detail: "2026-07-09 가격·NAV·기초지수·보수·상장일·52주 범위", url: "https://finance.naver.com/item/main.naver?code=458730" },
    { label: "Naver Finance 날짜별 시세 API", detail: "2026-07-01~2026-07-09 종가·거래량", url: "https://api.stock.naver.com/chart/domestic/item/458730/day?startDateTime=202607010000&endDateTime=202607092359" },
    { label: "TIGER 공식 상품 페이지", detail: "운용사 공식 상품 페이지와 펀드 코드", url: "https://www.tigeretf.com/ko/product/search/detail/index.do?ksdFund=KR7458730002" },
    { label: "GoInsider 458730", detail: "2026-07-09 구성비중·실부담비율·분배금 내역 보조 확인", url: "https://goinsider.kr/etf/458730" }
  ]
};
