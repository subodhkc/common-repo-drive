# PR #2280 — GitHub Link Claims + Connect-Page Honest State

**Date:** 2026-10-19 · **PR:** subodhkc/haiec-website#2280 · **Main commit:** `e03597d79`

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
case) stashes a **single-use pending claim** in Redis (`ghlink:<nonce>`,
10-min TTL, `access_token` stored already-encrypted) and redirects to
`/connect/github?claim=<nonce>`.

`POST /api/auth/link-github/claim` links the GitHub identity to the
**authenticated session user** via explicit confirmation — never an email
match. `GET ?c=` peeks githubLogin only (non-consuming, no tokens).
`GITHUB_ALREADY_LINKED` fails closed 409. Same-email intents keep their fast
path; pending intent `callbackUrl` honored + consumed on completion.
`allowDangerousEmailAccountLinking` remains off. Google behavior unchanged.

### 2. `/dashboard/ai-inventory/connect` GitHub card false success

`syncFromGitHubApp` is intentionally deferred (U3-B2: no deterministic
installation→organization path; event-driven `discoverSystemFromGitHubEvent`
is the live path). Card rendered "Discovery Successful — Created: 0" anyway.
Now: primary action **Connect GitHub → /dashboard/github**, secondary
"Check for discovered systems", returned errors render as honest deferred
state. Login `OAuthAccountNotLinked` copy points to Dashboard → GitHub.

## Verification

- TEST_VERIFIED: 8 new tests (`tests/unit/github-link-claim.test.ts`) — claim
  round-trip, single-use, session-user binding, callbackUrl passthrough,
  409 conflict, idempotent re-link, 410 expired, non-consuming peek.
  46/46 GitHub tests pass.
- TEST_VERIFIED: `tsc --noEmit` clean; eslint on touched files 0 new violations.
- TEST_VERIFIED (dev server): `/connect/github` 200; claim POST/GET 401
  unauthenticated as designed.
- Production: DEPLOYING — smoke path after deploy: Dashboard → GitHub →
  Connect → GitHub OAuth → claim confirm → linked to session account.
