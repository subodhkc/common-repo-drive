# HAIEC — Product Entry, Consequence Ontology, Customer Jobs and Inspector Interaction Decision

> **UX delivery sequence (one page per session):** [Page-by-Page UX Design and Validation Program](HAIEC-PAGE-BY-PAGE-UX-DESIGN-AND-VALIDATION-PROGRAM-2026-10-17.md) scopes UX-P01 **Start Here** first, followed in separate implementations by Dashboard Overview, AI Estate, System Assurance Case, action maps, Sources, evaluation, Controls, My Work, Monitoring, Reports, Usage and shell. Do not spread UX-P01 edits into later pages.


**Decision date:** 2026-10-17. **Status:** **ACCEPTED PRODUCT/UX DESIGN RECOMMENDATION — NOT SHIPPED OR RUNTIME VERIFIED.**  
**Application source checked:** [HAIEC `Main` `8880e17f7f45145801561f6de4cd174490a76fcb`](https://github.com/subodhkc/haiec-website/commit/8880e17f7f45145801561f6de4cd174490a76fcb) (E6.1). Latest external MCP/production browser confirmation and in-progress E6.2 are not independently verified by this review.  
**Ownership:** HAIEC application owns canonical facts, status, permissions and screen routes; Common Repo owns design decisions and developer handoff. No HAIEC application files were changed.  
**Companion contracts:** [E6/E6.1 UX, approvals, operational controls and middleware review](E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md); [detectors, controls, intake and combinations](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md); [87-row curated capability/workflow matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) (not exhaustive); [latest source/precedence policy](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md). This document refines the earlier proposed *AI System → “What can it cause?” → goal → source* sequence: the question is a HAIEC analysis promise, **not a required first customer input**.

> **Validated single-HTML reference (2026-10-17):** [Revised three-path entry mock](sample-light%20entry%20additional) · [DeepSeek design review, nine-suggestion disposition and integration contract](HAIEC-LIGHT-ENTRY-DEEPSEEK-MOCK-REVIEW-AND-V2-IMPLEMENTATION-CONTRACT-2026-10-17.md). This confirms **one initial entry layer and progressive contextual detail, not a mandatory two-layer wizard**. A selected system, lightweight goal or available source are peer starting points; the mock never uploads, scans or issues a receipt. Existing product owner contracts remain authoritative. This supplements, not replaces, the source-backed design decision below.

## 1. Decision: do not ask customers to know the technical consequences that HAIEC is designed to discover

**Retain the existing product promise:** **“Know what your AI can do.”** Current [homepage hero](https://github.com/subodhkc/haiec-website/blob/Main/app/page.tsx) already leads with that line and a source→authority→consequence explanation. Do not mechanically change existing productive marketing. Suggested subordinate value line for testing, not a new legal guarantee: **“Discover consequential capabilities. Assess their authority and risks. Govern operations with evidence.”**

- **Do not lead onboarding with “What can this AI system cause?” as a form/question the user must answer.** It suggests the user supplies the answer and makes the engine seem like a checklist, despite source reachability, action topology, five-plane comparison, DAI, controls, monitoring and consequence/effect proof.
- **Use “What can this AI system cause?” internally as a central question HAIEC investigates** and as a read-only heading for a system with qualified action-path evidence. Alternate customer-facing display: **“Consequential capabilities and evidence”**, **“What HAIEC established about this system”**, or **“Explore action paths and consequences”**.
- **Do not imply consequences are necessarily realized outcomes:** distinguish **CAN_ATTEMPT / CODE_REACHABLE**, policy-authorized, effectively granted (if qualified), observed actions, guard/provider outcomes and independently verified target effects. Unassessed/unqualified is not no-risk.
- **Do not use a generic threat gallery as the technical consequence ontology.** A prompt-injection technique or IAM misconfiguration is a mechanism/condition; changing an order or leaking data is an operation/possible consequence. The ontology retains exact path IDs, relation IDs, sink target IDs, effect verbs, scope and source basis.

### The initial ask must adapt to what the user knows

| Entry and user situation | First clear customer prompt / CTA | Immediately resolve, do not demand | First screen/output | Next eligible action |
|---|---|---|---|---|
| New organization / no system registered | **“How would you like to start?”**: *Explore my AI systems*, *Choose an objective*, *Connect a source / upload evidence* | Never demand a known consequence; do not require all five planes | Honest empty estate, three entry choices, ability to create/register or discover a system | Minimal authorized source/system registration or goal preflight |
| Known organization, many systems | **“Which AI system would you like to examine?”** | Use exact org-scoped `aiSystemId`, not fuzzy display-name selection | Estate summary: systems, source/evaluation basis, affected consequences and gaps | Open System Assurance Case or My Work |
| Selected system with source facts | **“What would you like HAIEC to establish or do?”** | Six independently selectable customer jobs with live readiness | System facts, source basis, qualifying consequence paths if any | Contextual job action and requirements |
| Person with specific concern | **“What are you investigating?”** (optional example gallery) | Gallery is examples, not classified truth | Pattern → relevant job(s) → required source types → current coverage | Filter existing action/DAI/control/finding view |
| Source-first developer / DevSecOps | **“What can you connect or provide?”** | GitHub App; supported CI Action release, local source/ZIP/SARIF, IDE/MCP, logs/JSON/OTLP | Exact source permission, readiness and what the selected data can establish | Bind/upload/preflight; run only eligible analysis |
| Governance reviewer / approver | **“What needs your decision?”** | Human assignment, explicit SoD and current request digest | My Work assigned requests or scoped review packet | Approved permitted human decision, not AI-agent approval |
| Security operator / incident owner | **“What needs attention?”** | Source health, qualified alert, native PEP and current effect limitations | Monitor/incident/source freshness + authorized response | Investigate or permitted contained action; never invent target wiring |
| Auditor or evidence owner | **“What needs verification?”** / *Review an evaluation* / *Provide evidence* | Immutable exact evaluation/report IDs and source scope | Evidence Verification / Assurance Receipts, upload/review status, limitations | Qualified reviewer attestation, report proof or evidence request |

**Three entry routes are peers**; any user can switch paths later. No universal onboarding gate. Preserve current [Start Here](https://github.com/subodhkc/haiec-website/blob/Main/components/dashboard/QuickStartWizard.tsx), [System First Onboarding](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/SystemFirstOnboarding.tsx), [E1 goal projection](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/goal-availability.ts) and [E2 independent source onboarding](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/source-onboarding.ts); refine contextual copy/links instead of building another onboarding state machine. Existing API, MCP, role and source ownership remain canonical.

## 2. Consequence ontology versus approachable investigation patterns

**Canonical technical truth:** source-capable action path → exact handler/operation → resource/sink/consequence relation → scoped authority, actual observation and qualified effect evidence, where available. The [Consequence Flow projection](https://github.com/subodhkc/haiec-website/blob/Main/lib/topology/consequence-flow-presentation.ts) **only groups already evaluated paths for display**, preserving each exact `consequenceRelationId`; `DISPLAY_FAMILY != IDENTITY`. The [Kestrel consequence labels](https://github.com/subodhkc/haiec-website/blob/Main/data/kestrel-demo/consequence-labels.ts) are a **frozen demo-specific label map**, not a generic cross-industry deterministic ontology. The [Action & Access Map](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ActionAccessMapView.tsx) has independent system, action/consequence, authority and evidence lenses. Do not replace those technical projections with pattern buttons.

For product discovery, **a non-authoritative pattern gallery** is useful as an optional *“What would you like to investigate?”* collection. Each card carries a **question**, mapped to existing customer jobs, evidence prerequisites and specific canonical view. It does **not** assert that a customer's system has that risk.

| Illustrative concern / customer wording | Technical dimensions to inspect | Suggested jobs | Minimum qualifying starting inputs and unresolved proof |
|---|---|---|---|
| “Could an agent issue or change an order without permission?” | Operation WRITE/CREATE/UPDATE, resource, code path, root policy, control boundary, target effect | Discover, Evaluate, Authorize, Protect | Qualified source/tool manifest to establish reachability; policy/decision for approved scope; runtime+target readback only for actual execution/effect |
| “Can an agent delegate beyond its assigned scope?” | Delegation chain, DAI nine dimensions, principal, approval and handoff/target | Evaluate, Authorize, Monitor | Approved/declaration scope + qualified comparable source/action/handoff; cross-system issuer-qualified chain remains a future gated capability |
| “Could the agent identity reach resources it shouldn't?” | IAM and effective-grant qualifiers, policy restrictions, resource scope | Evaluate, Authorize | IAM policy document supports declared configuration; live provider observation plus full auth context needed for effective grant; absence stays unknown |
| “Could sensitive data reach another tool or provider?” | READ/EXPORT/SEND, data class, destination, identity, egress policy, exact action | Discover, Evaluate, Monitor | Source trace/egress events and data classification where applicable; an output flag isn't proof of completed exfiltration |
| “Can prompt injection or retrieval content influence a consequential action?” | Prompt/RAG static and empirical runtime rules, control boundary, tools/targets | Evaluate, Monitor, Protect | Source/config or authorized runtime test; presence of source rule ≠ attack succeeded or target affected |
| “Are guards and thresholds actually working?” | Versioned policy, human decisions, deployed PEP, telemetry, alert, guard result and independent effect | Authorize, Monitor, Protect, Verify | Exact guard configuration/readiness/target integration; evidence of target effect only when native source qualified |
| “Has the AI behavior or cost changed?” | Historic comparable baseline, token spend, model/tool versions and action changes | Monitor, Verify | Bound time/identity/cost source, comparable baseline; Admin API spend is not agent-action telemetry |
| “What did our AI change between releases?” | Comparison of qualified source, action paths, policy, evaluation and provenance | Evaluate, Verify | Comparable versioned evaluated snapshots, exact difference; not a blind current/historic join |

**Gallery rules:** pattern labels must be human-readable, concise and accessible; tags about OWASP or EU AI Act go in technical/control detail, not as stand-in consequences. Categories are opt-in examples; no recommendation ranking without assessed evidence. Label empty previews **“Example investigation”**, not “HAIEC detected.” Suggested patterns may be filtered by the user's actual system sources but **never silently classify a risk**. Once a real evaluated path exists, prioritize **its exact consequence** over stock examples.

### Recommended consequence explanation stack

1. **Action / operation** (READ, WRITE, SEND, INVOKE etc, or established semantic verb).
2. **Target / resource and possible business effect** (e.g., creates an order record; don't infer sends an SMS from reading SMS records).
3. **Who or what can invoke it** (qualified agent, tool, caller, principal; candidate ≠ runtime instance).
4. **Authority and controls** (requested, approved, effective, code-capable, observed; DAI/delegation and applicable control states).
5. **Outcome and proof frontier** (code-reachable / observed / native guard applied / target readback; exact timestamp and provenance).
6. **Change and impact** (comparison, cross-system affected relationships **only if verified joins**; do not manufacture enterprise blast radius).

These are *visual layers* for drilldown, not compulsory sequence or a new authoritative consequence engine.

## 3. Six jobs: UI contract must be complete, not six equal empty tiles

The [E1 Goal Availability](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/goal-availability.ts) maps six customer jobs to 13 canonical MCP guide goals + 4 workflow-only goals. It already derives platform readiness, caller role/key scope, entitlement, bound sources, evidence needs, limitations, state and one permitted next action. The [MCP Capability Guide](https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/capability-guide.ts) already declares `evidenceRequirements`, approvals and limitations. The [GoalAvailabilityPanel](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/GoalAvailabilityPanel.tsx) currently exposes titles, badges and links, but **not the complete customer contract as one readable unit**.

**Presentation-level job card requirements:**
- **Job:** one readable objective, no internal numeric aliases.
- **Minimum to start:** relevant source/actor/role per specific goal, with optional alternatives and source-derived readiness.
- **What you get:** a **bounded output type** (inventory, HAIEC Assurance Engine evaluation, scoped human decision, qualified monitoring, protection read model, Assurance Receipt/Evidence Verification); no guaranteed positive outcome.
- **What stays unknown:** missing source/plane, source qualifier, target wiring and current-versus-evaluated distinctions.
- **Your current readiness:** exact eligible/blocked/unknown state and one canonical next action / responsible actor, with helpful permission explanation.

| Customer job | Representative minimum | Bounded output promise | Typical remaining unknown |
|---|---|---|---|
| **Discover** | Authorized tenant read; optional bound source for richer discovery | Known estate, qualified agent/tool candidates and source states | Unknown/unregistered agents, unobserved runtime instances |
| **Evaluate** | Exact system/selection, selected supported analyzer/profile/qualifying evidence | HAIEC Assurance Engine source- or evidence-scoped assessment and stated limitations | Unsupplied evidence planes, actual runtime and target effects |
| **Authorize** | Approved policy/delegation scope **or** eligible review/draft context as required by selected operation; scoped human actor for decision writes | Versioned policy or digest-bound human decision, separated from evaluated assurance | Whether the target actually dispatched/enforced/executed |
| **Monitor** | Authorized source binder + qualifying signal or supported historical export | Source health, bounded observations, detection and comparisons | Uninstrumented behavior, completeness, causality and current freshness |
| **Protect** | Existing configured policy/control for read; real target PEP, scoped operator and explicit approval for live writes | Control configuration/readiness; qualified native guard/effect facts only where integrated | Actual target protection, if native integration is absent |
| **Verify** | Exact eligible frozen evaluation, report/receipt, control result or comparable snapshots depending on goal | Assurance Receipts, Evidence Verification and qualified replay/comparison | Facts outside evaluated scope, withdrawn/expired receipts and current source state |

**No new readiness registry, new job database, or forced sequential funnel.** Reuse E1/E2 and MCP guide; if “what you get” is not explicitly owned today, provide a narrowly defined **presentation label** based on canonical output types, with tests protecting truthful absence. Expose separate input availability from ability to actually execute/complete; “ready to open” is not “source adequate for a positive result.”

## 4. Single contextual detail convention before adding more UI panels

E6/E6.2 suggested five distinct inspection experiences: Controls & Operations, Detection Coverage, Provider Usage, Evidence Intake/Attestation, and Delegated Action Chain. The design concern is valid: five unrelated drawer behaviors would recreate UI fragmentation.

**Decision:** **One consistent interaction grammar** across surfaces, without forcing all data/permissions into one monolithic component.

- Primary page or System Assurance Case displays summary and **one clear inspect affordance**: “View details”, “Inspect evidence”, or row/node selection.
- A **single contextual inspector slot per workspace/page** (right-side sheet on desktop; full-screen sheet on mobile), with consistent width/heading/close/back behavior, URL deep-link identity where permitted, focus trap/return, Escape, keyboard and screen-reader naming.
- **Common content order:** **Why this? → What is established? → What is unknown? → Evidence & provenance → What can I do next?** Show source/as-of scope and permission limitations inline.
- A context-specific tab inside the inspector is fine for deeper material, but avoid arbitrary nested drawers and drawer-on-drawer. Prefer “Open full page” when interaction becomes complex or requires prolonged work.
- **Keep existing [Help Drawer](https://github.com/subodhkc/haiec-website/blob/Main/components/dashboard/HelpDrawer.tsx) dedicated to educational how-to information**; existing [Action Map inspectors](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ActionAccessMapView.tsx) can continue to inspect graph nodes. Align visual/behavior pattern without rerouting all through HelpDrawer.
- **Actual writes and consequential decisions remain proper authenticated edit/confirmation pages or dialogs** (e.g., reviewer approval, control mutation, kill/recover, uploader confirmation). Read-only evidence inspector ≠ action confirmation; never put a privileged effect behind an accidental drawer button.
- **Five contexts, one interaction convention:** (i) Control Operations facets; (ii) detector participation/coverage and limitations; (iii) provider usage and exact attribution; (iv) human-upload qualification and preview (write confirmation separate); (v) delegated action hop and proof frontier (future qualified cross-system contract). Reuse existing report, controls and graph tabs; never replace them.

### Common “Why am I seeing this?” affordance

Every suggestion/card/detail should explain **which chosen job, selected system, qualified evidence and actor scope** produced it. Distinguish **system-specific detected result** from **example capability**, **not assessed**, **required input**, **unavailable integration**, **historical result** and **current operational state**. The explanation links to the owning evidence/provenance; never use an LLM-authored rationale as proof of a deterministic join.

## 5. Preserved product architecture and dependencies

- **Message architecture:** Understand / Assure / Govern & Operate; **navigation choices:** Discover / Evaluate / Authorize / Monitor / Protect / Verify (all independently accessible).
- **Scope:** Organization AI Estate → System Assurance Case → Agent/Action/Control/Decision → exact source/evidence/receipt.
- **Five evidence planes:** REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED, **independent dimensions, not sequential onboarding stages**.
- **DAI:** nine dimensions and qualified delegated scope, code-capability, effective grant, observed action, independently retaining unknowns.
- **Control lifecycle:** catalog/applicability, configuration, policy/human approval, deployed/target bound or NOT_WIRED, monitored, target-applied/effect-qualified, control proof/test/replay and remediation. A UI panel must not upgrade any stage.
- **Input alternatives:** GitHub App, customer-appropriate CI path (version/hold truth checked), local bundle, SARIF, config/JSON/CSV/log evidence, OTLP, IAM observation or attested export, confirmed human-upload evidence, provider Admin API usage, scoped runtime endpoint test. Never require all for all jobs.
- **Human review:** existing My Work decision/SoD/digest owner; role display does not grant rights. Human attestation ≠ qualified machine producer ≠ independent target proof.
- **Qualified cross-system delegation:** future source-qualified issuer identity, grant, scoped parent/child trace, DAI comparison and independent effect readback; current same-system witness and cross-scan grouping do not establish it. A pattern card may navigate to current available evidence but must state future proof boundary.
- **Verification:** immutable evaluated snapshot/receipt and current source views kept separate; framework mapping is not certification; no new composite trust or risk score.
- **Transports:** Dashboard, API, MCP share canonical owner and reason/next-action facts. The assistant may explain goals, never authoritatively change customer decisions.

**Minimum regression checks:** empty org, no systems, selected system without source, multi-system tenant, viewer restricted rights, approver assigned exact request, developer source-first, auditor receipt-only, E1 per-job requirements and outputs, no installed native PEP, no telemetry, limited IAM, optional input alternatives, read degraded vs empty, sample pattern never promoted to finding, consequence display family never merged into canonical identity, tab/deep link preservation, nested inspector prevented, one modal write confirmation, stable browser back/focus/mobile view, cross-tenant isolation, and parity with current MCP capability guide. Focused unit/UI tests over broad redundant E2E.

## 6. Roadmap alignment and next handoff (do not interrupt active E6.2)

**P0 — first, UX contract:** read-model-backed minimum/input/output/unknown on six job cards; one contextual inspector interaction convention; precise customer copy and qualified source/effect labels; preserve E6.1 reviewer and Controls/Proof journeys. These are **composition and design**, not new engine phases.

**P1 — optional contextual onboarding:** demonstrate three peer entry routes in existing Start Here and system context; add optional example investigation gallery mapping existing catalog to goal/source/deep link; surface “What HAIEC established” on real System Assurance Cases; keep the technical consequence canvas as the evidence-bearing drilldown.

**P1 — evidence + developer documentation:** capability→source→scope→output→unknown→next-action matrix (from this plan and the detector/control intake matrix), onboarding instructions for actual CI/GitHub/telemetry/manual file paths, screenshot/UX style specification for one inspector slot; use HAIEC Assurance Engine and Assurance Receipts / Evidence Verification in customer-facing language (internal serialized legacy labels unchanged).

**Separate gated engineering — future cross-system delegation:** issuer-qualified identity, grant and parent-child correlation, exact scope narrowing, provider target outcome and independent readback with focused negative cases. The gallery/drawer must NOT preclaim this capability.

**E7 and T1 remain separate:** external MCP interoperability verification and later authorized KestrelVoice recording/replay with restricted raw capture + edited/narrated operational-layer video. This UX design review creates neither a release gate completion nor an automation.

## 7. Source references / release and contradiction safeguards

- [Homepage hero](https://github.com/subodhkc/haiec-website/blob/Main/app/page.tsx); [Start Here](https://github.com/subodhkc/haiec-website/blob/Main/components/dashboard/QuickStartWizard.tsx); [System First Onboarding](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/SystemFirstOnboarding.tsx).
- [E1 per-goal schema/readiness](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/goal-availability.ts), [E1 UI](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/GoalAvailabilityPanel.tsx), [MCP guide](https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/capability-guide.ts), [E2 source alternatives](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/source-onboarding.ts).
- [Action/Consequence presentation grouping](https://github.com/subodhkc/haiec-website/blob/Main/lib/topology/consequence-flow-presentation.ts), [ConsequenceFlowView](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ConsequenceFlowView.tsx), [ActionAccessMapView](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/ActionAccessMapView.tsx), [Demo-specific Kestrel sink labels](https://github.com/subodhkc/haiec-website/blob/Main/data/kestrel-demo/consequence-labels.ts).
- [Executive consequence-first claim/copy constraints](https://github.com/subodhkc/haiec-website/blob/Main/capabilities/engine-qual/executive-reporting-truth.ts), [Assurance Case](https://github.com/subodhkc/haiec-website/blob/Main/components/ai-inventory/AssuranceCasePanel.tsx), [Help drawer](https://github.com/subodhkc/haiec-website/blob/Main/components/dashboard/HelpDrawer.tsx), [Help context](https://github.com/subodhkc/haiec-website/blob/Main/lib/help-docs/HelpDrawerContext.tsx).
- [Common Repo product UX and middleware design](E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md); [intake and detectors/control source map](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md); [Architecture diagrams (concept, not proof)](DIAGRAM-SPECIFICATIONS.md).

**Historical product files may use legacy numeric internal engine/receipt identifiers; any new customer-facing copy should use HAIEC Assurance Engine, Assurance Receipts and Evidence Verification without breaking persisted/API compatibility. Do not infer a current release from dated common-repo notes.**
