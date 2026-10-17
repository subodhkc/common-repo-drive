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

**Status:** `DEPLOYED_VERIFIED_CODE_PR2222`; `SOURCE_CONTRACT_REMEDIATION_OPEN`; `FULL_CUSTOMER_EXECUTION_NOT_VERIFIED`. No product repo changes or tests were performed to write this report.
