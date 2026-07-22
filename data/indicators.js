window.OTHER_INDICATORS = {
  asOf: "2026-07-22",
  calendar: {
      "asOf": "2026-07-22 09:11 KST",
      "periodLabel": "이번 주",
      "weekStart": "2026-07-19",
      "weekEnd": "2026-07-25",
      "source": "Investing.com Economic Calendar",
      "sourceUrl": "https://www.investing.com/economic-calendar/",
      "filter": "currentTab=thisWeek · importance[]=3 · timezone=GMT+9",
      "note": "Investing.com 경제 캘린더의 이번 주 필터에서 중요도 3개로 반환된 이벤트만 저장했습니다. 휴장일은 이벤트 수에서 제외했습니다.",
      "events": [
          {
              "country": "GB",
              "currency": "GBP",
              "date": "2026-07-22",
              "time": "15:00",
              "event": "CPI (YoY) (Jun)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "2.7%",
              "previous": "2.8%",
              "memo": "물가 압력을 확인하는 핵심 지표입니다. 금리 기대, 환율, 성장주 할인율에 영향을 줄 수 있습니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-07-22",
              "time": "23:30",
              "event": "Crude Oil Inventories",
              "impact": "★★★",
              "actual": "-",
              "forecast": "-1.500M",
              "previous": "-1.692M",
              "memo": "원유 수급을 보는 에너지 지표입니다. 유가, 물가 기대, 에너지주 흐름과 함께 확인합니다."
          },
          {
              "country": "EU",
              "currency": "EUR",
              "date": "2026-07-23",
              "time": "21:15",
              "event": "Deposit Facility Rate (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "2.25%",
              "previous": "2.25%",
              "memo": "시장 변동성이 커질 수 있는 고중요 이벤트입니다. 실제값과 예상치 차이를 중심으로 확인합니다."
          },
          {
              "country": "EU",
              "currency": "EUR",
              "date": "2026-07-23",
              "time": "21:15",
              "event": "ECB Interest Rate Decision (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "2.40%",
              "previous": "2.40%",
              "memo": "중앙은행 금리 결정입니다. 통화정책 온도와 글로벌 금리 기대를 비교할 때 중요합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-07-23",
              "time": "21:30",
              "event": "Initial Jobless Claims",
              "impact": "★★★",
              "actual": "-",
              "forecast": "211K",
              "previous": "208K",
              "memo": "고용 둔화 또는 과열 여부를 보는 지표입니다. 연준 정책 기대와 경기 민감 업종에 영향을 줍니다."
          },
          {
              "country": "EU",
              "currency": "EUR",
              "date": "2026-07-23",
              "time": "21:45",
              "event": "ECB Press Conference",
              "impact": "★★★",
              "actual": "-",
              "forecast": "-",
              "previous": "-",
              "memo": "중앙은행 금리 결정입니다. 통화정책 온도와 글로벌 금리 기대를 비교할 때 중요합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-07-24",
              "time": "22:45",
              "event": "S&P Global Manufacturing PMI (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "54.5",
              "previous": "53.9",
              "memo": "기업 체감 경기와 주문 흐름을 보는 선행 지표입니다. 50선을 기준으로 확장·위축을 함께 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-07-24",
              "time": "22:45",
              "event": "S&P Global Services PMI (Jul)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "51.4",
              "previous": "51.2",
              "memo": "기업 체감 경기와 주문 흐름을 보는 선행 지표입니다. 50선을 기준으로 확장·위축을 함께 확인합니다."
          },
          {
              "country": "US",
              "currency": "USD",
              "date": "2026-07-24",
              "time": "23:00",
              "event": "New Home Sales (Jun)",
              "impact": "★★★",
              "actual": "-",
              "forecast": "604K",
              "previous": "580K",
              "memo": "주택 경기를 확인하는 지표입니다. 금리 부담과 소비·은행·건설 관련 심리에 영향을 줄 수 있습니다."
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
      "asOf": "2026-07-20 09:35 EDT / 2026-07-20 22:35 KST",
      "source": "Investing.com Fed Rate Monitor · CME 30-Day Fed Funds futures 기반",
      "sourceUrl": "https://www.investing.com/central-banks/fed-rate-monitor",
      "cmeUrl": "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
      "currentTarget": "3.50% ~ 3.75%",
      "note": "주식·ETF 분석 작업 시 Investing.com Fed Rate Monitor에 표시된 CME 기반 확률을 하루 한 번 확인해 스냅샷으로 저장합니다. 실제 거래 전에는 원문 링크에서 최신 값을 다시 확인해야 합니다.",
      "meetings": [
          {
              "date": "2026-07-29",
              "label": "7월 FOMC",
              "meetingTime": "Jul 29, 2026 02:00PM ET",
              "dominant": "동결 우세",
              "probabilities": [
                  {
                      "range": "3.50 - 3.75",
                      "probability": 83.4,
                      "previousDay": 86.7,
                      "previousWeek": 64.6
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 16.6,
                      "previousDay": 13.3,
                      "previousWeek": 35.4
                  }
              ]
          },
          {
              "date": "2026-09-16",
              "label": "9월 FOMC",
              "meetingTime": "Sep 16, 2026 02:00PM ET",
              "dominant": "25bp 인상 우세",
              "probabilities": [
                  {
                      "range": "3.50 - 3.75",
                      "probability": 36.3,
                      "previousDay": 42.7,
                      "previousWeek": 29.2
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 54.3,
                      "previousDay": 50.5,
                      "previousWeek": 51.4
                  },
                  {
                      "range": "4.00 - 4.25",
                      "probability": 9.4,
                      "previousDay": 6.7,
                      "previousWeek": 19.4
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
                      "probability": 26.3,
                      "previousDay": 31.9,
                      "previousWeek": 21.8
                  },
                  {
                      "range": "3.75 - 4.00",
                      "probability": 49.3,
                      "previousDay": 48.6,
                      "previousWeek": 45.8
                  },
                  {
                      "range": "4.00 - 4.25",
                      "probability": 21.8,
                      "previousDay": 17.8,
                      "previousWeek": 27.5
                  },
                  {
                      "range": "4.25 - 4.50",
                      "probability": 2.6,
                      "previousDay": 1.7,
                      "previousWeek": 4.9
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
