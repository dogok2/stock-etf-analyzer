window.OTHER_INDICATORS = {
  asOf: "2026-08-25",
  calendar: {
      "asOf": "2026-08-25 06:42 KST",
      "periodLabel": "이번 주",
      "weekStart": "2026-08-23",
      "weekEnd": "2026-08-29",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://www.investing.com/economic-calendar/",
      "filter": "currentTab=thisWeek · importance[]=3 · timezone=GMT+9",
      "note": "Investing.com 경제 캘린더의 이번 주 필터에서 중요도 3개로 반환된 이벤트만 저장했습니다. 휴장일은 이벤트 수에서 제외했습니다.",
      "events": [
          {
              "country": "DE",
              "currency": "EUR",
              "date": "2026-08-25",
              "time": "15:00",
              "event": "German GDP (QoQ) (Q2)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "0.2%",
              "previous": "0.4%",
              "memo": "경제 성장률을 확인하는 핵심 지표입니다. 경기 국면과 기업 이익 기대를 함께 판단합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-25",
              "time": "23:00",
              "event": "CB Consumer Confidence (Aug)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "90.3",
              "previous": "90.8",
              "memo": "소비 모멘텀을 확인하는 지표입니다. 경기 방어력과 기업 실적 기대를 판단할 때 참고합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-25",
              "time": "23:00",
              "event": "New Home Sales (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "620K",
              "previous": "628K",
              "memo": "주택 경기를 확인하는 지표입니다. 금리 부담과 소비·은행·건설 관련 심리에 영향을 줄 수 있습니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-26",
              "time": "21:30",
              "event": "Core PCE Price Index (MoM) (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "0.2%",
              "previous": "0.1%",
              "memo": "시장 변동성이 커질 수 있는 고중요 이벤트입니다. 실제값과 예상치 차이를 중심으로 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-26",
              "time": "21:30",
              "event": "Core PCE Price Index (YoY) (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "3.3%",
              "previous": "3.3%",
              "memo": "시장 변동성이 커질 수 있는 고중요 이벤트입니다. 실제값과 예상치 차이를 중심으로 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-26",
              "time": "21:30",
              "event": "Durable Goods Orders (MoM) (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "0.5%",
              "previous": "0.5%",
              "memo": "시장 변동성이 커질 수 있는 고중요 이벤트입니다. 실제값과 예상치 차이를 중심으로 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-26",
              "time": "21:30",
              "event": "GDP (QoQ) (Q2)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "1.5%",
              "previous": "1.5%",
              "memo": "경제 성장률을 확인하는 핵심 지표입니다. 경기 국면과 기업 이익 기대를 함께 판단합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-26",
              "time": "23:30",
              "event": "Crude Oil Inventories",
              "impact": "★★★",
              "actual": "-",
              "forecast": "-",
              "previous": "4.405M",
              "memo": "원유 수급을 보는 에너지 지표입니다. 유가, 물가 기대, 에너지주 흐름과 함께 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-27",
              "time": "21:30",
              "event": "Initial Jobless Claims",
              "impact": "★★★",
              "actual": "-",
              "forecast": "208K",
              "previous": "206K",
              "memo": "고용 둔화 또는 과열 여부를 보는 지표입니다. 연준 정책 기대와 경기 민감 업종에 영향을 줍니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-08-28",
              "time": "22:45",
              "event": "Chicago PMI",
              "impact": "★★★",
              "actual": "-",
              "forecast": "57.8",
              "previous": "57.6",
              "memo": "기업 체감 경기와 주문 흐름을 보는 선행 지표입니다. 50선을 기준으로 확장·위축을 함께 확인합니다."
          }
      ]
  },
  marketCharts: [
    {
      id: "usdkrw",
      name: "달러/원 환율",
      ticker: "USD/KRW",
      symbol: "FX_IDC:USDKRW",
      embed: true,
      category: "환율",
      memo: "국내 ETF와 해외 주식 환산 수익률을 볼 때 가장 먼저 확인합니다."
    },
    {
      id: "jpykrw",
      name: "엔/원 환율",
      ticker: "JPY/KRW",
      symbol: "FX_IDC:JPYKRW",
      embed: true,
      category: "환율",
      memo: "일본 수출주, 엔화 약세/강세, 엔 캐리 청산 리스크를 볼 때 참고합니다."
    },
    {
      id: "eurkrw",
      name: "유로/원 환율",
      ticker: "EUR/KRW",
      symbol: "FX_IDC:EURKRW",
      embed: true,
      category: "환율",
      memo: "유럽 경기와 ECB 기대가 한국 투자자 환산 수익률에 미치는 영향을 봅니다."
    },
    {
      id: "btcusd",
      name: "비트코인/달러",
      ticker: "BTC/USD",
      symbol: "COINBASE:BTCUSD",
      embed: true,
      category: "코인",
      memo: "위험자산 선호와 유동성 민감도를 빠르게 보는 대표 코인 지표입니다."
    },
    {
      id: "ethusd",
      name: "이더리움/달러",
      ticker: "ETH/USD",
      symbol: "COINBASE:ETHUSD",
      embed: true,
      category: "코인",
      memo: "코인 내부 위험선호와 스마트컨트랙트 테마를 같이 봅니다."
    },
    {
      id: "gold",
      name: "금",
      ticker: "XAU/USD",
      symbol: "OANDA:XAUUSD",
      embed: true,
      category: "귀금속",
      memo: "실질금리, 달러, 지정학 리스크를 함께 반영하는 방어 자산입니다."
    },
    {
      id: "silver",
      name: "은",
      ticker: "XAG/USD",
      symbol: "OANDA:XAGUSD",
      embed: true,
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
      "asOf": "2026-08-04 08:05 EDT / 2026-08-04 21:05 KST",
      "source": "Investing.com Fed Rate Monitor · CME 30-Day Fed Funds futures 기반",
      "sourceUrl": "https://www.investing.com/central-banks/fed-rate-monitor",
      "cmeUrl": "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
      "currentTarget": "3.50% ~ 3.75%",
      "note": "주식·ETF 분석 작업 시 Investing.com Fed Rate Monitor에 표시된 CME 기반 확률을 하루 한 번 확인해 스냅샷으로 저장합니다. 실제 거래 전에는 원문 링크에서 최신 값을 다시 확인해야 합니다.",
      "meetings": [
          {
              "date": "2026-09-16",
              "label": "9월 FOMC",
              "meetingTime": "Sep 16, 2026 02:00PM ET",
              "dominant": "25bp 인상 우세",
              "probabilities": [
                  {
                      "range": "3.50 - 3.75",
                      "probability": 42.9,
                      "previousDay": 37.9,
                      "previousWeek": 19.1
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 57.1,
                      "previousDay": 62.1,
                      "previousWeek": 55.3
                  },
                  {
                      "range": "4.00 - 4.25",
                      "probability": 0.0,
                      "previousDay": 0.0,
                      "previousWeek": 25.5
                  }
              ]
          },
          {
              "date": "2026-10-28",
              "label": "10월 FOMC",
              "meetingTime": "Oct 28, 2026 02:00PM ET",
              "dominant": "25bp 인상 우세",
              "probabilities": [
                  {
                      "range": "3.50 - 3.75",
                      "probability": 30.1,
                      "previousDay": 26.6,
                      "previousWeek": 13.0
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 52.9,
                      "previousDay": 54.9,
                      "previousWeek": 43.7
                  },
                  {
                      "range": "4.00 - 4.25",
                      "probability": 17.1,
                      "previousDay": 18.6,
                      "previousWeek": 35.1
                  },
                  {
                      "range": "4.25 - 4.50",
                      "probability": 0.0,
                      "previousDay": 0.0,
                      "previousWeek": 8.2
                  }
              ]
          },
          {
              "date": "2026-12-09",
              "label": "12월 FOMC",
              "meetingTime": "Dec 09, 2026 02:00PM ET",
              "dominant": "25bp 인상 우세",
              "probabilities": [
                  {
                      "range": "3.50 - 3.75",
                      "probability": 17.8,
                      "previousDay": 14.6,
                      "previousWeek": 8.4
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 43.5,
                      "previousDay": 42.2,
                      "previousWeek": 32.9
                  },
                  {
                      "range": "4.00 - 4.25",
                      "probability": 31.7,
                      "previousDay": 34.9,
                      "previousWeek": 38.1
                  },
                  {
                      "range": "4.25 - 4.50",
                      "probability": 7.0,
                      "previousDay": 8.3,
                      "previousWeek": 17.7
                  },
                  {
                      "range": "4.50 - 4.75",
                      "probability": 0.0,
                      "previousDay": 0.0,
                      "previousWeek": 2.9
                  }
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
