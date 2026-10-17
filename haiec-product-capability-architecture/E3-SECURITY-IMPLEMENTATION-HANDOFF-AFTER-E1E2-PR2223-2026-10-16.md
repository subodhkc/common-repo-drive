# E3 Security Implementation Handoff — After E1/E2 PR #2223

**Review/source snapshot:** HAIEC `Main` `18f845cee652772bfa6d774b1331175e6728e05d`, merged [PR #2223](https://github.com/subodhkc/haiec-website/pull/2223). Common repo earlier E1/E2 remediation `fe67b3e3069f48c885d4bd839545f39a95cc86c2`. **Status:** implementation assignment / source-based follow-up, **not security fixes delivered**. No HAIEC/Kestrel source changes or product tests were made by this research workstream.

## 1. Verified E1/E2 closure and evidence limits

- GitHub confirms PR #2223 **merged**, Main exact SHA above, Vercel commit status `SUCCESS` pointing to deployment `BJSPHs5UbwEDQxou9aGaQrdUsHHv`. GitHub CI Summary, Code Validation and ESLint New-Violations Gate `SUCCESS`; user-provided Devin log reports **50/50** targeted unit tests and local type/lint checks, **not independently rerun in this review**.
- The patch reads human deployment-decision status separately from frozen U5 disposition and exact U6 receipt, prevents machine API keys being labeled able to perform `humanOnly` steps, uses actual scope checks for machine-side source onboarding, qualifies comparison and telemetry freshness, and uses canonical guide tool IDs. These are **source-confirmed projections**, not independent authenticated customer/effect acceptance.
- All four E2 paths remain guidance or existing routes; local CLI remains preview; declaration intake is not automatic qualified source evidence. External Kestrel remote MCP account/screenshot testing remains **deferred** until E1–E7 and required release gates.

## 2. Next release lane — source/release truth first

[HAIEC PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) is **OPEN, NOT MERGED** at head `32e54c58d9622fb26c5b035fcf471b1886109964`, base `b2c1489773bd95b9e361714fbf7c808bbc866ffb`. GitHub compare says current Main is **nine commits ahead** of that base; compare-listed Main changes do **not** share exact filenames with the 17 PR #2220 paths, but this is filename-only, not semantic compatibility.

At inspected head PR #2220 had TypeScript **PASS**, ESLint **FAIL**, New-Violations **FAIL** and Vercel preview **BLOCKED**. A “preview comments” check succeeding does not mean preview deployed.

PR #2220 is a source-level P0 security/product-truth correction for **legacy simulated provider findings, tenant-bound privileged Kill Switch mutation, browser key persistence and unsupported universal protection/monitoring claims**. It is not a complete proof that real target protection is deployed.

**Implementer task:** refresh `Main`, fetch PR #2220 head, reconcile safely with merged #2222/#2223, resolve introduced/required lint gate failures, check source-level behavior of all staged safety changes and preserve non-overlap with manufacturing, control-test and E4. Merge through the authorized code-owner release flow only after required focused gates; verify the *actual* Vercel deployment for the merge. If blocked, report exact state rather than claiming deployed protection. Do not repair/reconnect Vercel Git identity.

## 3. E3 canonical security responsibilities (one authority source)

### Identity and authority boundary
- **Platform superadmin** (`users.role` through existing admin-auth), **organization owner/admin/member/viewer** through `organization_members`, **assigned decision reviewer**, **HAIEC scoped machine/MCP API key**, **external producer/target actor** must be unambiguously distinct.
- Server derives `organizationId`, verified AI System ownership, authorized identity, exact operation permissions. External `aiSystemId` and resource IDs are untrusted until bound to authenticated org; failed foreign-tenant lookup is indistinguishable from missing resource before side effects.
- Human approval is scoped to request/policy/source digest and assigned reviewer; a member's generic “non-viewer” status is not enough to claim the member *can decide* a specific deployment request.
- No arbitrary bearer key should inherit browser superadmin authority, and no API/MCP key should impersonate an assigned human reviewer; maintain existing canonical route guards as source of enforcement.
- For browser-sensitive actions, inspect session RBAC, CSRF/origin/step-up requirements, rate limits, replay/idempotency and audit with E3's canonical auth owners. Make only focused justified corrections, not an RBAC rewrite.

### Privileged control and effect boundary
- Distinguish `kill switch configured`, `policy requested`, `org/role authorized`, `native target integration verified`, `operation dispatched`, `target enforcement observed`, `receipt verified`.
- A scoped tenant Kill Switch state change or response from the HAIEC dashboard **is not** proof of remotely blocked actions. If no verified target enforcement seam exists, display `NOT_WIRED`/`NOT_VERIFIED` and retain evidence limitations.
- Preserve fail-closed handling of synthetic/legacy scanner paths; prevent fabricated “pass” results from entering customer assurance evaluation. Do not create an additional verdict engine.
- Do not let an optional tenant HAIEC add-on weaken mandatory provider security floors or elevate one customer's actions to platform-admin rights.

### New E1/E2 consumer handshake (source-confirmed residual UX issues)
- `lib/ai-inventory/goal-availability.ts::resolveWritePermission` currently treats **all non-viewer interactive roles** as `writeAuthorized` for a `humanOnly` step; underlying decision route checks assigned reviewer and requester/SoD. The **view is coarser than the real authority**. Require exact reviewer/operator eligibility *where it is available* from a server-authorized scoped read projection, or show `ELIGIBILITY_NOT_ESTABLISHED`/“open to request review” rather than “you can decide/trigger”. Avoid sharing another tenant's reviewer identity.
- `lib/ai-inventory/goal-availability-loader.ts::latestHumanDecisionStatus` currently selects the latest non-superseded decision across a system by `createdAt`. Multiple distinct deployment request keys may exist. Treat it as **“latest decision observed for this system”** not a universal current approved deployment, or bind the displayed approval to an exact decision/request key, version and source evaluation.
- Both GoalAvailabilityPanel and SourceOnboardingGuide render muted **clickable `Link`** elements for `permitted=false`. This is not an auth bypass—the actual route is still authoritative—but can be misleading to customers. Decide whether links should navigate to read-only context with explicit label, or be a truly disabled action without a click. Don't disable legitimate read-only navigation.
- `source-onboarding.ts` presents `SIGNAL_RECEIVED` with explicit limits and route access; E4 owns qualified source freshness and effect evidence, not E3.

## 4. Bounded implementation sequence and guardrails

**E3-A: reconcile the pending security PR** and release factual scanner/tenant/copy corrections. Use a coherent security PR or owner-approved replacement; do not silently cherry-pick incompatible branches.

**E3-B: role/resource/operator truth sweep** focused on consequential operations and their shared authorization paths. At minimum, audit (do not indiscriminately rewrite) the Kill Switch trigger/recover, assigned deployment-decision writes and source/credential privileged mutations. For each, produce a compact trust-boundary table: actor, org/system binding, role/scope, request/version authority, side effect, target receipt, failure/no-side-effect.

**E3-C: fix only evidenced gaps**, favoring narrow canonical boundary guards and consumer/read-only eligibility correction; do not add an alternate permissions cache/database or broad operation gateway if an owned server route already exists.

**E3-D: focused checks required for security changes**: foreign-org indistinguishable NOT_FOUND prior to side effect, viewer/read-only denial, inappropriate machine-key escalation denial, assigned reviewer/SoD/version/CAS checks, replay/idempotent semantics, simulated legacy provider fail-closed, key not persisted in browser, and target-enforcement claim remains unknown without receipt. Restrict test scope to touched modules with TypeScript and changed-file lint; no lengthy unrelated suites, but **never skip necessary security negative checks**.

**E3-E: merge/deploy/record**: latest `Main`, PR/CI and review policy, automatic Vercel deployment, exact deployed commit verification, update Common Repo Drive current decisions, audit/control findings, E3/E4 owner handoff and historical source caveats. Include a before/after correction table with code PR, observed security effect and unresolved boundaries.

**Separate E4 owner:** telemetry producer/auth, OTLP/monitoring source state/freshness, source correlation, action→target effect receipts and drift; publish an E3/E4 identity/binder envelope interface but do not move ingestion into the E3 PR.

**Non-targets:** KestrelVoice SaaS core hardening (its own independent repo/owner); AWS runtime build; manufacturing showreel, PR #2217 homepage visuals, pending #2141 control-test branch, full external Kestrel acceptance, new security products, broad refactoring, marketing claims without release proof.

## 5. Ready-to-run Devin prompt

**DEVIN — E3 HAIEC SECURITY TRUTH RELEASE / TENANT BOUNDARIES**

1. Read this document and these upstream mandatory references in `subodhkc/common-repo-drive/main`: `CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md`, `E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md`, `E3-E4-SEPARATE-SECURITY-TELEMETRY-OWNERSHIP-AND-E1-E2-HANDOFF-2026-10-16.md`, `E1-E2-POST-MERGE-CODE-REVIEW-AND-REMEDIATION-2026-10-16.md`. Review security P0 register and PR #2220 actual changed files.
2. Refresh HAIEC `Main`, merged #2222/#2223 and pending #2220; confirm active Devin ownership; report in 5–10 lines what already exists versus missing. No long planning document or parallel framework.
3. Bring PR #2220 into compatibility with current Main, correct CI-required lint/new-violations, preserve its tenant-bound Kill Switch, legacy-provider fail-closed and conservative copy. Do not merge until mandatory focused checks are green and real changed-file source semantics are reviewed.
4. Verify org/session/machine/reviewer authorization for the consequential boundary, exact resource/decision request binding, replay/side-effect order and browser credential storage. Only close genuine security gaps; preserve canonical owners. Where E1/E2 “permitted” is overbroad for a human-only step, correct the *projection semantics* using authorized existing reviewer/operator context, not a new role database.
5. Keep configured, granted, applied and **target-effect verified** statuses separate. No blanket “HAIEC protects every action” without live, scoped source evidence.
6. Use small targeted tests plus TypeScript/changed-file lint and pertinent code-level negative cases. No Kestrel tenant creation/test, no broad unrelated test campaign.
7. Create/reconcile owner-approved PR, merge to HAIEC `Main` when gates permit, verify Vercel automatic production deployment (do not reconnect Git identity), then update the common repo's handoff, status and audit/control registers with exact PR/commit, findings fixed, remaining risks, test results and deployed proof.
8. Deliver concise next **E4 telemetry integration handoff** and scope for E5, preserving separate code owners and explicit UNKNOWN. No E4 implementation in this run.

**Definition of E3 done:** source corrected, tenanted/privileged side-effect safety checks pass, relevant release/deployment verified, unsupported protection claims removed, canonical authority preserved, remaining remote enforcement limitations explicit; do not claim real Kestrel test success.

## 6. Privacy and sharing boundary

At last check `common-repo-drive` is public. These general security controls, owner boundaries and PR states are acceptable as planning notes. **Do not commit exploit-ready private source details, unremediated reproduction steps, credentials or customer evidence here until GitHub access is intentionally restricted and verified.** A private repo is not a secret manager.

**No HAIEC production code changed by this review; no external Kestrel acceptance performed.**

---

## E3 implementation record — PR #2220 reconciled and merged (2026-10-17)

**`DEPLOYED_VERIFIED`.** PR [#2220](https://github.com/subodhkc/haiec-website/pull/2220) (`fix/product-truth-workflow-audit-20261016`) was reconciled in place — `Main` merged into the PR branch cleanly (zero filename overlap with #2222/#2223) — plus focused corrections, merged at `c3de967e62615c3bf669527a1ec79e2d90e2c814` (2026-10-17). Vercel production deployment `DPLkCjVSfFyjgBKkNGigFFm2jFXU` commit status **SUCCESS**.

### What was corrected (before → after)

| Boundary | Before | After |
|---|---|---|
| Kill Switch trigger tenant check | `POST /api/kill-switch/trigger` verified the key but performed RBAC/SoD/cooldown/writes on a `kill_switch_systems` row belonging to another org | Org binding checked before any side effect; foreign system returns the same 404 as a missing one (`recover` already had this check on Main — verified, no change needed) |
| Browser credential storage | Dashboard persisted the privileged kill-switch API key in `localStorage` | Key held in component memory only; legacy stored keys are purged on load; copy says reloading clears it |
| Legacy simulated providers | `aws-scanner`, `azure-scanner`, `gcp-scanner`, `jira-confluence-scanner`, `multi-source-orchestrator` returned fabricated affirmative compliance controls | All exports fail closed with `LEGACY_SIMULATED_PROVIDER_DISABLED`; typed interfaces retained for compatibility; zero callers outside `lib/integrations/` (verified by grep) |
| Human-only step eligibility | `resolveWritePermission` treated any non-viewer session as `writeAuthorized` for assigned-reviewer / privileged-operator steps | `humanRestricted` — session members/owners see the surface (READY_TO_OPEN) but the action is `permitted:false` with an explicit reviewer/operator reason; eligibility stays request-scoped at the owning route |
| Non-permitted CTAs | `permitted:false` steps rendered as muted but clickable action links | Lock icon + reason + separate "View details" read-only link — mutation no longer presented as executable |
| `latestHumanDecisionStatus` | Could read as universal current approval | Documented as latest-observed decision across request keys; never a universal deployment approval |
| Marketing/product claims | "5-layer emergency shutdown", "<1 second", "EU AI Act Article 14 compliant", "instant deactivation" | Scoped execution-control language; integration-dependent; configured ≠ applied ≠ observed; monitoring page disclaimer added |

### Verified unchanged (no gaps found — source-checked)

- Decision routes (`deployment-decisions/[decisionId]/decide|assign|revoke`) already delegate to `deployment-decision-persistence` with `requireOrganizationAccess` + `verifyAISystemOrgBinding`; the owner enforces assigned reviewer, SoD, request digest, CAS transitions, supersession.
- Trigger-route ordering after patch: auth → rate limit → body parse → **tenant check** → RBAC → SoD → L3-manual guard → cooldown → idempotency → writes/audit/notifications.
- Other kill-switch routes (`systems`, `rules`, `audit`, `metrics`) already check `organizationId` binding.

### Validation

- `vitest run` on 4 focused suites — **72/72 pass** (goal-availability 37, source-onboarding 17, provider quarantine 17, kill-switch cross-tenant 1).
- `tsc --noEmit` clean; ESLint clean on all changed files.
- CI on reconciled #2220: TypeScript **PASS**, **ESLint New-Violations Gate PASS** (previously failing — the 58 introduced violations are cleared); repo-baseline ESLint fail + Vercel preview block are the same pre-existing conditions as #2221–#2223.

### Remaining limitations

- No live end-to-end privileged-operation test against deployed infra — source + unit-level only.
- Kill Switch "actual blocking" still requires verified target integration + operational receipt — the UI/API now say so; no universal enforcement claim.
- Team-RBAC branch in the trigger route is unreachable for API keys (`VerifiedApiKey` has no `userId`) — noted in code; role/scope fallback still gates.
- E4 owns producer freshness/lag/health and action→effect receipts — untouched.
