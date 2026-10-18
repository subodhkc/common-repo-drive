# HAIEC — UX-P06 independent post-merge acceptance, P06.1 source-truth correction and UX-P07 handoff

**Actual independent review date:** 2026-10-17. **Status:** UX-P06 **DEPLOYED_VERIFIED**; primary source-onboarding panel **PARTIALLY ACCEPTED** due one P1 source-level false-green state, two P2 quality defects, and one P2 projection-label overclaim. **No HAIEC app code edited in this review**. Original P06 developer report filename `2026-10-20` is retained as an archival filename, not the date of the review.

## 1. Independent shipping verification

- HAIEC [PR #2250](https://github.com/subodhkc/haiec-website/pull/2250), **merged** to `Main` exact **`c3598decf0b7072d7b9425217a24b74b37b3ad91`**. Six changed files: `components/ai-inventory/InvestigateWithAiAgent.tsx`, `components/ai-inventory/SourceOnboardingGuide.tsx`, `lib/ai-inventory/goal-availability-loader.ts`, `lib/ai-inventory/source-onboarding.ts`, `tests/unit/source-onboarding.test.ts`, `tests/unit/uxp06-source-onboarding.test.ts`.
- Vercel exact-merge SHA [production deployment](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/HaA7zy6KjemKbbM6fuC8U5EE5TkF) **`dpl_HaA7zy6KjemKbbM6fuC8U5EE5TkF`**, `READY`; branch `Main`, project `haiec-website-vercel`. Numeric identifier `7150019445` in developer log did not resolve through Vercel get_deployment, and should not be the independently verified deployment ID.
- [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39097663333) and [Consolidated CI/CD Pipeline](https://github.com/subodhkc/haiec-website/actions/runs/39097663379) `completed/success` on exact SHA.
- Original Devin [P06 implementation report](UX-P06-SOURCES-EVIDENCE-ONBOARDING-IMPLEMENTATION-RECORD-2026-10-20.md) reports 17 new tests, regression 230/231 with known `get_telemetry_status` baseline failure, TypeScript and touched-file lint clean, and authenticated 1440/1280/768/390 browser check with seeded history and no active sources. The detailed browser/fixture checks were **developer-reported**, not independently rerun. Real binder-backed freshness browser, viewer/multi-org, keyboard-only traversal and degraded-read live remain `NOT_RUN`.

## 2. Source-confirmed useful UX-P06 changes — preserve

- Existing System Workspace **Sources** tab canonical `?tab=assets`, adjacent **Evidence** `?tab=evidence` preserved. No new wizard, endpoint, scan engine, intake route or arbitrary connected-client permission.
- `source-onboarding.ts` still pure: additive `evidenceStages`, `primaryNextAction` chosen from existing path actions with role-derived `permitted`, and bounded `sourceHealth` pass-through from E4.
- `SourceOnboardingGuide.tsx` displays independent stage facts with basis, next action, freshness disclosure and four existing optional GitHub/local/runtime/declaration paths. No mandatory source order and no network mutations.
- `InvestigateWithAiAgent.tsx` reuses canonical-ID-only, copy-only MCP prompts with four source-path-specific read workflows and the existing approval/proof response contract.
- E1/E2, GitHub verified repo and branch preflight, E4 and MCP access are still separate product owners. These changes should **not** be replaced in P06.1.

## 3. Four post-merge source-level findings

### P06-G01 — P1: `CONNECTED_VERIFIED` false-positive / presentation contradicts basis

In `lib/ai-inventory/source-onboarding.ts` the `CONNECTED_VERIFIED` stage label is **"Connected and identity-verified"**, but its `established` expression is:
```ts
readyRepos.length > 0 || telemetryState !== 'NOT_CONFIGURED' || input.hasRuntimeEndpointAsset
```
A merely configured OTLP binder or a merely registered `RUNTIME_ENDPOINT` asset therefore produces an **established (green)** stage. The very next `basis` lines admit **"configured is not a verified source identity"** and **"declared location, not verified identity"**. This is an objective contradiction of the evidence plane / user promise. `tests/unit/uxp06-source-onboarding.test.ts` currently **expect these false-green cases** ("a registered runtime endpoint establishes REGISTERED + CONNECTED rows" and "telemetry CONFIGURED counts as connected"), so the shipped green tests preserve this error. No evidence of an actual false credential verification or tenant leak; it is a verified projection/UX truth defect.

**Fix:** only set `CONNECTED_VERIFIED.established=true` on a canonical per-source identity-qualified fact (repo `READY` is established); a binder being configured/receiving a signal and endpoint registration must **not** count as verified identity in that label. If another canonical source-specific trust signal exists, use that explicitly and label by source kind, rather than mapping any configuration to generic verified identity. Prefer changing the expression to repo `READY` alone for the existing available fields, with explicit limitations saying `TELEMETRY_CONFIGURED_BUT_SOURCE_IDENTITY_NOT_VERIFIED`/endpoint declared if desired. `REGISTERED` may be established independently. Replace contradictory tests with *negative* coverage and maintain repo READY positive.

### P06-G02 — P2: E4 `NOT_CONFIGURED` freshness incorrectly translated to "configured without signal"

In `SourceOnboardingGuide.tsx` `FRESHNESS_STYLES.NOT_CONFIGURED.label` is **"configured without signal"**. Actual owner `lib/evidence/telemetry-readiness.ts::computeSourceHealth` uses `freshness:'NOT_CONFIGURED'` when `binder.active===false` — an inactive/deactivated binder; `CONFIGURED_NO_SIGNAL` is a different three-state telemetry *readiness* notion. An inactive binder may have historic receipts. Calling it configured-without-signal is false; show e.g. **"binder inactive / not configured"** and retain historic receipt/time separately. Test the exact source-owned case with an inactive binder and retained receipt.

### P06-G03 — P2: duplicate HTML input identifiers across source-gap affordances

`InvestigateWithAiAgent.tsx` uses `htmlFor`/select `id={`obj-${contextKind}-${daiDimension ?? aiSystemId}`}`. P06 places the shared component four times within **the same System Source tab** with `contextKind='source_gap'` and `daiDimension=undefined` and identical `aiSystemId`. All four selects thus receive the **same DOM id**, and all four labels point to the first match in browser label lookup. This violates uniqueness and keyboard/screen-reader targeting even though browser visual smoke may pass.

**Fix:** use React `useId()` unconditionally in `InvestigateWithAiAgent` for per-instance label/input identity (component already calls hooks) or include a stable path-specific uniqueness discriminator whose contract survives other contexts. Test four simultaneous instances via a DOM-capable test or verify render output with browser DOM if no React renderer infrastructure; use no ad hoc global counter. Preserve prompts and scope.

### P06-G04 — P2: "bound evidence" overclaims a mere completed-evaluation count

`completedEvaluations` is computed from a simple DB `assurance_evaluations.count({organizationId,aiSystemId,evaluationStatus:'COMPLETED'})` in `goal-availability-loader.ts`. It does **not** look up an exact evidence attachment set or profile binding to prove the **current sources or any particular evidence record** was included in that Evaluation. Yet `evidenceStages` stage `EVALUATION_BOUND` is presented as **"Bound to a completed evaluation"** and basis says `N completed evaluations bound evidence at evaluation time`. Current and historical independence is good, but it is not correct to infer specific evidence membership from a count alone.

**Fix:** rename the stage's visible label to **"Completed evaluation exists (historical)"** or equivalently **"Evaluation completed"** with basis: `N completed Evaluation(s) exist for this AI System; inspect each frozen Evaluation/receipt for which exact evidence was bound.` If consumer requires literal internal `stage:'EVALUATION_BOUND'`, retain ID for compatibility but correct user-visible wording, or derive a true binding from existing authoritative read only if already readily available. Explicitly avoid suggesting current sources were bound. Add test where count>0 and no source/evidence for this current system.

### P06-G05 — minor observation, no automatic fix in P06.1

- `primaryNextAction` intentionally ranks the `local_source` `ACTION_REQUIRED` preview before `github_connected` `NOT_CONNECTED` for an otherwise empty system. Devin live case shows "Submit a local scan bundle". This is **a design/product-priority choice**, not yet a broken route or security issue; verify the action actually exists and that preview is sufficiently eligible. If not, a separate later source-readiness ranking decision can change it, preserving canonical permission and no automatic source.
- At most eight `SourceHealthView` entries are presented; if a system has more, show **"first 8" / truncated coverage** if an existing count is accessible. Don't claim completeness without a total. No expensive backend pagination in P06.1.

## 4. P06.1 immediate work order (one small correction, then stop)

1. Refresh `Main` and Common Repo, confirm no one else owns source-onboarding/InvestigateWithAiAgent files.
2. Fix G01 truth semantics; replace existing tests that lock false-green state. Add verified GitHub positive and configured-binder/endpoint-only negatives; keep stable state IDs where API consumers require them.
3. Fix G02 `NOT_CONFIGURED` freshness label from actual E4 owner; preserve received-receipt historical note.
4. Fix G03 per-instance select IDs using `useId`, confirm uniqueness when four source cards and DAI dimension disclosures coexist; no new MCP tool/authorization.
5. Fix G04 customer wording to avoid implying exact frozen evidence membership from DB count.
6. Focused model/UI tests, TypeScript, changed-file lint and one mobile/desktop browser (if supported), without extensive suites. One PR merge `Main` after gates, verify exact Vercel prod SHA, sync Common Repo P06.1 record/roadmap/handoff and stop. Do not bundle `mcp-assurance` baseline fix, P03.1, Dashboard D01–D03 or P07 changes.

## 5. Next dedicated page after P06.1: UX-P07 Assurance Engine Evaluation & Results

Read existing [P07 exact-run UX/API/MCP mock/source audit](UX-P07-DEEPSEEK-STANDALONE-EVALUATE-MOCK-REVIEW-AND-UI-MCP-ASSURANCE-FLOW-ALIGNMENT-2026-10-17.md) and [P07 detection coverage drawer audit](UX-P07-DETECTION-COVERAGE-DRAWER-REFERENCE-VALIDATION-AND-UX-P01-REVIEW-2026-10-17.md). **Synthetic DeepSeek HTML is only design inspiration; do not port it verbatim or treat mock counts/receipts as real.**

Inspect deployed pages and owner routes first: `app/dashboard/audit-orchestrator/[runId]/page.tsx` (one run status/engine participation; note `assurance.state==='READY'` requires an exact run-bound COMPLETED U5 id), `app/dashboard/assurance/evaluations` (exact completed Evaluation navigation), `app/dashboard/assurance/page.tsx`, Master Report and Agent Audit, analyzer-execution-identity, `operationCoverageIntelligence.analyzerExecutionIdentity`, exact analyzer/source-mode run contract, registry-versus-executed, scoped report/receipts, authorized Consequence Delta. **Choose one actual primary results page after source ownership audit**, keep run monitor/report and technical-detail routes intact.

P07 focus: for one actual selected run/evaluation, clear scope/source/as-of, selected vs actually executed analyzer and rulepack provenance, succeeded/partial/not-run/held distinctions, qualified evidence refs, established vs unknown findings, honest frozen-vs-current label, one next eligible source/action with actual permission, linked full Agent Audit/Master Report/receipt and read-only contextual MCP investigation for exact persisted evaluation. Do not invent 16 analyzer denominator, turn static catalog registration into execution, promote missing runtime/IAM to safe, count PEP as detector, or identify an effect without readback. Respect source mode `FULL_REPO_SCAN` vs `LOCAL_WORKSPACE_BUNDLE` and held processors. Preserve all earlier HAIEC paths, human approvals and MCP canonical workflow. Separate P07 delivery PR after P06.1.

## Disposition

**P06 page shipped** and the four-path capability foundation is sound. **P06-G01 is a P1 customer-truth bug** even though green tests assert it. Other gaps are small. Make one P06.1 correction before moving to P07; avoid reopening all old UX work. Real external MCP/client proof and recorded operational layer journey remain future separately owned acceptance deliverables.
