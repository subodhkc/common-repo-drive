> **Interactive design companion (new):** [Light/Dark Platform + Products semantic HTML editorial preview](design-references/platform-products-2026-10-20/platform-products-light-dark-editorial-preview.html). This static concept demonstrates hierarchy, page switching, shared semantic tokens and equal-weight capability cards; it does not implement HAIEC site theming or qualify any product claim.

# HAIEC — Platform & Products Public-Page Enhancement Plan, Copy and Design Contract

**Date:** 2026-10-20  
**Scope:** **/platform** and **/products only**.  
**Status:** PLANNED / COPY_PROPOSED / ASSETS_REUSABLE / HAIEC_SITE_NOT_CHANGED. This is a Common Repo handoff, not an implemented public-site change.

**Read first:** [HAIEC Public Brand, Copy & Dual-Theme Standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md). Follow Drive v4 FINAL product/copy precedence, current HAIEC Main, and [light architecture handoff](design-references/hero-architecture-2026-10-19/light-theme/WEBSITE-PLACEMENT-AND-DEVIN-HANDOFF.md).

## 0. Inspection baseline and strategic decision

Sources reviewed:
- HAIEC Main **e4e46c36ce23fe4be5011051558077630abeab5d**: \`app/platform/page.tsx\`, \`app/platform/{layout.tsx,metadata.ts}\`, \`app/products/{page.tsx,layout.tsx}\`, \`app/page.tsx\`, \`components/dashboard/{ThemeToggle,WorkspaceThemeSync}.tsx\`, \`styles/workspace-theme.css\`, \`tailwind.config.js\`.
- Public **https://www.haiec.com/platform** and **https://www.haiec.com/products** as retrieved 2026-10-20 (live prose matches reviewed content; no browser visual, responsive screenshot or production acceptance implied).
- Common Repo: design-references light SVG pack, \`DIAGRAM-SPECIFICATIONS.md\`, capability workflow matrix, DeepSeek selective adoption reviews, product-truth and precedence plan.
- Google Drive: **Website Positioning, SEO & Enterprise POC Conversion v4 FINAL**; **Public Website v4.2**; **What is HAIEC — Brand Positioning** (Oct 11); **Full Product Capability & Operating Experience** (Oct 16); **Verified Platform Inventory** (historical branch caveat).

**Do not** make a separate new brand identity, build another product/assurance engine, introduce another site-wide navigation taxonomy, create a new “architecture-v2” route, or replace existing homepage animation. This pass is high-value **buyer comprehension + evidence fidelity + visual polish + SEO + theme parity**.

### Current problems, exact owners

| Site owner | Observed | Cost | Decision |
|---|---|---|---|
| \`app/platform/page.tsx\` | Sequential “Define → Connect → Collect Evidence → Assure → Verify → Monitor” and five workflow cards | implies mandatory pipeline; obscures six independently selectable jobs | Introduce three pillars + six peer capabilities with optional dependencies; retain a *possible customer journey* only as illustrative secondary |
| \`app/platform/page.tsx\` | Duplicate 11-item tools directory inside Platform | buyer confuses architectural model with tool catalog | Remove/reduce duplicate catalog; hand products off to /products |
| \`app/platform/page.tsx\` | “Automatically discover ... all AI systems ...” | unsupported universality | “Identify AI assets through supported connected repositories, declared systems and qualified sources; coverage shown explicitly” |
| \`app/platform/page.tsx\` | Feature comparison table says competing product $50k+/year and 5-minute HAIEC setup | unsupported market/pricing/setup fact claims | Replace with honest comparison of **questions** different evidence layers answer; no vendor prices |
| \`app/products/page.tsx\` | “Core Platform” lists scanner, inventory, Constellation, artifacts, orchestrator and Compliance Twin as disconnected products | conceals shared engine, DAI, determinstic evaluation, decision/report spine | Introduce platform family summary + capability-to-outcome mapping, with existing modules as linked components |
| \`app/products/page.tsx\` | Standalone security tools separated, but “Specialized Capabilities” is 9 heterogeneous utilities | dilutes platform and implies same commercial/operational maturity | Group by useful buyer job; display status/dependency, short one-line boundaries and retain existing routes |
| \`app/products/page.tsx\` | ISAF Logger claims “3 lines” produce EU AI Act-ready documentation; Explanation API promises detailed explanations broadly | overly general/unqualified | Evidence logs support specified workflows; API only where supported & verified; no universal compliance/explanation guarantee |
| \`app/platform/page.tsx\` and \`app/products/page.tsx\` | Hard-coded dark / light surface classes; workspace theme excludes marketing | toggle cannot truly serve both public pages | Move these routes to public semantic design tokens, not \`ws-*\` migration |
| \`app/products/layout.tsx\` and page | overlapping metadata definitions; ItemList includes partial old ordering | SEO metadata/schema drift risk | Keep one authoritative route owner for title/description/canonical/structured data after validation |
| Both pages | evidence terms repeated without “what buyer receives” | commercial value hidden | lead with consequence/decision/report, show proof objects + concrete example, then offer POC |

**Claim red flags need exact source confirmation before publication**, especially public “fully automatic discovery,” “universal runtime,” “automatic compliance,” “immutable,” “AI Explanation API,” CSM6 production behavioral monitoring, AI Emergency Shutdown and current tier/price. Do not mark them shipped from a marketing card.

## 1. Shared information architecture — two distinct page jobs

| Route | Main answer | Outcome object | Primary action |
|---|---|---|---|
| **/platform** | How do you understand and assess what an AI agent can cause? | action/access map + bounded assurance evaluation + decision/verification evidence | **Scope an Enterprise POC** → /enterprise |
| **/products** | Which HAIEC platform and standalone products address my use case? | one platform suite with discoverable modules, and distinctly scoped developer/specialized tools | **Explore the platform** → /platform; contextual Enterprise POC → /enterprise |
| Linked but not replaced | /assurance, /methodology, /enterprise/architecture, /developer-security, /controls and /sample-reports | deeper proof for specialists | deep link only |

**Priority:** describe one **HAIEC platform** and its modules first. Do not market the 6 jobs, 5 evidence planes, DAI or the 3 pillars as 14 separately billable SaaS products. Avoid generic “end-to-end in five minutes” claims.

## 2. /platform — proposed publishable copy and page composition

**SEO target:** AI assurance platform; AI agent assurance; agent authority assessment.  
**Suggested title:** \`AI Assurance Platform for Agent Actions & Evidence | HAIEC\`  
**Meta description (review length before release):** \`HAIEC connects AI agent action paths, permissions, policy, code capability and observed evidence to support bounded assurance evaluations and accountable decisions.\`  
**Canonical:** \`https://www.haiec.com/platform\`. One H1. Breadcrumb Home → Platform.

### Section P1 — editorial hero (above fold)

**Eyebrow:** \`THE HAIEC PLATFORM\`  
**H1:** \`Know what your AI can cause. Decide with evidence.\`  
**Subhead:** \`AI agents can call APIs, access sensitive records and trigger changes. HAIEC traces supported action paths across code, identity, authority and observed evidence, so teams can distinguish what is possible, what is permitted and what is actually proven.\`  
**Micro-proof line:** \`Deterministic evaluation. Explicit evidence gaps. Accountable human decisions.\`  
**Primary CTA:** \`Scope an Enterprise POC\` → \`/enterprise\`  
**Secondary:** \`Explore a sample AI system\` → verified existing sample route such as \`/sample-reports/kestrel/constellation\` (validate public link before using)  
**Hero visualization:** a compact action → authority → potential effect annotated scene; **do not duplicate the separate homepage six-card hero**. Prefer one light framed graphic extracted/recombined from **existing** \`03-enterprise-evidence-outcome-flow-light.svg\` with an exact caption and a visible “Illustrative; qualified evidence depends on connected sources” label. No need for a sixth architecture asset unless readability fails at 390px.

### Section P2 — customer problem / contrast

**H2:** \`A tool permission does not tell you whether an action was authorized.\`  
**Body:** \`A scanner can show that code can call a refund API. IAM can show what its credential permits. A policy may say which requests need approval. A log may show a call occurred. None of those records alone establishes the full approval, execution and consequence story. HAIEC compares them without converting missing proof into a green result.\`  
**Visual:** four grounded evidence-source tiles converging into *one bounded evaluation*, with source-qualified arrows (not a guaranteed pipeline).  
**Support line:** \`Permission is not delegation. Capability is not execution.\`

### Section P3 — product architecture

**H2:** \`Three operating pillars. Six independently selectable capabilities.\`  
**Lead:** \`Start with the question you need answered. HAIEC uses shared evidence and evaluation contracts, while each capability has its own requirements, availability and scope.\`

| Pillar concept | Focus | Connected capabilities (illustrative, not exclusive mandatory stages) |
|---|---|---|
| **Understand** | System context, identities, connections and consequential paths | Discover |
| **Assure** | Evaluate evidence, authority gaps, controls and decision basis | Evaluate, Verify |
| **Govern & Operate** | Human operating scope, changes and optional target integrations | Authorize, Monitor, Protect |

**Six equal-weight capability cards** (peer presentation in a 3×2 responsive layout, **not** step numbering):
- **Discover** — \`Identify supported AI systems, agents, tools, identities and reachable action surfaces; show coverage and unknowns.\`
- **Evaluate** — \`Compare qualified requested, policy, grant, code and observation evidence; produce bounded assurance findings.\`
- **Authorize** — \`Put consequential decisions in accountable human hands with reviewed scope, conditions and traceable receipts where configured.\`
- **Monitor** — \`Follow evidence, source changes and supported runtime signals; identify changes or drift within connected coverage.\`
- **Protect** — \`Use supported application or gateway controls when integrated; distinguish configured intent from proved target-side effect.\`
- **Verify** — \`Inspect versioned reports, evidence provenance and decision/verification receipts within their exact scope.\`

**Diagram:** **REUSE**, not redraw, [04-platform-workflow-matrix-light.svg](design-references/hero-architecture-2026-10-19/light-theme/04-platform-workflow-matrix-light.svg). Implement native SSR six-row HTML matrix with optionally linked/toggleable diagram above; no unreadable infographic-only content. Six cards must carry equivalent visual weight, regardless of status.

### Section P4 — how evidence becomes an accountable decision

**H2:** \`One consequential action. Five different evidence questions.\`  
**Body:** \`What was requested? What did policy authorize? What was effectively granted? What can the implementation do? What actually happened within observed coverage? HAIEC compares these dimensions against the evaluated scope and records what remains unproven.\`  
**Signature object:** **AI Action & Access Map** + five-plane short comparison. Link to existing \`/methodology\`, \`/enterprise/architecture\`, and \`/assurance\`. DAI is one strong **comparator/explainer**, not a new eighth ungrounded engine.  
**Mini-example** (clearly fictional): \`A support agent can call a refund endpoint, but the evidence does not establish that it was delegated authority to choose the recipient. The proper outcome is further review, not an automatic safe verdict.\`

### Section P5 — what the buyer gets

**H2:** \`An assurance record you can review, explain and revisit.\`  
Show a **representative report excerpt** or a verifiable public sample link, with three output categories:
1. \`Consequential paths and evidence-backed findings\`
2. \`Coverage, missing evidence and explicit limitations\`
3. \`Human decision records and verifiable artifacts where produced\`

**Proof:** call out deterministic rule evaluation rather than AI assessing itself. AI/MCP may guide or retrieve, but does not replace product evaluation authority. Identify \`ALLOW / REVIEW / BLOCK\` as **bounded evaluation dispositions**, not execution enforcement or universal safety certification.

### Section P6 — use where teams work

**H2:** \`Bring the evidence to your workflow.\`  
Link three/four peer entry paths: Workspace / connected GitHub source / Assurance API / MCP-enabled agent. Supported source types vary; do not imply each channel has the same write authority or producer coverage. Source-first, goal-first and existing-system paths are independently possible. Add small “what is needed to begin” and “what remains unknown” copy, not a mandatory onboarding wizard.

### Section P7 — boundary and CTA

**H2:** \`From fragmented signals to a defensible decision.\`  
**Subhead:** \`Start with one AI system and the decision that matters. We identify what your current evidence supports, where additional proof is needed and which integration claims remain conditional.\`  
Primary \`Scope an Enterprise POC\` → \`/enterprise\`. Secondary \`See the products\` → \`/products\`.  
Small explicit scope note: \`Runtime monitoring and enforcement depend on connected sources and customer-side integration; a policy decision alone does not confirm a blocked action.\`

### Remove / relocate, not silently erase
- Relocate the 11-item security/compliance/free-tool directory to \`/products\` or relevant child pages. Keep relevant developer links contextual.
- Replace the unverified OneTrust/manual vendor-specific price/setup table with \`What each evidence surface can and cannot establish\` and links to methodology.
- Remove automatic “discover all systems” claim. No blanket compliance generation, certifications or unqualified “minutes to monitor” promises.
- Keep the useful existing consequence-first hero meaning, sample map, proof conditions and internal links where still correct; do not rewrite accepted stronger copy merely to be novel.

## 3. /products — proposed publishable copy and catalog restructuring

**SEO target:** AI assurance products; AI agent security tools; HAIEC developer security tools.  
**Suggested title:** \`HAIEC Products | AI Assurance Platform & Developer Tools\`  
**Meta description:** \`Explore HAIEC's evidence-bound assurance platform, independent developer security tools and scoped utilities for AI security, visibility and verification.\`  
**Canonical:** \`https://www.haiec.com/products\`. One H1. Breadcrumb Home → Products.

### Section R1 — hero

**Eyebrow:** \`PRODUCTS & TOOLS\`  
**H1:** \`One assurance platform. Purpose-built tools around it.\`  
**Subhead:** \`HAIEC combines system-level assurance, action and access evidence, deterministic evaluation and review artifacts. Independent developer tools and specialized utilities address narrower checks without being represented as full platform assurance.\`  
**Primary CTA:** \`Explore the platform\` → \`/platform\`; **Enterprise buyer CTA** displayed adjacent \`Scope an Enterprise POC\` → \`/enterprise\`.  
**Mini-navigation:** \`Platform\` / \`Developer Security\` / \`Specialized Utilities\` as simple semantic anchor links, not JS-only tabs.

### Section R2 — core platform: one family, shared truth

**H2:** \`HAIEC Platform: understand, assure and govern consequential AI.\`  
**Lead:** \`Shared evidence and evaluation contracts connect discovered systems, qualified technical findings, authority review and verification. Start with supported sources; add deeper evidence when the decision requires it.\`

Show **one flagship platform card** with a compact six-job diagram/text and **clearly nested modules**, not six unrelated product offers:
- \`AI System Inventory & System Constellation\` — observed, declared or qualified source coverage and action/access visualization
- \`Security & Capability Analysis\` — source-visible AI security findings and code-capable action paths
- \`Assurance Evaluation & DAI\` — evidence-bound authority/capability comparison, control evidence, verdict limitations
- \`Human Decision & Governance\` — configured review/approval workflow and scoped records
- \`Monitoring & Change Visibility\` — supported connected source and runtime observations, qualified change interpretation
- \`Reports, Trust Artifacts & Verification\` — exact evaluation, provenance, receipts and limitations

Audit Orchestrator and Compliance Twin remain **underlying or linked components** with exact current scope, not promoted to equivalent standalone flagship products without status proof. Show \`Explore architecture\` → \`/enterprise/architecture\`, \`Platform overview\` → \`/platform\`.

**Design:** large editorial platform feature with left narrative and right [04 workflow matrix](design-references/hero-architecture-2026-10-19/light-theme/04-platform-workflow-matrix-light.svg) thumbnail / native table. Do not double-place a full graphic on /platform and /products; Platform owns the explanatory matrix; Products can link/use a minimal visual teaser.

### Section R3 — developer security (distinct family)

**H2:** \`Independent security tools for a narrower job.\`  
**Lead:** \`Use these tools on their own. They do not silently create a HAIEC platform evaluation.\`  
Three equal cards preserving existing canonical destinations:
- **AI AppSec** — \`Open-source source-code security analysis for AI applications and agents.\` Link \`/ai-appsec\` only if verified live, otherwise current canonical \`/developer-security\` family path.
- **MCP Tenant Isolation** — \`Deterministic checks for cross-tenant isolation risks in MCP implementations.\` Preserve \`/mcp-tenant-isolation\` if currently canonical.
- **LLMVerify** — \`Local-first pattern checks for selected input/output risks; scope depends on its detectors.\` Preserve \`/llmverify\`.

Counts of checks/rules only from current package registry, dated where useful; never sum their counts with HAIEC platform controls. Preserve open-source/license claims only where verified.

### Section R4 — specialized offerings by customer outcome, not 9 equal “products”

**H2:** \`Specialized paths and utilities.\`  
**Lead:** \`Some are standalone tools. Others depend on a supported connector, SDK, human workflow or custom integration. Their availability and evidence outputs are not interchangeable.\`

**Family A — Developer & usage operations:** PR Compliance, SDK Wrappers / API usage tracking.  
**Family B — Evidence & framework readiness:** ISAF Logger (specific logging utility, separate from ISAF methodology), Framework Readiness Wizards, Enforcement Readiness Preview.  
**Family C — Scoped enterprise extensions:** AI Emergency Shutdown (integration-dependent guard; no universal cross-target kill switch), CSM6-aligned monitoring where genuinely implemented/connected, AI Explanation API only with qualified mechanism and actual supported response contract.

For each tile use concise fields:
\`What it does\` | \`Standalone or platform-connected?\` | \`What the output proves\` | \`Integration/coverage note\` | \`See details\`. Do not invent live status badges. Retain deep links and SEO-relevant existing content on child routes, but do **not** present research/framework mapping as executable platform enforcement.

**Copy repairs:**
- ISAF Logger: replace “3 lines of code, get EU AI Act-ready documentation” with \`Capture instruction-stack and decision evidence using the supported logger; regulatory readiness requires broader evidence and review.\`
- AI Emergency Shutdown: \`Integrate scoped guards at supported customer-controlled execution boundaries. Stop/recovery effectiveness must be verified at the target.\`
- CSM6: \`Evidence and monitoring concepts aligned to selected CSM6 functions; not evidence that a standalone scanner implements the full framework.\`
- AI Explanation API: \`Inspect supported recorded factors, evidence and explanations where the API and data producers establish them\` **only after owner contract verification**. Otherwise hide/retire as active catalog item.
- Framework wizards: \`Readiness assessment and mappings; not a certification or regulator-approved audit\`.
- Remove “all platforms run continuous monitoring” conflations.

### Section R5 — product selection guide (simple, SEO-readable native table)

**H2:** \`Which HAIEC path fits your question?\`

| Buyer question | Recommended family | Likely outcome | Boundary |
|---|---|---|---|
| \`What can my agent change, and can we defend deployment?\` | HAIEC Platform | bounded action/authority/evaluation package | dependent on qualified source and scope |
| \`Does my code expose AI-specific risks?\` | AI AppSec | static findings | not proof of actual runtime execution |
| \`Can MCP logic cross a tenant boundary?\` | MCP Tenant Isolation | deterministic implementation checks | not universal tenant-runtime proof |
| \`Do local prompts/outputs match known risk patterns?\` | LLMVerify | local pattern flags | not comprehensive AI safety |
| \`Do we need logging, framework gap prompts or usage insight?\` | Specialized tools | scoped records or guided readiness | not a platform assurance verdict |

**R6 final CTA:** \`Need evidence for an enterprise decision?\` → \`Scope an Enterprise POC\`; secondary \`Explore developer security\` → \`/developer-security\`.

## 4. Theme, motion and detailed visual implementation

**Key technical finding:** current **workspace** \`haiec-theme\` / \`ws-*\` light/dark contract is shipped in source; **marketing site** does not inherit it. Platform has fixed dark \`bg-gradient-to-b from-slate-950...\`; Products has fixed light \`bg-white\` blocks. These are **not** true dual-theme pages today.

- Implement a **public marketing-specific semantic CSS token layer** shared by these two pages and future audited public pages. Audit existing \`--haiec-*\` marketing vars; choose palette by sampling existing identity, not inventing a new brand.
- Scoped shell should switch both surface/background and text/border/link/graphic contrast. Retain hero gradients, but make them theme-aware. Avoid workspace \`ws-*\` utility bleed and avoid changing \`data-theme\` semantics or auth user preference inadvertently.
- Public toggle belongs in the actual shared public header. Guest fallback should be consistent; authenticated state should honor existing saved preference with a considered priority order. Do not make public visitors call \`/api/user/preferences\` unauthenticated.
- Distinct dark and light screenshots; alternate diagram treatment (light SVG inside light framed figure for dark page is acceptable if intentional). Never CSS invert text diagrams.
- Desktop: larger type, editorial split, line/trace details, 3×2 equivalent job cards. Mobile: single-column cards + short native evidence comparison; keep copy readable without horizontal infographic zoom. Micro-interaction: selecting a job can reveal an *illustrative* evidence question/needed source, not synthetic evaluation status.
- Animation: understated path revelation on user action, visible static fallback, respects reduced motion. No fabricated “live” or “monitoring active” pulses.
- Preserve existing public global nav, homepage \`HeroFlowDiagram\`, \`ProductShowcase\`, \`SampleMapPreview\`, \`AuthorityPlanesFigure\`, and the 12-view \`/enterprise/architecture\` explorer. This page pair does **not** deploy homepage assets.

## 5. SEO and internal-link contract

**Unique question ownership:** /platform owns **how it works**; /products owns **offering selection**; /assurance owns **evaluation methodology/result**; /methodology owns **rigor**; /enterprise/architecture owns **deep architecture**. Use supporting links, not repetitive full content.

**Metadata tasks:** one title template per page, no duplicate “| HAIEC”; canonical fixed to own route, OG/Twitter descriptions consistent with H1, crawler-visible SSR H2 and anchored section links, breadcrumbs as applicable. Avoid duplicate ItemList JSON-LD or schema that declares hidden products as sold. Preserve true Organization/WebSite structured data from shared owner, not repeated nested schema. Content and crawlable internal linking outrank obsolete meta keyword arrays.

**Suggested short on-page Q&A** (visible, not FAQ rich-result bait):
- Platform: \`Does scanning source code prove an agent actually executed an action?\` → \`No. Code-capable and observed are different evidence planes.\`
- Platform: \`Does HAIEC replace IAM, monitoring or runtime controls?\` → \`No. It correlates supported evidence while those systems continue to enforce/observe within their own scope.\`
- Products: \`Do open-source tools automatically create a HAIEC assurance evaluation?\` → \`No. They are separately scoped and require an eligible qualified platform evidence path to contribute.\`
- Products: \`Does a governance approval automatically block a tool call?\` → \`No. Enforcement depends on customer-side integrated control at the execution boundary.\`

**Links to validate:** \`/enterprise\`, \`/platform\`, \`/products\`, \`/assurance\`, \`/methodology\`, \`/enterprise/architecture\`, \`/developer-security\`, \`/sample-reports\`, \`/controls\` and family child pages. No new SEO route this sprint.

## 6. Implementation work order and acceptance criteria (future Devin handoff)

1. Refresh HAIEC Main and select a clean implementation branch. Compare live pages to this plan and Drive v4 owner. Audit shared public header/theme vs workspace toggle; find actual \`--haiec-*\` definitions and CSS usage. Freeze claim matrix: **copy → exact supported module/endpoint/source/evaluation status**. If a catalog item is held/preview, do not call it a live product.
2. Establish the small **brand/copy standard** above and public semantic theme primitives. Do not change global workspace styles. Add one accessible marketing theme toggle if shared public shell supports it; choose user/guest precedence and flash mitigation carefully.
3. Refactor **/platform first**, using sections P1–P7 with SSR six-job matrix / existing SVG, five-plane/DAI example, report/proof CTA. Remove duplication and unsupported pricing/discovery. Preserve link/functionality not explicitly deprecated.
4. Refactor **/products second** with platform as one family, independent developer tools, grouped specialized utilities, honest status/dependency labels and native selection table. Retain and link long-tail child pages, no blind redirect or removals.
5. Align metadata, canonical, breadcrumbs, existing sitemap/structured data, screenshot/social crop, two-theme responsive semantics and internal links. Preserve no-JS essential copy.
6. **Focused checks only:** route smoke for both; one desktop (1440) + tablet (768) + mobile (390) comparison for both themes, keyboard/focus and reduced-motion, lint/typecheck touched files, copy/claims owner pass and link validation. No exhaustive unrelated regression suite.
7. One PR to **HAIEC Main** only after implementation authorization; merge to Main triggers automatic Vercel deploy under existing process. Verify production route HTML, mode toggle behavior, mobile readability, metadata, claims, working CTAs. Record exact PR/commit/deployment and any limitations back in Common Repo.
8. Until actual deployment, track \`PLANNED\`. The Common Repo commits made for this handoff do **not** modify HAIEC code or deployed pages.

### Non-negotiable acceptance

- Six independent jobs have **equal visual prominence** and honest source/role/entitlement/connection conditions.
- Buyer can tell **platform assurance** from **standalone utilities** in five seconds.
- Each page leads to a tangible proof object and the correct Enterprise POC/developer next action.
- No “all AI discovered”, “competes at $50k”, “five-minute setup”, regulator-ready logger, universal monitoring, universal kill switch or unexplained AI explanation claim.
- Theme toggle works both directions on both routes; workspace preferences and dashboard appearance remain intact.
- Illustrative example labeled; incomplete/unknown evidence never shown as verified PASS.
- Existing homepage animated ProductShowcase, other narrative visuals, and production evidence planes remain untouched.
- One canonical SEO route per distinct customer question.

## 7. Follow-up scope (deferred)

After /platform and /products are designed/implemented and assessed, continue the prior audit list: /assurance, /enterprise, /controls, /methodology, /pricing and other flagged pages, using the **same brand/copy standard**, not new page-specific style systems. DAI dedicated route is a separate later discoverability decision, not a prerequisite to this pair.
