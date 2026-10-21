# HAIEC Learning Resources 1–6: Production Inclusion and Content Alignment Audit

**Date:** 2026-10-21.
**Scope:** DAI Authority Lab, 45 Controls Practitioner, Incident Response Tabletop, Report Trust Reader, First 30 Days Workbook and Attack-to-Consequence Atlas. **Resources 7 and 8 intentionally excluded by user.**

## Verification methods and confidence

1. Read each completed standalone Common Repo HTML where available, then compared with the corresponding `subodhkc/haiec-website` `public/learn/` HTML.
2. Inspected `app/learn/page.tsx`, `components/AutoHideNavigation.tsx`, `app/sitemap.ts` and `public/llms.txt` for links/discovery.
3. Obtained Vercel production deployment metadata by querying `www.haiec.com`. Response: **READY**, alias `www.haiec.com`, project `haiec-website-vercel`, production commit **ef0b0f02ac7dabd00e56ab0168146a3e6ca87c5c**. Fetched each individual website resource **at that exact commit** and confirmed files exist. All five included HTML pages were present in this deployment source.
4. Direct public URL web retrieval returned unreliable or inaccessible responses in this review, and Vercel protected route retrieval was denied. Therefore **live HTTP 200, public-browser hydration, asset and link rendering, production interactive operation, and Google index status are not independently verified**. Production-source inclusion is stronger than simply current Main, but is not a complete live browser smoke test.

## One-page deployment register

| # | Resource | Common Repo artifact | HAIEC website route | Status |
| --- | --- | --- | --- | --- |
| 1 | DAI Authority Decision Lab | `learning/HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html` | `/learn/dai-authority-decision-lab.html` | Present in exact READY production commit, site link, Resources dropdown, sitemap, llms.txt |
| 2 | 45 Assurance Controls Practitioner | `learning/HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html` | `/learn/controls-practitioner-workbook.html` | Present in exact READY production commit, site link, Resources dropdown, sitemap, llms.txt |
| 3 | Incident Response Tabletop | `learning/HAIEC-AI-Incident-Response-Monitoring-Tabletop-Interactive-2026-10-21.html` | `/learn/incident-response-tabletop.html` | Present in exact READY production commit, site link, Resources dropdown, sitemap, llms.txt |
| 4 | Can You Trust This AI Assurance Report? | **Plan and authored 12-case 36-question blueprint only**. No completed HTML established. | **No page found** at `/learn/can-you-trust-this-ai-assurance-report.html` in exact deployed commit | **NOT BUILT / NOT DEPLOYED** |
| 5 | Enterprise First 30 Days Workbook | `learning/HAIEC-Enterprise-AI-Assurance-First-30-Days-Interactive-2026-10-20.html` | `/learn/first-30-days-workbook.html` | Present in exact READY production commit, site link, Resources dropdown, sitemap, llms.txt |
| 6 | Attack-to-Consequence Atlas | `learning/HAIEC-AI-Agent-Security-Attack-to-Consequence-Atlas-Interactive-2026-10-21.html` | `/learn/attack-consequence-atlas.html` | Present in exact READY production commit, site link, Resources dropdown, sitemap, llms.txt |

## Content parity and brand

None of the five production files are byte-identical to the original Common Repo file. The page title and primary content appear materially aligned. Site adaptations added canonicals, social metadata or local HAIEC branding; do not overwrite the site files blindly with the original Common Repo artifacts. The site source lengths at the deployment SHA are:

- DAI: 104,818 bytes/characters versus 104,313 Common Repo.
- Controls: 151,032 versus 150,642; updated title and metadata.
- Incident: 54,047 versus 53,364.
- First 30 Days: 170,527 versus 169,949.
- Attack Atlas: 64,333 versus 63,512.

All five deployed site copies have a self-referencing canonical and Open Graph metadata, do not contain literal Unicode em dashes, include an HTML logo image, and contain CSS print support. Differences appear chiefly presentation/integration-sized, but **semantic content and JS equivalence were not exhaustively diffed**. Common Repo retains original canonical assets while the production repo is responsible for site-specific wrapping and metadata. Check that both do not independently serve duplicate indexable canonicals.

## Prioritized concrete gaps

**P0: Missing Report Trust reader (#4).** Authored plan at `learning/HAIEC-CAN-YOU-TRUST-THIS-AI-ASSURANCE-REPORT-INTERACTIVE-LAB-PLAN-2026-10-21.md` and 12-case blueprint at `learning/HAIEC-REPORT-TRUST-AND-AUDIT-READINESS-12-CASE-EXERCISE-BLUEPRINT-2026-10-21.json`; build the actual interactive HTML and validate, then publish under Learn. It teaches limits of integrity/receipts, established/unestablished/not assessed, exact frozen evaluation and qualified proof. Do not imply digest validity equals safety or that an issued U6 receipt proves upstream source truth.
 
**P1: Public runtime verification missing.** Confirm live HTTP status, cache/deployment aliases, page JS, useful links, printer/PDF output and source claims in a real public-browser session. A source file in a READY production commit is not sufficient to certify all public interactions. Run a single focused 5-page browser check rather than unrelated test suites.

**P1: Initial HTML / crawlable lesson detail.** After stripping scripts/styles and markup in the production site HTML, estimated visible initial word counts were approximately DAI 1,521, Controls 1,644, Incident 774, First 30 Days 8,063 and Attack Atlas 733. Interactive case/exercise text is mainly provided through client scripts for the first, second, third and sixth. Search engines can render JS, but server/static prerender of main lesson summaries and 12 scenarios or key questions is more robust. Preserve current interactive features and avoid hidden SEO stuffing. First 30 Days is comparatively rich in native initial content.

**P1: Source proof and teaching limits.** Check each page against current U5/U6, DAI, code capability and enforcement source owners. Specific review gates: DAI permission vs discretionary delegation, catalog 45 controls not all operational, incident configured/dispatch/target effect distinction, First 30 Days implementation timeline not a guaranteed customer POC in 30 days, Atlas source-backed action path not an observed attack or breach. These risks are **review gates**, not evidence of a specific inaccurate displayed statement in the current files.

**P1: Meaningful content depth.** Earlier acceptance records: DAI 12 cases/36 decisions; Controls 45 control records and 135 decisions; Incident 8 injects and 24 questions; First 30 Days 30 lessons; Atlas 12 cases/36 questions. Source-level presence does not prove the educational responses execute correctly in production. Avoid collapsing these labs into sales copy and ensure links to the right product/source proof.

**P1: User journey.** Current Learn hub contains large independent featured cards for all five, and Resources has a growing list of workbooks. Provide a more useful Learning Paths grouping by role: executives, practitioners, AppSec and auditors, with one-sentence learning outcomes and a progressive path. Do not add another top-level navigation item or 8 equal prominence menu labels.

**P2: Structured educational markup.** None of the five checked deployed HTML files contains visible `application/ld+json` structured data. Optional WebPage/LearningResource/BreadcrumbList where visible and valid; SEO does not depend on JSON-LD, and it should not claim certification.

**P2: Dedicated copy/branding checks.** Validate title/description, diagram accessibility (text alternatives), interactive keyboard/focus behavior, reduced motion, 200% zoom and printed PDF. Site logo added to all five files and no em dashes detected. Do not mistake metadata integration deltas for feature regressions.

## Publication order and recommendations

1. **Build the missing Report Trust HTML** from the approved 12-case 36-question blueprint and align it to the frozen Master Report, Agent Audit, U5/U6 evidence/receipt distinctions.
2. Publish under one canonical Learn URL with card/menu/sitemap/llms registration.
3. Run five existing pages plus new page through short public-browser smoke and source parity checks; test main question selector, one deep exercise, report link, export and print on each.
4. Add indexable summaries/question navigation to the mostly JS-generated labs as an additive SEO pass, preserving all authored cases and current design.
5. Improve Learning Paths navigation and contextual links from /why-haiec, /enterprise, /ai-security, /assurance-controls and relevant product pages, without duplicating lead forms.

## Important exclusions and limitations

- Resources **7 Executive Decision Workshop** and **8 Integration & Evidence Field Guide** are not assessed per user request.
- The exact production commit is verified through the connected Vercel deployment record, but no live public HTTP assertions are made.
- No production website files, route registry or canonical learning HTML were changed as part of this audit.
- Original HTML Common Repo vs website copies are different; deployment status cannot be inferred from Common Repo alone.

**Audit outcome:** Five of six resource files are included in the current READY production deployment source. One is missing as an interactive HTML: Can You Trust This AI Assurance Report? Remaining material opportunities are crawlable content, functional public-browser verification, optional educational structured data, better Learning Paths discovery and editorial source-proof review.
