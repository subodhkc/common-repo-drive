# UX-P11.1 MCP Agent-Readable Reports, Explanation Artifacts & Receipt Parity — Implementation Record

> **2026-10-18 INDEPENDENT POST-MERGE ACCEPTANCE AND NEXT PAGE HANDOFF:** [Verified exact Vercel READY, CI and P11.1 source, qualified future agent-output notes, P12 usage/cost source-truth gaps](UX-P11.1-INDEPENDENT-ACCEPTANCE-AND-UX-P12-PROVIDER-USAGE-COST-SOURCE-TRUTH-HANDOFF-2026-10-18.md). PR #2261 merged Main **ec6f50aaf27330c4885fc98abcf856f178e901d4**. Independently authenticated Vercel production **dpl_3DSJhHsACGRDddSUA6DbHLuoGSZ5** READY on exact commit; CI Lint Baseline and Consolidated both success; developer test/browser assertions not independently rerun. No real external MCP client, live PUBLIC/REVOKED and viewer/multi-org. The new `haiec_explain_evaluation` output is versioned canonical read projection, not a second verdict/receipt. Minor copy/completeness note: packet public link can refer to a revoked but publicly resolvable ID, despite MCP description 'only PUBLIC'; reconcile wording in a later scoped owner. Executive depth suppresses verificationItems and marks truncated; explain depth filtering vs missing source. Next P12 fix read-data truth (sample-based totals and provider billing snapshots incorrectly counted as API calls), then P13; preserve this implementation record and all historic test results.


**Status: DEPLOYED_VERIFIED** — 2026-10-18

- **PR:** [#2261](https://github.com/subodhkc/haiec-website/pull/2261) → `Main` **`ec6f50aaf27330c4885fc98abcf856f178e901d4`**
- **Branch:** `feat/uxp111-mcp-explanation-receipt-parity` @ `76c7d4237`
- **Vercel production:** `7157399964` — SUCCESS on the exact merge SHA (GitHub deployments API)
- **CI:** TypeScript ✓ · ESLint New-Violations ✓ · U6 static ✓ · U6 PostgreSQL ✓ · px0 ✓ · Production Migration Deploy ✓ · Migration Safety ✓. Broad ESLint and Vercel-preview are established baseline failures — zero violations on touched files.
- Pre-merge correction: first commit tripped the lint-machinery governance gate because the diff *added* `eslint-disable` comments (any added suppression comment counts as gate-machinery change). Fixed by removing them — `prisma.assurance_packages` types directly; test file uses `Record<string, unknown>`/`Parameters<typeof Handler>[0]` instead of `any`.

## Receipt parity — the actual defect class closed (G01/G07)

Same bug existed in three places: "newest row by `createdAt`" used where the canonical rule requires representative selection matching aggregate state (PUBLIC > PRIVATE > REVOKED over ALL matching versions).

- **`haiec_get_package(evaluationId)`** (`lib/mcp/ide-tools.ts`) — now loads every matching package (org-scoped, uncapped) and selects via `deriveReceiptState` + `selectRepresentativePackage` — identical to the UI receipt projection. Response exposes `receiptState` (aggregate), `matchingPackageCount`, `selection: 'CANONICAL_REPRESENTATIVE' | 'EXACT_PACKAGE_ID'`. Exact `packageId` reads unchanged. NO_RECEIPT remains a valid state, not an error.
- **`loadReportVerificationAnchors`** (`lib/assurance/master-report-binding.ts`) — the Master Report's `decisionReceipt` link + `publicVerificationId` suppression previously anchored to the newest row; now points at the canonical representative. Fixes report-link parity (the dashboard report no longer links a revoked package while a PUBLIC representative exists).
- **`GET /api/inventory/systems/[id]/reports?evaluationId=`** — new exact mode: org+system+evaluation `findMany`, uncapped, returns `receiptState` + `representativePackageId` + `evaluationId`. Browse mode unchanged (`take: 20`, no receipt fields). A bounded list can no longer prove NO_RECEIPT for an exact evaluation (P11's `.find()` over top-20 was a real false-negative for older evaluations / >20-package systems).
- **Evaluation detail page** uses the exact mode and prefers `representativePackageId`; `unavailable` remains distinct from `none`.
- **`selectRepresentativePackage`** made generic (`<T extends {...}>`) — type-only change so callers' richer row fields pass through.

## Report Explanation Packet (agent-readable explanations)

New `lib/assurance/report-explanation-packet.ts` — **`ReportExplanationPacketV1`** (`report-explanation-packet@1` / policy `P11.1-explanation-policy-1`), composed exclusively from canonical reads: bounded `getMasterReportProduct`, `loadAgentAuditReport`, `resolveEvaluationReceipt`, `buildResolutionGroups`. No U5 recompute, no scoring, no LLM verdict, no invented citations.

- Identity block: exact evaluationId, aiSystemId, frozen snapshot timestamp (from the Agent Audit EVALUATED_SNAPSHOT basis), methodology version, evaluation basis (SCAN_BACKED/EVIDENCE_ONLY), core truth + evidence bundle digests.
- `disposition.verbatim` + verbatim limitations.
- `explanation`: established / unestablished / notAssessed / evidenceGaps — Agent Audit narrative verbatim.
- Depth = presentation lens only: `executive` (default) omits items; `technical`/`auditor` add bounded verificationItems (8/16) with evidenceRefs, affectedQuestionIds/PathIds, basis, boundary, plus Four Questions + authority planes.
- `receipt`: canonical aggregate state + representative package + `resolutionStatus: RESOLVED | NOT_RESOLVED_NO_SYSTEM_BINDING` — a missing AI-system binding is never quoted as factual NO_RECEIPT.
- `artifacts`: real links from the canonical Master Report product with `accessLevel: authenticated | public`; the public verify link is emitted only for a genuinely PUBLIC representative receipt (revoked resolves as revoked, described). Includes HTML/PDF Master Report, Agent Audit, Passport, Evidence Report, evaluation + system workspace, and the canonical representative's authenticated decision-receipt verify route.
- `completeness`: sectionsIncluded/sectionsOmitted, verificationItems selected/total/truncated, agentAuditAvailable — bounded sections disclosed, never silently dropped.
- `limitations`: frozen-vs-current, receipt-integrity-vs-source-truth, scope bounds + verbatim audit limitations.

New read-only MCP tool **`haiec_explain_evaluation`** (`report:read`, registered in `TOOL_DEFS`) — `evaluationId` + optional `depth`. Non-enumerating 404. Transport already enforces the 160k-char cap globally; item bounds keep the packet small. No new PDF/package generation, no writes.

## Guidance updated (no new engine claims)

- `lib/docs/agent-guide-content.ts`: read sequence now names `haiec_explain_evaluation` as the one-call explanation surface after Agent Audit; `haiec_get_package` doc note updated (representative vs exact packageId).
- `server.ts` VERIFY OUTPUTS: packet added to the output sequence; `haiec_get_package` description distinguishes representative vs exact reads.
- `InvestigateWithAiAgent` `assurance_report` prompt: leads with `haiec_explain_evaluation` (depth executive), fallback chain to summary → agent_audit → master_report → get_package.
- `server.ts` server instructions: packet positioned as explanation, never a verdict.

## Verified

- **TEST_VERIFIED:** new `uxp11-1-receipt-parity-explanation` 22/22 — newer-REVOKED-never-shadows-PUBLIC, PRIVATE+REVOKED, all-REVOKED representative, true NO_RECEIPT, 26-version uncapped resolution, tenant-scoped where, exact packageId path; anchors representative parity; exact route mode (filtered rows, representativePackageId, >20 system packages → real NO_RECEIPT, browse still bounded at 20); packet grounding (verbatim disposition/narrative/digests), depth bounding + truncation disclosure, public-link only-when-PUBLIC, NO_RECEIPT/NOT_RESOLVED honesty, missing-audit disclosure.
- **TEST_VERIFIED cone green:** mcp-assurance 125/125 (stale mocks repaired: `assurance_packages.findMany`, `evidence.groupBy`), master-report-surface-parity 4/4 (stale `findMany` mock repaired), px1-2b receipt regression + cross-tenant locks green (two assertions updated to preserve lock intent against the new conditional where), r4e3-canonical-representative 10/10, uxp11-public-verification-display 5/5, assurance-reports-convergence 31/31, engine-batch-x1, master-report-bound-views.
- **CODE_VERIFIED:** `tsc --noEmit` clean; touched-file ESLint clean (0 errors/warnings across all 13 files).
- **LIVE_VERIFIED @1440/390** on a real org (12 systems): exact route returns `PUBLIC_RECEIPT`-consistent representative for a real evaluation with `receiptState` + filtered rows; bogus evaluationId → `NO_RECEIPT` + empty data (not silent absence); foreign system id → 404; browse mode unchanged; evaluation detail page renders the Decision Receipt section with real PRIVATE package (package id, schema, receipt hash, honest "not current posture" copy, Reports link). Zero console errors.

## NOT_RUN

- Real external MCP client round-trip for `haiec_explain_evaluation` (no rotated read-scoped credentials in this session) — handler is unit-tested through `IDE_TOOL_DEFS`/`TOOL_DEFS` composition and the transport contract is unchanged.
- Live PUBLIC/REVOKED receipt render on the evaluation page (test org's evaluation resolved PRIVATE).
- Viewer/multi-org key variations (tenant scoping unit-locked).
- UI/REST byte-parity for Master Report verified by the existing `master-report-surface-parity` suite (Bearer == MCP identical bounded truth — exercised against the new anchors path).
