const SCHD_20260712 = {
  researchDate: "2026-07-12",
  dataAsOf: "2026-07-10",
  archiveNote: "첫 분석 기록",
  tags: ["미국상장", "배당성장", "분기분배", "대형가치"],
  thesis:
    "SCHD는 10년 이상 배당을 지급한 미국 기업 중 현금흐름 대비 부채, 자기자본이익률, 배당수익률, 배당성장률을 함께 평가해 약 100개 종목을 고르는 대표적인 배당 퀄리티 ETF입니다. 0.06%의 낮은 보수, 약 985억달러의 순자산과 풍부한 거래량이 강점입니다. 다만 상위 10개 비중이 약 41.7%이고 헬스케어·필수소비재·에너지 비중이 높아 성장주 중심 상승장에서는 시장대표지수보다 뒤처질 수 있습니다.",
  quote: {
    price: 32.40,
    changePct: 0.43,
    nav: 32.38,
    navLabel: "$32.38 · 공식 프리미엄/할인 +0.04%",
    volume: 14156100,
    date: "2026-07-10",
    label: "2026-07-10 종가",
    currency: "$",
    sourceLabel: "Yahoo Finance · Schwab"
  },
  facts: [
    { label: "티커", value: "SCHD" },
    { label: "운용사", value: "Charles Schwab Investment Management" },
    { label: "상장시장", value: "NYSE Arca" },
    { label: "설정일", value: "2011.10.20" },
    { label: "총보수(연)", value: "0.06%" },
    { label: "기초지수", value: "Dow Jones U.S. Dividend 100 Index" },
    { label: "순자산", value: "약 $985.5억 (07.10)" },
    { label: "분배주기", value: "분기" },
    { label: "30일 SEC 수익률", value: "3.32% (07.09)" },
    { label: "TTM 분배수익률", value: "3.25% (05.31)" },
    { label: "보유 종목", value: "103개 (07.09)" },
    { label: "52주 범위", value: "$26.21 ~ $32.92" },
    { label: "3년 표준편차", value: "13.44% (05.31)" },
    { label: "거래 통화", value: "미국 달러(USD)" }
  ],
  scores: [
    { label: "배당 지속성", score: 4.4, note: "10년 배당 이력과 4개 펀더멘털을 함께 선별" },
    { label: "비용·유동성", score: 4.8, note: "보수 0.06%, 순자산과 거래량이 매우 큼" },
    { label: "분산·퀄리티", score: 4.2, note: "약 100종목이나 상위 10개 비중은 41.7%" },
    { label: "성장 탄력", score: 3.3, note: "배당가치주 중심이라 빅테크 강세장에서 열세 가능" },
    { label: "환율·세후 관리", score: 2.8, note: "한국 투자자는 달러와 미국 배당 원천징수 노출" }
  ],
  indexMethod: {
    summary:
      "미국 고배당주를 단순히 수익률 순서로 담지 않고 배당 이력과 재무 건전성, 수익성, 배당성장을 함께 평가합니다. 배당 함정을 줄이는 대신 고성장 무배당주와 REIT는 편입 대상에서 제외됩니다.",
    details: [
      "미국 거래 종목 중 시가총액 상위 약 2,500개를 출발 유니버스로 사용하고 REIT를 제외",
      "최소 10년 연속 배당 지급, 유동시가총액 5억달러, 3개월 일평균 거래대금 200만달러 기준 적용",
      "예상 배당수익률 상위 절반을 남긴 뒤 현금흐름/부채, ROE, 배당수익률, 5년 배당성장률로 순위화",
      "상위 약 100개 종목을 수정 시가총액 방식으로 구성",
      "정기 재구성 시 단일 종목 4%, 단일 섹터 25% 상한을 적용하고 매년 3월 재조정"
    ]
  },
  holdingsAsOf: "2026-07-09",
  holdings: [
    { name: "UnitedHealth Group", ticker: "UNH", exchange: "NYSE", chartSymbol: "NYSE:UNH", yahooSymbol: "UNH", embed: true, role: "헬스케어 · 보험", weight: 4.56 },
    { name: "Merck & Co.", ticker: "MRK", exchange: "NYSE", chartSymbol: "NYSE:MRK", yahooSymbol: "MRK", embed: true, role: "헬스케어 · 제약", weight: 4.35 },
    { name: "Abbott Laboratories", ticker: "ABT", exchange: "NYSE", chartSymbol: "NYSE:ABT", yahooSymbol: "ABT", embed: true, role: "헬스케어 · 의료기기", weight: 4.32 },
    { name: "Home Depot", ticker: "HD", exchange: "NYSE", chartSymbol: "NYSE:HD", yahooSymbol: "HD", embed: true, role: "경기소비재 · 주택개선", weight: 4.31 },
    { name: "Amgen", ticker: "AMGN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMGN", yahooSymbol: "AMGN", embed: true, role: "헬스케어 · 바이오", weight: 4.29 },
    { name: "Coca-Cola", ticker: "KO", exchange: "NYSE", chartSymbol: "NYSE:KO", yahooSymbol: "KO", embed: true, role: "필수소비재 · 음료", weight: 4.18 },
    { name: "Procter & Gamble", ticker: "PG", exchange: "NYSE", chartSymbol: "NYSE:PG", yahooSymbol: "PG", embed: true, role: "필수소비재", weight: 4.18 },
    { name: "Texas Instruments", ticker: "TXN", exchange: "NASDAQ", chartSymbol: "NASDAQ:TXN", yahooSymbol: "TXN", embed: true, role: "반도체 · 아날로그", weight: 3.99 },
    { name: "PepsiCo", ticker: "PEP", exchange: "NASDAQ", chartSymbol: "NASDAQ:PEP", yahooSymbol: "PEP", embed: true, role: "필수소비재 · 음료/스낵", weight: 3.86 },
    { name: "Chevron", ticker: "CVX", exchange: "NYSE", chartSymbol: "NYSE:CVX", yahooSymbol: "CVX", embed: true, role: "에너지", weight: 3.66 }
  ],
  concentrationNote:
    "상위 10개 합산 비중은 약 41.7%입니다. 단일 종목 비중은 5% 아래로 관리되지만 상위 구성주의 실적과 주가가 ETF에 미치는 영향은 작지 않습니다. 2026년 6월 말 지수 기준 헬스케어 20.7%, 소비재 20.5%, 에너지 14.1%, 산업재 13.7%로 방어·가치 업종 성향이 강합니다.",
  composition: {
    asOf: "2026-07-09",
    note: "상위 종목은 Schwab 공식 보유비중, 업종 비중은 S&P Dow Jones Indices의 2026-06-30 지수 자료 기준입니다.",
    views: [
      {
        id: "holdings",
        label: "상위 종목",
        type: "bars",
        items: [
          { label: "UnitedHealth Group", sub: "UNH · 헬스케어", value: 4.56 },
          { label: "Merck & Co.", sub: "MRK · 제약", value: 4.35 },
          { label: "Abbott Laboratories", sub: "ABT · 의료기기", value: 4.32 },
          { label: "Home Depot", sub: "HD · 경기소비재", value: 4.31 },
          { label: "Amgen", sub: "AMGN · 바이오", value: 4.29 },
          { label: "Coca-Cola", sub: "KO · 음료", value: 4.18 },
          { label: "Procter & Gamble", sub: "PG · 필수소비재", value: 4.18 },
          { label: "Texas Instruments", sub: "TXN · 반도체", value: 3.99 },
          { label: "PepsiCo", sub: "PEP · 음료/스낵", value: 3.86 },
          { label: "Chevron", sub: "CVX · 에너지", value: 3.66 }
        ]
      },
      {
        id: "sectors",
        label: "업종 비중",
        type: "donut",
        items: [
          { label: "헬스케어", value: 20.7, color: "#112b3b" },
          { label: "소비재", value: 20.5, color: "#69b79c" },
          { label: "에너지", value: 14.1, color: "#f7a072" },
          { label: "산업재", value: 13.7, color: "#c9f31d" },
          { label: "금융", value: 10.0, color: "#8bd3ff" },
          { label: "기술", value: 9.5, color: "#8479e1" },
          { label: "기타", value: 11.5, color: "#d8d9d2" }
        ]
      },
      {
        id: "dividendLens",
        label: "배당 관점",
        type: "bars",
        items: [
          { label: "배당 지속성", sub: "10년 지급 이력 선별", value: 4.5 },
          { label: "현재 현금수익", sub: "SEC 3.32%", value: 3.6 },
          { label: "배당 성장", sub: "2026 상반기 정체", value: 3.0 },
          { label: "비용 효율", sub: "보수 0.06%", value: 4.8 },
          { label: "세후 효율", sub: "미국 원천징수", value: 2.8 }
        ]
      }
    ]
  },
  securityCharts: {
    title: "ETF·상위 구성 종목 주가 차트",
    description:
      "SCHD 자체 가격과 실제 상위 편입주의 차트를 함께 봅니다. 분배수익률만 보지 않고 상위 종목의 가격 흐름과 ETF 총수익을 같이 확인해야 배당 착시를 줄일 수 있습니다.",
    asOf: "2026-07-10",
    note:
      "SCHD 자체는 공유 페이지에서 TradingView 임베드가 정상 표시되는지 검증되기 전까지 저장된 1년 가격 차트로 고정했습니다. 상위 구성주는 기존 페이지에서 사용 중인 검증된 미국 주식 심볼을 재사용합니다.",
    symbols: [
      { name: "Schwab U.S. Dividend Equity ETF", ticker: "SCHD", exchange: "NYSE Arca", chartSymbol: "AMEX:SCHD", yahooSymbol: "SCHD", embed: false, role: "ETF 가격", weight: 100 },
      { name: "UnitedHealth Group", ticker: "UNH", exchange: "NYSE", chartSymbol: "NYSE:UNH", yahooSymbol: "UNH", embed: true, role: "헬스케어 · 보험", weight: 4.56 },
      { name: "Merck & Co.", ticker: "MRK", exchange: "NYSE", chartSymbol: "NYSE:MRK", yahooSymbol: "MRK", embed: true, role: "제약", weight: 4.35 },
      { name: "Abbott Laboratories", ticker: "ABT", exchange: "NYSE", chartSymbol: "NYSE:ABT", yahooSymbol: "ABT", embed: true, role: "의료기기", weight: 4.32 },
      { name: "Home Depot", ticker: "HD", exchange: "NYSE", chartSymbol: "NYSE:HD", yahooSymbol: "HD", embed: true, role: "주택개선", weight: 4.31 },
      { name: "Amgen", ticker: "AMGN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMGN", yahooSymbol: "AMGN", embed: true, role: "바이오", weight: 4.29 },
      { name: "Coca-Cola", ticker: "KO", exchange: "NYSE", chartSymbol: "NYSE:KO", yahooSymbol: "KO", embed: true, role: "음료", weight: 4.18 },
      { name: "Procter & Gamble", ticker: "PG", exchange: "NYSE", chartSymbol: "NYSE:PG", yahooSymbol: "PG", embed: true, role: "필수소비재", weight: 4.18 },
      { name: "Texas Instruments", ticker: "TXN", exchange: "NASDAQ", chartSymbol: "NASDAQ:TXN", yahooSymbol: "TXN", embed: true, role: "반도체", weight: 3.99 },
      { name: "PepsiCo", ticker: "PEP", exchange: "NASDAQ", chartSymbol: "NASDAQ:PEP", yahooSymbol: "PEP", embed: true, role: "음료/스낵", weight: 3.86 },
      { name: "Chevron", ticker: "CVX", exchange: "NYSE", chartSymbol: "NYSE:CVX", yahooSymbol: "CVX", embed: true, role: "에너지", weight: 3.66 }
    ]
  },
  distribution: {
    frequency: "분기",
    schedule: "통상 3·6·9·12월 배당락, 같은 달 말 지급",
    latestAmount: "$0.2525",
    trailingAmount: "최근 4회 합계 $1.0480",
    trailingYield: "약 3.24%",
    secYield: "3.32%",
    yieldAsOf: "최근 4회는 2026-06-24 기준, SEC 수익률은 2026-07-09 기준",
    explanation:
      "최근 4회 분배금 합계는 주당 $1.0480으로 $32.40 대비 단순 분배수익률은 약 3.24%입니다. 2026년 상반기 합계 $0.5094는 2025년 상반기 $0.5090보다 약 0.08% 늘어 사실상 정체됐습니다. 장기 배당성장 전략이더라도 매년 또는 매 분기 분배금이 반드시 증가하는 상품은 아닙니다.",
    rows: [
      { recordDate: "2026-06-24", payDate: "2026-06-29", amount: 0.2525 },
      { recordDate: "2026-03-25", payDate: "2026-03-30", amount: 0.2569 },
      { recordDate: "2025-12-10", payDate: "2025-12-15", amount: 0.2782 },
      { recordDate: "2025-09-24", payDate: "2025-09-29", amount: 0.2604 },
      { recordDate: "2025-06-25", payDate: "2025-06-30", amount: 0.2602 },
      { recordDate: "2025-03-26", payDate: "2025-03-31", amount: 0.2488 },
      { recordDate: "2024-12-11", payDate: "2024-12-16", amount: 0.2645 }
    ],
    currency: "$",
    tax:
      "한국 거주자가 W-8BEN을 적용받는 일반적인 경우 미국 배당에는 한·미 조세조약상 15% 한도의 원천징수가 적용됩니다. 실제 국내 정산, 금융소득 합산과 해외주식 양도세는 계좌 및 전체 손익에 따라 달라질 수 있습니다."
  },
  performance: {
    title: "평균 연환산 총수익률",
    asOf: "2026-06-30",
    note: "미국 달러 기준, 분배금 재투자 가정의 시장가격 수익률입니다. 1개월·3개월·YTD는 누적, 1년 이상은 연환산이며 원화 투자자의 실제 수익률은 환율과 세금에 따라 달라집니다.",
    periods: [
      { label: "1개월", value: -1.65 },
      { label: "3개월", value: 4.18 },
      { label: "연초 이후", value: 17.50 },
      { label: "1년", value: 24.03 },
      { label: "3년", value: 13.52 },
      { label: "5년", value: 8.51 },
      { label: "10년", value: 12.37 },
      { label: "설정 이후", value: 13.09 }
    ],
    stats: [
      "2026-07-10 종가 $32.40, NAV $32.38",
      "3년 표준편차 13.44%",
      "포트폴리오 PER 19.07배·PBR 3.84배 (05.31)",
      "포트폴리오 ROE 26.54% (05.31)",
      "최악의 3개월 수익률 -21.55%로 배당 ETF도 주가 하락 위험이 큼"
    ]
  },
  peerComparison: {
    title: "미국 배당 ETF 비교",
    asOf: "2026-05~07 각 운용사 공식 자료 기준",
    note: "분배수익률과 보유 종목 수의 기준일이 상품마다 다릅니다. 동일한 배당 ETF라도 SCHD는 퀄리티·고배당, VYM은 광범위 고배당, DGRO는 배당성장에 더 가깝습니다.",
    products: [
      { key: "schd", name: "Schwab SCHD", ticker: "SCHD", featured: true },
      { key: "vym", name: "Vanguard VYM", ticker: "VYM", featured: false },
      { key: "dgro", name: "iShares DGRO", ticker: "DGRO", featured: false },
      { key: "tiger", name: "TIGER 미국배당다우존스", ticker: "458730", featured: false }
    ],
    rows: [
      { label: "핵심 노출", values: { schd: "퀄리티 고배당 약 100종목", vym: "광범위 고배당", dgro: "배당성장 약 390종목", tiger: "SCHD 동일 계열 지수" } },
      { label: "총보수", values: { schd: "0.06%", vym: "0.04%", dgro: "0.08%", tiger: "0.01%·실부담 별도" }, winner: "tiger" },
      { label: "30일 SEC·분배율", values: { schd: "SEC 3.32%", vym: "SEC 2.25%", dgro: "SEC 1.98%", tiger: "연간 분배율 약 3.00%" }, winner: "schd" },
      { label: "분배 주기", values: { schd: "분기", vym: "분기", dgro: "분기", tiger: "월" }, winner: "tiger" },
      { label: "거래 통화", values: { schd: "USD", vym: "USD", dgro: "USD", tiger: "KRW" } },
      { label: "한국 투자자 과세", values: { schd: "해외주식·미국배당", vym: "해외주식·미국배당", dgro: "해외주식·미국배당", tiger: "국내상장 해외ETF" } },
      { label: "성장주 비중", values: { schd: "낮은 편", vym: "낮은 편", dgro: "상대적으로 높음", tiger: "SCHD 계열과 유사" }, winner: "dgro" },
      { label: "어울리는 목적", values: { schd: "배당 퀄리티·직접투자", vym: "더 넓은 고배당 분산", dgro: "현금수익보다 배당성장", tiger: "원화 월분배·국내계좌" } }
    ],
    takeaways: [
      "SCHD는 VYM보다 종목 수가 적고 펀더멘털 선별이 강해 퀄리티 집중도가 높습니다.",
      "DGRO는 현재 수익률은 낮지만 보유 종목이 더 많고 배당성장·총수익 관점이 강합니다.",
      "TIGER 미국배당다우존스는 같은 지수 계열을 원화·월분배로 접근하지만 과세, 거래시간, 환율 반영 방식이 SCHD 직접투자와 다릅니다."
    ],
    sources: [
      { label: "Schwab SCHD", url: "https://www.schwabassetmanagement.com/products/schd" },
      { label: "Vanguard VYM", url: "https://investor.vanguard.com/investment-products/etfs/profile/vym" },
      { label: "iShares DGRO", url: "https://www.ishares.com/us/products/264623/ishares-core-dividend-growth-etf" },
      { label: "TIGER 미국배당다우존스", url: "https://www.tigeretf.com/ko/product/search/detail/index.do?ksdFund=KR7458730002" }
    ]
  },
  opportunities: [
    "낮은 보수와 높은 유동성으로 미국 배당 퀄리티 스타일을 장기 보유하기 쉽습니다.",
    "현금흐름 대비 부채와 ROE를 함께 봐 단순 고배당 전략보다 배당 함정 위험을 낮춥니다.",
    "헬스케어·필수소비재·에너지 비중이 커 성장주 편중 포트폴리오의 스타일 분산에 유용합니다.",
    "분기 분배금 재투자를 통해 장기 복리 효과를 추구할 수 있습니다.",
    "한국 투자자에게는 달러자산 분산 효과가 생길 수 있습니다."
  ],
  risks: [
    "배당주 펀드는 배당을 제한하지 않는 광범위 시장 ETF보다 장기간 부진할 수 있습니다.",
    "상위 10개가 약 41.7%이고 헬스케어·소비재·에너지 업종 비중이 높아 스타일·업종 쏠림이 있습니다.",
    "2026년 상반기 분배금은 전년 상반기 대비 사실상 정체됐으며 분배금 증가는 보장되지 않습니다.",
    "금리 상승이나 경기침체로 구성사의 이익·배당이 훼손되면 가격과 현금흐름이 함께 약해질 수 있습니다.",
    "한국 투자자는 SCHD 가격 외에 달러·원 환율, 미국 배당 원천징수와 해외주식 과세를 함께 부담합니다."
  ],
  scenarios: [
    { type: "bull", label: "낙관", condition: "미국 경기 연착륙과 금리 안정 속에서 배당가치주 이익이 회복되고 분배금 성장이 재개", watch: "분기 분배금, 헬스케어·소비재 실적, 장기금리, 가치주 상대강도" },
    { type: "base", label: "중립", condition: "3%대 현금수익과 완만한 이익 성장이 이어지지만 빅테크 대비 상대성과는 제한", watch: "SEC 수익률, ROE·PER, 상위 10개 비중, S&P500 대비 성과" },
    { type: "bear", label: "비관", condition: "경기 둔화로 배당 삭감이 늘거나 금리 상승·성장주 쏠림으로 가치주 멀티플이 하락", watch: "배당 삭감, 에너지 가격, 신용스프레드, 자금 유출, 달러·원" }
  ],
  checklist: [
    "분배수익률만 보지 말고 분배금 재투자를 포함한 총수익률을 확인하기",
    "S&P500·나스닥100과 겹치는 상위 종목 및 전체 배당주 비중을 계산하기",
    "SCHD 직접투자와 국내상장 SCHD 계열 ETF의 보수·과세·분배주기·거래시간을 비교하기",
    "일반계좌의 해외주식 손익 합산과 연 250만원 기본공제를 함께 관리하기",
    "달러·원 환율이 원화 기준 수익률과 세후 분배금에 미치는 영향을 계산하기",
    "분배금이 줄어드는 분기가 생겨도 유지할 수 있는 장기 보유 기준을 정하기"
  ],
  taxNote:
    "미국상장 ETF는 국내상장 해외ETF와 과세 구조가 다릅니다. 해외주식 매매손익 합산, 연 250만원 기본공제, 배당 원천징수와 국내 금융소득 합산 가능성을 실제 거래 증권사 또는 세무 전문가에게 확인하세요.",
  sources: [
    { label: "Schwab SCHD 공식 페이지", detail: "보수·순자산·NAV·보유종목·수익률·분배금·포트폴리오 특성", url: "https://www.schwabassetmanagement.com/products/schd" },
    { label: "SCHD 공식 팩트시트", detail: "운용목표·지수·성과·위험·비용", url: "https://www.schwabassetmanagement.com/resource/schwab-us-dividend-equity-etf-fact-sheet" },
    { label: "Dow Jones U.S. Dividend 100 Index", detail: "지수 성과·구성종목·업종·재조정 정보", url: "https://www.spglobal.com/spdji/en/indices/dividends-factors/dow-jones-us-dividend-100-index/" },
    { label: "Dow Jones Dividend Indices Methodology", detail: "배당 이력·유동성·펀더멘털·비중 상한 규칙", url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-dj-dividend-indices.pdf" },
    { label: "Yahoo Finance SCHD", detail: "2026-07-10 종가·거래량·52주 범위와 저장 차트", url: "https://finance.yahoo.com/quote/SCHD/history/" },
    { label: "국세청 양도소득 기본공제", detail: "국외주식 연 250만원 기본공제", url: "https://www.nts.go.kr/tax/sub/1.2.3.%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EA%B3%BC%EC%84%B8%ED%91%9C%EC%A4%80%20%EC%8B%A0%EA%B3%A0%20%EB%B0%8F%20%EB%82%A9%EB%B6%80%EA%B3%84%EC%82%B0%EC%84%9C.html" },
    { label: "한·미 조세조약", detail: "미국 원천 배당 세율 한도", url: "https://www.irs.gov/pub/irs-trty/korea.pdf" }
  ]
};
