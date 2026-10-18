# HAIEC Enterprise Architecture & Evidence Explorer — V3 (Twelve Views)

**Date:** 2026-10-18 · **Status:** Shareable self-contained educational HTML + editable split assets, synced to Common Repo. **NOT deployed** to HAIEC.com. **NOT live tenant evidence.**

> **Open [V3 standalone self-contained HTML](haiec-enterprise-architecture-and-evidence-explorer-v3.html)** for client-side review. Working split assets: [index.html](index.html), [architecture-explorer.css](architecture-explorer.css), [architecture-explorer.js](architecture-explorer.js). Older D1–D3 and V2 HTML references remain for design provenance only; V3 is the current shareable review version.

## Design review and product decision

The original **eight** architecture masters D1–D8 and **two** bounded evidence cases C1/C2 already cover security and detection (including applicable OWASP mapping), authority/DAI, CI/CD, monitoring/drift/usage, governance/compliance/control effectiveness, conditional protection and verified source/test outputs. **Do not add a ninth OWASP, kill-switch or scanner-count architecture master.** Their presence would crowd buyer navigation and may inflate production claims.

Two customer-value **reading views** were added instead:

- **E0: Executive Decision Guide (NEW, entry).** Five persona/decision questions: business exposure; security exposure; release readiness; operating change; risk and audit defensibility. Click-through details name value, technical basis and proof boundary without invented ROI.
- **E1: Evidence, Deliverables & Adoption (NEW, exit).** Scoped POC: define one consequential action/owner, connect eligible data, execute applicable checks, make review decisions. Four conditioned artifacts: inventory/action map, findings and authority, human governance, evidence package. Link to actual public case methodology/archived register and the canonical HAIEC Enterprise POC page.

The total is **12 educational views** (E0 + D1–D8 + C1/C2 + E1), not 12 product modules. Existing eight diagram master plan and 45-control taxonomy remain unchanged.

## Shareability and user experience

- **Light theme**, source-informed DeepSeek design patterns (adapted layout, information hierarchy, context inspector, small restrained transitions), not copied synthetic tenant statuses, screenshots, fake approvals or unsafe controls.
- **Four reading routes** near top: executive, technical, real assessed synthetic case, and POC/adoption; 12 labeled tabs remain navigable by keyboard and on phones.
- Per-view deep links `#e0`, `#d1` through `#d8`, `#c1`, `#c2`, `#e1` are updated by tab and shortcut clicks. A hash is a client-side navigation hint only.
- Detail inspector includes **what / why leadership cares / HAIEC support / what not proved**. On mobile clicking a node scrolls to its inspector with a Back to diagram control.
- Tour is real play/pause. Reduced-motion users do not receive looping animation; D6 scenario selector changes only explicitly fictional example text.
- **Print selected** and **Print all** buttons included. Inspectors for all 12 views initialize at page load so print-all does not leave empty offscreen inspect panels.
- Standalone file is intentionally self-contained with inline CSS and JS for easy distribution; split version uses local JS/CSS so Devin can adapt it to website CSP without globally weakening CSP.

## Content provenance and non-negotiable boundaries

- Real platform-source references: HAIEC capability status, source-bound deterministic ActionMap/AgentTrace, five independent planes, nine DAI dimensions, human-policy/decision owners, telemetry coverage, per-target native guard adapter contract.
- C1 manufacturing: HAIEC persisted evaluation of **synthetic manufacturing source records**, overall REVIEW; later gateway holds and business reviewers are **fictional browser simulation**. No customer factory or native MES/ERP production enforcement claimed.
- C2 TM Forum: participant-published frozen control register; C16 assessed 35,559 SATISFIED and 106,829 NOT_SATISFIED vs frozen 60K cap, C9 two satisfied tests, C7 9/10 partial coverage. Alert canary is synthetic. Organizer proof, universal monitoring, and HAIEC-native target action prevention not established.
- A registered detector is not an executed check; an OWASP control mapping is not comprehensive validated coverage; source ingestion is not qualified evidence; human authorization does not by itself enforce target action; `BLOCK` assessment does not physically deny deployment; a digest is not certification or signature.
- **No live API or network request**, no dynamic customer identities, no auth tokens, no backend mutation, no tool invocation and no kill-switch call exist in the HTML.

## Tested, and still required before broad public posting

**Focused tested:** Chromium at 1440, 1024, 768 and 390 widths; 12 views, inspector activation, quick routes, tab semantics, D6 scenario changes, keyboard view switching on desktop, guided tour play/pause, zero console JS errors, no page-level horizontal overflow. Generated selected-view print PDF for smoke validation. Syntax check of standalone JS, XML/HTML structure inspection. Minor mobile behavior improved to reveal updated inspector; print initializations corrected.

**Not fully qualified:** real screen-reader/AT matrix, page-by-page print-all clipping, Safari/iOS/Android device tests, source/legal redistribution clearance for third-party TM Forum material, renewed HEAD capability/product-status and external URL checks before distributing at scale. It is **shareable for editorial/customer preview**, not independently production-certified software or a finished website deployment.

## Integration handoff, no deployment

Do not deploy until explicitly requested. When later authorized, replace or add a small **Explore the interactive architecture** resource link on existing `/enterprise`; preserve existing pricing/timing, lead capture and document links. Reuse the V3 split HTML/CSS/JS or React adaptation; no new engine, no extra DAI evidence store, no new live topology. Check site CSP, semantic keyboard behavior, mobile, print and exact claims before Main deployment.

## Related plans and source documents

- [Eight-master diagram plan](../ARCHITECTURE-DIAGRAM-BUILD-PLAN-2026-10-18.md)
- [Enterprise publication kit and technical annex](../README.md)
- [Original D1–D3 SVG source manifest](../D1-D3-DIAGRAM-ASSET-MANIFEST-2026-10-18.md)
- [DeepSeek visual-only archive](../../design-references/deepseek/README.md)
- [Manufacturing judge guide](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md)
- [TM Forum evidence register](https://github.com/subodhkc/tmf-2026-evidence/blob/main/register.yaml)

---

## Archived V2 reference (historical, not the current deliverable)


> **2026-10-18 D4–D8 + C1/C2 extension completed as a local interactive source package (not deployed).** Seven additional responsive light-theme views use the D1–D3 DeepSeek-inspired visual grammar: dedicated security/detection, release/CI, monitoring, governance/compliance, conditional runtime protection, Station 217 and TM Forum. The [new panel markup](remaining-panels.html) and [source/claims and QA handoff](D4-D8-C1-C2-HANDOFF.md) are archived here. **Important:** The full combined updated HTML/CSS/JS source bundle is a separately generated conversation artifact, not yet copied into this repository's original `index.html` / JS / CSS. Existing D1–D3 hosted source is unchanged; do not claim the GitHub page includes the seven new interactive views until the bundle is imported. No haiec.com deployment was requested or performed.


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
