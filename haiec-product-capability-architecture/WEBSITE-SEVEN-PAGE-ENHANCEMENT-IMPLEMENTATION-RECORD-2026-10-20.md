# HAIEC Website — Seven-Page Enhancement Implementation Record

**Date:** 2026-10-20
**Status:** IMPLEMENTED + MERGED to `subodhkc/haiec-website` `Main`
**PR:** [#2287](https://github.com/subodhkc/haiec-website/pull/2287) · squash merge commit `a56bc2fee51bc996e5995c382a3f3dd7fc3de351`
**Branch:** `feat/seven-page-light-theme` (13 files, +768/−281)
**Follows:** PR #2285 (`d64bfc11e`, marketing/dashboard sweep), PR #2286 (`cddfcf356`, hero/light-theme polish)
**Plans implemented:** WEBSITE-{PLATFORM-AND-PRODUCTS, ASSURANCE, ENTERPRISE, CONTROLS, METHODOLOGY, PRICING}-*-PLAN-2026-10-20.md + brand/nav contracts

## 1. Design-system decisions

- **Palette:** the custom navy `slate-*` scale was removed from `tailwind.config.js`; real Tailwind gray-slate is in effect. `slate-850` kept as a midpoint (`#1f2937`-family) so existing `bg-slate-850` classes still compile.
- **Light theme is the default** for the public site: inline head boot script (`document.documentElement.dataset.theme`) and `WorkspaceThemeSync` both default to `light`; explicit `dark` persists via `haiec-theme` localStorage + `user_preferences.dashboardLayout.theme`; no dark flash on first paint. `ws-*` authenticated workspace theme untouched. Shared `ThemeToggle` (icon variant) is exposed in the public nav, desktop and mobile.
- **Coverage:** `styles/light-theme.css` extended for previously unmapped surfaces (`bg-slate-850/40`,`/50`,`/80`, `bg-emerald-950/60`, scrim/overlay gradients, gray/zinc/neutral families, alpha text variants). Wordmark visibility fixed via stable `.haiec-wordmark` class (Next image `src` rewrite defeated the attribute selector).
- **Hero:** interactive `HeroArchitectureExplorer` (six selectable capability cards + `aria-live` detail panel, SSR-readable, keyboard accessible); card sizes to content (whitespace fix); disclaimer pills removed; small illustrative `figcaption` retained.

## 2. Per-route decisions

| Route | Decision | Key changes |
|---|---|---|
| `/platform` | ENHANCE | Understand→Assure→Govern & Operate pillar strip; qualified hero; honest evidence-surface comparison replaces vendor-pricing table; MCP strip |
| `/products` | ENHANCE | Three-category hero (core platform / developer tools / specialized) + anchor nav; qualified ISAF Logger ("evidence support", not "EU AI Act-ready") and AI Explanation API copy; MCP strip |
| `/assurance` | ENHANCE | Deterministic positioning; five planes; DAI; UNKNOWN/NOT_ASSESSED boundaries; scoped illustrative example; "Run HAIEC AI Assurance" MCP CTA |
| `/enterprise` | PRESERVE | Copy already qualified ("does not imply… universal runtime visibility"); H1, POC scope, $25K–$75K, form, CTA unchanged |
| `/controls` | ENHANCE | `app/controls/layout.tsx` metadata owner (canonical `/controls`); proof-frontier hero; six-state honesty panel (CATALOGED…RESULT RECORDED); catalog priority labels marked illustrative; FAQ + buyer CTA; framework registry preserved |
| `/methodology` | ENHANCE | Five explainers (evidence qualification, delegated authority, reachability, deterministic evaluation, proof boundaries); fictional illustrative walkthrough; MCP CTA |
| `/pricing` | ENHANCE | Trial FAQ rewritten to match verified code: `/api/auth/register` provisions a real no-card 14-day `trialing` SCAN subscription; `/checkout` card-required trial conditional on `trialUsedAt`. Six new buyer FAQs (ASSURE≠firms, no auto-monitor/block, MCP/repo start, multi-client=FIRM, insufficient-evidence honesty, POC≠annual contract). No prices, seats, Stripe contracts, or checkout flow altered |

## 3. Navigation

- Resources → Learn → **Assurance Methodology** (`/methodology`), immediately after "How HAIEC Works" — per NAVIGATION-PLACEMENT contract.
- No new top-level nav, no duplicate SEO owners; one H1 per page preserved.

## 4. Validation evidence

- `tsc --noEmit`: 0 errors
- ESLint on touched files: 0 errors (2 pre-existing warnings: `useEffect` dep in controls, `<img>` in methodology)
- `tests/unit/homepage-hero-diagram.test.ts`: 38/38 pass
- Local SSR probes: `/`, `/platform`, `/products`, `/assurance`, `/enterprise`, `/controls`, `/methodology`, `/pricing` all HTTP 200; new pillars/MCP/explainer/FAQ strings present in server HTML; light-default boot script in `<head>`
- Commit-hook link scan: only baseline items (intentional `javascript:alert(1)` XSS fixture; stale `scripts/ui-visual-capture-start-here.ts` paths)
- CI at merge time: ESLint/TypeScript/New-Violations gates `PENDING`; Vercel preview `DEPLOYMENT_BLOCKED` (authorization gate, not build failure). Merge based on local verification per workflow.
- **NOT_VERIFIED:** browser visual pass at 390/768/1440 in both themes; live Stripe annual price parity ($950.40/$3,350.40/$9,590.40 expected cents vs checkout floor-math); seat enforcement end-to-end; Vercel production READY state post-merge.

## 5. Unresolved commercial questions (tracked, not published)

- Seat counts (1/3/10) displayed but enforcement not verified end-to-end — `lib/access-control.ts` does not establish seat-specific org-membership denial.
- Annual checkout uses `Math.floor(monthly*0.8)` vs expected configured cents — displayed/quoted mismatch unresolved.
- Rollover/overage billing, post-cancellation report retention, viewer-seat billing: no verified answers in source; intentionally NOT added to public FAQs.
- FIRM multi-client/white-label entitlements: not established as shipped; copy scopes them to custom agreement.

## 6. Remaining blockers

- Light-theme browser visual review across all marketing pages (remap list is derived from a class census, not a rendered audit).
- Vercel preview authorization remains owner-gated; production deploy state to be confirmed on next Vercel cycle.
- Common Repo PNG binaries still `PENDING_BINARY_IMPORT` (no ZIP committed); site ships committed SVGs + semantic HTML — binaries not required.
