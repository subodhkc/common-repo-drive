# UX-P05 — Agent Action & Delegated Action Integrity (DAI) — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp05-dai-investigation` @ `e4c5c625c`
Base: `Main` @ `0fdf0f2f8` (UX-P04.1, PR #2238)
PR: #2239 — https://github.com/subodhkc/haiec-website/pull/2239
Merge commit: `Main` `67b95cb2c`
Vercel production deployment: `7143846554` — **SUCCESS** on exact merge SHA
Scope: `lib/assurance/dai-report-projection.ts` (additive projection fields), `app/(workspace)/monitoring/dai/[surfaceId]/page.tsx` (enhanced), `tests/unit/uxp05-dai-report.test.ts` (new). No endpoints, engines, ingestion paths, MCP tools, or authorization surfaces added or changed.

Governing contracts: [P04.1 acceptance + P05 handoff](UX-P04.1-INDEPENDENT-ACCEPTANCE-AND-UX-P05-DAI-HANDOFF-2026-10-17.md), [DeepSeek DAI/assurance UX additive design](HAIEC-DEEPSEEK-DAI-AND-ASSURANCE-UX-REFERENCES-VALIDATION-AND-ADDITIVE-DESIGN-2026-10-17.md), [E62 cross-system DAI engineering contract](E62-CROSS-SYSTEM-DAI-DELEGATION-ENGINEERING-CONTRACT-2026-10-20.md) (remains PROPOSED).

## Step-1 inventory conclusion (before UI changes)

| Already canonical | Under-presented | Not implemented (correctly) |
|---|---|---|
| `dai-evaluation.ts` — 9 dimensions, 5 comparison states, 7 DAI states, deterministic `evaluationId`/`asOf` | Per-surface page: state label + comparison table + findings/frontier/rules/refs | Cross-system delegated-effect joins (E62 PROPOSED — deterministic issuer/grant/principal/trace/effect joins absent) |
| `dai-assembler.ts` — persisted-facts-only assembly (envelopes, delegation evidence, five-plane bindings, evidence envelopes, confirmed rules) | Chain narrative, per-hop inspection, widening/junction pivots, all-nine-dimension visibility | Provider-ack and independent target-effect planes (no canonical read carries them) |
| `system-action-authority.ts` three-basis read; `delegation-witness.ts` same-system immediate-parent checks | `AgentTraceViews` shows rule confirmations only | — |

## What shipped

**Canonical projection** (`projectDaiReport`) — additive, schemaVersion unchanged (`dai-report-1.0.0`); MasterReport binding untouched (binds raw evaluations):
- `asOf` — deterministic assembled-read timestamp
- `nineDimensions` — all nine `DAI_DIMENSIONS`; dims without facts carry `comparison: null`
- `establishedWidening` — only `BROADER` comparisons + their evidence refs
- `unresolvedJunctions` — only `MISSING`/`UNKNOWN` comparisons + refs
- `chainLanes` — six fixed hop classes: `DELEGATED_AUTHORITY → CODE_CAPABILITY → EFFECTIVE_GRANT → OBSERVED_ACTION → PROVIDER_ACK → TARGET_EFFECT`. Values/refs derived only from comparison entries; `PROVIDER_ACK`/`TARGET_EFFECT` are always unestablished with empty values/refs because the canonical read carries neither plane.

**Per-surface page** (`/monitoring/dai/[surfaceId]`) — enhanced, not replaced; all prior sections (state, comparisons, findings, frontier, pending business rules, rule-confirmation controls, evidence refs, limitations) preserved:
- Consequence-led **delegation case** summary: delegated/capable/widening/junction counts, exact as-of + evaluation id, links to System workspace, Assurance case (`?tab=assurance`), Add delegation evidence.
- **Evidence chain** lanes — established only where persisted facts exist; unestablished hops labeled honest gaps ("No qualified readback in this read"); explicit UNVERIFIED cross-system copy.
- **Widening vs unresolved-junction** pivots — `BROADER` vs `MISSING`/`UNKNOWN` kept categorically distinct, anchored to `#dim-*` rows; multiple entries listed, no invented single pivot.
- **All-nine-dimension table** — was only dims with comparisons; now every canonical dim renders, "No facts — not assessed" for fact-less dims. Rows carry `id="dim-X"` anchors.
- **Dimension inspector** — native `<details>/<summary>` per dim: exact plane values, pending candidate identity, evidence refs. Table remains the full accessible alternative.
- Mobile: horizontal scroll wrapper so the Comparison column is reachable at 390px.

## Boundaries preserved (locked in tests + live)

- Missing delegation evidence is never a violation (NOT_ASSESSED path unchanged).
- Code-capable ≠ granted ≠ observed ≠ provider-ack ≠ target effect — ack/effect lanes can never claim establishment from this read.
- Candidate-only mappings stay `UNKNOWN`/pending business rules; `dai-rule:` provenance preserved.
- Cross-system delegated authority remains candidate/UNVERIFIED — no chain hops asserted cross-system.
- No composite score, percentage, or fabricated clean result.
- Session dashboard vs API-key MCP transports unchanged; no new MCP tool; human approval untouched.

## Validation

- `TEST_VERIFIED`: **14 new locks** — 8 executed behavioral tests on the projection (nine-dim completeness/null rows, BROADER-only widening, MISSING/UNKNOWN-only junctions, fixed six-hop lanes with ack/effect permanently unestablished, missing-grant lane gap, NOT_ASSESSED honesty, lane-refs ⊆ comparison refs, dedup/sort) + 6 page structural locks. Full DAI cone: **48/48** (with `engine-batch-y1`, `dai-rule-confirmation`), **53/53** regression (`engine-batch-ui-report`, `engine-batch-z3`).
- `tsc --noEmit` clean; changed-file ESLint clean.
- CI: TypeScript ✓, ESLint New-Violations Gate ✓, U6 ✓, px0 ✓; baseline ESLint/Vercel-preview failures unchanged (zero hits in touched files — verified in run log).
- `LIVE_VERIFIED` (authenticated dev session): temporary dev-DB fixture on `pw-seed-sys-G-allow` — one `delegation_evidence` row (ops/targets/envs/dataClasses/regions/approvals/magnitude; no scopes) + one `assurance_evaluation_profile_bindings.fivePlaneResult.capabilityFacts` (two capable facts exercising BROADER; `granted: []`; `observed: []`). Result: `CAPABILITY_OUTSIDE_DELEGATION_UNMEDIATED` rendered with MATCHES/BROADER/MISSING/no-facts rows, missing-grant and observed lanes unestablished, ack/effect unestablished — verified @ **1440/1280/768/390px**; `<summary>` opens via Enter; `#dim-SCOPE` anchor jump works; overview→surface link appeared. **Fixture fully reverted** (probe confirms clean).

## Honestly not run / remaining limitations

- Viewer-role/multi-org browser checks `NOT_RUN` (single owner identity); no new reads added — page still resolves via `resolveSessionOrganizationId` + tenant-bound assembler.
- Observed-telemetry lane with real OTLP envelopes `NOT_RUN` live (no OTLP rows in seed; exercised behaviorally).
- Cross-system delegated relations remain unrepresented beyond the UNVERIFIED statement — deterministic joins per E62 are a separately owned engineering task.
- Same-system delegation-witness path (immediate-parent, bounded) is not visualized as lineage — the read is declaration-bounded; deeper lineage remains a named limitation, unchanged.
- No narrated/edited HAIEC/MCP operational recording exists; the plan is preserved, not claimed.

## Next

Per the page-by-page program: UX-P06 (next unclaimed page per the program matrix) — P03.1 zero-clear edge, Dashboard D01–D03, P07 Evaluate, P08 Controls, P09 My Work remain separately owned; none bundled here.
