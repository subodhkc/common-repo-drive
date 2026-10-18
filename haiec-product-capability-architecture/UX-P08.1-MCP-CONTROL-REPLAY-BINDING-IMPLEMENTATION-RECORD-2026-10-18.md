# UX-P08.1 — MCP Control Result and Replay Identity Integrity — Implementation Record (2026-10-18)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `fix/uxp081-replay-binding` @ `1df548ce8`
Base: `Main` @ `99465e853` (UX-P08, PR #2254)
PR: #2256 — https://github.com/subodhkc/haiec-website/pull/2256
Merge commit: `Main` `5cd6875cd`
Vercel production deployment: GitHub deployment `7151938851` — **SUCCESS** on exact merge SHA `5cd6875cddceed56cab4bb2b07a76583f88a5735` (deployment-status verified via GitHub deployments API)
Scope: `components/ai-inventory/InvestigateWithAiAgent.tsx` (prompt text only), `lib/mcp/server.ts` (`haiec_control_replay` handler only), `tests/unit/mcp-assurance.test.ts` (+fixture +5 tests), `tests/unit/uxp081-mcp-replay-binding.test.ts` (new, 8 tests). No engine change, no persistence-schema change, no new tool/store/workflow, no UI redesign.

Governing docs: [P08 acceptance + P08.1 gate + P09 handoff](UX-P08-INDEPENDENT-ACCEPTANCE-MCP-CONTROL-REPLAY-BINDING-GAP-AND-P09-HANDOFF-2026-10-18.md), [P08 record](UX-P08-CONTROLS-OPERATIONS-IMPLEMENTATION-RECORD-2026-10-20.md).

## Gaps corrected (independent post-P08 acceptance)

**G01 — contextual result prompt.** The copied `control_proof` prompt bound `haiec_control_assurance` to exact `aiSystemId` + `controlId` but named only `controlId` for `haiec_control_results`, which permits an organization-wide read when `aiSystemId` is omitted — a copied prompt could attribute a different system's row to the selected control.

**G02 — replay result→system binding.** `haiec_control_replay` verified that the requested AI System belongs to the organization, then invoked `replayNativeResult({organizationId, resultId})` — the org-scoped store does not enforce the requested `aiSystemId`, so a valid result from another system in the same org could replay `VERIFIED` under the requested system.

## What shipped

**G01 fix (prompt text only)** — the `control_proof` prompt now instructs:
- `haiec_control_assurance` with the exact `aiSystemId` + `controlId`.
- `haiec_control_results` with the same exact `aiSystemId` + `controlId`, explicitly stating that omitting `aiSystemId` queries the whole organization "which is not this control's proof".
- `haiec_control_replay` with the exact `aiSystemId` + the persisted `uctr-*` resultId.
- A new clause requires the assistant to verify each returned row's `aiSystemId` + `controlId` match the selected identity before attributing proof ("a mismatched row is not applicable to this control").
- Native/legacy separation, system-context-only join rule, missing-record and replay-caveat clauses preserved verbatim. Other context kinds unchanged and read-only. `haiec_control_results` tool contract itself untouched — legitimate org-wide searches remain.

**G02 fix (MCP boundary only)** — after `verifyAiSystemOwnership`, the handler now retrieves the persisted native result once via the existing `NativeResultStore.get(organizationId, resultId)` (read-side row verification intact) and requires `stored.organizationId === ctx.organizationId` (structural) and `stored.aiSystemId === requested aiSystemId` before invoking `replayNativeResult`. A verified same-org foreign-system result resolves to the same bounded non-disclosing shape as an absent row — `{found: false, status: 'NOT_RUN', reason: 'RESULT_NOT_FOUND'}` — the replay engine and bundle store are never reached, and no foreign-system metadata is returned. Same-system replay path and output unchanged; frozen replay semantics unchanged; unknown-result behavior unchanged.

**Adjacent inspection** — repo-wide search found exactly one caller-supplied `aiSystemId`+`resultId` surface (this handler). Internal replay consumers (`control-proof-deps`, `detection-deps`, controlled pilot, tests) operate over already system-bound records — no adjacent misbinding found; nothing recorded as a distinct new gap.

## Verification

- `TEST_VERIFIED`: `uxp081-mcp-replay-binding.test.ts` 8/8 (exact-id binding per tool call, identity-verification clause, caveats, other contexts read-only). `mcp-assurance.test.ts` +5 boundary tests — real UCP composition (`runNativeControlTest` + in-memory stores) projected onto mocked prisma rows so the REAL `verifyNativeResultRow`/`rowToBundle` run: same-system → `VERIFIED`; same-org foreign-system → bounded `NOT_RUN` with `ucp_replay_bundles.findFirst` never called and no `sys-b` leak; foreign-org → identical `NOT_RUN`; unknown id → honest `NOT_RUN`; foreign-system request → existing `AI_SYSTEM_NOT_FOUND` denial precedes any result lookup.
- Regression cone green: `ucp-replay` 13/13, `uxp08-controls-operations` 14/14, `sprint10`/`sprint11-controls`, `control-catalog`, `control-catalog-selection`, `control-proof-journey`, `control-visibility-a02` — 36/36 + suite pass.
- `CODE_VERIFIED`: `tsc --noEmit` clean; ESLint clean on all four touched files. CI: TypeScript ✓, ESLint New-Violations ✓; repo-wide ESLint + Vercel-preview are established baseline failures with zero hits on this diff.
- Known baseline failures NOT introduced by this diff: `get_telemetry_status` (pre-existing), `control-visibility-route.test.ts` (stale `prisma:{}` mock vs E6.2-era delegate — test file last touched 2026-10-12, predates route chain change).
- `NOT_RUN`: real external MCP client round-trip (no scoped credential); live production clickthrough; viewer/multi-org key variations (unit-level tenant denial covered by mock-matrix).

## Boundaries maintained

`haiec_control_results` org-wide query capability preserved by design; frozen replay semantics unchanged; no new replay engine, result store, or schema; tenant/foreign-resource indistinguishability preserved (absent and foreign resolve identically); read-only MCP surface; no machine-initiated decision; ingestion hold untouched.

**Next dedicated session: UX-P09 My Work / Human Governance** — preserve human approvals, server-side assignment, reviewer SoD, CAS request digest, expiry, effective-context reliability, `CONTEXT_UNAVAILABLE`, role-limited decision packets. No machine-initiated approvals, no new governance engine, no simulated role switch, no duplicate notification platform.
