# HAIEC E6 — Enterprise UX, Roles, Operations, Control Setup & Evidence Dependency Design Review

**Date:** 2026-10-17 (America/Chicago)  
**Disposition:** DESIGN REVIEW / SOURCE-CHECKED GAP REGISTER / INCREMENTAL E6+ FOLLOW-UP — **NOT** an implementation order or runtime acceptance.  
**Owning product:** [HAIEC application](https://github.com/subodhkc/haiec-website), `Main`. **Shared planning:** [common-repo-drive](https://github.com/subodhkc/common-repo-drive/tree/main/haiec-product-capability-architecture).  
**Source snapshot reviewed:** HAIEC `Main` `14b6b1912405fd3c03ebbb9b52df1b351f350c8d` (E6 estate summary / Assurance Case already present in source), common repo `main` `51edcd3823d834796efd95eacd1b7addf60dc15a`. No claim that this snapshot's production deployment or browser UX has been independently verified. The E5.1 PR #2226 merge `638d135ba` and prior records are historical release evidence. Recheck all HEADs and concurrent PR ownership when implementation begins.

**Scope:** Reassess the enterprise UX audit against the prior HAIEC layer approach, the **87 curated capability rows** (HAIEC 62 / LogSense 14 / manufacturing 11), the separate **20-module discovery register**, the canonical **45-control catalog**, E1/E2/E3/E4/E5.1/E6 interfaces, UCP Control Proof and response workflows, policy/human approval, framework mappings and MCP/API parity. This is a **delta and dependency contract**, not a replacement for canonical code, a new product owner, or a certified exhaustive inventory.

## 0. Executive design decision

The core problem is discoverability and decision continuity, not insufficient dashboard count. Build a trustworthy customer experience at **Organization AI Estate → AI System Assurance Case → Agent / Action / Control / Decision** depth, with contextual, evidence-bound access to underlying source facts. Make the product feel calm, decisive and navigable without hiding unknowns. **One system context, one explanation of its authority and consequence, one best eligible next action, many independently selectable goals.**

**Keep:** three customer positioning pillars **Understand / Assure / Govern & Operate**; six independent customer jobs **Discover / Evaluate / Authorize / Monitor / Protect / Verify**; exact five evidence planes `REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED`; nine-dimensional DAI; deterministic U5, scoped U6 and qualified control outcomes; layer-oriented explanation of how evidence and authority connect.

**Do not introduce:** a universal six-step blocking wizard, aggregate enterprise “AI safe” score, new verdict/control/evidence engines, mandatory cloud/IAM/telemetry for static analysis, fabricated operational control states, accidental developer authorization from navigation, or independent UI-computed proof.

**Design quality bar:** customers understand within ~one viewport (a) what assets/agents HAIEC knows, (b) what consequential action is possible, (c) what is proven versus unassessed, (d) whose decision is required, and (e) the next action with honest prerequisites.

## 1. Matrix reconciliation and evidence limitations

The shared `HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md`/`CAPABILITY-MATRIX.csv/json` contains **87 curated entries**, **not a complete all-routes/workflows census**. `SPECIALIZED-PRODUCT-DISCOVERY.md` separately lists 20 candidate families; `CAPABILITY-MATRIX-V2-SCHEMA.json` is a **proposed/unmigrated** 17-field model. The older 2026-10-16 entry statuses are source snapshots; E1/E2 now shipped and E6 is moving; **never treat H059/H060 “PROPOSED” historical classification as current runtime truth without checking registered tools and deployed routes**.

Canonical controls: `lib/control-visibility/catalog.ts` exposes **45 total** (42 general profiles + 3 specialized C7/C9/C16 historical tests), **15 launch priority**, and currently **11 IDs listed as implemented in Control Visibility**: A02/A03/A04/A05/A06/A08, E01/E03/E05, R02/R03. Catalog entries do not imply tests. `lib/control-visibility/types.ts` explicitly states **Control Visibility ≠ UCP Control Test verdict ≠ U5 Assurance**. A bounded visibility result `NO_FINDING_OBSERVED` is **not** a passing control. Durable UCP stores can report `PENDING_ACTIVATION`; mocked interfaces are not acceptable substitutes for migrated production stores.

The larger Agent Audit **221-question catalog** (historic scope) is **not** the same thing as the 45-control manifest or the 87-row capability map. Questions may be `NOT_ASSESSED`, suppressed, in an appendix, or not applicable; do not count them as completed control tests. Actual report resolver/version and release provenance must be checked before exposing question counts.

Framework mappings are another independent concept. The canonical versioned mapping owner is `capabilities/engine-qual/versioned-framework-mapping.ts`, governance read model `lib/ai-inventory/system-governance.ts`; OWASP Agentic/LLM, MITRE ATLAS and NIST AI RMF references are mapping context. **EU AI Act** applicability requires jurisdiction, intended use, risk classification and provider/deployer role and is not presently a universal evaluated release edge. **SOC 2** is a service-organization audit/attestation, not a HAIEC scanner verdict. Mapping ≠ applicability ≠ assessed obligation ≠ evidence-supported implementation ≠ verified control effectiveness ≠ legal compliance/certification.

| Source inventory | UX promise it can support now | UX prohibition / validation needed |
|---|---|---|
| H001–H012: inventory, discovery, source, MCP/IDE and local CLI | AI estate/systems/agent candidates, exact connected source, tool readiness | Candidate ≠ runtime agent; CLI preview and held GitHub Action not generally released |
| H013–H018: source/binder/evidence ingress | Connected/source health/provenance/qualification journey | `CONNECTED`/HTTP success ≠ relevant observed or authenticated qualified evidence |
| H019–H024: declared/approved/granted authority | Five-plane comparison, draft/approved boundary, IAM gaps | DRAFT ≠ authority; provider IAM often partial; permission ≠ delegation |
| H025–H037: static, selected orchestrator, deterministic U5, DAI/effect/re-eval | Source/action consequences, assessed findings, boundaries, differentials | Source capability ≠ action observed; selected run ≠ all engine participation |
| H038–H040: human governance | Assignment, decision, revocation, scope and history | Policy approved ≠ human approved ≠ target executes; one row cannot hide other request keys |
| H041–H047: runtime/source health/guardrails/kill/gateways | Qualified monitoring and safety readiness | Guard configured/probe observed ≠ enforcement; live native integration still not universally wired |
| H048–H049: change and Twin | Versioned, comparable delta with basis | Historical/current and incomparable releases stay distinct |
| H050–H054: controls, UCP, framework applicability, profiles | Catalog → applicability → visibility → test prerequisites → result/response | 42 general catalog profiles aren't 42 executable tests |
| H055–H058: Master Report, Passport, U6, tenant authorization | Exact evaluation snapshot, receipts, share/verify and access | Report hash ≠ certification; protected content requires owner authorization |
| H059–H062: proposed historical UX & diagrams | Reconcile with newly shipped E1/E2/E6 owners | Re-evaluate source/current Main, don't double-build |
| L001–L014: independent LogSense | Forensics link or qualified artifact import when supported | A LogSense case never becomes a HAIEC verdict automatically |
| M001–M011: manufacturing synthetic reference | Reuse diagram/replay/decision design patterns | No fictional MES/OT/agent authority may appear as real HAIEC protection |

**Required future matrix enrichment:** for each capability capture goal, owning source and revision, UI/API/MCP entry, exact entitlement/scope, prerequisites, dependency labels, connection and qualification, time basis, result semantics, write class, required human actor, next best action, regression test and release/activation evidence. Use proposed V2 fields as a **design checklist**; do not silently promote V2 to a persisted canonical registry.

## 2. UX hierarchy: organization, system, agent/action, evidence/control

| Level | Default question | Above-the-fold information | Drilldown / evidence basis |
|---|---|---|---|
| **Organization / AI Estate** | What do we know, what can affect the organization, what needs a decision? | Registered vs discovered counts with denominators; consequential systems; findings and proof frontiers; pending assignments; freshness and native seam limits | Filter to system, owner, provider, environment, source, framework, reviewer, evidence basis; shared assets only on qualified identities |
| **AI System Assurance Case** | What can *this system* cause, what has HAIEC established, what changed? | System identity, consequence summary, latest **exact U5 snapshot**, five-plane coverage, DAI, current policy, independently scoped human decision, source freshness, native effects as independent facts | Sources, investigation, action/authority map, controls, evaluation history, receipts and current-versus-evaluated comparison |
| **Agent / action / target** | Which principal, delegation, tool and actual resource are involved? | Candidate versus qualified definition versus observed instance, principal/identity, tool/MCP/A2A link, operation/resource, bounded source & effect witness, DAI dimensions | Reachability, source slice, dispatch chain, precise limitations and correlated receipts |
| **Control / obligation / evidence** | Which claim is applicable, what must be configured and what was actually tested? | Catalog state; applicability; producer readiness; source qualification; TestSpec/approval; visibility vs test result; signed/replay outcome; remediation state | Exact rule, framework release, control ID/version, source, immutable result/replay and selected response workflow |

### Graph and visualization contract

Reuse Constellation, Action & Access Map, Agent Trace, Evidence Facets and Consequence Delta. Offer **Estate Map**, **Action Path**, and **Authority/Effect Timeline** as views of existing canonical projections; avoid new graph authority. Solid = established qualified link; dotted = declared/candidate/unverified; missing edge ≠ proven absence. Distinguish cross-system shared identity from name similarity, code-reachable from observed, historical from current. Provide text/table equivalent for screen reader and very large graphs; bounded querying, search, filters and focus mode.

### Screen framing

A quiet global shell with stable org selector, search, assigned-work entry and saved system context. Small primary nav: **Overview / AI Estate / My Work / Assurance / Govern & Operate / Reports & Evidence**; settings/integrations and advanced tools separate. The three brand pillars are **message architecture**, not extra nesting. Six jobs remain quickly accessible context actions, **never sequentially locked stages**. Do not duplicate “Setup/Monitoring/Reports” shortcuts, “Connect & Run”, “Report & Proof”, nested monitoring nav and dozens of technical menus without a clear single route owner.

A selected system's header should preserve org, exact `aiSystemId`, environment, **CURRENT vs EVALUATION** basis, selected `evaluationId` and as-of time. Links to a review/alert/control should retain source identity without carrying API keys or untrusted source text in URLs. Use one consistent semantic visual language for `UNKNOWN`, `NOT_ASSESSED`, `NOT_AVAILABLE`, `REVIEW`, `STALE`, `REJECTED`, `PENDING_ACTIVATION` and positive verified claims.

**Existing E6 source progress:** HAIEC `Main` at the inspected snapshot already contains `lib/ai-inventory/estate-summary.ts`, `components/ai-inventory/EstateSummaryBand.tsx`, `components/ai-inventory/AssuranceCasePanel.tsx` and estate routes, with separate operational fact rows. Build **on** these; do not start another estate projection or duplicative case store. Validate UI role, clarity, style and as-of semantics before adding more cards. Smaller-than-12px essential fact copy is not acceptable for decision summaries.

## 3. Distinguish “what happens next” from prerequisites: dependency model

**No universal global step order.** Each goal has its own **hard gates** and **optional enrichment**. Show the dependency graph in plain language: `Ready` / `Action required` / `Permission needed` / `Not connected` / `Evidence unqualified` / `Feature held` / `Not applicable` / `Not wired`. These are explanatory presentation labels until an existing owner establishes exact semantics; not new persisted enums.

| Customer objective | Minimum hard prerequisites | Optional enrichment, not forced | Result and logically related next step |
|---|---|---|---|
| Discover an AI system | Authorized org/system read or registration permission | GitHub, telemetry, declarations, cloud discovery | Registered/discovered candidate → select source or inspect agent topology |
| Analyze code capability | Exact consented repo+branch or qualifying local source, runnable supported analyzer, permitted scan | IAM, telemetry, compliance, human deployment review | Source/code paths with frontier → inspect consequence or run supported U5 |
| Evaluate selected U5/DAI | Qualified selected sources, applicable profile/claim, scoped evaluation permission | Absent planes remain `NOT_ASSESSED`; no mandatory all-plane onboarding | Frozen evaluation+disposition+coverage → evidence gaps, report, decision if desired |
| Inspect/grant operational policy | Authenticated org role, exact system/action, current versioned policy proposal and approver authority | Previous evaluation supporting review; optional qualified source | DRAFT → approved/rejected/revoked policy, not automatic deployment approval |
| Request deployment review | Exact system, operation, environment, policy/evaluation basis (or explicit missing basis), requester identity | Source analysis/DAI findings as decision packet | PENDING/UNASSIGNED → valid reviewer assignment → approval/denial/conditions |
| Monitor source | Authorized runtime connector/binder, accepted signal and declared cadence for `FRESH` | Code scan, U5, enterprise compliance | Configured → signal observed → qualified coverage → alerts/drift/investigation if applicable |
| Protect/contain | Exact target binding, authorized human/operator, integration installed/recognized, operation-specific guard and receipt | U5 verdict not universal runtime prerequisite | NOT_WIRED/CONFIGURED/ELIGIBLE/guard/effect fact independently; no universal “protected” |
| Assess a control | Control applicability and supported source/visibility or specific executable UCP contract | Other controls, entire estate setup | Visibility ≠ Test; qualified test → result → response/retest if required |
| Investigate an incident | Exact case/observation and eligible source records | LogSense qualified forensic source, related scan/delta | Evidence-bound timeline → qualified escalation and possible scoped response |
| Verify/share | Exact authorized frozen evaluation, receipt, control or response identity and publication policy | Live monitoring unnecessary | U6/report/replay/verification with limitations and revocation state |
| Reassess change | Two compatible evaluated versions or selected new evidence + deterministic comparison path | Every connected source needn't be replayed | Delta/invalid basis → scoped reevaluation and potential new review |
| Recover/decommission | Actual authorized target-side control/recovery seam, human confirmation, current policy and scoped side-effect proof | Full audit optional unless required by specific control | Recovery attempted ≠ restored; revocation, disconnect, retention and final proof separate |

The five evidence planes are **parallel evidence dimensions**, not five workflow phases. DAI is a **nine-dimension comparator** using qualified planes and target/effect bounds, not an approval engine. U5 result, policy approval, human decision, native enforcement and independently verified effect each have separate status and actor.

### Middleware / architectural layers must remain legible

1. **Presentation & transports:** Dashboard, role-aware UI, API and remote MCP. No independent status computation or new authority. Read-only assistant help ≠ human action.
2. **Identity / organization / entitlement / scope:** session/API key → tenant membership → system/asset ownership → feature access → actor role, assignment and SoD. Every mutation checks server-side **at the owning boundary**.
3. **Connections / source trust:** connector consent and exact branch/target → registered source/binder/producer → schema acceptance → authenticated attestation → correlation/freshness/coverage → admitted qualified evidence. Data ingress 200 ≠ verified source or source completeness.
4. **Control configuration plane:** requested capability and applicable profile → DRAFT Operating Envelope → version/digest validation and accountable policy approval. This does not install native enforcement.
5. **Deterministic evaluation plane:** selected-engine orchestrator → source/path/authority comparators → U5/DAI, controls visibility and specialized UCP results (distinct) → persisted exact evidence basis. AI explanation cannot create verdicts.
6. **Human governance plane:** request and evidence packet → assignment → independent reviewer decision/conditions → expiry/staleness/revocation. Operator permission ≠ approved deployment.
7. **Target-side enforcement plane:** verified provider-native PEP or guard inside target, with requested operation and recognized policy; separately attest dispatch, ack, deny/apply, readback and effect. No production target universally integrated; fixture stays demo-only. HAIEC is not mandatory hot path for all agents.
8. **Observation / incident / response:** runtime connectors, source health, drift, risk, events and human response; alert delivery ≠ alert acknowledgment ≠ incident closure.
9. **Evidence and verification:** receipts, control replay, frozen reports, provenance, revocation and audit access. Current source view NEVER overwrites historical evaluation snapshot.
10. **Lifecycle/retention/integrations:** source disconnect/revoke, evaluator and policy changes, role changes, re-evaluation, recovery, decommission and privacy retention need explicit UX where supported.

An action may start at any legitimate entry. Show a **local “Why this step?”** and explicit blocked/optional dependency chain rather than pushing the customer into the next brand pillar.

## 4. P0 gap: deployment approvals are a real API but incomplete enterprise UX

**Source check:**
- Request/create/list route: `app/api/inventory/systems/[id]/deployment-decisions/route.ts`; a request can optionally carry an assigned reviewer.
- Reviewer assignment route: `.../[decisionId]/assign/route.ts`, admin/owner authorizes active eligible org member, requester≠reviewer.
- Decision route: `.../[decisionId]/decide/route.ts`, assigned reviewer only, append-only version/digest constraints, rationale, conditional approval, SoD.
- UI: `components/governance/DeploymentDecisionActions.tsx` request form **does not supply reviewer field**, reviewer decision uses `window.prompt()`, and `app/(workspace)/monitoring/governance/page.tsx` offers actions only if already assigned and pending.
- Portfolio owner `lib/assurance/deployment-governance-projection.ts` keeps latest per requestKey but surfaces **only most recently updated requestKey as primary row**; this is not a reviewer inbox and can hide other pending operations.
- No canonical deployment-specific email invitation/notification hook or client-side reviewer assignment caller was established in this audit. General notification infrastructure is not evidence that approval invitations are active.

**Enterprise solution:** a canonical **My Work → Assigned Approvals** filter backed by all latest-version request keys, a reviewer-assignment UI (eligible members, SoD explanation), dedicated request-detail screen, exact scoped decision packet, changes-versus-reviewed digest, summary of U5/policy/DAI/effect/unknowns, structured rationale and conditions, expiry, explicit final confirmation, deterministic optimistic concurrency, direct deep links, visible owner and overdue state. Only assigned authorized human may decide. On request updates, approval must fail closed and present “review current version”, never “retry same approval silently.”

**Approval states to represent distinctly:**
- REQUESTED/UNASSIGNED → ASSIGNED/PENDING → decision APPROVED_SCOPED | APPROVED_CONDITIONAL | REJECTED.
- Orthogonal **effective** state: CURRENT / EXPIRED / STALE_POLICY / STALE_EVALUATION / REVOKED / SUPERSEDED or canonical equivalent, derived by the decision owner, not persisted replacement.
- REVIEWER_INELIGIBLE, ASSIGNMENT_FORBIDDEN, SoD, changed digest/CONFLICT, no eligible reviewers, access denied, missing basis and reassignment should be comprehensible UX errors.
- Notification ATTEMPTED / PROVIDER_ACCEPTED / DELIVERY_CONFIRMED if and only if actually instrumented. Notification is a separate delivery status, **never approval**.
- Decision receipt/history, scope and operation, permissions and exact linked case; approved operations NEVER imply active native mediation.

**Separate review flows must never be conflated:**
A. Operating Envelope **policy approval**; B. Human **deployment/operation decision**; C. Independent **auditor/report sign-off** with invited reviewer; D. UCP **finding/control response ACK** and remediation/retest; E. incident commander/operator **containment/recovery**. These can share visual components but not status, actor, schema, or side effect. `ACK != APPROVAL != REMEDIATION != RETEST_VERIFIED`. Existing `app/dashboard/reviews/page.tsx` is primarily **report reviewer invitations**, not the deployment-decision inbox.

**Notification rollout:** in-app inbox first, with explicit unread/assigned/current request count and safe authenticated direct link; only then email using canonical notification delivery, least sensitive content, retry/dedupe and recorded channel outcomes. Never send a write token or confidential evidence in email. Slack/Teams optional later.

## 5. Control Setup & Proof: missing customer-facing sequence

**Do not present a 45-control “green compliance board”.** Build one context-aware **Control Detail / Setup / Proof** journey using canonical catalog + UCP Control Proof + existing producer/source/action owners.

| Local step | Who/owner | UX presentation and exact boundary |
|---|---|---|
| 1. Select objective | Control catalog (`G/S/A/R/L/E/P`, specialized TMF) | Name, business consequence, control purpose and version; C7/C9/C16 not generic guarantees |
| 2. Determine applicability | System/profile/jurisdiction/industry evidence owner | APPLICABLE / NOT_APPLICABLE / UNASSESSED, basis and human owner; mapping to OWASP/EU AI/SOC 2 is separate |
| 3. Show implementation maturity | Control Visibility catalog + producer registry | CATALOGED / VISIBILITY IMPLEMENTED / SPECIALIZED TEST SUPPORTED / RUNNABLE / ACTIVATION PENDING — read source truth, no invented enum |
| 4. Source onboarding | Connector/binder/producer and exact consent | Needed evidence by control; connection → source signal → trust attestation → qualified; show optional vs required per selected control |
| 5. Configure policy/criteria | Applicable `TestSpec` / run policy / Operating Envelope as appropriate | DRAFT rules/options, scope, version, target and deterministic thresholds; policy-authoring not a test result |
| 6. Approve test execution if required | Assigned human UCP approval receipt and scoped run consent | Test approval ≠ deployment approval; show SoD, reason, expiry and digest; never allow UI to bypass |
| 7. Check activation | UCP durable store/registered fact mapper/executable producer | Test ready vs not migrated / PENDING_ACTIVATION / held, not counterfeit green check |
| 8. Execute selected deterministic control test | UCP test runner / canonical existing control | Explicit confirmation for side effects; no browser “simulate test” substituted as actual result |
| 9. Interpret outcome | Visibility facts vs native UCP result vs U5 scope | DETECTED_FINDING / NO_FINDING_OBSERVED / COVERAGE_INSUFFICIENT / NOT_ASSESSED not UCP verdict; result and evidence basis preserved |
| 10. Review proof | Immutable result ID / TestSpec version / source hashes / replay verdict | Raw source, qualification, current vs historical, replay and exact invalidation reason |
| 11. Human response & remediation | `lib/control-test/ucp/response-workflow.ts` | OPEN → notify → ACK → escalation → remediation recorded → independent retest verified; ACK and remediation aren't control pass |
| 12. Change, expiry, closure | Owner of version/retention/change | Change can invalidate policy/evidence/test applicability; reconnect/retest/remap as warranted |

**Controls UX must differentiate** control setup, a declarative status, a visibility finding, a specialized evaluated control result, an approved response decision, and verified remediation. Where stores aren't activated, show **“Available as catalog/reference; test execution pending activation”**, not an enabled “Run” button or fabricated response receipt. Provide clear links to exact source setup, relevant framework, accountable role, dependent policy, evidence frontier and last run; a user need not configure all 45 controls to test a single supported one.

**Applicable navigation:** System → Controls → [control] with Setup, Evidence & Coverage, Tests & Results, Response & Retest, Related Frameworks as **progressive sections**, not five new sidebar destinations. Portfolio “Controls” should roll up applicable/assessed denominators, not blindly “X of 45 passed”.

## 6. Review more than approval: missing operational states and handoffs

| Experience | Required distinct states or actor handoff | Current concern / design action |
|---|---|---|
| Source onboarding | UNBOUND → DECLARED/CONNECTED → AUTHENTICATED → SIGNAL_OBSERVED → QUALIFIED → FRESH/STALE/UNKNOWN → REVOKED | Source configured cannot mean monitored; show exact missing step/consent |
| Scan / evaluation | READY → REQUESTED → QUEUED → RUNNING → FAILED/PARTIAL/COMPLETED → result/coverage → receipt availability | Show actual canonical orchestrator statuses; queue accepted ≠ evaluation completed; never invent queue |
| Evidence missing / contradiction | NOT_PROVIDED / NOT_ASSESSED / CONFLICT / UNQUALIFIED / HELD / NOT_APPLICABLE | Different causes need different prompts/owners; no “fix missing data” generic blame |
| Authorization | DRAFT / REVIEW_NEEDED / APPROVED / REVOKED / SUPERSEDED; separate human decision and native seam | No synthetic “all approved” aggregate across requests |
| Deployment | Approved human decision → deployment event only when qualified → native guard/target acknowledgment → observed effect | HAIEC is not a deployment platform by implication; show missing actual target integration |
| Monitoring | NOT_CONFIGURED / FRESH / STALE / UNKNOWN; sampled/partial vs complete | No alerts ≠ no action; producer ingress and target scope explicit |
| Incident / UCP response | Finding raised → notification delivery → ACK → triage/escalation → operator decision → remediation → retest → closure | Notification delivery isn't acknowledgment, human ACK isn't authorization |
| Guardrail/emergency | Declarations → configured controls → installed target seam → permitted operator → guarded action → target effect | Kill-switch route state alone ≠ operating protection; require scoped dry-run/production distinction |
| Recovery | Containment state → authorized recover/resume → provider ack → independently witnessed restored state | “Recover clicked” ≠ recovery succeeded; rollback and resumption separate |
| Release/change | Draft/source/policy/version diff → comparability → re-eval if needed → approval invalidation → deployment | Which previous evidence became stale must be visible |
| Verification/share | Frozen bound report/receipt → signed/published if allowed → viewed/verified → revoked/expired | View/report download ≠ public publication or certification |
| Decommission | Turn off sources/keys/guards/policies → revoke access → retention/archive → final coverage status | Archived system ≠ silently monitored or protected |

These are **customer-experience concepts**. Actual labels/status transitions must map to owning persisted schema, not be added as new product state machine without necessity.

## 7. UX role model and “My Work”

Use existing `organization_members` roles (`owner/admin/member/viewer`), scoped API-key scopes, actual assigned reviewer / human actor, and server-side SoD. **Persona is presentation, not role granting.**

| Persona | Default entry and top card | Specific interface to provide | Mutation safety |
|---|---|---|---|
| CISO / executive | Known estate and most consequential unresolved exposure | One-page assurance case, decisions needed, release change, sourced executive report | Reads only absent explicit privilege |
| AI product owner / requester | My systems, evaluated limitations, pending requests | Submit scoped deployment review, track assignment, view reason, compare changed version | Cannot self-approve |
| Assigned deployment approver | **My Work → Assigned Approvals** | Full digest-bound review packet; approve/conditional/reject with structured justification | Assigned active member, SoD, version CAS and exact org/system |
| Organization admin | Team, org configuration, control setup, unassigned requests | Assign eligible reviewer, manage integrations, source and permissions | Role check on server, not UI-only |
| Developer / AppSec | Source connection, reachable tools, findings, DAI and proof frontier | Local/IDE/MCP path, qualified source, action trace, remediation and re-eval | No workflow-wide required policy setup |
| Security operator / SRE | Monitor sources, active incidents, actionable response eligibility | Incident timeline, distinct ACK/containment/recovery, target seam and source health | No live intervention without exact native integration and operator authorization |
| Governance / GRC | Policy, control applicability, evidence requests, expiration | Policy approval vs deployment decision vs control response clearly separated | No cross-purpose reuse of approval signatures |
| Auditor / external reviewer | Frozen report/evidence package, scope, version and limitations | Independent report signature/tracker and read-only verification | Signoff ≠ deployment authorization; external access separately authenticated/scoped |
| Viewer / machine MCP caller | Read-eligible system and report facts | Allowed alternatives and exact permission-needed rationale | No human-only actions via bearer API key |

Proposed **My Work** consolidates *references* to existing tasks: assigned deployment reviews; unassigned assignment tasks; eligible evidence/control gaps; expired approval re-review; incident response/ACK; due verification. It must show **who** can act and suppress action controls for ineligible actors; each task retains its canonical owner. Do not create a new competing assignment or notification ledger just to make the inbox work.

## 8. UI/MCP/API parity and transport-safe interactions

- UI and MCP should resolve **the same goal/readiness/read model and canonical result ID**, not distinct verdicts; `lib/mcp/capability-guide.ts` + `lib/ai-inventory/goal-availability.ts` are current shared sources.
- For each goal, surface minimum prerequisites, exact role/scope, source qualification, unsupported/held state, primary next action, alternate route, and deep link preserving system/evaluation/current basis.
- Assistant may guide, explain, summarize or help prepare drafts; **never approve for a human**, attest source identity, invent framework compliance or calculate independent “AI trust” verdict.
- Confirmation-sensitive operations: source binding, ingestion, policy writes, user assignment/decision, alert rule changes, real target guard/kill/recovery, report publication/revocation. Preview exact target, scope, actor, version, side effects and permission before mutation. Human-only actions remain browser/authenticated human routes.
- Independent MCP remote acceptance E7 is NOT proven by tool registry count or an internal mock. Do not surface “one-click connect to every client” absent verified compatibility. E7 external tests then T1 Kestrel black-box acceptance with private raw recording + separately professionally narrated/redacted layer-by-layer film; never reproduce keys in docs/videos.

## 9. Anti-regression contract: UX can only compose existing owners

### Invariants (release gates)

1. `UI_DISPLAY != AUTHORIZATION`: server owns org/role/entitlement/assignment, system and source binding; UI gating only improves comprehension.
2. `CANONICAL_U5 != UCP_VISIBILITY != UCP_VERDICT != HUMAN_DECISION != NATIVE_EFFECT`.
3. `DRAFT_POLICY != POLICY_APPROVED != HUMAN_DEPLOYMENT_APPROVED != EFFECTIVE_PERMISSION != TARGET_APPLIED`.
4. `REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED` stay independently qualified and may be unknown.
5. `CURRENT != EVALUATED`: preserve evaluationId/scanId/batch/version/digest and frozen report identity, including framework-crosswalk reproducibility flags.
6. `HTTP_200 != AUTHENTICATED_SOURCE != QUALIFIED_EVIDENCE != TARGET_EFFECT`.
7. `CATALOGED != IMPLEMENTED != TESTABLE != EVALUATED != VERIFIED_CONTROL`.
8. `NOT_ASSESSED != NEGATIVE; NO_FINDING_OBSERVED != PASS; MISSING_SIGNAL != SAFE`.
9. `MULTI_ORG_ISOLATION` applies through query, cache key, deep links and browser state; no name-only agent/system joins.
10. `NO_PROVIDER_ADAPTER != PROTECTED`; E5.1 facts rendered independently, no synthetic “enforced” positivity.
11. `HUMAN_REVIEWER != MCP_CLIENT`; exact assigned reviewer, SoD, policy and request CAS at mutation boundary.
12. `ACK != APPROVAL != DELIVERY_SUCCESS != VERIFIED_FIX`.
13. `REPLAY_DIGEST_MATCH != INDEPENDENT_REAL_WORLD_CAUSALITY`.
14. `PUBLIC_FRAMEWORK_MAPPING != CERTIFICATION`.
15. `DEMO_FIXTURE != PRODUCTION_EVIDENCE`; manufacturing browser-state cannot be imported as production truth.
16. `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` retained; external Kestrel testing deferred to gated later phase.

### Dependency owners / middleware checks

| Seam | Reuse, do not duplicate | Regression-sensitive verification |
|---|---|---|
| UI shell/nav/breadcrumb/search | `product-surface-registry.ts`, existing AppShell and workspace shell | Active route, keyboard/focus, mobile, deep links, org switch, role-safe displays |
| Goal resolver | E1 goal availability, API/MCP scopes | Per-goal prerequisites, no universal wizard; denied writes cannot be enabled via UI |
| Source & evidence | E2 onboarding, producer registry, binder + ingestion | Tenant, consented repo/branch, auth attestation, source-health and exact evidence basis |
| Evaluation | selected-engine orchestrator, U5 evaluator | Not selected ≠ failed; frozen evaluation basis immutable; viewer cannot mutate |
| Authority & decision | envelope/decision persistence and derived effective status | Multiple requestKeys; assigned reviewer; stale, expired, superseded, revoked and digest conflict |
| Native protection | E5.1 enforcement read model, adapter, target PEP | Missing digest/unsupported op/fixture/unwired/native readback never yields false verified status |
| Monitoring | E4 readiness/correlation and risk owner | Collector configured ≠ flowing; historical event not current health; tenant source authority |
| Controls | catalog, Visibility, UCP TestSpec/result/replay/response | Activation pending vs runnable; ACK vs retest; framework evidence not certification |
| Report/verify | U5/U6/report owner, history/current view | Eval-bound ref, public/private permissions, revocation, fidelity and reproducibility |
| API/MCP | registered tool defs, preflight, capability guide, tenant tool context | UI tool IDs/scopes parity; machine key can't perform human-only approval |
| External specialist | LogSense producer qualification, manufacturing demo | No copy of specialist engine logic into HAIEC and no synthetic proof promotion |

### Focused validation journeys (do not start a huge end-to-end campaign)

**Static/logic:** contract tests for entrypoint→owner→permission→result, status vocabulary snapshots, cross-tenant/wrong-target negative cases, exact action/scope joins, disabled control activation, current-vs-frozen basis, selection and filters, role/SoD invariants. Reuse focused existing suites, TypeScript and changed-file lint. Use 1–2 targeted authenticated visual walkthroughs **only when an appropriate safe test environment is available**—no real external effects.

**UX acceptance scenarios:** first-time/no-system; developer source-only; runtime-only; declared-only; portfolio with multiple agents/systems; candidate agent vs runtime instance; GRC with selected control only; 45-control catalog but only 11 visibility implementations; pending UCP activation; approver assigned/unassigned/wrong user and several requestKeys; requester denied own approval; conditional approval; expired/revoked/stale authority; source freshness unknown; false-positive alert vs actual incident response; historical effect with no current guard; cross-tenant deep-link; failed partial backend read; E6 new estate & Assurance Case; auditor report-only link; MCP→dashboard exact identity.

**Visual/design QA:** legible 13–14px minimum essential data; sensible row density at 1280px+; accessible keyboard and focus; clear contrast and icons paired with text; deterministic empty/error/partial/loading states; mobile select/filter, table and decision flows; role-aware header and navigation; no “judge-ready” or fictional control evidence outside explicit demo.

### Risk-ranked priority without blocking active E6

- **P0 design/trust:** approval assignment + actionable reviewer queue and exact review packet; control setup/evaluation truth; evidence/status legibility; multi-request state; correct next-action dependency; regression gates at canonical seams.
- **P1 experience:** unify shell/nav, contextual case, action diagrams, report reader perspectives, source/incident response handoffs, safe notification onboarding and expiry/reassessment experience.
- **P2 optional:** richer cost/token observations where qualified telemetry exists; persona preferences; third-party Slack/Teams; new graph algorithms or new automation; further sector/region overlays.

**Ownership and sequencing:** Active E6 implementation owns only its agreed PR/files. This review adds **follow-up UX acceptance criteria** and small proposed improvements; it **must not silently expand or overwrite an in-flight E6 branch**. Confirm live HEAD, changed file ownership and release state before prioritizing P0 follow-up. E7 remote MCP and gated T1 Kestrel acceptance remain later. Shared repo documentation updates are research artifacts, not release evidence.

## 10. Acceptance outcomes for product design

1. Executive understands known estate, important consequence and uncovered scope without reading control IDs or 60 navigation items.
2. System owner sees canonical source/evaluation and material action frontier with a context-preserving drilldown.
3. Approver can be assigned, alerted, review exact evidence and scope, sign one digest-bound decision, see confirmation/history, and handle stale/expired/revoked states **without browser prompt dialogs**.
4. Controls customer distinguishes catalog, setup, visibility, actual testability, executed result, reviewer ACK, remedial attestation, verified retest and framework mapping.
5. Operator recognizes monitoring gaps, source freshness, alerts, human authority, native control availability and separate target effect witness without false “currently protected” claim.
6. Auditor sees evidence and verification basis with exact snapshot identity, not automatic certification.
7. MCP and UI show the same qualified facts and next action, while human-only writes remain unavailable through machine keys.
8. No canonical source, permission, evidence qualification, evaluation or U6 identity regresses due to UX composition.

## Source index

- [Current decisions and precedence](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md)
- [Product UX operational convergence](PRODUCT-UX-OPERATIONAL-REVIEW-AND-DECISION-2026-10-16.md)
- [87-row capability/workflow matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) and [completeness caveat](MATRIX-COMPLETENESS-AND-RECONCILIATION-PLAN.md)
- [20-module specialized register](SPECIALIZED-PRODUCT-DISCOVERY.md) and [proposed V2 matrix fields](CAPABILITY-MATRIX-V2-SCHEMA.json)
- [Enhancement-first E0–E7 roadmap](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md)
- [E5/E5.1 read-model implementation handoff](E5-GOVERNANCE-TO-NATIVE-ENFORCEMENT-AND-TARGET-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md)
- [Control catalog](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts), [Control Visibility](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/types.ts), [Control Proof](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/control-proof.ts), [UCP response workflow](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-test/ucp/response-workflow.ts)
- [Deployment decision API](https://github.com/subodhkc/haiec-website/blob/Main/app/api/inventory/systems/%5Bid%5D/deployment-decisions/route.ts), [UI](https://github.com/subodhkc/haiec-website/blob/Main/components/governance/DeploymentDecisionActions.tsx), [portfolio projection](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/deployment-governance-projection.ts)
- [Current E6 estate projection](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/estate-summary.ts), [Assurance Case panel](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/AssuranceCasePanel.tsx), [goal resolver](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/goal-availability.ts)
- [Synthetic manufacturing reference](https://github.com/subodhkc/manufacturing-ai-assurance-haiec) (design inspiration only)

**This artifact lives in the common repo only.** It does not approve policy, run tests, send notifications, create Kestrel tenants, modify HAIEC application code, or certify any runtime integration.
