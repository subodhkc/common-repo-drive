# E1/E2 Post-Merge Read-Only Review — Scope and Truth Corrections

**Prepared:** 2026-10-16 America/Chicago (Devin deployment occurred 2026-10-17 UTC).  
**Verification basis:** HAIEC Main `847df3d41f5112a273e7987b9a9be7994619a6ab`; PR #2222 merged at 2026-10-17T00:54:41Z; Vercel GitHub deployment commit status **SUCCESS** and GitHub code-validation/New-Violations checks **SUCCESS**. Common-repo Main prior to this review `d7bcb110755b97bddf7e8e8298dc0d694f29021b`.  
**Scope:** Read-only source inspection of E1/E2 implementation and stated release evidence. Not a browser smoke test, independent runtime tenant authorization check, real Kestrel operation, or a rerun of Devin's 35-unit-test suite.  
**Ownership:** This planning report changes no HAIEC or Kestrel product code. The separately authorized Devin owner should implement narrowly scoped source fixes and focused checks. No external Kestrel MCP campaign until E1–E7 plus security gates.

## Overall disposition

**MERGED_AND_DEPLOYMENT_REPORTED_SUCCESS** for E1/E2. **CUSTOMER_READINESS_NOT_FULLY_VALIDATED.** The implementation is reusable read-model composition (no parallel verdict store or second telemetry/permission engine). It delivers:
- six customer jobs/17 source goal+workflow descriptors from the 13 canonical `CAPABILITY_GOALS` plus four workflow-only entries (not equivalent to 17 certified capabilities);
- `GET /api/inventory/systems/[id]/capabilities`, tenant-bound system loader, workspace Overview goal panel, Sources onboarding guide and optional `aiSystemId` on `haiec_capability_guide`;
- four onboarding **guidance** paths (GitHub, local scan bundle, runtime telemetry, declared artifacts); actual connect/consent/upload continue in preexisting routes;
- session-tier normalization shared with the client hook and read-only presentation states;
- Devin-reported 35 passing focused unit tests; GitHub checks confirm code validation and new-violations success. GitHub Vercel commit status shows completed deployment for exact merge SHA. Production authenticated customer UI behavior was **not checked** here.

**Do not label the four-path read projection as four fully automated end-to-end onboarding integrations.** Local CLI remains preview and rich declared-artifact intake remains future work.

## Source-level findings — scoped presentation/contract corrections, not proven backend access breaches

### R1 — P0 product-truth: evaluation disposition is labeled human approval

`lib/ai-inventory/goal-availability-loader.ts` sets `GoalSystemSnapshot.latestDisposition = workspace.assurance.latestDisposition` (an Assurance Evaluation ALLOW/REVIEW/BLOCK outcome). `lib/ai-inventory/goal-availability.ts` uses that value as `operatingTruth.approvalStatus` for `review_findings`, `check_controls`, `deployment_decision`, `reports_receipts` (see exact source). **That collapses assurance disposition into approval semantics**, contradicting HAIEC's separation of U5, human deployment decisions and runtime authority. It may not appear in the current minimal card UI but is emitted through the new API/MCP projection and is a latent contract defect.

**Fix:** never map evaluation disposition into `approvalStatus`. Keep it null/UNKNOWN until the *canonical human decision owner* provides an exact request/system-scoped approval projection. If useful, introduce a distinct explicitly named `latestEvaluationDisposition` display field sourced from canonical U5, without implying human authority. Do not create a new human decision store. Add focused unit assertions for decision absent, pending, approved/rejected vs evaluation ALLOW/REVIEW/BLOCK and exact snapshot basis.

### R2 — P1 customer eligibility: write-action gate coverage is incomplete

In `goal-availability.ts`, a general `canWrite` helper derives session rights as non-viewer, and machine callers check only the **first** mutating guide tool's scope (or return true for a null-scope workflow-only path). Final `NOT_AUTHORIZED` override applies only when the derived state is `READY_TO_OPEN` with `nextAction.approvalRequired`. Cases that are `ACTION_REQUIRED` or `NOT_CONNECTED` and offer consent, telemetry setup, source connection or a protected operation can still read as action-required rather than explicitly unavailable to that actor.

This **does not prove** underlying API access can be bypassed: the canonical server routes remain separate authoritative gates. However, the new per-tenant customer “scope-correct next action” claim is stronger than the projection's actual logic.

**Fix:** distinguish read/navigation eligibility, proposed write step, permission to invoke the actual step, and human browser-only consent. Use the target mutation's canonical route/tool permission, not a first-tool heuristic or generic non-viewer role. Apply lack-of-scope labeling to every mutation-related next step, including `ACTION_REQUIRED`/`NOT_CONNECTED`; leave read-only navigation available. For workflow-only goals with no MCP mutation, `scopeCheck` must not imply that a machine key can act as a privileged human reviewer/operator. Add narrow viewer/member/owner/API-key scope tests. Keep all actual authorization server-side under E3 ownership.

### R3 — P1 E2 onboarding projection may overstate who can connect/upload

`goal-availability-loader.ts` calculates `isWriteAuthorized = req.scopeCheck != null || (membershipRole !== 'viewer' && membershipRole !== null)`; for a machine with **any** scope-check function this is true even when it only has `system:read` (or all checks return false). `source-onboarding.ts` uses this boolean to generate “you can connect/upload” explanations. Its CTA links also appear to read-only viewers, sometimes with an explanatory limitation rather than a disabled authorized path.

**Fix:** compute per-action capability for `source:create` or canonical binder and scan submission scopes, and per-session route RBAC, **not** “scope checker exists.” Distinguish read-only information links from actionable writes, show missing privilege when blocked, and do not silently broaden access. Add machine read-only/scan-scope/no-scope and viewer cases.

### R4 — P1 completed evaluation count does not establish comparable pairs or usable receipts

`goal-availability.ts` marks `compare_evaluations` `READY_TO_OPEN` when `assurance_evaluations.count(COMPLETED) >=2`; the next-action reason says canonical Consequence Delta is available. Two completed snapshots might be incomparable due to source/analyzer, scope/perimeter or missing qualified facts; `reports_receipts` copy implies report and Decision Receipt lifecycle from one completed evaluation, though receipt may be `NO_RECEIPT`.

**Fix:** keep **navigation** available, qualify action text to “comparison workspace available; actual delta availability must be checked by canonical consequence-delta projection”; check comparable pair/receipt state where cheap and already exposed. Do not re-run evaluations just to derive availability. Preserve `PARTIAL`, `NOT_AVAILABLE`, `NO_RECEIPT`, historical/current separation. Add two-incomparable-evaluations and missing-receipt tests.

### R5 — P2 source-registration drift and multi-source precision

New `GOAL_TRANSPORT` has fixed paths and `haiec_*` arrays, while `CAPABILITY_GOALS` / `lib/mcp/tool-registry.ts` are already canonical registered tool names/scopes. This can drift if the registry changes. E2 selects the first READY repository and mentions it in suggested evaluation, but does not select the exact source asset in the URL. For multiple READY sources, the user must explicitly select source ID/branch/consent at the canonical run seam.

**Fix:** derive guide-goal tool registration/scope from canonical catalog instead of silently duplicating it, preserve workflow-only entries as documented read metadata, and ensure CTA does not suggest source A is automatically selected when the audit run still requires an explicit selection. Keep source switching/branch reset owned by existing preflight and validation.

### R6 — P2 monitoring source receipt versus freshness

The panel uses `SIGNAL_RECEIVED` as readiness of the source-view route, not proven active coverage. Existing limitations correctly say `SIGNAL_RECEIVED != EVALUATED`. E4 must add source freshness and lag before describing *current* monitoring, and surface source-health unknowns rather than implying continuous observation from one historic signal. Do not copy a new telemetry pipeline into E1/E2.

## Recommended decision and order

1. **E1/E2 stabilization mini-PR (small, isolated):** R1 mandatory truth correction; R2/R3 authorization and CTA accuracy; R4 comparator/receipt wording. Keep code owner distinct from E3 security route changes. No new evaluation/policy engine.
2. **E3 security owner:** finish PR #2220 separately, repair lint/new-violations gates, rebase against Main `847df3d41`, confirm org/role/target boundaries, verify actual deployed control claims.
3. **E4 telemetry owner:** age/lag/health and qualified source/outcome event contract, reuse OTLP/read models. Avoid universal monitoring or enforced-protection claims.
4. **E5–E7 after these boundaries stabilize.** Kestrel isolated-tenant real external MCP journey, complete screenshot/operations manifest remains deferred.

Focused security/contract checks to merge fixes are **not** the deferred external acceptance campaign. No broad test explosion.

## Minimal implementation prompt for separate Devin owner

> Start at HAIEC Main `847df3d41`, inspect this review and E1/E2 original contracts in `subodhkc/common-repo-drive`. Create one **small E1/E2 product-truth patch** without editing PR #2220, `lib/control-test`, manufacturing or E4 telemetry producers. Correct U5 disposition mislabeled as `approvalStatus`, machine and session mutation eligibility for actionable CTAs, source-onboarding writer scope, and misleading comparable-evaluation/receipt wording. Prefer canonical RBAC and human approval sources; no second policy or persistence. Add focused pure tests plus targeted type/lint checks, then merge through normal authorized workflow and verify automatic Vercel deployment. Update the common repo's current status and this review with exact implementation/CI/release evidence. Do NOT create Kestrel test account or perform external customer acceptance yet.

## References

- HAIEC PR #2222: https://github.com/subodhkc/haiec-website/pull/2222
- HAIEC Main post-merge source: https://github.com/subodhkc/haiec-website/tree/847df3d41f5112a273e7987b9a9be7994619a6ab
- HAIEC PR #2220 staged: https://github.com/subodhkc/haiec-website/pull/2220
- E1 contract: [E1](E1-CUSTOMER-GOAL-AVAILABILITY-AND-WORKFLOW-COMPOSITION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
- E2 contract: [E2](E2-LOW-FRICTION-SOURCE-ONBOARDING-AND-EVIDENCE-QUALIFICATION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
- E3/E4 owner contract: [E3/E4](E3-E4-SEPARATE-SECURITY-TELEMETRY-OWNERSHIP-AND-E1-E2-HANDOFF-2026-10-16.md)

**Status (at review time):** `DEPLOYED_VERIFIED_CODE_PR2222`; `SOURCE_CONTRACT_REMEDIATION_OPEN`; `FULL_CUSTOMER_EXECUTION_NOT_VERIFIED`. No product repo changes or tests were performed to write this report.

---

## Remediation record — PR #2223 (2026-10-17)

**Implemented by the authorized Devin owner. One small isolated patch — no edits to PR #2220, `lib/control-test`, `lib/ucp`, manufacturing, or E4 collector/producer services. No new engine, registry, approval store, or telemetry pipeline.**

| Finding | Correction implemented | Evidence |
|---|---|---|
| **R1 — evaluation disposition as human approval** | `operatingTruth.approvalStatus` is now sourced ONLY from the canonical human-decision owner `lib/assurance/deployment-decision-persistence.ts` (`listDecisionsForSystem` → latest non-superseded record status: PENDING / APPROVED_SCOPED / APPROVED_CONDITIONAL / REJECTED / REVOKED), or `null` when no decision exists. U5 disposition moved to a distinct `evaluationTruth.latestDisposition` field; `evaluationTruth.latestReceiptState` added. No new approval store. | `lib/ai-inventory/goal-availability-loader.ts`, `goal-availability.ts` (snapshot fields + `evaluationTruth`); unit tests: ALLOW+no-decision → approval `null`, ALLOW+PENDING, BLOCK+REJECTED, REVIEW+APPROVED_SCOPED. |
| **R2 — write-gate coverage incomplete** | New `GOAL_WRITE_STEP` map: each goal's ONE canonical mutating operation bound to its exact `ApiScope` (`scan:create`, `system:create`, `evidence:ingest`) or `humanOnly` (deployment decision, kill switch — never permitted for an API key). Every write-directed next step in `READY_TO_OPEN`, `ACTION_REQUIRED`, and `NOT_CONNECTED` now carries `permitted` + `permissionReason`; read-only navigation stays available. | `resolveWritePermission()` in `goal-availability.ts`; tests cover viewer on NOT_CONNECTED, machine key without scope on ACTION_REQUIRED, all-scope key denied human-only steps. |
| **R3 — E2 writer eligibility** | `isWriteAuthorized` boolean replaced by per-action `SourceWritePermissions` resolved server-side: `connectSource`/`registerDeclared` → `source:create`, `submitLocalScan` → `scan:submit`, `configureTelemetry` → `evidence:ingest`, `runEvaluation` → `scan:create`. Machine callers resolve each permission through their exact scopes — a scopeCheck function's existence never implies authorization. | `goal-availability-loader.ts` `resolveSourceWritePermissions`; `source-onboarding.ts` `perm()` helper on all 8 nextActions; tests: read-only key blocked on all paths, `scan:submit`-only key may submit bundles but not bind sources, READY source still requires `scan:create`. |
| **R4 — comparison/receipt overclaim** | `compare_evaluations` next action states the workspace is available and canonical comparability (source, analyzer, scope/perimeter) is "established when the delta loads, not assumed here"; limitation `COMPLETED_EVALUATIONS != COMPARABLE_PAIR`. `reports_receipts` now reads `latestReceiptState` and qualifies NO_RECEIPT / PRIVATE_RECEIPT / PUBLIC_RECEIPT / REVOKED_RECEIPT verbatim. | `goal-availability.ts` derivation branches; tests for NO_RECEIPT, REVOKED_RECEIPT, PRIVATE_RECEIPT wording. |
| **R5 — registry drift / source auto-select** | `registeredMcpTools` for canonical guide goals derives verbatim from `CAPABILITY_GOALS[].tools` — no second copy of tool ids. Workflow-only rows keep documented read metadata only. GitHub READY next action explicitly states "Select the exact repository and branch at the run step — never auto-selected." | `goal-availability.ts` transport projection; `source-onboarding.ts` GitHub path reason. |
| **R6 — telemetry receipt wording** | `SIGNAL_RECEIVED` copy corrected to "one intake receipt only — freshness and current coverage are not established (E4)". `SIGNAL_RECEIVED != EVALUATED != ENFORCED` limitations preserved. | `source-onboarding.ts` runtime path; `goal-availability.ts` `configure_telemetry` branch. |

**Validation (all `CODE_VERIFIED`/`TEST_VERIFIED`, recorded 2026-10-17):**
- `vitest run tests/unit/goal-availability.test.ts tests/unit/source-onboarding.test.ts` — **50/50 pass** (33 + 17; new coverage for every finding above).
- `tsc --noEmit` — clean.
- ESLint on all 7 changed files — clean.
- CI: TypeScript Type Check **pass**; ESLint New-Violations Gate **pass**; repo-baseline ESLint fail and Vercel preview block are the same pre-existing conditions recorded for merged PRs #2221/#2222.

**Merge/deploy evidence:** PR [#2223](https://github.com/subodhkc/haiec-website/pull/2223) merged 2026-10-17T01:38:15Z → HAIEC Main `18f845cee652772bfa6d774b1331175e6728e05d`; Vercel production deployment `BJSPHs5UbwEDQxou9aGaQrdUsHHv` commit status **SUCCESS** — `DEPLOYED_VERIFIED`.

**Remaining limitations (unchanged):** production authenticated customer UI behavior still not independently executed; the four onboarding paths remain guidance paths, not automated integrations; local CLI remains preview; producer freshness/lag/health remains E4-owned; Kill Switch deployed-effect claims remain E3-owned pending PR #2220.

**Status:** `DEPLOYED_VERIFIED_CODE_PR2222` + `DEPLOYED_VERIFIED_CORRECTNESS_PATCH_PR2223`; `SOURCE_CONTRACT_REMEDIATION_CLOSED`; `FULL_CUSTOMER_EXECUTION_NOT_VERIFIED`.
