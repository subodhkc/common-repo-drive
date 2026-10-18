# HAIEC Interactive Architecture Explorer — Light Theme, D1–D8 + C1/C2

**Editorial build:** October 18, 2026. **Status:** Self-contained educational prototype and CSP-friendly split HTML/CSS/JS. **Not deployed to HAIEC.com; not a live HAIEC dashboard or source of customer truth.**

## Contents

- `index.html` — ten-view interactive explorer, references sibling CSS and JS.
- `architecture-explorer.css` — responsive light theme, muted indigo/teal/amber accents, focus and reduced-motion styles.
- `architecture-explorer.js` — deterministic *presentation-only* explanation data, inspector selection, real guided-tour play/pause, semantic tab/keyboard behavior, and D6 fictional scenario switcher. No network calls or live API use.
- `haiec-d1-d8-plus-cases-interactive-light.html` — standalone self-contained HTML for review (inline styles and JS; not suitable to paste into a production CSP-protected route without extraction).
- `previews/v2-*.png` — local browser review captures, not real system observations.

The first three views remain conceptually consistent with the original D1–D3 masters. The five additional capability designs follow the approved eight-master architecture plan. The two evidence visuals fulfill the planned C1/C2 demonstrations without presenting mock behavior as real HAIEC execution.

## View inventory and executive messages

| View | Scope | Business value | Required evidence boundaries |
|---|---|---|---|
| D1 | Platform, three pillars and six independent jobs | Select appropriate security, assurance, governance and operating decisions | Not a six-stage pipeline; integration prerequisites local to each job |
| D2 | Evidence, trust boundaries, integrations and services | Leverage existing enterprise stack and know which outputs are justified | Connection != qualification; policy != target enforcement |
| D3 | Action-to-consequence map, five planes, DAI nine dimensions | Identify action/authority gaps before a consequential action | Fictional trace; first unknown relation visible; no invented delegated chain |
| D4 | AI AppSec, MCP isolation, runtime testing, LLMVerify and controls | Prioritize executed technical risk evaluations | Producer registration != applicability != evidence != executed test; OWASP mapping != full coverage |
| D5 | GitHub/IDE/CI, source scans, HAIEC evaluations, reviewers, real release gates | Support evidence-based release decisions | Scan != assurance != human approval != configured CI blocking |
| D6 | OTLP, identities/tools, usage/cost, source health, baseline comparison | Detect important operational changes with honest blind spots | All four selector scenarios fictional; anomaly != incident; stale != safe |
| D7 | Framework, control catalog, operating state facets, Compliance Twin and receipts | Show audit/oversight owners what is and is not operating | Entire passport illustrative; framework mapping != certification |
| D8 | Approved policy, guard, human review and conditional customer native PEP | Explain whether intervention is operationally possible | No generic production native adapter evidenced; target effect requires real readback |
| C1 | Station 217 manufacturing | Wrong-target business divergence explained in one screen | Genuine HAIEC evaluation **of synthetic source records**, separately simulated gateway/human/factory operations |
| C2 | TM Forum 2026 event control tests | Demonstrate measured satisfied/not-satisfied and incomplete-evidence cases | Participant-published archive, not organizer certification; C16 NOT_SATISFIED != provider block |

## Verification and source anchors

- HAIEC platform taxonomy: `haiec-product-capability-architecture/HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md` and `ARCHITECTURE-DIAGRAM-BUILD-PLAN-2026-10-18.md`.
- Source status / GitHub Action v2 held: `subodhkc/haiec-website/lib/developer-integration-source-status.ts`.
- Canonical ActionMap/AgentTrace identity: `subodhkc/haiec-website/lib/topology/topology-projector.ts`, `agent-trace.ts`, `agent-trace-mermaid.ts`. This page does NOT recompute graph truth.
- Delegated Authority 9 dimensions: `subodhkc/haiec-website/lib/assurance/dai-evaluation.ts`.
- Native guard registry with nonproduction fixture: `subodhkc/haiec-website/lib/kill-switch/native-enforcement-adapter.ts`. No live target interception is claimed.
- Security/control counts: `DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md`. Report dated snapshot, **not active tenant runs**.
- Manufacturing: `https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md`, public case `https://haiec-manufacturing-demo.vercel.app/?report=s217`.
- TM Forum: `https://github.com/subodhkc/tmf-2026-evidence/blob/main/register.yaml`, provenance `SUBMISSION_PROVENANCE_AND_VERIFICATION.md`. Reuse only public-safe measured summaries.
- Visual style inspiration: `haiec-product-capability-architecture/design-references/deepseek/README.md`, which describes archived synthetic/untrusted UI examples. Design patterns were adapted, not fabricated outputs.

## Tested implementation behavior

- Browser tested with Chromium at **1440px, 768px and 390px** via local `set_content` + exact authored JS/CSS injection because direct `file://` navigation is blocked by the working browser's administrator. Ten view switches, node inspectors, scenario toggle, HTML semantics, and no page-level JS errors or document-wide overflow passed in the focused check.
- The first desktop pass of all ten views also exercised the guided tour toggle. Mobile tests used programmatic tab clicks for breadth; physical touch and full screen-reader testing remain open.
- The D6 scenario switch updates authored fictional data in the DOM, never telemetry or any HAIEC state.
- Two-tier navigation on wide screens and horizontal swipe tab rail on phones; selected tab auto-scrolls inside the rail when changed.
- `prefers-reduced-motion` disables continuous decorative animation and guided timer.
- Static JavaScript syntax passes Node check. The source directory's QA scripts exist only for local development, not needed by website shipping assets.

## Production publication work — explicitly not authorized by this task

1. Review visual copy/legibility and crosswalk references with the product owner. Confirm all claims against current HAIEC Main when publication begins.
2. Extract the split HTML/CSS/JS into the existing HAIEC website framework, preserving CSP; do not globally relax CSP. Avoid introducing duplicate CSS/JS files if an architecture explorer already exists.
3. Add resource links from the enterprise page only upon explicit later authorization. Existing commercial POC source, 4–8-week qualifier and lead capture remain unchanged.
4. Validate keyboard/ARIA navigation, live focus visibility, mobile horizontal interactions, 200% zoom, actual screen readers, print layout, and production link/download behavior.
5. Use canonical graph APIs for dynamic customer scenarios; never replace canonical engines with this synthetic UI.

**Status:** Common-repo editable artifact and standalone visual reference only. No website deployment, no production enforcement, no synthetic verdict promoted to real evidence.