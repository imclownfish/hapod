# HAPOD Accounts And Community Data

## Product decision

HAPOD should not silently fingerprint devices. Browser fingerprints are
inaccurate, invasive, and turn a friendly workout app into an unnecessary
privacy liability.

Use this model instead:

- Before sign-in: workout state stays on the device only.
- On account creation: the person chooses whether to import the device's local
  streak and completion count.
- After sign-in: their workout history syncs to their account across devices.
- Aggregate community numbers are opt-in and count only completed sessions,
  active anonymized installations, and streak milestones. Never collect names,
  precise location, contacts, ad IDs, or full device fingerprints.

## Recommended backend

Use Firebase Authentication and Cloud Firestore with GitHub Pages. The first
release uses Google sign-in and a document database while GitHub Pages
continues to serve the PWA. Firebase's web configuration is public by design;
security comes from Firestore Security Rules, not from hiding the configuration.

Do not put an Admin SDK credential, service-account JSON file, or any server
secret in this repository or in the browser.

## First release scope

1. Google sign-up/sign-in.
2. Sync only `completed`, `streak`, and `lastCompletedDate`.
3. A private profile page with the person's own totals.
4. An opt-in anonymous community counter: total completed sessions and active
   installs. No leaderboards yet.

This is intentionally smaller than a social fitness platform. It proves that
sync works before we take on social feeds, friends, challenges, notifications,
or user-created plans.

## Firestore data sketch

```
users/{uid}
  completed: number
  streak: number
  lastCompletedDate: "YYYY-MM-DD"
  updatedAt: server timestamp
```

The deployed rules are in `firestore.rules`. They permit only the authenticated
owner of `users/{uid}` to read or write that document and reject all list
queries.

Community totals should be calculated by a server-side function from accepted
session events. The browser must not be allowed to write an arbitrary global
total, or one person can inflate it with a request loop. Cloudflare Turnstile
should protect public sign-up and event endpoints from automated abuse.

## Privacy page

`privacy.html` explains what is stored, why it is stored, how a person can
request deletion, and that health data should not be treated as medical advice.
The contact email is `imclownfish.help@gmail.com`.
