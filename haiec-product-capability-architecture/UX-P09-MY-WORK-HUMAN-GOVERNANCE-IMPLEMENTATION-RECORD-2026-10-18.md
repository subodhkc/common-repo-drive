# UX-P09 — My Work / Human Governance — Implementation Record (2026-10-18)

> **2026-10-18 independent post-merge acceptance addendum:** [Exact-SHA Vercel and CI confirmation, P09 code-level qualifications and P10 monitoring owner map](UX-P09-INDEPENDENT-ACCEPTANCE-AND-UX-P10-MONITORING-HANDOFF-2026-10-18.md). P09 [#2257](https://github.com/subodhkc/haiec-website/pull/2257) true commit `47af59ef8a614b67e9300a7c2453d3f2cb72da0a`; independent authenticated Vercel production **`dpl_9dcxSEz6Zvwo9e3NLKSrt3Mp89v3`** READY and two primary GitHub CI success. Numeric `7152817170` is GitHub's deployment reference, not authenticated Vercel ID. Shared server entitlement read source confirms list/detail/inbox privacy, non-entitled detail history not read; request-time authorized review, stale queue sequence and `readDegraded` unknown. Developer test assertions 12/12,32/32,14/14,104/104 and browser 1440/768/390 were **not independently rerun**. Live pending request dialog, multi-org role and keyboard audit NOT_RUN. Optional P2 future test: the *review-detail fetch* itself does not have a per-request generation/org switch guard, so an in-flight old-org `setPacket` after reset is possible in source (not reproduced; no evidence of API tenant ACL failure). Keep P09 ACCEPTED and queue future regression, do not open P09.1 automatically. Next UX-P10 existing Monitoring screen source-freshness and alert-vs-response truth, not a new monitoring/enforcement backend.


Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp09-mywork-governance` @ `47fad8192`
Base: `Main` @ `5cd6875cd` (UX-P08.1, PR #2256)
PR: #2257 — https://github.com/subodhkc/haiec-website/pull/2257
Merge commit: `Main` `47af59ef8a614b67e9300a7c2453d3f2cb72da0a`
Vercel production deployment: GitHub deployment `7152817170` — **SUCCESS** on exact merge SHA `47af59ef8` (deployment-status verified via GitHub deployments API)
Scope: `lib/assurance/decision-read-entitlement.ts` (new shared contract), `lib/ai-inventory/my-work.ts`, both deployment-decision GET routes, `components/my-work/MyWorkInbox.tsx`, `components/governance/DeploymentDecisionActions.tsx`, `tests/unit/uxp09-decision-read-entitlement.test.ts` (new, 12 tests), `tests/security/s22-deployment-decisions-api.test.ts` (+10 boundary tests, 2 pre-existing lint fixes). No mutation/decision/assignment semantics changed; no schema, engine or notification changes.

Governing docs: [P08.1 acceptance + P09-G01 discovery + security-first work order](UX-P08.1-INDEPENDENT-ACCEPTANCE-AND-P09-DECISION-READ-AUTHORIZATION-HANDOFF-2026-10-18.md), [P08/P09 DeepSeek curation reference](UX-P08-P09-DEEPSEEK-CONTROLS-AND-MY-WORK-CURATION-REFERENCE-ARCHIVE-AND-MCP-ALIGNMENT-2026-10-17.md).

## P1 — P09-G01 same-org decision-packet confidentiality — CLOSED

Independent review found both deployment-decision GET routes returned complete decision records to every org member, bypassing the per-request `detailRestricted` rule only the My Work inbox applied. This was intra-org over-exposure, not a demonstrated cross-tenant leak or unauthorized approval — and the record says exactly that.

**One shared server-side contract** — `lib/assurance/decision-read-entitlement.ts`:
- `canReadFullDecisionPacket(record, viewer)` — the single predicate: org admin/owner, the requester, or the persisted `assignedReviewerId`. Reassignment flips eligibility automatically on the next read; no client-supplied role/requester/reviewer value participates.
- `projectDecisionForViewer(hydrated, viewer)` — explicit allowlist projection. Non-entitled members keep summary visibility (identity, requestKey/version, lifecycle + effective state, actor identities, timestamps, envelope/eval version references); withheld fields — allowed/prohibited operations, required conditions, rationale, request/decision CAS digests, envelope/policy digests, revocation detail — return as safe empty values and `detailRestricted: true`.

Applied identically at all three read surfaces:
- `GET /api/inventory/my-work` — inbox projection now delegates to the shared predicate (behavior preserved).
- `GET .../deployment-decisions` (list) — every record projected through the allowlist.
- `GET .../deployment-decisions/[decisionId]` (detail) — full packet + append-only event history only under the predicate; restricted viewers receive the bounded summary and the history read is skipped entirely, so history can never leak.

## My Work UX — freshness and fail-closed packet reads

- `MyWorkInbox.load()` — response-sequence guard + organization binding: an out-of-order response or one whose `organizationId` does not match the org selected at call time is dropped; it can never populate the current view. Stale/failed reads still render the explicit degraded/alert state — never a confident empty queue.
- Review dialog opens only on a **fresh authorized packet read** (`GET .../[decisionId]`) at click time — the digest the reviewer signs is the current one, and a `detailRestricted` or digest-less response can never inflate a summary row into a packet.
- `ReviewerDecisionActions.openReview` fails closed the same way — a reviewer reassigned mid-session gets an honest error, never a null-digest packet.
- CAS request digest, 409-conflict-stops-submission, expiry, effective-context reliability, `CONTEXT_UNAVAILABLE`, reviewer SoD, role-limited packets and all four queues (Assigned to me / Unassigned / My requests / Resolved, per-`requestKey` rows) preserved unchanged.

## Verification

- `TEST_VERIFIED`: `uxp09-decision-read-entitlement.test.ts` 12/12 — entitlement matrix (admin/owner, requester, assigned reviewer, reassigned-away reviewer, non-entitled member, foreign shapes) + allowlist projection never carries packet fields. `s22-deployment-decisions-api.test.ts` 32/32 including 10 new privacy-boundary cases on both GET routes (requester sees full packet, assigned reviewer sees full packet + history, reassigned-away reviewer loses it, non-entitled member gets summary-only, foreign org/foreign system non-disclosing). `my-work.test.ts` 14/14 unchanged semantics.
- Governance regression cone 104/104: uxp09 + dashboard-ux-p02 + assurance-decision-surface + s22-deployment-decision + my-work.
- `CODE_VERIFIED`: `tsc --noEmit` clean; ESLint clean on all 8 touched files. CI: TypeScript ✓, ESLint New-Violations ✓, U6 static + PostgreSQL ✓, px0-product-truth ✓; repo-wide ESLint + Vercel-preview are established baseline failures with zero hits on this diff.
- `LIVE_VERIFIED`: authenticated browser @1440/768/390 on real org — four queues render, honest empty states, governance disclaimer, zero console errors.
- `NOT_RUN`: live review-dialog open against a seeded pending request (test org had none — server path covered by route tests); viewer/multi-org live key variations (unit-locked); full keyboard-focus audit.

## Boundaries maintained

Human approval remains the sole approval authority; no machine-initiated approval, MCP decision tool, simulated role switch or notification pipeline added. Decision/assignment mutation semantics untouched — this change is read-side entitlement + UI freshness only. Same-org confidentiality corrected; tenant isolation and non-disclosing foreign-resource behavior preserved.

**Next dedicated session: UX-P10 Monitoring.**
