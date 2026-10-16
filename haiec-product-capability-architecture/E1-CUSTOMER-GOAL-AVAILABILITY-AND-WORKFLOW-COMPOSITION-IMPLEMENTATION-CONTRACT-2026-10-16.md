# E1 — Customer Goal Availability and Workflow Composition: Implementation Contract

**As-of:** 2026-10-16. **Status:** Implementation-ready research/architecture contract; NOT SHIPPED.  
**HAIEC source read:** `Main` `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`.  
**Repository/ownership:** This document is maintained in `subodhkc/common-repo-drive` only. Separate Devin session owns changes to `subodhkc/haiec-website`; avoid colliding with ongoing manufacturing and P0 security work.  
**Source basis:** [E0/R1 reconciliation](E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md) and [16-workflow owner matrix](E0-R1-16-WORKFLOW-CANONICAL-OWNER-SOURCE-RECONCILIATION-2026-10-16.csv).

## 1. Desired customer outcome

HAIEC should let each user start **one independently useful job**, discover exactly what is currently available for **their authenticated tenant and selected AI System**, see one **specific** next safe step when blocked, and reach the existing canonical route/tool/report. It should never force a broad compliance questionnaire, AWS IAM, runtime collector, static scan, subscription upgrade, or universal declarative manifest for unrelated jobs.

**Customer-language overview only:** Understand / Assure / Govern & Operate; selectable Discover / Evaluate / Authorize / Monitor / Protect / Verify. These six categories are **not** the schema IDs, a mandatory ordered workflow, six new MCP tools, or a new engine.

## 2. Existing owners, with precise separation

| Existing source owner on Main | What it already owns | E1 treatment |
| --- | --- | --- |
| `lib/mcp/tool-registry.ts` importing `lib/mcp/server.ts` and `lib/mcp/ide-tools.ts` | Canonical registered tool definitions and required scopes; **58 source-declared `haiec_*` definitions** observed, not proof that all are deployed | **READ** exact tool IDs; never build a second tool list |
| `lib/mcp/capability-guide.ts` | **13 canonical goal IDs**, descriptions, platform-level readiness, tool references, required scopes, channel support, notes, limitations, recommended action | **READ** and compose tenant-specific access/intent; do not move registry ownership to UI |
| `lib/ai-inventory/system-next-action.ts` | One **system-lifecycle** deterministic next action over 10 staged states and its canonical CTA | **PRESERVE** exact global workspace nextAction; avoid reordering or replacing it with goal navigation |
| `lib/ai-inventory/next-action-access.ts` | Entitlement annotation for that system lifecycle CTA, separate from semantic reason | **READ** for existing tier restrictions; missing tier never substitutes a different workflow |
| `lib/ai-inventory/evaluation-source-preflight.ts` | Tenant-scoped source identity/consent/branch availability for a static evaluation | E1 consumes its output; **E2** owns customer onboarding presentation of remediation |
| `lib/evidence/telemetry-readiness.ts` / `lib/assurance/monitoring-read-model.ts` | Configured/binder/signal/qualified monitoring read projection | **READ** state; E4 owns producer/freshness enhancement |
| `lib/assurance/deployment-governance-projection.ts`, `lib/assurance/deployment-decision-persistence.ts` | Actual human decisions and policy/evaluation separation | **READ ONLY** scoped reason/status; no direct unrestricted mutating MCP approval |
| `lib/assurance/evaluation-index.ts`, `lib/assurance/consequence-delta-access.ts`, U6 package routes | Evaluation history, authorized comparisons and verifiable output | **READ** only what the same user's scopes authorize |
| `lib/dashboard/product-surface-registry.ts` | Labels/search/menu presentation; **not** auth or route registration | **REUSE** display words/hrefs only |
| `lib/org-context.ts`, `lib/api-auth.ts`, `lib/auth/role-contract.ts` | Server-owned org/role, API key and scope truth | **CONSUME** effective rights; E3 owns security changes |

**Goal identifiers from existing guide, not a new list:** `understand_haiec`; `discover_systems`; `analyze_source_security`; `examine_action_authority`; `review_findings`; `check_controls`; `configure_telemetry`; `investigate_incident`; `runtime_testing`; `compare_evaluations`; `reports_receipts`; `governance_assessment`; `integrations_coverage`.

## 3. One **ephemeral read projection** (candidate view contract)

**Implementation instruction:** preferably compose these fields in a non-persisted server-side read selector attached to existing system workspace and MCP guide, *not* a new table, registry, API response that changes old contracts silently, entitlement calculator, or decision engine. Final filenames/exports are for the Devin owner to choose after searching current Main.

Proposed frontend/customer projection:

```typescript
// Design sketch only; not committed or compiled code.
type CustomerGoalAvailability = {
  goalId: string;                   // canonical CAPABILITY_GOALS[id]
  selectedSystemId: string | null;  // canonical owned system ID, never inferred by name
  platformReadiness: string;        // existing capability guide value verbatim
  transport: {
    uiHref: string | null;          // existing verified destination
    registeredMcpTools: string[];   // subset from canonical tool registry
    apiRouteFamily: string[];       // existing endpoint refs, not entitlements
  };
  callerEligibility: {
    tenantBound: boolean;           // from authenticated org/system ownership
    sessionOrKeyAuthorized: boolean;
    roleOrScopeReasons: string[];
    entitlementStatus: string;     // existing tier/plan authority, not hardcoded pricing
  };
  evidenceReadiness: {
    sourceStatus: string;           // qualified source owner's state
    neededSourceFamilies: string[];
    evaluationStatus: string | null;
    producerStatus: string | null;
  };
  operatingTruth: {
    approvalStatus: string | null;
    enforcementCoverage: string | null;
    targetEffectStatus: string | null;
  };
  customerState:
    | 'READY_TO_OPEN'
    | 'ACTION_REQUIRED'
    | 'NOT_ENTITLED'
    | 'NOT_AUTHORIZED'
    | 'NOT_CONNECTED'
    | 'SOURCE_UNAVAILABLE'
    | 'NOT_SUPPORTED'
    | 'UNKNOWN';
  nextAction: {
    label: string;
    destination: string | null;
    reason: string;
    channel: 'UI' | 'MCP' | 'LOCAL_CUSTOMER_STEP';
    approvalRequired: boolean;
  } | null;
  limitations: string[];
  sourceBasis: string[];           // refs/versions; no hidden invented completeness
};
```

**IMPORTANT:** `customerState` is a proposed UI view vocabulary only, not a persisted evidence/verdict/status enum. Derive it from **canonical** statuses with explicit reason codes. The view must not replace `GoalReadiness`, `NextActionStage`, `EvaluationSourceStatus`, `TelemetryReadinessState`, or U5/guardrail dispositions. If no source supports a field, use `null`/`UNKNOWN`, not a fabricated negative or positive.

**No global sequential gate:** Each goal has its own minimum prerequisites. Do not imply that an incomplete `CONNECT` system lifecycle step blocks read-only capability discovery or that absent runtime telemetry blocks a consented static source evaluation.

## 4. Status and precedence: readable, exact, no accidental unlock

Apply these independently, not as one flattened decision:
1. **Identity/access boundary**: no authenticated org / unauthorized system → existing 401/403/404 behavior; do not reveal system existence across tenants. Never use caller-supplied `organizationId` as authorization. A goal card may show public product information but not tenant facts.
2. **Platform truth**: `NOT_SUPPORTED`/HELD/REGISTER_ONLY/unreleased distribution → show unsupported or not available even if an apparent route exists.
3. **Operation-level caller scope and role**: list/scope lookups must use actual per-tool key scope and session RBAC, not only sidebar visibility. A key missing `source:create` cannot be presented as able to bind a repository.
4. **Entitlement**: annotate plan limitation on the requested canonical destination; no replacement CTA that changes customer intent. Billing/upgrade is a **separate** user-consented choice.
5. **Selected system/producer readiness**: system, assets, consent, branch, binder, evaluation, rule and source health matter **only where applicable to this goal**.
6. **Approval and enforcement**: policy APPROVED, human APPROVED_SCOPED, configured guard and target-denial receipt are different facts. If not wired, show `NOT_WIRED`/limitations for Protect; never “active protection” based solely on a configured dashboard.
7. **Next step**: prefer a customer-actionable, scope-correct, canonical destination and explanation; if no safe supported step is known, show review/contact rather than constructing an unregistered tool.

System-level `computeNextAction` continues to own the workspace lifecycle CTA and its one destination; goal-specific `nextAction` is *navigation/help for the selected independent goal*, not a competing stored canonical next action. Always label which kind the customer is seeing.

## 5. Concrete per-goal journey examples and acceptance contracts

| Customer intent | Should be available with | Must not force | Blocked, unavailable or unknown case |
| --- | --- | --- | --- |
| Developer: **Discover** | Read scope and actual tenant systems/source/agent trace | Repo scan, cloud IAM, compliance pack | No systems → create/register source with approved role; don't invent registered agents |
| Developer: **Evaluate source** | GitHub App authorized/bound/verified source + exact branch/consent OR supported, integrity-valid local scan evidence | Runtime collector, source IAM, annual regulation wizard | Consent missing or branch unresolved → truthful next step; a local scan alone is not U5 |
| Security: **Examine authority** | Exact system and qualified plane/evaluation facts | All five evidence planes complete | `EFFECTIVELY_GRANTED` missing → unknown; source path not actual action |
| Auditor: **Check controls** | Applicable executable control and qualified governed evaluation | Mandatory repo scan for independent evidence input | REGISTER_ONLY or no evaluation → `NOT_ASSESSED`, no PASS |
| SRE: **Monitor** | Authorized telemetry source/binder + qualified received facts | Static scan or human deployment approval first | Binder configured with no signal → configured, not live monitored |
| Governance: **Authorize** | Exact owned system, assigned eligible reviewer, scoped request and policy | Agent run/external enforcement proof for recording a human decision | Approver not assigned, self-approval, stale request → deny/hold; human approval != dispatch |
| Operations: **Protect** | Exact scoped authorized guard and proven native target integration | Mock scenario or all-cloud coverage | Configured kill state but no target seam → NOT_VERIFIED, no guaranteed blocked action |
| Auditor: **Verify** | Exact historical/current U5 evaluation and U6 receipt | Scan run if existing qualified evaluation present | Revoked/missing receipt or historical-only → explicit basis, no current certification |

For the other 8 workflow rows, use [16-workflow CSV](E0-R1-16-WORKFLOW-CANONICAL-OWNER-SOURCE-RECONCILIATION-2026-10-16.csv). They are all exact source route/registry matches at this inspected revision; eligibility and execution remain *unverified*.

## 6. Customer UX wire contract (minimal change)

- **Entry:** selectable goal chips/tiles for six independent jobs within three narrative pillars (reuse existing dashboard shell and product surface vocabulary). Do not duplicate demo-specific homepage changes.
- **Goal card:** “Available with your access”, “Needs source”, “Requires scope/plan”, “Not supported”, “Requires target integration”, “Unknown”, each with **why**, **what it would establish**, **single next action**, and **evidence limitations**.
- **System picker:** exact system ID and environment, explicit choice if multiple, never auto-bind by display name.
- **Context sidebar:** shows `SOURCE`, `AUTHORITY`, `ASSURANCE`, `GOVERNANCE`, `RUNTIME`, `VERIFICATION` as evidence panels where supported; not six prerequisites.
- **No coercive onboarding:** user can leave or skip optional enrichment. Empty UI is not “0 gaps” or “0 issues”.
- **Same words across UI and MCP:** `haiec_capability_guide` and `haiec_preflight` describe same facts, but their existing payload types remain backward compatible.
- **Audit:** navigating/viewing is read-only; creating a system, binding a source, setting up a binder or evaluating must use the existing server operation and explicit user approval.

## 7. Scope boundaries and code-owner assignment

**E1 implementation owner (product/workflow, exclusive):** compose read-only goal availability from canonical services and reuse existing UI shell. Suggested inspection files: `lib/mcp/capability-guide.ts`, `lib/mcp/tool-registry.ts`, `lib/ai-inventory/system-next-action.ts`, `lib/ai-inventory/next-action-access.ts`, `lib/dashboard/product-surface-registry.ts`, `lib/ai-inventory/system-workspace.ts`, relevant `app/(workspace)` screens. **No touching** security authorization implementation, raw ingest schemas, historic evaluation persistence, or active manufacturing scenario playback.

**E2 owner** takes over source connection wizard/user consent and source preflight messaging (separate files, below). **E3 owner** controls `lib/org-context.ts`, `lib/api-auth.ts`, session/role/security, Kill Switch/PR #2220. **E4 owner** controls OTLP producer/adapter/monitor source pipeline. Interface boundaries are in [E3/E4 owner handoff](E3-E4-OWNER-BOUNDARIES-AND-INTERFACES-2026-10-16.md).

**Active PR freeze:** do not modify `app/page.tsx` while draft PR #2217 and merged #2219 homepage changes must be reconciled; do not absorb PR #2220's scanner/kill-switch/marketing files into E1. No separate clone-to-Main merge without owner's consent.

## 8. Acceptance after implementation (not testing during this research task)

**Source/contract review first:** correct 13 goal IDs and 58 source tool definitions, derived per-tool scopes, no new persisted permission readiness; exact 16 UI/API route binding, tenant authorization wrapper reuse, no invented data; no U5/authority status inflation.

**Focused implementation checks** (when Devin ships E1): no source, insufficient key scope, unrelated goal independent access, absent evaluation, expired receipt, multiple-system selection, viewer versus operator role, HELD producer, register-only control, historical versus current; avoid huge matrix-wide suites until code is stable.

**Later black-box T1** after E1–E7 and deployed gates: real remote MCP customer read/UI flow from outside HAIEC source using Kestrel tenant, redacted step logs and screenshots. Explicitly postponed; see [enhancement-first test plan](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md).

**Deliverables:** one read-only availability projection; minimal relevant screen wiring; consistent contextual next-action copy; source-anchored capabilities/transport matrix updated; **no new engine**; versions and limits accurate.
