# HAIEC Complete Onboarding Curriculum: Capabilities, Controls, Methods and Operating Workflows

**Date:** 2026-10-20  
**State:** Approved-for-planning curriculum skeleton and source map. **NOT** a produced tutorial, rendered presentation, recorded course, product release, website change or acceptance claim.  
**Home:** Common Repo, haiec-product-capability-architecture.  
**Primary delivery audiences:** prospective enterprise customer; developer/AI engineer; security analyst; GRC/control owner; AI operator; assurance reviewer; implementation partner; HAIEC team member.  
**Editorial rule:** No em dashes in eventual customer copy. Lead with value, concrete findings and consequences, not an overwhelming vocabulary dump.

## Executive decision

Use a **layered course** rather than fitting every HAIEC capability into one 35-minute video.

1. **Start here (12 to 15 minutes):** Accessible overview for anybody. Why consequential AI requires assurance; what HAIEC does; three pillars; six selectable jobs; one end-to-end demonstration; what happens next.
2. **Complete product and methods tutorial (approximately 90 to 120 minutes):** Chapters below cover the complete current known product surface, core methods, controls, telemetry, governance, reports, integration options and limitations. These are *curriculum modules*, not a product workflow users must perform in sequence.
3. **Technical labs (four optional 15 to 25 minute exercises):** Source/code and DAI; connected telemetry and monitoring; decisions/controls/receipts; client MCP/API onboarding. Reuse one scoped case across them.
4. **Reference atlas (read, not narrated):** Exact control catalog, methods glossary, product families, source contract and operational scenarios with source links and current availability labels.

The original 35-minute outline is retained as an **intermediate digest**, not the complete coverage ceiling. One primary continuous scenario should anchor every layer; optional KestrelVoice, manufacturing and telecom examples demonstrate sector variations. Do not make the user learn the catalog before seeing a meaningful finding.

### North-star teaching question

**What can this AI system actually cause? Who or what authorizes the consequential choice? What happened? Which precise evidence can establish each claim? What may be decided or changed next?**

**Proposed category:** Deterministic AI Action Assurance, within evidence-bound AI security, assurance and governance. HAIEC's deterministic engine evaluates qualified facts. Agent/LLM interfaces may guide navigation, source selection, explanation and investigation; they do not substitute a model-generated safety judgment for the canonical evaluation.

---

## A. Learning outcomes and audience pathways

After the **short path**, a learner should explain security vs governance vs assurance; distinguish AI application/LLM/agent/MCP/tool; name the three pillars and six jobs; demonstrate a basic discovery or evaluation path; and read one bounded finding with a real next action.

After the **full path**, a learner should:

- Trace AI System -> identity and source -> action/reachability -> five evidence planes -> DAI -> evaluation -> controls/decision -> monitoring/protection where connected -> reports, receipts and re-evaluation.
- Explain why policy, effective access, delegated choice, implementation reachability, observed invocation and independently witnessed effect are not interchangeable.
- Select the minimal legitimate source needed for a goal without manufacturing missing authority or forcing unrelated repository/IAM/telemetry prerequisites.
- Distinguish a registered detector, cataloged control, installed test, evaluated result, approved policy, human deployment approval and customer-target enforcement.
- Use UI, MCP or API with organization role, scope, authorization and consent boundaries intact.
- Understand the difference between verified, source-inspected, partially implemented, preview/held, integration required, client-owned, demonstrated synthetic and research/proposed work.

| Learner track | Must cover | Optional depth |
| --- | --- | --- |
| Buyer / executive | Problem, outcomes, six jobs, consequence story, reports, decisions, limits, service boundaries | pricing, value and sector overlays |
| Engineer / AI builder | Sources, code/graph, attacks, tools, DAI, evaluation provenance, MCP/API, source errors, target effects | static methods, replay and adapters |
| Security / incident analyst | Threat classes, controls, five planes, evidence quality, telemetry freshness, forensics, mitigation and recovery | signatures, control TestSpecs, contradiction handling |
| GRC / assurance reviewer | Ownership, policies, framework applicability, controls, decisions, ISAF v2, receipts and limits | CSM6 alignment and scientific validity |
| Operator / SRE | Monitoring, signals, alert-to-ACK, source health, incidents, guardrails, on-target protection/recovery | cost and release-change triggers |

---

## B. Foundation and product narrative chapters

| ID | Chapter and indicative time | Required coverage | Visual or demonstration | Observable learner result |
| --- | --- | --- | --- | --- |
| B01 | **AI foundations and consequence** (6 min) | Predictive model vs LLM vs RAG vs agent vs multi-agent; context, memory, tools, permissions, MCP/A2A; agent action vs text completion; consequential outputs. Introduce agent principal, tool handler, resource, state mutation and business effect. | Agent requests refund / PO change -> privileged service -> downstream target. | Can identify where a generative answer becomes an enterprise action. |
| B02 | **AI risk crash course** (8 min) | Prompt injection and indirect injection; jailbreak and unsafe output; RAG poisoning, leakage/exfiltration; tenant crossing; tool overreach; secrets/credential misuse; supply chain and dependencies; multi-agent delegation drift; excessive grant; inadequate trace/provenance; runtime bypass; model reliability and bias. Distinguish OWASP threats from HAIEC's actual selected detectors. | Attack chain, exposure, policy mismatch and effect witness. | Can describe a threat, attack path, trust boundary and testable consequence. |
| B03 | **Security vs governance vs assurance** (6 min) | Security tries to prevent/detect abuse; governance assigns policy, accountability and decision rights; assurance assembles qualified evidence for bounded claims. Audit/compliance mappings are not certification; a security finding is not necessarily a governance violation. | Three columns examining the same agent operation. | Can state the difference without blending disciplines. |
| B04 | **What HAIEC is and is not** (5 min) | HAIEC = independent evidence-bound determination over actions, authority, capability and effects. Deterministic decisions; product perimeter; APIs/UI/MCP as delivery surfaces; optional providers; limits of coverage. No "AI testing AI" category positioning, blanket prevention, model truth certification or automatic legal compliance. | One system, one consequential action, five different truths. | Gives 30-second description and recognizes boundaries. |
| B05 | **Platform mental model** (5 min) | Three pillars **Understand -> Assure -> Govern & Operate** as information architecture; six **independently selectable** jobs **Discover, Evaluate, Authorize, Monitor, Protect, Verify**. Explain that seven public "How it works" phases and authenticated system lifecycle are *guidance*, not hard prerequisites or six extra SKUs. | Clickable three-pillar and six-job map. | Chooses a customer goal without assuming fixed sequence. |

### Explain the three pillars

- **Understand:** AI estate, models, systems, agents, tools, sources, privileges, asset identity, dependency and action/target maps.
- **Assure:** Qualify evidence; test and evaluate capabilities, threats, controls, DAI, runtime observations and possible consequences; preserve uncertainty and scope.
- **Govern & Operate:** Establish policy and responsibility, review releases/operating envelopes, monitor, mitigate or protect at verified control points, re-evaluate and verify decisions.

### Explain the six jobs in one-line customer language

**Discover:** What AI exists, what is connected and what can its reachable paths do?  
**Evaluate:** Which threats, authority mismatches and control claims does qualified evidence establish?  
**Authorize:** Who may approve operating envelopes and consequential deployment/operation decisions?  
**Monitor:** What is actually being received and observed, how fresh is it and what changed?  
**Protect:** Which customer-integrated intervention can mediate, deny, hold or recover a specific action?  
**Verify:** Can we independently inspect the exact evaluation evidence, limitations and receipt lineage?

**Key constraint:** The jobs are independent entry points, but an outcome may have legitimate authorization, evidence, entitlement or target integration dependencies.

---

## C. Complete product capability chapters

| ID | Chapter and indicative time | Subtopics to teach, including currently bounded capabilities | Product example / handoff |
| --- | --- | --- | --- |
| C01 | **Starting with HAIEC and tenancy** (5 min) | Public vs authenticated Start Here; organization membership, admin/reviewer/viewer, scopes and consent; three peer starting points: choose system, choose goal, connect source/provide evidence; session and key access; no required all-source onboarding. | /quick-start -> /dashboard/ai-inventory |
| C02 | **AI estate and model/provider visibility** (6 min) | Register system; type, environment, owner and assets; connected vs verified identities; agent and tools discovery; code/source and provider/API-admin inventory paths; SDK/model usage; cost/source-qualified claims; estate changes/diff, bulk import and relevance. | AI Estate, System Assurance Case, provider usage and costs |
| C03 | **Connections, source health and trust** (7 min) | GitHub App, verified repositories and branches; supported local bundles/preview; direct uploads/human declarations; SARIF/CI; structured events; OTLP logs/metrics/traces; runtime endpoints; IAM policy imports; cloud/service integrations; vendor documents; scoping, timestamps, identity, producer provenance, trust/quarantine and source freshness. | Sources, Evidence, Connections; received != qualified != evaluated |
| C04 | **System Constellation and technical action map** (7 min) | Source graphs, agent/tool/handler/API/resource, code-capability exposure, path conditions, candidate vs established edges, consequence types, code execution versus target observation, source map vs historical evaluation map, asset/system scope, supply chain and release changes. | Existing System Constellation and Agent Audit surfaces |
| C05 | **Security engines and detection** (9 min) | SaaS static analysis, selected runtime/adversarial testing, Semgrep/Python AST/Joern or reachable call graph where invoked; rule execution provenance; 176-rule/31-family *dated registry* vs executed analyzers; attack classes spanning app, LLM, RAG, MCP, identities, credential access, tenancy, dependency and data paths; scanner-result normalization. | Scope one observed static finding, distinguish registered from executed |
| C06 | **Assurance evaluations** (7 min) | Qualified evidence bundle and exact evaluated scope, evaluation snapshot/time and producer identities; source/freshness limitations; deterministic comparator; findings vs final scoped ALLOW/REVIEW/BLOCK; skipped/unknown/not assessed; comparison across releases; run vs selected eval vs report; analyzer execution provenance. | Persisted Evaluation Results page with exact IDs |
| C07 | **Delegated Action Integrity (DAI)** (10 min) | Nine dimensions and seven canonical states; policy vs effective grant vs delegated discretionary choice; planned vs executable vs observed operation; candidate path handling; source qualification, temporal validity, human mediation, cross-agent joins, missing evidence and explicit next investigations. More detail in section E. | Refund/Purchase agent with excessive credential vs limited approved task |
| C08 | **Controls and control testing** (10 min) | Canonical 45-entry manifest, family breakdown and C7/C9/C16; profile/control ID, applicability, evidence source, TestSpec, approval, test execution, replay, findings, response owner; cataloged vs implemented vs evaluated vs proven in target; launch-priority and coverage denominators. Detailed inventory in section F. | Controls panel, one actual executed TestSpec and one catalog-only example |
| C09 | **Policy, ownership and human decisions** (7 min) | Requested capability declaration; Operating Envelope and approved version; owner/role; deployment-review request and human approval/REVIEW/reject/revoke; My Work inbox; SoD; decision-bound basis, expiration and changes; policy vs discretionary delegation; who can review. | An approver rejects one scoped action, another remains pending |
| C10 | **Monitoring and runtime observations** (9 min) | Source health, stale vs fresh; OTLP/structured telemetry; action lifecycle, event correlation; alerts, risks, baselines, thresholds, evidence gaps, detection/control coverage, traces and logs; delivery vs human ACK; incident/recovery; historical vs current; telemetry status is not a global runtime effect verdict. | Existing four-lane Monitoring screen, stale source case |
| C11 | **Protection, guardrails and on-target enforcement** (8 min) | Guardrail status ladder; runtime testing vs blocking; kill switch local guard/SDK; scoped C16 cap; customer point of enforcement, policy decision, approval HOLD/deny/allow, binding to exact action, expiry and revalidation, recovery; native adapter and no-bypass/effect readback requirements. Custom E5.2 reference is not universally deployed. | Diagram: HAIEC decision -> customer PEP -> target effect witness |
| C12 | **Evidence, forensics and investigations** (6 min) | Evidence envelopes, provenance, quality, contradiction, source linkage, replay; evidence frontier; historical snapshot; Agent Audit, tower/trace forensics, incident and scenario reconstruction; distinct LogSense optional evidence supplier. | Show two contradictory facts, relevant proof frontier and next source |
| C13 | **Reports, receipts, passports and verification** (7 min) | Master Assurance Report, assurance case and Agent Audit, control evidence, executive vs technical audience, evaluation identity, evidence/source basis, digest, receipt/package, publication, private/public/revoked status, public verification limits, independent replay; compliant formatting vs substantiated claim. | View exact evaluation, then issued receipt and verification status |
| C14 | **Usage, costs, provider telemetry and change** (5 min) | Provider-admin snapshots vs SDK request events, provider/model/project attribution, source lag, usage vs bills, cost health, C16 spend cap specialized test, Consequence Delta, Compliance Twin snapshot/change vs release; no hard spend-stop claim without target atomic enforcement. | Provider snapshot and trace costs as different denominators |
| C15 | **Developer and interface entry points** (7 min) | SaaS workspace, authenticated REST/OpenAPI, remote MCP with scoped HAIEC API keys (not OAuth), Cursor/Claude Code/Devin-style clients, preflight, authorized source bind/run, report retrieval; GitHub integration and current CLI/GitHub Action availability; role-aware error handling. | "Run HAIEC AI Assurance" intent -> real haiec_preflight -> permissible workflow |
| C16 | **Specialized products and research surfaces** (5 min) | AI AppSec, MCP Tenant Isolation, LLMVerify, ISAF Logger, AI Inventory SDK; scanner/test/package result is not full SaaS Assurance; LogSense separate optional producer; Compliance Twin and selected bias/regulatory utilities; research methods are not runtime protection features. | Product family taxonomy and boundaries |
| C17 | **Industry paths** (6 min) | Manufacturing ERP/MES purchasing and Station 217; telecom TMF/ODA/AL0-AL2 and C7/C9/C16; SaaS receptionist/KestrelVoice; applicability to finance/healthcare as qualified profile, not a claim of installed sector solutions. | 3 mini-cases with evidence labels and exact scope |

## D. All methods and technical assurance foundations

Teach methods as **different tools for different claims**, never a pile of acronyms.

| Method / contract | What it establishes or tests | Required distinction | Source |
| --- | --- | --- | --- |
| **ISAF v2, Instruction Stack Audit Framework** | From instruction to consequential execution, evidence non-substitution, proof frontier, authority/delegation and target effects; scientific benchmark and held-out validation design | Final research manuscript is not yet an externally published peer-reviewed or certified standard; HAIEC implemented DAI v1 must not be equated with all proposed ISAF v2 commitments | [ISAF v2 learning overview](https://docs.google.com/document/d/1Z2_xa3X1rFgFh3qWbEjOsVCrrOsPJdNHhqCAcIHTPQo/edit) and [final manuscript working copy](https://docs.google.com/document/d/1jUfpcbXifVKLm0CBNCB_86bQeAeTOoxSq2nHiRA4egs/edit) |
| **Five evidence planes** | Requested; Policy Authorized; Effectively Granted; Code Capable; Observed | Orthogonal evidence views, not five setup stages; each can be complete/incomplete independently | [Methodology source plan](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md) |
| **Authority and DAI comparator** | Dimension-wise delegated-vs-granted/capable/observed comparisons with bounded states, source/time context | Policy approval is real policy evidence, not automatic discretionary delegation; current v1 assembler correctness follow-up exists | [DAI source verification](DAI-POLICY-GRANTS-DELEGATION-TRUSTED-FACTS-ADMISSION-DEEP-VERIFICATION-2026-10-20.md) |
| **Static capability/reachability** | What an agent or tool can reach under supported code/authorization conditions | Candidate edges cannot become established; reachability does not establish execution | [Detection and intake map](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md) |
| **Consequence / operating envelope** | Authorized operations, limits, resources, location, environment, duration, data classes, magnitude, approvals | Requested, DRAFT and APPROVED have distinct rights; approval does not install a target guard | [Product matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) |
| **Deterministic evaluation and control proof** | Rules applied to a frozen, qualified evidence basis, with ALLOW/REVIEW/BLOCK or control-specific outcomes | No free-standing "overall safe" certification; TestSpec execution and actual enforced effect remain distinct | [Evaluation results](UX-P07-ASSURANCE-EVALUATION-RESULTS-IMPLEMENTATION-RECORD-2026-10-20.md) |
| **Source qualification and evidence frontier** | Identity, provenance, timestamp, scope, admissibility, gaps, source conflicts, comparison limits | Accepted signal is not an evaluated claim; a missing source narrows the specific conclusion, not every other finding | [Source intake](E2-LOW-FRICTION-SOURCE-ONBOARDING-AND-EVIDENCE-QUALIFICATION-IMPLEMENTATION-CONTRACT-2026-10-16.md) |
| **Observed-action and target effect method** | Qualified event/correlation plus optional independent downstream state observation | 200 OK, trace or collector receipt does not independently establish applied external effect | [E4 source health and effect proof](E4-TELEMETRY-SOURCE-HEALTH-CORRELATION-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md) |
| **Release/change and compliance twin** | Compare selected versioned evaluation, policy and relevant source differences | Snapshot is not current state; comparison requires compatible basis | [Product matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) |
| **Report and receipt integrity** | Identity/digest/status binding for the exact persisted evaluation/package | Valid receipt structure does not independently validate every submitted source fact or grant regulatory certification | [P11 Reports/Verification](UX-P11-REPORTS-RECEIPTS-PUBLIC-VERIFICATION-IMPLEMENTATION-RECORD-2026-10-18.md) |
| **External controls and mapping** | Align relevant claims and implementation evidence with OWASP, NIST AI RMF, ISO/IEC 42001, ISO 27001, SOC 2, MITRE ATLAS and applicable EU AI Act obligations | Mapping is not compliance, certification, legal advice or a substitute for external tests; verify edition and applicability before production | HAIEC framework/control pages and source-qualification owner |
| **CSM6 research/control vocabulary** | Optional research vocabulary and governance/control operating alignment where a precise crosswalk is established | Do not claim native CSM6 evaluation, control coverage or scientific validation without independent anchored contract | [Reporting vocabulary and research crosswalk](REPORT-RELIABILITY-VOCABULARY-ISAF-CSM-AND-76-ACTIVITY-RECONCILIATION-PLAN-2026-10-18.md) |

### ISAF v2 must have its own 10-minute subsection

1. Instruction stack and change of entrusted choice from prompt to action.
2. Five independent evidence planes and the non-substitution rule.
3. Delegation outside the five planes; explicit authority over protected discretionary decisions vs rule-grounded fixed choices; effect and independent target verification.
4. Proof Frontier and scoped UNKNOWN/NOT_ASSESSED.
5. Evidence strength, time window, source authority, replay and contradiction.
6. Distinction between research claim ladder, benchmark protocol/held-out validity and shipping product capability. Publication pending.
7. Side-by-side: DAI v1 present-day implementation vs candidate ISAF v2 protected-commitment residual classifier and cross-system delegation (not yet shipped).

### DAI must have its own 10-minute subsection

**Canonical nine dimensions from current DAI evaluation source:** OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY.

**Seven bounded comparator states:** INSIDE_ESTABLISHED_DELEGATION, CAPABILITY_OUTSIDE_DELEGATION_MEDIATED, CAPABILITY_OUTSIDE_DELEGATION_UNMEDIATED, GRANT_BROADER_THAN_DELEGATION, OBSERVED_OUTSIDE_DELEGATION, UNRESOLVED_DELEGATION_EXPOSURE, NOT_ASSESSED.

Teach the simple example: a $500 refund policy, $10,000 effectively granted credential, a reachable $10,000 refund handler, a requested $120 refund, and either an exact approved rule-grounded choice or independently qualified delegated discretionary authority. These facts can disagree. *Finding* excessive grant/code capability is useful before delegated or observed evidence exists. Missing discretionary-choice proof does not erase a proven policy or IAM finding. A delegated approval does not itself prove an effect happened.

**Known semantic follow-up:** Current DAI assembler can treat ordinary approved envelope constraints as delegated facts and may widen facts when composing sources. Teach the conceptual separation as the target standard, and never assert that the shipping v1 engine implements the full ISAF v2 residual-choice classification or complete cross-AI-System delegated-effect joins. Read [DAI source-semantic clarification](DAI-DELEGATION-ADMISSION-ISAF2-SEMANTIC-ALIGNMENT-P0-2026-10-20.md) and [cross-system contract](E62-CROSS-SYSTEM-DAI-DELEGATION-ENGINEERING-CONTRACT-2026-10-20.md).

---

## E. Monitoring and operations deep-dive coverage

Organize Monitoring as **four independently evidenced operating lenses** rather than a single green live feed.

1. **Evidence source/telemetry health:** NOT_CONFIGURED, CONFIGURED_NO_SIGNAL, SIGNAL_RECEIVED with separate delivery freshness, identity/binder state, source failures, stale and quarantine. OTLP/structured events, logs, metrics, traces, accepted batches, intervals and completeness.
2. **Threats, testing and detections:** actual executed static/runtime tests, risk findings, alert rules/history, severity, dynamic/baseline change, scan vs runtime observations, limitations in detection/coverage.
3. **Policy, control and governance state:** operating envelopes, approved decisions, source-qualified authority, deployment review, guardrail status, accountability, relevant control tests. No automatic approval or enforcement inference.
4. **Native protection and target effects:** E5.1 enforcement read model, configured/issued/applied/mediated distinctions, customer-native PEP state where connected, target-side verified effects, kill/recovery and independent effect readback. An unwired adapter stays unwired.

Teach the operational loop: baseline -> source health -> detect/qualify -> compare policy/effect -> open investigation -> human review/response -> confirm target result where available -> renew evaluation/receipt. This is a useful *example* loop, not a rigid prerequisite for independently invoking Discover or Evaluate.

Deep-dive subtopics: qualified vs historical signal, alert delivery vs ACK, trace vs applied tool action, monitoring vs protection, guardrail configured vs applied, source retention and sampling, production change/drift, log/source correlation, multi-provider cost anomaly, downstream target reconciliation, incident containment, suspension/recovery, replay and requalification.

Preserve owner truth from [P10 monitoring implementation](UX-P10-MONITORING-OPERATIONAL-VISIBILITY-IMPLEMENTATION-RECORD-2026-10-18.md), [E4 telemetry](E4-TELEMETRY-SOURCE-HEALTH-CORRELATION-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md), [E5 native enforcement](E5-GOVERNANCE-TO-NATIVE-ENFORCEMENT-AND-TARGET-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md), and [E5.2 customer-specific mediation](E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md).

---

## F. Complete current 45-entry control catalog coverage

**Canonical source wins over contradictory planning shorthand:** [HAIEC control manifest](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts) defines **45 TOTAL entries = 42 profiles across seven lettered families + 3 specialized C7/C9/C16 tests**. Some older notes say "45 plus 3", which is inconsistent with the actual list length. The manifest also lists 15 launch-priority IDs and 11 IDs in an implemented visibility projection. Those denominators are not the count of executed, evaluated, verified, or currently enforced controls. No catalog count implies all customers have full coverage.

| Control family | IDs and exact topic coverage | Teaching emphasis |
| --- | --- | --- |
| **G, Governance and lifecycle (7)** | G01 AI estate inventory completeness; G02 accountable ownership and responsibility; G03 AI acceptable use and approval; G04 AI risk and impact assessment; G05 regulatory applicability and obligations; G06 third-party AI and vendor assurance; G07 change and lifecycle governance. | Who owns, approves, inventories and reviews lifecycle changes? |
| **S, Application and tool security (7)** | S01 privileged tool authorization paths; S02 multi-tenant isolation; S03 MCP and tool exposure; S04 secrets and credential protection; S05 prompt and input trust boundaries; S06 RAG retrieval and exfiltration paths; S07 secure AI SDLC and build provenance. | Source and runtime trust boundaries, attack paths and secure development. |
| **A, Agent authority and delegation (8)** | A01 excessive effective authority; A02 undeclared executable capability; A03 Delegated Action Integrity; A04 observed action outside approved policy; A05 agent and principal identity continuity; A06 human approval and mediation integrity; A07 least privilege and unused grants; A08 cross-agent delegation propagation. | Policy, grant, agent, choice, capability and observed action are distinct. |
| **R, Runtime and consequences (7)** | R01 action lifecycle and side-effect traceability; R02 consequential effect envelope; R03 runtime guardrail enforcement evidence; R04 emergency intervention effectiveness; R05 recovery and resumption authorization; R06 AI incident response and recovery; R07 continuous runtime monitoring. | Evidence of interception and actual effects, not mere configured guards. |
| **L, LLM safety and reliability (5)** | L01 prompt-injection resistance under test; L02 sensitive output leakage; L03 hallucination risk and grounding; L04 unsafe output risk; L05 structured output and consistency. | Bounded model/application test results, not universal model correctness. |
| **E, Evidence and audit (5)** | E01 evidence integrity and provenance; E02 event stream coverage and continuity; E03 source authority and plane correlation; E04 contradiction and source reconciliation; E05 independent deterministic replay. | Provenance, coverage, frozen basis and reproducibility. |
| **P, Responsible AI (3)** | P01 bias and fairness evaluation coverage; P02 transparency and explainability; P03 training data governance and lineage. | Responsible AI evidence and scope, not certification. |
| **Specialized C tests (3)** | C7 audit trail completeness; C9 duration anomaly threshold; C16 token expenditure cap. | Frozen-policy specialized telecom/competition controls, not universal PEP. |

**Control assessment ladder to illustrate in the lesson:** Cataloged -> Applicable/selected -> producer available -> source qualified -> test specified and approved -> actually executed -> result recorded -> replayed/verified -> remediation/governance action -> independently demonstrated native enforcement (only if actually wired). Avoid turning this into an invented single enum or compulsory progression.

**One example per control family**, and a compact sortable 45-entry annex in eventual HTML. Do not narrate 45 descriptions back to back. For each control show: purpose, source requirement, whether actually assessed, exact snapshot, result, gap/unknown and permitted action.

**Other denominators worth teaching:** 176 registry detector rules in 31 families and 26 intake profiles in a dated source review; a 76-client-activity operating catalog, 14 logical artifacts and 22 optional test families in planning; an 87-row curated mixed-product capability inventory. These are *different catalogs* with different owners, statuses and denominators, **not additive shipped feature counts**. Revalidate dates/source before publishing any numeric claim.

---

## G. Integrations and product family atlas

### Distinct interaction planes

- **User/developer interaction:** HAIEC web dashboard, REST/API, AI agent to HAIEC remote MCP, user-scoped roles/keys, preflight, system/source selection, authorization and report reads.
- **Evidence collection:** GitHub source, qualified static/local analyzer output, runtime security test sources, SARIF, structured logs, OpenTelemetry, IAM/exported policy, service-management/ITSM, cloud/provider APIs and uploaded human evidence. They are not all equivalent to current effective permission.
- **Customer action enforcement:** gateway/native IAM/OPA/provider policy, optional customer-installed middleware/SDK, approval and mediation at a verified target point. MCP access to HAIEC does not establish that customer execution is interceptable.
- **Verification/report delivery:** read and retrieve immutable evaluation identity, agent-readable explanation packet, machine-readable evidence, report, package and public verification where issued.

### Source/channel modules to cover

**GitHub:** GitHub App authorization/installation, repo and branch identity, static source and code path.  
**IDE/AI agents:** Cursor, Claude Code, Devin, other MCP-capable clients; key scope; read vs mutation; "Run HAIEC AI Assurance" as user intent, never unconditional scan.  
**Local/dev:** supported CLI preview/scan bundle where available, CI/SARIF intake, GitHub Action v2 currently held/not released in the cited source inventory.  
**AWS/cloud:** bounded IAM policy simulation/identity and source claims; selected AWS AgentCore/CloudWatch/related read paths; *partial source evidence* is not automatic canonical EFFECTIVELY_GRANTED. Azure/GCP/legacy simulated-provider paths must not be taught as real live connectors without updated verification.  
**ITSM:** ServiceNow / enterprise control tower evidence where an actually authorized instance/source is connected; ticket creation, response and approval are not assumed.  
**Telemetry:** OpenTelemetry OTLP logs/metrics/traces, customer collectors, source binders, structured evidence ingestion and actual health.  
**Other providers:** API/SDK model usage/cost, runtime tests, vendor/third-party assurance and documentation; show qualifier rather than an implied universal marketplace.  
**Optional LogSense:** separate forensic supplier.  
**Developer tools/products:** AI AppSec, MCP Tenant Isolation, LLMVerify, ISAF Logger, SDK/CI and optional utilities, each with its own bounded contract.

Use current [MCP and evidence connections source review](WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md), [source-based package matrix](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md), and [MCP operator playbook](HAIEC-MCP-USER-CONSULTANT-OPERATIONAL-PLAYBOOK-AND-ACTION-COVERAGE-2026-10-19.md). Authentication note: production HAIEC MCP uses scoped API-key bearer; **do not describe it as OAuth today**.

---

## H. Complete customer operating life cycle and optional enterprise services

Demonstrate how the independently selectable jobs support a realistic enterprise operating loop:

1. Select business consequence, objective and scope; establish an AI system if needed.
2. Start with eligible source or existing finding; inspect source and agent/tool/model visibility.
3. Qualify identity, code/reachability and attack exposure; record early valid findings.
4. Add approved policy, current grants or delegation evidence to resolve the *specific* authority questions.
5. Run a bounded evaluation/test, review control proof and exact unknowns.
6. Human reviewer may approve, reject, request more evidence or defer. Do not imply HAIEC auto-approves deployment.
7. If customer target integration exists, mediate a specified consequential action and independently verify the actual effect.
8. Monitor source freshness, alerts and change; investigate deviations; revoke/recover where authorized.
9. Produce canonical report/receipt and re-evaluate when sources, policy, code, provider grants or operations change.
10. Consider *one useful optional extension* only when it adds new verified coverage, target integration or managed operating outcome.

**All 76 advisory post-onboarding client activities** belong in a searchable annex grouped under: (A) baseline/estate, (B) sources/evidence, (C) authority/DAI, (D) testing/assurance/controls, (E) policy/change/approvals, (F) target protection/recovery, (G) monitoring/operational health, (H) incident/remediation, (I) renewal/reporting/retirement. They are NOT 76 shipped buttons, new mandatory onboarding tasks or 76 upsells. Use source-reconciled [76-row catalog](POST-ONBOARDING-CONTINUOUS-ASSURANCE-AND-OPERATIONS-CATALOG-2026-10-18.md) and [reconciliation register](reconciliation/POST-ONBOARDING-76-CODE-API-MCP-AUDIT-v0.2.csv).

**Six prospective grouped enterprise extension families, separate from native HAIEC assurance:** F1 Extended Assurance & Independent Validation; F2 Connected Monitoring & Response Operations; F3 Native Runtime Controls & Recovery; F4 Enterprise Authority & Change Integrations; F5 Portfolio, Regulatory & Industry Assurance; F6 Usage, Reliability & Spend Optimization. These are **candidate scoped service families**, not active priced product SKU promises. See [core vs optional extensions](POST-ONBOARDING-CORE-VS-EXTENSIONS-COMMERCIAL-AND-TEMPLATE-PLAN-2026-10-18.md).

---

## I. Labs and case demonstrations

### Mandatory single-story capstone: Consequential AI purchase/refund action

**Situation:** AI agent has a limited approved task. A service principal holds a broader privilege; reachable implementation may call a money-moving API; some runtime/target witnesses may be absent or present.

**Demonstration contract:**
1. Declare actual AI system and source, with synthetic/example nature explicit.
2. Trace source-established action path, consequence and candidate-vs-established topology.
3. Inspect security tests/detectors and qualified finding, even if no IAM/telemetry is connected yet.
4. Inspect Requested, Policy Authorized, Effectively Granted, Code Capable and Observed *independently*.
5. Inspect DAI nine dimensions, the relevant established/pending facet and exact limitations.
6. Evaluate one applicable Control A/S/R/E family row and show the source/test status.
7. View persisted Assurance Evaluation, identity, producer execution, result/limitations.
8. Request human governance action; demonstrate approved/rejected/pending as authentic recorded test-case states only, not invented public success.
9. Show Monitoring for no signal vs stale vs fresh qualified source; do not invent a live effect.
10. Show customer-native PEP/HOLD/deny and target effect only in explicitly wired/tested scenario; otherwise explain integration handoff.
11. View Master Report and exact receipt/public verification where issued.
12. Show one actual next step, re-evaluation or qualified extension, never a broad upsell pitch.

### Three alternative applied cases

- **KestrelVoice production QA:** use the documented real HAIEC tenant, API key lifecycle, scoped preflight, persisted REVIEW evaluation and MCP read acceptance. Do not disclose active keys or conflate a QA receipt with KestrelVoice customer enforcement. Source: [P14.4 production MCP acceptance](P14.4-KESTRELVOICE-HAIEC-ACCOUNT-PROVISIONING-AND-PRODUCTION-ACCEPTANCE-2026-10-19.md).
- **Manufacturing Station 217:** show source-backed qualified HAIEC evaluation and separate synthetic digital-factory ERP/MES workflow, supplier qualification, POs, human review, evidence and executive reports. Keep simulated digital-factory acts distinct from real production target effects. Repo: [manufacturing demonstration](https://github.com/subodhkc/manufacturing-ai-assurance-haiec).
- **Telecom TM Forum:** show AL0 baseline / AL1 degraded / AL2 compromised narrative, C7/C9/C16 and DAI evidence, telecom asset and control ontology. Distinguish real event evidence from fictional operator scenario. Repo: [TMF evidence](https://github.com/subodhkc/tmf-2026-evidence).

### Optional developer lab set

**Lab 1.** Connect an authorized GitHub source, inspect action map and a bounded static finding.  
**Lab 2.** Analyze five planes and a DAI decision with a false/broad grant and missing effect witness.  
**Lab 3.** Bind qualifying telemetry, compare stale/fresh signals, observe alert versus ACK, inspect case.  
**Lab 4.** Via scoped MCP/API, preflight, fetch exact evaluation and agent-readable explanation, compare UI result and verify a receipt.

Never automate privileged live mutation against real customer systems as an educational default. Run negative tests only in consented, bounded QA or synthetic environments.

---

## J. Course packaging, diagrams and instructional experience

### Final deliverables to produce in a later authorized build, NOT in this planning commit

1. **Interactive HTML learning hub** with a lesson index, duration, learner-track filter, text-first SEO-readable chapters, accessible diagrams, light default/dark optional theme, true source links and glossary. Use *existing* design system/animations where possible, no invented separate website page as a prerequisite.
2. **Narrated screen tour and architecture motion** with chapter markers, prepared voiceover and captions, edited into distinct beginner, full and technical cuts. Actual demonstrations should reproduce qualified evidence, not fabricated browser events.
3. **Slide deck** reusing current HAIEC platform, technical architecture, five-plane, DAI and action map diagrams without privileging Protect over other capabilities.
4. **Technical reference/handbook** with exact source/claims table, versioned method summary, 45-entry control atlas, 76-activity optional index, developer MCP flow and troubleshooting.
5. **Reviewer checklist/quiz**: choose source, classify control status, interpret DAI and authorization, read receipt, identify unsupported "verified safe" claims.

### Reuse diagrams instead of drawing unrelated new ones

- Three-pillar overview and six independent capability cards.
- LLM vs agent vs real consequence chain.
- Source, action/authority, consequence and five-plane views (all five equal visual weight).
- System Constellation and agent action graph with candidate-vs-established edge legend.
- DAI nine-dimension matrix with independently qualified dimensions.
- Catalog/control operating-state progression with provenance.
- Monitoring four-lane source/alert/policy/native effect layout.
- Human decision and customer-native PEP with independent effect witness.
- Deterministic evaluation -> U6 receipt -> public verification lineage.
- One case playback through all layers; no global "safe/unsafe" green animation.

Diagrams must be tied to source-backed current implemented surfaces, not imply source joins, telemetry or policy are fully present in every example. Reuse prior design references and preserve existing homepage animated terminals and marketing assets if eventually adapting the course to the site.

---

## K. Mandatory content provenance, completeness and publication gates

**Source precedence:** current HAIEC Main source and canonical type/route/tool owner > verified executed/prod behavior and persisted evaluation > current repo evidence truth ledger > Drive research methods > Common Repo proposed design > marketing synopsis. Older docs can be valid historical context but not current release status.

For EACH named product feature in the eventual lesson source ledger maintain:

| Field | Requirement |
| --- | --- |
| Product job and customer question | Which of six jobs, what outcome and for whom |
| Code/tool owner | Canonical HAIEC Main path and API/MCP/UI route, or EXACT NOT_AVAILABLE |
| Source contract | Required source, identity, consent, scope, freshness and producer |
| Execution state | IMPLEMENTED / TEST_VERIFIED / LIVE_VERIFIED / PREVIEW / HELD / PARTIAL / INTEGRATION_REQUIRED / PROPOSED / SYNTHETIC_DEMO (avoid conflating dimensions) |
| Proof distinction | Cataloged, tested, evaluated, approval, mediated, independently witnessed effect where applicable |
| Example | Real authorized case or explicitly synthetic explanation; precise date and scope |
| Limitation and next action | Which material fact is unassessed, owner and legitimate next step |
| Release revision | Exact implementation SHA / date plus evidence link |
| Audience | Executive, developer, security, operator or reviewer |

### Critical claim locks

- **Registry does not equal operational coverage.** Do not add 45 controls, 176 registered detectors, 76 operations, 87 mixed capability rows and 60 MCP tools into one feature count.
- **Current manifest:** 45 includes the three C tests. It is not 45 plus 3. 11 visibility implementations do not mean 11 customer target guards.
- **Evidence non-substitution:** source-asserted, merely connected, policy declared, effectively granted, code capable, observed action and independently applied effect are different statements.
- **Policy vs discretionary delegation:** Qualified policy is still established policy; uncertainty about a distinct discretionary choice must not erase it. DAI v1 has outstanding semantics; do not market full ISAF v2 conformance.
- **Security finding first:** Show qualified code/source risk early; ask for more evidence only to sharpen a specific claim.
- **Runtime:** P10 monitoring exists, but delivered events, guards and PEP are not a universal runtime-protection installation. E5.2 custom action mediation requires a real customer-integrated dispatch control, atomic binding/revalidation, no-bypass and effect proof.
- **Reports:** exact evaluation and receipt status, source basis, unassessed facets and current vs frozen version. A valid signature/digest is not a certification.
- **Interface:** MCP is an authorized transport to HAIEC's deterministic engine and has scoped API-key access, not a second analyzer, independent administrator, OAuth proof or permission to auto-approve.
- **Commercial:** optional service families and candidate package assets are not automatically sellable/currently entitled.
- **Research:** ISAF v2 manuscript exists and release work is ongoing; publication, independent validation, universal empirical performance and CSM6 native execution are not to be claimed without direct evidence.

### Quality gates before producing or publishing full tutorial

**Gate 1: Coverage.** Every C01-C17 chapter, all six jobs, seven control families + C7/C9/C16, nine DAI dimensions, five planes, ISAF2, monitoring, source/identity, six proposed extension families and 76 operating activity domain groups touched in the outline.  
**Gate 2: Exact product truth.** Re-read current Main, tool registry and status before screen capture; replace stale prior-source assertions, especially source health, IAM, MCP authentication and DAI semantics.  
**Gate 3: No overclaim.** Audit every positive use of "enforced", "protected", "delegated", "verified", "live", "certified", "complete" and "compliant".  
**Gate 4: Customer comprehension.** One 90-second summary, chapter-by-chapter "why it matters", one actual user action and one qualified output; definitions link back to the same scenario.  
**Gate 5: Accessibility.** Light-first responsive diagrams, native headings and transcripts, searchable control index, captions and printable/readable text.  
**Gate 6: Capture integrity.** Only reproduce recorded or authorized demo states with exact IDs/source; no fake monitoring, no secrets or private customer data, no accidental real external mutating action.  
**Gate 7: Content-version lock.** Explain current shipping product separately from research, proposed integrations and capability plans, and date the finished course.

---

## L. Source reference index and precedence

### Core code and shared product documentation

- [HAIEC application Main](https://github.com/subodhkc/haiec-website/tree/Main), including canonical implementation, route owners and controls manifest.
- [Common Repo architecture and UX](https://github.com/subodhkc/common-repo-drive/tree/main/haiec-product-capability-architecture).
- [Current curated capability and workflow matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md).
- [Dated detection/control/source matrix](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md).
- [Source-based capability/package/MCP inventory](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md).
- [Source reconciliation and optional operations](reconciliation/POST-ONBOARDING-76-CODE-API-MCP-AUDIT-AND-RECOMMENDATIONS-2026-10-18.md).
- [Current website methodology plan](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md).
- [Current UX release implementation index](README.md) for P01-P13; actual status should always be re-read before recording.
- [HAIEC verified platform inventory](https://docs.google.com/document/d/1XkhJa5kE4Huyr5xxkj8UyJtPX4YO2EsPEPA685jUgdk/edit) is historically scoped to its inspected branch; do not override newer Main with it.

### Research and foundation

- [HAIEC Technical Primer](https://docs.google.com/document/d/1qcK7O6J4EaZK743wLUz7xaRrg8Wkw7fbq8RpKGJ_Nbk/edit).
- [HAIEC brand positioning](https://docs.google.com/document/d/1wJUa87hCG45beZPnjXtSArLXm5c8RgxY2vUR8i8IX1E/edit).
- [ISAF v2 final manuscript working copy](https://docs.google.com/document/d/1jUfpcbXifVKLm0CBNCB_86bQeAeTOoxSq2nHiRA4egs/edit).
- [ISAF v2 reviewed learning overview](https://docs.google.com/document/d/1Z2_xa3X1rFgFh3qWbEjOsVCrrOsPJdNHhqCAcIHTPQo/edit).
- [ISAF v2 canonical core freeze](https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit).
- [DAI source semantics and unresolved implementation deltas](DAI-POLICY-GRANTS-DELEGATION-TRUSTED-FACTS-ADMISSION-DEEP-VERIFICATION-2026-10-20.md).
- [Research and reporting vocabulary, ISAF and CSM6](REPORT-RELIABILITY-VOCABULARY-ISAF-CSM-AND-76-ACTIVITY-RECONCILIATION-PLAN-2026-10-18.md).

### Product operations and verification

- [Start Here implementation](UX-P01-START-HERE-IMPLEMENTATION-RECORD-2026-10-20.md).
- [System Assurance Case](UX-P04-ASSURANCE-CASE-IMPLEMENTATION-RECORD-2026-10-20.md).
- [Evaluation provenance](UX-P07-ASSURANCE-EVALUATION-RESULTS-IMPLEMENTATION-RECORD-2026-10-20.md).
- [Control operation](UX-P08-CONTROLS-OPERATIONS-IMPLEMENTATION-RECORD-2026-10-20.md).
- [Human governance / My Work](UX-P09-MY-WORK-HUMAN-GOVERNANCE-IMPLEMENTATION-RECORD-2026-10-18.md).
- [Monitoring](UX-P10-MONITORING-OPERATIONAL-VISIBILITY-IMPLEMENTATION-RECORD-2026-10-18.md).
- [Reports/public verification](UX-P11-REPORTS-RECEIPTS-PUBLIC-VERIFICATION-IMPLEMENTATION-RECORD-2026-10-18.md).
- [MCP explanation parity](UX-P11.1-MCP-EXPLANATION-PACKET-AND-RECEIPT-PARITY-IMPLEMENTATION-RECORD-2026-10-18.md).
- [Provider usage and cost](UX-P12-PROVIDER-USAGE-COST-SOURCE-TRUTH-IMPLEMENTATION-RECORD-2026-10-18.md).
- [Customer-native protection reference](E5.2-CUSTOM-INTEGRATION-POSITIONING-AND-OPERATIONS-GAP-REGISTER-2026-10-18.md).
- [External Kestrel QA MCP acceptance](P14.4-KESTRELVOICE-HAIEC-ACCOUNT-PROVISIONING-AND-PRODUCTION-ACCEPTANCE-2026-10-19.md).

## Next authorized work (not performed here)

1. Finalize the audience-led module ordering and a source-citation ledger for each specific claim, preserving this skeleton.
2. Reconcile current Main status on any source that changed after 2026-10-20, especially controls count and DAI semantic follow-up.
3. Draft narrated prose for the short beginner path first and review clarity and truth before building the full interactive atlas.
4. Produce full technical labs and record actual QA walkthrough with scrubbed identifiers and precise source/receipt transitions.
5. Only then adapt selected lessons to website education/navigation, without replacing existing public pages, homepage animations or independent product documentation.

**Result of this commit:** One comprehensive, editable onboarding **plan/skeleton** committed to Common Repo. No tutorial media, slide deck, HTML experience, website deployment or HAIEC application code changed.
