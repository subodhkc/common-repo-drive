# HAIEC — Pre-Devin Research Closure, Product Truth and Implementation Decisions

**Reviewed:** 2026-10-16
**Status:** RESEARCH / DECISION PACKET — NOT IMPLEMENTATION OR PRODUCTION ACCEPTANCE
**Repository ownership:** This document belongs ONLY in common-repo-drive. The HAIEC production source and manufacturing repo were inspected read-only. No HAIEC production edits, tests, migrations, PR merges or deployments were executed by this research task.

## 0. Executive decision

**Stop new horizontal engine development. Complete one qualified customer journey, preserve the manufacturing full-platform story, and resolve existing operational security gates before advertising live enterprise protection.**

Retain the established product model:
- Three **explanatory pillars**: Understand; Assure; Govern & Operate.
- Six **independently selectable customer jobs**: Discover; Evaluate; Authorize; Monitor; Protect; Verify.
- Five **orthogonal evidence planes**: Requested; Policy Authorized; Effectively Granted; Code Capable; Observed.
- Separate **assurance disposition, approved operating policy, accountable human deployment decision, runtime control state, actual effect, and verification artifact**. One status does not imply another.
- Conditional prerequisites per goal, role, organization, source, entitlement, applicable rules and integration. There is no universal mandatory six- or seven-stage onboarding.
- AI can guide intake and explain qualified results; deterministic HAIEC owners alone compute assurance, DAI and evidence dispositions.

**Engineering delegation constraint:** Another Devin session is actively modifying HAIEC/manufacturing work. This research session makes NO writes to HAIEC, MAA, or LogSense. Do not ask the other worker to blindly cherry-pick this document or overwrite a newer Main. The prospective Devin owner must check HEADs, branches, concurrent work, claim sources and already-merged commits before touching code.

## 1. Snapshot and confidence rules

| Repo | Source observed | What this establishes |
| --- | --- | --- |
| HAIEC production: [subodhkc/haiec-website](https://github.com/subodhkc/haiec-website) | Main 75ffb329cb75b35280456884299bfd16a9e7a0e8 | Source snapshot includes merged Sprint 24 coordinated demo playback, NOT PR 2220 fixes |
| HAIEC proposed P0: [PR 2220](https://github.com/subodhkc/haiec-website/pull/2220) | branch 32e54c58d9622fb26c5b035fcf471b1886109964; older base b2c1489773bd95b9e361714fbf7c808bbc866ffb | OPEN, not merged; source-level fixes staged; TypeScript passed, ESLint and new-violations failed |
| HAIEC diagram: [PR 2217](https://github.com/subodhkc/haiec-website/pull/2217) | a4dedc0aab9b096754382083271e38497ff894b0 | DRAFT; visual and claim-review work, not a P0 deployment dependency |
| Manufacturing: [subodhkc/manufacturing-ai-assurance-haiec](https://github.com/subodhkc/manufacturing-ai-assurance-haiec) | main 3a88b1bbc808e30b9fbabc76d7e5a3e850749b09 | Latest accepted synthetic approval / held control / two-action Station 217 storyboard |
| Common planning: [subodhkc/common-repo-drive](https://github.com/subodhkc/common-repo-drive) | baseline before this research eba51a6e147c0e3a857496872ac22e9b8d90d9f3 | Planning, not a source of production authorization or executable evidence |

**Evidence categories in this packet:** SOURCE_VERIFIED means code/document read at cited commit, but not production execution; EXTERNAL_SPEC_VERIFIED means vendor documentation, not HAIEC integration; STAGED_ONLY means pending branch; DEMO_AUTHORITATIVE means a versioned fictional scenario; NEEDS_RUNTIME_PROOF requires a real authorized test; DECISION is product direction only.

## 2. Product foundations to REUSE, not recreate

| Existing HAIEC canonical owner (Main) | Source-backed finding | Correct next step |
| --- | --- | --- |
| [MCP capability guide](https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/capability-guide.ts) + [tool registry](https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/tool-registry.ts) | Platform-level goal readiness and tool registry are separated from tenant, scope and evaluation readiness; registry owns actual tool IDs | Reuse for goal selection; never invent a single universal HAIEC tool or imply six job families equal six registered tools |
| [Guided assurance](https://github.com/subodhkc/haiec-website/blob/Main/lib/mcp/guided-assurance.ts) | Typed evidence need/resolution owners; does not change verdicts or silently close gaps | Reuse as next-action explanation, with no mandatory manifest |
| [System next action](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/system-next-action.ts) + [entitlement annotation](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/next-action-access.ts) | Source-determined next action and role/plan eligibility are distinct | Show one actionable next step and truthful access limitation; no second router |
| [Repository source preflight](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/evaluation-source-preflight.ts) | Differentiates verified source, conflict, missing consent, access state | Developer scan must not require runtime telemetry, IAM or compliance setup |
| [OTLP receiver](https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/adapters/otlp-receiver.ts) + [monitoring read model](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/monitoring-read-model.ts) | Structured receipt and tenant projection are present; receipt is not evaluation or committed effect | Add qualified source health, correlation and alert-to-action UX, not a new observability store |
| [Operating envelope](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/operating-envelope.ts) + [human deployment decision](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/deployment-decision.ts) | APPROVED envelope controls policy-authorized plane; DRAFT does not. Human deployment approval is distinct from policy and runtime execution | Render exact reviewer, scope, version, expiration and separately assessed consequence |
| [Guardrail decision persistence](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/guardrail-decision-persistence.ts) | Guardrail decision is recorded, but configured-only does not prove actual mediation | Surface configured vs evaluated vs observed enforced at a specific dispatch seam |
| [AgentCore preflight](https://github.com/subodhkc/haiec-website/blob/Main/lib/integrations/agentcore-gateway/preflight.ts) | Read-only tools/list plus safe status tool call can establish bounded gateway reachability; not policy enforcement | Build only a provider-specific policy/action evidence adapter after a safe target exists |
| [Effective AWS grant observer](https://github.com/subodhkc/haiec-website/blob/Main/lib/iam-grant/effective-grant-observation.ts) | Explicit PARTIAL_AWS_AUTHORITY_SOURCE; no canonical comprehensive EFFECTIVELY_GRANTED | Expose partial/unknown, never promote IAM identity-policy allow to effective authority |
| [Deployment decision endpoint](https://github.com/subodhkc/haiec-website/blob/Main/app/api/inventory/systems/%5Bid%5D/deployment-decisions/%5BdecisionId%5D/decide/route.ts) | Assigned reviewer, separation of duties, request-digest CAS, scoped decision, no runtime authorization | Keep privileged mutations UI/API governed unless a separate MCP authorization design is approved |
| [Control-test endpoint](https://github.com/subodhkc/haiec-website/blob/Main/app/api/control-test/evaluate/route.ts) | Specialized TM Forum/LogSense bundle, exact policy/control source, org scope; NOT a universal control run endpoint | Present per source, policy, entitlement and control type; do not overgeneralize its support |
| [U6 assurance packages](https://github.com/subodhkc/haiec-website/blob/Main/app/api/assurance/packages/route.ts) | Scoped exact evaluations; CURRENT vs HISTORICAL metadata intentionally distinct | Compose into user-friendly verification, not a new report engine |
| [Product surface registry](https://github.com/subodhkc/haiec-website/blob/Main/lib/dashboard/product-surface-registry.ts) | Navigation labels are explicitly not routing or entitlement authority | Reuse routes/deep links, no mass URL rewrites |

**Document aging rule:** Older “no OTLP receiver,” “no guardrail persistence,” “no authenticated decision,” or “no action monitoring” blanket statements are stale; assess exact producer/operation scopes rather than relitigating architecture.

## 3. The SIX bounded customer-journey acceptance contracts

Read-only code inspection supports entry-point existence and scope logic; it does NOT establish customer enrollment, installed sources, production enforcement, or successful browser execution.

### J1 — Developer / Discover and Evaluate

**Goal:** connect an authorized repository, inspect capabilities, select static assurance, see qualified findings and next step. **Owners:** MCP capability guide, system next action, evaluation-source preflight, canonical assurance run. **Minimum source:** verified authorized source repository/consent OR qualified supported local bundle. **Negative:** missing repo/consent/entitlement leads to specific next action, not fabricated safe PASS. **No requirement:** SSO, cloud IAM, runtime collector, annual compliance controls or universal manifest. **Proof still required:** actual target-user route and tool scope; available vs preview local distribution; rendered source limitation.

### J2 — Governance reviewer / Authorize

**Goal:** review exact, versioned deployment decision, human-approved operating envelope, scope and expiry, without conflating them with assurance. **Owners:** deployment-decision persistence/endpoint, operating-envelope persistence. **Negative:** cross-org, wrong reviewer, self-review, stale digest, pending draft, rejected request. **Proof still required:** current role/entitlement UI and notification-delivery truth. Fictional reviewer notifications in MAA are permitted visual demos only.

### J3 — AI operator / Monitor

**Goal:** onboard a supported telemetry source without prior source scan, see configured/received/qualified/current/stale and exact alert. **Owner:** OTLP receiver, binder, source readiness, monitoring read model. **Negative:** collector connected but silent; trace received without tool/effect identity; source stale; unsupported target. **Proof still required:** deploy/run state, source freshness, trace-to-action/effect correlation, channel latency/retention assumptions. Dashboard polling is neither data acquisition nor 24/7 observation proof.

### J4 — AI operator / Protect

**Goal:** authorized org-bound kill/recover or guard operation at known target, with confirmed dispatch denial or a clearly narrower control-state receipt. **Owners:** existing Kill Switch routes and execution guard. **Negative:** foreign system 404 with no control-event/notification write, viewer denial, missing target wiring, wrong mode, recover with no applied control. **Proof still required:** independent target invocation before/after, applied enforcement receipt, bypass test, time-to-effect evidence, idempotency/recovery state, key governance. A saved KILLED value does not independently prove a downstream action was blocked.

### J5 — Auditor / Control and Verify

**Goal:** inspect applicable executable control, qualified evaluation, exact source snapshot, U6 package/passport and historical status. **Owners:** profile resolver and applicable control evaluator; reports/U6; control-test specialized endpoint only where accepted bundle applies. **Negative:** register-only, non-applicable, no current evaluation, historical package, missing upstream provenance. **Proof still required:** target user's read authorization and accessible exact result; no generic certification or unsupported coverage language.

### J6 — Executive / Portfolio

**Goal:** consequence-first organization-only inventory, material changes, decision queue, source coverage and current evaluation-linked reports. **Owners:** product registry, org system APIs, decision/history, consequence delta, reporting. **Negative:** partial coverage, inconclusive score, unowned tenant, synthetic portfolio fixture, evaluation/current-source mismatch. **Proof still required:** intended role and plan, tenant isolation, clear system grouping and deep links without exposing source secrets.

**Expansion policy:** The 16-workflow UI/MCP/API matrix is the priority crosswalk; the 87 curated entries and 20 candidate modules are not exhaustive product readiness. Qualify additional surfaces only when the six journeys show a customer-level need.

## 4. PR 2220 — read-only security/release research (separate Devin task)

[PR 2220](https://github.com/subodhkc/haiec-website/pull/2220) is HAIEC production code; it is NOT a PR in common-repo-drive.

**Staged fixes** (NOT deployed): 17 legacy simulated AWS/Azure/GCP/Atlassian/multi-source entry points fail closed; trigger checks caller organization against Kill Switch system organization before operational RBAC, SoD, cooldown, state mutations and notifications; privileged key removed from localStorage, but API-key-in-browser design remains; public monitoring/protection claims qualified.

**CI observed on PR head 32e54c58:** TypeScript passed; entire-repo ESLint failed; new-violations gate failed on unused parameters introduced by fail-closed compatibility wrappers (30 new occurrences, though total baseline signature delta is 4 after other removals); focused Vitest and runtime org-bound smoke not verified; Vercel Preview Comments success does not prove functional deployment. Do NOT write new baseline entries to excuse the new findings.

**Additional source-inspection questions for the implementing owner** (not proven incidents):
1. Team-permission service check in trigger is caught and may fall back to legacy API-key role authorization on errors. Determine intended fail-closed behavior for privileged, user-bound operations; add one targeted negative test if this is not an approved break-glass policy. See [trigger route in PR branch](https://github.com/subodhkc/haiec-website/blob/fix/product-truth-workflow-audit-20261016/app/api/kill-switch/trigger/route.ts).
2. Trigger applies authenticated-org rate limiting before parsing and target ownership lookup. Its ownership guard precedes *operational mutations*, but not every auxiliary state operation (rate-limit accounting). Claims and regression assertions must reflect actual order.
3. Verify same-org request positive behavior, cross-org denial before audit/event/notification, and recover route invariants. The current PR's one tenant negative unit test does not constitute full runtime enforcement proof.
4. Resolve the persistent-privileged-key exposure strategy separately: in-memory key is a mitigation; server-side authenticated session + narrow control scope requires its own threat model and explicit release approval.
5. Examine race/ownership consistency before updating state (there are two system lookups); enforce exact tenant guard at mutation boundary as necessary.
6. Treat L1/L2 control state, L3 KILLED, notifications queued, notifications delivered and target dispatch denied as **different observed facts**. Do not report universal sub-second enforcement or customer-wide block coverage.

**Release order owned by the OTHER implementation session:** reconcile PR with current Main; fix the new lint regressions without enabling fabricated providers; focused Vitest + source/tenant checks + appropriate authorization smoke; actual CI/build; merge through normal workflow when green; confirm Vercel automatic production deployment. No Vercel Git identity changes requested. This research session never executes these steps.

## 5. AWS AgentCore policy and effect-proof feasibility — current external primary sources

**Decision: first targeted integration to RESEARCH / later pilot, not a broadly promised new module.**

Official AWS sources:
- [Gateway policy enforcement modes](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-enforcement-modes.html)
- [Policy-level LOG_ONLY vs ACTIVE and engine-level LOG_ONLY vs ENFORCE](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-test-a-policy.html)
- [Gateway API policy scope and invocation constraints](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/use-gateway-with-policy.html)
- [AgentCore policy IAM permissions](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-permissions.html)

**External facts and their implications:**
1. A Gateway policy engine in **LOG_ONLY** evaluates/logs, but does **not** enforce, even if an individual policy is **ACTIVE**. Engine **ENFORCE** plus an **ACTIVE** applicable policy is the enforceable combination. Per-policy LOG_ONLY remains shadow-only.
2. AWS currently describes policy checks for **MCP tools**; gateway prompts/resources are not subject to the same decision checks. A tool-only denial receipt is not evidence that all possible external, browser, computer-use, direct API or out-of-gateway effects were mediated.
3. The ability to **UpdateGateway** includes changing ENFORCE to LOG_ONLY or detaching policy entirely; producer facts need gateway configuration version, administrator changes and policy mode freshness.
4. GET/read source must include gateway identity, policy engine ARN, policy versions/modes, trusted agent/service principal, exact tool/action/resource attributes, correlation IDs and decision outcome. A CloudWatch trace is decision telemetry; independently distinguish attempted action, gateway rejection, dispatch and target committed/readback effects.
5. Verify least-privilege GetPolicyEngine and action authorization permissions with the customer before pilot. Do not collect provider secrets into public documentation.

**Pilot acceptance:** one permitted action at one supported MCP tool boundary; one explicit deny with gateway mode ENFORCE and ACTIVE policy, plus a target-side absence/denial receipt as technically supportable; one unknown/bypass or insufficient-evidence case that remains REVIEW. Include a policy LOG_ONLY counterexample that deliberately must NOT be labeled “blocked.” Scope the claim to this gateway-mediated action; no universal agent containment.

**HAIEC owns:** authority/effect semantics, coverage/frontier, source qualification, DAI/consequence, exact decision-to-enforcement and verification chain. **AWS owns:** gateway policy decision and mediation. **Reuse** AWS API/CloudWatch/X-Ray as transport; do not recreate Cedar, IAM, policy engine or the generic trace collector.

## 6. MCP authentication and telemetry — research constraints

**MCP official HTTP authorization (external spec):** [MCP 2025-11-25 authorization](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2025-11-25/basic/authorization.mdx) defines OAuth-based protected resource metadata / discovery behavior when HTTP authorization is supported. It is OPTIONAL for MCP implementations in that specification; do not mislabel HAIEC's currently scoped bearer-API-key endpoint as OAuth. **Proposed next:** client interoperability matrix (ChatGPT, Claude, IDE) and threat model before any OAuth transport wrapper, while preserving per-tool authorization and server tenant checks. OAuth identity alone does not establish approved agent delegation.

**OpenTelemetry / agent tool conventions:** [Agent and framework spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md), [GenAI client spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md), and [event conventions](https://opentelemetry.io/docs/specs/semconv/general/events/) define evolving schemas; some agent span conventions are explicitly Development. Adopt versioned adapters with compatibility tests, not unqualified general “automatically monitors all agents.” Normalize exact identity, trace/parent ID, tool call ID, resource, requested inputs (redacted), outcome, and target effect evidence; retain explicit UNKNOWN when effect witness is missing. Token consumption and response divergence are supplementary anomaly signals, **not** automatic proof of unauthorized action.

**Direct-action asymmetry:** browser/computer-use, APIs, A2A delegation, IDE/skills, and uninstrumented external endpoints may lie outside the MCP Gateway. Model them as separate source/mediation classes; every purportedly protected action path needs target-specific coverage evidence.

## 7. Manufacturing showcase boundary — release-independent presentation

**Approved documents:** [MAA master showcase contract](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/product-story/HAIEC-MASTER-SHOWCASE-CONTRACT.md), [accepted synthetic-control/two-action storyboard](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/product-story/SYNTHETIC-CONTROL-DEMO-ACCEPTANCE-AND-S25-STORYBOARD.md) and common [MAA full-platform alignment](MAA-HAIEC-FULL-PLATFORM-SHOWCASE-ALIGNMENT-2026-10-16.md).

**Not two competing products:** HAIEC is the engine and platform. MAA presents a manufacturing-shaped evidence package, real deterministic HAIEC computations on synthetic submitted inputs, and versioned simulated human/monitoring/enforcement scenes.

- **Track A (real engine, synthetic submitted evidence):** Station 217 earlier wrong-target transaction is detected by HAIEC, with overall REVIEW; the prior write was not prevented.
- **Track B (fictional governance scenario):** reviewer Quality Director, scoped request PENDING, three approved/two rejected/four pending dossiers across nine systems; message previews are not deliveries.
- **Track C (synthetic later action attempt):** illustrative dispatcher HELD a later proposed MES-write expansion while advisory work CONTINUES. That is legitimate demo behavior, not a live MES/PLC effect.
- Seven illustrative readiness facets can read PASSED only after the matching authored source field is present in a versioned scenario fixture. They are not verified live organization entitlement, identity, IAM or real target protection.
- Presentation: lead with HAIEC enterprise USP, three pillars and six selectable goals; use small Demo playback context and **one dedicated final methodology/source disclosure**, not warning badges on every card. Preserve 45 current/27 historical saved evaluations separately. Correct supporting NotebookLM/PDF visuals before displaying as supporting presentations; never recast drafts as new signed evaluation reports.
- MAA visual implementation can proceed in its own development session without waiting for PR 2220, because simulation is not a claim of production endpoint release. Avoid creating or rerunning 45 evaluations solely for UI storytelling.

## 8. Own / Reuse / Integrate / Defer — binding investment register

| Priority | Domain | Decision | Acceptance before investment |
| --- | --- | --- | --- |
| P0 | Canonical evidence, five planes, DAI and effect envelope | **OWN** | Source/provenance qualified; unknowns and unsupported dimensions preserved |
| P0 | Kill Switch tenant/caller and truth gate | **HARDEN existing** | PR 2220 focused acceptance, confirmed prod release and target-specific wording |
| P0 | Scoped availability projection | **COMPOSE existing** | Six journey examples are consistent across UI/MCP/API; no new rules engine |
| P1 | Human authorization + release governance | **EXPOSE existing** | Authenticated reviewer, SoD, exact approved scope + proof link, not implicit dispatch grant |
| P1 | Real action/effect integration | **INTEGRATE one** | AgentCore safe ENFORCE deny + allowed + unknown with independent receipts |
| P1 | Runtime monitoring / drift | **EXTEND existing read models** | Qualified source, freshness, action/effect correlation, explicit blind spots |
| P1 | LogSense | **USE AS EVIDENCE PRODUCER** | Signed/qualified input and HAIEC-owned disposition, not transferred verdict |
| P2 | MCP OAuth, Entra agent identity, modern OTel source adapters | **TRANSPORT / ADAPT** | Customer/connector-specific demand + authorization security tests |
| P2 | OSCAL, Sigstore or independent report consumers | **OPTIONAL INTEROPERABILITY** | Named customer use case and exact scope/provenance |
| DEFER | Own IAM, agent builder, full SIEM, generic AI grader, another policy/trace database, all-cloud rollout, massive control list | **DO NOT BUILD** | None until evidence of material unmet customer need |

## 9. What can be done BEFORE Devin without editing HAIEC

**Completed by this research packet:** compare shared plans with current source, flag staged vs deployed code, identify six representative goals, freeze manufacturing provenance, research primary AWS/MCP/OTel standards, and record extra risk questions.

**Remaining non-code owner decisions (not blockers to simulation work):**
1. Confirm that HAIEC production branch ownership is exclusive to the other Devin session and record which PRs it plans to merge; this prevents cherry-pick/rebase collisions.
2. Choose one exact pilot actor/target/tool/action for AgentCore, and identify who can authorize use of a non-production AWS tenant. No credentials belong in the planning repo.
3. Approve whether the first enterprise acceptance gate is a server-session controlled operational action or a deliberately limited API-key control whose residual risk is explicitly accepted. This cannot be silently resolved by lint changes.
4. Approve the six persona acceptance narratives and product wording; mark simulated materials as presentation, not actual operational receipts.
5. Decide the UI/website diagram PR 2217's desired SVGs when visual review is possible, after P0—not by accepting draft as ready.
6. Refresh evidence references when other session changes Main; no stale SHA can establish deployed coverage.

## 10. Bounded Devin handoff queue — after coordination

**A / Separate active security owner:** reconcile and close PR 2220 if not already completed; preserve fail-closed legacy behavior and tenant permissions. Narrow security tests and Vercel confirmation, never broad test explosion.

**B / Main platform product UX owner:** run the six journey acceptance and 16-row reconciliation to confirm eligible role, route, registered MCP name, actual scopes, underlying producer, evidence output and next user action. Only then implement read-only availability/readiness projections by composing canonical services. Do not create alternate persisted verdicts, new orchestrator or new mandatory intake.

**C / MAA ongoing development owner:** implement accepted Sprint 25 full-HAIEC showcase using existing synchronized scenarios and saved evaluations, versioned readiness fixtures, Station 217 two-action story and composite nine-system operations summary. Keep distinct historical evaluation, synthetic human story and simulated future hold. No new engine/rerun.

**D / Pilot owner after approved safe test target:** add narrowly scoped AgentCore source policy-mode/decision/effect adapter with an allowed, denied and unknown path. Report only coverage at the tested gateway dispatch boundary.

**Exit evidence before “customer ready”:** current Main SHA, specific CI quality gates, actual Vercel deployment identity where relevant, source replay of exact evaluation and current/historical report, an authorization/tenant negative case, at least one correct-org positive operation, target-side effect proof when claimed, current status matrix and no secrets in public planning artifacts.

**No writes to HAIEC or MAA were made from the research session creating this document.**