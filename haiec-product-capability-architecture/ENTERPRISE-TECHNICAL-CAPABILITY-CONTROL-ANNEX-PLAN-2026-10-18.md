# HAIEC Enterprise Technical Capability & Control Annex — Source-Backed Publication Plan

**Date:** 2026-10-18  
**Status:** EDITORIAL PLAN / PUBLIC-SAFE DRAFT / NOT THE ANNEX, DECK, OR A PRODUCT RELEASE  
**Owner:** HAIEC product messaging. **Canonical implementation:** `subodhkc/haiec-website` and separate producer repositories. **Planning repository:** `subodhkc/common-repo-drive`.  
**Purpose:** Pair an executive-value HAIEC capability brief with a separate evidence-backed technical/control annex. Reuse existing documentation and demonstrations without creating a parallel product roadmap or overstating release, integration, enforcement or certification claims.

## 1. Executive decision and design principles

**Recommendation:** Publish a ~10–12-page executive-facing Capability Brief plus an ~18–22-page Technical Capability & Control Annex, with optional detailed control crosswalk and source/evidence inventory as separate downloadable reference tables. Do not build the deck yet. This document is the technical-annex content architecture, demonstration selection, evidence intake and editorial acceptance plan.

**Flagship proof:** Manufacturing Station 217, consisting of (A) a genuine persisted/digest-verified HAIEC evaluation over *synthetic* manufacturing records, and (B) a **separate** browser-local illustrative operating response. **Supporting technical proof:** TM Forum 2026 participant-published archived event evidence with frozen C7/C9/C16 scoped tests, telemetry/alert mechanism and explicit gaps. **Pre-event talk:** `https://subodhkc.com/tm-forum/haiec-agentic-assurance-deck.html` is an architectural thesis, not assessed event outcome.

**Executive value:** reduce unexamined consequential AI exposure; support defensible deployment choices; preserve human accountability; make gaps and changes visible; consolidate evidence for security, governance, audit and customers. These are *outcomes to validate* in enterprise POCs, not claimed measured reductions.

**One-sentence positioning:** HAIEC helps organizations establish what consequential actions their AI systems can cause, which authority and controls apply, what the available evidence proves, and what needs human decision or further verification.

**Information architecture:** Three explanatory pillars: Understand / Assure / Govern & Operate. Six **independent** customer jobs: Discover / Evaluate / Authorize / Monitor / Protect / Verify. The five evidence planes are independent assertions: REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED. Delegation and consequence/effect witnessing are orthogonal, not a sixth evidence plane. AI assistants guide; canonical deterministic engines produce evidence-bound decisions.

**Publication safety:** The shared repository is public. Do not include private security findings, credentials, internal customer data, live tenant identifiers, or confidential organizer material; externalize exact exploit/protection detail only after public-rights review. Product source presence is not automatically deployed or customer-operable capability.

## 2. Case selection and business narrative

### A. Manufacturing — flagship executive narrative
- Primary link: https://haiec-manufacturing-demo.vercel.app/?report=s217 ; two-minute judge path: https://haiec-manufacturing-demo.vercel.app/?report=judge ; technical case: `?report=s217-tech`; report hub: `?report=hub`.
- Verified **repository-documented** data: approved target `WO-217-4802`, recorded action `WO-217-4803`; HAIEC canonical detector `MFG-EFF-001` records wrong-target mismatch, scoped effect-witness evidence and overall REVIEW. Canonical v3 case data derive from digest-verified frozen evaluations of **fictional** source records; all 45 current evaluations are REVIEW, not overall pass.
- Separate illustrated continuation: subsequent attempt `DEMO-GW-SYS-217-02` held at synthetic demo gateway while permissible advisory work continues; fictional Quality review, local MES/ERP/equipment state and monitoring are demonstrations, not actual customer production enforcement. A real evaluated wrong-target event precedes the later *simulated* hold; do not conflate them.
- Executive hook: “The API succeeded. The business action was still wrong.” Outcome: visibility into consequential action divergence plus traceable basis for review; illustrates *potential* role of human gates and operational control.
- UI/source assets: frozen report and receipts; 45-case report hub; executive report; narrated 113.8-second judge video and screenshots under `docs/hackfw/screens-v29`; `docs/product-story/HAIEC-MASTER-SHOWCASE-CONTRACT.md`; `docs/hackfw/JUDGE-GUIDE.md`. Video is a local repo artifact; externally hosted video URL not confirmed in the inspected pack.
- Independent synthetic factory tests are useful engineering evidence; do not claim factory integration, industrial interlocks or live ERP/MES/PLC operation.
- Browser accessibility of the public deployment **was not independently verified in this review**; the repo documents routes and deployment. Before publication, perform a simple manual/automated link and screenshot verification. No new assurance rerun is required just to write the annex.

### B. TM Forum — supporting technical/control demonstration
- Canonical public archive: https://github.com/subodhkc/tmf-2026-evidence ; `register.yaml`, `gap-list.md`, `SUBMISSION_PROVENANCE_AND_VERIFICATION.md`, release `v7a0bb5f3`.
- C16: frozen 60,000 tokens/run cap, 35,559-token SATISFIED run and 106,829-token NOT_SATISFIED run; distinguish **measured control verdict** from proof an over-cap call was blocked.
- C9: two assessed SATISFIED runs under frozen policy; no sanctioned assessed live breach. Do not invent one.
- C7: 9/10 coverage with a missing negotiation event. This is ideal for explaining NOT EVALUATED, coverage uncertainty and partial results.
- Monitoring: ingested OTLP traces, clean real-telemetry negative, separately labeled synthetic detection canary with alert delivery. Control-test-verdict-to-alert not wired in this archive. Human notification evidence is bounded; delivery does not prove all incidents are detected.
- Enforcement: organizer-owned model/tool allow/deny evidence and organizer kill-switch pause/recovery pathway; this is not HAIEC's native production adapter operating for this use case.
- Provenance: manifest and public TAR are inspectable. Byte-exact organizer-held submission receipt and independent scientific/generalization claims are **not** established. Check third-party material redistribution before placing full payload screenshots in public marketing.
- Prefer event register/release for technical annex proofs; use subodhkc.com pre-event thesis for conceptual architecture only.

### C. How to combine without confusing the reader
**Narrative sequence:** 1) high-impact business mistake (manufacturing), 2) explain HAIEC evidence-bound assessment, 3) illustrate separate policy/human-operating response, 4) demonstrate reproducible scoped control tests in a different technology environment (TM Forum), 5) show enterprise-wide architecture and limits. Do not imply telecom controls automatically execute in manufacturing or that manufacturing simulations establish production guard effectiveness.

## 3. Recommended technical annex architecture (20 core pages, optional reference tables)

| Page | Heading | Customer question / executive value | Content and required proof | Primary visual |
|---|---|---|---|---|
| 1 | Technical proposition and assurance boundary | Why do we need it next to existing security investments? | What HAIEC does/does not do; customer decision supported; differentiators; source/state legend | Evidence-to-decision value chain |
| 2 | HAIEC operating architecture | How do the moving parts connect? | Three pillars, six independently selectable jobs, canonical evaluation ownership, API/MCP/workspace, optional producers | Reuse corrected `haiec-technical-evidence-architecture.svg` |
| 3 | Inventory, source onboarding, access | Which AI systems are in scope? | AI system/asset distinction; GitHub App, IDE/MCP, API, structured source, local preview, endpoint test; auth and prerequisites | Asset/source map with readiness by mode |
| 4 | Capabilities and consequential action paths | What could the agent cause? | Tool/API/handler/target relationships, source reachability, exact paths and qualification; illustrative alternate route | Reuse topology/consequence visual with evidence labels |
| 5 | Five planes, delegation and the authority gap | Does valid permission mean authorized business action? | Requested/policy/granted/code/observed remain separate; DAI dimensions; effect-witness limits | Five-plane side-by-side + wrong-target comparison |
| 6 | Deterministic Assurance Engine | How is the result reached? | Claim, source scope, evidence qualification, finding, coverage, ALLOW/REVIEW/BLOCK as *assessment disposition*, human decision separate | Evidence chain, explicit proof frontier |
| 7 | AI AppSec and developer-security package scope | What checks our code? | Static source analysis, AI output risks, prompt/RAG, secrets, tools; AI AppSec 122/79 **as separate package**; method/coverage | Findings, covered files, omitted files, verified scan identity |
| 8 | MCP and tenant isolation | What if tools cross tenant or auth boundaries? | 57 separate static rules, multi-tenant data/query/session/cache/tool risks, SARIF; static detection does not prove exploit | Tenant-boundary source diagram |
| 9 | Agentic/OWASP risk taxonomy | Which AI threats are covered? | OWASP LLM/Agentic, MITRE ATLAS where relevant; map risk -> registered check -> actual executable producer -> evidence -> limitation | Risk coverage heatmap with UNKNOWN/NOT TESTED |
| 10 | Detection registry and control universe | Do 176 detections mean 176 protected controls? | 176 registered definitions/31 families at dated snapshot, 157 executable registrations/19 register-only, 26 typed intake profiles; 45 control catalog entries distinct from checks/tests | Capability/count denominators separated |
| 11 | Control setup and effectiveness | Is a listed control actually operating? | Catalog -> applicability -> versioned config -> approved policy -> wiring -> source health -> alert/guard -> qualified test/replay -> response; separate statuses | Multi-facet control passport example |
| 12 | GitHub, IDE/MCP and CI/CD | How does DevSecOps integrate it? | GitHub App + PR static, authorized API, MCP read/submit, source/binder checks; local/CI preview, GitHub Action v2 not released; v1 PAT flow deprecated; `CI_RESULT != ASSURANCE != HUMAN_APPROVAL != DEPLOY_BLOCK` | Release-stage evidence/gates swimlane |
| 13 | Runtime adversarial testing | How does an agent behave when challenged? | Authorized endpoint tests for prompt injection, jailbreak, leakage, role confusion, tool forcing; model claim ≠ tool execution ≠ external effect | Probe → response → witness → bounded finding |
| 14 | Continuous monitoring, usage and drift | What changed after release? | OTLP logs/metrics/traces, structured inputs, binders, freshness, thresholds, drift/consequence delta, token/cost baselines, guard/alert sources; telemetry gaps visible | Baseline-current difference with source coverage |
| 15 | Protect, kill switch and recovery | Can a dangerous action be stopped? | HAIEC guard/kill-switch code and intended native adapter contract; production native adapter registry **not wired** in inspected source; separate alert, human auth, target dispatch, guard acknowledgment, effect witness and recovery | Four-state intervention architecture, clearly illustrative |
| 16 | Governance and human decisions | Who approves what? | Versioned operating envelopes, reviewer binding, conditional approval, rejected/pending/revoke/expiry, SoD; genuine HAIEC decision mechanisms vs fictional demo actors | Decision queue and exact scope card |
| 17 | Compliance, responsible AI and control crosswalks | How does this support audits? | Framework-oriented evidence, ISO/IEC 42001, ISO 27001, NIST AI RMF/CSF, SOC 2, GDPR/HIPAA, EU AI Act applicability, NYC LL144; mappings are not certification. Compliance Twin preview/limits | Framework → control → technical evidence → reviewer |
| 18 | Evidence, reports, replay, investigations | What can be proven and independently inspected? | EvidenceEnvelope, producer/source binding, SHA-256/digest, saved evaluations and receipts, report/version state, LogSense optional forensic producer; claim uncertainty | Proof lineage from source to receipt |
| 19 | Manufacturing Station 217 assessed case | Can a nontechnical buyer understand the product? | Actual HAIEC wrong-target finding, REVIEW, receipt; **distinct** hypothetical subsequent demo gateway hold and fictional approver | Two-lane timeline: assessment vs simulated controls |
| 20 | TM Forum C7/C9/C16 + POC acceptance | Can the architecture generalize, and what can buyers validate? | Real workshop evidence with stated limitations; propose one-system POC with source/authority/evidence availability, acceptance criteria and report outputs | Control-test comparison + POC decision card |

**Optional reference tables (do not add 20 tiny slides):**
A. Full catalog of 45 controls by family and live per-control maturity.
B. Detection registry by producer, 31 families and per-rule source/readiness.
C. OWASP/MITRE/ISAF/control-framework mapping by *actual* implementation/evidence.
D. Integration/permission/evidence schema matrix (API/MCP/GitHub/runtime/OTLP/CI).
E. Technical claim ledger (copy, source owner, revision, deployed verification, public qualification, screenshot/source reference).
F. Case evidence manifest: manufacturing 45 frozen v3 evaluations and TM Forum public release verification route.

## 4. Representative capability/value taxonomy for the annex

| Customer capability | Technical owner / available evidence | Business decision supported | Required caveat |
|---|---|---|---|
| Discover | AI System workspace, GitHub/source, agent trace/constellation | Which AI systems and consequential capabilities warrant attention? | Registered system != fully discovered system |
| Evaluate | AI AppSec, runtime probes, DAI and canonical assurance | What security/authority gaps matter before release? | Registered check != executed test; no source => unknown |
| Authorize | Versioned operating envelope, deployment decision records | Who may approve which scope, for how long? | Approval != operational mediation or assessment pass |
| Monitor | OTLP/log/structured evidence, thresholds, source health, deltas | What material change or out-of-bounds signal needs investigation? | Ingested != evaluated; anomaly != breach |
| Protect | Guard/kill-switch code, adapters, human response workflows | Can target-integrated controls restrict an action? | Production target/native adapter absent by default |
| Verify | Evaluation snapshots, reports, receipts/passports and hashes | Can we substantiate what was tested, decided and observed? | Hash confirms integrity, not real-world correctness |

Additional supporting offerings: independent AI AppSec, MCP Tenant Isolation, LLMVerify, specialized hiring-regulation workflows, AI vendor discovery/assessment, Compliance Twin preview and optional LogSense forensic normalization. Do not present these as one automatic SaaS pipeline unless an actual integration route is qualified. ISAF v1 published research; ISAF v2 evolving/unpublished technical methodology, not a product certification.

## 5. Critical visual anchors and assets to reuse

1. **Executive consequence proof:** Approved work order 4802 vs observed 4803, bounded actual HAIEC result; side-by-side lane showing subsequent fictional demo control. Lead with business risk, not a product UI screenshot dump.
2. **Five evidence planes:** parallel independent questions, with qualified/unknown state markers and DAI as an orthogonal authority/delegation test.
3. **End-to-end assurance architecture:** use existing shared `diagrams/haiec-technical-evidence-architecture.svg`; update labels only as required. Evidence producer/readiness is not an assessor verdict.
4. **Control passport:** a single control with separate catalog / applicable / configured / approved / connected / monitored / tested / enforced / effect-verified statuses. No composite fake green indicator.
5. **CI release swimlane:** Code diff -> static/AI AppSec/PR evidence -> optional HAIEC assurance -> human release decision -> *independently configured* CI gate -> future reassessment.
6. **Security threat-coverage matrix:** OWASP threat and HAIEC control mapped to actual rule/producer and 'assessed', 'supported but not exercised', 'registration only', or 'not established'.
7. **Runtime evidence/protection:** separate event observed, finding, alert delivered, human approval, target guard result, verified effect and recovery. Arrows to target are dotted unless target-native adapter wired.
8. **Telecom three-control test:** C16 satisfied and not-satisfied measured runs, C9 satisfied, C7 partial coverage; explicitly show not evaluated/no live violation where appropriate.
9. **Framework evidence crosswalk:** Requirement -> cataloged control -> executed test -> qualified evidence -> external reviewer/assessment. No 'certified' shortcuts.
10. **POC outcome card:** 1 AI system, 1 consequential action, 1 accountable owner, limited source/evidence plan, repeatable bounded evaluation and explicit unknowns.

Existing assets/reference:
- https://github.com/subodhkc/common-repo-drive/blob/main/haiec-product-capability-architecture/DIAGRAM-SPECIFICATIONS.md
- https://github.com/subodhkc/common-repo-drive/tree/main/haiec-product-capability-architecture/diagrams
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/product-story/HAIEC-MASTER-SHOWCASE-CONTRACT.md

## 6. Evidence ledger / release status rules

Create editorial source ledger before external publication. Each feature claim must have:
`claim_id | customer_sentence | capability_owner | product_or_independent_package | exact_source_revision | evidence_input | evidence_scope | status | integration_prereq | display_qualifier | public_evidence_URL | screenshot_anchor | last_verification_date | editor_signoff`.

Suggested statuses:
- **Demonstrated — persisted evaluated evidence** (scope/fixture always named)
- **Source-implemented / supported pathway** (customer operation depends on tenant/role/source)
- **Evidence-dependent / requires native integration**
- **Preview or distribution-held**
- **Scenario simulation**
- **Cataloged or proposed**
- **Not established**

Do not auto-promote a status because a UI card, tool manifest, registry entry, video, or prior successful demo exists. Public-safe specifics only.

**Key disambiguations:** AI AppSec 122 detectors/79 checks and tenant-isolation 57 rules are **separate developer packages**. HAIEC core 176 detection registry entries are not identical to 45 controls, 11 visibility profiles, 15 prioritized launch IDs, 3 specialist C7/C9/C16 tests, 221 audit questions or ISAF research checkpoints. Do not add counts together.

**OWASP/compliance claim guard:** state 'relevant check or framework mapping' until exact version, check, executed test and evidence are matched. Never claim OWASP certification, SOC 2 certification, ISO certification, universal AI safety, compliance or constant threat blocking.

**Deployment/protection guard:** Product assessment `BLOCK` describes a scoped evaluation outcome. It is not a confirmed CI deployment failure, API denial, native runtime kill or irreversible target-effect prevention.

## 7. POC proof and buyer metrics

The annex should offer a source-bounded evaluation, not a promise of turnkey universal production installation.

**Initial scope:** 1 consequential AI workflow, 1 sponsor/business owner, 1 technical counterpart, explicit chosen objective; start with GitHub remote or existing evidence if those are accessible; add applicable IAM, telemetry and policy only as needed. Use synthetic/non-sensitive data if available.

**Proof criteria:**
1. Correct organization/system/source identity, access/consent, and dated provenance.
2. At least one exact action/authority question with a qualified evidence basis and clearly declared unknowns.
3. Deterministic rerun stability on frozen source; changes between comparable snapshots are visible.
4. Traceable finding/assessment, applicable control maturity, and separate human decision where required.
5. Executive and technical report with remediation, residual uncertainty, integration effort and conditions for the next deployment phase.

**Metrics to measure rather than promise:** critical/high risk paths surfaced per evaluated system; % of selected claims with sufficient qualifying evidence; time to review and disposition; manual evidence-preparation time; actionable remediations accepted; unknowns resolved across successive evaluations; operator response time where source and target are instrumented. No invented ROI or incident-reduction rates.

## 8. Editorial production sequence (without building deck)

- **Phase 0 — claim freeze:** Re-read canonical HAIEC Main registries/status, source manifest, control/test availability and manufacturing/TM frozen records immediately before publication. Resolve any contradiction with dated documents; inspect deployment if making live claims.
- **Phase 1 — annex copy:** Draft 20-page narrative from table above; reuse existing customer copy and diagrams; prefer concrete and simple action cases. Do not require full 45-control enumerations in executive pages.
- **Phase 2 — technical proof:** Create crosswalk tables and exact source/evaluation manifests from public-safe records; select redacted manufacturing screenshots and event package facts; preserve evidence identity and simulation labels.
- **Phase 3 — design:** Executive brief and technical annex share one typography/color system; reserve diagrams and fine-print tables for annex. Maintain public-safe URLs and optional QR proof references.
- **Phase 4 — review:** CISO/DevSecOps review of risk, false-positive and source scope; compliance counsel of framework language; executive review of ROI/decision usefulness; owner sign-off for live integration claims.
- **Phase 5 — publication:** PDF first, optional short PPT later. Verify file metadata, URLs, legibility/contrast, accessibility, full screenshot captions and public licensing. Update exact revision/date on source ledger.

## 9. What not to build or claim

No new verdict engine, additional generic scanning package, invented runtime telemetry, product integration, industry profile, native kill switch, dashboard, simulated evaluation, or test rerun is needed for the annex. Editorial/reuse work only. Do not send a 'we block all dangerous agent actions' claim until target-native adapter binding, guard decision and effect witness are proved.

Do not conflate `subodhkc.com/tm-forum/haiec-agentic-assurance-deck.html` (pre-event thesis) with the archived assessed event record. Do not claim the manufacturer demo is a live client factory. Do not treat the TM Forum participant archive as an organizer audit or an independent guarantee of generalization.

## 10. Verified/documentary sources consulted

**Canonical HAIEC and shared planning:**
- https://github.com/subodhkc/haiec-website/blob/Main/public/.well-known/haiec-capabilities.json
- https://github.com/subodhkc/haiec-website/blob/Main/lib/developer-integration-source-status.ts
- https://github.com/subodhkc/haiec-website/blob/Main/lib/kill-switch/native-enforcement-adapter.ts
- https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts
- https://github.com/subodhkc/common-repo-drive/blob/main/haiec-product-capability-architecture/HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md
- https://github.com/subodhkc/common-repo-drive/blob/main/haiec-product-capability-architecture/DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md
- https://github.com/subodhkc/common-repo-drive/blob/main/haiec-product-capability-architecture/E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md
- Drive Master Research Register (2026-10-17): https://docs.google.com/document/d/1jZQ6Jlsm8oz_yvxB53gei94QjZS7RDCjzCJx1dNIJ1Q/edit
- Drive Full Capability & Operating Experience (2026-10-16): https://docs.google.com/document/d/1-ykUVQj6-wN3r6ZdB-9GYHPdn_rVytUrOmClbjT5sZ8/edit

**Manufacturing:**
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/README.md
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/product-story/HAIEC-MASTER-SHOWCASE-CONTRACT.md
- https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/SUBMISSION.md

**TM Forum:**
- https://github.com/subodhkc/tmf-2026-evidence/blob/main/README.md
- https://github.com/subodhkc/tmf-2026-evidence/blob/main/register.yaml
- https://github.com/subodhkc/tmf-2026-evidence/blob/main/gap-list.md
- https://github.com/subodhkc/tmf-2026-evidence/blob/main/SUBMISSION_PROVENANCE_AND_VERIFICATION.md

**External narrative:** https://subodhkc.com/tm-forum/haiec-agentic-assurance-deck.html is pre-event architecture. Its publication does not establish event runtime results.

**Outcome of this document:** An authoritative editorial work plan, not a shipped capability claim. All product code and existing demonstrations unchanged.
