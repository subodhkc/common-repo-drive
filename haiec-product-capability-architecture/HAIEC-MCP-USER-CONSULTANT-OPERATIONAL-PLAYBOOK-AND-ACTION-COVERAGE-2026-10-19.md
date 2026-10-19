# HAIEC MCP operational playbook — owner and consulting use (v2)
**Reviewed:** 2026-10-19. **Canonical product contract:** [HAIEC agent guide](https://www.haiec.com/docs/agent-integration), [API OpenAPI](https://www.haiec.com/openapi/assurance-v1.yaml). **Companion interactive view:** [MCP playbook v2](enterprise-publication/interactive/haiec-mcp-operational-playbook-v2.html).
**Intent:** Self-service and authorized consultant-led assurance with minimal friction. This is a user guide and UX/copy reference; it does not claim live integration/engine proof without an actual run.

## Product-facing copy and journey
**Promise:** "Connect HAIEC, choose what you want to learn about your AI system, and follow evidence-backed next steps. HAIEC checks what is available, runs only supported checks you authorize, and explains what the evidence proves."
**Default CTA:** "Check my HAIEC setup" → `haiec_preflight`.
**Pre-work note, not a numbered MCP prompt:** Have legitimate access to the right HAIEC organization and permission to inspect the selected systems. Consultants need customer invitation/delegation, scoped consent, and agreed testing boundaries before touching protected sources. The existing org membership/API-key and consent/authorization gates enforce this. No standalone 'set scope' wizard is necessary for read-only preflight or source inspection; precise authorization is required before consequential actions.

### Connect the HAIEC MCP — first in the guide, not a buried prerequisite
1. Sign in to https://www.haiec.com. Select the correct organization. Have an authorized admin mint a suitable short-lived least-privilege key at https://www.haiec.com/dashboard/api-keys; choose a purpose that covers intended steps. Viewer/read-only keys cannot run assurance or configure connections.
2. Add a remote Streamable HTTP MCP server in a compatible client: URL `https://www.haiec.com/api/mcp`, header `Authorization: Bearer <HAIEC_API_KEY>`; keep credentials in the client's private secret store, never prompts, repository, or public/browser JavaScript. HAIEC MCP uses API-key bearer authentication, **not** HAIEC OAuth. Refresh/revoke through canonical key management.
3. Ask: **"Check my HAIEC access and show the next eligible action."** → `haiec_preflight`; ask **"What can this connection do?"** → `haiec_capability_guide`. Select an existing system or, with explicit confirmation, create one via `haiec_create_ai_system` (eligible key).
4. Choose **one** entry route: a verified GitHub App source, qualified local/CI scan bundle, authorized runtime endpoint, qualified telemetry, or typed human-supplied evidence. None is a global mandatory prerequisite. When possible, reuse connected sources; missing evidence is not a failed security test.

### Runbook sequence (select relevant steps rather than force every one)
| # | User says to connected assistant | Canonical owner / short orchestration | Type; example use case |
|---|---|---|---|
| 01 | Check my HAIEC access and what I can do. | `haiec_preflight`; scopes/org/readiness | Core; first use |
| 02 | Show my AI systems; select [system]. | `haiec_list_systems`; `haiec_create_ai_system` if approved and missing | Core; bind correct tenant |
| 03 | Discover known tools, agents, action paths and evidence coverage for this system. | `haiec_get_agent_trace`, source/action view; basis labels | Core; exposure map |
| 04 | Show available evidence connections and the best next step. | `haiec_list_connectors`, `haiec_list_sources`, `haiec_capability_guide` | Core; avoid needless setup |
| 05 | Connect and verify my approved repo and branch. | `haiec_github_preflight` → `haiec_list_github_repositories` → `haiec_bind_github_source` → `haiec_verify_source` | Conditional; remote static source |
| 06 | Can I submit a local/CI scan instead? | `haiec_submit_local_scan` and later attach qualified scan; local CLI preview | Optional alternative; private CI |
| 07 | Show operating envelope / requested capability declarations; help me draft missing ones. | `haiec_get_operating_envelope`, `haiec_get_capability_declaration`, confirmation-gated draft submissions | Conditional; policy comparison; approval remains in UI |
| 08 | Run fresh static assurance on this verified source; show selected engines before launch. | `haiec_run_assurance` with new idempotencyKey and eligible `engines.static`; source/consent enforced | Core for code-assurance track; Semgrep/source capability evidence |
| 09 | Follow this run and tell me which engines actually executed. | `haiec_get_run` → evaluation id; selected/running/skipped statuses | Core; distinguish scan from orchestration |
| 10 | Explain the exact evaluation, findings, controls, reachability, DAI and proof gaps. | `haiec_get_summary`, `haiec_get_agent_audit`, `haiec_get_dai_report`, `haiec_get_master_report` | Core after run |
| 11 | What evidence would resolve each open finding, and who must supply it? | Agent Audit's deterministic `resolutionGroups`; no auto-close | Core; remediation |
| 12 | Can we obtain provider/IAM permission evidence? | qualified scoped provider export / connector where live; otherwise human-approved structured intake | Optional; effectively granted plane |
| 13 | Can we configure passive telemetry for this system? | `haiec_get_telemetry_status` → `haiec_setup_telemetry` with confirmation → approved local instrumentation → receive/qualify | Optional; observed activity and drift |
| 14 | Preflight an authorized runtime security test without running it. | `haiec_runtime_preflight`; executable vs HELD categories | Optional; adversarial behavior |
| 15 | Run only the specific safe runtime test I approve. | `haiec_run_runtime_test` with explicit test authorization/response-only acknowledgments → `haiec_get_runtime_test` | Optional; target behavior; separate dispatch |
| 16 | Attach this completed, same-system runtime test to a new assurance evaluation. | `haiec_run_assurance` with `attachRuntimeTestId` | Conditional after 15; OBSERVED evidence depends on qualification |
| 17 | Preview and ingest this approved structured/log evidence. | `haiec_list_evidence_binders`, `haiec_ingest_structured` / `haiec_ingest_logs`; accepted receipt; rerun new evaluation | Optional; logs, IAM exports, approval records |
| 18 | Group findings into recommended control and remediation decisions. | Agent Audit, controls reads and report projections; recommendation only | Core; human review |
| 19 | Prepare an approval/deny/conditional decision; show where the owner signs. | Dashboard-authenticated human governance flow; draft != approved | Conditional; deployment/governance |
| 20 | Check whether my enforcement/kill-switch is actually wired, not merely configured. | native target-side proof required; never infer from HAIEC UI | Optional; protect |
| 21 | Investigate changes, permission drift and action traces. | telemetry source health / `haiec_prepare_scenario`, `haiec_get_scenario_status`, reconstruction when qualified | Optional; operations/incidents |
| 22 | Re-evaluate with the newly qualified evidence and compare snapshots. | `haiec_run_assurance` on new membership; `haiec_list_evaluations`, `haiec_get_consequence_delta` | Conditional; changed evidence |
| 23 | Produce executive and technical reports, showing what was not assessed. | `haiec_get_master_report`, `haiec_get_agent_audit`, report links | Core; delivery |
| 24 | Show available private verification packages; publish only with explicit approval. | `haiec_get_package`, `haiec_issue_assurance_package`, `haiec_publish_package` | Optional; proof/share |
| 25 | Summarize residual risks, evidence owners, access cleanup and next review. | report/evaluation/receipts, human signoff | Core; handover |

### Orchestration truth — not one magical 'scan all' invocation
- Fresh source assurance: check tenant, exact system, verified source, explicit branch/consent and scopes → static analyzer/source capability results → qualifying evidence → deterministic Assurance → frozen Evaluation/report. `haiec_run_assurance` starts this canonical run.
- Local/CI: qualified bundle is uploaded separately, then attached. Submission itself is not an evaluation.
- Runtime active: `haiec_runtime_preflight` first; consented `haiec_run_runtime_test` executes separately; completed same-system result is attached in **a new Evaluation**, not automatically included in a historic result.
- Telemetry: `haiec_setup_telemetry` creates binder/configuration, but user must instrument actual producer and verify reception; received event != evaluated observation.
- Policy: MCP can submit **DRAFT** operating envelope or intent; approval is done by properly authorized human in dashboard. Approved operations do not automatically prove per-action authorization/effective IAM or target PEP.
- Reports: `NO_RECEIPT`, `NOT_ASSESSED`, `HELD` and stale time bases remain honest; no fabricated PASS.

### CLI / API alternative
**Full remote Assurance is supported through REST v1** (`/api/v1/assurance/runs` with bearer + `Idempotency-Key`, `GET /api/v1/assurance/runs/{runId}`, `GET /api/v1/assurance/evaluations/{id}/summary`, `.../agent-audit`, `.../master-report`). A caller must supply an exact verified `sourceAssetId` and use `engines.static: {enabled:true, executionMode:"api", sourceAssetId}` for fresh source scanning.
**Independent preliminary local checks:** `npx -y ai-appsec` (Semgrep separately required) or `npx -y mcp-tenant-isolation mcp` on an MCP server. Those do **not** create HAIEC platform Evaluations. Full local HAIEC CLI is **PREVIEW/enterprise POC**; GitHub Action v2 is **NOT_RELEASED**; don't advertise a production `haiec scan` executable.

## What actions does HAIEC actually discover and how should it govern them?
**Never say 'all actions discovered' without a bounded denominator.** Source scan can identify source-backed capability candidates; verified interface specifications and exposed MCP tools can enumerate exposed operations; IAM provides qualified contextual grants (not automatically action-effective); runtime traces show **observed** calls, not unobserved capabilities. Each has source identity, time, scope, trust, missing coverage. A single `tools/list` result cannot discover private internal side effects or effects of a tool with broad arguments.

**Recommended action hierarchy (design guidance, not a new shipped engine):**
1. **Inventory all identified actions**, including low-risk and unknown, preserving source, code location or interface operation, coverage and changed/new status.
2. **Group into consequence families** for user navigation and policy templates: read/answer; content/config mutation (greeting, hours, FAQs, menus, services, prompts); knowledge/source ingestion; customer/tenant data access/export; routing/workflow/communications; financial/external actuation; identity/permission/delegation; destructive/bulk/high-impact operations.
3. **Evaluate precise consequential operation instances** for risk-sensitive controls. Stable identity should include subject/principal, tool/operation, target resource/tenant/environment, parameter/volume/data class, approval, grant, source revision and run/observation ID. `update_config` is not uniformly low- or high-risk; a greeting redirecting customer calls can be consequential.
4. **Consequentiality authority:** HAIEC can propose candidate severity from deterministic ontology, action semantics and policy mapping; customer owner/security/compliance defines/approves the operating boundary, risk tolerance, impact thresholds and exceptions. UNKNOWN/ambiguous mapping → REVIEW, not silent allow. Compliance applicability is context-dependent.
5. **Coverage-aware reports:** executive per system and family; per-consequential-action detailed case; appendix searchable for all recognized/candidate actions and excluded/unknown coverage. High-value cases show REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED as independently supported, with explicit evidence and missing joins. Avoid one bloated full report per trivial parameter.
6. **Runtime:** monitor observed actions when actual trace/binder exists; use family defaults and parameter-sensitive policy for consequential operations; require target-side PEP/approval gateway for real blocking. Baseline drift/volume anomaly signals are triggers to investigate, not proof of unauthorized action.
7. **Source version and lineage:** new tool/schema/parameter/path, grant, policy or deployed revision triggers targeted reassessment; do not call candidate discovery proof of reachability or active enforcement.

### KestrelVoice case
The P14.2 QA acceptance proved one reversible greeting update with external Kestrel approval/readback, not exhaustive capability coverage. P14.4 produced a REVIEW test report with static/runtime/wizard engines **disabled** and no HAIEC ingestion of the change. Reuse earlier Kestrel 44/44 scoped reference findings only with exact source/release/basis. Next is verified Kestrel source or other qualified input → fresh engine-enabled evaluation → action-family coverage and selected detailed cases → approved QA interaction and independent HAIEC telemetry where wired.

### External benchmarks (researched reference, not HAIEC capability assertions)
- [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/): reduce tool access, privilege and unexpected effects.
- [Microsoft Defender AI agents inventory](https://learn.microsoft.com/en-us/defender-xdr/ai-agent-inventory): agent, identity, tool and risk inventory.
- [Amazon Bedrock AgentCore Policy](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy.html): granular deterministic gateway controls; log-only/enforce modes where actually integrated.
- [LangSmith observability](https://www.langchain.com/langsmith/observability): traces and monitoring of tool use; tracing alone != authorization.
- [Palo Alto Prisma AIRS](https://www.paloaltonetworks.com/ai-security/prisma-airs): discover/assess/protect lifecycle, interception requires deployed integrations.
- [NIST AI RMF](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/): governance as a continuous cross-cutting function; not a mandatory onboarding wizard.

### Backlog, narrow and valuable
P0: prove one Kestrel code-backed action inventory and visible provenance/coverage, then fresh engine-enabled evaluation. P1: offer consequence-family group drilldowns and per-action evidence case without duplicating report engine. P1: qualify observed QA MCP call/target readback in HAIEC ingestion; preserve human approval boundary. P2: add parameter-aware templates and drift detection on actual source joins; only later optional native PEP/enforcement pilots. No feature sprawl or misleading total-coverage claims.
