# UX-P08 — Controls & Operations — Implementation Record (2026-10-18)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp08-controls-operations` @ `6b75047ab`
Base: `Main` @ `c25125584` (UX-P07, PR #2252)
PR: #2254 — https://github.com/subodhkc/haiec-website/pull/2254
Merge commit: `Main` `99465e853`
Vercel production deployment: `3FyW8DyXYAfshpQTwJHUaNqMF7d2` — **SUCCESS** on exact merge SHA (GitHub deployment-status verified, pending→success on the merge commit)
Scope: `components/ai-inventory/ControlCatalogPanel.tsx`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `components/ai-inventory/SystemWorkspace.tsx`, `tests/unit/uxp08-controls-operations.test.ts` (new), `tests/unit/sprint10-controls-accountability.test.ts` (label rename). No new endpoint, store, workflow state machine, engine, MCP write tool or approval path.

Governing docs: [P07 acceptance + P08 handoff](UX-P07-INDEPENDENT-ACCEPTANCE-AND-UX-P08-CONTROLS-OPERATIONS-HANDOFF-2026-10-18.md), [P08/P09 DeepSeek reference archive](UX-P08-P09-DEEPSEEK-CONTROLS-AND-MY-WORK-CURATION-REFERENCE-ARCHIVE-AND-MCP-ALIGNMENT-2026-10-17.md) (synthetic — visual grouping inspiration only).

## Customer question answered

"For this selected control: is it merely cataloged, actually implemented or evaluated? What did HAIEC find and on what basis? What proof exists, what remains unestablished, and what is the next permitted action?"

## What shipped (additive, one existing panel)

**Summary-first detail pane** (`ControlCatalogPanel`) — the persisted operational summary (`ControlAccountabilitySummary`) now leads the selected-control pane, before the visibility snapshot, proof journey and system context: what HAIEC found + basis, intended control, what was investigated, evidence gaps, bound response-workflow state, next permitted action + responsible owner.

**Establishment line** — derived only from persisted fields: maturity label, visibility state, native/legacy rows scanned, replay status — rendered as distinct facts ("Cataloged ≠ implemented ≠ evaluated ≠ replay verified — these are distinct facts, not a score"). No 12-facet score, no maturity ladder, no fabricated status.

**Lens-grouped proof journey** — the existing read-only journey regrouped under source-backed headers inside the same progressive disclosure: Coverage & evidence → Policy, TestSpec & approval → Recorded results (historical; native and legacy stay separately attributed) → Replay labeled "independent reproducibility" with the explicit caveat "not a new live test and not evidence that enforcement is deployed at the target" → response workflow unchanged.

**`control_proof` MCP prompt** — `InvestigateWithAiAgent` gains one narrow context kind bound to exact `aiSystemId` + `controlId` (identifier-grammar validated, fail-closed). The prompt instructs `haiec_control_assurance` → `haiec_control_results` → `haiec_control_replay` (per exact uctr-* resultId), declares system-level reads (operating envelope, telemetry, enforcement readiness) "system context only" and forbids inferring pass/approval/enforcement from a missing record or a system-wide state. Copy-only; no new tool, write path, chatbot or machine-initiated decision.

**Plumbing** — `aiSystemId` threaded `SystemWorkspace` → panel → detail (optional prop; absent = no affordance).

## Preserved (verified, not rebuilt)

All 45 catalog families + 3 specialized tests, 11 implemented visibility projections, native/legacy Control Proof attribution, TestSpec/approval/replay/response-workflow semantics, `?control=` deep links, OperationsBlock "system context" labeling + per-control `NOT_ESTABLISHED`, honesty banner, pagination/filters/selection-location indicators, `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD`.

## Verified

- `tests/unit/uxp08-controls-operations.test.ts` — **14/14** (SSR): summary leads detail; establishment states distinct persisted facts; catalog-only honest fallback; replay-VERIFIED labeled reproducibility never enforcement; four lens headers; ops stays system-context with NOT_ESTABLISHED + no-merged-status; ops-null renders UNKNOWN not absent; prompt carries exact ids + three read tools + system-context guard + no-write clause + family separation; missing/unsafe controlId → null prompt; `AIA-LOG-001` specialized id accepted; CTA mounts only with exact system id.
- Regression cone green (sprint10/11 accountability, control-catalog, catalog-selection, proof-journey, uxp06/061/07); structural test label updated for the renamed disclosure. `tsc --noEmit` + touched-file lint clean. CI: TypeScript ✓, New-Violations ✓; repo-wide ESLint + Vercel-preview are established baseline failures with zero hits on touched files.
- **LIVE_VERIFIED** @1440/1280/768/390 on real system `5d354d1b` (org `10231b6b`): summary leads, establishment + distinct-facts line, all four lenses, replay caveat, ops system-context + NOT_ESTABLISHED, 45-entry catalog, exact `?control=A02` deep-link, prompt bound to exact system+control ids with read tools + guards, unique select id, zero console errors.

## NOT_RUN / unestablished

- Catalog-only control live render — `NOT_RUN` live (seed exercised A02; catalog-only path is unit-locked via SSR fixture).
- Verified-replay / MISMATCH live render — `NOT_RUN` (no replay-verified results in the seed system); unit-locked.
- Viewer/multi-org clickthrough — `NOT_RUN` (single owner identity in the dev session).
- Real MCP client round-trip — `NOT_RUN` (no scoped test credential; none requested).
- Keyboard/focus audit — all affordances are native `details`/`button`/`select`/`a`; full audit NOT_RUN.

## Next

**UX-P09 My Work / Human Governance** — dedicated session. Preserve E6.1/E6.2 inbox, CAS, reviewer assignment, SoD and degraded context; no machine-initiated decision or new notification platform. D01–D03 dashboard data-truth maintenance, P07 wording backlog and the narrated HAIEC MCP operational recording remain separately owned.
