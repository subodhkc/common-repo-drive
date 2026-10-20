# HAIEC homepage hero — seven supplied architecture visuals, validation, and editable redesign
**Status:** NEW DESIGN ASSETS COMMITTED IN COMMON REPO. **NOT deployed** to haiec.com; do not present this visual as production evidence.
**Owner intent:** The favorite references are #03 Unified Product Architecture & Capability Map and #04 Evidence, Authority & Outcome Flow. These supersede the earlier assistant recommendation to lead with the older `haiec-platform-workflows.svg` without erasing that historical file.
**Originals archive:** All seven exact full-resolution uploaded PNGs are preserved in the downloadable conversation package `HAIEC_Architecture_References_Originals_and_Gallery.zip` (manifest and checksums included). **The seven original PNG bytes are not yet committed to this GitHub directory.** This is a deliberate binary-upload limitation of this edit route; do not mark `ORIGINAL_RASTERS_IN_REPO` complete or point to nonexistent PNG files. Original filenames and hashes are below for later authenticated binary import.

## Deliverables ready to review
- [Interactive HTML design reference](hero-architecture-explorer.html) — self-contained; two tabs (Unified platform / Evidence & outcome flow), six actionable capability inspector buttons, dark-theme HAIEC composition, accessible tabs and reduced-motion behavior, responsive horizontally inspectable diagrams, no backend calls and no live customer status.
- [Editable SVG: Unified Architecture hero](hero-platform-map.svg) — preferred foundation for the homepage, informed by reference #03.
- [Editable SVG: Evidence & Outcome Flow](hero-evidence-outcome-flow.svg) — technical detail informed by reference #04.
- [Original image source manifest](ORIGINAL-IMAGE-MANIFEST.md) — filenames, checksums, dimensions, dispositions.

**Source versus derivative:** Neither SVG is a pixel-perfect vector tracing. These are fresh, editable HAIEC-corrected interpretations. Preserve the original seven references (and their hashes) during eventual binary import.

## Independent review of the seven uploaded references
| ID | Supplied illustration | Source-derived strengths | Corrective truth before publication | Placement |
|---|---|---|---|---|
| 01 | Product Architecture & Capability Engine, light | Readable four-band category architecture, five planes, proof frontier | A sequential four-stage flow is not a universal HAIEC execution path; DAI is an assurance comparison, not the ultimate output stage | Secondary detail |
| 02 | Deterministic Product Capability & Workflow Matrix | Excellent user/input/output overview; conditional source support noted | Eight numbered workflow rows are *choices*, not a mandatory setup staircase; entitlements and sources vary | Downloadable reference / documentation |
| **03** | **Unified Product Architecture & Capability Map** | **Best visual hierarchy**: personas → shared workspace → six selectable jobs → evidence foundation → outputs | Do not render Workflow Router/Audit Orchestrator as a mandatory dependency; never promise universal protection, immutable universal receipts or all integrations | **Selected hero architecture** |
| **04** | **Product Architecture — Evidence, Authority & Outcome Flow** | **Best explanatory flow:** source qualification, supported action paths, independent human decisions, evidence outcomes and unknown | Different connected source types, actual approvals and protection require their own basis; any graph implying universal forced sequence must be qualified | **Technical detail / second tab** |
| 05 | Delegated Action Integrity & Evidence Pipeline | Clean linear organizational sketch | Wrong mandatory orchestrator → evidence → decision → DAI pipeline; monitoring and security do not require completed Assurance runs | Historical, do not publish |
| 06 | Infographic v2 (sequential pipeline) | Text density and hierarchical presentation useful | Unsupported 44/44 reachability or broad FAR=0/universal delegated invariant; “active protection” not generally established | Historical, unsafe without rework |
| 07 | Infographic v3 (light four-stage) | Good clean information density; readable grouped cards | Universal `C ⊆ D`, zero false assurances and active runtime enforcement are not proven product guarantees | Historical style reference, unsafe as content |

## Architecture and UX correction contract
1. Keep **three narrative pillars**: Understand → Assure → Govern & Operate. The process is **not** a required ordered onboarding flow.
2. Keep six **independent customer capabilities**: Discover, Evaluate, Authorize, Monitor, Protect, Verify. Each has local applicability, source, authorization and entitlement requirements.
3. Show **five different evidence planes**: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. Unknown and not assessed are explicit. A declared or structurally reachable path does not prove execution, and runtime absence does not prove safety.
4. Qualified evidence core operates as a common truth foundation. Never treat source ingestion as automatically qualified fact or install a universal graph engine into the marketing UI.
5. Human decision and operational enforcement are separate. Native protection requires a verified real target mediation hook, owner consent and observed receipt. Neither approval nor kill-switch configuration proves target-denial effect.
6. Do **not** repeat broad 44/44, 0% FAR, universally immutable attestation, all-sites complete, or certification claims. Scoped receipts preserve their native record/verification states.
7. Preserve product claims/CTA/brand already live in `app/page.tsx`. No competing SEO route; visual should be **illustrative** next to a canonical sample deep link.
8. Hero above fold: treat unified architecture as compact visual, not an unreadable 1400-pixel canvas. Focus primary copy on **what AI can do, under whose authority, what consequence is possible and where evidence ends**. Technical flow is available on explicit user selection or below fold.
9. If production adaptation proceeds, reuse existing `SampleMapPreview` and `HeroMcpTerminal` rather than silently deleting them; SVG/HTML here is standalone presentation reference with NO interactive HAIEC engines.
10. Test actual 390/768/1440, keyboard focus, VoiceOver/NVDA, zoom, reduced motion, image readability, real CTAs/CSP/performance before shipping; source commit is **CODE_AVAILABLE**, not production QA.

## Website integration recommendation — do not deploy without separate authorization
- Review `app/page.tsx` hero `HeroMcpTerminal`, below-fold `SampleMapPreview`, `AuthorityPlanesFigure`, `ProductShowcase`.
- The lightweight platform SVG can sit within/just below the hero, with customer job inspector details in HTML (native `button` controls), not tightly bound to SVG script for critical interaction.
- Keep exact technical page at `/enterprise/architecture` as the deep destination; no second 12-view architecture page.
- The second diagram demonstrates cause/effect and five separate evidence planes, should not be labeled as a customer evaluated trace.
- Preserve references `DIAGRAM-SPECIFICATIONS.md` and the six older diagram masters as historical material. This choice is a new editorial selection rather than refutation of earlier source-status audits.

## Source originals: staging accountability
The conversation downloadable ZIP contains **original PNG bytes** and a self-contained HTML contact sheet. During later binary import into GitHub, place original filenames under `originals/`, compare recorded SHA-256 in `ORIGINAL-IMAGE-MANIFEST.md`, then update manifest status to `GITHUB_VERIFIED` and record the commit. Do not create placeholders using original `.png` extensions.
