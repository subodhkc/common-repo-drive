> **2026-10-20 — HERO V3 STRATEGY AND HTML REVISION (LATEST):** The [updated interactive homepage HTML](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html) **now uses the exact approved headline**: **“Go beyond checking AI components. Understand and assess the consequential actions they enable.”** Its hero image/visual is **no longer the six-capability explorer**. Two art-directed illustrations rotate **every 10 seconds**: **Consequence Gap** (separately scoped security/IAM/policy results → derived agent/tool/worker/payment path → five peer evidence views and cross-cutting DAI), and **Executive Decision** (source-backed finding → specific authority question → deterministic evaluation / actionable next decision). The H1, CTA and MCP goal remain fixed; manual slide selection, pause, reduced-motion, offscreen and keyboard behavior are specified in the HTML. **The existing interactive six-capability + DAI explorer is preserved BELOW the first-finding section**, and MCP four chapters / governance playback remain. This V3 decision supersedes V2 language recommending the six-capability explorer *in the hero*. It is an internal noindex design reference; **HAIEC production is unchanged**.

> **2026-10-20 V2 PRODUCT/UX SUPERSESSION:** [Second-pass full design and copy specification](WEBSITE-HOMEPAGE-PRODUCT-UX-V2-HERO-DAI-MCP-PLAYBACK-DESIGN-2026-10-20.md) and [interactive V2 prototype](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html) supersede the initial first-pass homepage concept for hero detail, DAI inspector, IDE terminal and playback ordering/copy. Preserve current production components rather than replacing them with this prototype. [Findings-first DAI decision](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md).

> **Companion light-first editorial preview:** [Homepage interactive HTML concept](design-references/homepage-2026-10-20/homepage-light-first-first-findings-enterprise-editorial-preview.html) (light by default in this preview, dark toggle, six peer capabilities, fictional first-finding source path, enterprise/developer CTAs, deliberate original component slots). Production code is **not** changed; replacing existing `HeroArchitectureExplorer`, `ProductShowcase`, `SampleMapPreview` or `ScenarioPlayer` with this simplified mock is **prohibited**.

# HAIEC Homepage — Light-First Enterprise Design, Immediate Findings, Stronger Copy & Conversion

**Reviewed 2026-10-20. Route:** https://www.haiec.com/  
**Status:** SOURCE_REVIEWED / DESIGN & IMPLEMENTATION PLAN IN COMMON REPO / **NOT DEPLOYED**. Homepage is page #8 after the seven earlier page audits.

## 0. CONTROLLING PRODUCT POSITIONING

**Find meaningful risks early. Deepen assurance when the decision requires more.**

User decision: do not make complete policy, IAM, human delegation, runtime telemetry, target effects or all five evidence planes prerequisites to showing supported **initial findings**. HAIEC's value starts with a supported source path and potential consequence. Scope/evidence qualification is needed for the *strength and exact meaning of each claim*, not a universal gate that suppresses source findings. Preserve trustworthy, source-specific facts alongside their own limitations rather than downgrading the entire system to UNKNOWN.

Market framing: **Evidence-Bound Assurance**; four-word descriptor **Deterministic AI Action Assurance**; tagline **High assurance in every consequence**.

- A source scan can show a reachable refund API or technical vulnerability **without runtime telemetry**.
- A valid policy may establish a policy-authorized scope. IAM may independently establish granted access.
- Actual human/business delegation applies to material discretionary choices not already determined by trusted rules. Do not invent delegation proof or declare everything UNKNOWN because that proof is absent.
- Deterministic evaluation concerns an exact rule version and evaluation basis; it does not mean every early finding has a final PASS/FAIL or that protection is installed.
- **Discovery, evaluation, human authorization, monitoring, protection and verification are six independent capabilities**, not a required customer workflow or six maturity steps.

Do not let the separate technical DAI admission research correction become an unnecessary friction barrier in the homepage, source-first scanner, initial findings or MCP developer onboarding.

## 1. Current website is richer than the earlier hero planning snapshot

**Current HAIEC source reviewed:** subodhkc/haiec-website Main, app/page.tsx blob 5d2f5fe4d0967141be6afdcbb398f1b85052c511 (about 72KB, 1,354 lines, 14 section elements, 32 RevealSection wrappers). Relevant components:

- components/homepage/HeroFlowDiagram.tsx **already wraps the interactive six-capability** components/homepage/HeroArchitectureExplorer.tsx. This is native semantic HTML with six equally weighted selectable cards and light surface. **Do NOT undo this with the old static hero SVG** just because the October 19 Common Repo placement handoff predates the production improvement.
- components/hero/ProductShowcase.tsx: real animated three-demo IDE terminal, in a later section; preserve it and its dark code appearance.
- components/governance/ScenarioPlayer.tsx plus data/demo/haiec-advantage-scenario.ts: 26-second illustration with player controls; preserve and label as example.
- components/ai-inventory/SampleMapPreview.tsx: source-backed illustrative System Constellation, no fabricated edges; preserve.
- components/homepage/AuthorityPlanesFigure.tsx: dark-themed native evidence-plane mock; adapt for light site rather than delete. Existing /diagrams/haiec-dai-evidence-relationships.svg also present in Evidence & Authority section.
- components/homepage/RevealSection.tsx, AmbientMount.tsx, FrameworkArtifactGrid.tsx, TrackedLink.tsx: preserve reveal, ambient topology, frameworks, link tracking.
- Current home features real-world external incident analysis, Hugging Face research, Kestrel report/constellation, telecom forensics, AL0/AL1/AL2 comparison, engineering method, buyer paths, MunichTech award, security/GRC/IAM comparison, framework mapping and rich final Enterprise CTA.

**Critical theme observation (current source):** app/page.tsx starts with hardcoded bg-slate-900 text-slate-100. app/globals.css imports styles/light-theme.css, which globally remaps certain dark Tailwind classes under html[data-theme="light"]. On marketing routes app/RootLayoutContent.tsx **does mount** WorkspaceThemeSync, which applies persisted haiec-theme and explicit server preference **after hydration**; root app/layout.tsx does not set data-theme="light" by default. This is a real partial light-mode implementation but NOT proven first-paint default light or consistent header/footer/content theme. components/AutoHideNavigation.tsx imports dashboard ThemeToggle and uses fixed dark slate styles. The already-light HeroArchitectureExplorer currently sits inside a mostly dark page.

**SEO observation:** data/seo-page-intents.ts suggests homepage H1 "What happens when the AI is wrong?" while actual H1 is "Know what your AI can do. See what the evidence supports." Align to one owner/H1; avoid duplicate H1 or search doorway page. Current root metadata "AI Agent Security & Evidence-Bound Assurance | HAIEC" is broadly correct.

**Existing design-pack note:** six peer hero SVGs and DAI references exist in Common Repo at design-references/hero-architecture-2026-10-19/light-theme. Use as editorial/SEO references or source when better than existing live components. Do not import the five PNGs; user explicitly discontinued binary work. The latest HeroArchitectureExplorer is the best production hero foundation.

## 2. Homepage information architecture and section-level execution

| Order | New editorial role | Existing component/section to PRESERVE | Enhancement |
|---|---|---|---|
| H0 | **Light-first consequence/enterprise hero** | MunichTech award link, developer/GitHub/npm/MCP rail, existing current H1 structure, original TrackedLink CTAs, HeroFlowDiagram/Explorer | Stronger H1 and deck; enterprise + agent + sample CTA, smaller proof/integration rail; native interactive hero unchanged |
| H1 | **Find a useful risk in the first pass** | existing repository/source capability story and sample paths | One compact, prominently **FICTIONAL** source-path finding showing an agent→tool→refund handler and exact known/unknown facts; not fake scan/results |
| H2 | Three pillars and six selectable jobs | current six-peer hero once, explanatory methodology | Brief editorial Understand / Assure / Govern & Operate synopsis after hero, without six additional duplicate peer cards |
| H3 | **Easy to start in an IDE** | **ProductShowcase animated terminal**, GitHub App, Action, npm packages, existing source/Assurance API/Runtime entry points | Dark terminal framed inside light page; four-word MCP user instruction "Run HAIEC AI Assurance"; real docs/auth link |
| H4 | **Consequences and paths** | System Constellation section, **SampleMapPreview**, six lenses (influence, reach, control, paths, consequence, evidence), report links | Better right/left editorial geometry, reusable compact authority path explanation; no invented graph edges |
| H5 | **Policy, grant, code, observation and DAI** | existing five-plane rows, AuthorityPlanesFigure, DAI light SVG, /methodology link | Explain existing policy facts remain known, delegation is separate bounded business choice, source capability ≠ execution. Adapt dark-only visual |
| H6 | **Evidence-driven output** | Kestrel evaluated samples, master report, real sample/forensic case | Show a compact buyer-output specimen and source links above lengthy case studies; authentic proof differs from fictional first-finding sample |
| H7 | **Human operating decisions** | Advantage section and **ScenarioPlayer 26-second illustration** with playback controls | Higher-value copy: “Act on the findings without stopping every agent”; all target-native interventions/integrations remain qualified |
| H8 | **Published external patterns / research** | 3 third-party incidents, Hugging Face brief and all publication links | Lower-page 3 cards + optional details to avoid consecutive near-duplicate long stories. Preserve third-party disclaimer |
| H9 | **Scientific differentiator** | scanner/governance/IAM comparison, fixed-basis rules, reporting, source limitations, AL0→AL2 declared scenario comparison, method stages | Explain early signal versus deterministic bounded evaluation, without making a mandatory multi-stage funnel; deep link Methodology |
| H10 | **Standards and open formats** | FrameworkArtifactGrid, risk/mapping text, current examples and /developers/frameworks | Secondary trust context, no certification claims, human professional judgment retained |
| H11 | **Buyers and final CTA** | Developer, Team, Assurance Firms and Enterprise buyer cards, existing CTAs; closing Enterprise and samples | Enterprise card prioritized by layout, not by removing other paths; strong final "What can this AI actually cause?" |

Existing homepage is long. **Do not blindly replace it with a short 5-section mock**. Rebalance length with semantic accessible expandable details, meaningful existing routes and one sample result earlier. Any removals need explicit owner review, not “the prototype omitted it.”

## 3. Production-ready editorial copy

**Recommended eyebrow:** AI AGENT SECURITY · EVIDENCE-BOUND ASSURANCE

**Recommended H1:** **Know what your AI can do. See what it could cause.**

Retains the existing “Know what your AI can do” line, strengthens consequences. If current existing H1 is retained for SEO continuity, at least use the following deck and first-pass promise; never rotate H1 automatically.

**Hero deck:**
“HAIEC finds supported agent actions, reachable systems and consequential exposures from code and connected sources. Investigate useful findings immediately, then apply deterministic assurance when you need a defensible decision — without requiring every source or assuming missing evidence means safe.”

**Concise proof line:** **First findings now. Defensible assurance when it matters.**  
**Technical line:** Deterministic AI Action Assurance · One canonical evaluation · Clear proof boundaries.

**Primary Enterprise CTA:** **Scope an Enterprise POC** → /enterprise.  
**Secondary agent CTA:** **Run HAIEC with Your AI Agent** → /docs/agent-integration.  
**Proof CTA:** **See an Assurance Report** → /sample-reports/kestrel.  
**Keep original:** award; GitHub App/Action; both npm tools; /reports/agentic-assurance-sample-report.html; telecom field handbook; Kestrel and Source/Constellation links. Retain existing event names/placements through TrackedLink.

**Standalone “first finding” copy:**
“A useful finding doesn't need every integration. This example source shows a support agent can call a refund handler. That gives your team a concrete action path to inspect. A policy may already establish allowed amounts; grant, recipient choice and observed execution are separate questions. Add those signals only when the decision requires them.”

**First-pass graphic labels (FICTIONAL, not a real HAIEC run):**
- **FOUND IN SOURCE**: Possible refund-action path.
- **KNOWN**: Agent/tool/handler relation in a chosen code snapshot.
- **TO CHECK**: Credential reach, exact recipient decision and runtime effect, if relevant.
- **NEXT ACTION**: Inspect the path or run eligible assurance; don't withhold the finding.

**Three pillar copy:**
- **Understand** — “Find the agents, tools and consequential paths your code and connected sources expose.”
- **Assure** — “Evaluate what policy, grants, code and observations establish under explicit, reproducible rules.”
- **Govern & Operate** — “Route material decisions to the right people and monitor or mediate only where connected and supported.”

**Developer tryout:** **Run HAIEC AI Assurance** is a goal phrase for an already configured compatible MCP client. Connection and secure credential/read-only preflight are required for an eligible canonical run, but **a preliminary source finding should not be gated on every later authority/observation source**.

**Final headline:** What can this AI actually cause?  
**Final deck:** Start with the findings your sources can show. Go deeper when you need an evidence-backed decision.  
CTA: Enterprise POC; Try HAIEC via MCP; real sample report.

## 4. User-directed design correction: LIGHT FIRST with retained dark contrast

**Mandatory behavior:** New, anonymous visitor sees actual light page from first paint. Explicit saved dark choice persists over reload/navigation. Existing authenticated workspace theme settings must not silently override a visitor's deliberate choice or conflict with public selection.

**Implementation guidance grounded in source:**
1. Coordinate existing haiec-theme / WorkspaceThemeSync / user_preferences explicit setting. Do not introduce a second drifting storage key, or assume the existing global light-theme.css class remapper makes marketing light by default.
2. Ensure SSR/early theme application defaults to light before first visible paint, using a server-readable explicit cookie or safe early sync strategy consistent with CSP/nonce. Existing root <html> lacks data-theme on initial render; fix this without hydration flash.
3. Use semantic public tokens for header, footer, sections, borders, muted text and CTAs instead of applying blind global inversions. Current AutoHideNavigation and some home components are fixed dark. Preserve dashboard ws-* and deliberate code terminal dark panel in either public theme.
4. Current HeroArchitectureExplorer **already has light cards**. Harmonize its outer frame and surrounding typography; 3×2 peers remain equal visual weight and independently selectable in both themes. Do not require another static SVG duplicate.
5. Adapt AuthorityPlanesFigure and SampleMapPreview for light theme without losing status semantics. If unavoidable, intentionally frame a readable dark technical inset, not inconsistent dark website sections.
6. Use forest green/navy/mint existing brand palette; spacing and shadows restrained; no exaggerated badges, 3D/stock scenes, fake product charts or fake risk counters.
7. Mobile 390: clear H1, primary Enterprise and agent CTA, peer hero responsive layout, no overfull award/integration rail; 768 and 1440 tests; keyboard, screen reader, hover/focus, reduced motion, zero-JS meaningful page text.
8. Keep AmbientMount and Reveals only if performant; no opacity-hidden content without IntersectionObserver and no extra autoplay simulated scans. Scroll motion can be subtle; purposeful animation is existing ProductShowcase + ScenarioPlayer.
9. Trust/award: preserve actual competition recognition and linked evidence; do not turn it into independent security certification or broad false 100% product accuracy.

## 5. No-regression technical and menu requirements

**Required component preservation list:** HeroFlowDiagram → HeroArchitectureExplorer, ProductShowcase, ScenarioPlayer, SampleMapPreview, AuthorityPlanesFigure, FrameworkArtifactGrid, RevealSection, AmbientMount, TrackedLink and global chat/consent/feedback architecture.

**CTA preservation list:** /docs/agent-integration, /enterprise, /sample-reports/kestrel, /sample-reports/master-assurance, /sample-reports/kestrel/constellation, /developers/agents, /sample-reports/forensic-case/autonomous-traffic-protection, /reports/agentic-assurance-sample-report.html, /handbooks/ai-forensics-telecom-edition.html, /awards/munichtech-expo-2026.html, /research/hugging-face-agent-breach, /developers/frameworks, npm packages and original GitHub App/Action docs. Where deep targets are protected/auth-gated, label correctly.

**No new homepage menu top level.** Continue the global nav Resources→Learn→Assurance Methodology addition from earlier review, Platform and Enterprise routes preserved; Pricing top-level preserved. Homepage can link /products, /assurance and /methodology naturally, not invent new pages.

**SEO:** app/layout.tsx root category metadata and OG; data/seo-page-intents.ts already owns homepage search intent **AI agent security assessment**. Update manifest H1 guidance to match actual approved headline; don't create duplicate H1, raw image-only copy or ungrounded “AI assurance detects everything” claims. The existing native semantic six-card hero is already discoverable to search; preserve. No need for PNG binaries.

## 6. Focused implementation sequence for Devin / approved website change

1. Refresh actual latest HAIEC Main **and** Common Repo; audit source-level homepage sections, original CTA events and assets (1,354-line page). Previous static-hero instructions are stale; **interactive hero is already present**.
2. Fix public **light first paint**, header/footer and persisted theme, with SSR/CSP safety and retained authenticated dashboard functionality.
3. Strengthen hero copy/CTA hierarchy and visual harmony; keep original conversion event wiring. Existing six capability explorer stays.
4. Add one small static/interactive first finding source-path illustration with explicit fictional label; do not introduce backend requests, false receipts or a new scanner.
5. Adjust editorial section hierarchy, accent/spacing and existing visually dark components as necessary; preserve all substantive content and link destinations in place, relocated or accessible disclosures.
6. Make real ProductShowcase and ScenarioPlayer visibly purposeful/accessible. Do not delete or replace animations to fit the prototype.
7. Verify published sample report source, award/recognition framing, external incidents and final CTA; align SEO H1 metadata.
8. Focused lint/typecheck on changed files, actual 390/768/1440 screenshots in both public modes, anonymous first-paint light, persisted dark, header nav/footer dropdown, hero 6 clickable peers, terminal, scenario controls, sample map, five planes, links/TrackedLink events, no-JS content and reduced-motion. No broad unrelated test suite or new engine work.
9. Once separately approved, one HAIEC PR to Main, auto Vercel deploy, verify READY/live page with recorded screenshots and exact commit in Common Repo.

**Not a code deployment:** Only this plan and its companion HTML preview and repo tracker additions are committed in this sequence. Use [Seven-page preservation requirements](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md), [Brand standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md), [Prior hero asset handoff](design-references/hero-architecture-2026-10-19/light-theme/WEBSITE-PLACEMENT-AND-DEVIN-HANDOFF.md), [Current DAI user clarification](DAI-POLICY-GRANTS-DELEGATION-TRUSTED-FACTS-ADMISSION-DEEP-VERIFICATION-2026-10-20.md).
