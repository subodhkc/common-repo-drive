# HAIEC Core Capabilities | Six independent jobs, one evidence-bound platform

Date: 2026-10-20. Page #18. Planned URL: /platform/capabilities. Common Repo research and interactive design only.

Companion HTML: [Six Core Capabilities](design-references/core-capabilities-2026-10-20/six-independent-capabilities-interactive.html)

## Title and placement

**Page title and H1 theme:** "Six capabilities. One clear view of consequential AI."
**Menu title:** "Core Capabilities"; place **"Explore All Six Capabilities"** as the first link under **Platform > Core Capabilities**, above System Constellation, DAI, AI Security, Runtime Security Testing, Evidence, Assurance Controls, Assurance and AI Inventory. Keep the Platform top-level destination and all existing submenu entries unchanged.

SEO title: "Six AI Assurance Capabilities | HAIEC Core Capabilities". Canonical proposed: https://www.haiec.com/platform/capabilities. Meta: "Explore HAIEC Discover, Evaluate, Authorize, Monitor, Protect and Verify capabilities for consequential AI systems, with deterministic evidence, delegated authority and bounded operating proof."

Deck: "Discover what your AI can reach. Evaluate evidence. Authorize consequential choices. Monitor connected changes. Protect where controls are integrated. Verify exact decisions and evidence. Choose the question you need to answer, without treating every step as a prerequisite."

**Decision:** Build one SEO-readable standalone overview page first, containing six substantial public sections with stable deep-link anchors #discover, #evaluate, #authorize, #monitor, #protect and #verify and one interactive explorer. Do not immediately generate six thin near-duplicate landing pages or crowd the menu with six more entries. If and when significant unique case studies and source proof justify separate search intent, future candidate URLs are /platform/capabilities/discover and equivalent per capability. These are *not* currently implemented URLs.

## Source review (2026-10-20)

HAIEC production source: subodhkc/haiec-website, branch Main.
- app/platform/capabilities/page.tsx: **absent**, as is app/capabilities/page.tsx.
- components/homepage/HeroArchitectureExplorer.tsx: six equal capabilities with exact grounded customer questions, one supported output and customer CTA each. Separate DAI inspector is not a seventh peer capability. Preserve homepage explorer below hero per prior design decision.
- app/platform/page.tsx: existing three pillars and a large feature matrix. This page should introduce core jobs, not duplicate the new six long explainers.
- components/platform/WorkflowMatrix.tsx: eight workflows (connect, inventory, code, authority, governance, operations, controls, reports) are different orchestration jobs, not eight core capabilities.
- components/AutoHideNavigation.tsx: Platform > Core Capabilities group currently holds the narrower technical pages, but not a six-capability overview.
- app/how-it-works/page.tsx: usage journey has its own define/connect/collect/assure/verify/monitor sequence; six capabilities are independent and not a mandatory pipeline.
- app/assurance/page.tsx, app/delegated-action-integrity/page.tsx, app/assurance-controls/page.tsx and app/ai-inventory/page.tsx: existing deep content owners. Add links; do not replace them.
- lib/mcp/capability-guide.ts: implemented, partial and evidence-dependent goal mappings, with platform capability readiness independent of per-tenant permissions, sources, preflight and scopes. Canonical MCP tool registry owns actual operations; an AI IDE guides the workflow, HAIEC creates canonical evaluated truth.
- HAIEC Common Repo source-based capability matrix contains the six exact families and important constraints: Discover (qualified source/registries), Evaluate (rules and evidence), Authorize (human decision is not target grant), Monitor (only connected telemetry), Protect (customer-integrated PEP/guard and target readback), Verify (exact persisted report and integrity).

## Six public explanations

| Capability | Customer question | Primary supported input | Distinct output and boundary | Existing feature destination |
| --- | --- | --- | --- | --- |
| Discover | What consequential action can the system reach? | AI Systems, connected verified source, agents/tools and qualified code | Source-capable action map or inventory; registered is not necessarily proven, reachability not execution | /ai-inventory, /sample-ai-action-access-map |
| Evaluate | Does the action match the supported operating policy? | Canonical qualified source/evaluation rules, policy, DAI and control evidence where applicable | Deterministic scoped finding/evaluation; source finding need not wait for five planes; formal dispositions always bounded | /assurance, /methodology |
| Authorize | Who may make a material decision? | Approved operating envelope, role/delegation, configured approvals | Recorded scoped human decision if needed; not same as effective IAM grant or target-side permit; fixed rules may determine choice | /delegated-action-integrity, /enterprise |
| Monitor | What changed in connected sources? | Evidence binder, qualified OTLP/log/structured source, baseline | Actual source-health or drift observation; received != evaluated; replay != live | /evidence, /products/compliance-twin |
| Protect | Can the selected consequential action be mediated? | Integrated guard, customer-side execution point, authenticated control event, effect witness | Authorized hold/stop/recovery where integrated; control catalog, approval or dashboard status do not prove target blocking | /kill-switch, /assurance-controls |
| Verify | Can an independent reviewer inspect the exact outcome? | Persisted evaluation identity, issued report/package/receipt and digest | Scope-bound report, Audit, verification when issued; cryptographic integrity not a universal certification or independent source truth | /sample-reports/kestrel, /verify |

Five independent evidence views: Requested, Policy Authorized, Effectively Granted, Code Capable and Observed. Delegated Action Integrity is a *cross-cutting comparison* of business decision rights against relevant policy/task/source/grant/observation, not another plane or a seventh capability. Three pillars Understand, Assure, Govern & Operate are navigation framing, not pricing axes or mandatory steps.

## User experience specification

1. Premium light-first hero with outcome-led headline and balanced equal six-capability visualization. H1 copy above; CTA Explore Six Capabilities (#capability-explorer), secondary Connect HAIEC MCP (/docs/agent-integration), evidence proof sample report. No permanent emphasis on Protect or Monitor or any other.
2. Interactive six-capability chooser. The selected dossier shows: precise customer question, realistic agent/action path, evidence owner/source, what it establishes, next decision, limitation and URL. Optional scenario switch: financial recipient decision, Station 217 factory record and telecom protected operation. Each scenario is clearly grounded as an illustrative operating example, not a live customer outcome. No fake green success/pass badges or telemetry counters.
3. All six standalone H2 anchor chapters are present as unhidden static HTML even if JavaScript is disabled. Each shows business value, source, bounded output and real deep link. Stable anchors support direct links, SEO and meaningful documentation links.
4. Three organizational pillars below: Understand (Discover), Assure (Evaluate and Verify), Govern & Operate (Authorize, Monitor, Protect). Mapping is broad; capabilities can overlap/operate independently.
5. Five evidence view explainer and cross-cutting DAI: a source finding can be useful immediately without requesting all sources; a full authoritative conclusion is limited to its evaluated scope.
6. Run it: workspace, verified GitHub source, compatible MCP and REST API; four-word agent goal "Run HAIEC AI Assurance"; it requires secure Bearer key, haiec_preflight and actual authorized scope/consent. Runtime/testing writes require authorization.
7. Frequently asked questions on mandatory order, per-tenant availability, monitoring, enforcement, human approval, reports and developer packages, plus enterprise POC CTA.

**Avoid content duplication:** The /products catalog contains independent AI AppSec/MCP Isolation/LLMVerify packages and other specialized services. Those are *not* identical to these six HAIEC platform capabilities. /assurance owns evaluation detail; /delegated-action-integrity owns deep DAI; /assurance-controls owns catalog/evaluation differences; /how-it-works owns customer journey; /platform owns breadth.

## Accurate boundary/copy rules

- No universal "all six fully activated for every client" assertion. Platform goal readiness is different from user authorization, connected sources, paid entitlements, tenant source and readiness. Phrase "available when connected/configured" where applicable.
- Do not equate monitoring config, emitted trace, received event, evaluated evidence or verified target effect.
- Real runtime protection only after native customer-side operation is installed and actual effect evidence supports claim. Authorize is a human permission/governance decision, not target mediation.
- A deterministic source fact may be a valuable finding before policy/IAM/telemetry. Do not make a blanket unresolved status for all views.
- No fake customers, unsourced effectiveness metrics, invented packages, unverified badges or certification.
- No em dash, internal editorial labels or phrases like "fictional example" on customer-facing page.
- Light-first and optional dark, no duplicate Next.js navbar/footer when implemented; reduced motion, keyboard control, no automatic animated carousel, 390/768/1440 responsive; internal links remain real.
- SEO all six static chapters, one H1, unique H2 anchor IDs, semantic internal links; no duplicated canonical paths.

## Devin implementation handoff (future authorization only)

Read live HAIEC Main, recent homepage HeroArchitectureExplorer and source-capability matrix. Create server-rendered /platform/capabilities route with six complete static anchor sections plus a small accessible interactive client explorer. Add **one** menu item Platform > Core Capabilities > Explore All Six Capabilities as the group's first child. Preserve existing links/homepage explorer and How It Works. Update public registry, sitemap, llms and contextual Platform links, using exact owner pages and truthful capability language. Focused type/lint, links, mobile contrast, keyboard/deep-link and reduced-motion checks; no broad unnecessary suites. **Do not commit, push, PR, merge or deploy HAIEC website code without a new explicit instruction.** This task authorizes Common Repo planning and HTML only.

Related plans: HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md; WEBSITE-PLATFORM-AND-PRODUCTS-PAGE-ENHANCEMENT-PLAN-2026-10-20.md; WEBSITE-HOW-IT-WORKS-CONSEQUENCE-TO-DECISION-UX-SEO-DESIGN-PLAN-2026-10-20.md; PUBLIC-WEBSITE-NAVIGATION-PLACEMENT-AND-METHODOLOGY-CROSS-LINK-CONTRACT-2026-10-20.md.
