# E6 — Unified Enterprise AI Estate, System Assurance Case & Agent Experience — Implementation Record

**Date:** 2026-10-20
**PR:** [#2227](https://github.com/subodhkc/haiec-website/pull/2227)
**Branch:** `feat/e6-unified-estate-experience` @ `330760276`
**Merge SHA:** `14b6b1912` (`Main`)
**Status:** `DEPLOYED_VERIFIED` (Vercel deployment `DYAJKChUaoWFW9GMrSdckufeY6Cr` — commit status SUCCESS on merge SHA)

## Scope decision

E6 was implemented as **composition over existing canonical owners** — no new assurance engine, compliance engine, monitoring engine, policy evaluator, evidence store, agent registry, or report generator was introduced.

## Narrow E5.1 read-model corrections (precondition)

Independent inspection before exposing positive E5.1 statuses found three confirmed semantic gaps, fixed in the canonical owner only:

1. `rowOutcomeVerdict` defaulted unrecognized/missing boundary outcomes to `APPLIED` — now requires explicit applied/blocked outcome verbs.
2. Adapter eligibility skipped the recognized-policy digest check when the adapter reported none — a verified-but-unbound adapter could read as dispatch-eligible. Capability (`ADAPTER_VERIFIED`) is now decoupled from eligibility (verified adapter + approved policy + exact version/digest binding + non-fixture).
3. Operation-unspecified queries skipped the `mediatedOperations()` check — an adapter must expose real mediated-operation capability.

`tests/unit/enforcement-read-model.test.ts` updated (29 cases) for explicit outcome verbs and policy-binding requirements.

## Implemented

### Organization AI Estate
- `lib/ai-inventory/estate-summary.ts` — `assembleEstateSummary(organizationId)`: org-scoped read-only projection composing `ai_systems` (env/provider/production denominators), `assembleEstateDiff` (discovery-channel + declared/found reconciliation), `assurance_evaluations` (latest completed disposition per system — ALLOW/REVIEW/BLOCK counts, never averaged), `listDecisionsForOrg` (latest-version-per-requestKey lifecycle counts; superseded never double-counts), `getTenantMonitoringProjection` (E4 source freshness + persisted findings), `loadEnforcementPortfolio` (E5.1 seam states), `aggregateFrameworkMappings` + `getVersionedFrameworkMappingSummary` (cataloged releases vs observed mapping edges — cataloged/mapped ≠ assessed).
- Endpoints: `GET /api/inventory/estate-summary` (NextAuth session + `requireOrganizationAccess`) and `GET /api/v1/estate` (Bearer API key, `system:read`, rate-limited) — same assembler, tenant resolved server-side in both paths.
- `EstateSummaryBand` on `/dashboard/ai-inventory`; decision-oriented **Needs attention** strip on the Command Center. Failed backing reads set `readDegraded` and render as UNKNOWN, never confident zeros. Attention queue items carry denominators + deep links to existing routes.
- Attention kinds: `PENDING_DECISION`, `SYSTEM_NOT_EVALUATED`, `EVALUATION_REVIEW_OR_BLOCK`, `SOURCE_STALE`, `SOURCE_NO_SIGNAL`, `ENFORCEMENT_NOT_ESTABLISHED`, `UNDECLARED_DISCOVERY`.

### Per-system Assurance Case
- `AssuranceCasePanel` added to `SystemWorkspace` overview — renders the eight E5.1 operating facts **independently** from `/api/inventory/systems/[id]/governance`: approved operating policy, execution authority, human decision, native seam (`ADAPTER_VERIFIED`/`SEAM_DECLARED`/`ORG_SCOPED_ONLY`/none), dispatch acknowledgement, guardrail probe evidence (separate plane), target-applied outcome, independently verified effect. Never a single green protection status.
- `AgentReachabilitySection` reused for the `declared → registered → modelVisible → effectiveDispatch → handlerBound → consequenceBound → resourceBound` stage ladder — no new agent registry; candidate ≠ qualified ≠ observed preserved.
- Existing deep links preserved (`action-map?basis=evaluation&evaluationId=…`, governance, estate, reports).

### Frameworks & Obligations
- Estate summary reports `catalogedReleases` (versioned crosswalk catalog facts) separately from `observedMappings` (edges on persisted org detection findings). UI copy states cataloged/mapped ≠ assessed coverage or compliance. No compliance percentage is produced.

### Report perspectives
- Master Assurance Report now offers three reader chips over the same immutable projection: **Executive** (`?profile=EXECUTIVE` → Executive Summary), **Engineering** (`?profile=BASE` → Session Report), **Audit / Evidence** (`?profile=BASE#evidence-integrity` → Evidence Integrity view). Material findings and limitations are never hidden by profile.

### MCP parity
- `haiec_get_estate_summary` registered (`system:read`, read-only) — serves the canonical assembler, not an alias; added to the capability-guide inventory goal tool list.
- Existing `haiec_get_governance` / `haiec_get_agent_trace` / report tools unchanged — UI and MCP read the same facts.

## Validation — TEST_VERIFIED

- `tests/unit/estate-summary.test.ts` (new, 8/8): org-boundary scoping, empty-org honest zeros, latest-per-system disposition rollup, superseded-decision exclusion, source freshness/attention truth, declared-seam ≠ eligibility, cataloged ≠ assessed, degraded-read → `readDegraded` + UNKNOWN limitation.
- `tests/unit/enforcement-read-model.test.ts` 29/29, `tests/unit/estate-diff.test.ts` 10/10, `tests/unit/system-evidence-projections.test.ts` + `mcp-capability-guide.test.ts` pass.
- `tsc --noEmit` clean; changed-file ESLint clean.
- CI: TypeScript PASS, ESLint New-Violations Gate PASS, U6 static PASS, U6 PostgreSQL integration PASS, px0-product-truth PASS. Baseline repo-wide ESLint failure + Vercel preview deployment-block are pre-existing (identical profile on #2224/#2225/#2226).
- Known baseline defect: `tests/unit/mcp-assurance.test.ts` `get_telemetry_status` fails **identically on clean Main** — pre-existing, unrelated to E6.

## Explicitly not built (recorded gaps)

- **Org-wide combined topology graph** — `constellation-presentation-projection` is scan-bound (`aiSystemId`+`scanId`); no grounded cross-system join source exists. Per-system action-map remains the qualified view. Estate map / multi-agent org graph → backlog; do not fabricate edges.
- `EFFECT_VERIFIED` still requires wired V2-attested sources; `LIVE_PROVIDER_NOT_WIRED` stands.
- Per-system kill-switch binding remains `NOT_ESTABLISHED` (org-scoped table).
- `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` preserved.
- No real customer actions, no KestrelVoice edits, no manufacturing-repo changes.

## E7 handoff

- Remote MCP interoperability: the estate surface now exists on both transports; remaining genuine gaps (any transport-specific discovery limits, remote streaming) should be evaluated against `GET /api/v1/estate` + existing tools — no new MCP architecture.
- Kestrel external acceptance remains `DEFERRED` until release gates, including mandatory restricted original recording + separately narrated/edited layer-by-layer walkthrough.
