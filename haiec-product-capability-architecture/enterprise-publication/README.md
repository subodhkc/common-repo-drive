# HAIEC Enterprise Publication Kit — Ready for Devin Website Integration


> **Architecture diagram build plan (2026-10-18):** [Eight reusable architecture masters and two scoped case-proof visuals](ARCHITECTURE-DIAGRAM-BUILD-PLAN-2026-10-18.md). Reuse the six existing corrected SVGs; phase D1–D3 and manufacturing case before D4–D8; no new engine, deployment, or live protection claims.

**Publication editorial snapshot:** 2026-10-18. **Status:** Source-qualified editorial candidates committed to common repo; **NOT YET LIVE on HAIEC.com**. This directory is public. No customer, private HAIEC, token, or confidential organizer evidence may be added.

## Purpose and decision

Publish **three independently accessible but cross-linked supplemental resources from the EXISTING HAIEC `/enterprise` page**, without replacing its commercial engagement information, lead capture or current executive link:

1. **Executive Capability Brief** (12 slides): [enterprise-capability-brief.html](./enterprise-capability-brief.html)
2. **Technical Capability & Control Annex** (20 slides): [technical-capability-control-annex.html](./technical-capability-control-annex.html)
3. **Technical Reference Tables A–F** (interactive six-section reference): [technical-reference-tables.html](./technical-reference-tables.html)

Each document has a companion CSS and JS file in this same directory. **All nine files belong together.** HTML files reference production destinations under `/enterprise/resources/`; they intentionally do not fully render when opened as bare `file://` until those asset paths are resolved. Devin should COPY and deploy the kit with the exact destination below, or use an equivalent import/path adjustment preserving function.

**Operating message:** Know what your AI can do. Govern what it may do. Verify what happened. The three pillars remain Understand / Assure / Govern & Operate. Six independently selectable jobs are Discover, Evaluate, Authorize, Monitor, Protect, Verify. Five evidence planes are independent. DAI is an orthogonal authority comparison, not a sixth plane.

## Source and commercial precedence (do not regress)

- Canonical product owner: `subodhkc/haiec-website`, particularly `app/enterprise/page.tsx`, `app/enterprise/data.ts`, `lib/developer-integration-source-status.ts`, `public/.well-known/haiec-capabilities.json`, `lib/control-visibility/catalog.ts`, `lib/kill-switch/native-enforcement-adapter.ts`, the source registries and per-source assurance truth.
- Current `/enterprise` is a **bounded Enterprise Assurance POC**, **typically 4–8 weeks after readiness**, and **$25K–$75K scoped engagement** as defined in `data/commercial-offers` and `app/enterprise/data.ts`. Do NOT replace this with a 30-day guaranteed scope, an $8K starter offer or a new SaaS tier. Final timeline/terms always follow the SOW.
- Keep `/enterprise#qualify` lead form, existing POC outputs, pricing qualifier, FAQ JSON-LD, SEO, referral/partner handling and prior published executive brief link `/briefs/ai-assurance-for-consequential-ai.html` INTACT.
- MFG demonstration: genuine persisted HAIEC assessment over **synthetic lab evidence**; subsequent demo gateway hold, human operating decisions, monitoring and factory data are fictional/browser-local. 45 current evaluations distinct from 27 historical. ALL current 45 overall dispositions are REVIEW. MFG effect-witness satisfaction is not a production prevention claim.
- TM Forum: participant-published event evidence archive (C7, C9, C16, monitoring canary, gap list). Do not call it organizer-certified, universally validated or live HAIEC native target kill-switch enforcement.
- OWASP LLM 2026: current 2026 category numbering. The reference tables and annex were edited to remove superseded 2025 ordering. Mappings are taxonomy crosswalks, never complete demonstrated threat coverage.
- A registered detection, 45 control catalog entries, 11 visibility projections, 26 typed intake profiles and specialized package rules are different denominators, not additive protection metrics.
- HAIEC code-backed execution-guard, emergency control API and target native adapter contract exist, but inspected adapter registry does not demonstrate a generally wired **production** target-native interception point. Assessment BLOCK ≠ CI gate block ≠ guard deny ≠ independently verified physical prevention.
- GitHub App remote assurance available. Local/CI paths remain bounded preview. GitHub Action v2 not released; legacy PAT-based v1 is deprecated. Runtime endpoint tests require explicit authorized consent.
- Last-mile identity/provenance, signed attestation, source coverage and test maturity should be verified from live canonical owners before making customer-production claims. Editor/source observations do not replace tenant acceptance.

## File inventory and exact website destinations

| Common repo asset | HAIEC website destination |
|---|---|
| `enterprise-capability-brief.html` | `public/enterprise/resources/enterprise-capability-brief.html` |
| `enterprise-capability-brief.css` | `public/enterprise/resources/enterprise-capability-brief.css` |
| `enterprise-capability-brief.js` | `public/enterprise/resources/enterprise-capability-brief.js` |
| `technical-capability-control-annex.html` | `public/enterprise/resources/technical-capability-control-annex.html` |
| `technical-capability-control-annex.css` | `public/enterprise/resources/technical-capability-control-annex.css` |
| `technical-capability-control-annex.js` | `public/enterprise/resources/technical-capability-control-annex.js` |
| `technical-reference-tables.html` | `public/enterprise/resources/technical-reference-tables.html` |
| `technical-reference-tables.css` | `public/enterprise/resources/technical-reference-tables.css` |
| `technical-reference-tables.js` | `public/enterprise/resources/technical-reference-tables.js` |

After deployment, exact customer URLs are:
- `https://www.haiec.com/enterprise/resources/enterprise-capability-brief.html`
- `https://www.haiec.com/enterprise/resources/technical-capability-control-annex.html`
- `https://www.haiec.com/enterprise/resources/technical-reference-tables.html`

**These URLs are targets, not verified live links yet.** No need to create an alternate enterprise landing page, duplicate product claims database or modify MCP/Assurance Engines. These are public, static, editorial reference resources.

## Website UI integration

In `app/enterprise/page.tsx`, ADD a compact **Explore Enterprise Resources** surface below the hero/primary CTA or immediately after POC-trigger introduction (not replacing any existing sections). Three clearly labeled **text links** with one-sentence summaries; optionally icons:

- **Executive Capability Brief** — “A concise guide to AI security, consequential-action assurance, governance and business value.”
- **Technical Capability & Control Annex** — “Architecture, five evidence planes, agent authority, AI AppSec, monitoring, CI/CD and protection boundaries.”
- **Technical Reference Tables A–F** — “Control inventory, detection families, OWASP/framework mappings, integration readiness, claim ledger and evidence cases.”

All three can open new tabs (`target="_blank" rel="noopener noreferrer"`) or normal client routing as supported; maintain keyboard focus and semantics. Preserve the existing **Read the executive brief** link to the older publication (it is a separate asset). Optional small “October 2026 · technical reference” metadata, but **no completion/certification badge** or claim of 157 live customer detectors.

Only a **minimal additive JSX/data change** to `/enterprise` is required. Avoid secondary banners dominating POC primary CTA.

## Design and client behavior

- The brief/annex are presentation-style, scroll-snap pages. The tables are a document-style filterable HTML reference. Preserve these differences, but add accessible headings, a recognizable HAIEC reference link, clickable cross-document navigation and clearly labeled illustrative scenarios.
- Assets have been edited to use local `*.css` and `*.js` instead of inline script/style blocks. This helps conventional CSP deployments. However many inline `style=` declarations remain; inspect actual site CSP and decide whether to migrate them or adjust permitted styling. **Never weaken CSP globally merely to make static documentation work.**
- The reference tables have button-based navigation and event listeners rather than inline onclick handlers. Check keyboard controls, filtering, active section, direct links, print all and small-screen horizontal table scroll.
- Keep native HTML semantics and accessible alt/text equivalents for diagrams. Cross links already use `/enterprise/resources/*` paths; do not add fake “download” UI. If PDF export is required later, make PDFs with print QA and stable revision IDs, not silent PDF screenshots of clipped pages.
- Print: brief 12 slides, annex 20 slides, tables print all 6 sections. Run actual browser print/PDF spot checks; the original files have compact type and some potential content clipping. If print clipping occurs, **fix CSS and layout**, not the claims. Pay special attention to manufacturing slide 6 and dense annex pages 10–18.
- Keep light presentation palette within standalone materials even though /enterprise currently uses a dark website palette; the link cards should use existing Enterprise page design tokens and not copy the standalone light theme wholesale.

## Source status and editorial review log

Changes applied to the uploaded drafts as the public-site source candidates:
1. Executive copy reduced categorical superiority claims, made POC non-production eligible and aligned period to 4–8 weeks.
2. Separately described manufacturing persisted evaluation and fictional subsequent operating response. Added illustrative callouts to monitoring and control examples.
3. Corrected OWASP category order to 2026 in annex and reference table C1; crosswalk statuses explicitly evidence-dependent.
4. Distinct source availability: GitHub remote/preview local, authorized runtime testing, scoped MCP read and write (not a universally read-only server), independent external enforcement.
5. Replaced “157 rules live on activation” with producer-backed registry language and maintained 176/31 + 19 held denominator caveat.
6. Changed examples and controls to illustrative context where named approvers, provider metrics or receipts are not evidenced by a live reference.
7. Externalized assets and converted reference sidebar onclick handlers to registered listeners. Website cross-links target the designated stable resource paths.

**Open review gates before Devin merges into HAIEC Main:**
- Run a short source-based audit of cited repo paths, actual runtime/deployment truth, authorization modes and preview/held statuses against HAIEC HEAD; correct doc claims only when source says so.
- Recheck Table E claim ledger. Its “Demonstrated”/dates may represent source inspections or fixture tests and are **not** production tenant acceptance. Downgrade any unproved status.
- Link/visual/layout check of all three public resource URLs, mobile (390px), desktop (1440px), print-to-PDF; no clipping, no broken CSS/JS or cross-links.
- Test table filters, search and “Print all”. With JS disabled, table UI cannot reveal hidden sections by default: add a progressive enhancement/no-JS fallback if practical.
- Verify manufacture screenshots or exact case links if used; do not add claim of live PLC/MES/ERP actuator protection.
- Clear external publication rights for TM Forum screenshots and content; link to the existing public archive instead of copying all third-party evidence.
- Confirm website SEO noindex/index decision for detailed technical tables; choose canonical tags and titles deliberately, and check duplicate-content/crawl impact.

## Devin-ready work order — copy/paste

**Task: Ship three additional public HAIEC Enterprise resources linked from /enterprise.**
- Start by refreshing `subodhkc/haiec-website` Main and `subodhkc/common-repo-drive` main. Read this directory's README plus existing annex plan `haiec-product-capability-architecture/ENTERPRISE-TECHNICAL-CAPABILITY-CONTROL-ANNEX-PLAN-2026-10-18.md`, current HAIEC `app/enterprise/page.tsx` / `app/enterprise/data.ts`, `lib/developer-integration-source-status.ts`, control and evidence registries.
- Copy the nine static HTML/CSS/JS files from `common-repo-drive/haiec-product-capability-architecture/enterprise-publication/` to the exact HAIEC `public/enterprise/resources/` paths above. Do not regenerate them from generic marketing prompts. Keep evidence-bound, synthetic and maturity disclosures; make only grounded corrections after source verification.
- Add a compact, attractive **Explore Enterprise Resources** section on `/enterprise` with three links to the exact resource paths. Preserve old executive brief link, qualifying form, tracking/referrals, pricing/4–8-week engagement, JSON-LD, SEO and current page layout. No new menu/sidebar top-level destination or sales funnel.
- Fix CSP compatibility of standalone static resources with external JS/CSS, keyboard/ARIA, mobile, print, table filter/print-all behavior and any real CSS overflow. Do not weaken the site-wide CSP or re-add inline executable JS. For any inaccessible control in no-JS mode, provide fallback.
- Validate a small, targeted list: TypeScript/build or static check, three public resource 200 responses (plus CSS/JS), all cross-links, one table filter/search/print interaction, viewport checks at 390px and 1440px, sampled PDF print pages (particularly executive 6, annex 10–18), and a minimal enterprise-page regression check. Prefer focused tests and code inspection over long suites; do not invent success.
- No changes to Assurance engine, controls, MCP, approval or runtime systems; do not run a new manufacturing evaluation.
- Work on a focused branch and PR; review/merge to HAIEC Main once tests pass. Main triggers automatic Vercel deployment. Verify production /enterprise plus all nine resource URLs and links after deploy. Return PR, commit, deployment and tested URL summary. Do not ask for Vercel Git-identity fixes.

**Definition of done:** Existing enterprise buying motion unchanged; the three resources are rendered and reachable from the enterprise page, internally cross-linked, source-qualified, responsive and print-checkable; no simulated feature is presented as a production outcome.

## References
- Main editorial plan: [ENTERPRISE-TECHNICAL-CAPABILITY-CONTROL-ANNEX-PLAN-2026-10-18.md](../ENTERPRISE-TECHNICAL-CAPABILITY-CONTROL-ANNEX-PLAN-2026-10-18.md)
- [HAIEC website enterprise page](https://github.com/subodhkc/haiec-website/blob/Main/app/enterprise/page.tsx)
- [HAIEC commercial offer](https://github.com/subodhkc/haiec-website/blob/Main/app/enterprise/data.ts)
- [Manufacturing judge guide](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md)
- [TM Forum archive and gaps](https://github.com/subodhkc/tmf-2026-evidence)
- [OWASP GenAI LLM 2026 canonical source](https://github.com/GenAI-Security-Project/GenAI-LLM-Top10/blob/main/2026/README.md)
