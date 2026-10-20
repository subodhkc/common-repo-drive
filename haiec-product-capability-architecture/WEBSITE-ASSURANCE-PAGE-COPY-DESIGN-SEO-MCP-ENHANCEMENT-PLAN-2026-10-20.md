# HAIEC Assurance Page — Independent Content, Copy, UX, Animation, SEO & MCP Enhancement Plan

**Date:** 2026-10-20  
**Route:** https://www.haiec.com/assurance  
**Status:** PROPOSED / REPO-DOCUMENTED / WEBSITE-NOT-CHANGED. Scope is **Assurance page only**, except reusing the shared public-theme and generic MCP-prompt conventions.  
**Baseline:** HAIEC \`Main\` e4e46c36ce23fe4be5011051558077630abeab5d, \`app/assurance/page.tsx\` blob 0c2f08473b6d8dcdb8a26d33fc470f99d9d30b47; live HTML checked 2026-10-20.  
**Superseding editorial guidance:** [Brand and theme standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md), [four-word positioning, search, story](HAIEC-POSITIONING-USP-FOUR-WORD-SEO-AND-STORY-SYSTEM-2026-10-20.md), [source truth / packages / MCP](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md), [Platform and Products plan](WEBSITE-PLATFORM-AND-PRODUCTS-PAGE-ENHANCEMENT-PLAN-2026-10-20.md).

## 0. Editorial decision: make Assurance the PROOF page

**/platform** = how the HAIEC system works and six selectable jobs.  
**/products** = what one platform and independent tools are offered.  
**/assurance** = **what qualified evidence establishes for a consequential AI decision, what remains unknown, and how HAIEC reaches and records a bounded evaluation**.  
**/methodology** = deep technical reproducibility and assurance research.  
**/enterprise** = buying a bounded decision engagement.  
**/docs/agent-integration** = connect your AI agent to HAIEC's authenticated MCP.  
**/developers/mcp-playbook** = detailed operations once connected.

Do not replicate the complete six-capability architecture, controls catalog, products grid, methodology paper, or all pricing on Assurance. Use concise high-value links.

## 1. Current page inspection: what exists and what is missing

Actual \`app/assurance/page.tsx\` is a compact ~100-line semantic Next server page:
- Dark hero: “What does HAIEC need to establish before an assurance decision?”
- White section: five independent evidence questions (Requested; Policy Authorized; Effectively Granted; Code Capable; Observed).
- Dark section: Established / Partial / Unknown / Not Assessed plus correct Source Reachability limitation.
- White section: “Agent-driven does not mean agent-decided”; footer owns public sample and POC links. Metadata has title, description, OG and canonical.
- Source uses hardcoded \`bg-slate-950\`, \`bg-white\`, \`text-slate-*\`: **not truly responsive to the current authenticated workspace theme toggle**. No page-level working interactive proof experience, no inline report/DAI/controls visualization or real MCP entry CTA.
- Public heading/text fidelity is strong. **Preserve the five-plane independence and UNKNOWN semantics verbatim in substance.** This is not a rewrite to remove disclaimers; it is a buyer-value and proof-object expansion.

| Gap | Commercial problem | Content/design response |
|---|---|---|
| H1 is an abstract methodology question | User must already understand Assurance to value it | Outcome-led consequence/decision hero and counterexample |
| Five evidence planes have no consequence/action instance | Accurate but mentally difficult | One **fictional refund recipient** side-by-side interactive decision anatomy |
| DAI is absent | HAIEC's authority/permission USP is underexposed | Standalone “Permission ≠ delegation” explanation with precise link |
| No clear deterministic evaluation mechanics | “Evidence states” never resolve into a demonstrable evaluated output | Bounded example with input/evaluator/disposition/proof boundary; show exact limits |
| No control/claim applicability account | User cannot distinguish controls catalog vs evaluated evidence | Control applicability and assessed/not-assessed gap panel, linked to /controls |
| No output specimen | No tangible thing a CISO, CTO or reviewer would buy or inspect | An authentic qualified sample report link; outcome box: action + finding + gaps + human next step |
| MCP explanation lacks actual onboarding | Undersells native agent-first adoption | “Run HAIEC AI Assurance” prompt + endpoint + secure setup guide; read-only preflight before scan |
| Static blocks, no narrative reveal | Visitors may leave before appreciating the critical asymmetry | User-controlled staged comparison; not live execution animation |
| Current colors ignore site theme toggle | dark/light across marketing cannot be promised | Reuse planned public marketing tokens; preserve separate dashboard \`ws-*\` |
| CTA solely at footer | Heavy conversion friction | two intent CTAs above fold + in-page sampled proof + deeper POC CTA |

**No unsupported “scans all agents,” “always monitors,” “auto blocks everything,” “proves authorization,” or “AI agents connect without keys.”**

## 2. Proposed exact page sections and usable copy

### A0 — Hero, editorial contrast (immediate buyer comprehension)

**Eyebrow:** \`EVIDENCE-BOUND ASSURANCE\`  
**Recommended H1:** \`A scan can pass. An AI decision can still be wrong.\`  
**Alternative H1:** \`Can you defend what your AI is allowed to do?\`  
**Deck:** \`HAIEC compares supported AI actions, delegated authority, code capability and observed evidence without confusing permissions with approval or missing data with safety. Deterministic evaluation produces a bounded answer teams can inspect, challenge and act on.\`  
**Four-word product descriptor** (supporting label): \`Deterministic AI Action Assurance.\`  
**Primary CTA:** \`See how assurance works\` → \`#assurance-example\`  
**Conversion CTA:** \`Scope an Enterprise POC\` → \`/enterprise\`  
**Developer micro-CTA:** \`Run HAIEC AI Assurance\` → \`#try-haiec-mcp\`  
**Proof caption:** \`Decision-grade means explicit supporting evidence, evaluated scope and known unknowns — not a guarantee of universal safety.\`

**Suggested visual:** existing corrected [DAI evidence relationships](design-references/hero-architecture-2026-10-19/light-theme/02-homepage-dai-evidence-relationships-light.svg) as a **contextual, cropped compact explanatory figure**, not as another homepage hero or compressed 1440px blob. At mobile use three short callouts and accessible native text. If a new diagram truly needed, redraw *only one* purpose-built compact “five evidence lenses + delegation + bounded conclusion” SVG, sourced from existing semantics; don't commission an additional generic platform architecture visual.

### A1 — Veritasium-inspired teaching puzzle (not copied style)

**H2:** \`Everything passed. Who authorized the decision?\`  
**Intro:** \`Imagine a support agent tasked with correcting a small billing error. Its code can call the refund API, and its credential may permit a refund. But the supported evidence does not establish that a responsible person delegated the choice of refund recipient. A valid credential cannot answer that question.\`

**User-driven interactive 4-beat visual:**
1. \`Source Path\` — code-capable refund API path, show **SOURCE-ESTABLISHED in this fictional fixture**.
2. \`Credential\` — possible scoped grant; **not** proof of delegated choice.
3. \`Delegation\` — UNKNOWN in the example. Display a quiet neutral UNKNOWN, never an alarming fabricated “breach”.
4. \`HAIEC's bounded evaluation\` — in this **illustrative scenario only**, “REVIEW — delegated choice not established”; show a named evidence owner action without claiming live actual evaluation occurred.

**Interaction:** manual step selection, keyboard/focus, optional subtle connectors; no autoplay fabricated data or percentage counters. Label \`SYNTHETIC EXPLANATION, NOT CUSTOMER EVIDENCE\` persistently. A real sample uses actual qualified source/evaluation data if loaded from verified public artifact, never fictional payload masquerading as proof.

### A2 — Five evidence lenses, not a pipeline

**H2:** \`One consequential action. Five independent evidence questions.\`  
**Copy:** \`What was requested? What did policy authorize? What was effectively granted? What could the implementation do? What was observed in connected runtime coverage? Each answers a different question; missing one cannot be silently inferred from another.\`  
Native accessible five-card row, on 390px a vertical stack with equivalent emphasis; use evidence states and source types in short examples. Do not ordinally imply processing. Keep all five terms and descriptions already in \`app/assurance/page.tsx\`. Add **separate** callout for DAI's delegated approval comparison; do not market it as a sixth evidence plane.
**DAI panel H3:** \`Access is not authority to decide.\`  
**Copy:** \`Delegated Action Integrity compares available delegation evidence against what the code can do, what access is established and what activity was actually observed. Where proof is absent, HAIEC preserves the gap instead of assuming approval.\`  
CTA \`Explore the Agent & Capability Model\` → \`/developers/agents\`, and deeper \`/methodology\`.

### A3 — Deterministic engine value

**H2:** \`AI assists the workflow. HAIEC determines the evaluation.\`  
**Copy:** \`An AI assistant can help connect evidence, request permitted checks and explain results. HAIEC's deterministic evaluation logic applies the selected assurance profile to qualified evidence and returns a scoped disposition with reasons, coverage and unresolved questions.\`  
Design as **three annotated conceptual peer blocks**, not immutable sequential stages: \`Evidence & qualification\`, \`Applicable claims & evaluation\`, \`Bounded conclusion and proof limits\`. Link \`/why-deterministic\` and \`/methodology\` where live. Avoid “guaranteed reproducibility for all changing external sources”; exact fixed inputs and versions are required.

### A4 — Control applicability and result states

**H2:** \`A control being listed is not a control being proven.\`  
**Copy:** \`HAIEC separates cataloged expectations, relevant controls, evidence actually evaluated, contradictions and missing proof. The customer sees whether a result is established, partial, unknown, not assessed or otherwise inapplicable to this question. A control count is not a coverage score.\`  
Show a concise, accessible **example control review**. Do not reuse 88+ compliance registry count as evaluated HAIEC control count; keep compliance registry and assurance control family semantics distinct. CTA \`Explore Controls\` → \`/controls\`.

### A5 — Outcome specimen / show what customers get

**H2:** \`A decision you can inspect — not just a score.\`  
An accessible example panel with:
- \`The question\`: “Can this agent choose and submit refunds?”
- \`What is established\`: scoped source capability, credential facts *only if qualified*;
- \`What remains unknown\`: delegation and target-effect evidence;
- \`HAIEC evaluation\`: illustrative \`REVIEW\`, not actual execution/security incident;
- \`Next evidence step\`: responsible owner supplies delegation record; then evaluate within fresh scope;
- \`What you can verify\`: exact Evaluation and report/receipt when issued.
**Buyer copy:** \`See precisely what the evidence established, what was left untested and what the accountable reviewer should do next.\`
**Real proof CTA:** \`View a sample assurance report\` → \`/sample-reports\`. Prefer real qualified artifact where published; do not invent a public receipt URL.

**Important:** \`ALLOW\`, \`REVIEW\`, \`BLOCK\` are *evaluator dispositions within the evaluated scope*. A \`BLOCK\` disposition **is not** by itself a customer-native blocked transaction. Control evidence and actual target effect have separate proofs. Public report/package verification establishes the recorded artifact integrity under its own contract, not that every input was authentic.

### A6 — User and agent-operated entry

**H2:** \`Run HAIEC AI Assurance — with your agent.\`  
**Deck:** \`Use a compatible AI assistant or IDE to connect HAIEC, check your organization's readiness and request an authorized assessment. The assistant operates HAIEC tools; HAIEC evaluates the qualified evidence.\`  
**Endpoint, public/copyable:** \`https://www.haiec.com/api/mcp\`  
**Main prompt, public/copyable:** \`Run HAIEC AI Assurance\`  
**Primary CTA:** \`Connect HAIEC MCP\` → \`/docs/agent-integration\`  
**Secondary CTA:** \`Explore the MCP playbook\` → \`/developers/mcp-playbook\`.

**The prompt is intent, not a claim of fully automatic configuration.** Required client behavior:
1. If MCP already connected → \`haiec_preflight\` and \`haiec_capability_guide\` to determine eligibility; reuse selected/visible system and verified source; ask only for missing essential inputs.
2. If no connection → explain compatible MCP config and authorized scoped HAIEC key; never embed credentials into prompt, browser app or public log.
3. Only once permitted source/system/role/consent are established, run canonical \`haiec_run_assurance\` with caller-generated idempotency key; read run and exact evaluation summary, Agent Audit and Master Report; show limitations.
4. Any write, source binding, upload, active runtime test or receipt publication requires actual user approval and API scope. If only local developer checks are available, distinguish their independent result from full HAIEC Assurance.

**Don't promote “Check my HAIEC setup” as the hero prompt**; it remains a precise sub-operation and fallback for existing guided playbooks. Show the universal intent phrase in CTA and route it through preflight, not directly through an unsafe automatic scan.

### A7 — Decision and CTA

**H2:** \`Move from a possible action to a defensible operating decision.\`  
**Deck:** \`Scope one consequential AI system, establish the supported evidence, reveal material gaps, and give the accountable owner a decision record they can revisit after change.\`  
**Primary CTA:** \`Scope an Enterprise POC\` → \`/enterprise\`  
**Secondary:** \`Explore the methodology\` → \`/methodology\` and \`View sample reports\` → \`/sample-reports\`.  
No forced signup overlay for public education; actual authenticated MCP setup is separate.

## 3. SEO and copy conventions

**Canonical:** \`https://www.haiec.com/assurance\`.  
**Suggested SEO title:** \`AI Agent Assurance Evaluation & Evidence | HAIEC\` (check global title template).  
**Suggested meta description:** \`See how HAIEC evaluates AI agent actions, delegated authority, code capability and evidence to produce bounded assurance decisions with explicit proof gaps.\`  
**Primary search intent:** \`AI agent assurance evaluation\`, \`evidence-based AI assurance\`, \`AI agent authority validation\`.  
**Secondary:** \`delegated action integrity\`, \`agent permission vs delegation\`, \`deterministic AI assurance\`, \`AI governance evidence\`, \`AI agent assurance report\`, \`AI action approval evidence\`.
**Own this question:** “What evidence supports an AI assurance decision?” Not the same query ownership as Platform (“how HAIEC works”) or Methodology (“technical explanation”), or Products (“which tools to use”). Answer directly in natural SSR paragraphs and H2s; avoid stuffing keywords.

**Semantic site contracts:** Next server-rendered H1/H2, one full evidence table/cards in HTML, figure/figcaption on SVG, correct HTML dialog/buttons/tabs for user interactions, no inaccessible SVG-only copy, alternate dark/light mode and contrast; OG/Twitter aligned, canonical and breadcrumb if shared owner supports it; no stale ItemList on this page. Keep educational FAQ **visible**:
- \`Does a security scan prove an AI agent was authorized to decide?\` **No**, capability, grant and delegation are distinct.
- \`Does missing runtime evidence mean nothing happened?\` **No**, it remains unknown or not assessed.
- \`Is a HAIEC ALLOW disposition a guarantee of safety?\` **No**, conclusion within evaluated scope and qualified input only.
- \`Can I use HAIEC from my coding agent?\` **Yes**, if a compatible MCP client, authorized key and eligible system/source/scope are available; agent cannot author canonical verdict.

## 4. Motion and illustration — meaningful, not decorative

**Reuse** current corrected light-theme DAI vector and existing published \`/enterprise/architecture\` diagrams. Only develop the compact proof-lenses+DAI microvisual if a mobile-legible native HTML layout cannot convey it. Prefer **native HTML labels and SVG edges** so copy is accessible/indexable.
- Motion #1: user's step selection highlights code → credential → missing delegation → bounded REVIEW in **fictional fixture**; maintain transparent labels.
- Motion #2: hover/focus of each evidence card shows a single source/effect example and distinct \`UNKNOWN\` state. **No automatic color changes suggesting status improved without evidence**.
- Motion #3: deterministic engine explanation links qualified source and relevant applicable claim into exact scoped report; **not** a looping “scanning everything” spinner.
- Motion #4: MCP prompt → *illustrative* preflight \`READY | SETUP REQUIRED | INSUFFICIENT SCOPE\`, all labeled examples. No actual backend call without auth.
- Animation default: user initiated or subtle short reveal, pause/replay for any autoplay, respect \`prefers-reduced-motion\` and no-JS static content. Contrast status in text, not color; avoid “Govern/Protect” special visual prioritization.

## 5. Shared light/dark theme implementation and preservation rules

Adopt the marketing theme semantic tokens being specified for /platform and /products, **not** a second Assurance-only design system. Current authenticated \`ThemeToggle\` and \`ws-*\` variables only cover workspace. Never claim public theme shipped from existing code.
- Adapt all Assurance fixed \`bg-slate-950\`, \`bg-white\`, \`text-slate-*\` sections to scoped \`--site-*\` tokens in both modes, with deliberate neutral light framed illustration on a dark shell if needed.
- Use same public header toggle, preference precedence, spacing scale, heading style (Space Grotesk), body typography (Inter), mono evidence labels, forest/mint/navy restrained palette and single primary CTA.
- 390/768/1440 visual/readability, keyboard and screen-reader state/roles, explicit focus rings, mobile stack for five lenses, no-JS semantic fallback. Don't rebuild homepage or disturb its ProductShowcase, Source Map and DAI content.
- Prior approved original assets stay preserved; this page gets only a relevant contextual excerpt rather than another full architecture mural.

## 6. Release-safe implementation order (for later authorized Devin implementation)

1. Refresh HAIEC Main, check live \`app/assurance/page.tsx\` and exact canonical eval/report/control/DAI owners. Confirm current shared public marketing theme implementation: if already shipped since this plan, reuse it; never fork.
2. Verify every new claim against actual source, tenant/system scope, registered MCP tool and public sample route. Confirm authority/delegation/observed evidence separation. Create small claim inventory from A0–A7.
3. Implement editorial restructuring A0–A7 in the existing /assurance route with shared public theme tokens; use native HTML and one bounded interactive teaching puzzle. Don't touch canonical evaluator, source registry or MCP tool backend.
4. Provide real MCP setup link, endpoint and **Run HAIEC AI Assurance** prompt. Only sample illustrative readiness states, not fabricated successful scans. Links \`/docs/agent-integration\` and \`/developers/mcp-playbook\`.
5. Source-check metadata, canonical, visual/figcaption accessibility and internal links; focused lint/TS, static route smoke, 390/768/1440 both themes, keyboard/reduced-motion; a small claim review, not unrelated exhaustive suite.
6. One HAIEC PR, merge to \`Main\` once code is approved, verify automatic Vercel deploy and actual page behavior; update exact production version and screenshots into Common Repo. **This document commits no production change.**

### Non-negotiable acceptance criteria

- Visitor grasps **difference between scanner PASS, permission, delegation, observation and actual evidence-backed assurance** within the first two sections.
- DAI and deterministic evaluator shown as distinctive mechanics, **not** universal safety/authorization enforcement.
- An actual buyer-output object is visible: applicable claim, established evidence, gap, bounded outcome, human action and verification route.
- Distinguishes **cataloged controls** from **assessed/effective control evidence**; UNKNOWN and NOT_ASSESSED preserved.
- “Run HAIEC AI Assurance” is displayed, is copyable, links correct key-authenticated MCP setup, preflights before run.
- Same site-wide public light/dark preference and component system; no homepage changes; preserve six jobs and conceptual pillars on their **own** Platform route.
- Accessible, SEO-readable SSR copy and relevant diagrams; synthetic puzzle always labeled, no simulated live result.

## 7. Next-step handoff

**Implement Assurance as page #3 after Platform and Products, or alongside their shared public-theme foundation if production implementation is already underway.** Once accepted, continue to Enterprise, Controls, Methodology and Pricing from the existing audit list with the same brand/SEO/motion system.
