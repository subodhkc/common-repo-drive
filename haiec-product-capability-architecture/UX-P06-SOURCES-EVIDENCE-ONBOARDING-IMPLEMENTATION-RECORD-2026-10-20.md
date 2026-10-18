# UX-P06 — System Sources, Connections & Evidence Onboarding — Implementation Record (2026-10-20)

> **2026-10-17 independent post-merge acceptance addendum (original developer record preserved):** [Exact production/CI verification and P06.1 corrective findings](UX-P06-INDEPENDENT-POST-MERGE-REVIEW-SOURCE-TRUTH-GAPS-AND-P06.1-P07-HANDOFF-2026-10-17.md). PR #2250 merged exact `Main` `c3598decf0b7072d7b9425217a24b74b37b3ad91`; verified Vercel production **`dpl_HaA7zy6KjemKbbM6fuC8U5EE5TkF`** `READY` (developer's numeric `7150019445` not API-resolvable) and both CI workflows success. Sources tab remains implemented. **P1 source-truth defect**: `CONNECTED_VERIFIED.established` is true for configured binder or mere endpoint registration, contradicting label and even basis text; P06 tests currently assert those false positives. P2: UI calls inactive `NOT_CONFIGURED` source-health `configured without signal`; four agent disclosures share identical input DOM ids; fourth stage's mere completed evaluation count overstates specific evidence membership. Scope a small P06.1, not new page/engine. Detailed 17 tests/browser claims remain developer-reported (not independently rerun); viewer/multi-org, real binder freshness and degraded-read live NOT_RUN. Existing current pages and MCP scope remain intact.


Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp06-sources-evidence-onboarding` @ `f5944960b`
Base: `Main` @ `13c09ba65` (DAI temporal correction, PR #2249)
PR: #2250 — https://github.com/subodhkc/haiec-website/pull/2250
Merge commit: `Main` `c3598decf`
Vercel production deployment: `7150019445` — **SUCCESS** on exact merge SHA (GitHub deployment-status verified)
Scope: `lib/ai-inventory/source-onboarding.ts`, `lib/ai-inventory/goal-availability-loader.ts`, `components/ai-inventory/SourceOnboardingGuide.tsx`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `tests/unit/uxp06-source-onboarding.test.ts` (new), `tests/unit/source-onboarding.test.ts` (fixture fields). Six files; no new endpoint, wizard, registry, ingestion path, engine, or authorization surface.

Governing handoff: [UX-P05 temporal correction acceptance & UX-P06 source-onboarding handoff](UX-P05-DAI-TEMPORAL-CORRECTION-INDEPENDENT-ACCEPTANCE-AND-UX-P06-SOURCE-ONBOARDING-HANDOFF-2026-10-17.md) — primary surface is the existing SystemWorkspace Sources tab `?tab=assets`; enhance, never replace; no competing `?tab=sources`.

## What shipped

**Source truth ladder** (`evidenceStages`, additive to `SourceOnboardingProjection`) — four independent stages, each carrying its persisted basis:
1. *Registered or declared* — any source asset / repo binding / endpoint / binder exists.
2. *Connected & identity-verified* — repo `READY` (identity-verified), telemetry configured (labeled "configured is not a verified source identity"), or runtime endpoint registered (labeled "declared location, not verified identity").
3. *Evidence received* — active persisted system evidence or accepted signal; basis states "received is not qualified or evaluated" / "historic receipt is not current delivery".
4. *Bound to a completed evaluation* — only `completedEvaluations > 0` establishes this; basis keeps the frozen basis separate from current state.

No stage promotes the next. A system with historical evaluations but no current sources correctly shows only stage 4 established — verified live on the seed system.

**One primary next action** (`primaryNextAction`) — deterministic pick from the four paths' own canonical `nextAction`s, verbatim including the permission flag: READY permitted → ACTION_REQUIRED permitted → NOT_CONNECTED permitted → first action rendered locked. Never invented, never upgraded, never hidden for viewers.

**E4 freshness disclosure** (`sourceHealth`) — bounded (8) pass-through of canonical `SourceHealthView`s rendered as a collapsible per-source list: `fresh / stale / unknown / configured-without-signal` chips + last server receipt. `UNKNOWN` is not a violation; the disclosure states so.

**Source-gap MCP affordance** — `InvestigateWithAiAgent` (existing shared component) mounted on every non-READY, non-NOT_RELEASED path card with a new `source_gap` context. The prompt carries only canonical `aiSystemId` + fixed path enum and directs the agent to that path's canonical read tools:
- `github_connected` → `haiec_github_preflight` + `haiec_list_github_repositories` (server-authoritative list)
- `local_source` → `haiec_capability_guide` (analyze_source_security contract)
- `runtime_only` → `haiec_get_telemetry_status` + `haiec_list_evidence_binders` (honest readiness states)
- `declared_artifact` → `haiec_list_connectors` + `haiec_list_evidence_binders`

The prompt forbids connecting repositories, installing integrations, uploading evidence, running runtime tests, or authorizing policies without explicit confirmation and existing permissions. Copy ≠ execute; the agent uses its own HAIEC key; the UI never claims a connected client because the dashboard user is signed in.

## Boundaries preserved

`?tab=evidence` and all workspace tabs untouched; four optional paths unchanged (GitHub never a prerequisite); honest release statuses (local CLI preview, CI Action not released, adapter catalog) verbatim; Add-Source modal, consent flows, verify/delete actions, retired-assets section intact; no new ingestion path, no lifted holds, no verdict engine, no parallel source-readiness registry, no expanded MCP write scopes.

## Verified

- **17 new tests** in `tests/unit/uxp06-source-onboarding.test.ts`: ladder independence (incl. configured≠verified-identity, received≠evaluated, eval-bound only via completed evals), deterministic primary action incl. viewer-lock, bounded health pass-through, source_gap prompt per-path tools + no-write clauses + injection rejection, structural reuse locks (guide single data source, read model pure, tab ownership).
- `source-onboarding` suite updated for the two new input fields; regression cone **230/231** — sole failure is the known pre-existing `get_telemetry_status` baseline (reproduced on clean Main).
- `tsc --noEmit` + ESLint clean on all touched files. CI: TypeScript ✓, New-Violations ✓; repo-wide ESLint + Vercel-preview baseline failures with zero hits on touched files.
- **LIVE_VERIFIED** @1440/1280/768/390 on `pw-seed-sys-G-allow` (`?tab=assets`): ladder renders with correct per-stage established states (EVALUATION_BOUND only, seed has historical evals, no current sources), primary next action ("Submit a local scan bundle"), 4 source-gap disclosures, prompt carries `haiec_preflight` + `aiSystemId` + path tools + explicit-confirmation clause, copy + docs link present, Sources/Evidence tabs intact, zero console errors.

## NOT_RUN / unestablished

- Freshness disclosure with real configured binders — `NOT_RUN` (seed system has none); bounded pass-through is unit-locked.
- Viewer-role and multi-org browser clickthrough — `NOT_RUN` (single owner identity; permission-lock behavior unit-locked).
- Keyboard-only traversal — disclosures/buttons/links are native focusable elements (`details`/`summary`, `button`, `a`); spot-checked via affordance open, not a full keyboard audit.
- Degraded-read path — guide error fallback exists and is preserved; not exercised live.

## Next

**UX-P07 HAIEC Assurance Engine Evaluation & Results** — dedicated session. P08–P13, Dashboard D01–D03 maintenance, and the layer-by-layer narrated/edited HAIEC MCP operational recording remain separately owned.
