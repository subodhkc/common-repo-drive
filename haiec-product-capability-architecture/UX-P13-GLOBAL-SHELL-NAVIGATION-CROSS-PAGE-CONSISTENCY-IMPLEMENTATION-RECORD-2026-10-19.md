# UX-P13 Global Shell, Navigation & Cross-Page UX Consistency — Implementation Record

**Date:** 2026-10-19 · **Status:** `DEPLOYED_VERIFIED`
**PR:** [#2264](https://github.com/subodhkc/haiec-website/pull/2264) → `Main` **`d7f8870081768cb30cf2a83568f2e94e37e63aa7`**
**Vercel production:** GitHub deployment `7163493401` — **SUCCESS** on exact merge SHA `d7f88700`
**Prior phase:** [P12.1 record](UX-P12.1-PROVIDER-COST-ATTRIBUTION-INTEGRITY-IMPLEMENTATION-RECORD-2026-10-18.md) · [P13 handoff](UX-P12.1-INDEPENDENT-ACCEPTANCE-AND-UX-P13-GLOBAL-SHELL-CROSS-PAGE-HANDOFF-2026-10-18.md)

## Approach

Preservation inventory first (per handoff §5): audited `AppShell`, `SupabaseSidebar`, `BottomNav`, `product-surface-registry`, `breadcrumb-projection` + `Breadcrumb`, `OrganizationSwitcher`/`useOrganization`, `mobile-nav`, `docs-map`, `AssuranceWorkspaceShell`, and `shell-navigation-convergence-1.test.ts`. Verified every sidebar destination exists. No second navigation registry introduced; the six-surface registry is untouched.

## Reproduced defects fixed

### P1 — Breadcrumb dropped section context
`Breadcrumb.tsx` sliced `breadcrumbs[0]` unconditionally, assuming it was always `Dashboard`. On non-`/dashboard` AppShell routes the section crumb was eaten: `/kill-switch/dashboard` rendered **"Home > Dashboard"** (wrong location); `/compliance-twin/workspace` rendered "Home > Workspace". The leading item is now skipped only when it is the Dashboard crumb; a `aria-label` was added to the home icon.

### P1 — Workspace shell mobile drawer had no a11y contract
`AssuranceWorkspaceShell` (`/monitoring/*`, `/quick-start` — the `(workspace)` route group, a separate shell from AppShell) had a mobile drawer with **no** focus management, Escape close, scroll lock, or focus restore; `OrganizationSwitcher` was `hidden md:block` with no drawer instance — mobile workspace users could not switch orgs. Now at parity with AppShell: focus inside on open, Tab/Shift+Tab containment, Escape closes and restores focus to the trigger, background scroll suspended, `aria-expanded` on the trigger, drawer `tabIndex=-1`/`overflow-y-auto`, `OrganizationSwitcher` inside the drawer, skip link added.

### P2 — Breadcrumb label/navigable truth gaps
- `my-work` → "My work" → canonical **My Work**; `/dashboard/my-work` added to `NAVIGABLE_PATHS`.
- `admin-api` → "Admin api" → **Admin API**; `costs` → **Costs**; both added to `NAVIGABLE_PATHS`.
- `kill-switch` → **Kill Switch**.
- Exact evaluation ids on `/dashboard/assurance/evaluations/[id]` and `/dashboard/reports/evaluations/[id]` render **Evaluation** (was generic `Details`) — preserves exact-evaluated-record semantics, never an org-level default.

### P2 — Command palette coverage
Real `Monitoring` (`/monitoring`) and `My Work` (`/dashboard/my-work`) navigation commands added — the two busiest operational surfaces were unfindable. Navigation-only; no next-action rederivation.

### Incidental baseline cleanup (touched file)
5 pre-existing ESLint errors in `AppShell.tsx` fixed (`session: any` → typed shape; 3 unused destructures/vars removed). Type-safe; no behavior change.

## Preserved

Six-surface registry and canonical labels; sidebar destinations/tiers/contextual tabs; Munich judge-workspace gating; org-switch full-reload model + `OrgDeepLink`; keyboard shortcuts; mobile bottom-nav four-anchor subset; help-doc mapping (no fabricated guides); public `/verify` stays outside the product shell; P01–P12.1 pages untouched; no MCP changes (no new tools).

## Verified

- **`TEST_VERIFIED`:** `shell-navigation-convergence-1.test.ts` extended +6 P13 locks — 58/58 green (non-dashboard section crumbs, component Dashboard-skip rule, operational labels/navigable paths, exact-evaluation leaf label, workspace drawer modal contract, org switcher + skip link in drawer, palette Monitoring/My Work).
- **`CODE_VERIFIED`:** `tsc --noEmit` clean; touched-file ESLint clean (2 pre-existing img warnings). CI: TypeScript ✓, ESLint New-Violations ✓, Migration Safety ✓, Code Validation ✓, Migration Deploy ✓; broad ESLint + Vercel Preview established baselines.
- **`LIVE_VERIFIED`** @1440: 9/9 — breadcrumb keeps `Kill Switch`/`My Work`/`AI Systems > Costs`; palette lists + navigates Monitoring/My Work, Escape closes; workspace shell renders with skip link; zero console errors. @390: 10/10 — workspace drawer opens, **owns focus on open**, **closes on Escape**; zero console errors.

## `NOT_RUN`

- 768px/1280px dedicated passes (both covered branches — ≥768 desktop branch verified at 1440, <768 mobile branch at 390).
- Multi-org A→B live switch with mid-flight request (single-org test account; standard path full-reloads — reviewed, not reproduced as a defect).
- Keyboard-only full traverse of every sidebar section (spot-checked drawer + palette).
- External MCP client journey — no shell-level MCP surface added; remains the separate credentialed acceptance task.

## Residual P2 backlog (documented, not in scope)

- P12-R02: programmatic org-store switch without full reload could leave a stale page until next fetch/remount — flagged for a future AppShell key-invalidation audit; standard UI path reloads.
- P12.1-R01/R02: secondary-workspace metadata plurality and `provider|kind|id` key parsing — documented in the P12.1 handoff.
- P09 pending-review modal cross-org late completion — prior backlog item.

## Next

The page-by-page UX program (P01–P13) is complete. Remaining workstream is the **final real-client acceptance journey**: securely credentialed HAIEC MCP / KestrelVoice testing plus narrated layer-by-layer operational recording — explicitly `NOT_RUN`, a separate operational task, not part of this shell polish.
