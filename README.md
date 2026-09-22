# HAPOD

Hardworking Andrii's Plan of the Day - a personal morning workout companion.

HAPOD is a small offline-friendly web app built as a birthday gift. It guides a
morning exercise routine with timed steps, rest periods, exercise notes, and a
local streak counter.

## Editing The Routine

The exercise plan lives near the top of `app.js` in the `routine` array.

Each exercise can be either:

- `type: "time"` with `seconds`
- `type: "reps"` with `reps`

The app saves completion count and streak data on the device with
`localStorage`.

## iPhone Use

Open the hosted site in Safari, then use Share -> Add to Home Screen. After the
first load, the app is cached for offline use.
