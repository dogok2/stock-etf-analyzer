window.OTHER_INDICATORS = {
  asOf: "2026-07-10",
  calendar: {
    asOf: "2026-07-10",
    source: "Investing.com Economic Calendar",
    sourceUrl: "https://www.investing.com/economic-calendar/",
    note:
      "Investing.com 경제 캘린더의 중요도 3개짜리 이벤트를 추적하기 위한 스냅샷입니다. 원문 캘린더는 자동 갱신되지만, 이 정적 공유 페이지는 업데이트 시점의 기록을 보존합니다.",
    events: [
      {
        country: "DE",
        event: "German CPI (YoY) (Jun)",
        impact: "★★★",
        actual: "2.3%",
        forecast: "2.3%",
        previous: "2.6%",
        memo: "독일 물가 둔화 여부는 유로존 금리·EUR/KRW 흐름을 볼 때 우선 확인합니다."
      },
      {
        country: "DE",
        event: "German HICP (YoY) (Jun)",
        impact: "★★★",
        actual: "2.4%",
        forecast: "2.4%",
        previous: "2.7%",
        memo: "ECB 비교 기준 물가지표라 유럽 금리와 달러 강도 판단에 같이 봅니다."
      },
      {
        country: "FR",
        event: "French CPI (YoY) (Jun)",
        impact: "★★★",
        actual: "1.8%",
        forecast: "1.8%",
        previous: "2.4%",
        memo: "프랑스 물가 둔화는 유로존 디스인플레이션 강도를 확인하는 보조 지표입니다."
      },
      {
        country: "BR",
        event: "CPI (YoY) (Jun)",
        impact: "★★★",
        actual: "-",
        forecast: "4.80%",
        previous: "4.72%",
        memo: "신흥국 물가와 원자재 민감도를 같이 볼 때 참고합니다."
      },
      {
        country: "CA",
        event: "Unemployment Rate (Jun)",
        impact: "★★★",
        actual: "-",
        forecast: "6.6%",
        previous: "6.6%",
        memo: "북미 고용 둔화 여부는 달러와 원자재 수요 판단에 영향을 줍니다."
      },
      {
        country: "CA",
        event: "Employment Change (Jun)",
        impact: "★★★",
        actual: "-",
        forecast: "11.2K",
        previous: "87.8K",
        memo: "고용 증가폭 둔화 여부를 캐나다 금리 기대와 함께 봅니다."
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
      memo: "국내 ETF·한국 주식 환산 손익과 외국인 수급을 볼 때 가장 먼저 확인합니다."
    },
    {
      id: "jpykrw",
      name: "엔/원 환율",
      ticker: "JPY/KRW",
      symbol: "FX_IDC:JPYKRW",
      category: "환율",
      memo: "일본 수출주, 원화 상대 강도, 엔 캐리 청산 리스크를 볼 때 사용합니다."
    },
    {
      id: "eurkrw",
      name: "유로/원 환율",
      ticker: "EUR/KRW",
      symbol: "FX_IDC:EURKRW",
      category: "환율",
      memo: "유럽 물가·ECB 기대와 한국 원화 흐름을 비교할 때 참고합니다."
    },
    {
      id: "btcusd",
      name: "비트코인/달러",
      ticker: "BTC/USD",
      symbol: "COINBASE:BTCUSD",
      category: "크립토",
      memo: "위험선호와 유동성 민감도를 빠르게 보는 대표 크립토 지표입니다."
    },
    {
      id: "ethusd",
      name: "이더리움/달러",
      ticker: "ETH/USD",
      symbol: "COINBASE:ETHUSD",
      category: "크립토",
      memo: "크립토 내부 위험선호와 온체인·스마트컨트랙트 테마를 같이 봅니다."
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
      memo: "귀금속 성격과 산업재 성격이 섞여 경기 민감도가 금보다 큽니다."
    },
    {
      id: "copper",
      name: "구리",
      ticker: "Copper Futures",
      symbol: "COMEX:HG1!",
      category: "산업금속",
      memo: "제조업·전력망·AI 인프라 투자 기대를 보는 경기 민감 원자재입니다."
    },
    {
      id: "wti",
      name: "WTI유",
      ticker: "WTI Crude Oil",
      symbol: "NYMEX:CL1!",
      category: "에너지",
      memo: "인플레이션, 항공·운송 비용, 산유국 리스크를 볼 때 핵심입니다."
    },
    {
      id: "naturalgas",
      name: "천연가스",
      ticker: "Natural Gas",
      symbol: "NYMEX:NG1!",
      category: "에너지",
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
      "CME FedWatch 직접 API는 별도 접근이 필요할 수 있어 첫 버전은 Investing.com Fed Rate Monitor에 표시된 CME 기반 확률 스냅샷으로 저장합니다.",
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
    "TradingView 위젯이 표시되는 심볼은 페이지 안에서 차트를 우선 보여줍니다.",
    "거래소·데이터 제공자 정책상 지연 시세일 수 있으며, CME 원자재 선물은 실시간 보장이 아닙니다.",
    "TradingView 임베드가 막히는 심볼은 정적 페이지에서 실시간 대체가 어렵고, API 키가 있는 데이터 제공자 또는 저장 데이터가 필요합니다.",
    "경제 캘린더와 FedWatch 확률은 업데이트 시점의 스냅샷으로 보존하고 원문 링크를 함께 둡니다."
  ]
};
