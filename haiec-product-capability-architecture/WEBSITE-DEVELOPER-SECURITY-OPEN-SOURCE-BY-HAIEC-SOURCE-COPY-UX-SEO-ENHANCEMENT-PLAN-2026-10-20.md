# Developer Security: Open-Source Tools from HAIEC | Source-Verified Positioning, Copy, UX, SEO and Design Plan
**Reviewed:** 2026-10-20. **Workstream:** Website Page #25. **Status:** Current HAIEC Main code and live public page inspected; 3 package LICENSE/README/package.json files checked. Planning and copy only, no website implementation, no visual screenshot E2E or package release performed. **Canonical:** https://www.haiec.com/developer-security

## 1. Decision
**Enhance the EXISTING page in place.** The preferred customer-facing family label is **Open-Source Developer Security by HAIEC**. Keep route, user intent and substantial content; no duplicate /open-source, /developer-security-v2 or standalone HTML.

**H1:** Open-Source Security Tools for AI Developers. **Eyebrow:** Open Source by HAIEC. **Promise:** Open code. Independent tools. Evidence you can inspect. Three MIT-licensed repositories offer focused developer checks, without claiming the whole HAIEC commercial Assurance platform or hosted MCP service is MIT/open source.

Brand nuance: source licenses are different copyright attributions: AI AppSec copyright HAIEC, MCP Tenant Isolation copyright Subodh Kc, LLMVerify copyright KingCaliber Labs with HAIEC credited original author. Thus use "tools from HAIEC" or "open source by HAIEC" as publisher/family brand. Avoid claiming one entity exclusively owns the code in all three repositories; point to actual LICENSE documents.

**Canonical ownership:** /developers is the HAIEC hosted MCP/GitHub/API Assurance developer hub; /developer-security is open-source package family selector; /ai-appsec, /mcp-tenant-isolation, /llmverify are individual package docs; /docs/agent-integration is HAIEC remote Streamable HTTP MCP onboarding; /ai-security is broad product. These roles must remain distinct.

## 2. Current source and meaningful gaps
- app/developer-security/page.tsx: dark gradient hero, vertical ArchitectureDiagram, three expanded LayerCard sections, heavy evidence/installation/limitations text, generic Developer Security vs Platform Validation list, related AI Inventory and ISAF Logger. Does NOT prominently say open source, display MIT/GitHub/npm links as lead actions or invite contribution.
- components/developer-security/ArchitectureDiagram.tsx: three tools stacked with connectors, visually suggests a compulsory sequence. **Incorrect presentation:** they are independent tools, not Source -> Boundary -> Runtime mandatory execution stages. Replace connectors with three peer alternatives.
- components/developer-security/LayerCard.tsx: good real copy buttons, package config and limitations but giant duplicate detail from canonical product pages; lacks first-glance "Who is it for / What it produces / Install / GitHub / License" hierarchy. Preserve substantive detail through accessible disclosures and deep links.
- data/developer-products.ts is fact owner, but source verified dates differ. AI AppSec website version 0.1.0 and lastVerified 2026-08-22, package.json main 0.1.1; npm search previously displayed 0.1.0. **Repo version != published npm version**; run authoritative npm verification prior to changing public release/version, and reconcile all downstream pages from manifest. MCP Tenant Isolation main 2.0.0 and LLMVerify main 1.8.0. LLMVerify README header itself was older than package.json. Do not fabricate releases/updates.
- app/developer-security/layout.tsx SEO "Source, Boundary & Runtime" hides main open-source intent and blurs model I/O checks with HAIEC SaaS Runtime Security Testing.
- Site's newer light-first theme: this page's dark hero and dense 3-section information architecture diverges. Reuse public global theme and preserve site nav/footer.
- Current copy overstates "detect leaks before production", "PII redaction / prompt-injection defense", "runtime monitoring" and Platform Validation regulatory/compliance claims unless accurately qualified. Local AI coding-agent MCP servers are stdio, distinct from hosted HAIEC API-key MCP.
- Current architecture never links direct source GitHub/LICENSE/npm in prominent opening; don't invent single "all three tools GitHub repo".

## 3. Verified product source / boundaries
| Tool | Verified source and MIT | Real supported scope | Copy boundary |
|---|---|---|---|
| AI AppSec | github.com/subodhkc/ai-appsec, LICENSE MIT copyright 2026 HAIEC, package.json 0.1.1 on main | Standalone Semgrep 1.173.0 external-engine static check for supported AI app/agent source; read-only stdio tool scan_ai_security; source coverage, receipts, proof-of-fix; no HAIEC account for standalone scan | Not executed runtime behavior; Semgrep requires separately installed external dependency; supported-file/parse coverage applies; release version only from published npm check. |
| MCP Tenant Isolation | github.com/subodhkc/mcp-tenant-isolation, LICENSE MIT copyright 2026 Subodh Kc, package.json 2.0.0 | 57 deterministic rule catalog, JS/TS source scanning with AST and supported Prisma/SQL/MCP patterns; CLI, stdio MCP, output formats according to published version | Not proven runtime/DB tenant isolation or live cross-tenant test; pattern/flow analysis can miss cross-function relations and can yield false positives. |
| LLMVerify | github.com/subodhkc/llmverify-npm, LICENSE MIT copyright 2025 KingCaliber Labs and HAIEC original author credit, main package.json 1.8.0 | Local pattern-based checks for prompt injection signals, familiar-format PII, output quality/hallucination risk, explicit notChecked; optional app-level integration and stdio MCP | Not universally protective gateway, verified factual correctness, guaranteed PII elimination, independent live runtime witness or installed HAIEC monitoring. Do not imply MIT open source includes all possible paid/hosted functionality. |

External Semgrep engine is not owned/bundled by HAIEC AI AppSec package; its own license/third-party notices must be respected. Never state deterministic AI outcomes are free of false positives or that three tools together constitute a certification.

## 4. Priority decisions
| ID | Priority | Corrective/UX opportunity |
|---|---|---|
| DS-01 | P0 | Hero clearly announces Open Source by HAIEC, MIT, GitHub inspectability, runnable standalone tools, and bounded deterministic results. |
| DS-02 | P0 | Remove chained arrow pipeline; design 3 equally weighted independent cards with one customer question and one quick-start each. |
| DS-03 | P0 | Real GitHub, npm, MIT LICENSE and security/advisory links per repo, never a non-existent central repo. Preserve command copy. |
| DS-04 | P0 | Move full repetitive technical details into optional accordion or existing canonical package product pages without deleting them. |
| DS-05 | P0 | Reconcile package releases from actual npm publish vs repo main, update shared manifest and all rendered child pages only when authoritative. |
| DS-06 | P0 | Correct broad "blocks prompt injection", "detects leaks before production", "audit-grade compliance" and absolute Platform Validation promises. |
| DS-07 | P0 | Clearly distinguish local stdio MCP package vs HAIEC hosted remote MCP; no account needed for supported local packages, separate platform connection for Assurance. |
| DS-08 | P1 | Add "Which risk are you reviewing?" interactive 3-way purpose selector, meaningful outputs and no fake scans or signals. |
| DS-09 | P1 | Show concise example bounded finding + coverage / notChecked / limits, marked via context as example (no fake scan receipts). |
| DS-10 | P1 | Consistent light-first/dark-compatible UI, small native semantic HTML/SVG parallel-check diagram, full accessibility & mobile. |
| DS-11 | P1 | Clean comparison "Open Source Tools vs HAIEC Assurance" with optional progression only, not mandatory upsell or certification. |
| DS-12 | P1 | Honest License/Contribute/Security section: release owner, link LICENSE, SECURITY.md/private advisories where supported, GitHub issues. |
| DS-13 | P2 | Move AI Inventory and ISAF Logger links below primary trio and clarify they are separate utilities, not automatically these three open-source scanners. |
| DS-14 | P2 | Rewrite SEO and schema to express an open-source software collection and three valid source repos, not a claim whole HAIEC platform is MIT. |

## 5. Proposed finished public copy and information architecture
**Hero eyebrow:** OPEN SOURCE BY HAIEC
**H1:** Open-Source Security Tools for AI Developers
**Primary headline support:** Secure the AI you build. Inspect the code. Understand the evidence.
**Deck:** Three purpose-built, MIT-licensed tools for checking AI application source code, MCP tenant boundaries, and LLM inputs and outputs. Run focused checks in your development workflow, inspect the findings and understand what was covered.
**Proof line:** Open code. Independent tools. Evidence you can inspect.
**Primary CTA:** Explore the tools (in-page anchor)
**Secondary CTA:** View source on GitHub (anchors to visible individual repo links; do not link invented central repo)
**Tertiary:** Want a broader assurance assessment? Explore HAIEC Platform (/platform).

**Section 1 title:** Choose the check that fits your project.
**Intro:** Each tool works independently. Start with one, combine them when useful, and inspect exactly what its findings establish.

**AI AppSec**
- Header: "Find source-level security risks in AI applications and agents."
- Customer question: "Which supported code paths and integrations merit security review?"
- Copy: "Scan supported source files before a merge. Review source-linked findings, checks evaluated, scan coverage and repeatable receipts."
- Quick start: npm install -g ai-appsec; note separate Semgrep prerequisite, doctor/setup link; source GitHub / npm / Docs / MIT.
- Scope: static code analysis only, not proof of runtime action.

**MCP Tenant Isolation**
- Header: "Review tenant boundaries before multi-tenant code ships."
- Customer question: "Where might a query, cache, API or MCP tool miss tenant scoping?"
- Copy: "Use dedicated code rules to examine supported multi-tenant and MCP paths, with findings and portable review output."
- Quick start: npx mcp-tenant-isolation scan ./src (verify shipped CLI prior publish), source GitHub / npm / Docs / MIT.
- Scope: static checks, not live enforcement or proof all data isolation works.

**LLMVerify**
- Header: "Check model inputs and outputs with local risk signals."
- Customer question: "What recognizable input or output risks are visible to a deterministic check?"
- Copy: "Check known injection patterns, common personal-data formats and model-output signals. Results explain what was checked and what remains uncertain."
- Quick start: npm install llmverify (then documented explicit API call, installation doesn't automatically instrument all requests), source GitHub / npm / Docs / MIT.
- Scope: pattern detection isn't guaranteed prevention or fact-checking.

**Section 2 title:** Local-first checks that fit your workflow.
**Copy:** "Install the tool for your immediate security question. Run a supported scan or input/output check, review its findings and coverage, and repeat after a change. Where offered, local MCP lets a coding assistant call the same tool; it does not independently create a HAIEC platform evaluation. Installation of the Semgrep dependency can require network access."
**Visual:** one developer context branching to three peer source / tenant code / model I/O checks; each yields "findings, scope, limits"; separate clearly optional link to HAIEC platform with fresh authorized evaluation. No Source → Boundary → Runtime chain, no fake integrated proof.

**Section 3 title:** Know what the check found and what it did not.
**Copy:** "A rule match identifies a condition for review. Scan coverage tells you what was analyzed. A receipt helps compare supported runs. No single tool can establish that an entire AI system is secure or that a particular live action took place."
**Illustrative examples:** static unsafe code pattern, missing tenant guard candidate, prompt-input pattern flag. These are examples not customer run or fabricated evidence.

**Section 4 title:** Open-source checks for builders. Evidence-bound assurance for consequential systems.
**Copy:** "The developer tools run focused checks and return package-specific findings. HAIEC's wider platform connects permitted AI system sources, traces supported action paths, compares qualified authority and evidence, and records supported assurance conclusions. Broader outcomes depend on source access, evaluated scope and approvals. The tools are complementary, not equivalent."
**CTA:** "Run HAIEC AI Assurance" → /docs/agent-integration; "Explore Platform" → /platform; installation CTAs remain no-account on same page.

**Section 5 title:** Open code. Clear scope. Responsible maintenance.
**Copy:** "All three projects make their source code available under the MIT license. Review a package's actual release, dependencies, licensing and security reporting instructions before integrating it into your workflow. Contribute or raise issues through the relevant project."
**Repo links:** https://github.com/subodhkc/ai-appsec ; https://github.com/subodhkc/mcp-tenant-isolation ; https://github.com/subodhkc/llmverify-npm. Show each LICENSE link and supported security advisory/issue link.

**Related tools:** AI Inventory instrumentation and ISAF Logger remain separate compact footer rail; not security checks by these three products. Preserve their current destinations.

## 6. Diagram and design
Replace ArchitectureDiagram vertical sequenced links with three parallel comparable cards or a responsive 3-column lane. Each one receives separate user input and produces its own result. No false "combine three in one guaranteed scan" edge. A note below connects optionally to HAIEC Assurance with a separate source qualification/action.
Light-first forest/navy/neutral palette from published site, dark-mode parity via existing public theme, no new theme engine; restrained dark console inside a card allowed. Labels identify coverage/limitations in words, not only color. Server-readable H1/sections with client chooser only if useful; copy buttons work and get feedback; 390/768/1440, reduced motion, keyboard. No huge full-page dark gradient by default, and no unrelated package brands overshadowing HAIEC identity.

## 7. SEO and user-intent boundaries
Title: Open-Source AI Developer Security Tools | HAIEC
Description: Explore MIT-licensed AI security tools from HAIEC: AI AppSec for source code, MCP Tenant Isolation for SaaS boundaries, and LLMVerify for model inputs and outputs.
Primary intent: open source AI security tools. Secondary: AI AppSec, MCP tenant isolation scanner, LLM input/output security, open-source AI developer tools. Canonical stays https://www.haiec.com/developer-security. Breadcrumb unchanged. Optional truthful CollectionPage/ItemList containing three named SoftwareSourceCode projects with per-repo license URLs; never imply the entire SaaS platform MIT licensed. No fabricated stars, endorsements, CVEs, adoption or downloads. Share OG/Twitter intent aligned.

## 8. Implementation constraints and acceptance
P0 source registry/license/published npm truth + first screen, independent peer cards, real source links, accurate local vs hosted MCP, platform distinction, SEO.
P1 parallel check diagram, accessible quickstarts plus Semgrep dependency, compact proof example and advanced docs preservation; preserve real install snippets/limitations in disclosure or direct links.
P2 developer trust/contribute FAQ, source statuses, responsive screenshot polish.

Verify npm releases without changing actual developer package repos. Diff all existing page sections and classify preserve, move to details, link canonical, replace factual error. No broad features, new tool IDs, scan API, upload, pricing changes or new route. Source code is published separately under individual MIT licenses; product site is not republished under MIT.

Focused tests: source link, LICENSE and npm path validity; accurate latest published versions; copy snippets work, flags preserved, dynamic data derived from shared manifest, no pipeline arrows; no risk/prevention guarantee or compliance certification; light/dark mobile desktop SEO/keyboard; cross-page URLs /developers and /docs/agent-integration. No live customer scan to test marketing site, no claim of deployment until actually verified. One focused PR when authorized, Main checks per policy, no manual deploy.

## References
- Github source/individual licenses: https://github.com/subodhkc/ai-appsec/blob/main/LICENSE ; https://github.com/subodhkc/mcp-tenant-isolation/blob/main/LICENSE ; https://github.com/subodhkc/llmverify-npm/blob/main/LICENSE.
- Existing page: https://www.haiec.com/developer-security.
- Common Repo companion: WEBSITE-DEVELOPERS-PAGE-MCP-FIRST-UX-COPY-INTERACTIVE-QUICKSTART-PLAN-2026-10-20.md; WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md; WEBSITE-AI-SECURITY-INTEGRATED-APPLICATION-RAG-MCP-STANDARDS-PAGE-UX-SEO-PLAN-2026-10-20.md; WEBSITE-SEVEN-PAGE-ENHANCEMENT-IMPLEMENTATION-RECORD-2026-10-20.md; HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md.
