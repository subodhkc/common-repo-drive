# System Constellation | Deep Source, Diagram, Proof-Boundary and Website UX Audit
**Reviewed:** 2026-10-20 | **Public page enhancement:** #23 | **Status:** SOURCE-REVIEWED + PUBLIC_TEXT_READ. Not a screenshot-confirmed or authenticated production acceptance run. Common Repo documentation only; no website source edited and no HTML mock created.

**Canonical signature product:** https://www.haiec.com/ai-action-access-map  
**Illustrative interactive sample:** https://www.haiec.com/sample-ai-action-access-map  
**Frozen real-source evaluated example:** https://www.haiec.com/sample-reports/kestrel/constellation  
**Authenticated system source/evaluation map:** `/dashboard/ai-inventory/systems/[id]/action-map`.

## 1. Executive decision
**Enhance the EXISTING canonical System Constellation page in place. Preserve three distinct public experiences but unify their story, visual vocabulary and evidence semantics. Do not create a fourth product landing page, replace the renderer, ship a new graph truth engine, or turn the Kestrel snapshot into a fabricated live customer topology.**

The principal gap is **product comprehension, first-screen visual value and parity between marketing claims and graph behavior**. Existing production includes two substantial UI engines and a rich canonical topology projection with exact-scan/evaluation identity guards. Thus **curate and connect**, do not restart.

Recommended overarching editorial idea:  
**"From AI agent to real-world consequence. See each established link, the authority that applies and where proof stops."**  
Keep "System Constellation" as the product name, and **AI Action & Access Map** as the SEO and customer-language bridge. Keep canonical URL `/ai-action-access-map`.

Critical customer example: a code-supported agent tool invokes a handler that may change a record; independently inspect business authorization, IAM permission context, delegated choice and observed execution only if those facts actually exist. Early source path findings must not wait for all five evidence views.

## 2. Scope and existing owners
| Surface | Current owner / data | Correct job and constraints |
|---|---|---|
| Public canonical product | `app/ai-action-access-map/page.tsx` + `layout.tsx`; currently a static seven-card explanation and links to examples | Explain HAIEC's differentiator, show a compact semantic cause/effect diagram IN PAGE, route visitor to evaluated case and real first-use actions. SEO canonical unchanged. |
| Public educational sample | `app/sample-ai-action-access-map/page.tsx`, `components/ai-inventory/SampleMapClient.tsx`, `SampleActionAccessMap.tsx`, `StaticActionAccessMap.tsx`; `SAMPLE_PROJECTION` | Teach how to read graph/inspector on synthetic example. React Flow default; accessible HTML fallback, same data owner, no persisted evaluation or production assertions. |
| Kestrel evaluated public example | `app/sample-reports/kestrel/constellation/page.tsx`, sanitized `/demo/kestrel/kestrel-constellation.public.json` and exact `path-binding`; `ConsequenceFlowView` default and `ConstellationMapView` advanced | SHOW a real frozen evaluation of synthetic/open sample source with exact digest, source commit and scoped paths. Source code findings are genuine evaluated findings on that source, not proof of runtime customer action. |
| Authenticated per-system map | `components/ai-inventory/ActionAccessMap.tsx` / `ActionAccessMapView.tsx`; authenticated `app/api/inventory/systems/[id]/action-map/route.ts` | Preserve current-source versus exact evaluation-basis separation; tenant-scoped deterministic projection; optional compatible read-model joins and consequence delta. |
| Canonical projection | `lib/topology/types.ts`, `topology-projector.ts`, `constellation-presentation-projection.ts`, `map-presentation.ts`, `agent-trace.ts`, `agent-trace-mermaid.ts` | Read-model nodes and relations, source provenance, basis/availability and frontiers; NEVER invent graph links, derive runtime effect from static reach, or use a synthetic presentation to assert production facts. |
| Existing SEO/menu | `data/seo-page-intents.ts`, `data/public-site-registry.ts`, `components/AutoHideNavigation.tsx` | Distinct canonical product vs educational sample vs case-study search intent. Keep existing navigation label "System Constellation"; strengthen links and semantic content, no duplicate URL. |

**Important prior Common Repo reference:** [Independent Action Topology diagram review](ACTION-TOPOLOGY-MOCK-DETERMINISTIC-ENGINE-AND-SIX-DIAGRAMS-INDEPENDENT-REVIEW-2026-10-18.md) explicitly recommends existing deterministic graph engine, relation inspector, first proof break, accessible relation table and no fictional green/red risk scoring. [E6 unified AI estate implementation record](E6-UNIFIED-ENTERPRISE-ESTATE-AND-ASSURANCE-CASE-IMPLEMENTATION-RECORD-2026-10-20.md) confirms **org-wide combined cross-system topology graph was not implemented**; only system-scoped, scan-bound projection exists. Product cannot claim automatic combined enterprise-wide action proof.

## 3. Main findings: source-verified

| ID | Priority | Observation and source | Consequence | Correction |
|---|---|---|---|---|
| SC-01 | P0 content | Product page headline "Seven layers that define what evidence establishes" enumerates Identity/Access, Agents/Models, Tools/MCP, Data/State, Consequences, **Evidence Basis** and **Unknowns**. Actual `TopologyNodeKind` is a large extensible type union. Evidence basis and Unknown are **orthogonal properties**, not equivalent structural node layers. | Implies fixed seven-layer architecture and complete coverage of each layer. | Replace "seven layers" with **five intuitive things to inspect** (agent/identity, source/tool/capability, implementation/resources, consequence, authority/evidence questions). Explain five evidence planes separately; DAI is a cross-cutting delegated choice, not an eighth map layer. Do not force exact five physical canvas rows. |
| SC-02 | P0 UX | `/ai-action-access-map` has text/grid and CTA but **no actual map diagram** in the product page. The first vivid example is external Kestrel or sample. | Signature capability is described rather than demonstrated at point of interest. | Add one **small explanatory, server-readable native SVG/HTML action-consequence path** beside outcome-led hero or immediately below. This is a bounded illustration or source-derived public-safe preview, not a new simulated assurance graph; link to exact Kestrel or sample. |
| SC-03 | P0 UX semantics | Two valid but distinct graph treatments: React Flow `ActionAccessMapView` with typed regions/lenses and G6 `ConstellationMapView` with combo/force/dagre. `/sample-ai-action-access-map` is dark-shell + large light canvas and dense "CTO insights"; Kestrel has dark-shell + light flow; canonical page dark hero + card grid. | Perceived inconsistency with HAIEC light-first architecture/DAI/enterprise pages and overly high cognitive load. | One **visual grammar** (light canvas, neutral line treatment, effect endpoints unambiguously labeled, restrained source-status marks, readable text and mobile progressive disclosure). Retain both existing engines for their owned use cases; no consolidation rewrite. |
| SC-04 | P0 proof/diagram | Kestrel code header says graph "PRIMARY visual" but `viewMode` defaults to consequence-first `overview` and actual G6 graph is available only under fifth **System Map** tab. The separate `ConsequenceFlowView` was intentionally promoted as consequence-first in newer work. | Internal source comments and public expectation disagree, but simply defaulting to a complex radial graph would regress newer design intent. | **Keep consequence-first overview default**, improve visible "Explore technical map" CTA or map thumbnail and make "System Map" discoverable. Correct stale developer comments. Preserve evaluated `?path=` behavior and report link. |
| SC-05 | P0 graph actions | Kestrel `ConstellationMapView` receives `onFocusUpstream={() => {}}`, `onFocusDownstream={() => {}}`, `onExplainPath={() => {}}`. The child locally highlights upstream/downstream, but **"Open technical proof"** calls the no-op `onExplainPath`. | A specifically labeled action can fail to navigate to source-backed proof, even though local focus works. | Wire genuine exact path/trace drill-through only when owner/identity supports; otherwise disable/replace button with honest "Proof not available for this relation", without implying an action occurred. Parent callbacks must not erase valid local focus. |
| SC-06 | P0 stale coverage | `lib/topology/constellation-presentation-projection.ts` unconditionally emits **14** `UX3_PRODUCER_FRONTIER_REASONS` as `productFrontiers` on every projection. `ConstellationMapView` renders "Additional analysis dimensions … Not currently analyzed by this product path" for all. Some newer RAG/context/agent/tool capabilities are represented elsewhere in repo, and per-system coverage varies. | Blanket negative catalog may be inaccurate, over-broad, and mistaken for THIS evaluated system's measured gaps. | Reconcile against current actual producer/read-model coverage, select applicable items only by real source/evaluation criteria; alternatively remove universal per-system claims and link to source/coverage documentation. Avoid customer-visible UX3/internal labels. |
| SC-07 | P1 evidence labels | `buildConstellationProjection` seeds synthetic **AI-system visual grouping** (`constellation:combo:ai_system:`) with `evidenceStatus:'AVAILABLE'` and `weakestAvailability:'AVAILABLE'` before its members are attached; inspector says "This ai_system is established in source topology". Registered system != all connections source-established. | In empty/sparse topology, group status risks overclaiming evidence, especially if membership stays small or no typed node joins. | Treat group as grouping/registered scope, not an independently evaluated node. Derive source-evidence label only from eligible source/children; keep known-none vs missing vs partial distinct. Do not use AVAILABLE as generic "UI exists". |
| SC-08 | P1 diagram meaning | Map token owner `lib/topology/map-presentation.ts` distinguishes edge COLOR=relationship, line STYLE=evidence basis; solid source-established/dashed structural/dotted referential. `ConstellationMapView` legend says "Solid = established or observed", and public case guidance says dotted breaks mean frontiers. | Users might infer a solid line is a runtime witness or dashed/dotted line is an actually traversed link. | Make source-established **not the same as observed execution** explicit. Dotted potential relation is not a missing physical edge. Missing canonical bridge stays a visible **unconnected frontier**, never invent a dotted continuation. Add textual + pattern legends in all views. |
| SC-09 | P1 snapshot scoping | Kestrel `scopedPublicProjection` removes 723ish cataloged handlers without canonical edges, retains connected/effect context, updates limitations; graph is not full all-catalog view. Inline copy says "Advanced full-system exploration". | "Full-system" can imply exhaustive discovery; omitted nodes due to presentation scope. | "Explore the consequential subgraph from this evaluated snapshot." Show "X nodes shown / Y cataloged", truncated/cropped note and link to available full context; never extrapolate complete system-wide topology. No production customer IDs. |
| SC-10 | P1 inspector quality | G6 details provide a generic `AVAILABLE` sentence, node role, one status and a source string. Edge detail includes source/target and raw `joinBasis`, but technical proof callback is not always wired. `ActionAccessMapView` has stronger same-scan proof trace inspector. | Business value "why this edge matters/what's not proved" is underdeveloped compared to new DAI and Assurance pages. | Reuse canonical `ActionProofTrace` / exact relation/Agent Audit projections where already available, with **what is established, what is not, evidence owner/time, first break, next evidence**; show bounded fallback instead of invented links. |
| SC-11 | P1 visual accessibility | G6 default labels as small as 8-12px, 520px canvas mobile and inspector overlaid bottom. React Flow sample much denser than homepage schematic. | Dense small text and overlay burden at 390px; graph may be hard to navigate with keyboard and screen reader. | Responsive simplified first view, fit-to-focus, legible typographic floor, label selection density, keyboard relation list/table and scrollable detail alternative. Preserve same graph membership and IDs; not a simplified truth. |
| SC-12 | P1 sample claims & wording | Sample route has a separate main `Production Incident Agent` header, internal sample system `Northstar Commerce Operations Copilot`, heavy synthetic and technology labels, and a button "Generate Assurance Visual Report". The report component marks `isSample` and carries no disposition, but name sounds like a true issued Assurance Report. | Sample may feel like two scenarios or an actual assessment, and a visual snapshot can be mistaken for a canonical issued Assurance report. | Use one clear educational title and sub-context; label export as **Download illustrative map data** and **View illustrative visual summary** in sample mode, while preserving actual snapshot export for eligible production. Keep sample/no-evaluation constraints near artifact action. |
| SC-13 | P2 SEO defect | `app/sample-ai-action-access-map/layout.tsx` description contains a replacement glyph (`�`) between name and deck. | Broken-looking search metadata. | Replace with clean copy and verify metadata preview. Keep canonical unchanged. |
| SC-14 | P2 navigation | Product hero CTA points Kestrel, below page CTA points illustrative sample, but no short "try your system" contextual path. | Site lacks a unified choice of **learn / see evaluated example / connect own system**. | Add a 3-path CTA strip with actual `/docs/agent-integration` or `/ai-inventory` and `/enterprise`, without claiming one click starts an evaluation. Preserve sample/evaluated differences. |

### What is actually implemented and should be protected
- Tenant-org verified source projection. Authenticated read route does not re-run scanner or read raw secrets.
- Distinct **Current source** and **Latest Evaluation** basis in `ActionAccessMap.tsx`, no replacement of unavailable evaluated map with current source; exact scan identity required for reachability/ActionProofTrace joins.
- Typed `TopologyNodeKind`, `TopologyEdge.kind`, canonical node/edge IDs, evidence `joinBasis`, `availability`, distinct five-plane statuses only with exact join, explicit `limitations`.
- Agent/tool/handler/resource/consequence, shared-resource hubs and declared frontiers supported by the projection. Availability of *node vocabulary* never proves a source producer populated it in a selected tenant.
- Real public Kestrel **frozen evaluated snapshot** and exact handler/consequence path-binding; `?path=` selecting a specific path; no invented bridges; source redaction maintains graph relation identity.
- React Flow illustrative sample and accessible static same-source HTML; existing G6 graph, search, scales, lenses, legend, local upstream/downstream focus, fullscreen, export and artifact identity limits.
- Executive/Technical presentation modes, functional `ConsequenceFlowView`, evaluation/Action Assurance result context, Consequence Delta overlays where compatible, historical scope validation.
- Existing `/enterprise/architecture` eight-view explorer, `/delegated-action-integrity` and `/methodology` remain separate owners. System Constellation is not a seventh capability or a second canonical evaluator.

## 4. Recommended premium visual direction
**Visual principle:** Consequence-first **guided path**, evidence-specific **proof inspector**, optional **full topology map**. Match the light-first, premium but restrained editorial style used in the latest Homepage, Platform, DAI, Methodology, Enterprise and Architecture plans. Add no gratuitous animation.

### A. Canonical product hero / first useful diagram
A **compact semantic HTML + SVG** that clearly distinguishes:
- Top row: scoped AI System / Agent → registered or model-visible Tool (qualify) → Handler → Resource / API → Consequential Effect.
- Separate **authority context** rail aligned with relevant operation: Policy authorization, effective IAM permission (only where qualified), delegated business choice (DAI). It does not create fake control-flow edges.
- Separate **evidence/proof strip**: Source established; partial/context only; runtime observation where present; missing proof. Pattern/labels convey statuses, not red/green "good/bad".
- A visible *first proof frontier*: e.g. source-capable record update established, live permission and observed write not established. If the source does not establish a tool-to-handler link, DO NOT draw a visually connected flow; end at frontier and branch next step.
- Right inset: **What HAIEC can establish now**, **What else may matter**, **Next decision**. Show one source-backed finding early; do not require all five planes to establish code capability.
- Clear labeled links: **Explore Kestrel evaluated example**, **Try illustrative sample**, **Run HAIEC AI Assurance** (links to guide; not an inert scan button).

Prefer one small canvas over 7 big generic cards. Use design tokens from public site light/dark theme; dark IDE/terminal may be a bounded inset. Text and headings must be SSR/SEO readable; SVG nodes have accessible names and an adjacent semantic relation list. No canvas screenshot as only explanation.

### B. After hero: evidence questions rather than inaccurate "seven layers"
Use five conceptual questions with links to existing source/evidence owner pages. They are **reader questions**, not physical workflow steps or complete node types:
1. **Which AI system, agent and identity?** Registered objects vs source-discovered agents vs runtime principal.
2. **What tools and actions can it reach?** Declared/registered/model-visible/effective-dispatch/handler/actual consequence different stages.
3. **Which resources and consequences?** External targets, data/stores, shared hubs and concrete effect class.
4. **What authority permits the choice?** Policy, IAM effective grant where established, delegated discretion through DAI, native mediation only when integrated.
5. **What does the evidence establish?** Scan/basis, edge JoinBasis, coverage/freshness, verified report, observability and first unknown.
Also briefly introduce five independent HAIEC evidence planes as *comparison views* and point to DAI without repeating whole DAI page.

### C. Two teaching experiences, same style, distinct status
- **Illustrative sample:** retain same `SAMPLE_PROJECTION`, preserve static HTML accessible fallback, simplify first frame and move CTO long-form checklist/crosswalk behind deliberate "Technical details". Do not add unsupported impressive green joins to fixture.
- **Kestrel frozen evaluated source:** keep **Overview** as default (consequence-first), keep the other tabs and the fully inspectable System Map as an explicit "Explore complete map view" second-level visual. Name advanced tab clearly, explain bounded displayed subgraph. Avoid forcing full G6 initial load/first content. Add a clickable anchor/thumbnail/CTA to the existing Map tab.
- **Authenticated workspace:** preserve existing Current vs Evaluation source switch, exact path IDs, status/provenance. Improve shared presentation UI only after verifying it does not break tenant/evaluation projection behavior. Do not leak current customer system data into public example.

### D. Diagram visual grammar to reuse across HAIEC
1. **Shape / icon = entity role:** AI system/agent, tool/API, handler, resource, consequence, policy/evidence object. A consequence is not automatically a vulnerability.
2. **Edge direction = supported action/data relationship**, not inferred runtime execution; only existing canonical IDs can form edges in real/evaluated maps.
3. **Line pattern = evidence/join strength**; relation type in label; visual uncertainty is not alert severity. Add readable legend text.
4. **Status = source availability/scope** distinct from action disposition, risk finding, connection-state and runtime witness.
5. **Temporal badge = current source vs frozen evaluation**; show exact evaluation identity when applicable, unknown if unavailable; no fallback fabricated source-commit.
6. **Five evidence views and DAI are overlays/context inspectors**, not five node layers or false physical graph connections.
7. **No pseudo-live animations** in static evaluated cases; if adding transitions use short, controlled, reduced-motion-safe focus only. Present all six core capabilities equally if cross-linked; do not privilege Govern/Protect.
8. **Print/SEO/mobile**: semantic HTML alongside SVG, responsive small representation, keyboard navigation, source/evidence alt text, no 8px required reading size.

## 5. Acceptance and implementation order for Devin
**P0 Product-first in-place enhancement**: read latest Main and prior page plans; preserve all existing sections/CTAs, convert seven-layer copy, add one native server-renderable cause/effect diagram and a three-way sample/evaluated/MCP journey. Fix sample metadata broken character. No fourth URL or new engine.

**P1 Renderer truth hygiene**: first address the inert Kestrel `onExplainPath` / "Open technical proof" action; reconcile universal 14 product-frontier strings and synthetic system grouping AVAILABLE presentation; remove ambiguous solid=observed phrasing; ensure scoped subgraph notices are customer-readable. Avoid changing canonical evaluator/output schema and avoid starting a new graph engine.

**P2 Visual parity and accessibility**: light-first page, compact, clearly separated status/role line styles and evidence sidebar; source-aware labels in React Flow/G6 without rewriting both renderers; preserve actual Kestrel default consequence-first. Accessible relation table/list and mobile detail pane, with tests.

**P3 Optional future study**: if a true org-wide cross-system constellation is demanded, identify independent identity joins and customer sources first (E6 explicitly deferred). Do NOT market or build a global multitenant graph in this page pass.

### Focused validation examples (not an exhaustive platform E2E)
- Product page SSR H1, hero diagram, five conceptual questions, exact three CTAs.
- Sample and evaluated pages each maintain distinct source/truth banners; sample never shows issued Assurance.
- A static-only source path with no observation does not get an "Observed" or "Effectively Granted" proof badge.
- Evaluation view requires exact `evaluationId`; a failed projection cannot silently substitute current source.
- Kestrel `?path=` changes exact selected path and corresponding graph focus; ambiguous handler demands explicit consequence choice.
- Genuine action proof button either navigates to exact bound artifact or correctly explains that no qualified proof is available.
- Edge joinBasis STATIC is never described as runtime observation; missing canonical relation never visually bridges through dotted line.
- Static `productFrontiers` not automatically labeled an active system failure or unsupported feature if current producer covers it.
- Root group "Established" doesn't imply every child/source/plane established. Color/line patterns retain distinctions.
- At 390 / 768 / 1440, graph + inspectors + legend can be used; no oversized modal covering navigation; keyboard alternative and reduced-motion check.
- No new routes, no duplicate canonicals, no broken `/sample-reports/kestrel` links, no fake live customer counts; run targeted typecheck/lint/component tests, preserve existing UI regression fixture contract.

**Implementation scope:** One focused website PR after existing prototype-reconciliation work is finished. Prefer common native components and current theme tokens; never paste standalone HTML into app. Merge after required checks and policy if later authorized. No manual production deployment in planning task.

## 6. Reuse and boundaries
Reference:
- [Prior diagram critique and deterministic graph limits](ACTION-TOPOLOGY-MOCK-DETERMINISTIC-ENGINE-AND-SIX-DIAGRAMS-INDEPENDENT-REVIEW-2026-10-18.md)
- [E6 implemented per-system estate and assurance case](E6-UNIFIED-ENTERPRISE-ESTATE-AND-ASSURANCE-CASE-IMPLEMENTATION-RECORD-2026-10-20.md)
- [Homepage V3 source path / DAI / MCP design](WEBSITE-HOMEPAGE-PRODUCT-UX-V2-HERO-DAI-MCP-PLAYBACK-DESIGN-2026-10-20.md)
- [DAI public design](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md)
- [Assurance source and evidence planes](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md)
- [MCP first-run + optional evidence sources](WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md)
- [Prior public page preservation contract](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md)

**Page ownership boundaries:** Platform explains architecture; System Constellation explains reach/consequence graph and proof frontier; DAI explains delegated business decision; Evidence explains provenance; Assurance owns the deterministic disposition; Controls owns tests/control effects; MCP guide owns agent setup. The diagram links them without claiming it executes them.

**Review scope limitations:** Read GitHub Main source and public indexed text, not a complete interactive-browser/screenshot acceptance or private customer session. UI observations about density are code-derived and should be verified visually during implementation. Public source may lag a deployed version; implementation must refresh Main and deployed build identity.
