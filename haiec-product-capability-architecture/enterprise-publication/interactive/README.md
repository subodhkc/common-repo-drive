# HAIEC D1–D3 — Interactive Light Architecture Explorer

**Prepared:** 2026-10-18  
**Status:** Functional source design prototype in shared repository. **NOT DEPLOYED to HAIEC.com; NOT HAIEC application code.** Existing six original SVGs and D1/D2/D3 dark source masters remain preserved.  
**Interactive deliverable:** [Open source — standalone HTML](haiec-d1-d3-architecture-explorer.html)


## Editable source files

- [index.html](index.html) — recommended entry for Devin; loads CSS and JavaScript from sibling files and is the version to adapt to existing website CSP.
- [architecture-explorer.css](architecture-explorer.css) — light-theme cards, layout, focus states, responsive and reduced-motion styling.
- [architecture-explorer.js](architecture-explorer.js) — authored explainer data, node inspectors, accessible tab navigation and guided-tour behavior.
- [haiec-d1-d3-architecture-explorer.html](haiec-d1-d3-architecture-explorer.html) — self-contained preview for offline stakeholder review only; do not embed unchanged if inline styles/scripts violate production CSP.

## Editorial decision

Improve the three architecture masters as **one coordinated, navigable product explanation**, not three disconnected marketing posters. Use a light system inspired by the archived DeepSeek Unified UX Atlas (neutral canvas, white cards, indigo focus, informative detail inspector, compact review notes). Reuse **visual interaction patterns only**; none of the archived synthetic customer identities, simulated protection outcomes, fabricated receipts, risk counts or incomplete click handlers are transplanted.

- **D1 — Platform overview:** three pillars; Discover/Evaluate/Authorize/Monitor/Protect/Verify as six **independent** customer jobs; starting from a system, goal or evidence; business value in every detail panel. Good for executives.
- **D2 — Technical architecture:** optional GitHub/IDE/MCP/runtime/IAM/human/forensic sources; separate authenticate/bind, admit/classify, qualify evidence; shared source-qualified foundation; independently usable assurance, governance, operations and controls; reporting distinct from **external verified target-native mediation**. Good for CISOs/architects.
- **D3 — Action & authority proof:** fictional teaching path (agent → capability → tool/API → target → possible effect) with first unestablished edge; five independent evidence planes and nine orthogonal DAI dimensions; source and target-effect qualification; separate link to Station 217 assessed *synthetic* manufacturing records. Good for explaining HAIEC's differentiation.

**Executive narrative:** "See what your AI can do. Know what you can trust." Evidence-to-business-decision rather than scanning buzzwords. Value hierarchy: Visibility / Decisions / Accountability. No invented productivity, breach reduction or cost-saving metrics.

## Interaction features

- Three accessible tabs, including left/right arrow key navigation.
- Clickable information nodes in all three diagrams. The inspector explains **what it is**, **why leadership cares**, **how HAIEC addresses it**, **what it does not prove**.
- Guided walkthrough cycles through available nodes, with real play/pause control and auto-stop on visibility change.
- CSS micro-animations highlight **product explanation only**; they do not simulate or claim live telemetry or operational enforcement.
- Visible conceptual/synthetic near-field labels and `UNKNOWN`/not established status.
- Light desktop layout, responsive 390px mobile version, horizontal scroll only inside D3 action-chain lane, reduced-motion fallback.
- Escaped inspector strings (content is fixed authored data; no network or API reads).

## Baseline and source references

- [Approved D1–D3 master diagram plan](../ARCHITECTURE-DIAGRAM-BUILD-PLAN-2026-10-18.md)
- [Existing SVG source and handoff manifest](../D1-D3-DIAGRAM-ASSET-MANIFEST-2026-10-18.md)
- [Archived DeepSeek visual references — synthetic, not authority](../../design-references/deepseek/README.md)
- [Current five-plane names](https://github.com/subodhkc/haiec-website/blob/Main/lib/topology/types.ts)
- [DAI nine dimensions](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/dai-evaluation.ts)
- [Canonical AgentTrace / deterministic Mermaid export](https://github.com/subodhkc/haiec-website/blob/Main/lib/topology/agent-trace-mermaid.ts)
- [Developer integration availability](https://github.com/subodhkc/haiec-website/blob/Main/lib/developer-integration-source-status.ts)
- [Native guard adapter](https://github.com/subodhkc/haiec-website/blob/Main/lib/kill-switch/native-enforcement-adapter.ts)

**Critical semantic invariants:** Six jobs != sequential pipeline; received != qualified; IAM candidate != effective grant; source reachability != runtime execution; DAI != sixth evidence plane; a human approval != a tool dispatch permit; an assessment BLOCK != target denial; a synthetic scenario != production customer evidence; hash integrity != signed certification.

## QA, scope and known limits

**Local browser QA completed:** Playwright/Chromium rendering for all three tabs at desktop 1440px and mobile 390px; no document-level horizontal overflow and no browser JS exceptions in observed renders. Interactions tested: D1 Discover inspector, D2 Qualify Evidence inspector, D3 DAI inspector, tab view switching, tour play/pause. Node labels and positive/negative copy checked against dated canonical contracts; not a full independent product test.

**Not yet checked:** real screen reader, production Content Security Policy, CSP-compatible module extraction, print-to-PDF clipping, browser matrix beyond tested Chromium, live HAIEC.com deployment, real customer Graph/Trace rendering. **The standalone prototype intentionally has inline CSS/JS** for convenient source review. Before shipping to production, move them into approved static assets/components; don't relax HAIEC CSP.

**Do not reuse fictional node data in real product:** D3 has explicitly fictional node labels and unverified joins. For real system exploration use `buildTopologyProjection` / `buildEvaluatedActionMapProjection` / `AgentTrace`; attach exact org/system identity, current/evaluated basis, join metadata and source/proof refs.

## Next Devin implementation handoff (focused, no new engine)

1. Inspect the interactive HTML here and the existing three published-resource documents plus the original D1–D3 SVGs. Refresh current HAIEC Main to check terminology and connector maturity first.
2. Extract the presentation into scoped, CSP-compatible CSS and JavaScript/React components according to existing HAIEC website architecture, preserving the light design, responsive cards, keyboard access, inspector and pauseable motion.
3. Add a discreet **Interactive Architecture Explorer** link to `/enterprise` and optionally connect it as an explanatory resource from the executive brief and technical annex. Do not replace the existing main enterprise page, POC form, qualification funnel, old brief or three publication-resource links.
4. Use the same claims and source-boundary language, no invented live inspector data or dynamic synthetic credentials. A real dynamic graph is a **separate future task** using canonical projections.
5. Re-run focused checks: page/asset 200, D1/D2/D3 switching, node inspectors, tour pause, keyboard, 390px + 1440px, print behavior, CSP, no horizontal page overflow. Confirm reduced-motion behavior. Treat failures as blockers to publication.
6. PR, merge to Main upon review and verification; Main automatically deploys on Vercel. Confirm production URLs. Do not seek Vercel Git identity changes or run unrelated full suites.

**Definition of done:** A customer can learn the product scope and business value by navigating three visually consistent light architecture views, without mistaking examples for verified HAIEC tenant assurance or production actuation.
