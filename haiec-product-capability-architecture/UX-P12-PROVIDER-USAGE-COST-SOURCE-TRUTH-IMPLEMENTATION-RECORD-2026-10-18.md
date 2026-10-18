# UX-P12 Provider Usage & Cost — Source-Truth Implementation Record

**Status: DEPLOYED_VERIFIED** — 2026-10-18

- **PR:** [#2262](https://github.com/subodhkc/haiec-website/pull/2262) → `Main` **`cfdc20f6b229986c01db7a347576c8a3877aa00e`**
- **Branch:** `feat/uxp12-usage-cost-truth` @ `5df67df27`
- **Vercel production:** `7158403180` — SUCCESS on the exact merge SHA (GitHub deployments API)
- **CI:** TypeScript ✓ · ESLint New-Violations ✓ · Production Migration Deploy ✓ · Migration Safety ✓ · Code Validation ✓ · CI Summary ✓. Broad ESLint and Vercel-preview are established baseline failures — zero violations on touched files.

## P1 truth fixes

### G01 — false totals from capped reads

- `app/api/v1/inventory/costs/route.ts`: SDK branch previously summed `request_logs.findMany(take:50)`; admin branch summed `provider_cost_snapshots.findMany(take:50)`. Totals, `byProvider`, `byModel`, `byProject`, `byLineItem` now come from uncapped `aggregate`/`groupBy` over the full where. Browse lists stay bounded (50, newest-first — the SDK browse previously had **no orderBy**, returning arbitrary rows) and are disclosed via `coverage.{browseRowsReturned, browseTruncated, recordBasis}`.
- `app/api/v1/inventory/usage/route.ts` admin fallback: `take:100` + manual sum → `provider_cost_snapshots.aggregate` + `groupBy`.
- `app/api/v1/inventory/usage/timeseries/route.ts`: `findMany(take:50, orderBy asc)` (oldest-50 as "complete trend") → `$queryRaw` `date_trunc(granularity, createdAt)` grouped by provider over the full period — every row represented, `coverage.complete: true`, `source: 'sdk_request_logs'`, `recordCount` disclosed.

### G02 — provider snapshots are not API calls

Admin fallback in `usage/route.ts` no longer sets `totalCalls = snapshotCount` and no longer synthesizes request logs with `statusCode: 200`/tokens 0/latency 0. Unobserved metrics return `null` with `metricAvailability: {calls|tokens|latency|status: 'NOT_RECORDED', cost: 'PROVIDER_REPORTED'}`; new `recentSnapshots` lane carries period/lineItem/costUsd/fetchedAt. `byProvider`/`byModel` entries count `snapshots`, not `calls`.

## P2 fixes

### G03 — selected-organization drift

- `timeseries/route.ts` now resolves org via `requireOrganizationAccess` (header → query → membership fallback) instead of raw `session.user.organizationId`; foreign orgs denied 403/404; invalid `timeRange`/`granularity` → 400 (previously `parseInt('all')` → NaN → invalid Date). Both dashboard pages discard stale in-flight responses via a fetch-sequence ref (org/range switches can't render stale-org data).

### G04 — source separation

`costs` accepts explicit `?source=sdk|admin_api` (400 otherwise); `sources.{available, selected, overlapNote}` discloses that SDK estimates and provider snapshots may overlap and are **not additive**. Default precedence (SDK) preserved for back-compat.

### G05 — price provenance

`summary.costSemantics`: `'sdk_fixed_rate_estimate'` (static January-2026 rate table — `pricing.ts`) vs `'provider_reported_snapshot'`; `summary.pricingNote` states which in words on both read paths.

### G06 — honest empty/stale states

- Usage page: subtitle now "Recorded SDK activity and provider-reported cost"; stat cards hidden when `dataSource === 'none'` (no fabricated zeros); admin source renders "Cost Snapshots" count + a real snapshots table (not request logs); empty state distinguishes "No Usage Source Connected" (Connect CTA) from "No Recorded Activity in This Period" (+ "zero recorded calls does not prove zero provider spend").
- Costs page: source selector appears only when both datasets configured; `Data Source` badge reads "SDK estimate — fixed-rate table (Jan 2026)" / "Provider-reported snapshots" (was "SDK (Real-time)"); coverage line states totals completeness; absent providers show "—/No records in period" instead of $0.00.
- Admin API page: total-cost card carries the source-semantics label; list pagination distinguishes "loaded records" from total-in-period when browse is truncated.

## Deliberately unchanged

- `usage/log` writers — G07's org-binding fix is already in Main (verified by `px1-2-tenant-binding` truth-lock); retained, not reopened.
- No MCP usage/cost tool — none is registered and agent guidance does not promise one (G08: a `haiec_get_usage*` tool would need the same authorized source model; deferred, not silently promised).
- Usage cost != HAIEC subscription billing, native enforcement, or assurance evidence — copy preserves that boundary.

## Verified

- **TEST_VERIFIED:** `uxp12-usage-cost-truth` 13/13 — >50-log/137-snapshot aggregates prove totals beyond browse caps, `source` selector, overlap note, `NOT_RECORDED` nulls, snapshot rows carry no synthesized status/latency, timeseries full-period buckets + invalid params, foreign-org denial.
- **TEST_VERIFIED cone:** `route-authorization` 100/100 (stale mocks repaired for the new aggregate calls), `px1-2-tenant-binding` 13/13, `start-here-convergence-1`, `viewer-mutation-gates` green.
- **CODE_VERIFIED:** `tsc --noEmit` clean; touched-file ESLint clean (2 pre-existing exhaustive-deps warnings remain as baseline).
- **LIVE_VERIFIED @1440/390** on a real org (no connected usage source): usage page renders honest subtitle + "No Usage Source Connected" + Connect CTA; costs page renders source-honest empty state; admin-api renders; API checks confirm `metricAvailability`, `coverage`, `sources`, 400s and foreign-org denial. Zero console errors.

## NOT_RUN

- Org with live SDK logs / provider snapshots rendered end-to-end (test org has no connected source — those branches are unit-locked, not live-verified).
- Viewer-role and multi-org key variations (tenant scoping unit-locked).
- External MCP round-trip — no tool added; P11.1 reporting tools untouched.
