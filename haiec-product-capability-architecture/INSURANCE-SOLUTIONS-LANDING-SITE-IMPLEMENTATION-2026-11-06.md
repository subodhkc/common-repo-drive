# HAIEC Insurance Solutions — live-site implementation record

**Authoring date:** November 6, 2026 (U.S. Pacific) · **GitHub merge date:** November 7, 2026 UTC  
**Status:** Next.js page and navigation implemented in HAIEC `Main`; production live status requires Vercel READY verification.

## Canonical URLs
- Commercial landing: https://www.haiec.com/solutions/insurance
- Existing standalone interactive insurance demo: https://www.haiec.com/demo/insurance.html (opens in new tab)
- Engagement route: https://www.haiec.com/enterprise
- Source PR: https://github.com/subodhkc/haiec-website/pull/2435
- Main merge commit: `1de1abd0f6f6326c94ea24d6916ca9b6ec8925f2`

## Delivered features
1. Insurance-first buyer hero with a custom SVG consequence/agent-architecture map, enterprise POC CTA and new-tab workbench CTA.
2. Five consequence families (financial, contractual, health, personal, operational).
3. Seven interactive insurance workflow cases: claims & benefits, underwriting, policy servicing, health & care, agency & advice, fraud & investigation, third-party AI. Each maps action, risk, authority questions, evidence, and illustrative value. Deep links to existing HTML cases.
4. A fully editorial claims example: synthetic $85k recommendation vs hypothetical $10k initiation threshold, clearly not a validated insurer control or recorded payment.
5. Autonomy selector: advisory → human mediated → bounded autonomy; relevant assurance evidence and approval ownership.
6. Proposed AI deployment release gateway: define exposure, map authority, qualify control evidence, support insurer release decisions.
7. New business opportunity: existing enterprise assurance; proposed Insurance Evidence Passport; technical evidence for licensed specialty carriers/reinsurers. No insurability or pricing claims.
8. Existing HAIEC core: inventory, code-to-action mapping, DAI, ISAF, agent/tenant security, RAG and MCP, 45-entry catalog, selected tests, evidence and monitoring, CSM6 lifecycle research. Explicitly separate catalogued, implemented, tested and verified effects.
9. Governance context: NIST AI RMF, ISO/IEC 42001, ISO/IEC 27001, SOC 2-related evidence, IAIS/insurance supervisory expectations; no assertion of official certification/compliance.
10. Standalone HAIEC vs ServiceNow Control Tower operating models, with ServiceNow connector explicitly proposed POC.
11. Demo CTA, 30-day proposed POC journey, FAQs, regulatory/ServiceNow source links.
12. Metadata, canonical SEO route, site registry/sitemap eligibility and nav/industry routing.

## Code layout
- `app/solutions/insurance/page.tsx` — SSR-readable content, metadata, diagrams, external source links, CTA.
- `app/solutions/insurance/insurance-page.css` — scoped light-theme responsive presentation.
- `components/solutions/InsuranceExplorers.tsx` — client-only tabs and switches.
- `components/AutoHideNavigation.tsx`, `app/solutions/page.tsx`, `app/solutions/industries/page.tsx` — canonical landing-first navigation.
- `data/public-site-registry.ts`, `data/seo-page-intents.ts` — canonical indexable route and provisional intent owner.

## Technical/product truth boundaries
- Standalone HTML insurance workbench is synthetic, demo-only and remains `noindex`. Not a real customer evaluation.
- Insurance-specific ontology and semantic/rule engine; claims, policy, underwriting and health connectors; payment/enforcement integration; insurer-specific test data; real ServiceNow connector remain **POC pending**.
- HAIEC is an assurance platform, not an insurance company, actuarial rating engine, certifying body, or blanket compliance attestation.
- ServiceNow AI Control Tower/AI Passport already cover discovery and runtime agent authority; HAIEC complementary independent evidence should be framed in source-qualified and scope-aware terms.
- AIA-specific deck and fictional demonstrations are not assumed customer deployments, incidents or signed results. Public landing is insurance-industry-wide.
- No new backend, API, database table, insurer system integration, authentication exception, or permission relaxation added.

## Validation
- TSX source parsed using TypeScript compiler API without syntax errors.
- Desktop 1440px, tablet 768px and mobile 390px structural render checked for overflow and browser page errors; zero overflow and no page errors observed. The visual harness uses static React-like rendering with icon placeholders; this is not a full authenticated production Next.js build or proof of interaction on Vercel.
- Canonical Main source verified for all added and modified files.
- Vercel GitHub CI status was **pending** at last lookup; confirm deployment READY and HTTP 200 after release. Branch preview Vercel failure is consistent with the repository's `vercel.json` branch deployment disable rule (`Main: true`).

## Next product work — out of scope
- No new insurance-specific backend until a named insurer proof-of-concept qualifies workflow, data owner, source access, policy, authority and desired action evidence.
- Iterate buyer landing copy and visual analytics based on enterprise feedback; avoid additional isolated insurance marketing pages prematurely.
