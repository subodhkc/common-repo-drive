# HAIEC Product UX and Operational Workflow Convergence — Reviewed Decision Plan
**Decision date:** 2026-10-16. **Status:** APPROVED-DESIGN-RECOMMENDATION, NOT IMPLEMENTATION. **Basis:** user-supplied `HAIEC Product Architecture & UX Review` (881-line plan), prior 87-row capability matrix + 20-module discovery register, HAIEC code snapshots and latest inspected Main contracts, LogSense and manufacturing integration boundaries.

## One decision
**Three customer-facing product pillars, six independently invocable capabilities, and multiple contextual journeys — never a universal stage gate.**

- **Understand:** Discover, map, and connect AI systems and authority-related context.
- **Assure:** Evaluate qualified evidence, consequential capabilities, applicable controls, DAI and gaps.
- **Govern & Operate:** Authorize, monitor, protect where integrated, investigate, reassess and verify changes.
- **Six goal tiles** across pillars: **Discover · Evaluate · Authorize · Monitor · Protect · Verify**. Not a sequence; a user may enter any entitled, applicable workflow.
- **Technical lifecycle narrative** (example only): Choose goal → resolve scoped prerequisites → connect/use evidence → qualify → run relevant deterministic evaluation or independent operation → review findings/decisions → monitor/reassess/verify.
- **Evidence/provenance is shared infrastructure** and an output, not a final fourth mandatory stage. **DAI lives in Assurance**, not in a final provenance stage. **Kill Switch is operationally independent** of the audit orchestrator and needs exact verified enforcement integration.

## Review of the pasted plan
| Section | Decision | Correction / enhancement |
|---|---|---|
| Single AI System workspace | KEEP | Organizations also need portfolio-level overview; individual developer must have fast IDE path without configuring an enterprise estate first |
| Six global navigation destinations (Overview/Systems/Assurance/Operations/Compliance/Evidence) | ADJUST | Treat as **information architecture**; default navigation can show Overview, Systems, Workflows, Evidence with contextual operations, compliance and decisions. Avoid duplicating system tabs. Navigation is persona/entitlement-aware |
| Six-step Define→Connect→Collect→Assure→Verify→Monitor | REPLACE AS UNIVERSAL MODEL | Illustrative lifecycle only. Monitoring can start immediately after evidence source hookup; compliance without repo; Kill Switch without full assurance |
| Five evidence planes | KEEP | Requested, policy-authorized, effectively-granted, code-capable, observed are **independent qualified evidence dimensions**, not prerequisites for all workflows |
| Operating Envelopes and human approvals | KEEP / EMPHASIZE | Requested assertion→proposed draft→governed approval→versioned authority; human deployment approval distinct from policy authority and runtime enforcement |
| DAI nine-dimension evaluation | KEEP | Explicit source/effect and dimension basis, missing delegation ≠ proven breach; DAI not sixth plane |
| Runtime guardrails, monitoring and Kill Switch | SPLIT OPERATIONALLY | Observation/alert ≠ decision ≠ enforcement ≠ confirmed consequence; no emergency control unless integrated/authorized and receipt-producing |
| Compliance Twin / Consequence Delta / runtime differential | KEEP DISTINCT | Show together in Changes but never collapse their evidence scope, identity or semantics |
| Control catalog & rule tests | KEEP | Applicability, executable vs register-only, evidence coverage, test execution and policy adherence must be distinguished; frameworks are not themselves executable controls |
| Personas and industries | KEEP | Personas alter UI/assistant guidance, not evaluated truth. Industry profile is a **rules/applicability overlay**, not a product entitlement or separate product fork |
| Capability Availability Resolver | EXTEND EXISTING | Compose current `lib/mcp/capability-guide.ts`, preflight, org role, plan, producer registry, qualification; do not invent an independent authoritative permission layer |
| Product workflow router | THIN FACADE ONLY | UI and MCP both call canonical owners; scoped read/write permissions enforced server-side, separate operator actions require explicit confirmation |
| Acceptance criteria | EXPAND | Include multi-org isolation, evidence basis display, source freshness, copy accuracy, control outcomes, synchronous versus asynchronous readiness, withheld unsupported actions, recovery/readiness and action receipt checks |

## Correct product mental model
Three levels of explanation—not three implementation dependencies:
1. **Homepage:** Understand / Assure / Govern & Operate (what customers achieve).
2. **Product capability navigation:** Discover / Evaluate / Authorize / Monitor / Protect / Verify (what users can choose).
3. **Operational task flows:** Goal-specific prerequisites, deterministic engine steps, output and post-action follow-up (what really happens).

### Canonical control and evidence concepts to show
- **Connections:** `NOT_CONFIGURED` → configured → authenticated → relevant data observed → qualified → evaluation-ready, with unsupported/held explicitly separate. These are explanatory transitions; use actual repository contract values, not invented persisted enum values.
- **Requested authority:** User/repository assertion; not approved delegation.
- **Policy authorized:** Versioned **APPROVED** Operating Envelope only when source validates it; DRAFT not sufficient.
- **Effectively granted:** IAM/provider evidence with scope and unresolved qualifiers; never infer completeness from successful login.
- **Code capable:** Reachability with source and analyzer frontiers; cannot prove executed.
- **Observed:** Authenticated, bound telemetry/effect evidence; event received ≠ effect confirmed.
- **Assurance:** Canonical disposition + independent coverage state and per-rule evidence; `NOT_ASSESSED` is never green.
- **Human decisions:** Requested approval context, independent reviewer, conditional/scoped approval, rejection, expiry, revocation, stale status and SoD as applicable.
- **Guardrails:** `CONFIGURED_ONLY` → `EVALUATED` → `DECISION_ISSUED` → `ENFORCEMENT_APPLIED` → `MEDIATION_OUTCOME_ESTABLISHED` only upon required evidence.
- **Kill Switch:** Actual hook, operator authority, correct system/tenant binding, kill/recovery confirmation, blocked-attempt and time-to-effect receipts where established.
- **Change:** Change of source/capability vs compliance snapshot vs runtime behavior vs policy/reviewer authority. Never silently compare incomparable histories.
- **Verification:** Evaluated report basis, signed or hash-bound artifact distinction, exact public verification identity, package applicability and publication permissions.
- **Forensics:** LogSense deterministic investigation outputs are candidates for HAIEC evidence admission; LogSense cannot issue HAIEC verdict.
- **Manufacturing:** Synthetic lab evaluations/fixture demonstrations cannot be generalized to live production plant protection.

## UI and MCP parity contract
| User request | UI surface | MCP natural-language path | What backend returns | Do not require by default |
|---|---|---|---|---|
| “Check my AI app” | System > Run evaluation | capability guide → preflight → supported scan/evaluate → report | Scoped findings + evidence coverage + next actions | IAM, telemetry, compliance, kill integration |
| “What can this agent do?” | Capability Map | inventory/reachability tools | Qualified candidates/paths/frontiers | Human deployment approval |
| “Can it delete this record?” | Authority > Action comparison | scoped DAI/effect read or selected evaluation | Evidence-plane comparison with unknowns | Full portfolio compliance |
| “Approve the deployment” | Decisions | read request → authenticated human action | Scoped approval/denial receipt | Auto runtime authorization |
| “Monitor this agent” | Operations > Monitoring | inspect sources → telemetry onboarding → monitoring view | Source health, gathered observations, alert coverage | Code scan |
| “Stop this agent” | Operations > Emergency | check integration and permission → explicit confirm → signed/typed command | Observed guard result only when proven; otherwise blocked setup state | Assurance run |
| “What changed?” | Changes | get snapshots → canonical comparability check → applicable delta | Consequence Delta / Twin / runtime differential, not mixed | All evidence planes |
| “Assess our controls” | Compliance > Controls | applicability → evidence → selected control run | Coverage and assessed control results | GitHub |
| “Investigate this incident” | Forensics / LogSense | separate LogSense integration or qualified HAIEC reconstruction | Evidence-bound forensic timeline | HAIEC full assurance |
| “Give an executive report” | Overview / Evidence | report tool with exact evaluation and permission | Exact snapshot-bound report/passport/verification | Every available feature |

### MCP safety model
- Preflight **before** promethean promises: caller scope and org, system registration/ownership, source/producer state, evidence coverage, evaluation presence, authorization to read/write.
- Guide with **one best next action** and optional alternatives. Use connected evidence first, then least-privilege connector, then optional declaration/template. Never demand `haiec.json`, `CAPABILITIES.md`, `BOUNDARY.md`, or `GUARDRAILS.md` as global prerequisites.
- `haiec_check` as one-prompt facade is **proposed** until registered in canonical tool registry; continue current tool names otherwise.
- Before approved policy change, deployment approval, source ingestion, or kill/recover commands: exact payload preview + authorization and user confirmation. AI cannot approve on behalf of user.
- Assistant UX guidance may be adaptive. Evaluations, applicability, evidence state and status must come from deterministic owners.
- Deep links and UI should preserve tenant, system, evaluation basis, status, and minimal redacted evidence refs; avoid credentials or untrusted raw payloads.

## Four independent experience entry points for user journey tests
1. **Developer/startup:** GitHub → discover → selected static run → source finding → optional IAM/telemetry request → export. No general compliance wizard.
2. **Enterprise governance:** organization portfolio → choose system → boundary/decision queue → risk summary → approval/expiry/revocation. No local CLI required.
3. **Compliance/auditor:** applicable frameworks + evidence intake → control coverage/results → Compliance Twin/delta if comparable → report and verification. No repository needed where requirements do not demand it.
4. **AI operator/manufacturing:** telemetry connection → source/readiness → relevant observed action → DAI if delegation basis exists → authorize containment if configured → real enforcement receipt or honestly not established. Demo synthetic states clearly labeled.

## Organization and availability contract
Resolve independently: product feature readiness; purchased entitlement; user identity/permission; org + AI System ownership; applicable assurance/industry profile; connected producer/collector readiness; qualified evidence and source freshness; current policy approval; target-side integration proof. Example customer statuses: `READY_TO_RUN`, `CAN_RUN_WITH_LIMITATIONS`, `CONNECT_OPTIONAL_SOURCE`, `NEED_POLICY_APPROVAL`, `NEED_PERMISSION`, `NOT_ENTITLED`, `NOT_APPLICABLE`, `PLATFORM_UNSUPPORTED`. **Display statuses are proposed**, not replacements for persistence enums.

## Priority build plan (no new engines)
**P0 (Contract and trust):** Reconcile 87 rows with route/component/MCP registry and producer+entitlement+coverage owners. Audit user-visible high-risk copy (especially Kill Switch claims about response time/integration). Define per-workflow local prerequisites and exact UI/MCP action schemas. Keep multi-tenant permission enforcement unchanged.
**P1 (Experience):** Add shared objective-first `Workflow Launcher`, capability availability read-model, and contextual Evidence Coverage Assistant. Reuse existing `capability-guide.ts`, `guided-assurance.ts`, `haiec_preflight` and policy/producer/read models. No global prerequisite wizard.
**P1 (Workspace):** Consolidate system and organization views using existing routes (see prior `docs/DASHBOARD-CONVERGENCE-PROJECT-CHARTER.md`: no route renames). Show four core questions: capable, authorized, observed, human attention. Evaluation basis and current source never combined.
**P1 (Website and diagrams):** Homepage three pillars; six selectable capability cards; detail page stage-by-stage example with branch annotations; keep exactly qualified source/preview claims. Update draft PR #2217 after design approval. No blind merge.
**P2 (Runtime trust):** Per-system enforcement readiness, independent kill/recover confirmation and measurement, alerts to authorized incident review, guarded optional remediation and notifications. Never promise universal customer production coverage.
**P2 (Specialist products):** Promote discovery-register modules into canonical matrix only after route/entitlement/executable producer/evidence/output checks. Define LogSense and industry-demo cross-product handoff contracts.

## Validation gates
- Matrix **not yet exhaustive**: 87 curated entries + 20 candidate modules != complete route-by-route product census. Need enumerate routes, engines, producer registry, active vs held rules, API and MCP names, package release states, UI and entitlement coverage. Add status evidence by exact SHA.
- Record availability outcome and next action for each persona × org type × workflow. No unrelated hard dependency.
- Make control outcomes and user assertions impossible to display as verified assurance. Assess exact data/model/rule/engine basis; no generic `PASS`.
- Check kill/recover org-bound identity, fail-closed behavior, recovery scopes and actual target-mediated receipts as independent security acceptance.
- Review website and sample copy, especially `app/(dashboard)/kill-switch/page.tsx` (it currently makes broad timing and integration claims in static text; these need proof or qualification) and legacy `ThreeSteps.tsx` (“Full compliance”). Developer CLI still preview; Github Action v2 not released.
- Use code-level checks and focused tests first, then smoke tests for impacted real user flows. Validate accessibility, mobile diagram readability, and role-entitlement disabled states.
- Production merge to Main triggers automated deployment; verify deploy after authorized merge. Draft PR #2217 remains unmerged.

## Acceptance criteria
1. Developer asks **“Check my AI app.”** and gets supported result or evidence-specific guided next action, without installing a mandatory manifest.
2. Compliance officer can assess applicable controls without source scanning; no invented applicability.
3. Executive sees material changes, evaluation coverage, decisions, assigned owners and provenance across multiple systems.
4. Operator monitoring works independently of an audit run; no unlabeled claims of *live* telemetry if collected only.
5. Human policy approval, human deployment approval, canonical assurance disposition and runtime enforcement never share one ambiguous status.
6. Missing customer connection, missing source signal, missing approval, platform unsupported feature and paid-tier exclusion have different next actions.
7. Tenant role and system permissions apply identically through UI and MCP; read-only work never grants mutating rights.
8. Synthetic manufacturing/demo and LogSense forensics maintain separate exact evidence truth, even when shown in one dashboard.
9. Every architecture diagram and public claim has a grounded source/readiness review before deployment.

## Verified product-truth gate update (16 October 2026)
Read `PRODUCT-TRUTH-WORKFLOW-REACHABILITY-AND-P0-CORRECTIONS-2026-10-16.md` and `UI-MCP-API-WORKFLOW-AVAILABILITY-RECONCILIATION.csv` before UX/Devin work. Current branch [HAIEC PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) stages product-truth fixes; **not Main or deployed**.
- **New hard P0:** Tenant ownership on Kill Switch triggers before any role/SoD check or side effect. The previous trigger route omitted that explicit check; code and negative test are staged.
- **New hard P0:** No privileged Kill Switch API keys persisted to browser localStorage. Branch mitigation uses memory only; a server-side session-authorized operational channel is a subsequent enterprise gate.
- **Legacy P0:** Four historical provider scanners plus aggregator now explicitly reject fabricated control-positive calls; real AWS adapters remain available under their own evidence contracts.
- **UX P0:** Product/SEO/pricing/engine-welcome copy must qualify protection, latency, provider coverage and regulatory claims. Monitoring receipt/display refresh not continuous effect proof.
- **No navigation/lifecycle change:** Three product pillars and six independent user jobs remain. No new universal stage. Human envelope approval, human deployment decision, assurance disposition and operational control are separately authorized.
- **No automatic approval via MCP:** Guide/tool registry covers 13 platform customer goals; direct UI/API actions may remain absent from general MCP destructive tool paths. Do not force feature parity where authorization/perimeter requires separation.
**Build gate:** PR checks presently skipped for lint/tsc; focused Vitest/TypeScript and smoke tests are not yet verified. Do not mark deployed until CI and review pass and Main/Vercel state is verified.
