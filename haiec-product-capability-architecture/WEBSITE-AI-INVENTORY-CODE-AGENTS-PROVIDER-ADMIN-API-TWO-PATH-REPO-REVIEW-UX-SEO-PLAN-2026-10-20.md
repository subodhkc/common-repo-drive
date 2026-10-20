# HAIEC AI Inventory: Code-Discovered Agents and Provider Administrative Inventory

**Date:** 2026-10-20. **Canonical existing public URL:** https://www.haiec.com/ai-inventory.  
**Working status:** Repo-reviewed public page enhancement plan and companion design, **not website source implementation**, no deployment.
**Companion:** [Two-path interactive public page concept](design-references/ai-inventory-2026-10-20/ai-inventory-two-paths-interactive-light-dark.html).

## 0. Executive decision

**One AI Inventory public page. Two distinctly explained acquisition paths. One AI Systems registry with separately qualified evidence.**

- **Path A: Source-Discovered Agents.** Authorized repository intelligence identifies supported **agent definitions**, declared/registered tools, model visibility, effective dispatch, bound handlers, consequential operations and resources, bounded agent relations, MCP references, shared stores and unresolved frontiers. This is principally per-system, scan-backed **code-capability intelligence**.
- **Path B: Provider Administrative Inventory.** Scoped OpenAI and Anthropic provider admin keys fetch **provider-reported cost snapshots** and project/workspace/model context. This is **provider-cost and usage-accounting visibility**, not evidence that any particular agent definition exists, that a prompt was executed, or that an agent had effective authority. Separately, SDK instrumentation can record request/token/latency dimensions, subject to source-specific observability.
- **Shared registry:** A canonical \`ai_systems\` system-level index, with assets, source freshness, evidence and evaluation links, represents **named AI systems**, not a deduplicated set of every agent/process/provider model. Provider-derived “AI System” rows are currently **project-oriented inventory proxies**, so public copy must not misrepresent each as an individually discovered deployed AI application or agent.
- **Third adjacent view, NOT a third equivalent agent count:** \`/dashboard/agents\` is a directory of **evidence-named agent surfaces**, not a repository agent-definition count. These are not interchangeable with the Source-Discovered Agents explorer.

Keep the public route and existing operational routes. **Do not merge these datasets on names, package labels, or provider alone.** Only link across datasets with source-backed, tenant-scoped, version-bound identifiers; otherwise leave them separate.

### Customer-owned question

**“What AI is in our environment, which agents and actions does the code reveal, and where are our provider accounts consuming AI resources?”**

Canonical category: AI systems inventory / AI agent discovery. A complementary commercial promise is **“Know what AI exists. Understand what it can do. See what it consumes.”** This preserves HAIEC's evidence-bound assurance positioning without making AI Inventory a generic ITAM, finance reporting or universal agent discovery platform.

## 1. Current Main source observations (not archived checklist assertions)

Directly inspected **current** \`subodhkc/haiec-website\` default Main file source on 2026-10-20:

| Source | Actual owner / inference |
| --- | --- |
| \`app/ai-inventory/page.tsx\` | Canonical public route exists (275 lines); generic dark hero “Know which AI systems exist”; simple sequential journey; feature cards; usage wrappers; framework mapping. **Does not teach two separate acquisition paths.** |
| \`app/ai-inventory/layout.tsx\` | Existing canonical title/metadata/JSON-LD. Mentions agent discovery but no administrative-provider differentiation. |
| \`data/public-site-registry.ts\` + \`data/seo-page-intents.ts\` | /ai-inventory already canonical Platform navigation/SEO owner. Preserve; no /agent-inventory competing canonical route. |
| \`app/dashboard/ai-inventory/page.tsx\` | Existing authenticated AI Systems Index, Estate Summary Band, legacy Connections & Discovery and admin keys; not exclusively code-discovered agents. |
| \`components/ai-inventory/AISystemsIndex.tsx\`, \`lib/ai-inventory/system-list-summary.ts\` | System-first list, org-scoped, pages of 50, search, asset and active-evidence projection, latest actual Assurance where present. Errors != empty; no universal risk score. |
| \`components/ai-inventory/EstateSummaryBand.tsx\` | Separate portfolio summary for named systems, evaluated systems, decisions and connected monitoring/enforcement rungs with actual denominators. |
| \`lib/ai-inventory/repository-intelligence-read-model.ts\` | Source/operation intelligence from qualified per-system source snapshots; preserves coverage/candidate/review boundary. |
| \`lib/ai-inventory/agent-reachability-read-model.ts\` | Canonical source-discovered agent definitions, tool capability stage records, relation types, source locations and bounded collections. **MCP connection-point references excluded from agent definition count**. |
| \`components/ai-inventory/AgentsActionsExplorer.tsx\` | Actual source-defined Agents & Actions master/detail in AI System Workspace; action-stage labels; source links; does not infer runtime instances. |
| \`components/ai-inventory/AgentReachabilitySection.tsx\` | Alternate technical read presentation; coverage/frontiers, shared stores and downstream paths. |
| \`app/dashboard/agents/page.tsx\` | Organization-level *evidence-named* agent surfaces, explicitly not code-defined agents; a surface may not be a registered AI system. This third object must be distinguished. |
| \`app/dashboard/ai-inventory/admin-api/page.tsx\` | Connected admin key dashboard; project/workspace/model cost view, sync controls, summaries and date ranges. |
| \`app/api/v1/inventory/admin-keys/route.ts\` | Tenant access check, encrypt/hash admin credential and provider validation, persist admin key, initial sync. OpenAI + Anthropic keys only based on current provider adapters. **Do not call admin key a HAIEC API key or inference key.** |
| \`lib/ai-inventory/providers/openai-admin.ts\` / \`anthropic-admin.ts\` | Provider organizational cost API adapters. No generalized model-agent registry API read. |
| \`lib/ai-inventory/sync-systems.ts\` | Builds provider-derived AI System rows at project/workspace level from **bounded 100 cost snapshots**; deduplicates admin-derived project rows and preserves edited systems; does not identify unique source agents. \`monthlyCost\` calculation is not a reliable provider billing-month total without reconciliation. |
| \`app/api/v1/inventory/costs/route.ts\` | P12/P12.1 separates provider-reported snapshots from fixed-rate **SDK estimates**; mutually exclusive attribution buckets by provider/project > workspace > unattributed; bounded browse rows and full-period aggregates where supported. No SDK+admin summation. |
| \`app/dashboard/ai-inventory/usage/page.tsx\` | SDK vs admin data-source semantics; request/tokens/latency can be **unavailable**, not zero. |
| \`components/ai-inventory/DataSourceSwitcher.tsx\` | Views: Overview, Admin API, Individual Keys, Costs, Usage, Estate, Discovery, Import. Reuse these actual operational destinations. |
| \`lib/ai-inventory/discovery/ai-security-sync.ts\` | Tenant-scoped system-level discovery from qualifying stored AI Security scans. It does not mean every detected source agent becomes a new \`ai_systems\` row. |
| \`lib/ai-inventory/discovery/github-sync.ts\` | Broad historical GitHub→inventory auto-discovery **blocked** without reliable installation→org binding; event-driven linked-installation path exists, requiring AI-relevance evidence and immutable repository ID. Do not market universal GitHub auto-discovery. |
| \`app/dashboard/ai-inventory/connect/page.tsx\` | Discovery UI from security scans, runtime, GitHub and reconciliation. Capability availability must be owner-specific; a clickable action isn't proof that broad source discovery succeeded. |

### Source-based source-agent facts (do not blur)

- \`AgentInventoryItem\` includes **id, displayName, framework, source location, source-qualification status, declared tool references, exact tool capability stages, handoffs, agent-as-tool relations, team memberships, graph routes, MCP refs, reachable resources/services, shared hubs, persistent creation and evaluation-integrity exposures** when supported.
- Seven distinct stages: **Declared → Registered → Model Visible → Effective Dispatch → Handler Bound → Consequence Bound → Resource Bound**. They are separate evidence questions, not a required complete pipeline for every agent. Stage states include ESTABLISHED / CONDITIONAL / PARTIAL / CANDIDATE / UNKNOWN / NOT_ANALYZED / NOT_APPLICABLE.
- Agent definitions in source ≠ running instances; candidate ≠ established; declared tool reference ≠ executable capability; source-reachable resource ≠ observed access; MCP config/server reference ≠ agent.
- Supported source patterns include selected OpenAI Agents SDK handoffs/tools, CrewAI team lists, LangGraph graph relations and custom Python orchestration, where recognized by bounded analyzers. **Do not claim universal language/framework detection**, or collapse source evidence with agent discovery based on naming heuristics.
- Per-system source proof is a consequence-rich differentiator: **Agent → tool → handler → provider-native operation / downstream resource**, plus relevant code/credential and authority questions where independently qualified.

### Provider admin source facts (do not blur)

- Provider adapters currently implement **OpenAI and Anthropic organization cost reporting**, not automatic complete application topology, deployment environment, IAM grants, active agents, code-repo binding or inference request histories. A provider "model" in cost reporting is an accounting grouping, not proof of a deployed autonomous agent.
- \`admin_api_keys\` is a dedicated sensitive credential type; key is encrypted server-side and tenant-scoped. Provider administrative scope is sensitive; the page should explain **minimum required provider read permissions where supported**, encrypted storage, who authorizes connection, refresh/revoke path. Do not promise complete least-privilege administration unless implementation enforces it.
- Admin snapshot totals represent **provider-reported billing records**, with scope/time/fetch freshness/attribution. SDK wrappers \`@haiec/openai\` and \`@haiec/anthropic\` are optional instrumentation; per-request details depend on SDK adoption and successful log ingestion. Do not state admin-only connections show prompt content, per-call latency or agent call traces.
- Current UI/ingress contains \`SDK already integrated. Admin API is disabled when SDK is active\` configuration rules in credential POST, while cost aggregation supports explicit source selection in some conditions. Reconcile as an implementation issue rather than promise seamless dual-mode instrumentation for all tenants.
- Cost ingestion has explicit **100 snapshot sync row cap** and provider-adapter pagination max 10. Distinguish a collected cost total, a bounded project list and a system row derived from a subset. Correct display denominators/coverage before claiming a *complete* organizational inventory.
- Some admin-derived rows mark environment as \`production\` and \`isProduction: true\` by default; **do not present that as observed deployment evidence** without independent verification.
- Do not conflate HAIEC MCP bearer keys, tenant API keys, provider inference API keys, provider admin keys and SDK tracking keys. Their purposes and permissions differ.

## 2. Public page structure and storyboard

### P0 Hero: two ways to see your AI estate

**Eyebrow:** AI SYSTEMS & AGENT INVENTORY  
**H1:** **Know which AI systems exist. See the agents, actions and usage behind them.**  
**Lead:** **Your source code and your provider account reveal different parts of the AI estate.**  
**Body:** “HAIEC helps teams inspect supported AI agent definitions and tool paths from authorized source, while connected provider accounts reveal billed model, project and workspace activity. Bring each view into a shared AI Systems context with clear origin, scope and proof.”  
Primary CTA: **Explore AI Systems** → \`/dashboard/ai-inventory\` (authenticated).  
Secondary CTA: **Explore Agent & Action Discovery** → \`/ai-action-access-map\` (public explainer), or relevant sample constellation proof.  
Additional concise action: **View Provider Inventory** → \`/dashboard/ai-inventory/admin-api\` (authenticated).

**Interactive hero:** Two parallel lanes with connected target “AI Systems”:
- **Authorized source** → Agent definitions / source file → Tool / handler → Consequential resource;
- **Connected provider admin API** → Provider / project or workspace → Model + reported costs;
- Thin central join to named system record only where source IDs and tenant binding establish identity. Else keep visual as two separate source views. No animated fake telemetry.
- Initial state provides both journeys visible in semantic HTML. Buttons switch “Agent Intelligence” vs “Provider Usage & Costs” explanation without hiding essential SEO text.

### P1 The two sources answer different questions

Two equally prominent side-by-side cards, each with *question / input / what you learn / what it cannot establish / start path*. Buyer personas:
- **Engineering & AI Security**: “Which defined agent can invoke a tool that changes data? Where is the path in code?”
- **IT / FinOps / AI Governance**: “Which provider projects/models have reported spend? What is attributed or unknown?”
Do NOT route source visitors to “connect provider admin” as prerequisite, nor provider visitors to a full repository scan.

### P2 Code-discovered agent intelligence

Accessible active 3-column explorer: **Agent definitions** → **tool and action stages** → **resource/consequence**. Native client interaction updates a bounded illustrative example, not a live customer event. Show one example such as an invoice-processing agent with reported handler path and reachable ledger/write operation, with exact caveat that running execution and provider IAM are separate. Surface useful source findings first.

Reusable lower detail row:
- qualified source or specific source coverage gaps;
- agent relationships: handoffs, agents-as-tools, graphs/team membership;
- MCP references separate from agents;
- shared state and transitive reachability;
- unresolved/remote handler frontier, no inferred effect;
- links to Action & Access Map, DAI, AI Security, Repo Intelligence.

### P3 Provider administrative inventory

Three-step flow **Connect authorized provider admin API** → **Fetch organization billing/cost slices** → **View provider/project/workspace/model time-window cost**. Show data-source selection and freshness.
Display provenance dimensions not fantasy metrics: provider, billing interval, project/workspace IDs, model/line items when actually reported, last successful sync, attribution and coverage limitations. Show "SDK estimates" separate from "Provider-reported cost".
Link to \`/dashboard/ai-inventory/admin-api\` and \`/dashboard/ai-inventory/usage\`; SDK wrappers as optional instrumentation, not another tenant-wide admin credential.

### P4 The shared AI Systems registry

Make source relationships and missing joins understandable with semantic 3-part comparison:
- Registered System / record: identity, source asset binding, environment declared vs established, owner, next action.
- Source agent: source qualified definition, capability paths.
- Provider project and spending: provider-cost accounting observation.
**Do not sum** these to “total agents”. Do not auto-merge using a fuzzy name/heuristic. Add a “Connected with evidence” / “Possible relationship for review” / “Not linked” status legend; an illustrative screenshot must not impersonate production.

### P5 Actionable system journeys

**Developer**: select system → authorized repo → analyze source → open Agents & Actions → review source finding → map action → request Assurance.  
**AI operations**: connect provider admin key → sync cost snapshots → review provider attribution/freshness → compare against registered systems → scope the next decision.  
**Governance**: named estate → declared/discovered reconciliation → evidence and coverage → approvals/monitoring/assurance only where connected.  
Keep cross-links, not a mandatory 7-step process.

### P6 Evidence-to-assurance value

Explain **source-discovered, provider-reported, SDK-instrumented, human-declared, runtime-observed** as independently attributable sources. “Inventory” is an input, not a successful Assurance or enforcement result. Five evidence planes still independent; inventory itself does not fill effective IAM grants or requested human intent.

### P7 Regulatory/enterprise records (compact)

NIST AI RMF / ISO/IEC 42001 management context, EU AI Act technical documentation and Article 49 database registration **if applicable**, selected EU record-keeping duties; SOC 2 asset/third-party/usage-related evidence where correctly mapped. Do not turn the public page into a full compliance framework catalog or say an application needs all obligations by default. Existing live page oversimplifies EU Article 11 as “inventory requirement” and NYC Local Law 144 as a registry obligation; correct and scope on implementation, legal approval before broader claims.

### P8 CTA

“Start with the evidence source you have.”  
- Open AI Systems → /dashboard/ai-inventory  
- Explore Agent & Action Discovery → /ai-action-access-map  
- Connect Provider Admin API → /dashboard/ai-inventory/admin-api  
- Scope Enterprise POC → /enterprise

## 3. IA/SEO/navigation contract

**Route:** \`/ai-inventory\` remains canonical. No /ai-agent-inventory, /provider-inventory, /ai-usage-inventory duplicate public acquisition page by default. Use on-page \`#agent-discovery\`, \`#provider-inventory\`, \`#systems-registry\`.  
**Title:** \`AI System Inventory, Agent Discovery & Provider Usage | HAIEC\`  
**Meta:** \`Discover supported AI agents, tools and action paths from source code. Connect provider admin APIs for project, model and cost visibility, with evidence-backed AI system records.\`  
**H1:** \`Know which AI systems exist. See the agents, actions and usage behind them.\`  
**Navigation:** existing Platform > AI Inventory, plus optional jump links Agent Intelligence and Provider Inventory inside the page. Preserve working \`/ai-action-access-map\`, \`/ai-security\`, \`/evidence\`, \`/assurance\`, \`/products\`, \`/dashboard/ai-inventory\`, \`/dashboard/ai-inventory/admin-api\`, \`/dashboard/ai-inventory/usage\` and example constellation link. Avoid new menu duplication with System Constellation/DAI/Costs.
**SEO:** All core claims visible in SSR semantic HTML. Schema WebPage/SoftwareApplication and FAQ only if visible, not fabricated ratings/pricing/provider partnerships or certified compliance.
**Design:** HAIEC's existing premium light-first marketing, stable site theme persistence, forest/mint/slate/natural typography; same light/dark semantic concepts as prior page work; one substantive dual-source evidence diagram, not generic metric cards. Native SVG/HTML for search accessibility; descriptive figure/caption/aria. Illustrative examples avoid INTERNAL/NOT LIVE/fictional banners, but must not claim an example is a verified external deployment. No em dashes in visible copy. Preserve currently deployed site behavior and working navigation, mobile/desktop.

## 4. Technical limitations/gaps to include in Devin's implementation acceptance

1. **Agent vs system vs surface count:** \`AgentReachabilityReadModel.summary.agentCount\` ≠ \`ai_systems\` count ≠ \`/dashboard/agents\` evidence-named surfaces ≠ provider projects/models. MCP server config reference is not agent. Exactly label denominators.
2. **Source producer coverage:** accepted qualifying full source scan with version/commit identity, provenance, relation family support, candidate/established, bounded collections, remote/unresolved. Don't say repository URL itself guarantees scan. No source = not assessed, not zero agents.
3. **Provider admin ingestion semantics:** organization costs may not include all models or per-call details; admin key connection and fetch timestamps/provenance. Provider data is not source code, runtime tool execution, effective grants or ownership proof.
4. **100-row cost snapshot inventory sync:** current \`syncAISystemsFromCosts()\` uses \`take:100\`; do not present resulting per-project rows as complete. Determine P0 release fix or visibly qualify; separately, provider pagination caps and admin-API UI browse limits require coverage semantics.
5. **Provider-derived production flags:** currently defaults to production; separate inferred/configured/confirmed and avoid overclaim.
6. **Cost labeling:** snapshots provider-reported, SDK fixed-rate estimates; never add them. \`avgMonthlyCost\` heuristic in \`sync-systems\` is not necessarily authoritative monthly billed spend; UI must rely on proper period-scoped aggregates.
7. **Identity reconciliation:** no unsafe automatic source ↔ provider project join. Need stable org/system/source plus exact provider project binding and user confirmation for ambiguous links.
8. **Mode UX:** admin API POST can reject key when SDK integrated, but costs API allows explicit per-source read when both data types present. Clear guide and reconcile only in owned API code project, not in public marketing.
9. **Permission/security:** sensitive provider keys encrypted server-side and org-scoped in present path, but don't advertise read-only key scopes or least privilege without end-to-end check; avoid displaying secret prefixes if unnecessary. HAIEC MCP token, provider admin token, SDK key separate.
10. **Regulatory claims:** revise inaccurate or over-general old framework text; detailed requirements remain under /frameworks or sector pages.
11. **Design:** retain existing live content's worthwhile Kestrel proof and SDK links, preserve semantic SEO and theme compatibility. Replace generic hero/step cards with the two-path narrative, not a full redesign of authenticated workspace.
12. **Testing:** scoped typecheck, route/SEO/claim contract check, no sweeping production E2E for editorial work; no production mutations while doing this Common Repo concept.
13. **Source truth:** re-read latest Main before Devin implementation. Old January docs called inventory “production-ready” and also reported serious security issues; prefer active routes, guards, current read projections, real accepted inputs and dated tests, not stale implementation checklists.

## 5. Proposed customer-ready FAQ

**Does connecting OpenAI or Anthropic discover every AI agent?** No. Provider admin APIs offer organization billing/project/model context within available data. Source-defined agents and tool paths require qualifying source analysis.

**Can HAIEC discover agents without provider admin keys?** Yes, within supported authorized source-analysis paths and evidence coverage. They do not require the provider billing credential.

**Are the “agent” counts the same as AI Systems?** No. Named systems, code-discovered agent definitions and evidence-named agent surfaces represent different units.

**Can the provider dashboard show actual AI usage?** It shows provider-reported cost snapshots where connected, while individual request/token/latency metrics may come from enabled SDK instrumentation and may be unavailable from admin cost snapshots.

**Does the inventory establish compliance or safety?** It is input to scoped investigation and Assurance. Inventory entries or framework mappings are not certifications, operating-control proof or observed action effects.

**Will my source repository and provider project automatically be linked?** Only when qualified tenant-bound identity and exact relationships support the join. Otherwise the sources remain separately attributable.

## 6. Developer implementation checklist

Refresh latest source, preserve /ai-inventory, check current admin API and source reachability code, inspect actual Main navigation/theme/CTA; implement semantics in existing /ai-inventory server page plus bounded interactive helper. Reuse exact authenticated operational routes. Crosslink source inventory from Repository Intelligence and provider admin from provider cost dashboard. No sample sensitive keys. No fabricated tenant/sample run stats. Capture note about remaining \`take:100\` and incomplete provider-usage semantics as engineering follow-ups rather than marketing copy. Keep reports and unknown states truthful, select user-goal CTAs rather than forcing all visitors to link a provider account. Existing product taxonomy stays **Discover → Evaluate → Authorize/Monitor/Protect/Verify as selectable jobs**, not six mandatory sequential steps.

**Implementation permission:** Common Repo research and preview only. Do not change, PR, merge or deploy the HAIEC website without the separate authorized implementation task.
