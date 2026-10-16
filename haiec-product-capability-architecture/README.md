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
