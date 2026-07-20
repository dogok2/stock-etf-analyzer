# Project workflow

## Stock and ETF analysis updates

Whenever a stock or ETF analysis is added or refreshed, check the FedWatch
snapshot in `data/indicators.js` before finishing the analysis.

1. Use the calendar date in Asia/Seoul.
2. Compare it with the KST date in `window.OTHER_INDICATORS.fedWatch.asOf`.
3. If FedWatch was already refreshed on the current KST date, skip the refresh.
4. Otherwise, verify the next three FOMC probability tables from a current,
   visible FedWatch source and refresh the stored snapshot once for that day.
5. Do not use unattended HTML scraping against CME Group or Investing.com.
   Their automated endpoints may block scripted access. Prefer a normal browser
   check during the active Codex analysis task.
6. Never replace a valid snapshot with zeroes, blanks, guessed values, or stale
   search snippets. If the current probabilities cannot be verified, preserve
   the previous snapshot and tell the user that the refresh was skipped.
7. Keep FedWatch source attribution and its source timestamp in the snapshot.
8. Validate `data/indicators.js` and the public page after changing the snapshot.

Scheduled GitHub workflows update TOP3 prices and the economic calendar only.
FedWatch is intentionally refreshed during an active stock or ETF analysis so
that no more than one FedWatch refresh is performed per KST day.
