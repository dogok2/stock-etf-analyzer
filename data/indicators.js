window.OTHER_INDICATORS = {
  asOf: "2026-07-10",
  calendar: {
    asOf: "2026-07-10 19:33 KST",
    periodLabel: "이번 주",
    weekStart: "2026-07-05",
    weekEnd: "2026-07-11",
    source: "Investing.com Economic Calendar",
    sourceUrl: "https://www.investing.com/economic-calendar/",
    filter: "currentTab=thisWeek · importance[]=3 · timezone=GMT+9",
    note:
      "Investing.com 경제 캘린더의 이번 주 필터에서 중요도 3개로 반환된 이벤트만 저장했습니다. 휴장일은 이벤트 수에서 제외했습니다.",
    events: [
      {
        country: "US",
        currency: "USD",
        date: "2026-07-06",
        time: "22:45",
        event: "S&P Global Services PMI (Jun)",
        impact: "★★★",
        actual: "51.2",
        forecast: "51.3",
        previous: "51.3",
        memo: "서비스 경기 둔화 여부를 확인하는 선행 지표입니다. 예상보다 낮아 경기 민감주와 금리 기대에 영향을 줄 수 있습니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-06",
        time: "23:00",
        event: "ISM Non-Manufacturing PMI (Jun)",
        impact: "★★★",
        actual: "54.0",
        forecast: "54.2",
        previous: "54.5",
        memo: "미국 서비스업 체감 경기를 보는 핵심 지표입니다. 50 이상은 확장 국면이지만 전월 대비 둔화 여부를 같이 봅니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-06",
        time: "23:00",
        event: "ISM Non-Manufacturing Prices (Jun)",
        impact: "★★★",
        actual: "67.7",
        forecast: "67.5",
        previous: "71.3",
        memo: "서비스업 가격 압력 지표입니다. 물가 재가속 우려가 생기면 금리·달러·성장주 할인율에 영향을 줍니다."
      },
      {
        country: "NZ",
        currency: "NZD",
        date: "2026-07-08",
        time: "11:00",
        event: "RBNZ Interest Rate Decision",
        impact: "★★★",
        actual: "2.50%",
        forecast: "2.50%",
        previous: "2.25%",
        memo: "뉴질랜드 중앙은행 금리 결정입니다. 직접 비중은 작아도 글로벌 중앙은행 스탠스 비교에 참고합니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-08",
        time: "23:30",
        event: "Crude Oil Inventories",
        impact: "★★★",
        actual: "2.998M",
        forecast: "-1.900M",
        previous: "-3.775M",
        memo: "원유 재고가 예상보다 늘면 유가에는 부담입니다. 에너지주, 물가 기대, 운송비 흐름을 같이 봅니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-09",
        time: "02:00",
        event: "10-Year Note Auction",
        impact: "★★★",
        actual: "4.580%",
        forecast: "-",
        previous: "4.538%",
        memo: "미국 10년물 수요와 낙찰 금리를 봅니다. 장기금리 민감도가 큰 성장주·채권 ETF에 중요합니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-09",
        time: "03:00",
        event: "FOMC Meeting Minutes",
        impact: "★★★",
        actual: "-",
        forecast: "-",
        previous: "-",
        memo: "연준 내부 논의의 온도를 확인하는 이벤트입니다. 다음 FOMC 확률과 장단기 금리 방향성 판단에 연결합니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-09",
        time: "21:30",
        event: "Initial Jobless Claims",
        impact: "★★★",
        actual: "215K",
        forecast: "218K",
        previous: "217K",
        memo: "매주 나오는 고용 둔화 신호입니다. 예상보다 낮으면 고용이 아직 견조하다는 해석이 가능합니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-09",
        time: "23:00",
        event: "Existing Home Sales (Jun)",
        impact: "★★★",
        actual: "4.09M",
        forecast: "4.19M",
        previous: "4.19M",
        memo: "주택 거래는 금리 부담을 빠르게 반영합니다. 소비·은행·건설 관련 심리에 영향을 줄 수 있습니다."
      },
      {
        country: "US",
        currency: "USD",
        date: "2026-07-10",
        time: "02:01",
        event: "30-Year Bond Auction",
        impact: "★★★",
        actual: "5.058%",
        forecast: "-",
        previous: "5.050%",
        memo: "초장기 국채 수요를 봅니다. TLT 같은 장기채 ETF와 성장주 밸류에이션을 볼 때 특히 중요합니다."
      },
      {
        country: "DE",
        currency: "EUR",
        date: "2026-07-10",
        time: "15:00",
        event: "German CPI (MoM) (Jun)",
        impact: "★★★",
        actual: "-0.3%",
        forecast: "-0.3%",
        previous: "-0.2%",
        memo: "유로존 물가 압력을 보는 대표 지표입니다. EUR/KRW와 유럽 금리 기대를 같이 확인합니다."
      }
    ]
  },
  marketCharts: [
    {
      id: "usdkrw",
      name: "달러/원 환율",
      ticker: "USD/KRW",
      symbol: "FX_IDC:USDKRW",
      category: "환율",
      memo: "국내 ETF와 해외 주식 환산 수익률을 볼 때 가장 먼저 확인합니다."
    },
    {
      id: "jpykrw",
      name: "엔/원 환율",
      ticker: "JPY/KRW",
      symbol: "FX_IDC:JPYKRW",
      category: "환율",
      memo: "일본 수출주, 엔화 약세/강세, 엔 캐리 청산 리스크를 볼 때 참고합니다."
    },
    {
      id: "eurkrw",
      name: "유로/원 환율",
      ticker: "EUR/KRW",
      symbol: "FX_IDC:EURKRW",
      category: "환율",
      memo: "유럽 경기와 ECB 기대가 한국 투자자 환산 수익률에 미치는 영향을 봅니다."
    },
    {
      id: "btcusd",
      name: "비트코인/달러",
      ticker: "BTC/USD",
      symbol: "COINBASE:BTCUSD",
      category: "코인",
      memo: "위험자산 선호와 유동성 민감도를 빠르게 보는 대표 코인 지표입니다."
    },
    {
      id: "ethusd",
      name: "이더리움/달러",
      ticker: "ETH/USD",
      symbol: "COINBASE:ETHUSD",
      category: "코인",
      memo: "코인 내부 위험선호와 스마트컨트랙트 테마를 같이 봅니다."
    },
    {
      id: "gold",
      name: "금",
      ticker: "XAU/USD",
      symbol: "OANDA:XAUUSD",
      category: "귀금속",
      memo: "실질금리, 달러, 지정학 리스크를 함께 반영하는 방어 자산입니다."
    },
    {
      id: "silver",
      name: "은",
      ticker: "XAG/USD",
      symbol: "OANDA:XAGUSD",
      category: "귀금속",
      memo: "귀금속 성격과 산업재 성격을 동시에 가져 금보다 경기 민감도가 큽니다."
    },
    {
      id: "copper",
      name: "구리",
      ticker: "Copper Futures",
      symbol: "COMEX:HG1!",
      yahooSymbol: "COPPER-FALLBACK",
      category: "산업금속",
      embed: false,
      provider: "저장 차트",
      memo: "제조업, 전력망, AI 인프라 투자 기대를 보는 경기 민감 원자재입니다."
    },
    {
      id: "wti",
      name: "WTI유",
      ticker: "WTI Crude Oil",
      symbol: "NYMEX:CL1!",
      yahooSymbol: "WTI-FALLBACK",
      category: "에너지",
      embed: false,
      provider: "저장 차트",
      memo: "인플레이션, 운송비, 산유국 리스크를 볼 때 필요한 대표 에너지 지표입니다."
    },
    {
      id: "naturalgas",
      name: "천연가스",
      ticker: "Natural Gas",
      symbol: "NYMEX:NG1!",
      yahooSymbol: "NATGAS-FALLBACK",
      category: "에너지",
      embed: false,
      provider: "저장 차트",
      memo: "계절 수요, 전력 가격, 에너지 인프라 관련주를 볼 때 확인합니다."
    }
  ],
  fedWatch: {
    asOf: "2026-07-10 05:25 EDT / 18:25 KST",
    source: "Investing.com Fed Rate Monitor · CME 30-Day Fed Funds futures 기반",
    sourceUrl: "https://www.investing.com/central-banks/fed-rate-monitor",
    cmeUrl: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
    currentTarget: "3.50% ~ 3.75%",
    note:
      "CME FedWatch 직접 API는 별도 접근이 필요해 현재 버전은 Investing.com Fed Rate Monitor에 표시된 CME 기반 확률 스냅샷으로 저장합니다.",
    meetings: [
      {
        date: "2026-07-29",
        label: "7월 FOMC",
        meetingTime: "2026-07-29 02:00 PM ET",
        dominant: "동결 우세",
        probabilities: [
          { range: "3.50 - 3.75", probability: 75.6, previousDay: 75.6, previousWeek: 82.3 },
          { range: "3.75 - 4.00", probability: 24.4, previousDay: 24.4, previousWeek: 17.7 }
        ]
      },
      {
        date: "2026-09-16",
        label: "9월 FOMC",
        meetingTime: "2026-09-16 02:00 PM ET",
        dominant: "25bp 인상 확률 우세",
        probabilities: [
          { range: "3.50 - 3.75", probability: 41.6, previousDay: 38.5, previousWeek: 46.9 },
          { range: "3.75 - 4.00", probability: 47.5, previousDay: 49.5, previousWeek: 45.5 },
          { range: "4.00 - 4.25", probability: 11.0, previousDay: 11.9, previousWeek: 7.6 }
        ]
      },
      {
        date: "2026-10-28",
        label: "10월 FOMC",
        meetingTime: "2026-10-28 02:00 PM ET",
        dominant: "3.75~4.00% 우세",
        probabilities: [
          { range: "3.50 - 3.75", probability: 32.0, previousDay: 29.7, previousWeek: 36.1 },
          { range: "3.75 - 4.00", probability: 46.1, previousDay: 47.0, previousWeek: 45.8 },
          { range: "4.00 - 4.25", probability: 19.3, previousDay: 20.6, previousWeek: 16.3 },
          { range: "4.25 - 4.50", probability: 2.5, previousDay: 2.7, previousWeek: 1.8 }
        ]
      }
    ]
  },
  sourcePolicy: [
    "TradingView 임베드가 정상 표시되는 종목은 페이지 안에서 우선 보여줍니다.",
    "임베드에서 'TradingView에서만 제공되는 심볼입니다'가 뜨는 심볼은 공유 페이지에 남기지 않고 저장 차트 또는 검증된 대체 차트로 전환합니다.",
    "경제 이벤트는 주간 단위로 저장하고, Investing.com importance 3 필터로 확인된 이벤트만 ★★★로 표시합니다.",
    "FedWatch 확률은 업데이트 시점의 스냅샷입니다. 실제 거래 전에는 원문 링크에서 최신 값을 다시 확인해야 합니다."
  ]
};
