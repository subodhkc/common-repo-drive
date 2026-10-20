# Devin implementation prompt | Existing MCP Agent Integration page, agent-first + evidence-source choice

**Read first:** [Source-backed research and UX decision for Page #22](WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md). The plan defines precise source ownership, truthful availability matrix, technical boundaries, page copy and acceptance criteria. This prompt authorizes an in-place website enhancement, not new backend connector implementation.

---

## Task
Enhance the **existing** HAIEC website page `/docs/agent-integration` with a genuinely usable first-run HAIEC MCP onboarding path and a well-organized guide to optional evidence integrations including AWS/IAM, ServiceNow (SNOW), OpenTelemetry/OTLP, GitHub, authorized runtime endpoints and structured/human evidence.

**Preserve current advanced MCP documentation and cross-page ownership. DO NOT create a new public /integrations or /mcp-v2 page, static HTML deployment or iframe.** Do not replace existing guides with a disconnected prototype.

Repository: `subodhkc/haiec-website`; reference Common Repo `subodhkc/common-repo-drive/haiec-product-capability-architecture`.

## Step 1: Refresh and reconcile source
Read latest `Main` and recent merged PR state before edits. Inspect:
- `app/docs/agent-integration/page.tsx`
- `lib/docs/agent-guide-content.ts`; existing `app/docs/guides/{cursor-assurance,claude-code-assurance,devin-assurance,agent-assurance}/page.tsx`
- `lib/mcp/{ide-tools,tool-registry,capability-guide}.ts`, `lib/developer-integration-source-status.ts`, `lib/developer-integration-status.ts`
- `app/(workspace)/monitoring/iam/page.tsx`, `components/monitoring/IamIntakePanel.tsx`, `lib/iam-grant/effective-grant-observation.ts`
- `lib/integrations/aws/{contract,client,discovery,pull}.ts`
- `lib/integrations/servicenow/{contract,client,preflight,pull}.ts`
- `lib/telemetry/telemetry-onboard-service.ts`, `app/api/telemetry/onboard/route.ts`, `components/monitoring/ConnectTelemetryPanel.tsx`
- `lib/integrations/runtime-readiness.ts`, `lib/evidence/competition-source-catalog.ts`, `lib/evidence/adapters/intake-profiles.ts`
- `app/dashboard/settings/integrations/cloud/page.tsx`, `app/(workspace)/monitoring/sources/onboard/page.tsx`
- `data/public-site-registry.ts`, site navigation, current canonical metadata and the previously implemented public theme components.

Treat status observed in source as distinct from customer-ready installed credentials, tenant permissions, persisted receipts, executed probes and a resulting Assurance Evaluation. Do not claim end-to-end readiness solely because a service file exists.

## Step 2: Refine page information architecture
Keep the public URL, existing SEO intent and shell. Organize the page into:
1. **Hero:** "Connect your AI agent. Let HAIEC verify what your AI can do." Subheading explaining deterministic results and optional evidence connections. Main four-word prompt copy "Run HAIEC AI Assurance". A copy button copies text only; no fake scan triggered.
2. **Agent setup chooser:** selectable Cursor, Claude Code, Devin, Other MCP. Verified `https://www.haiec.com/api/mcp`, Streamable HTTP, scoped Bearer key handled only in private client secret/config. Copy-ready non-secret client-specific snippets from the shared canonical source (or link actual full guides) with relevant scopes and setup path.
3. **First-use journey:** authorize org/key → `haiec_preflight` → choose exact AI System and one eligible source → show any permission/source gap → request approved `haiec_run_assurance` when eligible → inspect canonical Agent Audit/Master Report. Do not force telemetry, IAM, ServiceNow or every evidence plane before initial code findings; don't invent source readiness.
4. **Optional evidence connections:** grouped cards/table, organized by the customer question they answer rather than vendor logo. Groups: Source/Code, Cloud Identity & Authority, Cloud/Operational Sources, Telemetry/Observed, Business Workflow Evidence, Structured/Human Evidence. Make AWS/IAM, AWS AgentCore+CloudWatch, ServiceNow and OpenTelemetry individually understandable without pretending all are one connector.
5. **"Which source helps next?" lightweight client-side advisor:** choose question (Find code-capable action, Check authority, Correlate cloud activity, Observe behavior/drift, Reconstruct ServiceNow workflow, Inventory usage). Recommend only appropriate qualified source types and existing user destinations, and state which fact remains unestablished. Do not perform tenant API calls from anonymous public UI.
6. **How sources support HAIEC:** two-lane semantic architecture: agent→MCP→canonical evaluation/report; sources→bound intake/qualification→source-aware evidence views. Explain Requested, Policy Authorized, Effectively Granted, Code Capable and Observed without making them mandatory steps. A read-only source observation never implies executed control/protection.
7. **Advanced operations:** preserve existing eight-step investigate/normalize/preview/approve/ingest/receipt/re-evaluate guidance, authorization rules, troubleshooting, prompt library, API/MCP operations, local quick check. Use headings/anchors/progressive disclosure instead of discarding this content.
8. **Real CTAs:** link actual `/dashboard/api-keys`, `/docs/github-integration`, `/monitoring/iam`, `/monitoring/sources/onboard`, `/dashboard/settings/integrations/cloud`, `/api-platform`, `/ai-inventory`, `/enterprise` with verified auth-aware behavior. Keep one primary setup path plus consultative Enterprise scope for customer-specific source adapters.

## Step 3: Copy and integration truth table
**MCP:** available remote Streamable HTTP with API-key Bearer auth and canonical scoped tools; `haiec_list_connectors` reflects developer integration status, NOT universal AWS/ServiceNow account connectivity. Goal guide and preflight do not themselves run an evaluation.

**GitHub remote:** recommended full remote analysis where correct GitHub App authorization, source asset and scope qualify.

**Local CLI/CI:** limited preview/Enterprise POC; not full feature parity or shipped universal GitHub Action v2.

**IAM/AWS permission:** AWS IAM observation is PARTIAL authority/policy evidence. It does not currently emit canonical effectively-granted assertions due to unmodeled resource/endpoint/session policies. Avoid "we verify effective AWS IAM permissions" copy. Permission is not human delegated authority.

**AWS AgentCore/CloudWatch:** bounded read-only capability probes and asset/log reads with exact AWS account/region, credential, declared group/time window and ACL. Code/adapter availability is NOT evidence any customer has activated it; don't label broadly LIVE or continuously synced without an actual tested user path. Do not imply full AWS account inventory, CloudTrail broad coverage, or on-target enforcement.

**ServiceNow:** bounded read-only AICT, Agent Studio and approved Table API surfaces with credentials, surface-specific ACL preflight and possible operator-confirmed endpoints. Do not promise approval-ticket writeback, ITSM incident creation or comprehensive SNOW inventory.

**Telemetry:** supported self-service OTLP evidence intake, optional system binder, scoped token, generated collector template, traces/metrics/logs. Jaeger/Datadog labels are onboarding source types and may require user-operated export/collector; do not call them native account connections. Generated config != verified live collector; received signal != evaluated effect.

**Typed/human source:** selected ingress profiles with explicit upload consent and binder; receipts require qualified subsequent Evaluation before closing gaps.

**Provider admin OpenAI/Anthropic API:** distinct AI Inventory usage/cost pathway, link to `/ai-inventory` without pretending those provider keys grant MCP access.

**Enterprise grouping:** The core MCP/GitHub/eligible scan flow does not depend on separately purchased cloud connections. Place customer-native data gathering/authority and operational coverage in optional *grouped* Enterprise Evidence Connections & Operating Assurance engagement where justified. Do not invent package SKUs or prices.

Use exact source/permissions status gates from source. Strong trust copy: client secrets are never pasted into prompts and provider secrets never go to MCP tool arguments.

## Step 4: UI/design and SEO implementation
- Match public HAIEC light-first/dark compatible design with a restrained dark technical terminal block. Avoid dark-only multi-thousand-word first impression.
- Native Next.js component, semantic server-rendered H1/H2/H3 and source text, minimal client-side tab interaction; not whole prototype HTML.
- Preserve global nav/footer, canonical `/docs/agent-integration`, search intent and all deep links. No extra indexed route.
- Strong accessible contrast, keyboard tabs/copy interactions, responsive 390/768/1440, reduced motion, no empty/inert buttons or fake connected cards.
- Short, customer-readable paragraphs. No em dash punctuation, fabricated customer activity, "fake data" labels, internal sprint identifiers or misleading regulatory certification claims.
- Avoid changing authenticated source onboarders or MCP behavior merely to render marketing. Any uncovered backend gaps should be documented as follow-up, not silently implemented.

## Step 5: Acceptance and reporting
Run focused typecheck/lint and route/content tests. Smoke public page and critical auth-gated links when applicable without requiring production credentials. Verify:
- Original docs preserved and reachable by anchors.
- Four client choices show correct supported instructions.
- First-run steps distinguish read-only preflight, source eligibility, run consent and result identity.
- No claim of mandatory AWS/IAM/SNOW/telemetry before a remote source scan.
- AWS IAM marked partial, ServiceNow and AWS source-specific conditional, OTel self-service intake versus live traffic differentiated.
- One source-relevant next action and owner, clear unknowns, canonical reports not fabricated.
- No new public route/nav item, no extraneous standalone HTML, no secret exposure or new data ingestion engine.
- Existing MCP docs/source manifests stay consistent.

Deliver **one focused PR** with summary of source-verified claims, exact changed components, preserved sections, tests and any actual integration blockers. Merge to Main after required checks and repository policy; no separate manual deploy.

**Success criterion:** A first-time user can understand how to connect an agent and get a first eligible HAIEC result, and an enterprise operator can see exactly which optional sources can add trustworthy evidence, without mistaking a named vendor connector for proven live integration.
