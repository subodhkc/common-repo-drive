# MCP Tenant Isolation: Open Source by HAIEC | Deep Source, Product Claims, CLI/CI, Evidence, Copy, UX, SEO and Diagram Audit
**Reviewed:** 2026-10-20 | **Website workstream:** Page #29 | **Status:** Planning only. Live public site inspected, current GitHub source on both repositories reviewed, published npm public listings consulted. No package execution, full live CI run, visual screenshot browser E2E, site PR, npm publishing or deployment completed.

**Canonical:** https://www.haiec.com/mcp-tenant-isolation
**Exact website sources:** app/mcp-tenant-isolation/page.tsx (1,346 lines), layout.tsx, McpTenantIsolationClient.tsx, components/developer-security/{CurrentReleaseBar,AiIdeIntegration}.tsx, data/developer-products.ts.
**Standalone package:** https://github.com/subodhkc/mcp-tenant-isolation (MIT LICENSE copyright 2026 Subodh Kc), npm mcp-tenant-isolation v2.0.0, source package.json, README.md, CHANGELOG.md, SECURITY.md, src/{cli/index,mcp/server,engine/scanner,engine/receipt,engine/rule-pack-loader,security/path-boundary,rules/general,rules/mcp}.ts, action.yml, docs/FLOW-ANALYSIS-QUALIFICATION.md.
**Related site routes:** /developer-security three independent open-source tools, /ai-appsec source AI application security, /llmverify local LLM content checks, /developers hosted HAIEC platform and remote MCP, /ai-security, /evidence, /assurance and /docs/agent-integration. None automatically performs or ingests this package's scan.

## 1. Decision and customer value
**Keep and enhance the existing page in place; do not build a duplicate landing page or separate HTML diagram.**
Preferred publisher label **Open Source by HAIEC**, retaining actual MIT copyright and contributor attribution. Focus on a developer's first tenant boundary finding, supported code scope, affected risk and reviewable evidence, rather than eight sections of rules or claiming to have proven that no tenant leaked.

**Hero proposal:**
- Eyebrow: OPEN SOURCE BY HAIEC · MIT LICENSED
- H1: **Find Tenant Isolation Risks Before They Become Data Exposure**
- Product subheading: **MCP Tenant Isolation: Specialized static security checks for MCP servers and multi-tenant applications.**
- Deck: **Review supported JavaScript, TypeScript, Prisma and SQL code for missing tenant boundaries in queries, tool handlers, sessions, caches and credentials. Get source-linked findings, scan coverage, portable reports and concrete remediation context. Run locally from the CLI or a compatible coding assistant using MCP.**
- Proof: **57 purpose-built rules · Local source analysis · CLI and stdio MCP · Source available under MIT**
- Primary CTA **Run Your First Scan**, linked to a real verified command: npm install -g mcp-tenant-isolation; mti scan --path ./src (or npx mcp-tenant-isolation scan --path ./src). Secondary **View Source on GitHub** exact repo. Third **See a Sample Finding** in-page anchor. A relevant GitHub Action CTA must remain CONDITIONAL until its source defect is repaired and accepted.
- Value: "Know where a tenant guard may be missing, what the scanner reviewed and what still requires runtime verification." Avoid universal 'prevents a leak' or 'isolated by design' promises.

## 2. Most important source-level findings
| ID | Priority | Source-observed issue | Recommendation and customer consequence |
|---|---|---|---|
| MT-01 | P0 functioning quick start | The CLI uses Commander scan OPTION --path/-p (src/cli/index.ts lines 28-38), with NO declared positional path argument. Website and README repeatedly show "npx mcp-tenant-isolation scan ./src" and "mti scan ./src". This appears **incompatible with current CLI source**. | Fix all website and copy-button examples to "npx mcp-tenant-isolation scan --path ./src" or "mti scan --path ./src". Verify exact published npm tarball and smoke the invocation rather than claiming failure solely from reading code. Package README and docs need separate correction. |
| MT-02 | P0 CI product-readiness | Actual package action.yml lines 30-44 ALSO runs the positional scan; its composite bash may exit before writing scan-exit on finding/error, and the later fail-on step handles only HIGH/CRITICAL based on a saved result. Thus claims about a validated "one-click fail-on threshold CI action" are **not source-proven** and are suspect. | Do not promote action as working CI without small pinned-tag smoke run. Coordinate separate package maintenance PR: fix path parsing, preserve/report SARIF on findings, threshold logic, error exit semantics, check @v2 ref and action inputs; test a benign fixture / finding fixture / partial/error scenario. Website may explain portable SARIF and manual CI after correct CLI confirmed, but not validated prebuilt workflow. |
| MT-03 | P0 false safety guarantee | Hero calls "0 Vulnerabilities" and a comparison says "No other scanner detects these vulnerabilities." Both are unqualified. Repo SECURITY.md claims 0 npm audit vulnerabilities at a point in time, not scanned-customer code clean or perpetual package safety. | Remove hero zero-vulnerability metric, unqualified exclusivity, and confusing green PASS reading. If sharing build audit status, attach exact commit/lockfile/date and limited npm audit scope, not a universal badge. |
| MT-04 | P0 competitive accuracy | Site says Snyk/Semgrep/CodeQL do not detect MCP server code, Prisma tenant fields, RLS or cross-tenant vulnerabilities; comparator grid asserts every competitor lacks these. No current reproducible competitor benchmark or source proves universal absence. | Reframe: general-purpose tools are valuable for broad security, this product **focuses on specialized tenant/MCP boundaries**. Keep only qualified peer comparison backed by current linked product versions or remove detailed claims. |
| MT-05 | P0 data-driven status | Site touts "203 Tests Passing" but no observed contemporaneous CI run supports that fixed number; current rule count is source-declared 42 general + 15 MCP-specific. | Keep 57 only after rule registry count confirmation; demote volatile test count or source to exact passing commit and updated at date. No fake trust badges or top-of-page vanity score. |
| MT-06 | P0 architecture consistency | The public architecture says "six-layer deterministic pipeline" but lists 8 layers, while source scanner itself uses discover, parse, merge IR, flow graph as needed, rule evaluate, filter, baseline/suppress, report. Security path boundary and receipt are **cross-cutting** not processing layers. | Rebuild as customer value diagram: Code -> Parse/IR -> Evaluated rule/finding + coverage -> Report/receipt -> Review/fix, with orthogonal READ-ONLY ROOT BOUNDARY and SUPPRESSION POLICY rails. Technical details may list stages separately without contradicting labels. |
| MT-07 | P0 MCP access honesty | Three read-only MCP tools are registered by default: scan_tenant_isolation, list_tenant_isolation_rules, explain_tenant_isolation_rule. The write tool suppress_tenant_isolation_finding is only registered when --allow-write-tools is expressly provided and has destructiveHint true. The site and FAQ say four exposed by default. | Public source-true "3 read-only tools by default; optional fourth gated write tool." Copy/FAQ/metadata/diagram parity. Never describe default MCP as able to suppress. |
| MT-08 | P0 scanner result semantics | src/engine/receipt.ts computeVerdict returns PASS whenever no active findings and completeness !== ERROR, including PARTIAL. src/engine/scanner.ts can set PARTIAL for parse/rule failures; unsupported files are listed as limitations. | Website must always show **verdict and completeness separately**. "PASS/no active findings" with PARTIAL is NOT a clean or proven isolated codebase. Investigate a package-engine correctness improvement separately, not a website-only semantic rewrite or marketing PASS badge. |
| MT-09 | P0 integrity provenance | Receipts and rulepack digests are SHA256-derived strings truncated to first 32 hex characters in src/engine/receipt.ts. npm Trusted Publishing/sigstore package provenance is a separate signed publisher artifact; source hash does not sign actual result authenticity or establish a database policy. | Distinguish package supply-chain attestation vs source-scoped scan receipt/digest; say "hash-bound scan record" rather than all customer scan receipts cryptographically signed or notarized. Mention truncated digest only in technical docs, no fabricated full-length SHA256 signature. |
| MT-10 | P1 limitation source | docs/FLOW-ANALYSIS-QUALIFICATION.md confirms **intra-procedural only**, no cross-file call chain, pointer/alias tracking limitations. Rule matches are static signals, not live two-tenant authorization tests or observed RLS behavior. | Customer-friendly "Supported in-function patterns and source-visible guards. Runtime isolation, DB policy operation, dynamic authorization and deployment configuration need separate testing." |
| MT-11 | P1 actual coverage | src/engine/scanner.ts coverage excludesPaths is hardcoded 0 because excluded glob count not directly captured; source completeness can be COMPLETE despite unsupported paths that are only limitations. | Do NOT claim perfect exclusion coverage, full application analysis, every rule evaluated, or zero missed source paths. Show files discovered/parsed/failed, unsupported, rules selected/evaluated/failed and limitations when source permits. |
| MT-12 | P1 input parity | MCP scan_tenant_isolation has optional path (within allowed project root), severity, rules. It **does not accept inline code** as claimed in website MCP description. | Say "Scan a project directory within configured allowed root". Display exact MCP paths and boundary, not copy/paste text code as supported input. |
| MT-13 | P1 CLI vs MCP path boundary | MCP establishes PathBoundary real root and rejects traversal, symlink escape/UNC. CLI scan's input and configuration path validation is not an identical full shared scope promise. | State "MCP filesystem access constrained to configured project root" rather than saying every CLI filesystem operation has exactly the same guard. |
| MT-14 | P1 suppression trust | MCP suppression write tool requires explicit allowWriteTools; reasons/approver are recorded, but approver field is supplied identifier, not independently verified human approval. CLI can also write suppression files. Suppressed findings distinct from active findings. | Show active/suppressed/baseline, reason, expiry and human review. No "signed approval"/"independent approval" assertion. No "no findings" if all alerts suppressed. |
| MT-15 | P1 proof-of-fix | Source 2.0 includes STILL_PRESENT/NEW/NOT_VERIFIABLE on findings and RESOLVED_CONFIRMED count in summary from baseline comparison; no baseline -> NOT_VERIFIABLE. Website omits resolved status. | Add bounded follow-up/fix story with baseline and second scan; "resolved relative to baseline" not runtime fix verified. |
| MT-16 | P1 status breadth | Public technical page is ~1346 lines plus client component, lists all 57 rules and 15 MCP rules, many sections, comparison, 8-layer graph, roadmap, FAQ and two full CTAs. Reader finds first useful result late. | Outcome-led first 2 viewports, three risk family cards and illustrative finding inspector, quickstart with actual options. Move 57-rule catalog to accessible disclosure/filter or existing same-page anchors, do not delete. |
| MT-17 | P1 product family | Website labels "BOUNDARY layer" and may imply required source->boundary->runtime sequence from /developer-security. | Present three independent open-source tools. Tenant scanner stands alone; different from AI AppSec source AI patterns and LLMVerify text checks. HAIEC Assurance is a separate authorized/evidence-bound platform service. |
| MT-18 | P1 CI and product security trust | Package v2.0.0, MIT, Node >=22, registered stdio MCP, SARIF 2.1, Docker project mentioned. Published Docker tag/MCP registry/action ref availability not verified by this code-only review. | Verify exact Docker manifest, registry listing, immutable GitHub Action ref when highlighting. Do not assert external signed provenance/registry state solely because repository declares configuration. |
| MT-19 | P1 framework claims | Rule docs map OWASP MCP Top 10 and CWE, but mappings are not independently certified control effectiveness or OWASP endorsement. | Use "references and mappings", not "OWASP-certified"/"guaranteed compliant". |
| MT-20 | P1 developer UX | Generic shared AI IDE prompt says "check this output before you show it to me" and "do not merge CRITICAL" despite scanner reading files and no automatic repository gate. | Product-specific prompt: scan authorized project path, report rule/file/coverage/limitations. A human/CI policy can decide whether to merge after actual validated CI. Preserve other product-specific IDE rule semantics. |
| MT-21 | P1 report freshness | Release v2.0.0 public npm and repository source match, while site CurrentReleaseBar says last verified 2026-08-22. | Update last verified date only with a new registry/tarball readback, do not fabricate new product version. |
| MT-22 | P2 SEO | Current SEO heavily keyword-stuffed, "provenance-signed" + v2 metadata broad and out of focus. | Search-intent "open-source MCP tenant isolation scanner" and "multi-tenant SaaS static security checks"; true SoftwareApplication schema, source/license links, canonical preserved. |
| MT-23 | P2 accessibility | 57 inline rule rows/huge FAQ and long comparison table challenge mobile and editorial hierarchy. | Search/filter 57 registry-backed rules with semantic list, fixed sticky anchors, responsive overflow and content at 390/768/1440; no fake scan buttons, good keyboard. |
| MT-24 | P2 platform distinction | Local scan receipt and hash could be presented as automatically qualified HAIEC Assurance evidence or regulatory certification. | Scan receipt belongs to local package. HAIEC platform evaluation/5 evidence planes must be independently connected, scoped and evaluated; static capability does not prove effectively granted, approved delegated authority or observed effect. |

## 3. Shipped capabilities worth emphasizing
**Verified source-backed:** v2.0.0 package with 57 code-pattern rules (42 general, 15 MCP), TypeScript/JavaScript AST, Prisma/SQL parsing, selective intra-procedural flow support, CLI scan/init/rules/suppress/baseline, terminal/JSON/AI JSON/SARIF/Markdown, local stdio MCP with three read-only and opt-in gated suppression write, project-root containment for MCP, bounded scan results, status/completeness/coverage, findings/limitations, active vs suppressed vs baseline review, scan receipt and local baseline comparison. No target code executed during static scan. Requirements Node >=22. Source available MIT, package npm and GitHub. These are concrete differentiators without presenting complete live protection.

**NOT established:** universal cross-function, interfile, complete ORM/DB coverage, actual tenant A-to-B unauthorized request prevented, runtime RLS operation, production IAM or effective grant, agent action-effect observation, automatic HAIEC canonical Assurance evaluation, signed customer scan receipts or any zero vulnerability claim. Newer versions and Docker and Action tags require explicit verified registry availability.

## 4. Full proposed public page copy
### Hero
Eyebrow: OPEN SOURCE BY HAIEC · MIT LICENSED
H1: **Find Tenant Isolation Risks Before They Become Data Exposure**
Support: **MCP Tenant Isolation, purpose-built static security checks for multi-tenant applications and MCP servers.**
Deck: "Review supported source code for tenant-boundary gaps across database queries, API handlers, caches, sessions, files, MCP tool visibility and credentials. See the exact source location, the missing guard, scan coverage and concrete remediation guidance."
Proof: 57 focused rules | TypeScript/JavaScript, Prisma and SQL | Local CLI + stdio MCP | MIT license
Primary: Run Your First Scan -> #quick-start. Secondary: View on GitHub -> actual project. Third: Explore Example Finding -> #example-finding.
No unsafe zero vulnerability or passing test count badge.

### Section: Where a boundary can fail
"An agent can be authorized to call a tool and still access data belonging to the wrong customer if tenant context is missing in the downstream query or cached result." Three equal cards:
1. **Queries and database policies:** where clause omission, IDOR, source-visible Prisma/SQL RLS indicators.
2. **MCP tools and identities:** visibility scoping, session binding, credential vault segregation, shared service accounts.
3. **Shared resources:** caches, files, artifacts, vector-store namespaces and logs.
Each describes potential risk pattern, supported source, illustrative missing guard and next check, not a guaranteed exploitable leak.

### Section: One finding, enough context to act
Accessible native HTML/SVG inspector showing an educational code situation: a handler receives an authenticated tenant ID but performs an ORM read only by recordId. Fields include rule ID from actual catalog (source-verify e.g. DBQ-002 / IDOR-001), source file and line illustration, missing tenant ownership guard, concern family, severity **rule default not incident severity**, scanned files, parse status, unsupported/failed, next remediation and review after rescan. Avoid fabricated scanId, vulnerability exploit proof, fake PASS or real evidence receipt.

### Section: Start with a working scan
Valid source-suggested command after published package smoke:
- npm install -g mcp-tenant-isolation
- mti scan --path ./src
- or npx mcp-tenant-isolation scan --path ./src
- SARIF: mti scan --path ./src --format sarif --output results.sarif
- mti init and mti rules as truly shipped.
No website deployment that claims commands tested until actual 2.0.0 tarball help+scan confirms. Explain exit codes 0 no active findings (with completeness to inspect), 1 active findings, 2 error. **Never 0 = fully safe.**
Existing code-tab Install / CLI Scan / MCP Server / CI/CD preserved; replace CLI tab snippets and FAQ in SAME component. CI/CD tab should have bounded availability explanation and usable manual workflow only after targeted proof; no promoted broken Action.

### Section: Understand findings vs proof
Separate read model dimensions:
- Rule cataloged / selected / evaluated / failed;
- Files discovered / parsed / parse failed / unsupported;
- Scan COMPLETENESS COMPLETE/PARTIAL/ERROR;
- Outcome and finding severity, active/suppressed/baseline;
- Receipt digest identity and rulepack version;
- Unassessed live runtime tenant separation.
A local PASS verdict with PARTIAL coverage remains not clean. Source effect not actual permission. A suppression doesn't mean fixed; missing baseline means NOT_VERIFIABLE.

### Section: MCP agent integration
"Connect local scanner through stdio with the project path explicitly bounded. Three tools available by default: scan, list rules and explain rules. A separate fourth suppression tool is available only when the user deliberately enables write tools." Default config from central product manifest, no remote hosted MCP invented. Give user-facing prompts like "Scan my authorized project for missing tenant guards and report code locations, coverage, limitations and fixes." Allow security reviewers to take a decision; don't pretend git branch auto blocked by MCP.
Explain folder-root trust and why root constraints matter to scanner use, not a universal guarantee project is tenant-secure.

### Section: Report / proof-of-fix / integration
"Generate structured findings for local review, SARIF where supported and a scan receipt with exact rulepack identity. Establish a baseline before changing a guard, scan again and distinguish still present, newly found and resolved relative to that baseline. Fixing the pattern may still require integration tests and database/RLS policy checks."
Focus signposting package publish attestations separately from scan receipt hash and product trust MIT LICENSE/SECURITY.md. Link CI docs only after package repair and smoke.

### Section: What it does not establish (positive scope)
No running DB/RLS validation, cross-tenant penetration test, all code paths, regulatory attestation or every MCP server vulnerability. "Use with Snyk/Semgrep/CodeQL for other security concerns. This package specializes in tenant boundary signals". Unconditional competitor omission claims removed.

### Related tools and optional assurance
/ai-appsec for AI app source rules; /llmverify for input/output text; /developer-security family. Separately /ai-security, /evidence, /assurance and /docs/agent-integration for a new authorized HAIEC evaluation when applicable. No automatic scan receipt upload.

### FAQ
Do I need account? What does tenant isolation mean? Does it analyze Prisma, SQL, RLS or live DB? How is it different from generic SAST? Why does zero active findings not mean isolated? Can my agent use it? What is the fourth MCP tool? What is an allowed project root? How do suppressions work? Can I use GitHub Actions? What makes the receipt verifiable? Are package and scan records signed? Is it certified for OWASP/SOC2?

## 5. Signature UX/diagram
**Premium HAIEC light-first / dark-mode parity**, limited dark technical code inset, no "severe cyber purple warning dashboard" primary hero.
One educational relationship diagram in SSR HTML + native SVG with parallel tenant risk lanes:
  authenticated user and tenant context -> MCP tool / API handler -> scoped query/cache/resource.
  A **boundary candidate gap** highlighted between handler and data access with code-linked missing guard indicator; path is source-visible, not a real runtime unauthorized data path.
  Below inspector: Rule finding / Coverage / Limitation / Fix and rescan.
  Orthogonal: configured MCP allowed project root and optional opt-in suppression write. Elsewhere separate optional qualified platform Assurance.
A visitor should see what risk this product specializes in within five seconds, not a list of 57 rules before any example.
Retain category/rule IDs in searchable/disclosure accessible on same page (or actual verified canonical package docs), preserve existing deep links/route section IDs.
Client-side illustrative selector may choose Query / MCP Tool / Shared Cache and swap educational fields, but no fake live scan or connector badges. Responsive 390/768/1440, light/dark, keyboard/focus, reduced motion, text indexable.

## 6. SEO
Suggested title: Open-Source MCP Tenant Isolation Scanner | HAIEC
Suggested description: Find tenant-isolation risk patterns in MCP servers and multi-tenant SaaS code with 57 MIT-licensed static rules, local CLI/MCP scanning, coverage and SARIF reports.
Keywords natural: MCP tenant isolation checker, cross-tenant data exposure static analysis, tenant-scoped queries, Prisma isolation, MCP tool security, RLS source checks, multi-tenant SaaS security scanner.
Keep canonical https://www.haiec.com/mcp-tenant-isolation, one H1, consistent OG/Twitter, SoftwareApplication MIT/source/npm/Node requirements and version v2.0.0 after readback. Remove unsupported "provenance-signed scan", competitor assertions, exclusive detection claims, arbitrary zero vulnerability/test counts and fake rating/price. Mapping to OWASP is reference not endorsement.

## 7. Split implementation work and acceptance
**Website PR (Page #29):** reframe hero, deep copy, responsive native diagram, first-finding+coverage inspector, accurate user command and MCP 3+1, remove absolute vendor comparison and provenance/zero claims, light-first, accessible rule catalog, correct SEO. Preserve complete actual rule names and anchor/link destinations, code tab functionality and FAQ. No engine and package CI change secretly bundled.

**Separate package-source maintenance workstream, prioritized P0 before advertising CI:** correct README/QUICKSTART positional command to --path or intentionally add tested positional backward compatibility (choose one), fix action.yml arguments, robust fail-on threshold/exit code and artifact generation on findings, check actual @v2 tag/immutable ref + GitHub Code Scanning permissions, verify pinned v2.0.0 npm CLI, no dynamic code from untrusted path, preserve MCP root and write gate. Add focused CI fixtures: clean/full, finding, partial parse, error, suppressed, risk-threshold and receipt comparability. Optionally tighten computed PASS when completeness PARTIAL, but do not redefine published CLI semantics without compatibility review.

**Website focused acceptance:**
1. Public command actually maps to options path, no positional examples anywhere in page/client FAQ/copy snippet; no CI badge unless validated.
2. MCP 3 read-only by default and optional fourth write only with opt-in; no inline code input claim.
3. Verdict and completeness shown distinctly; PARTIAL + zero findings never "tenant safe"; unsupported excluded path counters honest.
4. Hash digest isn't customer-issued signature; npm provenance separate; no universal 0 vulnerabilities.
5. 42+15 = 57 names and categories reconcile to package rules, status source-based; no fabricated run/metrics.
6. Existing 57-rule technical library, FAQs, roadmap and all legitimate content remain accessible, not deleted for appearance.
7. No unsupported competitor no-feature assertions, future runtime/Python features not portrayed current.
8. Local CLI/MCP scan != effective IAM authorization, observed unauthorized access or HAIEC Assurance decision.
9. 390/768/1440, keyboard, tab/copy/FAQ controls, SSR semantic text, dark/light accessibility, metadata + link smoke and targeted lint/typecheck. No live tenant penetration testing for marketing.

Related plans in Common Repo: Page #25 Developer Security (3 tools), Page #27 AI AppSec, Page #28 LLMVerify, Page #26 Evidence, Page #24 Runtime Testing, MCP Agent Integration plan, brand and dual-theme standard, preservation register. Avoid em dash public copy or internal release/reviewer notes on customer site.

**No production change made in this audit. Do not claim repaired GitHub Action/CLI code or verified safety until actual appropriate repository PR and acceptance.**
