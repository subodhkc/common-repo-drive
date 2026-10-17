# UX-P03 — AI Estate (`/dashboard/ai-inventory`) — Implementation Record (2026-10-20)

Status: `DEPLOYED_VERIFIED`
HAIEC branch: `feat/uxp03-ai-estate` @ `44f13d74d`
Base: `Main` @ `80d3e8936` (UX-P02, PR #2232)
PR: #2235 — https://github.com/subodhkc/haiec-website/pull/2235
Merge commit: `Main` `d62471f20`
Vercel production deployment: `7139354552` — **SUCCESS** on exact merge SHA
Scope: `/dashboard/ai-inventory` (page wrapper, `AISystemsIndex`, `DataSourceSwitcher`) only.

## Governing rule

ENHANCE, NOT REPLACE. Every existing AI Estate capability remains reachable;
nothing was removed, re-derived, re-scored, or hidden.

## Preservation matrix — where every existing element lives

| Before | After | Change |
|---|---|---|
| `EngineWelcomeGate` overlay | Top wrapper | Unchanged |
| `DataSourceSwitcher` (8 views, `inline-flex`) | Labeled `<nav>`, `overflow-x-auto` + `whitespace-nowrap`, `aria-current="page"` on active | Same 8 views/routes; now scrollable instead of overflowing at small widths |
| Header "AI Systems" + Refresh + PageHelp | Header "AI Estate" + org-scope subheading + same controls | Copy only |
| Legacy inventory error banner | Same position | Unchanged — `FAILED_TO_LOAD != ZERO_RECORDS` |
| `EstateSummaryBand` (4 fact cards + enforcement/attention + frameworks + as-of) | Same position | Unchanged canonical projection |
| Index 6-card KPI grid | One restrained facts bar (`N systems · N with sources · N total sources · N unverified identity · N evaluated · N receipts`) | Same facts, deduplicated from the estate band's equally prominent KPIs |
| Search + Refresh + "Define AI System" + `SystemFirstOnboarding` | Same position/behavior | Unchanged |
| Systems table (System/Env/Sources/Evidence/Assurance/Next Step/Open) | Rendered `hidden lg:block`; all columns preserved | Desktop unchanged |
| (nothing — columns were CSS-clipped below lg) | New semantic `<ul aria-label="AI systems">` card list `<lg` | Mobile now carries every essential fact; proper links, no clickable divs |
| Canonical next action (`nextActionCtaHref` verbatim + tier `Lock`) | Both table and cards render verbatim | Unchanged contract |
| Action & Access Map CTA | Same position | Unchanged |
| (none) | One restrained link row: HAIEC Assurance Engine / Assurance Receipts & Reports / Monitoring sources / Connect discovery sources | New — contextual entries only, verified routes, no implied sequence |
| Connections & Discovery section, SDK docs modal, AdminKeyConnectModal, connection status strip | Same position | Unchanged |

## New UX behavior

- **Mobile row completeness (P0).** At 390px each system card shows name/type/provider, disposition badge, Environment, Evidence, Sources (count + connected/unverified/conflicted), Assurance Receipt state, canonical next action, and Open. Verified against real seeded data — all 12 test systems render complete cards (verified via `innerText` and element screenshots).
- **No clipped affordances.** The view switcher scrolls horizontally; no view is unreachable at any width.
- **Calmer hierarchy.** One facts line replaces the second KPI wall; `EstateSummaryBand` remains the single prominent org-level surface.
- **Explicit uncertainty.** `NO ASSURANCE`, `Not Assessed`, `Not connected`, `Unknown`, `No receipt` / `Private receipt` / `Public receipt` / `Receipt revoked` render as honest states — never clean/safe.
- **Truth locks.** 43 focused tests (`tests/unit/ai-estate-ux-p03.test.ts`): mobile completeness, verbatim canonical CTA, no maturity ladder, no clean/fully-evaluated claims, preservation surface, scrollable switcher, no client-side verdict engine.

## Canonical data sources reused (no new aggregation)

- `GET /api/inventory/systems/summary` → `getSystemListSummary()` — row fields verbatim (`SystemListEntry`), `nextActionCtaHref` never re-derived.
- `GET /api/inventory/estate-summary` → `EstateSummaryBand` — unchanged.
- Legacy `/api/inventory/systems`, `/api/v1/inventory/config`, `/api/v1/inventory/admin-keys` — unchanged consumers.
- `NEXT_ACTION_FEATURE` tier mapping — unchanged.
- All reads remain tenant-bound server-side via `requireOrganizationAccess`; `x-organization-id` remains a context hint only.

## Cleanup (dead code only)

Removed legacy dead state/handlers from `page.tsx` (`AISystem` interface, `systems` state, `filteredSystems`, `handleRenameSystem`, `getRiskColor`, search/filter/edit state, `putWithOrg`, 10 unused icons) — all unreachable since the list moved to `AISystemsIndex`. `config` is now typed `InventoryConfig` instead of `any`. This cleared the 20 pre-existing ESLint errors in the file.

## Validation

- `TEST_VERIFIED`: 43/43 new truth locks; adjacent suites — estate-summary/diff/import (24), ux2/ux3, UX-P01 (19), UX-P02 (28) — 94/94 pass.
- `tsc --noEmit` clean; ESLint clean on all touched files.
- CI: TypeScript Type Check ✓, ESLint New-Violations Gate ✓; baseline ESLint fails on pre-existing unrelated violations (zero hits in touched files); Vercel preview blocked (same baseline condition as P01/P02 — production deploy unaffected).
- `VISUAL_VERIFIED (dev session)`: authenticated test-user captures at 1440 / 1280 / 768 / 390px with real org data (12 systems; ALLOW/REVIEW/BLOCK dispositions; revoked/private receipts; unverified + conflicted identity cues; "Not connected" rows). Captures in `artifacts/_uxp03-*.png` (local, untracked).

## Honestly not run / remaining limitations

- Viewer-role and multi-org browser clickthrough: `NOT_RUN` (single owner-role test session).
- Registration access control remains server-authoritative (API enforced); the client does not fabricate a role — unchanged from before.
- Estate band "Loading estate summary…" is a status text, not a skeleton — unchanged.
- `Systems API` legacy stats still drive the connection strip only; KPI denominators (D01) remain the separately tracked P1 data-contract item.
- Mobile card count is unbounded like the previous list (100-row cap comes from the API, unchanged).
