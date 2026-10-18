# MCP Investigation Bridge — Contextual AI-Agent Assistance + Canonical DAI MCP Parity — Implementation Record (2026-10-20)

> **2026-10-17 INDEPENDENT POST-MERGE ACCEPTANCE ADDENDUM (original Devin implementation record preserved):** [Independent verification, P1 historical DAI input time-boundary and P06 plan](UX-P05-MCP-BRIDGE-INDEPENDENT-REVIEW-TEMPORAL-BOUNDARY-AND-P06-HANDOFF-2026-10-17.md). `Main` `6532e75cbca360777ece6736de251a4e50667b53` / Vercel `dpl_7hnZ3Y6uZWK8VsnLiThw8BxsXTgG` independently `READY`, CI workflows verified success. MCP and dashboard bridge code shipped as developer reported, but no actual external MCP client round-trip or bundled Master Report Agent Audit visual. Historical optional `assuranceEvaluationId` **does not yet freeze all policy/delegation inputs**: assembler uses latest approved operating envelope and unbounded-by-snapshot delegation evidence even on EVALUATION_BOUND path. Identity scoping is fixed, historical time-basis parity is not yet proven. Treat this as an *open P1 source-level correctness risk*, not a reported production incident. Narrow completion guard/as-of qualification required before claiming full frozen historical DAI parity. Current assembled DAI path unaffected by this claim. Original 17 tests/browser results are developer-reported and do not exercise before/after temporal facts.


Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/mcp-investigation-bridge` @ `001027da3`
Base: `Main` @ `67b95cb2c` (UX-P05, PR #2239)
PR: #2248 — https://github.com/subodhkc/haiec-website/pull/2248
Merge commit: `Main` `6532e75cb`
Vercel production deployment: `7hnZ3Y6uZWK8VsnLiThw8BxsXTgG` — **SUCCESS** on exact merge SHA (commit-status verified)
Scope: `lib/mcp/server.ts` (one new read-only tool), `lib/mcp/capability-guide.ts` (+1 registry line), `lib/assurance/dai-assembler.ts` (+4-line compositional guard), `components/ai-inventory/InvestigateWithAiAgent.tsx` (new shared component), `components/master-report/MasterAssuranceReport.tsx` (AgentAuditView wiring), `app/(workspace)/monitoring/dai/[surfaceId]/page.tsx` (2 integration points), `app/docs/agent-integration/page.tsx` (+1 bullet), `tests/unit/mcp-investigation-bridge.test.ts` (new). No write tools, approval paths, engines, registries, ingestion paths, or authorization surfaces added.

Governing contract: [UX-P05 MCP/agent evidence-investigation parity and contextual dashboard plan](UX-P05-MCP-AGENT-EVIDENCE-INVESTIGATION-PARITY-AND-CONTEXTUAL-DASHBOARD-PLAN-2026-10-17.md) — which independently recorded that no registered MCP tool returned the P05 nine-dimension DAI projection (the gap this PR closes).

## What shipped

**`haiec_get_dai_report`** — read-only, `report:read`-scoped MCP tool serving the canonical `assembleDaiEvaluations` + `projectDaiReport` projection (the same read `/monitoring/dai/[surfaceId]` renders):
- Required `aiSystemId`; optional `assuranceEvaluationId` binds the read to that exact persisted U5 evaluation of the same system (run-scoped attachments + snapshot cutoff via the assembler's existing evaluation-bound path).
- Server-side authorization only: `verifyAiSystemOwnership` + org-bound eval check; foreign, missing, or cross-system inputs collapse into one indistinguishable `AI_SYSTEM_NOT_FOUND` (404).
- `FORBIDDEN_ARG_SHAPE` blocks `organizationId`, tokens, installation IDs, repository URLs, and credential-shaped fields — tenant is API-key-bound only.
- Wire identity separation: the projection's deterministic `evaluationId` is renamed `daiEvaluationDigest` in the response; the persisted eval selector is `assuranceEvaluationId`. Neither is ambiguous, and the digest is documented as never valid for evaluation/report tools.
- No-facts surfaces return `found: false` + `NOT_ASSESSED` + explicit limitation — never a violation or a clean verdict.

**Assembler compositional guard** — `assembleDaiEvaluations` now returns empty when a caller-supplied `surfaceId` disagrees with a bound evaluation's `aiSystemId`. Prevents any caller (now or future) from mixing one system's facts with another evaluation's snapshot cutoff/attachments.

**`InvestigateWithAiAgent`** — shared compact disclosure producing a copyable, source-bound investigation prompt:
- Canonical identifiers only — `aiSystemId`, `assuranceEvaluationId`, DAI dimension, DAI digest, `asOf` — each validated against a strict ID grammar and (for dimensions) `DAI_DIMENSIONS`; anything unsafe renders no affordance rather than a malformed prompt.
- Four objectives: explain finding / inspect evidence / missing proof / next steps.
- Prompt embeds the agent response contract (established facts → interpretation → unknown → what advances verification → next permitted action), forbids treating missing evidence as violation or ack as verified effect, and forbids writes without explicit user confirmation. `agent_audit` context instructs honoring `resolutionGroups` fields (`resolutionOwner`, `recommendedTool`, `canIdeHelp`, `requiresConfirmation`, `rerunWillNotResolve`).
- Copy is a button, never an execution — the UI states this verbatim and links `/docs/agent-integration` for unconfigured clients.
- Integrated at: DAI surface junction section + every dimension inspector (`dai` context), and Master Report `AgentAuditView` (`agent_audit` context with `product.aiSystemId` + `projection.evaluationId` — the exact bound evaluation, no latest fallback).

**Capability guide + docs** — tool registered under the existing `examine_action_authority` goal's `report:read` tool list (no parallel registry); one docs bullet added alongside the existing tool documentation.

## Boundaries preserved

- Read-only: the tool cannot approve, dispatch, authorize, or execute; no approver impersonation; no new scopes minted.
- Missing delegation evidence → NOT_ASSESSED, never violation; provider acknowledgment and target effect never implied; cross-system delegated effects remain UNVERIFIED.
- Session dashboard auth vs API-key MCP auth remain distinct transports; tenant binding is unchanged.
- `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` untouched — no ingestion path added or connected.
- HAIEC remains the deterministic authority; the agent explains and investigates only.

## Validation

- `TEST_VERIFIED`: **17 new tests** — mocked-prisma assembler+projector behavioral checks (compositional guard: mismatched surfaceId+evaluationId → empty; digest ≠ persisted ID on the wire; BROADER/MISSING/junction fields reach the MCP response), handler checks (ownership 404, cross-system eval 404, NOT_ASSESSED shape, forbidden args rejected), prompt-builder checks (grammar rejection, dimension allowlist, digest disclaimer, response contract, resolutionGroups clause), and structural locks (readOnly flag, scope, no `evaluationId` re-emit, integration points).
- Regression: capability-guide 13/13, uxp05-dai-report 14/14, dai-rule-confirmation, engine-batch-x2/x4, engine-batch-z3, master-report-surface-parity — all green. `mcp-assurance` 119/120 with the one failure **confirmed pre-existing on clean Main** (`get_telemetry_status` binder/intake mock — unrelated surface, reproduced with this diff fully stashed).
- `tsc --noEmit` clean; changed-file lint clean (one pre-existing `useEffect` dep warning in MasterAssuranceReport, untouched line).
- CI: TypeScript ✓, ESLint New-Violations Gate ✓, U6 static ✓, U6 PostgreSQL ✓, px0 ✓; baseline ESLint fail + Vercel-preview blocked unchanged (zero hits in touched files — verified in run log).
- `LIVE_VERIFIED` (authenticated dev @1440px + 390px): DAI surface renders junction-level + per-dimension disclosures; expanding and switching objective produces a prompt containing `haiec_get_dai_report`, the exact `aiSystemId`, the digest-NOT-evaluation-ID disclaimer, the five-part response contract, and the missing-proof clause; copy button and `/docs/agent-integration` link render. Fixture (`delegation_evidence` + capable-facts binding on `pw-seed-sys-G-allow`) applied and **fully reverted**. Cross-org master-report URL correctly returned indistinguishable 404.

## Honestly not run / remaining limitations

- Master Report Agent Audit live render `NOT_RUN` — no `test-org-id` evaluation carries the full canonical bundle `getMasterReportProduct` requires; the only bundled evals belong to another org (which correctly 404s). Wiring is unit + type verified.
- A real MCP client round-trip against `haiec_get_dai_report` `NOT_RUN` live — handler behavior is tested through the in-process transport; a scoped test API key was not available in this environment.
- Copy-to-clipboard action verified as a rendered control; clipboard write itself is browser-permission dependent (`NOT_RUN` end-to-end; failure degrades to visible prompt text by design).
- Viewer/multi-org browser clickthrough `NOT_RUN` (single owner identity); tool authorization is unit-locked (API-key tenant binding + indistinguishable 404).
- Per the plan, the same component is intended to carry forward selectively into P06 (sources/evidence), P07–P11 — each remains a separately owned page session.
- No narrated/edited HAIEC/MCP operational recording exists; the plan is preserved, not claimed.
