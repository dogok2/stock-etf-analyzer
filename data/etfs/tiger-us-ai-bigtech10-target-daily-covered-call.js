const TIGER_US_AI_BIGTECH10_TARGET_DAILY_CC_20260718 = {
  researchDate: "2026-07-18",
  dataAsOf: "2026-07-16",
  archiveNote: "첫 분석 기록",
  tags: ["국내상장", "미국 AI 빅테크", "월중분배", "데일리 커버드콜", "환노출"],
  thesis:
    "미국 AI 빅테크 10종목을 집중 보유하면서 나스닥100 등가격(ATM) 콜옵션을 매 영업일 매도해 연 15% 수준의 옵션 프리미엄과 월중 분배를 목표로 하는 ETF입니다. 2026년 7월 기준 NVIDIA·Apple 두 종목만 주식 슬리브의 약 38%이고 상위 5개가 약 73%라 AI 대형주의 성장 참여도는 높지만 분산효과는 제한적입니다. 핵심은 ‘연 15% 배당 상품’이 아니라 ‘빅테크 주가 + 원·달러 환율 + 일부 상승 여력을 옵션 프리미엄으로 바꾸는 전략’이라는 점입니다. 횡보·완만한 상승에서는 현금흐름이 유리할 수 있지만 급등장에서는 무옵션형 AI 빅테크 ETF보다 뒤처지고, 급락장에서는 받은 프리미엄만큼만 완충될 뿐 원금 방어가 되지 않습니다.",
  quote: {
    price: 12370,
    changePct: 1.23,
    nav: 12346.2,
    navLabel: "12,346.20원 · 시장가 대비 괴리 약 +0.19%",
    volume: 226781,
    date: "2026-07-16",
    label: "2026-07-16 종가",
    currency: "원",
    sourceLabel: "Naver Finance · 미래에셋 TIGER ETF"
  },
  facts: [
    { label: "종목코드", value: "493810" },
    { label: "표준코드", value: "KR7493810006" },
    { label: "운용사", value: "미래에셋자산운용" },
    { label: "상장시장", value: "KRX 유가증권시장" },
    { label: "상장일", value: "2024.10.15" },
    { label: "총보수(연)", value: "0.25%" },
    { label: "TER / 실부담비율", value: "0.33% / 0.493%" },
    { label: "기초지수", value: "KEDI 미국AI빅테크10+15%데일리프리미엄 지수(TR)" },
    { label: "순자산", value: "약 2,626억원 (07.16)" },
    { label: "구성", value: "미국 빅테크 10종목 + NDX 콜옵션 + 현금" },
    { label: "분배주기", value: "매월 · 기준일 15일" },
    { label: "최근 12개월 분배", value: "1,806원 · 단순 14.60%" },
    { label: "52주 범위", value: "8,961원 ~ 13,164원" },
    { label: "투자위험등급", value: "2등급 · 높은 위험" },
    { label: "환헤지", value: "하지 않음 · USD/KRW 노출" }
  ],
  peerComparison: {
    title: "같은 주식 바스켓·같은 옵션 구조 비교",
    asOf: "2026-07 각 상품 자료 기준",
    note: "493810과 490090은 같은 KEDI 미국AI빅테크10 주식 바스켓을 사용하므로 커버드콜의 효과를 비교하기 좋습니다. 486290은 같은 타겟 데일리 커버드콜 계열이지만 나스닥100으로 종목 수를 넓힌 대안입니다.",
    products: [
      { key: "aiCC", name: "TIGER AI빅테크10 데일리CC", ticker: "493810", featured: true },
      { key: "ai", name: "TIGER 미국AI빅테크10", ticker: "490090", featured: false },
      { key: "ndxCC", name: "TIGER 나스닥100 데일리CC", ticker: "486290", featured: false }
    ],
    rows: [
      { label: "주식 노출", values: { aiCC: "AI 빅테크 10종목", ai: "AI 빅테크 10종목", ndxCC: "나스닥100" } },
      { label: "콜옵션", values: { aiCC: "NDX ATM · 매일 · 연 15% 목표", ai: "없음", ndxCC: "NDX 타겟 데일리" } },
      { label: "총보수", values: { aiCC: "0.25%", ai: "0.30%", ndxCC: "0.25%" }, winner: "aiCC" },
      { label: "현금흐름", values: { aiCC: "월중 분배 · 목표 연 15%", ai: "주식 배당 중심", ndxCC: "월분배" }, winner: "aiCC" },
      { label: "급등장 참여", values: { aiCC: "일부 제한", ai: "콜매도 제한 없음", ndxCC: "일부 제한" }, winner: "ai" },
      { label: "종목 집중", values: { aiCC: "매우 높음 · 10종목", ai: "매우 높음 · 10종목", ndxCC: "상대적으로 낮음" }, winner: "ndxCC" },
      { label: "어울리는 목적", values: { aiCC: "AI 성장 + 높은 월현금흐름", ai: "AI 빅테크 장기 총수익", ndxCC: "분산된 성장주 + 월현금흐름" } }
    ],
    takeaways: [
      "상승 여력을 최대한 보존하고 싶다면 같은 주식 바스켓의 490090이 구조적으로 더 직접적입니다.",
      "월분배가 필요하지만 10종목 집중이 부담이라면 나스닥100 기반 486290이 비교 대상입니다.",
      "493810의 장점은 보수가 아니라 AI 빅테크 집중과 목표 프리미엄을 동시에 결합한 구조입니다. 분배금만 비교해서 고르면 핵심 위험을 놓칩니다."
    ],
    sources: [
      { label: "TIGER 493810", url: "https://investments.miraeasset.com/tigeretf/npc/product/product.do?ksdFund=KR7493810006" },
      { label: "TIGER 490090", url: "https://investments.miraeasset.com/tigeretf/npc/product/product.do?ksdFund=KR7490090008" },
      { label: "TIGER 486290", url: "https://investments.miraeasset.com/tigeretf/npc/product/product.do?ksdFund=KR7486290000" }
    ]
  },
  scores: [
    { label: "AI 빅테크 순도", score: 4.7, note: "AI 인프라·플랫폼을 대표하는 대형주 10개에 직접 집중" },
    { label: "월현금흐름 설계", score: 4.5, note: "월중 분배와 연 15% 목표 프리미엄이 명확하지만 금액은 보장되지 않음" },
    { label: "상승 참여도", score: 3.2, note: "주식은 전액 보유하지만 매일 매도한 NDX 콜 비율만큼 급등 수익이 제한" },
    { label: "비용·거래 여건", score: 3.7, note: "총보수 0.25%는 무난하나 매매비용 포함 실부담비율은 0.493%" },
    { label: "위험 관리", score: 2.7, note: "옵션 프리미엄은 일부 완충일 뿐 10종목 집중·환율·베이시스 위험이 큼" }
  ],
  indexMethod: {
    summary:
      "주식 쪽은 AI 관련성과 수익성·성장성·규모를 함께 평가해 미국 대형 테크 10개를 고르고, 옵션 쪽은 나스닥100 ATM 콜옵션을 매일 새로 매도합니다. ‘15%’는 주식의 15%만 덮는 고정 커버비율이 아니라 연간 옵션 프리미엄 목표입니다. 매일의 옵션 가격에 따라 실제 커버비율이 달라지고 최대 100%를 넘지 않습니다.",
    details: [
      "NYSE·NASDAQ 보통주와 ADR 중 유동시가총액 100억달러 이상 테크 기업을 대상으로 유동시가총액 상위 30개를 1차 유니버스로 선정",
      "공시·뉴스 자료를 AI, AI Innovation, AI Disruption 키워드와 비교한 LLM 유사도 상위 15개를 선별",
      "PEG, 3년 평균 영업이익률, 3년 평균 매출성장률, 시가총액 순위를 반영한 정량점수 상위 10개를 최종 편입",
      "주식은 유동시가총액 가중, 개별 종목 최대 20% 상한이며 3·6·9·12월 말 비중 산정 후 분기 리밸런싱",
      "옵션은 미국 거래소 상장 나스닥100 Weekly 콜 중 익일에 가까운 오후 만기, 기초자산 종가 이상에서 가장 낮은 행사가의 ATM 옵션을 선택",
      "일일 목표 프리미엄 15%÷252와 실제 옵션 최우선 매수호가를 이용해 커버비율을 계산하며 상한은 100%",
      "비중결정 다음 날 새 콜을 매도하고 그 다음 날 만기 포지션을 청산하는 과정을 매 영업일 반복",
      "주식배당과 옵션 프리미엄을 재투자하는 USD 총수익지수를 원화로 환산하며 ETF는 환헤지를 하지 않음"
    ]
  },
  holdingsAsOf: "2026-07-13",
  holdings: [
    { name: "NVIDIA", ticker: "NVDA", exchange: "NASDAQ", chartSymbol: "NASDAQ:NVDA", yahooSymbol: "NVDA", embed: true, role: "AI 가속기 · 반도체", weight: 19.03 },
    { name: "Apple", ticker: "AAPL", exchange: "NASDAQ", chartSymbol: "NASDAQ:AAPL", yahooSymbol: "AAPL", embed: true, role: "기기 · 서비스 · 온디바이스 AI", weight: 18.74 },
    { name: "Alphabet Class A", ticker: "GOOGL", exchange: "NASDAQ", chartSymbol: "NASDAQ:GOOGL", yahooSymbol: "GOOGL", embed: true, role: "검색 · 광고 · 클라우드 AI", weight: 14.52 },
    { name: "Microsoft", ticker: "MSFT", exchange: "NASDAQ", chartSymbol: "NASDAQ:MSFT", yahooSymbol: "MSFT", embed: true, role: "Azure · 소프트웨어 · 생성형 AI", weight: 11.52 },
    { name: "Amazon", ticker: "AMZN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMZN", yahooSymbol: "AMZN", embed: true, role: "AWS · 전자상거래 · AI 인프라", weight: 9.76 },
    { name: "Broadcom", ticker: "AVGO", exchange: "NASDAQ", chartSymbol: "NASDAQ:AVGO", yahooSymbol: "AVGO", embed: true, role: "맞춤형 AI 칩 · 네트워킹", weight: 7.61 },
    { name: "TSMC ADR", ticker: "TSM", exchange: "NYSE", chartSymbol: "NYSE:TSM", yahooSymbol: "TSM", embed: true, role: "첨단 반도체 파운드리", weight: 6.62 },
    { name: "Meta Platforms", ticker: "META", exchange: "NASDAQ", chartSymbol: "NASDAQ:META", yahooSymbol: "META", embed: true, role: "광고 · 소셜플랫폼 · AI", weight: 4.84 },
    { name: "Tesla", ticker: "TSLA", exchange: "NASDAQ", chartSymbol: "NASDAQ:TSLA", yahooSymbol: "TSLA", embed: true, role: "전기차 · 로보택시 · AI", weight: 4.63 },
    { name: "ASML ADR", ticker: "ASML", exchange: "NASDAQ", chartSymbol: "NASDAQ:ASML", yahooSymbol: "ASML", embed: true, role: "EUV 노광장비", weight: 2.80 }
  ],
  concentrationNote:
    "공시 비중 합계가 약 100.07%로 100%를 조금 넘는 것은 소수점 반올림과 옵션·설정현금 반영 시점 차이 때문입니다. NVIDIA와 Apple만 37.77%, 상위 5개가 73.57%라 10종목 ETF라는 이름보다 실제 집중도가 높습니다. 또한 주식 바스켓과 매도 옵션의 기초자산이 각각 AI 빅테크10과 Nasdaq-100으로 완전히 같지 않아 두 지수 간 상대성과가 벌어지는 베이시스 위험도 있습니다.",
  composition: {
    asOf: "2026-07-13",
    note: "구성종목은 한국거래소·운용사 공시를 정리한 GoInsider 기준입니다. 업종과 집중도 차트는 주식 10종목 비중을 100으로 다시 환산했습니다. 매일 교체되는 NDX 콜옵션과 설정현금은 별도 전략 포지션이므로 도넛에 넣지 않았습니다.",
    views: [
      {
        id: "holdings",
        label: "상위 종목",
        type: "bars",
        items: [
          { label: "NVIDIA", sub: "NVDA · AI 가속기", value: 19.03 },
          { label: "Apple", sub: "AAPL · 기기/서비스", value: 18.74 },
          { label: "Alphabet A", sub: "GOOGL · 검색/클라우드", value: 14.52 },
          { label: "Microsoft", sub: "MSFT · Azure/AI", value: 11.52 },
          { label: "Amazon", sub: "AMZN · AWS/커머스", value: 9.76 },
          { label: "Broadcom", sub: "AVGO · AI칩/네트워킹", value: 7.61 },
          { label: "TSMC ADR", sub: "TSM · 파운드리", value: 6.62 },
          { label: "Meta", sub: "META · 광고/AI", value: 4.84 },
          { label: "Tesla", sub: "TSLA · 전기차/로보택시", value: 4.63 },
          { label: "ASML ADR", sub: "ASML · EUV", value: 2.80 }
        ]
      },
      {
        id: "sectors",
        label: "업종 비중",
        type: "donut",
        items: [
          { label: "정보기술", value: 66.28, color: "#112b3b" },
          { label: "커뮤니케이션", value: 19.35, color: "#69b79c" },
          { label: "경기소비재", value: 14.37, color: "#c9f31d" }
        ]
      },
      {
        id: "concentration",
        label: "집중도",
        type: "donut",
        items: [
          { label: "상위 2개", value: 37.74, color: "#c9f31d" },
          { label: "3~5위", value: 35.76, color: "#112b3b" },
          { label: "6~10위", value: 26.50, color: "#69b79c" }
        ]
      }
    ]
  },
  securityCharts: {
    title: "ETF·구성 종목 주가 차트",
    description:
      "ETF 자체 가격과 실제 편입주 10개의 흐름을 함께 봅니다. AI 빅테크 전체가 오르는지, NVIDIA·Apple 같은 상위 종목만 이끄는지, 옵션의 기초자산인 Nasdaq-100과 주식 바스켓 사이의 방향이 어긋나는지를 확인하는 용도입니다.",
    asOf: "2026-07-16",
    note:
      "ETF 자체 KRX:493810은 외부 TradingView 임베드 오류가 노출되지 않도록 저장된 1년 가격 차트로 고정했습니다. 미국 구성주는 공유 페이지에서 실제 표시를 확인한 거래소 심볼만 TradingView로 사용합니다.",
    symbols: [
      { name: "TIGER 미국AI빅테크10타겟데일리커버드콜", ticker: "493810", exchange: "KRX", chartSymbol: "KRX:493810", yahooSymbol: "493810.KS", embed: false, role: "ETF 가격", weight: 100 },
      { name: "NVIDIA", ticker: "NVDA", exchange: "NASDAQ", chartSymbol: "NASDAQ:NVDA", yahooSymbol: "NVDA", embed: true, role: "AI 가속기", weight: 19.03 },
      { name: "Apple", ticker: "AAPL", exchange: "NASDAQ", chartSymbol: "NASDAQ:AAPL", yahooSymbol: "AAPL", embed: true, role: "기기/서비스", weight: 18.74 },
      { name: "Alphabet Class A", ticker: "GOOGL", exchange: "NASDAQ", chartSymbol: "NASDAQ:GOOGL", yahooSymbol: "GOOGL", embed: true, role: "검색/클라우드", weight: 14.52 },
      { name: "Microsoft", ticker: "MSFT", exchange: "NASDAQ", chartSymbol: "NASDAQ:MSFT", yahooSymbol: "MSFT", embed: true, role: "Azure/AI", weight: 11.52 },
      { name: "Amazon", ticker: "AMZN", exchange: "NASDAQ", chartSymbol: "NASDAQ:AMZN", yahooSymbol: "AMZN", embed: true, role: "AWS/커머스", weight: 9.76 },
      { name: "Broadcom", ticker: "AVGO", exchange: "NASDAQ", chartSymbol: "NASDAQ:AVGO", yahooSymbol: "AVGO", embed: true, role: "AI칩/네트워킹", weight: 7.61 },
      { name: "TSMC ADR", ticker: "TSM", exchange: "NYSE", chartSymbol: "NYSE:TSM", yahooSymbol: "TSM", embed: true, role: "파운드리", weight: 6.62 },
      { name: "Meta Platforms", ticker: "META", exchange: "NASDAQ", chartSymbol: "NASDAQ:META", yahooSymbol: "META", embed: true, role: "광고/AI", weight: 4.84 },
      { name: "Tesla", ticker: "TSLA", exchange: "NASDAQ", chartSymbol: "NASDAQ:TSLA", yahooSymbol: "TSLA", embed: true, role: "전기차/로보택시", weight: 4.63 },
      { name: "ASML ADR", ticker: "ASML", exchange: "NASDAQ", chartSymbol: "NASDAQ:ASML", yahooSymbol: "ASML", embed: true, role: "EUV", weight: 2.80 }
    ]
  },
  distribution: {
    frequency: "월 1회",
    schedule: "매월 15일 기준 · 비영업일이면 직전 영업일 · 통상 7영업일 이내 지급",
    latestAmount: "155원",
    latestNote: "2026-07-15 기준 · 2026-07-20 지급 예정",
    trailingAmount: "최근 12개월 합계 1,806원",
    trailingYield: "약 14.60%",
    yieldAsOf: "2026-07-16 종가 12,370원 기준 단순 계산",
    explanation:
      "2025년 8월부터 2026년 7월까지 주당 분배금 합계는 1,806원이며 7월 16일 종가 대비 단순 후행 분배수익률은 약 14.60%입니다. 최근 155원을 단순 연환산하면 약 15.04%지만 다음 달 금액을 보장하지 않습니다. 분배재원은 주식 배당과 옵션 프리미엄이며, 분배락 때 NAV가 그만큼 낮아지므로 14~15%를 예금 이자처럼 더하면 안 됩니다. 운용수익보다 분배가 많으면 기준가와 투자원금이 줄 수 있고, 실제 판단은 반드시 분배금 재투자 총수익률과 함께 해야 합니다.",
    rows: [
      { recordDate: "2026-07-15", payDate: "2026-07-20 예정", amount: 155, rate: "1.28%" },
      { recordDate: "2026-06-15", payDate: "2026-06-17", amount: 158, rate: "1.27%" },
      { recordDate: "2026-05-15", payDate: "2026-05-19", amount: 162, rate: "1.31%" },
      { recordDate: "2026-04-15", payDate: "2026-04-17", amount: 143, rate: "1.15%" },
      { recordDate: "2026-03-13", payDate: "2026-03-17", amount: 143, rate: "1.15%" },
      { recordDate: "2026-02-13", payDate: "2026-02-20", amount: 148, rate: "1.19%" },
      { recordDate: "2026-01-15", payDate: "2026-01-19", amount: 154, rate: "1.24%" },
      { recordDate: "2025-12-15", payDate: "2025-12-17", amount: 157 },
      { recordDate: "2025-11-14", payDate: "2025-11-18", amount: 158 },
      { recordDate: "2025-10-15", payDate: "2025-10-17", amount: 150 },
      { recordDate: "2025-09-15", payDate: "2025-09-17", amount: 140 },
      { recordDate: "2025-08-14", payDate: "2025-08-19", amount: 138 }
    ],
    currency: "원",
    tax:
      "국내상장 해외주식형 ETF이므로 일반계좌의 매매차익은 보유기간 과세 방식으로 과표기준가 상승분과 실제 매매차익 중 작은 금액에 15.4%가 적용될 수 있고, 분배금도 배당소득으로 과세됩니다. 금융소득 합산 여부와 ISA·연금계좌 세제는 계좌별로 별도 확인해야 합니다."
  },
  performance: {
    title: "분배금 재투자 총수익률",
    asOf: "2026-07-16",
    note: "미래에셋 공식 성과 시계열의 분배금 재투자 값으로 계산한 원화 기준 총수익률입니다. 시장가격 수익률과 달리 월분배를 재투자한 효과가 포함됩니다.",
    periods: [
      { label: "1개월", value: 0.21 },
      { label: "3개월", value: 7.30 },
      { label: "6개월", value: 10.15 },
      { label: "연초 이후", value: 12.28 },
      { label: "1년", value: 38.10 },
      { label: "설정 이후", value: 60.55 }
    ],
    stats: [
      "2026-07-16 종가 12,370원, NAV 12,346.20원으로 시장가 괴리 약 +0.19%",
      "운용사 성과 시계열의 가격지수는 10,036.55에서 12,359.76으로 약 +23.15%, 분배금 재투자 지수는 16,113.67로 약 +60.55%",
      "최근 12개월 분배금 1,806원, 현재가 대비 단순 후행 분배수익률 약 14.60%",
      "최근 1년 일간 종가 기준 변동성 약 20.4%, 최대낙폭 약 -15.7%",
      "시장가격 52주 범위는 8,961원~13,164원이며 현재가는 고점 대비 약 6.0% 낮음"
    ]
  },
  opportunities: [
    "NVIDIA·Broadcom·TSMC·ASML의 AI 반도체 공급망과 Microsoft·Amazon·Alphabet의 클라우드, Meta의 광고·AI 수익화를 한 바스켓으로 보유합니다.",
    "주가가 횡보하거나 완만하게 상승하면서 나스닥 변동성이 높은 국면에는 콜 프리미엄이 총수익과 월현금흐름을 보강할 수 있습니다.",
    "고정 100% 커버드콜이 아니라 목표 프리미엄에 필요한 만큼만 커버비율을 계산해, 변동성이 높을 때는 더 적은 계약으로 목표 프리미엄을 확보할 여지가 있습니다.",
    "국내 거래시간에 원화로 매매하고 월중 분배를 받을 수 있어 미국 옵션을 직접 굴리는 것보다 운용과 세금 기록이 단순합니다.",
    "분기마다 AI 관련성·성장성·수익성을 다시 평가하므로 단순 시가총액 상위 지수보다 AI 테마 순도를 유지하려는 규칙이 분명합니다."
  ],
  risks: [
    "NVIDIA·Apple 두 종목 37.77%, 상위 5개 73.57%로 개별 실적·규제·제품 사이클이 ETF 전체에 크게 번집니다.",
    "급격한 하루 상승에서는 매도한 ATM 콜의 손실이 커져 같은 주식 바스켓을 옵션 없이 보유한 ETF보다 상승 참여가 제한됩니다.",
    "급락 시 프리미엄은 손실의 일부만 줄입니다. 주식 10종목을 전액 보유하므로 원금보장·하방보호형 상품이 아닙니다.",
    "주식 바스켓은 AI 빅테크10, 옵션 기초자산은 Nasdaq-100이라 두 포트폴리오의 상대성과가 벌어지면 완전한 커버가 되지 않는 베이시스 위험이 있습니다.",
    "환헤지를 하지 않아 미국 주식이 올라도 원화 강세면 원화 기준 수익률이 줄고, 반대로 달러 강세가 수익률을 과대하게 보일 수 있습니다.",
    "총보수 0.25%보다 TER 0.33%, 매매비용 포함 실부담비율 0.493%가 실제 비용에 가깝습니다. 매일 옵션을 롤오버해 회전율도 높습니다.",
    "목표 연 15%는 분배금 보장이나 기대 총수익률이 아닙니다. 과도한 분배가 지속되면 NAV가 줄 수 있습니다."
  ],
  scenarios: [
    { type: "bull", label: "낙관", condition: "AI 실적 상향이 이어지고 빅테크가 급등보다 완만한 상승을 지속하며 옵션 프리미엄도 높은 환경", watch: "상위 10개 EPS 전망, NDX 변동성, 일별 커버비율, 무옵션형 490090 대비 상대성과" },
    { type: "base", label: "중립", condition: "빅테크 이익은 늘지만 높은 밸류와 금리가 상쇄해 등락을 반복하고 월분배가 총수익의 큰 부분을 차지", watch: "분배 재원, NAV 추이, 시장가 괴리율, 12,000원대 지지, USD/KRW" },
    { type: "bear", label: "비관", condition: "AI 투자 둔화·규제·장기금리 상승으로 빅테크가 지속 하락하고 프리미엄이 손실을 따라가지 못함", watch: "NVIDIA·Apple 동반 약세, 최대낙폭, NAV 감소 속도, 분배금 삭감 여부, 원·달러 환율" }
  ],
  checklist: [
    "연 15%를 확정 배당이나 기대 수익률로 읽지 말고 매일의 옵션 프리미엄 목표로 이해하기",
    "월분배금만 보지 말고 분배금 재투자 총수익률과 NAV가 함께 증가하는지 확인하기",
    "같은 주식 바스켓의 무옵션형 490090 대비 상승장·하락장 상대성과를 비교하기",
    "NVIDIA·Apple 합계 약 38%, 상위 5개 약 74%를 기존 개별주·QQQ 보유분과 합산하기",
    "매수 시 시장가격과 iNAV 괴리를 확인하고 미국장 휴장·한국 오전 시간의 가격 왜곡을 주의하기",
    "원·달러 환율이 주가 효과를 키우거나 지울 수 있으므로 원화 기준 손익과 달러 기준 주식 흐름을 분리하기",
    "월현금흐름이 필요 없다면 옵션 없는 AI빅테크10·나스닥100 ETF의 장기 복리와 비용을 먼저 비교하기"
  ],
  taxNote:
    "국내상장 해외주식형 ETF는 해외주식 직접투자와 과세 방식이 다릅니다. 일반계좌에서는 매매차익도 배당소득으로 잡힐 수 있어 금융소득종합과세에 영향을 줄 수 있고, ISA·연금저축·IRP는 납입한도와 인출조건에 따라 세제 효과가 달라집니다. 실제 거래 전 증권사 세금 안내를 확인하세요.",
  sources: [
    { label: "미래에셋 TIGER 공식 상품 페이지", detail: "상품 구조·총보수·분배 기준·순자산·공식 성과", url: "https://investments.miraeasset.com/tigeretf/npc/product/product.do?ksdFund=KR7493810006" },
    { label: "TIGER 간이투자설명서", detail: "목표 연 15%·월 15일 분배·위험등급·환노출·과세", url: "https://investments.miraeasset.com/tigeretf/upload/etf/20241014105752002917.pdf" },
    { label: "KEDI 커버드콜 지수 방법론", detail: "NDX ATM 옵션 선정·커버비율 계산·매일 롤오버", url: "https://hkstatic.hankyung.com/resource/datacenter/pdf/kaibt15p.pdf" },
    { label: "KEDI 미국AI빅테크10 방법론", detail: "LLM 스코어·PEG·영업이익률·매출성장·20% 상한", url: "https://hkstatic.hankyung.com/resource/datacenter/pdf/kaibt10.pdf" },
    { label: "GoInsider 493810", detail: "2026-07-13 구성종목·비용·분배·위험지표", url: "https://goinsider.kr/etf/493810" },
    { label: "Naver Finance 493810", detail: "2026-07-16 종가·NAV·거래량·52주 범위·기간 수익률", url: "https://finance.naver.com/item/main.naver?code=493810" },
    { label: "StockAnalysis 분배금 이력", detail: "2024-11 이후 월별 기준일·지급일·주당 금액", url: "https://stockanalysis.com/quote/krx/493810/dividend/" },
    { label: "TIGER ETF 거래·과세 안내", detail: "국내상장 해외ETF 보유기간 과세와 iNAV", url: "https://investments.miraeasset.com/tigeretf/ko/etfMethod/content.do" }
  ]
};
