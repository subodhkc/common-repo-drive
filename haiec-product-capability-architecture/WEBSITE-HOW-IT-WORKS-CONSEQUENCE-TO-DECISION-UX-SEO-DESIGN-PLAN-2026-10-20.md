> **Separate new education page, 2026-10-20:** [How LLMs & AI Agents Work](WEBSITE-HOW-LLMS-AND-AI-AGENTS-WORK-OBSERVABILITY-HAIEC-GAP-AWS-RESEARCH-PLAN-2026-10-20.md) + [interactive model/agent visibility experience](design-references/how-ai-systems-work-2026-10-20/llm-vs-agent-visibility-consequences-interactive.html) complements, but must **not replace**, the HAIEC operational `/how-it-works` page. Cross-link when deployed. No production changes authorized.

# HAIEC /how-it-works: From Consequential Action to Evidence-Backed Decision
**2026-10-20 | Source-grounded page #12 | Planning and editorial design only | HAIEC source unchanged**

Companion interactive light-first page design: [How HAIEC Works, guided consequence-to-decision experience](design-references/how-it-works-2026-10-20/how-it-works-consequence-to-decision-interactive.html).

## 1. Purpose and product decision

The existing public route **https://www.haiec.com/how-it-works** and source \`app/how-it-works/page.tsx\` are substantive and must be **enhanced in place, not replaced with a shallow landing page**. The current seven-phase lifecycle is sound as a teaching model but a poor enterprise first impression when it is presented as seven static cards and followed by repeated caveats.

**Distinct job:** This is the buyer-facing **operational walkthrough** of HAIEC from first authorized source to meaningful finding, context, deterministic evaluation, verifiable report and connected follow-through.

- Homepage tells buyers **why** HAIEC exists and why component checks alone are insufficient.
- \`/how-it-works\` lets buyers **see how** HAIEC works and what each step yields without a complicated setup or needless all-source evidence-upload hurdles.
- \`/platform\` explains three pillars and six independent product capabilities.
- \`/assurance\` presents formal evaluation and report semantics.
- \`/methodology\` owns deep claim qualification, DAI, proof boundaries, ISAF v2 applied method.
- \`/ai-action-access-map\` owns System Constellation.
- \`/delegated-action-integrity\`, \`/assurance-controls\` and \`/frameworks/isaf-v2\` are **planned, not yet deployed**, and should be linked from the live route only after each is implemented.

**Customer promise:** **“From AI action paths to decisions you can defend.”** Easy to start through compatible MCP AI agents, authorized GitHub source and API or workspace. See supported consequence paths early. Compare independent evidence facets and who owns consequential choice. Obtain bounded deterministic findings, real available records and explicit follow-up.

**Positioning:** Deterministic AI Action Assurance. Lead with risk exposure and value, not “what is unknown stays unknown.” Actual engine states remain precise in technical reports, and consumer copy must not mislabel an unassessed control as a pass, code reachability as execution, or an approval as target enforcement.

## 2. Fresh evidence: live site and exact current source

Live public page fetched: https://www.haiec.com/how-it-works. Website main source \`subodhkc/haiec-website\`:
- \`app/how-it-works/page.tsx\` SHA \`b8329180010949f98cb7c3d1c7bad4db97fb1f01\`, 18,589 chars. One H1 (“How HAIEC Works”), hard-coded dark slate hero and entry section, white lifecycle/evidence sections, deep-dark AssuranceLens and closing CTA. Static seven cards. Existing page metadata already has canonical \`https://www.haiec.com/how-it-works\`.
- \`app/how-it-works/layout.tsx\` SHA \`e7ead36151ad6ce0862e76a5ae86427119674423\` only passes children; global header/footer owned by root shell.
- \`components/homepage/AssuranceLens.tsx\` SHA \`aac98481050d0168221b3e006777c55afda6f23d\`: meaningful **cross-customer disclosure** consequence story, uses semantic HTML and subtle CSS motion, but prominently renders “Illustrative agentic-risk pattern / Not a customer scan” and a global “Unknown” marketing status row. **Preserve the actual separate-checks/source-path story**, reframe readable example copy without customer-facing internal prototype banners; never repurpose source-free story as observed event or live evidence.
- \`components/AutoHideNavigation.tsx\` SHA \`8f4082e61dc88dfd178e2205047cbc122258e902\`: **Resources → Learn → How HAIEC Works** already exists. Do not add a second header item.
- \`data/public-site-registry.ts\` SHA \`5f3beb1101842c0ce2181b553dcc4b977940ee53\` already has canonical \`how-it-works\`, resources, public, index.
- \`data/seo-page-intents.ts\` SHA \`7246b38e37e1f867258212d07b3831363ab2d3c1\`: inspect intent owner before editing and avoid a second content owner competing with /methodology.
- \`app/docs/agent-integration/page.tsx\` SHA \`70f48fb03204544c279e6f2e21325678426f47a3\`: documented MCP endpoint and real read-only preflight/capability guide, source authorization, canonical run/report. Existing docs feature a longer sample prompt; **universal public starting goal chosen by user** is **“Run HAIEC AI Assurance”**, then the client performs supported preflight, not a guaranteed automatic evaluation.
- \`app/methodology/page.tsx\` SHA \`050ec87965904fdbb9ef16b665ec7cc75d25cd7f\` owns source qualification and proof deep dive. Do not duplicate its giant technical block verbatim.
- Current page \`EntryPoint\` links:
  1. IDE / AI agent → \`/docs/agent-integration\`.
  2. GitHub App → \`/docs/github-integration\`.
  3. Assurance API → \`/api-platform\`.
  4. HAIEC workspace → \`/dashboard/ai-inventory\` (authenticated).
- Current other outbound links **to preserve**: \`/sample-reports/kestrel/constellation\`, \`/platform\`, \`/sample-ai-action-access-map\`, \`/what-is-haiec\`. Add \`/sample-reports/kestrel\` and \`/enterprise\` as improved enterprise and proof conversions. Preserve site footer's own Enterprise and docs links.

## 3. What the current page does well, and what to change

| Current source section | Preserve and enhance | Reframing |
|---|---|---|
| Metadata and \`/how-it-works\` canonical | **Preserve** | Search intent should be “how to use HAIEC / AI agent assurance workflow”, not a duplicate of /methodology |
| Seven-phase lifecycle | **Preserve all seven labels:** Define, Connect, Collect Evidence, See, Assure, Verify, Monitor | Seven **conceptual phases**, not seven mandatory sequential access gates or a requirement for every producer before finding an issue |
| Four entry points | **Preserve every destination** | Show concrete user startup actions, quick path first, ownership of evidence and eligibility |
| Six evidence source groups | **Preserve scope** | Organize by useful fact, question and evidence-owner, not six preflight obligations |
| Technical engines | **Preserve content** | Explain how source/path correlation, five planes, DAI and deterministic evaluator produce business value; link deep method |
| AssuranceLens cross-customer disclosure | **Preserve** | Place as selectable second scenario/technical deep dive, not another dominant dark hero; remove noisy internal/fictional UI labels |
| ALLOW, REVIEW, BLOCK and actual technical status | **Preserve authentic semantics** | Do not market ALLOW as blanket approval; distinguish capability finding, canonical assurance decision and external target effect |
| Evidence boundaries | **Preserve technical meaning** | Convert global disclaimer gallery to “What the report establishes” and specific next-action explanations, one focused FAQ for limitations |
| Current hero links | **Preserve** | Primary enterprise conversion plus lower-friction “Run HAIEC AI Assurance” goal and report evidence; sample constellation retained |
| Dark/white mixed styling | **Upgrade** | Light mode default, consistent public theme tokens and dark-mode availability without adding competing dashboard theme provider |

### Specific copy problems verified in source

1. Hero H1 simply repeats the title, with no differentiation. Seven arrow-separated nouns take priority over the buyer's outcome.
2. Source uses literal HTML entities \`&mdash;\` and \`&ldquo;\` in plain string values such as \`LIFECYCLE_PHASES.detail\`. These are **not automatically decoded** like JSX text and may render as entity text. Rewrite actual string content in normal prose and ensure no em dashes.
3. Hero's repeated “unknown stays unknown” feels like an engine limitation before any value. Show **supported early findings** and downstream claim boundaries per question.
4. \`Assure\` currently exposes ALLOW/REVIEW/BLOCK with no direct integration of five independent evidence planes, DAI, action path and consequence analysis. All should be framed as separate evidence facets, not a seven-step evidence checklist.
5. Core technical engine is only described as six generic boxes, while actions and actual consequence choices get less visual emphasis.
6. Conversion does not foreground Enterprise POC nor clearly offer direct MCP 4-word starting goal, though users can navigate deeper.

## 4. New public page copy and IA

### Hero: premium, light-first, buyer relevant

Eyebrow: \`HOW HAIEC WORKS | DETERMINISTIC AI ACTION ASSURANCE\`

**H1: “From AI action paths to decisions you can defend.”**

Deck: **“Connect an authorized AI system or source. HAIEC identifies consequential capabilities and reachable paths, compares relevant policy, access, delegated authority and observed activity, then provides evidence-backed findings and scoped assurance results your team can inspect and act on.”**

Micro-USP: **“Start with a finding. Understand the authority. Decide with evidence.”**

Main CTA **Scope an Enterprise POC** → \`/enterprise\`.
Secondary CTA **Try HAIEC with Your AI Agent** → \`/docs/agent-integration\`.
Proof link **See a Real Assurance Report** → \`/sample-reports/kestrel\`.
Goal copy \`Run HAIEC AI Assurance\` with accessible copy button; a configured, authenticated MCP client and an authorized source are prerequisites to executing a run.

Right hero visualization: a **3-part interactive consequence-to-decision dossier** that rotates only on explicit click, no auto-carousel. Same possible refund path throughout:
- **1. Find the consequential path**: Agent → MCP tool → refund handler → payment endpoint. Source-capable path shown, never “payment sent”.
- **2. Compare the right evidence**: Five independent evidence views and a **separate DAI delegated choice** line; policy, API access and protected recipient choice stay separate.
- **3. Decide with bounded proof**: Inspect a technical finding, specific authority review question, and the exact report or next action. A conceptual teaching panel must not look like a fake customer receipt.
Hero primary static frame contains a real question and useful findings even without JS.

The existing cross-customer disclosure becomes a scenario button later; a second business context, not a replacement.

### P1: The entry paths (existing four), moved near the top
Headline: **“Use HAIEC where your team already works.”**
- IDE and AI agent: Connect compatible MCP client, store scoped bearer credential privately, preflight authorized system and source, request assurance. Copy goal visible.
- GitHub App: authorize selected repo and run eligible source review.
- API & CI: invoke allowed assurance API, poll and retrieve exact persisted artifacts.
- HAIEC workspace: create/select AI system, connect existing sources and review results in authenticated UI.
Each card should show **“Best for”**, one first action and accurate link. A client is an operator; HAIEC is canonical evaluator.

### P2: One journey with seven interactive phases
Section H2: **“A practical journey from question to accountable action.”** Intro: Seven meaningful phases **of the customer lifecycle, not seven mandatory run blockers**.
Stage list and customer outcomes:
1. **Define**: Select an authorized AI system and ask what consequential action matters. Output: target and question.
2. **Connect**: Select repository or supported producer based on question. Output: eligible source, scoped access.
3. **Collect Evidence**: Gather usable code, identity, policy, access and observation facts **where connected**. Output: source-linked inputs.
4. **See**: Show supported agent/tool/handler/resource relations and possible consequences; transitive/derived routes visible when grounded. Output: potential consequential path.
5. **Assure**: Compare independent planes and DAI as applicable, evaluate deterministic scoped claim. Output: supported finding and exact decision context, not unconditional universal ALLOW.
6. **Verify**: Inspect actual available bounded report/receipt with source and run identity/integrity. Output: reviewable artifact when issued.
7. **Monitor**: Compare connected operating evidence to bounded prior scope as sources are installed. Output: supported observed change or drift question, not pretend always-on monitoring.
Interaction: click any of seven to update question, what HAIEC actually examines, example proof, output and relevant canonical link; user can navigate with keyboard and focus. Default open **See** or **Assure** to foreground the USP rather than an empty intake stage. No auto-play.

### P3: Two interactive consequential scenarios
Two scenario tabs:
- **Refund recipient decision**: agent → tool → handler → payment API; policy may approve refund but choice of recipient has its own decision-rights context. Source-supported potential consequence visible first. DAI asks who may choose. No automatic claim actual transaction occurred.
- **Cross-customer data disclosure**: preserve existing \`AssuranceLens\` logic (normal customer message → support agent → permitted internal search → outbound reply path). Explain cross-customer boundary and why individual controls may miss the combined path. No claim of historical breach.

Each has: **Source/path finding**, **Relevant policy/access**, **DAI/control question**, **Next evidence or decision**, and links into \`/ai-action-access-map\` plus Kestrel sample. This is not a separate results dashboard.

### P4: Five independent views, cross-cutting DAI
Five columns **Requested | Policy Authorized | Effectively Granted | Code Capable | Observed**, equal weight, not a pipeline. Click to read which claim each fact supports and its limitation. DAI overlays relevant actual delegation; six peer capability grid not duplicated here. Clarify static code path != observed execution and actual target effect requires its own event.

### P5: What customer receives
A short visual **finding → qualified evaluation → report / next action → operating follow-through** with exact distinction:
- Technical finding can be useful earlier.
- A formal assurance evaluation occurs only when eligible and authorized.
- A report and hash support exact-scope reviewability, not universal certification or target blocking.
- A human decision is separately recorded; not automatically an enforced gateway.
- Runtime signal meaningful only for connected scope.
Link \`/assurance\`, \`/methodology\`, \`/sample-reports/kestrel\`, \`/enterprise\` and \`/docs/agent-integration\`.

### P6: Evidence source options and six technical engines (keep, reposition)
Preserve all **six** source groups and **six** engine/foundation families. Use compact disclosure grid, cross-link more detailed dedicated pages; must NOT delete because hidden from preview. Show evidence source "Source code", "Identity/access", "Policy", "Provider IAM", "Runtime", "Declared/uploaded" and no all-sources-to-start gate.

### P7: FAQs with affirmative value then limits
Suggested 9:
- What does HAIEC analyze first?
- Can HAIEC find risks from repository evidence alone?
- Do I need to connect all five evidence views?
- How is HAIEC different from a security scan or IAM checker?
- Does a valid tool permission authorize the agent's business choice?
- Does HAIEC's AI integration make an LLM determine the verdict?
- What does ALLOW, REVIEW or BLOCK mean on a report?
- Does HAIEC automatically block actions or continuously monitor?
- Can I reproduce or verify an evaluation?
- How do I start an enterprise evaluation?
Final CTA: **“Know what your AI can cause. Decide with evidence.”** Enterprise POC + MCP + sample report.

## 5. Visual and animation requirements

- Light theme is default, near-white backgrounds, dark forest type, subtle muted mint gradients. Dark optional and compliant with site's existing public theme state. Do not force localStorage storage key or duplicate dashboard ws-theme controller.
- Hero: 48/52 or 45/55 copy to interactive action-path dossier, forest highlight. Premium simple SVG connectors with restrained motion (meaningful path illumination), no glowing alarms or fake scores; first frame static informative.
- Life stages: compact clickable navigation rail / tabs with step numbers (not a long vertical wall of identical cards). Each opens **“What happens / What you gain / Source fact / Next link”**; responsive mobile stacked accessible tabs. Smooth 180ms transition, reduced-motion support.
- Scenarios: two selectable contexts, meaningful customer outputs, state never contradicts fixed source facts.
- Plain copy: no visible \`fictional\`, \`internal\`, \`prototype\`, \`NOT LIVE\`, \`NOT ASSESSED\` badge as marketing headline. Do not imply illustrative paths are observed events. The section heading "Explore a Consequential Action" clearly introduces an explanatory interaction.
- No em dash (U+2014) in published page copy or HTML. Avoid HTML \`&mdash;\` and unsafe encoded HTML in JSX data strings.
- Keep SSR semantic native HTML and accessible SVG; no imagegen hero substitution or replacing existing working animations globally.
- Performance: no external video/huge JS dependencies, no unnecessarily auto-running animation. No-JS path readable. Dark code inset okay, dark entire hero not desired.
- Keep existing site header/footer, sticky accessibility, touch targets, focus, contrast. Important at 390,768,1440 px.

## 6. SEO and navigation

- Canonical stays \`/how-it-works\`. **Header Resources → Learn → How HAIEC Works** ALREADY PRESENT. Do **not** add another menu item or change to top-level navigation. Keep discoverability via What Is HAIEC, Platform, homepage and footer.
- Intent: \`how HAIEC works\`, \`AI agent assurance workflow\`, \`AI action assurance process\`, \`evidence backed agent governance\`; distinct from methodology deep research, Enterprise POC, controls and security testing.
- Suggested title \`How HAIEC Works | Consequential AI Action Assurance\`.
- Suggested meta \`Discover how HAIEC connects to your AI systems, finds consequential agent action paths, compares delegated authority and evidence, and produces deterministic assurance findings and reports.\`
- Add **HowTo structured data only if** route truly presents a reproducible actionable user task with well-defined steps and meets SEO guidance; don't claim the conceptual seven-phase visual is a mandatory software installation guide. FAQ JSON-LD only if real policy/editorial guidelines allow it and page text matches exactly.
- Current \`/how-it-works\` owner already in public route registry, sitemap, llms and canonical. Update existing owner rather than create a new slug or page registration.
- Anchor names: \`#entry-points\`, \`#journey\`, \`#scenarios\`, \`#evidence-views\`, \`#proof\`, \`#faq\`.

## 7. Key source truth safeguards

- Seven customer lifecycle phases are **not** the same thing as seven mandatory sequential checkpoints, five evidence planes, three commercial pillars, six platform capabilities, 78 ISAF v2 research checkpoints or 45 control catalog entries.
- Find supported technical risks early and expose selected source limits. Do not force policy upload before a source finding or replace independent policy/code/access facts with general "UNKNOWN".
- Registered provider / controller ≠ usable producer in a given tenant. A code path is not confirmed runtime effect. Unobserved != did not occur. Decision receipt != target-side enforcement.
- MCP: \`https://www.haiec.com/api/mcp\` as stateless authenticated Bearer API key. \`Run HAIEC AI Assurance\` is four-word public goal. Actual client must be connected, use \`haiec_preflight\`, identify authorized source and eligible permissions before invoking write/run. No invented one-prompt unauthenticated run.
- **ISAF v2**, not v1, is research basis. Full paper available in common repo \`source-research/isaf-v2/ISAF-v2-From-Instruction-to-Consequence-FINAL-AUTHOR-ISSUED-2026-10-09.txt\`. The public framework page \`/frameworks/isaf-v2\` is only planned. HAIEC's shipped engine source truth overrides future research capabilities.
- Preserve \`AssuranceLens\` cross-customer scenario content and meaningful motion; change only customer-facing framing and location if design benefits.

## 8. Preservation matrix and real implementation checklist

On next authorized Devin implementation (not part of this task):
1. Read the real \`app/how-it-works/page.tsx\`, \`AssuranceLens\`, current nav and owner manifests, compare against these page sections and original CTA hyperlinks.
2. Mark each existing section and link **KEEP**, **REPOSITION**, **REWRITE FOR BUYER VALUE**, or **CONTEXTUAL LINK**. No unapproved deletion of coverage or broken original links.
3. Build a server-first page plus small client interaction components, not raw full HTML injection. Keep one SSR H1, public theme light-first and saved dark preference.
4. Preserve exact old entry links and high-value sample link as reachable CTAs, including the evaluated Kestrel constellation; don't downgrade to fake substitute data.
5. Replace repeated blanket evidence-state disclaimers with narrower, truthful next-action language; preserve actual canonical result semantics in reports and deeper method.
6. Test copy prompt, seven-step selector, two scenario selector, five evidence views, four actual entry point URLs, the same canonical report model, responsive light/dark, keyboard, reduced motion, conversion analytics and performance.
7. Scrub visible internal labels, fabricated production evidence, hard-coded fake financial totals, em dash and JSX string \`&mdash;\` entities.
8. **STOP LOCAL ONLY:** Latest user instruction to Devin was do not commit, push, open PR, merge or deploy without explicit later approval. This Common Repo planning write does not authorize production site edits.

**Business success definition:** Within five seconds, visitor understands HAIEC connects existing development workflows to consequential agent reachability, delegated-authority comparison and deterministic assurance. Within 30 seconds, visitor can explain what first useful finding looks like and how to start with MCP or Enterprise POC. A buyer should no longer assume the engine is waiting for every IAM/policy/runtime source before it can show value.

## 9. Companion plans

- [Core platform and products](WEBSITE-PLATFORM-AND-PRODUCTS-PAGE-ENHANCEMENT-PLAN-2026-10-20.md).
- [Homepage two-composition hero](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html).
- [DAI customer-ready standalone plan](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md).
- [Assurance Controls and Evidence standalone plan](WEBSITE-ASSURANCE-CONTROLS-AND-EVIDENCE-SIGNATURE-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md).
- [ISAF v2 full manuscript source index](source-research/isaf-v2/README.md).
