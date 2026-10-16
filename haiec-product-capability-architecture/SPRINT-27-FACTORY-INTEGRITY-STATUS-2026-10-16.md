# Sprint 27 — Digital Factory Integrity, Cross-System Governance & Replayable Demonstration Proof

**Date:** 2026-10-16 · **Repo:** `subodhkc/manufacturing-ai-assurance-haiec`
**Continues:** Sprint 26 Digital Factory (`demo-digital-factory-1.0.0` fixture,
shared `policyVerdict`/`commitOutcome` path, single append-only event ledger).

## Cross-system decision model

The Sprint 27 key invariant: **authority planes are independent** — a human
approval satisfies only the restriction it actually addresses.

- Financial authority (buyer approves an amount over their cap) does NOT
  satisfy supplier qualification (PPAP expiry held by Supplier Quality).
- Implementation: `decide()` routes PO requests through
  `dfPoQualified(request)` — the supplier qualification check reads the
  fixture state for the PO's targeted supplier. Approved-but-unqualified →
  `HELD_SUPPLIER_QUALIFICATION`, no effect applied, explanatory ledger event.
  Qualified → `COMMITTED` + bounded `mesKey` effect.
- The same gate applies on the auto-pass path (small PO to expired supplier
  cannot commit either), and the review dialog surfaces "two independent
  gates" before the human decides.
- Fixture now holds both cases: `REQ-2026-8842` ($86,500 / `VND-FST-118`
  PPAP_EXPIRED → held) and `REQ-2026-8855` ($38,900 / `VND-CST-042`
  PPAP_CURRENT → commits). One policy path, two true outcomes.
- Defect corrected: `decide()`'s permitted-intent list used stale
  `REQUEST_HOLD`; the actual HOLD scenario intent is `REQUEST_CONTAINMENT` —
  supervisor approval of expanded containment was unreachable.

## Session structure

- Every new demonstration interaction tags its requests/events with
  `SES-####` session identity + a `channel` (`FACTORY`, `LAB`, `GUIDE`,
  `SYSTEM`).
- `dfResetSession()` is the coordinated reset: new session identity, factory
  baseline + `STATE.mes` restored together, prior pending requests marked
  `SESSION_CLOSED` (`decide()` fails closed on cross-session requests —
  old approvals cannot mutate a new session), anomaly/guide state reset,
  one `SESSION_BOUNDARY` event appended. The ledger stays append-only;
  prior-session rows are labeled "prior session" in the feed.
- Seeded fixture events (`FCT-*`, `FAC-SYS-*`) carry `session:null` —
  classified as baseline fixture history in reports, never session activity.

## Portable demonstration record

- `demo-factory-record-1.0.0`
  (`BROWSER_LOCAL_DEMONSTRATION_RECORD_NOT_HAIEC_ISSUED`): session id,
  fixture + policy versions, baseline vs current factory state, proposed
  operations, requests with reasons/outcomes, full tagged event ledger,
  equipment readings, session boundaries, evidence links
  (`SYS-217-WRONG_TARGET` + public receipt URL).
- `?report=demo` renders the readable projection (signature NOT_APPLICABLE);
  "Export record" downloads `haiec-demo-record-SES-####.json`; "Import
  record" validates (`dfValidateRecord`) and replays read-only — imported
  records cannot create decisions or reports.

## Guided judge path

Seven steps, each calling the same functions the UI buttons call:
HOLD 3 (applied) → HOLD 40 (review modal, approve→apply) → HOLD 60 (PQM
pending) → Station 217 MES write (held) → PO pair (held on qualification,
qualified commit) → torque anomaly + signal loss (OBSERVED) → record export.

## Validation

- 8 new `sprint27-factory-integrity` tests; suite **199/199** (TEST_VERIFIED).
- Playwright smoke **20/20** including the two-gate PO flow, session reset,
  record export — zero console errors (TEST_VERIFIED).
- 45 current + 27 historical persisted evaluations byte-identical.

## Status classification

- CODE_VERIFIED: all items above.
- NOT_VERIFIED at doc-write time: PR merge, Vercel production redeploy.

## Independent GitHub merge-status update (2026-10-16, later audit)

The original status above was correct **at its document-writing snapshot**. A later read-only common-repository alignment audit verified manufacturing `main` at **`44dbe7e4bcc029448300a356835d559790a47ed2`**, a GitHub merge titled **“Sprint 27: Digital Factory integrity — cross-system gates, sessions, portable record (#48)”**. Thus the Sprint 27 changes were **MERGED ON GITHUB** at the later audit. This does **not** establish Vercel production deployment, a live MES/ERP/PLC integration, HAIEC-issued U6 enforcement receipts, or a customer end-to-end acceptance test. The original `NOT_VERIFIED at doc-write time` history is retained intentionally. See [common-repo decision precedence](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md) and [full alignment audit](COMMON-REPO-FULL-52-FILE-ALIGNMENT-AUDIT-2026-10-16.md).
