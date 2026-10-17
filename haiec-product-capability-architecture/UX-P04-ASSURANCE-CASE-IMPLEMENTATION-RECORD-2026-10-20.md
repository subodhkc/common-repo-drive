# UX-P04 — System Assurance Case — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp04-assurance-case` @ `8816b082e`
Base: `Main` @ `18e0275ff` (UX-P03.1, PR #2236)
PR: #2237 — https://github.com/subodhkc/haiec-website/pull/2237
Merge commit: `Main` `5b033a9d0`
Vercel production deployment: `6r8gYjJk6YRRKwMkwhQjqxk6LKCr` — **SUCCESS** on exact merge SHA
Scope: `components/ai-inventory/AssuranceCasePanel.tsx` (enhanced), `SystemWorkspace.tsx` (single prop-pass call site), `tests/unit/assurance-case-ux-p04.test.ts` (new). No endpoints, engines, tabs, or read models added or replaced.

Governing contract: [UX-P04 focused DeepSeek review](UX-P04-DEEPSEEK-FOCUSED-ASSURANCE-CASE-REVIEW-AND-DASHBOARD-DATA-TRUTH-GAPS-2026-10-17.md) + [P03.1→P04 handoff checklist](UX-P03.1-INDEPENDENT-POST-MERGE-REVIEW-AND-UX-P04-HANDOFF-2026-10-17.md). DeepSeek mock adopted ideas only where canonical owners support them; its semantic errors were excluded by design and locked by tests.

## What changed — consequence-led case surface on the existing panel

`AssuranceCasePanel` (already the E6.2 case surface on the workspace Overview) now additionally renders, from the **same canonical workspace read** passed down by `OverviewTab` — no parallel fetch:

| Section | Source of truth | Behavior |
|---|---|---|
| In-case anchor nav | — | Real `<a href="#ac-*">` anchors (Case · Basis · Planes · Govern & operate · Next); additive to unchanged workspace tabs/`?tab=` deep links |
| Case (`#ac-case`) | `workspace.assurance`, `actionAuthority.currentActionUnion` | Latest eval id + date + disposition *within evaluated scope*; source-established code-capability count + up to 6 action chips (`codeCapable === 'PRESENT'` only); observed count separately qualified. "Code capability is not authorization to execute and is not observed behavior." |
| Basis (`#ac-basis`) | `/api/inventory/systems/:id/assurance` list + `/api/assurance/evaluations/:id/summary` | **Evaluated (frozen):** `<select>` of completed evaluations rebinds the *actual* evaluation — fetched summary must match `evaluationId === selection AND aiSystemId === systemId` or the detail is withheld (`mismatch`). Shows eval id, snapshot, commit, disposition; "Latest completed" vs "Historical — not the latest evaluation". Drill links bind the *selected* id (full report, evaluated action map, compare-vs-latest). **Current:** separate line — active evidence count, connected assets, conflicted/unverified identities, staleness notice. Both visible simultaneously; never a label swap. |
| Planes (`#ac-planes`) | `workspace.assurance.planeAvailability` | Five independent tiles (plane, coverage, status) + "one plane does not prove another" — never a ladder or score; absent/not-evaluated renders honest copy. |
| Govern & operate (`#ac-govern`) | `/api/inventory/systems/:id/governance` | **Unchanged** — the E5.1 separate facts (approved policy, authority, human decision, seam, dispatch, probe, applied, independently verified effect) + evidence coverage + limitations. |
| Next (`#ac-next`) | `workspace.reports`, `workspace.nextAction` | Exact latest-evaluation receipt state; historical package count qualified ("package existence is not cryptographic verification"); canonical `ctaHref`/`ctaLabel` verbatim. |
| Footer links | — | Evaluation detail, Controls & proof, Reports & Receipts, Governance — typed contextual drill-through. |

## Preserved (verified)

All workspace tabs (primary + advanced), `?tab=` deep links, GoalAvailabilityPanel, agent briefing, Assurance tab depth (exact-evaluation summary, reason codes, frontier, recent evaluations), Reports & Receipts, Action Map, Action & Authority, repository intelligence — untouched. The only `SystemWorkspace` diff is the prop-pass at the existing `<AssuranceCasePanel>` call site.

## Deliberately excluded (mock semantic errors)

No label-only current/frozen toggle; no first-matching-receipt fallback; no "fully qualified"/"clean"; no seven-rung ladder; no missing-grant-as-violation; no IAM-export-as-effective-grant; no invented severity/delta; no innerHTML fixture DOM; no second six-job menu; no MCP write authority.

## Validation

- `TEST_VERIFIED`: `tests/unit/assurance-case-ux-p04.test.ts` — **35/35** truth locks across real eval binding, cross-evaluation reject, current-vs-frozen separation, independent planes, verbatim CTA, exact receipt, banned-vocabulary absence, canonical-only endpoints, additive nav.
- `tsc --noEmit` clean; changed-file lint clean.
- Workspace dependency-cone regression: 282/285 pass — the 3 failures are **pre-existing on clean Main** (verified via `git stash`: `ux5-section-batch` request-scoped mocks + `px1-2b-cross-tenant` KPI label "With Assurance", unrelated files).
- CI: TypeScript ✓, ESLint New-Violations Gate ✓; baseline ESLint fail (zero hits in touched files); Vercel preview blocked (unchanged baseline).
- `LIVE_VERIFIED` (authenticated dev session, `pw-seed-sys-G-allow`, ALLOW evaluation): panel renders at **1440/1280/768/390px** — anchor nav + jump to `#ac-next` works at 390px; frozen selector bound to the real evaluation; separate current-basis line; honest absent-plane copy ("Plane availability was not assessed… absence of a plane is not a clean result"); `0` capability with qualifier; "Decision Receipt (latest evaluation): Not issued"; canonical "Sources" CTA; all E5.1 rows. Captures `artifacts/_uxp04-*.png` (local, untracked).

## Honestly not run / remaining limitations

- Historical-selection live clickthrough: `NOT_RUN` — seed org's evaluated system has a single completed evaluation; the select→fetch→identity-check→historical-label path is unit-locked, and the same summary endpoint + compare deep link already exist in production code.
- Viewer-role browser clickthrough: `NOT_RUN` (single owner-role identity). The panel renders no writes; all underlying routes remain `requireOrganizationAccess`-bound.
- Multi-org negative check for this surface: `NOT_RUN` (governance/assurance endpoints unchanged; existing tenant guards untouched).
- Systems with no evaluation, no planes, and revoked receipts render honest states by code path but were not each browser-exercised.
- `systemsWithReceipts`-style package-count semantics remain package-existence-derived; surface copy qualifies this.

## Next

**UX-P05 — DAI / Agent Action** is the next dedicated page session. Dashboard D01–D03 data-truth lane and the P03.1 zero-result-clear edge remain separately owned maintenance items, not bundled here.
