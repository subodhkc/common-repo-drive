# UX-P02 — Dashboard Overview (`/dashboard`) — Implementation Record (2026-10-20)

Status: `TEST_VERIFIED` + authenticated dev-session visual review; merge/deploy below.
HAIEC branch: `feat/uxp02-dashboard-overview` @ `6e2720b68`
Base: `Main` @ `75ea4ef11` (UX-P01, PR #2231)
PR: #2232 — https://github.com/subodhkc/haiec-website/pull/2232
Scope: `/dashboard` and its direct presentation components only.

## Governing rule

ENHANCE, NOT REPLACE. Every existing dashboard capability remains reachable;
nothing was removed, re-derived, or re-scored.

## Feature map — where every existing element lives now

| Before | After | Change |
|---|---|---|
| OrganizationBanner | Top of page | Unchanged |
| Start Here card (empty org, dismissible) | Top of page | Copy aligned to UX-P01 three entries; dismissal still presentation-only |
| Greeting banner + numbered `1 Setup / 2 Monitoring` | Greeting + estate context line + peer links (Start Here / My Work / Monitoring) | Numbers removed — implied sequence contradicted UX-P01's independent entries; My Work carries canonical `assignedToMe` badge |
| KPI strip (6 tiles) | Same position | Unchanged — null = unavailable preserved |
| EstateAttentionStrip (self-fetching) | Prop-driven from the single hoisted estate read | One fetch now feeds context line + strip; failed read renders neither |
| AI System Assurance Journey + Systems with Next Step | Same position | Added clarifier: per-system stages, not a required sequence |
| AI Systems list (top 5) | Same position | Unchanged |
| Latest Evaluations by System | Same position | Unchanged |
| Product Activity / EngineStatusGrid | Same position | Unchanged |
| QuickActionsStrip | Same position | Unchanged |
| IntakeGrid (16 cards, always open) | Behind `aria-expanded` disclosure "Sources & evidence types" | Collapsed by default; every card/expander/route intact |
| Activity ledger | Bottom | Unchanged |

## Data sources — canonical owners only

- `/api/inventory/estate-summary` (E6 `assembleEstateSummary`) — systems
  total, evaluated count, pending decisions, attentionQueue, readDegraded.
- `/api/inventory/my-work` (E6.1 `assembleMyWorkInbox`) — `assignedToMe`
  count badge; null on failure, never a fabricated zero.
- `/api/user/dashboard-stats`, `/api/inventory/systems/summary`,
  `/api/user/recent-activity` — unchanged consumers.

No new aggregation endpoint, no composite score, no derived verdicts.

## UX-P01 follow-up correction (scoped, per shared review)

`QuickStartWizard.loadCapabilities` wrote shared capability state from any
response — an A→B system switch resolving B→A could show A's payload under
B's picker. New `lib/dashboard/selection-request-guard.ts`
(`createSelectionGuard`) records the current selection; stale responses are
dropped before state writes. Out-of-order tests in the UX-P02 suite.
Within-session presentation fix only — server tenant scoping unchanged.

## Validation

- `TEST_VERIFIED` — 110/110: `dashboard-ux-p02` (28 new locks),
  `start-here-ux-p01` (19), `start-here-convergence-1` (41),
  `estate-summary` (8), `my-work` (14).
- `CODE_VERIFIED` — `tsc --noEmit` clean; changed-file ESLint clean.
- Link-check warnings: same pre-existing baseline errors (untouched files).
- `VISUAL_VERIFIED (dev session)` — Playwright + dev-only `test-user`
  credentials provider (`PLAYWRIGHT_TEST`, development-gated per S0 rule):
  real org data (12 systems / 5 evaluated / attention items) rendered at
  1440px, 1280px, 768px, 390px. Header peer actions, estate context line,
  KPI null-as-'–' on failed reads, journey clarifier, intake disclosure
  open/close all verified. Captures: `artifacts/_uxp02-*.png` (local, not
  committed).
- `NOT_RUN` — viewer-role rendering, multi-org switching, real-customer
  clickthrough of each attention item.

## Remaining limitations

- Estate context line shows three facts only (systems / evaluated /
  pending decisions); monitoring-freshness and enforcement facts stay in
  the attention strip, not the header.
- Intake grid is collapsed — one extra click for source-first customers;
  considered acceptable given Start Here carries the same discovery.
- Role differences are link-level (My Work badge for approvers), not
  per-role layouts; deeper role specialization deferred.
- The pending-invitation banner and shell were not touched.
