# HAIEC D1–D3 Architecture Diagram Assets — Source and Website Integration Contract

> **NEW LIGHT INTERACTIVE DESIGN (2026-10-18):** [Light, interactive D1–D3 architecture explorer](interactive/index.html) · [self-contained review preview](interactive/haiec-d1-d3-architecture-explorer.html) · [interaction/source/QA handoff](interactive/README.md). This is the preferred source for the next design integration, not proof of deployed behavior. The three SVGs documented below and all six prior source SVGs remain available as static variants.


**Prepared:** 2026-10-18  
**Status:** THREE EDITABLE SVG MASTERS COMMITTED TO COMMON REPO; STATIC SOURCE QA COMPLETE; BROWSER RENDER/PRINT QA AND PUBLIC HAIEC WEBSITE INTEGRATION NOT YET PERFORMED.  
**Authority:** This manifest explains conceptual product illustration; it does not establish runtime/customer results or alter the application topology engine.

## Files

| ID | Master SVG | Answer | Source | Intended placement |
|---|---|---|---|---|
| D1 | [D1-enterprise-ai-assurance-platform.svg](diagrams/D1-enterprise-ai-assurance-platform.svg) | What can HAIEC help my organization accomplish? | Refines existing `diagrams/haiec-platform-workflows.svg` and three-pillar/6-capability art | Executive brief slide 3; annex page 2; resource preview |
| D2 | [D2-enterprise-evidence-trust-architecture.svg](diagrams/D2-enterprise-evidence-trust-architecture.svg) | Where do evidence and trust decisions enter, and what can actually be enforced? | Refines existing `diagrams/haiec-technical-evidence-architecture.svg` and canonical source/intake/evaluation responsibilities | Technical annex pages 2–3; technical reference integration section |
| D3 | [D3-agent-action-authority-proof-map.svg](diagrams/D3-agent-action-authority-proof-map.svg) | What might an AI agent cause, which authorities apply, and where does proof stop? | UI illustration of canonical Action Map/AgentTrace/DAI; no fabricated execution chain | Executive brief slide 5 (compact lens); annex pages 4–6 |

All earlier six SVGs under `../diagrams` remain unchanged. These are **versioned derived masters**, not replacements of a historical architecture in source control.

## Customer-facing captions

- **D1**: "Choose your starting point and the HAIEC capability that matches the decision at hand. Qualified evidence supports each workflow; none requires all six to run in sequence." **Limit:** Features depend on permissions, integration and applicable evidence.
- **D2**: "Sources, identities, policies and telemetry are admitted and qualified before they can support scoped conclusions. Human decisions, monitoring, reports and customer-side enforcement are separate functions." **Limit:** Native action blocking is not established by a policy, alert, or assessment outcome alone.
- **D3**: "The action map traces supported links between identity, tools, targets and consequences, showing where authority or effect evidence stops. HAIEC compares five independent evidence planes and performs a separate nine-dimension DAI comparison when qualified." **Limit:** This is a fictional schematic, not a customer-agent trace or a new runtime graph.

## Source-ownership crosswalk

| Diagram element | Canonical source / contract | Non-negotiable interpretation |
|---|---|---|
| Three pillars / six jobs | `HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md`, shared UX design contracts | Independent selectable capabilities, not mandatory workflow |
| GitHub/IDE/MCP/CI | `lib/developer-integration-source-status.ts`, MCP tool registry | GitHub App remote available; local/CI preview; Action v2 not released; MCP authorization per action |
| Accepted/qualified evidence | E2 evidence intake, source qualification, `E4-TELEMETRY-SOURCE-HEALTH-CORRELATION-EFFECT-PROOF-IMPLEMENTATION-HANDOFF-2026-10-16.md` | Connected/received != qualified; missing source != absence |
| Five planes | `lib/topology/types.ts`, authorized policy, qualified grants, source/capability and observed read models | Requested/Policy Authorized/Effectively Granted/Code Capable/Observed separate |
| DAI nine dimensions | `lib/assurance/dai-evaluation.ts`, `lib/assurance/dai-assembler.ts` | OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY; missing delegation != violation |
| Agent graph identity | `lib/topology/topology-projector.ts`, `agent-trace.ts`, `agent-trace-mermaid.ts` | Current/evaluated basis, projection relation IDs and evidence refs; renderer cannot invent relationships |
| Policy and human review | Operating Envelope and deployment-decision/read models | Human approved request != hot-path execution/mediation |
| Target native adapter | `lib/kill-switch/native-enforcement-adapter.ts`, `E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md` | Production registry has no generally verified adapter; `NOT_WIRED` until actual target + receipt |
| Control + compliance | 45 catalog entries, control visibility/TestSpec, Compliance Twin | Mapping != certification; registered != evaluated != enforced |

## Development and visual QA status

**Completed (read-only static checks of all 3 committed SVG source files):**
- Each file present at exact expected path in common repo Main.
- One `<svg>`, one accessible `<title>`, one `<desc>`, consistent `viewBox`.
- Balanced XML-like SVG start/end tags; no bare unescaped `&` in text.
- No `<script>`, inline events, `foreignObject`, external `href/src` or styled injection.
- Text anchor origins within viewBox.
- Static content audit: D1 3 pillars/6 jobs; D2 source/gate/qualified-core/separate outputs; D3 5 parallel planes/9 DAI dimensions/proof frontier and explicit illustrative status.

**Not completed in this environment:**
- Chromium/GitHub-hosted SVG screenshot render, zoom/overflow/contrast and real accessibility audit. Network-restricted working container could not download the freshly committed SVGs from GitHub for render; do **not** claim pixel-perfect/production preview acceptance.
- Integration into enterprise HTML and `haiec.com`; code sources and existing six original SVGs unchanged.
- Real HAIEC ActionTrace export from a tenant. D3 is a static explanation, deliberately **not** derived from a claimed current tenant evaluation.

## Next focused Devin implementation task

1. Copy the three approved SVGs as static assets, e.g. to `public/enterprise/resources/diagrams/`, and use them in the existing enterprise brief/annex resource HTML with clean figure/caption and clear illustrative limits. Only change resource files and the small resource link surface, not core runtime or topology services.
2. **First render** all 3 in Chromium at 1440/1600 desktop, 390 mobile (do not shrink tiny unreadable diagrams), 200% zoom and accessible text-alt. Capture PNG preview screenshots for author review. Prefer scrollable desktop-sized technical references + mobile semantic HTML summary.
3. Check text fit/clipping, color/legend contrast, screen reader naming, and print-to-PDF where used. Keep a compact D1/D3 view for executive, full D2 only in annex.
4. Document any corrections with source-linked textual diffs and preview screenshots. Do not silently relabel conditional native enforcement as shipped.
5. Use canonical graph projection only for actual interactive Customer Action Map; this D3 SVG is a **conceptual illustration**. Do not add a duplicate graph renderer or LLM-invented edges.
6. Publish through focused PR/merge to Main and normal Vercel deployment only after approval and checks. Preserve existing commercial POC route, opt-in workflow and all enterprise document links.

## Executive-oriented acceptance

An executive should answer these after a quick look:
- D1: Which HAIEC outcome helps me reduce risk, move faster or document AI decisions?
- D2: What is actually connected, what is optional, and where does responsibility for stopping an action lie?
- D3: What can this agent potentially reach, and where does HAIEC have verified facts versus unknowns?

The architecture describes a source/evidence-driven platform, **not proof of arbitrary production AI protection**.
