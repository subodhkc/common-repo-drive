> **2026-10-20 — HERO V3 STRATEGY AND HTML REVISION (LATEST):** The [updated interactive homepage HTML](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html) **now uses the exact approved headline**: **“Go beyond checking AI components. Understand and assess the consequential actions they enable.”** Its hero image/visual is **no longer the six-capability explorer**. Two art-directed illustrations rotate **every 10 seconds**: **Consequence Gap** (separately scoped security/IAM/policy results → derived agent/tool/worker/payment path → five peer evidence views and cross-cutting DAI), and **Executive Decision** (source-backed finding → specific authority question → deterministic evaluation / actionable next decision). The H1, CTA and MCP goal remain fixed; manual slide selection, pause, reduced-motion, offscreen and keyboard behavior are specified in the HTML. **The existing interactive six-capability + DAI explorer is preserved BELOW the first-finding section**, and MCP four chapters / governance playback remain. This V3 decision supersedes V2 language recommending the six-capability explorer *in the hero*. It is an internal noindex design reference; **HAIEC production is unchanged**.

# HAIEC Homepage — Product/UX Designer Second Pass: Hero, DAI, IDE Terminal, Governance Playback

**Date:** 2026-10-20. **Status:** source reviewed, editorial/design implementation specification committed to Common Repo; **no HAIEC production site or engine code changed**. This V2 is the **controlling homepage design refinement** over [the first-pass homepage plan](WEBSITE-HOMEPAGE-FIRST-FINDINGS-LIGHT-FIRST-DESIGN-COPY-CONVERSION-PLAN-2026-10-20.md). Companion interactive HTML: [Homepage V2 Design Lab](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html).

**PRODUCT DIRECTION LOCK:** **First finding immediately; deeper assurance when required.** Do not make policy/delegation/identity/runtime/target-effect evidence mandatory to show an independently source-supported finding. HAIEC's special value is to discover significant *consequential capability*, show evidence-backed relationships, compare relevant authority, and help the user act. Missing evidence is a **specific open question**, not the headline proposition or a catch-all negative engine score.

## 1. Source inspection / existing assets

HAIEC website source Main checked 2026-10-20:
- \`app/page.tsx\` 1,354 lines, fourteen section elements, current H1 “Know what your AI can do. See what the evidence supports”; hero uses \`HeroFlowDiagram\`; A1 embeds \`ScenarioPlayer\`; A2 has entry-point cards and animated \`ProductShowcase\`.
- \`components/homepage/HeroArchitectureExplorer.tsx\` 5.5 KB, six independently clickable capability cards. **Click currently sets \`selected\` and changes one small line of text** in a \`min-h-[52px]\` description region. No DAI explanation, no business outcome, no actual source finding or action CTA inside it. Keep its native HTML/SSR and six equal peers; upgrade the detail *in place*. The light card and its dark parent already clash.
- \`components/hero/ProductShowcase.tsx\` 10 KB, 3 synthetic demos, **first starts “assure the claims-agent” then ends REVIEW + “UNKNOWN ≠ PASS”**. It types at 15ms/character then rotates every 15 seconds. No dedicated connection/setup view, no pause or explicit copy prompt; in mobile or initial hydration it shows one static fallback. Terminal uses \`bg-slate-950\` plus \`--haiec-text-primary\` variable (not a terminal-local text token). Global light-theme.css remaps dark backgrounds and whitespace, potentially breaking the intended dark terminal in light mode; result secondary text uses global root variables. Make it a stable **intentional dark inset** in either public theme, with local terminal semantic tokens.
- \`data/demo/haiec-advantage-scenario.ts\` ~26 sec, seven events: action proposed, reach found, “sits outside permitted operating scope — it cannot proceed silently,” reviewer routed, decision recorded, monitoring visible, verification linked. This **looks like every finding triggers an automatic block or notification**, although \`ScenarioPlayer\` is an explicitly simulated deterministic player with no actual writes. It lacks first-finding path visibility and DAI as business value. Improve event *copy and framing*, preserve \`ScenarioScript\` contract/time/stages and visible synthetic marking.
- \`components/governance/ScenarioPlayer.tsx\` ~9.4 KB, virtual clock, three lanes, nine stage chips, automatic play when visible, always loops, 1/1.5/2x, step controls and ARIA stage announcement. The **three-lane 26-second simulator is too cognitively dense to be the hero**, especially on mobile, and currently re-autoplays on entering viewport after user pauses due to \`setPlaying(inView && !reduced)\`. Improve user intent handling and give an accessible chapter overview, not replace hero.
- \`components/homepage/AuthorityPlanesFigure.tsx\` current dark-themed, alongside DAI SVG and five-plane text. Preserve; theme intentionally or use paired light CSS tokens.
- \`components/animations/TopologyAmbientBackground.tsx\` animated low-alpha SVG background behind hero, intentional static graph edges; keep low alpha, avoid visually competing with interactive details.
- \`styles/light-theme.css\` + \`WorkspaceThemeSync\` existing partial light remap, but first paint dark if no explicit preference; public light default still requires shared initial theme logic, as established in V1.
- \`lib/mcp/ide-tools.ts\`, \`lib/mcp/capability-guide.ts\`, public \`llms.txt\` confirm real tool names \`haiec_preflight\`, \`haiec_github_preflight\`, \`haiec_bind_github_source\`, \`haiec_run_assurance\`, \`haiec_get_agent_trace\`, \`haiec_get_master_report\`. GitHub source binding requires authorized user confirmation/eligible key; do not show it executing on anonymous prompt alone.

### Design benchmark and governing principle

Avoid imitating a “live SOC console” filled with status badges, operational counters and animated warnings. Present a confident enterprise product with editorial type hierarchy, a real interactive **method product**, and coherent user action. Less fake motion; more meaningful content.

**Product promise:** “Understand consequential AI actions before they become incidents. Move from the first technical finding to a defensible decision, using deterministic evidence when it matters.”

**Brand vocabulary:** Category **Evidence-Bound Assurance**, descriptor **Deterministic AI Action Assurance**, HAIEC tagline **High assurance in every consequence.** Public CTA should be **Scope an Enterprise POC**, **Run HAIEC AI Assurance**, **Explore a Real Report**. Search-meaning “AI agent security” remains visible but don't oversaturate the hero.

## 2. UX: recommended page architecture (not full replacement)

**Homepage is currently long but contains valuable originals.** Suggested tiered information hierarchy:

**First viewport (question + immediately interactive answer)**
- Header / restrained MunichTech award + Github/npm/MCP proof rail
- H1: **“Know what your AI can do. See what it could cause.”**
- Deck: **“HAIEC finds consequential action paths from code and connected systems. Explore meaningful findings right away, then use deterministic assurance to compare authority, evidence and actual behavior when a decision requires it.”**
- Primary: **Scope an Enterprise POC**, secondary: **Run HAIEC with Your AI Agent**, tertiary **See an Assurance Report**. Copy chip **Run HAIEC AI Assurance**.
- Right: enhanced six-capability + DAI interactive HERO V2 described in §3.

**Second viewport (proof and business clarity)**
- 3 concise business outcomes: **Find the path / Compare its authority / Decide with evidence**. These are storytelling headlines, **not six compulsory product steps**.
- “First source finding” scenario, short enough to inspect at a glance, with an established code-path and clearly identified further context (not headline UNKNOWN).
- Real Kestrel report proof CTA near the first-finding illustration; don't mistake illustration for a real report.

**Mid-page product experience**
- IDE terminal **Connect / Discover / Assure / Report**, upgraded copy and colors in §4. Position immediately after first value scene, not below a long governance narrative.
- System Constellation with existing \`SampleMapPreview\`; DAI/evidence deep section and \`AuthorityPlanesFigure\`; link to \`/methodology\`.
- Operational governance **playback** in dedicated “From finding to accountable action” section after the first finding/terminal, not as 50% of the hero. Avoid auto-block narrative.

**Lower trust/education**
- Existing three third-party incident patterns + Hugging Face analysis, real award proof; incident cards can compact to avoid repetitive fear narrative, but preserve original links.
- AL0/AL1/AL2 forensic walkthrough, canonical method, standards/framework grid, “different questions / HAIEC connects answers,” buyer personas and final Enterprise + sample report CTAs. May move exact text into accessible summaries/deep links; **never delete silently**.

## 3. Hero V2: six equal capabilities, genuinely useful selected detail, dedicated DAI

**Interaction surface:** the hero right side gets one card with a modest static framework header, 6 equal-weight peer buttons (3×2 desktop, 2×3 mobile), and a **rich 3-part selected detail drawer**. Do not add an eighth huge architecture mural, a second full framework graphic or 6 separate micro-tables.

On initial paint (without JS), **default an actual meaningful Discover finding panel**, NOT an empty “Select any capability” placeholder.

**Every capability selection must show FOUR things**:
1. **Business question** in plain words.
2. **What HAIEC reveals** — a concrete scoped example, not one line.
3. **What the customer gets** — specific map, source-linked finding, scoped decision, monitoring signal, configured mediation or verifiable report.
4. **What to do next** — real deep link/CTA and optional evidence qualifier in secondary text.

**Source-grounded example content (not a real executed finding):**

| Peer | Question (hero drawer heading) | Result demonstrated | Customer action/deep link |
|---|---|---|---|
| Discover | “What consequential actions can this agent reach?” | Source-visible support agent → refund tool → handler → possible financial mutation; includes source/connection version when present | “Explore System Constellation” → /ai-action-access-map |
| Evaluate | “Does its effective capability match the intended task?” | Deterministic source/control and evidence comparisons show policy, access and capability side-by-side; explicit exact coverage | “See Assurance” → /assurance |
| Authorize | “Which choices belong to an accountable human?” | Approval/operating scope and exception workflow, show legitimate routine activity can continue; no automatic implied target intervention | “Explore Decisions” → /enterprise |
| Monitor | “What changed after deployment?” | Connected telemetry/history can reveal a changed tool path, grant or runtime behavior; only where source connected | “See Connected Monitoring” → /monitoring (actual public destination/authorization verify; otherwise /platform) |
| Protect | “Which consequential actions can a wired control mediate?” | Installed/integrated target adapter vs proposed decision: protection availability needs actual in-path confirmation | “Understand Protection” → /platform |
| Verify | “What evidence can an approver inspect and revisit?” | Evaluation-bound report, sources, observations, exact limits and receipts where issued | “See a Sample Report” → /sample-reports/kestrel |

**DAI is a cross-cutting inspector, NOT a seventh capability card or a compulsory blocking gate.** Add one clearly recognizable full-width sub-section below the six cards inside the same hero card:

> **Delegated Action Integrity (DAI)**  
> **“A credential can allow an action. Who authorized the agent to choose it?”**  
> Source-linked policy / effective grant / delegated business choice / code path / observed evidence displayed as distinct labeled facts. First useful finding retained regardless of missing delegated-choice evidence.  
> Micro-interaction **“Inspect authority”** toggles three scenarios:
> - **Rule-grounded**: approved policy requires refund to original payment method, trusted transaction data fixes recipient — rule determines choice (only if actual implementation and chosen value match).
> - **Delegated**: authorized owner explicitly grants the AI bounded recipient selection — compare chosen value to scope.
> - **Needs confirmation**: code could pick a new account, but the specific delegated choice isn't established; show **“Recipient authority not yet evidenced”** and *leave other known facts known*. **Do not call entire system UNKNOWN**.
> Include separate DAI deep link \`/methodology#authority\` or \`/assurance\`, verify section ID before release. On a small device, this is an expandable disclosure with content readable even when JS disabled.

**DAI visual hierarchy:** Unlike previous DAI and six-peer SVGs, no special orange/red decoration or singled-out capability. DAI cross-cuts the common evidence core. Use a visibly distinct **hairline divider** and one meaningful example, not a huge seventh equally weighted button.

**Interaction acceptance:** Selecting any peer changes the heading, finding/map preview, value, CTA and next relevant proof, not only a one-line string; ARIA pressed, live region with understandable focused contents, keyboard navigation, stable non-jumping height, reduced motion, SSR substantive default content, no hydration/flash. DAI scenario buttons have real JS state and update meaningful explanatory text.

## 4. Animated MCP IDE terminal V2: setup and assurance should sell real ease of use

**Current problem:** homepage terminal begins with \`❯ assure the claims-agent in this repo\`, fake opaque SHA/ID, ends in \`DISPOSITION REVIEW / UNKNOWN ≠ PASS\`, rotates every 15s and rarely explains **how to connect**. Result looks like failure or placeholder despite legitimately useful findings.

**Recommended information architecture: FOUR user-selectable chapters with real visible labels (not 3 tiny pagination dots):**
1. **Connect** — authorized MCP setup in existing IDE
2. **Discover** — first meaningful source finding from chosen repo/system, no extra producer mandatory
3. **Assure** — compare eligible authority and code/risk facts using deterministic evaluation
4. **Report** — retrieve canonical report and useful follow-ups

**Use explicit labels, not a faux autonomous script.** This is a synthetic educational terminal, separate from the real authenticated MCP workflow. Keep a visible **“Illustrative session — no live run”** caption.

### Exact proposed terminal transcript (each tab separately)

**CONNECT (first visible, no fake production run):**
\`\`\`text
You: Connect HAIEC to my AI coding agent.

HAIEC MCP endpoint
  https://www.haiec.com/api/mcp

In your MCP client:
  1. Add the HAIEC server
  2. Store a scoped API key securely
  3. Check connection and eligible sources

You: Run HAIEC AI Assurance
→ haiec_preflight          connection and source readiness
→ Next: choose an authorized AI system or repository

READY TO EXPLORE · no assessment executed yet
\`\`\`

**DISCOVER (visible first-value output, no fictitious proof):**
\`\`\`text
You: What actions can this agent reach?

→ authorized repo selected
→ source / scan binding identified
→ action + tool + handler relations inspected

POTENTIAL CONSEQUENCE FOUND
  Agent         support-assistant
  Tool          refund.execute
  Source path   refund handler → refund API
  Impact        possible financial mutation

What we know: source-visible action path
Next: inspect authority, recipient and target effect
\`\`\`

**ASSURE (focus determinism and DAI):**
\`\`\`text
You: Evaluate this refund-action risk with HAIEC.

→ haiec_preflight       eligible scope
→ haiec_run_assurance   authorized evaluation
→ claim/DAI comparison  available bounded evidence

SOURCE-CAPABLE ACTION  established within scanned source
POLICY CONTEXT        approved refund limit if evidenced
ACCESS CONTEXT        evaluated where IAM source exists
CHOICE AUTHORITY      check only discretionary recipient choice

HAIEC evaluates the evidence; the AI explains the next step.
\`\`\`
Do not claim these concrete output labels are exact backend enums or that \`haiec_run_assurance\` universally evaluates unconnected DAI; these are explanatory **display copy**, not tool JSON. If the real source run doesn't qualify policy/IAM, display \`needs IAM connection\` only in that facet, not a blanket REVIEW.

**REPORT:**
\`\`\`text
You: Show my HAIEC assurance report.

→ haiec_get_master_report    exact evaluation (where issued)
→ linked findings           source / authority / decisions
→ result scope              supported, partial, not assessed
→ recommendation            inspect recipient choice and target effect

OUTPUT
  A report you can inspect, share and replay within its scope

Same frozen evidence + same rules → consistent evaluation.
\`\`\`

**Tool accuracy and UX technical details:**
- Real names are present in current \`lib/mcp/ide-tools.ts\` and related sources. \`haiec_bind_github_source\` requires eligible scope and user confirmation; do not depict a public unauthenticated “magic” source binding.
- **Setup** should use instructional text rather than showing a developer's private API key or a made-up one-click OAuth screen.
- **Discover** can show source-specific technical findings without pretending a canonical U5 verdict ran.
- **Assure** uses \`haiec_run_assurance\` only for an authorized connected system and exact selected source; no 5-plane universal completion or fabricated result count.
- **Report** requires exact persisted Evaluation and read authorization; no report link generated for unsupported/incomplete run.

**Visual tokens for both public themes:** A deliberate ink/navy terminal \`#0D2027\` / \`#112A30\` with text \`#E8F4F0\`, secondary \`#BCD0C8\`, command blue \`#A6D6F6\`, source green \`#A4E3BA\`, specific caution amber \`#E6C182\`. Light page frame: white outer margin, soft \`#EAF1EE\` border and stable 14–16px mono with line-height 1.6–1.7. **Do not use generic \`--haiec-text-primary\` if the global remapper changes it to near-black**.
- Replace magic fake \`✓\` at bottom on all demos with **chapter-specific real benefit:** Connected securely (setup guide, not proof of connection); First source path surfaced (illustrative); Deterministic comparison within evaluated scope; Exact report and limitations.
- **User control:** tabs, Play/Pause, Replay, Copy goal and optional 1×/2×; manually selected tab must not auto-advance away. Auto-type max 60–100ms per meaningful line/step, **not slow 15ms per character across hundreds of letters**; show first 2 steps immediately; don't spend 10–15 sec on empty terminal. Pause on off-screen / hidden and reduced motion. Prefer no autoplay by default on mobile.
- Render static full content SSR for first selected chapter and a suitable no-JS fallback. Terminal height adapts without clipped result labels; use stable min-height, not hard fixed 560px on mobile. Scroll intentionally only within long code section; avoid repeated screen-reader announcements per letter.

## 5. Governance demo playback V2: **do NOT replace hero image**

**Decision:** Existing compact \`ScenarioPlayer\` is a supporting demonstration, not primary hero. Its 26-second 3-lane/9-stage view is text-dense, has more status labels than the story requires and invites a false “all agents need approval/monitoring” interpretation. Placing it above first-finding story currently prioritizes governance before detection.

**Place after first finding + MCP demo, in a lighter full-width “What HAIEC does with a consequential finding” section.** Keep current reusable scenario contract and all player controls. A small link/thumbnail near hero may scroll to the playback, **but not autoplay a full multi-lane scenario in the hero**.

**New section copy:**
- Eyebrow: \`FROM FINDING TO ACCOUNTABLE ACTION\`
- H2: **“Find the risk. Decide what needs a human.”**
- Deck: \`HAIEC can surface a consequential action path before every source is connected. When a proposed action requires review, qualified policy and evidence help the organization decide what to approve, investigate or constrain. In-scope work need not stop while material exceptions are reviewed.\`
- Caption: \`Illustrative scripted scenario. No live action intercepted, reviewer notified or external system changed by playback.\`
- CTA existing: \`Watch the enterprise control room\` → \`/monitoring/governance?demo=manufacturing\` (protected/demo entry must be tested).

**Revise original seven events, preserve schema and 26-second offsets:**

| t | Existing stage/lane | Stronger headline | Honest, value-led supporting sentence |
|---|---|---|---|
| 00 | PROPOSED / action | \`An AI proposes a business action\` | “A fictional operations agent requests a high-impact change; routine work continues within established policy.” |
| 04 | SCOPE / action | \`HAIEC identifies a consequential path\` | “Supported source and capability analysis shows the action's target and potential effect, even before all runtime sources are connected.” |
| 08 | SCOPE / action | \`Policy and access put the finding in context\` | “The approved operating boundary can already be known; the proposed exception calls for an accountable decision. This is **not** proof of an installed gateway block.” |
| 12 | NOTIFY / reviewer | \`The exception is prepared for review\` | “An evidence-linked review request can be assigned to an authorized owner where the workflow is configured; no live notification is issued by the demo.” |
| 16 | DECISION / reviewer | \`A human records a scoped decision\` | “In this scenario, a reviewer records an approval or required restriction with an expiry and traceable conditions; it does not automatically grant target runtime access.” |
| 20 | MONITORING / monitoring | \`Connected signals help follow through\` | “Where monitoring is enabled, relevant observations can be compared with the approved boundary; unrelated and unconnected sources are not claimed.” |
| 23 | EVIDENCE / monitoring | \`The evidence remains inspectable\` | “The case ties findings, scope and recorded decisions into an illustrative report; a recorded decision or hash does not prove a target-side effect.” |

**Important:** If event at 16s says approval, choose a precise approved scenario, not vague \`approval or restriction\`; one fictional timeline must be internally consistent. Distinguish system decision from guaranteed enforced target control. No fraudulent “blocked attacker!” animation.

**UX display improvements:** 3 broader user-readable chapters \`Find\`, \`Review\`, \`Follow through\` in the marketing player header (map existing stages internally), while original nine stage values remain in underlying reusable contract. For each event show one human-readable active headline + concise evidence/impact and optional full three-lane audit details on expansion. Use a **Play demo (26s)** control, Pause, Restart and Step forward. Pause by default in homepage (optional muted autoplay only with user opt-in) and do not re-start automatically after explicit pause when IntersectionObserver changes. \`ScenarioPlayer\` can remain auto-active in existing other specialized pages where intentional; add optional homepage \`autoPlay={false}\`/mode prop rather than changing all other consumers. SSR/keyboard/reduced-motion shows all steps as readable static cards.

**Alternative if hero motion desired:** a **6–8-second CSS visual trace** of a source-reach finding, paused/reduced-motion alternative and explicit “illustrative”; cannot replace useful selected six-capability/DAI interaction. Current full ScenarioPlayer is not a hero candidate.

## 6. DAI UX, “UNKNOWN,” and the prior engineering overfocus

**Current product trust rule:** It is appropriate to preserve missing proof when a particular claim needs it. It is **not** appropriate to make every finding wait on elaborate delegation admission or to headline a source finding with “UNKNOWN.”

**UX change:** Replace broad marketing \`UNKNOWN ≠ PASS\` and \`delegation unproven\` repetition with positive, question-specific evidence phrasing:
- \`Found in source\`: action path/reachability supported.
- \`Policy confirmed\`: scope is grounded in current qualified policy.
- \`Access verified\`: credential grant supported where connected.
- \`Delegated choice\`: bounded to business decision and authority if relevant.
- \`Requires follow-up\`: explicit outstanding fact and concrete next connection, instead of “UNKNOWN” for everything.
- \`Not observed\` / \`Runtime not connected\`: distinguish absence of telemetry from evidence that no action occurred.
- \`Not assessed\`: keep precise technical status in actual detailed reports/APIs, **do not relabel as passed**.
- \`Outside established scope\`: only with a real qualified boundary and relevant source comparison.
Keep native result enums intact for APIs, MCP, receipts and audit. UI labels are explanatory and must not falsify technical state.

**DAI practical decision logic as a product message (not a new engine gate):**
1. **Show first source finding immediately** with possible action and technical path.
2. Show approved policy and any effective grant as positive known facts, with source/time.
3. Ask whether the agent's consequential **choice is fully determined by policy+trusted task facts**, or whether discretionary authority was actually delegated.
4. When rule-grounded, a separate discretionary approval isn't always necessary — but verify that a chosen value conformed if claiming that result.
5. When an agent has discretion, compare any already available approved work order, role assignment, workflow, signed mandate or explicit policy delegation to the action.
6. If a specific delegation cannot be established from supported sources, **do not erase finding or declare full system unknown**. Describe \`Business authority for this recipient choice needs confirmation\`.
7. Runtime and target enforcement proof is only needed to claim actual operation, blocked effect or real-time protection.

**Previous P0 correction remains valid as a source-semantic correctness issue:** assembler may promote ordinary approved envelope limits to delegated facts and union/max widen a scope. **Do not solve that by imposing a user-facing up-front evidence-upload form, waiting for an org officer to confirm every finding, or classifying entire evaluations as UNKNOWN.** Implement any targeted engine fix behind existing result types as a separate, bounded workstream only if required for correctness of specific stronger DAI statements. It is **NOT** a homepage redesign blocker, source-first findings blocker, or justification for inventing more gates. A simple follow-up evidence suggestion is usually enough for an otherwise useful risk finding.

**Recommended engineering priority:** P0 user-facing discovery findings, source-linked consequence path and truthful status scope; P1 display and product-flow improvement for DAI using existing sources; separate focused admission-semantic correction to guard against actual overclaim. The future ISAF2 research residual-choice classifier is **not** required to ship the web/UX pass and must not be marketed as built.

## 7. Theme, background, motion, layout design details

- **Light FIRST PAINT** (#F8FAF8 base, white cards, ink #17342B), one consistent site theme selection, dark alternative and persisted explicit user choice; current light-theme CSS class remap is partial and cannot be treated as complete. Do not break workspace auth theme.
- Section composition: white hero paper surface with diagonal soft forest/mint radial ink wash, subtle topology in corners only; first-finding section warm white + a slim teal high-value accent; dark CODE inset with stable local tokens; neutral cloud background for Source Constellation; white authority evidence plane cards with five peer columns; muted green demo strip; lighter neutral trust cards; dark forest **final CTA** is allowed as intentional contrast in both themes.
- Type: eyebrow 11–12px, H1 clamp 44–68px with 1.08 line-height, section H2 clamp 32–46px, body 16–18px; max paragraph measure ~68 characters. Mono only for code, source IDs, evidence status and technical UI. Avoid long paragraphs in hero.
- Hero grid: ~46% left text / ~54% interactive right on desktop (minimum 560–620px right if possible), stack at tablet/mobile; full responsive six-card arrangement and selected detail under cards without page jump; DAI accordion below. The current light hero inset is visually cramped; avoid fitting giant diagram into phone.
- Ambient SVG \`TopologyAmbientBackground\`: soft 2–4% opacity on light, no simulated “runtime actions,” no moving connectors/pulsing approvals; prevent text contrast reduction. Users focus on interactive content, not decorative glow.
- Reduced motion: no typing, no autoplay, all terminal text and demo transcript visible; keyboard tab/enter, DAI toggles, other controls available; preserve content if JS disabled.
- Color semantics: forest=interactive/action, warm amber=follow-up/review, slate=neutral. Do not use red for Protect and orange for Govern as visual rank. Unknown facts not a red critical event by default.
- Motion inventory: **keep** reveal-on-scroll, existing meaningful ProductShowcase and ScenarioPlayer and subtle ambient nodes. **Change** auto-rotation and autoplay to respect explicit pause/selection. **Add** only 160–240ms focus transitions and small progress indicator; never live fake dashboard counters.
- Keep award recognition, npm/GitHub App/Action CTA row, source diagrams, Kestrel reports, research, CI paths, standards, four buyer personas, case studies, analytics event labels, footer and chat/consent overlays from previous preservation plan.

## 8. Ownership, navigation, conversion and SEO

- Main owner: \`app/page.tsx\`. Hero UI: \`components/homepage/HeroArchitectureExplorer.tsx\`; terminal: \`components/hero/ProductShowcase.tsx\`; Scenario: \`data/demo/haiec-advantage-scenario.ts\` and \`components/governance/ScenarioPlayer.tsx\`. Styles: reuse shared public site tokens rather than making seven custom theme providers.
- Canonical sample source links: \`/sample-reports/kestrel\`, \`/ai-action-access-map\`, \`/sample-ai-action-access-map\`, \`/assurance\`, \`/methodology\`, \`/platform\`, \`/enterprise\`.
- Real auth + onboarding: \`/docs/agent-integration\`, endpoint \`https://www.haiec.com/api/mcp\`, goal \`Run HAIEC AI Assurance\`; guard credentials and user-confirmed source binding.
- SEO: unique H1 about consequential AI security and source findings; preserve original SEO manifest and category metadata but reconcile old manifest H1; native HTML labels, good in-context anchor captions, no hero entirely canvas-generated, no fake structured customer review data.
- Keep original \`TrackedLink\` analytics events on the three hero buyer CTAs; any new use events must use valid existing instrumentation, not custom invented string.
- Enterprise buyer can find direct POC form within one click; agent can find MCP guide within one click; technical buyer can inspect real Kestrel report, not synthetic fixture masquerading as actual.
- Headline priority: finding > consequential outcome > authority > decision > proof frontier. No “UNKNOWN” as top-level USP.

## 9. Focused implementation and acceptance

1. Refresh HAIEC Main and current Devin PR state to avoid overwriting ongoing implementation. Treat this as **V2 design guidance** for the existing seven-page implementation program, not a new 8-page wholesale replatform.
2. Migrate first-paint public light theme with no flash; make hero deep content and DAI interactive; improve IDE terminal transcript, actual tabs and accessibility; update scenario text and homepage-specific player behavior.
3. Responsive and visual screenshot acceptance at 390/768/1440 in default light + selected dark; check visible text contrast in both; purposeful dark terminal preserved.
4. Hero: all 6 buttons update (question/result/evidence/CTA) and DAI three states are interactive; selected detail not clipped; accessible from keyboard and no-JS meaningful initial view.
5. Terminal: four tabs work; first view shows setup and benefits within ~2s; explicit copy+docs; demos are marked synthetic; mobile displays usable full transcript; pause/replay; no false tool outputs; read-only auth before any source mutation/run.
6. Playback: revised 7 scripts and 26-second length; user play/pause/step/restart; explicit pause sticky; no blanket "auto blocked"; simulated label; static reduced motion.
7. Preserve all important source content/CTAs/sections/events, and do not silently delete existing site tools. Verify speed, JS payload, SEO HTML, integration links and all track events.
8. Lint, TypeScript touched files, narrow unit tests of output copy/state interactions + source contract (no heavy unrelated test cycles).
9. If website implementation is approved in active Devin work order: one PR to HAIEC Main, automatic Vercel deploy, verify live exact pages and update Common Repo with final commit and screenshot links. **This Common Repo source/design review alone is not a production deployment.**

**Overall UX success:** Within seconds, a new visitor learns that HAIEC finds consequential agent risks early and can go deeper deterministically. Clicking any hero capability demonstrates an actual type of output. DAI is an understandable differentiator, not an evidence intake lecture. MCP setup looks practical. Playback adds operational trust without hijacking the hero or falsely implying auto-enforcement.

## 10. Implementation-record update — V3 hero test contract (2026-10-20, local)

**Status:** implemented and validated in the `subodhkc/haiec-website` working tree; **not committed, pushed, merged or deployed** pending explicit authorization.

The pre-existing hero unit tests in `tests/unit/homepage-hero-diagram.test.ts` encoded the pre-V3 contract: no autoplay carousel, the hero visual required in the first section, and the refund-boundary dossier treated as forbidden hero content. The approved V3 design intentionally supersedes all three constraints. The test file has been updated locally to lock the **new** contract instead of the old one:

- A controlled two-scene hero carousel is **permitted** provided it carries: 10-second rotation, manual scene selection, an explicit Pause/Resume control, pause on hover/keyboard focus/offscreen/page-hide, ArrowLeft/ArrowRight keyboard navigation, `prefers-reduced-motion` starting paused with no progress animation, `aria-live` announcements, and both scenes present in SSR markup with the inactive scene hidden.
- The **illustrative refund-recipient dossier** (Executive Decision scene) is permitted in the hero provided it is labeled illustrative/not-live and does not imply a completed transaction, intercepted action or enforcement.
- The six-capability explorer lives outside the hero in its own section; DAI remains a cross-cutting authority comparison, not a seventh capability.

Regression intent preserved: pause/manual/reduced-motion/illustrative-labeling invariants are now the tested contract (40/40 focused tests pass locally).

**Suggested doc follow-up:** when the homepage V3 implementation is committed and shipped, update this record with the PR/commit reference and add a Homepage V3 implementation record to this directory alongside WEBSITE-SEVEN-PAGE-ENHANCEMENT-IMPLEMENTATION-RECORD-2026-10-20.md.
