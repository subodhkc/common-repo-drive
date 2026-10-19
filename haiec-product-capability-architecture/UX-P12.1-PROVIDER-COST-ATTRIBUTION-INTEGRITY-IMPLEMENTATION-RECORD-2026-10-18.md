# UX-P12.1 Provider Cost Attribution Integrity — Implementation Record

> **2026-10-18 INDEPENDENT RELEASE ACCEPTANCE ADDENDUM:** [Authenticated exact-SHA production Vercel and CI confirmation, source-reviewed residual and P13 handoff](UX-P12.1-INDEPENDENT-ACCEPTANCE-AND-UX-P13-GLOBAL-SHELL-CROSS-PAGE-HANDOFF-2026-10-18.md). [PR #2263](https://github.com/subodhkc/haiec-website/pull/2263) merged Main **d146b40ea272eae9776b89c33555ed48f53b4861**, authentic Vercel deployment **dpl_627Xn6tipjdzriZgyVoExgksitsW** READY, Lint Baseline Gate and Consolidated CI both SUCCESS. Developer's numeric `7160581328` is GitHub deployment ID. Three-file scoped fix observed in source: one mutually-exclusive `groupBy(provider,projectId,workspaceId)` + source labels; reviewer did NOT rerun Devin's 6 new/19 P12 and 100 route tests or populated live provider source. Accepted. **P2 future metadata qualification:** project bucket can collapse distinct secondary workspaceId tuples and show last one only, not full set; sum/count remain correct and no proven live rendering incident. Record as maintenance, not new P12.2; move to P13 global shell next.


**Date:** 2026-10-18 · **Status:** `DEPLOYED_VERIFIED`
**PR:** [#2263](https://github.com/subodhkc/haiec-website/pull/2263) → `Main` **`d146b40ea272eae9776b89c33555ed48f53b4861`**
**Vercel production:** GitHub deployment `7160581328` — **SUCCESS** on exact merge SHA `d146b40ea`
**Prior phase:** [UX-P12 record](UX-P12-PROVIDER-USAGE-COST-SOURCE-TRUTH-IMPLEMENTATION-RECORD-2026-10-18.md) · [P12.1 handoff](UX-P12-INDEPENDENT-ACCEPTANCE-P12.1-COST-ATTRIBUTION-CORRECTION-AND-UX-P13-SHELL-HANDOFF-2026-10-18.md)

## Defect (P12.1-G01)

`loadAdminSnapshotCosts` in `app/api/v1/inventory/costs/route.ts` grouped provider snapshots **independently** by `projectId` and by `workspaceId`, then added both partitions into one map. A workspace-only $10 snapshot appeared as $10 under `default` **and** $10 under its workspace — the category breakdown summed to $20 while `summary.totalCost` was correctly $10.

## Correction

- **One grouped query** over `['provider','projectId','workspaceId']` — each returned group is a mutually exclusive partition of the matching rows, accumulated exactly once. Bucket sums reconcile to `summary.totalCost` by construction.
- **Documented precedence:** `projectId` → `workspaceId` → `Unattributed`. When both IDs exist, the workspace is preserved as `secondaryWorkspaceId` metadata only — never a second additive bucket.
- **Provider-namespaced keys** (`provider|kind|id`) — identical external IDs from different providers can no longer merge silently.
- **Response additions:** each bucket carries `provider`, `attribution` (`project` | `workspace` | `unattributed`), `label`, `secondaryWorkspaceId?`; `summary.attributionNote` documents the contract.
- **Renderer:** `/dashboard/ai-inventory/admin-api` "Cost by Project" card → "Cost by Project / Workspace", rendering `label` + provider + kind + secondary workspace. (Only consumer of `byProject`; the costs page does not render it.)

## Untouched per scope

SDK logging, provider collectors, pricing table, U5/U6 engines, MCP reporting, billing, and all other P12 surfaces (aggregates, provenance labels, source selector, org access, empty states).

## Verified

- **`TEST_VERIFIED`:** 6 new P12.1 tests — workspace-only (the exact defect counterexample), project-only, both-present precedence, Unattributed, identical external IDs across providers, mixed-record reconciliation of bucket sum to `totalCost`. Full P12 suite 19/19; `route-authorization` 100/100.
- **`CODE_VERIFIED`:** `tsc --noEmit` clean; touched-file ESLint clean (1 pre-existing warning). CI: TypeScript ✓, ESLint New-Violations Gate ✓, Migration Safety ✓; broad ESLint + Vercel Preview are the established baselines.
- **`LIVE_VERIFIED`:** exact-SHA production deployment `7160581328` succeeded.

## `NOT_RUN`

Live org with real provider snapshot rows exercising all attribution branches (unit-locked via grouped-query mocks); external MCP client (no usage/cost MCP tool exists).

## Next

**UX-P13 — Global Shell, Navigation & Cross-Page UX Consistency:** consolidate the experience already built across Start Here, System Workspace, Controls, My Work, Monitoring, Reports, MCP explanations, and Usage & Cost. No new engines, duplicate pages, or synthetic readiness scores. External MCP reporting-client acceptance remains a separate securely-credentialed `NOT_RUN` operational task.
