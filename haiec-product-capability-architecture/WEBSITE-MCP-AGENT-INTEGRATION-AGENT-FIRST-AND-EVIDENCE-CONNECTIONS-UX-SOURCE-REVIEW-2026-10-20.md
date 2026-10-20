# HAIEC MCP Agent Integration | Agent-first onboarding plus source and enterprise evidence connections
**Date:** 2026-10-20 | **Workstream:** Public website Page #22 | **Status:** Read-only source-reconciled UX, copy, architecture, SEO and Devin handoff. Common Repo only. **No changes to production website, new page or standalone HTML.**

**Canonical public destination:** https://www.haiec.com/docs/agent-integration  
**Existing Next.js owner:** `app/docs/agent-integration/page.tsx`  
**Related buyer hub:** https://www.haiec.com/developers  
**Other established owners:** `/docs/github-integration`, `/docs/guides/cursor-assurance`, `/docs/guides/claude-code-assurance`, `/docs/guides/devin-assurance`, `/docs/guides/agent-assurance`, `/monitoring/sources/onboard`, `/monitoring/iam`, `/dashboard/settings/integrations/cloud`, `/ai-inventory`, `/enterprise`.

## 1. Decision: one existing canonical page, two complementary dimensions
**Enhance the existing MCP Agent Integration guide in place; do not rename or replace it with a generic connectors marketplace.** Add a user-friendly **"Connect the AI agent"** path first, then **"Connect the evidence sources you need"** as an optional second path. Agent connection and evidence acquisition must remain conceptually separate.

- **Agent-facing access plane:** Cursor, Claude Code, Devin or a suitable MCP client talks to HAIEC's remote MCP server. The agent discovers/operates permitted HAIEC tools, proposes actions and shows actual returned results. HAIEC remains the deterministic canonical evaluator. This uses a scoped HAIEC API key, NOT an OAuth or ChatGPT plugin connector. It does not itself grant cloud IAM access.
- **Evidence-source plane:** GitHub source code, approved runtime endpoint, cloud IAM/policy evidence, bounded AWS AgentCore/CloudWatch surfaces, ServiceNow AI Control Tower/Agent Studio/table evidence, OTel/OTLP signals, human/structured logs and other contract-supported producers provide different **facts** within authorized scope. Each may require separate customer credentials, binders, scopes, consent and source qualification.
- **Five independent evidence views:** Requested / Policy Authorized / Effectively Granted / Code Capable / Observed. A source can inform a view only where its actual evidence qualifies; five views are NOT five mandatory integrations. IAM simulation currently does NOT establish canonical Effectively Granted (see below).
- **Principle:** start with the smallest eligible source and show early qualified findings; ask for an additional connection only when it can resolve a specific evidence gap. No "connect everything to begin" gate.

Suggested customer-focused H1: **Connect your AI agent. Let HAIEC verify what your AI can do.**  
Deck: **Use Cursor, Claude Code, Devin or another MCP-capable agent to discover supported HAIEC assurance workflows, run an authorized evaluation and inspect the exact evidence. Add code, IAM, operations and telemetry connections when deeper proof is needed.**  
Lead CTA: **Run HAIEC AI Assurance** (four-word goal prompt) with prominent setup instructions and the canonical `haiec_preflight` under the hood. Secondary: **Check my connection** / **Explore evidence sources**.  
Proof/value phrase: **Your AI guides the workflow. HAIEC determines the facts and results.**  
Alternate SEO title: **HAIEC MCP Agent Integration & AI Evidence Connections | HAIEC**. Keep existing canonical URL and established SEO intent for "HAIEC MCP agent integration".

**Do not ship a new /integrations landing or iframe the Common Repo HTML.** A future broader connections catalog may be appropriate when separate search demand and verified customer-ready source setup warrant it; not a prerequisite here.

## 2. Current source review (Main checked October 20, 2026)
| Source | Verified implementation / current behavior | What the public guide should do |
|---|---|---|
| `app/docs/agent-integration/page.tsx` | 319 lines of detailed technical text. Hero prompt, eight-step investigation/ingest sequence, bearer MCP endpoint, approval contract, capability/preflight guidance, API sequences, failure table and prompts. Dark-only heavy textual presentation. | Preserve detailed contracts below a compact first-use journey. Promote client choice, exact first-run preflight, source branch decision, readable evidence result and optional integrations. |
| `lib/docs/agent-guide-content.ts` | Canonical shared text/configs for Cursor, Claude Code, Devin, generic agents, permission and upload safety, idempotency, reconciliation and reports. | **Reuse**, do not fork snippets per website section. Confirm the Master Report vs Agent Audit order across old snippets before publishing. |
| `lib/mcp/ide-tools.ts`, `lib/mcp/tool-registry.ts`, `lib/mcp/capability-guide.ts` | Canonical `haiec_capability_guide`, `haiec_preflight`, source setup, lists, run, reports, `haiec_get_telemetry_status`, `haiec_setup_telemetry`, explicit write approvals and scopes. Tool names and platform-level availability not sufficient to prove per-tenant readiness. | Never invent MCP tools for generic IAM, AWS, ServiceNow connector administration. For these, link to actual approved UI/API or operator-assisted intake until a registered tool exists. |
| `lib/developer-integration-source-status.ts`, `lib/developer-integration-status.ts` | GitHub App remote `available` and recommended; local CLI and CI preview/Enterprise POC limited; authorized endpoint runtime `available`; GitHub Action v2 `not_released`. Manifest documents MCP and OTLP separately. | Source status labels from current registries, not hardcoded promises or fixture counts. |
| `app/(workspace)/monitoring/iam/page.tsx`, `components/monitoring/IamIntakePanel.tsx` | Authenticated IAM/Policy source page; binds active provider credential to AI System and initiates observation. | Explain optional AWS credential binding and eligible IAM/policy evidence; use auth-aware link. |
| `lib/iam-grant/effective-grant-observation.ts` | Explicit `PARTIAL_AWS_AUTHORITY_SOURCE`; simulated/identity-policy candidates are not canonical `EFFECTIVELY_GRANTED` because resource policies, endpoint policies and session context are unmodeled. | **Critical**: never say "HAIEC connects AWS IAM and proves effective grants." Call this partial AWS permission context; stronger conclusions require additional authoritative data. |
| `lib/integrations/aws/contract.ts`, `client.ts`, `discovery.ts`, `pull.ts` | Read-only AWS STS, bounded AgentCore resource discovery and declared CloudWatch log-group pulls. Tenant-owned credential references, account/region checks, cap windows/pages, deny/empty distinctions. AWS source existence != a ServiceNow AICT match. | Describe **supported bounded AWS evidence adapters**, not continuous account-wide AWS surveillance, full CloudTrail coverage, or universal native customer onboarding. |
| `lib/integrations/servicenow/contract.ts`, `preflight.ts`, `pull.ts`, `client.ts` | Read-only ServiceNow Table API, AI Control Tower, Agent Studio plans/tasks/tool execution where supported and ACL-authorized; per-surface preflight. Some specialized paths need operator-verified probes. Sources normalize to canonical ingress. | Call ServiceNow an **available integration contract / assisted scoped source**, subject to instance API permissions and configuration; not guaranteed every tenant has an active native connector. No ITSM writeback/approval claims. |
| `app/api/ingest/servicenow-aict`, `servicenow-agent-execution`, `servicenow-table`; `lib/evidence/adapters/intake-profiles.ts` | Typed customer-/competition-oriented data intake contracts. | Explain relevant source shapes but never claim ingestion receipt = execution/assurance. |
| `lib/telemetry/telemetry-onboard-service.ts`, `app/api/telemetry/onboard/route.ts`, `components/monitoring/ConnectTelemetryPanel.tsx` | Authenticated self-service source type labels OTLP/Jaeger/Datadog/File, optional AI System binding, scoped ingest token, OTel Collector YAML **template**, test payload and canonical OTLP traces/metrics/logs routes. `haiec_setup_telemetry` delegates to same source owner. | Telemetry is a **real optional intake path**. Explain generated collector config is not automatically deployed/tested; "Datadog/Jaeger" selection does not establish a separate native API-sync connector. Signal received != operational coverage or evaluated claim. |
| `lib/integrations/runtime-readiness.ts` | Competition-oriented 7-card read-only readiness over binders + persisted receipts + qualified relationships. States NOT_CONFIGURED, CONNECTED, AUTHORIZED, DATA_OBSERVED, MAPPED, READY, LIMITED, BLOCKED, ONSITE_BINDING_REQUIRED. | This is source-specific readiness, not one universal integration catalog. Expose state only if owner supports real caller-context. |
| `app/dashboard/settings/integrations/cloud/page.tsx`, `app/api/integrations/cloud/credentials/route.ts` | Authenticated per-organization cloud credentials management and provider checks. | Link to current UI, verify permissions and security before describing a user-ready connector. Never request provider plaintext secrets in public browser copy or prompt. |
| `lib/ai-inventory/providers/openai-admin.ts`, `anthropic-admin.ts`, `sync-systems.ts` | Provider admin-cost inventory is a separate OpenAI/Anthropic usage/cost reporting path, not an agent action or IAM integration. | Link to /ai-inventory rather than absorbing inventory administration into MCP setup. |
| `lib/evidence/competition-source-catalog.ts` | Typed adapter declarations and separately verified/pending provider profiles. Adapter contract != live source. | No sweeping "all cloud, enterprise and network tools connected" claims. |
| `data/public-site-registry.ts`, `app/sitemap.ts`, `components/AutoHideNavigation.tsx` | Guide already sits under Developers; existing canonical and server-readable docs. | Preserve page URL, nav and links. No new top menu, route, redirect, or duplicate SEO page. |

### Confirmed source-owned paths to verify at implementation
- MCP `https://www.haiec.com/api/mcp`, Streamable HTTP; `Authorization: Bearer <HAIEC_API_KEY>`; tenant from key. Keep secret in approved client/private configuration.
- API key management `/dashboard/api-keys`.
- Verified GitHub App connection `/docs/github-integration`; new source setup via current approved dashboard and tool flow.
- IAM/Policy `/monitoring/iam` (auth-gated).
- Runtime source onboarding `/monitoring/sources/onboard` (auth-gated), `/monitoring/sources`.
- Provider credentials `/dashboard/settings/integrations/cloud` (auth-gated).
- `/docs/guides/cursor-assurance`, `/docs/guides/claude-code-assurance`, `/docs/guides/devin-assurance`, `/docs/guides/agent-assurance`.
- API `/api-platform`; public proofs `/sample-reports/kestrel` and only valid actual report links.
- Auth links must preserve callback/return semantics; do not link to a private route and pretend it works anonymously.

## 3. Source-specific user-value and readiness matrix

| Integration family | Customer question and evidence it can contribute | Product source truth | Published availability / proof boundary |
|---|---|---|---|
| **HAIEC Agent MCP** | "Can my own coding agent ask HAIEC to run and explain a deterministic assessment?" | Remote Streamable HTTP, canonical scoped `haiec_*` tools, reports, preflight | **Available** subject to key scopes, organization, selected system, source/consent. MCP agent is the workflow driver, not a new evidence plane. |
| **GitHub App remote source** | "What do code/agents/tools and their qualified paths enable?" | Recommended, full remote code-analysis coverage where the registered source qualifies | **Available**; exact app installation and source selection. Remote source access isn't inferred from an arbitrary repo URL. |
| **Local IDE/CI** | "Can private source scans contribute without remote repo access?" | Limited local scanner submissions, preview/Enterprise POC | **Conditional/preview**; not full remote coverage, not a generally shipped GA Action. |
| **Runtime endpoint** | "How did a reachable AI endpoint behave under an authorized test?" | Runtime endpoint testing and result attachment | **Available in supported scope**, safety acknowledgements, target ownership/confinement. No automatic effect execution. |
| **IAM / AWS permission context** | "What permission candidates or policy context relate to this action?" | Bound AWS provider credential, IAM observation and policy sources | **Partial**. Do not promote `EFFECTIVELY_GRANTED` as established by current AWS simulation. Permission != delegation != executed action. |
| **AWS AgentCore + CloudWatch** | "What AWS agent assets and declared CloudWatch activity can we observe?" | Read-only STS/AgentCore discovery, bounded declared log group/time-window pull | **Supported source adapters; customer readiness conditional** on actual credential, region/account, surface permission, binder, observed receipt. Not AWS-wide continuous monitoring. |
| **ServiceNow (SNOW)** | "What AI Control Tower assets, Agent Studio tasks/tools and approved Table API records exist?" | Tenant-scoped read-only ServiceNow preflight/pull/typed intake | **Supported source adapters, operator/instance verification required**. Inventory registration doesn't prove runtime tool execution. No ITSM write-back unless a separately proven integration exists. |
| **OTel/OTLP telemetry** | "Can we ingest trace, metric and log evidence for this system?" | Live configured binder + scoped token/OTLP receivers + template | **Self-service onboarding path exists**, but generated config != running collector; received signal != assured operating effect. Jaeger/Datadog/FILE are source labels/config recipes, not automatic native SaaS account sync. |
| **Structured logs / human evidence** | "What documented policy/approval/transaction facts can we qualify?" | Typed ingress profiles, configured evidence binder, explicit user approval for data transfer | **Available when scope/format supports intake**, provenance and limitations preserved; an uploaded claim isn't an independent source witness. |
| **OpenAI/Anthropic admin usage and SDK** | "Which provider projects/models consumed API resources?" | Distinct `/ai-inventory` paths and admin cost snapshots | **Separate AI Inventory function**, not an AWS/IAM/MCP replacement; billed project/model != agent. |
| **Azure / GCP / generic ITSM / Okta / other vendors** | Optional future/customer-native data | Legacy docs/older scaffolds may mention broad connectors | **No generalized GA claim** without exact current route, authenticated behavior and persisted customer readback. Represent as requested/integration-dependent, or point to supported typed intake. |

**Core vs optional offering:** Avoid paywalling the initial deterministic assurance journey behind IAM/SNOW/cloud/telemetry. Optional enterprise **Evidence Connections & Operational Coverage** or **Customer-Native Authority and Protection** can add source depth, deployment/monitoring coverage and customer PEP adapters when genuinely contracted. They are grouped extension families, not per-button upsells, standalone guarantees or arbitrary new SKU. No pricing/entitlement invention.

## 4. Information architecture and first-screen composition
1. **Hero / first useful step (light-first):** Customer-facing H1; what agent connection does; prominent "Run HAIEC AI Assurance" four-word prompt with copy; immediately accessible MCP endpoint, secret handling and source-aware one-sentence contract. Do not imply the copy button starts a scan itself.
2. **Choose your AI client** selector: Cursor / Claude Code / Devin / Other MCP. Use native React tabs or segmented selector, semantic panels and correct client-specific install/config references pulled from `lib/docs/agent-guide-content.ts`. Do not create new client secrets or commit config files. Client-specific sample configs shown read-only, with user-owned private key placeholders. Deep link actual docs; do not duplicate whole guides.
3. **First result journey:** (A) secure key and select organization; (B) connect MCP and ask "Check my HAIEC access and show the next eligible action" => `haiec_preflight`; (C) select exact AI System and choose one eligible source mode; (D) approved `haiec_run_assurance` when source and scopes permit; (E) inspect run/Agent Audit/Master Report. Illustrate established finding, unsupported or missing joins and precise next action. Do not promise every user can run without a verified source; no telemetry required for remote code assurance.
4. **Choose evidence to add only when relevant:** concise grouped cards/code-readable table showing GitHub, IAM/Policy, AWS AgentCore/CloudWatch, ServiceNow, Telemetry OTLP, structured/human evidence, and separately AI Inventory provider usage. Each has (customer question / input / output / setup / limitations / exact current UI route / status source). One-click local anchors to genuine docs, not fictional "Connected".
5. **Interactive "What evidence do I need?" advisor:** User selects purpose (Find code paths / Establish authority / Explain executed behavior / Correlate business operations / Verify drift / Inventory provider spend); display 1 minimum next source, optional supplementary source and explicitly unanswered question. **Client-only educational selector**, not tenant-connected state or legal applicability engine. Text rendered in static HTML too for indexing.
6. **Trust and data movement:** lightweight four-stage diagram: `AI client → scoped HAIEC MCP → canonical evaluation and reports` contrasted with `approved external sources → bound intake / qualification → evidence views`. Show explicit trust/consent boundaries. MCP control-plane never receives AWS/ServiceNow plaintext secrets through agent prompts. OTel travels through OTLP receiver, not `/api/mcp`.
7. **Technical deep dive / advanced details:** Existing eight-stage evidence investigation process, explicit approval contract, preflight errors, tools/scopes, scenario binding, OTLP/structured receipts and report retrieval remain below. Progressive disclosure/anchor navigation. Avoid forcing all steps for initial code assurance.
8. **Conversion:** "Try first assurance" or "Check HAIEC setup" for self-service; "Scope Enterprise Evidence Connections" links to `/enterprise` where native source permissions/PEP/customer system mapping are required; no invented live demo/consultation booking.

**Page hero must keep MCP as owner; evidence-source section is a secondary lane.** Do not demote the main developer use case into a vendor logo showcase.

### Proposed customer-ready copy fragments
- Section title: **Connect the tools that can establish the next fact.**
- Section deck: **Start with your AI system and a supported source. Add identity, cloud operations or telemetry evidence when the assessment identifies a question that needs it.**
- IAM: **Compare declared permissions with available AWS policy observations. Some effective-access decisions require additional authorization evidence.**
- AWS: **Review supported AgentCore inventory and bounded CloudWatch activity with an approved AWS connection.**
- ServiceNow: **Bring AI assets and approved workflow records into one evidence review, subject to your instance permissions.**
- Telemetry: **Connect trace, metric and log signals through a scoped evidence intake. HAIEC reports what those observations can establish.**
- Decision CTA: **See what evidence is missing.**
- No internal labels like `FAKE`, `PROTOTYPE`, `NOT LIVE`, sprint IDs or em dash punctuation in customer copy. Convey source scope naturally.

## 5. Site/MCP parity and source ownership rules
- `haiec_capability_guide` returns goal and platform-level readiness; `haiec_preflight` checks caller key, tenant, system/source/eligibility; `haiec_list_connectors` currently delegates developer-integration availability (not a universal AWS/SNOW/OTel connection-state probe). **Do not misuse its response as vendor connection status.**
- `haiec_setup_telemetry` setup is permission/confirmation gated; returns configuration/binder, not installed agent, production collector or received signals. Confirm actual tool scope in current tool registry before publishing examples.
- Register/source actions and evidence uploads require explicit user approval plus actual scopes; reviewer consent cannot be replaced by typing a request.
- Ingestion `EVIDENCE_INGESTED` is NOT `EVIDENCE_EVALUATED`, `SOURCE_READY`, `CONTROL_SATISFIED` or closed gap. New immutable Evaluation must consume eligible evidence to change assurance conclusion.
- IAM policy documents are declarations, IAM observation is partial; telemetry is a potential witness with freshness/coverage constraints; ServiceNow AICT is inventory; Agent Studio tool execution records have independently qualified identity and timestamps.
- Credential validity != per-API authorization; binder configured != signal received; runtime event != original cause; correlation != causation; source-reachable != action executed. Missing/stale/blocked/unauthorized kept explicit.
- Tenant data must never cross organization; cloud credential references resolved on server and masked; no hardcoded secrets, broad cloud Admin access request, or generic scanner false positives.
- No new vendor integrations, MCP tools, privilege scopes, automatic cloud account reads or reporting engine features in this marketing UX scope. If needed, record engineering blockers and link existing supported routes.

## 6. Navigation, SEO, and design
- Keep canonical `/docs/agent-integration` with current or refined title/description that retains MCP keyword intent. No `/integrations-v2`, new `/mcp-connectors`, alternate indexed HTML file or duplicate content.
- Developers overview stays short and links here; GitHub Integration owns full GitHub flow; AI Inventory owns provider admin API; monitoring/source onboarding owns actual authenticated telemetry setup; IAM owns user credentials and observation; `/enterprise/architecture` remains deep product architecture.
- Existing docs/REST code examples keep their codeblock semantics. Render key explanatory text in server HTML, client hydration for selector only. Light-first public page; dark embedded terminal optional and supports dark-site mode. Accessible keyboard tabs, mobile 390/768/1440, prefers-reduced-motion, focus, contrast; no fake dynamic "Connected" state from fixture cards.
- Mark selected source states **Availability for customer** only from canonical code and/or real caller-connected data. If no authenticated read, show "Setup path" rather than "Connected". Do not publish user tenant state.
- Use actual clickable CTAs and return URLs. Keep navigation owned by global shell, no duplicate navbar/footer.

## 7. Implementation priority and dependency sequence
**P0 accurate contract and high-conversion first action:** source registry check, four-word prompt, select client, secure setup, preflight; preserve existing guide.  
**P1 connect the evidence sources:** grouped, evidence-question-based cards with verified routes and truthful AWS IAM partial / SNOW instance conditional / telemetry exact status; add source advisor and meaningful proof example.  
**P2 progressive detail and premium design:** move deep technical sections into orderly anchors and selective accordions, maintain server-readable explanatory copy, improve dual theme, update metadata.  
**P3 narrow optional engineering follow-up:** if a claimed source cannot be configured end-to-end by a typical customer, document ownership/access/readback gap for eventual connector initiative, not build a new platform integration just to support copy.

**Acceptance:**
- No source changes outside expected public guide / shared presentational component or actual verified doc parity fixes.
- Same canonical route, SEO nav and existing advanced content.
- MCP first journey supports one actual eligible source and reports real result, or presents exactly what permission/source is missing.
- Optional IAM, AWS, ServiceNow, OTel described accurately with role/availability/purpose/readback limits. AWS IAM never claimed as canonical Effective Grant.
- No provider keys, org identifiers or file uploads exposed; no unapproved write.
- No invented tool or endpoint and no force-connected source.
- All visible controls operate, source-aware, keyboard accessible; quick targeted tests and typecheck; no broad regression suite required.
- Devin records before/after route/component map, preserved features, precise screenshot findings, automated content contradictions corrected, tests and PR.

## 8. Handoff and related earlier decisions
**Developer-ready execution prompt:** [WEBSITE-MCP-AGENT-INTEGRATION-AND-ENTERPRISE-EVIDENCE-SOURCES-DEVIN-IMPLEMENTATION-PROMPT-2026-10-20.md](WEBSITE-MCP-AGENT-INTEGRATION-AND-ENTERPRISE-EVIDENCE-SOURCES-DEVIN-IMPLEMENTATION-PROMPT-2026-10-20.md).

Reuse prior Common Repo references:
- [MCP Consultant Operational Playbook](HAIEC-MCP-USER-CONSULTANT-OPERATIONAL-PLAYBOOK-AND-ACTION-COVERAGE-2026-10-19.md)
- [Developers MCP-first UX](WEBSITE-DEVELOPERS-PAGE-MCP-FIRST-UX-COPY-INTERACTIVE-QUICKSTART-PLAN-2026-10-20.md)
- [GitHub Integration guide](WEBSITE-GITHUB-INTEGRATION-GUIDE-SOURCE-VERIFIED-INTERACTIVE-UX-PLAN-2026-10-20.md)
- [Post-onboarding operations catalog and 76-row source audit](POST-ONBOARDING-CONTINUOUS-ASSURANCE-AND-OPERATIONS-CATALOG-2026-10-18.md)
- [Public brand / dual-theme standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md)
- [Prototype integration policy from prior review](PUBLIC-WEBSITE-ENHANCEMENT-PAGE-REGISTER-2026-10-20.md).

**Status:** Planning and source inspection only. No production site implementation, live credential tests, rendered-page/tenant tests or deployment are claimed.
