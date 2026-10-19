# Integrated Agent-Action Assurance Joins — Implementation Record
**2026-10-19 · haiec-website · P0–P3 thin-join delivery against the integrated work order**

## Source-verified gap matrix (executed)

| Capability | State | Owner / evidence |
|---|---|---|
| Agent discovery, reachability, trace, inspector | existing/live | `SystemWorkspace`, `AgentReachabilitySection`, `/api/inventory/systems/[id]/agent-trace`, `haiec_get_agent_trace` |
| Five planes / DAI / control catalog | existing/live | `/monitoring/dai`, `ControlCatalogPanel`, `u6-action-assurance-section` |
| Agent-action anomaly detection (AR-22..AR-30) | existing/live | OTLP → `runOtlpDetectionSweep` → `runDetections` → `persistDetectionFindings` |
| Runtime correlation rules (AR-03..AR-20) | **existing-but-unwired → WIRED** | `collectRuntimeCorrelationFindings` previously had no caller that supplied input |
| Finding → response case open/notify | **existing-but-unwired → WIRED** | `openResponseWorkflow` previously only reachable via controlled-pilot; only `/ack` route existed |
| Response case list/visibility | **missing thin join → WIRED** | `listForSystem` existed in store; no route or UI exposed it |
| Org-level agents surface | wrong UX presentation → FIXED | `/dashboard/agents` was working but flagged "Legacy" in nav |
| MCP workflow/case reads | missing thin join → WIRED | `haiec_list_response_workflows` added; `haiec_list_investigations` already existed |
| Native enforcement / PEP | target-specific not possible | `native-enforcement-adapter` + `enforcement-read-model` retained; `NOT_WIRED` honesty preserved |

## What shipped (one PR)

### P2 — runtime correlation at ingest
- `lib/ai-security/runtime-correlation-input.ts` (new) — projects the same
  accepted OTLP spans the detection sweep consumes into the bounded
  `RuntimeCorrelationInput` record shapes (delegation, model calls,
  frequency/retry/metric windows, action chains, coordination windows,
  connector bindings, egress, surface registrations). Every record derives
  from actual span attributes; absent attributes → absent records.
- `lib/ai-security/detection-otlp-hook.ts` — `runOtlpDetectionSweep` now
  also calls `listTenantBaselineStates` → `buildRuntimeCorrelationInput` →
  `collectRuntimeCorrelationFindings` → `persistDetectionFindings` →
  `dispatchDetectionFindingAlerts` (non-fatal; never breaks ingest).
- No new scheduler: ingest-time is the supported trigger. Window rules
  only breach against persisted established baselines — insufficient
  history emits INSUFFICIENT, not PASS.

### P3 — governed response cases
- `POST /api/control-test/response-workflows` — open (+ optional notify)
  for `FINDING` / `CONTROL_RESULT` subjects. Subject resolved inside the
  caller's org (`detf/` evidence partition, `ai_security_findings`,
  `ucp_control_test_results`, `control_test_results`) — fails closed.
  Viewer role refused. Dedup via deterministic workflowId.
- `GET /api/control-test/response-workflows?aiSystemId=` — bounded list;
  ack token material never returned.
- `components/monitoring/OpenResponseCaseControl.tsx` (new) — per-finding
  "Open response case" modal on the Risk Registry grid; AI-system binding
  is an explicit human choice, never guessed from surfaceId.

### P0 — prominence
- `Agents & Actions` moved out of the Legacy nav section into the AI
  Systems group (`/dashboard/agents` org-level surface).

### MCP
- `haiec_list_response_workflows` — bounded read-only tool (SOURCE_READ
  scope, org-bound, token material excluded). Cannot open/ack/approve/close.

## Truth status
- ACK ≠ approval; REMEDIATION_RECORDED ≠ verified; closure only via
  server-verified `recordRetestOutcome` on the canonical result store —
  unchanged service semantics, now reachable from customer surfaces.
- No always-on-interception claim: AR correlation runs at ingest over
  accepted spans; absent telemetry produces absent coverage, never health.
- No fabricated enforcement: PEP/effect-proof ladder untouched.
- Raw span content is never persisted (existing adapter-manifest lock);
  correlation therefore runs at ingest-time where spans exist — not as a
  re-read of stored evidence.

## Test evidence
- `tests/unit/integrated-agent-governance-loop.test.ts` (7 tests, SYNTHETIC
  labeled): projection correctness, AR-03/AR-09/AR-20 firing, in-scope
  silence, insufficient-baseline silence, full open→notify→ACK→remediation
  →verified-retest loop, dedup, ACK replay refusal, unbound-store refusal,
  viewer role gate.
- Existing suites re-run clean: `ucp-response-workflow` (21),
  `ucp-response-workflow-notifier` (4), `engine-batch-e2` (20).

## Remaining genuine external dependencies
- Customer PEP/native enforcement remains `NOT_WIRED` until a consenting
  target integrates — surfaced honestly, adapter path preserved.
- Window-rule findings require persisted established baselines; new
  sources report INSUFFICIENT until history accrues — by design.
- KestrelVoice live acceptance is a separate authorized exercise — not
  touched in this release.
