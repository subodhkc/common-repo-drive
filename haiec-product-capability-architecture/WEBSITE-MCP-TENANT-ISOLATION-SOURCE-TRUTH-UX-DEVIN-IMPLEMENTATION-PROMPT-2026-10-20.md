# Devin implementation prompt | MCP Tenant Isolation Page | Open Source by HAIEC
**Controlling deep plan:** WEBSITE-MCP-TENANT-ISOLATION-OPEN-SOURCE-CODE-CLAIMS-CLI-CI-UX-COPY-SEO-SOURCE-AUDIT-2026-10-20.md in Common Repo, Page #29, findings MT-01 through MT-24. Read that entire source-backed audit before work.

## Goal
Enhance the existing canonical https://www.haiec.com/mcp-tenant-isolation page in subodhkc/haiec-website Main. Make it an elegant, self-service, MIT-licensed open-source developer tool for recognizing source-level tenant-boundary gaps in MCP servers and multi-tenant SaaS. Explain real findings, coverage, limitation, remediation and actual CLI/MCP use before a deep rule catalog. Premium HAIEC light-first visual hierarchy with dark-mode parity, real source links, SEO and credible platform differentiation.

**Do not create another public route, standalone HTML mock, new scanner engine, SaaS subscription, live RLS verifier, source-transport service, backend API, runtime two-tenant test or automatic platform Assurance.** No unpublished MCP tools or magic "Run Scan" marketing buttons.

## Source refresh + preservation
Before modifying, refresh latest haiec-website Main, actual site, and possible concurrent Developer Security/AI AppSec/LLMVerify page PRs, plus:
- website app/mcp-tenant-isolation/page.tsx, layout.tsx, McpTenantIsolationClient.tsx, data/developer-products.ts, components/developer-security/{AiIdeIntegration,CurrentReleaseBar}.tsx;
- package subodhkc/mcp-tenant-isolation v2.0.0 README.md, package.json, LICENSE, SECURITY.md, CHANGELOG.md, src/cli/index.ts, src/mcp/server.ts, src/engine/{scanner,receipt}.ts, src/rules/index.ts, docs/FLOW-ANALYSIS-QUALIFICATION.md, action.yml;
- authoritative npm published tarball version/dist-tags and exact executable help, available Docker release, existing published @v2 GitHub Action tag and CI results, external MCP registry if claimed.
Do a short before/after content inventory. Preserve original full 42 general + 15 MCP rule descriptions, technical outputs, limitations, roadmap, FAQ, copy controls, deep links, nav/footer/analytics. Visual simplification is NOT permission to delete working material.

## P0 corrections: public site first
1. **CLI user command mismatch**: Package src/cli/index.ts declares scan --path (-p) as an OPTION, NOT an argument. Existing page, 4 code tabs, FAQ, README and action.yml use 'mti scan ./src' or 'npx mcp-tenant-isolation scan ./src'. Correct website to exact source-compatible 'mti scan --path ./src' or 'npx mcp-tenant-isolation scan --path ./src'; verify **published v2.0.0 tarball** with focused help + benign fixture smoke before calling it working. Keep command copy exact.
2. **GitHub Action not demonstrated ready:** package action.yml also uses positional scan; composite bash can exit before capture of exit code and its fail-on step appears to handle only HIGH/CRITICAL, not the full promised configurable threshold. Do not promote currently unverified prebuilt GitHub Action, "automatically fails on chosen severity" or external @v2 reference as proven. Separate package-source repair workstream below, do NOT modify that repository without scoped authorization.
3. **Zero vulnerabilities and volatile tests:** remove the hero '0 Vulnerabilities' and '203 Tests Passing' absent a current CI result provenance. An old npm audit zero result means something narrow about one dependency tree, not target system safety. Keep 57 rule count only if source registry confirms. Delete unqualified 'No other scanner detects these vulnerabilities'.
4. **Competitor claims:** replace ungrounded statements that Snyk, CodeQL and Semgrep have no MCP or tenant isolation capability. Respect competitor general-purpose utility, highlight HAIEC product specialized rules and code-aware workflow, no blanket grid of false negatives.
5. **Architecture inconsistency:** existing hero says 6-stage pipeline but website displays eight sequential "layers"; code phases differ and path boundary plus receipts are cross-cutting. Replace with **Code -> Parse/IR -> Rule candidate -> Finding + coverage -> Review/remediation + scan receipt**, with orthogonal scope boundary and optional suppression governance. Keep genuine engineering detail accessible.
6. **MCP read-only and write truth:** source registers 3 read-only tools by default: scan_tenant_isolation, list_tenant_isolation_rules, explain_tenant_isolation_rule. suppress_tenant_isolation_finding is a fourth only when --allow-write-tools explicitly enabled, marked destructive. Update product/FAQ/metadata. No claim MCP accepts inline code; scan tool takes optional bounded project path, severity and rule list; project-root containment is deliberate.
7. **Evidence/vulnerability truth:** code returns completeness COMPLETE/PARTIAL/ERROR separately from receipt verdict PASS/REVIEW/BLOCK/ERROR. Current receipt computeVerdict may return PASS with PARTIAL when no active findings. Website must show two distinct dimensions and clearly explain "no active findings in reviewed scope" even when receipt says PASS. Static code match does not prove live cross-tenant access, actual DB RLS behavior, certified isolation or an observed agent effect.
8. **Hashes and signed provenance:** src/engine/receipt.ts emits SHA256-derived truncated 32-hex rulepack and receipt hashes, not independently signed customer scans. npm OIDC/sigstore publisher attestation is a **different artifact**. Remove generic 'provenance-signed' scan report promises; technical docs may document exact hash fields and package publishing provenance after validating actual published attestation.
9. **Coverage and proof-of-fix:** source excludesPaths is currently hardcoded 0 (glob omissions uncounted), intra-procedural flow only, no cross-file tracking, unsupported paths reported as limitation. Baseline proof states STILL_PRESENT / NEW / NOT_VERIFIABLE, resolved count relative to baseline. Do not assert completeness covers all tenant access paths or that relative resolution proves production isolation.
10. **Human-approved suppression:** user-provided approver field and reason/expiry are documentation, not independent human approval. Suppressed finding remains suppressed, not fixed. Default read-only agent cannot invoke write tool. Keep any mutation behind existing explicit tool flag, no new approval service.

## Customer-first site composition and copy
**Eyebrow:** OPEN SOURCE BY HAIEC · MIT LICENSE
**H1:** Find Tenant Isolation Risks Before They Become Data Exposure
**Subheading:** MCP Tenant Isolation, specialized static security checks for MCP servers and multi-tenant applications.
**Deck:** "Review supported source code for missing tenant boundaries across database queries, API handlers, caches, sessions, files, MCP tools and credentials. See source-linked findings, scan coverage and remediation guidance before changes reach production."
**Primary CTA:** Run Your First Scan -> existing CodeExamples section anchor. **Secondary:** View Source on GitHub -> https://github.com/subodhkc/mcp-tenant-isolation. **Third:** See Example Finding -> native source-aware inspector. User can begin without HAIEC SaaS account.
Above-fold proof line: 57 purpose-built rules / local static source analysis / CLI + stdio MCP / MIT. Do not show a fake live customer finding or hazard badge.

**Signature simple value diagram** centered on meaningful problem: authenticated tenant/user -> MCP tool or API handler -> database/cache/resource. Highlight a **source-visible missing tenant guard candidate** between handler and resource, with a supported rule result and evidence/coverage panel. This is educational, NOT a live observed exploit, network capture or independent RLS test.
Three equal customer concern modules: query/RLS/IDOR code patterns; MCP tool/identity/scoping; shared cache/files/vector/logging. Rule catalog with full 57 details remains accessible behind category filter / semantic details, not dumped before first outcome.

**Quickstart** using actual published CLI arguments: npm install -g mcp-tenant-isolation, mti scan --path ./src; npx alternative with --path; SARIF format via --format sarif --output path when verified; default Node >=22. Preserve functioning Install/CLI/MCP/CI CodeExamples tabs, but the CI tab is conservative until package action is repaired and validated. Explain exit code 0/1/2 without translating 0 into "proved safe".

**Result Inspector** includes exact code/rule evidence candidate, file/context, severity, rule category, missing guard, files parsed vs failed, selected/evaluated rules, completeness, important limitations and actionable next check. No invented report hash, fake customer org or actual 0 vulnerabilities.
**MCP** 3 read-only default, 4th optional write, local stdio and path root; prompt "Scan my authorized project for missing tenant guards; report source location, coverage, uncertainty, fixes and what to test at runtime." Shared AiIdeIntegration needs product-aware prompts, avoid the generic "check this output before showing it" and fake auto merge gate. Keep other product use cases intact.
**Fix and rescan:** source match -> candidate missing guard -> developer modification -> same rule/baseline comparison -> later real integration/RLS check if needed. Proof-of-fix only when baseline adequate.
**Related open-source and HAIEC:** /developer-security family; /ai-appsec AI source security; /llmverify model I/O signals, separated from HAIEC /ai-security, /evidence, /assurance, /docs/agent-integration hosted environment. Local package artifact not an issued HAIEC Assurance verdict.
**Trust:** MIT license (copyright Subodh Kc), actual security policy report process, verified npm, third-party dependencies and precise source version. No compliance certification/OWASP endorsement, no unverified Action/Docker/registry badges.
**FAQ:** source vs runtime, no finding vs full isolation, allowed root, opt-in suppression, GitHub Action actual readiness, SARIF upload, fingerprint/proof-of-fix, initial install and CI caveats.

## UX/SEO
Light-first premium shared public theme with native SSR HTML/SVG; dark inset only for code snippet; balanced technical source map and proof inspector. No forced sequential three open-source tools. No new site theme engine or production page replacement. Preserve SEO accessible SSR, one H1, canonical https://www.haiec.com/mcp-tenant-isolation, OG/Twitter and SoftwareApplication with accurate license/Node/version. Suggested title "Open-Source MCP Tenant Isolation Scanner | HAIEC"; description "Find tenant-isolation risk patterns in MCP servers and multi-tenant SaaS code with 57 MIT-licensed static rules, local CLI/MCP scanning, coverage and SARIF reports."
At 390/768/1440 verify tablet/mobile comparison/rule catalog, CopyButton, CodeExamples tabs, FAQ keyboard, reduced-motion and light/dark. Page should not imply Semgrep/CodeQL/Snyk cannot scan relevant code or all products globally free.

## Website acceptance and handoff
- Published v2.0.0 CLI --path command smoke confirmed, all old positional snippets fixed in page/client component/FAQ, no codefenced executable stale workflow.
- 3+1 MCP tool semantics, actual path vs inline, root guard, suppression writes, real entrypoint.
- 57 source rule count and categories, no 203 passing, 0 vulnerability, unverified current package sigstore, fraudulent competitor guarantee.
- no clean claim from PARTIAL PASS, no suppressed==fixed, no baseline==actual code enforcement, no hardcoded excludedPaths precise claim.
- verified existing site content/anchor/routes still accessible in progressive details.
- no published CI instructions until package repair and exact @v2 tag smoke; separate follow-up documented.
- maintain global nav/footer, meta/SEO, no duplicate route, no secrets/public customer fixture; focus lint/typecheck and public route smoke. One website PR as per repo policy, no manual deployment, report changed files and acceptance evidence.
- No developer source repo edits, releases or external penetration testing within this public marketing-page task.

## Separate P0 package-maintenance workstream (do NOT claim completed)
Coordinate owner-authorized PR in subodhkc/mcp-tenant-isolation to reconcile CLI docs/site with actual --path or deliberately implement/test positional support; fix action.yml positional invocation and failure threshold, preserve SARIF/artifacts when scanner returns expected findings exit, distinguish partial/error, validate actual v2 tag/permissions with runner smoke, and ensure default MCP read-only tool gating remains. Add focused clean/finding/partial/error/suppressed fixtures. Any receipt PASS vs PARTIAL correctness fix requires compatibility review, not a silent page code edit. Can be delegated only after explicit separate source scope agreement.

**This Common Repo handoff is a plan, not authorization that the production website or package is already changed.**
