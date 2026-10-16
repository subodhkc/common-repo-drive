# HAIEC Common Repository Drive

Shared, version-controlled **planning, diagrams and developer handoff** for HAIEC projects. This is deliberately not the HAIEC execution repository, runtime evidence database, or a canonical assurance policy store. Product truth continues to live in its owning repositories and operational evidence systems.

## Active project handoffs

### [HAIEC Product Capability & Workflow Architecture](./haiec-product-capability-architecture/README.md)

- [87-entry source-anchored capability/workflow matrix](./haiec-product-capability-architecture/HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md)
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
