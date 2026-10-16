# E0 / R1 — HAIEC Main Source, Pull Requests, Canonical Owners and Implementation Boundaries

**Assessment date:** 2026-10-16  
**Research disposition:** **COMPLETE — READ-ONLY RECONCILIATION FOR THE 16 PRIORITY JOURNEYS AND IDENTIFIED ACTIVE PR LANES.**  
**Implementation/release gate:** **OPEN.** This document does not establish customer-run readiness, successful production deployment, a working Vercel preview, or verified runtime protections.  
**Source snapshot:** HAIEC `Main` **`66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`**; MAA `main` **`3e6befdb9daf4c3fd3e363e00c261748197d0a78`**; Kestrel source `main` **`aafce1d15e6a3f9dbc69307c57c95eb03993eca7`** where relevant.  
**Scope:** Source reading, GitHub commit and PR-state inspection, source-path reconciliation with the existing common-repo matrix. **No product repository modification, tests, GitHub PR merges, database changes or deployments.**  
**Important:** The user has stated that an **independent Devin session owns ongoing HAIEC/manufacturing implementation**. GitHub source/PR metadata cannot establish the identity or task assignment of a live Devin session. Confirm the human operator's ownership boundaries before anyone edits code.

## 1. Executive decision

**Do not start a second HAIEC engine, new universal capability registry, new MCP tool directory, second monitoring read model, second org-permission layer, or a reimplementation of the recently merged manufacturing Sprint 25.**

The currently prioritized customer problem is **composition, customer/role availability, qualified evidence, operational truth and verified end-to-end proof** over existing working source owners.

Retain the model:
- Marketing pillars: **Understand**, **Assure**, **Govern & Operate**.
- Six **independent selectable** jobs: **Discover**, **Evaluate**, **Authorize**, **Monitor**, **Protect**, **Verify**. Do not turn them into a mandatory six-step customer workflow.
- Five independent evidence planes: `REQUESTED`, `POLICY_AUTHORIZED`, `EFFECTIVELY_GRANTED`, `CODE_CAPABLE`, `OBSERVED`.
- Distinct canonical records: evidence/source qualification, U5 assurance disposition, approved operating envelope, human deployment decision, actual native execution control/effect, U6 verification.
- Missing runtime witness `!=` no action; approval `!=` live enforcement; simulation playback `!=` customer telemetry.

**Current phase rule:** Finish HAIEC enhancements **E1–E7** before the dedicated Kestrel external MCP acceptance run. Focused safety checks required to merge consequential authorization fixes are not the postponed end-to-end acceptance campaign.

## 2. Verified code inventory and source-availability results

At HAIEC Main `66f52086`, GitHub recursive tree is **not truncated**, with:
- **12,563 tracked blobs** (source, assets, fixtures, historical and generated material; not a count of product features).
- **744** API `route.ts` entrypoint paths under `app/api`.
- **613** `page.tsx` entrypoint paths under `app`.
- **1,894** files under `lib/`; **3,737** under `packages/`; **1,001** under `tests/`.
- Canonical MCP registry = `lib/mcp/tool-registry.ts` merging `TOOL_DEFS` from `lib/mcp/server.ts` with `IDE_TOOL_DEFS` from `lib/mcp/ide-tools.ts`. At inspected source there are **58 literal `haiec_*` tool definition keys** (21 in server; 37 in IDE tools). This is a count of **source-declared definitions**, not of deployed, executable or enabled tools for any user.

**Mechanical reconciliation:**
- **16 / 16** UI paths in the current [16-workflow matrix](UI-MCP-API-WORKFLOW-AVAILABILITY-RECONCILIATION.csv) have an exact path entrypoint in `Main` after removing Next.js route group delimiters.
- **16 / 16** rows list API paths present in `Main` (rows may specify multiple paths; all listed paths checked).
- All **actual haiec_* tool names** listed in those 16 rows are present as definition keys in the current canonical MCP source registry. Strings such as `NO_DIRECT_APPROVAL_TOOL_CONFIRMED`, `NO_DIRECT_KILL_TOOL_CONFIRMED` and `CONSEQUENCE_DELTA_MCP_ONLY` are intentionally *matrix annotations*, not tool IDs.
- `haiec_get_agent_trace` and `haiec_get_governance` were initially missed by an inspection truncated at line 950 of `lib/mcp/ide-tools.ts`; both are **registered later in that source file**. **Do not create replacement tools or log these as missing.**
- **All 16 mapped canonical owner paths checked exist at Main.** See [16-row detailed source reconciliation CSV](E0-R1-16-WORKFLOW-CANONICAL-OWNER-SOURCE-RECONCILIATION-2026-10-16.csv).

**What these checks DO NOT establish:** client access to a route, authorization behavior, paid-plan availability, source connections, an operational producer, an actual evaluation, correct human approval, actual blocked action, functioning browser, deployed MCP process, published CLI package or live effect receipt. `SOURCE_PATH_PRESENT` and `TOOL_DEFINED` are source facts only.

**Do not confuse completeness denominators:** The pre-existing 87 curated capability entries and 20 candidate specialist modules remain useful planning inventories, not an exhaustive route/function enumeration. The 16 priority journeys are fully reconciled for **path existence and owner mapping**, not end-to-end runtime readiness or the entire HAIEC repo.

## 3. Current PR and code-ownership collision register

| PR / work lane | Source-observed state | Changed paths / actual overlap | Owner instruction |
| --- | --- | --- | --- |
| [#2221 — Sprint 25 shared scenario](https://github.com/subodhkc/haiec-website/pull/2221) | **Merged** to Main at `66f52086` | `data/demo/manufacturing-scenario-shared.json`, `lib/demo/scenario-playback.ts`, `tests/unit/s22-deployment-decision.test.ts` | **Already delivered source change.** Do not duplicate. Fictional scenario ≠ production policy/telemetry. |
| [#2219 — Sprint 24 coordinated playback](https://github.com/subodhkc/haiec-website/pull/2219) | **Merged** at `75ffb329` | Homepage `app/page.tsx`; monitoring governance demo; playback components, shared scenario and unit tests | Use as existing demo composer; protect against accidental rewrite. |
| [#2218 — Sprint 23 governance demo](https://github.com/subodhkc/haiec-website/pull/2218) | **Merged** by current Main | Monitoring governance demo + deployment logic presentation | Existing presentation, do not recreate. |
| [#2216 — Sprint 22 deployment governance](https://github.com/subodhkc/haiec-website/pull/2216) | **Merged** by current Main | Deployment decision CRUD/assign/decide/revoke, CAS persistence, projection, UI + migration | **Canonical human deployment decision already exists in source.** Do not write a second approval engine. |
| [#2220 — product truth and Kill Switch](https://github.com/subodhkc/haiec-website/pull/2220) | **OPEN / NOT MERGED**, head `32e54c58`, old base `b2c14897` | 17 changed files: provider-scanner quarantine, org-bound trigger, transient browser key, public copy/monitoring wording and focused tests | **Separate security/release owner.** Block claims that staged corrections are deployed. Fix its branch lint gate and accept through normal release flow when owner is ready. |
| [#2217 — architecture diagrams](https://github.com/subodhkc/haiec-website/pull/2217) | **OPEN DRAFT / NOT MERGED**, head `a4dedc0a`, base `64c615f5` | Homepage `app/page.tsx` + 2 SVG assets | **Overlaps already-merged #2219 homepage edit.** Reconcile current homepage, review responsive/a11y and actual claims before considering merge. Non-blocker for P0 security. |
| [#2141 — TMF CALLBACK gating](https://github.com/subodhkc/haiec-website/pull/2141) | **OPEN / NOT MERGED**, head `cca5950a` (updated Oct 11) | Existing `lib/control-test/tmf-dispatcher.ts`, callback route, runtime witness, transport + focused tests | **Do not rebuild a new callback engine or presume its proposed issuer/decision hardening is on Main.** Ask owner whether to close/supersede or reconcile pending changes when E5 begins. |
| [#2139–#2126 et al — Seattle/UCP stack](https://github.com/subodhkc/haiec-website/pulls) | Numerous older **OPEN** PRs visible in GitHub list | Source qualification, control proof, runtime witness, delegation and event ingest | Treat as **unmerged candidate work**, not automatic accepted capability. Inventory before E4/E5; avoid cherry-picking stacked branches blindly. |
| [#2084 — semantic mapping consumer](https://github.com/subodhkc/haiec-website/pull/2084) | **OPEN DRAFT / NOT MERGED** | Semantic mapping routes, service/persistence, Prisma migration and tests | **DEFER**; never introduce a second semantic mapping layer/schema in E1–E7 without a separately reviewed use case. |
| [#2180 — dependency group](https://github.com/subodhkc/haiec-website/pull/2180) | **OPEN / NOT MERGED** | `package.json`, lockfile | Separate dependency-release owner. Not a required dependency of customer-UX composition; avoid combining into sensitive operational PR. |

**Exact branch divergence:** GitHub compare `b2c14897...Main` shows five commits newer than PR #2220's base: the two Sprint 24 commits, PR #2219 merge, Sprint 25 commit, and PR #2221 merge. **None of the nine changed path names in that base→Main comparison overlap any of PR #2220's 17 changed filenames.** This is a **filename-level non-overlap**, **not** proof of semantic, dependency, merge or runtime compatibility. The PR requires owner-led reconciliation, focused CI and later deployment verification.

**PR #2220 GitHub checks at staged head:** TypeScript **SUCCESS**, ESLint **FAILURE**, ESLint New-Violations **FAILURE**, Vercel Preview Comments **SUCCESS**. Preview Comments is not a usable deployed preview. Earlier new-violations audit identified 30 unused-parameter diagnostics in compatibility wrappers; no fresh passing gate was observed. Separate focused tests and functional preview are **not confirmed**.

**GitHub governance:** `.github/CODEOWNERS` exists but explicitly says that code-owner enforcement depends on protected branch review requirements; its Oct 9 commentary records a then-unprotected Main. The connected GitHub app returned **403** on live `Main` branch-protection read. Hence **current branch protection / mandatory review status is UNVERIFIED**, not “confirmed unprotected.” Source CODEOWNERS is not evidence of Devin session assignment. Ask repository owners to confirm actual enforcement in their GitHub settings in the relevant release workflow.

## 4. Canonical source ownership mapped to enhancement work

“Owner” here means **code and trust-contract owner**, not a named engineer assigned by GitHub. Team/person assignment belongs to the user's active implementation session.

| E step | Already implemented/owned in current Main | Build/composition gap | Avoid / direct conflict |
| --- | --- | --- | --- |
| **E1 — capability and workflow availability** | `lib/mcp/tool-registry.ts`; `capability-guide.ts`; `guided-assurance.ts`; `lib/ai-inventory/system-next-action.ts`; `next-action-access.ts`; `lib/dashboard/product-surface-registry.ts` | Read-only composition of goal × org × role/scope × entitlement × source state × available transport; same next-action semantics for UX and MCP | Another registry, mandatory six-step journey, extra persistence of readiness/permission |
| **E2 — source connection and acceptance** | `lib/ai-inventory/evaluation-source-preflight.ts`; connected source/consent owners; `lib/mcp/ide-tools.ts`; evidence adapters | Guided minimum-information source path for GitHub, submitted bundle or valid connector; user consent and complete limitations | Universal `haiec.json`, cloud account prerequisite or assuming private Kestrel source accessible by ownership |
| **E3 — tenancy / privileged decisions** | `lib/org-context.ts`, `lib/api-auth.ts`, `app/api/mcp/route.ts`; versioned human decision and scoped ownership services | Browser session-backed privileged operator route/step-up design, exact delegated actor and tenant resources; PR #2220 safe merge separately | Browser-stored master key; implicit admin access; claiming human approval authorizes runtime |
| **E4 — telemetry/evidence** | `lib/evidence/adapters/otlp-receiver.ts`; `lib/evidence/streaming-telemetry-collector.ts`; `telemetry-readiness.ts`; `lib/assurance/monitoring-read-model.ts`; producer registry | Source/collector freshness, receipt-to-action/effect correlation, metadata-only Kestrel adapters, meaningful unknowns and observable alerts | Second SIEM/collector; unqualified monitoring coverage; token anomalies as unauthorized-effect verdict |
| **E5 — human governance and applied controls** | `lib/assurance/deployment-decision-persistence.ts`; `deployment-governance-projection.ts`; `operating-envelope.ts`; `guardrail-decision-persistence.ts`; `lib/kill-switch/execution-guard.ts`; existing control-test dispatcher | Compose exact control-state ladder and per-target enforced receipts, source-qualified; review #2141 pending scope before changing callback | Second approval engine, universal kill claim, treating configured state as target-mediated block |
| **E6 — workspace / U5–U6 proof** | `lib/ai-inventory/system-workspace.ts`; `system-governance.ts`; `lib/topology/agent-trace.ts`; `lib/assurance/evaluation-index.ts`; `consequence-delta-access.ts`; U6 passport/packages | One user-friendly consequence-first result surface joining existing authorized read projections (current vs immutable evaluated snapshot), decisions, monitoring and limits | New verdict store; overwriting historical evaluation basis; declaring simulated playback an independent runtime proof |
| **E7 — remote MCP customer consumption** | `app/api/mcp/route.ts`, `lib/mcp/server.ts`, `ide-tools.ts`, `tool-registry.ts`, `capability-guide.ts`, `lib/developer-integration-source-status.ts` | Document actual server/tool scope + key handling and supported remote client setup; optional thin OAuth interface only for proven need | Replacing MCP auth/registered surface wholesale; implying static HAIEC API keys are OAuth; treating CLI PREVIEW as released |

**Tech layer alignment:** org/identity → source/asset binding → ingestion and five evidence planes → orchestrator → deterministic U5/DAI/controls → human policy and deployment decision → source-bound monitoring/drift → actual native protection (per integration) → U6 verification → **clearly separated** synthetic demo layer. This layering is *analytical*, not a mandatory sequential customer journey.

### Two critical non-build decisions

1. The source's registered MCP `haiec_get_governance` and `haiec_get_agent_trace` already use canonical `lib/ai-inventory/system-governance.ts` and `lib/topology/agent-trace.ts`. E1/E6 must **reuse** these, not create a new trace or governance query service.
2. The 16 mapped UI/API endpoints exist. Their presence does not establish capability to conduct an authorized action for an arbitrary tenant, and dashboard presentation components are not entitlement gates. E1's real task is **truthful eligibility projection**, not endpoint creation.

## 5. E0 and R1 completion checklist

| Item | Result | Limit |
| --- | --- | --- |
| Current Main HEAD and neighboring repo HEADs | **DONE, source checked** | One-time snapshot; active Devin can advance branch immediately |
| Recent Sprint 22–25 delivered source changes | **DONE, reconciled** | No real-time browser/operation test |
| Priority open PRs and staged-vs-Main distinction | **DONE, reconciled** | Many older open PRs; did not deep-review every historic branch |
| PR #2220 changed filenames versus new Main commits | **DONE, no exact-path overlap** | Not a code-level merge conflict test |
| PR #2217 homepage path overlap with merged Sprint 24 | **DONE, confirmed** | Visual/build/a11y pending |
| Canonical MCP registry and 16 workflow path presence | **DONE** | Executability/role/tenant entitlement not proven |
| Source owner path existence for 16 workflows and E1–E7 | **DONE** | Actual engineer assignment not visible to GitHub inspection |
| Source-versus-deployed availability separation | **DONE, stated** | Deployment verification deferred |
| CODEOWNERS existence and live protection | **PARTIAL** | Live branch protection returned 403; only historical comment available |
| Complete estate-/all-PR-/all-entitlement-/every-producer census | **NOT CLAIMED** | Outside bounded R1; candidate 87+20 inventory still curated |
| Dedicated external KestrelVoice tenant via remote HAIEC MCP, logs/screenshots | **NOT RUN** | Explicitly deferred until E1–E7 enhancements and release gate |

**R1 research:** `COMPLETE_READ_ONLY_SOURCE_AND_OWNER_CENSUS_FOR_16_PRIORITY_WORKFLOWS`.

**E0:** `SOURCE_AND_PR_OWNERSHIP_RECONCILED`, but `RELEASE_AND_ENGINEER_ASSIGNMENT_PENDING`. Keep E0 P0 release gate open: branch/PR code ownership must be confirmed by user/Devin; PR #2220 must reach green focused checks, merge as appropriate and receive validated deployment before claiming corrections live.

## 6. Handoff to the implementation owner

Before coding:
1. Start by recording fresh Main HEAD and inspecting current competing PRs. Reserve files in E1/E2 versus E3/E4 versus ongoing MAA. **Never overwrite newer Devin session code.**
2. **E1 first:** compose existing canonical goal/source/readiness/access, with one truthful next action. No persisted availability registry. Use [16-row owner reconciliation](E0-R1-16-WORKFLOW-CANONICAL-OWNER-SOURCE-RECONCILIATION-2026-10-16.csv).
3. **E2 next:** add reliable low-friction source acceptance with consent and externally supplied evidence.
4. Work E3/E4 only with separate security/evidence ownership; keep PR #2220 as distinct release/security lane.
5. Then E5/E6/E7; check pending #2141 before adding callbacks and #2217 before homepage changes.
6. **No external KestrelVoice tests yet.** After E1–E7 and production release proof, execute the previously approved **separate-directory, non-internal-source remote HAIEC MCP customer acceptance** with authorized Kestrel tenant, operation journal, numbered redacted screenshots, source/evaluation/effect references and final illustrated report.
7. No real customer credentials or screenshots containing secret data in this public planning repo. Current common-repo-drive is public; private evidence must remain in access-controlled records until visibility/access is deliberately restricted. Repo visibility change cannot claw back historic public clones.

### Source links and evidence confidence

- HAIEC Main: https://github.com/subodhkc/haiec-website/tree/Main (source snapshot SHA above).
- Canonical MCP: https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/tool-registry.ts
- IDE tools: https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/ide-tools.ts
- Platform agent guide: https://github.com/subodhkc/haiec-website/blob/Main/AGENTS.md
- Current source owner crosswalk: [CSV](E0-R1-16-WORKFLOW-CANONICAL-OWNER-SOURCE-RECONCILIATION-2026-10-16.csv).
- Prior HAIEC enhancement-first plan: [roadmap](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md).
- Main-staged release gate: [status JSON](PRODUCT-TRUTH-RELEASE-GATE-STATUS.json).
- PRs: [#2220](https://github.com/subodhkc/haiec-website/pull/2220), [#2217](https://github.com/subodhkc/haiec-website/pull/2217), [#2141](https://github.com/subodhkc/haiec-website/pull/2141), [#2084](https://github.com/subodhkc/haiec-website/pull/2084).

**Report qualification:** “Source path exists”, “definition registered”, “PR staged” and “GitHub check success” are separate observations. This document does not close software security work, prove runtime tenant isolation or advance any simulated event to customer evidence.
