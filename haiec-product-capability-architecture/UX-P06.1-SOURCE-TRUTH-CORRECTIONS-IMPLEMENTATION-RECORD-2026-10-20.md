# UX-P06.1 — Sources Evidence-Truth & Accessibility Corrections — Implementation Record (2026-10-20)

> **2026-10-17 independent post-merge acceptance addendum (preserves original developer report):** [Verified exact release and P07 source/route contract](UX-P06.1-INDEPENDENT-ACCEPTANCE-AND-UX-P07-EVALUATION-RESULTS-HANDOFF-2026-10-17.md). PR #2251 merged SHA `d3db5ddc637974ec3e757fead3ae1c86322d29e7`; independently verified production `dpl_48TYX3Vk7KRWnQoAP11SSpzxgW4h` READY and both CI workflows success. Developer shorthand `7150331134` did not resolve as deployment ID; use `dpl_48TYX3Vk7KRWnQoAP11SSpzxgW4h` for acceptance. All G01–G04 source-level changes and tests are in the four-file PR; developer 19/19, 247/248 and 1440/390 browser results were not reviewer-rerun. Live inactive-binder, viewer/multi-org and real-client MCP NOT_RUN. No P06.2 needed. UX-P07 owns exact evaluation report at `/dashboard/assurance/evaluations/[evaluationId]`, preserving separate run monitor and existing Master Report, historical participation and MCP reads.


Status: `DEPLOYED_VERIFIED`
HAIEC branch: `fix/uxp061-source-truth-corrections` @ `397eeb6fc`
Base: `Main` @ `c3598decf` (UX-P06, PR #2250)
PR: #2251 — https://github.com/subodhkc/haiec-website/pull/2251
Merge commit: `Main` `d3db5ddc6`
Vercel production deployment: `7150331134` — **SUCCESS** on exact merge SHA (GitHub deployment-status verified)
Scope: `lib/ai-inventory/source-onboarding.ts`, `components/ai-inventory/SourceOnboardingGuide.tsx`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `tests/unit/uxp06-source-onboarding.test.ts`. Four files; no new endpoint, engine, ingestion path, write tool, or authorization change.

Governing review: [UX-P06 independent post-merge review](UX-P06-INDEPENDENT-POST-MERGE-REVIEW-SOURCE-TRUTH-GAPS-AND-P06.1-P07-HANDOFF-2026-10-17.md) — four findings G01–G04, all corrected.

## Corrections

**G01 (P1) — `CONNECTED_VERIFIED` false-positive.** The stage's `established` expression previously counted a configured telemetry binder, a received signal, or a registered runtime endpoint as "Connected and identity-verified" — contradicting its own basis text. Now only a repository binding at `READY` establishes the stage. Basis text for the non-established case still names what exists ("configured is not a verified source identity", "declared location, not verified identity"). Stage identifier `CONNECTED_VERIFIED` preserved for consumers.

**G02 (P2) — inactive-binder freshness label.** E4's `computeSourceHealth` emits `freshness: 'NOT_CONFIGURED'` when `binder.active === false` — an inactive/deactivated binder, which may still carry historic receipts. The guide's label was "configured without signal" (a different three-state readiness notion). Now rendered as "inactive / not configured"; historic `last receipt` timestamps continue to display separately.

**G03 (P2) — duplicate objective-selector DOM ids.** Four coexisting `source_gap` disclosures shared `obj-source_gap-{aiSystemId}`. The component now uses React `useId()` for per-instance label/select association; content-derived ids removed entirely. DAI dimension and Agent Audit instances are unaffected (they share the same fix).

**G04 (P2) — evaluation-bound overclaim.** `completedEvaluations` is a count, not a membership proof. The stage's visible label is now **"Completed evaluation exists (historical)"** with basis: *"N completed evaluations exist for this system — open each frozen evaluation or receipt to see which exact evidence was bound; a count alone does not prove membership."* Stage id `EVALUATION_BOUND` retained; no new queries or binding engine added.

## Verified

- `tests/unit/uxp06-source-onboarding.test.ts` — **19/19**: the two false-positive assertions replaced by negative fixtures (configured binder, registered endpoint), positive repo-READY case, historical-wording/membership lock, structural locks for the freshness label and `useId`.
- Regression cone **247/248** — sole failure is the known pre-existing `get_telemetry_status` baseline (reproduced on clean Main).
- `tsc --noEmit` + ESLint clean on all touched files. CI: TypeScript ✓, New-Violations ✓; repo-wide ESLint + Vercel-preview baseline failures, zero hits on touched files.
- **LIVE_VERIFIED** @1440/390: "Completed evaluation exists (historical)" renders; four objective selects carry unique `useId` ids (`:rh:`/`:ri:`/`:rj:`/`:rk:`); every label resolves to its select; disclosures, prompts, tabs intact; zero console errors.

## NOT_RUN / unestablished

- Inactive-binder render with a real configured binder — `NOT_RUN` (no binder in seed tenant); label locked structurally.
- Binder-backed freshness disclosure — `NOT_RUN` (unchanged from P06).
- Viewer/multi-org clickthrough — `NOT_RUN` (single owner identity).
- `primaryNextAction` ordering (G05 observation) — intentionally unchanged: `local_source` ACTION_REQUIRED legitimately precedes `github_connected` NOT_CONNECTED on an empty system; flagged as a product-priority choice, not a defect.
- `sourceHealth` truncation notice for >8 binders — deferred per review guidance (no expensive pagination in P06.1).

## Next

**UX-P07 Assurance Engine Evaluation & Results** — dedicated session. Inspect actual owner routes first (run status page, evaluation index, Master Report, Agent Audit, analyzer-execution-identity); DeepSeek references remain non-authoritative. P08–P13, D01–D03, and the narrated MCP operational recording stay separately owned.
