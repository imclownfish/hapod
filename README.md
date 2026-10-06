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

HAPOD works without an account and keeps completion count, streaks, and
settings on the device with `localStorage`. Google sign-in is optional. Signed
in users securely sync completion count, streak, and last completed date to
Cloud Firestore.

## Daily Facts

Daily facts are bundled into `app.js` so they keep working offline. Each fact
links to a source from WHO, CDC, the U.S. Office of Disease Prevention and
Health Promotion, or an ISSN research position stand. The library has 35 facts
and rotates from the user's local calendar date.

## Accounts And Community Data

Cross-device accounts use Firebase Authentication and Cloud Firestore. The
privacy model, deployed Firestore rules, and future aggregate-stat approach
live in `DATA_AND_ACCOUNTS.md` and `firestore.rules`.

## iPhone Use

Open the hosted site in Safari, then use Share -> Add to Home Screen. After the
first load, the app is cached for offline use.
