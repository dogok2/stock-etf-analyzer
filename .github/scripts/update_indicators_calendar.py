#!/usr/bin/env python3
"""Update DeepTicker's weekly high-importance economic calendar.

The static site stores its macro dashboard in data/indicators.js. This script
fetches the current Investing.com "this week" calendar filtered to importance 3
events, removes holiday rows, and rewrites only window.OTHER_INDICATORS.calendar.

It intentionally fails instead of inventing events when the source is blocked or
the response cannot be verified as high-importance data.
"""

from __future__ import annotations

import html
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
INDICATORS_PATH = ROOT / "data" / "indicators.js"
ENDPOINT = "https://www.investing.com/economic-calendar/Service/getCalendarFilteredData"
SOURCE_URL = "https://www.investing.com/economic-calendar/"
KST = timezone(timedelta(hours=9), name="KST")

COUNTRY_CODES = {
    "Australia": "AU",
    "Brazil": "BR",
    "Canada": "CA",
    "China": "CN",
    "Euro Zone": "EU",
    "France": "FR",
    "Germany": "DE",
    "India": "IN",
    "Japan": "JP",
    "New Zealand": "NZ",
    "South Korea": "KR",
    "Switzerland": "CH",
    "United Kingdom": "GB",
    "United States": "US",
}

MEMO_RULES = [
    (
        re.compile(r"FOMC|Fed", re.I),
        "연준 정책 경로를 확인하는 이벤트입니다. 다음 FOMC 확률, 달러, 장단기 금리 방향성을 같이 봅니다.",
    ),
    (
        re.compile(r"Interest Rate|Rate Decision|ECB|BOE|BOJ|RBNZ|RBA|PBOC", re.I),
        "중앙은행 금리 결정입니다. 통화정책 온도와 글로벌 금리 기대를 비교할 때 중요합니다.",
    ),
    (
        re.compile(r"CPI|HICP|Inflation", re.I),
        "물가 압력을 확인하는 핵심 지표입니다. 금리 기대, 환율, 성장주 할인율에 영향을 줄 수 있습니다.",
    ),
    (
        re.compile(r"PPI|Producer Price", re.I),
        "생산자 물가 압력을 보는 지표입니다. 비용 전가와 향후 소비자물가 경로를 함께 판단합니다.",
    ),
    (
        re.compile(r"Non-Farm|Payroll|Employment|Unemployment|Jobless|Claims|JOLTS", re.I),
        "고용 둔화 또는 과열 여부를 보는 지표입니다. 연준 정책 기대와 경기 민감 업종에 영향을 줍니다.",
    ),
    (
        re.compile(r"ISM|PMI|Services|Manufacturing", re.I),
        "기업 체감 경기와 주문 흐름을 보는 선행 지표입니다. 50선을 기준으로 확장·위축을 함께 확인합니다.",
    ),
    (
        re.compile(r"Retail Sales|Consumer|Confidence|Sentiment", re.I),
        "소비 모멘텀을 확인하는 지표입니다. 경기 방어력과 기업 실적 기대를 판단할 때 참고합니다.",
    ),
    (
        re.compile(r"Crude Oil|Inventories|EIA", re.I),
        "원유 수급을 보는 에너지 지표입니다. 유가, 물가 기대, 에너지주 흐름과 함께 확인합니다.",
    ),
    (
        re.compile(r"Auction|Treasury|Note|Bond", re.I),
        "미국 국채 수요와 낙찰 금리를 확인하는 이벤트입니다. 장기금리 민감 자산과 채권 ETF에 중요합니다.",
    ),
    (
        re.compile(r"Home Sales|Housing|Building Permits", re.I),
        "주택 경기를 확인하는 지표입니다. 금리 부담과 소비·은행·건설 관련 심리에 영향을 줄 수 있습니다.",
    ),
    (
        re.compile(r"GDP", re.I),
        "경제 성장률을 확인하는 핵심 지표입니다. 경기 국면과 기업 이익 기대를 함께 판단합니다.",
    ),
]


def clean_html(value: str) -> str:
    value = re.sub(r"<script\b.*?</script>", "", value, flags=re.I | re.S)
    value = re.sub(r"<style\b.*?</style>", "", value, flags=re.I | re.S)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    value = value.replace("\xa0", " ")
    value = re.sub(r"\s+", " ", value)
    value = value.strip()
    return value if value else "-"


def attr_value(attrs: str, name: str) -> str | None:
    match = re.search(rf'{re.escape(name)}="([^"]*)"', attrs)
    return html.unescape(match.group(1)) if match else None


def fetch_calendar() -> dict:
    body = urllib.parse.urlencode(
        {
            "importance[]": "3",
            "timeZone": "88",
            "timeFilter": "timeRemain",
            "currentTab": "thisWeek",
            "limit_from": "0",
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        ENDPOINT,
        data=body,
        method="POST",
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
            ),
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://www.investing.com",
            "Referer": SOURCE_URL,
            "X-Requested-With": "XMLHttpRequest",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        raw = response.read().decode("utf-8", errors="replace")
    payload = json.loads(raw)
    if not payload.get("data"):
        raise RuntimeError("Investing.com returned no calendar HTML.")
    if payload.get("timeframe") != "thisWeek":
        raise RuntimeError(f"Unexpected timeframe: {payload.get('timeframe')!r}")
    return payload


def country_from_cell(cell_html: str) -> tuple[str, str]:
    title_match = re.search(r'title="([^"]+)"', cell_html)
    country_name = html.unescape(title_match.group(1)) if title_match else ""
    country = COUNTRY_CODES.get(country_name, country_name or "-")
    text = clean_html(cell_html)
    currency_match = re.search(r"\b[A-Z]{3}\b", text)
    currency = currency_match.group(0) if currency_match else "-"
    return country, currency


def memo_for(event_name: str) -> str:
    for pattern, memo in MEMO_RULES:
        if pattern.search(event_name):
            return memo
    return "시장 변동성이 커질 수 있는 고중요 이벤트입니다. 실제값과 예상치 차이를 중심으로 확인합니다."


def parse_events(payload: dict) -> list[dict]:
    rows = re.findall(r"<tr\b([^>]*)>(.*?)</tr>", payload["data"], flags=re.I | re.S)
    events: list[dict] = []

    for attrs, body in rows:
        if "js-event-item" not in attrs:
            continue
        if "data-img_key=\"bull3\"" not in body and "High Volatility Expected" not in body:
            raise RuntimeError("A non-bull3 row appeared inside an importance=3 response.")
        if "Holiday" in body:
            continue

        cells = re.findall(r"<td\b([^>]*)>(.*?)</td>", body, flags=re.I | re.S)
        if len(cells) < 7:
            continue

        event_datetime = attr_value(attrs, "data-event-datetime")
        if not event_datetime:
            continue
        date_part, time_part = event_datetime.split(" ")
        date = date_part.replace("/", "-")
        time = time_part[:5]

        country, currency = country_from_cell(cells[1][1])
        event_name = clean_html(cells[3][1])
        event_name = re.sub(r"\s+", " ", event_name)
        if not event_name or event_name == "-":
            continue

        events.append(
            {
                "country": country,
                "currency": currency,
                "date": date,
                "time": time,
                "event": event_name,
                "impact": "★★★",
                "actual": clean_html(cells[4][1]),
                "forecast": clean_html(cells[5][1]),
                "previous": clean_html(cells[6][1]),
                "memo": memo_for(event_name),
            }
        )

    if not events:
        raise RuntimeError("No verified high-importance economic events were parsed.")
    return events


def build_calendar(payload: dict, events: list[dict]) -> dict:
    now_kst = datetime.now(KST)
    week_start = payload.get("dateFrom") or "-"
    week_end = payload.get("dateTo") or "-"
    return {
        "asOf": now_kst.strftime("%Y-%m-%d %H:%M KST"),
        "periodLabel": "이번 주",
        "weekStart": week_start,
        "weekEnd": week_end,
        "source": "Investing.com Economic Calendar",
        "sourceUrl": SOURCE_URL,
        "filter": "currentTab=thisWeek · importance[]=3 · timezone=GMT+9",
        "note": (
            "Investing.com 경제 캘린더의 이번 주 필터에서 중요도 3개로 반환된 "
            "이벤트만 저장했습니다. 휴장일은 이벤트 수에서 제외했습니다."
        ),
        "events": events,
    }


def replace_calendar(content: str, calendar: dict) -> str:
    today = datetime.now(KST).strftime("%Y-%m-%d")
    content = re.sub(
        r'(window\.OTHER_INDICATORS = \{\s+asOf: )"[^"]+"',
        rf'\1"{today}"',
        content,
        count=1,
    )
    calendar_lines = json.dumps(calendar, ensure_ascii=False, indent=4).splitlines()
    calendar_json = "  calendar: " + calendar_lines[0]
    if len(calendar_lines) > 1:
        calendar_json += "\n" + "\n".join("  " + line for line in calendar_lines[1:])
    replacement = f"{calendar_json},\n  marketCharts:"
    updated, count = re.subn(
        r"  calendar:\s*\{.*?\n  \},\n  marketCharts:",
        replacement,
        content,
        count=1,
        flags=re.S,
    )
    if count != 1:
        raise RuntimeError("Could not locate the calendar block in data/indicators.js.")
    return updated


def main() -> int:
    payload = fetch_calendar()
    events = parse_events(payload)
    calendar = build_calendar(payload, events)

    content = INDICATORS_PATH.read_text(encoding="utf-8")
    updated = replace_calendar(content, calendar)
    if updated == content:
        print(f"No changes. {len(events)} high-importance events already current.")
        return 0

    INDICATORS_PATH.write_text(updated, encoding="utf-8", newline="\n")
    print(
        "Updated data/indicators.js with "
        f"{len(events)} high-importance events for {calendar['weekStart']} ~ {calendar['weekEnd']}."
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 - fail workflow with clear source error.
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
