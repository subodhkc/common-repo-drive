# START HERE — Current Decisions, Document Precedence and Source Status

**Updated:** 2026-10-16 after 52-file audit. **This is the governing READ ME for future planning; it does not supersede canonical code or persisted evidence truth.**  
**Current audit:** [52-file alignment report](COMMON-REPO-FULL-52-FILE-ALIGNMENT-AUDIT-2026-10-16.md) · [20 findings / resolution backlog](COMMON-REPO-52-FILE-ALIGNMENT-FINDINGS-2026-10-16.csv).

## 1. Truth and authority precedence

When two documents disagree:

1. **Deployed application plus exact authenticated runtime receipts**, when independently checked for the claimed operation and scope.
2. **Current canonical implementation and persisted contracts** in the product-owning repository at a documented commit; real server resource/tenant authorization decides access, not marketing.
3. **Canonical in-repo registries and current generated product truth** (e.g. HAIEC MCP registry, evidence producer registry, product integration status; Kestrel canonical capability catalog).
4. **The current execution decision in this page and the latest release gate**, for *future implementation priority only*.
5. **Current E0/R1, E1 and E2 contracts**, E3/E4 ownership handoff, and the enhancement-first roadmap.
6. **Historical pre-Devin recommendations, marketing design, visual diagram studies, curated 87-row capability matrix, prior PR states and demonstration reports**, retained as provenance but NOT latest source status.

The common repository is a planning index, **not** a tenant-scoped production evidence database, source-code authority, or a replacement for the target runtime. GitHub snapshots must remain explicitly timestamped.

## 2. Current engineering decision

**HAIEC enhancement owner:** The separately active authorized Devin/code owner, not this planning/chat workstream. Ask that owner to confirm touched files/active branches; the source audit cannot identify a live Devin agent assignment.

**Ordering for upcoming work:**
- **E0/R1:** Read-only source/owner research COMPLETE for **16 priority workflows**. Release gates and staff ownership still OPEN.
- **E1:** Compose goal-specific read-only user availability from 13 canonical guide goals, 58 source-declared registered tool definitions, existing system nextAction and entitlement/source owner read models. **Implementation spec done; code NOT shipped by this planning lane.**
- **E2:** Compose independent GitHub, eligible local bundle, runtime-only and document evidence onboarding. Honest branch/consent/release readiness, no new evidence engine. **Spec done; code NOT shipped by this planning lane.**
- **E3 (separate Security owner):** Tenant/system/session/machine principal access and the [#2220 security/product-truth correction](https://github.com/subodhkc/haiec-website/pull/2220) (OPEN at inspected time), including safe targeted merge validation. **Privileged security release claims are BLOCKED until needed fixes are actually deployed and scope-checked.** E1/E2 may proceed in non-overlapping composition while E3 runs independently; do not silently bypass existing production authorization.
- **E4 (separate Telemetry owner):** Qualified OTLP/evidence source freshness, correlation, producer health and actual effects. **Proposed implementation interface, not broad live telemetry proof.**
- **E5–E7:** Governance-to-target proof, unified U5/U6 experience and remote customer MCP interoperability once the above ownership/interfaces are stable.
- **T1 external Kestrel acceptance:** **DEFERRED until relevant E1–E7 enhancements and security/release gates.** Devin creates an authorized isolated Kestrel test tenant plus separate HAIEC test org/key; operates HAIEC through deployed MCP from a directory/repo outside HAIEC/Kestrel source; records operation chronology, result/evaluation IDs and redacted screenshots; produces an evidence-bound illustrated user-flow report. Manufacturing replay does not substitute for real SaaS verification.

**Security/testing rule:** do not run the dedicated external Kestrel acceptance now. Focused code-level and negative authorization checks required to safely merge later security fixes are distinct and not waived.

## 3. Separate product owner lanes

| Repository | Its product responsibility | Current work constraint |
| --- | --- | --- |
| `subodhkc/haiec-website` (`Main`) | HAIEC canonical deterministic evidence/U5, U6, approval, tenancy, policy/effect and MCP | Implementation in existing Devin session. No edits by this research session. Do not rebuild canonical modules. |
| `subodhkc/AI-Service-Call-Agent-` (`main`) | KestrelVoice secure SaaS, baseline tenant isolation, privileged operations, voice/MCP/workflow guards, native runtime telemetry | Mandatory Kestrel platform hardening/health truth comes before “secured platform” claims, **independent of paid optional HAIEC**. Do not require AWS to do this. |
| `subodhkc/manufacturing-ai-assurance-haiec` (`main`) | Fictional evidence-bound manufacturing judging/demo, deterministic browser-local MES/ERP/equipment simulation | 25/26/27 demo work is NOT production MES/PLC/ERP enforcement. No new HAIEC Assurance Evaluation inferred from demo operations. |
| `subodhkc/Enterprise-AI-Forensic-Log-Analyzer-` (`main`) | Independent deterministic forensic LogSense and evidence production | Proposed source producer; never own HAIEC verdict/authorization engine. |
| `subodhkc/common-repo-drive` (`main`) | Research, audit, approved handoffs, diagrams, provenance and planning registers | Public as checked 2026-10-16. Private security details require restricted GitHub visibility or separate private tracker; credentials never go in Git. |

The two **security-first** and **enhancement-first** priorities apply to **different execution domains**, not competing priorities for the same sprint:
- HAIEC product: compose E1/E2 first while P0 security release work proceeds in E3.
- Kestrel product: repair mandatory controls/telemetry before promising tenant security; opt-in HAIEC adds incremental, scoped assurance.
- Independent Kestrel × HAIEC external test: only **after** relevant enhancements, not now.

## 4. Latest source heads actually rechecked at audit

| Source | Observed commit | Qualification |
| --- | --- | --- |
| HAIEC `Main` | `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1` | Includes merged Sprint 25 PR #2221; not proof current Vercel deployment |
| Manufacturing `main` | `1fa4c6405808edea64540021df8b1d261cd43c3d` | Sprint 28 PR #49 merged in GitHub; supersedes Sprint 27 simulated commit semantics, actual Vercel release **NOT VERIFIED HERE** |
| HAIEC PR #2220 | head `32e54c58d9622fb26c5b035fcf471b1886109964` | **OPEN, unmerged**, earlier ESLint/new-violations gate failed |
| Common repo pre-audit tree | `9178573a4cf19598f740d30b22419d99820c4013` | 52 tracked files audited; later documentation commits add audit artifacts |
| KestrelVoice `main` | `aafce1d15e6a3f9dbc69307c57c95eb03993eca7` | Earlier source inspection, **not rechecked** in this 52-file docs-only audit |
| LogSense `main` | `c7491ba9124e5df72d250f1b32a4b2c77ccc2993` | Historical source inspection, **not rechecked** in this audit |

**Sprint 28 source correction and evidence boundary:** [Sprint 28 status](SPRINT-28-DECISION-INTEGRITY-STATUS-2026-10-16.md) documents that the prior synthetic PO path could change a cumulative total before supplier qualification was checked. Its later GitHub-merged code addresses the commit gate and adds fictional reviewer-role restrictions, but source assertions of 209/209 and 24/24 tests were not rerun here, nor was Vercel deployment verified. Preserve Sprint 27 as prior-version history; no simulated role is HAIEC authenticated operator authorization.

**No continuous monitoring is implied.** Re-query HEAD/PR states before any code edit, PR merge, deployment or public feature claim.

## 5. Which files to use

**CURRENT — source-backed handoff:**
1. [E0/R1 source/owner reconciliation](E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md)
2. [E1 implementation contract](E1-CUSTOMER-GOAL-AVAILABILITY-AND-WORKFLOW-COMPOSITION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
3. [E2 implementation contract](E2-LOW-FRICTION-SOURCE-ONBOARDING-AND-EVIDENCE-QUALIFICATION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
4. [E3/E4 separate security and telemetry ownership](E3-E4-SEPARATE-SECURITY-TELEMETRY-OWNERSHIP-AND-E1-E2-HANDOFF-2026-10-16.md)
5. [17-item implementation tasks](E1-E2-IMPLEMENTATION-READY-SUBTASKS-AND-OWNER-GATES-2026-10-16.csv)
6. [22-item enhancement/research/later-test backlog](HAIEC-ENHANCEMENT-FIRST-DEFERRED-TEST-BACKLOG-2026-10-16.csv)
7. [PR #2220 staged release status](PRODUCT-TRUTH-RELEASE-GATE-STATUS.json)
8. [Kestrel secure SaaS study](KESTRELVOICE-SECURE-SAAS-INFRASTRUCTURE-HAIEC-ASSURANCE-REMEDIATION-STUDY-2026-10-16.md), [38 control baseline](KESTRELVOICE-SECURE-SAAS-CONTROLS-REMEDIATION-REGISTER-2026-10-16.csv), [37-feature feature control map](KESTRELVOICE-37-CAPABILITY-SECURITY-HAIEC-COVERAGE-CROSSWALK-2026-10-16.csv)

**HISTORICAL / SPECIALIZED — retain as reference, not latest instruction:**
- `PRE-DEVIN-EXECUTION-GATE-AND-LAYER-ALIGNMENT...`: the older **Task A before Task B** sprint ordering is superseded **as a general work schedule**; PR #2220 security gate persists as a release prerequisite for affected privileged capabilities.
- `KESTREL-FIRST-PILOT-AUTH...`: Kestrel real-action pilot direction preserved, **testing deferred**.
- `CAPABILITY-MATRIX.csv/json` (87 rows): curated old source snapshot, internally consistent but not current tenant availability. `CAPABILITY-MATRIX-V2-SCHEMA.json` is **proposed/unmigrated**.
- `DIAGRAM-SPECIFICATIONS.md`, `V3-AND-GENERATED-DIAGRAM-VALIDATION.md`, the six tracked SVGs: illustrations may use technical domain/family groupings, but **3-pillars/6-customer-jobs remains the top-level product story**.
- Sprint 25/26/27/28 status: versioned demo implementation evidence; Sprint 28 fixes a simulated PO partial-mutation defect from the earlier source. No real Kestrel/MES/PLC enforcement or HAIEC-issued demo-record certification.

## 6. Nonnegotiable user/engineering constraints

- Preserve deterministic engine, source qualification, distinct evidence planes, historical/current separation and explicit UNKNOWN.
- Never authorize a customer using a navigation badge, source registration or optional HAIEC commercial tier.
- One real source owner and one eligible actor per mutation. Tenant/role/resource scopes checked at canonical server route/effect boundary.
- Normal HAIEC merging to Main automatically triggers Vercel; verify actual deployment rather than assuming CI check equals production.
- Avoid broad test explosions now, but do not skip focused security checks to release high-consequence changes.
- No test Kestrel account created or used by this documentation audit. Later external acceptance uses newly issued limited-scope secrets in secure storage, independent workspace, exact remote MCP and numbered redacted screenshots.
- No newly introduced capability, integration or control is customer-ready by virtue of appearing in this repository.

**This index resolves reader priority. It does not modify historic documents' source snapshots or replace any deployed source truth.**

---

## Implementation status update (2026-10-17) — supersedes E1/E2 pending statuses

**E1 + E2 are `DEPLOYED_VERIFIED`.** HAIEC `Main` @ `847df3d41f5112a273e7987b9a9be7994619a6ab`, PR #2222, Vercel production deployment `7132729971` (2026-10-17T01:00:48Z). The read-only tenant-aware goal availability projection (`lib/ai-inventory/goal-availability.ts` + `goal-availability-loader.ts` + `GET /api/inventory/systems/[id]/capabilities` + `haiec_capability_guide aiSystemId`) and the four-path source onboarding projection (`lib/ai-inventory/source-onboarding.ts` + workspace Sources-tab guide) are live. Composition only — no new engine/registry/evidence store/persisted state; canonical owners unchanged.

Where any earlier document states E1/E2 as `SPEC_COMPLETE_CODE_PENDING` or `IMPLEMENTATION_SPEC_COMPLETE_CODE_NOT_SHIPPED`, this entry and the appended "Implementation record" sections in the E1/E2 contracts supersede it. E3 (PR #2220 merge + privileged security) and E4 (telemetry depth) remain separately owned and pending. External KestrelVoice MCP acceptance remains `DEFERRED` until E1–E7 + release gates.

## Post-merge E1/E2 source review — October 16–17, 2026

See [source-level code review and small remediation packet](E1-E2-POST-MERGE-CODE-REVIEW-AND-REMEDIATION-2026-10-16.md). PR #2222 is merged and its Vercel deployment returned success. **Do not equate this with real per-tenant execution proof.** The review found one P0 product-truth contract defect (U5 assurance disposition projected into `approvalStatus`) and P1 next-action eligibility/consent-scope and comparison/receipt wording concerns. These are *presentation/projection issues requiring owner review*, not confirmed server authorization bypasses. Recommended next step is a bounded E1/E2 correctness patch, coordinated with separately owned E3 PR #2220 and E4 telemetry, before claiming per-user availability accurate across all privileged actions. Kestrel external MCP acceptance is still deferred.

## E1/E2 correctness patch deployed — October 17, 2026

**The post-merge remediation is `DEPLOYED_VERIFIED`.** HAIEC PR [#2223](https://github.com/subodhkc/haiec-website/pull/2223) merged to `Main` at `18f845cee652772bfa6d774b1331175e6728e05d` (2026-10-17T01:38:15Z); Vercel production deployment `BJSPHs5UbwEDQxou9aGaQrdUsHHv` commit status SUCCESS. Branch `feat/e1-e2-correctness-patch` @ `7df8e6eae`. All six review findings (R1–R6) are corrected — full per-finding evidence table in the review document's remediation record. Highlights: `approvalStatus` now reads only the canonical human-decision owner (or null); U5 disposition lives in `evaluationTruth`; write eligibility resolves per-goal exact canonical scope (human-only steps denied to API keys); E2 onboarding uses per-action `SourceWritePermissions`; comparison/receipt claims are qualified; `registeredMcpTools` derives from `CAPABILITY_GOALS[].tools` verbatim. Validation: 50/50 focused unit tests, `tsc --noEmit` clean, changed-file ESLint clean, CI TypeScript + New-Violations Gate pass. **Remaining limitations unchanged:** no independent authenticated customer-UI execution; paths are guidance not automation; local CLI preview; freshness/lag is E4; kill-switch effect truth is E3/PR #2220.

## E3 next implementation — verified E1/E2 PR #2223 handoff

- [E3 security implementation and Devin-ready prompt](E3-SECURITY-IMPLEMENTATION-HANDOFF-AFTER-E1E2-PR2223-2026-10-16.md) — starts at HAIEC Main `18f845cee` / merged PR #2223; pending PR #2220 is **unmerged** with existing lint/new-violations failures. Reconcile source and actual tenant/role/reviewer and privileged target-effect claims before any E3 release. E4 telemetry remains separate; external Kestrel tenant MCP acceptance remains deferred.
- Source-level residual presentation boundary: a non-viewer session is not necessarily the **assigned** deployment decision reviewer or authorized Kill Switch operator, and a muted `permitted=false` link remains clickable in E1/E2 panels. Route authorization remains the final enforcement point; do not call these proven access bypasses.


## E3 security hardening deployed — October 17, 2026

**E3 P0 corrections are `DEPLOYED_VERIFIED`.** PR [#2220](https://github.com/subodhkc/haiec-website/pull/2220) reconciled in place and merged → `Main` `c3de967e62615c3bf669527a1ec79e2d90e2c814`; Vercel deployment `DPLkCjVSfFyjgBKkNGigFFm2jFXU` SUCCESS. Delivered: kill-switch trigger tenant boundary (foreign system = indistinguishable 404 before any side effect), browser credential persistence removed, all five legacy simulated provider paths + orchestrator fail closed (`LEGACY_SIMULATED_PROVIDER_DISABLED`), unsupported universal-protection/response-time/compliance marketing claims corrected, E1/E2 human-only eligibility restricted to assigned-reviewer semantics with lock-affordance non-executable CTAs. Full before/after table in the [E3 handoff](E3-SECURITY-IMPLEMENTATION-HANDOFF-AFTER-E1E2-PR2223-2026-10-16.md). **Explicit non-claims:** no live privileged-operation execution test; kill-switch target enforcement remains NOT_WIRED/NOT_VERIFIED without verified receipts; team-RBAC branch unreachable for API keys (role fallback still gates). E4 telemetry depth is the next lane; Kestrel acceptance `DEFERRED`.

## E3 release verified → E4 telemetry implementation handoff (2026-10-16 local / 2026-10-17 UTC)

**Current HAIEC `Main`: `c3de967e62615c3bf669527a1ec79e2d90e2c814`.** PR [#2220](https://github.com/subodhkc/haiec-website/pull/2220) merged; Vercel deployment `DPLkCjVSfFyjgBKkNGigFFm2jFXU` returned success. E3's source-level tenant bound, scanner quarantine and truthful protection copy are deployed; real privileged-operation and target-effect proof are **not** verified. Older document text saying #2220 is OPEN is a **historical snapshot, superseded by this later dated observation**.

**Next:** [E4 Telemetry Source Health / Correlation / Effect Proof implementation handoff](E4-TELEMETRY-SOURCE-HEALTH-CORRELATION-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md). Inspect canonical OTLP receiver, streaming collector, binder/ingest-service, telemetry-readiness, monitoring-read-model, multi-source correlator, stream continuity, runtime drift and existing payload-bound source attestation **before coding**. First fix historic-signal mistaken for current freshness; then qualify real action/effect witness using existing producers if supported. Do not build another SIEM/ingestion/AI-scoring layer. E4 is not deployed yet. Preserve E1/E2 compatibility and E3 security ownership. External Kestrel test remains deferred until E5–E7 and release gates.

## Deferred Kestrel-through-HAIEC MCP acceptance: VIDEO RECORDING REQUIRED (2026-10-16)

When **T1 external authorized testing actually begins after E1–E7/release gates**, record the **entire meaningful external customer session on screen** (continuous when feasible or clearly numbered segments): test tenant/HAIEC org setup, actual remote MCP discovery and calls, source preflight, deterministic evaluation, human authority, monitoring, protection/effect status, receipts/verification, error paths and cleanup. Also create **timestamped machine-readable MCP operations**, numbered redacted screenshots, a **step-to-video timecode index**, a **recording manifest** (UTC dates/duration, file hashes, segments, consent, pauses/redactions), and final illustrated evidence-bound report. Preserve a restricted original plus a reviewed, redacted shareable MP4 in approved **private storage**, never public Git; mask/avoid secret entry, sensitive information and real voice/call content, obtain required recording consent. Recording gaps must be explicit, and footage does not replace target-effect proof. **Do not start this test or recording during E4/E5–E7 implementation.** Canonical T1 reference: [Enhancement-first roadmap §3 T1C/T1D](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md).

## E4 telemetry source health deployed — October 17, 2026

**E4 source-freshness and effect-witness qualification are `DEPLOYED_VERIFIED`.** HAIEC PR [#2224](https://github.com/subodhkc/haiec-website/pull/2224) merged to `Main` at `d56db173ef8b5a839b8d124ad66ffc15f76890d9`; Vercel production deployment `7WPcj6iNmiTSwi8ZwNMcnjsY2Duy`. Full implementation record appended to the [E4 handoff](E4-TELEMETRY-SOURCE-HEALTH-CORRELATION-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md).

Delivered: canonical `SourceHealthView` on `telemetry-readiness.ts` (binder configured ≠ historical receipt ≠ current freshness; declared per-source cadence, no invented heartbeat, `UNKNOWN` without a valid expectation); honest monitoring source statuses (`SIGNAL_RECEIVED`/`CONFIGURED_NO_SIGNAL`/`INACTIVE` — `ACTIVE` removed as an implied activity claim); per-event `correlationBasis` + `attribution` and `effectWitness` (`VERIFIED_SCOPED`/`DECLARED_ONLY`/`NOT_VERIFIED`) on the existing monitoring projection; E1/E2 + workspace + MCP sharing the same canonical projection. Three-state readiness contract preserved; no new pipeline/schema/engine. **Remaining non-claims:** FRESH/STALE only where a source-declared expectation exists; `VERIFIED_SCOPED` requires V2 payload-bound attestation + wired target-side authority; Kill Switch target enforcement remains `NOT_WIRED`/`NOT_VERIFIED`; MCP producer hold unchanged; telemetry never mutates a frozen U5 evaluation. **Next lane: E5** — policy-to-enforcement deployment path (authorization → dispatch → target-side witnessed effect receipts), then E6/E7 per the roadmap. KestrelVoice external acceptance `DEFERRED`.

## T1 external Kestrel acceptance — recording refinement: LAYER-WISE OPERATIONS, NARRATED AND EDITED (2026-10-16)

**Mandatory:** A source-of-truth **complete restricted raw screen capture** AND a separately **professionally edited, spoken-voice-narrated, chaptered, redacted MP4** focused on *actual HAIEC remote MCP and Kestrel customer operations*, not generic promotional footage. Present each performed operation by operational layer (identity/consent; Discover; source + independent evidence planes; deterministic Evaluate/U5; reviewer Authorize; E4 Monitor; wired-only E5 Protect; Verify/U6; cleanup). Every chapter must pair visible MCP/UI steps and outcomes with layer label, authorized actor/scope, evidence IDs, missing proof, and meaningful narrated explanation. Preserve independent customer jobs instead of presenting the chapters as a mandatory sequential execution pipeline. Footage editing may condense waiting and repetitive work, **never falsify success, erase important failures or misrepresent NOT_WIRED/NOT_VERIFIED states**. Deliver storyboard, narration script, captions, edited-to-raw timecode/step/evidence cue sheet, editing decision list, operation journal, screenshots, recording manifests/hashes and final report. Restricted originals and redacted shareable media go into approved private storage, **not public GitHub**. Both videos are acceptance exit criteria: unsupported capture/editing must be reported as BLOCKED, never staged or asserted complete. Canonical detailed contract: [T1 layer-wise video and editing specification](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md#t1e--mandatory-operations-first-layer-wise-narrated-and-edited-video-user-decision-2026-10-16); deferred until HAIEC relevant E5–E7/release gates and a consented isolated Kestrel test environment.

## Next implementation lane — E5 native policy-to-effect proof (2026-10-16 local)

E4 is merged and deployed at HAIEC `Main` `d56db173ef8b5a839b8d124ad66ffc15f76890d9` (PR #2224); **next E5 work is NOT YET implemented**. The [E5 implementation and Devin source-owner handoff](E5-GOVERNANCE-TO-NATIVE-ENFORCEMENT-AND-TARGET-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md) requires reuse of versioned operating envelopes, human deployment-decision CAS/SoD, native execution guard, guardrail decision evidence ladder, E4 binder/correlation/V2 witness, and distinct states for configured → authorized → dispatch → native gate → witnessed target effect. No blanket Kill Switch effect without target receipt, no second engine, no premature Kestrel action. Respect separately owned open control-test PR #2141 and homepage PR #2217. **Keep external Kestrel acceptance deferred until E5–E7 and required gates**, with both complete restricted raw recording and edited, *spoken-narrated, layer-wise operations* video synchronized to evidence.
