# E1/E2 Handoff with Separate E3 Security and E4 Telemetry Ownership

**Date:** 2026-10-16 | **Status:** Implementation boundary/assignment proposal; NO changes to HAIEC production source, tests, deployments or active Devin branches from this session.  
**Verified HAIEC source:** `Main` `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`. Refresh before work; do not treat GitHub PR authors as named implementation owners.  
**Read first:** [E0/R1 audit](E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md), [E1 contract](E1-CUSTOMER-GOAL-AVAILABILITY-AND-WORKFLOW-COMPOSITION-IMPLEMENTATION-CONTRACT-2026-10-16.md), [E2 contract](E2-LOW-FRICTION-SOURCE-ONBOARDING-AND-EVIDENCE-QUALIFICATION-IMPLEMENTATION-CONTRACT-2026-10-16.md).

## 1. Recommended execution order

1. **Existing active Devin owner reviews E1/E2 contracts** and checks current Main, open PRs and any active file reservations before committing. HAIEC Main changes automatically trigger Vercel on merge; owner must verify automatic deployment when later merging, not assume CI alone is prod.
2. **E1 (first engineering workstream):** read-only availability composition and selective UI wiring. Keep server-side authorization authoritative and no new goals, tables or assessment rules.
3. **E2 (next engineering workstream):** coherent source-choice flow and exact GitHub/source/branch/consent prompts. Reuse existing source verification and MCP methods, no untrusted screenshots as qualified code facts.
4. **E3 (parallel but separately owned):** privileged authorization/tenant protection and PR #2220 security remediation. Security owner approves any shared auth helper/interface changes used by E1/E2.
5. **E4 (parallel but separately owned):** source health, OTLP/event metadata, freshness and action/effect correlation. Telemetry owner approves any evidence readiness contract shape consumed by E1/E2.
6. **E5–E7** integrate verified control state, unified report/UX and remote MCP interoperability after E1/E2 interfaces stabilize.
7. **Only after enhancements:** Devin creates isolated KestrelVoice test tenant, dedicated HAIEC test org, independent remote MCP harness **outside HAIEC repo**, records every material step, screenshot and redacted operation log; generates illustrated final customer report. This is **not** current work.

**Avoid parallel edits to the same file**. An active manufacturing Devin session has been working on demo files; shared `app/page.tsx`, `lib/demo/scenario-playback.ts`, demo fixture and governance loop components should not be treated as E1/E2 owner files.

## 2. Four ownership lanes

| Lane | Exclusive source ownership (proposed; must be confirmed by implementation owner) | Publishes to other lanes | Forbidden side effects |
| --- | --- | --- | --- |
| **E1 Product/Workflow** | Goal-availability read projection and relevant customer workspace component; consumes `lib/mcp/capability-guide.ts`, tool registry, system nextAction and product surface words without superseding them | `goalId, systemId, callerContext, readinessReasons, scope-correct next action, limitations` as non-persisted read-only view | DB/schema auth rewrite; modifying canonical U5 verdict; changing MCP registry names or manufacturing playback |
| **E2 Developer Onboarding** | Source-choice views, bounded source preflight wiring and tenant-consented repository/local evidence UX | Exact `sourceAssetId, connectionState, identityState, branch, consentStatus, sourceReadiness, source limitations` sourced from canonical preflight | Arbitrary browser token, unverified repo authorization, auto `main` default, new evidence store, upgrading declared source to observed effect |
| **E3 Security/Auth** | `lib/org-context.ts`, `lib/api-auth.ts`, `lib/auth/*`, org/team access, session/CSRF, privileged Kill Switch, remaining [PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) P0 branch work | Server-authenticated org/system binding, exact role/scopes, user vs machine principal and privileged operation authority | Delegating permission to frontend, blanket admin key in browser, introducing another IAM/permission engine |
| **E4 Evidence/Telemetry** | `lib/evidence/adapters/otlp-receiver.ts`, `streaming-telemetry-collector.ts`, `telemetry-readiness.ts`, environment binders, `lib/assurance/monitoring-read-model.ts` and producer adapters | Qualified source/collector status, last seen/freshness, source authority role, bounded observations and actual target receipts where collected | Separate SIEM/store, treating a collector heartbeat as complete coverage, re-evaluating U5 implicitly |

Each lane has its **own immutable truth owner**. E1 and E2 **consume** auth and evidence, they do not create independent security/telemetry policies. E3 and E4 should publish narrow typed outputs and preserve existing response compatibility.

## 3. Non-overlap file reservations and dependency handshake

### E1 — reserved
- Preferred new **read-only composition** beside existing system workspace; inspect `lib/mcp/capability-guide.ts`, `lib/mcp/tool-registry.ts`, `lib/ai-inventory/system-next-action.ts`, `lib/ai-inventory/next-action-access.ts`, `lib/ai-inventory/system-workspace.ts`.
- Only the workspace/goal UI components necessary to display availability, exact source-based blocker and single action. Do not alter all 613 pages or unrelated navigation.

### E2 — reserved
- `lib/ai-inventory/evaluation-source-preflight.ts` (prefer read-only consumption), `evaluation-source-selection.ts`, `connection-choices.ts`, `app/api/inventory/systems/[id]/evaluation-sources/route.ts`, guided UI, GitHub App onboarding guidance.
- Do not move authorization or evidence readiness into a new shared utility that bypasses E3 or E4.

### E3 — reserved
- Source-only review first of open #2220 against new Main. Fail-closed legacy provider entries, org ownership before privileged Kill Switch mutations and proper operator-key/session design.
- **At last observed PR head** `32e54c58`: TypeScript check pass, ESLint fail, new-violations gate fail, preview-comments pass; not merged. This P0 release lane has separate owner and is a prerequisite to public protection claims.
- HTTP state mutation must reverify org/system and role on the server, protect against session/CSRF issues, distinguish machine-scoped MCP API key from interactive user authority. Do not adopt browser key storage as long-term privileged login.

### E4 — reserved
- Existing telemetry sources and read model must distinguish: configured vs received vs qualified vs evaluated vs actually target-confirmed; normalize action IDs, issuer, tenant/agent/tool/resource and event times where sources permit.
- First Kestrel adapter plan uses metadata from voice, chat, MCP, workflow, appointment/CRM, SMS and external callbacks. A producer's own “success” field is not independently observed committed effect.
- Do not need to deploy AWS as a prerequisite: Kestrel is on Vercel/Modal/Supabase, and the eventual real test must be via remote HAIEC MCP and authorized Kestrel test tenant.
- E4 may not edit Kestrel production source from this research session; later separate Kestrel code owner implements mandatory platform guard/telemetry producers.

### Shared-file coordination rule

If two workstreams need an interface on the same existing route/service, choose **one designated owner**, have the other submit exact requested fields with provenance, then make a single backward-compatible interface extension. Never merge parallel function rewrites. Before each PR, verify HEAD and owner reservation; old PRs #2217/#2220/#2141 and merged manufacturing work are separate concurrent lanes.

## 4. Thin cross-owner interface contract

**E3 → E1/E2:** an authorized caller context derived from server session or verified MCP key:
```text
caller.tenantOrgId [server]
caller.subjectType = human | machine
caller.userOrKeyId [server]
caller.role [server]
caller.effectiveScopes [server]
target.aiSystemId [server-verified owner match]
operation.action [canonical route/tool, NOT LLM-selected]
permissionResult = eligible | not_authorized | not_found
```
Avoid sending role+scope details for foreign systems; return the existing indistinguishable not-found response.

**E2 → E1:** per-selected-source read projection derived from `evaluation-source-preflight.ts`, not a new persisted status:
```text
source.assetId / source.type
connectionState and identityState [independent]
repositoryUrl and verified default branch [when applicable]
source.status = READY | CONSENT_REQUIRED | CONSENT_TAMPERED |
                BRANCH_REQUIRED | SOURCE_NOT_VERIFIED |
                SOURCE_CONFLICTED | SOURCE_UNAVAILABLE
source.reason, consentStatus, verified trust reference
```

**E4 → E1:** qualified observation freshness from current binder/evidence read projections:
```text
sourceSystem, aiSystemId, binderId, producerIdentity/version
configured, signalReceived, lastSeen, freshnessWindow
qualifiedEvidenceRefs, quarantinedOrInvalidCount
effectWitnessRefs [if any], limitations
```
Never produce `SAFE`, `BLOCKED` or `PASS` from telemetry readiness alone.

**E1 → UI/MCP:** non-persisted read model combining the above with `CAPABILITY_GOALS`, registered tools, existing lifecycle nextAction and entitlement annotation. Names/scopes are taken verbatim from canonical owners. E1 does not grant permissions or mark evidence complete.

## 5. Owner handoff gates (later implementation)

**E1 exit:** six selectable customer jobs map to the 13 existing guide goals and the 16 priority flows; each independently displays scoped readiness, supported route, exact blocker and next action. Current/source/evaluated distinctions remain honest.

**E2 exit:** GitHub App listing/binding/verification/consent/branch behavior works via existing paths; optional local evidence correctly marked PREVIEW if unreleased; users with only telemetry/artifacts are not forced through repo onboarding. Missing access is explained instead of auto-granted.

**E3 exit:** high-risk tenant and privileged guards are implemented and narrowly validated by its own owner; PR #2220 release gate and exact deployment status are documented. A check-run badge is not deployment proof.

**E4 exit:** existing OTLP/binder/monitoring paths provide traceable source age, identity/correlation and non-inflated receipt/effect semantics, with honest missing-source behavior.

**No broad Kestrel acceptance tests now.** The first user-facing post-enhancement run is fully specified in [independent Kestrel MCP acceptance plan](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md). It will require tenant credentials kept in a secure secret manager, isolated external workspace, redacted operation journal and screenshots for the final report.

## 6. Governance and confidentiality

The common planning repository was **public** when verified. These interfaces and owner decisions are appropriate public-facing planning; do **not** put private vulnerability exploit details, customer secrets, provider tokens, source credential values, or unredacted test captures into it. If internal confidential research should be housed in this repo, GitHub visibility and authorized readers must first be adjusted and reverified. A private repo still is not a secret manager.

**This document does not change the active Devin assignments. It proposes non-overlapping ownership lanes that the user and active Devin owners must confirm before changes to HAIEC Main.**
