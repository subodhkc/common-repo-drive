# Devin implementation handoff: Developer Security, Open-Source by HAIEC
**Controlling source/copy/design document:** WEBSITE-DEVELOPER-SECURITY-OPEN-SOURCE-BY-HAIEC-SOURCE-COPY-UX-SEO-ENHANCEMENT-PLAN-2026-10-20.md in this same Common Repo folder.

## Objective
Refresh the **existing HAIEC public /developer-security** page to communicate **three independent MIT-licensed open-source developer security packages by HAIEC**, maximize developer self-service installs and GitHub source inspection, preserve deep technical content, and draw a truthful, OPTIONAL connection to HAIEC's hosted evidence-bound assurance platform. Implement premium light-first/dark-compatible design with source-backed copy and real CTAs. **Do not create another URL, HTML prototype, SaaS security feature, product SKU or backend engine.**

## Read latest actual production owners before editing
Start on current default Main and inspect PRs recently merged, including website light-first style changes (#2285-#2287). Read:
- app/developer-security/page.tsx and layout.tsx
- components/developer-security/ArchitectureDiagram.tsx, LayerCard.tsx, CopyButton.tsx
- data/developer-products.ts and any current status/release component owners
- app/ai-appsec/page.tsx, app/mcp-tenant-isolation/page.tsx, app/llmverify/page.tsx
- app/developers/page.tsx and app/docs/agent-integration/page.tsx
- public nav and site registry/SEO intent, theme and conversion link owners
- GitHub repos subodhkc/ai-appsec, subodhkc/mcp-tenant-isolation, subodhkc/llmverify-npm: LICENSE, README, package.json, CHANGELOG, security process
- current published npm registry versions via authoritative npm metadata, not just repository source.

Report a short actual-content nonregression inventory. The fact that data/developer-products.ts is a central manifest does not establish that its versions are still published current. At review, ai-appsec website says 0.1.0 while repo main package.json says 0.1.1; LLMVerify source 1.8.0 but README heading 1.7.0. Check the actual npm release before adjusting website and related package pages. Do not modify package repos or publish a version in this website task.

## Editorial/product truth rules
Brand eyebrow OPEN SOURCE BY HAIEC, headline Open-Source Security Tools for AI Developers, customer-facing benefit "Secure the AI you build. Inspect the code. Understand the evidence." Clear local package family MIT status, 3 independent tools. Open source package != complete HAIEC platform MIT/license; package repo copyright differs; do not make exclusive-ownership legal claims.
1. AI AppSec: source and Semgrep-driven static checks, file/concern family/receipt/coverage. Actual Semgrep separate external prerequisite; no runtime effect, SaaS evaluation or mandatory account.
2. MCP Tenant Isolation: source-based tenant boundary issues in JS/TS/MCP/API/Prisma/SQL where supported. Not a live two-tenant attack and not verified DB RLS enforcement.
3. LLMVerify: local bounded deterministic pattern-based checks for recognized injection patterns, PII formats, and output/hallucination risk. No perfect redaction, factual verification or guaranteed guardrail/active telemetry.
All three are separate MIT open-source projects. Verify actual LICENSE, npm registry, package-specific MCP mode and status. Local package MCP is STDIO; HAIEC remote MCP is Streamable HTTP bearer scope and canonical HAIEC evaluation; they are not interchangeable. Do not imply all packages have identical CI or CLI workflows. No fake adoption, security guarantee, compliance certification, zero vulnerabilities, paid-feature rights or SLA.

HAIEC SaaS value should appear positively but separately: optional qualified source discovery and deterministic action assurance that considers policy, source reachability, delegation, observed evidence and limitations where actually connected. Open-source scanner receipts are not automatic canonical HAIEC evaluations or ingested evidence. Framework mapping not certification. Live protection/monitoring/PEP only where established.

## In-place design/build specification
A. **Hero:** concise open-source promise; MIT/source link examples; primary anchor Explore Open-Source Tools; secondary See Projects on GitHub should scroll to the 3 true repo links (not fake single repo); small tertiary /platform. Premium light-first, no huge dark splash by default. All text SSR.
B. **Three equally weighted choice cards / diagram** with no Source → Boundary → Runtime compulsory arrows. Source | Tenant Boundaries | Model Input & Output. Each answers **what are you trying to check**, the concrete output, accurate first command, GitHub repo, npm release, direct MIT license, full docs. Distinguish source scanning from runtime observation.
C. **One-step choice/advisor** optional local interactive (none needs remote data); a selected purpose reveals recommended tool and a command. Controls must be wired, keyboard accessible, no fake scan capability.
D. **Progressive install and MCP details**. Keep all current actual product facts and working copy buttons; preserve existing install and MCP config content in disclosures/deep product pages. AI AppSec prerequisite doctor/setup; LLMVerify install plus API usage instructions, not install automatically enables monitoring. Never expose secrets.
E. **Example output** bounded educational snippet: finding/coverage/limitation; avoid invented hashes/receipts. Show how to inspect tool findings and rerun after a fix, not pretend 3 tools generated one combined HAIEC finding.
F. **Stand-alone tools vs HAIEC Platform** side-by-side, with explicit trust boundary and correct CTA to /developers and /docs/agent-integration. Only eligible source can lead to platform-run assurance, not automatic via local MCP.
G. **License, provenance, contribution and security**: link exact GitHub three project roots and LICENSE, SECURITY.md/private advisories if present, npm releases, no unverified contributor promises. Preserve unrelated AI Inventory/ISAF Logger links as compact related section, separately scoped.
H. **SEO** canonical /developer-security and metadata: title Open-Source AI Developer Security Tools | HAIEC; description "Explore MIT-licensed AI security tools from HAIEC: AI AppSec for source code, MCP Tenant Isolation for SaaS boundaries, and LLMVerify for model inputs and outputs." Existing breadcrumb; optional truthful 3-item CollectionPage/ItemList with exact license/source. No new page.

## Visual / style / preservation
New diagram should present **three independent checks**, not a stacked execution pipeline. They may be combined by the developer but are not a single scanner or universally required. Consistent latest light/dark theme via existing tokens, not separate global CSS/theme. Semantic relation/branching text for indexing, optional restrained dark terminal excerpts for copyable examples. Preserve nav/footer/themes/analytics and existing package docs; avoid an empty card grid replacing detailed content. Mobile 390/768/1440, reduced-motion, keyboard, focus, code blocks readable, no oversized config bleed.

Customer copy should avoid em dash punctuation, internal sprint/legal review labels, "fictional/prototype" or old deprecated product labels. Phrase scope limitations as precise facts near matching capability, not giant warning panels. No false "open source platform" sentence.

## Focused QA and handoff
- Source truth table: exact GitHub repo, LICENSE MIT, npm release/version, product status, package installation command, MCP stdio CLI/tool, actual supported languages/limits and source of update.
- Metadata and public H1 SSR, 3 accessible peer products with real linked names/licenses, each command copies exactly, no dead links.
- Does not imply one required SOURCE -> BOUNDARY -> RUNTIME chain; no production runtime claim from static check.
- Only one verified package release fact source manifest; cross-page product pages/CurrentReleaseBar parity and last verified date updated only when registry readback confirms.
- Original 3 layer cards' technical details still accessible or deep-linked after changes; no accidental loss of Semgrep dependency/security/receipt explanation.
- No automatic ingestion, certification, local-MCP-to-hosted-MCP confusion, invented counters or unsupported figures.
- Focused lint/typecheck, page SEO/links and 390/768/1440 both themes plus keyboard smoke; avoid heavy platform-wide E2E and package release changes.
- One focused PR, explain changed files, before-after UX and copy, verified licenses/releases, preserved content, tests and blockers. Merge to Main after required checks and repo policy, no manual deployment.

**Important:** This task is implementation instructions for Devin after source refresh; the current Common Repo work is only planning and does not modify haiec.com.
