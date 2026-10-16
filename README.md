# HAIEC Common Repository Drive

Shared, version-controlled **planning, diagrams and developer handoff** for HAIEC projects. This is deliberately not the HAIEC execution repository, runtime evidence database, or a canonical assurance policy store. Product truth continues to live in its owning repositories and operational evidence systems.

## Active project handoffs

### [HAIEC Product Capability & Workflow Architecture](./haiec-product-capability-architecture/README.md)

- [87-entry source-anchored capability/workflow matrix](./haiec-product-capability-architecture/HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md)
- [Supplementary 20-module product discovery register](./haiec-product-capability-architecture/SPECIALIZED-PRODUCT-DISCOVERY.md)
- [Machine-readable matrix CSV](./haiec-product-capability-architecture/CAPABILITY-MATRIX.csv)
- [Validation of six owner-supplied historical diagrams](./haiec-product-capability-architecture/ARCHITECTURE-DIAGRAM-REVIEW.md)
- [Corrected website diagrams and design contract](./haiec-product-capability-architecture/DIAGRAM-SPECIFICATIONS.md)
- [Devin delivery plan and truth constraints](./haiec-product-capability-architecture/DEVIN-HANDOFF.md)
- [Six original PNG hash manifest and import plan](./haiec-product-capability-architecture/source-images/README.md)
- [Website architecture staging PR #2217](https://github.com/subodhkc/haiec-website/pull/2217) (draft, not deployed)

## Source ownership

| Repository | Responsibility |
|---|---|
| `subodhkc/haiec-website` | Production product, deterministic assurance, evidence, governance, MCP, and operational control services |
| `subodhkc/Enterprise-AI-Forensic-Log-Analyzer-` | Deterministic LogSense offline forensic reconstruction; optional read-only AI explanation |
| `subodhkc/manufacturing-ai-assurance-haiec` | Clearly labeled fictional manufacturing/industry fixtures and reference presentation, no alternative engine |

## Working agreements

1. Design artifacts never establish a product implementation or an assurance verdict. Link every implemented claim to the canonical owner and revision.
2. Keep human authority decisions separate from policy, evaluations, and actual enforcement.
3. Never commit customer secrets, tokens, protected customer evidence, private personal information, or live production traces to this public repository.
4. Historical screenshots and synthetic scenarios require labels, with source manifests and hashes where possible.
5. Proposed website diagrams, roadmaps and UX recommendations are non-authoritative until merged, deployed and qualified.
6. For Devin, begin at the project's README and handoff document; reconcile all code anchors against the latest source head before coding.

**Asset note:** the six uploaded original PNGs are not yet pushed to GitHub; they are available in a byte-exact ZIP from the original conversation for verified import. Do not present them as published repo files until import and GitHub inspection succeed.

### Latest operational UX review and corrected diagrams (2026-10-16)

- [Product UX, operational flow and 3-pillar decision plan](./haiec-product-capability-architecture/PRODUCT-UX-OPERATIONAL-REVIEW-AND-DECISION-2026-10-16.md)
- [Capability matrix completeness audit and source-census gate](./haiec-product-capability-architecture/MATRIX-COMPLETENESS-AND-RECONCILIATION-PLAN.md)
- [V3/new-generated image validation](./haiec-product-capability-architecture/V3-AND-GENERATED-DIAGRAM-VALIDATION.md)
- [Rebuilt V3 product architecture (SVG)](./haiec-product-capability-architecture/diagrams/haiec-v3-architecture-corrected.svg)
- [Three pillars / six capabilities (SVG)](./haiec-product-capability-architecture/diagrams/haiec-three-pillars-six-capabilities.svg)
- [12-family capability/workflow diagram (SVG)](./haiec-product-capability-architecture/diagrams/haiec-workflow-families-matrix.svg)
- [Operational dependency flow diagram (SVG)](./haiec-product-capability-architecture/diagrams/haiec-operational-dependency-flow.svg)

**Asset honesty:** Exact generated PNGs from the conversation are not binary-committed; editable, corrected SVG reconstructions are. Original six historical PNGs remain pending source-image import.

### Deep repository and enterprise competitive audit

- [Deep HAIEC repository, dormant-module and competitive review](./haiec-product-capability-architecture/DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md)
- [18-item prioritized source finding register](./haiec-product-capability-architecture/DEEP-AUDIT-ISSUE-REGISTER.csv)


### Own / Reuse / Integrate / Defer — enterprise strategy

- [Evidence-qualified HAIEC build-vs-integrate decision and flagship enterprise proof](./haiec-product-capability-architecture/OWN-REUSE-INTEGRATE-DEFER-ENTERPRISE-STRATEGY-2026-10-16.md)
- [23-item transport and integration investment decision register](./haiec-product-capability-architecture/INTEGRATION-AND-BUILD-DECISION-REGISTER.csv)

HAIEC owns consequential-action assurance. Use external policy engines, agent identities, telemetry infrastructure, runtime enforcement and signing mechanisms through verified transports where valuable. **No broad feature additions while canonical workflow and enforcement evidence remain unqualified.**
