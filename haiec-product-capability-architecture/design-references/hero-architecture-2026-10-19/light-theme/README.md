# Light-theme HAIEC architecture visuals — Design pack (2026-10-20)

**Status:** six vector files (five full diagrams + one compact hero), searchable semantic HTML gallery and validated planning documents are committed. Five high-resolution image-generated PNG reference originals are archived **in this conversation ZIP**, **not yet in GitHub**. HAIEC site deployment is **NOT_RUN**.

## Review first
- [Website placement and Devin handoff](WEBSITE-PLACEMENT-AND-DEVIN-HANDOFF.md)
- [Light-theme interactive-ready semantic HTML gallery](light-theme-architecture-gallery.html)
- [Exact PNG source inventory and import status](LIGHT-THEME-PNG-MANIFEST.json)
- [Integrity-verifying PNG importer](import-five-generated-pngs.py)

## Preferred customer-facing source assets
| Website surface | Exact editable vector reference |
|---|---|
| **Homepage hero** — replace existing HeroFlowDiagram only | [Compact unified architecture: equal visual emphasis across six capabilities](01-homepage-unified-architecture-hero-compact.svg) |
| Homepage broader/fullscreen reference, only if separately useful | [Full light unified architecture](01-homepage-unified-architecture-light.svg) |
| Homepage evidence & authority section | [DAI and five separate evidence planes](02-homepage-dai-evidence-relationships-light.svg) |
| `/enterprise/architecture` | [Evidence, authority and outcome flow](03-enterprise-evidence-outcome-flow-light.svg) |
| `/platform` | [Native-table-aligned capability & workflow matrix](04-platform-workflow-matrix-light.svg) |
| `/methodology` | [Fact-first capability engine summary](05-methodology-capability-engine-light.svg) |

**Do not replace existing homepage ProductShowcase animated IDE/MCP terminal, SampleMapPreview or AuthorityPlanesFigure.** Current HAIEC source shows the actual hero graphic is `HeroFlowDiagram`; the deprecated `HeroMcpTerminal` no longer exists. Preserve hero copy and CTAs.

**Why governance / protection used to dominate original #03:** strong orange/red saturation and central positioning, not a product priority. The new compact hero enforces equal card fill, size, border weight and typography for all six.

## Staging the five PNG reference originals
Download this conversation's `HAIEC_Light_Theme_Architecture_Five_Images_2026-10-20.zip` into an authorized dev workspace/clone. Then:

```bash
python haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/light-theme/import-five-generated-pngs.py \
  --archive /path/to/HAIEC_Light_Theme_Architecture_Five_Images_2026-10-20.zip \
  --repo /path/to/common-repo-drive
git add haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/light-theme/generated-originals/
git commit -m "assets(haiec): preserve five generated light architecture reference PNGs"
git push
```

The importer verifies SHA-256 and refuses mismatched overwrites. Mark `PNG_REFERENCE_BINARY=GITHUB_VERIFIED` only after GitHub remote readback matches all five hashes. Do **not** publish PNG raster text verbatim: the generated art contains unqualified universal protection, immutable lineage, zero FAR and other claims that were corrected in the editorial SVG sources.

## Publication and SEO
SVG is editable + text-bearing, but meaningful SEO requires HTML rendered server-side with `h2`, `figure`, `figcaption`, supporting narrative, schema/metadata parity and native table where applicable. Keep `/`, `/platform`, `/methodology`, `/enterprise/architecture` canonical (no duplicate indexable gallery route). Use equal-weight features, short mobile art, optional linked details, 390/768/1440 visual acceptance, keyboard/focus and reduced motion checks.

All image assets are **illustrative**. Do not imply that the rendering is a real Kestrel evaluation or that human approval proves target-side enforcement.
