# HAIEC Product Capability & Workflow Architecture

This folder is the shared source of planning and Devin handoff artifacts for HAIEC, LogSense and the manufacturing application. It is a **planning and provenance repository**, not executable product truth.

## Deliverables

- `HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md`: evidence-backed capability and user workflow matrix
- `SPECIALIZED-PRODUCT-DISCOVERY.md`: 20 adjacent code-present product families requiring further readiness qualification
- `CAPABILITY-MATRIX.csv`: machine-readable inventory
- `ARCHITECTURE-DIAGRAM-REVIEW.md`: detailed review of historical user-supplied designs and claim corrections
- `DIAGRAM-SPECIFICATIONS.md`: corrected diagrams for future HAIEC website work
- `DEVIN-HANDOFF.md`: implementation brief with priorities and validation instructions
- `source-images/`: reference images provided by the product owner (see asset status in `source-images/README.md`)

**Authority:** Source code, versioned contracts and runtime evidence in their respective repositories supersede this planning snapshot. Implementation status must be qualified; neither a diagram nor a readme is operational proof.

**Production:** This work does not modify or deploy `haiec-website`.

## Delivery status (16 October 2026)

- **Committed:** 87-entry capability matrix and CSV; six-image factual review; original image SHA manifest and safe import script; editable corrected SVGs; product diagram/UX specification; Devin handoff.
- **Website:** [HAIEC draft PR #2217](https://github.com/subodhkc/haiec-website/pull/2217) contains homepage architecture section and both SVGs. No production release has been claimed; build and visual acceptance are pending.
- **Binary images:** six exact PNG attachments preserved in conversation ZIP; **GitHub binary upload still pending**. See `source-images/README.md` and `source-images/MANIFEST.json`.

## Source revisions inspected

- HAIEC `Main`: `64c615f59697e9698f64638ea978edcdb28da534`
- LogSense `main`: `c7491ba9124e5df72d250f1b32a4b2c77ccc2993`
- Manufacturing `main`: `5d2bcc9a732e4167ab15dac7bbbbf8615e4a472c`

## October 16 operational UX convergence update

**Recommended customer information architecture:** 3 pillars (Understand / Assure / Govern & Operate), with 6 independently selectable capabilities (Discover / Evaluate / Authorize / Monitor / Protect / Verify). No mandatory four-stage evaluation or setup sequence.

- `PRODUCT-UX-OPERATIONAL-REVIEW-AND-DECISION-2026-10-16.md` — detailed review, role/org workflows, UI–MCP parity, controls, readiness, dependency and implementation gates
- `MATRIX-COMPLETENESS-AND-RECONCILIATION-PLAN.md` — why the original 87-row register is not yet exhaustive; coverage audit method
- `CAPABILITY-MATRIX-V2-SCHEMA.json` — proposed structured evidence columns for closure
- `V3-AND-GENERATED-DIAGRAM-VALIDATION.md` — individual infographic claim checks and reconstructed diagram mapping
- `diagrams/haiec-v3-architecture-corrected.svg` — full white product domains map
- `diagrams/haiec-three-pillars-six-capabilities.svg` — dark three-pillar product overview
- `diagrams/haiec-workflow-families-matrix.svg` — 12 workflow families covering primary users, minimum evidence, and outputs
- `diagrams/haiec-operational-dependency-flow.svg` — branched workflow dependency architecture
- `scripts/generate-workflow-census.py` — a tracked-file source census; does **not** auto-claim semantic product completeness

**Publication:** site draft PR #2217 still contains earlier pair of architecture SVGs; newer designs are committed here and require selection/visual review before the site PR changes.

## Deep repository and market reconciliation (2026-10-16)

- `DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md` — current source-confirmed audit, Accenture/Microsoft/IBM/AWS/Cisco benchmark, clear operational product and UX priorities
- `DEEP-AUDIT-ISSUE-REGISTER.csv` — 18 prioritized, source-anchored findings and candidate remediation owners
- Existing 87-row matrix is **curated but not exhaustive**. Do not declare parity or completeness without current route-to-tool-to-producer acceptance.
- No production HAIEC code was modified by this audit; diagram PR #2217 remains review-only.


## Own-vs-integrate strategy (2026-10-16)

- `OWN-REUSE-INTEGRATE-DEFER-ENTERPRISE-STRATEGY-2026-10-16.md` — source-checked architecture, existing OTLP/MCP/DAI/guardrail/human-decision reuse, external provider/OSS comparison, one production-grade example, exact no-go claims.
- `INTEGRATION-AND-BUILD-DECISION-REGISTER.csv` — 24 candidate investments with decision, source owner, enterprise leverage, release gate and priority.
- A correction appendix in `DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md` reconciles existing OTLP receiver and guardrail persistence omitted from earlier blanket statements.
- **Preferred first integrator:** AWS AgentCore Gateway policy-mode and applied-action evidence; provider read-only integration first, no new policy engine or guaranteed customer runtime kill.
- Product development remains governed by **one user goal → exact prerequisites → qualified evidence → canonical decision/proof**, with independent operation paths and explicit unknowns.
