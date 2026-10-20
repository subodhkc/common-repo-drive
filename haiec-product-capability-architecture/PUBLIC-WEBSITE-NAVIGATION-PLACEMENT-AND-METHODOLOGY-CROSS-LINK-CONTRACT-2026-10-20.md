> **2026-10-20 NEW /solutions BUYER HUB:** [Page plan](WEBSITE-ENTERPRISE-SOLUTIONS-OVERVIEW-OUTCOME-LED-UX-SEO-NAV-PLAN-2026-10-20.md) and [interactive design](design-references/solutions-2026-10-20/enterprise-solutions-outcome-led-interactive.html). `/solutions` is **not** a currently implemented route. Current `AutoHideNavigation` has top-level Solutions dropdown **button with no href** and three children Enterprise, Assurance Firms and Telecom & O-RAN. On authorized future implementation, add **Solutions Overview → /solutions** as first child, preserve button hover/tap and mobile navigation, register new canonical route in the public-site registry and sitemap/llms, link footer. Do not replace existing three destination routes or conflate Advisory Partners referral with firm professional assurance.

> **2026-10-20 /docs/github-integration menu:** [Guide enhancement plan](WEBSITE-GITHUB-INTEGRATION-GUIDE-SOURCE-VERIFIED-INTERACTIVE-UX-PLAN-2026-10-20.md) + [light/dark interactive design](design-references/github-integration-2026-10-20/github-app-to-verified-source-assurance-interactive.html). The header already contains **Developers → Run HAIEC → GitHub Integration**, pointing to the canonical existing route `/docs/github-integration`. Do not add another entry or an alternate URL. Keep /developers as hub, /docs/guides/connected-github-assurance as deeper source/API runbook, and /github/setup as post-install flow. SEO remains installation, verified Source Assets and remote assurance.

> **2026-10-20 existing developer navigation:** `/developers` remains the canonical developer hub. Current header Developers > Packages & Tools > API & SDKs already links to it; Developers > Run HAIEC already links to MCP integration, Assurance API and GitHub. The [source-grounded /developers redesign](WEBSITE-DEVELOPERS-PAGE-MCP-FIRST-UX-COPY-INTERACTIVE-QUICKSTART-PLAN-2026-10-20.md) and [interactive developer reference](design-references/developers-2026-10-20/developers-ide-to-deterministic-assurance-interactive.html) need no new global menu item. Preserve all current docs/package/capability-catalog destinations; add internal page anchors instead.

> **2026-10-20: New Learn page navigation.** [How LLMs & AI Agents Work, model/agent/HAIEC teaching flow](WEBSITE-HOW-LLMS-AND-AI-AGENTS-WORK-OBSERVABILITY-HAIEC-GAP-AWS-RESEARCH-PLAN-2026-10-20.md) and [interactive page](design-references/how-ai-systems-work-2026-10-20/llm-vs-agent-visibility-consequences-interactive.html) propose **Resources → Learn → How LLMs & AI Agents Work** directly after existing **How HAIEC Works**. Separate purposes: `/how-it-works` shows HAIEC customer journey; `/learn/how-ai-systems-work` explains AI system architecture and visible boundaries. Do not create another top-level Platform item or duplicate ISAF v2, DAI or other capabilities. Route registration requires a later authorized HAIEC implementation.

> **2026-10-20 ISAF v2 NAV UPDATE:** [Dedicated ISAF v2 research framework page, manuscript plan and URL](WEBSITE-ISAF-V2-FRAMEWORK-PUBLIC-PAGE-MANUSCRIPT-RELEASE-UX-SEO-NAV-PLAN-2026-10-20.md). **Resources → Learn → ISAF v2 Framework**, immediately after Assurance Methodology, distinct from statutory Regulation and Framework catalogs. Do not rename `/isaf`: that is the ISAF Logger developer package route. New route `/frameworks/isaf-v2` is not yet live and requires registration, SEO intent and publication-safe resources when implemented.

> **2026-10-20 NEW NAV DIRECTION:** [Assurance Controls & Evidence signature page](WEBSITE-ASSURANCE-CONTROLS-AND-EVIDENCE-SIGNATURE-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md) adds one proposed **Platform → Core Capabilities → Assurance Controls** menu entry **after planned DAI, before existing Assurance**. The existing `/controls` remains the public framework control reference/browser and may be linked via Resources → Regulations & Frameworks as “Control Registry” without creating a duplicate canonical/parent hub. New route in public site registry and SEO intent owner only when actually implemented. [Design reference](design-references/assurance-controls-2026-10-20/assurance-controls-and-evidence-dual-theme-interactive.html). 

> **CURRENT SOURCE UPDATE (2026-10-20):** HAIEC Main now **does** include Resources → Learn → Assurance Methodology in `components/AutoHideNavigation.tsx`. The historical “missing” statement below reflects the older Main reviewed at the time; **do not add a duplicate**. New [DAI signature product page and nav plan](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md) proposes exactly one Platform → Core Capabilities → Delegated Action Integrity (DAI) entry **after System Constellation**. No dedicated public DAI route exists yet. This change is proposal-only and should be reconciled against live Main during implementation.

# HAIEC Public Website — Navigation Ownership & Methodology Placement

**Reviewed 2026-10-20.** **PLANNED ONLY** — no Main navigation changes. This is the nav-level companion to the sequential [Methodology page plan](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md), grounded in HAIEC Main \`e4e46c36\`.

## Source reality

- \`components/AutoHideNavigation.tsx\`: **primary desktop/mobile navigation**: Platform, Solutions, Developers, Resources and Pricing. Resources → Learn currently lists What is HAIEC, How HAIEC Works, Documentation and Research, but **not Methodology**.
- \`data/public-site-registry.ts\`: canonical \`/methodology\` route **already registered** as \`resources\` and therefore also appears in the registry-driven **footer** (\`components/Footer.tsx\`). Avoid duplicate footer rows.
- \`data/seo-page-intents.ts\`: /methodology owns **AI assurance methodology** and Resources parent hub. Preserve this single canonical route.
- \`/products\` and \`/controls\` exist as public route implementations **but are not registered** in \`PUBLIC_SITE_REGISTRY\` at this Main snapshot. Neither is currently a top-level primary nav item in \`AutoHideNavigation\`; their cross-link/route-ownership reconciliation is distinct from this methodology wave.
- \`/csm6\`, \`/isaf\` and \`/docs/agent-integration\` are routes in other public content areas, but are **not rows in the registry** as inspected; some links are handwritten in the primary menu. Don't infer that “not in registry” means the route doesn't exist.
- \`/enterprise/architecture\` is already a canonical deeper interactive explainer; not a replacement for /methodology and not to be duplicated.

## Precise recommended placement (low change, high leverage)

| Customer journey | Desktop + mobile placement | Destination | Owner/action |
|---|---|---|---|
| **Why trust HAIEC's conclusion?** | **Resources → Learn → Assurance Methodology**, immediately after **How HAIEC Works** and before Documentation | **/methodology** | Add **one** entry in \`AutoHideNavigation.tsx\` using \`routeFor('methodology','/methodology')\`, description \`Evidence qualification, delegated authority and proof boundaries\`, icon FileCheck/BookOpen. Same shared data renders desktop and mobile. |
| **What does the product do?** | Existing Platform → Core Capabilities → **Assurance** | /assurance | Keep; add **“How HAIEC proves it”** contextual link in Assurance body to Methodology |
| **What can code/agents reach?** | Existing Platform → **System Constellation** | /ai-action-access-map | Keep product, link to Methodology → Reachability section for qualification semantics |
| **Where does evidence come from?** | Existing Platform → **Evidence** | /evidence | Keep; link to Methodology → Evidence Qualification section |
| **Which controls are proven?** | Current /controls page is a separate framework registry and assurance proof concept | /controls | Avoid listing as “installed control enforcement” in Platform menu; after two-catalog design is approved, evaluate one precise **Controls & Evidence** entry under Platform, otherwise use Assurance contextual links. Reconcile registry/index/sitemap owner first. |
| **Which HAIEC tools and offers are available?** | Platform dropdown: optional bottom link \`Explore All Products\` after global IA pass | /products | Do not add a new top-level Product tab this wave. First reconcile missing public registry entry and crosslink from Platform. |
| **What does an Enterprise POC buy?** | Existing Solutions → For Organizations → **Enterprise** and primary POC CTA | /enterprise | Keep; add proof-method secondary link only |
| **How can an agent run HAIEC?** | Existing Developers → Run HAIEC → **Agent Integration (MCP)** | /docs/agent-integration | Keep; the Methodology CTA says **Run HAIEC AI Assurance** and explains credentialed preflight |
| **How does research inform the method?** | Existing Resources → Learn → **Research** | /research | Keep. Crosslink CSM6 and published ISAF research as clearly marked context. **Do not create ISAF2 published nav entry**; ISAF Logger remains separate utility /isaf. |

### Why no new top-level “Methodology” nav
The primary navigation is already conversion-oriented. Methodology is a **trust and scientific explanatory destination**, not a separately sold module. It belongs in Resources but should be crosslinked by two clicks or fewer from Assurance, Controls, Platform and Enterprise. The H1 and technical narrative are unique; avoid competing /methodology-v2, /why-deterministic or /proof-method routes.

### Exact future implementation example (illustrative, not applied)
In the **Resources / Learn / items** array inside \`components/AutoHideNavigation.tsx\` immediately after How HAIEC Works:
\`\`\`tsx
{
  name: 'Assurance Methodology',
  href: routeFor('methodology', '/methodology'),
  desc: 'Evidence qualification, delegated authority and proof boundaries',
  icon: FileCheck,
},
\`\`\`
The icon is already imported in the same file. Use the registry route, not a new divergent string.

### Acceptance checks
- Resources → Learn → Assurance Methodology visible/keyboard reachable on desktop and mobile.
- Footer remains one registry-derived Methodology item.
- Methodology appears exactly once per dropdown and canonical /methodology is unchanged.
- Assurance, Controls and Platform contextual links match their respective claim owners; no new top-level menu.
- Preserve six independent platform jobs, Developer MCP entry and primary POC CTA.
- Recheck latest Main before implementation; do not replace newer navigation work.
