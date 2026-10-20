> **Interactive design companion:** [Controls dual-theme editorial concept with two distinct catalogs, a fictional control-proof inspector and bounded visibility state selector](design-references/controls-2026-10-20/controls-proof-light-dark-editorial-preview.html). This prototype uses no protected tenant data, real test result, framework search backend or production deployment.

# HAIEC Controls — Public Page Copy, Design, Control-Proof, SEO and Dual-Theme Plan

**Review:** 2026-10-20. **Page:** https://www.haiec.com/controls. **Status:** EDITORIAL_REVIEWED / PLAN_COMMITTED / DESIGN_CONCEPT_OPTIONAL / WEBSITE_NOT_MODIFIED. This is sequential page #5 after Platform, Products, Assurance and Enterprise.

**Strategic decision:** Keep **both** HAIEC's existing searchable **framework control registry** and its **separate system-scoped assurance control catalog**. The public /controls page currently sells a framework checklist, but the stronger HAIEC story is the difference between **a control being named** and **whether an exact, scoped control question has relevant evidence, executed tests and an established result**. Evolve /controls into an honest public explanation with **two clearly separated pathways**, retaining the current deep-linked framework browser and its search-intent. Do NOT overwrite the live legacy registry, merge denominators, or invent a globally verified control dashboard.

**Controlling references:**
- [Public brand, copy & theme](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md)
- [Four-word position/USP/story/SEO](HAIEC-POSITIONING-USP-FOUR-WORD-SEO-AND-STORY-SYSTEM-2026-10-20.md)
- [Source capability, pricing & authenticated MCP](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md)
- [Assurance page enhancement](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md)
- [Enterprise page enhancement](WEBSITE-ENTERPRISE-PAGE-COPY-DESIGN-SEO-CONVERSION-PLAN-2026-10-20.md)
- [Existing approved SVG placement](design-references/hero-architecture-2026-10-19/light-theme/WEBSITE-PLACEMENT-AND-DEVIN-HANDOFF.md)
- [76-row ops source reconciliation](reconciliation/POST-ONBOARDING-76-CODE-API-MCP-AUDIT-AND-RECOMMENDATIONS-2026-10-18.md) — row existence does not equal customer-ready control.

## 1. Source review and ground-truth boundary

**Repo:** \`subodhkc/haiec-website\` Main \`e4e46c36ce23fe4be5011051558077630abeab5d\`, inspected October 20, 2026. Exact file sources:
- \`app/controls/page.tsx\` (blob \`8895dd08c7fa79236d9d736b3ff973f54e9921c4\`): client-only control search and filter. Explicit hero **“Control Registry”**, fixed “88+ controls / 9 frameworks” copy, \`/api/controls\` fetch, dynamic DB total fallback, framework overview, fixed dark hero/light content, framer-motion item fades, \`next/head\` duplicate SEO.
- \`app/controls/layout.tsx\` (blob \`4a8789c67ef931dc5d0f0352923bb222816b2ef9\`): fixed 88/9 metadata, JSON-LD WebPage ItemList \`numberOfItems=88\` and static FAQPage content. Root template compatibility and fresh-source truth are not confirmed.
- \`app/controls/[controlId]/page.tsx\` + \`app/api/controls/[controlId]/route.ts\`: client-only details, control ID and framework info; detail routing uses the **bare control ID**. Static fallback searches first framework matching an ID; do not claim all routes are uniquely identified until framework+ID collision check.
- \`app/api/controls/route.ts\` (blob \`d26bf9059daf57340c2c5b4700506a3df581c2c1\`): primary database-backed listing; falls back to \`FRAMEWORK_REGISTRY\` if DB is empty/errors; public GET, keyword/category/framework filters and paging. Static fallback **derives “critical/high/medium/low” from each framework control's order**, and maps \`required\` from objective/subjective — neither independently establishes statutory priority or applicability to this customer. **DB and fallback data may differ** in count/taxonomy.
- \`lib/compliance/control-registry.ts\` (blob \`4914cdec53a3f578f9e6598d13baa2f7bf202f78\`): static **88 entries across nine frameworks** calculated from declared arrays: SOC2 13; GDPR 11; HIPAA 11; ISO27001 10; ISO42001 7; NIST_CSF 9; EU_AI_ACT 10; COLORADO_AI_ACT 8; NYC_LL144 9. A summary registry is not the full text or complete normative standard; framework/version/legal applicability require their own up-to-date owner.
- \`lib/control-visibility/catalog.ts\` (blob \`c659416e523363938d31342f88e8eae37fd5457e\`): **45 total** catalog entries: **42 generic control profiles + 3 specialized C7/C9/C16 tests**, across seven listed family letters plus TMF. It has 15 \`LAUNCH_PRIORITY_IDS\` and 11 \`VISIBILITY_IMPLEMENTED_IDS\` (A02,A03,A04,A05,A06,A08,E01,E03,E05,R02,R03). **Important stale source comment:** top prose incorrectly says “45 cataloged profiles +3 specialized”; actual \`CONTROL_CATALOG\` and later comment say 45 **including** 3. Publication MUST use **45 total**.
- \`lib/control-visibility/types.ts\` (blob \`50f9145d4fbef78cb74f48b61fb0830fd4260831\`): Control Visibility **not** a Control Test or U5 decision; \`DETECTED_FINDING\`, \`NO_FINDING_OBSERVED\`, \`COVERAGE_INSUFFICIENT\`, \`NOT_ASSESSED\` have distinct meaning. “No finding observed” is explicitly **not PASS**.
- \`lib/control-visibility/control-proof.ts\` (blob \`73179b0cb8859fa253c3e2e5dc18fe51b5ad38bf\`): read-only assembly \`catalog → visibility → evidence → TestSpec/approval → historical results → replay\`, with bounded scans. Some stores may report \`PENDING_ACTIVATION\`; absent result is not \`NOT_EVALUATED\`. Read model is not itself executing a test.
- \`components/ai-inventory/ControlCatalogPanel.tsx\` (blob \`b49b4b27d1fb839f5a5cd1ddbde1958ce4c47e3c\`): signed-in System Workspace's qualified catalog/visibility/operating context, marked “cataloged does not mean implemented/evaluated/proven.” Reuse this owner for protected per-system experience; do **not** mount it in public site or leak tenant data.
- \`lib/mcp/server.ts\`: registered \`haiec_control_assurance\`, \`haiec_control_results\`, \`haiec_control_replay\` etc with scope gating; MCP registration does **not** grant unconnected customer data/entitlement or prove execution.
- Live public /controls fetch was unavailable to this read via web cache; GitHub **route and API behavior were verified in source**, but do **not** assert exact live DB row counts, user conversion or currently rendered inventory beyond that. Browser DOM and real API availability need production acceptance later.

**Important semantics:** 88 framework mapping **entries** ≠ 45 HAIEC control **catalog entries** ≠ 15 launch **priorities** ≠ 11 implemented **visibility projections** ≠ tenant's **executed** tests ≠ effective native control ≠ full standard compliance. These counts live in different registries/tenants and must never be added, combined into a coverage percent or converted into an “88+ controls secured” badge.

### Source-level truth issues to queue, not silently solve by copy

1. \`app/controls/page.tsx\` includes \`next/head\` metadata while \`app/controls/layout.tsx\` also owns title, description and schema. Align with one App Router metadata owner and root template; avoid duplicate suffix \`| HAIEC\`.
2. Current page's controls are fetched **client-side**; H1 can SSR, but actual catalog entries are not fully available to crawlers/no-JS visitors. Make a small **server-rendered** introductory explanation and static framework index, then progressive enhancement for dynamic search, retaining efficient pagination.
3. Filtering an unknown framework ID in DB path can leave the where clause empty; wrong-fallback behavior should be assessed. Prevent invalid filters generating a broad and misleading result.
4. Framework detail IDs can collide across nine registries if not namespaced. Check \`frameworkId + controlId\` identity and resolve route/canonical safely before altering detail URLs; preserve existing backlinks and redirects if new ID route is approved.
5. \`priorityFromOrder()\` and \`required = objective\` in static fallback are **presentation heuristics**, not externally verified risk priority or regulatory “required” fact. Relabel to registry “illustrative order/classification,” or replace with source-justified semantic data. Do not assign red “critical control failed” by ordinal position.
6. Existing JSON-LD \`ItemList numberOfItems=88\` could mismatch actual DB data; avoid a static 88 measured-performance claim. \`FAQPage\` schema should represent visible content, not unconditionally trigger rich-result claims.
7. Current \`ControlCatalogPanel\` has real maturity/status distinctions; public graphic must **teach** these distinctions without copying protected per-tenant data or inventing historical results.

## 2. Editorial and commercial position

**Central message:**
> **A control being listed doesn't mean it's working.**

**Hero H1 recommendation:**
> **Know which AI controls have evidence — and which still need proof.**

**Four-word descriptor (shared):** **Deterministic AI Action Assurance.** This does not certify all control operating effectiveness.

**Eyebrow:** \`AI CONTROLS & EVIDENCE\`

**Hero deck:**
> \`Control requirements explain what should happen. Actual evidence tells you what can be established. HAIEC connects relevant AI control questions to supported sources, visibility and evaluated results — while keeping missing, untested and integration-dependent facts explicit.\`

**Proof line:** \`Cataloged ≠ Implemented ≠ Evaluated ≠ Effective\`.

**Primary CTA:** \`Explore AI Control Evidence\` → anchor \`#control-proof\` (on-page public teaching scene); commercial CTA \`Scope an Enterprise POC\` → \`/enterprise\`; technical CTA \`Explore Framework Requirements\` → \`#framework-registry\`. For signed-in per-system controls, use authenticated deep link only after verifying canonical public sign-in/continuation path; **no fabricated universal /dashboard/controls route**.

**Buyer/keyword question:** “How can I distinguish cataloged AI controls from evidence that they were evaluated and actually effective?” Complementary, not duplicative: /assurance owns deterministic evaluation generally; /enterprise owns paid scoped engagement; /frameworks owns regulatory explainers; /controls owns control expectations, evidence/status anatomy, browsing.

### Why this positioning is stronger
Conventional catalogs turn control counts and framework mapping into perceived readiness. HAIEC's differentiating opportunity is the **proof frontier**: one **control objective**, intended evidence, exact system/scope, visible observations, qualified test/spec/approval, recorded result where real, gaps, and (if claimed) independently verified target effect. **Do not claim HAIEC is the only vendor doing this.** Different products overlap; superiority must be shown in honest scoped receipts and usefully explained UNKNOWN, not asserted without benchmarks.

## 3. Proposed section-by-section copy and native design

### C0 — Hero: buyer tension + access
**Eyebrow:** AI CONTROLS & EVIDENCE  
**H1:** Know which AI controls have evidence — and which still need proof.  
**Body:** A mapped requirement is not an active safeguard. HAIEC helps teams inspect supported evidence for AI action, authority, security and governance controls, identify gaps and understand which control questions have actually been assessed.  
**Above-fold buttons:** Explore Control Proof → #control-proof; Browse Framework Registry → #framework-registry; small Scope an Enterprise POC → /enterprise.  
**Visual:** two equally labeled columns: \`FRAMEWORK EXPECTATION\` vs \`SYSTEM-SCOPED CONTROL PROOF\`, linked conceptually, not a “100% mapped” success flow. Light/dark shared theme.

### C1 — Explain the buyer mistake, curiosity-led
**H2:** A policy can require approval. Did anything enforce it?
**Body:** Imagine an agent allowed to call a refund tool. A governance checklist can say “approval required,” while the implementation and permission evidence may not prove that the decision was reviewed or the action blocked. The difference between *expected* and *observed* belongs in the result, not in a footnote.  
**Storyboard:** FICTIONAL support refund: \`Requirement exists\` → \`Code path possible\` → \`No qualified approval proof\` → \`UNKNOWN/REVIEW depending on actual evaluated basis\`. It must **not** show a real HAIEC verdict unless an actual canonical source was used. A missing approval record is not proof of an incident.
**Method:** inspired by curiosity-led teaching; no visual identity imitation.

### C2 — A clear two-path chooser (not two numeric collections merged)
**H2:** Two related catalogs. Two different questions.
**Path A — Framework control reference.** \`Browse mapped requirements across the nine represented frameworks. Use this reference to understand expected policies and possible evidence — not as evidence that your system implements or satisfies those controls.\`
**Path B — HAIEC Assurance Controls.** \`Explore seven assurance-control family areas and selected specialized tests; see what qualified code, policy, grant and observation evidence could establish for a specific system, and where implementation or results remain unavailable.\`
**Labels:** \`Reference/Mapping\` vs \`System-Specific Assurance\`. Display exact present-source aggregates only as **contextual catalog counts** with labels and as-of date, not as business outcomes.
**CTA A:** Browse Framework Registry → #framework-registry. **CTA B:** See Control Proof Anatomy → #control-proof, then \`/assurance\` or authenticated workspace as appropriate.

### C3 — Control proof anatomy (flagship differentiated visual)
**H2:** From a control question to an inspectable result.
**Visual columns, NOT a mandatory causal pipeline:** \`Cataloged objective\`, \`System applicability\`, \`Source visibility\`, \`Qualified evidence / authorized TestSpec\`, \`Recorded evaluation result\`, \`Target-side effect (only if integrated and tested)\`.
**Caption:** \`Each column is a separate claim. A record in one column never automatically establishes the next.\`
**Native “proof ladder” labels:** \`CATALOGED\`, \`VISIBLE/NOT ASSESSED\`, \`EVIDENCE PRESENT OR MISSING\`, \`RESULT RECORDED OR ABSENT\`, \`EFFECT VERIFIED OR NOT ESTABLISHED\`.
For catalog-only profiles, show no green status; workspace results may be \`DETECTED_FINDING\` / \`NO_FINDING_OBSERVED\` / \`COVERAGE_INSUFFICIENT\` / \`NOT_ASSESSED\`, and some specialized actual results \`SATISFIED\` / \`NOT_SATISFIED\` / \`NOT_EVALUATED\`. Keep those **separate vocabularies**; never reinterpret no finding as SATISFIED, or result not found as NOT_EVALUATED.

### C4 — Families and real operating scope
**H2:** Control questions across AI action, authority and assurance.
List **7 broad HAIEC families** in matched textual cards: \`Governance & lifecycle\`, \`Application & tool security\`, \`Agent authority & delegation\`, \`Runtime & consequences\`, \`LLM safety & reliability\`, \`Evidence & audit\`, \`Responsible AI\`; separate footer \`Specialized Control Tests: C7 / C9 / C16\`. This mirrors \`CONTROL_FAMILY_LABELS\`, not a new classification. No exact count per family until current catalog derived.
**Micro-copy:** \`A category name and test specification do not imply active enterprise enforcement or verified protection.\`
Use a small **3×2 + final** responsive layout or native two-column groups; no huge 45-card public feed duplicating existing workspace catalog. Link /assurance, /methodology and /ai-security.

### C5 — Show meaningful states (honest and buyer-friendly)
**H2:** No evidence? Then no invented pass.
**Tabs/interactive selector** with static accessible default:
- \`CATALOGED\`: documented control question, no implementation claim;
- \`VISIBILITY / DETECTED FINDING\`: qualified bounded observation concerning that control, not test verdict;
- \`NO FINDING OBSERVED\`: qualified finite coverage found no matched finding; **NOT a PASS**;
- \`COVERAGE INSUFFICIENT\`: partial, mismatched or synthetic evidence cannot support stronger claim;
- \`NOT ASSESSED\`: no supported assessment for current question;
- \`RESULT RECORDED\`: a persisted result from a supported native/specialized control test, evaluated with exact TestSpec/scope/version.
Textual state icon + explanation in both modes; no red/yellow/green implying global legal compliance. No fabricated customer records.

### C6 — Keep and improve existing real framework browser
**H2:** Browse framework control references.
**Body:** Explore the existing registry of control entries mapped to SOC 2, GDPR, HIPAA, ISO/IEC 27001, ISO/IEC 42001, NIST CSF, EU AI Act, Colorado AI Act and NYC LL144. Entries support research and preparation; applicability and regulatory status depend on current rules and the customer's context.
- Preserve existing search, filter (framework/category), pagination and detail routes. Prefer one semantic SSR framework index, helpful non-JS default, and a client-enhanced searchable registry.
- **Verify live count** dynamically; no “88+ verified controls” marketing. Static source at audited Main contained **88 mapped entries**, which is an editorial inventory value only. Distinguish database vs static fallback and update date if visible.
- Preserve existing external inbound backlinks and canonical detail links; correct composite ID collisions only after route and redirect strategy.
- Do not call \`required\` or \`critical\` regulatory-grade unless supported by framework/current applicability; if the fallback-derived semantics remain, rename for clarity or hide priority rather than display false precision.
- Move the current nine-framework registry detail *below* control-proof explanation on the main page, but retain indexed supporting framework descriptions to avoid SEO wipeout.

### C7 — Practical buyer action and enterprise path
**H2:** Which consequential control question is still unproven?
**Body:** Start with an AI system, one consequential action and relevant policy/control expectations. HAIEC can help examine available code, authority and evidence, identify controls that are not assessed and show what additional source or test could change a scoped review decision.
**Primary CTA:** Scope an Enterprise POC → /enterprise.
**Developer CTA:** \`Run HAIEC AI Assurance\` → /docs/agent-integration. **Connect** compatible MCP client, secure API key; \`haiec_preflight\` first, actual system/role/entitlement/consent, then a canonical run when eligible. For control-specific questions use registered \`haiec_control_assurance\` / \`haiec_control_results\` / \`haiec_control_replay\` when authorized; never claim that typing a prompt installs MCP or that a read tool executes tests.
**Secondary:** Understand Assurance → /assurance; Evidence → /evidence; Methodology → /methodology; Browse framework references → #framework-registry.
**Trust note:** \`Framework mapping does not constitute certification. A cataloged control is not an executed or effective control. Human approval isn't target-side enforcement.\`

### C8 — Short visible FAQ (SSR)
**Q:** Does HAIEC have 88 or 45 controls?  
**A:** The audited static framework reference had 88 mapping entries across nine frameworks; the separate assurance catalog had 45 total entries (42 profiles and 3 specialized tests). These describe different inventories and cannot be combined into assessed coverage.

**Q:** Does a cataloged control mean it's active or effective?  
**A:** No. Implementation, applicability, qualified evidence, test execution, result and target-side effect are separate questions.

**Q:** Is “no finding observed” a passed control?  
**A:** No. It means no matched finding within a qualified bounded scan, not proof of safety or effective control.

**Q:** Does HAIEC certify SOC 2, ISO 42001 or EU AI Act compliance?  
**A:** No. Framework mapping and HAIEC findings can support external review. Certification and legal applicability require the appropriate independent authorities.

**Q:** Can my AI agent query control proof?  
**A:** Yes, within a compatible, configured MCP connection, authenticated tenant/key, registered tools and specific eligible system and evidence. Read-only preflight first. Results absent/unknown remain explicit.

## 4. Visual and animation design contract

**Use same public light/dark marketing token layer from Platform, Products, Assurance and Enterprise, not protected workspace \`ws-*\` tokens.** Current /controls uses a forced dark hero and fixed white filter/table backgrounds; shared switch must adjust all surfaces/text/borders/focus and keep control-result semantics legible in both. Ensure 390/768/1440 layouts, sticky filter mobile visibility, alt/text, no-JS meaningful SSR content, reduced motion.

**Best single diagram:** two columns \`Framework expectation\` versus \`System control proof\` with small annotated control claim slices (catalog → visibility → result ↔ effect checks). Create as **native HTML/CSS + semantic SVG connectors** so text is indexable and status labels navigable; no raster needs to be added. Do not add a full sixth architectural diagram or make /enterprise/architecture duplicate.

**Interactions:**
1. *“Control proof inspector”* static fictional case: one example control (refund approval) exposes \`Cataloged\`, \`Visibility\`, \`Evidence\`, \`Result\`, \`Target effect\`. Clicking tabs highlights one independent fact. Never make it appear to execute a control or change evaluation from missing to SATISFIED automatically.
2. *“What does this state mean?”* segmented selector reveals authoritative bounded state semantics (no pass for NO_FINDING_OBSERVED). UI buttons with role, keyboard and aria-pressed; underlying text should remain in SSR.
3. Preserve existing **real** framework catalog searching as a separate clear feature; do not fake populated DB data in design mock. Don't introduce live animated percentages/status counters, loading holograms or fabricated test progress.

**Motion:** brief user-triggered opacity/line emphasize; no fake runtime heartbeat, no simulation of a production deny, no auto-changing state, respect \`prefers-reduced-motion\`. One selected control should have design weight, not special emphasis on Protect/Govern capabilities.

## 5. SEO, technical reliability and accessibility

**Unique route intent:** \`AI control evidence and assurance\`, \`AI agent security controls\`, \`AI governance control evidence\`, plus genuine \`AI compliance control registry\` lookup (preserve legacy search intent). /assurance owns general evidence evaluation mechanics, /frameworks framework overviews, /methodology rigor, /enterprise scoped assessment and /controls **catalog-to-proof semantics**.

**Suggested title (child template-aware):** \`AI Agent Security Controls & Evidence Registry\` (root appends | HAIEC if configured).  
**Suggested meta description:** \`Explore AI security control requirements and evidence states. HAIEC distinguishes cataloged controls, qualified findings, evaluated results and unverified enforcement.\`  
**Canonical:** \`https://www.haiec.com/controls\`. Metadata/structured data belong to a **single owner**; avoid duplicate \`next/head\` and layout metadata, unsupported numberOfItems and FAQPage overclaim. SSR content and native working links outrank keywords meta.
**Detail route:** use framework-qualified durable identity with migration/redirect strategy if collision risk is confirmed. No broken existing \`/controls/[controlId]\` backlinks. Report a 404 for unsupported ID, never silently show first framework match. Framework/standard version and freshness owner, avoid outdated legal timing.
**Live API fallback:** intentional statically mapped registry on DB outage must never be presented as real, source-fresh evaluated system controls. Separate repository/API availability from customer-assessed state, optionally include “reference catalog” source/status if real API supports it.
**Accessible sticky filters:** explicit input labels, search debounce/abort stale requests, loading/error/no results distinct, category controls, keyboard link focus, sane pagination/visible total, no synthetic badges. Don't disable successful data silently on fetch failure; show source-specific message.
**Privacy:** no customer-specific assurance/control read model in the public catalog. Authenticated workspace sees only tenant-scoped data. Analytics do not contain control owners, sensitive customer policy, source snippets or API keys.

## 6. Claim risk gate and implementation order (future Devin handoff, not authorized site work)

**P0** Current source/header \`45 cataloged control profiles +3 tests\` contradictory with actual 45 total. Use executable catalog array as owner, correct doc comment in a *separately authorized HAIEC implementation* and keep public counts provenance-qualified.  
**P0** Framework “required”/“critical” derived from order/type; remove/qualify as heuristic in public UI rather than implying legal requirement.  
**P0** Keep real two-catalog architecture and separate control visibility from results, approvals, replay, target-side effect; no unsupported producer/executed claims.  
**P0** Controls detail identity collision/bare ID. Check duplicate IDs across frameworks; if found, plan namespaced slug and redirects.  
**P1** Fix public SEO hybrid client-only payload, duplicate metadata/JSON-LD, source-qualified values and one page-owner.  
**P1** Build light/dark shared experience and copy/animation prototype, not redundant new category navigation route.  
**P1** Audit public registry search reliability/DB fallback and result error states; use source-specific counts.  
**P2** Add honest MCP pathway, real examples and Enterprise POC CTA with no extra rebranding.

**Future one-PR implementation procedure:**
1. Refresh Main, docs and actual available data, verify current public theme contract and framework/legal scope.
2. Build claim-to-source matrix per public hero/stat/maturity state and recheck 45/88 denominators; test API response behavior and framework collision.
3. Add SSR buyer narrative and independent control-proof illustration; keep legacy registry usable and its deep links.
4. Refactor metadata/layout, accessibility, filters, status text and public-theme tokens for both modes; no protected workspace changes.
5. Focused code-level checks, two-theme 390/768/1440 visual, basic browser smoke, keyboard/reduced motion, no-JS SSR, one static fallback and one DB result flow, no unauthenticated leakage. Test selected detail identity/redirect. No unrelated broad test suite.
6. On explicit authorization: merge approved HAIEC PR to Main → automatic Vercel deploy → production checks of /controls and selected details → record exact commit/URL/status in this Common Repo. **This plan does not implement or deploy the website.**

**Release acceptance:** A buyer can explain the 88 mapped framework entries versus 45 separate assurance entries; exact states do not claim “assured by counting”; the hero shows the actionable control proof frontier; legacy catalog still browsable; no fake green for unknown or no findings; search bots can see explanatory body; light/dark equal; MCP authenticated and POC visible.

**After Controls:** review **/methodology** next, then **/pricing**, continuing sequential Common Repo planning and the existing page tracker.
