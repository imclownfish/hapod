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

Use Supabase with GitHub Pages. Its free plan includes a Postgres database and
email authentication, and its public browser key is designed to be used in a
web app. The database still needs Row Level Security so each signed-in person
can only read or change their own rows.

Do not ship a Supabase service-role key to this repository or to the browser.

## First release scope

1. Email + password sign-up/sign-in.
2. Sync only `completed`, `streak`, and `lastCompletedDate`.
3. A private profile page with the person's own totals.
4. An opt-in anonymous community counter: total completed sessions and active
   installs. No leaderboards yet.

This is intentionally smaller than a social fitness platform. It proves that
sync works before we take on social feeds, friends, challenges, notifications,
or user-created plans.

## Database sketch

```sql
create table public.user_stats (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed integer not null default 0 check (completed >= 0),
  streak integer not null default 0 check (streak >= 0),
  last_completed_date date,
  updated_at timestamptz not null default now()
);

alter table public.user_stats enable row level security;

create policy "Users read their own stats"
on public.user_stats for select to authenticated
using (auth.uid() = user_id);

create policy "Users insert their own stats"
on public.user_stats for insert to authenticated
with check (auth.uid() = user_id);

create policy "Users update their own stats"
on public.user_stats for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
```

Community totals should be calculated by a server-side function from accepted
session events. The browser must not be allowed to write an arbitrary global
total, or one person can inflate it with a request loop.

## Privacy copy needed before launch

Publish a short privacy page before accounts go live. It must say what is
stored, why it is stored, how a person can delete their account/data, and that
health data should not be treated as medical advice. Add a contact email that
is actually monitored.
