# HAIEC Deep Repository, Abandoned Capability & Competitive Convergence Review
**Date:** 2026-10-16
**Read-only audit baseline:** HAIEC `Main` tree `b2c1489773bd95b9e361714fbf7c808bbc866ffb`; LogSense `c7491ba9124e5df72d250f1b32a4b2c77ccc2993`; manufacturing `31948dab5fd65bc4e007d2e833796955f8f3489e`.
**Status:** Source/contract and architecture audit, **not** a production runtime or exhaustive route-execution audit. No product code was changed by this review.

## Executive decision
**Keep three customer-facing pillars: Understand / Assure / Govern & Operate. Under them expose six independently invocable customer goals: Discover / Evaluate / Authorize / Monitor / Protect / Verify.**

Most competitive leverage is **completing trusted product workflows and proof of operational enforcement**, not adding another scanning engine or catalog. HAIEC's differentiated kernel remains evidence-qualified authority vs code vs actual action and effects. Do not imply universal five-plane coverage, customer IAM completeness or active blocking.

## 1. Confirmed findings from current source

| Priority | Finding | Evidence | Interpretation and work |
|---|---|---|---|
| P0 | Legacy cloud and Atlassian scanners **fabricate positive controls** | [lib/integrations/aws-scanner.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/integrations/aws-scanner.ts), [lib/integrations/azure-scanner.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/integrations/azure-scanner.ts), [lib/integrations/gcp-scanner.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/integrations/gcp-scanner.ts), [lib/integrations/jira-confluence-scanner.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/integrations/jira-confluence-scanner.ts) | Code literally returns hard-coded `yes` controls and plausible confidence values with stub comments. **Quarantine / prohibit admission** into canonical assurance. Never retrofit those records as real provider observations. This is distinct from the newer AWS canonical IAM observation service. |
| P0 | Legacy multi-source orchestrator consumes fabricated scans | [lib/integrations/multi-source-orchestrator.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/integrations/multi-source-orchestrator.ts) | Imports all four simulators. Indexed source search found only its own `scanAllSources` declaration, not a current call site; **reachability not proven**. First classify as dormant/legacy, then block activation or retire safely. |
| P0 | Kill Switch product page asserts universal speeds and integrations | [app/(dashboard)/kill-switch/page.tsx](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/(dashboard)/kill-switch/page.tsx) | Static claims L1-L3 under 1s, generic metric/vendor integrations, universal action stop. Source-level claims are not per-customer confirmed enforcement. Require factual contract, per-target readiness & verifiable drill. |
| P0 | Runtime mediation requires actual customer wiring | [lib/kill-switch/execution-guard.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/kill-switch/execution-guard.ts), [lib/assurance/guardrail-decision.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/guardrail-decision.ts) | SDK/guard exists. Guardrail contract explicitly says no consumer wiring, persistence or detection in that module. Inspect separate callers/receipts; never conflate configured, decision issued, enforced, and effect confirmed. |
| P0 | Current effective AWS authority remains partial | [lib/iam-grant/effective-grant-observation.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/iam-grant/effective-grant-observation.ts) | Source explicitly declines to emit canonical `EFFECTIVELY_GRANTED` due to unmodeled policy/session/resource/VPC layers. Cloud connector UI must not describe this plane as fully established. |
| P1 | Three API routes still use placeholder outcomes | [app/api/marpp/records/route.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/api/marpp/records/route.ts), [app/api/nyc-ll144/audits/route.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/api/nyc-ll144/audits/route.ts), [app/api/github/artifacts/route.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/api/github/artifacts/route.ts) | GET returns empty arrays; MARPP POST returns 501. Audit current UI callers; disable misleading actions or route to canonical actual owner. Do not equate these endpoints with whole specialized product families. |
| P1 | Legacy inventory wrapper labeled stub, but separate wrappers **do log** | [lib/ai-inventory/sdk-wrapper-stub.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/ai-inventory/sdk-wrapper-stub.ts), [packages/haiec-openai/src/index.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/packages/haiec-openai/src/index.ts), [packages/haiec-anthropic/src/index.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/packages/haiec-anthropic/src/index.ts), [app/api/v1/inventory/usage/log/route.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/api/v1/inventory/usage/log/route.ts) | Do **not** classify SDK telemetry as universally absent. OpenAI/Anthropic wrappers call an authenticated ingest API, and route stores tenant-bound usage. But current wrappers focus on older chat APIs, include static model pricing tables, and log token/latency/cost rather than verified tool effects. Modernize and verify before promoting to full agent runtime monitoring. |
| P1 | Several static engine components intentionally held/orphaned | [capabilities/engine-qual/orphan-component-decisions.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/capabilities/engine-qual/orphan-component-decisions.ts) | Registry classifies ACTIVE_PRODUCTION/AUXILIARY, KEEP_HELD, WIRE_AFTER_BENCHMARK, RETIRE. Some “held” labels refer to **fields within active extractors**, not the entire component; act only on measured corpus gaps. |
| P1 | Monitoring largely projects existing data, not an always-on collector promise | [lib/assurance/monitoring-read-model.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/monitoring-read-model.ts), [lib/assurance/monitoring-projection.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/monitoring-projection.ts), [app/(workspace)/monitoring/page.tsx](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/app/(workspace)/monitoring/page.tsx) | Runtime ingestion exists, but the projection itself does not detect/infer completeness or guarantee continuous collection. UI polls every 30s in one view; polling ≠ complete live capture. Show per-source health, freshness and source gaps. |
| P1 | Enterprise product surfaces already have canonical owners | [lib/dashboard/product-surface-registry.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/dashboard/product-surface-registry.ts), [lib/ai-inventory/system-next-action.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/ai-inventory/system-next-action.ts), [lib/ai-inventory/next-action-access.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/ai-inventory/next-action-access.ts), [lib/mcp/capability-guide.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/mcp/capability-guide.ts), [lib/mcp/guided-assurance.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/mcp/guided-assurance.ts) | Do **not** build a parallel router or action engine. Compose existing goal guide + canonical next action + entitlement annotation + preflight + evidence gap resolution into one UI/MCP availability projection. |
| P1 | MCP Assurance and IDE orchestration are substantial | [lib/mcp/server.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/mcp/server.ts), [lib/mcp/ide-tools.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/mcp/ide-tools.ts), [lib/mcp/tool-registry.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/mcp/tool-registry.ts) | Platform already delegates to canonical scoped owners; new `haiec_check` is optional facade only after registration/testing. Avoid reimplementing scans or inventing source truth in ChatGPT. |
| P1 | Developer tooling release truth is uneven | [lib/developer-integration-source-status.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/developer-integration-source-status.ts) | GitHub remote available; local CLI limited preview; CI local preview; GitHub Action v2 not released; endpoint runtime testing available with safety conditions. UI/marketing must match exact status. |
| P1 | Catalog includes rules not executed | [lib/ai-security/risk-registry/detection-rule-catalog.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/ai-security/risk-registry/detection-rule-catalog.ts) | Distinguish REGISTER_ONLY vs EXECUTABLE rules; tests by source class cannot claim general coverage. Registered rule ≠ detection ≠ evaluated control. |
| P1 | Advanced guardrail insights are partial contract/projection | [lib/assurance/guardrail-insights.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/guardrail-insights.ts), [lib/assurance/monitoring-projection.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/monitoring-projection.ts) | Coverage matrix, ladder and contradiction shapes exist. A complete customer enforcement coverage matrix requires a qualified live source; status should remain bounded. |
| P2 | Historical architecture documents contain obsolete claims | [docs/architecture/U0-INTERNAL-TOOLS-MAP.md](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/docs/architecture/U0-INTERNAL-TOOLS-MAP.md), [docs/core/CONFLICTS_AND_ORPHANS.md](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/docs/core/CONFLICTS_AND_ORPHANS.md) | Treat old docs as dated investigations (some say no OTLP adapter, no DAI contracts while new code exists). Current code and versioned claim policy are authority; archive stale docs and remove from Devin onboarding as factual references. |
| P2 | Version-control hygiene and dependency noise | Paths `packages/haiec-openai/node_modules`, `packages/haiec-anthropic/node_modules`, `lib/kill-switch/node_modules` | Exactly 2,167 + 1,551 + 267 = **3,985 tracked dependency files**. Isolate cleanup, confirm dependencies and build before removing from Git index; don't mix with UX/security fixes. |

### High-impact counterexamples to simplistic claims
- Newer AWS service [lib/iam-grant/effective-grant-observation.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/iam-grant/effective-grant-observation.ts) is evidence-qualified and explicitly partial: not the same as legacy simulated `aws-scanner.ts`.
- [lib/ai-security/production-ir-assembly.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/ai-security/production-ir-assembly.ts) actively wires extraction in production; a stale “orphan” label must not justify removing active IR functions.
- [lib/assurance/deployment-decision.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/deployment-decision.ts) explicitly separates policy approval, assurance evaluation, human deployment decision and runtime enforcement.
- [lib/assurance/operating-envelope.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/operating-envelope.ts) requires approved, versioned scopes; draft files are not policy authority.
- [lib/assurance/dai-evaluation.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/assurance/dai-evaluation.ts) models partial/unknown dimensional action evidence and hard negatives; do not invent DAI breach from missing delegation.
- [lib/product-truth/public-claim-policy.ts](https://github.com/subodhkc/haiec-website/blob/b2c1489773bd95b9e361714fbf7c808bbc866ffb/lib/product-truth/public-claim-policy.ts) already defines forbidden public claim classes. Extend its coverage to legacy Kill Switch pages and website diagrams, not a second claim-policy list.

## 2. What is still not proven (critical)
- Actual customer runtime hooks: every relevant action passes through an unavoidable mediation point, with verified denial, bypass resistance, recovery and time-to-effect receipt.
- Identity continuity: agent-specific runtime principal, OBO delegated identity, target policy, SDK credential and cross-service attribution are complete end-to-end in supported environments.
- Service-level operational state: ingress/collector setup, current health, event qualification, incident alerts, escalation, review and closure are observable and actionable for enterprise SREs.
- Complete UI–MCP–API parity: every promised user action has exact matching function/route, scope and tenant check; no orphaned CTA or placeholder.
- Tenant or enterprise hardening outside existing tests: SCIM/SSO support, regional residency, DLP/redaction boundaries, retention/legal hold, customer data isolation, rollback and regulated audit demands. **Validate before declaring missing or shipping new systems**.
- Published distribution: npm/PyPI packages, GitHub Action/CLI readiness, ChatGPT/Claude integration discoverability and time to first meaningful outcome.
- Release and business evidence: latest production uptime, monitor alert delivery, access and entitlement behavior by org tier, official external proof package acceptance.

## 3. Competitor comparison (official public source claims; not independently tested deployments)
| Player | Published direction | HAIEC comparative position | Highest-leverage response |
|---|---|---|---|
| Accenture AI Refinery/Distiller | Agent development, memory, orchestration, customization, evaluations, observability, governance, interoperability; enterprise deployment services | Broad build-and-operate platform, **not a like-for-like assurance vendor**. HAIEC should integrate into agent development regardless of consulting implementer | Ship an open action-assurance evidence/controls interface with partner onboarding and deployment governance |
| Microsoft Agent 365 | Agent registry/identity, monitoring, governance and security across Entra, Defender, Purview | Strong connected enterprise control plane; HAIEC's potential wedge is independent, cross-provider consequential-action/effect proof | Verify non-human agent identity and policy-binding connector; avoid competing on generic Microsoft inventory |
| IBM watsonx.governance | AI asset visibility, control accountability, agent observability, enterprise GRC and business KPI attribution | Mature organizational risk story; HAIEC's evidence planes and DAI are promising but its business-context mapping and continuous accountability need user-visible convergence | Add consequence-to-risk/owner/control/business-impact mapping, not generic KPIs detached from evidence |
| AWS Bedrock AgentCore | Real policy enforcement at gateway, identity, OTLP/CloudWatch and tool-level security | AWS has actual dispatch mediation for AWS targets; HAIEC should prove what AWS policy authorizes and whether agent results stay within governed scope | Integrate `LOG_ONLY`/ `ENFORCE` receipts where supported; detect bypass paths; preserve policy-source provenance |
| Cisco AI Defense / Zero Trust agent security | Runtime tool-use safeguards, MCP policy, agent IAM/security | Strong enterprise enforcement distribution; HAIEC cannot win as generic “another firewall” | Differentiate on cross-plane authority-to-effect accountability, independent evaluation and evidence-based review |

**External primary links**
- Accenture: https://newsroom.accenture.com/news/2025/accenture-launches-distiller-agentic-ai-framework-to-accelerate-scalable-industry-ai-solutions
- Microsoft: https://learn.microsoft.com/en-us/microsoft-agent-365/guidance/why-agent-365-for-enterprise
- IBM: https://www.ibm.com/think/perspectives/ai-governance-to-assurance-what-we-shared-think-2026
- AWS: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/use-gateway-with-policy.html
- Cisco: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m02/cisco-redefines-security-for-the-agentic-era.html

## 4. Missing matrix dimensions and overlooked workflows
**Do not declare original 87 entries “complete.”** Source tree has 12,560 tracked HAIEC files and hundreds of route/library files (not equal to customer capabilities); reconciled semantic workflow coverage remains unfinished. The 20-candidate specialty register must be triaged, not auto-promoted.

Organize the capability matrix v2 with:
- Persona (developer/AppSec/SRE/governance/compliance/CISO/auditor/admin), org/system entitlement and actual server scope.
- Entry point UI + MCP + API + package with exact route/tool and release state.
- Canonical owner, provider readiness and independent prerequisites, including source qualification/freshness.
- Read vs write vs external effect vs operational control, explicit confirmation/approval.
- Qualifying evidence planes, coverage and unknowns, human boundary/decision and enforcement receipts.
- Risk/control owner, incident/escalation/closure, change triggers, historical/current comparability.
- Output proof (signed vs hashed vs verifiable), limitation and next best step.

Overlooked use cases to validate and explicitly model:
1. Agent identity lifecycle (discovered, claimed, verified, changed, retired) and permissions change over time.
2. Shadow agent discovery using **connected sources** rather than one mandatory repo.
3. MCP and agent-to-agent authority continuity, tool delegation, cross-org targets, skill bundles and browser/computer-use surfaces.
4. Blast radius via reachable resources, cross-service consequence graph and data class/region changes.
5. Guardrail coverage × code capability × actual mediation receipts and unmediated paths.
6. Production monitoring onboarding + collector health + sampling/staleness + new action path detection vs statistical anomaly.
7. Exact process: policy proposal, authority approval, assurance disposition, deployment decision, enforcement mode, recovery and decommission.
8. Model/provider/SDK usage telemetry separated from actual tool-effect evidence.
9. Risk acceptance/exception lifecycle and separation of duties with expiration and evidence invalidation.
10. Organization/program portfolio with assigned system owner, integration coverage, new changes and risk consequence summaries.
11. Regulated controls and continuous change: applicability, catalog vs executable tests, evidence gathering, control mapping, Compliance Twin, report approval.
12. LogSense incident handoff: forensic timeline and source bundles are external candidate evidence, not alternate HAIEC Assurance.
13. Manufacturing dashboard: simulation and lab test outputs never imply real PLC/MES/OT authority or Kill Switch protection.
14. Commercial distribution and day-1 onboarding including self-serve MCP preflight, least-privilege connection, trials, billing tier/scope and support escalation.
15. Enterprise trust: retention/data residency, supplier risk, secure integration contracts, contractually authorized evidence export and auditing.

## 5. Revised product design
**Marketing/overview:** 3 pillars:
- **Understand:** discover assets, agent identity, tool reachability, trust/authority context, source coverage.
- **Assure:** selected deterministic evaluation, DAI, bounded effects, applicability, controls, evidence frontiers, remediation.
- **Govern & Operate:** policy boundaries, human review, monitoring, optional enforcement, changes, compliance twin, proof packages.

**Navigation/jobs:** six independently selected task families **Discover, Evaluate, Authorize, Monitor, Protect, Verify**, launched from system workspace, portfolio or IDE/MCP. Their output is a qualified result and the next **actual** user action, not a forced pipeline.

**Operational backend:** qualify evidence → selected orchestration/evaluation where appropriate; policy/approval and real-time mediation are independent authorities with data/receipt feedback. Do not force a guardrail/kill switch through audit orchestrator.

**MCP/UI parity:** the same capability guide, next-action engine, profile resolver, producer registry, server role and entitlements, source readiness, existing report owner; one-prompt facade is optional. The assistant presents evidence acquisition alternatives but can never self-approve delegated authority or claim silent enforcement.

**Customer state vocabulary:** clearly differentiate `NOT_CONNECTED`, `CONNECTED_NOT_QUALIFIED`, `EVIDENCE_NEEDED`, `REVIEW_REQUIRED`, `SUPPORTED_BUT_NOT_ENTITLED`, `PLATFORM_HELD/UNSUPPORTED`, and actual `ENFORCEMENT_VERIFIED` from source-derived contracts. These are **proposed UI labels**, not new canonical verdict enums.

## 6. Ordered roadmap: no broad feature explosion
| Rank | Initiative | Outcome / Done criterion |
|---|---|---|
| 0 | Legacy simulated-code safety check | No simulated control-producing scanner is able to send a qualified production evidence result; prove by source/caller audit and a targeted negative test |
| 1 | Truth/readiness/reachability census | Every top-level UX/MCP workflow traced through authorization, entitlements, live producer/service, evidence basis and user next action; old docs marked dated |
| 2 | Runtime protection copy/receipts | No universal speed/automatic stop statements; exact target readiness and optional drill effectiveness evidence; no bypass overclaims |
| 3 | Unify existing UX orchestration | One objective-first launcher using `capability-guide`, `system-next-action`, `next-action-access`, `guided-assurance`, preflight; no replacement engine |
| 4 | Modernize provider agent instrumentation | Validate OpenAI/Anthropic package release and trace correlation; instrument supported actual tool actions rather than treating token counters as OBSERVED effects |
| 5 | Enterprise consequence/identity integrations | One specific AgentCore gateway receipt or Entra Agent ID evidence path chosen by POC demand; verify action→principal→delegation→effect linkage |
| 6 | Program/policy view and partner packaging | System-owner/control-risk crosswalk, executive exposure and assigned actions, one-page deployment POC handoff usable by enterprises and consultancies |
| 7 | Repo/code hygiene | Remove tracked node_modules and stale placeholders on isolated testable changes; retain history and no mass removals during UX change |

**Stop rule:** Do not add duplicate engines, broad compliance catalogs, an entirely new runtime control plane, or make manifests mandatory. Any higher-budget integration requires a named supported execution seam and a measurable evidence/UX gap.

## 7. Minimal verification / audit follow-through
- Source census: registered MCP tool definitions, API route handlers, product surface registry, producer states, package/publications, control execution/source class, and sample decision/report outputs.
- Confirm old `multi-source-orchestrator.ts` has no import/callers in current production build; if reachable, block simulated evidence at admission.
- Test one source-only developer path, one compliance-only path, one IAM partial result, one operational telemetry connection, one human decision, one runtime-target Kill Switch drill, one exact U6 report, one no-plan/limited-plan case.
- Quantify first meaningful outcome time, source connection success, evidence gap closure, role-restricted actions and partner onboarding friction.
- Use targeted code/tests then acceptance only on touched critical paths; do not turn this into a full regression campaign.
- Keep website draft PR #2217 unmerged until new claims and visuals pass factual/accessibility QA. Changes to Main auto-trigger production deployment; verify only after approved merge.

## 8. Additional sensitive operational surface review (source-inspected)
These route names should enter the closure census even though existence alone does not demonstrate an exploit.

| Surface | Current observed authorization | Action |
|---|---|---|
| `app/api/_diag/env/route.ts` | Session **and** `isSuperAdmin` before returning Modal/environment endpoint URLs | Consider production-disable or restrict environment disclosures to necessary operational metadata |
| `app/api/_diag/db/route.ts` | Session **and** `isSuperAdmin`, then DB/migration metadata | Reduce error/details exposure and gate to short-lived admin support workflow |
| `app/api/_diag/scanner/route.ts` | Session **and** `isSuperAdmin`, performs scanner version probe | Prefer internal admin health/readiness projection over generic public diagnostic URL |
| `app/api/debug/prisma-models/route.ts` and `debug/session` | Superadmin-gated; returns sensitive model/session metadata and on error can include stack/details | Restrict diagnostic detail in production; negative role tests |
| `app/api/dev/auto-login/route.ts` and `dev/bypass-checkout` | Explicit hard `NODE_ENV === production` 403 guard, and separate `HAIEC_DEV_BYPASS` flag | Verify production build env, no accidental preview/tier escalation; keep hard guard and add route negative assertions |
| `app/api/admin/run-migrations/route.ts` | `CRON_SECRET` bearer gate; source flags deprecated/manual SQL/schema alteration and prefers Prisma deploy | Confirm no active dependency; remove endpoint in a standalone reviewed migration-hardening PR |
| `app/api/admin/seed-demo/route.ts` | Session + platform superadmin check; creates fictional users/data | Keep synthetic/test identities visibly separated and prevent propagation into customer evidence or executive metrics |

**Finding qualification:** No unauthenticated exploitation was established from this source review. Production env, actual ingress routing, deployed origin and role enforcement were not exercised. Treat as *attack-surface review*, not a confirmed vulnerability.

**Priority change:** Add production-sensitive endpoint retirement and negative tests to the P1 security/truth census. No broad auth rewrite.
