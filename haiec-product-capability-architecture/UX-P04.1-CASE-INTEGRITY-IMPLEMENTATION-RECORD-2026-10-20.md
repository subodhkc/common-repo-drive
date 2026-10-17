# UX-P04.1 — Assurance Case Evidence Integrity & Reliability Corrections — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp041-case-integrity` @ `5dc9966ed`
Base: `Main` @ `5b033a9d0` (UX-P04, PR #2237)
PR: #2238 — https://github.com/subodhkc/haiec-website/pull/2238
Merge commit: `Main` `0fdf0f2f8`
Vercel production deployment: `2s3yC179PZi1NDo5aX6cLcj2Dx6A` — **SUCCESS** on exact merge SHA
Scope: `components/ai-inventory/AssuranceCasePanel.tsx` (enhanced), `tests/unit/assurance-case-ux-p04.test.ts` (2 stale locks updated), `tests/unit/assurance-case-ux-p041.test.ts` (new). No endpoints, read models, tabs or engines touched.

Governing contract: [UX-P04 independent post-merge acceptance + P04.1 review](UX-P04-INDEPENDENT-POST-MERGE-ACCEPTANCE-AND-P04.1-RELIABILITY-REVIEW-2026-10-17.md) — gaps G01–G05 all addressed in this one scoped PR.

## What changed

| Gap | Correction |
|---|---|
| **G01** — non-completed evaluations selectable as frozen truth | Selector maps only `evaluationStatus === 'COMPLETED'` rows via exported `selectableFrozenEvaluations()`. The fetched exact-evaluation summary is additionally validated through `classifySelectedSummary()`: wrong eval/system → `mismatch`; `u5DecisionBasis.evaluationStatus !== 'COMPLETED'` (or absent) → `not-completed` — "This evaluation did not complete — it is not an established frozen result." Both helpers are behavioral-tested. Server route unchanged (other consumers preserved). |
| **G02** — governance read failure blanked the whole case | Top-level `failed`/`!gov` early returns now exist only inside `if (!workspace)` (the original governance-only boundary). Govern & operate carries its own `Loading governance status…` / `read is unavailable` states; FactRows, coverage projection and aggregate counts render only on a successful read — a failed read never becomes `NONE`/`UNKNOWN` pseudo-facts or fake zero counts ("Governance counts unavailable — the read did not succeed"). Fetch now cancels on `systemId` swap and resets state (no cross-system stale paint). |
| **G03** — latest vs selected basis ambiguity | Plane section headed "Evidence planes — latest completed evaluation basis"; when a historical evaluation is selected and latest planes exist, an explicit note states the coverage belongs to the latest, with frozen plane detail living in the selected eval's report. Receipt line adds "The selected historical evaluation is not this receipt's basis" on historical selection. No per-plane inference was built (correctly — no canonical frozen five-plane read exists per selected eval; deep link to the eval report is the grounded route). |
| **G04** — selector implied full history | Selector footer states "N completed of the M most recent records (bounded list, not full history)" and links to the existing per-system evaluation history (`?tab=assurance` Recent Evaluations). No new/unbounded queries — still exactly 3 canonical fetches. |
| **G05** — "none observed" could be misread | Replaced with "no observed action established in this connected evidence projection". |

## Validation

- `TEST_VERIFIED`: **26 new locks** (`assurance-case-ux-p041.test.ts`) — 11 executed behavioral tests on the exported helpers (completed/pending/failed/absent-status classification, two-completed selection, cross-eval/system mismatch, empty) + 15 structural locks (single scoped `!workspace` early-return, `gov`-gated FactRows/counts/coverage, cancellation, latest-basis labels, bounded-list copy, honest-observation copy). P04 suite: 2 stale assertions updated to the extracted classifier — **61/61** combined.
- `tsc --noEmit` clean; changed-file ESLint clean (2 `no-unescaped-entities` fixed during review).
- Regression cone: same 3 pre-existing baseline failures as clean `Main` (`px1-2b` KPI label, 2 `ux5-section-batch` mock issues) — unchanged, unrelated files.
- CI: TypeScript ✓, ESLint New-Violations Gate ✓; baseline ESLint/Vercel-preview failures unchanged, zero hits in touched files.
- `LIVE_VERIFIED` (authenticated dev session, `pw-seed-sys-G-allow` + 2 temporary dev-DB rows — an older COMPLETED REVIEW eval and a FAILED eval, removed after verification):
  - Selector offered only the 2 COMPLETED evals; the FAILED record was excluded.
  - Selecting the older completed eval → "Historical — not the latest evaluation", latest-basis planes heading, "not this receipt's basis" note, bounded-list copy, Evaluation history link — at **1440 and 390px**.
  - Governance endpoint forced to 500 → Case/Basis/Planes/Next all still rendered; "governance and enforcement read is unavailable" confined to Govern & operate; no fact rows, no fake counts.

## Honestly not run / remaining limitations

- The `not-completed` summary state is unit-locked; live UI path unreachable because non-COMPLETED records are correctly excluded from the selector (defense-in-depth against direct/degraded summary responses).
- The historical-vs-latest planes note was verified to exist in code and tests; the live seed system's `planeAvailability` is unassessed, so the conditional note renders only where latest planes exist.
- Viewer-role/multi-org browser checks `NOT_RUN` (single owner identity); no new reads were added — all three fetches remain `requireOrganizationAccess`-bound canonical endpoints.
- The eval-list route's `take: 20` bound is now surfaced honestly; cursor pagination remains a separately owned backend decision (none added here).

## Next

**UX-P05 — DAI / Agent Action** remains the next dedicated page session (nine-dimensional delegated authority, cross-system proof qualifications, first scope widening). P03.1 zero-clear edge and Dashboard D01–D03 remain separately owned.
