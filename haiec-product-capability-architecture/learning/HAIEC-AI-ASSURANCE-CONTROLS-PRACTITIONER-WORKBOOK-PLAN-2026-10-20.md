> **2026-10-20 INTERACTIVE WORKBOOK BUILT AND BROWSER-VALIDATED.** [Open the complete offline-capable, light-theme HTML practitioner workbook](HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html). It is a self-contained educational HTML file with 10 sections, 45 exact source-mapped control cards, filters for 8 families/15 launch-priority/11 Visibility-supported/3 specialized, 45 individual evidence-source knowledge checks, 12 fully authored consequence scenarios and 36 three-step decision questions, an executive 3-case mode, animated agent-to-target and 8-family diagrams, clickable control-proof facets, five evidence planes, four Control Visibility states, the four independent monitoring lenses, source freshness scenarios, response and target-proof boundaries, case-linked controls, shortlisting, editable review worksheets, local Markdown/JSON export, and full print-style reference sections. **Tested locally using system Chromium + Playwright:** 45/45 catalog microchecks, 36/36 case answers, 12/12 case views, 3-case executive subset, 45/15/11/3 catalog filters and eight authority-family items, full source/visibility tabs, STALE-source counterexample, two export types, clear-session reset, and all 10 panels + 45 control mini references + 12 case summaries visible in print-media. No JavaScript page errors or document horizontal overflow at 320, 390, 768 or 1280px. Desktop/mobile screenshots reviewed. All source IDs, catalog questions and intended source labels derive from the 2026-10-20 manifest snapshot, with canonical source labels reconciled. **Not yet independently tested:** user browser file:// rendering (automated sandbox rejects file://; in-memory HTML tested), page-by-page exported PDF, actual screen-reader 200% zoom, live account/MCP workflow, exhaustive anonymous HTTP destination audit. **Scope unchanged:** no HAIEC product control detector, real tenant result, application website page, source ingestion, target protection or commercial entitlement changed. This update supersedes the earlier planning-only status for the separate HTML asset, while preserving the original plan for traceability.\n\n# HAIEC Learning Series #2: AI Assurance Controls Practitioner Workbook

**Reviewed:** 2026-10-20
**Artifact:** Detailed educational content, scenario, data-source, interactive HTML and validation specification.
**State:** PLAN ONLY. No HTML workbook, HAIEC product code, source ingestion, live control execution, customer deployment or website change is included in this deliverable.
**Working title:** From Control Catalog to Verified Assurance: HAIEC AI Assurance Controls Practitioner Lab
**Canonical curriculum series:** #2, following the DAI Authority Decision Lab. Companion to the [Enterprise First 30 Days workbook](HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html).
**Primary audiences:** Security and AI practitioners, developers, GRC/control owners, technical assurance reviewers, risk executives, HAIEC partners and customer operations leads.

## 1. What is new, and what we must not duplicate

HAIEC already has:
- [Canonical 45-entry controls manifest](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts).
- A Controls & Proof UI in System Workspace, including catalog filters, selected-control facts, evidence, policy, native/legacy results, replay and operational context. [Current React panel](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ControlCatalogPanel.tsx).
- Existing Control Visibility and proof/read models, exact identifiers and category differences. [Visibility contract](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/types.ts).
- Existing public [Evidence](https://www.haiec.com/evidence), [Assurance](https://www.haiec.com/assurance), [AI Security](https://www.haiec.com/ai-security), and [Getting Started](https://www.haiec.com/docs/getting-started) explanations.
- A separate standalone marketing-design [Assurance Controls and Evidence page plan](../WEBSITE-ASSURANCE-CONTROLS-AND-EVIDENCE-SIGNATURE-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md) and prototype. The website source has an assurance-controls page but an anonymous page status was **not verified** in this review. Do not treat planned/product page as the student lab itself.
- [DAI Authority Decision Lab](HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html), which teaches who authorized consequential choices; this new course teaches what a control asserts, what source/test can establish that assertion, and what remains operationally unverified.
- [76 post-onboarding activity research catalog](../POST-ONBOARDING-CONTINUOUS-ASSURANCE-AND-OPERATIONS-CATALOG-2026-10-18.md), which is **not** 76 released product actions or part of the 45 control count.

**New learning value:** A case-driven practitioner course, control-by-control reference and source/evidence qualification workbench. It will teach users to select a *materially applicable subset* from the 45, distinguish requirement/policy/test/execution/proof, evaluate a result, prepare an accountable remediation and recheck, and operate the evidence over time.

The HTML is education-only: it never computes HAIEC results, issues approvals, executes actual tests, connects customer systems or writes canonical records. It can link a permissioned learner to the actual HAIEC workspace with appropriate authentication.

## 2. Current source-verified facts and correction to legacy wording

The canonical Control Catalog has **45 entries total**, not 45 profiles plus 3. The 45 are **42 G/S/A/R/L/E/P catalog profiles + 3 specialized C7/C9/C16 tests**. The manifest header still says "45 cataloged control profiles + 3 existing specialized Control Tests" while its later comment and actual array define 45 total. **The array is the authoritative count**, and older header/editorial copy must not drive the workbook. This is a source-documentation cleanup recommendation, not an instruction to change production during this docs project.

In the manifest as read on 2026-10-20:
- Governance G01–G07: **7**
- Security S01–S07: **7**
- Authority A01–A08: **8**
- Runtime R01–R07: **7**
- LLM L01–L05: **5**
- Evidence E01–E05: **5**
- Responsible AI P01–P03: **3**
- Specialized C7, C9, C16: **3**
- **15** launch-priority entries, which are a **design/selection flag**, not proof those 15 have shipped.
- **11** entries in the implemented Control Visibility ID list: A02, A03, A04, A05, A06, A08, E01, E03, E05, R02, R03. That means **source projection support**, not that the selected customer system was tested or the control was satisfied. Specialized C7/C9/C16 are not in the 11 visibility-supported IDs and have separate test provenance/status.

**Snapshot:** [exact 45-item JSON content snapshot](HAIEC-AI-ASSURANCE-CONTROLS-45-CATALOG-SOURCE-SNAPSHOT-2026-10-20.json), captured from main manifest blob SHA c659416e523363938d31342f88e8eae37fd5457e. Snapshot is a teaching build input, **not** a replacement canonical production catalog. Future authoring must re-read Main and reconcile all changed titles/questions/IDs/status flags.

### Four independent facts that the student must not confuse

1. **Catalog metadata:** A named control and desired evidence question. Not a test or installed mitigation.
2. **Control Visibility read model:** For supported controls only, a current bounded source-qualified snapshot: DETECTED_FINDING, NO_FINDING_OBSERVED, COVERAGE_INSUFFICIENT or NOT_ASSESSED. **NO_FINDING_OBSERVED is not PASS.**
3. **Native Control Test and U5 assurance:** A separately recorded, actual test specification/run/result, evaluation and possible replay. Its native scope, IDs, freeze and evidence are distinct from any catalog badge or visibility summary. ALLOW/REVIEW/BLOCK is a bounded U5 disposition, not the Control Visibility state or a human deployment approval.
4. **Operational guard/target outcome:** Customer-native mediation and independent target-side effect witness require additional source/permission and binding. A policy, configured guard, test observation, alert or reported HTTP response does **not** imply all actions were blocked or a target mutation was verified.

#### Reporting ladder, teach as independently inspectable dimensions

- Cataloged / considered **and applicable**?
- Producer configured? qualified source identity, permission, time and scope?
- Implemented visibility projection? Current source/capability basis?
- Test specified and authorized? Which test and evaluator actually ran?
- Test executed? Actual persisted result, source/provenance and run ID?
- Assessed under exact system and control? Frozen Evaluation ID and evidence?
- Human owner accepted, rejected, deferred or required remediation?
- Actual runtime guard wired? Request -> decision -> dispatch -> independent target proof?
- Independently re-evaluated, replayed and verified? Artifact lineage and limits?
- Still fresh for the relevant time/window, or stale/held/unknown?

These are **facets**, not guaranteed sequential product steps or one universal progress bar. A case can have a legitimate finding before policy, runtime telemetry or a product-native control test is present.

## 3. Paths and instructional promise

| Path | Target | Contents | Learning outcome |
| --- | --- | --- | --- |
| **Executive essential** | ~12–15 min | Consequential-agent story, three sample controls, evidence ladder, 2 decisions and board-ready explanation | Ask whether security/control claims are supported without memorizing control IDs |
| **Practitioner core** | ~65–85 min | Eight family guides, 12 applied scenarios, control selection, status interpretation, monitor/remediate/reverify, capstone | Build and explain a defensible control review for one selected AI system |
| **Complete 45-control reference** | Self-paced ~2–3 hrs | All 45 mini-cards, deeper examples, precise intended sources/limits, curated cross-links, practical 1-question check per control | Learn the full catalog without pretending every control is deployable |
| **Role-selected electives** | Flexible | Developer/Security, AI System Owner, GRC Reviewer, Ops, Consultant | Relevant controls and actual source ownership for one role |

The course is not a professional certification, a legal compliance attestation or a HAIEC engine result. Use "Training worksheet completed" rather than "Certified AI control expert."

### Learner outcomes

At the end a practitioner can: choose meaningful controls by consequential action and risk; identify qualifying sources; distinguish cataloged/visibility/evaluated/target-enforced claims; interpret four visibility states without false PASS; inspect human/production action and evidence ownership; explain candidate vs established source or observed effect; choose re-evaluation triggers; export a customer-review-ready control assessment with exact limitations.

## 4. Ten topic destinations in the HTML

1. **Start with the consequence.** One agent action, resource, principal, possible effect and why controls matter.
2. **What does a control really prove?** Side-by-side catalog, visibility, test, assurance, operational guard and receipt lanes, with "what it does not prove".
3. **Choose controls for this risk.** Interactive role/industry/source picker; recommendations based only on locally authored scenario mapping, not inferred HAIEC coverage.
4. **Eight control families.** Equal-weight clickable family cards linking to all 45 mini-cards and family-specific exercises.
5. **45-control atlas.** Search by ID, title, source, family, risk, launch priority and visibility support. Show original manifest question, needed evidence, verification route and realistic owner. Explicit "catalog only" where appropriate.
6. **Source & evidence laboratory.** Five independent evidence planes; source quality, producer identity, freshness, held/fixture vs verified, partial/candidate vs full source match, conflict and absent facts.
7. **Controls in operation.** Approved policy, test spec, scoped runtime test, native result vs historical/legacy result, human decision, exact identity-bound replay and enforcement status.
8. **Monitor and respond.** Four independent monitoring lenses, freshness and result drift, telemetry, alert/ACK, incident/hold/recovery and exact target proof.
9. **The twelve practitioner challenges.** Progressive scenario questions and one cross-family capstone; each assessed on selection, source and response.
10. **Build a decision-grade control packet.** Export evidence matrix, selected control subset, source/provenance status, findings, ownership, next test and scoped executive explanation.

On mobile, keep the control family selector as an accessible dropdown/tabs; use stackable content, not narrow 45-column spreadsheets. Optional print view should show the entire selected set and actual authored worksheet, not silently only the currently open card.

## 5. Family-by-family teaching blueprint

| Family | Central operational question | Anchor lesson / diagram | Distinct learning trap |
| --- | --- | --- | --- |
| **G Governance** | Who owns this AI system, what policy applies and how does change affect approval? | System owner -> applicable use policy -> risk register -> change review | "Policy document exists" is not "policy applied at the actual action" |
| **S Security** | Can source, tools and credentials reach a sensitive target across a trust boundary? | Prompt -> agent -> MCP/tool/API -> guard -> privileged resource | Source path, finding or static guard is not observed exploit or proven runtime mediation |
| **A Authority** | What principal and protected choice were actually authorized? | Five-plane comparative map + DAI nine-dimension summary | Permission != policy != discretionary delegation; unknown delegated choice not a universal violation |
| **R Runtime** | Which consequential effect was requested, gated, applied and witnessed? | Request -> decision -> dispatch -> provider acknowledgment -> independent target readback | Alert or approval does not prove stop; provider acknowledgment not verified business effect |
| **L LLM** | What exact adversarial/input/output test was run, against which model/version and dataset? | Attack/input -> response -> evaluator criterion -> qualified test record | One "clean" prompt result is not global prompt safety or reliability |
| **E Evidence** | Can reviewers trace a conclusion to source, time, identity, coverage and frozen replay? | Producer -> qualified claim -> bounded evaluation -> result -> proof/receipt | Hash integrity alone does not establish upstream factual truth |
| **P Responsible AI** | Were relevant populations, explanation duties and data lineage assessed in the intended context? | Impact context -> available test/data -> limitations -> owner review | Generic fairness/framework checkbox is not applied measurement or certification |
| **TMF Specialized** | Did a frozen scenario satisfy defined audit categories, duration bounds or token caps? | Test spec -> exact scenario input -> measured result -> threshold -> replay | Competition fixture evidence not automatically enterprise-wide continuous monitoring |

## 6. Twelve applied labs, including all eight groups

Each lab has (a) consequence; (b) exact selected controls; (c) which source could qualify; (d) learn-by-choice test/evidence question; (e) correct interpretation; (f) responsible owner and next action; (g) what would falsify the conclusion; (h) printable artifact. **Cases are educational unless an explicit frozen real evaluation is linked.**

| Lab | Subject | Controls highlighted | Student challenge | Expected educational output |
| --- | --- | --- | --- | --- |
| 01 | Refund agent with excessive API capability | A01, A02, A03, A07, S01 | IAM allows $5,000, policy $500; code can call refund. Which claim is already source-supported and what cannot be inferred? | Permission/capability/approved business choice separated |
| 02 | Privileged MCP tool and tenant boundary | S01, S02, S03, S04, S05, S06 | Find potential reachability, available mitigation and missing exploit/runtime evidence. | Risk hypothesis, correct source and owner |
| 03 | Approval and exception policy | G01–G07 selected | Who can approve a material AI use, who owns change and what proves applied limits? | Governance/RACI + qualified evidence requirement |
| 04 | Native control visibility vs execution | A02, A03, E01, E05 | Compare catalog profile, four-state visibility, actual test result and U5 disposition. | Precisely categorized result, no false PASS |
| 05 | Telemetry gap and stale signal | R07, E02, E03 | Yesterday's receipt exists, current cadence is missed. Does this count as continuously monitored? | STALE/UNKNOWN coverage and follow-up source request |
| 06 | Runtime mediation and observed effects | A06, R01, R02, R03, R04 | Policy says deny, handler returned 200, target side not checked. Is it blocked? | No; require exact interception and independent target readback |
| 07 | LLM prompt and output reliability | L01–L05 | One scoped prompt injection test passes, model response leaks sensitive data in a different bounded case. | Separate test results, appropriate dataset/time limits |
| 08 | Data lineage/fairness and transparency | P01–P03, G04, G05 | Bias claim based on unsampled groups, generic model card, unknown data origin. | No invented coverage or regulatory approval |
| 09 | Evidence integrity and source contradiction | E01–E05 | Hash valid but identity join or source coverage incomplete; replay incomplete. | Integrity, comparability, completeness and replay independently judged |
| 10 | Specialized C7/C9/C16 tests | C7, C9, C16 | Frozen audit trail, duration and token spend thresholds under one scoped competition fixture. | Three separate results with denominators and no universal conclusion |
| 11 | Cross-system handoff and incident escalation | A05, A08, R06, E03, E04 | Parent/child delegation broken, alerts delivered but no human acknowledgment; missing system joins. | Candidate mismatch, acknowledgment state, next owner |
| 12 | **Cross-family capstone: Station 217 manufacturing** | 8–12 relevant G/S/A/R/L/E/P IDs, not automatically all 45 | ERP PO write with supplier qualification, code path, broader grants, policy gate, approval receipt, runtime gap and reconciliation. | Executive/technical control assessment with exact scoped source and next verified step |

Optional electives: KestrelVoice live-repository-source example (public evaluated report should be read as generated, not invented proof); TM Forum telecom AL0–AL2 controlled scenario; industry-agnostic customer's own source with actual entitlement/consent (workbook never performs tests itself).

**Content coverage requirement:** Each of the 45 controls gets a compact mini-card and one specific "What evidence would you ask for?" check. The 12 labs deeply demonstrate an applicable subset, preserving readability. No need to create 45 independent full-length investigations or 45 test promises.

## 7. Control-by-control inventory for mini-card authoring

The following metadata is taken verbatim from the canonical catalog snapshot, captured at SOURCE_SHA_PLACEHOLDER. **Flags are catalog training/reference metadata**, never live per-system verdicts. Recheck Main when implementing.

| ID | Canonical title | Control question | Intended source | Launch focus | Visibility slice |
| --- | --- | --- | --- | --- | --- |
| G01 | AI estate inventory completeness | Which AI systems and agents are actually in scope? | Inventory / source discovery | Other | Catalog only |
| G02 | Accountable ownership and responsibility | Who is accountable for the AI system and its decisions? | Governance records | Other | Catalog only |
| G03 | AI acceptable use and approval | Has the use case and operating scope been approved? | Approved use policy | Other | Catalog only |
| G04 | AI risk and impact assessment | What risks and impacts were assessed before use? | Risk registry | Other | Catalog only |
| G05 | Regulatory applicability and obligations | Which obligations apply to this deployment? | Framework mappings | Other | Catalog only |
| G06 | Third-party AI and vendor assurance | Are model, provider and upstream risks evaluated? | Vendor inventory | Other | Catalog only |
| G07 | Change and lifecycle governance | Can governance scope be linked to system changes? | Build provenance / CI | Other | Catalog only |
| S01 | Privileged tool authorization paths | Can privileged tools bypass approved mediation? | Static security analysis | Other | Catalog only |
| S02 | Multi-tenant isolation | Are tenant identity and data accesses correctly scoped? | Tenant-isolation analyzer | Priority | Catalog only |
| S03 | MCP and tool exposure | Are tool capabilities exposed beyond intended authority? | MCP/AI AppSec analysis | Priority | Catalog only |
| S04 | Secrets and credential protection | Could agents expose or misuse secrets? | Static and LLM heuristics | Priority | Catalog only |
| S05 | Prompt and input trust boundaries | Do untrusted inputs cross into privileged instructions? | Static and runtime probes | Priority | Catalog only |
| S06 | RAG retrieval and exfiltration paths | Can retrieval cross trust or data boundaries? | RAG/dataflow analysis | Other | Catalog only |
| S07 | Secure AI SDLC and build provenance | Can source, artifacts and release lineage be established? | CI/SARIF provenance | Other | Catalog only |
| A01 | Excessive effective authority | Does effective access exceed approved authority? | Five-plane IAM/policy | Priority | Catalog only |
| A02 | Undeclared executable capability | Can analyzed code reach an operation outside its approved scope? | U5 five-plane + static source | Priority | Slice supported |
| A03 | Delegated Action Integrity | Does delegated authority cover the intended, granted and observed action? | DAI nine dimensions | Priority | Slice supported |
| A04 | Observed action outside approved policy | Was an action observed beyond its approved envelope? | Qualified action witness | Priority | Slice supported |
| A05 | Agent and principal identity continuity | Is the runtime principal authoritatively bound to the agent? | Identity continuity | Priority | Slice supported |
| A06 | Human approval and mediation integrity | Was required human authorization applied at the action boundary? | Approval / mediation | Priority | Slice supported |
| A07 | Least privilege and unused grants | Do granted privileges exceed required capabilities? | IAM plus capability | Other | Catalog only |
| A08 | Cross-agent delegation propagation | Was authority preserved across A2A handoffs? | Delegation lineage | Other | Slice supported |
| R01 | Action lifecycle and side-effect traceability | Can request, authorization and applied effect be reconciled? | Action lifecycle witness | Other | Catalog only |
| R02 | Consequential effect envelope | Were measured side effects within approved magnitude and scope? | Effect bound comparator | Priority | Slice supported |
| R03 | Runtime guardrail enforcement evidence | Did a declared guardrail actually enforce a decision? | Decision + denial witness | Other | Slice supported |
| R04 | Emergency intervention effectiveness | Did a kill-switch action actually stop execution? | Kill-switch witnesses | Other | Catalog only |
| R05 | Recovery and resumption authorization | Was recovery governed and attributable? | Recovery audit | Other | Catalog only |
| R06 | AI incident response and recovery | Can material AI incidents be investigated and recovered? | Incident workflow | Other | Catalog only |
| R07 | Continuous runtime monitoring | Are sources sufficiently complete to detect relevant events? | OTel and source continuity | Other | Catalog only |
| L01 | Prompt-injection resistance under test | How does the system respond to scoped adversarial prompts? | Runtime / LLMVerify | Other | Catalog only |
| L02 | Sensitive output leakage | Did tested responses expose protected information? | PII/secret signal | Other | Catalog only |
| L03 | Hallucination risk and grounding | What evidence supports content grounding reliability? | LLMVerify heuristics | Other | Catalog only |
| L04 | Unsafe output risk | What harmful-output risks were detected in tested scenarios? | LLM risk indicator | Other | Catalog only |
| L05 | Structured output and consistency | Do generated responses meet a specified output contract? | Schema / consistency | Other | Catalog only |
| E01 | Evidence integrity and provenance | Can we verify evidence origin, binding and modification? | Evidence Core | Priority | Slice supported |
| E02 | Event stream coverage and continuity | Is telemetry coverage complete enough for the claimed window? | OTel continuity | Other | Catalog only |
| E03 | Source authority and plane correlation | Are identity, system and action joins source-qualified? | Environment binder | Other | Slice supported |
| E04 | Contradiction and source reconciliation | Do independent sources disagree or lack reconciliation? | Evidence projections | Other | Catalog only |
| E05 | Independent deterministic replay | Can another verifier reproduce the exact frozen result? | Replay manifest | Other | Slice supported |
| P01 | Bias and fairness evaluation coverage | Were affected groups and relevant harms assessed? | Bias testing | Other | Catalog only |
| P02 | Transparency and explainability | Can users and owners understand reasons and limitations? | Documentation review | Other | Catalog only |
| P03 | Training data governance and lineage | Is training data provenance established and reviewable? | ISAF lineage | Other | Catalog only |
| C7 | Audit trail completeness | Are required audit categories captured under a frozen policy? | Specialized competition-bundle test | Priority | Catalog only |
| C9 | Duration anomaly threshold | Does measured duration meet the bounded frozen policy? | Specialized competition-bundle test | Priority | Catalog only |
| C16 | Token expenditure cap | Does measured token expenditure satisfy the frozen cap? | Specialized competition-bundle test | Priority | Catalog only |

The future HTML must create a **control mini-card for every ID** with:
- Customer question and business consequence.
- Intended evidence producer and owner; what counts as **qualified** for that claim, versus a fixture/candidate/held source.
- Applicable / not applicable / applicability unassessed status and why. **Not Applicable** is never silently a PASS.
- Intended test/review step and explicit permission requirement if an active test is needed.
- How to read **visibility state** if this ID is supported and assessed in a real system; for unsupported profiles, **catalog only** and do not show fabricated green states.
- Difference between test result, U5 assurance disposition, human decision and actual target outcome.
- One realistic scenario prompt, next fact to request and owner.
- Sources / relevant HAIEC page (verified public link or "requires sign-in" label).

## 8. Evidence and result interpretation laboratory

### The five evidence planes are independent

Requested / Policy Authorized / Effectively Granted / Code Capable / Observed.
Each plane includes:
- Intended source owner and exact evaluated system/principal/target/time.
- Source qualified, partial, candidate, held, fixture, not configured, stale or not assessed.
- The maximum **claim supported**, and one explicitly unsupported claim.
- Contradiction detection and change/re-evaluation trigger.

Do not infer effective grant from credentials referenced in code, runtime execution from reachability or delegated business choice from a standing permission.

### Four visibility states, verbatim from current contract

| Actual state | How to teach it | User action |
| --- | --- | --- |
| DETECTED_FINDING | Source-qualified relevant observation satisfying the defined control detection criterion for exact identity/basis | Investigate and act; no automatic claim a customer target was exploited |
| NO_FINDING_OBSERVED | Bounded completed eligible scan/policy basis had no finding within that exact test window | Review coverage and changes; never mark control PASS or globally safe |
| COVERAGE_INSUFFICIENT | Relevant candidate/partial/mismatched/fixture evidence but not enough complete qualified context | Request exact source or mapping/basis correction |
| NOT_ASSESSED | No eligible source or no implemented visibility slice for this selected profile | No verdict; identify smallest valid next source or supported test |

**Other statuses are separate objects:** Native control testing results and replay status; U5 ALLOW/REVIEW/BLOCK; alert delivery/ACK; human review APPROVED/REJECTED/PENDING; source freshness; target protection NOT_WIRED vs independently witnessed application/effect.

### Native Control Test vs historical/legacy result

- Teach frozen test specification, authorization and exact run context, then result identity, version, underlying source, outcome and replay, only if actually persisted.
- Never combine HAIEC-native control results with legacy LogSense/synthetic competition data as one comparable denominator without qualification.
- MCP lesson for authorized users: haiec_control_assurance(aiSystemId,controlId); haiec_control_results(aiSystemId,controlId); haiec_control_replay(aiSystemId,resultId). Verify each returned record matches exact aiSystemId/controlId; system ownership and same-system result binding are distinct security checks. See P08.1 acceptance.
- Do not teach copied instructions that omit aiSystemId or claim an unowned result belongs to this system. Customer MCP access and scopes always matter.
- Replay/receipt integrity demonstrates exact recorded computation/artifact linkage, **not** full truth of a missing external source or target effect.

## 9. Monitoring, human review, runtime protection and recheck exercises

Teach the **four current monitoring lanes separately**, as in P10:
1. **Passive telemetry source health** with NOT_CONFIGURED, NO_SIGNAL, DELIVERING, STALE, FRESHNESS_UNKNOWN, DEGRADED. Delivering requires a qualified FRESH source according to applicable receipt/cadence, not a historic event. Missing read is an unavailable read, not zero.
2. **Authorized active runtime testing** with persisted test identity, exact scope, latest state, negative test coverage and environment limitations.
3. **Guardrail policy and evaluation** with actual approved Operating Envelope, policy version, contradictions and separately authenticated human review.
4. **Native enforcement / target proof** with independently sourced NOT_WIRED, APPLIED_AT_TARGET, EFFECT_VERIFIED where actually supported, and no-bypass requirements. A reference adapter or guardrail existence does not prove customer enforcement.

Teach incident loop: source signal -> finding/alert -> delivery -> **human acknowledgment** -> scoped decision -> customer-native interception/hold/deny if legitimately installed -> independent target witness -> recovery/closure -> re-evaluation/replay. Missing any edge remains a qualified unknown. An "alert was sent" label is not evidence a human acknowledged it.

**Reevaluation triggers** per control: policy/DAI choice authority changed; new release or changed agent/tool/MCP schema; IAM grants expanded; credentials rotated; fresh tenant/data identity source; runtime alerts or source staleness; target bypass/failure; incident response; material model/config/dataset revision; owner/approval expiry; changes to legal applicability.

**Monitoring diagrams**: control status matrix with vertical columns as **parallel facts**, not misleading "all controls protected" traffic lights; select one case and show the exact missing link.

## 10. ISAF v2, CSM6 and standards teaching boundaries

- Link **ISAF v2** as research/methodology, not published certification. A control's selected evidence plane and protected-choice question is contextual; DAI v1 does not implement all ISAF v2 protected-commitment formalism.
- **CSM6** can be introduced as optional enterprise operating/change management context (scope alignment, system mapping, signals, delivery, learning, oversight), not another HAIEC assurance scoring algorithm or core control ID list.
- Explain relationships to NIST AI RMF, ISO/IEC 42001 and relevant OWASP guidance only as **applicability and mapping exercises**. A framework crosswalk does not automatically show control execution, compliance or third-party certification.
- No false guarantee that HAIEC replaces SAST, DAST, IAM, GRC, SIEM, incident management or all externally managed native guards.

## 11. Proposed standalone light HTML design and animated diagrams

**Product format:** A single self-contained HTML file with bundled CSS/JS. No external scripts, credentials or mandatory account. Follow the light visual grammar of the [DAI lab](HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html) and [30-day workbook](HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html), but make case learning the center rather than a long deck.

### Main regions
- **Hero:** "A control is not proof until its exact claim, evidence and operation are established." Subheading: "Choose a consequential AI action. Inspect which controls apply, what they actually establish and who owns the next decision."
- **Audience entry:** Executive, Technical, GRC, Operator; choose "Learn with public case" or "Open my authorized HAIEC workspace" (links only).
- **Progress:** family progress, challenge count and completed worksheets. Never imply an assurance safety score or certification.
- **Catalog explorer:** family chips, ID/title/source search, flags for launch priority, visibility-supported vs catalog-only. Detail drawer/card has accessible 45-item navigation.
- **Case Lab:** left consequence path, center source/control/evidence states, right learner decision and next action; stack vertically on mobile.
- **Operations Lab:** signal-source health, test/protection distinction, human review and incident lifecycle.
- **Decision packet:** local non-sensitive worksheet with exportable control selection/results/unknowns/owners.

### Six purposeful diagrams/animations

1. **Consequence to control map:** animated Agent -> Tool/API -> Resource -> Possible Consequence path; control pins reveal what source can establish. Animation teaches relationship only, never depicts a live incident or containment.
2. **Control evidence ladder:** horizontal/stacking facts Catalog -> Qualified Source -> Bounded Test -> Evaluated Result -> Human Decision -> Native Target Proof; clicking a step shows what it does **not** establish. Do not use a single auto-green sequential progress.
3. **Five evidence-plane pentagon/rail:** equal-weight peer panels, non-sequential. Selected control overlays its relevant planes without inventing absent source joins.
4. **Seven-family constellation + specialized tests:** interactive hub selects full 45 control reference, with accessible text labels, not SVG-only semantics.
5. **Operational truth four-lane timeline:** source health, tests, policy/decisions and target enforcement move on independently keyed time bars with frozen timestamps. Alert delivery and ACK two separate nodes.
6. **Detection-to-response sequence:** explanatory animated path showing finding -> qualification -> human review -> mitigation -> protected action proof if applicable -> report/replay; missing steps remain visibly unestablished.

All animation: subtle CSS/SVG dashed flowing edges, low-motion default, prefers-reduced-motion supported, diagrams entirely readable when stopped and printable as static SVG/DOM. Do not highlight Protect as dominant or make one control family seem universally more important.

### Interactions (no decorative inert controls)
- Filters: All 45, launch-focus 15, Visibility-supported 11, specialized 3, families, search term, source type, learning challenge.
- "Compare statuses" switches between catalog-only, source-qualified visibility, tested, human decision and effect. Author-based teaching fixtures, **not** an emulator of HAIEC backend outcomes.
- Scenario answer reveals exact evidence used plus why alternative answers were incorrect, and asks the next best evidence producer or operator.
- "What changes if?" toggles source stale/current, IAM widened, policy expired, target effect witness connected and active test not run, updating only supported instructional conclusions.
- Control shortlist picker, owner field, source selection and export to Markdown/JSON for educational decision packet.
- Three knowledge checks per deep lab (selection / evidence status / action), one mini question per each of 45 control cards, role-specific final checkpoint.
- Progress is about learning, **not** control assurance maturity or enterprise risk reduction.
- Print selected controls and ALL opened/scenario summaries in a readable page-flow. Include sources on mobile and print; no hidden notes.

## 12. Instructional case fixtures and result truth contract

Future authoring should generate test-reviewed, local fixtures with:
id, sector, system, subject principal, action, target, potential consequence, source declared/frozen basis, applicableControlIds, catalogState, visibilitySupport, exact qualified evidenceRefs or illustrative placeholder, sourceClass, applicability, producerFreshness, controlVisibilityState if a valid authored fixture, testSpec, testExecuted, testResultRef, humanDecision, policyVersion, alertDelivery, acknowledgedAt, targetGuardWiring, independentEffectWitness, recommendedOwner, nextAction, correctAnswerReasons, incorrectAnswerReasons, relatedLinks, truthClass, safeScope.

**Fixture "truthClass":** EDUCATIONAL_SYNTHETIC, REAL_PUBLIC_ARTIFACT_REFERENCE or METHOD_RESEARCH. Do not merge these or claim the lab simulates actual customer action. Real public Kestrel evidence links are read-only and must match original evidence values exactly when quoted.

**Controls truth:** All 45 cards receive exact source ID/title/question/source and appropriate category/visibility support. Cases use only a material subset. A control not applicable or not executed cannot become "PASSED" through a quiz answer.

**Monitoring truth:** No fresh receipt means no current DELIVERY. NO_FINDING_OBSERVED is a narrow recorded outcome, not "safe." Approved policy != automatically dispatched/blocked action. Tenant isolation, agent principal continuity and exact system+result binding apply if displaying real results.

## 13. Learner worksheets and export outputs

Keep small, progressive editable cards rather than 45 mandatory forms:

| Worksheet | Key fields | Owner |
| --- | --- | --- |
| A. System/Consequence Scope | system, environment, principal, action, resource, possible consequence | AI system owner |
| B. Risk/Control Applicability | control IDs, reason, applicability state, critical business question | security/GRC |
| C. Evidence & Source Qualification | producer, scope, policy version, evidence refs, as-of/freshness, source quality, unknowns | evidence owner |
| D. Test / Visibility / Assurance Separation | catalog flag, visibility state, test spec/run/ref, actual U5 disposition, native/legacy distinction | assurance reviewer |
| E. Decision & Remediation | finding, human owner, accepted/rejected/deferred, expected correction, due/retest | governance/owner |
| F. Operational Monitoring & Target Proof | source health, event/alert/ACK, policy/guard decision, native PEP state, witnessed effect, outstanding gap | operations |
| G. Review-Ready Evidence Packet | executive description, exact chosen IDs, source and limitations, replay/report/receipt refs if real, next owner | sponsor/auditor |

Never require uploading secrets, raw customer policy, IAM credentials or API tokens into the educational HTML. The export is a user-authored **learning assessment**, not a HAIEC generated verification receipt.

## 14. Practical examples for first-run customer clarity

Show three start choices:
1. **Find an exposed AI action**: a refund/payment tool or source code path shows an unsupervised money recipient selector. Control selection A01, A02, A03, S01, R03, E01; immediate source finding is valid even without runtime.
2. **Evaluate a governance exception**: reviewed policy allows narrow actions, but one agent's broader effective access and a human decision packet must be checked. Control selection G02/G03/G07, A06/A07, E03.
3. **Understand an operational concern**: monitoring has one stale OTLP source, a test run, and a guard configured without target readback. Control selection R02/R03/R06/R07, E02/E05, A04; show source/ops status precisely.

Then offer optional industry-specific cases:
- **Kestrel** support/refund source code with actual bounded public evaluation, may not have IAM/runtime evidence for target events.
- **Manufacturing Station 217** controlled ERP/MES supplier qualification and PO gate story, explicitly not real enterprise observed ERP side effects.
- **Telecom/TMF** controlled audit-duration-token special test fixture, explicitly not automatically a telecom customer deployment.
- **Customer's own source** only via legitimate HAIEC permission/entitlement; workbook does not perform scans itself.

## 15. Authoring and publication workstream

**Step 1: Freeze exact source.** Re-read Main catalog, flags, supported visibility IDs, current UX/MCP/API, control proof/test and monitoring owners. Refresh JSON snapshot, log SHA and date. Capture valid public URLs, and label authenticated ones.
**Step 2: Build teaching data.** Prepare 45 control mini-cards and microquestions plus 12 scenario fixtures with 3 questions each, reviewed for applicability, evidence and false assurance claims. Minimal exact technical examples first; 45 does not mean 45 lengthy cases.
**Step 3: Construct light offline HTML.** Implement sections, filters, family atlas, scoped animated diagrams, 12 challenges, counterfactuals and worksheets. Reuse learning series design without replacing HAIEC website product pages.
**Step 4: Inspect visually.** Desktop 1440/1280, tablet 768, mobile 390/320, 200% zoom, keyboard, focus, reduced motion, screen-reader reading order, high-contrast color states, complete print/PDF pages.
**Step 5: Validate functionality.** Search and select all 45; flags match catalog; correct answers and explanation 12x3; all 45 microchecks; family view; state split; note export, reopen, clear user data; dark-mode avoidance; no broken interactive controls; zero console errors.
**Step 6: Verify public links.** Audit current relevant HTML routes anonymously and remove/label unsupported/404 routes. Avoid making private source-code GitHub links required for public learning.
**Step 7: Common Repo and website.** Commit generated HTML, source snapshots, proof/test matrix and validation addendum in Common Repo. Update README and next Devin context. Only after separate approval consider placing the resource inside existing HAIEC Learn/Resources; do not publish new competing controls product page.

**Future proposed HTML path:** haiec-product-capability-architecture/learning/HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html.
**Source snapshot:** [45-control manifest snapshot](HAIEC-AI-ASSURANCE-CONTROLS-45-CATALOG-SOURCE-SNAPSHOT-2026-10-20.json).
**Current companion learning pages:** [DAI Decision Lab](HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html) and [First 30 Days](HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html).

## 16. Final acceptance gates

- **Accuracy:** Exactly 45 controls with canonical names/questions/metadata. 15 launch and 11 visibility support as currently sourced, but no universal executed/pass claims. All three special tests distinct.
- **Depth:** All eight families covered, 45 source-meaning microcards, at least 12 three-question applied labs, clear limits and recommended next actions.
- **Result integrity:** Four visibility states exact; native control testing vs legacy result vs U5 vs human decision vs monitoring vs enforced target effect independently labeled. NO_FINDING_OBSERVED never painted universal PASS.
- **Source integrity:** Candidate operation and partial source cannot be promoted into confirmed findings; source identity and exact same-system control/result IDs required when relevant. Evaluated vs current state time distinguished.
- **Operating realism:** Four monitoring lanes, six readiness states, alert delivery != acknowledgment, policy != enforcement, actual native target proof only if separately witnessed.
- **Learning UX:** 45 filters/search, 8 family guides, 12 scenarios, 45 microchecks, role modes, counterfactuals, animations reduced-motion, local worksheet exports, static printed full reference, offline read-only functionality.
- **Scope:** No new production evaluator/control execution engine, billing, tenant data, unsafe user permissions, fake receipt or automatic site publication.
- **Customer benefit:** A learner can walk away with an **inspectable, owner-assigned control review** addressing one consequential AI system, without confusing a test, configured guard, human approval or a hash with universal assurance.

*Change record 2026-10-20: Source-reconciled plan authored and 45-row canonical metadata snapshot recorded. No HTML workbook built or HAIEC production code/site modified.*
