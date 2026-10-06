# HAPOD

HAPOD began as "Hardworking Andrii's Plan of the Day" and is now a focused,
offline-friendly workout companion for anyone.

It guides a workout routine with timed steps, rest periods, exercise notes,
daily sourced facts, and a local streak counter.

## Editing The Routine

The exercise plan lives near the top of `app.js` in the `routine` array.

Each exercise can be either:

- `type: "time"` with `seconds`
- `type: "reps"` with `reps`

The app currently saves completion count, streaks, and settings only on the
device with `localStorage`. It does not fingerprint people or send their data
to a server.

## Daily Facts

Daily facts are bundled into `app.js` so they keep working offline. Each fact
links to a source from WHO, CDC, the U.S. Office of Disease Prevention and
Health Promotion, or an ISSN research position stand. The library has 35 facts
and rotates from the user's local calendar date.

## Accounts And Community Data

Cross-device accounts and aggregate community stats need a real backend; they
cannot be implemented safely with GitHub Pages alone. The proposed privacy-safe
approach and database design live in `DATA_AND_ACCOUNTS.md`.

## iPhone Use

Open the hosted site in Safari, then use Share -> Add to Home Screen. After the
first load, the app is cached for offline use.
