# UX-P07 — Assurance Engine Evaluation & Results — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp07-evaluation-results` @ `e2eecda96`
Base: `Main` @ `d3db5ddc6` (UX-P06.1, PR #2251)
PR: #2252 — https://github.com/subodhkc/haiec-website/pull/2252
Merge commit: `Main` `c25125584`
Vercel production deployment: `7150717634` — **SUCCESS** on exact merge SHA (GitHub deployment-status verified)
Scope: `lib/assurance/evaluation-execution-provenance.ts` (new), `components/ai-inventory/EvaluationExecutionProvenance.tsx` (new), `app/dashboard/assurance/evaluations/[evaluationId]/page.tsx`, `tests/unit/uxp07-evaluation-results.test.ts` (new), `tests/unit/rpt-1-authenticated-report.test.ts` (count update), `artifacts/_uxp07-eval-check.js`. No new endpoint, engine, ingestion path, MCP write tool or verdict path.

Governing docs: [P06.1 acceptance + P07 handoff](UX-P06.1-INDEPENDENT-ACCEPTANCE-AND-UX-P07-EVALUATION-RESULTS-HANDOFF-2026-10-17.md), [DeepSeek Evaluate mock review](UX-P07-DEEPSEEK-STANDALONE-EVALUATE-MOCK-REVIEW-AND-UI-MCP-ASSURANCE-FLOW-ALIGNMENT-2026-10-17.md) (design reference only), [Detection Coverage drawer review](UX-P07-DETECTION-COVERAGE-DRAWER-REFERENCE-VALIDATION-AND-UX-P01-REVIEW-2026-10-17.md).

## Customer question answered

"For this selected evaluation, which analyzers actually participated? What did qualified evidence establish, what remains unestablished, and what can I do next?"

## What shipped (additive, one page)

**First viewport identity + bounded disposition** (`page.tsx`):
- Exact persisted `evaluationId` (colon-bearing, preserved), `evaluationSnapshotAt` as-of, evaluation basis (scan-backed / qualified evidence bundle / historical), orchestrator run ID, exact scan ID, repository commit, evidence-set digest.
- `SYNTHETIC_REFERENCE` persisted classification surfaced as a labeled status, never live truth.
- Bounded disposition chip (`ALLOW`/`REVIEW`/`BLOCK`/`DISPOSITION NOT BOUND`) with the evaluated-scope caveat — "not a human deployment approval, installed control or verified external effect."

**Execution provenance** (`evaluation-execution-provenance.ts` + `EvaluationExecutionProvenance.tsx`):
- Pure projection of the persisted AEI record carried by `bundle.buildProvenance.analyzerBuildIdentity` — per-component `EXECUTED` / `NOT_EXECUTED` / `UNKNOWN` with separate `EXACT` / `PARTIAL` / `NOT_AVAILABLE` identity, version facts verbatim (engine/product/build/image/runtime; configured versions labeled "not proven executed"), evidence source, limitations.
- Counts exist only over the persisted component set — no registered-catalog denominator, no invented 14/16.
- Missing AEI record → "Execution details not established" — unknown participation is not proof no analyzer ran, and is not a security finding.
- Remote execution environment identity line when the record carries one.

**"What this evaluation does not establish"** — bounded projection of the bundle's own facts: declared producer non-completion, source truncation, unsupported and not-assessed analyzer families (selected ≠ executed), evidence-frontier counts by state, canonical disposition limitations. Empty frontier renders a bounded "coverage remains bounded" — never "fully secure".

**Stale-response guard** — `load()` now carries a request-sequence guard: an out-of-flight response from a previously selected `evaluationId` or org context can no longer overwrite the current selection. Every rendered fact stays bound to the exact requested evaluation.

**MCP investigation** — `InvestigateWithAiAgent` (`assurance_report`) mounted with the bundle's own `aiSystemId` + `evaluationId`. Prompt names `haiec_get_summary`, `haiec_get_agent_audit`, `haiec_get_master_report`; copy-only, no writes, response contract distinguishes established facts / interpretation / unknowns / next permitted action.

## Preserved (verified, not reopened)

`/dashboard/audit-orchestrator/[runId]` run monitor, `/dashboard/assurance` portfolio, `/reports/evaluations/[evaluationId]` Master Report + Agent Audit, `AssuranceEvidenceBundleV1`, `AssuranceDecisionSummary`, `AssuranceBundleReport`, `SystemProfileCoverage`, Executive/Technical/Auditor profiles, both PDF exports, the comparison-passport flow (`baselineEvaluationId` + `comparisonDigest` binding unchanged), Consequence Delta owner, DAI, receipts, source onboarding, all MCP tools and `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD`.

## Verified

- `tests/unit/uxp07-evaluation-results.test.ts` — **14/14**: participation projection (executed/not-executed/unknown partitions, PARTIAL never upgraded, missing AEI honest-unknown, no denominator keys), not-established projection (truncation/unsupported/not-assessed pass-through, frontier state counts), page structural locks (stale-guard on success+error paths, canonical-id MCP mount, identity strip, no fake denominator), `assurance_report` prompt contract + missing-eval refusal.
- Regression cone **207 tests / 10 files** — all pass after updating the rpt-1 structural count (3→4 bundle consumers).
- `tsc --noEmit` + ESLint clean on all touched files. CI: TypeScript ✓, New-Violations ✓, U6 static + PG integration ✓, px0 ✓; ESLint baseline + Vercel-preview failures with zero hits on touched files (established baseline).
- **LIVE_VERIFIED** @1440/1280/768/390 on real eval `0419455d…:assurance:1.1` (org `10231b6b`, seeded MunichTech fixture): identity strip with exact colon-bearing eval ID + snapshot + basis + run/scan/commit; bounded REVIEW chip; 9 participation rows; remote env identity line; not-established block (555 frontier items by state); prompt carries exact eval ID + read tools + no-write clause; Master Report / PDF links intact; zero console errors.

## NOT_RUN / unestablished

- EVIDENCE_ONLY evaluation render — `NOT_RUN` live (no evidence-only eval in the test org); the basis label path is unit-covered and the component reads `evaluationBasis` verbatim.
- `NOT_EXECUTED`/`UNKNOWN` component states rendered live — seed eval's record is all-EXECUTED/PARTIAL; states unit-locked.
- Viewer/multi-org clickthrough — `NOT_RUN` (single owner identity in the dev session).
- Keyboard/focus audit — all affordances are native `details`/`button`/`select`/`a`; full audit `NOT_RUN`.
- Consequence-delta comparability — preserved untouched, not re-tested this session.
- Real MCP client round-trip — `NOT_RUN` (no scoped test credential; none requested).

## Next

**UX-P08 Controls & Operations** — dedicated session. Preserve all 45 control families, UCP/Control Proof, policy authorization, operational monitoring and human approvals. D01–D03 dashboard maintenance and the narrated HAIEC MCP operational recording remain separately owned.
