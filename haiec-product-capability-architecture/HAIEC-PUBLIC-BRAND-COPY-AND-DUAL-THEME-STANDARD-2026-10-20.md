# HAIEC Public Brand, Copy & Dual-Theme Standard — v0.1

**Date:** 2026-10-20  
**Status:** Proposed editorial implementation standard for public pages. **Not a rebrand, website implementation, theme deployment, or new capability release.**  
**Initial scope:** /platform and /products. Expand to remaining audited routes after this pair is accepted.

## 1. Decision and precedence

A **compact, versioned brand/copy/design standard is needed first**, but a new identity exercise is not. HAIEC already has canonical category, company definition, product-truth conventions, typography/brand tokens, a dual-theme *workspace* implementation, and corrected light SVGs. This file consolidates those decisions so each site refresh does not produce a new style or overclaim.

Source precedence at implementation time:
1. Currently deployed, qualified behavior and current HAIEC Main code/registries at an exact commit.
2. In-repo product truth, release gates, evidence contracts, commercial offer and control authority.
3. Drive **Website Positioning, SEO & Enterprise POC Conversion — v4 FINAL** (2026-09-09): https://docs.google.com/document/d/15Syrdh5kjfKaBSDJ8yd26gQvBPfURSgvsm7ujvIGNXU/edit
4. Drive **Public Website Full-Site Convergence v4.2**, especially SEO question ownership and consequence-path differentiation: https://docs.google.com/document/d/13ESOED8G9K0g9_lZq9Q7ENObREuw5o-mSNq6yPsl8mc/edit
5. Current approved Common Repo design/handoff, including corrected light-theme SVGs.
6. Older launch copy and DeepSeek/raster inspiration, as **reference**, not product evidence.

Source review at HAIEC Main **e4e46c36ce23fe4be5011051558077630abeab5d** and Common Repo as of 2026-10-20. Never treat these static observations as timeless production proof. Common Repo is public; no confidential evaluation details or credentials belong here.

## 2. Brand identity: preserve

| Decision | Canonical rule |
|---|---|
| Full name | HAIEC — Human AI Evidence Company |
| Tagline | **High assurance in every consequence.** |
| Category | **Evidence-Bound Assurance** (do not rename the category to generic AI governance or compliance automation) |
| Search-language bridge | AI agent security; AI agent assurance; AI assurance platform; agentic AI security; AI action/access assurance — adapt to each page's actual question |
| Distinctive principle | Reconcile supported action/consequence paths against qualified authority, capability, controls and observation, preserving gaps |
| Headline question | **What can this AI actually cause, and what evidence supports the answer?** |
| Commercial priority | Enterprise Assurance POC > Standard Validation > assurance-firm engagement; developer utilities remain useful adoption paths |

**Three conceptual pillars:** Understand → Assure → Govern & Operate. **Six peer, independently selectable jobs:** Discover / Evaluate / Authorize / Monitor / Protect / Verify. They may have legitimate dependencies and different source/role/integration availability; **do not render them as six compulsory sequential steps or highlight Protect/Govern as privileged**. The pillars explain breadth, not a rigid control sequence.

**Five evidence planes:** Requested / Policy-Authorized / Effectively Granted / Code-Capable / Observed. These are **independent evidence questions**, not guarantees of complete collection or a proven causal chain. DAI is a bounded comparison of consequential capability and delegated authority; it is not automatically a universal runtime block. **Permission ≠ delegation. Capability ≠ execution. Observed call ≠ target effect. Unknown ≠ passed.**

## 3. Voice and copy framework

**Tone:** exact, commercially confident, human, technically credible. Lead with buyer decision and business consequence; demonstrate the mechanism; disclose only material proof limitations alongside the claim; use precise outcomes, not a page full of disclaimers.

**Editorial formula for each public page:**
1. **Question / pain** — one customer question owned by one canonical route.
2. **Unexpected gap** — why inventory, scanner, policy, IAM or logs alone do not settle it.
3. **Mechanism** — supported consequential action → tool/API/handler → guard/authority → resource/effect.
4. **HAIEC solution** — evaluated evidence, deterministic qualified conclusion, human decision where required.
5. **Proof and limits** — what is established, partial, unknown, not assessed and integration-dependent.
6. **Action** — scope an Enterprise POC; developer path second.

**Terminology:** prefer "qualified evidence," "source-visible" / "code-capable," "scope of review," "assurance evaluation," "human decision receipt," "evidence package," "verification receipt," "integration-dependent enforcement," "monitoring where connected," "supported consequence path," "recorded effect evidence where available." Spell out DAI at first use. Use "AI agent security" for SEO but **do not** label the product simply an LLM scanner.

**Avoid or qualify:**
- "Discover all AI", "complete coverage", "no integration", "automatically secure", "guaranteed protection", "runtime enforcement everywhere", "continuous monitoring" without wired evidence, "certifies/guarantees compliance", "audit-ready" for every framework;
- "immutable" when only hashed or tamper-evident, "signed" without verified signatures;
- "automatic approval", "operational authorization" when the result is an advisory/review receipt;
- “kill switch stops all models everywhere”, and pricing/setup comparisons against named competitors without dated proof;
- fabricated client results or manufacturing fixture images shown as live HAIEC observations;
- legacy U5/U6 internal names in primary customer copy; prefer “Assurance Evaluation” / “Decision & Verification Receipt”.

**Developer and product-family distinction:** platform modules generate/share HAIEC evidence under platform conditions; standalone AI AppSec / MCP Tenant Isolation / LLMVerify remain separately scoped; ISAF/CSM6 have their own framework/research status, and the ISAF Logger is a specific utility, not full framework implementation. An open-source tool result must not become a platform assurance verdict by implication.

**Clarity rule:** one claim per sentence where possible. Pair claims with the object that proves them (Action Map, evidence planes, evaluation/report, decision or receipt), not ornamental percentage claims. For conditional services say "available for scoped integration" or "requires qualified source/customer wiring" where grounded.

## 4. Visual standard: evolve current design, do not reset it

Reuse HAIEC Main typography from tailwind.config.js: Space Grotesk for headings, Inter for copy and JetBrains Mono sparingly for evidence labels. Preserve brand green/forest/mint/navy identity, calibrated against actual accessible contrast. Existing implementation has conflicting literal emerald/slate colors and shared --haiec-* tokens: **audit actual usage before standardizing; do not infer an unused global palette or impose new hex colors blindly.**

**Design language:** enterprise editorial + precise evidence instrumentation. Strong typographic hierarchy, generous white space, restrained surfaces, subtle lines, compact bounded diagrams, highly legible label text and one primary CTA. No "dashboard of marketing cards," duplicate product grids, or overactive glows. Use motion only to reveal relationships, never simulate monitoring, approvals, blocked actions or evidence being collected.

**Semantic meaning independent of hue:** established / partial / unknown / not assessed / failed / review should always have a text label and accessible contrast. Avoid using bright orange/red to make Govern/Protect appear more important than other jobs.

**Illustration source:** approved corrected editable light SVGs in
[hero-architecture-2026-10-19/light-theme](design-references/hero-architecture-2026-10-19/light-theme/README.md).
Retain existing hero, DAI, other site animations/assets per the page-specific handoff. Corrected SVGs are explanatory, not runtime visualizations. **Do not publish image-generated PNG wording without product-truth editing.** Native rendered HTML must tell the same story.

## 5. Light + dark theme architecture — public vs workspace

**What exists in Main:** \`components/dashboard/ThemeToggle.tsx\`, \`WorkspaceThemeSync.tsx\` and \`styles/workspace-theme.css\` implement dark/light for **workspace** with \`data-theme\` and \`ws-*\` tokens. The source explicitly says *marketing surfaces use slate literals and are unaffected*. \`app/platform/page.tsx\` uses fixed \`slate-950\`/white/dark blocks; \`app/products/page.tsx\` uses fixed \`bg-white\`/light card surfaces and brand gradients. Therefore the public website **does not yet have a complete shared light/dark theme contract**. Do not simply add the workspace toggle to these routes and call the work done.

**Implementation contract, public scope only:**
- Add semantic **marketing tokens** scoped to a public-page shell (\`--site-bg\`, \`--site-surface\`, \`--site-surface-alt\`, \`--site-text\`, \`--site-muted\`, \`--site-border\`, \`--site-accent\`, \`--site-link\`, \`--site-hero\`, \`--site-diagram-surface\`). Define values for both modes after sampling existing site identity. Keep \`ws-*\` dashboard tokens and visual treatments unchanged.
- Use the existing root \`data-theme\` convention without overriding dashboard classes; avoid global selectors that restyle app, verifier or report routes unintentionally. Ensure the public header toggle is accessible, keyboard operable, labeled, and reflects current state.
- Existing authenticated \`haiec-theme\` + \`user_preferences.theme\` contract may be reused with a carefully designed guest fallback (local preference and/or OS setting); **verify precedence before implementing**. Guest visitors should not call an authenticated preferences API. A logged-in user's site and workspace should not silently disagree. Handle first paint without a flash subject to Next.js CSP, SSR and cookie constraints.
- **Do not assume a universal light default**. The corrected illustrations use a light canvas; they can sit inside a deliberately framed light figure even while the surrounding shell is dark. Preserve user-selected mode. Default choice is a separate UX decision after testing and consistent with homepage appearance.
- For diagrams, either make one accessible light/neutral contained surface that looks intentional in both modes, or produce actual theme-aware SVG tokens/variants. Never CSS invert a semantic infographic. Keep color-neutral parity for six capability cards.
- Ensure 390/768/1440 responsive layouts, strong focus rings, WCAG contrast, prefers-reduced-motion, no layout shift, acceptable no-JS SSR content, and a short design review in both modes. Dark and light are **equal full experiences**, not light primary with a broken dark fallback.
- Restrict this first wave to **/platform and /products + reusable public shell/theme component if required**. No wholesale dashboard style migration.

## 6. Page taxonomy and SEO

- **/platform — HOW HAIEC works:** independent capabilities and common evidence/assurance model, example action path, proof boundaries. Primary intent: “How does an AI assurance platform evaluate agent authority and consequential actions?”
- **/products — WHAT HAIEC offers:** coherent platform product family, separately licensed/open-source developer tools, narrowly scoped specialized offerings; not a second Platform overview. Primary intent: “What HAIEC products and AI agent security tools are available?”
- One distinct H1 per route. Preserve canonical URLs, breadcrumb/Organization/ItemList schema only when content truly matches. Title template must not double-append HAIEC. Treat metadata keywords as secondary to helpful native indexed content and internal links.
- Use real SSR HTML text for the six jobs, diagrams, outcomes and FAQ answers; \`figure\`, meaningful \`figcaption\`, a text transcript and a native responsive matrix. SVG text alone is not the SEO strategy. Keep sensible OG images and a legible social crop.
- Internal links should point to existing canonical /assurance, /enterprise, /enterprise/architecture, /methodology, /ai-inventory, /developer-security, /sample-reports, /controls, /developers and sample-system routes after route validation, not new competing URLs.

## 7. Editorial release gate

Every claim goes through **Product status → qualified evidence owner → integration dependency → supported wording → public CTA**. Mark internal inventory statuses LIVE / PARTIAL / SPECIALIZED / PREVIEW / HELD / PROPOSED / NOT ESTABLISHED; public labels simplify to **Platform**, **Standalone**, **Specialized / scoped**, and **Requires integration**, as applicable. Do not expose sensitive architecture details. If exact product availability is unverified at release, **remove the launch claim** or label it conditional.

**Ready-to-publish conditions:** truthful source-scoped capability claims, six equal capability units, two distinct routes without keyword cannibalization, readable light and dark variants, existing homepage animations untouched, inspectable semantic diagrams, and no invented operating proof. No site code/deployment is authorized by this editorial document.
