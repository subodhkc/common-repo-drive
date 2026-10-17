# E5 — Governance → Native Enforcement → Target Effect Proof

**Prepared:** 2026-10-16 America/Chicago. **Implementation status: HANDOFF_READY, CODE_NOT_STARTED_FOR_E5.**  
**Verified HAIEC Main:** `d56db173ef8b5a839b8d124ad66ffc15f76890d9` ([E4 PR #2224](https://github.com/subodhkc/haiec-website/pull/2224), merged).  
**Last inspected common repo:** `8bbafd51eedc4fd6ea854c411bc5407cb6c0d4b0`. Always refresh HEAD before code work.

## 1. Scope and source truth

E5's core purpose is to **compose** already implemented evidence-bound assurance, versioned policy, authorized human decision, native execution guard and E4 qualified target-side effect witness. It is **not** a universal HAIEC network interceptor, another control-scoring engine, or blanket SaaS Kill Switch claim. Generic provider-agnostic by contract; real enforcement stays *inside the consenting target platform's own execution point*.

Source-backed HAIEC owners to inspect on current Main:
- `lib/assurance/deployment-decision.ts` and `deployment-decision-persistence.ts`: human assigned reviewer, SoD, request digest/compare-and-swap, scope, conditional approval, revoke/supersede, effective-state read model. **Human approval is not policy or permission delegation.**
- `lib/assurance/operating-envelope.ts`, `envelope-persistence.ts`: approved immutable policy version and envelope digest; `DRAFT` cannot authorize.
- `lib/assurance/guardrail-decision.ts`, `guardrail-decision-persistence.ts`: CONFIGURED_ONLY → EVALUATED → DECISION_ISSUED → ENFORCEMENT_APPLIED → MEDIATION_OUTCOME_ESTABLISHED ladder, evidence-gated.
- `lib/kill-switch/execution-guard.ts`: existing local runtime `assertAiExecutionAllowed` guard; existence in HAIEC source does NOT mean an external target currently invokes it.
- `app/api/kill-switch/trigger/route.ts`, `recover/route.ts`: E3 tenant and privileged-operation corrections, not proof of target effect.
- `lib/control-test/tmf-control-transport.ts`: existing stateless/frozen policy invocation and separate decision vs enforcement semantics, with `EVALUATE/EMIT/CALLBACK/PULL` transport. **PR #2141 pending for CALLBACK; separately owned; avoid overlap or assume it merged.**
- `lib/evidence/environment-binder.ts`, `ingest-service.ts`: scoped telemetry binder/producer access and V2 payload-bound attestation. Existing witness promotion is source/evidence qualified, not a self-reported HTTP 200.
- `lib/evidence/multi-source-correlator.ts`, `lib/evidence/telemetry-readiness.ts`, `lib/assurance/monitoring-read-model.ts`: E4 source health, correlation, authoritative witness readiness. `VERIFIED_SCOPED` **indicates a source capability/basis**, not evidence that a particular action was applied/committed.
- `lib/assurance/deployment-governance-projection.ts`: U5 disposition, approved policy, human decision, lifecycle kept separate.
- U5 `assurance_evaluations` and U6 evaluated snapshot / package / receipt verification owners remain immutable consumers; no implicit evaluation rerun.

Additional ownership constraints: currently open #2141 `lib/control-test` and #2217 homepage must be verified before editing; do not touch KestrelVoice, manufacturing, LogSense, AWS integration, E4 ingestion, or user-facing marketing unrelated to observed truth.

## 2. Required operational ladder and decision boundary

**Five orthogonal assurance evidence planes** stay REQUESTED, POLICY_AUTHORIZED, EFFECTIVELY_GRANTED, CODE_CAPABLE, OBSERVED. **E5 operations use a separate state ladder**, not a sixth evidence plane:

1. `NOT_WIRED`: target-native enforcement seam not registered and verified.
2. `CONFIGURED`: tenant has a requested policy/guard setup, *not* applied.
3. `AUTHORIZED`: exact active approved policy + current scoped human decision (if required) + verified invoking actor/delegation and target/resource + valid digest/expiry/version — *not* actual execution authority by itself.
4. `DISPATCH_ELIGIBLE`: native target integration registered, consented, scoped and preflighted; this is not dispatch.
5. `DISPATCH_REQUESTED`/`ACCEPTED`/`REJECTED`/`UNKNOWN`: distinct dispatch and provider acknowledgement outcomes, preserving idempotency and failure.
6. `APPLIED_AT_TARGET` / `BLOCKED_AT_TARGET` / `NOT_VERIFIED`: actual target-enforced operation proof only from the trusted native execution guard/source, with action and policy bindings.
7. `EFFECT_VERIFIED` / `NOT_VERIFIED`: independently qualified, exact-target outcome/readback where available, not inferred from accepted dispatch or a guard/LLM assertion.

This is an illustrative **projection ladder**, NOT a mandate to add a new persisted enum or table. Map to existing canonical names where possible and retain explicit `UNKNOWN` states for partial evidence.

Never conflate:
`ASSURANCE_ALLOW != HUMAN_APPROVAL != EXECUTION_AUTHORIZED != DISPATCH_SUCCEEDED != ENFORCEMENT_APPLIED != MEASURED_TARGET_EFFECT`.
Likewise `POLICY_AUTHORIZED != EFFECTIVELY_GRANTED` and `PERMISSION != DELEGATION`.

## 3. What Devin must implement (highest value first)

**E5-A — Target-native integration inventory and seam acceptance.** Inspect *actual* existing target enforceable code paths, current target integrations, authorization and evidence owner. Inventory which operation type(s) have a reachable local enforcement point vs are merely configured, simulated or documentation. Reuse any legitimate native adapter; **do not claim a live Kestrel/third-party integration without separately authorized target deployment and verified receipt**. If none are wired, implement an opt-in controlled **non-production test fixture native guard** for deterministic evidence-path acceptance, clearly tagged fixture-only. Do not falsely label it SaaS enforcement. No additional live customer side effects.

**E5-B — Minimal generic native action adapter/bridge.** Only add the smallest interface **if source inventory proves no equivalent already exists**, with exact `organizationId`, `aiSystemId`, actor/principal, operation/target, policy/envelope version+digest, human decision ID+digest/expiry/conditions if relevant, request/idempotency ID and evidence/correlation refs. Target-native guard determines whether/what actually executes. HAIEC policy evaluation and decisions are precomputed or distributed outside the hot path; avoid requiring HAIEC cloud availability/latency for every model/tool call. Clearly separate `preview`, `dry-run`, `configured` and `applied`.

**E5-C — Fail-closed authorization before consequential effect.** Verify organization and system binding before resource disclosure or side effect. Check approved envelope (not DRAFT/revoked/superseded/stale), conditional human approval matching **exact request key/version/digest**, assigned reviewer SoD, approved operation/resource/environment and effective authority/delegation, expiration/revocation, actual native target identity. No generic non-viewer or API key elevation to human approval. Missing/contradictory governing evidence → DENY, HOLD/REVIEW or NOT_AUTHORIZED according to the existing owner's rules; **no speculative ALLOW**.

**E5-D — Dispatch and outcome receipt truth.** Use existing bounded machine intake, correlation, E4 V2 attestations and target authority qualification. Correlate exact attempt → policy/decision → native guard result → provider acknowledgement → independent target committed/readback **without fabricating joins**. Ensure duplicate/replayed/out-of-order events cannot cause double dispatch or false proof. Where no authenticated target witness exists, stay `NOT_VERIFIED`, even after API HTTP 200. No new verdict store. Do not bypass the intake trust checks via self-attested `verified` flags.

**E5-E — One coherent customer workflow.** Reuse E1/E2 customer availability and existing governance/monitoring/Kill Switch UI, API and MCP where already appropriate. For one opted-in non-production native operation demonstrate **separate** states for human decision, policy approval, source integration, dispatch eligibility, local guard decision, observed target effect and U6/report evidence (only when an actual canonical Evaluation/receipt exists). Else show the missing native seam, why it is blocked, next action and `NOT_WIRED`. Avoid a new mandatory six-stage onboarding funnel.

**E5-F — Documentation and risk gates.** Reconcile E3 security/claims and E4 telemetry truth. Preserve `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` until its actual separate release owner changes it. Do not create Kestrel tenant, modify KestrelVoice code, send real phone/SMS/calendar/CRM actions, or execute live Kill Switch against customer systems for this assignment.

## 4. Targeted verification, release and handoff

Run focused typecheck, changed-file lint, and minimal targeted **negative security / actual non-production guard behavior checks**, covering unauthorized org/system, wrong target/operation, stale policy, DRAFT/revoked policy, pending/rejected/expired/wrong-request approval, invalid delegation, revoked key, replay/double dispatch, unavailable target/native PEP, source-only success, malformed/duplicate witness, unverified producer, unknown target readback and correct fixture-only proof boundary. Existing unrelated broad suites optional unless necessary for safety.

Use one coherent PR if safe, respect required reviews/gates, merge to HAIEC `Main` on approval and verify **exact deployed SHA/Vercel** (do not adjust Git identity). If provider integration is not supported/authorized, ship the truthful read interface and fixture only, explicitly **PARTIAL / LIVE_PROVIDER_NOT_WIRED**, not `FULL_ENFORCEMENT_VERIFIED`.

**Always sync** public `subodhkc/common-repo-drive/main`: current decisions, this handoff, E3/E4/E5 boundaries, enhancement backlog, capability/source matrix if changed, Devin handoff. Record PR/merge SHA, actual tests, deployed commit, internal vs external target scope, evidence IDs (sanitized), `NOT_WIRED/NOT_VERIFIED` and remaining E6/E7 dependencies. Keep credential values, private exploit details and original customer media out of public GitHub.

**Deferred independent Kestrel external acceptance is NOT part of E5**. Once E5–E7 and release gates complete, its mandatory deliverables are **complete restricted raw screen capture** plus a separately **narrated, professionally edited, operation-first, layer-wise 16:9 video**, scene/script/captions/recording manifest/step-ID-to-timecode/evidence map/sanitized screenshots. User expects footage of real steps, not a marketing slide deck or invented successful enforcement; see `HAIEC-ENHANCEMENT-FIRST-RESEARCH-ROADMAP-AND-KESTREL-EXTERNAL-MCP-ACCEPTANCE-2026-10-16.md` §T1E.

**Definition of done:** source-true authorization-to-native-target workflow is available for an explicitly scoped *implemented* target seam; all other unimplemented integrations transparently `NOT_WIRED`; proper independent target receipt required for verified applied/effect claims; focused negative tests, deployment status and Common Repo updated. No redundant engines/registries/telemetry stores and no customer-impacting actions.

**Next after E5:** E6 unify per-system customer case, U5/U6, decisions, authority, telemetry and truly qualified protection into evidence-bound navigation and reporting; E7 remote MCP discovery/usability; then controlled Kestrel external acceptance + two mandatory videos.

---

## Implementation record — E5 deployed (2026-10-17)

**Status: `DEPLOYED_VERIFIED` (partial — no live target integration wired).** HAIEC PR [#2225](https://github.com/subodhkc/haiec-website/pull/2225) merged to `Main` at squash commit `2e07398da` (`2e07398d…`); branch `feat/e5-governance-to-native-enforcement-20261017` @ `b6f271dc9`. Vercel production deployment `8MBh2DU8nDS8CgFnX3NngbvBS6Aj`.

### Source inventory findings (E5-A — verified at code level)

- `lib/kill-switch/execution-guard.ts` `assertAiExecutionAllowed` is a real fail-closed local guard (fail-closed on unknown system, records BLOCKED_ATTEMPT + time-to-effect) — **invoked by no production caller**; only `invalidateCache`/`validateSeparationOfDuties` are consumed by the E3-secured trigger/recover routes.
- `kill_switch_systems` has **no `aiSystemId` binding** — guards are organization-scoped registrations; per-system protection remains `NOT_ESTABLISHED` (governance projection lock kept verbatim).
- `guardrail_decisions` ladder is **live**: runtime probes advance persisted rungs (`ENFORCEMENT_APPLIED` on AUTH_FAILED) through `advancePersistedGuardrailDecision`.
- `deployment_decisions` (SoD/digest CAS/effective state) and `operating_envelopes` (DRAFT/APPROVED/SUPERSEDED/REVOKED + digest) are complete owners — reused, not rebuilt.
- `lib/control-test/tmf-control-transport.ts` untouched; PR #2141 separately owned and still open.

### Delivered

- **`lib/assurance/enforcement-read-model.ts`** — the §2 ladder as a read-only projection: NOT_WIRED → CONFIGURED → AUTHORIZED → DISPATCH_ELIGIBLE → DISPATCH_* → APPLIED/BLOCKED_AT_TARGET → EFFECT_VERIFIED/NOT_VERIFIED. Composed from approved envelope + effective decision + active `AUTHORITATIVE_CONTROL_BOUNDARY` binder bound to the aiSystemId + exact-surfaceId guardrail ladder rungs + bound-binder outcome records + V2 payload-bound attestation. Org-scoped kill-switch facts reported separately, never attributed. Dispatch ≠ applied ≠ verified; V1/self-report never reaches EFFECT_VERIFIED.
- **`lib/kill-switch/native-enforcement-adapter.ts`** — provider-independent adapter contract + opt-in non-production `FixtureLocalGuardAdapter` (permanently `fixture: true`, refused in production, requires `HAIEC_NATIVE_GUARD_FIXTURE=1`). Empty registry → `NOT_WIRED`.
- **Surfaces**: `GovernancePortfolioRow.enforcement` + governance page Enforcement column; `GovernanceProjection.enforcement.operationStatus` → `GET /api/inventory/systems/[id]/governance` + `haiec_get_governance` (description updated). Pre-existing dead `frameworkReproducibility` binding fixed in the same cone.

### Validation

`vitest run` focused cone **53/53** (14-case enforcement-read-model suite + execution-guard 5 + telemetry-source-health 21 + engine-batch-y2 13); `tsc --noEmit` clean; changed-file ESLint clean; CI TypeScript + New-Violations Gate + U6 + px0 pass; baseline repo-wide ESLint + Vercel-preview conditions unchanged.

### Remaining limitations (explicit non-claims)

- **No live target integration is wired** — all external seams `NOT_WIRED`; the fixture is test-only.
- Per-system kill-switch binding `NOT_ESTABLISHED` (no schema binding; migration would need separate approval).
- `EFFECT_VERIFIED` requires V2 payload-bound outcome records through a bound control-boundary source.
- `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` preserved; no Kestrel/customer actions taken.

### E6 handoff note

E6 unifies per-system customer case + U5/U6 + decisions + authority + telemetry + qualified protection into evidence-bound navigation/reporting — the E5 `operationStatus` ladder is the protection-truth input. Then E7 remote MCP discovery, then gated Kestrel external acceptance.

---

## Implementation record — E5.1 enforcement-truth remediation deployed (2026-10-17)

**Status: `DEPLOYED_VERIFIED` (corrected read model; live provider still `NOT_WIRED`).** An independent source review of the E5 read model found operational status could be promoted beyond its supporting evidence. HAIEC PR [#2226](https://github.com/subodhkc/haiec-website/pull/2226) merged to `Main` at `638d135ba`; branch `fix/e5.1-enforcement-truth-20261017` @ `ba40cf53b`. Vercel production deployment verified on the merge SHA — deployment `7adJUwfMMP429K1Z82H1DbQDHTSc` SUCCESS.

### Root cause (supersedes parts of the E5 record above)

The first E5 read model graded four different evidence facts as a single promotion ladder, so:

- `highestEstablished` reached `AUTHORIZED` on an APPROVED envelope alone, and on a `CURRENT` decision without checking that the decision's request key was the same scope being authorized.
- A declared `AUTHORITATIVE_CONTROL_BOUNDARY` binder counted as `DISPATCH_ELIGIBLE` — an evidence-source declaration treated as an operational seam.
- A persisted dispatch-type evidence record counted as `ACCEPTED` — a recorded request treated as target acknowledgement.
- Guardrail `ENFORCEMENT_APPLIED` probe rungs fed the applied rung — probe-level observation treated as target-enforced proof.
- Applied/effect rungs accepted DECLARED-only and uncorrelated outcome records — self-report and unrelated history treated as qualified evidence.

### Corrected semantics (locks now enforced in the read model)

- `POLICY_APPROVED != EXECUTION_AUTHORIZED` — `AUTHORIZED` requires a `CURRENT` requestKey-scoped decision bound to the current envelope version/digest, or an envelope-declared `approvalRequirements` entry with `requiresApproval=false` for the exact operation. An absent decision never infers "approval not required" (`humanApprovalRequired: 'UNKNOWN'`).
- `DECLARED_SOURCE != OPERATIONAL_SEAM` — binders surface as `SEAM_DECLARED`; `DISPATCH_ELIGIBLE` requires a registered non-fixture adapter verified `installed()` + `authorized()` + operation support + policy-digest match. Fixture adapters are permanently `eligible:false`.
- `DISPATCH_RECORDED != TARGET_ACCEPTED` — dispatch rows are `REQUESTED`; `ACCEPTED`/`REJECTED` require control-boundary role + `AUTHENTICATED` attestation + explicit outcome.
- `GUARDRAIL_PROBE_APPLIED != TARGET_ENFORCED` — probe ladder moved to a separate `guardrailEvidence` plane.
- `applied` requires `AUTHENTICATED` boundary outcome records; `EFFECT_VERIFIED` requires `V2_PAYLOAD_BOUND` + `AUTHENTICATED` + exact kind/namespace/value correlation to a request in scope + temporal validity. Unrelated historical outcomes stay `NOT_VERIFIED`.
- `HISTORICAL_OUTCOME != CURRENT_PROTECTION` — `latestAt` + `historicalNotice` surfaced; `readDegraded` reports `UNKNOWN` rather than confident `NONE` when a backing read fails.

### Validation — `TEST_VERIFIED`

26/26 focused read-model tests covering every lock + tenant binding + fixture boundary; 15/15 system-evidence-projections regression; `tsc --noEmit` clean; changed-file ESLint clean; CI profile identical to E5 (TypeScript, New-Violations Gate, U6 static + PostgreSQL integration, px0-product-truth PASS; baseline ESLint + Vercel-preview unchanged).

### Still `NOT_WIRED` / `NOT_VERIFIED`

- No live target integration is wired — `DISPATCH_ELIGIBLE` requires a registered production adapter and none exists.
- Per-system kill-switch binding remains `NOT_ESTABLISHED` (org-scoped `kill_switch_systems`, no `aiSystemId` column).
- No production dispatch/outcome evidence exists; `applied`/`effect` remain `NONE`/`NOT_VERIFIED` on real systems.
- `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` preserved; zero customer-impacting actions.

### E6 safety verdict

**E6 is safe to proceed** — the projection no longer asserts authority, eligibility, acceptance, application, or verified effect beyond evidence. `highestEstablished` remains for backward compatibility but every rung is now backed by a per-fact field (`policy`/`authority`/`targetSeam`/`dispatch`/`guardrailEvidence`/`applied`/`effect`) that E6 should render independently rather than as a single progression.
