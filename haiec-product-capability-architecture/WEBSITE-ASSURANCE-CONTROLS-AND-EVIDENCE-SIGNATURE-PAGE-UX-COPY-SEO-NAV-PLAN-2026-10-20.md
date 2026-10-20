> **2026-10-20 CUSTOMER COPY ADJUSTMENT:** [Assurance Controls interactive HTML](design-references/assurance-controls-2026-10-20/assurance-controls-and-evidence-dual-theme-interactive.html) has been polished to remove internal banners, fictional/demo-status labels and em dashes in visible content. Keep accurate claim limits, but phrase them as product benefits, specific inspection questions and customer decisions, not design-stage disclaimers. The next ISAF v2 research framework page follows the same presentation standard. [Plan](WEBSITE-ISAF-V2-FRAMEWORK-PUBLIC-PAGE-MANUSCRIPT-RELEASE-UX-SEO-NAV-PLAN-2026-10-20.md).

# HAIEC — Assurance Controls & Evidence: Dedicated Product Page, Design, Catalog Accuracy, SEO, Menu and CTA Plan

**Reviewed 2026-10-20.** **Production:** not implemented. **Proposed canonical URL:** https://www.haiec.com/assurance-controls. **Companion complete interactive concept:** [Assurance Controls & Evidence — light/dark HTML](design-references/assurance-controls-2026-10-20/assurance-controls-and-evidence-dual-theme-interactive.html). Source owner: \`subodhkc/haiec-website\`. Canonical planning destination: this common repo.

**User request:** Make the modern HAIEC assurance control catalog, actual control visibility/evaluation, evidence, operating distinctions and value obvious with a premium standalone public page; decide header placement; follow same page-by-page program as DAI. **Controlling product direction:** first findings should appear when supported. Do not impose a perfect-evidence hurdle, use blanket UNKNOWN as the UX headline, or assert all controls are active.

## 1. Independent product and information-architecture decision

**There IS an existing public \`/controls\` route** (important correction to the gap statement). Its current \`app/controls/page.tsx\` H1 is **“Know which AI controls have evidence, and which still need proof.”** It already contains a **two-catalog distinction** and “Cataloged ≠ Implemented ≠ Evaluated ≠ Effective” explanatory section. However, most of that page is still a client-rendered **framework controls** search/filter registry (public \`/api/controls\`; backed by mapped requirements, with static fallback). It does NOT provide a dedicated, rich public explanation of HAIEC's **separate 45-entry assurance control catalog**, its **system-specific visibility projection**, **Control Proof read journey**, tests, approvals, results, replay and separate operating-effect boundary. Those exist largely in the authenticated \`ControlCatalogPanel\` and related read models.

**Therefore:** Build a distinctly positioned **signature Platform product page** at \`/assurance-controls\`. **Preserve \`/controls\`** as the framework reference/browser with functioning search, filters, paging, existing links and routes. Make cross-links in both directions. Never claim the new page is a second checkout SKU or replacement for \`/controls\`.

**Exact buying/UX idea:** “Most companies can show a control list. HAIEC helps teams investigate which control objective has a supported finding, what was actually tested, what approval or result was recorded, and—only when observed at the connected target—whether a safeguard operated.”

**Approved product identity:** Evidence-Bound Assurance · Deterministic AI Action Assurance · High assurance in every consequence. **No LLM scoring another LLM** as canonical assurance.

## 2. Source verified against current Main

| Product source | Actual verified role / caution |
|---|---|
| \`app/controls/page.tsx\` blob \`b1fcb55ef27bdd688929c696504d5d1f0975a984\` | Real live-page source exists. Already says 2 catalogs and boundary; primary explorer is framework registry, not authenticated HAIEC control lifecycle |
| \`app/controls/layout.tsx\` blob \`1d89e092763a9faedf7a5b3e8708c818fd0d7899\` | Canonical /controls metadata/OG exists; no collision allowed |
| \`app/evidence/page.tsx\` blob \`b2c923a3299b23f172a566ffd9e13fc460d627f3\` | Evidence provenance page distinct from control evaluation; don't duplicate or replace |
| \`lib/compliance/control-registry.ts\` blob \`4914cdec53a3f578f9e6598d13baa2f7bf202f78\` | Different **framework reference** catalog (prior source audit: 88 entries across 9 frameworks as static reference). These are NOT 45 HAIEC controls |
| \`lib/control-visibility/catalog.ts\` blob \`c659416e523363938d31342f88e8eae37fd5457e\` | **45 total catalog entries = 42 generic profiles + 3 existing specialized competition Control Tests C7/C9/C16**. **15 launch priorities** tagged as planning metadata. Family labels \`TMF, G, S, A, R, L, E, P\`. Older comment “45 profiles + 3 tests” is contradicted by actual array length; prefer explicit correct derived array/count |
| \`lib/control-visibility/types.ts\` blob \`50f9145d4fbef78cb74f48b61fb0830fd4260831\` | **11 control IDs implemented for visibility projection** (\`A02,A03,A04,A05,A06,A08,E01,E03,E05,R02,R03\`). **Visibility** states: \`DETECTED_FINDING\`, \`NO_FINDING_OBSERVED\`, \`COVERAGE_INSUFFICIENT\`, \`NOT_ASSESSED\`. A visibility state is neither full native **Control Test** verdict nor U5 assurance disposition |
| \`lib/control-visibility/control-proof.ts\` blob \`73179b0cb8859fa253c3e2e5dc18fe51b5ad38bf\` | **Read-only** existing-owner projection: catalog → visibility/qualified observation → evidence → TestSpec and approvals → recorded legacy/native results → replay/response, where backed. Does not execute tests or invent missing stores; \`PENDING_ACTIVATION\` is reported for unactivated native-result/approval stores |
| \`components/ai-inventory/ControlCatalogPanel.tsx\` blob \`b49b4b27d1fb839f5a5cd1ddbde1958ce4c47e3c\` | Authenticated system workspace already exposes richer system-scoped catalog, visibility, proof and operating context; **never expose tenant-specific reads on new anonymous page** |
| \`app/api/controls/route.ts\` blob \`d26bf9059daf57340c2c5b4700506a3df581c2c1\` | Public framework registry listing, **not** canonical scoped evaluation |
| \`components/AutoHideNavigation.tsx\` blob \`8f4082e61dc88dfd178e2205047cbc122258e902\` | Platform dropdown has System Constellation, AI Security, Runtime Testing, Evidence, Assurance, AI Inventory; **DAI proposed next**, not implemented at time of source check |
| \`data/public-site-registry.ts\`, \`data/seo-page-intents.ts\` | No registered new assurance-controls route; both must be updated on implementation; existing /controls route not currently registered, so don't misroute canonical metadata |
| \`app/assurance/page.tsx\` / \`app/methodology/page.tsx\` | Canonical evaluation philosophy and proof limitations; keep separate |

**Interpretation:**
- **Cataloged**: control question defined, not evidence of implementation.
- **Projected visibility**: bounded detector/read model, does not establish an executed control test or a pass.
- **TestSpec / approval / recorded result**: specific control-run lifecycle and attestations only when actual eligible source exists; \`PENDING_ACTIVATION\` isn't a signed result.
- **Operating and effect evidence**: actual in-path enforcement/trigger/action/effect are distinct; a detected condition or governance receipt does not automatically prove installed prevention.

**Important first-finding nuance:** A **source-visible candidate** or code-exposed potential risk can be a useful investigation lead before control-specific evidence is complete. But do not label an operation-level candidate as the canonical \`DETECTED_FINDING\` state: exact semantics for that state require a confirmed matched observation. **UX can show “Potential action path to investigate” adjacent to “Control visibility not yet established” without suppressing the lead.**

## 3. Product page positioning

**Suggested H1:** **“Don't just list AI controls. Know what they actually establish.”**

**Eyebrow:** \`ASSURANCE CONTROLS & EVIDENCE\`

**Deck:** “HAIEC connects consequential AI action paths with defined control questions, source-linked findings, test evidence and operating proof—so teams can distinguish a control that exists on paper from one with a qualified result, and from a safeguard shown to operate at the target.”

**Value summary:** \`Find the risk early. See the control evidence. Make an accountable decision.\`

**Contrasting buyer concern:** “A governance spreadsheet says ‘control present.’ But did that control evaluate this agent's action, and did anything actually operate when it mattered?” Position against insufficient **claims**, not against vendors who may already offer verification. No category-wide “only HAIEC” claims or unverified superiority.

**Outputs to sell, in this order:**
1. Actionable source/authority/connected observation **finding**.
2. Control objective and **relevance** for that exact consequence.
3. Qualified **visibility** and what scan/producer/source supports (including coverage).
4. Exact **TestSpec, approval, recorded result and replay** if they actually exist.
5. Distinct **operating evidence** of path binding, trigger, mediation and target effect where integrated.
6. Clear **next recommended action** or escalation, rather than blank UNKNOWN verdict.

**Source-of-truth text:** the 45-entry catalog is broader than the subset of 11 visibility projections; not every catalog entry supports a runnable Control Test today. 15 launch priority is not active installation. No global coverage or prevention promise.

## 4. URL, SEO, menu and relationship to existing catalogs

**Canonical URL:** \`/assurance-controls\` (separate from \`/controls\` framework browser and \`/evidence\` evidence provenance). Do not create \`/controls-assurance\`, \`/ai-controls\` duplicates or another \`/controls\` canonical.

**SEO intent:** \`AI agent assurance controls\`, \`AI agent control evidence\`, \`AI control effectiveness verification\`, \`control assurance for AI agents\`; provisional editorial intents only.

**Proposed title:** \`AI Agent Assurance Controls & Evidence | HAIEC\`.
**Meta description:** \`Explore HAIEC's assurance control catalog, qualified AI action findings, control visibility and recorded test evidence. Distinguish documented controls, evaluated outcomes and verified operating effects.\`
**H1 one, SSR HTML:** as above; unique /controls retains framework registry intent. \`/evidence\` retains evidence provenance intent; /assurance retains canonical evaluation intent.

**Menu recommendation:** **Platform → Core Capabilities → Assurance Controls**, **after Delegated Action Integrity (DAI)** (once DAI is implemented) and **before Assurance**. Existing System Constellation is first. Avoid adding seventh selectable core capability. **Precise group concept:** “System Constellation” (what an agent can reach) → “DAI” (who may choose) → **“Assurance Controls” (what control question and proof applies)** → “Assurance” (bounded formal evaluation). The proposed DAI item and this item should not crowd mobile dropdown; preserve keyboard and all current navigation items. \`/controls\` may gain a **Resources → Regulations & Frameworks → Control Registry** link if this improves discovery and does not duplicate existing footer/index ownership; one public canonical link minimum.

**Implementation source owners:**
- \`components/AutoHideNavigation.tsx\` + \`data/public-site-registry.ts\` new \`assurance-controls\` id, platform group, canonical indexable, llms/sitemap public, footers per actual registry rules.
- \`data/seo-page-intents.ts\` separate page role/intent with \`parentHub:'/platform'\`.
- \`app/assurance-controls/page.tsx\` SSR marketing content + bounded client interactive example; route-independent static data must not pull private control stores into public bundle.
- Existing \`/controls\` hero should cross-link to new page as “Explore HAIEC Assurance Controls”; retain live framework search, categories, pagination, deep links and prior FAQ.
- Existing \`/evidence\`, \`/assurance\`, \`/methodology\`, \`/enterprise\`, \`/delegated-action-integrity\` (once created), \`/platform\`, \`/sample-reports/kestrel\`, \`/docs/agent-integration\` contextual links.

## 5. Complete UX structure and native-animation storyboard

**P0 — Hero: A control on paper vs actual consequence**
- Main H1 and deck, primary **Scope an Enterprise POC** \`/enterprise\`, secondary **Explore Control Proof** \`#control-proof-lab\`, proof link **See a Real Assurance Report** \`/sample-reports/kestrel\`.
- Right-side **interactive Control Proof Lens**: fictional assistant→tool→refund service path and a named objective, with **four selectable conceptual lenses** \`Catalog\`, \`Visible finding\`, \`Recorded test\`, \`Operating effect\`. Each changes what is and isn't established and the next action. Keep independent no-finding/source signals; do not fake test receipt.
- Show a real-world-language summary visible on first paint: **“Potential financial mutation path worth investigating”**, even when the formal control's visibility projection is incomplete.
- Light-first public theme, gentle path motion, no fabricated live run count, badges or synthetic production data claims. One high-value illustration, not another generic catalog table.

**P1 — The evidence distinction in one intuitive graphic**
- Central mantra: **Cataloged ≠ Implemented ≠ Evaluated ≠ Effective**.
- Four **independent proof questions**, not a required maturity funnel for every finding. Use accessible CSS/HTML, optional detail toggles and an exact meaningful control question.

**P2 — The interactive Proof Lab (signature)**
- One **fictional source scenario**: AI refund agent can reach recipient-changing handler; an approved policy limits recipient to original method; source capability is useful first lead. Three alternative scope/evidence interpretations:
  1. **Potential source path:** candidate exposure from code; no claim of full control match or actual event.
  2. **Qualified control finding:** exact applicable policy/source comparison supports a detected mismatched capability (when fully matched).
  3. **Recorded test / operating evidence:** a specific test may establish its scoped verdict; target prevention needs separately integrated effect witness.
- Show **who/what/source scope**, **Control objective**, **Visibility / Test / Effect** separately, and buyer's next action. **Do not set all green automatically**.
- Include “No finding observed (bounded scan)” as **not evidence of no risk** and “coverage needs follow-up” rather than a general empty result.

**P3 — HAIEC catalog families**
- One catalog source summarized as **45 entries total (42 profiles + 3 C7/C9/C16 tests)**, **15 prioritized**, **11 implemented control-visibility projections**. Do not treat 45 as tests run, 15 as features released or 11 as deployed target protections.
- Eight source-defined families: \`G Governance & lifecycle\`, \`S Application & tool security\`, \`A Agent authority & delegation\`, \`R Runtime & consequences\`, \`L LLM safety & reliability\`, \`E Evidence & audit\`, \`P Responsible AI\`, \`TMF Specialized Control Tests\`.
- Selectable family categories in HTML concept with one representative control question each; **this is an illustrative editorial sampler**, not a full live per-tenant catalog or dynamic count fabricated in front end. “Explore complete catalog in your workspace” authenticated path if valid (check before using).
- CTA “See Framework Control Registry” \`/controls\`, distinctly labeled as external framework mappings.

**P4 — Four actual Control Visibility states**
- \`DETECTED_FINDING\`: a confirmed, fully semantically matched bounded observation for exact control objective.
- \`NO_FINDING_OBSERVED\`: completed bounded eligible scan found none; **not a pass**.
- \`COVERAGE_INSUFFICIENT\`: evidence/producer/source basis is incomplete for that exact check; some candidate context may still be useful.
- \`NOT_ASSESSED\`: unsupported/unassessed projection.
- Buyer-friendly labels: **“Confirmed finding”**, **“No finding in covered scan”**, **“More coverage needed for this check”**, **“Control not assessed in this scope.”** Real JSON, MCP, report codes remain unchanged.
- **Separate candidate finding** from \`DETECTED_FINDING\`. If basic code path exists but full control claim lacks evidence, surface it as **“Potential exposure / investigate”** with known code source rather than lie about confirmed control state.

**P5 — Control Proof Journey / real operation difference**
Show non-invented read sequence as optional inspection facets:
\`Control question\` / \`Source visibility\` / \`Evidence\` / \`Test spec\` / \`Approval\` / \`Recorded result\` / \`Replay\` / \`Response workflow\` / \`Actual target effect\`.
Differentiate:
- **Control definition ≠ active code**
- **Visibility projection ≠ executed test**
- **Recorded human approval ≠ authorized target enforcement**
- **Test result ≠ runtime or production control operation**
- **Replay/integrity hash ≠ real-world protected effect**
- **Monitoring signal ≠ automatic block**
Use a single decision dossier not giant empty state grid. State producer \`PENDING_ACTIVATION\` plainly where backend signals it; avoid “failed” language or implying active result store.

**P6 — Evidence across five independent planes**
Requested, Policy Authorized, Effectively Granted, Code Capable, Observed; DAI cross-cutting authority. Each independently contributes facts to applicable control questions, **not** mandatory five-stage checklist. Technical link /methodology. Maintain source+time/coverage limits, do not show “UNKNOWN” as all-encompassing marketing header.

**P7 — Reports, operators, buyers**
- Source to report: distinct **Potential exposure → Qualified visibility → Recorded test → Target effect**, not a universal four-stage promotion.
- Sample Kestrel report \`/sample-reports/kestrel\`; /enterprise POC, /assurance-firms and /assurance technical.
- MCP: compatible client, secure scoped Bearer key, \`https://www.haiec.com/api/mcp\`, user goal **“Run HAIEC AI Assurance”**. Agent can guide supported eligibility/action work; canonical evaluator owns conclusions. Control-focused MCP tools appear registered in \`lib/mcp/server.ts\`, but **tool registration does not establish live tenant entitlements or end-to-end availability**. Avoid promising anonymous one-prompt assessment.

**P8 — FAQ (10+), business examples and CTA**
FAQ:
1. What are HAIEC Assurance Controls?
2. How is this different from a compliance framework control catalog?
3. Does a listed control mean it's installed and working?
4. Can HAIEC surface meaningful source risks without every evidence producer?
5. Does “no finding observed” mean the AI is safe?
6. Is Control Visibility the same as a Control Test?
7. What does a recorded Control Test result prove?
8. What evidence is needed to claim a production block or intervention?
9. How many HAIEC controls exist, and how many operate today?
10. How do DAI and the five evidence planes relate to controls?
11. Do I need to upload policies or runtime logs before discovering issues?
12. Can I use HAIEC controls through my AI IDE or MCP client?
Answers must not silently turn catalogs into effective safeguards or third-party attestations.
Final CTA: **“Know which consequential controls have evidence—and what your team should do next.”** → Enterprise, technical sample, MCP guide.

## 6. Visual styling and interactivity

- Light first paint (ivory/nearly white, deep ink text, forest green accent), one public site theme owner; intentional dark code inset and optional dark switch; inherited authenticated \`ws-* \` styles are not public theme.
- Product hero diagram: technical action route with simple source evidence panels; fixed native text for indexing, subtle dashed route motion only; meaningful story without confusing animations of an actual intercepted incident.
- Proof lens four tabs: real state change in \`What we know\` / \`What the control status means\` / \`What isn't established\` / \`Next action\`; no one-line-only hero card.
- Lab 3 scenarios, families 8 selectable samples, visibility 4 selectable states, FAQ native \`details\`.
- Motion design: 160–240ms transitions, selected tab style, no fake scans/progress or auto-rotating warning badges; reduced motion and keyboard. No blocked/no-op/decorative buttons.
- Native HTML/SVG, responsive 390/768/1440, SSR headings, correct single H1 and metadata, non-flashy badges.
- No public tenant data, auth bypass, fake release metrics or real customer run status.

## 7. Nonregression, implementation and delivery gate

**This task is Common Repo plan + design only; do not modify live HAIEC site or Main.** Preserve existing /controls framework registry, all filters/search/pagination/detail routes, existing /evidence/assurance/enterprise/methodology pages, DAI planning, homepage V3 two-scene hero, ProductShowcase terminal and ScenarioPlayer.

In a future explicit Devin implementation:
1. Refresh both repos, identify active working tree. **Current user preference is no commit/push/deploy without explicit later approval**.
2. Implement new SSR \`/assurance-controls\` page and isolated small client demo, not raw HTML injection.
3. Register route and one Platform menu entry (after proposed DAI, before Assurance), sitemap/llms/SEO owner; check existing  \`/controls\` still real reference.
4. Use sources for claims and catalog counts; consider deriving displayed counts from canonical \`CONTROL_CATALOG\` in server module rather than hardcoded content. Never import protected org control state into public page.
5. Preserve main /controls functionality, link new page from its system-specific assurance panel, and new page links back to framework browser.
6. Focused validation: 4 proof lenses, 3 examples, 8 family tabs, 4 visibility states, FAQs, light-first/dark persist, 390/768/1440, working CTAs, keyboard, reduced-motion, no private data, same source taxonomy. Code-level checks and minimal smoke; no broad unrelated testing.
7. Deliver local screenshots, static SEO/analytics/CTA regression checklist, actual source owner reconciliations. **Stop before committing, pushing, PR or deployment** until authorized.

**Business outcome:** A CISO should no longer conflate having a control, detecting a finding, recording a test result or verifying real target-side intervention. They should see HAIEC's deterministic, consequence-aware control proof as a high-value enterprise assurance distinction—not another compliance checklist or yet another evidence-upload hurdle.

## 8. Related artifacts

- [Current /controls page detailed preservation and evidence plan](WEBSITE-CONTROLS-PAGE-COPY-DESIGN-SEO-PROOF-ENHANCEMENT-PLAN-2026-10-20.md).
- [Existing controls preview](design-references/controls-2026-10-20/controls-proof-light-dark-editorial-preview.html).
- [Dedicated DAI product page plan](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md).
- [DAI findings-first contract](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md).
- [Standard public light-first design](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md).
- [Canonical website tracker](PUBLIC-WEBSITE-ENHANCEMENT-PAGE-REGISTER-2026-10-20.md).
