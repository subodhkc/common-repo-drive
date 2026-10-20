# AI AppSec: Open-Source AI Source Security | Deep Site / Repo / Package Audit, Copy, UX, SEO and Diagram Plan
**Reviewed:** 2026-10-20. **Website workstream:** Page #27. **Source confidence:** Live public HTML reviewed; HAIEC Main source, GitHub ai-appsec repo, package.json, MIT license, README, MCP entrypoint, third-party notices, rulepack manifest and website central product manifest inspected. npm public listing/search currently identifies v0.1.0, but direct npm registry API did not respond in browsing; repeat authoritative npm dist-tag/tarball verification before editing versions. No live scanner executed, published tarball reverse-engineered, visual-browser screenshot inspected or website code changed.
**Canonical owner:** https://www.haiec.com/ai-appsec
**Related:** /developer-security three independent open-source products; /developers HAIEC hosted agent API and GitHub integration; /ai-security HAIEC platform application security; /assurance for qualified evaluation; /evidence for provenance; /mcp-tenant-isolation and /llmverify separate independent tools.

## 1. Strategic outcome and positioning
**Keep /ai-appsec and existing product details. Enhance in place. Do not create /open-source-ai-appsec, separate landing HTML, second scanner, live browser simulator, package release, GitHub Action, new compliance engine or new plan/price.**

**Recommended brand and value:**
- Eyebrow: OPEN SOURCE BY HAIEC · MIT-LICENSED
- H1: **AI AppSec: Find AI Code Risks Before You Ship**
- Lead: **Scan your AI application and agent source code. See the finding, the coverage and the evidence behind it.**
- Deck: **AI AppSec is HAIEC's open-source, deterministic security scanner for supported AI application and agent code. Find risky patterns and control gaps before merging changes, with reproducible findings, explicit scan coverage and proof-of-fix comparisons. Run it locally through a compatible AI coding assistant using MCP.**
- Proof line: **Inspect the code. Run the check. Review the evidence.**
- Primary CTA **Install AI AppSec** (in-page quick-start with actual npm command + prerequisites; never a fake 'Run Scan' marketing button).
- Secondary **View on GitHub** https://github.com/subodhkc/ai-appsec; tertiary **See Example Findings** first-viewport bounded inspector.
- Below: MIT, local scan after setup, no HAIEC account, external Semgrep versioned engine. Position the product as useful in its own right and a distinct source security check next to HAIEC Platform Assurance.

**Commercial strategy:** Build trust and developer adoption, not a mandatory SaaS signup. A free open-source package may be explored, audited and used independently. Later, offer separate HAIEC platform workflow for permission/authority/evidence qualification, not automatic upgrade of a local scanner result into a canonical HAIEC evaluation or real observed tool execution.

## 2. Actual source review / owner matrix
| Exact owner | Source-backed behavior | Website correction |
|---|---|---|
| app/ai-appsec/page.tsx (542 lines on reviewed Main) | Dark blue hero; current-release bar; 8 sticky anchor tabs; what it does/rule architecture/evidence/coverage/MCP+IDE/CI/CD/limitations/roadmap/trust/platform distinction; huge stack of technical lists with little contextual example. | Retain substance and existing IDs, improve first 2 viewports, quick-start proof, code/result story, progressive sections and stronger links. Remove false CI/readiness and internal peer-scanner copy. |
| app/ai-appsec/layout.tsx | SEO canonical, SoftwareApplication structured data, MIT, softwareRequirements Node >=22 / Semgrep 1.173.0; title "AI Application Security Scanner | AI AppSec"; Twitter static "122 detectors / 79 checks". | Emphasize open source + developer outcome; no ungrounded rating, CI mode or universal promise; version facts from verified npm publication and shared manifest. |
| components/developer-security/CurrentReleaseBar.tsx | Source-derived website version, status, package, npm/GitHub/MCP/licensing, copyable npm install; status badge uses manifest prerelease. | Preserve; verify status consistency against actual published npm; add explicit GitHub LICENSE and security reporting source, maybe show direct first-step command at hero. |
| components/developer-security/CopyButton.tsx | Working shared copy affordance. | Preserve and reuse, add copied feedback/accessibility if absent; no ornamental inert controls. |
| components/developer-security/AiIdeIntegration.tsx | Cursor/Claude Code/Windsurf/generic stdio MCP config and prompt recipes. Generic wording "check this output before you show it" is *wrong for source scanner*. Generic rule demands don't merge for CRITICAL even though no automated merge gate exists. | Scope tool instructions to SOURCE CODE only; avoid implying a model reply/content scanner or automatic CI gate; keep copied environment configs working. Shared-component fix should not break LLMVerify or Tenant Isolation use cases. |
| data/developer-products.ts, aiAppSec | Product manifest release v0.1.0, status prerelease, lastVerified 2026-08-22, 122 detectors, 79 security checks, single MCP tool scan_ai_security, command npm install -g ai-appsec, exact Semgrep 1.173.0. | Refresh explicit lastVerified field after verification; no changing code-version to published-version without npm dist-tag proof; avoid showing 'prerelease' if public release is stable without reconciling release-channel semantics. |
| subodhkc/ai-appsec/package.json | Repository Main version 0.1.1, MIT, node >=22, bin "ai-appsec" -> dist/mcp/index.js. | **Main version != npm latest**. Do not publish/version-bump in website task. |
| npm public listing for ai-appsec, externally checked 2026-10-20 | Public listing currently says **0.1.0** (search last crawled within weeks), while GitHub source says 0.1.1. | Source-of-truth publisher must run npm view ai-appsec version/dist-tags/versions before any website version update and ensure install via latest command gets version documented. |
| subodhkc/ai-appsec/CHANGELOG.md | Calls 0.1.0 "First stable AI AppSec release". | Website should not display unsupported prerelease badge if current npm tag is truly 0.1.0 stable; reconcile all published states carefully. |
| subodhkc/ai-appsec/SECURITY.md | Still says supported current version "0.1.0-rc.1" prerelease, conflicts with CHANGELOG 0.1.0 and package.json 0.1.1. | P0 cross-repository *documentation issue*; document clear owner task to update supported security version in actual package repository **separately**, do not quietly claim repo security policy is current. Keep private vulnerability submission link accurate. |
| subodhkc/ai-appsec/LICENSE | MIT, copyright 2026 HAIEC. | Safe to emphasize **Open Source by HAIEC**; exact LICENSE link and third-party attribution. MIT project license does not mean external Semgrep engine is HAIEC-owned. |
| subodhkc/ai-appsec/THIRD_PARTY_NOTICES.md | Semgrep 1.173.0 is EXTERNAL prerequisite, separately installed, not bundled, Semgrep metrics disabled for normal scan, setup may require network. | Installation flow makes Semgrep dependency clear; offline claim is scoped to normal scan after setup, not npm install/ai-appsec setup. |
| subodhkc/ai-appsec/src/mcp/index.ts | Bin supports doctor, doctor --json, setup, setup --json, --help; **no args STARTS MCP server on stdio**; unknown other commands error. There is **NO standalone "ai-appsec scan ./src" command** in reviewed bin. | P0 fix: "Run CLI directly or integrate with GitHub Actions" unsupported as self-contained scan procedure. Offer real local MCP integration and clear separate options as they ship. |
| subodhkc/ai-appsec/src/mcp/server-factory.ts | ONE supported tool scan_ai_security with input targetPath, extendedScope?, timeout?, structuredContent and isError semantics. Read-only static analysis, no target code execution, no hosted token. | Show precise first scan as **MCP tool call** with targetPath; generic natural-language prompt invokes that tool via configured agent. Do not tell user to paste npx ai-appsec then expect a completed scan. |
| subodhkc/ai-appsec/rules/public-core/manifest.json | Rulepack has 79 securityCheck definitions mapped to detectors; individual check limitation comments often explicitly "risk signal, not proven vulnerability", taint intra-file, no cross-file guarantee. | Explain **detector != evaluated security check != finding instance != concern family**. Not 201 exploitable flaws or universal 122 vulnerabilities. |
| HAIEC Platform lib/developer-integration-source-status.ts | Hosted GitHub remote analysis AVAILABLE; HAIEC platform local CLI and CI-Limited E2E are separate PREVIEW paths, standalone Action v2 NOT_RELEASED. | Do not copy website "CI/CD Usage" claim from local standalone open-source package to hosted full Assurance path; separate platforms/products. |
| HAIEC Platform /ai-security | Broad static+authorized runtime+qualified assurance capability, not necessarily same 122/79 rulepack or same engine. | Current AI AppSec comparison text says platform has SAME 122/79 **then claims different rule counts**. This is self-contradictory, regardless of actual platform counts. Remove duplicated unsourced counts, explain scope/source/authority differences. |

## 3. Priority findings and why they matter
| ID | Priority | Finding | Correction |
|---|---|---|---|
| AA-01 | P0 | Developer first action ambiguous: install alone does not scan; Semgrep dependency relegated to bottom. | Three-step first scan: npm install; doctor/setup Semgrep; configure local stdio MCP + ask agent to run scan_ai_security on exact authorized source path; inspect result. |
| AA-02 | P0 | CI/CD section implies shipped direct CLI scan and GitHub Actions support, but bin starts MCP server with no args. | Rewrite as "Use locally in your IDE / MCP agent"; CI integration is separate engineering plan until actual automation/runner demonstrated. Do not publish fake YAML/job steps. |
| AA-03 | P0 | Site/manifest "prerelease" badge and GitHub SECURITY.md "0.1.0-rc.1" conflict with published npm 0.1.0 and changelog "stable"; repo Main version 0.1.1. | Confirm npm dist-tag and tarball with authoritative registry, document actual latest publish, coordinate package repo SECURITY.md fix separately, update manifest release status only with verified approval. |
| AA-04 | P0 | "Different rule counts" claim displays identical 122 detectors and 79 checks for standalone and platform. | Replace with categorical difference "standalone supported code check and package receipt" versus "HAIEC Platform multi-evidence/source analysis and qualified assurance evaluation"; no count comparison unless directly verified. |
| AA-05 | P0 | Shared AiIdeIntegration says check model "output" and its PR recipe says don't merge CRITICAL; could infer independent merge gating. | Use "review supported AI application source" and "present CRITICAL findings for human merge decision", no automation/scan on model outputs. Keep intent and working prompts. |
| AA-06 | P0 | Severe code findings mixed with rule counts, severities, presence indicators without an example. | First-screen **Finding, Coverage and Proof-of-Fix inspector** with source-mapped code example, check type, scan completeness/limitations and follow-up rescan status. No invented real scan. |
| AA-07 | P0 | Rule architecture could imply 122 detectors + 79 checks = 201 vulnerabilities. | Show explanatory 4-label chain "detector pattern → evaluated check → finding instance → grouped concern", with semantic boundaries, counts lower in technical details. |
| AA-08 | P1 | Page dark hero and long vertical sections do not match new light-first public theme. | Premium light-first, balanced right-hand source-to-evidence diagram, one restrained dark terminal/IDE snippet and full dark-mode parity using existing tokens. Preserve shared nav. |
| AA-09 | P1 | No prominent independent OSS source and license CTAs, though MIT section at bottom. | Show GitHub, LICENSE, npm and local/private scan proof on first screen; trust/provenance section deeper. |
| AA-10 | P1 | Static analyzer "checks control gaps" could be read as live control enforcement. | Say code-level missing-control signals; no runtime behavior, IAM effective grant, DAI authority, control operating proof or compliance pass. |
| AA-11 | P1 | No explicit "first useful finding" and scan readiness states. | Provide first-finding flow: configure tool, scan named path, inspect supported risky source pattern + limitations, fix and rescan. A PARTIAL scan cannot establish absence. |
| AA-12 | P1 | "COMPLETE scans reproduce across processes/OS" is wider than actual pinned engine/environment evidence. | Reproducible under same scanner/rulepack/source/config and supported verified platform conditions. Avoid categorical cross-OS claim without cross-OS independent artifacts. |
| AA-13 | P1 | "Proof-of-fix" labels STILL_PRESENT/NEW/NOT_VERIFIABLE, but concept of a resolved check not clear and NOT_VERIFIABLE may read as absence. | Explicitly contrast target state before/after and check eligibility; NOT_VERIFIABLE means insufficient proof, not fixed. Verify standalone actual result field names and statuses before mock examples. |
| AA-14 | P1 | CI claims and HAIEC CI local preview conflated, invites incorrect recommendation. | Separate three options: package local MCP supported; hosted GitHub App Assurance recommended separate; HAIEC local CI preview enterprise-POC / v2 GitHub Action not released. Avoid presenting either unsupported path as packaged OSS functionality. |
| AA-15 | P1 | "No network required" unqualified to onboarding/setup. | Clarify "Normal scans run locally after installing npm package and external Semgrep; setup may need network. No HAIEC account or upload required". Do not claim scanning arbitrary registries. |
| AA-16 | P1 | MCP config duplicated in page and AiIdeIntegration, and generic prompt recipes are too long/fixate severities. | One trusted config owner; tabs for Cursor / Claude Code / Windsurf / Generic, one copy/paste first-scan instruction, advanced recipe disclosure. |
| AA-17 | P2 | Full 8-section nav and repeated lists overwhelm a new visitor. | Order: problem/result → first scan → findings & coverage → evidence/receipts → MCP config → rules/checks → scope/trust & optional platform; preserve all substance/anchor paths. |
| AA-18 | P2 | Metadata title misses open source and real first scan. | SEO: Open-Source AI AppSec Scanner for AI Agents | HAIEC; accurate meta and verified SoftwareApplication license/project URL, no invented rating/download/reviews or proof. |
| AA-19 | P2 | Rulepack list can be an interactive "risk type" filter but public site cannot actually scan code. | Optional semantic 3-case educational selector (dangerous code execution, secret/source exposure, input/prompt risk pattern); never fabricate an evaluated live scan receipt or pretend to execute scanner. |
| AA-20 | P2 | Cross-links to related security tools and broader platform are not clearly selective. | Return to /developer-security family; link separate /mcp-tenant-isolation and /llmverify for different questions; HAIEC Platform /ai-security, /docs/agent-integration and /assurance separate source-truth path. |

## 4. Full public customer copy recommendation
**Eyebrow:** OPEN SOURCE BY HAIEC · MIT LICENSE
**H1:** AI AppSec: Find AI Code Risks Before You Ship
**Subhead:** Scan your AI application and agent source code. See the finding, the coverage and the evidence behind it.
**Deck:** AI AppSec is an open-source security scanner for supported AI application and agent code. It uses a pinned static-analysis engine and HAIEC security rules to identify risky patterns, insecure integrations and control gaps, with structured findings, explicit coverage and repeatable scan receipts. Run it locally through a compatible AI coding assistant using MCP.
**Proof:** Source stays in your configured local environment for normal scans. No HAIEC account required. MIT licensed. External Semgrep prerequisite.
**CTA:** Install AI AppSec (anchor to setup). Secondary: View on GitHub. Tertiary: Explore Example Results.

**H2: Find security signals in the code you are shipping**
"Before a merge, your agent could introduce unsafe use of model output, expose credentials or connect external content to an operation without adequate review. AI AppSec looks for known risky source patterns and shows the supporting file and rule context so your team can decide where to investigate." Avoid claiming all findings are proven exploitable vulnerabilities.

**H2: Your first source security scan**
"1. Install the open-source package. 2. Check and, if necessary, install its external Semgrep dependency. 3. Connect the package's local MCP server to a supported coding agent and ask it to run scan_ai_security against the authorized source path."
True commands: npm install -g ai-appsec ; ai-appsec doctor ; ai-appsec setup ; AI AppSec MCP launch ai-appsec (stdio). Real tool input targetPath e.g. "./src" (only within user's authorized workspace; don't claim CLI scan ./src exists). Confirm IDE-specific launch config with actual shared component prior to publication.
"Normal scans run locally after setup. Semgrep must be installed separately. The package does not require HAIEC sign-in."

**H2: A finding you can actually inspect**
"For example, a rule may identify AI-generated text passed to a dynamic-code execution function. The report can identify the matched code location, security check and why it warrants review. The next question is whether the relevant files were actually analyzed. A missing or failed parse must remain visible."
Explain 4 distinct dimensions: detector matched a pattern; security check evaluates supported proposition; finding records a reviewable instance; concern family helps triage, not counted as a separate exploit. Include a sample CODE / FINDING / COVERAGE / NEXT ACTION inspector with sample-only snippet but never fabricated receipt hash or actual customer environment.

**H2: Know when a scan is complete**
"AI AppSec accounts for discovered, excluded, unsupported, targeted, analyzed and parse-failed files. An incomplete scan does not become a clean result. Use the coverage record to decide which parts of the codebase need another review."
Do not show COMPLETE as "secure", a failed producer as no findings, or undefined runtime reachability as "safe".

**H2: Review the fix, not just the new score**
"After remediating the source, scan the same relevant area again. Proof-of-fix compares eligible check findings across two runs while preserving what could not be verified. It supports technical review but does not itself demonstrate runtime control effectiveness." No mandatory security team merge block, not an automated GitHub status check unless shipped.

**H2: Use AI AppSec with your coding agent**
"Configure the package's stdio MCP server in a supported development client. Your assistant can request a source scan, explain the structured findings and help you review changes. AI AppSec owns its deterministic scan result. It cannot verify the safety of arbitrary generated answers, read another tenant's workspace without filesystem access or issue a HAIEC Assurance decision."
Include working Cursor, Claude Code, Windsurf and Generic configs after source check, no user credentials in examples, one actual tool call via authorized workspace.

**H2: Open-source trust and technical details**
"AI AppSec is MIT-licensed with public source and rulepack. It uses a separately installed Semgrep engine at the pinned supported version. Review the source, third-party notices, security policy, exact published release and known analysis boundaries before integration."
Links: GitHub repo, LICENSE, SECURITY.md, THIRD_PARTY_NOTICES.md, npm package, changelog; however SECURITY.md current version is stale and needs separate source package owner update, do not misrepresent supported release.

**H2: Source security is an important first check, not the final assurance verdict**
"Use AI AppSec for its independent source security findings. HAIEC's wider platform adds qualified source/identity/policy/runtime and delegated authority context when those sources are available and evaluates the specific consequences within its actual evidence scope. The standalone scan does not automatically provide policy approval, effective IAM permissions, observed target effects or a canonical HAIEC Decision Receipt."
CTA: Explore HAIEC AI Security / Explore Evidence and Assurance / See Other Open-Source Tools.

**Support FAQ:** Do I need a HAIEC account? Does the scanner upload code? Which languages? Why do I need Semgrep? Does an MCP agent scan model responses? Can I run in CI? How are incomplete scans handled? Can it prove an agent is safe to deploy? What does proof-of-fix mean? Is it the same as the HAIEC platform scanner? Answer within exact shipped contracts; prospective CI is not release.

Customer copy style: no em dash punctuation, sprint names, "fictional" public banners, unsupported audit/certification, blanket save/unsafe claims or fake "live scan" indicator.

## 5. Signature architecture / visual plan
**Recommended figure: "From risky AI code to reviewable evidence":**

(1) AI application source and tool integrations (specific authorized files)
 → (2) AI AppSec static analyzer [external pinned Semgrep + HAIEC Public Core rules]
 → (3) Branch into "supported finding identified" vs "coverage partial/unsupported", explicitly separate outcomes.
 → (4) Source-linked finding (file + rule/check + limitation), Scan Receipt and coverage record (different objects), Proof-of-fix review after actual rescan.
 → Optional dotted "Broader HAIEC Assurance" only through fresh eligible authorization/source intake and actual evaluation; **not** automatic ingestion, code-capability guarantee or verified runtime execution.

Use native HTML/SVG with labels/structured text in DOM for SEO, small dark terminal with the real doctor/setup/MCP handshake examples; interactive choice tabs can show a static educational case and coverage state with accessible descriptions, not execute an attack/scan. Light-first public tokens and dark-mode support. The GitHub/npm/license/release facts are not merely decorative badges. Source/read-only tool nuance: source scanner reads authorized path but engine setup mutates local installation when user explicitly calls setup.

**Information architecture first 2 viewports:** H1 + utility tagline + npm first command + GitHub + MIT + "No account needed", next a small 3-step first scan/IDE connection alongside illustrated realistic result and honest coverage.
Preserve existing anchor IDs (#what-it-does, #rules, #evidence, #coverage, #mcp, #cicd, #limitations, #trust) even if section content moves or one anchor becomes truthful CI availability guidance. No duplicate CTA sections or full standalone HTML remake.

## 6. SEO / canonical / performance
Title: **Open-Source AI AppSec Scanner for AI Agents | HAIEC**
Description: **Scan AI application and agent source code with HAIEC's MIT-licensed AI AppSec tool. Inspect source findings, scan coverage, receipts and proof-of-fix through local MCP.**
Primary intent "open-source AI AppSec scanner" / "AI agent code security scanner". Secondary "Semgrep AI application security", "AI security MCP server", "LLM application static analysis", "AI AppSec source scanning".
Retain https://www.haiec.com/ai-appsec canonical and one page H1; breadcrumb to /developer-security; truthful SoftwareApplication JSON-LD with MIT license, exact published package/source URL, softwareRequirements Node >=22 and Semgrep 1.173.0, pricing only if exact verified status; no fake release/reviews or automatic GitHub Action. Keep external/npm/GitHub data in manifest after publication reconciliation. SSR readable first findings and alt/aria descriptions.
Preserve global site header/footer/theme/analytics, no duplicate page, no broad package repo changes.

## 7. Implementation priorities, dependencies, focused checks
**P0** Copy/UX truth for CI and MCP entrypoint, version/release/status/security-policy conflicts, false "different counts", correct source-vs-output prompt, actual install/prerequisite sequence, hero+CTA+first finding. **P1** interactive explanatory result/coverage/proof-of-fix, semantic native diagram, light-first theme and deep links. **P2** SEO, FAQ, a11y, updated library metadata and trust links.

**Focused acceptance:**
- npm version/dist-tags/packed bin and LICENSE check recorded, source package and website display reconciled only on real published version.
- package SECURITY.md still stale is a *separate repo action recommendation*, not a website release block if transparent and website links appropriately.
- No copy calls "ai-appsec scan ./src" or "ai-appsec" a scan CLI. No new GitHub Action v2 workflow or CI proof; one MCP tool, stdio, actual targetPath required.
- Shared AiIdeIntegration generic sample "check this output" is replaced for this scanner without breaking other tools; recipes never promise actual branch block.
- Source coverage and concern-family/risk-signal semantics: PARTIAL/ERROR/UNSUPPORTED not clean, count != vulnerabilities. NO arbitrary SAFE universal verdict.
- GitHub/App remote platform, local package and native runtime separate; no retroactive automatic Assurance verdict or IAM/DAI/effect proof.
- Existing exact anchors, copy buttons, CurrentReleaseBar, setup, disclosures, roadmaps, Semgrep notices, security reporting, source links retained.
- Structured data title/canonical/OG/SSR one H1, no fake stars/download/certification; link smoke.
- Responsive 390/768/1440 and dark/light, keyboard/focus/reduced motion and no code overflow. Focused typecheck/lint public source, one PR. No live customer-target execution needed for marketing page.
- No new underlying scanner or model/rules, no repo release, no production website change during planning.

## 8. Common Repo dependencies and source references
- WEBSITE-DEVELOPER-SECURITY-OPEN-SOURCE-BY-HAIEC-SOURCE-COPY-UX-SEO-ENHANCEMENT-PLAN-2026-10-20.md (family Page #25).
- WEBSITE-DEVELOPERS-PAGE-MCP-FIRST-UX-COPY-INTERACTIVE-QUICKSTART-PLAN-2026-10-20.md (hosted platform dev hub).
- WEBSITE-AI-SECURITY-INTEGRATED-APPLICATION-RAG-MCP-STANDARDS-PAGE-UX-SEO-PLAN-2026-10-20.md (platform application security).
- WEBSITE-EVIDENCE-PROVENANCE-QUALIFICATION-UX-COPY-SEO-SOURCE-REVIEW-2026-10-20.md (evidence and receipt semantics).
- HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md; WEBSITE-SEVEN-PAGE-ENHANCEMENT-IMPLEMENTATION-RECORD-2026-10-20.md; PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md.
- Website Main reviewed: app/ai-appsec/page.tsx, app/ai-appsec/layout.tsx, components/developer-security/{CurrentReleaseBar,AiIdeIntegration,CopyButton}.tsx, data/developer-products.ts, lib/developer-integration-source-status.ts.
- Package github.com/subodhkc/ai-appsec: MIT LICENSE, README.md, package.json, CHANGELOG.md, SECURITY.md, THIRD_PARTY_NOTICES.md, src/mcp/index.ts, src/mcp/server-factory.ts, rules/public-core/manifest.json.
- npm published listing: https://www.npmjs.com/package/ai-appsec currently 0.1.0 in publicly indexed npm listing; source Main package.json 0.1.1; actual npm dist-tags reverify before implementation.
**Record status:** Source-backed research and plan only. No HAIEC site PR/merge/deploy, no edited open-source package, no CI implementation or background test.
