# HAIEC Product Capability & Workflow Architecture

This folder is the shared source of planning and Devin handoff artifacts for HAIEC, LogSense and the manufacturing application. It is a **planning and provenance repository**, not executable product truth.

## Current handoff — read this first (2026-10-16)

- [Pre-Devin Research Closure and Source Decisions](PRE-DEVIN-RESEARCH-CLOSURE-AND-SOURCE-DECISIONS-2026-10-16.md) — complete source-backed product/assurance/security decision packet and primary AWS/MCP/OTel references; **research, not implemented code**.
- [Six customer journeys CSV](SIX-CUSTOMER-JOURNEYS-ACCEPTANCE-RESEARCH-2026-10-16.csv) — six bounded positive/negative acceptance paths. Existing 16-goal UI/MCP/API matrix and 87-row curated inventory remain separate.
- **No parallel HAIEC work from this research session.** HAIEC/Maa source was only read. Devin's active implementation session owns product code. Do not duplicate its edits or treat proposed branch fixes as Main.


## KestrelVoice security baseline and tenant-scoped HAIEC program — current (2026-10-16)

- [Detailed secure SaaS remediation and assurance study](KESTRELVOICE-SECURE-SAAS-INFRASTRUCTURE-HAIEC-ASSURANCE-REMEDIATION-STUDY-2026-10-16.md) — the **current security-first architecture decision**: harden KestrelVoice itself, establish factual telemetry and controls, then expose tenant-specific HAIEC assurance. Supersedes any pilot-first ordering in earlier Kestrel planning documents.
- [37-feature Kestrel capability-to-security crosswalk](KESTRELVOICE-37-CAPABILITY-SECURITY-HAIEC-COVERAGE-CROSSWALK-2026-10-16.csv) — mandatory baseline for every catalog feature, optional tenant-scoped HAIEC overlay, and planned/unsupported exclusion.
- [38 Kestrel security and HAIEC control requirements](KESTRELVOICE-SECURE-SAAS-CONTROLS-REMEDIATION-REGISTER-2026-10-16.csv) — implementation ownership, scope, prerequisite, expected evidence and public-claim limitations.
- **No tests now:** this is research, not runtime acceptance. No KestrelVoice, HAIEC, manufacturing or infrastructure modification from this session.
- **Access:** public common repo. Keep specific private vulnerabilities and exploit details in an access-controlled security backlog, not this repo.


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

## Manufacturing showcase convergence (2026-10-16)

- [MAA — HAIEC full-platform showcase alignment](MAA-HAIEC-FULL-PLATFORM-SHOWCASE-ALIGNMENT-2026-10-16.md): uses the manufacturing reference to demonstrate all appropriate HAIEC product capabilities, adopts a single end-of-dashboard source/methodology disclosure, reconciles the NotebookLM and Station 217 PDF draft content, and protects independent workflow selection and saved evaluations.
- Supporting MAA source-qualified documents are indexed in [MAA product story](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/tree/main/docs/product-story).

## Deep repository and market reconciliation (2026-10-16)

- `DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md` — current source-confirmed audit, Accenture/Microsoft/IBM/AWS/Cisco benchmark, clear operational product and UX priorities
- `DEEP-AUDIT-ISSUE-REGISTER.csv` — 18 prioritized, source-anchored findings and candidate remediation owners
- Existing 87-row matrix is **curated but not exhaustive**. Do not declare parity or completeness without current route-to-tool-to-producer acceptance.
- No production HAIEC code was modified by this audit; diagram PR #2217 remains review-only.


## Own-vs-integrate strategy (2026-10-16)

- `OWN-REUSE-INTEGRATE-DEFER-ENTERPRISE-STRATEGY-2026-10-16.md` — source-checked architecture, existing OTLP/MCP/DAI/guardrail/human-decision reuse, external provider/OSS comparison, one production-grade example, exact no-go claims.
- `INTEGRATION-AND-BUILD-DECISION-REGISTER.csv` — 26 candidate investments with decision, source owner, enterprise leverage, release gate and priority.
- A correction appendix in `DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md` reconciles existing OTLP receiver and guardrail persistence omitted from earlier blanket statements.
- **Preferred first integrator:** AWS AgentCore Gateway policy-mode and applied-action evidence; provider read-only integration first, no new policy engine or guaranteed customer runtime kill.
- Product development remains governed by **one user goal → exact prerequisites → qualified evidence → canonical decision/proof**, with independent operation paths and explicit unknowns.

## Product-truth and security workflow gate (16 October 2026)

- `PRODUCT-TRUTH-WORKFLOW-REACHABILITY-AND-P0-CORRECTIONS-2026-10-16.md` — source/authorization reachability, staged changes and roadmap impact.
- `UI-MCP-API-WORKFLOW-AVAILABILITY-RECONCILIATION.csv` — 16 explicit user workflows, existing tool names, UI/API routes, auth and source-evidence limitations.
- [HAIEC PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) — code changes and focused tests, not yet deployed.
- Updated product plans: `PRODUCT-UX-OPERATIONAL-REVIEW-AND-DECISION-2026-10-16.md`, `OWN-REUSE-INTEGRATE-DEFER-ENTERPRISE-STRATEGY-2026-10-16.md` and `DEEP-REPOSITORY-ORPHANS-AND-ENTERPRISE-COMPETITIVE-AUDIT-2026-10-16.md`.
- Open build gate: TypeScript passed; repo-wide ESLint and new-violations gate failed (30 new unused-parameter occurrences). Focused Vitest and tenant smoke are unverified. Do not describe this as production remediated.

## Review status and deployment caveat
`PRODUCT-TRUTH-RELEASE-GATE-STATUS.json` is the current machine-readable release gate for PR #2220. This work is staged; TypeScript passed, ESLint/new-violations gates failed, branch deployment/functional preview is unverified, and focused Vitest plus tenant/runtime UI smoke are not confirmed. Three-pillars/six-capabilities remains the accepted design recommendation. **Before merge, confirm tests and deploy readiness without changing the existing Vercel Git identity.**

## Pre-Devin alignment and readiness — current handoff

- `PRE-DEVIN-EXECUTION-GATE-AND-LAYER-ALIGNMENT-2026-10-16.md` — layer-by-layer operational system alignment, optional scoped dependencies, Sprint 24 provenance, critical security release gates and constrained Devin implementation steps.
- `PRODUCT-TRUTH-RELEASE-GATE-STATUS.json` — latest reviewed Main `75ffb329cb75b35280456884299bfd16a9e7a0e8`, PR #2220 branch status and pending validation.

**Decision:** no change to three pillars or six selectable capabilities. Confirm operational-control authorization, no simulated results, no silent effect inference, and a verified release before broader UX or provider integrations.

**2026-10-16 pilot decision:** [Kestrel-first real-action pilot, operator authentication and optional AWS targets](KESTREL-FIRST-PILOT-AUTH-AND-AWS-ALTERNATIVES-2026-10-16.md). Research-only: exact Kestrel dispatch/effect concern, 10 prioritized research steps and decision to defer AWS dependency. No product repo edits.

**KestrelVoice SaaS productization (2026-10-16):** [Full action-to-effect map, platform-admin vs tenant boundaries, onboarding/late opt-in, HAIEC trust positioning and pilot](KESTREL-SAAS-ACTION-TO-EFFECT-HAIEC-TRUST-INTEGRATION-PLAN-2026-10-16.md). Source-anchored architecture and security review; no code changes.
