# HAIEC — Post-Onboarding Continuous Assurance & Operations Catalog

> **2026-10-18 VALIDATION + COMMERCIAL POSITIONING ADDENDUM (CURRENT):** [Core product vs six optional enterprise extension families, quantified customer value, approval/proof gates and research/build plan](POST-ONBOARDING-CORE-VS-EXTENSIONS-COMMERCIAL-AND-TEMPLATE-PLAN-2026-10-18.md); [generic optional client worksheet v0.1](templates/CLIENT-OPERATIONS-EXTENSION-WORKSHEET-v0.1.md). The 76 actions are recommendations, NOT 76 missing engine features or required customer documents. Native engine outcomes must stand alone with qualified evidence and visible unknowns; optional additions extend scope, monitoring or on-target control. **P10 Monitoring has now merged** [#2259](https://github.com/subodhkc/haiec-website/pull/2259) / Main fc284d5cd; P10 freshness-qualified four-lane UI deployed per [release record](UX-P10-MONITORING-OPERATIONAL-VISIBILITY-IMPLEMENTATION-RECORD-2026-10-18.md). Earlier “P10 next” references below are historical; **next UX owner P11 Reports/Receipts**, E5.2 remains separately customer-native and not a verified generic PEP. No web pricing or entitlements asserted.

**Date:** 2026-10-18 | **Status:** Product architecture + client recommendations + artifact/integration/test catalog, **NOT** an assertion that all rows execute in production.
**Scope:** Everything HAIEC can help a client *establish, map, assess, monitor, govern, protect, respond to, verify, improve, or safely retire* after the first AI-system/source entry. Applies to autonomous agents, LLM applications, RAG, conventional predictive models, API/service agents, multi-agent chains and sector-specific systems as supported by the selected source and policy. Each job is independently accessible.

**Source-alignment:** [87 curated capability/workflow entries](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md); [detection/control/source requirements](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md); [20 OP joins](E5.2-CUSTOM-INTEGRATION-POSITIONING-AND-OPERATIONS-GAP-REGISTER-2026-10-18.md); [operational join contracts](OPERATIONAL-JOINS-CONTRACTS-UI-AND-PILOT-BASELINES-2026-10-18.md); [P09 accepted, P10 Monitoring next](UX-P09-INDEPENDENT-ACCEPTANCE-AND-UX-P10-MONITORING-HANDOFF-2026-10-18.md); [owner/reuse boundaries](OWN-REUSE-INTEGRATE-DEFER-ENTERPRISE-STRATEGY-2026-10-16.md).
Do not override prior documentation or launch unrelated implementation. Earlier inventory counts (87 capability rows, 45 control profiles, 176 detector registrations/31 families/26 typed intake profiles from dated scans) reflect catalog state, **not** fully supported customer integrations or successful executed coverage.

## 1. Product decision: four operational threads and six independent jobs
This is a **client outcome catalog**, not a fixed onboarding checklist or a seventh capability. After initial customer entry, HAIEC maintains four independently selectable threads:

1. **Establish a trusted operational baseline** — who owns it, what it can do, its purpose, boundaries, sensitive data, sources, permissions and change owners.
2. **Build and renew assurance confidence** — evaluate source-proven capability, intent vs authority vs actual grants vs code/observations, threat/control/applicability and effectiveness, negative evidence, tests, freshness and blind spots.
3. **Continuously monitor/operate** — observation health, actions/behavioral changes, deployment/permission/policy/drift, anomalies, service reliability, budget, alerts, investigations and owners.
4. **Govern, protect and prove outcomes** — human decisions and risk exceptions, native target mediation where integrated, safe dispatch, containment/recovery, remediation, fresh retests, certified-by-no-one evidence packages and verified closure.

Keep official UX pillars Understand / Assure / Govern & Operate and six capabilities **Discover, Evaluate, Authorize, Monitor, Protect, Verify**. Five planes Requested / Policy Authorized / Effectively Granted / Code Capable / Observed are independent **comparison** dimensions, not processing steps. Always surface UNKNOWN / NOT_ASSESSED / NOT_WIRED / STALE as appropriate; never infer no risk from no events or approvals from stale data.

Outcome types across rows: **B** baseline artifact, **A** assurance confidence, **M** continuous monitoring, **G** governance/response, **P** optional target protection, **V** independently qualified verification. Multiple labels possible. **Readiness labels:** EXISTING_OWNER = code/read model/catalog exists, not universal customer-ready; JOIN_REQUIRED = owner-to-owner integration needed; CUSTOMER_ADAPTER = actual customer systems/PEP must be installed and proven; PROPOSED_TEMPLATE = specification only; SOURCE_SPECIFIC = only when qualified source is present.

## 2. Canonical operating loop

~~~text
Start with client goal OR registered AI system OR existing evidence/incident/change
 → Resolve actual org + system + role + entitlement + target + existing sources
 → Give ONE useful eligible next action and optional alternatives
 → Establish/map what source can establish (and cannot establish)
 → Evaluate a bounded consequence/authority/control/test/evidence claim
 → Owner decides: accept / remediate / approve / reject / schedule monitor
 → If authorized and *real* customer-native PEP exists: safely dispatch or block
 → Capture source-qualified observation and independent target-effect evidence
 → Monitor current sources, config, policy, IAM, use, behavior, drift, outcomes
 → Correlate to named control/system/owner; triage and respond
 → Re-evaluate after material change and verify exact closure/boundary
 → Renew snapshot-bound report and client assurance posture; repeat conditionally
~~~

**Event-driven, not indiscriminate rerun:** source loss; AI agent/tool/model/data/retrieval/memory/code release; credential/role/policy/approval change; new sensitive action or resource; drift/anomaly/threshold/cost event; incident; control failure; regulatory or contract-policy revision; expired exception/retest; provider/adapter change; stop/recover/offboarding. Reassess only affected entities/claims when dependency graph supports exact scope. Scheduled reviews cover what telemetry cannot observe.

## 3. Comprehensive post-onboarding client action catalog

Notation per row: **Client deliverable** is the document/record/dashboard or receipt client receives; **source/integration** is a candidate, not a mandated connector; **acceptance** must be proven for that client's scope. Where a feature lacks a source-backed implementation, create recommendation/contract, not fabricated result.

### A. Baseline, estate, model/data/software lifecycle (establish + understand)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| A01 B,G | Assign accountable business owner, technical custodian, control reviewer, incident owner and backup | AI System Responsibility & RACI Card | tenant/org + HR/IdP directory optional | owner identity, role separation, escalation reachability | System Overview, My Work |
| A02 B,A | Record intended purpose, user populations, decisions, consequence severity and prohibited effects | Intended Use & Consequence Boundary | customer declaration, policy/contract | versioned boundary signed/attested; no claim of independent proof from declaration | System Overview/Authority |
| A03 B,A | Inventory agent/model/tool endpoints, MCP servers, APIs, cloud resources, environments, integrations and external suppliers | AI Asset + Tool Inventory; AI BOM candidate | GitHub App/source/CI/registry/IdP/cloud | corroborate discovered vs declared; unknown shadow assets visible | Systems, Action Path |
| A04 B,A | Map workloads, data flows, trust boundaries, agent orchestration and system dependencies | System/Trust Boundary & Dependency Graph | source graph, IaC, trace metadata, architecture documents | identify unobserved edges, provenance and environment separation | Action Path / System Map |
| A05 B,G | Risk classification, critical operations and client-specific risk appetite | Risk Tier / Impact & Exception Register | customer risk policy, business owner | human ownership; basis, currency, expiry | Assurance/Controls |
| A06 B,A | Record AI/model/prompt/agent framework/tool versions and deployment provenance | Model/Agent Change Baseline | CI/CD, model registry, source, vendor metadata | exact version, artifact digest, deploy environment; not inferred from marketing name | System Sources / Changes |
| A07 B,A | Identify data categories, personal/sensitive data, residency and retention | Data Use & Privacy Boundary | data catalog/DLP/privacy docs | read/write access, retention rules, source authority | Evidence / Controls |
| A08 B,A | Track datasets, RAG indexes, retrieval corpora, vector stores and long-lived memory | Retrieval/Memory Source Manifest | RAG service, data source, vector DB (adapter-specific) | provenance, permission inheritance, poison/expiry/update handling | Action Path, Sources |
| A09 B,G | Trace AI-specific suppliers, sub-processors and dependencies | Third-Party/AI Supply Chain Profile | vendor attestation, SBOM/AI BOM, registry, contract | version/license/support/incident dependency and limitations | Connections, Controls |
| A10 B,G | Baseline control objectives and applicable framework obligations | Applicability & Control Ownership Matrix | NIST AI RMF/ISO/SOC2/etc customer profile | applicability justified per control; catalog presence ≠ effective control | System Controls |

### B. Source readiness, provenance, evidence quality (establish + assurance)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| B01 B,A,M | Map which evidence planes can be established from current sources | Evidence Coverage & Blind-Spot Map | GitHub/CI, IAM, telemetry, manual uploads | minimal source by selected claim; NO_SIGNAL, UNKNOWN distinct | Evidence, Monitoring Sources |
| B02 B,A,M | Authenticate producer identity, issuer/audience, resource, timestamps and cryptographic basis | Source Qualification & Producer Identity Profile | signed webhooks, OTLP/binders, provider logs | forged producer, stale/revoked token, wrong org/source, replay | Sources |
| B03 M | Define cadence, lag, freshness tolerance, health/error/degradation | Source Health & Freshness Contract | E4 source health, gateway, collector | stale past event never appears ACTIVE; bounded read ≠ estate total | /monitoring |
| B04 A | Verify mapping from raw event/document to typed canonical event and qualified proof | Evidence Admission & Mapping Receipt | typed intake, upload, OTLP, SARIF/JSON/CSV | unsupported schema quarantine, negative/contradictory evidence | Evidence / Investigations |
| B05 B,G | Establish immutable-as-applicable timestamps, digests, evidence storage and disclosure limitations | Evidence Retention & Chain-of-Custody Profile | object store, event append, audit trail | integrity, source clocks, lineage, retention and legal-hold consent | Evidence / Reports |
| B06 A,M | Reconcile source conflict and missing/late/corrupt events | Provenance/Conflict & Observability Gap Register | multiple independent source streams | reconciliation test, no fabricated negative inference | Sources / Verify |

### C. Authority, consequence, delegated AI actions (understand + assure)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| C01 B,A | Enumerate consequential actions (read/write/delete/pay/send/configure/recover) and target resources | Action & Effect Inventory | GitHub/tool schemas/MCP API declarations | operation, principal, actual resource, scope digest; unknown reachability | Action Path |
| C02 A | Compare requested, approved, effectively granted, code-capable and observed planes | DAI Authority Gap & Consequence Evaluation | policy/IAM/source/observations | mismatch/excess permission/unknown distinguished; evidence as-of | Authority |
| C03 A,P | Verify effective IAM grants, service identities, secrets/credential paths and least privilege | Target Permission & Credential Exposure Review | cloud IAM, service account, provider API | exact tenant/resource/principal; alternative direct-key bypass | Authority, Connections |
| C04 A,P | Qualify actual interception points and non-bypass execution routes | Action-to-PEP Boundary & Bypass Matrix | customer gateway/PEP, middleware, network/IAM | direct API, retries/background jobs, unauthorized alternate path negative tests | Action Path, Protect |
| C05 A,G | Document parent→child delegation chain and narrowed permission in multi-agent calls | Delegation Authority & Handoff Proof | trace/signature, provider/agent logs | issuer, subdelegate, target, scope and revocation; no signed evidence ⇒ unknown | Authority / Investigations |
| C06 A | Assess code capability, side-effect reachability and static source limitations | Reachability/Code-Capable Frontier | GitHub, Semgrep, Joern where available | code path qualification, false positives and NOT_ASSESSED when unresolved | Action Path, Evaluation |
| C07 A,M | Map autonomy, privilege escalation and tool mutation routes | Agent Behavioral Boundary & Allowed Path Manifest | tool registry, execution traces, policy | first-seen action vs expected path, independent authorization of new action | Authority, Monitoring |
| C08 A,M | Map exfiltration exposure, data movement and external destination access | Data/Egress Consequence Map | code/source, IAM, DLP, API/eBPF/network where authorized | bounded outbound destination/volume; no full coverage claim from tool logs alone | Action Path / Monitoring |

### D. Assurance assessments, test families, controls (assure and strengthen confidence)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| D01 A | Establish reproducible baseline assurance evaluation per selected purpose | Evaluation Snapshot & Findings | existing deterministic assurance engine | rule/source/version/digest/evaluation identity and coverage | Evaluate |
| D02 A | Assess applicability and active status of all relevant controls, not simply OWASP | Per-Control Applicability, Wiring & Evidence Matrix | native 45-control catalog, customer control evidence | NOT_ASSESSED vs passed, effective vs configured | Controls |
| D03 A | Identify AI threat scenarios and misuse/abuse paths | Threat Model & Attack-Scenario Library | OWASP agentic/LLM, MITRE ATLAS, NIST guidance, business policy | threat applicability + negative/positive paths, not template-as-test | Controls / Investigations |
| D04 A | Run static code, dependency, secret, prompt/tool schema and supply-chain checks where qualified | Code & Supply Chain Evidence Pack | source/CI, SAST/SCA/SBOM, Semgrep/Joern optional | scoped version, reachable vs code-only, tool-output quality | Evaluate / Sources |
| D05 A | Run explicitly authorized active tests for endpoints/agents | Authorized Runtime Security Test Plan & Results | existing runtime testing, sandbox/staging | customer consent; harm bounds; target and environment checks | Runtime Security |
| D06 A | Test prompt injection, malicious tool output, RAG poisoning, cross-boundary instructions | Injection & Tool Manipulation Test Case Set | model/agent app test harness, sanitized synthetic input | authority-violating effect attempt and recorded outcome | Evaluate / Controls |
| D07 A | Test data leakage, access control, privilege escalation, tenant crossing and memory misuse | Access/Isolation Abuse Test Matrix | IAM, app permission fixtures, retrieval | denied cross-principal and cross-tenant requests | Controls / Authority |
| D08 A | Test output quality: groundedness, accuracy, task success, refusal, human override, unsafe content | Quality & Guardrail Evaluation Baseline | ground-truth corpus, human labels, application-specific suite | stratified cases, sampling limits, accepted accuracy goals; not one universal score | Evaluate |
| D09 A | Test reliability: tool failure, malformed output, long context, retry, provider failover, latency | Resilience & Negative Test Suite | QA harness, provider adapter, CI | explicit unknown/fallback, reproducibility and no unapproved effect | Evaluate / Monitor |
| D10 A | Evaluate applicable privacy, fairness, explainability, safety, accessibility, human factors | Context-Specific Responsible AI Test Specification | human reviewers, approved data, domain SMEs | population/metric/method/scope, independent owners; optional to use case | Controls / Reports |
| D11 A,G | Run control proof/replay with valid scoped TestSpec and resulting evidence | Control Effectiveness & Replay Receipt | existing UCP Control Proof/TestSpec/replay | declared config ≠ testable ≠ executed ≠ independently effective | Controls |
| D12 A | Compare eligible snapshots after model/tool/policy/source changes | Consequence Delta & Comparative Assurance | evaluation history, snapshot comparability | equivalent basis, affected consequences, changed proof frontier | Changes / Verify |

### E. Approvals, policies, risk, change, release gates (govern)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| E01 G | Define permitted/prohibited operations and conditional Operating Envelope | Scoped Policy & Envelope Version | canonical HAIEC policy/envelope | exact actor/action/target/time, approved owner, digest | Controls / Authority |
| E02 G | Request/assign accountable human deployment/operation approval | Human Decision Packet & Receipt | My Work/P09 governance | requester/reviewer separation, scope, CAS, expiry, revoke | My Work |
| E03 G | Track risk acceptance, waiver, compensating controls and automatic re-review trigger | Risk Exception & Expiration Register | case management/customer policy | owner, rationale, expires, consequences and revocation | My Work / Controls |
| E04 G,A | Bind evaluated finding to change/owner and mandatory focused re-evaluation | Finding-to-Remediation/Change Plan | ticket/CI/GitHub/assurance | finding→control→change digest→retest same scope | Controls / Investigations |
| E05 G | Link CI/CD and release gates to conditional policy approval and evidence | Change/Deployment Assurance Gate | GitHub App, CI, model/tool registry | refuse stale version/digest; warn when unintegrated; do not claim released GitHub Action v2 | Evaluate / Changes |
| E06 G,P | Confirm policy distribution to one actual enforcement target | Target Policy Install & Revocation Receipt | customer PEP/gateway/IAM | installed digest/target ACK + bounded propagation/TTL | Controls / Protect |
| E07 G,M | Reassess approvals when policy, delegated authority, versions, target grants or operating envelope drift | Targeted Approval Invalidation Register | change events, dependencies, decision store | only affected scoped decisions invalidated; fail mode correct | Monitoring / My Work |

### F. Runtime protection, effect verification and recovery (optional customer-integrated)
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| F01 P | Define PEP integration eligibility per sensitive customer action, reversible pilot first | Enforcement Feasibility & Boundary Assessment | customer gateway, OPA/Envoy, AgentCore/Cedar, native IAM or middleware | host-owner consent, complete interception + bypass/credential inventory | Protect, Connections |
| F02 P,G | Enforce pre-dispatch DENY/ALLOW/HOLD and user-only human decision | Exact Action Mediation & Hold Receipt | E5.2 nonproduction reference + *real* trusted authorizer adapter | wrong scope/digest/expiry/actor/policy blocked; no HOLD auto-execution | Protect / My Work |
| F03 P,V | Prevent logical double execution under parallel retries/indeterminate network outcomes | Durable Claim & Idempotent Dispatch Record | customer/HAIEC approved durable store + provider semantics | concurrency, payload conflict, failover, UNKNOWN timeout, safe compensation | Protect / Investigations |
| F04 V | Establish provider ACK vs target-applied decision vs actual business effect | Target Acknowledgment & Independent Effect Receipt | authenticated provider callback + readback API | exact target/account/resource/time, separate effect qualification | Verify / Evidence |
| F05 P,G | Contain action paths in emergency; confirm revocation propagates | Kill/Containment & Propagation Receipt | proven native target PEP and identity rotation | blocked-after-trigger attempts at *each covered path*, inflight and expiry | Kill Switch |
| F06 G,V | Recover only after scope/condition/incident verification; handle already committed consequences | Governed Recovery & Compensation Runbook | customer recovery executor, reviewer, provider | cleared condition, fresh authorization, replay-safe recovery, readback | Kill Switch / Verify |
| F07 P,M | Enforce hard token/cost/usage budgets *only if* atomic reservation established | Budget Reserve/Settle Control Receipt | provider billing/usage APIs + atomic ledger | concurrent worker/limit, adjustment/refund, billing lag; C16 alone not hard-cap proof | Monitoring, Usage |

### G. Continuous observation, drift, detections and operational health
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| G01 M | Register qualified tool/model/agent events with actor, target, attempt, result and time | Agent Runtime Observation Contract | OTLP, gateway/host trace, authenticated provider events | provenance, sampling window, dropped signals, correlation | /monitoring/telemetry |
| G02 M,A | Track first-seen actions, tool/resource access, workflow route divergence and rare privilege elevations | Behavioral Baseline & Novelty Events | historical qualified tool/action traces | cold-start, seasonality, sparse history, policy-based consequence; anomaly ≠ violation | Monitoring / DAI |
| G03 M,A | Monitor data/knowledge/model/prompt/agent configuration, policy and delegated permission drift | Drift & Affected Dependency Log | deployment events, code, policy, provider/IAM change feeds | old/new comparability, material effect impact, review owner | /monitoring/differentials |
| G04 M,A | Watch qualified guardrail decisions, refusals and control failures, not just raw model text | Guardrail Efficacy & False-Positive Review | guardrail evidence, runtime tests, policy | evaluated vs configured vs native blocked statuses separate | Monitoring / Controls |
| G05 M | Detect abuse/security indicators: injection, novel tool dispatch, exfil attempts, high-risk endpoints | Security Signal & Correlation Register | qualified tool traces, API/security logs, DLP where allowed | exact event→agent→system→policy/control; detection quality | Monitoring / Risks |
| G06 M | Monitor customer-defined task quality/groundedness, failure modes, human escalations and safety indicators | Performance/Quality Drift Baseline | labeled outcome samples, QA/human feedback | denominator, sampling bias, changed distribution; do not claim real-time truth from inference | Monitoring / Evaluate |
| G07 M | Monitor latency, error, timeout, provider quotas, retry bursts, service availability | AI Service SLI / Runbook | application telemetry, APM, provider telemetry | freshness, service source, agreed windows, error rates | Monitoring |
| G08 M | Track token/cost/compute consumption, model/provider mapping and budget forecasts | Usage Attribution & Cost Drift Report | provider usage/billing, internal metering | unknown attribution/billing lag, provisional vs actual | Monitoring / Usage |
| G09 M,G | Assess alerts: threshold, notification attempt, delivery, suppression, ACK, escalation and case | Alert-to-Owner & Case Correlation | existing rule/history + existing response workflow | delivery ≠ ACK; source/event/system join; time-bound ownership | /monitoring/alerts/history |
| G10 M | Monitor source/connector lifecycle: auth errors, staleness, credential rotation, API rate limits and quarantine | Integration Health & Rotation Schedule | Connections, E4, provider errors | expired credentials and no-signal don't yield “monitored” or “safe” | Monitoring Sources, Connections |
| G11 M,P | Track deployment of actual PEP policy, blocked attempts and readback health where integrated | Enforcement Effectiveness Observation | native target guard, exact PEP + target event | installed vs decision-only vs not wired; target-scoped claim | Protect, Monitoring |
| G12 M,G | Maintain human review cadence / risk checkpoint where telemetry coverage is missing | Coverage Gap & Manual Review Schedule | client owner/exception logs, questionnaires | evidence expiry, unmonitored time windows, alternative source | My Work, Monitoring |

### H. Incident operations, remediation and recovery governance
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| H01 G | Correlate detections to incident/owner/priority without treating signals as confirmed incidents | Incident Triage & Attribution Record | alert/risk/case tool, qualified evidence | event/correlation/tenant/source and severity basis; duplicate suppression | Investigations / Alerts |
| H02 G | Escalate to human, notify approved SOC/on-call/owner and record ACK | Response Ownership & Escalation Timeline | existing alert dispatch, customer ticket/incident platform | delivered/opened/acknowledged/assigned individually | Monitoring / My Work |
| H03 G,P | Execute scoped response: isolate, revoke, pause, rotate or human reviewed remediation | Response Authorization & Command Receipt | customer native guard/IAM/ITSM/approval | SoD, explicit target confirmation, no automated privileged action by assistant | Kill Switch / My Work |
| H04 G,V | Qualify actual remediation with updated code/policy/grant, accepted evidence and targeted retest | Remediation Closure & Retest Receipt | CI, policy, test execution, provider readback | owner sign-off + independently fresh test; no alert ACK=closed | Controls / Verify |
| H05 G,V | Investigate incidents and produce evidence-bound reconstruction | Investigation Timeline / Forensic Export | logs/trace/qualified LogSense if separately integrated | source integrity, as-of events, uncertainty and redaction | Investigations / Evidence |
| H06 G | Practice tabletop, break-glass roles, outage/DR and incident recovery | Response Exercise & Recovery Readiness Record | customer SOC/IR plans + QA environment | bounded simulations, access revocation, target ACK and restoration | Controls / Kill Switch |

### I. Assurance renewal, reporting, lifecycle and service closure
| ID / type | Client operation / recommendation | Deliverable to establish | Integrations / sources | Test or evidence check | Existing UI owner |
|---|---|---|---|---|---|
| I01 A,V | Maintain system-specific assurance case: supported claims, evidence, defeaters/unknowns, confidence dimensions | Assurance Case & Evidence Sufficiency Matrix | canonical evaluation, control proof, evidence | scope, age, source independence, completeness and opposing data | Evaluate / Reports |
| I02 V | Produce frozen evaluative reports, U6 receipts, reviewer packages and bounded public verification | Versioned Assurance/Control Proof Pack | HAIEC reports, qualified evidence | exact evaluation ID/digest, artifact applicability, permission and as-of | Verify / Reports |
| I03 A,V | Reassess after material changes, incidents or expired evidence only where comparable | Material Change / Reassessment Decision | evaluation history, delta/replay | explicit comparable basis and changed coverage; schedule re-run else mark unknown | Changes / Verify |
| I04 A,G | Review evidence obligations under actual selected frameworks/contracts | Regulatory/Contract Assurance Mapping Pack | client governance frameworks incl. NIST/ISO/SOC2/sector rules | applicability and evidence mapping, not universal certified compliance | Controls / Reports |
| I05 G | Track operational exception expiry, owner certification and portfolio risk review | Portfolio Governance & Renewal Queue | executive portfolio, source health, risk cases | accurate denominators, unanswered owner attestations | System Overview, My Work |
| I06 B,G,V | Rotate/revoke permissions, detach integrations, purge/retain per policy on retirement | Offboarding & Evidence Retention Receipt | Connections, IAM, storage, policy, target adapters | resource unbound, credentials revoked, human records retained lawfully | Connections / Reports |
| I07 B,M,G | Keep integration and operating runbooks current, including support escalation and fail modes | Client Operations Runbook / Service Profile | client operator, HAIEC service owners | named on-call, healthy/unavailable behavior, periodic control exercise | Connections / Operations |
| I08 B,A,M | Track observability limits and permitted deployment claims | Current Assurance & Unverified Frontiers Disclosure | live tenant evidence, test/evaluation basis | no false “all agents protected”/“continuous certification” | System Overview / Reports |

**Total curated recommendations in this document: 76 activities (A01-A10=10, B01-B06=6, C01-C08=8, D01-D12=12, E01-E07=7, F01-F07=7, G01-G12=12, H01-H06=6, I01-I08=8 = 76).** This is an intentionally comprehensive client recommendation catalog, **not 76 new features**. Each maps to existing HAIEC work; require a source owner/reconciliation before marking product availability. If counts are edited, recalculate the inventory.

## 4. Customer-facing artifact pack, created progressively
Avoid one giant onboarding wizard. The following 14 *logical artifacts* may be data-backed views, downloadable templates, or evidence-bound reports, NOT required uploaded files. Link to canonical stores rather than duplicate data:

| Artifact ID | Reusable artifact / what client obtains | Template fields and use | When suggested |
|---|---|---|---|
| ART-01 | AI System Operating Profile + RACI | tenant/system/version/env, owner, purpose, impact, review & response teams | registration / owner missing |
| ART-02 | Asset, Agent, Model, Tool & Data Dependency Map | nodes/edges, source/observed qualification, trust boundary, unknown reachability | asset discovery / change |
| ART-03 | Consequence & Authority/DAI Map | exact actor/action/resource, five evidence planes, delegation, prohibited effect | impactful action / review |
| ART-04 | Source, Evidence & Coverage Register | producer, credential/scope, freshness, missing data, as-of, qualification | source onboarding + health |
| ART-05 | Control Applicability & Effectiveness Matrix | objective, accountable owner, config/policy/PEP/test/source/observed evidence independently | assurance request |
| ART-06 | Assurance/Test Plan and Executed Results | scope, run authorization, TestSpec, fixtures, outcomes, defects, test limits | initial/changed evaluation |
| ART-07 | Policy Operating Envelope & Human Decision Packet | allowed/denied effects, reviewers, exact scope/digest, expiry, SoD, conditions | change requiring approval |
| ART-08 | Target PEP Integration & Bypass Assessment | host seam, authenticated principal, target, policy version/ACK, bypass negatives | protective pilot |
| ART-09 | Telemetry/Monitoring & Detection Plan | signals, producers, SLIs, thresholds, baseline warm-up, false positive policy, owner | monitor objective |
| ART-10 | Incident & Response Runbook | incident join, contact, severity, containment, rollback, escalation, RTO hypothesis | active operations |
| ART-11 | Change/Drift Impact & Targeted Reevaluation Record | changed versions, affected grants/policies/controls, expiry, delta eligibility | CI, policy drift, incident |
| ART-12 | Operation Outcome, Effect & Remediation Receipt | logical action/attempt, policy and PEP, ACK, independently read-back effect, retest | exact protected action or close |
| ART-13 | Evidence-Bound Assurance/Executive Report | exact snapshot, known/unknown, coverage, remaining exposure, actions, signed vs hashed basis | report request / periodic review |
| ART-14 | Connector Lifecycle/Resilience/Offboarding Checklist | owner, permissions, health, rotation, fail mode, credential revoke and retention | integration/change/retirement |

**Document contract:** version, client consent, org/system/resource, environment, source of truth, as-of timestamps, author/reviewer, evidence refs, known/unknown, material change conditions, privacy/retention, last verification. Never invent a completed template from a declaration or issue a compliance certificate.

## 5. Sources and adapters to offer clients — map source to evidence, not “connect all”
Candidate families; install one only when the selected claim needs it and actual supported entitlement/security matches:

| Source class | Examples / transport to REUSE | HAIEC value | Hard boundary |
|---|---|---|---|
| App/source/CI | GitHub App, verified repo, CI job, SBOM, SARIF, signed build | code/tool capability, change evidence | static finding ≠ runtime exploit; Action v2 held |
| Cloud authority/identity | AWS IAM, Azure/Entra, GCP IAM, Okta, service accounts, workload identity | actual grant vs intended authority | connector credential success ≠ resource permission |
| AI model/agent platform | cloud-hosted LLM/agent gateways, platform model/version APIs, tools | model/agent/tool version, usage, action access | platform telemetry may be partial and sampled |
| Tool API / MCP | authenticated MCP server and policy/target host, action schemas | exact tool action/permission, caller intent | transport auth ≠ per-resource/action authority |
| Runtime observability | OTel/OTLP, app traces/logs/metrics, cloud native logging | actions, outcome/error, anomaly source | trace ≠ verified target-side effect |
| Data/RAG systems | vector stores, document registries, data catalog, DLP | retrieval/memory lineage, data policy | ingest only least-privileged permitted metadata |
| Security control/PEP | existing gateway, OPA/Envoy, AgentCore Policy/Cedar, IAM | real pre-dispatch block/allow/HOLD in bounded scope | native guard must be on all claimed paths |
| Incident/ticketing | existing Slack/email/webhook, PagerDuty/Jira/ServiceNow if customer approved | routing, dedup, acknowledgment and ownership | send ≠ ACK ≠ remedy |
| Billing/cost | provider usage APIs, internal requests/ledger | usage attribution, forecasts, provisional cap | billing lag and concurrency |
| Human/institutional evidence | signed control attestations, policy files, human reviews, benchmark datasets | context, applicability, quality criteria | document ≠ independent observed fact |
| Sector systems | ERP/MES, telecom ODA, healthcare EHR, financial clearing as authorized | business effect, consequence, auditable target | every adapter scoped and consented; synthetic demos separate |

**Reuse first:** OpenTelemetry GenAI semantic conventions (currently evolving), CloudEvents envelopes, identity provider and native PEP, established ITSM/SIEM/APM/data catalog and infrastructure policy. HAIEC owns evidence qualification, effect mapping, deterministic assurance, cross-plane authority, approved boundaries, decision-to-effect joins and verification. NIST AI RMF Govern/Map/Measure/Manage is a **coverage lens** (not compulsory sequence or certified attestation); OWASP Agentic 2026 / MITRE ATLAS are threat inputs, **not** the entire product scope. Customer-specific data/privacy/safety obligations vary.

## 6. Test catalog: what to recommend, what to run, and what “pass” establishes
Recommended test IDs for an approved bounded scope; a test exists only when a supported source/harness/owner accepts it. Never run production-destructive cases by default.

| Test family | Specific checks | Admission and interpretation |
|---|---|---|
| T01 Identity/tenancy | missing/foreign org, wrong workload/target/audience, delegated actor spoof, role reassignment | hard negative permission boundary; authenticated test identities |
| T02 Evidence qualification | forged producer, duplicate/reordered event, stale, revoked credentials, retention, conflicting sources | prove quarantine, source/age and UNKNOWN |
| T03 Permission/DAI | intended vs effective grant, unnecessary resource, expired tokens, privilege escalation | exact provider grant required for final authority claim |
| T04 Action coverage | direct API path, background job, retries, alternate tools, tool schema changes, network egress | confirm mandatory PEP coverage for claimed protected paths |
| T05 Decision/approval | wrong action digest/actor/target, expired/revoked/changed policy, SoD/CAS, HOLD no side effect, fresh resubmit | existing P09 human decision ≠ auto tool execution |
| T06 Target policy/PEP | version install/ACK, propagation lag, deny at target, fail closed, stale policy | per-target proof and time window |
| T07 Dispatch/effect | cross-worker double claim, payload conflict, timeout UNKNOWN, provider ACK, independent readback, compensation | never claim exactly-once without provider+ledger proof |
| T08 Application/agent security | injection, malicious retrieval/tool output, memory poisoning, exfil, tool escalation, cross-tenant leakage | negative/positive authorized QA fixtures |
| T09 Software/supply chain | SAST/SCA/SBOM, provenance, secrets, artifact tampering, signed release/agent/tool version | bounded static capability, not runtime exploitation |
| T10 Model & output quality | factual/groundedness, task success, refusal, adverse samples, prompt/model version regression, human override | client ground truth + cohorts/denominator required |
| T11 Robustness/reliability | malformed schema, rate limit, outages, replay, fallback, queue build-up, agent looping | safety on unknown and operational SLI basis |
| T12 Monitoring detection | first-seen action, novelty thresholds, concept drift, false positive, stale/quarantined source, missing events | alert/observation distinct from authorized violation |
| T13 Alert/response | dedup, suppression, missed delivery, wrong recipient, ACK and escalation, case join | delivery not human response |
| T14 Change/approval impact | altered tool, IAM, envelope, model, retrieval, data boundary invalidates dependent claims | selective re-evaluation, targeted approval invalidation |
| T15 Kill/recover | guard stop at every claimed path, in-flight handling, revoke propagation, manual safe recovery | independent actual target containment confirmation |
| T16 Budget/usage | concurrent reservations, settlement, stale billing, wrong attribution, quota failover | provisional meter vs real prevention |
| T17 Controls/control proof | applicable vs not applicable, configured vs active, negative/replay, retest after fix | UCP result/replay with exact identity and scope |
| T18 UI/REST/MCP parity | same org/role/evidence/availability, cross-tenant denial, restricted packet, true MCP registry | no fake AI-only approval or undeployed tool |
| T19 Resilience/rotation/offboarding | lost connector, key rotation, compromised credential, retention/purge, no signal | explicit fail mode and offboard evidence |
| T20 Incident/forensics | correlated provenance, tampered evidence, remediation vs retest, unknown gaps | verified closure only after fresh applicable proof |
| T21 Responsible AI/sector | privacy/fairness/safety/accessibility, domain accuracy, audit/review/records when applicable | context-specific human-reviewed acceptance |
| T22 Reports/reproducibility | stored eval identity, correct report version, policy digest, eligible public verification, as-of source | no evidence cross-snapshot laundering |

**Cadence defaults (proposals, not operational SLA):**
- Per-event or near-real-time **if trusted signal exists**: high-impact tool attempts, authorization changes, enforcement results, source failures and severe violations.
- On commit/deployment/config change: code/tool/model/prompt/policy/IAM/RAG impact comparison; narrower changed-claims reevaluation.
- Daily/weekly depending on actual signal cadence: source freshness, usage/cost, anomaly aggregation, alerts awaiting owner, expiring exceptions, baseline stability.
- Monthly/quarterly based on risk and obligations: human review of controls, threat scenarios, model quality samples, vendor/external dependency review, incident tabletop, exception renewal, disclosure packet.
- Incident-driven immediately where authorized: triage, containment/approval, revoke, restore, retest and new frozen receipt.
Do not claim “continuous” for periodic polling, sampled observations, configured-but-idle sources or retrospective replay.

## 7. Dynamic client recommendation engine (most valuable UX layer)
**Do not build another engine first.** Reuse existing E1 goal/capability guide, E4 source health, E5/E5.1 authority read, E6 decisions, actual P10 monitoring projection, existing Control Proof/test catalog and MCP registered tools. Compose a thin **Next Operational Action read projection**, per authenticated org/system/goal, optionally proposed later.

Each recommendation record:
```yaml
recommendation_id: REC-...
goal: e.g. "Know whether a refund agent may issue a refund"
system_id: scoped-system-id
action_id: optional-exact-action
classification: BASELINE | ASSURANCE | MONITOR | GOVERN | PROTECT | VERIFY
reason: exact current unknown, exposure, drift, control gap or expiring evidence
evidence_refs: [] # only qualified references
source_freshness: FRESH | STALE | NO_SIGNAL | UNKNOWN
readiness: READY | NEED_PERMISSION | NEED_SOURCE | NEED_HUMAN | NEED_TARGET_PEP | NOT_APPLICABLE | UNSUPPORTED | UNKNOWN
effort_estimate: optional range, never invented as measured
expected_proof: exact claim and strength if client completes action
existing_owner: backend/REST/current MCP tool or NOT_AVAILABLE
destination: valid current UI route, not a fictional action
actor: authenticated human or approved system
risk_of_inaction: client scoped, not generic fear
dependency: specific required gate, no unrelated global onboarding steps
```

**Ranking rule:** (1) unsafe active path / exposed high-impact grant / missing actual owner, (2) critical false-positive assurance state (stale data displayed active, unproven protection), (3) cheap existing-source improvement that materially closes evidence, (4) governance expiry/decision work, (5) optional high-effort integrations and optimization. Customer priority and consequence determine ordering; no generalized “trust score”. Prefer *one best next eligible action* + “Why” + what it proves + what remains unknown. Show “requires customer configuration” rather than executing unavailable steps.

**Example recommendations:**
- “The tool update policy is approved, but there is no confirmed native guard. Map a customer-controlled PEP and run a deny/bypass test before describing it as blocked.”
- “OTLP events were last received outside the accepted freshness window. Check producer auth and collector health. A historical event is not active monitoring.”
- “Risk response notification was delivered, but no human ACK is evidenced. Assign an owner or connect the existing incident response join.”
- “Your evaluation establishes a potential delete path; the target permission has not been independently read. Connect least-privilege IAM read access or supply qualified export.”
- “Model version changed and your old quality baseline may be inapplicable. Run a scoped regression rather than rescan all controls.”
- “No connected runtime source is necessary for the selected static-only code check. Run it with current repository evidence.”

## 8. Assurance confidence: dimensional, never a disguised compliance score
Present a **claim-specific assurance case** with independent evidence axes, each `ESTABLISHED / PARTIAL / STALE / NOT_ASSESSED / UNAVAILABLE`, and exact source:
1. Identity / system / owner and boundary qualified.
2. Capability / side-effect reachability established.
3. Approved authority and human decision effective for exact target.
4. Actual provider/resource grant and delegation established.
5. Control applicable/configured/deployed **independently**.
6. Control tests executed and applicable with accepted negatives.
7. Observed runtime activity and temporal source health established.
8. Guard/dispatch/target effect verified when requested.
9. Remediation/change/retest and reproducibility established.
10. Independent source corroboration / completeness / contradictory-evidence exposure.
Don't average UNKNOWN into success. A coverage vector gives useful assurance confidence; customer policy may require particular dimensions and evidence freshness before a decision.

## 9. UI location — no new full sidebar
| Existing page / role | Enhance with, without inventing a workflow |
|---|---|
| System Overview / Executive portfolio | risk/coverage/owner/last evidence + “next recommended action” by selected client goal; per-system not blanket protected |
| Action Path / System Map | exact agent/tool/resources, new actions, effective permissions, trust boundaries, PEP/no-bypass gaps |
| Authority / DAI | five evidence planes, delegated chains, provider grants, action/policy/effect joins, gaps |
| Evaluate / Assurance | baseline snapshot, reasoned applicable controls, targeted test choice, source-quality and regression basis |
| Controls & Operations | applicable/configured/approved/distributed/wired/tested/observed/effect proven as separate lenses; remediation |
| My Work | responsible owner, pending/rejected/approved/expired/revoked cases, scope, SoD; NO assistant approval |
| `/monitoring` | fresh source, passive vs test vs guardrail vs PEP; signals, baseline anomalies, alerts vs ACK, drift and owner |
| Connections Center | source scope, credential/health/rotation, customer PEP installation, opt-in adapter, offboard |
| Protect / Kill Switch | exact live native PEP scope, guard applicability, action HOLD, containment and recovery proof or NOT_WIRED |
| Investigations / Incidents | source-qualified event→case→owner→response→closure; no fabricated case |
| Evidence / Reports / Verify | snapshot IDs, assurance case, coverage frontiers, exact receipts and change/retest |
| MCP/IDE bridge | same scoped evidence/rights/tool *read* registry as UI; preflight + recommendation + deep link, no phantom tools |

**P10 scope protection:** P10 is the next **existing Monitoring page** UX workstream, *not* this full catalog's implementation. Use only qualified source labels, truthful freshness, alerts vs ACK and differentiated monitoring/enforcement states. P11 reporting, P12 usage and P13 shell remain as previously scheduled; separate E5.2 implementation pilot does not block P10.

## 10. Implementation tiers and decision gates
**T0 — Inventory/contract (NOW, planning):** Adopt this catalog as client next-action taxonomy and provider-neutral artifact specs; map 76 rows to source modules/actual tool registry/permission, owner, disposition. Merge Common Repo only. No HAIEC app patch or false status.

**T1 — Show real existing actions (P10 owner-safe):** On Monitoring show current source health, freshness, actual observed/timed coverage and correct next links; test stale/no signal/error/unknown/role. Add no new collector or score.

**T2 — Small client-specific starter pack:** Generate ART-01..06 only from source-qualified content; keep unknown and manual declarations segregated; reuse built modules. Add control/DAI/read-only qualified MCP paths *only* after tool registry verification; no generic agent-written approval.

**T3 — One reversible bounded E5.2 QA action:** Action→current policy/human decision→real durable claim→customer PEP→provider ACK/readback→incident/Verify receipt; negative bypass/race/expiry/revocation. Customer scope/consent mandatory. KestrelVoice QA greeting change is a candidate, NOT an integrated or tested target. Independent external E7 MCP acceptance remains required before claiming real ChatGPT client workflow. Private source capture plus separately narrated/redacted layer-by-layer film if run.

**T4 — Operational closed loop:** case ownership, drift invalidation, remediation/retest, recovery and artifact expiry; source-triggered reevaluation, no unsourced autocertification.

**T5 — Selective expansion:** provider usage atomic limit, multi-PEP policy distribution, delegated cross-system signed effect, deeper quality/bias benchmarks, sector-specific control/test adapters, review recurring ops contracts. Commercially scoped, not general prerequisites.

**Pilot stop/go for customer protection:** actor/target/resource established; right current authorized policy; actual host PEP all claimed paths; approved effect envelope/human conditions; fail-closed on unknown; atomic claim; denial/HOLD tested; target ACK/independent readback as needed; drift/revoke/recover; owner/case; tenant/REST/MCP parity. If not, label integration assessment or not verified.

## 11. Operational metrics and safeguards
- **Observability:** percent of *in-scope* sources with fresh qualified evidence; number of stale/unbound/quarantined sources; expected cadence vs actual; sampled windows separately.
- **Assurance:** claim-specific established/unknown coverage by control/impact; test freshness; applicable replay negatives passed; overdue rechecks; evidence expiry.
- **Governance:** decision age, pending owner, out-of-scope request, exceptions about to expire, re-eval after change, ACK vs case closure.
- **Protect:** number of *explicitly wired scoped operations*, independent deny/bypass tests, target policy digest currency, receipt qualification, propagation; no estate-wide denominator without inventory.
- **Runtime:** first-seen high-impact operations, permission drift, outcome correlations, quality/SLI/cost baselines with warm-up and false positive handling.
- **Safety/privacy:** no raw prompts/secrets by default; tenant scoping + least-privilege; signed/attested producer distinction, protected logs and consent; minimize and redact payloads; timestamps, retention, data export rights; human-only authority for high-impact actions.
- **No universal assurance index:** a flat score hides unproven target enforcement or missing evidence. If a score is offered later, compute only on explicit applicable dimensions with visible UNKNOWN and deterministic documented weighting (not included in scope now).

## 12. Client example: from first connection to renewed assurance
**Refund Agent example, illustrative ONLY:** Customer registers app, connects authorized GitHub source; HAIEC recommends action inventory and actual provider permission because refund operation is consequential. Client establishes ART-01 ownership, ART-02/03 action/authority map; static code reveals API path, but provider grant remains UNKNOWN. Read-only IAM permission connection establishes actual refund limits. E01 approved envelope and human reviewer decide per-limit actions. Customer PEP *if* opt-in integrated blocks unapproved refund attempts; a HOLD cannot execute until fresh decision and resubmission. Approved refund may dispatch via atomic claim; target financial provider readback establishes exact effect (not just HTTP 200). Telemetry monitors new refund destinations, quantity anomalies, policy/grant drift; alert maps to accountable human case, response and re-test. Frozen report shows exact time, identities, source and limits, verified effects and any unknown. Model upgrade triggers affected re-eval, not forced full re-onboarding. Without target PEP, UI truthfully shows authorization/evaluation but NOT_WIRED protection.

## 13. Reference and precedence
The authoritative code owners remain the HAIEC application and documented PRs. This catalog **adds coverage**, does not override customer tool registry/API, make a released package or change human permissions. Do not modify HAIEC production behavior through a documentation commit.

External alignment (research lenses, not proof of certification): NIST AI RMF core/playbook Govern/Map/Measure/Manage (https://airc.nist.gov/airmf-resources/airmf/5-sec-core/); OWASP Agentic 2026 (https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/); OpenTelemetry GenAI agent semantic conventions marked Development (https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md). Additional optional customer profiles: ISO/IEC 42001, ISO 27001, sector privacy/compliance, SOC2, MITRE ATLAS. Compliance applicability always jurisdiction, contract and system scoped.
