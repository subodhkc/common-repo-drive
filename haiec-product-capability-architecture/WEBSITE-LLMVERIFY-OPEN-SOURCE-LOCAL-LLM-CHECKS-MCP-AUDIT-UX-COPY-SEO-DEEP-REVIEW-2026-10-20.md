
# LLMVerify: Open-Source Local LLM Input/Output Checks | HAIEC Source, UX, Copy, SEO and MCP Audit

Reviewed 2026-10-20. Workstream Page #28. Canonical https://www.haiec.com/llmverify. Reviewed current live page, haiec-website Main, subodhkc/llmverify-npm source, MCP handlers, release metadata and Common Repo plans. **Planning only**, no website PR, package change, actual customer verification run, deployment, or browser screenshot E2E.

## 1. Decision and product positioning
**Enhance existing /llmverify in place. Do not create a new URL, HTML prototype, hosted LLM check service or AI guardrail engine.**

- Eyebrow: OPEN SOURCE BY HAIEC · MIT LICENSE
- H1: **LLMVerify: Inspect LLM Inputs and Outputs Before You Rely on Them**
- Lead: **Spot recognizable risks. Keep checks local. Understand what was not checked.**
- Deck: "LLMVerify is HAIEC's open-source toolkit for deterministic checks on supported model inputs and outputs. Flag known prompt-injection patterns, detect and redact common personal-data formats, inspect JSON and consistency signals, and triage potential hallucination risks. Get structured findings, limitations and optional local audit status from your code or a compatible AI agent."
- Proof line: Local-first free-tier verification · No HAIEC account · Six MCP tools · MIT-licensed source.
- Primary CTA Start Checking Locally (#quick-start), secondary View Source on GitHub (https://github.com/subodhkc/llmverify-npm), tertiary Explore MCP Integration (#mcp).

This is an independent developer tool. It does not guarantee safe responses, protect every novel injection, establish factual truth, universally redact PII, certify regulations or provide default HAIEC enterprise Monitor / Protect / Runtime Security Testing / Assurance. /developer-security is the three-tool open-source family owner; /ai-appsec scans source code; /mcp-tenant-isolation scans tenant-boundary code; /llmverify checks model text. HAIEC hosted MCP is a separate authenticated service.

Legal brand: Repo LICENSE is MIT, copyright (c) 2025 KingCaliber Labs, Contributors: Haiec (original author). Retain original attribution. "Open source by HAIEC" is family positioning, NOT a statement that HAIEC alone owns all code or that its SaaS is MIT.

## 2. Verified source and actual behavior
| Source owner | Actual observed code/release | Implication |
|---|---|---|
| haiec-website app/llmverify/page.tsx, 375 lines | Dark green hero, long feature table, SDK quickstart, local CLI/HTTP, framework badges, limitations and six-tool MCP. Mobile hides function description and says "Tap a row" though no expansion handler exists. | Better value hierarchy, real mobile cards/details, preserve all original anchors and technical detail. |
| app/llmverify/layout.tsx | Canonical, meta/OG and SoftwareApplication JSON-LD with broad "prompt-injection defense" and "runtime monitoring" claims. | Update to bounded open-source checks, accurate integration-specific monitoring. |
| data/developer-products.ts llmverify object | Version 1.8.0, releaseDate 2026-08-21, lastVerified 2026-10-09; ~90% PII accuracy claim; trustUrl to missing SECURITY.md; six MCP tools; core Node >=18 / MCP Node >=20. | Correct unbenchmarked accuracy, broken trust URL and stale releaseDate after publisher verification. |
| subodhkc/llmverify-npm package.json, LICENSE, CHANGELOG.md | Source 1.8.0 and publicly indexed npm 1.8.0 dated 2026-10-09. MIT. Executables llmverify, llmverify-serve, llmverify-mcp. | 1.8.0 published; verify npm dist-tag/tarball at implementation. Core >=18; MCP >=20. |
| README.md and QUICK-START.md | README heading still 1.7.0; QUICK-START uses removed npm run serve and obsolete result.result.risk. | **Separate package-repo docs-maintenance workstream**; do not reproduce old examples on site. |
| src/verify.ts and src/result-contract.ts | verify("text") shorthand works; result has risk.level, risk.overall, risk.action, limitations, notChecked, meta.enginesUsed and audit status. May increment local usage count. | Illustrate actual fields, no low-risk=truth or no-match=safe. |
| src/mcp/server.ts and six handlers | Six stdio tools: verify_llm_content, assess_hallucination_risk, check_prompt_injection, check_pii, redact_pii, get_llmverify_capabilities. **Five read-only; verify_llm_content has readOnlyHint false** because it can write local usage and audit. | Honest local-side-effect/host consent description; local MCP != HAIEC remote MCP. |
| src/mcp/tools/verify.ts and docs/MCP.md | Optional requireAuditPersistence=true fails unless audit status is PERSISTED; other statuses DISABLED, FAILED, NOT_ATTEMPTED. Model engine check skip recorded in enginesNotChecked. | A successful heuristic result does NOT prove an audit record was persisted. |
| src/mcp/tools/injection.ts | inputSafe true means no known signals detected, NOT input safe from all attacks. | "Flag known injection patterns" rather than "block malicious input". |
| src/mcp/tools/hallucination.ts | Heuristic risk signals; hallucination tool low/medium/high distinct from general verify low/moderate/high/critical. | Risk label not factual checking; don't mix severity scales. |
| src/mcp/tools/pii.ts and redact.ts | Masked PII findings in tool outputs; bounded in-memory redaction with an error for oversized output, rather than falsely truncating and saying done. | No 100% privacy promise; masking output is not masking arbitrary input pathways or content host access. |
| src/mcp/security/{limits,lane}.ts | Input/output/queue limits; a queued-expired request did not run, but a running timeout is indeterminate and stateful work may continue. | Advanced usage only; no unconditional safe retry. |
| src/cli.ts | npx llmverify verify "example" supported; npx llmverify mcp stdio; optional separate HTTP server binary. | Real copyable commands with accurate roles. |
| src/server.ts and 1.8 changelog | Local HTTP binds 127.0.0.1 by default, optional Express; --host=0.0.0.0 exposes **unauthenticated** service to network. | REMOVE prominently copyable all-interfaces command; CORS/rate limit is not authentication. |
| src/wrapper/monitorLLM.ts | In-app wrapper only when integrated into compatible client call. | "App-integrated monitoring helper", not HAIEC platform-wide runtime agent effect monitoring. |
| src/mcp/security/bounds.ts and CHANGELOG.md | MCP result privacy projection masks detected PII, output limitations and truncation are reported; free default is local with zero outbound network, optional opt-in dashboard sync exists. | Source check may still miss PII; keep default/offline vs configured sync separate. |
| components/developer-security/AiIdeIntegration.tsx | Shared Cursor/Windsurf sample project rule tells llmverify to scan code and forbids merging CRITICAL, borrowed from source-scanner template. | Scope instruction to untrusted text/LLM outputs, do not regress AI AppSec or tenant scanner usage. |
| server.json / docs/MCP.md | 1.8.0 registry-format manifest with stdio and six tools; official listing mirrored externally. | Confirm official registry URL if claiming exact listing; no invented hosted connector. |

## 3. Prioritized findings
| ID | Priority | Issue | Website improvement |
|---|---|---|---|
| LV-01 | P0 | Hero promises "safety layer" / guaranteed prompt injection blocking. | Frame deterministic **risk signals + application policy**, never perfect protection. |
| LV-02 | P0 | Quickstart calls pattern matching "three lines of safety". | Example comments explain no-match means no known indicators, risk.level is triage. |
| LV-03 | P0 | ~90% PII precision from website manifest lacks published benchmark; current changelog removed unsupported accuracy numbers. | Remove percentage and describe known-format limitations. |
| LV-04 | P0 | Unauthenticated --host=0.0.0.0 server launch is copyable on public page. | Drop public promotion, localhost-only optional advanced docs. |
| LV-05 | P0 | SECURITY.md link in manifest is 404. | Replace only with verified private advisories/reporting route or remove; do not invent file. |
| LV-06 | P0 | Wrong "scan source code" rule in LLMVerify IDE setup. | Product-specific input/output instruction without invented merge gate. |
| LV-07 | P0 | Mobile feature descriptions invisible, "tap" instruction inert. | Accessible mobile cards or real keyboard expansion. |
| LV-08 | P0 | Hash-only audit framed as SOC 2/HIPAA/GDPR evidence, mapping read as certification. | Actual audit persistence and control mapping != compliance certification. |
| LV-09 | P0 | Read-only interpretation ignores verify_llm_content local state writes. | Five read-only vs one potentially stateful, exact permission semantics. |
| LV-10 | P1 | No example output with risk, notChecked, limitations, audit status. | First-screen **Result Inspector** with bounded, clearly educational values. |
| LV-11 | P1 | Ten APIs in first table obscure user goals. | Three equal "Input risk", "Output risk", "PII formats" choice cards; full API behind deeper section. |
| LV-12 | P1 | Absolute "zero network" conflates default free-tier verification with npm install and opt-in sync. | Scope clearly to default local use. |
| LV-13 | P1 | monitorLLM described as automatic runtime monitoring. | Optional app-integrated wrapper, not observed consequential tool effect. |
| LV-14 | P1 | "Same input same result" misses config/engine/tier and audit timestamp changes. | Fixed-version/rules/config/inputs deterministic signals, not identical receipt IDs or coverage. |
| LV-15 | P1 | LLMVerify, HAIEC hosted MCP and Runtime Security Testing/Assurance blur together. | Clear standalone/hosted distinction and optional links. |
| LV-16 | P1 | README and QUICK-START stale against 1.8.0. | Track separate package repo docs issue, never assume website fixed repo. |
| LV-17 | P1 | Manifest releaseDate for 1.8.0 older than 1.8 release. | Reconcile releaseDate from real npm dist-tags. |
| LV-18 | P1 | "PII filtered outputs" could imply user input sent to chosen agent host never contains PII. | Explain runtime/host boundary; masking is bounded to recognized values in returned tool fields. |
| LV-19 | P1 | Dark long hero and repeated safety lists diverge from light-first HAIEC design. | Light-first source/readable, restrained dark inset, responsive result inspector. |
| LV-20 | P2 | Generic SEO "LLM validation" mispositions product. | Search intent open-source local LLM input/output pattern risk checks. |
| LV-21 | P2 | Low risk displayed as approved safe or factual. | No fabricated pass; user-configured follow-up. |
| LV-22 | P2 | Incomplete explanation of hallucination indicators. | Example showing why ground-truth sources still matter. |
| LV-23 | P2 | "Any LLM client" implies universal wrapper compatibility. | Specify supported JS/TS methods and separately integrated helper. |
| LV-24 | P2 | Open source source/license and security reporting less discoverable. | Prominent exact GitHub/LICENSE/npm/change log links and verified disclosure guidance. |

## 4. Proposed customer-ready copy and information architecture
**Hero:** "LLMVerify: Inspect LLM Inputs and Outputs Before You Rely on Them." Subhead "Spot recognizable risks. Keep checks local. Understand what was not checked." Deck as above. MIT, npm install, GitHub and Node version guidance above first fold.

**H2: Check the AI text that matters.**
1. "Is this input trying to override instructions?" Flags recognized attack patterns for caller review; novel attacks can bypass.
2. "Does this model response need closer inspection?" Heuristic hallucination-risk, consistency and JSON validity as applicable, not fact-checking.
3. "Does this text contain recognizable personal information?" Detect/mask standard PII formats; not comprehensive redaction.

**H2: Start locally in minutes.** Install npm install llmverify. Use verify() and isInputSafe() as risk indicators, plus redactPII() when needed; display actual risk.level, notChecked, limitations, audit?.status. Avoid printing unredacted source text. Show valid CLI npx llmverify verify "Sample model output"; for IDE stdio npx llmverify mcp (Node >=20). No automatically deployed global policy block.

**H2: Read a result, not just a risk score.** First-screen HTML inspector with known input pattern, illustrative output risk, PII type count, **engines actually executed vs notChecked**, limitations, and an actual audit state example. No fabricated real scan, hash, request ID, or universal "SAFE" badge. Explain heuristic score vs evidence/ground truth.

**H2: Six tools in one local MCP server.** 5 read-only and verify_llm_content may write local usage/audit. Show exact six and matching inputs, real Cursor/Claude Code/Windsurf/Generic snippets and honest default stdio transport. Keep shared working copy buttons. Remove generic code scanner instruction.

**H2: Local privacy with visible boundaries.** Local free tier default not networked; npm install/optional authorized sync/network not same. Data is processed in user-selected app/IDE host; PII masking output only where patterns detected. Local audit receipt can be persisted, disabled, failed or unattempted; hash != signature of external truth or regulatory certification. Optional monitoring wrapper only after application integration.

**H2: Open code, clear scope, optional broader assurance.** Show MIT LICENSE and credit, npm package, v1.8 changelog, accurate security reporting. Separate /developer-security, /ai-security, /products/runtime-security, /evidence, /assurance and /docs/agent-integration as appropriate, no forced upsell or automatic source-to-SaaS promotion.

**FAQ:** Does it fact-check? Can it block every injection? Is my content sent to HAIEC? Does the audit always persist? Why was an engine not checked? What does an MCP tool do? What is a Node requirement? Is the local HTTP listener secured? Does CSM6 mapping certify ISO/NIST/SOC2?

Customer copy: no em dash punctuation or internal sprint/test commentary, no percentage without evidence, no fabricated independently reviewed real customer proof. Maintain positive benefit-first narrative with precise conditions.

## 5. Diagram and style
Native semantic HTML/SVG responsive two lanes, not a mandatory 6-capability funnel:
- Authorized user input -> pattern check -> indicators + limitations -> caller chooses handling.
- Model output -> selected heuristic/JSON/PII checks -> risk + enginesNotChecked + limitations -> optional in-memory redacted output / local audit status.
- OPTIONAL separately authorized HAIEC hosted evidence and assurance path only if connected, never assumed.
Premium light-first, full dark theme parity, restrained dark terminal, all diagram fields SEO-readable as text, labels not color-only; no fake live content scanner or green badges. Preserve 7 current anchors #what-it-does #quick-start #how-it-works #cli #mcp #frameworks #cannot-prove; nav/footer/analytics, no layout replacement.

## 6. SEO
Title: Open-Source LLM Input & Output Checks | LLMVerify by HAIEC
Description: Use MIT-licensed LLMVerify from HAIEC to inspect known prompt-injection patterns, PII formats and model-output risk signals locally, with clear limits and MCP tools.
Canonical https://www.haiec.com/llmverify; one SSR H1, appropriate OG/Twitter, truthful SoftwareApplication license and source. No unsupported accuracy, certified frameworks, ratings, adoption or automatic blocking. Separate search intent from AI AppSec and hosted Runtime Security Testing.

## 7. Implementation and acceptance
P0: editorial/SEO safety claims, ~90 metric, unauth network-binding command, invalid trust link, wrong IDE instruction, inert mobile table, audit statuses, releaseDate discrepancy.
P1: light-first outcome/result inspector and 3 peer use cases; real SDK/CLI/MCP quickstart; 6 tool identities and read-only/stateful distinctions; app monitoring and HAIEC SaaS separation; preserve full docs in progressive detail.
P2: focused FAQ, license trust, meta and responsive/print polish.

Test exact source semantics without live harmful target: verify_llm_content local write potential; requireAuditPersistence only when requested; notChecked never pass; low risk not factual safety; redaction truncation fail-closed; missing SECURITY.md no dead link; no promoted unauth 0.0.0.0; 500/day scoped free-tier; actual 1.8.0 npm, Node >=18 core/>=20 MCP; no private data on public SSR; mobile details keyboard operable; 390/768/1440 light/dark, code copy, CTA and meta/link smoke. Focused type/lint. One website PR later, no new backend, package npm changes or broad platform testing.

Package-repo maintenance is **a distinct follow-up** requiring authorized scope: refresh README 1.7 heading, QUICK-START removed npm run serve and result.result.risk, security reporting policy as actually supported. Do not claim to have fixed these now.

Dependencies: Common Repo Page #25 Developer Security family, Page #27 AI AppSec, Page #24 Runtime Testing, Page #26 Evidence, website brand/light-first standards, preservation review and MCP Agent Integration plans.

**Current status:** planning + Common Repo doc only. Website production unchanged.
