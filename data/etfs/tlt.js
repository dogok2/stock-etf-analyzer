
const TLT_20260708 = {
  researchDate: "2026-07-08",
  dataAsOf: "2026-07-08",
  archiveNote: "첫 분석 기록",
  tags: ["미국상장", "월분배", "장기국채"],
  thesis:
    "미국 재무부의 만기 20년 초과 국채에 집중하는 대표적인 초장기 듀레이션 ETF입니다. 신용위험은 매우 낮지만 금리 변화에는 매우 민감합니다. 경기침체·물가둔화·장기금리 하락 국면에서는 강한 자본차익이 가능하고, 반대 국면에서는 국채임에도 주식처럼 크게 흔들릴 수 있습니다.",
  quote: {
    price: 84.36,
    changePct: -0.22,
    nav: 84.32,
    volume: 25806645,
    date: "2026-07-08",
    label: "2026-07-08 종가",
    currency: "$",
    sourceLabel: "iShares · Nasdaq"
  },
  facts: [
    { label: "티커", value: "TLT" },
    { label: "운용사", value: "BlackRock · iShares" },
    { label: "상장 시장", value: "NASDAQ" },
    { label: "설정일", value: "2002.07.22" },
    { label: "보수(연)", value: "0.15%" },
    { label: "기초지수", value: "ICE US Treasury 20+ Year Bond Index" },
    { label: "순자산", value: "$415.3억 (07.08)" },
    { label: "분배 주기", value: "매월" },
    { label: "보유 종목", value: "46개 (07.08)" },
    { label: "유효 듀레이션", value: "15.20년 (07.08)" },
    { label: "평균 만기", value: "26.10년 (07.08)" },
    { label: "거래 통화", value: "미국 달러(USD)" }
  ],
  scores: [
    { label: "신용 안정성", score: 5.0, note: "미국 재무부 채권 중심" },
    { label: "거래 유동성", score: 5.0, note: "거래량과 스프레드가 매우 우수" },
    { label: "현금흐름", score: 4.0, note: "월분배, 12개월 수익률 4%대" },
    { label: "금리 방어", score: 1.0, note: "듀레이션 15년대의 높은 민감도" },
    { label: "원화 방어", score: 2.0, note: "한국 투자자는 달러·원 환율 노출" }
  ],
  indexMethod: {
    summary:
      "잔존만기 20년을 넘는 미국 재무부 채권의 성과를 추종합니다. 기업 신용위험 대신 미국 장기금리 방향에 포트폴리오의 승부가 집중됩니다.",
    details: [
      "미국 재무부가 발행한 달러표시 국채 중심",
      "잔존만기 20년 초과 구간에 집중",
      "정기적인 지수 변경에 맞춰 만기가 짧아진 채권을 교체",
      "이자 수입을 모아 월 단위로 분배",
      "듀레이션이 길어 장기금리 1%p 변화의 가격 충격이 큼"
    ]
  },
  composition: {
    asOf: "2026-06-30",
    note: "iShares 공식 Exposure Breakdowns 기준. 비중은 수시로 변합니다.",
    views: [
      {
        id: "maturity",
        label: "만기 구간",
        type: "donut",
        items: [
          { label: "20년 초과", value: 99.46, color: "#112b3b" },
          { label: "15~20년", value: 0.17, color: "#c9f31d" },
          { label: "현금·파생", value: 0.37, color: "#d8d9d2" }
        ]
      },
      {
        id: "sector",
        label: "자산 유형",
        type: "bars",
        items: [
          { label: "미국 재무부 채권", sub: "Treasuries", value: 99.63 },
          { label: "현금·파생", sub: "Cash and/or Derivatives", value: 0.37 }
        ]
      },
      {
        id: "credit",
        label: "신용등급",
        type: "donut",
        items: [
          { label: "AA 등급", value: 99.63, color: "#69b79c" },
          { label: "현금·파생", value: 0.37, color: "#d8d9d2" }
        ]
      }
    ]
  },
  holdingsAsOf: "2026-06-30",
  holdings: [],
  concentrationNote:
    "발행자는 사실상 미국 재무부 한 곳입니다. 종목 수는 많아도 위험 요인은 장기금리와 달러에 집중되므로 일반적인 분산채권 ETF와 성격이 다릅니다.",
  securityCharts: {
    title: "ETF·장기금리 참고 차트",
    description:

      "TLT는 구성 자산이 개별 주식이 아니라 미국 장기국채입니다. 그래서 구성 종목 주가 차트 대신 TLT 가격, 미국 10년물·30년물 금리 차트를 함께 보여줍니다.",
    asOf: "2026-07-08",
    note:
      "국채 ETF는 편입 채권 각각보다 금리 방향과 ETF 가격의 반대 움직임을 같이 보는 편이 실전적으로 유용합니다. 페이지 안에서는 저장된 1년 일봉 데이터로 직접 차트를 그립니다.",
    symbols: [
      { name: "TLT", ticker: "TLT", exchange: "NASDAQ", chartSymbol: "NASDAQ:TLT", yahooSymbol: "TLT", embed: true, role: "ETF 가격", weight: 100 },
      { name: "미국 10년 국채금리", ticker: "US10Y", exchange: "TVC", chartSymbol: "TVC:US10Y", yahooSymbol: "^TNX", fredSymbol: "DGS10", embed: false, role: "중장기 금리 참고", weight: 0 },
      { name: "미국 30년 국채금리", ticker: "US30Y", exchange: "TVC", chartSymbol: "TVC:US30Y", yahooSymbol: "^TYX", fredSymbol: "DGS30", embed: false, role: "초장기 금리 참고", weight: 0 }
    ]
  },
  distribution: {
    frequency: "매월",
    schedule: "월초 배당락·기준일, 통상 수일 뒤 지급",
    latestAmount: "$0.318030",
    trailingAmount: "공식 12개월 수익률",
    trailingYield: "4.56%",
    secYield: "4.95%",
    yieldAsOf: "12개월 수익률·SEC 수익률 2026-07-02 기준",
    explanation:
      "TLT의 월분배금은 보유 국채의 이자 수입을 중심으로 형성되며 매달 금액이 달라집니다. 30일 SEC 수익률은 최근 포트폴리오 수익력을 연환산한 비교 지표이고, 12개월 분배수익률은 실제 과거 분배를 반영하므로 둘의 의미가 다릅니다.",
    rows: [
      { recordDate: "2026-07-01", payDate: "2026-07-07", amount: 0.31803 },
      { recordDate: "2026-06-01", payDate: "2026-06-04", amount: 0.335777 },
      { recordDate: "2026-05-01", payDate: "2026-05-06", amount: 0.315346 },
      { recordDate: "2026-04-01", payDate: "2026-04-07", amount: 0.344779 },
      { recordDate: "2026-03-02", payDate: "2026-03-05", amount: 0.300633 },
      { recordDate: "2026-02-02", payDate: "2026-02-05", amount: 0.331885 },
      { recordDate: "2025-12-19", payDate: "2025-12-24", amount: 0.342437 },
      { recordDate: "2025-12-01", payDate: "2025-12-04", amount: 0.320648 },
      { recordDate: "2025-11-03", payDate: "2025-11-06", amount: 0.325125 },
      { recordDate: "2025-10-01", payDate: "2025-10-06", amount: 0.310447 }
    ],
    currency: "$",
    tax:
      "한국 거주자가 W-8BEN을 적용받는 일반적인 경우 한·미 조세조약상 미국 원천 배당세율 한도는 15%입니다. 국내 정산과 해외주식 양도세는 계좌·손익 합산에 따라 달라지며, 국외주식 양도소득 기본공제는 연 250만원입니다."
  },
  performance: {
    title: "평균 연환산 총수익률",
    asOf: "2026-06-30",
    note: "미국 달러 기준, 분배금 재투자 가정. 원화 투자자 실제 수익률은 환율에 따라 달라집니다.",
    periods: [
      { label: "1년", value: -0.44 },
      { label: "3년", value: -2.71 },
      { label: "5년", value: -5.55 },
      { label: "10년", value: -1.35 },
      { label: "설정 이후", value: 3.68 }
    ],
    stats: [
      "3년 표준편차 13.72% (05.31)",
      "평균 만기수익률 5.01% (06.22)",
      "유효 듀레이션 15.39년 (06.22)"
    ]
  },
  opportunities: [
    "미국 경기 둔화와 물가 안정으로 연준 금리 인하 기대가 커질 때 장기금리 하락 수혜",
    "위험자산 급락 시 안전자산 선호와 포트폴리오 헤지 수요 유입 가능성",
    "현재 장기국채 금리 수준이 유지되면 월 이자 분배를 통한 현금흐름 확보",
    "매우 좁은 호가 스프레드와 풍부한 거래량으로 대규모 매매가 비교적 수월"
  ],
  risks: [
    "장기 인플레이션·재정적자·국채 공급 우려로 장기금리가 오르면 가격이 크게 하락",
    "듀레이션이 약 15.4년이므로 단순 계산상 금리 1%p 상승 충격이 두 자릿수 가격 하락으로 이어질 수 있음",
    "한국 투자자는 TLT 가격 외에 달러·원 환율 변동을 함께 부담",
    "월분배금은 고정 이자가 아니며 보유채권 교체와 시장금리에 따라 변동",
    "미국 국채라는 이유만으로 단기 가격 안정성이 보장되지는 않음"
  ],
  scenarios: [
    { type: "bull", label: "낙관", condition: "물가 둔화와 경기침체로 장기금리가 빠르게 하락", watch: "미국 10·30년물 금리, CPI·PCE, 고용, 연준 전망" },
    { type: "base", label: "중립", condition: "장기금리가 높은 범위에서 등락하며 분배수익이 가격 변동을 일부 상쇄", watch: "국채 입찰, 기간 프리미엄, SEC 수익률, 월분배금" },
    { type: "bear", label: "비관", condition: "인플레이션 재상승·재정 우려·국채 공급 증가로 장기금리 급등", watch: "30년물 입찰 수요, 기대인플레이션, 재정적자, 달러·원" }
  ],
  checklist: [
    "TLT를 현금성 자산이 아니라 고변동성 장기채 자산으로 분류하기",
    "매수 전 미국 30년물 금리 방향과 현재 듀레이션을 확인하기",
    "원화 기준 목표 비중에 달러 환율 변동까지 포함해 계산하기",
    "월분배금보다 총수익과 세후 현금흐름을 함께 비교하기",
    "국내상장 미국채 ETF와 보수·환헤지·세금·거래시간을 비교하기",
    "금리 상승 시 추가 하락을 감당할 분할매수 기준을 미리 정하기"
  ],
  taxNote:
    "미국상장 ETF는 국내상장 해외ETF와 과세 구조가 다릅니다. 해외주식 손익 합산, 연 250만원 기본공제, 배당 원천징수와 국내 금융소득 합산 가능성을 거래 증권사 또는 세무 전문가에게 확인하세요.",
  sources: [
    { label: "Nasdaq TLT 날짜별 시세", detail: "2026-07-08 종가·거래량과 2026-07-09 실시간 가격", url: "https://api.nasdaq.com/api/quote/TLT/historical?assetclass=etf&fromdate=2026-07-01&todate=2026-07-09&limit=9999" },
    { label: "iShares TLT 공식 페이지", detail: "가격·수익률·분배·포트폴리오 특성", url: "https://www.ishares.com/us/products/239454/ishares-20-year-treasury-bond-etf" },
    { label: "TLT 공식 팩트시트", detail: "상품 목표·성과·위험", url: "https://www.ishares.com/us/literature/fact-sheet/tlt-ishares-20-year-treasury-bond-etf-fund-fact-sheet-en-us.pdf" },
    { label: "국세청 양도소득 기본공제", detail: "국외주식 연 250만원", url: "https://www.nts.go.kr/tax/sub/1.2.3.%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EA%B3%BC%EC%84%B8%ED%91%9C%EC%A4%80%20%EC%8B%A0%EA%B3%A0%20%EB%B0%8F%20%EB%82%A9%EB%B6%80%EA%B3%84%EC%82%B0%EC%84%9C.html" },
    { label: "한·미 조세조약", detail: "미국 원천 배당 세율 한도", url: "https://www.irs.gov/pub/irs-trty/korea.pdf" }
  ]
};


const TLT_20260709 = {
  ...TLT_20260708,
  researchDate: "2026-07-09",
  archiveNote: "비교·변경점·혼합차트",
  dataAsOf: "2026-07-09 09:17 ET",
  quote: {
    ...TLT_20260708.quote,
    price: 84.2701,
    changePct: -0.11,
    navLabel: "$84.32 (07/08 NAV)",
    volume: 384445,
    volumeLabel: "384,445주 (09:17 ET)",
    date: "2026-07-09 09:17 ET",
    label: "2026-07-09 09:17 ET 실시간"
  },
  changeLog: {
    previousDate: "2026-07-08",
    summary: "장기국채 ETF 안에서도 듀레이션과 비용이 어떻게 다른지 비교할 수 있게 보강했습니다.",
    items: [
      { type: "new", label: "대안 ETF 비교", detail: "TLT·VGLT·EDV의 보수, 듀레이션, SEC 수익률, 스프레드를 비교" },
      { type: "chart", label: "차트 방식 구분", detail: "TLT 가격은 TradingView, 외부 표시가 제한되는 10년·30년 금리는 자체 차트 사용" },
      { type: "same", label: "핵심 위험", detail: "미국 신용위험보다 장기금리와 달러 변동에 집중된다는 판단은 유지" }
    ]
  },
  peerComparison: {
    title: "미국 장기국채 ETF 비교",
    asOf: "2026-05~07 각 운용사 공식 자료 기준",
    note: "수익률과 듀레이션 기준일은 상품마다 조금씩 다릅니다. EDV는 STRIPS 중심이라 금리 민감도가 특히 큽니다.",
    products: [
      { key: "tlt", name: "iShares TLT", ticker: "TLT", featured: true },
      { key: "vglt", name: "Vanguard VGLT", ticker: "VGLT", featured: false },
      { key: "edv", name: "Vanguard EDV", ticker: "EDV", featured: false }
    ],
    rows: [
      { label: "핵심 노출", values: { tlt: "20년 초과 미국 국채", vglt: "장기 미국 국채", edv: "장기 STRIPS" } },
      { label: "총보수", values: { tlt: "0.15%", vglt: "0.03%", edv: "0.05%" }, winner: "vglt" },
      { label: "순자산", values: { tlt: "$415.3억 (07.08)", vglt: "공식 페이지 확인", edv: "$43억 (05.31)" } },
      { label: "평균 거래량", values: { tlt: "2,581만주 (07.08)", vglt: "상대적으로 작음", edv: "상대적으로 작음" }, winner: "tlt" },
      { label: "중간 호가 스프레드", values: { tlt: "0.01%", vglt: "0.02%", edv: "0.02%" }, winner: "tlt" },
      { label: "유효·평균 듀레이션", values: { tlt: "15.20년", vglt: "13.8년", edv: "24.1년" } },
      { label: "30일 SEC 수익률", values: { tlt: "5.00%", vglt: "5.00%", edv: "5.18%" } },
      { label: "분배", values: { tlt: "월분배", vglt: "운용사 일정 확인", edv: "운용사 일정 확인" } },
      { label: "집중 위험", values: { tlt: "미 장기금리", vglt: "미 장기금리", edv: "미 초장기금리·STRIPS" } },
      { label: "원화 투자자", values: { tlt: "USD 환노출", vglt: "USD 환노출", edv: "USD 환노출" } },
      { label: "어울리는 목적", values: { tlt: "유동성·대표성", vglt: "낮은 보수·조금 짧은 듀레이션", edv: "강한 금리 하락 베팅" } }
    ],
    takeaways: [
      "TLT는 보수가 가장 낮지는 않지만 거래량과 스프레드가 압도적으로 좋아 매매 편의성이 강점입니다.",
      "VGLT는 더 낮은 비용과 조금 짧은 듀레이션, EDV는 훨씬 긴 듀레이션이라는 차이가 핵심입니다.",
      "SEC 수익률이 조금 높다는 이유만으로 EDV를 고르면 금리 상승 시 가격 충격이 훨씬 커질 수 있습니다."
    ],
    sources: [
      { label: "iShares TLT", url: "https://www.ishares.com/us/products/239454/ishares-20-year-treasury-bond-etf" },
      { label: "Vanguard VGLT", url: "https://advisors.vanguard.com/investments/products/vglt/vanguard-long-term-treasury-etf.html" },
      { label: "Vanguard EDV", url: "https://advisors.vanguard.com/investments/products/edv/vanguard-extended-duration-treasury-etf" }
    ]
  },
  securityCharts: {
    ...TLT_20260708.securityCharts,
    description:
      "TLT 가격은 TradingView 차트로, 외부 위젯에서 제한되는 미국 10년·30년 국채금리는 저장된 1년 일봉 자체 차트로 보여줍니다.",
    note:
      "종목별 표시 가능 여부를 따로 저장합니다. TLT는 TradingView, 미국 국채금리 심볼은 자체 차트를 사용합니다."
  },
  sources: [
    ...TLT_20260708.sources,
    { label: "Vanguard VGLT 공식", detail: "비교 ETF 보수·듀레이션·SEC 수익률", url: "https://advisors.vanguard.com/investments/products/vglt/vanguard-long-term-treasury-etf.html" },
    { label: "Vanguard EDV 공식", detail: "STRIPS ETF 보수·듀레이션·SEC 수익률", url: "https://advisors.vanguard.com/investments/products/edv/vanguard-extended-duration-treasury-etf" }
  ]
};

