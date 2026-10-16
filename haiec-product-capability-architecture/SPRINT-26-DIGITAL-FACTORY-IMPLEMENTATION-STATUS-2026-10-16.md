# Sprint 26 — Interactive HAIEC Digital Factory & Judge Experience

Status: **shipped** — manufacturing repository only; no HAIEC Main changes were
required (shared playback contract unchanged). Implementation detail lives in
`manufacturing-ai-assurance-haiec/docs/product-story/SPRINT-26-IMPLEMENTATION-STATUS.md`.

## Architecture decision (reuse, not rebuild)

The sprint brief mandated inventory-first: connect the existing working pieces
rather than create parallel systems. The implementation:

- **Extracted one policy path.** `runScenario` was split into
  `policyVerdict(scenario, value)` (pure) + `commitOutcome(scenario, system,
  value, verdict)` (stateful). The Decision Lab's `runScenario()` and the new
  `factoryAttempt()` both call the same pair — so a Judge Control run and a
  Digital Factory button produce identical outcomes, share the `REV-####`
  request sequence and write to the same append-only `EV-####` ledger.
  Pending/rejected operations cannot mutate restricted virtual state because
  only `PASS` verdicts carry a `mesKey`/`dfApplyOutcome` effect.
- **One browser-local factory state (`DF`)** seeded by a versioned fixture
  (`demo-digital-factory-1.0.0`, provenance `SIMULATION_ONLY`). MES work
  orders, ERP suppliers/PO/inventory, and virtual equipment readings are
  deterministic functions of fixture + virtual tick + anomaly mode — no
  random values, resettable, reproducible.
- **New identities defined once in the fixture** (`EQ-TORQUE-217`,
  `EQ-SPINDLE-88`, `EQ-DYNO-412`, `VND-*`, `SI-2026-3301`,
  `LOT-2026-4510`) and reused across panels, events and `?report=gov`.
  Station 217's two episodes stay distinct: recorded `WO-217-4803` divergence
  (saved evaluation) vs subsequent held demo write (`DEMO-GW-SYS-217-02`).

## What ships

- **Digital Factory page** — MES (Attempt MES update → held; advisory →
  applied; hold release → denied), ERP (PO commit → buyer review → commit on
  approval; held-stock and receiving-lot release → denied), equipment gauges
  (torque/RPM/temp, heartbeat, alarm, signal-loss) with anomaly buttons that
  emit one `OBSERVED` monitoring event per episode; interaction ribbon
  (proposed → boundary → review → outcome → ledger); pending-review rail
  bound to `STATE.requests`; evidence links to the verified
  `SYS-217-WRONG_TARGET` report.
- **`?report=gov`** — Digital Factory Operations section: fixture baseline
  table + in-session ledger/requests, classified separately from
  digest-verified evaluations.
- **Disclosure** — compact "Interactive Demo Factory" badge near controls;
  full explanation in one About-this-demonstration card. No per-card warnings.
- **Lifecycle** — hidden-tab pause, reduced-motion honored, reset restores the
  fixture baseline while the ledger stays append-only (auditability over
  erasure).

## Boundaries kept

No MES/ERP/PLC services, no new assessment run, no notification or enforcement
integration, no persisted evaluation/digest changes, no playback-controller
rebuild, no HAIEC Main changes. Remaining pilot gaps (live OT/ERP connectors,
authenticated reviewer identity, real notification dispatch, production
enforcement) are still labeled demonstration in the UI.

## Verification

13 focused `sprint26-digital-factory` tests (fixture integrity, single policy
path, 3/40/60 parity, pending/rejected no-mutation, deterministic readings,
ledger identity, reset, disclosure); full suite 191/191; Playwright smoke
19/19 incl. an end-to-end interaction chain and 390px mobile, zero console
errors. CI `--check`-enforces the generated bundle against the fixture.
