> **Adjacent GitHub guide enhancement (page #15):** [Source-verified GitHub install/binding and remote Assurance UX plan](WEBSITE-GITHUB-INTEGRATION-GUIDE-SOURCE-VERIFIED-INTERACTIVE-UX-PLAN-2026-10-20.md) + [interactive page](design-references/github-integration-2026-10-20/github-app-to-verified-source-assurance-interactive.html) is the canonical deeper implementation path behind this Developers hub's `Start with GitHub` CTA. The guide preserves the seven-step setup and differentiates PR comments from full repository evaluation; the Developers hub remains a shorter choice architecture. No change to HAIEC site production source authorized.

# Developers page: MCP-first, finding-first UX and technical copy plan

**Prepared:** 2026-10-20. **Existing URL:** https://www.haiec.com/developers. **Companion:** [interactive dual-theme HTML](design-references/developers-2026-10-20/developers-ide-to-deterministic-assurance-interactive.html). **Scope:** Common Repo design and planning; no HAIEC site changes.

## 1. Positioning and hero

**Role:** Show developers how to start from their existing IDE, agent, GitHub repository or API and reach a useful evidence-backed finding and an eligible deterministic evaluation. This is the developer hub, not another package store.

**H1:** **Find what your AI can cause. Build with evidence, not assumptions.**

**Deck:** Connect HAIEC to your coding agent, an authorized GitHub repository or the Assurance API. Discover consequential action paths, compare relevant policy, access and delegated authority, and inspect evidence-backed findings and deterministic evaluations.

**Core proof line:** Your AI operates the workflow. HAIEC determines the result.

**Primary CTA:** Connect Your AI Agent, /docs/agent-integration. **Secondary:** Start with GitHub, /docs/github-integration. **API CTA:** Explore the Assurance API, /api-platform. **Additional proof:** /sample-reports/kestrel.

**Four-word reusable MCP goal:** Run HAIEC AI Assurance.

The novelty is not "another vulnerability count". Source scanning can reveal an action path from agent to tool, handler and protected resource. HAIEC can then examine that path in relation to approved policy, effective access, discretionary decision rights through DAI, and qualified observations, using deterministic source-bounded evaluation.

## 2. Read-only source review, current state and site discrepancy

The publicly retrievable /developers page showed the older heading "Catch consequential AI capabilities before they ship", individual package examples, generic SDK installation, an old three-step first-run narrative and some legacy APIs. The **current HAIEC source is different and more capable**. It already positions MCP, API and GitHub and has much more relevant detail. Never overwrite current source with an obsolete live-page crawl. Determine actual deployed Vercel build commit separately before implementing.

Source grounded:
- [Current app/developers/page.tsx](https://github.com/subodhkc/haiec-website/blob/Main/app/developers/page.tsx), blob ebcb92685796c200121bf20a4855d7ab810e8f1a: newer hero "Run HAIEC where you build"; four developer paths; full/limited scan matrix; independent three security checks; LLMVerify, Kill Switch SDK, ISAF Logger; REST cards; three getting started steps; **ten** deep capability catalog links; docs/package/GitHub navigation and CTAs. All valuable content is preserved.
- [Developer integration source status](https://github.com/subodhkc/haiec-website/blob/Main/lib/developer-integration-source-status.ts): GitHub App remote available and recommended with full remote coverage; local IDE scanner limited preview, enterprise POC distribution; local CI limited preview, enterprise POC distribution; runtime endpoint available; GitHub Action v2 **not released**.
- [Canonical MCP/capability manifest builder](https://github.com/subodhkc/haiec-website/blob/Main/lib/developer-integration-status.ts): MCP Streamable HTTP stateless endpoint https://www.haiec.com/api/mcp, HAIEC scoped **Bearer API key, not OAuth**. Tenant comes from key, caller cannot override. MCP reuses canonical engine results. OTLP evidence intake uses separate endpoints and requires binder and specific ingest permission.
- [Agent integration documentation](https://github.com/subodhkc/haiec-website/blob/Main/app/docs/agent-integration/page.tsx): source/tenant preflight, selective write and evidence upload confirmation, runtime consent and canonical reports.
- [API owner](https://github.com/subodhkc/haiec-website/blob/Main/app/api-platform/page.tsx): GET /api/v1/systems, GET /api/v1/systems/{systemId}/evaluation-sources, POST /api/v1/assurance/runs, GET /api/v1/assurance/runs/{runId}, GET exact evaluation summary, agent audit, report and Passport. Do not invent undocumented JSON request bodies.
- [Developer security packages](https://github.com/subodhkc/haiec-website/blob/Main/data/developer-products.ts): independent AI AppSec, MCP Tenant Isolation, LLMVerify; separate ISAF Logger and other bounded SDKs. Standalone findings **not** automatically a canonical HAIEC Assurance Evaluation. Source manifest verification date was 2026-08-22; do not duplicate stale counts or versions in new hero.
- [Evidence adapters catalog](https://github.com/subodhkc/haiec-website/blob/Main/app/developers/ingest/page.tsx), [MCP operations playbook](https://github.com/subodhkc/haiec-website/blob/Main/app/developers/mcp-playbook/page.tsx), [GitHub source guide](https://github.com/subodhkc/haiec-website/blob/Main/app/docs/github-integration/page.tsx), and [package index](https://github.com/subodhkc/haiec-website/blob/Main/app/packages/page.tsx) are dedicated owner pages.
- [Public header](https://github.com/subodhkc/haiec-website/blob/Main/components/AutoHideNavigation.tsx) has Developers > Run HAIEC for MCP, Assurance API and GitHub, plus Developers > Packages & Tools > API & SDKs pointing at /developers. No new top-level Developers item is necessary.
- [Public page registry](https://github.com/subodhkc/haiec-website/blob/Main/data/public-site-registry.ts) contains existing developer page route. Continue its canonical intent.
- Historical app/developers/metadata.ts has different old marketing metadata, including integration/compliance and free-tier language. The actual page has metadata exported inline. Reconcile loaded owner and remove misleading double metadata, unverified $0 schema or blanket compliance claims at implementation.

## 3. Priority UX problems

1. Static code/documentation cards overwhelm first-time developers before the value is understood.
2. Hero promotes integration tools before the consequential capability HAIEC establishes.
3. Old page crawl starts with generic npm install, which does not actually install canonical HAIEC Assurance.
4. Even current source overemphasizes limitations such as blanket UNKNOWN copy instead of making early source-supported findings apparent.
5. GitHub full remote versus local/CI limited preview needs an accurate, accessible comparison without discouraging source-only findings.
6. Developer Security is a complementary three-package family. It must remain distinct from the HAIEC deterministic assurance engine.
7. Older Kill Switch descriptions can imply universal implemented shutdown. Do not infer any target-side stop without installed native enforcement and effect evidence.
8. Evidence ingestion receipts must not be depicted as automatically evaluated, approved or protective.
9. Deeper detected-rule and ingest catalogs deserve links rather than dominating onboarding.
10. The primary action should produce an eligible system/source inspection, then a report view, not pressure customers to complete every one of five evidence planes before useful findings.

## 4. New design and section order

**Hero:** Premium light-first forest/ivory typography. Left copy, four-word copyable command, primary CTA /docs/agent-integration and GitHub/API alternatives. Right **interactive IDE-to-consequence workbench**. Three stages with meaningful detailed text: Discover a supported source path → Compare policy/grants/DAI when relevant → Review source-backed finding and eligible exact report. Highlight path as source-capable, not observed refund.

**Four-path integration explorer:** Four selectable tabs, each updating a complete snippet, prerequisites, location, first output and exact docs link:
1. AI IDE / MCP: configure secure scoped key in compatible client, run haiec_preflight, choose authorized system/source, use eligible haiec_run_assurance when authorized, inspect canonical agent audit/report. This is the recommended agent-native path but GitHub remote is recommended for full repository source coverage.
2. GitHub App: install scoped app, select repos, bind verified source to AI System and run full remote analysis; no personal PAT.
3. REST API: read-only versioned discovery snippet (GET /api/v1/systems using Bearer credential loaded securely), then supported run / poll / exact result links. Do not invent POST payload.
4. Evidence/Runtime: bind environment and supported upstream source, use proper evidence:ingest scope, send qualified structured or OTLP evidence only with user consent; receipt is not assurance evaluation. Authorized runtime tests require explicit per-run consent.

**First useful finding:** Four practical steps: connect source, preflight eligibility, inspect discovered agent/tool/handler action, consider additional evidence for stronger determination. Use selected source facts immediately rather than forcing policy uploads.

**USP diagram:** Example refund agent → MCP tool → handler → potential payment destination change. Toggle source capability, decision authority (separate five peer evidence planes and DAI), and observed effect. Visual statement of what evidence can establish for each.

**Execution modes:** GitHub remote full/recommended, local IDE limited preview, CI local limited enterprise-POC preview, runtime endpoint available. No release for GitHub Action v2.

**Independent tools / SDKs:** Preserve AI AppSec, MCP Tenant Isolation, LLMVerify, plus featured Kill Switch SDK and ISAF Logger in separate expandable related tools. Canonical package version/license claims must come from code on implementation. ISAF Logger is not the newer ISAF v2 research paper.

**References and full catalog:** Preserve exact ten existing catalog destinations: /developers/detections, /developers/frameworks, /developers/playbooks, /developers/ingest, /developers/relations, /developers/entities, /developers/agents, /developers/guides, /developers/mcp-playbook, /developers/changelog. Preserve /packages, /developer-security, /docs, /api-platform, /docs/github-integration, /sample-reports/kestrel, GitHub organization link, /signup and /enterprise.

**Secure first run:** Scoped API key in /dashboard/api-keys, not chat/commits, and setup docs. Explain model may help operate but never create canonical HAIEC verdict.

**FAQ** on setup, model-vs-agent, MCP bearer vs OAuth, scope, preview local, difference from package, first finding vs full conclusion, why source-specific proof, consent on runtime/write, portable report, CI.

**Closing CTA:** Connect Your Agent, Explore API, Review Report, Enterprise POC.

## 5. Layout, animations, accessibility and SEO

- 1200px editorial grid with two-column hero, 48/52 split; light-first SSR, subtle mint gradient and forest accents. Dark mode toggles the entire demo, terminal remains deep navy/charcoal in both themes for code contrast.
- Motion is purposeful, a source path lights when selected; no fake executed payments, fake receipts or pretend customer scan. Respect prefers-reduced-motion.
- Four tabs update detailed content with operational prerequisites and supported output, not just one line. Snippet tabs use exact source-known endpoints and explanatory placeholders, not undocumented bodies.
- Product proof questions stay strong and precise. DAI is orthogonal to five independent evidence planes; source capability != observed action; tool registration != execution; approval != target enforcement.
- Public-facing HTML has no internal/prototype/fake labels, no em dash punctuation and no invented certification/customer telemetry claims.
- Semantic headings/SSR text, tab pressed states, keyboard focus, functional copy controls, 390/768/1440 width, responsive overflow with no layout break.
- SEO: retain canonical https://www.haiec.com/developers. Title **HAIEC Developers | MCP, GitHub and AI Assurance API**. Description **Connect HAIEC from an AI IDE, a GitHub repository or the Assurance API. Discover consequential AI actions and inspect evidence-backed deterministic findings.** Link to API-specific docs and separate package pages, avoiding duplicate keyword owners. SoftwareApplication markup only with truthful offers; avoid global $0.

## 6. Devin implementation and editorial safeguards

1. Compare current HAIEC Main with actual deployed commit. Current public crawl and source differ; preserve newer source functionality and links.
2. Adapt the HTML visual references as native SSR + small React client islands. Do not paste a second navbar/footer into root page.
3. Import real source statuses from lib/developer-integration-source-status.ts and package/version facts from data/developer-products.ts. Never hardcode counts from this static preview.
4. Use canonical site theme mechanism; first paint light if visitor has no explicit preference. Do not interfere with dashboard theme semantics.
5. Focused tests: 4 valid integration tabs and docs destinations, three case views, four scan-mode statuses, ten catalog URLs, copied command/GET sample, authenticated documentation without secrets, semantic SEO and mobile/reduced motion.
6. Local scan in preview remains bounded. Do not market staged GitHub Action v2 as live. Runtime intake is optional and independently consented. No all-source evidence admission barrier for first findings.
7. Preserve existing CTA tracking and all source-evident copy in a complete original-to-new section mapping.
8. The user has previously directed **no HAIEC website push/PR/merge/deployment yet**; this request is Common Repo design and plan only. Do not treat Common Repo commit as authorization to alter HAIEC site.

## 7. Related strategy

[Core page register](PUBLIC-WEBSITE-ENHANCEMENT-PAGE-REGISTER-2026-10-20.md), [How HAIEC Works](WEBSITE-HOW-IT-WORKS-CONSEQUENCE-TO-DECISION-UX-SEO-DESIGN-PLAN-2026-10-20.md), [DAI](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md), [Assurance Controls](WEBSITE-ASSURANCE-CONTROLS-AND-EVIDENCE-SIGNATURE-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md), [ISAF v2 manuscript](source-research/isaf-v2/README.md), [HAIEC brand standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md).
