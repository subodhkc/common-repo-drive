> **Telecom industry solution 2026-10-20:** [Telecom AI Assurance & Network Action Integrity redesign plan](WEBSITE-TELECOM-ORAN-ASSURANCE-SOURCE-ONTOLOGY-TMFORUM-PROOF-UX-SEO-PLAN-2026-10-20.md) + [interactive source-verified design](design-references/telecom-2026-10-20/telecom-action-integrity-ontology-tmforum-interactive.html). The real /solutions/telecom route remains owner of O-RAN, network slice, 5G core/SBI, OSS/BSS and TM Forum event proof. The planned /solutions overview should link to it as Telecom & O-RAN buyer destination, and Manufacturing remains a separate industry demonstration. No new vertical product entitlement or second telecom engine.

> **Manufacturing vertical follow-up 2026-10-20:** The formerly absent industry landing has a [source-grounded `/solutions/manufacturing` plan](WEBSITE-MANUFACTURING-ASSURANCE-SOLUTION-SOURCE-DEMO-UX-SEO-NAV-PLAN-2026-10-20.md) and [interactive static design](design-references/manufacturing-2026-10-20/manufacturing-assurance-station217-interactive.html), referencing the **existing Vercel manufacturing dashboard**, Station 217 persisted source evaluation, digital-factory demonstration and proof artifacts. Add Manufacturing to /solutions under industry solutions alongside Telecom during future authorized implementation; do not treat this design as an already published page or manufacturing SaaS SKU. Retain the three primary buyer paths Enterprise/Firms/Telecom while expanding industry navigation to Manufacturing. Reconcile existing page copy at implementation.

# HAIEC Enterprise Solutions Overview | Customer Outcome, Visual Story, Buyer Routing and Site Architecture
**Date:** 2026-10-20. **Workstream:** Page #16, new proposed \`/solutions\`. **Status:** Common Repo planning and static interactive design only. **No HAIEC website changes.**
**Companion:** [Light-first interactive Solutions page](design-references/solutions-2026-10-20/enterprise-solutions-outcome-led-interactive.html).

## 1. Decision and customer promise

**Create one dedicated Solutions overview at \`/solutions\`.** The current HAIEC website has no \`app/solutions/page.tsx\` while a menu named Solutions groups **Enterprise**, **Assurance Firms** and **Telecom & O-RAN**. The footer and route registry also list **Advisory Partners** under Solutions, but Advisory is a *different referral/introduction relationship*, not a client assurance buyer. The new overview must help visitors recognize their consequential decision, see the HAIEC differentiation, and select the **right existing customer destination**, without replacing or cannibalizing those detail pages.

**Primary H1:** **Move consequential AI forward with evidence you can defend.**

**Hero supporting copy:** \`Your AI systems can move money, expose data, change infrastructure and influence critical decisions. Component tests and governance policies each answer part of the question. HAIEC helps you examine the consequential action paths they enable, compare relevant authority, and make decisions grounded in deterministic, source-backed assurance.\`

**USP line:** \`Go beyond checking components. Understand what your AI can cause.\`

**Primary CTA:** Explore Solutions → \`#choose-solution\` (no fake form).
**Enterprise CTA:** Scope an Enterprise POC → \`/enterprise\`.
**Evidence CTA:** Explore a Sample Assurance Report → \`/sample-reports/kestrel\`.
**Introductory third CTA:** For Assurance Firms → \`/assurance-firms\`.

Do not present the three route links as three interchangeable products or invent industry-specific commercial pricing.

## 2. Source evidence and status

**Current HAIEC source:** \`subodhkc/haiec-website\`, branch \`Main\`, retrieved 2026-10-20.
- \`app/solutions/page.tsx\`: **not found**. The generic \`/solutions\` URL is not usable through the public page retriever at time of review. Source does have \`app/solutions/telecom/page.tsx\`; \`app/solutions/manufacturing/page.tsx\` not found. Do not fabricate a manufacturing marketing destination or interpret the educational manufacturing demo as a ready sold package.
- \`components/AutoHideNavigation.tsx\` blob \`a7e63d9d0a878a9c0059b166b78cfd7bb3dad6d6\` has a top-level **Solutions** group with **no href**, and three \`For Organizations\` children \`/enterprise\`, \`/assurance-firms\` and \`/solutions/telecom\`. Desktop currently renders a dropdown **button** when top-level item has no href; mobile uses a top-level item \`href || '#'\`. When implementing \`/solutions\`, add exactly one **Solutions Overview** child as the first menu item and change top-level navigation only deliberately after auditing desktop hover/click and mobile behavior. Safest approach is an Overview child + link in footer and cross-links, not breaking dropdown open interaction.
- \`data/public-site-registry.ts\` blob \`d48c2a651c0c0aa1b4ecf447ed168a7019e7eec1\` contains \`/enterprise\`, \`/enterprise/architecture\`, \`/assurance-firms\`, \`/partners/advisory\`, \`/solutions/telecom\`, **not** \`/solutions\`. Register new \`solutions-overview\` canonical route only when approved website implementation: solutions group, company/buyer destination, sitemap/llms visibility as appropriate, no duplicate index route for same content.
- \`app/enterprise/page.tsx\` blob \`b4896be3a527dc196a34e840ff97fd23fe7e5824\` and \`app/enterprise/data.ts\` blob \`b586f8a65e6341cc9239b3a8d1a1c72d3599303e\`: Enterprise POC is **one bounded commercial engagement**, typically **$25k–$75k** and **4–8 weeks after readiness** where negotiated. One consequential AI system and one assurance decision; source-first possible, more sources authorized based on needed proof. Preserve its H1 \`Can you prove what this AI can actually cause?\`, 7 detailed stages, 5 evidence depth levels, 12 possible outputs and the existing qualified two-step form. The Solutions overview is not a duplicate Enterprise form, architect explorer, or price page.
- \`app/assurance-firms/page.tsx\` blob \`1f14c23548d038d65e13f2f0a2f7fabec8edf63e\`: professional evidence workflow for CPA/audit firms, ISO certification bodies, compliance advisors, MSSPs and other assessors. Scope-supported reviewer flows, JSON/Markdown/PDF handoff, API integration, framework mapping. **The licensed assessor/auditor retains independent professional judgment and issuance of attestation or certification.** No blanket "HAIEC SOC 2 certified" or turnkey mass client tenant rights. The separate FIRM professional offering remains custom/contractual.
- \`app/solutions/telecom/page.tsx\` blob \`2d9c9efacfb066f391d21740538f1e2fd2cdf930\`: public telecom use case covers qualified AL0 baseline, AL1 degraded, AL2 compromised **declared scenario states** plus telecom multi-source correlation, rApp/xApp, slice isolation and O-RAN/SBI/forensic relationships. Declared compromise label is not independent proof of intent, exact causation or exploit. Direct links \`/solutions/telecom\`, \`/sample-reports/forensic-case/autonomous-traffic-protection\` if preserved from live telecom page.
- \`app/partners/advisory/page.tsx\` blob \`8a71a971626ee1af4a365c9d1056f4809a1fb2b0\`: advisory partners are **trusted enterprise introducers**, not the firm delivery track; HAIEC retains enterprise qualification and delivery. Keep distinct \`/partners/advisory\` secondary referral/partner CTA, not a top-level fourth solution card.
- \`app/enterprise/architecture/page.tsx\` blob \`d160213e80a80169a9867b04db72c627fdaece61\`: dedicated interactive multi-view enterprise architecture/explainer already exists; Solutions page should link rather than duplicate its technical architecture.
- Source-owner commercial architecture in [Pricing plan](WEBSITE-PRICING-PAGE-COMMERCIAL-ARCHITECTURE-FAQ-COPY-DESIGN-SEO-PLAN-2026-10-20.md) has three independent motions: self-service SCAN/DEFEND/ASSURE, founder-led Enterprise POC, custom FIRM. Avoid describing enterprise as ASSURE checkout plan or ordinary per-seat upsell.

**Live public reviewed** on 2026-10-20: /enterprise, /assurance-firms, /solutions/telecom. Results confirm differentiated destinations; no accessible /solutions page. The planning and HTML in the Common Repo do not assert a new live website route.

## 3. What the page should solve, by audience

| Existing destination | Buyer/trigger | Immediate business answer | Differentiator/proof | Conversion |
| --- | --- | --- | --- | --- |
| **Enterprises** \`/enterprise\` | CISO/CTO/AI platform, about to deploy/expand consequential AI; AI security owner, risk | "What can this agent actually reach and who can approve the consequential decision?" | source-visible derived paths, independent policy/IAM facts, DAI, deterministic scoped report; bounded POC for one system and decision | Scope an Enterprise POC |
| **Assurance Firms** \`/assurance-firms\` | CPA, auditor, assessor, ISO assessor, MSSP, compliance professionals | "How do I add independent AI technical evidence to my client engagement without inventing an AI assessment engine?" | source/evidence references, scoped reviewer workflows, export and framework mapping; firm keeps attestation judgment | Talk to HAIEC \`/contact\` |
| **Telecom & O-RAN** \`/solutions/telecom\` | Network/telecom security, AI network operations, O-RAN assurance/forensics | "What action/authority changed between a declared baseline, degraded and compromised telecom scenario?" | qualified scenario-state comparison, rApp/xApp, slice, SBI, tower evidence and source/telemetry correlation when connected | Explore Telecom Forensics, supported case link |
| **Advisory introducers** \`/partners/advisory\` | Partners who can introduce enterprise buyers | "How can I introduce HAIEC into the right enterprise opportunity?" | distinct partner qualification and introduction, no delegated independent POC delivery assumption | Explore advisory program as separate secondary path |

**Don't invent** insurance, health care or manufacturing public vertical product pages. The overview can mention cross-industry example scenarios with industry-neutral explanation, but link only existing published case assets. Generic consequences are refund changes, tenant data disclosure, agent authority expansion and telecom network operations. Distinguish an *example* from customer observed proof through copy structure, without user-facing internal/fictitious prototype banners.

## 4. Editorial and conversion hierarchy

### Hero: value before architecture

- H1 \`Move consequential AI forward with evidence you can defend.\`
- Deck above.
- Hero visual: a wide **Consequence to Decision** pane, not the homepage System Constellation or another five-card architecture hero. Start with one source-reachable operation and what HAIEC helps answer: **Capability (What can the agent reach?) → Authority (Who permitted this choice?) → Evidence (What can source/connected records prove?) → Decision (What is the next accountable action?)**. This is *an interactive set of questions*, not a sequential all-evidence admission requirement.
- Show buyer line \`Enterprises | Assurance & Audit Firms | Telecom & O-RAN\` with a clear interactive route selector.
- Four step points animate selectively on click. Source path may be supported while runtime effect evidence is not provided; no fake customer verdicts or runtime effect confirmed.

### Section #2: Choose your solution, three destination cards

Premium editorial cards with **business urgency, HAIEC's role, outputs, dedicated destination and CTA**, equal visual treatment. Buyer chooses Enterprise/Assurance Firms/Telecom. No implied single "enterprise subscription" and no audit certification claim. The selected buyer changes a richer panel with specific decision question, inputs, typical scoped outputs, owner of judgment and next link.

### Section #3: Choose the consequence, not a catalog

Interactive four scenarios, with 3-stage path (the risk, what usual control sees, what cross-boundary assurance asks):
1. **Financial workflow:** refund/payee or action amount, valid technical permission can coexist with unclear business recipient choice; DAI. Source analysis is useful before payment telemetry.
2. **Cross-tenant data:** permitted retrieval and response tools may combine into a cross-customer disclosure path; application/data boundary.
3. **Agent authority expansion:** registered new tool → source-capable mutation and effective IAM; approval and actual granted access are distinct.
4. **Telecom control operation:** AL0 to AL1/AL2 state comparisons are declared scenario labels; ask what native source and correlated records substantiate affected action and consequences, not label alone.
Each selection updates a complete dossier: **action path, independent facts, decision owner, value/output, the correct destination**.

### Section #4: Proof without waiting for every integration

Show **five equal independent evidence views** Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. DAI is orthogonal across relevant policy/choice/authority. First source path findings have value before policy or telemetry connections. A formal stronger result is explicitly bounded to relevant sources; native effect claims require target witness. Avoid headline UNKNOWN failure/status. Use \`What the evidence supports today\` and \`What would strengthen the decision\`.

### Section #5: One shared engine, tailored buyer outputs

Use **Understand → Assure → Govern & Operate** as compact common operational cycle, *not* six separate expensive services. Buyer outputs:
- Technical: source path, risk/authority finding, supported policy or effective grant discrepancy where connected.
- Management: bounded report, prioritized remediation or next decision.
- Operational: connected evidence comparison and monitoring when instrumentation installed.
Firms can reuse evidence in their own qualified engagements; network owners can compare qualified incident states. Preserve six product capabilities as links to Platform, not another feature gallery.

### Section #6: The right commercial entry

- **Explore Platform / Try:** self-service plans \`/pricing\`, developers \`/developers\`; optional smaller teams.
- **Enterprise POC:** qualified one system/one decision. Typical scope $25k-$75k and 4–8 weeks after readiness should be secondary information linked to /enterprise, not an invented quote for all buyers.
- **FIRM:** custom professional evidence workflow, talk to HAIEC; cross-client operating scope, assessor judgment and commercial terms cannot be assumed automatically.
- **Telecom:** vertical use case page to explore; a tailored commercial engagement is scoped separately if applicable, not a permanent listed price.

### Section #7: Proof, trust and deep links

Link \`/sample-reports/kestrel\`, \`/sample-ai-action-access-map\`, \`/enterprise/architecture\`, \`/methodology\`, \`/assurance\`, \`/trust\`, /solutions/telecom forensic case.
Avoid assigning research/example source scenarios to real client outcomes. No unsupported logos, customer testimonials, universal protection claims or pretend awards.

### Section #8: FAQs + closing

8-10 questions: is HAIEC an AI model evaluator or end-to-end action assurance, can source code find something first, what does DAI add, five planes prerequisites, does HAIEC replace auditors, can HAIEC block agent actions, forensics vs incident proof, difference enterprise vs self-service, what is initial scope, what integrations exist, advisory referral vs delivery. Close with \`Start with the AI decision you need to defend.\` CTA Enterprise and relevant route selector.

## 5. Visual, animation and interaction system

- **Light-first** premium off-white/forest/soft mint, editorial serif-free typography, spacious 2-column hero with consequence visualization. Dark optional and integrated into canonical theme mechanism when implemented.
- Interactive **4-state outcome path**, **3 buyer routes**, **4 consequence scenarios**, **5 plane explanations**, **3 operational phase states**; no faked real-time dashboard readings.
- Carefully controlled path tracer animation at most 180-260ms on user selection, not an exhausting glowing-loop visual. Respect reduced motion. Real text remains present and indexable in server HTML; clients only change enhanced explanatory panel.
- Accessibility keyboard-operable buttons, aria-pressed, visible focus, tab order, readable default without JavaScript.
- Mobile 390, tablet 768, desktop 1440: hero stack on narrow view, outcome diagram not a crushed 5-column grid; scroller for scenario buttons where needed.
- Product/publishing references stay grounded in HAIEC code and current live pages. HTML does not use em dashes or customer-facing internal/prototype labels. Native HTML/CSS/SVG preferred to image-only marketing.
- **Preserve homepage animated terminal and existing hero design**; the new Solutions overview must not duplicate those animations.

## 6. Navigation, SEO and discoverability

**Recommended route:** \`https://www.haiec.com/solutions\` (planned, not live).
**SEO title:** \`AI Assurance Solutions for Enterprises, Firms & Telecom | HAIEC\`.
**Description:** \`Explore HAIEC evidence-bound AI assurance for enterprises, audit and assurance firms, and telecom teams. Understand consequential agent paths, delegated authority, and deterministic evidence-backed decisions.\`
**Page role:** group hub / buyer router, not a technical product owner, compliance law directory, new paid product or executive lead form.

**Menu recommendation:** Existing Solutions group has no linkable root. Add **"Solutions Overview"** as the first child under Solutions, then existing **Enterprise**, **Assurance Firms**, **Telecom & O-RAN**. Keep top-level Solutions dropdown functioning as today for desktop and mobile; optionally make label a link in a separate accessible change only after testing. Do **not** add a second global top-level Solutions item. Add overview to site footer Solutions group, public route registry, sitemap, llms discovery, breadcrumbs/cross-link from Enterprise/Firms/Telecom and homepage buyer cards. Existing Advisory Partners footer remains distinct.

**Indexing:** Unique canonical \`/solutions\`, \`index,follow\`, clean path, no UTM query in canonical. Organization/Service schema only when sourced; ItemList of existing destination URLs useful, but do not invent packages or Offers/prices. No unsupported FAQ rich-result guarantee.

## 7. Implementation and review handoff to Devin

1. Refresh HAIEC Main and check \`app/solutions/page.tsx\` remains absent. Compare menu + registry + existing destination H1/current data; preserve all original landing pages and related enterprise form.
2. Build /solutions server page, metadata and isolated client interactive explorer. Reuse app shell and root theme; no second navbar/footer or separate active-site theme storage controller.
3. Register canonical indexable route in \`data/public-site-registry.ts\`, update menu **Solutions > Solutions Overview** as first child; footer and discoverability. Keep \`/enterprise\`, \`/assurance-firms\`, \`/solutions/telecom\`, \`/partners/advisory\` intact. Prevent Solutions mobile \`href='#'\` dead-end if within scope.
4. Reuse exact source-derived business limits: POC contract not default checkout, 4-8 weeks after readiness; firm issues judgment, HAIEC evidence provider; telecom declared scenario states not independently verified attack. No new manufacturing or health-care route.
5. Make hero consequence dossier and buyer/outcome selector with actual accessible content and meaningful CTAs. All selected scenario data is teaching copy, not fake evaluated customer records. Do not suppress first source finding while other sources absent.
6. Link existing sample report, architecture explorer, relevant methodology/assurance/trust and external contact. Use tracked conversion events appropriately; never invent a working lead-form backend.
7. Run focused lint/typecheck/links/a11y/SEO/mobile/theme/reduced-motion/test route semantics. No broad unrelated regression suite.
8. **No HAIEC website code edits, pushes, PR, merges, publication or deployment yet.** This user request authorizes Common Repo plan and preview only, with later handoff.

## 8. Connected research/reference pages

- [Prior source-grounded Enterprise POC review](WEBSITE-ENTERPRISE-PAGE-COPY-DESIGN-SEO-CONVERSION-PLAN-2026-10-20.md).
- [Pricing three-motion ownership](WEBSITE-PRICING-PAGE-COMMERCIAL-ARCHITECTURE-FAQ-COPY-DESIGN-SEO-PLAN-2026-10-20.md).
- [Platform and Products positioning](WEBSITE-PLATFORM-AND-PRODUCTS-PAGE-ENHANCEMENT-PLAN-2026-10-20.md).
- [AI lifecycle education design](WEBSITE-HOW-LLMS-AND-AI-AGENTS-WORK-OBSERVABILITY-HAIEC-GAP-AWS-RESEARCH-PLAN-2026-10-20.md).
- [DAI separate research and page](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md).
- [Current nav source](https://github.com/subodhkc/haiec-website/blob/Main/components/AutoHideNavigation.tsx).
- [Current route registry](https://github.com/subodhkc/haiec-website/blob/Main/data/public-site-registry.ts).
- [Enterprise POC destination](https://www.haiec.com/enterprise).
- [Assurance Firms destination](https://www.haiec.com/assurance-firms).
- [Telecom destination](https://www.haiec.com/solutions/telecom).
- [Advisory Partners destination](https://www.haiec.com/partners/advisory).

**Quality test:** A buyer should be able to pick a destination after the hero within 15 seconds, discover HAIEC's consequence-and-authority differentiation within 30 seconds, and navigate to a real scoped engagement, firm conversation or sector-specific proof without mistaking a scenario example for deployed customer telemetry.
