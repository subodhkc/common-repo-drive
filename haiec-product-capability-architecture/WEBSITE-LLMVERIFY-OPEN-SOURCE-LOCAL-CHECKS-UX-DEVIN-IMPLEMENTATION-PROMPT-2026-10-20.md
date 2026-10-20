
# Devin Handoff: LLMVerify Open-Source Developer Page, Source-Accurate Local LLM Checks
**Controlling review:** WEBSITE-LLMVERIFY-OPEN-SOURCE-LOCAL-LLM-CHECKS-MCP-AUDIT-UX-COPY-SEO-DEEP-REVIEW-2026-10-20.md (Common Repo Page #28, findings LV-01 through LV-24). Read first and preserve existing content and website global design.

## Task
Enhance the existing /llmverify public product page on subodhkc/haiec-website Main to be an outcome-led, premium light-first **Open Source by HAIEC** developer destination. It describes a local deterministic input/output pattern checker, six bounded stdio MCP tools, optional audit, SDK/CLI and real install sequence. It must **not** claim universal injection prevention, independently fact-checked answers, a guaranteed PII scanner, default global live monitoring, compliance certification, or an automatic HAIEC SaaS assurance result.

This is an in-place public site and minimal shared-source copy change, NOT a new security product/engine, LLM API, npm release, host connection, new route, package source edit or standalone HTML sample.

## Step 1: Refresh actual source and preserve
Inspect current website default Main, merged recent light-theme/Developer Security and AI AppSec work, deployed HTML and:
- app/llmverify/page.tsx, layout.tsx, data/developer-products.ts
- components/developer-security/CurrentReleaseBar.tsx, AiIdeIntegration.tsx, CopyButton.tsx; original 7 nav anchor ids.
- app/developer-security/page.tsx, app/ai-appsec/page.tsx, app/ai-security/page.tsx, app/products/runtime-security/page.tsx, app/evidence/page.tsx, app/docs/agent-integration/page.tsx; global nav/theme/SEO registry.
- subodhkc/llmverify-npm source README.md, package.json, LICENSE, CHANGELOG.md, QUICK-START.md, docs/MCP.md, docs/LIMITATIONS.md, src/verify.ts, src/result-contract.ts, src/mcp/server.ts and all six tools, src/mcp/security/limits.ts, src/mcp/security/lane.ts, src/cli.ts, src/server.ts, src/wrapper/monitorLLM.ts.
- Published npm dist-tag/pack of llmverify. v1.8.0 is publicly confirmed but website releaseDate is old 2026-08-21 while package 1.8 was released 2026-10-09. Change source-derived manifest date only if correct release semantics are established.

Preservation inventory: real function table/API, quickstart, local/offline model, CLI/HTTP, CSM6 framework mapping, limitations, MCP six tools, IDE integration and real external links. Group and present better, do not delete meaningful explanations. Distinguish product family from wider commercial HAIEC.

## Step 2: P0 source-truth and safety corrections
1. Replace "safety layer", "blocks prompt injection/jailbreaks", "three lines of safety" and unqualified "automatically detects hallucinations" with precise **recognized pattern signals, caller-selected handling, heuristic hallucination risk and user review**. No model calls made by default check; factual/ground-truth verification not established. Low-risk/inputSafe=true is NOT universal safe.
2. Remove website/data manifest PII "~90%" claim absent published benchmark; 1.8 changelog removed unsupported accuracy percentages. Explain supported common-format PII regex limitations and that MCP output masking depends on detected values.
3. Remove copyable npx llmverify-serve --host=0.0.0.0 --port=9009 from public quickstart. Unauthenticated HTTP server network exposure is not a recommended developer default. Keep optional localhost 127.0.0.1 mode with separate Express dependency where relevant, or move advanced caveat to actual docs.
4. Broken trustUrl in shared manifest points to subodhkc/llmverify-npm/blob/main/SECURITY.md but this file is not present. Verify a real private vulnerability reporting/advisories URL or use existing maintained issues path if appropriate; do not invent security policy file.
5. Shared AiIdeIntegration Cursor/Windsurf rule template currently describes LLMVerify as code scanner and asks users not to merge CRITICAL. Make tool-specific model-input/output check instructions without breaking AI AppSec or MCP Tenant Isolation source-scanner prompts. Keep exact stdio launch npx llmverify mcp (Node >=20).
6. Fix mobile function table: column with description hidden and "Tap a row" has no functioning event. Make text accessible using responsive stacked cards / semantic <details> with keyboard, or actually wire accessible expansion. Avoid inert decorative interactivity.
7. Update audit claims. verify_llm_content may write local usage and local audit (readOnlyHint false), other five tools are read-only. Output includes enginesNotChecked, limitations, audit status. requireAuditPersistence is optional and must only say persisted when PERSISTED, not when DISABLED/FAILED/NOT_ATTEMPTED; no automatic SOC 2/HIPAA/GDPR compliance from log hashes.
8. Free tier default local zero outbound request when running verification, but npm installation and explicit connected dashboard sync may use network. App-integrated monitorLLM wrapper does not automatically install global runtime monitoring and is not HAIEC enterprise Monitor, Protect or operational action/effect witness.
9. README v1.7 and QUICK-START npm run serve/result.result.risk are stale against 1.8. Do not copy. Record explicit separate llmverify-npm docs follow-up; do not silently change another repo under website scope.
10. Accurate MIT credit per LICENSE: KingCaliber Labs 2025 with HAIEC as original author. "Open Source by HAIEC" is a developer product family, not entire SaaS MIT.

## Step 3: Customer-first copy/layout and signature diagram
Eyebrow: OPEN SOURCE BY HAIEC · MIT LICENSE
H1: **LLMVerify: Inspect LLM Inputs and Outputs Before You Rely on Them**
Lead: **Spot recognizable risks. Keep checks local. Understand what was not checked.**
Deck: "LLMVerify is HAIEC's open-source toolkit for deterministic checks on supported model inputs and outputs. Flag known prompt-injection patterns, detect and redact common personal-data formats, inspect JSON and consistency signals, and triage potential hallucination risks. Get structured findings, explicit limitations and optional local audit status from your application or AI coding agent."
Primary "Start Checking Locally" -> #quick-start. Secondary "View on GitHub" exact repo. Third "Use with Your AI Agent" -> #mcp.
Proof line: default local, no HAIEC account, six MCP tools, MIT.

Lead with three equal user questions:
- Is the input showing a known instruction override pattern?
- Does this generated response need review (heuristic hallucination/consistency/JSON)?
- Does the text contain common PII formats and can I redact recognized data?
No one tile compulsory. Preserve full function API lower down.

First screen **bounded Result Inspector** alongside useful explanation. Educational static input/output example, not actual live scan. Show actual risk signal, engines executed/notChecked, limitations, PII type/masked count and audit status (sample, not fabricated persisted proof). Do NOT show a green "Verified Safe" or a real-looking made-up receipt hash.

Semantic HTML/SVG dual input/output diagram:
- Input text -> pattern checks -> indicators+limitations -> application-specific handling
- Model output -> enabled heuristics/JSON/PII -> risk+notChecked -> optionally masked output + actual local audit receipt
- Separate optional link to HAIEC broader qualifying evidence / assurance without automatic transport or entitlement.
Text indexable, accessible parallel semantic description; no raster hero dependency and no fake runtime scanner control.

First-use example (read actual 1.8 code before publishing): npm install llmverify; sample require {verify,isInputSafe,redactPII}; isInputSafe input indicates known patterns only; const result = await verify(aiResponse); inspect result.risk.level, result.notChecked, result.limitations, result.audit?.status; redactPII returns {redacted}. Avoid console.log raw original personal data. Real CLI npx llmverify verify "sample output". MCP server npx llmverify mcp Node >=20; core >=18. Other options only as source-confirmed.

Six tool list exact name/scope, highlight stateful verify_llm_content vs five read-only without alarming badges. Keep existing functioning AiIdeIntegration tabs and use tool-aware project rules.

Technical detail retained through accessible sections/disclosures. Concise separation LLMVerify (local text) vs AI AppSec (static source) vs HAIEC Runtime Security Testing (authorized endpoint) vs HAIEC Assurance (scoped source/evidence evaluation). Optional links to /developer-security, /ai-security, /products/runtime-security, /evidence, /assurance, /docs/agent-integration. No coerced signup. Place MIT LICENSE, accurate release, GitHub repo, npm and verified reporting links near trust.

## Step 4: SEO and style
Keep canonical https://www.haiec.com/llmverify, one H1/SSR.
Title: Open-Source LLM Input & Output Checks | LLMVerify by HAIEC
Description: Use MIT-licensed LLMVerify from HAIEC to inspect known prompt-injection patterns, PII formats and model-output risk signals locally, with clear limits and MCP tools.
Accurate OG/Twitter, truthful SoftwareApplication software requirements/licensing, no unsupported PII metric, ratings/downloads or universal "free" SaaS offer. Preserve 7 previous section IDs and global nav/footer/theme/analytics. Premium light-first website design with dark-mode parity and restrained optional dark terminal. No em dash public copy, reviewer labels or invented "fictional" banners. Coverage/uncertainty described naturally.

## Step 5: Focused acceptance, PR and handoff
- 6 tool names and side effects match code (five read-only, verify may write local usage/audit); skipped engine never passes; optional requireAuditPersistence fail-closed semantics accurately represented.
- Heuristic risk level never means factual truth or complete safety; no unsupported redaction percentages.
- No copyable unauthenticated all-interfaces HTTP command; localhost/optional Express only when documented; stdio MCP never presented as remote.
- Source actual release v1.8.0 reconfirmed npm; releaseDate corrected only with proof; repo legal/license attribution preserved; no dead SECURITY.md link.
- "Tap row" functional or removed; keyboard/focus, copy buttons, 390/768/1440 light/dark and reduced motion, mobile code no overflow.
- No source scanning/mismatch in shared IDE rule; AI AppSec and Tenant Isolation behavior nonregressed.
- App-integrated monitor wrapper distinct from HAIEC Platform monitoring; local free tier default distinct from optional sync.
- SSR title, canonical, OG, schema, CTA/link smoke; focused typecheck/lint and relevant component tests. No live user LLM call, online external target test or package release.
- Deliver one focused website PR, preserve known sections, report changed files, verified sources, exact tests/remaining blockers. Merge to Main after repository policies if authorized; no manual deployment.
- Package repo README/QUICK-START and security reporting policy improvements are separate follow-up workstream, not part of this website PR.

**At present the Common Repo document and this prompt are the only deliverables. Do not claim haiec.com has already been changed by this audit.**
