# Sprint 28 — Digital Factory Decision Integrity & Judge Experience

**Date:** 2026-10-16 · **Repo:** `subodhkc/manufacturing-ai-assurance-haiec`
**Continues:** Sprint 27 (`SES-####` sessions, two-gate ERP, portable record).

## Decision-gate model finalized

Sprint 28 formalizes the ordering invariant at the single commit boundary
(`commitOutcome`):

1. Resolve the target identity once (`meta.target` → request → event →
   factory transition; no silent PO retargeting).
2. Evaluate every applicable gate **before** applying any effect — financial
   envelope, reviewer authority, and supplier qualification are independent.
3. Apply exactly one bounded effect and append exactly one ledger event whose
   decision is the coherent final outcome.

**Defect found and fixed:** `commitOutcome` incremented `STATE.mes.poValue`
before `dfApplyOutcome` checked qualification; the auto-PASS path also
defaulted the PO target. An under-cap PO to the expired supplier could raise
committed value while the ERP card showed a hold. Fixed at the boundary —
under-cap + expired → `HELD_SUPPLIER_QUALIFICATION`, no `poValue` change;
under-cap + qualified → commits the correct PO.

## Fictional reviewer-role enforcement

Requests bind `requiredRole` at creation; `decide()` refuses any other role
with `ROLE_MISMATCH` (no mutation, request stays pending, modal stays open).
Role map: HOLD≤50 Quality Supervisor · HOLD>50 Plant Quality Manager ·
PO Authorized Buyer · FORECAST Production Planner · VISION Quality Engineer ·
MAINT Maintenance Manager · INCOMING_QC/WMS Supplier Quality Engineer.
Prohibited intents are never approvable under any role. Explicitly scenario
roleplay — HAIEC's authenticated deployment-governance service is separate.

## Record hardening

`dfValidateRecord` now enforces: size/text caps, `SES-####` session IDs,
pinned fixture identity (`demo-digital-factory-1.0.0` / `PLANT-A`), unique
`EV-*`/`REV-*` identities, resolvable `requestId`/target references, and
contradictory-state rejection (COMMITTED PO under expired supplier; APPROVED
request on a prohibited intent; impossible `heldQty`; non-haiec.com receipt
URLs). Imports remain read-only — "Review saved demonstration record".

## Judge-experience updates

Per-step expected results, live baseline→now delta table, duplicate-run
guard, in-modal wrong-role demonstration, Restart Demonstration with a real
session boundary, pending-request warning on step advance. NotebookLM
packaging documented as an operator-driven flow (record JSON + canonical
case report + operating report + 12-page PDF); nothing uploads itself.

## Validation

- 10 new `sprint28-decision-integrity` tests; suite **209/209**
  (TEST_VERIFIED).
- Playwright smoke **24/24**, zero console errors, mobile clean
  (TEST_VERIFIED).
- 45+27 persisted evaluations/digests byte-identical.

## Status classification

- CODE_VERIFIED: all items above.
- NOT_VERIFIED at doc-write time: PR merge, Vercel production redeploy.

## Independent GitHub merge-status update (2026-10-16, later audit)

The original `NOT_VERIFIED at doc-write time` statement remains correct for that snapshot. A later read-only GitHub check verified manufacturing `main` **`1fa4c6405808edea64540021df8b1d261cd43c3d`** at merged Sprint 28 PR #49. This verifies GitHub source merge only; **no production Vercel deployment, live MES/ERP/PLC/HAIEC target action, or tests rerun by the common-repo auditor** were established. The recorded tests are claims from the sprint implementation status, not fresh audit results. The earlier Sprint 27 PO partial-mutation defect and Sprint 28 correction are version-bound, not retrospectively repaired historic evidence. See [current precedence](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md).
