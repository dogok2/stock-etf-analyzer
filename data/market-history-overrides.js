window.MARKET_HISTORY = window.MARKET_HISTORY || { series: {} };
window.MARKET_HISTORY.series = window.MARKET_HISTORY.series || {};

Object.assign(window.MARKET_HISTORY.series, {
  "373220.KS": {
    symbol: "373220.KS",
    name: "LG Energy Solution",
    kind: "stock",
    currency: "KRW",
    range: "1y",
    interval: "sampled",
    source: "Naver Finance chart API",
    sourceUrl: "https://finance.naver.com/item/main.naver?code=373220",
    lastDate: "2026-07-09",
    points: [
      ["2025-07-09", 305000],
      ["2025-08-29", 352000],
      ["2025-09-30", 347500],
      ["2025-10-31", 473000],
      ["2025-11-28", 408000],
      ["2025-12-30", 368500],
      ["2026-01-30", 398000],
      ["2026-02-27", 427000],
      ["2026-03-31", 394500],
      ["2026-04-30", 460500],
      ["2026-05-29", 458000],
      ["2026-06-30", 362000],
      ["2026-07-09", 313500]
    ]
  },
  "458730.KS": {
    symbol: "458730.KS",
    name: "TIGER 미국배당다우존스",
    kind: "stock",
    currency: "KRW",
    range: "1y",
    interval: "sampled",
    source: "Naver Finance chart API",
    sourceUrl: "https://finance.naver.com/item/main.naver?code=458730",
    lastDate: "2026-07-09",
    points: [
      ["2025-07-09", 11578],
      ["2025-08-29", 11938],
      ["2025-09-30", 11839],
      ["2025-10-31", 11829],
      ["2025-11-28", 12543],
      ["2025-12-30", 12567],
      ["2026-01-30", 13198],
      ["2026-02-27", 14148],
      ["2026-03-31", 14802],
      ["2026-04-30", 14703],
      ["2026-05-29", 15495],
      ["2026-06-30", 15735],
      ["2026-07-09", 15480]
    ]
  }
});
