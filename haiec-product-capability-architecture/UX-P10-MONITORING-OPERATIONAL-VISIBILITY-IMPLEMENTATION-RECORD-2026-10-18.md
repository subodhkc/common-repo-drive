# UX-P10 — Monitoring / Operational Visibility — Implementation Record (2026-10-18)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp10-monitoring-truth` @ `4f2d23df2`
Base: `Main` @ `cef737258` (post-P09 + marketing PR #2258)
PR: #2259 — https://github.com/subodhkc/haiec-website/pull/2259
Merge commit: `Main` `fc284d5cd`
Vercel production deployment: GitHub deployment `7153557793` — **SUCCESS** on exact merge SHA `fc284d5cd` (deployment-status verified via GitHub deployments API)
Scope: `lib/assurance/monitoring-projection.ts` (new qualified projection only), `app/(workspace)/monitoring/page.tsx`, `app/(workspace)/monitoring/risks/page.tsx` (label), `components/monitoring/MonitoringRefreshControls.tsx` (timestamp semantics), `tests/unit/uxp10-monitoring-signal-overview.test.ts` (new, 8 tests), two stale-test repairs in the dependency cone. No collector, event store, alert dispatcher, engine, schema or MCP change.

Governing docs: [P09 acceptance + P10 work order](UX-P09-INDEPENDENT-ACCEPTANCE-AND-UX-P10-MONITORING-HANDOFF-2026-10-18.md), [P08.1 record](UX-P08.1-MCP-CONTROL-REPLAY-BINDING-IMPLEMENTATION-RECORD-2026-10-18.md).

## What shipped

**P10-R01 — freshness-qualified operational label.** New `deriveSignalOverview` in the existing projection contract reads the canonical E4 per-source `qualification.freshness` (computed by `lib/evidence/telemetry-readiness` against declared cadence on the server-receipt clock). States: `NOT_CONFIGURED` / `NO_SIGNAL` / `DELIVERING` (≥1 FRESH source) / `STALE` / `FRESHNESS_UNKNOWN` / `DEGRADED`. A stale historic receipt is never presented as active delivery; receipt without a declared cadence is honestly unqualified. `deriveTelemetryStatus` is preserved unchanged — its existing consumers keep the receipt-history display semantics they were built on.

**P10-R03 — four distinct operational truths, first viewport.** New "What is actually established" strip on `/monitoring`, four separate source-bounded lanes, each linking to its canonical owner:
- *Passive telemetry* — qualified signal overview → `/monitoring/sources`.
- *Authorized runtime tests* — persisted `runtime_tests` count + latest state → `/monitoring/runtime-security`.
- *Guardrail policy & evaluation* — approved operating envelopes + contradiction count → `/monitoring/guardrails`.
- *Native enforcement* — existing E5.1 `loadEnforcementPortfolio` ladder aggregate (EFFECT_VERIFIED / APPLIED_AT_TARGET / NOT_WIRED counts) → `/monitoring/governance`.

Failed reads render "Read unavailable" — never an implied zero. No lane implies another; "Policy approval is not enforcement" is stated explicitly.

**P10-R02 — refresh timestamp truth.** `MonitoringRefreshControls` now labels "Refresh requested" (set only on an actual refresh call — click or poll tick), no longer stamped at mount as "Last updated". Server `projection.generatedAt` remains the authoritative snapshot time; last qualified receipt stays per-source in `SourceHealthTable`.

**Telemetry card + risks-page pill** now render the qualified signal label instead of the raw receipt-history status.

## Preserved

`deriveTelemetryStatus` contract, `SourceHealthTable`, GuardrailCoverageMatrix, DetectionCoverageGrid, FilterBar semantics, alert rules/history delivery records (DELIVERY != ACK already labeled), UCP response workflow, all monitoring subroutes, bounded reads (`MAX_TELEMETRY_EVENTS` etc.), ingestion hold.

## Verification

- `TEST_VERIFIED`: `uxp10-monitoring-signal-overview.test.ts` 8/8 — no sources, configured-no-signal, **stale historic receipt never DELIVERING** (R01 lock), fresh+stale honest counts, quarantine → DEGRADED, pre-E4 unqualified projection → FRESHNESS_UNKNOWN, inactive binder.
- Dependency-cone regression: `telemetry-source-health` 21/21, `enforcement-read-model` 29/29, engine-batch-c/e2 green after two stale-test repairs (mock missing `resolveSessionOrganizationId` — caused by this diff, fixed; pre-E4 "Telemetry is active" expectation — stale test repaired to shipped label).
- `CODE_VERIFIED`: `tsc --noEmit` clean; ESLint clean on all touched files. CI: TypeScript ✓, ESLint New-Violations ✓, U6 static + PostgreSQL ✓, px0 ✓; repo-wide ESLint + Vercel-preview are established baseline failures with zero hits on this diff.
- `LIVE_VERIFIED`: authenticated browser @1440/1280/390 on real org (12 systems) — four lanes render honest states (Not configured / None recorded / 0 approved envelopes / Not wired), deep links resolve, corrected refresh label, server Generated-at, zero console errors.

## Known baseline failure (not introduced)

`engine-batch-c-plus` a11y check flags a `Link` without `aria-label` in `monitoring/dai/[surfaceId]/page.tsx` — file untouched by this diff; stale expectation vs a prior commit.

## NOT_RUN

Fresh-source DELIVERING live render (test org has no qualified sources — unit-locked); viewer/multi-org key variations; alert-history page live render (read model unchanged); real MCP client (no tool added); keyboard-focus audit of the new lane links (all are native `Link` elements).

**Next dedicated session: UX-P11 Reports, Receipts & Public Verification.**
