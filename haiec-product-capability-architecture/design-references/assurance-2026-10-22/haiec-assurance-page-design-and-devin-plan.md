# HAIEC Assurance, the flagship proof page
## Interactive experience and native Next.js implementation plan

**Route:** `https://www.haiec.com/assurance`  
**Design file:** `haiec-assurance-interactive-concept.html`  
**State:** Design and planning only. No production deployment or Common Repo write in this task.

## 1. Strategic decision

The existing Assurance page already contains credible explanations of five independent evidence planes, deterministic evaluation, DAI, evidence states, control relevance, MCP entry and reports. The next change should **add a high-conviction buyer experience**, not replace this source of truth with another static feature grid or create another Assurance route.

**This page owns one core question:** What does qualified evidence establish about a consequential AI action, who authorized the choice, and what accountable decision can be defended?

### Positioning hierarchy

- **Category:** Evidence-Bound Assurance.
- **Descriptor:** Deterministic AI Action Assurance.
- **Flagship outcome:** A decision with established facts, proof boundaries, responsible owner and verifiable supporting artifact where supported.
- **Buyer message:** "Your AI passed security. Who authorized the decision?"
- **Primary conversion:** Enterprise Assurance POC.
- **Secondary:** Inspect a real assurance report.
- **Developer entry:** Run HAIEC AI Assurance through authenticated MCP.

Security and governance are presented as two **HAIEC-owned capability groups that also create evidence for Assurance**, not as competing products or empty categories:

| Security | Governance | Assurance |
|---|---|---|
| Source analysis, authorized runtime testing, tool exposure, MCP and tenant-boundary risks | Operating envelopes, policy, delegated authority, human approvals, ownership, control oversight | Five-plane comparison, Delegated Action Integrity, deterministic claim evaluation, proof gaps, scoped decision/report, verification |

Security evidence does not prove delegated authority. Governance policy does not establish what code executed. Assurance evaluates relevant facts for an exact decision. No claim that a scan, policy or successful disposition is universal safety.

## 2. Customer-facing page sequence

1. **Hero: Security passed. Who authorized the decision?** Purpose-built visual linking source path, policy, unresolved choice and bounded REVIEW. Two CTAs: interactive decision, real sample report.
2. **Three disciplines, one assurance outcome.** Security and governance get meaningful feature mentions and deep links; assurance is the prominent third card. Avoid a fake algebraic claim that three independent SaaS modules always produce assurance.
3. **Interactive consequence lab.** Three user-selectable cases: customer refund, factory hold release, network route change. User-controlled four-beat story and five-click evidence lenses. Show a supported early source finding even if later authority evidence is incomplete.
4. **Five-plane diagram and DAI comparator.** Independent planes: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. Direct qualified inputs to evaluation; DAI is related authority comparison, not a required sixth input or mandatory sequential gate.
5. **Decision dossier.** Established facts, proof frontier, human next action and bounded disposition; linked to real Kestrel example on `/sample-reports`. A BLOCK evaluation is not proof of target-native enforcement.
6. **Operating model and MCP.** Four common activities as illustrative rather than mandatory steps. The main public prompt is `Run HAIEC AI Assurance`; copy control; link actual MCP setup and playbook. Preflight, consent, scoped key and approval requirements remain.
7. **FAQ and Enterprise CTA.** Direct answers to security vs governance vs assurance, delegation, UNKNOWN vs failure, optional evidence collection and enforcement limits.

## 3. Interactive contract

- Scenario tabs support mouse, touch, Arrow keys, Home and End, with one selected tab and focus management.
- Four story beats are user-controlled. No animated fake scanner or simulated back-end request.
- Each of the five evidence views exposes its own actual question, state and evidence explanation. Selecting a different lens **does not** transform a disposition.
- Each scenario has a curated illustrative decision: Refund = REVIEW, Station 217 hold = REVIEW, Network divergence = BLOCK. These are explanation examples, not canonical evaluation claims.
- Dossier follows the selected scenario, providing a distinct established/gap/next decision.
- Copy controls provide a prompt or explicitly illustrative summary. Native static source content remains understandable without JavaScript.
- Reduced-motion preference disables animations. Responsive at 390, 768, 1440. Light-first; dark technical inset is intentional.

## 4. Visual direction

Align the delivered HTML to existing public HAIEC brand and the recent light SVG system:

- Warm near-white canvas, dark forest headings, restrained mint and emerald accents, fine borders and editorial whitespace.
- A single large art-led hero, then purpose-built diagrams and a dark proof/dossier section.
- No giant generic robot, shield icon as a false protection guarantee, decorative unverified status animation, or fake ratings.
- Reuse the existing **Evaluate: Evidence Strata** background as low-opacity or contained art if already available in the website source; retain the new semantic HTML five-plane diagram where it clarifies the question.
- Native SVG geometry is accessible, labelled and paired with descriptive DOM text. Important content must not exist solely inside images or canvas.
- Avoid repeating homepage animations, redesigning other flagship pages, replacing real evidence reports or altering brand/theme foundations.

## 5. Exact navigation and SEO

**Canonical:** `https://www.haiec.com/assurance`

**Suggested metadata:**

- `title`: `AI Agent Assurance Evaluation & Evidence | HAIEC`
- `description`: `Understand how HAIEC evaluates consequential AI actions, delegated authority, code capability, policy and observed evidence to produce deterministic assurance decisions with explicit proof limits.`
- `H1`: `Your AI passed security. Who authorized the decision?`
- **Question owned:** `How does AI agent assurance work, and what evidence supports a defensible decision?`
- **Search language:** AI agent assurance, deterministic AI assurance, evidence-based AI assurance, delegated action integrity, AI agent authorization evidence.
- Render all core page copy as semantic server-readable text with one H1, supported visible FAQ, actual breadcrumb/navigation owner, canonical, OG and Twitter metadata. FAQ structured data only if permitted by existing site conventions and identical to visible content.

**Link contract:** `/ai-security`, `/platform`, `/delegated-action-integrity`, `/evidence`, `/assurance-controls`, `/sample-reports`, `/docs/agent-integration`, `/developers/mcp-playbook`, `/methodology`, `/enterprise`.

## 6. Devin implementation instructions

**Target:** Existing HAIEC Main Next.js site, `app/assurance/page.tsx`. Treat the attached standalone HTML as a **design reference**, not production code to paste. The existing Common Repo plan at `haiec-product-capability-architecture/WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md` remains the product-truth baseline.

1. Pull the latest HAIEC Main and Common Repo before editing. Compare deployed `/assurance` source and recent PRs to avoid duplicating work. Audit existing public tokens, navigation/footer, theme preference, SEO page registry, analytics and real links.
2. Preserve the existing assurance semantics and strong copy, DAI independence, five planes, official evaluator ownership, evidence states, real MCP and authentic report CTAs. Integrate new story and dossier as focused components in the existing route. Preserve existing sections that add nonduplicated substance, including control applicability, evidence qualification, FAQ and source-reachability explanations.
3. Implement light and dark theme styling with shared site tokens rather than a new parallel CSS framework. Server-render the valuable written content and figures, limit client JS to scenario/lens controls. Follow the site's `TrackedLink` conventions where relevant.
4. Keep example evaluation fixtures separate from production API clients. Never make the browser simulate a genuine run or return canonical Assurance decisions. For any future live integration, consume actual tenant-scoped canonical evaluation and source links and preserve native scope and status semantics.
5. The existing `/sample-reports` Kestrel evaluation is the principal **real proof link**. Do not replace it with the instructional scenario output.
6. Security and governance capability mentions should be accurate and linked to the proper first-party pages. Do not invent `/governance` as a route; use `/platform` and `/delegated-action-integrity` unless a real existing governance route is confirmed.
7. Keep MCP endpoint and prompt exact: `https://www.haiec.com/api/mcp`, `Run HAIEC AI Assurance`; setup instructions require an authorized scoped API key and preflight. Never embed credentials into public copy or code.
8. Check accessibility (tabs, selected-state announcement, live regions, keyboard focus, reduced motion, focus styles), SSR/no-JS reading, 390/768/1440 both public themes, route/link integrity, no overflow and production type/lint checks. Confirm hero proof narrative remains clear before the fold.
9. Make one narrowly scoped website PR and report exact changes, proof of production behavior and remaining gaps. Do not silently modify the homepage, DAI evaluation engine, legal/privacy pages or unrelated nav surfaces.

## 7. Acceptance test

A first-time visitor should be able to answer, within roughly one minute:

- Why does security evidence alone not prove who authorized an AI business decision?
- What actual security and governance capabilities does HAIEC provide?
- What do the five independent evidence views establish?
- How does DAI differ from API permission?
- What exact decision evidence or owner action would a buyer receive?
- Where can they inspect a real generated report or begin an Enterprise POC?

**Status of standalone design:** Built and checked with Chromium at 390, 768 and 1440 widths. Scenario switching, evidence lens selection, step navigation and dossier states were exercised successfully. This is not a deployed website change.