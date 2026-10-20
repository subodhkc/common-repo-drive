> **2026-10-20 SOURCE-TRUTH UPDATE / IMPORTANT:** [Updated homepage light-first and first-finding design plan](../../../../haiec-product-capability-architecture/WEBSITE-HOMEPAGE-FIRST-FINDINGS-LIGHT-FIRST-DESIGN-COPY-CONVERSION-PLAN-2026-10-20.md) and [preview](../../../../haiec-product-capability-architecture/design-references/homepage-2026-10-20/homepage-light-first-first-findings-enterprise-editorial-preview.html) supersede **only the stale replacement instruction** below. Current HAIEC Main `components/homepage/HeroFlowDiagram.tsx` **already imports/renders `HeroArchitectureExplorer.tsx` — interactive native HTML six peer cards with SSR text on a light card** (verified 2026-10-20). The old below statement that the hero is a legacy static SVG is OUTDATED. **DO NOT downgrade or replace the shipped interactive component merely to import `01-homepage-unified-architecture-hero-compact.svg`**. Preserve all existing homepage animation, System Constellation, DAI, architecture sample and CTA functionality. Existing SVGs remain canonical design reference and fallbacks where useful. User declined PNG binary import.

# HAIEC — Light Theme Website Architecture Visuals: Canonical Placement and Devin Handoff
**Status:** 6 new SEO-readable **light SVG** files plus standalone **light HTML gallery** committed to Common Repo. Five user-directed image-generated **PNG reference originals** retained in conversation ZIP `HAIEC_Light_Theme_Architecture_Five_Images_2026-10-20.zip`; PNG **binary import into GitHub NOT DONE** pending authenticated `import-five-generated-pngs.py`. HAIEC homepage/site **NOT CHANGED or DEPLOYED** by this design task.
**Source hierarchy:** Actual HAIEC Main source and truthful capability evidence > diagram/marketing illustration > image-generated raster text. Older 7-image original collection/previous dark SVGs remain preserved and are not overwritten.

## Most important current-site finding
Current HAIEC homepage `app/page.tsx` hero uses `components/homepage/HeroFlowDiagram.tsx` (SVG `public/diagrams/haiec-operational-dependency-flow.svg`) — it does **not** use the now-removed `HeroMcpTerminal` component. The real animated terminal is `components/hero/ProductShowcase.tsx`, rendered farther down the homepage around section A3. Homepage also contains `SampleMapPreview` (System Constellation) and `AuthorityPlanesFigure` (Evidence & Authority section). **Preserve all three and their motion/fallback behaviors.** Only the hero's right illustration is an authorized replacement candidate. Do not revert hero copy, CTAs, other sections, structured data, route analytics or performance protections.

## Approved homepage visual hierarchy
1. **Hero image:** NEW [compact light unified architecture](01-homepage-unified-architecture-hero-compact.svg), not the full-width infographic! Site right column currently ~3/5 of hero grid; the 960×685 compact composition uses 3×2 equal-weight cards and more readable typography than the full 1440×835 illustration. White rounded figure on a dark homepage shell is permitted: give it an intentional neutral/light card frame, adaptive heights, balanced contrast and caption. Provide a native accessible text transcript/short capability list in SSR HTML. The expanded [full-width unified architecture](01-homepage-unified-architecture-light.svg) is an option for later product section / full-size download, not the compressed hero asset.
2. **DAI on homepage:** NEW [light DAI evidence relationships](02-homepage-dai-evidence-relationships-light.svg) as a **compact additional or companion figure within existing Evidence & Authority** section D, near `AuthorityPlanesFigure` and the existing five evidence plane row. Keep current text, comparison, `AuthorityPlanesFigure`, sample Kestrel and proof caveats. Prefer a short screenshot/figure plus expandable `details` panel with source-authoritative HTML transcript, or a short DAI inline teaser linked to `/methodology`. Do not paste 1440×880 full diagram at tiny scale or add a duplicate five-plane explainer section. Don't imply it is executed Kestrel evidence.
3. **Preserve ProductShowcase terminal animation**, its static fallback, and existing hero CTAs, reveal sections, SampleMapPreview, AuthorityPlanesFigure, site nav/SEO and sample-report paths. **Do not replace homepage body with five infographics.** One hero plus one DAI-enhancement gives clear narrative; keep other visuals on supporting pages.
4. Consider a small text CTA under DAI: “Explore how HAIEC compares authority, capability and observed behavior” → canonical `/methodology` or D3 in `/enterprise/architecture`, with no competing new page.

## Supporting page mapping — reuse, don't create competing routes
| Light design reference | Primary route | Integration location | Important constraints |
|---|---|---|---|
| [01 Compact / full Unified Architecture](01-homepage-unified-architecture-hero-compact.svg) / [full](01-homepage-unified-architecture-light.svg) | `/` | Existing `HeroFlowDiagram` right-column slot ONLY; optionally full art under existing homepage platform explainer if it replaces redundant imagery | Six cards Discover, Evaluate, Authorize, Monitor, Protect, Verify visually equal. Existing copy and animations preserved. No claim that all six are on for every customer. |
| [02 DAI & Evidence Relationships](02-homepage-dai-evidence-relationships-light.svg) | `/` section D; contextual link to `/methodology` | Existing Evidence & Authority section near `AuthorityPlanesFigure`, not a second hero | Request/policy/granted/code/observed are distinct. DAI is a bounded comparison; not a universal C⊆D guarantee. |
| [03 Evidence & Outcome Flow](03-enterprise-evidence-outcome-flow-light.svg) | `/enterprise/architecture` | Intro summary or existing expandable panel of the **current 12-view interactive explorer** | Do not replicate 12 views or invent a mandatory evaluation→approval→enforcement pipeline. |
| [04 Workflow Matrix](04-platform-workflow-matrix-light.svg) | `/platform` | Existing capabilities / jobs section, preferably **native responsive HTML table** with SVG thumbnail, not screenshot-only text | Verify each row against current availability, entitlements and evidence owners. Do not advertise unshipped optional services as active. |
| [05 Fact/Capability Engine](05-methodology-capability-engine-light.svg) | `/methodology` | Existing “From question to evidence-bound conclusion” explainer; show four domains as **conceptual areas, not required phases** | Three actual HAIEC pillars remain Understand→Assure→Govern & Operate. DAI is assurance family, native protection conditional. |

**Canonical deeper destination**: `/enterprise/architecture`. Avoid new `/architecture-v2` / `/hero-gallery` indexed production routes without approved user objective. This self-contained gallery is a design reference not a live marketing route.

## Why old #03 made governance and protection appear more important
Orange for Governance and red for Protect have stronger saturation/contrast and visual urgency, particularly centered among comparatively cool-toned neighbors. This created perceived priority. **Color ≠ HAIEC workflow priority.** The compact hero uses identical white card fill, stroke, radius, heading weight and size for all six; only numbered icons differ uniformly, no colored recommended badge, animation priority or forced sequence. A capability may be unavailable/conditional; users choose based on objective and evidence.

## Generated PNG risk review — do not publish untouched raster copy
Image generation produced attractive light raster references, but some text still overstates shipped/qualified reality:
- **Unified architecture raster**: “immutable lineage & attestations” / unqualified “runtime enforcement” / kill switch language. Use bound provenance and integration-conditional target PEP instead.
- **DAI raster**: “Execute only within approved and constrained scope” reads like an always-on preventive enforcement guarantee; approvals do not make target code obey. “five views” labeling inconsistently uses contextual “System & Environment” as if one of five planes in diagram even though Requested is not an actual matching card. Use the corrected true five-plane SVG.
- **Evidence flow raster**: “Apply decisions and protections” as obligatory stage, “signed outputs” and example universal “60-sec” replay are not established for every customer. Four source families and governance are optional/conditional.
- **Workflow matrix raster**: “deployment authorizations” may imply runtime authority and “enforce protections” may exceed connected target. Rename “scoped human decision receipts,” conditional protection.
- **Capability engine raster**: “Zero false assurance rate (FAR) target”, “immutable lineage”, assumed universal telemetry and staged DAI as output — not a verified customer metric/invariant. **Do not publish verbatim**; use corrected light SVG instead.
**Original PNG assets have not been edited in-place; they remain design references** until an owner/editor corrects the pixel text or native HTML/SVG versions are approved as their publication substitutes.

## HTML and SEO contract
- New [static semantic HTML gallery](light-theme-architecture-gallery.html) has native H1/H2, figure captions, context and accessible source SVGs; SVG has `title`, `desc`, real text, not canvas- or bitmap-baked labels.
- On production Next pages **render SSR HTML headings and descriptions**, `<figure><img ... alt="..."/><figcaption>...</figcaption></figure>`, native list/table and real link anchors. Do not rely on SVG alone to rank/answer SEO questions or on JS-only tabs for indexability.
- Reuse existing metadata/canonical `/`, `/platform`, `/methodology`, `/enterprise/architecture`, and current public-site registry/sitemap; do not add duplicate route.
- SVG is static, script-free; standard DOM capability buttons may enhance a figure if interaction is genuinely beneficial, but no backend assessment status fabricated.
- 390px: use a mobile-specific native card stack or editorial abbreviated scene, **not** microscopic full-width 1440px art. For larger screens keep graphic readable at actual right-column dimensions. Honor reduced motion and keyboard navigation.
- A11y: source diagram text is secondary, substantive equivalent HTML summaries accessible in same page. Accessible diagram name and description, no redundant alt and captions. If diagram decorative when adjacent identical text, use decorative handling deliberately.

## Safely executing with Devin
1. Refresh HAIEC Main and Common Repo; inspect `app/page.tsx` (new `HeroFlowDiagram`), `ProductShowcase`, `SampleMapPreview`, `AuthorityPlanesFigure`, `app/platform/page.tsx`, `app/methodology/page.tsx`, `app/enterprise/architecture/page.tsx`; do not follow stale historical assumptions that terminal is in hero.
2. Copy only selected verified light SVG assets from Common Repo to HAIEC `public/...`; add native corresponding HTML copy; hero/DAI first, supporting routes second, as **one bounded editorial design implementation**, no engine changes.
3. Conduct one source-level product truth review (claims above); route/sitemap/SEO a11y/readability checks; focused TS/lint and 390/768/1440 visual/print sanity. No long broad test suite.
4. Merge one PR to Main; verify auto Vercel READY and exact new hero plus ProductShowcase still animated, Source Sample Map and Authority figure present; update Common Repo exact changed components, commit, URL/screenshots and final status.
5. PNG binary provenance: ZIP (conversation attachment) must first be downloaded/placed in Devin sandbox or authorized Git workspace. Run [import script](import-five-generated-pngs.py) with `--archive` and `--repo`. If ZIP not available to Devin, leave `PNG_ORIGINALS_NOT_IMPORTED` and ask for the ZIP; **no invented GitHub PNG URL**. Repo already contains corrected *SVG* equivalents and does not need the PNG imported to implement site.

## Source and release status
| Item | Current |
|---|---|
| Five corrected light-theme editable SVG versions | **SOURCE_COMMITTED** |
| Compact equal-weight homepage hero SVG | **SOURCE_COMMITTED** |
| Search-readable static HTML gallery | **SOURCE_COMMITTED** |
| Five image-generated PNG reference originals | **LOCAL_ZIP_STAGED / GITHUB_BINARY_NOT_IMPORTED** |
| Homepage replacement and DAI placement | **NOT_IMPLEMENTED** |
| Supporting routes updated | **NOT_IMPLEMENTED** |
| Runtime customer evidence, platform engine or MCP changed | **NO** |
