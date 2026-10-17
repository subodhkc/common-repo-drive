# UX-P01 — Start Here (`/quick-start`) — Implementation Record (2026-10-20)

Status: `TEST_VERIFIED` + scripted visual review; merge/deploy recorded below.
HAIEC branch: `feat/ux-p01-start-here` @ `25866bd93`
Base: `Main` @ `41cc24314` (E6.2, PR #2230)
PR: #2231 — https://github.com/subodhkc/haiec-website/pull/2231
Scope: `/quick-start` only. Dashboard Overview, AI Estate, Controls, My Work,
Monitoring, System Assurance Case and the shell were not touched.

## Original problems (audit findings)

1. **Registration-dominant entry.** The page led with "What are you
   evaluating?" and rendered `SystemFirstOnboarding` as the dominant content —
   a compulsory-feeling form for users who already have systems, a source
   artifact, or an assigned review.
2. **Fabricated flow metadata.** The collapsed "Other ways" cards claimed
   fixed times ("10-15 minutes", "5-15 minutes") and a WordPress coming-soon
   path — unsupported promises.
3. **No peer entries.** Goal selection and source-first entry were absent;
   the six customer jobs and E2 source choices existed only deep in
   system-scoped surfaces.
4. **Coverage hub above the fold.** A large persisted-state panel preceded
   the entry decision, competing with the first-run experience.
5. **No role awareness.** A read-only viewer saw the same registration form
   that would fail at the API.

## New information hierarchy

1. Eyebrow "Start Here" → H1 **"Discover what HAIEC can establish."** →
   supporting line + canonical journey vocabulary (unchanged).
2. **Three peer option cards** (Explore an AI system / Choose a goal /
   Connect a source or provide evidence) — buttons with `aria-expanded`,
   inline panel, selections preserved across switching.
3. "Already working in HAIEC?" direct links — AI Estate, My Work,
   Reports & Receipts, Monitoring sources, API keys.
4. Honest no-organization notice when unauthenticated.
5. Collapsed "Other ways to use HAIEC" — real route links only.
6. Existing evidence-coverage hub (persisted projection) moved below the
   chooser; `SecurityAssuranceCard` unchanged at page bottom.

## Three entry flows

- **Explore an AI system:** org-scoped systems deep-link to
  `/dashboard/ai-inventory/systems/{id}` (System Assurance Case). Empty
  estates reuse `SystemFirstOnboarding` — REGISTERED != CONNECTED, optional
  deferred connect, and canonical lifecycle projection all preserved.
  Explicit `viewer` role sees a read-only note instead of the form (the API
  remains the authoritative gate; demo/null-membership behavior preserved —
  caught during scripted visual review and fixed before commit).
- **Choose a goal:** six jobs joined server-side from canonical
  `CUSTOMER_JOBS` + the new pure presentation contract
  (`lib/dashboard/start-here-contract.ts`) carrying minimum input / bounded
  output / stays unknown / one next action. Selecting a system calls the
  existing `GET /api/inventory/systems/[id]/capabilities` and renders
  per-goal `customerState` badges + canonical next actions. A failed read
  renders **unknown**, never empty. No second readiness model exists.
- **Connect a source or provide evidence:** released intake paths (GitHub
  App, local bundle [preview], SARIF, OTLP, structured events, human upload)
  plus a progressively disclosed list (IAM/exports, runtime test, CI Action
  [release-state note], delegation/DAI, API/IDE/MCP [ingestion-hold note],
  provider usage [no display surface — honest gap, not linked]). Selecting a
  system upgrades to the real E2 `sourceOnboarding` projection with live
  bound-source states, facts, limitations and permitted next actions.

## Canonical reuse (no new engines)

- Job ids/labels/descriptions: `lib/ai-inventory/goal-availability.ts` →
  `CUSTOMER_JOBS` (server-side join; `lib/api-auth` keeps it server-only).
- Live availability: existing `GET /api/inventory/systems/[id]/capabilities`
  (goal-availability-loader → E1 + E2 owners). Read-only; results cached
  per system in component state.
- Source catalog mirrors the intake-path owner on `/monitoring/sources`.
- Registration: `SystemFirstOnboarding` untouched.

## Validation

- `TEST_VERIFIED` — 111/111: `start-here-ux-p01` (19 new truth locks),
  `start-here-convergence-1` (41 — sidebar/registry/lifecycle intact),
  `goal-availability` (37), `my-work` (14).
- `CODE_VERIFIED` — `tsc --noEmit` clean; changed-file ESLint clean.
- Link-check warnings: same 4 pre-existing baseline errors in untouched
  files.
- Visual: scripted Chromium capture at 1440px and 390px across all three
  panels + collapsed state (`artifacts/_uxp01-*.png`). Desktop: three-option
  row, job cards 2-col, source cards 2-col. Mobile: options stack, panels
  readable, onboarding form usable.
- `VISUAL_AUTHENTICATED_NOT_RUN` — no authorized org session was available;
  live capabilities-projection rendering is unit-covered but not
  browser-verified against a real tenant.

## Remaining limitations

- Goal/source panels without a selected system show the generic contract,
  not live readiness (system context is required by the canonical loader).
- Provider-usage entry has no destination — no display surface exists yet.
- SystemFirstOnboarding's internal "Defi…" header truncation at ~390px is
  inherited from that component; it was not redesigned (out of scope).
- Coverage hub still sits below the chooser for orgs with intake records —
  a deliberate secondary position, not hidden.
