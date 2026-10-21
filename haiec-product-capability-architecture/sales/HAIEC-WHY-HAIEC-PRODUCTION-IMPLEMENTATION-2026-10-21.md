# Why HAIEC — Production Implementation Record

Date: 2026-10-21
Status: IMPLEMENTED (production route, pending deploy verification at time of writing)
Production route: https://www.haiec.com/why-haiec

## Implementation

- `app/why-haiec/page.tsx` — server-rendered page: hero with animated agent-to-consequence
  SVG illustration, differentiation section, Kestrel proof, persona/industry journeys,
  FAQ, full 46-question SSR reference, final CTA, JSON-LD (WebPage + BreadcrumbList).
- `app/why-haiec/WhyHaiecExplorer.tsx` — client components: buyer intent matcher,
  searchable/filterable 46-case catalog, five-evidence-plane interactive,
  assurance-question brief with Markdown/JSON export and print.
- `data/why-haiec-use-cases.ts` — typed source for all 46 catalog entries, clusters,
  problem cards, matcher maps, planes, facts, personas, sectors, FAQs.

## Key adaptations from the standalone HTML

- Sidebar in-page navigation removed (site global nav owns navigation).
- Node cards in the hero diagram use rounded rectangles (matches reference cards);
  circles were avoided for closer visual fidelity.
- Proof links resolve to canonical routes (`/solutions/industries` kept; the source
  redirect-equivalence is preserved by routing sector cards to registered routes).
- Theme: supports HAIEC public light and dark themes via `dark:` variants;
  the approved light theme remains the primary visual reference.
- Export/preview renamed "Decision brief" -> "Assurance question brief" copy retained
  verbatim; downloads are browser-local, no network calls.

## Visual differences

- Global HAIEC marketing chrome (header nav, footer) instead of standalone header.
- Hero CTAs: three buttons (Find my use case / Explore a real report / Scope an
  Enterprise POC) matching reference ordering.
- Section numbering 01-07 preserved.

## SEO implementation

- Canonical: https://www.haiec.com/why-haiec; OG + Twitter metadata; JSON-LD WebPage +
  BreadcrumbList; registered in `data/public-site-registry.ts` (solutions group,
  index, sitemap, llms) and `data/seo-page-intents.ts` (primary keyword:
  "AI agent deployment proof"; no duplicate primary intent).
- Sitemap entry verified present in generated `/sitemap.xml`.

## Navigation changes

- Header Solutions dropdown: added first item "Why HAIEC? Find Your Use Case" (Compass icon).
- Footer Explore column: added `why-haiec` registry entry.
- `/solutions` hero: added contextual link "Not sure which fits? Find your use case first".
- `public/llms.txt`: added entry under Enterprise Assurance.

## Focused validation results (local, pre-deploy)

- tsc --noEmit: clean for new files.
- eslint on touched files: clean (3 unescaped-entity errors fixed during build).
- Governance tests: 499/499 passed (registry, footer, SEO intent, route governance,
  em-dash metadata guard which now covers the new page).
- SSR check: H1 x1; all 46 questions present in initial HTML; canonical, OG, JSON-LD
  present; zero em dashes in served HTML.
- Playwright checks (1440/768/390): matcher result renders, catalog search filters
  (prompt injection -> 1 of 46), plane toggle reveals correlated-fact claims,
  Markdown download fires (haiec-assurance-question.md), zero page JS errors.
- Horizontal overflow: none at page level at 320/390/768/1280/1440. Note: the global
  desktop header overflows ~118px at exactly 768px on ALL pages (pre-existing
  site-wide issue, not introduced by this page).

## Unresolved / owner-dependent

- The 768px global header overflow is a pre-existing site-wide defect pending an
  owner decision (nav breakpoint adjustment in AutoHideNavigation).
- Desktop nav dropdown items render on interaction only (existing pattern); the new
  item is registered in the shared NAV structure so mobile nav picks it up too.
- Deploy verification pending at time of writing; update after merge.

## Source reference preserved

Original standalone HTML retained unchanged:
`sales/HAIEC-WHY-USE-HAIEC-BUYER-INTENT-INTERACTIVE-2026-10-21.html`
