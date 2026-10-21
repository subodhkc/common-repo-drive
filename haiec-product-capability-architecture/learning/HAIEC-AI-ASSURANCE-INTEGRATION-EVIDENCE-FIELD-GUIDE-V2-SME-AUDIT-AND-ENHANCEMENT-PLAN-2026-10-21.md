> **2026-10-21 FIELD GUIDE V2 WITH OFFICIAL HAIEC LOGO COMPLETED.** The reviewed V2 improvements have now been built into the original [interactive guide HTML](HAIEC-AI-Assurance-Integration-Evidence-Field-Guide-Interactive-2026-10-21.html). The author-supplied HAIEC logo is self-contained in the HTML. Implemented accurate source-to-plane distinctions, source-specific preflight/failure outputs, minimum-first-source decision paths, evidence/identity/time diagrams, correct AWS IAM/OTLP/MCP limitations, first-render source and question content for SEO, local evidence-plan exports and original exercises. [View actual build and QA record](HAIEC-INTEGRATION-EVIDENCE-FIELD-GUIDE-V2-HAIEC-LOGO-BUILD-AND-VALIDATION-2026-10-21.md). Earlier proposal text below is retained as review provenance; it does not represent current build status. The HTML is not published on HAIEC production.

# HAIEC Integration & Evidence Field Guide: V2 Practitioner SME Review and Focused Enhancement Plan

**Reviewed:** 2026-10-21
**Status:** READ-ONLY EDITORIAL / TECHNICAL / SEO REVIEW AND V2 WORK ORDER. **An interactive HTML already exists and was Chromium-tested. No replacement HTML created, no HAIEC product code modified, and no public website deployment performed in this review.**
**Canonical existing HTML:** [AI Assurance Integration & Evidence Field Guide](HAIEC-AI-Assurance-Integration-Evidence-Field-Guide-Interactive-2026-10-21.html)
**Build and QA record:** [Original ten-source, twelve-check build record](HAIEC-AI-ASSURANCE-INTEGRATION-EVIDENCE-FIELD-GUIDE-BUILD-AND-VALIDATION-2026-10-21.md)
**Potential public learning URL, currently unverified:** \`/learn/ai-assurance-integration-evidence-field-guide.html\`
**Editorial goal:** Teach the shortest **authorized** path from a named assurance question to eligible source evidence, an honest proof boundary, and a fresh evaluation/report when appropriate. Do not build another connector dashboard, duplicate HAIEC's existing Evidence Source Advisor or add platform features through a training page.

## 1. Independent review outcome

**Decision: ENHANCE EXISTING HTML, DO NOT REBUILD FROM SCRATCH.**

The first version is a compelling reusable learning product:
- Light-theme responsive premium hero, explanatory source-to-proof architecture, no em dashes.
- Eight problem-first source questions, ten rich source field cards, family filtering/search.
- Five peer evidence planes, interactive generic source lifecycle and case toggles.
- Four consequence scenarios (procurement, vendor CRM, telecom, manufacturing).
- Twelve evidence-literacy checks and a working local Markdown/JSON onboarding plan export.
- Boundaries are explicitly displayed: no source-only proof of target effect, no MCP-as-source inference, no configured-is-operational claim.
- Original Chromium acceptance reports 12/12 exercises, exports, 320-1440 px with no overflow or JS exceptions. These are **previous build test results, not an independently repeated audit in this review**.

### Current source/SEO audit observations

- Existing HTML in Common Repo: **77,613 characters**, title and canonical metadata, 8 question fixtures, 10 source fixtures, 4 illustrative cases, 12 checked decisions. Its source data is embedded inside \`<script type="application/json">\` and its cards, questions, cases and practice content are inserted into placeholder elements by JavaScript.
- In the pre-JavaScript document text, a local parse yielded about **1,683 visible words**, but the eight individual question titles and ten individual source names were absent as ordinary readable page text. This is a significant **SEO and progressive enhancement improvement opportunity**. Google can render JavaScript, but critical editorial content should not require it. No need to convert a standalone Learn asset to Next.js just for this.
- Original file has canonical/description and social-summary metadata; expand meaningful static HTML content and optionally a minimal educational WebPage/LearningResource schema whose fields are displayed and accurate. No accreditation or fake rating.
- Desktop and mobile screenshots reveal a polished hero. At narrow widths, the mobile hero occupies most of the first viewport; shorten its introductory text and raise first decision action if needed, without losing diagrams or substance.
- On-page source mapping currently groups some **potential** inputs under a peer plane without always differentiating **informative evidence** from **qualified sufficient proof**.
- Browser tool did not establish that the proposed /learn route is deployed. Treat it as **not confirmed live**, even if static canonical metadata names it.

## 2. Canonical HAIEC source and feature contracts reviewed

| Source or workflow | Source-of-truth owner | What a customer can learn | What cannot be silently inferred |
| --- | --- | --- | --- |
| GitHub verified source | \`lib/ai-inventory/evaluation-source-preflight.ts\`; \`lib/ai-inventory/source-onboarding.ts\`; \`components/docs/EvidenceSourceAdvisor.tsx\` | Selected repository, AI System binding, branch/commit, source consent, and eligible analyzed action paths | A URL or connection config is verified source; reachability proves permission, runtime behavior, or target effect |
| Local source or declared artifact | \`lib/ai-inventory/source-onboarding.ts\` | Local check may support an appropriately labeled source result; declarations can contribute draft context | A declared artifact alone is code-capable or a remote HAIEC Assurance Evaluation |
| AWS IAM/policy observations | \`lib/iam-grant/effective-grant-observation.ts\` | Identity-policy context, candidate permission and bounded partial authority facts | Complete canonical EFFECTIVELY_GRANTED, because resource/session/endpoint and other authorization layers are unmodeled |
| AWS AgentCore and CloudWatch | \`lib/integrations/aws/contract.ts\`; \`lib/integrations/runtime-readiness.ts\` | Explicit account/region/credential and bounded read-only asset/log/probe records | Adapter exists = account connected; raw CloudWatch log = action applied; CloudWatch record = effective IAM grant |
| ServiceNow AICT/Agent Studio/Table API | \`lib/integrations/servicenow/contract.ts\` and \`preflight.ts\` | Authorized read-only asset, workflow, execution and selected table data where individual ACLs permit | Authentication means permissions; 403 means source empty; NOT_PROBED means absent; all tenant inventory or approval ticket writeback |
| OpenTelemetry / OTLP | \`lib/evidence/adapters/otlp-receiver.ts\`; \`app/api/otlp/v1/_handler.ts\` | Scoped trace/log/metric evidence from accepted and attributable producers, and a producer batch reference where returned | Collector config means collector runs, HTTP 200 = applied business action, ingestion = qualified evaluation |
| MCP/IDE assistant | \`lib/mcp/capability-guide.ts\`; \`lib/mcp/guided-assurance.ts\`; \`/docs/agent-integration\` | HAIEC tool discovery, authorized preflight, evaluation and readback driven by an agent where tenant, key and scopes permit | MCP itself is a sixth independent evidence plane, a connector to any external source, or proof that customer-native enforcement occurred |
| Policy/human approval | \`lib/assurance/deployment-decision.ts\`; U5 and operating-envelope owners | Specific approved scope, reviewer, versions, conditions, expiry and currentness if real artifacts exist | Human acknowledgment = approval; policy = effective IAM; decision = runtime target enforcement |
| Customer-native target records | \`lib/assurance/enforcement-read-model.ts\` | Applied or blocked target action/effect where a scoped target-owned, exact-identity, valid outcome witness exists | HAIEC includes a universal ready-to-run target connector; provider acceptance/HTTP 200 = effect verified |
| AI provider administrative inventory | AI Inventory provider-admin connection owners and \`components/docs/EvidenceSourceAdvisor.tsx\` | Projects, model/usage/cost facts in authorized admin scope | Provider usage is direct evidence of the agent's REQUESTED consequential action or of the agent's authority |

External public context at review: https://www.haiec.com/docs/agent-integration and https://www.haiec.com/docs/github-integration both describe the workflow. Always verify current source/route before publication.

### Core five-peer-plane truth

Requested, Policy Authorized, Effectively Granted, Code Capable, Observed are **independent qualified claims**, not always a sequence or five connection prerequisites. DAI authority is cross-cutting; a separately attested target effect can require additional evidence beyond an observed invocation. A useful code-capable finding can be reported before IAM or runtime arrives; the others stay unknown or not assessed.

## 3. Prioritized corrections before publication

### P0: Source-to-plane grammar and truth gates

1. **Distinguish MAY INFORM from QUALIFIED TO ESTABLISH.** For every source plane mapping, display whether the input is simply relevant, partially qualified, sufficient for a particular claim only under specified conditions, or not a direct source for that plane. Do not color the plane green solely because the user selected a card.
2. **AWS IAM:** The source currently appears within the Effectively Granted plane. It may inform authority but is explicitly **partial** today. Re-label the card/plane as "Potential authority evidence; complete effective grant not established by current AWS observation alone."
3. **Local source:** Separate eligible actually executed local source analysis from **declared artifacts**. Mere uploaded design/capability declaration is not Code Capable proof.
4. **Provider admin inventory:** Remove direct categorical assignment to the Requested action plane. Provider administrative usage/project data is **inventory context**, not a business request or action-path witness by default.
5. **AWS AgentCore and CloudWatch:** Distinguish asset/configuration references and raw activity from verified authorization; do not imply CloudWatch is a qualified grant source merely because it can capture some authority context.
6. **ServiceNow:** Explain that AICT inventory records, tool execution events, and any policy/document artifact are separately typed and need qualified ACL, actor/target and time context. Authentication and table discovery do not establish all planes.
7. **Target effects:** Native customer witnesses require authorized source, exact system/actor/action/resource/correlation, meaningful outcome and time window; do not treat provider/guard acknowledgment as independent effect.
8. **MCP:** Render MCP as **workflow and transport**, visually outside the five evidence lenses. Connected tool = eligible tool use only after current tenant preflight and scope checks.
9. **Use real status classes:** \`SOURCE_NOT_VERIFIED\`, \`BRANCH_REQUIRED\`, \`CONSENT_REQUIRED\`, \`SOURCE_CONFLICTED\` for verified sources when applicable; \`NOT_PROBED\` versus \`NOT_AUTHORIZED\` versus empty for ServiceNow; \`EVIDENCE_INGESTED\` versus \`EVIDENCE_EVALUATED\` for OTLP; \`PARTIAL\` for current AWS IAM. Avoid presenting one universal staged readiness enum as if all connectors share it.
10. **No "required all five sources" language:** Current scenario \`required\` fixture lists should be named "possible evidence sources for this decision" or "source candidates" with optional/must-have qualified per **selected claim**.

### P0: Publication crawlability and trust

11. The initial HTML must include meaningful rendered **eight question titles, ten source cards (source, may establish, cannot establish), at least four case descriptions, key evidence-plane distinctions and first-step how-to content**. JSON fixtures may remain for filtering/interaction, but no SEO-only hidden duplicated text and no separate stale copy source.
12. Maintain one canonical URL and current title/description, valid OG preview and readable long-tail headings. JSON-LD must match visible instructional content; do not advertise formal accreditation.
13. Validate each instructional link as **public**, **sign-in required**, or **customer-specific setup**. Existing source card links include dashboard settings and monitoring paths whose public HTTP availability is not proof of accessible user workflow.
14. Keep standalone HTML as the original design reference and avoid publishing duplicate indexable copies via another extension or route.

### P1: Increase actual onboarding usefulness, not feature sprawl

15. Add a prominent **"Minimum useful source"** explanation per question: first evidence, what the first source establishes, what only an additional source can establish, and the shortest permitted user action. A customer need not connect ten systems.
16. Add a **source preflight worksheet** for each of the 10 cards: system/tenant bind, credential owner and least privilege, asset/branch/source identity, capture time and freshness, producer provenance, sample accepted record or redacted template, expected receipt/identity and eligible source state, denial/empty/unsupported failure handling.
17. Surface a **cross-source correlation checklist**: AI System, tenant, agent/principal, action/tool, target resource, source commit/deployment/policy version, event time and request/action correlation ID, source producer and trust quality. A coincident timestamp or similarly named asset is not an identity join.
18. **OTLP / evidence lifecycle:** Teach collector configured → scoped data sent → accepted/quarantined ingestion batch and producer attribution → attached to a NEW evaluation if intended → exact report result. Ingested evidence alone is not a changed verdict. MCP may guide that authorized workflow.
19. **Connect a source to an actual report result:** After a source case, show which report section or Agent Audit verification item the evidence may help address, what stays not assessed, and where to inspect the frozen evaluation. Do not invent receipt IDs or claim all source types automatically attach to every report.
20. Show two levels for onboarding: **quick evidence path** (one question, one source, first qualified finding) and **extended authority/runtime correlation** (multiple sources only when relevant). Add an advanced appendix for technical setup, not five more top-level chapters.
21. Example training records can illustrate \`SOURCE_NOT_VERIFIED\`, \`NOT_AUTHORIZED\`, OTLP receipt but no evaluated finding, stale policy, or target acknowledgment without witness. Clearly label these **training fixtures**.
22. Maintain the current four scenarios and 12 authored questions. Improve feedback to point to the exact source owner and actual preflight proof rather than expanding to 30 more exercises.

### P1: Visual, practical and interaction refinement

23. Preserve the current premium light-theme hero, card grid, search, five-peer-plane selector, lifecycle board, scenario cards and editable export; **do not redesign from scratch**.
24. Strengthen four visual relationships:
    - **Evidence source to claim map:** source category → producer/identity → eligible evidence → chosen claim → frozen evaluation/report.
    - **Three-independent-source proof overlay:** GitHub code path / IAM partial grants / target-owned effect are peer facts, not a stairway to a global safe badge.
    - **Preflight failure branch:** configured, connection probe, authorization, dataset actual availability, qualified ingestion, evaluated membership, with source-specific labels and explanation.
    - **Join and time diagram:** source commit, policy version, IAM principal, tool call ID, resource and timestamp/release snapshot, with exact correlation before any target-effect claim.
25. Question journey: **Choose decision → get first source → see what remains unknown → inspect setup steps → select next evidence only if needed → export plan**. Keep the rich atlas beneath that journey.
26. Add an **evidence-gap-to-action handoff**: for a selected scenario, print evidence owner, minimum missing factual question, needed permission/consent, source route, expected field, exclusion reason if unusable, and next evaluation trigger.
27. Make text shorter on the mobile first screen while keeping the main hero question prominent. Mobile screenshot shows most first viewport devoted to introduction; ensure a first "Choose your assurance question" interaction is visible or immediately reached.
28. Meaningful SVG/DOM diagram text should be searchable and keyboard-accessible, with clear static print and reduced-motion fallback. No decorative traffic lights or fake live feed.

### P2: External onboarding, adoption and page integration

29. **Resource home:** publish one actual page under Resources → Learn with descriptive anchor, canonical and sitemap. Link contextually from /docs/agent-integration, source onboarding and the Enterprise POC, without adding a new top-level menu or another product service.
30. **Sales-to-technical bridge:** from /why-haiec a visitor may select "What evidence is missing?" and land at the question selector; after the guide, link to the real Kestrel sample, canonical Master Report explanation and existing /enterprise scope.
31. Add privacy guidance on credential scopes and safe sample evidence. No secrets, customer raw logs or real case data embedded in static HTML. No API calls from the standalone guide; the chosen source plan is local-only and is not a tenant preflight result.
32. Search intent to serve: "AI assurance evidence source", "connect GitHub to AI assurance", "AI agent IAM permissions proof", "ServiceNow AI agent audit evidence", "OpenTelemetry AI agent audit trails", "MCP AI assurance integration". Do not create ten thin SEO pages.
33. Do not expand into a universal connector marketplace, a no-code workflow builder, new SaaS package, invented connection monitoring or a parallel assurance engine.

## 4. Suggested V2 customer-facing copy

**H1:** **What evidence do you need to trust this AI action?**

**Alternative preserving the current design:** **Connect the right evidence. Know exactly what it proves.**

**Subheadline:** "Start with the decision you need to make. HAIEC helps you identify the source that can answer it, see where the evidence stops, and prepare the next authorized step."

**Primary CTA:** **Find the first source I need**

**Secondary CTA:** **Build my evidence plan**

**Value proof line:** "**Start with one useful source. Add authority, runtime or target records only when the question requires them.**"

**Demo answer for GitHub:** "This source can establish a reachable agent-to-tool action path at a specific commit. It cannot tell you whether the deployed identity held permission or whether the action happened."

**Demo answer for AWS IAM:** "Review available principal and identity-policy evidence. The current adapter does not establish complete effective authorization where other policy layers remain unmodeled."

**Demo answer for OTLP:** "See the events that arrived and their producer/scope. A received trace is not proof that the action was applied at the business target."

**Demo answer for MCP:** "Let your authorized AI assistant operate HAIEC's preflight, evaluation and report-reading workflow. HAIEC, not the assistant, owns the underlying evidence facts and verdicts."

**End value:** "**You know which source matters, what to request from its owner, and which claim you can responsibly make once HAIEC evaluates qualified evidence.**"

Customer HTML should have no em dashes, no internal ticket names and no source-status theater. Use the actual product's user-facing labels when practical.

## 5. Proposed V2 HTML structure, focused rather than larger

1. **Find your evidence:** Faster hero and eight buyer questions as pre-rendered text.
2. **Your first source and next proof:** Selected question's starter source, claim, limits, minimum setup and link.
3. **All ten source field cards:** Indexed and filterable, each with actual status/permissions and five-step practical sequence.
4. **Five peer evidence lenses:** Relevant inputs labeled may-inform versus established, with DAI and MCP separate.
5. **Before you call it connected:** Source-specific preflight/denied/ingested/evaluated differences, no universal readiness badge.
6. **Four consequential cases:** Retain existing procurement, vendor, telecom and manufacturing cases, add exact identity/join and target witness illustration.
7. **Twelve knowledge checks:** Preserve authored answer keys; amend explanations only where source-contract changes require.
8. **My evidence onboarding plan:** Local-only brief with system, owner, main assurance question, selected first source, source readiness issues, missing authoritative source, expected proof record, escalation and next-evaluation trigger.
9. **Original HAIEC proof and next step:** Public Kestrel example, verified source report limits, relevant docs/source links and /enterprise.

Eight to nine sections are enough. Prefer clarity and a compact first-session path over expanding the guide's page size.

## 6. Acceptance and deployment plan

**Phase A, source-lock and P0 corrections (one work batch):** Recheck HAIEC Main source owner contracts, annotate the original ten source records by evidence class, support state, availability/authorization, accepted proof and "cannot establish"; correct misleading plane mappings, no title/status overclaim. Generate static fallback content from the **same JSON fixture**, not duplicated manually.

**Phase B, field usefulness (same focused edit):** Add exact preflight and failure categories, least-privilege/source-identity notes, minimum-first-source recommendation, source-to-report handoff and correlation/time diagram, while preserving all working interactions.

**Phase C, QA:** Test all eight question paths, ten source cards, 12 questions with correct and wrong-answer feedback, four scenarios, peer plane selection, mobile 320/390/768 and desktop 1280/1440 px, 200% zoom, keyboard-only focus and reduced motion. Check markdown/JSON downloads, print-to-PDF page quality, JS errors, no overflow, no em dashes and no live private requests. Verify source links and **initial HTML** contains question/source descriptions and all real source limitations even without JS.

**Phase D, docs and publication handoff:** Commit V2 HTML as a versioned update preserving existing canonical reference, update its QA record and Common Repo index. When explicitly authorized, add to HAIEC \`/learn\` static publishing flow and sitemap with cross-links from docs and the Enterprise POC. Do not add source-processing APIs, change evidence storage or silently deploy from this SME review.

### Release blockers

- Misleading "AWS effective IAM access established" interpretation.
- Any grant/target proof automatically appearing after checking a **candidate** source.
- A configured connection or HTTP success rendered as executed/operating safeguard.
- MCP presented as direct evidence of external runtime action.
- Provider-admin inventory as proof of an agent business request.
- Important source and question descriptions inaccessible without JavaScript.
- Broken canonical/public route or stale hardcoded source setup links.
- Memo that mixes scenario/example facts with actual customer claims without clear label.

### Success

A new engineer can say: "For this consequential action, my first relevant source is X. To use it, I need authorization Y and identity/version Z. It may establish fact A, but cannot prove B. To close B, the authoritative next owner/source is C. HAIEC can evaluate the eligible evidence and return a bounded report." An enterprise lead can approve the **evidence collection scope**, not a fictional production safety outcome.

**Status after this review:** V2 plan prepared and reviewed source contracts; **no V2 code/HTML changes, no authenticated customer preflight, no verified production publication**.
