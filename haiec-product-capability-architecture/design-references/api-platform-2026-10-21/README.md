# HAIEC API Platform — Developer Page (design reference)

Versioned copy of the approved standalone HTML/CSS/JS design package for the
public `/api-platform` route on `subodhkc/haiec-website`.

- `index.html` — approved standalone design prototype (2026-10-21)
- `api-platform.css`, `api-platform.js` — prototype styling and interactions
- `api-convergence.svg` — three-interfaces-to-one-engine architecture diagram
- `IMPLEMENTATION-PLAN.md` — supplied integration plan
- `previews/` — desktop / tablet / mobile reference screenshots

The website implementation renders this natively (no iframe) at
`/api-platform`: scoped `.ap-scope` stylesheet, server-rendered sections,
client islands for the interface selector, REST/Evidence-Intake/MCP
integration workbench, endpoint explorer (15 versioned REST operations + 5
evidence intake references from `public/openapi/assurance-v1.yaml`), and the
MCP feature. Legacy advanced technical documentation is preserved below the
new design sections.

Design intent preserved: light editorial surface with dark technical panels,
"one deterministic engine, three ways to integrate" convergence narrative,
and the contract explorer filtered by interface family.
