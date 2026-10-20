# HAIEC Learning Series #1: DAI Authority Decision Lab

**Date:** 2026-10-20
**Status:** Source-aligned interactive educational HTML design and instructional content plan ONLY. No HTML lab, new route, product logic, API, production event, customer evaluation or training publication was created by this task.
**Learning product:** "Permission Is Not Delegation: The AI Authority Decision Lab"
**Series:** #1 of the specialized HAIEC Learning Academy labs, building on the [Complete Crash Course](HAIEC-Complete-Crash-Course-2026-10-20.html) and [Enterprise First 30 Days workbook](HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html).
**Lead message:** "A credential permits an action. Who authorized the AI to make that choice?"
**Audience:** Enterprise decision-makers, architects, AI agent developers, security/IAM, GRC, operations/incident responders and assurance consultants.
**Design:** Light-first, interactive, visual, accessible, printable, independently usable as one HTML file; no em dashes in public copy.
**Current product distinction:** DAI is part of the common HAIEC assurance capability, NOT a seventh core capability, separate paid scanner, certification, blanket production runtime guard or new mandatory onboarding step.

## 1. Editorial decision: expand existing assets, do not duplicate HAIEC product UX

### Verified material already exists

1. **Current three-scenario component:** [DaiConsequenceLab](https://github.com/subodhkc/haiec-website/blob/Main/components/dai/DaiConsequenceLab.tsx) teaches the **same technically reachable refund action** under rule-grounded choice, bounded delegated choice and potential overreach. It is expressly "Illustrative · not a live evaluation". Reuse its story and principle that a code-source finding never disappears solely because policy/delegation evidence is unavailable. Its dark React styling is a visual reference, not the light theme of this standalone educational product.
2. **Current five-view educational component:** [EvidenceViewsExplorer](https://github.com/subodhkc/haiec-website/blob/Main/components/dai/EvidenceViewsExplorer.tsx) explains REQUESTED, POLICY_AUTHORIZED, EFFECTIVELY_GRANTED, CODE_CAPABLE and OBSERVED as peer facts, not a linear pipeline. The Lab must visually reuse this model, not add a sixth DAI "plane".
3. **Current DAI code:** [lib/assurance/dai-evaluation.ts](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/dai-evaluation.ts) is the canonical nine-dimension, seven-result deterministic comparator for caller-admitted, source-bound facts. [lib/assurance/dai-assembler.ts](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/dai-assembler.ts) assembles current eligible records with evaluation basis/snapshot guards. [dai-report-projection.ts](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/dai-report-projection.ts) provides per-surface evidence dimensions, fronts and caveats.
4. **Current workspace investigation:** existing authorized [Monitoring DAI](https://www.haiec.com/monitoring/dai) and individual surface detail under the authenticated workspace. [UX-P05 shipped investigation record](../UX-P05-DAI-INVESTIGATIVE-SURFACE-IMPLEMENTATION-RECORD-2026-10-20.md) preserves comparison rows, pending business rules, provenance and temporal scope. A DAI digest labeled evaluationId in a DAI projection is NOT a persisted canonical U5 Assurance Evaluation ID.
5. **A separate DAI product-marketing page is already planned** in [Dedicated public DAI page plan](../WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md) and has an [interactive HTML prototype](../design-references/dai-2026-10-20/delegated-action-integrity-dai-light-dark-interactive.html). That plan proposed **/delegated-action-integrity**, but as of this review it was a planned route, not proven live anonymously. The Lab is a learning/reference artifact, not another marketing product page.
6. **Source review controls:** [Findings-first product direction](../DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md), [deep policy/delegation reconciliation](../DAI-POLICY-GRANTS-DELEGATION-TRUSTED-FACTS-ADMISSION-DEEP-VERIFICATION-2026-10-20.md), and [DeepSeek reference selection](../HAIEC-DEEPSEEK-DAI-AND-ASSURANCE-UX-REFERENCES-VALIDATION-AND-ADDITIVE-DESIGN-2026-10-17.md).
7. **Publication background:** [HAIEC methodology](https://www.haiec.com/methodology), [Agent & Capability Model](https://www.haiec.com/developers/agents), [DAI technical developer guide](https://www.haiec.com/developers/guides), [Research](https://www.haiec.com/research), [Kestrel real-repository evaluated sample](https://www.haiec.com/sample-reports/kestrel).

**New learning value:** An active decision-making simulation where the learner classifies source evidence, selects missing authority facts, chooses permissible operational responses, explains uncertainty and exports a review worksheet. Current marketing mini-demo does not provide this multi-case assessment, learning feedback, progressive levels, capstone and scored exercise.

## 2. Learning outcomes, pathways and timing

### Essential learner achievement

At completion, the learner can:

1. Explain **IAM permission vs standing approved policy vs a verified human/process delegation of discretionary choice**.
2. Keep REQUESTED, POLICY_AUTHORIZED, EFFECTIVELY_GRANTED, CODE_CAPABLE and OBSERVED separately sourced, scoped and time-bounded.
3. Distinguish **a technically supported code-capable risk** from **an executed action** and **a target-side effect**.
4. Navigate the **nine DAI dimensions** without treating them as a risk score.
5. Interpret the **seven canonical DAI engine states** as bounded results, not every possible real-world authority conclusion.
6. Explain why **missing delegation evidence is not a violation** and **NOT_ASSESSED is not PASS**, while preserving independently qualified source findings.
7. Recognize when **trusted policy + business facts fully determine a protected choice**, versus when **residual discretionary choice needs separately qualified authority**.
8. Select relevant controls, remediation and monitoring/verification questions, without pretending that a configured guard or alert establishes interception, acknowledgment or target outcome.
9. Prepare an evidence-bound decision note with exact artifact identity when provided.
10. State whether an answer is **live canonical product output**, **review of an existing real artifact**, **research interpretation** or **illustrative teaching exercise**.

### Two learner routes, one source of lessons

- **Executive Express, 10–15 minutes:** Story hook, two authority diagrams, 3 interactive cases (rule-grounded, IAM-broader, unknown recipient) and one final business decision/owner. Provides the ability to ask the right approval questions without memorizing technical enums.
- **Practitioner Lab, 45–60 minutes:** 9-dimension inspector, full 7-state reference, 12 sequenced cases with evidence choice and answer feedback, relevant control map, monitoring/protection challenge, capstone and export.
- **Optional advanced reference:** ISAF v2 protected-commitment/discretion distinction, multi-agent chains, effect-proof boundaries, versioning and temporal facts, source citations. Do not invent a live enterprise simulator.

This is **not** an additional 45-control atlas or another 59-slide HAIEC crash course. Deep-link to the existing content for whole-platform coverage.

## 3. Clear conceptual taxonomy, without flattening authority

**Six distinct statements:**
- "Requested": user/workflow asked for X. Not proof X was permitted.
- "Policy Authorized": the current approved operating policy permits operation X under conditions. Not proof the agent could select any sensitive recipient/value or that the policy was enforced.
- "Effectively Granted": IAM/provider credential permits an API/operation. Not proof any human delegated discretionary choice.
- "Code Capable": implementation can reach the operation/target, subject to qualified candidate vs established source paths. Not execution.
- "Delegated Choice": a principal with appropriate business authority, directly or through a scoped valid workflow, permits the protected discretionary selection. Cross-cutting relation, **not a sixth plane**. User confirmation of an uploaded document is not the same as independent verification of issuer authority and validity.
- "Observed": connected, qualified evidence indicates action at the observed scope/time. Not universal execution, nor independent target/business effect unless a trusted effect witness exists.

### Three authority questions for the teaching lab

1. **What is allowed by policy?** Approved source and exact operation/environment/conditions; the policy source remains valuable even when independent delegation is unresolved.
2. **Who may decide a protected consequential choice?** A trusted rule and authenticated business facts may fully determine the selected outcome; for **residual agent-discretionary choices**, independent authority/delegation evidence is needed to establish delegated choice.
3. **Is this particular operation executable and actually stopped/applied now?** Requires current applicable authorization, customer-side interception and independent target confirmation when protection/effect is claimed. Static comparison/approved envelope alone cannot answer it.

**Research vs current implementation:** The full ISAF v2 protected-commitment residual-choice classifier remains manuscript/research and pending implementation/reconciliation. Do not present it as a currently shipped DAI v1 algorithm. Current \`dai-assembler.ts\` has a documented promotion risk: ordinary approved Operating Envelope constraints can enter \`delegated\` facts; merged records may widen authority by union / maximum instead of respecting provenance/precedence/expiry. The lab teaches the *principle* and accurately labels the unresolved production semantic gap. No new evaluator in the learning browser.

## 4. Formal engine vocabulary reference, exact source

**Nine bounded dimensions:** OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY.

**Four compared DAI fact families:** delegated facts, code-capable facts, effectively granted facts, observed facts. Current DAI v1 engine compares those; use five U5 authority/evidence planes alongside as independent source questions (do not silently conflate four with five).

**Five per-dimension comparison codes:** MATCHES, BROADER, NARROWER, MISSING, UNKNOWN. **Known candidate-only operation mapping** stays UNKNOWN until qualified business mapping; rule confirmation itself does not prove runtime behavior or safety.

**Seven canonical result states, with pedagogic plain English:**

| Exact enum | Learner-readable meaning | Never infer |
| --- | --- | --- |
| INSIDE_ESTABLISHED_DELEGATION | All evaluated dimensions with established delegation matched or narrowed, subject to admitted facts and scope | Universal safety, production enforcement or all source planes covered |
| CAPABILITY_OUTSIDE_DELEGATION_MEDIATED | Code-capable operation is broader than an established delegated bound; comparator has mediation evidence | Runtime block at every path or target effect |
| CAPABILITY_OUTSIDE_DELEGATION_UNMEDIATED | Broader code capability relative to established delegation and no qualified mediation in compared facts | The agent actually exploited/used the operation |
| GRANT_BROADER_THAN_DELEGATION | Effective grant exceeds an established delegated bound | Human delegated that choice or exploit occurred |
| OBSERVED_OUTSIDE_DELEGATION | Qualified observation exceeds an established delegation fact | Independent final target mutation unless witnessed |
| UNRESOLVED_DELEGATION_EXPOSURE | Some relevant compared facets lack established delegation, so authority comparison is incomplete | A proven violation or a clean bill |
| NOT_ASSESSED | Comparator cannot establish a delegation basis for the selected dimensions | Violation, safety or zero source/code findings |

**Important rule:** The cases below are **author-written instructional scenarios**; no actual typed DAI result should be computed from incomplete prose alone. Teach conditions under which a canonical result *would* be supportable using a complete controlled fact fixture, but show separate interpretation when evidence is insufficient. Some cases teach only an epistemic question and must not map to a definitive enum.

## 5. Twelve progressive scenario cards

Every scenario reuses the same structured learning format: consequence and actor, request, policy, granted permissions, code path, choice authority, observation, source provenance/time, missing facts, target effect, question, 3–4 answer choices, correct explanation, optional counterfactual and relevant HAIEC controls.

| # | Level | Scenario and central decision | Expected teaching point | Controls/lens |
| --- | --- | --- | --- | --- |
| S01 | Beginner | **Original-method refund:** Approved refund rule and verified transaction bind the original payment method; agent follows it. | Rule-grounded choice, no *extra discretionary recipient permission* needed for that choice if truly fixed and conformed; separate amount/effect proof. **ISAF v2 concept, not guaranteed shipped classifier.** | A03, G03, S01 |
| S02 | Beginner | **Exception refund:** Agent can choose a new bank account; refund API IAM access exists but no qualified alternative recipient-choice authority. | Preserve established source capability; exact recipient decision needs review. Neither violation nor safety inferred. | A01/A02/A03, S04 |
| S03 | Beginner | **Signed bounded delegation:** Authenticated owner delegates exception recipient handling to one agent, ≤$500, customer cohort and 24-hour window. | Narrow principal, operation, target, magnitude, duration, approval, and fact provenance; time/expiry matters. | A03, A05/A06, G03 |
| S04 | Intermediate | **IAM grant broader than delegation:** Delegation limited to refund ≤$500, effective scoped IAM allows refunds of $5,000 in same system. | \`GRANT_BROADER_THAN_DELEGATION\` only if both exact fact sources are genuinely established/comparable; no execution assumed. | A01, A07, A03 |
| S05 | Intermediate | **Code outside delegated bounds, no mediation:** Reachable direct refund handler can change recipient beyond exact authorized scope, no source-qualified mediating path. | \`CAPABILITY_OUTSIDE_DELEGATION_UNMEDIATED\` on complete controlled fixture; static exposure ≠ exploitation. | A02, A03, R03, S01 |
| S06 | Intermediate | **Mediated write, target not witnessed:** Code could do more, trusted mediation evidence exists, but no independent target-side hold/deny proof. | Comparator's MEDIATED state does not imply all paths blocked or target side effects verified. Distinguish policy, path-binding, triggered, effective guard and real target proof. | A06, R02/R03, E01 |
| S07 | Intermediate | **Observed out-of-scope operation:** Known principal, binding and time qualify a scoped event exceeding an established delegated rule. | \`OBSERVED_OUTSIDE_DELEGATION\` may be supported; an HTTP success/event is not automatically final bank/ERP write. | A04, R01/R02, E03 |
| S08 | Intermediate | **Approved operating policy mistaken for delegation:** Policy permits certain refund operations, no authoritative discretionary selector delegation. | Policy remains established. Do not promote envelope to independently valid choice authority; label residual choice evidence gap. | A03, G03, E03 |
| S09 | Advanced | **Candidate semantic operation:** Static sink looks like \`REFUND_CHANGE_RECIPIENT\`, native mapping unconfirmed and business rule required. | Candidate mapping stays UNKNOWN until confirmed qualified mapping, not automatically canonical. \`CONFIRMED\` mapping ≠ runtime action or safe. | A02/A03, E04 |
| S10 | Advanced | **Agent A → Agent B handoff:** Parent task narrow, child receives broad tool credential, token exchange and final effect uncertain. | At most demonstrate reported hop/credential mismatch; no assertion of complete live cross-system authority propagation/target effect without exact trusted joins. | A05/A08, S02, R01 |
| S11 | Advanced | **Policy version and time:** Old evaluation happened before a new policy revision or later rule confirmation. | Snapshot cutoff and historical frozen basis prevent retroactive "pass"; new rules inform next evaluation. | G07, E01/E05, A03 |
| S12 | Capstone | **Manufacturing purchase approval:** Agent can write POs, supplier qualification rule, wider IAM grants, human review record, sparse telemetry and pending ERP readback. | Full five-plane + nine-dimensional investigation, three operational recommendations, proof/uncertainty, target guard feasibility and owner decision. | A01–A08, R01–R03, E01–E05 as applicable |

**Cross-industry elective:** Telecom configuration agent / O-RAN service app; HR hiring tool; healthcare record sharing; cloud infrastructure agent. Use one of these only to teach different sources and consequences, without inventing sector-specific compliance or deployment facts. Existing Station 217 and TMF demo data are controlled/synthetic where applicable.

### Case QA safety matrix

For every S01–S12, record:
- Fictional/synthetic teaching content vs copied public real-source evidence, indicated within the case.
- Whether baseline IAM grants/policy/delegation are **declared vs independently qualified**.
- Whether the action path is **candidate**, source-established, or **observed**.
- Whether a test was **run** or only suggested.
- Whether a human decision is **authentic**, simulated for teaching, or absent.
- Whether approval, middleware interception, provider acknowledgment and target effect are present, absent or unknown.
- Which exact outcome is a supported fact versus illustrative interpretation.
- At least one plausible *wrong* answer and explanation, e.g. "credential permission = delegated business authority".

The S12 capstone includes a "make an evidence-limited decision now" variant where learner cannot ask for every missing input. Choose the **one** additional producer or approval that meaningfully changes the decision.

## 6. Interaction design: a true decision lab, not a decorative simulator

**Landing screen:**
- Headline: "Permission is not delegation."
- Subtext: "Discover what the AI can reach, examine who allowed the consequential choice, and learn what the evidence actually establishes."
- Options: **Quick Decisions** (Executive), **Full Authority Lab** (Practitioner), **Reference Case** (Kestrel evidence read).
- Clear **Illustrative exercises** line in normal educational copy, with no warning-style banners or fictional "production logs."

### Main screen, three-column desktop (single-column mobile)

1. **Left: Consequential action path** with exact actor -> tool -> sensitive target -> possible effect. Accessible SVG with semantic labels, optional modest motion and identical static rendering if reduced motion.
2. **Center: Evidence & authority inspector** with the five peer planes, the DAI four compared facts, nine dimensions and fact/source cards (version, scope, actor, time, reference). Never automatically paint all columns green.
3. **Right: Your decision** with one clear question, 3–4 answer options, "What evidence matters?", "Check answer", "Why", "What changes if...", and next permissible enterprise action.

**Important:** Avoid clickable ungrounded "Execute", "Block", "Approve deployment" or "Test customer" buttons. This is offline learning, not runtime protection or an API client.

### Recommended primary interactions

- **Evidence reveal:** learner opens exact policy, IAM grant, code path and telemetry facts one at a time and chooses which fact is needed.
- **Nine-dimension lens:** choose OPERATION/TARGET/SCOPE/MAGNITUDE/DURATION/APPROVAL/DATA_CLASS/ENVIRONMENT/GEOGRAPHY and see how this exact scenario's comparison changes by dimension. Do not implement a general policy decision engine.
- **Counterfactual choice:** "What if only the permission changed?", "What if human approval was revoked?", "What if a receipt is stale?", "What if no telemetry was connected?" Show which conclusions are affected and which persist. Author all outcomes from reviewed fixtures.
- **Seven-state interpreter:** select correct bounded state given prequalified facts and explain why broader grant differs from code exposure and from observed breach.
- **Continuity and time scrubber:** show request, approved policy version, authenticated delegation grant/revoke window, source analysis snapshot, observed event and receipt (where actually included in case). Author fixed timestamps; no inferred live chronology.
- **Delegation-chain exercise:** 3–5 illustrated hops, principal/authority/target narrowing, issuer identity, missing junctions, advisory flag **cross-system full proof not established**.
- **Intervention boundary:** compare authorized review, guard configured, interception event, provider acknowledgment and verified target effect. Distinct facts, no "all blocked" claim.
- **Scenario completion:** 3 steps per case: choose consequence/claim; select evidence; decide action and owner. Incorrect answers give reason and revisit.
- **Export:** Download a plain-text/Markdown/JSON educational decision worksheet (local browser-side only). No secret uploads and no claim of verified HAIEC findings.

### Optional advanced expert view

Show exact current DAI v1 enums and comparison rules as read-only dictionary next to the human-friendly explanation. A separate educational "ISAF v2 research" lens explains protected commitments and trusted rule-grounding, but **never rewrites or predicts a canonical DAI output**.

## 7. Related HAIEC capabilities, controls, monitoring and evidence

This lab focuses on DAI, but teaches the interfaces without making a second platform catalogue.

### Selectable core HAIEC jobs

- **Discover:** source and agent/tool/action path; identify possible consequence.
- **Evaluate:** source-qualified code/permission/DAI/control comparison within actual evaluation contract.
- **Authorize:** human decision / approved policy, never implicit grant based on credentials alone.
- **Monitor:** presence, source freshness, selected runtime event and alert state.
- **Protect:** what authentic interception/denial and target witness would be required, not generic current integration availability.
- **Verify:** frozen evaluation/DAI/read model, evidence lineage, report and receipt status with correct artifact identity.

### Primary control family mappings

Keep **45-entry complete control atlas** in existing workbook, but present only case-relevant controls as explanatory *cross-links*:
- **Agent authority and delegation:** A01 effective authority, A02 undeclared executable capability, A03 DAI, A04 observed action, A05 principal continuity, A06 mediation, A07 least privilege, A08 cross-agent propagation.
- **Application/tool:** S01 privileged tool path, S02 multi-tenant isolation, S03 MCP exposure, S04 credentials, S05 prompt trust, S06 retrieval exfiltration.
- **Runtime:** R01 action/effect lifecycle, R02 effect envelope, R03 runtime enforcement, R04 emergency intervention, R05 recovery, R06 incidents, R07 continuous monitoring.
- **Evidence:** E01 provenance, E02 event coverage, E03 plane/join source authority, E04 contradictions, E05 replay.
- **Governance:** G02 ownership, G03 approvals, G07 change/lifecycle. Map other families only where scenario requires them.
- **TMF C7/C9/C16:** Optional telecom extension examples, not automatically executed general DAI tests.

**Controls catalog is 45 total** (42 catalog profiles + C7/C9/C16), but catalog membership ≠ current implementation, executed check, qualified evaluation or installed protection. Avoid implying every control runs for all scenarios.

### Four monitoring lenses

In "What happens after the decision?", provide four peer tiles mirroring current P10 operations:
1. **Passive telemetry health:** NOT_CONFIGURED / NO_SIGNAL / DELIVERING / STALE / FRESHNESS_UNKNOWN / DEGRADED. The **DELIVERING** label requires source-qualified FRESH receipt; a historical receipt is not proof current delivery.
2. **Authorized runtime tests:** Only relevant tests actually executed in an authorized environment; ordinary ingestion is not active testing.
3. **Guardrail policy and evaluation:** Approved envelope, contradictions, actual requested human review; mere policy existence is not runtime interception.
4. **Native protection/effects:** NOT_WIRED / applicable read-model proof levels, actual customer-native PEP/no-bypass and independent effect witness when present. A local/reference mediation skeleton is not customer target protection.

**Alert delivery ≠ human acknowledgment.** **A tool invocation / API response ≠ independent target-side business effect.** Scenario S07 or S12 must quiz both facts.

### Minimal integration and method references

- GitHub/code analysis -> CODE_CAPABLE; provider IAM/permissions -> EFFECTIVELY_GRANTED; signed policies -> POLICY_AUTHORIZED; scoped OTel/trace/action record -> OBSERVED as bounded; approved human delegated authority -> choice relation if qualified; monitoring/report/receipt -> qualified continuity/verification. ServiceNow/ITSM optional for human workflow, not assumed to be magically synced.
- MCP agent use: authorized \`haiec_preflight\`, inspect actual org/system and \`haiec_run_assurance\` if eligible; scoped Bearer API key and real consent. An offline exercise never calls these tools.
- DAI cross-system delegation/effect-soundness and ISAF v2 protected-choice model are research/engineering-bound unless tested source/target proof exists.

## 8. Twelve reusable lab case data fixtures and anti-overclaim contract

Future implementer should create a **version-controlled local fixtures module**, not a second DAI evaluator:

For each case: \`id\`, \`sector\`, \`learningLevel\`, \`actor\`, \`aiSystem\`, \`targetResource\`, \`consequence\`, \`synthetic=true | sourceVerified\`, \`sourceProofScope\`, \`snapshotAt\`, \`fivePlanes[5]\`, \`delegationRelation\` (separate from policy), \`choiceKind\` ("fixed_by_trusted_rule", "residual_discretion", "unestablished"), \`factsByDimension[9]\`, \`candidateMappings\`, \`guardWiring\`, \`observations\`, \`targetWitness\`, \`question\`, \`answerOptions\`, \`correctAnswer\`, \`feedback\`, \`nextEvidence\`, \`recommendedOwner\`, \`relatedControls\`, \`references\`, \`truthClass\` ("illustrative", "canonical_public_artifact", "research_interpretation"), \`teachingVariant\`.

**Explicitly forbidden educational app outputs:** importing canonical DAI engine types and rebranding a browser-side toy comparison as real evaluation; generating fake Evaluations/receipts/approval IDs; uploading policy/docs or credentials to HAIEC without permission; presenting scenario answers as live Kestrel results; storing customer information in public URLs; claiming a receipt attests unseen target effects.

Fixture QA:
- 12/12 cases have a scoped sensitive action and at least one independent fact.
- At least one case per seven DAI result states **or an explicit note that a state is only a reference**, never force an invalid enum onto a scenario.
- At least three cases address absent or conflicting delegation data without labeling a violation.
- At least two show source risks before runtime telemetry.
- One policy-is-qualified/delegation-unestablished; one trusted rule fully fixes a protected selector; one issuer/delegate expiry conflict.
- One real frozen Kestrel public source artifact used **only** for existing report reading, not blended into fabricated scenarios.
- Temporal and cross-system cases never claim current engine supports comprehensive cross-org/cross-system target proof.

## 9. Content architecture for the eventual standalone HTML

### Ten screen/chapter destinations

| Screen | Heading | Primary interaction | Approx time / route |
| --- | --- | --- | --- |
| 01 | Permission Is Not Delegation | One 30-second choice, choose Quick/Full | 2 min / both |
| 02 | What the Agent Could Cause | Action -> tool -> target -> consequence | 4 min / both |
| 03 | Five Separate Evidence Questions | Click five peer views; reveal exact source vs unknown | 6 min / full, 2 min quick |
| 04 | Rules, Permission and Choice | Switch rule-grounded/delegated/unestablished same refund path | 6 min / both |
| 05 | Nine Dimensions of Authority | Inspect per-dimension facts and changes | 8 min / full |
| 06 | Seven DAI Result States | Guided exact-code reference and hard negatives | 7 min / full |
| 07 | Decision Challenge | 12 progressively challenging scenarios, 3-step questions | 18–25 min / 3 quick |
| 08 | Controls, Monitoring and Response | Select control, source, responsible action, alert/PEP/effect | 7 min / full |
| 09 | Kestrel Evidence Reading | Open authenticated/public sample; identify real scope and gaps | 5 min / optional |
| 10 | Your DAI Decision Packet | Export non-sensitive worksheet, score and follow-up resources | 5 min / full or 1 min quick |

Total estimated full path varies by optional sections: target 45–60 min; quick path target 10–15 min after editing lesson text. Do not hardcode inaccurate sum badges; measure selected mode's actual reading/test time after first implementation.

### UX look and feel

- Light theme: warm white, slate charcoal type, teal/blue for action path, restrained amber for unresolved, green only for **qualified facts where appropriate**, never global "safe" indicator.
- Consistent with existing HAIEC 30-day workbook and crash course; build on their HTML typography, tabs, chapter navigation, progress and print rules. Reuse existing SVG architecture grammar; all diagrams readable as DOM text/copy and accessible.
- 16:9 diagrams for screens, but layout responsive with fluid panels and stacked case cards on 320/390px.
- Fixed side rail chapters on desktop, compact select drawer mobile; source/reference links available on ALL widths.
- Hero diagram must not emphasize Protect over other capabilities; equal-weight facts/authority lenses.
- Animated path edges only as explanatory transitions, not depicting live tool execution; respect \`prefers-reduced-motion\`.
- Meaningful focus indicators, arrow navigation only outside inputs and buttons where controls need keys, live region for quiz feedback, no trapping keyboard, 200% zoom.
- Search scenario by sector, dimension and evidence plane; skip/case navigation; case count/score not safety score.
- Local-only non-sensitive progress state; do not persist sensitive answers. Export clearly **Educational DAI Lab Worksheet**.

### Local user states

1. Unstarted / in-progress / completed learning challenge.
2. Answer correct/needs recheck with explanation.
3. Per-case evidence **revealed vs not revealed**.
4. Real-source vs illustrative scenario label.
5. Technical evidence NOT_ASSESSED/UNKNOWN vs learner progress (never same colors or words).
6. Optional executive/practitioner route and active chapter.

Progress is educational, not an assurance certification and cannot grant a badge implying the user's organization is safe.

## 10. Capstone: the decision note the learner should take away

**Title:** "AI Consequential Choice Review, Training Worksheet"

Template:
- Business system, actor, consequential action and affected customer/resource.
- What is requested?
- What does applicable approved policy establish?
- What effective access, if any, is established?
- What source-confirmed code/action path is reachable? Candidate or established?
- Which selection/choice is fully fixed by trusted rule plus facts?
- Which protected choice remains discretionary? Who, if anyone, validly delegated it, for what scope and time?
- Nine dimensions with relevant established and missing facts.
- What runtime event exists in covered scope, if any?
- What independent target effect has actually been witnessed, if any?
- Applicable controls, tested vs planned status.
- Human decision / response state: actual vs proposed next action.
- Requested additional evidence with precise owner, valid source and minimal scope.
- Exact canonical evaluation/report/receipt references ONLY if real link and ID exist; otherwise "Educational scenario, no HAIEC evaluation or receipt issued".
- Decision note: **the established risk or uncertainty, recommended treatment and scope limitation**.

**Final prompt:** "What would you tell a CISO *today* if an AI agent has source-visible capability to transfer $10,000, the credential grants that operation, approved policy allows transfers only to known vendors, but no qualified delegation for selecting a new vendor recipient and no target-side runtime witness exist?"

**Educational answer guidance:** Source-visible risky transfer path and effective credential capability are actionable facts if source-qualified; policy is an independent established restriction; the discretionary new-recipient authority needs review (not a proven delegation breach without adequate authority evidence); observed transfer/target payment cannot be inferred; prioritize narrowing path/grant and identifying authorized decision owner, plus targeted evidence for next review; keep any current production DAI result separately sourced.

## 11. Public/private integration and link strategy

**Public links first** (validate anonymously before publication):
- [HAIEC homepage, core "Permission Is Not Delegation" thesis](https://www.haiec.com/)
- [Methodology](https://www.haiec.com/methodology)
- [Developer Agent & Capability Model](https://www.haiec.com/developers/agents)
- [Technical developer guides](https://www.haiec.com/developers/guides)
- [Research and current publication status](https://www.haiec.com/research)
- [Kestrel real-repository bounded report](https://www.haiec.com/sample-reports/kestrel)
- [Enterprise scope](https://www.haiec.com/enterprise)
- [Learning resources](https://www.haiec.com/learn)

**Links requiring explicit authentication/role:**
- [AI Estate](https://www.haiec.com/dashboard/ai-inventory)
- [DAI monitoring and case](https://www.haiec.com/monitoring/dai)
- [Source management](https://www.haiec.com/monitoring/sources)
- [MCP guide for agent-assisted user-initiated source actions](https://www.haiec.com/docs/agent-integration)

**Planned only, do not send user to an unverified page as live:** \`/delegated-action-integrity\` from dedicated public page plan. Do not publish inaccessible internal/private repository code links to external readers; link public developer guides and current website first. Public site guide and demo metadata can lag code; freeze current Main and source evidence before deploying any lab or linking it on the main website.

## 12. Nonfunctional, privacy, and integrity guardrails

- One standalone offline-capable HTML artifact (CSS + JS bundled or inline). External links work when connected; no external library CDN needed.
- Learning scenario output is **authored explanation**, never a call to a fabricated HAIEC DAI engine.
- No new backend, tenant reads, UI/API/MCP integrations or customer writes required to show the educational lab.
- No password, tokens, customer data, documents or policy content in public exercises or localStorage.
- Export Markdown/JSON/printable decision note, user-visible and clearly local.
- No unattended write or time-inaccurate promises; no enterprise pilot, cross-system authority or native PEP claims.
- Offline case mode vs exact live public case mode visually distinct but normal customer-ready language, no internal development banners as headline.
- Respect evaluation freeze: "current DAI evaluation ID" vs "persisted U5 evaluation ID" different artifact semantics.
- No compliance/certification badge for quiz completion.

## 13. Verification and acceptance criteria for the future build

### Content truth
- All 9 DAI dimensions, 5 comparison codes, 7 exact states accurately sourced to current Main.
- 5 authority/evidence planes, no sixth delegated plane, and explicit four-vs-five relation.
- At least 3 outcome questions per learner case and explanations that prevent permission/policy/delegation and observation/effect conflation.
- Each state/course example has qualified/source-specific constraints; missing source not overcalled.
- All 12 scenario fixtures are inventoried and signed off against current HAIEC engine semantics plus research-only distinctions.
- Real Kestrel example matches its existing generated report; no fabricated episode/target effect.

### Interaction
- Quick/full mode, case selection and answer feedback functional without connection; progress count accurate to selected route.
- Evidence reveal/counterfactual does not mutate hidden answer or fictionalize a canonical output.
- Keyboard accessible to buttons, tabs, source drawer and questions; 320/390/768/1280/1440 responsive; 200% zoom and reduced motion.
- Printable complete full lab and decision packet, no clipping and consistent source links on mobile.
- Export includes only user-entered non-sensitive information and an education-only provenance label; user can clear local state.
- No horizontal body overflow or JS console errors; anonymous HTTP link audit of every public URL.

### Product protection
- Only Common Repo educational files altered. Do not edit live HAIEC DAI engine, evidence ingest, control/test/approval/monitoring or public website during learning-artifact phase.
- If future user requests actual site deployment, first inventory existing /learn resource/navigation, planned /delegated-action-integrity marketing page and public DAI component to avoid three competing canonical "labs".
- No fake evaluation id, receipt, human authorization, native runtime PEP, live source or observed target event.
- Current HAIEC DAI/ISAF v2 semantic gaps documented accurately without making them public instructional noise.

## 14. Work order and change scope

**Plan now** (this commit): complete content outline, 12-case scenario matrix, interactive/UX design, evidence, controls and ops map and release gates in Common Repo.

**Phase 1, once build requested:** author fixtures, learner copy, quick-path mapping and semantic/correct-answer unit review.
**Phase 2:** build light standalone HTML on same Common Repo learning/ directory, reuse 30-day workbook shell, keep asset self-contained and inspect in browser at desktop/mobile.
**Phase 3:** QA all truth distinctions, accessibility, quiz/progress/exports, print and link audit. Update this plan and Common Repo README.
**Phase 4 (only if separately authorized):** consider Learning Academy publication or integration into existing HAIEC \`/learn\`; preserve current pages/components, decide nav/SEO canonical placement with owner, no new overlapping public hero page.

**Suggested paths**
- This plan: \`haiec-product-capability-architecture/learning/HAIEC-DAI-AUTHORITY-DECISION-LAB-INTERACTIVE-LEARNING-PLAN-2026-10-20.md\`.
- Future HTML: \`haiec-product-capability-architecture/learning/HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html\`.
- Optional fixture docs: \`haiec-product-capability-architecture/learning/dai-decision-lab/SCENARIO-ACCEPTANCE.md\` only when creating the actual HTML.

**Final definition of success:** A business stakeholder, engineer and security reviewer can each correctly answer "Can the agent reach the action? Does policy allow it? Do credentials permit it? Who was authorized to choose? Did it actually happen? What remains unknown and who needs to decide?" **without confusing the offline teaching lab for live HAIEC results**.

---

*2026-10-20: Initial source-aligned planning artifact. No HTML product, DAI semantic code or website changes made.*
