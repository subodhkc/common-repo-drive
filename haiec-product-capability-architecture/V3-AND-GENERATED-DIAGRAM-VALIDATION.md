# V3 and Generated Architecture Diagrams — Validation and Source-Asset Rebuild
**Reviewed:** 2026-10-16. **Status:** Four new vector reconstructions committed; original generated PNG bytes remain conversation assets and are not presented as GitHub-hosted images.

## Diagram mapping
| User-supplied or generated visual | Rebuilt authoritative design document | Status |
|---|---|---|
| `haiec-architecture-infographic-v3.png` white staged product poster | `diagrams/haiec-v3-architecture-corrected.svg` | Rebuilt with source-qualified wording and *capability domains* instead of mandatory stages |
| `haiec_product_architecture_infographic.png` new white architecture | `diagrams/haiec-v3-architecture-corrected.svg` | Shared edited model, not a byte-exact binary copy |
| `neon_haiec_product_architecture_map.png` dark role/workflow map | `diagrams/haiec-three-pillars-six-capabilities.svg` | Rebuilt around 3 pillars and 6 optional capabilities |
| `haiec_product_capability_workflow_matrix.png` illustrated matrix | `diagrams/haiec-workflow-families-matrix.svg` | Rebuilt with 12 independently eligible user workflow families |
| `haiec_product_architecture_flow.png` generated dark flow | `diagrams/haiec-operational-dependency-flow.svg` | Rebuilt as conditional owner/evidence relationships, not mandatory stage flow |
| `haiec_evidence_and_outcome_flow_infographic.png` corrected dark flow | `diagrams/haiec-operational-dependency-flow.svg` | Better source-qualified fork of architecture semantics |
| Earlier six historical diagrams | `diagrams/haiec-platform-workflows.svg` and `diagrams/haiec-technical-evidence-architecture.svg` | Existing corrected models; old original PNGs remain in import queue |

## V3 screenshot factual check
| V3 claim or depiction | Verdict | Required treatment |
|---|---|---|
| GitHub, OTLP, MCP, inventory, AST and reachability families | Grounded, coverage limited | Label integration/producer readiness; local CLI remains preview |
| “Local Compliance Verification” | Unqualified blanket claim | Depict local *bounded* code and evidence analysis only |
| Joern CPG and formula `DCD = C \\ (R ∩ P ∩ G)` | Formula misleading for unknown/incomplete sets | Explain exact evidence-qualified comparisons. Do not use a universal numeric mismatch rule or assume CPG always runs |
| DAI core invariant `C ⊆ D` | Desired policy relation, not enforced customer property | Label criterion with evaluated scope and source boundary, **not invariant proved for arbitrary agents** |
| “Zero False Assurance Rate (FAR = 0.0)” | Not demonstrated | Remove entirely. Use `UNKNOWN ≠ PASS` and no silent evidence promotion |
| “Active protection,” kill switch and real-time telemetry | Conditional | Integration-specific and receipt-backed, with gather/polling where applicable |
| “Automated re-evaluation” / “automated rule testing” | Selectively supported | Disclose eligibility, trigger, run identity, executable vs registered-only rules |
| “Complete Evidence Packages / Immutable Provenance” | Overstated | Exact evaluation-bound artifacts; hash-bound/integrity-checked ≠ immutable or third-party attested |
| NIST AI RMF / ISO 42001 / OWASP Agentic | Mapping available, not certification | Describe applicable standards alignment and mapped controls, not blanket compliance |
| Stage sequence and DAI as stage-four output | Architecture incorrect | DAI within selected Assurance; Governance and live Operations independent; outputs on relevant selected workflows |

## Other generated image corrections
- The first dark flow image included `Zero False Assurance Rate (FAR)`. The last corrected generation removes that exact phrase but still uses `60-second evidence replay` as if universal and “signed outputs” where receipt type must be checked. **Neither bitmap is recommended for production without textual QA.**
- The eight-row picture's “deployment authorizations” phrase could imply a reviewer approval authorizes runtime execution. Replace with “scoped human decision record.”
- The neon architecture's “immutable lineage” needs qualified cryptographic language; a record digest cannot independently establish retention or tamper resistance.
- Some generated images portray a complete system scan, live signals or protection without disclosing integration status; the replacement vector diagram has explicit optional/bounded states.

## Version/asset custody
- Corrected SVG files in `diagrams/` are the recommended **source-of-design handoff** for future site implementations and Devin.
- Keep original user-generated PNGs in the conversation or later external media library; they are **not committed** by text-only GitHub operations. Do not claim original PNG upload merely because vector reconstructions exist. No need to block product design on binary import.
- Public website usage: only after source/UX verification, PR build, 360px and desktop viewing, screen-reader labeling, and approved publication.
- Existing HAIEC website draft PR #2217 presently contains the **earlier pair** of corrected SVGs, not these four additions. Review the redesigned three-pillar model before revising that PR.
