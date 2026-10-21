> **2026-10-21 DESIGN V2 SUPERSEDES EARLIER STILLS.** [Enhanced Adobe-style editorial vector, 7 static + 7 subtle-motion SVG variants, source-accurate section placement, risk-free background symbolism, animation behavior, accessibility and QA](WEBSITE-SEVEN-BACKGROUNDS-ADOBE-STYLE-V2-STATIC-MOTION-REVIEW-SECTIONS-2026-10-21.md). The V2 gallery HTML, SVGs, contact sheet and ZIP are linked in the current conversation sandbox, not yet committed as raw binary/vector assets to Common Repo. Six capabilities plus one Platform frame. No HAIEC website changes.

# HAIEC light-theme visual design study | Seven reusable capability background templates

Date: 2026-10-21. Status: DESIGN CONCEPT ONLY, not website source implementation or production deployment. User requested a review of core capability pages, 6–7 light-theme HTML/SVG background concepts, page assignments and visual preview links.

## Site audit and opportunity
Read-only source review of HAIEC Main /platform, /assurance, /delegated-action-integrity, /assurance-controls, /ai-inventory, /evidence, /products/runtime-security, /verify, /ai-action-access-map, /how-it-works and /methodology. Vercel production checked around this task.

- Platform currently has a full dark gradient page shell (app/platform/page.tsx, near line 42). DAI and Assurance Controls also have full dark shells. How It Works is full dark. Assurance alternates dark backgrounds and white sections.
- AI Inventory, Evidence, Runtime Security and Verify use lighter hero/body surfaces but differ greatly in visual motif. Customer perceives separate products rather than one system.
- HAIEC brand and earlier Common Repo brand standard already call for premium light-first editorial presentation with real accessible diagrams and dark theme compatibility. The workspace dark/light theme does NOT automatically make all marketing pages theme-aware.
- **Opportunity is a small consistent visual layer, not a homepage rebuild, new theme engine or repeated giant diagrams.** Existing static diagrams, DAI lenses and animated homepage terminals must be preserved. Backgrounds are ARTWORK and must not replace source-visible/authority/evidence semantic HTML, captions or proof.
- The selected routes do not each have a canonical dedicated public landing: six independently selectable capabilities live inside Platform and related product pages. Monitor and Protect art must be applied to relevant sections or properly scoped product pages; do not invent publicly shipped stand-alone capabilities or make them automatic.

## Seven equal-value SVG templates
| Template | Visual pattern | Recommended route/placement | Why |
|---|---|---|---|
| 01 Platform Constellation | Six equally weighted nodes around shared center, with subtle paths and offset dots | /platform hero or 3-pillar section; /products family | Communicates one platform, six peer capabilities. No icon or pillar highlighted above another. |
| 02 Discover: Action Constellation | Source and tool node graph, source-path mesh, tiny evidence cards | /ai-inventory hero; /ai-action-access-map case introduction | Visual association with connected, discoverable paths, without showing an actual runtime trace. |
| 03 Evaluate: Evidence Strata | Five independent, parallel flowing evidence ribbons | /assurance evidence plane section; /evidence; /methodology | Distinguishes Requested, Policy Authorized, Effectively Granted, Code Capable, Observed, not sequential pipeline or mandatory sources. |
| 04 Authorize: Delegation Fields | Concentric scoped authority boundaries and intersecting decision references | /delegated-action-integrity hero, approver/decision section | Expresses bounded delegated choice, independently of tool permission and source reachability. |
| 05 Monitor: Change Signals | Fine grid, sparse signal traces and time markers | /platform Monitor section, connected monitoring explanation, Compliance Twin if accurate | Suggests change and evidence re-evaluation; NOT a claim HAIEC already continuously observes any specific system. |
| 06 Protect: Boundary Gates | Layered gate rectangles and dotted candidate action paths | /products/runtime-security connected-protection explanation, control operations subsection of /assurance-controls | Communicates operating boundary; NOT evidence that target-side enforcement/kill switch exists or works universally. Runtime testing and protection are DISTINCT capabilities. |
| 07 Verify: Integrity Lattice | Document/receipt outline over quiet linked diamond/hash lattice | /verify public form hero, /assurance issued receipt segment, /evidence integrity | Expresses published artifact integrity, not attested source truth, approval or third-party certification. |

## Preview deliverables made in this conversation
An editable 1440x810 SVG is generated for each of the seven concepts, with a bright off-white canvas, quiet text-safe left third and graph/pattern weight on the right. The independent HTML preview embeds all seven artworks as inline base64 data (self-contained, offline) and supports selecting each, toggling sample hero copy and adjusting opacity. A PNG contact sheet and ZIP with SVGs plus index.html were created.

**Files are currently delivered in this conversation as sandbox download links, not yet committed as actual SVG/HTML files to Common Repo.** Devin cannot assume access to the conversation container. For later implementation, copy the ZIP contents into a new Common Repo design-references/light-capability-backgrounds/ folder or author native site assets after the user approves a concept. Do not fabricate raw GitHub URLs to absent files.

Current available existing Common Repo precedent:
- design-references/hero-architecture-2026-10-19/light-theme/README.md (approved editable light diagrams)
- design-references/platform-products-2026-10-20/platform-products-light-dark... HTML preview
- HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md (existing marketing token/theming and semantic content standards).
Reuse existing diagrams for factual source/proof; these seven are backgrounds only.

## Visual tokens and design requirements
- Default canvas #FAFDFC / #F6FAF9 fading to #ECF7F3. Forest ink #132A2C. Jade/teal/blue/slate accent families, with strict low opacity on all structural paths.
- Reserve roughly 44–50% of width as low-detail text-safe area on the LEFT; right artwork can be fuller but must not compete with screenshot/CTA. Use text in DOM, not in SVG file. Keep text safe at 390px, 768px and 1440px.
- A single decorative illustration should not communicate statuses like PASS/BLOCK or make invented connections look like actual evaluated runtime effects. Status meanings are always text in real UI.
- No decorative animations by default; when used, SVG external static assets under ~20KB each are enough. CSS overlay gradient ensures legibility and dark-mode readable light frames. Do not simply invert background CSS, as that can damage meaning/contrast; either keep a contained pale figure or deliberately render an actual dark asset variant if requested later.
- Design system component suggestion: HeroBackdrop({ variant, density, children }) with CSS background on ::before and a plain fallback. Use a centralized variant map to preserve site consistency; do not introduce external SVG libraries, heavy canvas shaders or overwrite site-wide workspace ThemeToggle.
- Example: .haiec-capability-hero { background: #fafdfc url('/backgrounds/01-platform-light.svg') center / cover no-repeat; } .haiec-capability-hero::before { content:''; position:absolute; inset:0; background:linear-gradient(90deg, rgba(250,253,252,.96), rgba(250,253,252,.35) 60%, transparent); pointer-events:none; } Main text/controls remain semantic elements layered above.
- Use SVG role=presentation/aria-hidden=true when background is purely decorative, or meaningful figcaption if used as a true diagram. Ensure SEO/crawlers can read content without image. Respect prefers-reduced-motion, minimum readable contrast, CSS no-gradient fallback and theme-specific legibility.

## Recommended first publication decision
1. Use template 01 as a bounded light/neutral Platform hero replacement **only if** a real screenshot compare against current dark hero shows improved readability and approved brand parity; don't rebuild the entire dark Platform page at once.
2. Test template 02 on AI Inventory and 03 on Assurance/Evidence split to establish cross-page reuse.
3. Template 04 can complement DAI's existing detailed authority illustration, not replace it.
4. Monitor and Protect only within subject-specific sections when supported. Avoid the visual implying these are always on.
5. Template 07 for Verify as decorative framing, retaining the actual verification controls/statuses and issued receipt semantics.
6. Stage screenshots mobile and dark contexts before adoption, one small shared component and theme token contract; then controlled page-by-page opt-in.

## Overall buyer value
Consistency: six independent capabilities feel like one HAIEC system.
Clarity: visual patterns cue consequence/action, evidence, authority, change, control and integrity.
Readability: light surfaces are suitable for enterprise procurement pages and content-rich SEO.
Efficiency: one SVG component with seven variants prevents seven one-off CSS designs.
Credibility: restrained decoration leaves actual evaluated source and proof readable and prevents false active system status.

No production change or HAIEC repo push authorized by this concept discussion.
