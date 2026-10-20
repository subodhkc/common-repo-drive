# HAIEC GitHub Integration Guide: Source-Verified UX, Technical Accuracy, Visual Design and Conversion

**2026-10-20 | Page #15 | Existing canonical /docs/github-integration | Common Repo plan and interactive design only**

Design: [Interactive GitHub Integration Guide](design-references/github-integration-2026-10-20/github-app-to-verified-source-assurance-interactive.html)

## Purpose and differentiator

Turn the GitHub Integration Guide into the **clearest authorized source-to-consequence onboarding route** for developers. It must answer:
1. What does HAIEC access when I authorize the GitHub App?
2. How does that installation become a **verified Source Asset attached to the correct AI System**?
3. What can HAIEC find from my repository before any IAM, policy or telemetry integration?
4. How does a PR diff review differ from a full-repository canonical Assurance run?
5. How do I securely invoke, read and act on deterministic results using dashboard, MCP/IDE or API?

**Customer-ready hero: "Connect your code. Discover what your AI could cause."**

Deck: **Authorize the repositories you choose through the HAIEC GitHub App. Bind a verified source to your AI System, discover consequential agent/tool/handler paths, and run eligible deterministic Assurance from the dashboard, API or connected coding agent.**

Proof line: "Your repository provides the source. HAIEC establishes what that source supports." Avoid saying all code findings are fully qualified risk verdicts or guaranteed runtime effects.

**Key USP visual:** **GitHub organization → selected repository → HAIEC installation → AI System → verified Source Asset → remote source analysis → source-capable action path → exact eligible evaluation/report.** Keep permission and business authority as additional independent questions, **not onboarding gates that hide source findings**.

## Exact source audit, 2026-10-20

GitHub repository: subodhkc/haiec-website, default Main.
- **app/docs/github-integration/page.tsx**, blob 5ddcb95bcce35547d71177e4b072417aed903d80, 16,911 chars. Already contains a useful seven-step Quick Start, four developer/API follow-up steps, distinct PR and full remote workflows, security/permissions table, access model remote vs local, support and deep docs links. It currently uses dark hero and near-white content, no substantive interactive walkthrough, and long static tables.
- **lib/developer-integration-source-status.ts** (latest at audit), GitHub remote **available, recommended, full_remote**. Local IDE and CI **limited preview, enterprise_poc distribution**. GitHub Action v2 **not released**. Runtime endpoint a separate authorized testing surface.
- **app/github/setup/page.tsx**: post-installation setup UI, installation status/selection, login/session and callback error handling. It is **not** the same as the public initial GitHub App installation link.
- **app/github/status/page.tsx**: service-status UI with webhook intake, posture, PR analysis/comment and remote dispatch capabilities. Service status must not be implied to be healthy without an actual live check.
- **app/api/v1/systems/[systemId]/evaluation-sources/route.ts**: Bearer authenticated GET using source:read scope; only VERIFIED, system-bound, non-retired SOURCE_REPOSITORY Source Assets are eligible for fresh remote scans. Cross-organization access is protected.
- **app/api-platform/page.tsx**: versioned REST endpoint owner; GET /api/v1/systems, GET /api/v1/systems/{systemId}/evaluation-sources, POST /api/v1/assurance/runs, GET /api/v1/assurance/runs/{runId}, GET summary and report by persisted evaluation ID.
- **lib/developer-integration-status.ts**: HAIEC MCP endpoint https://www.haiec.com/api/mcp, Streamable HTTP, scoped Bearer API key, organization bound to key, no OAuth. Agent preflight and canonical report APIs reuse actual service owners.
- **app/docs/guides/connected-github-assurance/page.tsx**, **app/docs/guides/api-quickstart/page.tsx**, **app/docs/guides/cursor-assurance/page.tsx**, and **app/docs/agent-integration/page.tsx** contain detailed, related technical walkthroughs; avoid duplicating full docs on this overview.
- **components/AutoHideNavigation.tsx**: **Developers → Run HAIEC → GitHub Integration** already links to this guide. No new menu entry needed.
- **data/public-site-registry.ts** already registers the wider developer hub, but this guide is a documentation subroute. Keep canonical /docs/github-integration. Check existing docs sitemap discovery and breadcrumbs as part of eventual implementation; avoid duplicate SEO owners.

### Important improvements and risk corrections

1. **GitHub Marketplace search is not a verified direct install URI.** Current guide's \`const GITHUB_APP_URL = 'https://github.com/marketplace?query=haiec'\` represents a search page. Label link "Find HAIEC on GitHub Marketplace" unless a verified exact app install URL is available. Do not invent \`github.com/apps/.../installations/new\`. Also present existing secure post-install \`/github/setup\` route only **after** installation. Use real linked setup guide and do not promise a single click completes app install.
2. **Installation != Source verification.** Installation/repo selection supplies *repository authorization*. Then connect the repository to an AI System as a SOURCE_REPOSITORY; only **CONNECTED + VERIFIED**, correct organization, not-retired source is eligible for fresh remote Assurance. Avoid suggesting pasting a repository URL proves ownership.
3. **Remote scan vs PR:** event-driven PR changed-file analysis can post PR comments when enabled; full remote Assurance is an explicit whole-repository run through canonical source/evaluation path. Different coverage, triggers, outputs and permissions; do not depict PR comment as a full Assurance report.
4. **Permissions honestly:** Contents Read, Metadata Read, Pull Requests Read & Write (PR finding/comment use, when enabled). Source says no contents/branch write, but PR write is real. Explain repo selection and access can be revoked or adjusted through GitHub (subject to current app settings). Never claim globally read-only.
5. **Source handling:** Remote HAIEC analyzer reads selected repo via server-minted short-lived GitHub App installation token. Client does not supply personal PAT to HAIEC. Keep credentials server-side, never log or pass back. Local/CI scanning takes place on customer infrastructure with limited preview coverage and submits qualified Evidence Bundles, not remote code access.
6. **Early findings first:** support source-level possible consequence such as \`agent → tool → handler → payment endpoint\`. Can be actionable even when policy/IAM/telemetry not connected. Authority/DAI/effective grants strengthen a different claim; observed payment needs actual target-side witness. Do not turn independent evidence planes into seven setup gates.
7. **Remove unsourced badge example:** Current guide contains an \`[![HAIEC SOC2](.../api/badge/SOC2-abc12345.svg)](.../artifact/SOC2-abc12345)\` and language promising a trust badge after compliance assessment. This is a **hard-coded generic badge pattern**, not verified proof of a customer's SOC 2 certification. Replace that public area with **Review your bounded report and available verification artifacts**, linking existing canonical report or actual issued receipts. Do not imply HAIEC certifies SOC 2, or invent badge value.
8. **Support:** Keep support@haiec.com and existing /github/status link without inventing current availability.
9. **No unnecessary mandatory policy upload:** the seven-step guide may show source binding first, not all five evidence sources.
10. **No internal/prototype/fictional labels or em dash** in customer content. The model case is explanatory and must not look like live customer transactions.

### Existing source links that must remain

- GitHub Marketplace **search** \`https://github.com/marketplace?query=haiec\` (not authoritative direct install).
- \`/github/setup\` authorized post-install continuation, \`/github/status\`.
- \`/dashboard/ai-inventory\`, \`/dashboard/api-keys\`, \`/dashboard/assurance\`.
- \`/docs/guides/connected-github-assurance\`, \`/docs/guides/cursor-assurance\`, \`/docs/guides/api-quickstart\`.
- \`/docs/agent-integration\`, \`/api-platform\`, \`/developers\`, \`/docs\`.
- \`/privacy\`, \`/terms\`, support@haiec.com.
- Source action proof /sample-reports/kestrel and /ai-action-access-map added as value demonstration.
- Preserve original GitHub App functionality: selected repo authorization, governance posture signals, PR changed-file analysis and comments when enabled, explicit full scan, verified AI System binding, canonical evaluation.

## Page outline and UX

### Hero
Eyebrow \`GITHUB APP INTEGRATION | AUTHORIZED SOURCE ASSURANCE\`.

**H1:** "Connect your code. Discover what your AI could cause."

Deck: authorize selected repositories securely, identify consequential AI capabilities, bind evidence to an AI System and read exact HAIEC results.

CTAs:
- Primary \`Set Up GitHub Integration\` anchor #setup (instructions with Marketplace search and post-install link).
- Secondary \`Explore Connected GitHub Assurance\` /docs/guides/connected-github-assurance.
- Tertiary \`See a Sample Report\` /sample-reports/kestrel.
Acknowledge **full remote** in factual setup context, not a huge product badge.

Hero visualization: native HTML/SVG style interactive **5-step provenance journey**: GitHub App → selected repo → verified Source Asset → path finding → scoped report. A selected step expands **What you do / What HAIEC establishes / What comes next**, not one-line text. No fake repository names and no invented actual account status.

### Section 1: Seven-step guided source onboarding, grouped visually into three stages
1. **Authorize**: find HAIEC GitHub Marketplace listing; select organization/account and only the repositories required.
2. **Bind**: return via post-install setup, select AI System, add Source Repository asset.
3. **Verify + Evaluate**: verify source binding and availability; choose Dashboard / MCP / API to initiate eligible remote run; inspect source finding first and canonical report where issued.

Use full seven original steps with selectable detail and current meaningful links. Make three group headers and 7 interactive stage steps. Show current eligibility rule in a small paragraph: verified, correct system, non-retired.

### Section 2: Interactive security and custody contract
"Who sees what, and where does code run?" Provide install authorization, repository read, PR comment permission, HAIEC scanner, customer local/CI alternative. Explicitly depict **no personal GitHub PAT** and the difference between **no source write** and **PR write**.

### Section 3: Two workflows, distinctly rendered
Selector \`Pull Request Review\` vs \`Full Remote Assurance\`. Change trigger/scope/tool/report/CTA details; emphasize canonical evaluator distinct from PR comment. Dispositions are bounded to evaluated scope.

### Section 4: A consequential source path (value)
Agent → MCP tool → handler → payment API. Selecting Source fact / DAI authority / Observed effect updates the explanation. Five independent views appear as peer facts, DAI separate. First result can be source capability without telemetry.

### Section 5: Run from dashboard, IDE or API
Three tabs with **documented** verbs:
- Dashboard: choose system + VERIFIED source; initiate eligible remote Assurance from /dashboard/assurance.
- MCP / IDE: configure scoped Bearer API key, \`haiec_preflight\` and \`haiec_run_assurance\` when eligible, read canonical Agent Audit/Report; reusable **Run HAIEC AI Assurance** goal.
- API: read-only GET with the correct Bearer key and separate printed exact method paths for POST and polls, avoiding invented POST JSON payload.

### Section 6: Full remote vs limited local/CI
Clear difference in source locality, credentials and analyzer coverage; local/CI remain limited preview enterprise POC. Do not claim staged GitHub Action v2 live.

### Section 7: Troubleshooting and security FAQ
Organize by GitHub App installed but source not eligible, repository not selectable, AI System mismatch, expired/revoked access, permissions, PR vs full report, local fallback, auth, consent, target effects. Offer actual support and status links.

### Ending
"Connect the right source. See the paths that matter." CTA setup + docs + report. Preserve privacy and terms links.

## Visual and interaction rules

- Light first paint, optional dark; keep theme with site's canonical public theme implementation. Native SSR text and semantic diagram components; avoid a full dark docs wall or stock Github illustration. Illustration is an action/source lifecycle, not fake live GitHub UI.
- Forest text, ivory and mint surfaces, deep navy inset for technical sample. Subtle path illumination and step transitions, no animated scan result masquerading as verified customer evidence. Contrast and accessible keyboard focus.
- Use disabled autoscrolling by default, user-click stage and selectable modes, reduced-motion handling.
- 7-step onboarding selector, 5-node visual hero, 2-workflow selector, 3-view consequence story, 3-run-mode explorer, functional copy. Complete mobile 390/768 and desktop 1440 layout.
- Do not paste standalone preview header/footer into HAIEC layout; inherit shared Navbar/Footer. Source route currently embeds a custom page header inside root shell; avoid double header and duplicated H1.
- Keep relevant existing metadata canonical route, update SEO title \`GitHub App Integration | Full Source Assurance for AI Agents | HAIEC\`. Description \`Connect selected GitHub repositories to HAIEC, verify a Source Asset and discover consequential AI action paths through authorized full remote Assurance.\`
- The page does not sell a standalone compliance badge or certification and does not create a second HAIEC evaluator.

## Implementation handoff, explicitly future only

1. Refresh HAIEC Main, confirm actual deployed build and current app status, exact Marketplace link and GitHub App permission manifest; reconcile with source guide before editing.
2. Preserve existing seven onboarding steps, four API steps and all original links in a section-by-section preservation matrix.
3. Build from server-first page and small client islands for selectors. Reuse existing site theme and TrackLink mechanism. No second menu.
4. Read exact eligibility \`/api/v1/systems/[systemId]/evaluation-sources\` and source model; do not claim app authorization or URL alone equals VERIFIED Source Asset.
5. Keep PR review and whole repo canonical run separate, with exact report/Passport availability.
6. Remove hard-coded fake SOC2 badge and unsupported certification suggestion; if verified badges exist, link to actual issued artifact and explain it faithfully.
7. Focused QA: links, one H1, seven steps, scopes, permissions, source-binding eligibility, PR vs full mode, 3 run modes, copy, code syntax, mobile, light/dark, accessibility, reduced motion, exact source claims. Do not run broad unrelated test suites.
8. **Do not edit, commit, push, PR, merge or deploy HAIEC production website source without an explicitly authorized subsequent instruction.** Current task only commits Common Repo planning and HTML design.

## Nearby content and references

- [Developers hub #14](WEBSITE-DEVELOPERS-PAGE-MCP-FIRST-UX-COPY-INTERACTIVE-QUICKSTART-PLAN-2026-10-20.md).
- [How HAIEC Works #12](WEBSITE-HOW-IT-WORKS-CONSEQUENCE-TO-DECISION-UX-SEO-DESIGN-PLAN-2026-10-20.md).
- [DAI standalone plan](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md).
- [Brand and light-first standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md).
- [Common Repo ISAF v2 research manuscript source](source-research/isaf-v2/README.md).
- [HAIEC guide source](https://github.com/subodhkc/haiec-website/blob/Main/app/docs/github-integration/page.tsx).
- [Github setup source](https://github.com/subodhkc/haiec-website/blob/Main/app/github/setup/page.tsx).
- [Source eligibility route](https://github.com/subodhkc/haiec-website/blob/Main/app/api/v1/systems/%5BsystemId%5D/evaluation-sources/route.ts).
- [Integration source status](https://github.com/subodhkc/haiec-website/blob/Main/lib/developer-integration-source-status.ts).
