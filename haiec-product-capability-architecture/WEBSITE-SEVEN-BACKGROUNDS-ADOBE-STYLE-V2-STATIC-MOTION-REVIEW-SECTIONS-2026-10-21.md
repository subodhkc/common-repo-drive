# HAIEC light-first capability background study V2 | Adobe-style editorial vector and subtle motion
Date: 2026-10-21. Approval state: Concept preview for user review. This is **not a HAIEC website implementation**. No production source, public page, Vercel deployment, purchase, or user-visible legal/security policy changed.

## User request and design answer
Review original seven HAIEC SVG/HTML backgrounds, enhance to feel crafted like premium Adobe Illustrator + restrained After Effects/Adobe-style motion graphics, align carefully with HAIEC core capabilities and real website sections. Deliver 7 static 1440×810 editable SVGs, 7 independently animated SVG variants, a single-file self-contained offline HTML studio, a ZIP (source files + original modular index/CSS + manifest + README), and high-quality static previews. All requested files were created in the active ChatGPT artifact runtime and are provided as actual sandbox file downloads in the conversation; these source files are **NOT uploaded to Common Repo** by this document and cannot be presumed available to Devin via GitHub until separately copied. The design plan is committed here as the reusable source-of-truth.

## 1. Design critique: first generation vs refined second generation
| Criterion | Original | V2 creative direction |
|---|---|---|
| Hero-readability | Good left-side whitespace but geometry almost disappears at actual scale | Keep a 45–50% quiet text corridor; stronger strokes, larger hero motif and a soft left-side fade |
| Differentiation | Some backgrounds use generic checks or simple lines | Seven concept-specific compositions: constellation, source graph, five evidence streams, delegated choice orbit, connected change chart, operating boundary, published artifact lattice |
| Technical credibility | Large checkmarks risk suggesting verified safe or enforced approval | Replace Authorize/Protect/Verify cartoon checkmarks with scoped branching authority, neutral control gate, hash-like integrity seal, respectively. Decorative art MUST NOT claim live review success |
| Finish | Flat pale gradients, low definition and sparse nodes | Precision grid, layered glass-like cards, purposeful typography in motif, nuanced emerald/teal, depth shadow and restrained cyan/bluish accents |
| Repeatability | Seven independent hand-built treatments | Central 1440×810 SVG tokens: light canvas, shared glass gradient, consistent strokes, background grids, glow, shadow, left fade, UI card hierarchy |
| Animation | Static only | CSS/SVG keyframe variants using ~55s orbit, 6–10s glint/pulse, 18–26s slow dotted path travel; optional by variant, respects reduced motion |
| Responsive | Original hero samples only | HTML studio with desktop/tablet/mobile composition, dark-context framed light panel, visible sample hero copy, opacity slider and static/motion toggle |
| Dev handoff | Source documents described files but no actual V2 artwork | Explicit ZIP, 14 raw SVG files and self-contained HTML as artifacts from conversation; owner to approve before any public implementation |

**Creative descriptor:** precision-engineered editorial vector art, akin to an Adobe Illustrator system with motion-design craft, not a literal .ai Illustrator or After Effects .aep source document. SVG geometry remains vector-editable, with browser CSS animation. No Adobe logo/brand imitation.

## 2. Capability truth and destination map
HAIEC has **six peer independently usable capabilities**, NOT seven. Artwork #01 is shared PLATFORM OVERVIEW; #02–#07 represent the six equally legitimate jobs.

| No. | Visual family | Primary website section | Secondary reuse | The meaning it must NOT imply |
|---|---|---|---|---|
| 01 | Platform Constellation, SIX equal satellite nodes | /platform first product canvas or overview section | /products platform family summary | No mandatory stage or extra capability |
| 02 | Discover: Action Field, large source/tool topology | /ai-inventory hero | /ai-action-access-map introduction | Source potential != production side effect |
| 03 | Evaluate: Evidence Strata, five equal parallel bands | /assurance light evidence-questions section | /evidence /methodology worked claim section | Five planes are independent, not five required sequential connector steps |
| 04 | Authorize: Decision Orbit, neutral decision scope diagram | /delegated-action-integrity hero's framed media region | accountable approval/decision section | A tool grant != delegated business authority; motif is not an approval receipt |
| 05 | Monitor: Change Signals, precise two-trace chart treatment | /platform Monitor subsection; connected runtime evidence section | supported Compliance Twin / Monitor descriptions where accurate | Not proof of continuous live telemetry without connected sources |
| 06 | Protect: Control Boundaries, neutral shield/gate structure | /assurance-controls operating controls subsection | platform Protect subsection | Runtime testing != protection; no automatic production blocking claim |
| 07 | Verify: Receipt Lattice, document with neutral lattice/hash seal | /verify header area, away from form fields | /assurance issued-receipt and evidence-integrity section | Record integrity != source truth, third-party certification or new successful verification |

## 3. Recommended implementation placement and motion
### Placement
- The background is **supportive, never information-bearing**. Title, CTA, proof labels and FAQs always remain server-readable HTML with correct canonical SEO. Native factual architecture diagrams remain their own authored semantic figures. No SVG art replacing actual DAI, System Constellation, receipt and control proof illustrations.
- Start with one controlled light-surface hero or half-width media region on /platform (do not overwrite full-page dark site theme). Test on /ai-inventory and the white evidence section of /assurance. If accepted, expand to DAI/Verify as contained light editorial canvases. Monitor and Protect must be used inside the relevant sections rather than inventing additional core product landing pages.
- One art-rich hero per page maximum; optional 10%-opacity watermark on ONE supporting section. Cards/data/report statuses must not acquire decorative moving lines behind them.
- Do NOT change homepage hero, animated terminals, public full theme switcher or independent gallery/proof surfaces.
### Motion variants
1. **Ambient orbit** (Platform and Authorize): 55–75 second path rotation that never changes node count/ranking/semantics.
2. **Evidence microflow** (Discover and Evaluate): slow moving dotted highlights on established decorative paths, no simulation of real tool calls.
3. **Change trace glow** (Monitor): 18–26 second understated signal illumination; never show real run state or monitoring connection as active.
4. **Boundary cadence** (Protect): low-opacity scan-line/dashed loop behind neutral gate, not animation of a blocked attack.
5. **Receipt glint** (Verify): very subtle luminosity pulse on neutral seal, not positive "valid" status.
CSS @media (prefers-reduced-motion: reduce) immediately disables all animation; gallery provides explicit Motion toggle. No scroll hijacking, continuous JS timers, massive canvas, external animation libraries or GIF blocking paint. If final implementation needs page-aware animation, use one global static/dynamic media preference only and pause when element is not visible.

## 4. Reusable component sketch (optional future website work, NOT done here)
A HeroBackdrop component with props `variant` in the seven fixed enum values, `animate` default false, optional `density`, and semantic children. Prefer Next.js/CSS background via public SVG filename or aria-hidden img element under absolute overlay; keep DOM copy separate. For production, choose static by default and opt into slow animation only where beneficial, with reduced motion and no layout shift.

Light background palette: #FCFFFE, #F7FBFA, #E8F4F0; forest headings #153B35; jade/teal artwork #118674, #47B69F, slate/cyan secondary; low-contrast left overlay protects copy. SVG 1440×810 viewbox, assets typically ~6–16KB each. Check real WOFF/font tokens from site before implementation, but DO NOT distribute font files.

Responsive tests: 390, 768, 1440 widths, WCAG contrast for actual DOM text, focus-visible, prefers-reduced-motion, dark mode as deliberately framed LIGHT figure instead of automatic color inversion. Do not place animation directly beneath buttons or semantic results.

## 5. Artifact list generated with this review
- `haiec_animated_background_studio_v2.html`: one **self-contained HTML** studio for offline preview, with seven selector tabs, motion toggle, hero-copy toggle, desktop/tablet/mobile preview, dark-context option and opacity slider, plus SVG download links.
- `haiec_capability_backgrounds_adobe_style_v2.zip`: 14 SVG files (seven -static.svg and seven -motion.svg), modular index.html + studio.css, self-contained studio HTML, README and manifest.json.
- `haiec_bg_studio_v2_contact_sheet.png`: a 7-up visual reference image with sample hero copy.
- `haiec_v2_01_platform_hero.png` etc: seven static preview images.
All files are in the current user conversation sandbox. The published GitHub Common Repo contains this description, NOT the raw V2 SVGs. A later approval should copy them into design-references/capability-backdrops-v2/ rather than inventing URLs.

## 6. Quality gates actually run
- All **14 V2 SVGs parsed as valid XML**.
- JavaScript in standalone HTML passed `node --check` syntax validation.
- Each static SVG rendered via CairoSVG and visual contact sheet inspected by model vision.
- All 7 backgrounds packaged and file existence verified in current container.
- Browser automation with local file/http URLs returned `ERR_BLOCKED_BY_ADMINISTRATOR` from the available Chromium environment. **No claim of live-browser motion interactivity acceptance or 390/768/1440 pixel-browser QA**. This does not prove an HTML defect. Re-run a user-facing local browser test of actual animation frames, all gallery controls and responsive legibility before production adoption.

## 7. Editorial recommendation
Adopt 01 Platform, 03 Evaluate and 04 Authorize in a pilot user design review. If approved, stage 02 Discover and 07 Verify. Keep 05 Monitor and 06 Protect as **section backgrounds only** until connected-control-specific customer messaging is fully source-aligned. Background art improves product cohesion but should not become a new homepage design, fake architecture or the main proof of HAIEC's accuracy.

## 8. Preservation
This is a concept and design deliverable: **no production HAIEC site files modified**. Do not deploy from this doc alone. Prior owner request forbids website changes without explicit later authorization.
