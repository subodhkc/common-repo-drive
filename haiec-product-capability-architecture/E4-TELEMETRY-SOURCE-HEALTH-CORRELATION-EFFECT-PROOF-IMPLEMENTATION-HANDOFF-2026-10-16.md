# E4 — Telemetry Source Health, Deterministic Correlation and Effect Proof

**Prepared:** 2026-10-16 America/Chicago; GitHub commit UTC date 2026-10-17.  
**Status:** Source-backed next Devin implementation handoff; **NO E4 CODE SHIPPED by this workstream**.  
**Inspected HAIEC `Main`:** `c3de967e62615c3bf669527a1ec79e2d90e2c814`.  
**Last E3:** [PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) **merged** at `c3de967e`; Vercel commit status **SUCCESS**, deployment `DPLkCjVSfFyjgBKkNGigFFm2jFXU`. GitHub CI Summary and Code Validation success. The merge commit's New-Violations check was still in progress when first queried; Devin reported it passed on the PR head. Local 72/72 tests were **reported by Devin and not rerun here**.  
**Current common-repo read order:** [decisions](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md), [E3/E4 ownership](E3-E4-SEPARATE-SECURITY-TELEMETRY-OWNERSHIP-AND-E1-E2-HANDOFF-2026-10-16.md), [E0/R1 reconciliation](E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md), [full audit](COMMON-REPO-FULL-52-FILE-ALIGNMENT-AUDIT-2026-10-16.md), [enhancement-first roadmap](HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md).

## 1. E4 strategic boundary

**Goal:** Give customers a deterministic, source-bound picture of *what monitoring data has actually arrived, how current and attributable it is, what it can establish about actions and effects, and what remains UNKNOWN*. Update UI, MCP and API consistently through **existing canonical producers and read models**.

**Not the goal:** Build another collector, SIEM, realtime monitoring backend, telemetry schema, risk engine, authority model, AI behavioral judge, semantic intent detection, new OTLP endpoint or general infrastructure control plane.

**Evidence locks:**
- `BINDER_CONFIGURED != SOURCE_DELIVERING_NOW`.
- `BATCH_ACCEPTED != NORMALIZED_RECORD_QUALIFIED != ASSURANCE_EVALUATED`.
- `SIGNAL_RECEIVED != FRESH_SIGNAL`; even a fresh intake receipt is not proof of complete stream coverage.
- `TRACE != TOOL_APPLIED != EFFECT_COMMITTED != ENFORCEMENT_VERIFIED`.
- `TARGET_REPLIED_SUCCESS != VERIFIED_TARGET_STATE_CHANGE` unless the authoritative boundary and independent trust/provenance requirements are established.
- `MISSING_EVENT != EVENT_DID_NOT_OCCUR`; `SOURCE_STALE != SYSTEM_SAFE/UNSAFE`.
- `SOURCE_DECLARATION != AUTHORITATIVE_INDEPENDENT_EFFECT_WITNESS`.
- `EFFECTIVELY_GRANTED`, `CODE_CAPABLE`, `OBSERVED` and human deployment decision remain independent planes/actors.

## 2. What is ALREADY IMPLEMENTED in source: consume, do not duplicate

| Owner in HAIEC Main | Existing mechanism | E4 permitted work |
| --- | --- | --- |
| `lib/evidence/telemetry-readiness.ts` | **Three states** `NOT_CONFIGURED`, `CONFIGURED_NO_SIGNAL`, `SIGNAL_RECEIVED`; active binder and accepted batch counts, `latestReceivedAt`; reused by workspace and MCP | Retain original state contract; add **orthogonal freshness/health qualifier** to distinguish a historic accepted signal from current delivery |
| `lib/assurance/monitoring-read-model.ts` | Tenant-bound binders + accepted batches, evidence refs, quarantined records; newest event time; source `ACTIVE` when any last event exists, regardless of age | Fix misleading `ACTIVE` age semantics or add well-defined as-of source freshness without inventing sensor uptime |
| `lib/evidence/adapters/otlp-receiver.ts` | Bounded trace/log/metric extraction through canonical structured ingress; raw hashed not stored as trusted content | Reuse; targeted identity/temporal mapping only if source-proven need; do not redeploy new receiver |
| `lib/evidence/streaming-telemetry-collector.ts` | Bounded drain, deterministic identity dedup and explicit quarantine for overflow | Consume collector outcomes and surface quarantine/unknown; no collector fork |
| `lib/evidence/ingest-service.ts` | Machine auth, bound org/binder, canonical event minimization, batches and deterministic receipts; existing V2 payload-bound upstream producer attestations, `runtimeTurnFacts`, `correlationIds`, continuity evidence | Reuse exact verified attribution/proof; no raw persistence or self-declared `qualified=true` |
| `lib/evidence/environment-binder.ts`, `lib/evidence/machine-ingest-auth.ts` | Tenant-controlled sources, adapter/contract/authorized machine intake | E3-owned resource auth consumed without rewriting permissions |
| `lib/evidence/multi-source-correlator.ts` | Action witness phase and deterministic multi-source join; exact ID tiers, plus bounded resource+actor fallback with limited inference | Prefer strong exact IDs and authoritative boundary; avoid claiming proof when joined by weak fallback |
| `lib/evidence/correlation-normalizer.ts` | Canonical correlation facts, declares missing producer-consumer linkage when not proven | Reuse, do not infer causal linkage from timestamp or similar display name |
| `lib/evidence/stream-continuity-projection.ts` | Deterministic sequence gaps/reorder/late/sampling/coverage promotion, scoped stream identity | Reuse continuity status as source-health qualification; no completeness from one accepted batch |
| `lib/evidence/runtime-drift-projection.ts` | Implemented narrow deterministic drift checks for tool-surface/authority continuity/config-version, semantic drift DEFERRED | Project existing qualified findings; don't invent LLM reasoning/thinking scanner or generalized score |
| `lib/assurance/effect-envelope-comparison.ts` | Existing proof of measured effect magnitude against explicit delegated bound for same principal/action/target | Consume authoritative target/effect witness only; `UNKNOWN_EFFECT != WITHIN_ENVELOPE` |
| `lib/ai-security/runtime-correlation-engine.ts`, `lib/ai-security/rules/runtime-correlation-rules.ts` | Existing registry-bound deterministic runtime detectors | Connect qualified alerts to source evidence/trace context; do not replace with AI classifier |
| `lib/engine-registry/producer-registry.ts` | Canonical producer identities including HELD MCP producers | Keep `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD`; no unapproved MCP producer activation |
| `lib/ai-inventory/system-workspace.ts`, `lib/ai-inventory/goal-availability-loader.ts`, `lib/ai-inventory/source-onboarding.ts` | Existing UI readiness/read projections and E1/E2 customer navigation | E4 publishes narrow typed qualification to owners; preserve preexisting API/MCP response shapes |
| `app/api/monitoring/telemetry/route.ts` and existing `haiec_get_telemetry_status` | Authenticated monitoring and MCP readiness endpoints | Reuse and extend optional read-only fields; do not create a separate MCP transport |

## 3. Actual gaps and priority order

### E4-P0 — Source freshness versus historical signal

**Source-backed issue:** `computeTelemetryReadiness` sets `SIGNAL_RECEIVED` from accepted batch count `>0`; `monitoring-read-model.ts` labels an active binder `ACTIVE` if **any** linked lastEventAt exists. Neither establishes that the source is still delivering. This is not wrong for *historical receipt* if clearly labeled, but it is misleading for *current source status*.

**Implementation:**
- Keep `TelemetryReadinessState` values stable (historical setup/receipt stages).
- Create **one minimal orthogonal qualified health/freshness read projection**, preferably on existing monitoring owner. Include source/binder, `latestReceivedAt`, **receipt-vs-event timestamps**, server as-of, optional source contract/expected interval, elapsed lag, freshness category with explicit `UNKNOWN` when there is no supported freshness policy.
- Separate **`receiptAge`** (ingest timestamp), **`eventAge`** (source timestamp with clock/provenance limits) and **stream continuity**. Producer health must not be inferred from a single event or lack of recent events without expectation/window.
- Require source to be active, system-bound, accepted and qualified for observed claims. Old accepted batches must not automatically make a deactivated binder “currently active.”
- Count rejected/quarantined batches separately where persisted; accepted-only source metrics cannot imply total attempted event volume or full telemetry coverage.
- Cross-surface copy must say **“signal received at [time]”** and “freshness known/unknown/stale under [policy]”, never “monitoring active now” solely from historical intake.
- Do not introduce a background polling daemon, new data store, SaaS uptime guarantee or fake default SLA.

**Acceptance:** active binder with historic lastEventAt does **not** assert current live delivery; inactive binder + accepted old batch remains historic; no expected interval → UNKNOWN policy, not false HEALTHY; two scoped binders do not borrow each other's freshness; no foreign tenant source disclosed.

### E4-P1 — Correlation and trustworthy action/effect witnesses

- Reuse existing normalized `correlationIds`, `TemporalProvenance`, `TargetIdentity`, `StateObservation`, action witness and authenticated upstream producer attestation.
- Show **correlation confidence/basis as deterministic categorical evidence**, e.g. exact action ID / exact trace/request ID / bounded fallback / unbound — do not treat heuristic join as established causality.
- Producer authority matters: `REQUESTED`, `AUTHORIZED`, `APPLIED`, `CONFIRMED` are distinct witness phases. A client-submitted `applied=true` on generic OTLP cannot establish `APPLIED`/committed target effect.
- Only a trusted target-side observer/authoritative producer with valid source registration, scoped identity and any required payload-bound attestation can promote a target effect. When no independent trusted witness is available, `NOT_VERIFIED`/UNKNOWN must remain.
- Emit **scoped read-only evidence references** and explicit missing proof conditions for E5/governance and U6 verification. No universal Kill Switch `VERIFIED` without a wired, separately proven target action.
- Preserve exact evaluation snapshot basis. New events cannot silently mutate a frozen U5 Evaluation; eligible source may be evaluated in a **new** run.

**Acceptance:** generic HTTP 200 / OTLP trace / claimed success / declared authority never becomes independently verified effect; cross-org IDs cannot correlate; duplicate/replayed events never double-count; weak matches remain limited/uncertain; actual authoritative proof is bounded by exact target/action/time and source trust.

### E4-P1 — Continuity, detection, source health and customer actionable copy

- Reuse `stream-continuity-projection.ts` for sequence gaps, late/reordered events, source declared sampling; `runtime-drift-projection.ts` for supported deterministic drift conditions, `runtime-correlation-engine.ts` for existing detector findings, and `monitoring-read-model.ts` for read paths.
- Distinguish *qualified finding* from *alert recommendation*, *policy violation* and *enforcement*. Token use, repeated call volumes, unexpected tools or changed target are **signals requiring scope/baseline**; no universal unsupervised “malicious action” label.
- Where baseline, tool allowlist, source clock, configured sampling or request binding are absent, produce explicit **NOT_ASSESSED/UNKNOWN** instead of a false anomaly. Source health and anomaly status must not be conflated.
- E1/E2 customer paths use the updated read metadata to explain **the next missing source**, not demand a mandatory new integration.
- Preserve JSON backward compatibility and legacy three-state telemetry status.

## 4. Proposed minimal cross-lane read-only shape (illustrative, not a new canonical schema)

```typescript
type SourceQualificationView = {
  aiSystemId: string;
  binderId: string;
  sourceIdentity: string;
  asOf: string;
  binderConfigured: boolean;
  historicalSignalReceived: boolean;
  lastIngestedAt: string | null;
  lastSourceEventAt: string | null;
  expectedHeartbeatSec: number | null; // canonical binder contract only
  freshness: 'FRESH' | 'STALE' | 'UNKNOWN' | 'NOT_CONFIGURED';
  freshnessBasis: 'DECLARED_CONTRACT' | 'VERIFIED_PRODUCER_POLICY' | 'UNKNOWN';
  qualifiedEvidenceRefs: string[];
  quarantinedRecords: number | null; // null if bounded view cannot quantify
  continuity: 'ESTABLISHED' | 'PARTIAL' | 'UNKNOWN';
  effectWitness: 'VERIFIED_SCOPED' | 'DECLARED_ONLY' | 'NOT_VERIFIED';
  limitations: string[];
}
```

**Never create a second persisted health or effect authority table just to hold this view.** Use canonical owner/status names where stronger interfaces already exist; this shape illustrates required distinctions.

## 5. E4 file ownership and code workflow

**E4 exclusively owns** `lib/evidence/telemetry-readiness.ts`, `lib/assurance/monitoring-read-model.ts`, `lib/evidence/adapters/otlp-receiver.ts` where necessary, `lib/evidence/streaming-telemetry-collector.ts`, existing `lib/monitoring/` read projections, and narrowly relevant monitoring UI/API/MCP adapter extension.

**Read-only dependencies:** `lib/evidence/ingest-service.ts`, binder/producer trust contracts, `lib/evidence/multi-source-correlator.ts`, continuity/drift, U5, U6; change them only if a specific source-backed defect requires the correct owning file, with compatible consumers and owner approval. E3 controls authentication and actual privileged guard/decision operations; E5 will consume target-effect witnesses, not rebuild E4.

**Current concurrent lanes:** HAIEC E3 PR #2220 already merged; PR #2141 CALLBACK control test remains OPEN and has separate control-test ownership; PR #2217 homepage design may still be open. Do not copy their staged code into E4 or rewrite `lib/control-test`, `lib/ucp`, manufacturing demo assets, `app/page.tsx` or KestrelVoice SaaS code.

## 6. Execution and focused checks

1. Read **live Main** and check all active PRs/branches before edits. Identify existing source/health information and decide the smallest correction.
2. Make the **P0 freshness/ACTIVE truth** correction first, with stable three-state backward compatibility. Use existing persisted timestamps and binder contract, not invented source heartbeat defaults.
3. Add **only** the missing correlation/effect qualification surfaced by existing owners and needed by the deployed customer monitoring read model. Prefer read projection/adapters rather than new event-persistence, risk/alert engines, telemetry transport or source schemas.
4. Wire into existing monitoring UI and existing `haiec_get_telemetry_status`/system E1/E2 view where relevant, reusing same canonical projection.
5. Focused unit/contract checks for configured-without-signal, historic-receipt/stale, missing expected interval, two binders, source clocks, foreign tenant, valid/revoked/unverified producer, duplicate replay, declared success and lack of target-effect proof. TypeScript and changed-file lint. Avoid broad repeated unrelated test runs.
6. Owner-approved coherent PR, merge via existing HAIEC workflow, verify automatic Vercel commit deployment (do not modify Git identity). Failed/unverified check means state accurately BLOCKED/NOT_VERIFIED.
7. Record exact code owner, route, PR, test results and deployed status in `common-repo-drive` current decisions, E3/E4 boundaries, task backlog and E4 handoff. Public common repo must not contain exploit-ready private details or credentials.
8. Finish with E5 handoff: how verified target effect + human decision + scope gate combine without treating a configured control as an applied/observed result. **Do not start E5 or external Kestrel acceptance in this E4 lane.**

## 7. Explicit STOP conditions

Stop E4 expansion and report a narrow blocker instead of inventing data when:
- no qualified clock/expected interval exists to call a source FRESH/STALE;
- no trusted target-side action/effect witness is wired;
- a desired correlation join would require inferred causality, unsafe cross-tenant linking or LLM judgment;
- an MCP SaaS producer is HELD in canonical producer registry;
- source rows or tests live in an unrelated PR owned by another Devin;
- customer consent/tenant authorization for telemetry producer data does not exist.

**This does not mean stop the entire E4 task:** deliver the independent source-freshness truth improvement and explicit limitations even if these optional integrations cannot be established.

## 8. Deliverables and acceptance

- One canonical versioned, documented **freshness-qualified source health** view over existing binders + accepted/quarantined intake.
- Continued exact three-state `TelemetryReadinessProjection`; both old and new fields correctly described, no hidden changed status semantics.
- Existing monitoring UI/MCP and E1/E2 customer workspace show **historical received versus current qualified source** without new auth/intake path.
- Strong, bounded action/effect proof where source exists; otherwise `NOT_VERIFIED`; E5-ready ref and missing source list.
- Existing deterministic correlation, continuity and drift reused; no duplicated event pipeline or new AI classifier.
- Exact PR/revision, targeted tests, known UNKNOWN limitations, verified deployment and Common Repo update.
- **External KestrelVoice SaaS remote MCP acceptance remains DEFERRED**, with later synthetic tenant, separate HAIEC org, isolated external working directory, numbered redacted operations and screenshots.

## 9. Devin execution instruction (copy this whole document or direct Devin to read it)

**Start E4 implementation now.** Read this document, refresh HAIEC Main from `c3de967e`, inventory existing OTLP/collector/readiness/correlator/continuity/monitoring and their UI/MCP/API read paths. Implement only missing deterministic source freshness/health and safe correlated effect-proof *projections*; no duplicate instrumentation, no source schema explosion, no new SIEM/alert model. Preserve E3 boundaries and E1/E2 backward compatibility. Use focused code and negative truth tests, create one owner-approved coherent PR, merge into Main when applicable gates pass, verify Vercel deployment, update Common Repo Drive including the E4 register and E5 handoff. Do not start external Kestrel test or edit KestrelVoice. Finish with evidence-bound status and remaining UNKNOWNs.

---

## Implementation record — E4 deployed (2026-10-17)

**Status: `DEPLOYED_VERIFIED`.** HAIEC PR [#2224](https://github.com/subodhkc/haiec-website/pull/2224) merged to `Main` at squash commit `d56db173e` (`d56db173ef8b5a839b8d124ad66ffc15f76890d9`); branch `feat/e4-telemetry-source-health-correlation-20261017` @ `a03563ef0`. Vercel production deployment `7WPcj6iNmiTSwi8ZwNMcnjsY2Duy`.

### Delivered per §8 acceptance

- **One canonical freshness-qualified source-health view**: `computeSourceHealth` + `summarizeSourceFreshness` on the existing owner `lib/evidence/telemetry-readiness.ts`. `SourceHealthView` separates binder configured / historical signal / latest server ingestion (`lastIngestedAt`) / latest producer event time (`lastSourceEventAt`) / declared-cadence freshness (`FRESH`/`STALE`/`UNKNOWN`/`NOT_CONFIGURED`) / continuity + quarantine counts / next action. Exposed on `TelemetryStatusProjection.sourceHealth`.
- **Three-state contract preserved**: `NOT_CONFIGURED` / `CONFIGURED_NO_SIGNAL` / `SIGNAL_RECEIVED` unchanged in `TelemetryReadinessProjection`; freshness is a parallel independent qualification.
- **Historical vs current source visible everywhere**: monitoring read model + projection (`SourceHealth.qualification`, event `correlationBasis`/`attribution`), source-health table + telemetry panel + source detail page, system workspace card, E1/E2 goal-availability + onboarding wording, and `haiec_get_telemetry_status` MCP description — all read the same canonical projection.
- **Bounded effect proof**: event refs carry `correlationBasis` (exact `actionCorrelationId` → strong IDs → bounded actor+resource window → singleton) and `attribution` (`V1_IDENTITY` vs `V2_PAYLOAD_BOUND` from already-persisted `sourceAuthority.upstreamProducer`); `SourceHealth.effectWitness` = `VERIFIED_SCOPED` / `DECLARED_ONLY` / `NOT_VERIFIED`. Self-declared effect never upgrades. No second witness engine — reuses `multi-source-correlator` join precedence and conservative `ActionWitnessPhase` caps.
- **Declared cadence, never an SLA**: optional `expectedSignalIntervalSec` / `signalExpectationNote` on the existing binder `contract` JSON. No valid expectation → freshness `UNKNOWN`; no invented heartbeat.

### Validation

`vitest run` focused cone: **109/109** (`telemetry-source-health` 21 new + `engine-batch-y2` 13 + `source-onboarding` 17 + `goal-availability` 37 + existing correlator/continuity coverage). `tsc --noEmit` clean. Changed-file ESLint clean; repo-wide ESLint fail and Vercel preview block remain the documented pre-existing baseline. CI: TypeScript + New-Violations Gate + U6 + px0-product-truth **PASS**.

### Remaining limitations (explicit non-claims)

- `FRESH`/`STALE` require a source-declared expectation; all sources without one read `UNKNOWN`.
- `VERIFIED_SCOPED` requires `V2_PAYLOAD_BOUND` attestation plus wired target-side authority — most sources read `DECLARED_ONLY`/`NOT_VERIFIED`.
- Kill Switch target enforcement remains `NOT_WIRED`/`NOT_VERIFIED` (E5 owns the policy→enforcement path).
- `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` preserved; telemetry presence never mutates a frozen U5 evaluation.
