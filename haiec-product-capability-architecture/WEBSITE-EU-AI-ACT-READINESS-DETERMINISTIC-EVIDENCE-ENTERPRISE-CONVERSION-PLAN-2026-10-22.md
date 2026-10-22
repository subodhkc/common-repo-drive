# HAIEC EU AI Act: Enterprise Readiness, Verifiable Technical Evidence and Ongoing Assurance

Date: 2026-10-22
Status: Completed source review and customer-facing website enhancement plan. This document does not deploy website changes or imply implementation acceptance.

## 1. Strategic decision

PRESERVE the current /frameworks/eu-ai-act page. It was recently refreshed, is current with Regulation (EU) 2026/1744, and has strong technical grounding. The priority is a business-positive, interactive, actionable **EU AI Act Readiness** proposition, not another legal encyclopedia or new compliance engine.

Core positioning:
- "EU AI Act Readiness. Backed by Deterministic Evidence."
- "Turn EU AI Act expectations into clear evidence requirements, a prioritized readiness plan and assurance records that stay useful as your systems evolve."
- "Understand your obligations. Evaluate the AI actions and controls that matter. Keep evidence ready for review."

Professional audience: EU-market SaaS providers; enterprise deployers using agents and AI workflows; AI/CISO/governance and compliance leaders; technical assessors, procurement teams and independent assurance partners.

HAIEC sells a **software-led, scoped technical readiness and assurance review**, with an optional enterprise proof-of-value/POC and ongoing operating review. Do not promote HAIEC as an EU notified body, CE marking authority or issuer of a regulator compliance certificate. Place qualification in one concise FAQ or buyer responsibility row instead of defensive hero copy.

Approved pillars: Understand -> Assure -> Govern & Operate.
Available operating capability families (do not portray as a mandatory sequence): Discover, Evaluate, Authorize, Monitor, Protect, Verify.
Evidence planes: Requested / Policy Authorized / Effectively Granted / Code Capable / Observed, distinct questions, not a sequential ladder. DAI compares authority/capability/delegation and observed evidence; never a sixth plane.
Category: Evidence-Bound Assurance / Deterministic AI Action Assurance. "High assurance in every consequence."

## 2. Source review as of 2026-10-22

### Existing main source and web page
Canonical: https://www.haiec.com/frameworks/eu-ai-act
Main repo: subodhkc/haiec-website
- app/frameworks/eu-ai-act/page.tsx (SSR, article evidence, roles, obligations, dates, technical evidence families). It now has the H1 "EU AI Act: Understand the obligations. Establish the evidence."
- app/frameworks/eu-ai-act/metadata.ts (overlapping metadata owner), page.tsx also exports metadata: inspect and choose one source of metadata truth during implementation. Preserve canonical.
- data/regulatory-references.ts: shared authoritative law/reference dates and official source links across /regulations and this page. Do not duplicate timeline literals elsewhere.
- data/developer-products.ts: source for AI AppSec detector and MCP Tenant Isolation rule counts. Avoid publishing an unverified static new count; current page dynamically reads from manifest.
- Current page includes four roles, five obligation families, amended 2026 dates, Art. 9 through Art. 15 evidence mapping including Article 11, seven technical evidence families, external procedural responsibilities, and resources. Preserve, do not revert to older version with six articles and 91-rule scanner.
- Current hero and main page currently read as regulation reference and boundary exposition. The buyer cannot easily see a qualified readiness output, what happens after a demo, or why deterministic assurance supports a funded program.

### Existing product layer worth making visible (subject to runtime validation)
- lib/eu-ai-act/scoring-engine.ts and lib/eu-ai-act/types.ts implement questionnaire-based role-specific readiness scoring and gap identification, including provider/deployer and dual role. Internal role weights are product-defined assessment heuristics, **NOT official EU AI Act percentages or a conformity verdict**.
- tda/modules/12-eu-ai-act.md documents a 135-question / 11-section assessment and scoped workflow, but counts/document reflect a March 2026 engineering snapshot. Validate current actual questions, state/API and availability before claiming public product entitlement. Don't advertise "135-question certified assessment" without source/runtime acceptance.
- app/api/eu-ai-act/assessment/create/route.ts exists, session- and tier-gated; public CTA must not pretend anonymous unauthenticated questionnaire runs.
- lib/eu-ai-act/artifact-generator.ts supports structured report artifact generation, evidence hash/ID and MARPP lock hooks. Source code exists; test owner/tenant identity, actual template, issuance, verification URL, security and runtime path before showing a live publicly verifiable EU record. No fabricated verification number or certificate.
- Separate AI AppSec/tenant-isolation tools, source-action reachability, DAI, supported authorized runtime evaluation, controls catalog, evidence/receipt paths and bounded monitoring form the evidentiary core.
- Common Repo: WEBSITE-REGULATIONS-INTERACTIVE-REQUIREMENT-EVIDENCE-UX-PLAN-2026-10-22.md, WEBSITE-ISAF-V2-FRAMEWORK-PUBLIC-PAGE-MANUSCRIPT-RELEASE-UX-SEO-NAV-PLAN-2026-10-20.md, enterprise executive sales strategy, assurance interactive design. Reuse approved light-first brand visual grammar and keep methodology references consistent with ISAF v2 without suggesting ISAF is a binding EU regulation.

### Official current dates (important source reconciliation)
Primary:
https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline
https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng

- 2 Feb 2025: key prohibited practices and AI-literacy provisions started applying.
- 2 Aug 2025: GPAI model obligations and governance rules started applying.
- 2 Aug 2026: general framework application and Article 50 transparency provisions, with relevant exceptions.
- 2 Dec 2026: specified additional prohibitions and certain Article 50(2) transitions.
- 2 Dec 2027: high-risk Annex III use cases under amended timetable.
- 2 Aug 2028: high-risk Annex I regulated-product AI under amended timetable.

The Commission reports the 2026 AI Omnibus amendment / Regulation (EU) 2026/1744 entered into force July 27, 2026. Do not put generic "all high-risk obligations due August 2026". Note different rules and actor conditions; regulated product AI vs standalone high-risk is not one homogenous deadline. Preserve official last-reviewed date and consolidate timeline sources.

## 3. Buyer and enterprise sales lens

| Role | Economic question | Evidence and value | CTA |
|---|---|---|---|
| Chief Risk / Compliance Officer | What should we have ready now and which system is highest priority? | Applicability question owner, inventory, technical evidence frontier, ranked owned gaps, reviewer dossier | "Scope a Readiness Review" |
| CISO / Engineering | Which agent capabilities, tool boundaries, logs, controls and runtime signals are actually supported? | Source and permitted behavior testing, DAI authority evidence, reasoned findings and source/coverage | "See HAIEC Evidence in Action" |
| CTO / AI Platform | Can we scale providers/deployers and re-evaluate when systems change? | Baseline and delta, permission/code changes, repeat evaluations, monitoring support | "Explore Ongoing Assurance" |
| AI SaaS / EU-market product owner | Which relevant documentation and technical evidence will my customer or procurement demand? | Article-linked technical inputs, versioned reports and verifier-ready receipts where issued | "Review Provider Readiness" |
| Legal / external assessor | Can we inspect provenance and limitations without assuming a compliance score means certification? | Evidence packet, metadata/assumptions, requirements owner, known unknowns and signed external conclusion where applicable | "Explore Evidence Requirements" |

Readiness is a decision/product capability, not a vanity 100-point or compliance-percentage badge. Every readiness definition must specify applicable claims, qualified evidence, remaining gaps and owner. The buyer should get a usable output within the first two page scrolls.

Commercial entry paths:
1. Executive/technical demonstration -> explain one AI action and article-linked proof.
2. **EU AI Act Technical Readiness Review** -> one or a bounded set of selected AI systems; defined legal/client role supplied/confirmed by customer; method and evidence scope; article-linked gap and proof report.
3. **Enterprise Ongoing Assurance** -> on connected systems and approved sources, evaluate change and keep evidence relevant for future regulatory review. Licensing and integration terms scoped, no promise of universal continuous enforcement.
Secondary optional self-service assessment CTA only if auth/paywall/user flow is operational and avoids claiming legal classification.

## 4. Public copy: positivity, value and correct scope

Preferred above-fold:
Eyebrow: "EU AI ACT READINESS | DETERMINISTIC AI ASSURANCE"
H1: "EU AI Act Readiness, Powered by Verifiable Evidence."
Subheading: "Prepare your AI systems for the obligations that matter. HAIEC connects AI action paths, human oversight, cybersecurity controls, data and logging evidence into a qualified readiness picture your engineering, risk and compliance teams can use."
Support: "From initial assessment to ongoing operating review, know what is evidenced, what needs attention and who owns the next step."
CTA A: "Scope an AI Act Readiness Review"
CTA B: "Explore the Evidence Map"
Third subtle: "See the current EU AI Act timeline".

Do not:
- lead with "HAIEC cannot ...", "only supports", "nothing is certified" in hero or the first 2 sections;
- use "Guaranteed EU AI Act Compliance", "AI Act Certified", automatic CE marks, approved legal classification or "100% compliance";
- present technical scanner rule inventory as obligation coverage or questionnaire % as legal readiness;
- claim every customer action or runtime system is continuously monitored by default.

A page-safe, positive description of scope: "HAIEC gives your compliance and assessment teams traceable technical evidence. Your legal and formal conformity processes use those inputs for their own decisions." One concise downstream FAQ clarifies external conformity responsibilities.

Hero artifact should be a **Readiness Evidence Dossier**, not a fake compliance certificate or giant generic European Union flag:
- Customer AI system: illustrative high-risk business-workflow question.
- Relevant obligation: e.g. Art. 14 human oversight.
- Verified source capability and policy/delegation checkpoint findings.
- Evidence level: QUALIFIED / PARTIAL / NOT ASSESSED (labels grounded by inspected source types).
- Decision owner + next evidence.
- CTA to sample report and assessment.
Clearly mark illustration where synthetic; do not invent authentic issued IDs, audit scope or fines avoided.

## 5. Core interactive experience (short, high-conversion)

**A. Role and use-case selector**:
I BUILD AI / I DEPLOY AI / I PROVIDE A GPAI MODEL / I SUPPORT AN ASSURANCE REVIEW.
Second choice: Hiring/HR, Financial decision, Customer-support agent, Infrastructure/industrial, Other.
Output: "Obligation families to review" (not definitive applicable/not applicable), technical records HAIEC can help establish, missing factual questions, and suggested first assessment path. If role selection cannot be source-qualified, keep output illustrative and direct to counsel-supplied applicability.

**B. Article-to-Evidence Matrix**, select Art 9, 10, 11, 12, 13, 14, 15:
Each tab/card:
1. What the article asks, in buyer English.
2. What can be technically tested or collected with approved sources.
3. What the resulting HAIEC artifact would show.
4. What cannot be inferred from that evidence (short explicit claim boundary).
5. Who uses it (Engineering / Compliance / independent assessor).
Primary visual section of page. Do not only say "scanner R1-R12 covers Art 9".

Sample:
- Art 9: risk-register input and treatment backlog tied to evidence
- Art 10: dataset/source or protected-data handling signals with limitations
- Art 11: technical dossier building blocks, source provenance and version
- Art 12: code logging capability vs connected operational events
- Art 13: user-facing AI disclosures, documented purpose and limitations
- Art 14: delegated authority, human oversight checkpoints, operator response
- Art 15: source security / prompt and tool abuse tests / robustness evidence with test scope

**C. Decision-ready evidence dossier specimen**:
Sections: System & role, control/obligation questions, requested-policy-grant-code-observation five independent evidence planes, admitted proof and freshness, findings and unknowns, human decision and follow-up, date/revision and replay identity where supported.
It shows value; don't imply automatic conformity determination or fake legally valid signature.
Include 1 or 2 simple reviewer artifact examples and links /evidence /assurance /sample-reports.

**D. Time-aware readiness pathway**:
2025 literacy/prohibitions & GPAI / Aug 2026 transparency / Dec 2026 transitions / Dec 2027 Annex III / Aug 2028 Annex I. Use approved registry and source date, no JS hardcoded legal eligibility claims. Prioritize the next relevant milestone by category, not a single alarming universal countdown.

**E. Ongoing Assurance card**:
Monitor connected evidence sources and policy/code/permission changes; reproduce a bounded evaluation against new evidence; create owner handoff for changed risk or new proof. Explicitly distinct from promising 24/7 target-native enforcement or replacing required provider post-market system.

## 6. Revised full page storyboard

R0 Hero: enterprise readiness outcome + branded evidence dossier + two CTAs.
R1 Outcome strip: Scope & prioritize / Qualified technical evidence / Transparent gaps & next actions / Re-evaluate as systems evolve.
R2 Who this helps: buyer role and use-case selection with concise non-legal applicability orientation.
R3 See the output: decision-ready Article-linked Evidence Dossier. An example early enough for enterprise buyer.
R4 Article-to-Evidence interactive matrix for Art 9-15 including Art 11 (already in live page).
R5 Why deterministic: qualified evidence + rule/version -> inspectable result, identity/version/freshness; AI can assist discovery but canonical assurance evaluator is deterministic with fixed inputs/rules.
R6 The readiness workstream: Discover system and relevant actor facts -> evaluate technical/evidence gaps -> prioritize reviewed evidence tasks -> repeat on change. Distinguish this engagement sequence from the six equal HAIEC capability jobs.
R7 Ongoing assurance: monitoring evidence, source change, control reevaluation and owner/decision records, subject to actual authorized connections.
R8 Regulation explained simply: obligation families and the amended timeline, preserving current correct content.
R9 How HAIEC works with the business: scoped Readiness Review and Enterprise Assurance POC; appropriate role and evidence sources; deliverables grouped, no guaranteed all-artifacts bundle.
R10 Credibility/resources: architecture, evidence, controls, ISAF v2 as HAIEC research methodology (not regulation), official EUR-Lex/Commission links and updated review date.
R11 Short buyer FAQ: provider/deployer, Annex III vs Annex I, what HAIEC evaluates, role of scores and formal assessment, what is needed for a first review, continuous readiness, security & EU data handling.
R12 Conversion: Request Demo / Scope an AI Act Readiness Review. One real existing intake pipeline, with role/use case, system count and readiness goal. No checkout for unsupported service.

Most legal encyclopedic detail remains as collapsible SSR details with official sources. Do not remove factual obligation summaries; move beneath the first proof/offer story.

## 7. Evidence deliverables and sales vocabulary

Group buyer-facing outputs, not 15 optional services:
- **AI System & Obligation Scope**: customer-provided/assessed role context, system inventory, applicable question set and scope notes.
- **Article-Linked Evidence Map**: evidence present, source, relevance, freshness, assessed technical controls and explicit gap classes.
- **Technical Assurance Findings**: code-capable action paths, security, oversight/authority, logs, permitted runtime testing results, as available by agreed depth.
- **Readiness Decision Dossier**: technical conclusions, unknowns, prioritized owner backlog, assessment revision/receipt when actually generated.
- **Ongoing Assurance Record**: connected changes and reassessment over time, where customer buys/sets up operating scope.

Measures that actually help an economic buyer:
- number of scoped relevant systems and action types examined, not 'systems compliant'
- applicable evidence claims reviewed, with qualified/partial/unknown/not-assessed denominator
- article-linked material blockers with owners and acceptance tests
- time from accepted input readiness to reviewable evidence dossier, where baseline exists
- aged/stale evidence needing requalification
- number of source/permission/policy changes reconciled to updated review record on connected systems

Do not publish invented risk-reduction ROI, savings percentages or all-estate coverage.

## 8. Navigation, SEO and source ownership

Canonical remains https://www.haiec.com/frameworks/eu-ai-act.
SEO transactional/educational combination:
Title recommendation: "EU AI Act Readiness Assessment & Evidence Assurance | HAIEC".
Description: "Prepare AI systems for EU AI Act obligations with deterministic technical evidence, Article 9-15 controls, human oversight reviews, monitoring and an enterprise readiness assessment."
H1 must lead with EU AI Act readiness, not just 'EU AI Act Compliance'.
Keyword clusters hypotheses, not verified rankings/volumes: EU AI Act readiness assessment; high-risk AI readiness; EU AI Act technical evidence; EU AI Act Article 14 human oversight; Article 15 AI cybersecurity assessment; AI Act provider obligations; AI Act audit evidence; AI Act risk management documentation.

Intent owners:
- /regulations: educational cross-jurisdiction discovery and reference directory.
- /frameworks/eu-ai-act: EU-specific requirements-to-technical-evidence buyer destination and scoped readiness intake.
- /assurance: deterministic product operation and five independent evidence questions.
- /controls: control framework, evidence states and catalog.
- /enterprise: broader enterprise Assurance POC, not duplicate identical full EU-page copy.
- /isaf-v2-framework (confirm deployed route from common plans): independent HAIEC-authored research/method, supportive context, not external EU requirement.
- /evidence, /sample-reports: published qualified artifacts and report specimen.

Add contextual internal links from regulations directory, Articles 9-15 evidence controls, /assurance and /enterprise. Official regulation source link to consolidated text and EU AI Act Service Desk. Prefer original genuinely demonstrated evidence and concrete enterprise questions over generic 2,000-word SEO boilerplate.
SEO schema if implemented: WebPage, Article/TechArticle for substantive explainer where applicable, BreadcrumbList; no fake user ratings, legal certification, accreditation or FAQ rich-result promises.
Use SSR Next.js sections for headings, narrative and article content; client role/evidence selectors optional enhancement. Mobile 390/768/1440; high contrast light-first and dark optional; keyboard tabs, reduced motion and no-JS readability.
Google Search Console query positions need checking before ranking claims or large redirect changes.

## 9. Precise engineering and implementation boundaries

Do not build a second legal rules database for this marketing page. Reuse data/regulatory-references.ts and official source update date; preserve amended dates and the live Article 11 evidence. Query existing source before using numerical scanner feature counts.

Product systems:
- The article technical evidence table currently remains hand-authored in marketing route. Any production 'article assessment' must use qualified control mapping and current registered rule IDs, not claim each Article 9-15 is fully evaluated because a code scan found one relevant signal.
- Questionnaire role-scoring workflow from lib/eu-ai-act/scoring-engine.ts is different from qualified deterministic technical assurance; show separate 'Readiness Questionnaire Responses' vs 'Evidence-Qualified Technical Findings' if both displayed. A 0–100 questionnaire score is NOT a statutory compliance percentage.
- The artifact generator uses assessment record and hash: verify actual template and end-to-end issuance/verification before public marketing of a specific EU public verification number.
- A technical readiness assessment cannot automatically settle high-risk classification or conform to all regulatory obligations; keep specific contracted proof scope. Procurement/legal signoff and accredited notified-body assessment, where applicable, are separate.
- For EU data residency claims, confirm deployment/data-transfer and DPA terms before saying all processing is EU-hosted, GDPR compliant or always local.
- Existing page contains metadata both in app/frameworks/eu-ai-act/page.tsx and metadata.ts; choose one canonical metadata ownership for the focused enhancement, avoid duplicate/ambiguous title signals.
- Do not add another giant regulatory worksheet to the public route. The job of this page is to convert informed buyers into a scoped inquiry.

## 10. Phased implementation and acceptance

P0: verify latest Main/live SHA, keep already-correct 2026/1744 timeline; confirm true article/question/control/assessment APIs; proof packet sample, frontend form availability and auth gating. Align commercial copy and metadata.
P1: edit same Next.js route, section reorder plus positive hero, evidence dossier, buyer/role sections, commercial CTA. Retain existing precise legal reference content. Small client interaction for role and Article selection; honest static SSR fallback.
P1: prepare a **single brief lead intake** via existing authenticated/public contact/Resend infrastructure as appropriate. Capture provider/deployer/assessor role, target use case, evidence source readiness, email/org and interest (demo vs scoped review vs ongoing assurance), not confidential customer code or transcripts.
P2: add approved representative EU technical evidence sample and repeat-evaluation visual only when source-backed; publish related original FAQ and role-specific article guides if demand observed.
P3: link live EU artifact verification after real production validation, not just an endpoint. Consider dedicated provider/deployer landing pages only after search/query/qualified lead evidence.

Acceptance:
- Buyer understands within 10 seconds: readiness for their EU AI systems, deterministic evidence basis and clear next step.
- Positive and enterprise-ready public copy, no defensive disclaimers above fold. Formal audit and legal determinations clearly positioned downstream in one accurate FAQ.
- Correct current AI Omnibus dates and Annex III/Annex I separation, dynamically from one registry.
- Current Art 9–15 technical facts including Article 11 retained; no overclaim of statute coverage from scanner mappings.
- Existing UI and metadata/links preserved or improved, no blind marketing redesign.
- Interactive role and Article examples change actual content, remain SSR discoverable, no fake compliance verdict or score.
- Contact intent captured and confirmed only after real server success, existing security and referral path preserved.
- Source-qualified operating monitoring only where connected, repeatability bounded by frozen evidence/config/rule versions.
- Release via one reviewed focused PR only when authorized, not automatically merged/deployed.
