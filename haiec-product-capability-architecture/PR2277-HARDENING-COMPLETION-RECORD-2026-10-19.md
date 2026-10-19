# PR #2277 Follow-Up — Hardening & Completion Record

**Date:** 2026-10-19
**Governing review:** `PR2277-INDEPENDENT-REVIEW-AGENT-ACTION-MONITORING-GOVERNANCE-CLOSURE-2026-10-19.md`
**Supersedes nothing** — preserves and completes `INTEGRATED-AGENT-GOVERNANCE-JOINS-IMPLEMENTATION-RECORD-2026-10-19.md` (P0–P3 remains intact; this is the review-mandated hardening pass).

---

## 1. What the independent review found vs what changed

| Review item | Defect in #2277 | Resolution | Status |
|---|---|---|---|
| P0-A subject binding | Org-scoped existence accepted as system binding; `ruleId` treated as finding identity; caller `controlId`/severity/evidence refs trusted | Server-side `resolveSubject` proves exact binding: detf `surfaceId === aiSystemId`, scanner finding by row id/fingerprint only with `scan.aiSystemId === aiSystemId`, UCP result by id+org+system+controlId+controlVersion with evidence-ref subset check. Caller contradictions → 409 `SUBJECT_MISMATCH`; unbound → 422 `SUBJECT_UNBOUND` | TEST_VERIFIED |
| P0-B ACK token | POST returned `ackUrl` embedding the signed single-use bearer token | Token travels through the notification channel only; POST/GET/MCP return notification *states* (attempted/providerAccepted/deliveryConfirmed), never token material | TEST_VERIFIED |
| P0-C provenance | AR-03 marked delegation `ESTABLISHED` from two span attributes; AR-09 fired when a declaration was absent from the batch; AR-20 treated telemetry allowlist as policy | Delegation state is `CANDIDATE` (never `ESTABLISHED` from telemetry); AR-09 model-call evaluation is withheld entirely when no declared registry exists in the batch (`ABSENT_DECLARED_REGISTRY != UNREGISTERED_SURFACE`); AR-20 findings carry `TELEMETRY_DECLARED_ALLOWLIST != APPROVED_POLICY`; each finding carries per-record provenance limitations | TEST_VERIFIED |
| P0-D eval/run scope | `haiec.evaluation.id` / `haiec.run.id` span attributes propagated into finding persistence | Attributes are producer declarations; each is verified against authoritative org-scoped rows (`assurance_evaluations`, `ai_security_scans`, `audit_orchestrator_runs`) before findings bind to it; unverifiable declarations persist tenant-scoped and are logged | CODE_VERIFIED |
| P1-A baselines | `historicalSamples` always empty for AR-10/11/14/15 | `listTenantMetricObservations` reads persisted `telemetry_observation` rows; current-batch event identities are excluded so observations never contaminate their own baseline; canonical metric mapping feeds real `number[]` samples per `surface|metric`; absent history stays `INSUFFICIENT` | TEST_VERIFIED |
| P1-B explorer | `/dashboard/agents` is evidence surfaces, not per-system agent inventory | New `AgentsActionsExplorer` in SystemWorkspace — master-detail over `AgentReachabilityReadModel`: searchable agent rows, per-agent tool/action inspector, 7-stage capability ladder, consequence-family grouping, truncated counts, owner deep links. `AgentReachabilitySection` count mislabel fixed ("capability stages" → "qualified tool identities") | CODE_VERIFIED |
| P1-C operable cases | Only open/list; no case surface, no remediation/retest routes | `/monitoring/cases` page (org list grouped by system, state timeline, notification/ACK/remediation/retest detail) + `POST …/[workflowId]/remediation` + `POST …/[workflowId]/retest` bound to `createResponseWorkflowServerDeps` (canonical store, alerting notifier, native-result store, server replay verifier); viewer refused | TEST_VERIFIED (routes), CODE_VERIFIED (page) |
| P1-D recurrence | Deterministic workflowId reused a RETEST_VERIFIED case | `openResponseWorkflow` mints deterministic occurrence identities (`occurrence` in the id seed, bounded at MAX_OCCURRENCES); closed rows are immutable — verified test reopens a new case and the old row stays RETEST_VERIFIED | TEST_VERIFIED |
| P2 accessibility | Modal lacked dialog semantics/keyboard handling; viewers saw a write control | `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape closes, Tab focus-traps, focus restores to trigger; viewers get a read-only label; dedup shows existing-case state | CODE_VERIFIED (live modal interaction NOT_RUN — no seeded findings in test session) |
| MCP parity | — | `haiec_list_response_workflows` (from #2277) verified bounded: SOURCE_READ scope, org-bound, no ack-token material, no write verbs | CODE_VERIFIED |

## 2. Executing vs evidence-gated rules (honest status)

- **Executing with real inputs:** AR-03 (CANDIDATE delegation mismatches), AR-09 (only when a declared registry exists in-batch), AR-10/11/14/15 (only when persisted telemetry history qualifies — real samples + baseline state), AR-16/18/20 (attribute-present spans).
- **Evidence-gated by design:** percentile rules resolve `INSUFFICIENT`/`NOT_ASSESSED` without qualified persisted history — never breach; AR-09 silent without a declared registry; everything without connected telemetry stays unavailable, not healthy.
- **Truth boundaries held:** ACK != approval; attestation != verified resolution; RETEST_VERIFIED closes the workflow only (no automatic U5/U6 disposition or receipt); customer PEP enforcement remains `NOT_WIRED`.

## 3. Test evidence

- `tests/unit/integrated-agent-governance-loop.test.ts` — 10 tests: CANDIDATE delegation, withheld model calls, per-finding provenance limitations, real-history AR-14 breach + insufficient-history silence, full open→notify→ACK→remediate→retest loop, dedup, recurrence immutability, no-store retest refusal, viewer ACK refusal.
- `tests/unit/response-workflows-route.test.ts` — 13 route-level tests (mocked prisma): wrong-system SUBJECT_UNBOUND, unbound scan, ruleId-not-identity, controlId/version/severity/evidence mismatch 409s, viewer 403, no token in response (serialized scan for `ackUrl`/`t=`/`token`).
- tsc `--noEmit` clean repo-wide; eslint on touched files clean (4 pre-existing baseline unused-import warnings in `AgentReachabilitySection` unchanged).
- Visual: `/monitoring/cases` + `/monitoring/risks` rendered at 1440px and 390px (screenshots `artifacts/review2277-visual/`); empty/membership states render correctly at both. Live modal keyboard interaction: **NOT_RUN** — the dev test session resolves no organization, so no findings render a case control; dialog semantics verified by code review + type-check.

## 4. Production

- `GET https://www.haiec.com/api/control-test/response-workflows` → 401 unauthenticated: #2277 deploy present (**LIVE_VERIFIED**, one-shot).
- Follow-up PR [#2278](https://github.com/subodhkc/haiec-website/pull/2278) merged to `Main` at `4d1b10a85`; deploy state `DEPLOYING` at merge time (one-shot probe: `/monitoring/cases` 404 — in-flight build). Liveness verified opportunistically, never polled.
- CI at merge: `px0-product-truth` PASS, `U6 static validation` PASS, `U6 PostgreSQL integration` PASS, Vercel Preview Comments PASS; TypeScript + New-Violations Gate `PENDING` at merge (local tsc/eslint verified clean); full ESLint + Vercel branch preview = known baseline/Git-identity failures unchanged from prior merges.

## 5. Genuinely missing externals (unchanged, documented not fabricated)

- No customer-native enforcement adapter — PEP stays `NOT_WIRED`.
- Window rules need accrued persisted history; new sources report `INSUFFICIENT` until then.
- ACK delivery requires `UCP_ACK_TOKEN_SECRET` + the alerting channel configured.
- No live KestrelVoice interaction, per instruction.
