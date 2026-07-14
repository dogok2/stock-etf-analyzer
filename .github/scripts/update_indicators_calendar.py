#!/usr/bin/env python3
"""Update DeepTicker's weekly high-importance macro indicators.

The static site stores its macro dashboard in data/indicators.js. This script
fetches the current Investing.com "this week" calendar filtered to importance 3
events, removes holiday rows, fetches the Investing.com Fed Rate Monitor
snapshot, and rewrites the calendar and FedWatch blocks together. The
``--fedwatch-only`` mode refreshes only the FedWatch block for the daily job.

It intentionally fails instead of inventing events when the source is blocked or
the response cannot be verified as source-backed data.
"""

from __future__ import annotations

import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.error
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
INDICATORS_PATH = ROOT / "data" / "indicators.js"
ENDPOINT = "https://www.investing.com/economic-calendar/Service/getCalendarFilteredData"
SOURCE_URL = "https://www.investing.com/economic-calendar/"
FEDWATCH_URL = "https://www.investing.com/central-banks/fed-rate-monitor"
CME_FEDWATCH_URL = "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html"
KST = timezone(timedelta(hours=9), name="KST")
RETRY_DELAYS_SECONDS = (0, 30, 90, 180)
RETRYABLE_HTTP_CODES = {403, 408, 425, 429, 500, 502, 503, 504}

MONTHS = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12,
}

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


def read_url_with_retry(request: urllib.request.Request, label: str) -> str:
    """Read an Investing.com response, retrying temporary blocks and outages."""

    retry_delays = (0, 10, 30) if "--fedwatch-only" in sys.argv else RETRY_DELAYS_SECONDS
    total_attempts = len(retry_delays)
    for attempt, delay_seconds in enumerate(retry_delays, start=1):
        if delay_seconds:
            print(
                f"Retrying {label} in {delay_seconds}s "
                f"(attempt {attempt}/{total_attempts})...",
                file=sys.stderr,
                flush=True,
            )
            time.sleep(delay_seconds)

        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read().decode("utf-8", errors="replace")
        except urllib.error.HTTPError as exc:
            can_retry = exc.code in RETRYABLE_HTTP_CODES and attempt < total_attempts
            print(
                f"{label} attempt {attempt}/{total_attempts} failed: "
                f"HTTP {exc.code}",
                file=sys.stderr,
                flush=True,
            )
            if not can_retry:
                raise
        except (urllib.error.URLError, TimeoutError) as exc:
            print(
                f"{label} attempt {attempt}/{total_attempts} failed: {exc}",
                file=sys.stderr,
                flush=True,
            )
            if attempt == total_attempts:
                raise

    raise RuntimeError(f"{label} retry loop ended unexpectedly.")


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
    raw = read_url_with_retry(request, "Investing.com economic calendar")
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


def fetch_fedwatch_html() -> str:
    request = urllib.request.Request(
        FEDWATCH_URL,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Referer": "https://www.investing.com/",
        },
    )
    return read_url_with_retry(request, "Investing.com Fed Rate Monitor")


def html_to_lines(document: str) -> list[str]:
    document = re.sub(r"<script\b.*?</script>", "", document, flags=re.I | re.S)
    document = re.sub(r"<style\b.*?</style>", "", document, flags=re.I | re.S)
    document = re.sub(r"<br\s*/?>", "\n", document, flags=re.I)
    document = re.sub(
        r"</(?:div|p|tr|td|th|li|section|article|header|footer|h[1-6]|span)>",
        "\n",
        document,
        flags=re.I,
    )
    document = re.sub(r"<[^>]+>", " ", document)
    document = html.unescape(document).replace("\xa0", " ")
    return [re.sub(r"\s+", " ", line).strip() for line in document.splitlines() if line.strip()]


def parse_probability_row(line: str) -> dict | None:
    match = re.match(
        r"^(?P<range>\d+\.\d{2}\s*-\s*\d+\.\d{2})\s+"
        r"(?P<probability>\d+(?:\.\d+)?)%\s+"
        r"(?P<previous_day>\d+(?:\.\d+)?)%\s+"
        r"(?P<previous_week>\d+(?:\.\d+)?)%",
        line,
    )
    if not match:
        return None
    return {
        "range": re.sub(r"\s+", " ", match.group("range")).strip(),
        "probability": float(match.group("probability")),
        "previousDay": float(match.group("previous_day")),
        "previousWeek": float(match.group("previous_week")),
    }


def parse_percent_line(line: str) -> float | None:
    match = re.match(r"^(\d+(?:\.\d+)?)%$", line.strip())
    return float(match.group(1)) if match else None


def parse_probability_cells(lines: list[str], index: int) -> tuple[dict, int] | None:
    if index + 3 >= len(lines):
        return None
    if not re.match(r"^\d+\.\d{2}\s*-\s*\d+\.\d{2}$", lines[index]):
        return None

    current = parse_percent_line(lines[index + 1])
    previous_day = parse_percent_line(lines[index + 2])
    previous_week = parse_percent_line(lines[index + 3])
    if current is None or previous_day is None or previous_week is None:
        return None

    return (
        {
            "range": re.sub(r"\s+", " ", lines[index]).strip(),
            "probability": current,
            "previousDay": previous_day,
            "previousWeek": previous_week,
        },
        index + 4,
    )


def parse_source_datetime(value: str) -> str:
    match = re.match(
        r"^([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})\s+(\d{1,2}):(\d{2})(AM|PM)\s+(EDT|EST)$",
        value.strip(),
    )
    if not match:
        return value.strip()

    month_name, day, year, hour, minute, meridiem, zone_name = match.groups()
    hour_number = int(hour) % 12
    if meridiem == "PM":
        hour_number += 12
    offset = -4 if zone_name == "EDT" else -5
    source_tz = timezone(timedelta(hours=offset), name=zone_name)
    source_time = datetime(
        int(year),
        MONTHS[month_name],
        int(day),
        hour_number,
        int(minute),
        tzinfo=source_tz,
    )
    kst_time = source_time.astimezone(KST)
    return f"{source_time.strftime('%Y-%m-%d %H:%M')} {zone_name} / {kst_time.strftime('%Y-%m-%d %H:%M KST')}"


def normalize_target_range(value: str) -> str:
    return re.sub(r"\s+", "", value.replace("~", "-").replace("%", ""))


def range_midpoint(value: str) -> float | None:
    match = re.match(r"^\s*(\d+(?:\.\d+)?)\s*(?:-|~)\s*(\d+(?:\.\d+)?)\s*$", value.replace("%", ""))
    if not match:
        return None
    return (float(match.group(1)) + float(match.group(2))) / 2


def dominant_label(probabilities: list[dict], current_target: str) -> str:
    top = max(probabilities, key=lambda item: item["probability"])
    top_range = top["range"]
    if normalize_target_range(top_range) == normalize_target_range(current_target):
        return "동결 우세"

    top_midpoint = range_midpoint(top_range)
    current_midpoint = range_midpoint(current_target)
    if top_midpoint is None or current_midpoint is None:
        return f"{top_range}% 우세"

    move_bp = round(abs(top_midpoint - current_midpoint) * 100)
    direction = "인상" if top_midpoint > current_midpoint else "인하"
    return f"{move_bp}bp {direction} 우세"


def existing_current_target(content: str) -> str:
    match = re.search(r'currentTarget:\s*"([^"]+)"', content)
    if not match:
        match = re.search(r'"currentTarget":\s*"([^"]+)"', content)
    return match.group(1) if match else "-"


def current_calendar_week_start(now: datetime | None = None) -> str:
    """Return the Sunday that starts Investing.com's current-week window."""

    current = now or datetime.now(KST)
    days_since_sunday = (current.weekday() + 1) % 7
    return (current - timedelta(days=days_since_sunday)).strftime("%Y-%m-%d")


def existing_calendar_week_start(content: str) -> str:
    match = re.search(r'"weekStart":\s*"([^"]+)"', content)
    return match.group(1) if match else "-"


def build_fedwatch(content: str) -> dict:
    lines = html_to_lines(fetch_fedwatch_html())
    date_pattern = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}$")
    current_target = existing_current_target(content)
    meetings: list[dict] = []
    latest_update = ""

    for index, line in enumerate(lines):
        if not date_pattern.match(line):
            continue

        meeting_time = ""
        probabilities: list[dict] = []
        updated_at = ""
        cursor = index + 1
        while cursor < len(lines) and not date_pattern.match(lines[cursor]):
            current_line = lines[cursor]
            if current_line == "Meeting Time:" and cursor + 1 < len(lines):
                meeting_time = lines[cursor + 1].strip()
                cursor += 2
                continue
            if current_line.startswith("Meeting Time:"):
                meeting_time = current_line.replace("Meeting Time:", "", 1).strip()
            elif current_line.startswith("Updated:"):
                updated_at = current_line.replace("Updated:", "", 1).strip()
                break
            else:
                probability = parse_probability_row(current_line)
                if probability:
                    probabilities.append(probability)
                else:
                    cell_probability = parse_probability_cells(lines, cursor)
                    if cell_probability:
                        probability, cursor = cell_probability
                        probabilities.append(probability)
                        continue
            cursor += 1

        if not meeting_time or not probabilities or not updated_at:
            continue

        parsed_date = datetime.strptime(line, "%b %d, %Y")
        if not latest_update:
            latest_update = parse_source_datetime(updated_at)
        meetings.append(
            {
                "date": parsed_date.strftime("%Y-%m-%d"),
                "label": f"{parsed_date.month}월 FOMC",
                "meetingTime": meeting_time,
                "dominant": dominant_label(probabilities, current_target),
                "probabilities": probabilities,
            }
        )
        if len(meetings) == 3:
            break

    if len(meetings) < 3:
        raise RuntimeError("Could not parse the next three FedWatch meetings from Investing.com.")

    return {
        "asOf": latest_update or datetime.now(KST).strftime("%Y-%m-%d %H:%M KST"),
        "source": "Investing.com Fed Rate Monitor · CME 30-Day Fed Funds futures 기반",
        "sourceUrl": FEDWATCH_URL,
        "cmeUrl": CME_FEDWATCH_URL,
        "currentTarget": current_target,
        "note": (
            "자동 갱신 시 Investing.com Fed Rate Monitor에 표시된 CME 기반 확률을 "
            "스냅샷으로 저장합니다. 실제 거래 전에는 원문 링크에서 최신 값을 다시 확인해야 합니다."
        ),
        "meetings": meetings,
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


def replace_fedwatch(content: str, fedwatch: dict) -> str:
    fedwatch_lines = json.dumps(fedwatch, ensure_ascii=False, indent=4).splitlines()
    fedwatch_json = "  fedWatch: " + fedwatch_lines[0]
    if len(fedwatch_lines) > 1:
        fedwatch_json += "\n" + "\n".join("  " + line for line in fedwatch_lines[1:])
    replacement = f"{fedwatch_json},\n  sourcePolicy:"
    updated, count = re.subn(
        r"  fedWatch:\s*\{.*?\n  \},\n  sourcePolicy:",
        replacement,
        content,
        count=1,
        flags=re.S,
    )
    if count != 1:
        raise RuntimeError("Could not locate the FedWatch block in data/indicators.js.")
    return updated


def main() -> int:
    content = INDICATORS_PATH.read_text(encoding="utf-8")
    if "--probe-fedwatch" in sys.argv:
        fedwatch = build_fedwatch(content)
        print(
            "FedWatch probe succeeded with "
            f"{len(fedwatch['meetings'])} meetings as of {fedwatch['asOf']}."
        )
        return 0

    if "--fedwatch-only" in sys.argv:
        fedwatch = build_fedwatch(content)
        updated = replace_fedwatch(content, fedwatch)
        if updated == content:
            print(
                "No changes. FedWatch is already current at "
                f"{fedwatch['asOf']}."
            )
            return 0

        INDICATORS_PATH.write_text(updated, encoding="utf-8", newline="\n")
        print(
            "Updated data/indicators.js with "
            f"{len(fedwatch['meetings'])} FedWatch meetings as of {fedwatch['asOf']}."
        )
        return 0

    expected_week_start = current_calendar_week_start()
    if (
        os.environ.get("SKIP_IF_CURRENT_WEEK") == "1"
        and existing_calendar_week_start(content) == expected_week_start
    ):
        print(
            f"Current-week macro snapshot already exists ({expected_week_start}). "
            "Skipping this scheduled retry."
        )
        return 0

    payload = fetch_calendar()
    events = parse_events(payload)
    calendar = build_calendar(payload, events)

    fedwatch = build_fedwatch(content)
    updated = replace_fedwatch(replace_calendar(content, calendar), fedwatch)
    if updated == content:
        print(f"No changes. {len(events)} high-importance events and FedWatch are already current.")
        return 0

    INDICATORS_PATH.write_text(updated, encoding="utf-8", newline="\n")
    print(
        "Updated data/indicators.js with "
        f"{len(events)} high-importance events for {calendar['weekStart']} ~ {calendar['weekEnd']} "
        f"and {len(fedwatch['meetings'])} FedWatch meetings."
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 - fail workflow with clear source error.
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
