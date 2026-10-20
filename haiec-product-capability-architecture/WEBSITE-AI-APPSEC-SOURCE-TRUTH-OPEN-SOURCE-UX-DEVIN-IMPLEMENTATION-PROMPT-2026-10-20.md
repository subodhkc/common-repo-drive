# Devin implementation prompt: AI AppSec Product Page, Open Source by HAIEC
**Approved plan:** WEBSITE-AI-APPSEC-OPEN-SOURCE-SOURCE-VERIFIED-COPY-UX-SEO-RELEASE-AND-MCP-PLAN-2026-10-20.md in Common Repo, Page #27. Read all findings AA-01 to AA-20 and controlling public brand/design-preservation decisions.

## Goal
Enhance the existing public https://www.haiec.com/ai-appsec page in the HAIEC website repository Main in place. Make the open-source scanner's actual developer value immediately legible: find risky supported AI source code, know what files were analyzed, inspect reproducible findings and use a configured local AI coding agent (stdio MCP) to scan and rescan fixes. Bring into light-first HAIEC design, stronger conversion/SEO, clear GitHub/npm/license/third-party setup and honest platform relationship.

**Do NOT create a separate HTML page, new package, scanner, GitHub Action, "scan" CLI flag/subcommand, in-browser scanning interface, backend service, proof/receipt issuer, SaaS subscription or production CI gate.** The current task is page and minimal shared-copy correction, not a new scanner release.

## Source-first review
Pull latest default Main and recent website PRs; avoid overwriting concurrent work. Read:
- app/ai-appsec/page.tsx and layout.tsx, data/developer-products.ts, components/developer-security/{CurrentReleaseBar,CopyButton,AiIdeIntegration}.tsx.
- app/developer-security/page.tsx (standalone open source family), app/developers/page.tsx (hosted HAIEC developer hub), app/ai-security/page.tsx (platform), app/evidence/page.tsx, canonical nav/theme and SEO registry.
- ai-appsec public package repository README.md, LICENSE, CHANGELOG.md, SECURITY.md, THIRD_PARTY_NOTICES.md, package.json, src/mcp/index.ts, src/mcp/server-factory.ts, rules/public-core/manifest.json.
- Actual npm registry dist-tags, latest published tarball and package metadata for ai-appsec (not just Main package.json). The public npm listing is 0.1.0; repo Main package.json is 0.1.1; changelog says 0.1.0 first stable; SECURITY.md says old rc.1 supported. **Do not infer 0.1.1 is publicly installed**. Report mismatch and request separate owner update to SECURITY.md if needed, not an unapproved npm publish.

Inspect existing page sections and anchor destinations first so content is preserved. Source > customer route > old concept mocks.

## Fix factual defects first
1. The executable 'ai-appsec' with no arguments STARTS the stdio MCP server. It does not scan ./src via a direct CLI. Supported subcommands: doctor, doctor --json, setup, setup --json, help. Actual scan is tool 'scan_ai_security' with targetPath (optionally extendedScope and timeout) invoked from an authorized compatible MCP client. Correct website "Use the CLI directly or integrate with GitHub Actions" and all copy that suggests direct scan command or released standalone GitHub Action. If package has separate verified automation integration discovered, document exact path/semantics before saying so; default assume no ready standalone CI scan.
2. Shared IDE panel's generic "check this output before you show it to me" describes LLM output content, **NOT AI AppSec's static source check**. Use tool-aware instructions: "Use scan_ai_security to audit supported source files under ./src. Report exact finding locations, coverage, limitations and next review actions." Change shared defaults carefully to avoid regression on LLMVerify/Tenant Isolation.
3. AI IDE suggested "Do not merge if CRITICAL findings" may be good user-chosen review advice but is NOT an actual enforced merge gate. Phrase "flag critical findings for human pre-merge decision"; do not imply scanner blocks repository merge.
4. Website /ai-appsec "AI AppSec vs HAIEC Platform AI Security Scanner" currently shows 122 detectors and 79 checks for EACH then says "different rule counts". This is factually self-contradictory; remove duplicated platform count and explain different scope, release, evidence producer/coverage and qualification. Do NOT imply the standalone scanner automatically feeds platform Assurance.
5. Refresh CurrentReleaseBar status (currently "prerelease") against live npm status and actual release policy. Do not patch from GitHub Main version alone. Preserve published 0.1.0 if latest stable; update manifest status only when verified. Document old SECURITY.md discrepancy for separate source repository maintenance.
6. Source-check rule semantics: detector, semantic security check, finding instance, concern family are distinct. 122 detectors and 79 checks are NOT 201 vulnerabilities; rule match can be presence/risk signal, not exploitable condition. A source CODE_CAPABLE finding is distinct from authority and runtime effect.
7. Pinned Semgrep 1.173.0 must be installed separately (non-HAIEC third-party engine); ai-appsec setup can involve network. Normal scan after setup can run locally without HAIEC account or code upload. No full no-network claim for npm install or setup.
8. Scan receipt's content digest and evidence envelope prove defined integrity/identity when verified, not universal source correctness/assurance; proof-of-fix NOT_VERIFIABLE != fixed; COMPLETE/PARTIAL/UNSUPPORTED/ERROR != safe/unsafe. Preserve results in code if they exist, do not fabricate runtime.
9. Packaged local stdio MCP != HAIEC hosted Streamable HTTP server/MCP; current platform local CI preview and GitHub Action v2 NOT_RELEASED do not mean this package has an automation shipping today.

## Build: new first-viewport UX and customer copy
**Eyebrow:** OPEN SOURCE BY HAIEC · MIT LICENSE
**H1:** AI AppSec: Find AI Code Risks Before You Ship
**Lead:** Scan your AI application and agent source code. See the finding, the coverage and the evidence behind it.
**Deck:** AI AppSec is HAIEC's MIT-licensed static security scanner for supported AI application and agent code. It finds known risky patterns, insecure integrations and source-visible control gaps, with structured findings, honest scan coverage and reproducible receipts. Run it locally through a compatible AI coding assistant using MCP.
**CTA 1:** Install AI AppSec -> real quick-start anchor. **CTA 2:** View on GitHub -> https://github.com/subodhkc/ai-appsec. **CTA 3:** See Example Findings -> actual diagram anchor.
**Trust line:** Local after prerequisite setup · No HAIEC account · MIT licensed · Semgrep external dependency.

Sections arranged to preserve substance but improve comprehension:
1. Hero and quick-start: install (npm install -g ai-appsec) -> doctor -> optional explicit setup -> stdio MCP configuration -> ask an agent to call scan_ai_security with targetPath. Make which commands install/diagnose/setup/start server explicit. This is not a direct "scan CLI" walkthrough.
2. **First finding inspector**: small illustrative source code snippet (e.g., model output passed to eval), a conditional rule match with file/line/check ID if honest, risk signal/concern family, coverage status and what not assessed. Text must say "For example" or similar; no fake actual executed report/hash/green pass.
3. "What it finds": 6 current supported families, with 122 detector/79 semantic check explanation, bounded risk types and language support. Rule counts from central manifest with owner verification; no "each detector is an exploit" claim.
4. "Know what it covered": discovered/excluded/unsupported/targeted/scanned/parse failed/successfully analyzed and exact COMPLETE/PARTIAL/ERROR semantics; verify if actual tool also emits UNSUPPORTED in schema. An incomplete scan never results in blanket no-risk pass.
5. "Fix and rescan": proof-of-fix and check-eligibility, DIFFERENCE between STILL_PRESENT / NEW / NOT_VERIFIABLE, explain what change is confirmed versus could not be checked.
6. "Use in coding agent": keep shared AiIdeIntegration Cursor/Claude Code/Windsurf/Generic configs, validate actual stdio command. One clear accurate prompt recipe for scan_ai_security; don't duplicate entire config twice. Preserve copy buttons and anchor #mcp.
7. "Open-source trust": direct MIT LICENSE, repo, npm, SECURITY.md private vulnerability reporting, THIRD_PARTY_NOTICES, Semgrep prerequisites. Mark exact current release only after registry check.
8. "AI AppSec vs broader HAIEC": short two-column source tool versus platform assurance comparison and natural optional /developer-security, /ai-security, /assurance, /developers links. This site is not an optional paid gate for local use.
9. Existing detailed reference sections and 8 anchor IDs stay available, possibly progressive disclosure. #cicd anchor must provide honest current CI availability instead of pretending runnable CI integration. No giant warning-banner dump and no em dashes in customer copy.

**Signature educational diagram:** "Code condition -> static rule/detector -> reviewable finding + bounded coverage -> scan receipt -> optional rescan comparison". Arrows for real code flow; separate optional *qualified platform Assurance* and no implied automatic transport or observed target-side action. Native semantic HTML/SVG, no flattened image dependency. Theme matches light-first HAIEC with dark inset showing actual source+tool steps. No browser fake scanner.

## SEO and accessibility
Keep one canonical URL and H1, SSR H1/content, title "Open-Source AI AppSec Scanner for AI Agents | HAIEC", meta "Scan AI application and agent source code with HAIEC's MIT-licensed AI AppSec tool. Inspect source findings, scan coverage, receipts and proof-of-fix through local MCP." Accurate SoftwareApplication MIT source license and pinned external Semgrep prerequisite, Node >=22, *published version not source Main*, no fictitious downloads/reviews/security certification. Correct OG/Twitter.
Keyboard/reduced motion/mobile 390/768/1440, dark/light parity with existing global theme (no custom override), no horizontal source panel overflow, accessible tab panels/copy controls, preserve global nav/footer/analytics/links.

## Acceptance and delivery
- Table comparing npm dist-tag + tarball, repo Main package.json, product manifest, changelog, security policy. Correct claims and record conflicts with separate package repo owner, no silent npm publish.
- Exact CLI evidence: no args starts server; doctor, setup legitimate; only one MCP scan_ai_security and required targetPath. Verify no unsupported direct scan command and no released GitHub Action implied.
- Proper copy semantics for prompt vs source scan in shared IDE; no model response guardrail claim.
- Distinct concern families/checks/detectors/findings, no absolute "safe to ship" or real-world effect/authority claim, PARTIAL isn't pass.
- All original technical sections survive as sections, disclosures or exact canonical deep links, including receipts, envelopes, proof-of-fix, limitations, roadmap, trust, Semgrep notices and supported languages. Anchors not broken.
- Tested links to npm, MIT, third-party notices, GitHub security private reporting, /developer-security, /ai-security, /assurance, /docs/agent-integration.
- Accessibility, theme, code snippet copy, focused TypeScript/lint/routes/SEO smoke. No external live scans needed for public content change.
- One focused website PR after Main refresh; note code/report version changes, preserved content, checks, outstanding repo maintenance actions. Merge according to repo policy after checks. No manual deployment and no claim this plan itself changed the site.

**Source docs committed to Common Repo only. The user is reviewing/authoring website enhancement plans, not requesting immediate production changes here.**
