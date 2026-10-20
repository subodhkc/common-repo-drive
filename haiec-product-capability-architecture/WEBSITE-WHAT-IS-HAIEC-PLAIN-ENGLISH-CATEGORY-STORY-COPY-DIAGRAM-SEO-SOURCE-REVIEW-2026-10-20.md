# What Is HAIEC? | Plain-English Category, Customer Story, Evidence-Bound Differentiation, Copy, Diagram and SEO Review

Date: 2026-10-20. Website campaign Page #30. Canonical: https://www.haiec.com/what-is-haiec.
Status: current haiec-website Main source, live public HTML and prior Common Repo UX plans reviewed; editorial/UX implementation plan only. No website PR, deploy, interactive screenshot E2E or target assurance run. Deployed crawl omits an agent/MCP section that EXISTS in reviewed Main. Refresh actual deployed build version and source before implementing.

## 1. Editorial and product decision
**Keep the existing /what-is-haiec page and route. Enhance its first-screen explanation and business case, not build another product hub or separate HTML demonstration.** A reader should answer in 20 seconds:
1. What HAIEC is: the Human AI Evidence Company, enterprise evidence-bound assurance for consequential AI actions.
2. Why it exists: an agent may have a technical path to do something without the business authority to choose it. A test or policy claim alone does not resolve that gap.
3. What it does: discovers supported paths from an AI agent to tools, handlers, systems and possible effects; connects qualified source, identity, policy, access and runtime evidence as available; produces bounded deterministic findings/evaluations and inspectable records.
4. Why it is different: **AI can guide HAIEC's workflow, but HAIEC's deterministic evaluator determines the bounded result. Not AI marking its own answer safe.** Path/consequence + authority + proof limitations, not another risk score.
5. Where to go next: real evaluated Kestrel report, configuration/source-based MCP entry, optional scoped enterprise POC.

Company brand must stay exact: HAIEC = **Human AI Evidence Company**, tagline **High assurance in every consequence.** Descriptor **Deterministic AI Action Assurance** useful as support, not a replacement for evidence-bound assurance category.
Customer-first headline recommendation: **What is HAIEC?** (exact H1 retained for branded route and search), with large subheadline **Know what your AI can cause. Decide with evidence.** Alternate supporting H2 "Evidence-bound assurance for consequential AI actions". Do not copy homepage hero word-for-word as a replacement of distinct H1.

The introduction page is **WHY / WHAT / VALUE / TRUST / WHERE NEXT**. /how-it-works owns detailed operational lifecycle; /platform owns architecture, products and three operating pillars; /assurance owns evaluator dispositions and claim contracts; /ai-action-access-map owns map product; /evidence owns detailed provenance/qualification; /methodology/ISAF v2 owns research; /about owns company, team and mission. Link to them rather than replicate their full contents.

## 2. Current source and cross-page observations
| Source | Observed behavior | Implication |
|---|---|---|
| app/what-is-haiec/page.tsx (367 lines, inspected Main) | Dark slate hero, one H1 What is HAIEC?, generic evidence deck and two CTAs (sample *illustrative* action map + Platform), what the brand means, newly added 'Can an AI agent run HAIEC?' section, problem, map, evidence, assurance, six truth-lock cards, personas, four differentiator items and repeated bottom 3 CTA rail. No actual diagram, finding, evaluated proof excerpt, pillars/jobs, five planes or distinct enterprise conversion. | Preserve all substantive truths, relationships, tagline, agent-operated workflow claim, personas and existing links. Reorder story, add one useful example and proof visual, reduce repeated disclaimer gallery. |
| public live HTML /what-is-haiec | Crawler currently does NOT show newer source-level 'Can an AI agent run HAIEC?' section. | Deployment/readback can lag Main; do not claim source and production identical. Source-based plan; Devin checks deployed commit before publication. |
| app/what-is-haiec/layout.tsx (106 lines) | Metadata title starts 'What Is AI Assurance?', while H1 is branded HAIEC; SEO canonical correct /what-is-haiec. SoftwareApplication JSON-LD has $0 Offer 'Free tier available', extensive framework featureList and broad tamper-evident SHA-256 reports; FAQPage includes questions without a matching rendered explicit FAQ section. | Resolve title/H1/search-intent overlap, schema commercial entitlement proof, scoped receipt/integrity semantics and visible FAQ congruence. Preserve breadcrumb/canonical and truthful organization definition. |
| data/seo-page-intents.ts | Route /what-is-haiec classified primary 'what is AI assurance', title H1 guidance says 'What is AI Assurance?', while actual H1 'What is HAIEC?'; parent /resources. | **Resolve by explicit SEO decision:** retain /what-is-haiec canonical and a clearly answered 'What is AI assurance?' H2/FAQ to serve general intent while branded H1 defines product; update manifest guidance only if approved, avoid keyword cannibalization with /what-is-ai-assurance alternatives and /platform. No invented keyword-volume figures. |
| data/commercial-offers.ts | Commercial presentation has plan IDs/prices/free-trial statuses as distinct owners, not a universal zero-price subscription. | Do NOT use an unverified $0 Offer JSON-LD for entire commercial HAIEC platform. Either remove price Offer from this category explanation or tie to exact current approved offer. Never infer open-source developer packages imply SaaS free tier. |
| app/how-it-works/page.tsx | Already detailed guided first finding, MCP/GitHub entry, journey scenarios, five independent planes, DAI and bounded evaluation. | Link to it as "See how HAIEC works"; do NOT reproduce interactive lifecycle in /what-is-haiec. |
| app/platform/page.tsx | Describes three pillars Understand / Assure / Govern & Operate; six **independently selectable** capabilities Discover/Evaluate/Authorize/Monitor/Protect/Verify, and sample path/evidence. | Introduce the 3/6 taxonomy briefly with real links, not mandatory flow nor seven-stage platform engine. All six equal visual emphasis, not default protect highlight. |
| app/page.tsx | Homepage currently outcome/agent/MCP-first and evolving hero V3 under approved planning, with sample public case and IDE terminal. | Do not duplicate homepage showcase/ambient terminal. This page is plain-English introduction with smaller one-screen educational diagram. |
| app/evidence/page.tsx | Evidence producer coverage COMPLETE/PARTIAL/UNKNOWN/NOT_ASSESSED different from claim support, relevance, system binding and issued evaluation disposition. | Existing what-is box labels 'Established' as evidence/coverage and 'Not Evaluated'; separate producer coverage from claim support to avoid universal one-dimensional green status. |
| app/assurance and provenance sources | ALLOW/REVIEW/BLOCK bounded canonical evaluation under eligible scope; customer deployment decision and human authorization remain separate. | Explain REVIEW or ALLOW is an evaluated statement within scope, not automatic deployment permission or regulatory certification. |
| agent/MCP /docs/agent-integration | Authenticated HAIEC remote MCP requires customer-approved scope, valid API key and eligible source; agent helps guide workflow, only service generates canonical evaluation. | Preserve newly added Main "Can AI agent run HAIEC?" section but make it useful through real operating example and entry CTA; no 'ChatGPT runs all scans without setup'. |
| public Kestrel evaluated case | /sample-reports/kestrel and /sample-reports/kestrel/constellation are existing source-backed frozen evaluated example. /sample-ai-action-access-map is illustrative interactive educational map. | Label difference clearly; prefer **real evaluated example** as first proof destination and illustrative sample map as optional concept learning. No fabricated actual customer POC performance. |
| app/about/page.tsx and site Trust | About contains company mission; developer-security distinct 3 MIT tool repos; framework pages, ISAF v2 manuscript planned/released on site per actual status. | Keep company/brand meaning, route About for deeper corporate story, do not misrepresent HAIEC SaaS as open source or published peer-reviewed ISAF v2 until actual. |

## 3. Prioritized site improvement findings
| ID | Priority | Finding | Solution |
|---|---|---|---|
| WH-01 | P0 | Hero is product category statement, no customer consequence or first visible proof. | Keep H1 What is HAIEC?, add high-clarity value line and a single source-backed consequence example with bounded answer and CTA. |
| WH-02 | P0 | Key differentiation "Not AI testing AI" is not stated in plain English. | Explain **AI can guide the process; canonical deterministic checks own results and explicit unknowns**. Do not claim LLMs never contribute to explanation or discovery. |
| WH-03 | P0 | Current map-first description implies policy/source/identity/runtime always connected to generate a map. | Explain start with one eligible source; qualified source path finding before all IAM/delegation/runtime evidence. Next missing authority or observation is a distinct question, not a precondition to every useful first finding. |
| WH-04 | P0 | Main's new agent-run section underplays setup eligibility. | Explain approved access, API key/MCP host and eligible system/source before an actual evaluation, link /docs/agent-integration; four-word CTA **Run HAIEC AI Assurance** is an MCP goal, not an immediate scan from page. |
| WH-05 | P0 | Missing five independent evidence planes and DAI/business delegated choice. | Brief five independent questions Requested / Policy Authorized / Effectively Granted / Code Capable / Observed plus one sentence delegated action integrity. No all-five PASS prerequisite. |
| WH-06 | P0 | Six capabilities and three pillars missing. | Compact visible three-pillar / six peer job overview with equal prominence; route to /platform and six core capabilities actual verified page only. Do not turn capabilities into a sequential funnel. |
| WH-07 | P0 | Evidence box "Established" conflates qualified claim support with producer completeness/coverage. | Separate "What was analyzed" coverage, "What it establishes" claim-specific relevance and "What still requires evidence". Show bounded case, not new universal label enum. |
| WH-08 | P0 | Page 6-card "does NOT claim" grid dominates middle and risks negative-first perception. | Recast as "What you can rely on" and "What remains for your team to decide" near actual proof, preserve all six material truth distinctions, with optional FAQ accessible. |
| WH-09 | P0 | SEO primary intent what is AI assurance contradicts actual page H1 'What is HAIEC?' and metadata FAQ labels. | Keep canonical /what-is-haiec, align SEO manifest/title/H1/SSR real FAQ. One owner for generic what-is-assurance search versus HAIEC company; no duplicate route. |
| WH-10 | P0 | SoftwareApplication schema price 0 "Free tier available" for platform unverified from commercial manifest. | Remove Offer or only use exact verified commercial offer; keep Organization/BreadcrumbList and only factual SoftwareApplication feature fields. Do not claim whole platform MIT or free. |
| WH-11 | P1 | Three-step source/consequence/decision visual absent. | Premium light-first small semantic HTML/SVG show agent -> MCP tool -> handler -> sensitive resource, parallel authority/proof rails, "supported source path" vs "not established" and actionable question; no fake live verdict. |
| WH-12 | P1 | Real proof CTA subordinate to illustrative map and platform. | First or second primary action "See a Real Evaluation" -> bounded evaluated Kestrel case, another "Explore Sample System Map", another "Run HAIEC with Your Agent" and "Scope an Enterprise POC". Keep original sample map/platform links. |
| WH-13 | P1 | "What makes HAIEC different" is 4 abstract bullets without concrete comparison. | Three useful differentiators: **Consequence paths rather than disconnected component checks; authority vs technical access; deterministic evidence basis including unknowns**. No unproven superlative "only company" or invented benchmark. |
| WH-14 | P1 | Persona tiles tell reader responsibilities but not useful deliverables. | Executives: consequential exposure and decision context; Security/engineering: code-linked source path and priority; Governance/legal: policy/DAI evidence and explicit questions; Developers: guided MCP integration and reproducible checks. Link actual owner pages. |
| WH-15 | P1 | No quick what-you-get artifact map. | Show "Action map", "Evidence/coverage", "Evaluation and decision basis", "Recorded receipt", "Next priority", each conditional on exact path. Distinguish finding vs issued evaluation vs public receipt verification. |
| WH-16 | P1 | Copy repeats unknown/partial disclaimers across multiple sections. | Tighten and move deeper technical definitions to /evidence, /assurance, /methodology; keep practical caveat by relevant sentence. |
| WH-17 | P1 | Styling dark hero plus generic gray tiles differs from newer light-first publications. | Light editorial hero with contained dark proof/IDE snippet and theme parity. Accessible typography, no unbounded dark simulation. |
| WH-18 | P1 | "High assurance in every consequence" brand meaning framed with apologetic sentence. | Keep verbatim tagline, rename section "What HAIEC stands for", confidently explain purpose; no need to state brand aspirational disclaimers near opening. |
| WH-19 | P2 | Framework and audit references in schema can imply certified control efficacy. | Scope mapping/support and receipt integrity, link ISAF v2 research status only if current; no ISO/SOC2 certified inference. |
| WH-20 | P2 | Need page-specific cross-link destinations and menu placement. | Preserve Resources → What is HAIEC?, /resources index, footer, /docs; no new top-level nav, duplicate title or glossary route. |
| WH-21 | P2 | FAQPage JSON-LD lists questions not independently rendered as structured FAQ; public crawled HTML differs from GitHub Main section set. | Render accurate plain-English Q&A in page, align matching JSON-LD exactly, avoid gratuitous FAQ rich-result promise. |
| WH-22 | P2 | No explicit start-with-one-system enterprise story. | Brief "Pick one consequential AI system and its key decision" with CTA /enterprise. No generic organization-wide complete deployment promise. |

## 4. Proposed customer-ready copy
**Eyebrow:** HUMAN AI EVIDENCE COMPANY
**H1:** What is HAIEC?
**Large subtitle:** Know what your AI can cause. Decide with evidence.
**Deck:** "HAIEC helps organizations understand the consequential actions AI systems and agents can take. It traces supported paths from an agent through tools and application code to sensitive systems, compares the available authority and operating evidence, and produces deterministic, scoped assurance findings that decision-makers can inspect."
**Plain secondary:** "Instead of asking another AI whether your AI is safe, HAIEC uses qualified source, policy, access and runtime evidence to establish what can be demonstrated, what remains uncertain and what deserves human attention."
**Proof triplet:** Find consequential action paths | Distinguish access from delegated authority | Make evidence-backed decisions.
**Hero CTA:** See an Evaluated AI System -> /sample-reports/kestrel (verify route and public proof); **secondary:** Explore the Interactive Map -> /sample-ai-action-access-map; small **Run HAIEC with Your Agent** -> /docs/agent-integration; enterprise CTA after example.

**H2 What problem does HAIEC solve?**
"An agent may have permission to call a tool without the authority to choose what the tool should do. A source scanner may show a route to a sensitive operation without proving that it ran. A dashboard may show activity without proving the business decision was approved. HAIEC connects these questions to the specific AI action and its evidence, instead of collapsing them into a single risk score."

**H2 See why this matters in one action**
"Consider a service agent that can call a refund tool. Source analysis may establish a route to a payment handler. A role or credential may allow the API call. That does not automatically establish who may choose the refund recipient or whether any payment was actually made." Diagram shows illustrative agent -> refund tool -> payment handler -> financial resource, then fields **Source path: supported where analyzed** / **Policy: evaluate when available** / **Delegated decision: question open without qualified approval** / **Runtime effect: not claimed without observation**. Don't fake actual run, customer or issued disposition. Direct exact Kestrel evaluated report to show genuine frozen evidence after concept.

**H2 What HAIEC actually does**
1. Understand supported consequential action paths and first source-visible findings.
2. Evaluate relevant policy, technical access, delegated authority and observed data only where connected and qualified.
3. Record bounded findings/evaluations and unanswered decisions in reviewable reports and receipts when issued.
These are **three reader questions**, NOT mandated steps or 3 of 6 independent product capabilities. They do not mean HAIEC blocks arbitrary agents by default.

**H2 Three operating pillars. Six independent capabilities.**
Under **Understand** = Discover; **Assure** = Evaluate, Verify; **Govern & Operate** = Authorize, Monitor, Protect. Render six peer jobs equal emphasis; select as needed; some operational abilities require specific integrations/human approvals/customer-side enforcement. Link /platform, not new architecture charts.

**H2 Five evidence views, one question at a time.**
Requested (what was asked), Policy Authorized (what policy allows), Effectively Granted (what current credential and authorization evidence establishes, potentially partial), Code Capable (what supported source path could reach), Observed (what actual connected runtime evidence shows). DAI asks separately **who delegated the consequential choice, for which scope, time and conditions?** None forces all five connected before showing first source finding. Permission is not delegation. Runtime source absence isn't proof nothing happened.

**H2 How AI agents use HAIEC**
"A compatible assistant can guide source connection, ask for approval, run authorized HAIEC checks through MCP or API and explain bounded results. The assistant doesn't issue its own canonical approval; HAIEC's deterministic services evaluate the source/evidence under eligible scope." Prominent CTA **Run HAIEC AI Assurance** copied as goal /docs/agent-integration; disclose configured authenticated client and eligible source are prerequisites. Don't imply browser CTA executes a task or no sign-in.

**H2 Who gets value**
- Risk owner: understands consequential exposure and where decision ownership is unresolved.
- Security / engineering: sees source-linked paths, coverage and relevant fixes.
- Governance / legal: reviews authority/evidence gaps and traceable decision basis.
- Developer: guided MCP/API and code-first workflow. No fake compliance certification.
Keep existing four persona roles; value oriented.

**H2 How HAIEC differs**
"Security testing identifies component weaknesses. Observability records supported events. Governance records policies and owners. HAIEC helps relate these facts to what an AI agent can reach and what consequential choice it was authorized to make, then keeps evidence and missing proof explicit in the resulting bounded evaluation." This is differentiation by scope, **NOT a claim that these other products never do this**.
Cross-links platform, Action & Access Map, Evidence, Assurance, DAI, Runtime Security Testing where relevant; no 12-card product catalog.

**H2 What an assurance result does, and does not, say**
"ALLOW, REVIEW and BLOCK apply only within the exact evaluated evidence and assurance contract. A source path doesn't prove runtime execution. A hash binds a defined artifact, not the truth of every claim. Framework mappings support review, not certification. Monitoring and customer-side enforcement operate only where established and connected." Replace six dominant warnings with a compact "Established/Still open" case and 3 concise FAQs. Preserve all six semantic distinctions in copy and FAQ.

**H2 Start with one consequential system**
"Bring an eligible AI system and a question that matters. You can begin with a connected repository, supported MCP/API integration, workspace or a scoped enterprise POC. HAIEC starts from the evidence that is available and makes missing facts visible." CTA evaluated Kestrel, how it works, /enterprise POC.

**Brand statement, lower page:** "HAIEC stands for Human AI Evidence Company. Our guiding promise is High assurance in every consequence." Founder/company detailed About route; no unsupported claim every possible effect verified.

## 5. Signature diagram design
**Light-first native SSR HTML/SVG**, no flattened raster or new graph engine:
Context "An AI agent requests a consequential action"
Lane 1 PATH: Agent -> tool/API -> handler -> sensitive resource or possible effect, based on source evidence. Dot/solid lines reflect actual example classification, not imply runtime observation.
Lane 2 AUTHORITY: policy authorized? technical credentials effectively granted? delegated business choice approved? separate dimensions, not post-facto green checks.
Lane 3 PROOF: source path established; actual side effect observed only if true evidence; missing runtime or approval remains open.
Result/destination: relevant first finding / evaluated decision basis / next required evidence, and optional link to frozen **Kestrel evaluated case**.
Mobile: stacked order source path, authority, evidence and customer question; accessible linked text list and captions. No fake active connectors, live telemetry, artificial customer IDs, "P0" warning labels or demo "FICTIONAL" banner. Use "For example" naturally.
Small optional peer six capability rail beneath, no highlighting Govern/Protect over others. Three pillars can be visually distinct but equal weight. No second fully interactive platform application on intro.

## 6. SEO / schema and navigation
**Recommended title:** What Is HAIEC? Evidence-Bound AI Assurance Explained | HAIEC
**Recommended description:** Learn how HAIEC maps consequential AI action paths, checks evidence of permissions and delegated authority, and delivers scoped, deterministic assurance decisions for AI systems and agents.
Retain exact H1 "What is HAIEC?" while first H2 "What is AI assurance, and why does it matter?" supports the existing search intent. Review data/seo-page-intents.ts owner before changing registry primary keyword; current mismatch is deliberate category SEO but unsynchronized H1 guidance. Choose one stable canonical intent with no new duplicate slug. Breadcrumb Home > What Is HAIEC remains.
FAQ 3-5 visible on page matched by FAQPage schema ("What does HAIEC do?", "Does HAIEC use another AI to judge AI?", "Is HAIEC a certification body?", "Can I start from just one source?", "What is the System Constellation?") but only emit where visible and accurate; FAQ rich result not guaranteed.
Remove standalone $0 Offer JSON-LD unless verified current pricing/eligibility from data/commercial-offers.ts and actual entitlement. Structured Organization / SoftwareApplication / Breadcrumb truthful; correct featureList under conditional services. SHA-256 report integrity differs from universal signed evidence or source truth. Company human readable identity first.
Keep Resources > Learn > What Is HAIEC link and footer/resources/docs deep links. No changes to global nav hierarchy during page refresh. No internal references to U5/U6/AL0 as capability stages, and no em dash typography in new public copy. Do not make unverified "independent third-party certifier" claim.

## 7. Focused implementation and nonregression checks
P0: lead with consequential value + example; evidence-bound/deterministic AI not testing AI message; clarify system map vs authority vs observation; 3/6 capabilities and 5 independent planes; schema free offer and coverage labels; SEO intent; preserve agent-auth requirement.
P1: accessible signature HTML/SVG diagram, distinct evaluated case first CTA, DAI, outcome-led personas and positive proof boundary, link /how-it-works and /enterprise; light-first theme with dark-mode parity.
P2: FAQ schema/semantic review, mobile polish, footer support.
Acceptance:
1. Page route, canonical and single H1 preserved; how-it-works remains separate lifecycle and Platform details not duplicated.
2. Company expansion and tagline exactly preserved; no shift to all platform open source.
3. Source-supported first finding can be useful without full five-plane setup, no claims effective IAM/DAI or observed target effect from source-only.
4. Five independent evidence views and DAI correct; six equal independently selectable capabilities; Protect and Monitor contingent on actual operational wiring and policy.
5. Real Kestrel frozen evaluated example CTA distinct from synthetic illustrative sample map; check destination links.
6. AI-agent MCP instruction requires authentication, preflight, eligible source and approval where required; no agent fabricated evaluation result or immediate magical browser test.
7. Coverage COMPLETE/PARTIAL vs claim ESTABLISHED/CONTRADICTED vs ALLOW/REVIEW/BLOCK never conflated.
8. JSON-LD pricing no ungrounded $0, correct visible FAQ parity, scoped public hash/integrity claim, no third-party certification or regulation guarantee.
9. Existing all page sections/CTAs/personal roles preserved or migrated to accessible details with exact links; no dead path.
10. 390/768/1440 viewport, keyboard, reduced motion, light/dark, server-rendered text and diagram alt caption, basic targeted lint/type, link and metadata smoke. No platform-wide live scan or new backend required.
11. This Common Repo planning activity does not change production page. Devin should refresh Main and deployed version then make one focused PR under repo policy. Record before/after content mapping and tested links, no manual deployment.

## 8. Related controlling documents
HAIEC-POSITIONING-USP-FOUR-WORD-SEO-AND-STORY-SYSTEM-2026-10-20.md
HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md
WEBSITE-HOMEPAGE-PRODUCT-UX-V2-HERO-DAI-MCP-PLAYBACK-DESIGN-2026-10-20.md
WEBSITE-HOW-IT-WORKS-CONSEQUENCE-TO-DECISION-UX-SEO-DESIGN-PLAN-2026-10-20.md
WEBSITE-PLATFORM-AND-PRODUCTS-PAGE-ENHANCEMENT-PLAN-2026-10-20.md
WEBSITE-SYSTEM-CONSTELLATION-DEEP-SOURCE-DIAGRAM-AND-THREE-SURFACE-UX-ENHANCEMENT-2026-10-20.md
WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md
WEBSITE-EVIDENCE-PROVENANCE-QUALIFICATION-UX-COPY-SEO-SOURCE-REVIEW-2026-10-20.md
WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md
PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md
PUBLIC-WEBSITE-ENHANCEMENT-PAGE-REGISTER-2026-10-20.md
