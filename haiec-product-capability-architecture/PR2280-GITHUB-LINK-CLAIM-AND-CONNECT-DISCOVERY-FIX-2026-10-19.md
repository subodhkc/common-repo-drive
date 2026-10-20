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


## Independent follow-up after #2281 deploy — 2026-10-19
- **Production VERIFIED READY:** exact `Main` SHA `be0edbf36e0f487917bb8f2c415e3383b458f990`, Vercel deployment `dpl_4fQ8u4c7HvdMQmCL92gGS8wjmp1Q` with live `haiec.com` and `www.haiec.com` aliases. Previous `DEPLOYING` note above is historical.
- **Verified code:** replacement of Redis with `prisma.verification_tokens`, table schema has `token @unique`, so token-keyed `findUnique` is valid. 10 unit tests use a Prisma mock, not an actual human GitHub OAuth exchange.
- **Unproven:** Successful external OAuth authorization → claim screen → user confirmation → exact intended HAIEC account binding → organization link → Kestrel AI System repo/branch verified. No live customer completion established by deployment READY.
- **Outstanding code/UX boundaries:** Claim row has no initiating session or user binding (any logged-in session holding the nonce may be able to adopt it); consume runs before persistence of `accounts` and `github_integrations`; the integration upsert error is swallowed; top-level OAuth callback error handler can return `true`; distinct GitHub-email HAIEC account needs correct *link* vs *sign-in* semantics; GitHub App dashboard's Full Assurance CTA still directs to inventory discovery, not an explicit AI-System source-bind wizard. Prior weak manual installation claim path remains out-of-scope for user workaround. Treat as narrow account integrity + onboarding closure, not another new connector.
- **Recommended:** one focused external-user-assisted GitHub OAuth completion, server-authoritative readbacks of account and eligible installation, targeted code negatives for wrong-session and mid-write failure (and harden only confirmed exposed paths), single UI target for System Workspace source binding; then re-run Kestrel MCP preflight. No duplicate source/evaluation engine.

### #2282 — account-link correctness + source-binding signposting (merged `50550e1e0`)

Focused review of the GitHub connection journey after #2281. Confirmed fixes:

**Ownership/identity**
- `POST /api/github-app/link-installation` trusted a caller-supplied
  `githubUsername`; `installations/[id]` GET/PATCH/DELETE then used the
  `github_integrations.githubUsername` that route wrote as the ownership
  check — an unbound-installation claim → org-bind IDOR. Ownership is now
  proven from the OAuth-linked identity only
  (`lib/github-app/installation-ownership.ts`): User installs match
  `accounts.providerAccountId` or token-backed `githubUserId`; Org installs
  require ACTIVE ADMIN membership via the linked OAuth token
  (`GET /user/memberships/orgs/{org}`). Org-bound installs authorize via
  bound-org membership (admin for writes). Indeterminate GitHub lookups
  return retryable 502, never proof of non-ownership.
- Claim POST order was consume → write: a failed write stranded the claim.
  Now peek → validate → `prisma.$transaction` (accounts.create +
  github_integrations.upsert) → consume. P2002 same-nonce races resolve to
  the real owner (409) or idempotent success.
- `signIn` catch returned `true` on mid-flow errors — for GitHub that let
  the adapter silently bind the identity to the email-matched user. GitHub
  now fails closed to `OAuthAccountNotLinked`; Google unchanged.
- Claim confirm UI shows the signed-in email; placeholder
  `github_integrations` rows (`githubUserId` '0', empty token) no longer
  count as identity; manual-link no longer clobbers `accessToken`.

**Onboarding signposting**
- Dashboard "Connect repository to an AI System" CTA pointed at
  `/dashboard/ai-inventory/connect` (discovery page) — now routes to
  `/dashboard/ai-inventory`; canonical bind path: system workspace →
  Assets → Add Source (CODE_REPOSITORY) → server verify
  (`verifySourceRepositoryAsset` — org-installation coverage is the proof).
- Manual-link form takes an organization target (owner/admin only);
  ownership verify + org bind happen in one POST.
- `haiec_github_preflight` / `haiec_list_github_repositories` describe the
  "installed on GitHub but not linked to this org" state and point to
  `HAIEC_URLS.GITHUB_DASHBOARD` (new `linkUrl` action field) — org-scoped
  only, no cross-tenant leakage.

**Verified:** 44 focused tests pass (claim retry/idempotency/race/410/409;
ownership matrix incl. placeholder rows, org admin/non-member/indeterminate,
org-bound vs unbound authz). `tsc --noEmit` clean. Dev-server render:
/dashboard/github + /connect/github?claim= 200.
**NOT_VERIFIED:** real GitHub OAuth round-trip and org-membership check
(requires authorized human). Production probe post-merge: dashboard 200,
claim endpoint 401 auth-gated.

### Production state notes (Neon `empty-tree-81822125`)

- Installation `105988004` (`subodhkc`, User, selected repos incl.
  `subodhkc/AI-Service-Call-Agent-`) is bound to org **MunichTech Demo**.
- Target system **KestrelVoice QA Receptionist** (`b4599e1d-…`) lives in org
  **KestrelVoice Assurance Test** (`48298299-…`); `subodhkc@subodhkc.com` is
  admin there but NOT a member of MunichTech Demo — cross-org rebind
  requires a MunichTech owner (`suvodkc@gmail.com`) to unlink first.
- Neither account has a github `accounts` row yet — the authorized human
  must complete one OAuth claim to establish the linked identity.


## Independent #2282 verification and next customer-flow defect (2026-10-19)
- Production **READY**: `Main` `50550e1e0377d14babc9be0fbff88476bf942e49`, Vercel `dpl_Hv2hrGiSHM1WC2qupKYbASUAcMU4`, production aliases verified. This is deployment proof, not OAuth/link proof.
- Existing code fixes independently reviewed: authoritative user/organization installation ownership helper; account-link DB transaction and retry; GitHub fail-closed callback error; explicit signed-in email on claim confirmation; honest source CTA and tenant-only MCP setup copy.
- **Unfinished human workflow:** A confirmed existing GitHub installation is associated with MunichTech Demo while KestrelVoice lives in KestrelVoice Assurance Test. Account authentication alone does not establish the correct tenant link. User must not install again or launch another empty-evidence run.
- **New P0 missed by #2282:** `/dashboard/github` has no non-destructive org unlink/transfer UI. “Disconnect” invokes DELETE and sets `suspendedAt`, whereas authorized PATCH supports `organizationId:null`. The proposed MunichTech owner “unlink in dashboard” is therefore not yet possible through the shown customer controls. Next narrow release: reuse PATCH in a clearly separated **Unlink from organization** UI action requiring current-org admin/owner; never use Disconnect as substitute; display consequences/confirmation, preserve history and offer explicit target-org relink. If direct transfer is offered, require authority for both orgs.
- **Narrow claim risks not fully closed:** claim bearer nonce not bound to initiating HAIEC session/user; displaying email alone is insufficient security binding. Claim consumption is outside account/integration DB transaction and its result ignored; check meaningful single-use/error semantics, but keep failed-write retry. Confirm actual OAuth user login/link branch with protected negative tests. No broad auth rewrite.
- **Next external verification:** MunichTech authorized owner/admin consciously releases existing installation *after* reviewing impact, Kestrel account confirms GitHub OAuth and org bind, Kestrel-side public MCP verifies exact repo/branch and only then executes one qualified evaluation. If preserving MunichTech is more important, use existing authorized local-scan source route (different evidence type) to start customer acceptance without moving the GitHub installation.
