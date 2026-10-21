> **2026-10-21 AUTHORED SCENARIO BLUEPRINT ADDED:** [Eight timed incident injects with 24 reviewed teaching questions, correct answers and explanations](HAIEC-AI-INCIDENT-RESPONSE-TABLETOP-8-INJECT-AUTHORED-SCENARIO-BLUEPRINT-2026-10-21.json). The structured teaching fixture is ready to drive the future static HTML, not a simulation of HAIEC's canonical evaluation logic, live monitoring or actual customer financial transactions. Each inject has an owner, selected controls and evidence-limited answer keys. Four separate elective variants and five counterfactual topics are specified. Use the scenario blueprint as a build-time curriculum input after expert and current source review.

# HAIEC Learning Series #3: AI Incident Response & Continuous Monitoring Tabletop

**Review date:** 2026-10-21  
**Status:** SOURCE-ALIGNED INTERACTIVE EDUCATIONAL PRODUCT PLAN, **not an HTML build, training release, live test, customer incident, connected target PEP, deployed recovery integration or new HAIEC engine**.  
**Public learning name:** **When an AI Agent Crosses the Line**  
**Subheading:** *AI Incident Response & Continuous Monitoring Tabletop*  
**Primary value:** Help security, AI-platform and operating teams decide what to investigate, who must approve a consequential response, what is actually contained and when recovery can be justified.  
**Audience:** SOC analyst, incident commander/CISO, enterprise AI platform engineer, agent/system owner, IAM/target integration operator, risk/governance approver, compliance reviewer, advisory/implementation partner.  
**Teaching anchor:** Synthetic procurement agent attempts an unauthorized supplier bank/payment-destination change. A single consequence remains central while policy, IAM, code, telemetry, alerting, human decisions, enforcement and target effect become visible at different points.  
**Design:** Customer-ready, light theme, animated yet source-faithful, self-contained HTML, desktop/mobile/print, interactive rather than a slide-only deck. No em dashes in visible customer copy.  
**Companions:** [DAI Authority Decision Lab](HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html) for delegation theory, [45-Control Practitioner V2](HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html) for per-control evaluation, [Enterprise First 30 Days](HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html) for 30-day adoption. Reuse series visual grammar and embedded offline education mechanics.  
**Current publishing context:** HAIEC repo now contains public learning assets under \`public/learn/\`, e.g. \`first-30-days-workbook.html\`, \`dai-authority-decision-lab.html\`. Do NOT create a competing product page. The initial deliverable is a Common Repo learning HTML reference, then separately consider placement within existing Learn/Resources IA.

## 1. Decision from the current HAIEC code and product audit

### 1.1 Existing functionality to teach, not rebuild

| Operational concern | Actual owned surface / source inspected 2026-10-21 | What it establishes | What it does NOT automatically establish |
| --- | --- | --- | --- |
| Qualified monitoring sources | \`app/(workspace)/monitoring/page.tsx\`, \`lib/assurance/monitoring-projection.ts\`, source health under \`/monitoring/sources\` | Independent passive source-health lane, per-source freshness and accepted observations | That the whole target system is continuously monitored |
| Four monitoring truth lanes | \`/monitoring\` and [P10 source record](../UX-P10-MONITORING-OPERATIONAL-VISIBILITY-IMPLEMENTATION-RECORD-2026-10-18.md) | Passive source health; persisted authorized runtime tests; approved guardrail policies; separately projected native enforcement | Any one lane proving all other lanes |
| Alert configuration | \`app/(workspace)/monitoring/alerts/rules/page.tsx\`, \`lib/ai-security/alerting/alert-rule.ts\` | Alert rule trigger/severity/channel/dedup and rate-limit setup | New finding or canonical assurance disposition merely because alert fires |
| Notification history | \`app/(workspace)/monitoring/alerts/history/page.tsx\` | AlertEvent attempted/succeeded delivery channels and suppression/failure limitations | Human ACK, investigation, approval, containment or target action |
| Monitoring risk findings | \`app/(workspace)/monitoring/risks/page.tsx\` | Source-bounded static/detection/runtime-correlation findings and explicit telemetry absence/degradation | Confirmed compromise merely from candidate or anomaly |
| Governed human response cases | \`lib/control-test/ucp/response-workflow.ts\`, \`app/(workspace)/monitoring/cases/page.tsx\`, \`components/monitoring/ResponseCasePanel.tsx\` | Bound finding/control-result subject, notification attempted/provider accepted/delivery confirmed, single-use authenticated human ACK, escalation, remediation attestation and fresh retest verification | ACK = deployment approval; remediation note = fix; retest closure = U5/U6 decision/receipt; closed workflow = external target recovered |
| Human operating/deployment decisions | \`lib/assurance/deployment-decision.ts\`, \`/monitoring/governance\`, My Work | PENDING / APPROVED_SCOPED / APPROVED_CONDITIONAL / REJECTED / REVOKED / SUPERSEDED with exact request/system/operation/policy basis and role constraints | Blanket runtime execution authority, override of prohibited operation, or proof of target guard |
| Native enforcement evidence | \`lib/assurance/enforcement-read-model.ts\` | Conditional ladder NOT_WIRED, CONFIGURED, AUTHORIZED, DISPATCH_ELIGIBLE, DISPATCH_REQUESTED, DISPATCH_ACCEPTED/REJECTED/UNKNOWN, APPLIED_AT_TARGET/BLOCKED_AT_TARGET, EFFECT_VERIFIED, NOT_VERIFIED | Universal customer target-native PEP, automatic containment, enforcement based only on policy or an HTTP 200 |
| Legacy kill-switch surface | \`app/api/kill-switch/trigger/route.ts\`, \`app/api/kill-switch/recover/route.ts\`, \`lib/kill-switch/\` | Tenant-/role-guarded trigger/recovery activity for \`kill_switch_systems\` objects, with event/status changes where exercised | Generalized direct binding to every \`ai_systems\` record, real downstream customer process termination, or verified target restart |
| Assurance/verification | Existing HAIEC U5 and U6 owners, receipt and [explanation workflow](../POST-ONBOARDING-ENHANCEMENT-DELTA-CURRENT-STATE-2026-10-19.md) | Bound U5 dispositions, scoped reports/receipts and package replay where actually issued | Live intervention, outside-the-scope facts, or compliance certification |
| Scoped MCP reads/actions | \`lib/mcp/ide-tools.ts\` and registered MCP server | Preflight, sources, telemetry status, bounded evaluations/reports, scenario reconstruction where eligible; \`haiec_list_response_workflows\` appears in existing MCP reference | Every UI transition being accessible or safe to execute through MCP, autonomous incident response, or unrestricted incident closure |

**Source precedence:** actual current registered code/routes and persisted qualified owner > current implementation record > historical Common Repo plan > prototype. Confirm exact tenant and role availability separately before claiming a specific action works in a real environment. Some tooling/docs have stale optimistic descriptions of kill-switch effectiveness; do NOT translate those into proof of a customer-native intervention.

### 1.2 Canonical semantics the lab must enforce

1. **Three pillars**: Understand → Assure → Govern & Operate. Six selectable jobs: Discover, Evaluate, Authorize, Monitor, Protect, Verify. They are independently available where eligible, not a mandatory linear wizard.
2. **Five independent evidence planes**: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. They are peer source dimensions; DAI is a cross-cutting comparison, not a sixth plane.
3. **Findings first:** an eligible source-level finding persists even if delegated authority/IAM/runtime unavailable. No observation does not mean no incident; no candidate path is a proven exploit.
4. **Monitoring source-health** is \`NOT_CONFIGURED\`, \`NO_SIGNAL\`, \`DELIVERING\`, \`STALE\`, \`FRESHNESS_UNKNOWN\`, \`DEGRADED\` in the P10 derived view; \`DELIVERING\` depends on source-qualified FRESH receipt/cadence and says nothing by itself about complete action coverage.
5. **Alerts** are notification policy for emitted facts, not the detection itself. Attempted delivery != provider acceptance != delivery confirmed != authenticated human acknowledgment.
6. **Response workflow**, if truly instantiated with a subject bound to selected system/control: \`OPEN\`, \`NOTIFIED\`, \`ACKNOWLEDGED\`, \`REMEDIATION_RECORDED\`, \`RETEST_VERIFIED\`. Only server-verified retest establishes that workflow closure. A response case is not a standalone generic incident-management platform covering all enterprise incidents.
7. **Human decision:** Deployment approval is not an U5 ALLOW, and not an automatic target dispatch. Role authorization, scoped request, effective policy and expiry matter. Revocation/expiry changes present state; historic frozen result remains historic.
8. **Containment and recovery** must be target-and-adapter-specific. "Kill-switch triggered" or "stop requested" is not evidence all target actions stopped. "Recover returned OPEN" does not establish the customer system resumed correctly and safely. Require qualified target-side observation, pending queue reconciliation, owner decision and a current retest when claiming effects.
9. **Evidence/replay:** source validity, provenance, identity/system joins, frozen evaluation/time, human events, target-side effect and report/package integrity are separate. Avoid invented live receipt numbers, "100% safe", compliance certification or fabricated operational SLAs.
10. **Security incident response for HAIEC itself** at public \`/security/incident-response\` describes HAIEC corporate/platform security incidents. Do NOT conflate it with a customer's AI agent operating incident or imply the corporate policy is a preinstalled customer incident commander.

### 1.3 Important pre-existing unresolved constraints

- [PR #2277 independent review](../PR2277-INDEPENDENT-REVIEW-AGENT-ACTION-MONITORING-GOVERNANCE-CLOSURE-2026-10-19.md) documented historical P0 concerns around same-org subject-to-system binding, signed ACK bearer URL exposure in a response creation path, and self-reported span identity/delegation facts. **Do not present that dated finding as automatically still open.** Before publishing any step-by-step "execute in customer workspace" exercise, check latest code/merges to prove each was fixed with scope/negative tests and verified prod. The **offline tabletop avoids every live route**.
- Cross-system delegation and target-native action-effect joins remain evidence- and connector-dependent. The tabletop demonstrates verification questions, not a new general target PEP.
- An anonymous learning experience must not expose customer tenant IDs, sensitive logs, valid ACK links, private report IDs, policies, credentials, real supplier/bank/payment details or internal only workflows.

## 2. Differentiation and business case

**Positioning:** "Practice a decisive enterprise response to unexpected AI agent actions, with every conclusion tied to a source, human owner, time and verifiable operational effect."

**What learners buy into:** not another generic SOC incident playbook or fictional AI-monitoring dashboard. The lab teaches an issue traditional alerts miss: **source-capable AI discretion + effective permission + policy and delegated authority + observed runtime/target effect are distinct**. Unlike a conventional alert drill, the learner must decide responsibly with incomplete qualified evidence and communicate precise limits.

**Security buyer outcome:** identify where an enterprise can investigate, contain and recover, where source joins or customer adapters are needed and where a control/decision is not established.

**Operational buyer outcome:** human ownership, escalation, evidence quality, runbook tests, recovery conditions, monitoring freshness and repeatable handoff.

**HAIEC commercial fit:** demonstrates the value of HAIEC's core deterministic assurance, qualified monitoring and response reporting without selling separately a supposedly mandatory permission, alert or verification feature. Optional customer-specific integration/target-side protection work can be described as a grouped operational extension only after evidence of a real customer need and connector gap.

## 3. Audiences, modes and measured learning outcomes

| Experience | Intended learner | Duration target | What they practice |
| --- | --- | --- | --- |
| **Executive / Security Leadership Brief** | CISO, CIO, audit/risk executive | 12–15 min | Answer "Was a bad action possible, did it happen, who can approve a restriction, was it stopped, who owns recovery?" and approve an escalation path |
| **Guided SOC/Operations Tabletop** | SOC analyst, incident commander, AI system owner, IAM/platform on call | 45–60 min | Run complete 8-inject scenario: triage, qualification, investigation, human action, containment, fresh retest, recovery and report |
| **Facilitated Team Workshop** | Multi-role security/ops/governance participants | 70–90 min | Role assignments, evidence challenges, alternate branches, dissent/decision log, after-action review |
| **Technical reference** | Engineers, auditors, operators | Self-paced | Exact HAIEC UI/role/MCP read boundaries, sources, control selection and interpretation of results |

**Educational skill checkpoints:**
- Establish source health and what telemetry's absence means.
- Separate risk finding, alert dispatch and authenticated human ACK.
- Determine what IAM, approved policy, delegated choice and code path each prove, even before runtime.
- Choose targeted containment based on severity, affected target and actual granted authority.
- Make a reviewer-owned and scope-bound human decision instead of allowing the agent to self-approve.
- Identify whether customer-native intervention/denial/hold has been witnessed.
- Require fresh independent result and authorized resumption plan rather than celebrating a remediation claim.
- Produce an executive narrative with known, suspected, unassessed, verified and still-open items.

The tabletop's score tracks **decision quality and reasoning**, not the security of HAIEC, a customer's AI system or operational response speed in the real world.

## 4. One complete scenario: Supplier payment change, eight timed injects

Use **one strongly authored, non-real educational scenario** and **eight event injects**. Learner can choose a role and navigate time. Synthetic entities/IDs use a separate \`TRAINING-\` prefix. No actual customer incident or live financial target event is implied.

| Inject | Scenario event | What learner decides (3 decisions each) | Source/claim distinction to teach | Resulting artifact |
| --- | --- | --- | --- | --- |
| **I01 Detect** | Agent tool source shows editable supplier payment fields; monitoring receives anomalous candidate operation signal | Is it a source-capable risk, observed action or proven changed bank record? Which source qualifies? Who gets notified? | CODE_CAPABLE vs qualified OBSERVED; candidate semantic operation vs confirmed; do not bury source risk | Detection triage card |
| **I02 Qualify** | One event feed is \`STALE\`; one recent receipt from other source exists but action coverage unknown | Does \`DELIVERING\` establish completeness? Which gap matters? What telemetry producer/cadence would discriminate? | Freshness, source identity, coverage, time and denominator | Monitoring source-health matrix |
| **I03 Alert** | Trigger rule fires, webhook provider accepts, email delivery not confirmed and no human ACK | Who was actually notified? Should severity escalate? Where is the actual response workflow state? | NOTIFICATION_ATTEMPTED vs PROVIDER_ACCEPTED vs DELIVERY_CONFIRMED vs human ACK | Notification/escalation chronology |
| **I04 Investigate** | Policy limits payment destination to verified supplier account; effective credential can change to arbitrary account; exact principal/source matching partial | What technical overreach is established? Does IAM imply delegated recipient choice? Is fraud/target payout proved? | Five evidence planes, DAI, operation/target/actor join, policy vs IAM vs delegation | Evidence and authority finding sheet |
| **I05 Human review** | Operator proposes a scoped HOLD/REJECT decision, an approval from older request version is displayed | Can a reviewer approve, reject, defer? Who can decide? Is historic approval valid for new recipient/version? | U5 vs human decision; role, policy version, expiry, prohibitions | Human approval/request packet |
| **I06 Contain** | A kill switch shows trigger recorded and guardrail says DENY; possible target dispatch/API acknowledgment appears | Has execution definitely stopped? Which credential/path can be restricted safely? What target proof is missing? | Trigger vs enforced state, dispatch vs provider accepted vs target effect | Containment and native-effect checklist |
| **I07 Remediate/Retest** | Developer records remediation; rule/permission changed; one retest lacks correct system/commit/time binding | Does attestation close the case? Is test valid? What new evidence/correct replay is required? | REMEDIATION_RECORDED vs verified retest, scope-digest and readback | Retest acceptance sheet |
| **I08 Recover/Report** | Owner requests restart; in-flight queue and target payout reconciliation remain incomplete, fresh telemetry eventually arrives | Can operations safely resume? Who authorizes conditions? Which incident claims are reportable/unknown? | Recovery approval vs execution \`OPEN\`; fresh source vs independent target effect; report U6 integrity | Recovery decision and executive after-action report |

**24 decision questions** total (8 stages × 3): source/claim interpretation, human/technical action, next proof or falsification. At least two plausible wrong answers each with explanation. **Three possible educational endings**:
- **Evidence qualified, response governed:** scoped containment and verified retest, with explicit target readback where case facts include it, authorized recovery conditional on all current requirements.
- **Still unresolved:** alert and remediation exist, but missing target identity/effect or fresh retest means incident must remain open/under review.
- **Unsafe choice identified:** learner treats credential/approval/kill switch as universal protection and receives corrective coaching; this **never causes a real target change**.

**Counterfactuals** after I02, I04, I06 and I08:
- No telemetry connection vs stale vs fresh but partial source coverage.
- Credential grant narrowed but code capability unchanged; existing source finding remains independently valid.
- A qualified observation confirms API invocation but independent target ledger contradicts success.
- Guard is configured but NOT_WIRED versus qualified BLOCKED_AT_TARGET versus EFFECT_VERIFIED.
- Old human approval revoked/expired while current operation/version differs.
- Authenticated retest verified for workflow but target-side effects still unassessed.

**Avoid fake automatic timelines:** All event times are part of the authored educational fixture. Buttons pause or reveal staged injects; never suggest live clocks, real-time monitoring, automatic containment or background incident processing.

## 5. Alternate sector scenarios for learning transfer

After the main exercise, present selectable optional variants, not three separate disconnected full courses:

**Variant A: MCP tool and cross-tenant retrieval.** An agent using an overbroad MCP tool requests another customer's data. Source reveals tenant-filtering gap; runtime event does not show whether data was actually returned. Teach S02/S03/S06, IAM/agent principal and exact tenant/resource join. Do not claim data theft without qualified output/target evidence.

**Variant B: Voice AI receptionist.** A receptionist agent attempts an unapproved after-hours routing change. Support the KestrelVoice product language, but all event values in this variant are synthetic and **not actual production Kestrel records**. Teach approved greeting/routing change, human authority, provider ACK, call/test and target configuration readback, separate from a HAIEC receipt.

**Variant C: Telecom network-action agent.** A maintenance agent attempts a change beyond a delegated maintenance window, while C7 audit completeness, C9 duration, and C16 token cap may be relevant **only if exact specialized test cases were run**. Teach control catalog vs recorded test vs network configuration readback. Preserve TM Forum AL0/AL1/AL2 as controlled teaching stages if introduced; not a carrier production incident.

**Variant D: Agent build/change regression.** A new deployment changes a tool's permission schema, while a prior evaluation and approval belong to an older commit/version. Teach G07/S07/E05, re-evaluation, source version and credible retest.

## 6. Role ownership and decision rights

| Role | In lab | Real HAIEC responsibility/permission boundary |
| --- | --- | --- |
| SOC / analyst | Triage detection, qualify signal, open a response request | May read permitted findings/alerts. May NOT impersonate a human ACK or approve on behalf of another owner |
| Incident commander | Set severity, coordinate containment, maintain chronology and customer notification recommendation | Enterprise's own response authority; HAIEC is not an automatic external incident command center |
| AI system owner | Define action, policy scope, model/tool change and remediation | Owner declaration, not proof of technical enforcement |
| Security/IAM/target operator | Reduce grants, check control point, obtain provider/target witnesses | Only through independently authorized customer IAM/provider action; offline HTML never calls tools |
| Governance reviewer | Make scoped approved/conditional/rejected decision where role-entitled | Persisted authenticated review, version, expiry, separation of duties; not the same as U5 ALLOW |
| Evidence/assurance reviewer | Review source quality, frozen state, native result, verified retest and receipt | Cannot replace absent telemetry/target witnesses with narrative or AI inference |
| Communications/legal owner | Assess customer/regulatory communication duties according to applicable obligations | The workbook does not issue legal conclusions, notices or promises of notification deadlines |

Role switching should **change what learner may choose** in the tabletop, but never claim real RBAC enforcement: the educational UI is local and simulates role-specific decisions. Learning feedback should point to actual HAIEC authorized workflow when applicable.

## 7. Control and detection mapping: cases not entire 45-control atlas

Cross-link only applicable controls to the 45-control practitioner workbook, preserving canonical IDs and conditional support:

- **R01** Action lifecycle and side-effect traceability; **R02** Consequential effect envelope; **R03** Runtime guardrail enforcement evidence; **R04** Emergency intervention effectiveness; **R05** Recovery and resumption authorization; **R06** AI incident response and recovery; **R07** Continuous runtime monitoring.
- **A01** excessive effective authority, **A02** undeclared code capability, **A03** DAI, **A04** observed action outside policy, **A05** principal continuity, **A06** human approval/mediation, **A07** least privilege, **A08** delegation propagation.
- **S02** tenant isolation, **S03** MCP/tool exposure, **S05** prompt trust, **S06** RAG and exfiltration; **G02/G03/G07** ownership, approved-use and change; **E01–E05** provenance, event coverage, source correlation, contradictions and deterministic replay.
- **C7/C9/C16** explicitly specialized test examples only in telecom variant; never generic continuous protection claims.
- **ISAF v2** only as unpublished research/method context for delegated choice and source-truth; do not claim actual DAI v1 engine implements the complete ISAF v2 residual-choice classifier.
- **CSM6** optional operating/change context, not a newly shipped control engine or universal scoring model.

Each control connection shows purpose, suitable evidence, what the source proves, what it cannot prove, owner and actual test/visibility status. This tabletop does not recreate all 45 detailed lessons.

## 8. Interactive experience specification: ten screens, six meaningful visualizations

### Screen architecture

| Screen | Name | Action |
| --- | --- | --- |
| 01 | **The signal arrives** | Consequence-led hero animation, choose Executive / Practitioner / Facilitator |
| 02 | **Set roles and boundaries** | Assign SOC, incident commander, owner, reviewer, target operator and evidence reviewer |
| 03 | **Monitoring control room** | Switch among four independent monitoring lanes, source health and action coverage |
| 04 | **Incident timeline** | Eight staged injects, time scrubber, action/target diagram; no fabricated live data |
| 05 | **Investigate the evidence** | Five peer planes and correlation/identity/evidence drawer, choose supporting source |
| 06 | **Make the response decision** | 24 questions with explainable answer feedback; role-aware educational choices |
| 07 | **Containment and proof** | Target authorization/guard/dispatch/witness ladder, hold/deny/status counterfactuals |
| 08 | **Remediate and recover** | Human ACK, remediation claim, fresh retest, condition-bound restart, source renewal |
| 09 | **Alternate industries** | MCP/tenant, Kestrel voice, telecom and change regression elective mini-cases |
| 10 | **Executive incident packet** | Generate printable incident chronology, decisions, established facts, unknowns, owners, next steps |

### Six diagrams/animations (DOM text + accessible SVG)

1. **Agent consequence chain:** agent → tool/MCP → privileged API → supplier record → possible payment effect; moving dots teach *potential reachable action* until an observation is actually revealed. Highlight Source Known / Observed Unknown instead of one green arrow.
2. **Monitoring four-lane canvas:** Passive telemetry, authorized tests, approved guardrail and native enforcement as equal independent lanes, each with its own timestamps, source freshness and qualifiers. Animated receipt ages to STALE in a fixed instructional time-scrub (not current time or live stream).
3. **Alert-to-human decision timeline:** trigger → attempted dispatch → provider accepted → delivery confirmed → authenticated ACK → scoped decision; missing nodes remain unfilled. One clickable node explains meaning and limitations.
4. **Five-plane investigation matrix:** requested/policy/granted/code/observed peer tiles; clicking each reveals actor, target, time, source, coverage, uncertainty. DAI relationship cross-cuts, not a sixth tile.
5. **Containment and effect-ladder:** proposed intervention / auth → dispatch request → provider ACK → applied/blocked-at-target → independent EFFECT_VERIFIED. Use explicit NOT_WIRED and NOT_VERIFIED states; visually separate legacy kill switch trigger.
6. **Recovery readiness / after-action loop:** remediation attested → authenticated retest verified → human operation approval, current policy and target reconciliation → authorized resumption → observed healthy window → evidence/report. This is a decision checklist and state machine of authored scenarios, not the HAIEC platform automatically carrying out all actions.

The lab should use **branching educational consequences** rather than pretend a deterministic engine was executed. An agent assistant may explain questions or let a facilitator compare answers, but **correctness comes from pre-authored, source-reviewed rules**, not an LLM deciding if an incident is safe.

### Experience features

- Light theme consistent with existing self-learning HAIEC workbook and DAI lab; no dark simulation wall or fear-based animation.
- Pause/rewind/replay stage, change one evidence fact, compare learner A/B decision trail, optional instructor "inject" mode.
- Clear **"Training scenario"** indication at activity level; professional customer-ready copy, no internal release notes on hero.
- Source-fidelity chips: "source seen", "candidate", "qualified observation", "unassessed target effect", "human ACK recorded", "fresh retest verified" only when fixture fields establish them.
- Learner score focuses on correct distinctions and owned actions, not incident response SLA claims, resilience certification or universal security.
- Accessible role selectors, keyboard controls, labeled SVG, reduced-motion static equivalent, 320/390/768/1280/1440 responsive; no autoplay audible alarms.
- Offline self-contained CSS/JS, no CDN or background calls, deliberately typed learner notes only; export Markdown/JSON; print all eight injects plus the final decision packet.
- One finished case and four short electives beats a huge unmaintainable "industry suite". Do not expand into new engines, generic SIEM, ITSM/ServiceNow connectors or dashboard products.

## 9. Training scenario fixture contract

**All default facts are authored educational fixtures, never genuine customer/event objects.**
Each \`inject\` includes:
- \`id\`, \`scenarioId\`, \`learningTime\` (synthetic local event time), \`stage\`, \`roleAllowed\`, \`businessAction\`, \`target\`, \`possibleConsequence\`, \`declaredSource\`, \`qualifiedSource\`, \`sourceClass\`, \`evidenceRefs\` (TRAINING only), \`planeFacts[5]\`, \`policyVersion\`, \`principalScope\`, \`sourceReceivedAt\`, \`sourceCadence\`, \`monitoringLaneStates\`, \`alertDispatchState\`, \`humanAckState\`, \`humanDecision\`, \`controlPointWiring\`, \`targetDispatchState\`, \`providerAckState\`, \`independentEffectWitness\`, \`responseWorkflowState\`, \`retestStatus\`, \`recoveryConditions\`, \`trustClass\`, \`threeQuestions\`, \`evidenceReveals\`, \`counterfactuals\`, \`recommendedOwner\`, \`relatedControls\`, \`limits\`.
- \`trustClass\`: \`EDUCATIONAL_FIXTURE\`, \`EXACT_PUBLIC_ARTIFACT_REFERENCE\`, \`RESEARCH_INTERPRETATION\`. Do not merge actual public Kestrel reports into fabricated incidents; when using a real report, link it read-only with its true scope and frozen refs.
- \`threeQuestions\` checks: fact interpretation, first proportionate response, minimum discriminating source/approval. Use deterministic author-selected answer keys and feedback per distractor.
- No raw secret/API key, real bank account, real supplier PII, customer tenant token, real ACK bearer URL or actual customer incident telemetry.
- No form click that triggers real \`/api/kill-switch\` or human decision routes.
- Branches can reveal different explanatory panels, but cannot "win" by fabricating a target-side event.
- For external HAIEC links, use documented UI paths with **sign-in required** tags and verify public destinations anonymously before publication.

### Source-qualified denial and hard-negative fixtures

Include explicit fixtures for:
- source capability but no runtime events;
- fresh receipt but partial action coverage;
- historic stale receipt incorrectly claimed as continuous delivery;
- alert provider accepted but recipient ACK missing;
- approved envelope but no current execution authorization;
- invalid/stale/superseded human approval;
- source principal/identity only self-asserted;
- cross-system result/control mismatch;
- configured guard NOT_WIRED;
- kill switch triggered with no external target witness;
- API success without independent target mutation;
- remedy attested with failing or unbound retest;
- fresh retest verified but target recovery unverified.

## 10. Practical deliverables and reusable worksheets

**A. Incident Triage Record**: scenario/system, actor, consequential action, source finding vs observation, timestamp/snapshot, severity rationale, owner.
**B. Source & Monitoring Register**: producer, principal/system scope, cadence, last qualified receipt, coverage limitation, freshness, missing source and next action.
**C. Alert and Escalation Chronology**: trigger, notification attempted/provider accepted/delivery, named human ACK, escalation deadline/owner.
**D. Five-Plane/DAI Investigation Sheet**: request/policy/grant/code/observed facts and optional delegated choice; candidate/qualified/contradicted/unavailable classifications.
**E. Human Decision Packet**: proposed restriction, exact action/target, authorized reviewer, current policy/evaluation basis, conditions, decision and expiry.
**F. Containment & Effect Proof**: intended block/restriction, actual adapter/PEP, dispatch and provider result, independent target witness or explicit unknown, queued-action risk.
**G. Remediation and Recovery Checklist**: root cause hypothesis, change owner, frozen build/permission/policy version, retest verified status, human resumption conditions, source freshness and pending queue reconciliation.
**H. Executive After-Action Report**: what happened vs suspected, business consequence, what was avoided or not independently known, who decided what, residual risks, evidence links, exact report limitations, 30/60/90 follow-ups.

The final export is a **training tabletop packet**, not a persisted HAIEC Assurance Evaluation, actual incident response workflow, genuine U6 receipt, compliance certificate or proof of actual external containment.

## 11. Product linking, marketing and reuse

**Current public general reference (do not require sign-in for standalone learning):**
- [HAIEC How It Works](https://www.haiec.com/how-it-works)
- [HAIEC Platform](https://www.haiec.com/platform)
- [HAIEC Docs / Getting Started](https://www.haiec.com/docs/getting-started)
- [HAIEC AI Application Security](https://www.haiec.com/ai-security)
- [MCP Agent Integration Guide](https://www.haiec.com/docs/agent-integration)
- [HAIEC Learn](https://www.haiec.com/learn)

**Authenticated product context and exact canonical owners (not automatically playable from a public HTML):**
- \`/monitoring\`, \`/monitoring/sources\`, \`/monitoring/risks\`, \`/monitoring/alerts/rules\`, \`/monitoring/alerts/history\`, \`/monitoring/cases\`, \`/monitoring/governance\`, \`/dashboard/my-work\`, per-system Assurance and Reports/Receipts when eligible.
- MCP where relevant: \`haiec_preflight\`, \`haiec_get_telemetry_status\`, \`haiec_list_evaluations\`, bounded scenario forensic reads, \`haiec_list_response_workflows\` if registered for the connected caller. Do not claim exact "open case", "approve" or "kill switch" MCP routes without checking current tool registry, entitlement and service contracts.
- Related source code: \`lib/ai-security/alerting/alert-rule.ts\`, \`lib/control-test/ucp/response-workflow.ts\`, \`lib/assurance/deployment-decision.ts\`, \`lib/assurance/enforcement-read-model.ts\`, and qualified U5/U6 read owners.

**Placement once HTML is approved:** add as a third specialization in the HAIEC Learn or Resources learning journey, linking to earlier DAI and Controls workbook. Do not create a new core product navigation category or replace existing monitoring workspace.

## 12. Content and engineering delivery workstream

**Phase 1: Source/behavior freeze (pre-authoring).** Inspect current Main SHA for monitoring, alert, response, approvals, enforcement, replay, kill switch and related MCP tools. Compare old P0 response subject-binding/ACK-token/telemetry-claims concerns against latest fixes. Record verified vs unverified behavior and publish only what code and eligibility support.

**Phase 2: Authored exercise data.** Finalize 8 main injects × 3 questions = 24, 4 electives and 5 counterfactual switches. Full answer rationale and negative examples. Preserve exact source/version/actor/target identifiers as \`TRAINING-*\`. Review all 45 control references selected per case against the canonical manifest. Have security/incident SME review severity/containment choices and ownership.

**Phase 3: Build educational standalone HTML.** Reuse existing learning shell but make **incident timeline, evidence reveal, branching choices and recovery packet** primary. Light animated SVGs (six), accessible DOM text, static print, mobile and reduced-motion. Build no new backend/engine/auth, and do not call real HAIEC APIs. Put the eventual educational HTML in Common Repo at \`haiec-product-capability-architecture/learning/HAIEC-AI-Incident-Response-Monitoring-Tabletop-Interactive-2026-10-21.html\`.

**Phase 4: Structured acceptance tests.** Verify:
- all 8 injects exist; 24 answer keys/incorrect explanations and 4 electives;
- role-specific restrictions apply to *learning choices*, no false real HAIEC authorization assertion;
- 4 monitoring lanes with six health statuses, exact notification and human-response state distinctions;
- all diagrams meaningful when motion disabled, not deceptive live background simulation;
- final packet lists established/source-qualified vs unverified facts; no real IDs/tokens or invented target effects;
- 320/390/768/1280/1440 responsive, no horizontal body overflow, keyboard/screen-reader labels, contrast, 200% zoom, clear all, print full incident record and exports;
- all public links verified anonymously; authenticated pages labeled "requires sign-in";
- no JS error, no external dependencies, no outbound calls or data persistence beyond user-selected local non-sensitive training notes.

**Phase 5: Repository and publication handoff.** Commit HTML and scenario QA record into Common Repo, update this plan and README. Separately decide Learn placement and exact public URL/SEO, preserving existing product pages and avoiding duplicate training posts. A public training asset is not a live customer deployment or runtime assurance acceptance.

### Acceptance decision

Success means a practitioner can distinguish all of the following and explain the *next minimum verified action*:
**Potential source-capable harmful action → qualified alert/observation → human acknowledgment vs approval → bounded containment request vs actual applied guard → remediation record vs fresh verified retest → authorized recovery vs verified target outcome → evidence-bound executive report.**

No learner completion badge should imply a system is secure, monitored, certified or protected at the target.

---

*Prepared for source-controlled curriculum planning. No standalone HTML built or production HAIEC engine/website changed in this task.*
