# E6.1 — Human Approval UX, My Work Inbox & Control Discovery

**Status:** MERGED → `Main` `8880e17f7` (PR [#2229](https://github.com/subodhkc/haiec-website/pull/2229)); Vercel production deployment `6SNayKstw8EhDX6AnYKqAz7PQ5RT` — SUCCESS on merge SHA
**Branch:** `feat/e61-human-approval-ux` @ `a33dec944`
**Date:** 2026-10-20
**Continues:** E6 PR #2227 (`14b6b1912`) per `E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md`

---

## Scope delivered

The design review's **highest-priority gap**: the deployment-decision backend
(request → assign → decide, separation of duties, request-digest CAS, expiry,
revocation, effective-state derivation) was complete, but the interface used
`window.prompt()`, had no reviewer-assignment surface, and the governance
portfolio collapsed every system to its most recently updated requestKey.

E6.1 composes the presentation layer over the canonical owners — no new
persistence table, workflow engine, notification platform, or second
source of truth.

### 1. My Work inbox — every current requestKey

- **`lib/ai-inventory/my-work.ts`** — `assembleMyWorkInbox` composes
  `listDecisionsForOrg` + per-system effective context (`getApprovedEnvelope`,
  latest evaluation) into four queues:
  - **Assigned to me** — latest-version PENDING where viewer is reviewer
  - **Unassigned pending** — needs owner/admin assignment
  - **My requests** — requests the viewer created, any lifecycle state
  - **Resolved** — decided / expired / revoked / superseded / stale (bounded 25)
- `ALL_REQUESTKEYS != LATEST_PER_SYSTEM` — two pending operations on one
  system surface as two rows. Superseded versions appear only as resolved
  history — never actionable.
- `FAILED_READ != EMPTY_QUEUE` — any failed backing read sets `readDegraded`
  and the limitation is rendered as UNKNOWN, not a reassuring empty inbox.
- **`GET /api/inventory/my-work`** — session-bound (`requireOrganizationAccess`,
  server-resolved tenant; verified 401 unauthenticated).
- **`app/dashboard/my-work`** + sidebar quick link + governance-page link.

### 2. Reviewer assignment — owner/admin, eligible members only

- **`GET /api/inventory/eligible-reviewers`** — active admin/owner org members
  (the only roles the canonical assign route accepts). Presentation aid —
  the assign route re-enforces role, active membership, and SoD server-side.
- **`AssignReviewerControl`** — rendered on unassigned PENDING rows for
  owner/admin viewers; the requester is excluded client-side AND server-side.
- `deployment-governance-projection` now exposes `requestedBy` so the picker
  can exclude the requester (SoD remains a server boundary).
- Non-admin viewers see customer-friendly "awaiting reviewer assignment"
  guidance; requesters see why they cannot decide their own request.

### 3. Decision review dialog — `window.prompt()` eliminated

- **`components/governance/DecisionReviewDialog.tsx`** — accessible modal
  (focus management, Escape, aria-modal, labelled fields):
  - Decision packet: system, environment, allowed/prohibited operations,
    required conditions, requester rationale, bound envelope version,
    bound evaluation id, expiry, request version, digest anchor
  - Three decisions: approve-in-scope / approve-with-conditions / reject
  - Rationale required (≥10 chars client-side; server re-validates);
    conditions required for conditional approval
  - Explicit final confirmation checkbox
  - `expectedRequestDigest` CAS — 409 → fail closed, demands re-review of the
    current version; never a silent retry
  - `ReviewerDecisionActions` fetches the freshest digest at open time — the
    reviewer signs what they actually reviewed

### 4. Request form enhancement

`NewDeploymentRequestForm` gains: reviewer select (eligible members),
optional expiry date, exact allowed/prohibited scope labelling, conditions,
and SoD/assignment guidance. Same canonical request API — no new fields.

### 5. Control proof discoverability

`AssuranceCasePanel` deep-links to `?tab=controls` — the existing canonical
`ControlProofJourney` (maturity / visibility / evidence / TestSpec /
approval / results / replay / response workflow) is now reachable from the
assurance case. No new control engine, catalog, or persistence.

---

## Validation — TEST_VERIFIED

- 62/62 focused tests: `my-work` (8 new), `s22-deployment-decision` (36 —
  SoD, scope, effective states, digests), `estate-summary` (8),
  `estate-diff` (10)
- `tsc --noEmit` clean; changed-file ESLint clean
- Rendered check (dev server): `/dashboard/my-work` 200; both new APIs 401
  unauthenticated; governance demo mode + auth-empty state intact
- CI: TypeScript, ESLint New-Violations Gate, U6 static + PostgreSQL,
  px0-product-truth — all PASS. Baseline repo-wide ESLint + Vercel-preview
  block are the same pre-existing conditions as E4/E5/E5.1/E6.

## NOT_VERIFIED

- Interactive browser click-through of the dialog/assign flows — contract
  verified at the API boundary and unit level; rendered shell verified via
  HTTP. No authenticated browser session was exercised.
- Email/in-product notification delivery — not instrumented; no notification
  platform was introduced (per scope discipline).

## Remaining gaps (recorded, not fabricated)

- §5 sidebar calm-IA consolidation — My Work added as a quick link; the
  ~40-group sidebar refactor remains incremental P1.
- §6 executive-summary visual hierarchy on the Assurance Case — deep link
  added; larger hierarchy refinement remains P1.
- §7 operational journey (alerts → ack → remediation → retest) — canonical
  response-workflow surfaces exist per-control; org-level incident
  reassessment flow remains a qualified gap.
- Org-wide combined topology graph — still backlog (no grounded
  cross-system join source; E6 record stands).

## Invariants preserved

`POLICY_APPROVED != HUMAN_APPROVED`; `HUMAN_APPROVED != EXECUTION_AUTHORIZED`;
`APPROVED != DISPATCHED != ENFORCED`; requester cannot self-approve
(server-enforced); `UNKNOWN != EMPTY_QUEUE`; `SUPERSEDED` never
double-counts; `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` untouched.
