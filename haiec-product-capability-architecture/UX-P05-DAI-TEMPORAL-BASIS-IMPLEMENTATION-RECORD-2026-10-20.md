# DAI Evaluation-Bound Temporal Basis Correction — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `fix/dai-eval-bound-temporal-basis` @ `9dfe4b07a`
Base: `Main` @ `6532e75cb` (MCP Investigation Bridge, PR #2248)
PR: #2249 — https://github.com/subodhkc/haiec-website/pull/2249
Merge commit: `Main` `13c09ba65`
Vercel production deployment: `7149603001` — **SUCCESS** on exact merge SHA (GitHub deployment-status verified)
Scope: `lib/assurance/dai-assembler.ts`, `lib/mcp/server.ts`, `lib/mcp/capability-guide.ts`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `app/(workspace)/monitoring/dai/[surfaceId]/page.tsx`, `tests/unit/mcp-investigation-bridge.test.ts`, `tests/unit/dai-rule-confirmation.test.ts`. Seven files; no new endpoints, tools, engines, registries, or ingestion paths.

Governing review: [UX-P05 MCP Bridge independent review — temporal boundary](UX-P05-MCP-BRIDGE-INDEPENDENT-REVIEW-TEMPORAL-BOUNDARY-AND-P06-HANDOFF-2026-10-17.md) — P1 finding: `assuranceEvaluationId` bound reads used current APPROVED envelopes and unbounded delegation evidence, so `basis: 'EVALUATION_BOUND'` could silently borrow authority established after the bound evaluation's snapshot.

## What shipped (P1 — historical evidence-basis integrity)

**Completed-evaluation requirement.** Both the assembler and the MCP handler now require `evaluationStatus === 'COMPLETED'` for any evaluation-bound read. A pending or failed evaluation returns a bounded `found:false` read carrying `BOUND_EVALUATION_NOT_COMPLETED` — never `basis:'EVALUATION_BOUND'` presented as a frozen result. Foreign/missing/cross-system evaluation IDs still collapse to the same indistinguishable `AI_SYSTEM_NOT_FOUND` 404.

**Binding-recorded historical envelope recovery.** For bound reads, delegated-policy facts come *only* from the envelope identity the evaluation's profile binding durably recorded — `operatingEnvelopeId` + `operatingEnvelopeVersion` + `operatingEnvelopeDigest`, resolved by `findFirst` on envelopeId+version+organizationId+aiSystemId (the same resolve convention as `u6-package-service`). Integrity checks:

- Recovered row's `envelopeDigest` must equal the binding's recorded digest (when recorded).
- Binding-recorded envelope state must be `APPROVED` at bind time.
- Missing, mismatched, or absent-record cases leave the bound envelope unset → delegated envelope facts are **withheld** and `HISTORICAL_POLICY_NOT_ESTABLISHED` is appended to `limitations` — never filled from the current APPROVED envelope.

**Delegation-evidence snapshot cutoff.** `evidence.collectedAt <= boundEvaluationSnapshot` is applied on bound reads; post-snapshot delegation rows never union into the frozen plane.

**Bound surface emission.** A completed bound evaluation always emits its system surface even when every fact family is empty — the answer is `NOT_ASSESSED` + explicit limitations + a distinct `daiEvaluationDigest`, not an absent surface.

**Current-assembled reads unchanged.** No `evaluationId` → identical prior behavior.

## What shipped (P2 — investigation clarity)

- DAI page header labels the value **"DAI evidence digest"** (was bare `eval`).
- `buildContextualAgentPrompt` now instructs the agent to compare the tool's returned `daiEvaluationDigest` against the view's digest; a mismatch must be disclosed as a changed/superseded basis, never narrated as the screen's own result.
- `haiec_capability_guide` `examine_action_authority` evidence requirements now distinguish assembled-current DAI (persisted facts, no completed Evaluation required) from completed-U5-dependent frozen reads.

## Boundaries preserved

Read-only `report:read`; API-key tenant scope unchanged; compositional guard (caller `surfaceId` ≠ bound eval's system → empty) unchanged; no approval/write surface; cross-system delegated effects remain `UNVERIFIED`; no frozen U5 disposition, historical report, approval receipt, or engine change.

## Verified

- `tests/unit/mcp-investigation-bridge.test.ts` — **27/27**, including 12 temporal tests: two completed evals with different snapshots produce distinct digests; a policy update after the earlier eval does not widen the earlier bound read's delegated scope; delegation evidence added after the earlier snapshot is excluded; envelope digest mismatch withholds policy facts + exposes the limitation; non-completed eval → `BOUND_EVALUATION_NOT_COMPLETED`; digest-compare and page-label structural locks.
- `tests/unit/dai-rule-confirmation.test.ts` — bound-read fixtures updated to the completed-eval contract; snapshot rule cutoff and run-scoped telemetry still pass.
- Regression cone **256/257**; sole failure is `mcp-assurance > get_telemetry_status reads persisted binder + intake state tenant-scoped`, reproduced on clean Main — pre-existing baseline.
- `tsc --noEmit` clean; ESLint clean on all touched files (one pre-existing `MasterAssuranceReport` dep warning elsewhere is unrelated to this diff).
- CI: TypeScript ✓, ESLint New-Violations ✓, U6 static + PostgreSQL integration ✓, px0-product-truth ✓; repo-wide ESLint and Vercel preview remain baseline failures with zero findings on touched files.

## NOT_RUN / unestablished

- Real MCP client round-trip against the bound-read path — `NOT_RUN`; no scoped test credential available and none requested.
- Production clickthrough of the digest-freshness prompt copy — `NOT_RUN`; content locked structurally and unit-tested.
- Historical envelope recovery in production depends on bindings having recorded `operatingEnvelopeId/Version` — legacy bound evaluations without those fields now honestly emit `HISTORICAL_POLICY_NOT_ESTABLISHED` rather than borrowing current policy.

## Next

**UX-P06 Sources & Evidence Onboarding** — dedicated session; reuse `InvestigateWithAiAgent` selectively for missing-source, telemetry-config, evidence-prep and intake-blocker investigation. No new ingestion paths, no lifted security holds, no invented qualified evidence, no approver impersonation, no assistant auto-execution. KestrelVoice-through-MCP recording remains a separate acceptance deliverable.
