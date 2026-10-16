# Sprint 25 — Full HAIEC Showcase Implementation Status

Date: 2026-10-16 · Status: **implemented** (see repos for merge commits)

This records what shipped against
`MAA-HAIEC-FULL-PLATFORM-SHOWCASE-ALIGNMENT-2026-10-16.md` and the
manufacturing `SYNTHETIC-CONTROL-DEMO-ACCEPTANCE-AND-S25-STORYBOARD.md`.

## Shipped

| Item | Where |
|---|---|
| Station 217 two linked episodes | Shared scenario artifact (`haiec-scenario-playback-1.0.0`): `RECORDED_MISMATCH_DETECTED` bound to saved evaluation `SYS-217-WRONG_TARGET` (Episode A — detected recorded target difference `WO-217-4802`→`WO-217-4803`, REVIEW) followed by `SUBSEQUENT_WRITE_HELD` (`DEMO-GW-SYS-217-02`, Episode B — subsequent simulated write held while `DEMO-REQ-SYS-217-06` stays pending; advisory work continues). Recorded event detected, never described as prevented. |
| Seven-facet readiness | `scenario-readiness-1.0.0` fixture (platform readiness · org entitlement · reviewer eligibility · operating boundary · monitoring connectivity · qualified evidence · approval & control). Honest authored states bound to named sources; rendered on the mfg governance page, the Station 217 report and a printable one-pager. Per-request checklist — not a mandatory customer lifecycle. |
| Enterprise Operating & Governance Report | Mfg Reports Hub `?report=gov` — nine systems, scopes, 3/2/4 decisions, reviewer roles, monitoring coverage, Station 217 two events, next actions, real-vs-authored provenance. Presentation derivative; signature SKIPPED. |
| Twelve-page visual report | `dashboard/report/supporting/haiec-12p.html|pdf` — platform map (3 pillars / 6 capabilities), evidence flow, assurance results, scope & decisions, review lifecycle, monitoring chronology, two-event timeline, nine unique system cards, verification & limits. `NOT AN ISSUED ASSURANCE REPORT`. Generated deterministically by `build-supporting-report.cjs`, CI `--check`-enforced. |
| Capability overview | Mfg Command Center leads with six selectable goal tiles (Discover · Evaluate · Authorize · Monitor · Protect · Verify) under Understand / Assure / Govern & Operate — deep links into existing views, no new navigation. |
| HAIEC Main | Minimal adapter-side change only: vendored shared artifact refresh + optional `attemptRef`/`ScenarioReadiness` contract fields + focused tests. Player, governance APIs and homepage unchanged. |

## Boundaries kept

- No assurance engine changes; the 45 v3 + 27 v1 saved evaluations are byte-identical.
- No connectors, real email/SMS, or enforcement infrastructure.
- Fictional readiness/decisions remain authored scenario material — never
  entitlement, identity or enforcement proof.

## Validation

- Mfg: 178/178 tests incl. new `sprint25-showcase` tests; both generators
  `--check` in CI; Playwright smoke 14/14 (desktop + 390px mobile).
- HAIEC: `s22-deployment-decision` 36/36 incl. new two-episode/readiness
  assertions; TypeScript gate green on the PR.

## Remaining enterprise gaps (unchanged)

Live MES/PLC/ERP connectivity, real notification dispatch, production
execution enforcement, complete code/authority-plane evidence — all remain
explicit `NOT ESTABLISHED` in both the product story and the UI copy.
