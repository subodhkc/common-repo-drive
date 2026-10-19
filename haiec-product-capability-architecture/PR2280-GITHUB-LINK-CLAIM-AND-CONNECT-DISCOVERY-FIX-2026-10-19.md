# PR #2280 + #2281 — GitHub Link Claims + Connect-Page Honest State

**Date:** 2026-10-19 · **PRs:** subodhkc/haiec-website#2280 (`e03597d79`), #2281 (`be0edbf36`)

## Defects fixed

### 1. GitHub connect failed when profile email != HAIEC sign-in email

Production evidence (Neon `empty-tree-81822125`, LIVE_VERIFIED):
- User `subodhkc@subodhkc.com` (password, 0 OAuth accounts) held an active
  `github_link_intents` row — never consumed.
- GitHub profile email resolved to `suvodkc@gmail.com`, a different users row
  (Google OAuth + password). The intent lookup was keyed to the email-matched
  user, so the session user's intent was unreachable → `OAuthAccountNotLinked`.
- Same gap allowed the `hasAnyOAuthAccount` branch to auto-link GitHub to the
  wrong (email-matched) account.

### Fix — session-bound link claims

For `provider=github`, every signIn-callback path that cannot cleanly resolve
(any-OAuth auto-link, password-only without matching intent, no-password edge
case) stashes a **single-use pending claim** and redirects to
`/connect/github?claim=<nonce>`.

`POST /api/auth/link-github/claim` links the GitHub identity to the
**authenticated session user** via explicit confirmation — never an email
match. `GET ?c=` peeks githubLogin only (non-consuming, no tokens).
`GITHUB_ALREADY_LINKED` fails closed 409. Same-email intents keep their fast
path; pending intent `callbackUrl` honored + consumed on completion.
`allowDangerousEmailAccountLinking` remains off. Google behavior unchanged.

### #2281 — claim store corrected (deploy dependency)

#2280 stored claims in Redis; production fell through to
`OAuthAccountNotLinked` whenever Upstash was unavailable (missing env or
quota-exhausted circuit breaker — `setJSON` swallows failures by design).
Auth only needs Prisma, so claims now persist in the auth-native
`verification_tokens` table (exists in prod, verified):
  `token` = nonce · `identifier` = `"ghlink:" + JSON payload`
  (access_token already encrypted) · `expires` = +10 min.
Consume = prefix-filtered `deleteMany`: never removes non-ghlink
verification rows; payload returned only when exactly one ghlink row was
deleted (single-use, race-safe). Expired ghlink rows cleaned on consume.

### 2. `/dashboard/ai-inventory/connect` GitHub card false success

`syncFromGitHubApp` is intentionally deferred (U3-B2: no deterministic
installation→organization path; event-driven `discoverSystemFromGitHubEvent`
is the live path). Card rendered "Discovery Successful — Created: 0" anyway.
Now: primary action **Connect GitHub → /dashboard/github**, secondary
"Check for discovered systems", returned errors render as honest deferred
state. Login `OAuthAccountNotLinked` copy points to Dashboard → GitHub.

## Verification

- TEST_VERIFIED: 10 tests (`tests/unit/github-link-claim.test.ts`) — claim
  round-trip, single-use, session-user binding, callbackUrl passthrough,
  409 conflict, idempotent re-link, 410 expired, non-consuming peek,
  non-ghlink row preservation, expired-claim cleanup. 46/46 GitHub tests.
- TEST_VERIFIED: `tsc --noEmit` clean; eslint on touched files 0 new violations.
- TEST_VERIFIED (dev server): `/connect/github` 200; claim POST/GET 401
  unauthenticated as designed.
- Production: DEPLOYING — smoke path after deploy: Dashboard → GitHub →
  Connect → GitHub OAuth → claim confirm → linked to session account.
