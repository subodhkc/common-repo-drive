# HAIEC — UX-P06.1 independent acceptance and UX-P07 Assurance Engine results handoff

**Independent review date:** 2026-10-17. **Acceptance:** UX-P06.1 **DEPLOYED_VERIFIED** (actual merged code, GitHub CI, Vercel exact commit), P06 G01–G04 source-level fixes **ACCEPTED**. Devin-reported browser and unit-test counts are **not independently rerun** in this review. The initial developer record has archival filename `2026-10-20`; preserve.

## 1. Verified release

- [PR #2251](https://github.com/subodhkc/haiec-website/pull/2251) **merged** into HAIEC `Main`; exact merge SHA **`d3db5ddc637974ec3e757fead3ae1c86322d29e7`**, Main matched at time of review.
- Vercel deployment independently discovered by exact SHA, **`dpl_48TYX3Vk7KRWnQoAP11SSpzxgW4h`** [inspector](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/48TYX3Vk7KRWnQoAP11SSpzxgW4h), `READY`, `target:production`, `githubCommitRef:Main`, exact SHA. The numeric `7150331134` supplied by Devin was not retrievable as Vercel get_deployment; retain in original report as historical shorthand, use the verified `dpl_` ID for acceptance.
- GitHub [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39099822939) and [Consolidated CI/CD Pipeline](https://github.com/subodhkc/haiec-website/actions/runs/39099822972) both `completed/success` on exact SHA.
- Scope: only four app files changed: `lib/ai-inventory/source-onboarding.ts`, `components/ai-inventory/SourceOnboardingGuide.tsx`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `tests/unit/uxp06-source-onboarding.test.ts`. No new backend auth, evidence ingestion or MCP write surface.

## 2. P06.1 code acceptance

**G01 CLOSED:** `CONNECTED_VERIFIED.established=readyRepos.length>0`; only canonical repository READY can establish that general label with available input fields. Mere configured telemetry, historic signal or declared runtime endpoint may establish other independent states, but can no longer make a positive verified-identity badge. Prior false-positive test assertions were replaced by endpoint/binder negatives and repo-READY positive. This is deliberately conservative: it may understate other source kinds with separate qualified identity, not fabricate their verification.

**G02 CLOSED:** E4 `SourceHealthView.freshness==='NOT_CONFIGURED'` rendered as `inactive / not configured`, matching source owner's inactive binder state, independent of historic intake receipt.

**G03 CLOSED:** shared `InvestigateWithAiAgent` invokes unconditional `useId()` for unique per-instance `label.htmlFor` and `select.id`. This applies to all four source-gap instances and existing DAI/Agent Audit without second assistant component.

**G04 CLOSED:** UI label `Completed evaluation exists (historical)` for stable `EVALUATION_BOUND` stage ID; basis explicitly says that a completed evaluation count is not specific evidence-membership proof and links user's thinking to exact frozen evaluation or receipt.

Tests and dev browser checks in Devin's implementation record: **19/19** P06.1 focused, **64/64** focused cone, **247/248** broader regression (single known `get_telemetry_status` baseline failure), TypeScript and changed-file lint clean; dev browser 1440/390 unique IDs `:rh:`–`:rk:` and label linkage. These are developer-reported, not independently reproduced in this reviewer session. **NOT_RUN:** real inactive-binder UI fixture, viewer/multi-org, external MCP client roundtrip. Do not describe those as verified end to end.

**Conclusion:** no immediate P06.2. Accept P06 and P06.1; continue to P07. G05 first-next-action ranking (preview local bundle prior to unconnected GitHub) remains a product-priority observation, not established false-authorization. Eight-source E4 bounded list is not exhaustive if more sources exist; do not claim coverage completeness without a count.

## 3. UX-P07 actual route/owner map (verified on same HAIEC Main)

**Recommended one primary page:** `app/dashboard/assurance/evaluations/[evaluationId]/page.tsx` at **`/dashboard/assurance/evaluations/{evaluationId}`**. It already owns a persisted exact U5 evaluation and serves `GET /api/assurance/evaluations/{id}/report` as `AssuranceEvidenceBundleV1`, with `AssuranceDecisionSummary`, `AssuranceBundleReport`, `SystemProfileCoverage`, Executive/Technical/Auditor profiles, PDF links and an explicit comparison-passport flow using both `baselineEvaluationId` and `comparisonDigest`. All of that must survive.

**Preserve, don't replace:**
- `app/dashboard/audit-orchestrator/[runId]/page.tsx` at **`/dashboard/audit-orchestrator/{runId}`** is the live/polling **run monitor** (engine state/duration/errors, exact `assurance.state==='READY'` only for completed run-bound U5 evaluation; separate JSON/HTML run artifacts). `runId` is not `evaluationId`. Do not move or duplicate its cancellation/advancement or score presentation to P07 evaluation page.
- `app/dashboard/audit-orchestrator/page.tsx` is the run index; `app/dashboard/assurance/page.tsx` is the global U5 portfolio summary, not a per-evaluation engine.
- `/reports/evaluations/{evaluationId}` is **Master Report / Agent Audit** link already exposed by the exact-evaluation page. Keep detailed proof/human governance/replay/receipt owners; don't reimplement.
- `lib/ai-security/analyzer-execution-identity.ts` persists exact historical analyzer components and distinct `executionState=EXECUTED|NOT_EXECUTED|UNKNOWN` and `identityState=EXACT|PARTIAL|NOT_AVAILABLE` on scan snapshot `operationCoverageIntelligence.analyzerExecutionIdentity`. See `lib/assurance/analyzer-build-inventory.ts`, `u6-scan-loader.ts`, `assurance-output-composer.ts` and `consequence-delta-service.ts` for provenance/compatibility.
- `lib/assurance/reporting-projection-bundle.ts` and `components/ai-inventory/AssuranceBundleReport.tsx` already render evidence-bound claim results. Existing `SystemProfileCoverage` distinguishes profile and readiness; no second analyzer/capability truth registry.
- `lib/assurance/consequence-delta-service.ts` + authorized passport endpoint already own exact-pair comparable delta. Preserve `PARTIAL/NOT_COMPARABLE`, exact identities and NO_RECEIPT, no client-side finding-title diff. Exact selected eval's as-of/system/scope/receipt is the binding reference in all action links.
- Existing `haiec_list_evaluations`, `haiec_get_summary`, `haiec_get_agent_audit`, `haiec_get_master_report`, `haiec_get_consequence_delta`, `haiec_get_dai_report` are the MCP read path; `haiec_run_assurance` is a separate explicitly scoped/side-effecting action. Client copy prompt is not an evaluation run or approval.

**Source of design patterns only:** [Standalone DeepSeek Evaluate mock audit](UX-P07-DEEPSEEK-STANDALONE-EVALUATE-MOCK-REVIEW-AND-UI-MCP-ASSURANCE-FLOW-ALIGNMENT-2026-10-17.md) and [Detection Coverage drawer audit](UX-P07-DETECTION-COVERAGE-DRAWER-REFERENCE-VALIDATION-AND-UX-P01-REVIEW-2026-10-17.md). Synthetic mock analyzer counts, fake receipts, title-delta and effects must NOT enter live product; mock’s selected-history timestamp bug is a hard-negative for UX-P07.

## 4. P07 approved design, grounded in current owners

**Customer question:** “For this selected evaluation, which analyzers actually participated? What did their qualified evidence establish, what remains unassessed, and what can I do next?”

Top of *exact* eval page: persisted evaluation ID (can contain colon, preserve encoding), true frozen/as-of, scope/source mode and a bounded ALLOW/REVIEW/BLOCK disposition **only within evaluated scope**. If data or report unavailable, no fabricated clean verdict. Distinguish frozen U5 from current operational status and human deployment authorization.

**Anatomy:** one succinct consequence/disposition overview → expandable execution provenance (selected vs executed vs NOT_EXECUTED vs UNKNOWN; identity EXACT/PARTIAL/NOT_AVAILABLE) → evidence-backed claim/finding/unknown breakdown → one eligible source/action from existing E1/E2 or canonical `resolutionGroups` → exact report/Agent Audit/receipt links and optional copy-only agent help for inspection. Do not make every registered scanner appear as RUN, do not infer static code reachability from local bundle source mode, do not treat catalog controls/PEP runtime setup as test execution.

**Optional facets:** Code/AppSec, Prompt/RAG, Tool/MCP, Identity/Access, Supply chain, Runtime Test, Telemetry, Governance/Controls as presentation taxonomy only **when canonical records map**; a facet isn't one universally executable analyzer, and a control catalogue isn't proof of deployed enforcement. If no exact manifest, show `Execution details not established` and the inspection path rather than an invented 0/16 or 14/16.

**Exact evidence links:** sourceId, producer run / scan run ID, evaluator ID, qualified evidence refs, hash/time as available from the frozen report; unknown/uncollected/quarantined/held rows stay honest. No source-of-truth duplicated into local JS, no new scans, findings or eval dispositions.

**MCP companion:** selectively reuse existing `InvestigateWithAiAgent` for exact `aiSystemId + assuranceEvaluationId` with `contextKind='assurance_report'` or `agent_audit` only when both exact values are known. Copy/read-only; external client requires its own API-key auth and scope. AI answers established facts vs interpretation vs unknown vs next permitted step; no login-based key inference, no approval spoofing.

**Acceptance:** explicit fixture from two exact evaluations and separate run status; switching eval routes must change every displayed frozen fact/as-of and any bound DAI/report/receipt/delta; current-source operations remain distinct. Test actual analyzer-execution-identity records vs catalog-only with `UNKNOWN` legacy, full repo scan vs qualified local bundle vs runtime-only, orphan/missing receipt, not-established. Limited 1440/390 browser and changed-file test cone; viewer/multi-org if authorized. One focused PR merge `Main`, verify exact-SHA prod, Common Repo implementation record; stop P07. P08 Controls & Operations next in separate session. Keep Dashboard D01–D03 and other P03/P04 edge maintenance separate.

## Decision

**P06.1 complete. UX-P07 is next.** Focus one existing selected-evaluation report, factual analyzer participation and evidence-bound findings, with MCP exact-evaluation explanation. Do not expand detector-engine scope to make the UI greener.
