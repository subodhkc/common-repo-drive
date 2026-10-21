> **2026-10-21 V2 HTML BUILT AND COMMITTED.** [Open the enhanced original workbook](HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html). Implemented additive six-tab individual learning views (Understand / Evidence / Evaluate / Interpret / Practice / Operate & Verify) for 45 controls; every ID has its own mechanism, required source/evidence, human review method, bounded finding interpretation and exercise. Added 135 applied three-question training decisions, source-quality counterfactuals, control-specific reviewer notes, expanded Markdown/JSON exports and full 45-entry print reference; retained 45 existing source checks, 12 labs and 36 prior decisions, diagrams, monitoring and product-truth semantics. Existing scenarios now explicitly include G06, S07, A04 and R05, bringing **scenario control references to 45/45**. New educational SVG/DOM timelines/diagrams highlight third-party provider review, release provenance, observed-vs-target effect and governed recovery. **Browser verification**: Chromium + Playwright all 135/135 applied training answers passed, 12 original cases preserved, 45 print lessons, four special diagrams, source-qualification and note interactions, Markdown and JSON downloads including V2 content, zero page script errors, no document overflow at 320, 390, 768, 1280px. The original GitHub file was updated in place with source blob 0d475eec8282b4a29926850fe312568a18e057c6. **Not fully verified:** real browser file:// loading (restricted by QA browser admin policy), screen-reader/200%-zoom accessibility audit, page-by-page printed PDF, exhaustive public outbound link availability. **Educational scope:** no new HAIEC production control detector, executed customer test, native guard or decision receipt. This completion addendum takes precedence over historic planning-only statements below.

# HAIEC AI Assurance Controls Practitioner Workbook: V2 Depth Audit and Enhancement Plan

**Date:** 2026-10-21
**State:** Reviewed and source-anchored enhancement plan, **not an HTML rebuild or new product feature**.
**Execution principle:** Enhance the existing interactive 45-control practitioner workbook in place. Do not create a duplicate learning artifact or competing product marketing page.
**Original educational HTML:** [From Control to Proof, current workbook](HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html)
**Original plan:** [45-control Practitioner Workbook plan](HAIEC-AI-ASSURANCE-CONTROLS-PRACTITIONER-WORKBOOK-PLAN-2026-10-20.md)
**New per-control V2 editorial data:** [45-control deep-dive teaching matrix](HAIEC-CONTROLS-PRACTITIONER-V2-45-CONTROL-DEEP-DIVE-EDITORIAL-MATRIX-2026-10-21.json)
**Canonical manifest-derived metadata:** [45-control source snapshot](HAIEC-AI-ASSURANCE-CONTROLS-45-CATALOG-SOURCE-SNAPSHOT-2026-10-20.json)
**Product source:** [current HAIEC catalog](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts), [visibility schema](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/types.ts), [Controls & Proof](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ControlCatalogPanel.tsx).

## 1. Decision after audit

The user is asking for the **same** learning product that was built, described now by its full editorial promise:

> "How each control works, what evidence it needs, how to evaluate it, and what a finding means. Includes hands-on examples and exercises."

**We should not build a second "45 controls" workbook.** The current document is useful and functionally tested, but only **partially fulfills this deeper promise for every one of the 45**. The correct response is a V2 content deepening of the existing artifact, reusing the shell, animations, navigation, catalog, labs, notes, exports, worksheet and current educational links.

### Actual HTML review performed 2026-10-21

Reviewed the exact finished HTML at local file \`HAIEC_AI_Assurance_Controls_Practitioner_FINAL_2026.html\` (113,342 characters) with its embedded catalog/case JSON and JS render functions, plus the current source manifest.

| Requirement | Already implemented | Actual shortcoming | V2 action / importance |
| --- | --- | --- | --- |
| All control IDs, title, purpose and intended producer | **45/45** original catalog cards with exact question/source | Reference entry, not a detailed evaluation teaching recipe | Preserve source metadata and add per-control mechanism and steps. **P0** |
| Evidence each control needs | Exact intended producer; shared \`help[family].qualify\` generic per family | The 7 family generalizations + 1 specialized type cannot describe unique fields, source authority, tested window and negative proof for 45 different controls | Add specific input fields, preconditions, qualified producer, time/actor/system/scope, insufficiency. **P0** |
| How each control works | Family-level \`help[family].step\` describes a generic procedure | No individualized logic, expected guard/test result, verification/falsification and source identity | Each mini-card gains 3–5 concise steps and one concrete sample. **P0** |
| What a finding means | Four global visibility states + 12 scenario explanations; \`help[family].limit\` generic | No per-control positive finding, coverage-limited, no-finding and missing-source interpretation | Per-control "What can we conclude?" with at least one qualified and one unqualified variant. **P0** |
| Individual practice | **45/45** one-question mini-check, \`microQuestion(c)\`: choose intended producer among sources from other families | Recognition quiz can be passed without learning how to evaluate or interpret a finding | Keep as starter, add an evidence-set choice, finding interpretation and recommended next step. **P1** |
| Deeper lab | 12 cases, each 3 questions, **36/36** authored checks | Cases mention only **41 unique** of 45 controls; **G06, S07, A04, R05** have no explicit scenario mapping | Add 4 short embedded microcases or augment targeted existing cases, not necessarily 4 full new chapters. **P0** |
| Evidence quality | Five peer evidence views | Per-control source is static metadata; no evidence quality/readiness/freshness rubric for selected control | Select control then inspect suitable source IDs, timestamps and exclusions. **P1** |
| Implementation truth | 45 total / 15 priority / 11 visibility-supported; four read-model states, status explanation | "Visibility supported" is not same as actual test executed, result persisted, or native target guard | Preserve multi-lane truth, improve applicable vs not-applicable and verified/no-finding distinctions. **P0** |
| Monitoring | Four lanes, source STALE and response explanation | Not case-specific enough: no recurrence/update cadence, control degradation response, human ACK/target proof in individual cards | Add control operation plan and re-evaluation triggers by case family, starting R/E/A. **P1** |
| Printable source | Print CSS shows 45 title/question/source entries and 12 case summaries; worksheet notes export | Full *new* 45 worked lessons not yet present; current print atlas is metadata-only; active case may be singled out interactively | All 45 V2 lessons and workbook outputs readable in print and PDF. **P1** |
| Live-product bridging | General product links and deep links where supported | Static workbook never shows actual per-system control state; currently this is correct, but intended next action could be more explicit | Link actual authenticated UI per selected AI System/control where supported, never read customer data from static HTML. **P2** |

### Actual current coverage counts

- **45 unique catalog controls**: 42 G/S/A/R/L/E/P profiles plus specialized C7/C9/C16. The canonical manifest header has an older ambiguous "45 + 3" phrase, but the array contains **45 total**. Keep array authoritative.
- **15** launch-priority catalog metadata entries; does not mean 15 shipped or tested.
- **11** Control Visibility slice IDs: A02, A03, A04, A05, A06, A08, E01, E03, E05, R02, R03. Supported projection does not mean each was run for a customer, nor that it passed.
- **12** scenario fixtures, **36** authored decisions, **45** evidence-source recognition mini-checks.
- **41** distinct controls explicitly referenced by those 12 scenarios.
- **Four omitted from case references**: G06 (third-party AI/vendor assurance), S07 (secure AI SDLC/build provenance), A04 (observed action outside approved policy), R05 (recovery and resumption authorization).
- **Eight shared family evaluation procedures** rather than 45 unique written procedures. This is the principal depth gap.

## 2. V2 learning promise: one control, one defensible evaluation

**One concrete control card answers six customer questions:**
1. **What can go wrong?** A one-sentence consequence relevant to the selected system and business action.
2. **How this control works:** Prevention/detection/governance/recovery mechanism and exactly what boundary it applies to.
3. **What evidence is needed:** Data source, owner, minimum required fields, exact actor/action/target/time window, authentication/provenance/coverage and acceptable absence.
4. **How to evaluate:** Three to five realistic steps to inspect or, where actually authorized, test the condition; expected vs actual state and what would falsify the conclusion.
5. **What the finding means:** Established finding vs coverage insufficient vs no finding observed vs not assessed. The meaning is **specific to this control** and to the qualifying source. Define recommended remediation and effect proof if relevant.
6. **What to do next:** Owner, prioritized evidence request or remediation, valid retest criterion and trigger for reassessment.

This is **not** a plan to implement 45 detectors. Every V2 lesson is an editorial training example. Production status still comes solely from the real HAIEC canonical reads and actual authorized tests.

### Data structure to reuse

Import the [45-control V2 editorial matrix](HAIEC-CONTROLS-PRACTITIONER-V2-45-CONTROL-DEEP-DIVE-EDITORIAL-MATRIX-2026-10-21.json) as a **build-time** companion to the exact existing \`CATALOG\` metadata. Each row supplies **mechanism**, **evidence**, **evaluation**, **finding**, and **exercise**. The matrix already has exactly 45 unique IDs and all five nonempty distinct teaching fields. The source of IDs, canonical questions/titles and implementation flags remains the HAIEC catalog, not the educational overlay.

Extend each row after SME proofreading with:
- \`businessConsequence\`, \`controlFunction\` (prevent/detect/respond/govern/verify; may be multiple), \`sourceOwner\`
- \`requiredFacts\` (typed minimal inputs), \`sourceQualification\`, \`timeWindow\`, \`negativeCase\`, \`missingEvidence\`
- \`procedureSteps\` (3–5 authored human actions, with explicit \`requiresCustomerAuthorization\`)
- \`qualifiedExample\`, \`insufficientExample\`, \`noFindingExample\` and \`remediation\`
- \`testExpected\`, \`testObserved\`, \`retestTrigger\`, \`retestOwner\`, \`scopeLimitations\`
- \`relatedCodes\` (only exact IDs), \`caseFixtureId\`, \`productRoute\` ("requires sign-in" label)
- \`truthClass\` distinguishing educational scenario vs a real linked frozen report
- \`canonicalStatus\`: cataloged, visibility-supported metadata or separate specialized test, without inferred customer results.

If data still only supports a *proposed* test, present **"how you would assess it"** rather than "HAIEC has executed this test".

## 3. Four specifically missing worked examples

**G06 Third-party AI and vendor assurance (Governance):**
- Customer example: support chatbot relies on an upstream model vendor and a changed subprocesser.
- Show vendor relationship map, relevant data flows and the customer's authorized vendor review status.
- Source: signed/current vendor documentation, system/use/region, subprocessor list and evidence renewal.
- Exercise: Learner distinguishes a *missing updated review* from a proven vendor security incident and requests the minimum new fact.
- Output: vendor assurance review row with owner and review trigger.

**S07 Secure AI SDLC/build provenance (Application/tool security):**
- Customer example: source scanner reported no issue on Git commit A while release pipeline deploys commit B.
- Show source-to-build-to-deploy diagram and signed/hashed artifact identity.
- Source: exact source SHA, CI job/builder, artifact attestation/digest, deployment build ID and scan basis.
- Exercise: decide whether scan result can establish deployed release coverage; classify "basis mismatch" rather than PASS.
- Output: build-to-evaluation trace and recheck requirement.

**A04 Observed action outside approved policy (Authority):**
- Customer example: qualified identity-bound action log indicates a refund call beyond an approved amount.
- Show dated policy/version, agent/principal identity, observed action, amount/target and the unverified final payout.
- Exercise: distinguish *observed API invocation beyond approved envelope* from a proven completed payment, then select precise next source.
- Output: observed policy-deviation record with target effect status separate.

**R05 Recovery and resumption authorization (Runtime):**
- Customer example: incident hold is lifted before proof that the guard/limits and pending queue are reconciled.
- Show stop -> remediation -> human reauthorization -> reconciliation -> resumption -> verification, with each status independent.
- Exercise: identify whether authorized recovery is established and what evidence is required before resumption.
- Output: recovery decision packet, responsible owner and retest conditions.

**Editorial choice:** Add the four as short control-specific worked cases and incorporate into existing lab 03/02/11/06 respectively, while preserving the 12-case course structure. Do not need to inflate 12 to 16 full three-question labs; instead enhance selection by relevant control ID.

## 4. Three levels of case practice

**Level 1: Find the right control, 45 x one short question.** Keep the existing source-recognition checks, but rotate or expand with an exact-risk prompt rather than just asking "Which source?" on every ID.

**Level 2: Evaluate one control, 45 x a compact drill.** Per-control exercise set: inspect two pieces of authored evidence, decide applicability, pick the minimum sufficient additional fact or test, select the bounded finding/coverage interpretation and propose one owner action. Where a control cannot be assessed without a customer-owned source, explain the failure to qualify without inventing a result. At least one negative or contradictory condition in each family.

**Level 3: Cross-family operations, 12 x existing three-decision cases.** Preserve all 12 scenarios and 36 quiz choices, enhance their links to the deep-dive cards and microcases. Annotate each scenario with \`controlIds\`, source/proof state, reviewer/owner, test/response and recheck trigger.

**Capstone:** Provide one end-to-end in-scope evaluation and reporting packet based on Station 217 controlled enterprise case, keeping synthetic ERP/MES events and human decisions separately labeled from real evaluated HAIEC records. Learner chooses only the controls that materially apply; never show 45 green badges.

## 5. Findings and coverage interpretation rubric

### Distinct product truths

- **Catalog presence**: control intent exists in HAIEC's reference list.
- **Visibility implementation**: one of the 11 IDs can return scoped Control Visibility states where supported and eligible.
- **Control Visibility state**: DETECTED_FINDING, NO_FINDING_OBSERVED, COVERAGE_INSUFFICIENT, NOT_ASSESSED. **Not an assurance verdict**, and NO_FINDING_OBSERVED is **not PASS**.
- **Actual native control test**: requires a persisted exact test specification/result and scope, which may exist separately from the 11 projected IDs.
- **U5 Assurance**: ALLOW/REVIEW/BLOCK on exact evaluated system and basis, not a status translation from Control Visibility.
- **Human decision**: actual review/approval/rejection/defer, which requires authenticated actor/permissions and decision scope.
- **Monitoring**: source health states and actual event/alert evidence, not abstract "continuous" assertion.
- **Native target protection**: customer-specific mediation, no-bypass and independent target-effect evidence if present.
- **Receipt/replay**: independently reproducible frozen result integrity, not certification or independent proof of upstream facts.

### Five distinctions every deep-dive example must make

1. **Suspected issue vs qualified finding** (candidate-only mapping and source coverage stay qualified).
2. **No finding observed vs adequate full security coverage** (a bounded scan is not a universal pass).
3. **Approval vs delegated business choice vs execution permission** (specific to G/A/R).
4. **Configured/recorded vs tested/applied at target** (especially R03, R04, R05).
5. **Valid digest vs valid upstream source fact vs correctly bound selected AI system/control** (especially E01, E03, E05).

Example expected copy for **R03 Runtime Guardrail Enforcement Evidence**:
- What it seeks: "Was a defined guardrail decision actually applied at the consequential action boundary?"
- Required evidence: approved policy and version, authenticated control point, exact request decision, interception/dispatch and target-side witness as applicable.
- Test approach: in an approved environment send a denied-scope request, inspect intervention proof, check there was no bypass and verify target state.
- Meaning: policy says DENY but target changed means the guard must not be represented as proven. A policy configured with no intervention witness is **NOT_WIRED / NOT_ESTABLISHED**, not "guard passed".
- Follow-up: reconcile control-point binding, instrument the target and retest under accepted permissions.

## 6. Interactive V2 UX and diagram enhancements

**Keep the existing design:** one standalone light-theme HTML file, current hero action diagram, eight-family constellation, ten chapters, responsive nav, source/visibility tabs, four operational monitoring lenses, 12 labs, 45 control list, favorites, notes, Markdown/JSON export and print.

### Additions to the existing control-detail pane

Tabs or sections in this order:
1. **Understand:** risk/consequence and mechanism, plain language.
2. **Evidence:** specific input fields and producer/actor/scope/time quality; "what this source cannot prove".
3. **Evaluate:** 3–5 practical steps, expected vs observed and explicit authorized-test boundary.
4. **Interpret:** an established finding, no-finding, insufficient coverage or not-assessed state, precisely scoped.
5. **Practice:** case condition, choose evidence/test, interpretation and owner/action; explanatory feedback and counterexample.
6. **Operate & Verify:** monitoring freshness if relevant, response, recheck, change trigger, report/replay/receipt where legitimately issued.

**UX rule:** Do not render a giant six-column by 45-row table or 270 manual pages. One reusable six-tab detail component backed by exact per-ID authoring data achieves 45 complete journeys with compact navigation and searchable controls.

### Purposeful animations, all educational and accessible

A. **Choose a control, light up the source/evidence path.** Animated line: agent -> tool/API -> resource -> consequence; relevant control pin highlights exactly which actor/operation/source must be examined. Does not imply the action was executed.

B. **Evidence comparison.** Animated reveal of applicable policy, effective grant, code capability, observed event, each as **independent** facts. An insufficient source stays visibly limited rather than fading into green.

C. **Result interpretation.** When learner chooses a proposed result, show three side-by-side outcomes: finding within scope, unknown/unassessed, and recommended human action. No overall "compliant" gauge.

D. **Operational response clock.** For R/E/A controls, show source freshness, alert sent, human acknowledgment, requested intervention, actual target readback as separate timed dots. The animation stops at missing proof rather than implying completion.

E. **Build/release provenance for S07** and **recovery workflow for R05** with version/time overlays, plus a **vendor dependency map for G06** and **observed-action-vs-final-effect animation for A04**.

All diagram text must be actual DOM/SVG text, keyboard accessible, printable, reduced-motion compatible. Never privilege one of the six HAIEC jobs visually or imply a generic native PEP is installed.

### Data and interaction integrity

- HTML may store/export only deliberately typed non-sensitive learner notes. Clear all values with an explicit control; no API keys, logs, confidential policies or customer raw data.
- No fake evaluation receipt IDs or "live control result" badges from authored cases.
- Search, 45 ID selection, 15 launch flags, 11 visibility flags and 3 specialized tests continue to work.
- Keep the current good practice of marking illustrative cases clearly but in normal customer-ready language rather than internal development labels.
- Link to actual HAIEC authorized workspace only as an optional explicit navigation action; do not execute anything automatically.
- If future user asks site placement, use existing [Learn hub](https://www.haiec.com/learn) or [Resources](https://www.haiec.com/resources) after editorial review. The current Learn hub contains a broad compliance/general-training library, so add a distinct **AI Agent Assurance Practitioner** learning path rather than duplicate its general compliance course. Public DAI and Controls product pages retain separate marketing purpose.

## 7. Recommended assessment and reporting workbook

Export a **Control-by-Control Review Record** with:
- AI System / exact reviewed environment and responsible owner.
- Selected control ID, canonical objective and applicability with rationale.
- Source identity, provenance, scope, review date and freshness; candidate vs qualified distinction.
- Actual method or proposed test, consent and coverage/denominator.
- Raw finding/observation from **actual HAIEC** only if a real result link is supplied; otherwise *illustrative learner interpretation*.
- Control Visibility state if real, native result if real, U5 disposition if real, human decision if real, target effect if real; each independently labeled.
- Implication and business consequence, next smallest verified fact, remediation owner and recheck trigger.
- Controls excluded as not applicable with explanation; no denominator inflation.
- Report/receipt link and exact result/system binding only where valid, including proper system ID and replay scope.
- Exact constraints and limitations, no universal security score.

**Human-friendly output:** single-page selected-control briefing plus expandable technical evidence annex, neither a fake certification.

## 8. Build plan for Devin, no broad engine work

**Pass 1: Freeze source** (small code-level verification).
- Re-read \`lib/control-visibility/catalog.ts\`, \`types.ts\`, \`ControlCatalogPanel.tsx\`, current 45-entry manifest count/flags and relevant source owners.
- Reconcile 45-row V2 educational matrix to IDs; if changed, update matrix with dated source SHA and explicit diff.
- Preserve historic source/HTML artifact. No new HAIEC detector or backend production change.

**Pass 2: Review the editorial matrix.**
- Have SME review all 45 authored mechanism/evidence/evaluation/finding/exercise records.
- Require accurate operator scope and unique example, no generic family boilerplate for each card.
- Add 45 evidence sufficiency conditions and at least one negative or insufficient case per control; avoid false claims about source reachability, runtime and SIEM/IAM integrations.

**Pass 3: Enhance the existing HTML.**
- Render six sub-sections for selected ID without rerouting the experience.
- Keep current catalog/progress/executive path and 12 labs; add 45 compact three-decision drills from authored content.
- Add four missing worked examples and 4 purposeful SVG/DOM diagrams with reduced motion.
- Rework each evidence-source recognition question to include applied understanding; ensure quiz authoring is deterministic and not AI-scored.

**Pass 4: Improve operational output and print.**
- Add selected-control records, actual-vs-illustrative labels, meaningful owner, source and recheck plan.
- Print selected controls plus full V2 interpretations and all scenario summaries. Export remains local to learner.
- Preserve legacy Markdown/JSON export (schema version, backward compatibility).

**Pass 5: Focused validation and release.**
- Source-based assertions 45 exact IDs, all fields and flags; 45 unique authored mechanisms and evidence requirements; 45 findings and 45 exercises.
- Interactive browser sample of all 45 cards; automated 45 source question + 45 interpretation/evaluation drills, 36 existing case questions, 12 cases, four newly covered IDs.
- Test 320, 390, 768, 1280, 1440px; keyboard/focus, 200% zoom, reduced motion and no console errors.
- Review actual printed PDF from HTML, including last pages of all deep-dive entries, and links.
- Verify source truth, no unsupported control success or customer-native effect claims.
- Commit updated HTML and plan to Common Repo, with dated changelog and acceptance. No independent new HTML document unless V2 filename explicitly requested by the user; preserve previous version/rollback link.

**Acceptance bar:** A reviewer can select ANY control among 45, explain its mechanism, identify the minimum correct source, describe how to evaluate it, distinguish a real finding from insufficient evidence, propose accountable remediation and export a scoped review record. A learner should NOT be able to complete an entire deep-dive merely by matching an evidence-source label to a different family's source.

## 9. Source map, precedence and constraints

**Current verified source precedences:** deployed HAIEC and exact qualified output > current code, persisted evidence and canonical product registries > active Common Repo execution decisions > historical design references and prototypes. Static educational fixtures are never new primary evidence.

- [Control Catalog source](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts), true count **45**; metadata does not imply production execution.
- [Control Visibility schema](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/types.ts), four factual states separate from U5/UCP verdict.
- [Control Catalog UI](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ControlCatalogPanel.tsx), current rich system evidence/journey UI must not be replaced.
- [P08 Controls & Proof acceptance](../UX-P08-CONTROLS-OPERATIONS-IMPLEMENTATION-RECORD-2026-10-20.md).
- [P08.1 MCP control/system and replay binding fix](../UX-P08.1-MCP-CONTROL-REPLAY-BINDING-IMPLEMENTATION-RECORD-2026-10-18.md): exact aiSystemId + controlId + resultId, no cross-system attribution.
- [P10 Monitoring source-truth](../UX-P10-MONITORING-OPERATIONAL-VISIBILITY-IMPLEMENTATION-RECORD-2026-10-18.md): passive source health, tests, policy and native target proof independent.
- [Evidence public explainer](https://www.haiec.com/evidence), [Assurance explainer](https://www.haiec.com/assurance) and [Documentation](https://www.haiec.com/docs).
- [Learning hub](https://www.haiec.com/learn), [Resources](https://www.haiec.com/resources).
- [Control-specific editorial matrix](HAIEC-CONTROLS-PRACTITIONER-V2-45-CONTROL-DEEP-DIVE-EDITORIAL-MATRIX-2026-10-21.json). **Proposed training procedures, not an executable API contract**.

**Explicitly outside this review:** creating another workbook or producing new HTML, modifying HAIEC production application, installing customer-native runtime middleware, asserting all 45 controls have live tests, claiming ISAF v2 externally published or promising legal compliance.

*Review status: Completed coverage audit, unique 45-control editorial authoring overlay, scenario-gap remedies, V2 enhancement requirements and bounded handoff. Existing HTML remains unchanged.*
