const UVIX_20260712 = {
  researchDate: "2026-07-12",
  dataAsOf: "2026-07-10",
  archiveNote: "첫 분석 기록",
  tags: ["미국상장", "VIX선물", "일일2배", "초단기전술"],
  thesis:
    "UVIX는 현물 VIX의 2배가 아니라 1·2개월 VIX 선물로 구성된 Long VIX Futures Index(LONGVOL)의 하루 수익률을 비용 차감 전 2배 추종하는 레버리지 상품입니다. 시장 충격이 빠르게 발생하고 VIX 선물도 함께 급등할 때 단기 헤지 효과가 클 수 있지만, 콘탱고 롤 비용과 일일 재조정·복리 경로 때문에 보유기간이 길어질수록 구조적 감가가 매우 강합니다. 운용사도 단기 투자용이며 하루 안에 원금 전액을 잃을 수 있다고 경고하므로 장기 투자 ETF가 아니라 적극적으로 관리하는 초단기 전술 도구로 봐야 합니다.",
  quote: {
    price: 56.41,
    changePct: -4.24,
    navLabel: "$59.42 · 2026-07-07 공식 NAV",
    volume: 1192700,
    date: "2026-07-10",
    label: "2026-07-10 종가",
    currency: "$",
    sourceLabel: "Yahoo Finance · Volatility Shares"
  },
  facts: [
    { label: "티커", value: "UVIX" },
    { label: "운용사", value: "Volatility Shares" },
    { label: "상장시장", value: "Cboe BZX" },
    { label: "설정일", value: "2022.03.28" },
    { label: "일일 목표", value: "LONGVOL 하루 수익률의 2배" },
    { label: "기초지수", value: "Long VIX Futures Index" },
    { label: "지수 구성", value: "1·2개월 VIX 선물 일일 롤" },
    { label: "운용보수", value: "연 1.65% + 거래·지수 등 기타비용" },
    { label: "순자산", value: "약 $2.81억 (07.07)" },
    { label: "분배", value: "통상 미지급" },
    { label: "세무 서류", value: "Schedule K-1 발급" },
    { label: "상품 구조", value: "상품선물 풀(Commodity Pool)" },
    { label: "최근 역분할", value: "2026.07.01 · 1대20" },
    { label: "52주 범위", value: "$56.08 ~ $444.20 · 역분할 조정" }
  ],
  scores: [
    { label: "급락 대응력", score: 4.5, note: "VIX 단기선물 급등 시 일일 2배 노출" },
    { label: "추종 명확성", score: 2.0, note: "현물 VIX가 아니라 LONGVOL 선물지수 추종" },
    { label: "비용·캐리", score: 1.0, note: "높은 보수와 콘탱고 롤 비용" },
    { label: "거래 유동성", score: 3.8, note: "단기 매매 가능한 거래량이나 평시에도 변동성 큼" },
    { label: "장기보유 적합성", score: 0.5, note: "일일 재조정·복리감가로 장기보유에 부적합" }
  ],
  indexMethod: {
    summary:
      "LONGVOL은 만기가 약 한 달로 일정하도록 최근월과 차근월 VIX 선물의 비중을 매일 조금씩 옮깁니다. UVIX는 이 지수의 하루 등락률을 약 2배로 맞추기 위해 매일 포지션을 재조정합니다. 따라서 VIX 현물, 단기 VIX 선물, UVIX는 서로 다른 상품이며 며칠 누적 수익률도 단순 2배가 아닙니다.",
    details: [
      "Cboe VIX 선물 최근월·차근월을 사용해 약 30일의 일정한 가중평균 만기를 유지",
      "매일 최근월 비중을 줄이고 차근월 비중을 늘리는 방식으로 롤링",
      "마감 전 15분 동안 이론 포트폴리오의 시간가중평균가격(TWAP)으로 지수 종가 산출",
      "UVIX는 LONGVOL의 하루 수익률만 2배로 추구하며 장기간 2배를 보장하지 않음",
      "지수 변동·자금 유출입에 맞춰 매일 레버리지 노출을 재조정"
    ]
  },
  holdingsAsOf: "2026-07-09",
  holdings: [
    { name: "Cboe VIX Future Jul 2026", ticker: "VX/N6", exchange: "CFE", chartSymbol: "CBOE:VX1!", embed: false, role: "최근월 VIX 선물", weight: 77.27 },
    { name: "Cboe VIX Future Aug 2026", ticker: "VX/Q6", exchange: "CFE", chartSymbol: "CBOE:VX2!", embed: false, role: "차근월 VIX 선물", weight: 126.22 },
    { name: "Cash & Other", ticker: "CASH", exchange: "USD", chartSymbol: "", embed: false, role: "증거금·미국정부 MMF·기타", weight: 101.73 }
  ],
  concentrationNote:
    "2026년 7월 9일 공시 선물 명목가치는 7월물 약 $2.174억, 8월물 약 $3.551억으로 합계 약 $5.725억입니다. 7월 7일 순자산 약 $2.813억과 비교하면 명목 선물 노출은 약 203.5%입니다. 현금 100% 안팎은 여유자금이 아니라 선물 증거금·담보 역할이므로 선물과 더해 일반 주식 ETF처럼 100%로 해석하면 안 됩니다.",
  composition: {
    asOf: "2026-07-09",
    note: "Volatility Shares 공식 보유내역과 2026-07-07 순자산을 사용한 단순 명목비율입니다. 보유 계약과 순자산은 매일 바뀝니다.",
    views: [
      {
        id: "notional",
        label: "순자산 대비 명목노출",
        type: "bars",
        items: [
          { label: "2026년 7월 VIX 선물", sub: "$217.4M · 최근월", value: 77.27 },
          { label: "2026년 8월 VIX 선물", sub: "$355.1M · 차근월", value: 126.22 },
          { label: "선물 명목 합계", sub: "일일 약 2배 노출", value: 203.49 },
          { label: "현금·기타", sub: "증거금·담보", value: 101.73 }
        ]
      },
      {
        id: "futuresMix",
        label: "선물 명목 구성",
        type: "donut",
        items: [
          { label: "7월물", value: 37.97, color: "#112b3b" },
          { label: "8월물", value: 62.03, color: "#c9f31d" }
        ]
      },
      {
        id: "riskLens",
        label: "위험 특성",
        type: "bars",
        items: [
          { label: "일중 변동성", sub: "2배 레버리지", value: 5.0 },
          { label: "롤 비용 민감도", sub: "콘탱고", value: 5.0 },
          { label: "복리 경로 위험", sub: "일일 재조정", value: 5.0 },
          { label: "현물 VIX 괴리", sub: "선물지수 추종", value: 4.5 },
          { label: "장기보유 적합성", sub: "매우 낮음", value: 0.5 }
        ]
      }
    ]
  },
  securityCharts: {
    title: "UVIX·현물 VIX 비교 차트",
    description:
      "UVIX는 VIX 현물이 아닌 단기 VIX 선물을 추종하므로 두 차트를 나란히 봐야 합니다. VIX가 비슷한 수준으로 돌아와도 콘탱고 롤과 일일 2배 복리효과 때문에 UVIX 가격은 크게 낮아질 수 있습니다.",
    asOf: "2026-07-10",
    note:
      "UVIX와 VIX 모두 TradingView 임베드를 사용하지 않고 역분할 조정된 저장형 1년 차트로 표시합니다. VIX 선물 개별 월물은 가격 데이터 기준과 만기 교체가 복잡해 보유내역 표와 Cboe 원문 링크로 확인하도록 구성했습니다.",
    symbols: [
      { name: "2x Long VIX Futures ETF", ticker: "UVIX", exchange: "Cboe BZX", chartSymbol: "AMEX:UVIX", yahooSymbol: "UVIX", embed: false, role: "LONGVOL 일일 2배", weight: 100 },
      { name: "Cboe Volatility Index", ticker: "VIX", exchange: "Cboe", chartSymbol: "TVC:VIX", yahooSymbol: "^VIX", embed: false, role: "S&P500 30일 내재변동성", weight: 0 }
    ]
  },
  distribution: {
    frequency: "통상 미지급",
    schedule: "정기 분배를 목표로 하지 않음",
    latestAmount: "없음",
    trailingAmount: "최근 정기 분배 없음",
    trailingYield: "0%",
    yieldAsOf: "2026-07-12 분석 기준",
    explanation:
      "UVIX는 배당 현금흐름 상품이 아니라 VIX 선물의 단기 방향을 거래하는 상품입니다. 운용사도 일반적으로 주주에게 분배하지 않는다고 명시하며, 현금·미국정부 MMF에서 발생한 이자보다 선물 손익·롤 비용·레버리지 효과가 성과를 압도합니다.",
    rows: [],
    currency: "$",
    tax:
      "UVIX는 미국 세법상 파트너십으로 취급되어 일반 배당 ETF의 1099-DIV 대신 Schedule K-1을 발급합니다. 운용사는 유효한 Qualified Notice가 유지되는 동안 외국인 PTP 매도대금 10% 원천징수 규정의 예외 대상이라고 안내하지만, 공지 갱신 여부와 한국 내 신고는 거래 전 증권사·세무 전문가에게 확인해야 합니다."
  },
  performance: {
    title: "역분할 조정 가격 수익률",
    asOf: "2026-07-10",
    note: "Yahoo Finance의 2026-07-01 1대20 역분할 반영 가격 기준입니다. 분배금이 없어 가격수익률과 총수익률의 차이는 작지만, 과거 가격이 매우 높게 보이는 것은 반복적인 감가와 역분할 조정의 결과입니다.",
    periods: [
      { label: "1일", value: -4.24 },
      { label: "1개월", value: -38.82 },
      { label: "3개월", value: -55.93 },
      { label: "6개월", value: -47.18 },
      { label: "연초 이후", value: -50.60 },
      { label: "1년", value: -85.68 }
    ],
    stats: [
      "2026-07-10 종가 $56.41, 당일 범위 $56.08~$61.21",
      "같은 날 현물 VIX는 15.03으로 5.11% 하락",
      "역분할 조정 52주 범위는 $56.08~$444.20",
      "2026-07-01 1대20 역분할 시행",
      "1년간 현물 VIX는 15.78→15.03이지만 UVIX는 $393.80→$56.41"
    ]
  },
  peerComparison: {
    title: "미국 단기 VIX 선물 상품 비교",
    asOf: "2026-07 각 운용사 공식 자료 기준",
    note: "세 상품 모두 현물 VIX가 아니라 약 1개월 만기의 VIX 선물 포트폴리오를 추종합니다. 레버리지가 높을수록 위기 급등 반응과 평시 감가가 함께 커집니다.",
    products: [
      { key: "uvix", name: "Volatility Shares UVIX", ticker: "UVIX", featured: true },
      { key: "uvxy", name: "ProShares UVXY", ticker: "UVXY", featured: false },
      { key: "vixy", name: "ProShares VIXY", ticker: "VIXY", featured: false }
    ],
    rows: [
      { label: "일일 목표", values: { uvix: "+2.0배", uvxy: "+1.5배", vixy: "+1.0배" } },
      { label: "기초지수", values: { uvix: "Long VIX Futures Index", uvxy: "S&P VIX Short-Term Futures", vixy: "S&P VIX Short-Term Futures" } },
      { label: "선물 만기", values: { uvix: "1·2개월 일일 롤", uvxy: "약 1개월 일정만기", vixy: "약 1개월 일정만기" } },
      { label: "연간 비용", values: { uvix: "운용보수 1.65%+기타", uvxy: "총보수 0.95%", vixy: "총보수 0.85%" }, winner: "vixy" },
      { label: "변동성 반응", values: { uvix: "가장 강함", uvxy: "강함", vixy: "상대적으로 낮음" }, winner: "uvix" },
      { label: "복리·감가 위험", values: { uvix: "가장 큼", uvxy: "매우 큼", vixy: "큼" }, winner: "vixy" },
      { label: "적합한 용도", values: { uvix: "초단기 고강도 헤지·투기", uvxy: "초단기 헤지·투기", vixy: "낮은 레버리지 단기 VIX선물 노출" } }
    ],
    takeaways: [
      "같은 방향 전망이라도 UVIX는 2배라 손익과 일일 재조정 충격이 가장 큽니다.",
      "UVXY와 VIXY도 장기보유 상품은 아니며 현물 VIX 수익률을 그대로 따라가지 않습니다.",
      "헤지 목적이라면 수익 가능성보다 보유기간, 손실예산, 청산 조건을 먼저 정해야 합니다."
    ],
    sources: [
      { label: "Volatility Shares UVIX", url: "https://www.volatilityshares.com/uvix" },
      { label: "ProShares UVXY", url: "https://www.proshares.com/our-etfs/strategic/uvxy" },
      { label: "ProShares VIXY", url: "https://www.proshares.com/our-etfs/strategic/vixy" }
    ]
  },
  opportunities: [
    "주식시장 급락과 함께 단기 VIX 선물이 빠르게 상승하면 작은 비중으로 큰 단기 헤지 효과를 낼 수 있습니다.",
    "이벤트 직전보다 예상 밖의 충격으로 VIX 선물곡선이 콘탱고에서 백워데이션으로 급변할 때 성과가 강해질 수 있습니다.",
    "선물계좌 없이 주식계좌에서 VIX 선물 일일 2배 노출을 거래할 수 있습니다.",
    "손실예산과 당일 청산 기준을 명확히 둔 전문 투자자의 단기 변동성 전략에 사용할 수 있습니다."
  ],
  risks: [
    "현물 VIX의 2배가 아니며 VIX가 올라도 보유 선물과 롤 구조에 따라 UVIX가 기대만큼 오르지 않을 수 있습니다.",
    "콘탱고에서는 싼 최근월을 팔고 비싼 차근월을 사는 롤이 반복되어 가격이 구조적으로 감소합니다.",
    "일일 2배 재조정과 변동성 끌림 때문에 며칠 누적 수익률은 LONGVOL 누적수익률의 2배와 크게 달라질 수 있습니다.",
    "운용사 공시대로 LONGVOL이 하루 약 50% 불리하게 움직이면 하루 안에 원금 전액 또는 거의 전액을 잃을 수 있습니다.",
    "2026년 1대20 역분할처럼 반복적인 역분할은 보유가치 회복이 아니라 낮아진 주당 가격을 기계적으로 높이는 조치입니다.",
    "K-1, PTP Qualified Notice와 한국 세무 처리가 일반 미국 ETF보다 복잡합니다.",
    "장전·장후 또는 급격한 시장충격 때 NAV 괴리, 호가 확대, 선물 유동성 악화가 동시에 발생할 수 있습니다."
  ],
  scenarios: [
    { type: "bull", label: "UVIX 상방", condition: "예상 밖의 시스템 충격으로 S&P500이 급락하고 VIX 최근월·차근월이 동반 급등하며 선물곡선이 백워데이션으로 전환", watch: "VIX 현물, 1·2개월 선물, 선물곡선, S&P500 일중 낙폭, UVIX NAV 괴리" },
    { type: "base", label: "평시 감가", condition: "VIX가 10대 중반에 머물고 차근월이 최근월보다 비싼 콘탱고가 유지", watch: "일일 롤 비용, VIX 선물 스프레드, UVIX 거래량, 역분할 가능성" },
    { type: "bear", label: "UVIX 하방", condition: "시장 불안이 완화되고 VIX 선물이 하락하며 일일 재조정과 콘탱고가 동시에 누적", watch: "VIX 15 이하, 주가지수 신고가, 선물곡선 경사, 일별 순자산 유출" }
  ],
  checklist: [
    "매수 전 현물 VIX가 아니라 1·2개월 VIX 선물 가격과 콘탱고·백워데이션을 확인하기",
    "보유기간을 하루 또는 명확한 이벤트 구간으로 제한하고 시간 손절 기준 정하기",
    "UVIX가 2배 추종하는 대상이 현물 VIX가 아닌 LONGVOL의 하루 수익률임을 재확인하기",
    "전체 자산에서 감당 가능한 최대 손실액으로 수량을 계산하고 물타기 금지 기준 정하기",
    "시장가 주문보다 NAV 괴리와 호가를 확인한 지정가 주문 사용하기",
    "1대20 역분할 전후 가격을 혼동하지 않고 역분할 조정 차트로 비교하기",
    "매수 전 최신 PTP Qualified Notice와 증권사의 K-1·원천징수 처리 방식을 확인하기",
    "헤지가 필요한 주식 노출과 UVIX의 실제 베타·보유기간을 사전에 계산하기"
  ],
  taxNote:
    "UVIX는 일반 미국 주식형 ETF가 아니라 파트너십 과세를 받는 상품선물 풀입니다. Schedule K-1, 섹션 1256 선물 손익 배분, PTP 원천징수 예외 공지와 한국 세법의 적용이 계좌·거주자 상황에 따라 달라질 수 있으므로 거래 전 증권사와 세무 전문가 확인이 특히 중요합니다.",
  sources: [
    { label: "Volatility Shares UVIX 공식", detail: "일일 2배 목표·LONGVOL 구조·순자산·NAV·보유선물·위험경고", url: "https://www.volatilityshares.com/uvix" },
    { label: "Volatility Shares FAQ", detail: "현물 VIX와의 차이·일일 재조정·K-1·PTP Qualified Notice", url: "https://www.volatilityshares.com/resource/faq" },
    { label: "UVIX 공식 투자설명서", detail: "운용보수·레버리지·복리·선물·전액손실 위험", url: "https://www.volatilityshares.com/uvix/prospectus" },
    { label: "SEC 역분할 공시", detail: "2026-07-01 1대20 역분할과 신규 CUSIP", url: "https://www.sec.gov/Archives/edgar/data/1793497/000121390026069735/ea029515001ex99-1.htm" },
    { label: "Cboe VIX 공식", detail: "2026-07-10 VIX 15.03·52주 범위·VIX 선물 구조", url: "https://www.cboe.com/tradable-products/vix" },
    { label: "Cboe VIX Futures", detail: "VIX 선물 시세·만기·선물곡선 확인", url: "https://www.cboe.com/tradable-products/vix/vix-futures/" },
    { label: "Yahoo Finance UVIX", detail: "역분할 조정 1년 가격·2026-07-10 종가·거래량", url: "https://finance.yahoo.com/quote/UVIX/history/" },
    { label: "ProShares UVXY", detail: "비교상품 일일 1.5배 목표·보수·위험", url: "https://www.proshares.com/our-etfs/strategic/uvxy" },
    { label: "ProShares VIXY", detail: "비교상품 일일 1배 목표·보수·위험", url: "https://www.proshares.com/our-etfs/strategic/vixy" }
  ]
};
