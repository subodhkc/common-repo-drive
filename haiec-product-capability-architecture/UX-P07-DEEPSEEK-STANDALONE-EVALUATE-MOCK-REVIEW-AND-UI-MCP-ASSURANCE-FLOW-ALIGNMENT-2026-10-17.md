# HAIEC — DeepSeek Standalone Evaluate Mock: Validation and UI / API / MCP Alignment

**Reviewed:** 2026-10-17. **Disposition:** source-checked, read-only DESIGN REFERENCE; NOT production implementation, new product authority, or complete acceptance testing.  
**Input:** uploaded standalone HTML `Pasted text(20261017-113416).txt`, 1,487 lines, 99,890 bytes, entitled `Evaluate · Support Agent v2 — HAIEC Assurance Engine`. All Acme/Support-Agent evaluation IDs, findings, receipts, provider effects, analyzer counts and human reviews are **synthetic fixtures**.  
**App baseline:** `subodhkc/haiec-website` `Main` `80d3e893680c9df6afd3c628779315d5c25a8f06`. **UX-P03 AI Estate is actively being implemented by Devin: DO NOT touch P03, open an overlapping PR, or disturb its work.**  
**Read alongside:** [Page-by-page program](HAIEC-PAGE-BY-PAGE-UX-DESIGN-AND-VALIDATION-PROGRAM-2026-10-17.md), [completed atlas review](HAIEC-DEEPSEEK-COMPLETED-UX-ATLAS-REVIEW-AND-UXP03-ALIGNMENT-2026-10-17.md), [P04 Assurance Case review](UX-P04-DEEPSEEK-FOCUSED-ASSURANCE-CASE-REVIEW-AND-DASHBOARD-DATA-TRUTH-GAPS-2026-10-17.md), [P07 Detection Coverage review](UX-P07-DETECTION-COVERAGE-DRAWER-REFERENCE-VALIDATION-AND-UX-P01-REVIEW-2026-10-17.md).

## 0. Design precedence — additive, not replacement

**DeepSeek is suggestion only. Preserve the entire old HAIEC product.** This includes system inventory, evaluator/orchestrator setup, live and frozen reports, analyzer/source detail, Agent Audit, Action Map, DAI, Control Proof, operational controls, monitoring, human reviews, human uploads, evaluation history, exact receipts, API/IDE/MCP flows, and developers' current integration options. Enhance readability and discovery on top; do not remove functionality, shortcut authority rules, invent new backend models or import the static HTML/CSS wholesale. 

Three pillars: **Understand → Assure → Govern & Operate**. Independent jobs: **Discover / Evaluate / Authorize / Monitor / Protect / Verify**. Lead with **"Discover what HAIEC can establish."** System, customer goal and connect evidence remain three lightweight **peer** entry choices, never a compulsory multi-step funnel. The UI's next action must come from the canonical owner, not a new client-side recommendation engine.

Call the product **HAIEC Assurance Engine**, **Assurance Evaluation**, **Agent Audit**, **Consequence Delta**, **Delegated Action Integrity (DAI)**, **Assurance Receipt**. Retired internal numeric engine names must never appear in new user-facing copy.

## 1. Independent prototype execution validation

- Extracted JavaScript directly from original HTML: `node --check` passed unchanged. Headless Chromium rendered at **1440×900 and 390×900** with **zero page-level JS errors**.
- The newest synthetic evaluation shows **16 analyzer rows**, **4 explicit not-established categories**; all three frozen evaluation fixtures can be selected and the claim inspector opens / closes via Escape. Current-basis mode renders a **deliberately limited, informational placeholder**, not a borrowed frozen disposition; this is an improvement over the previous DeepSeek atlas but must not replace HAIEC's real live source/monitoring data.
- **Confirmed broken basis as-of:** select previous `eval-2f4a-8c1a` (2026-10-16 22:15 UTC) and the banner switches correctly, but the top as-of remains **10:42 UTC**, the latest snapshot time. Every UI, report, receipt and MCP link must use the *selected* evaluation.
- **Confirmed analyzer-count mismatches:** latest has 16 listed: **12 RAN, 2 PARTIAL, 2 NOT_RUN**, yet hero calls it **14 of 16 ran** (partial miscount). Previous has **8 listed but claims 12/16**, oldest **4 listed but claims 11/16**. Registry membership, eligible analyzer, partially run and actually executed are separate facts. An exact denominator requires a real frozen execution manifest.
- No full a11y audit, role/tenant acceptance, production calls, scan execution, report verification, all-button walkthrough, or cross-platform browser testing was performed. This is **STATIC_JS_PASS + SYNTHETIC_BROWSER_RENDER_PASS**, not LIVE_VERIFIED.

## 2. Adaptable UX patterns — by actual session owner

| Pattern | Decision | Owner / preservation |
|---|---|---|
| **Evaluation disposition hero** with precise evaluation ID, timestamp, scope and evidence caveat | **ADOPT design**, but ALLOW/REVIEW/BLOCK is **only that frozen evidence-scoped evaluation's disposition**, never human deployment authorization or applied guard | **UX-P07**; existing run, summary, Master Report and receipt paths survive |
| **Always-visible "What this evaluation does not establish"** | **STRONGLY ADOPT**. Separates missing proof from findings and from human permission. Derive from Agent Audit/recorded limitation truth, not hardcoded blanket caveats | **P07** full; **P04** concise summary |
| **Execution-specific source/analyzer inventory** RAN/PARTIAL/NOT_RUN/HELD | **ADOPT IF supported** by persisted per-run producer, profile, analyzer, source and rulepack provenance. Render unavailable if no manifest; registration never implies execution | **P07** and existing Detection Coverage contract |
| **Claim → finding → qualified evidence references** | **ADOPT** real evidence IDs and verified source basis, not mock counts or synthetic evidence references. Status is read-only product truth | **P07** Agent Audit/Master Report |
| **Findings ranked separately from claim support** | **ADOPT**. Severe findings, missing evidence, source absence and final disposition are different categories; ALLOW need not imply zero informational findings | **P07** |
| **DAI-in-scope chains** and per-hop drilldown | **ADAPT** with exact evaluation membership, issuer-qualification and missing-vs-widened distinctions; link to full DAI/Action Path | **P07** summary, **P05** full DAI |
| **Missing evidence with next source** | **ADOPT CONDITIONALLY** using E1 goal-availability/E2 onboarding and the canonical Agent Audit resolutionGroups; do not guarantee "this source completes plane" | **P06/P07** |
| **Frozen evaluation history and compare** | **ADOPT interaction**: exact selected evaluation, scope digest, as-of; compare only via deterministic Consequence Delta, not title-matching or client arithmetic | **P07**; shared authorized delta owner, **P04/P05** links |
| **Unified contextual inspector** | **ADAPT** established/unknown/evidence/next action. Reuse accessible HAIEC component and preserve links to full detail; don't build six disconnected drawers | P04/P07/P05–P12 separately |
| **Right rail for next action, report, evaluation metadata** | **ADAPT** from existing next-action, reports and authorizations; no "fully qualified" success from an empty queue | P07 |
| **Current vs evaluation selection** | **ADAPT**: real current source/ops facts and historical frozen record are separately loaded; a placeholder is an honest design example, but replacing current data would regress HAIEC | P04/P07 |

## 3. Negative acceptance tests — prototype bugs/semantic errors

1. **Selected history ID vs stale top badge**: fixed header date despite previous frozen evaluation; ensure all content + deep links are bound to exact selected ID, hash/snapshot/digest and org/system.
2. **Fake analyzer math**: 14/16 includes 2 partial, previous summaries have fewer detail rows than count; no static total from the rule catalog. Show actual RAN, PARTIAL, NOT_RUN, HELD and scope limits separately only if genuinely recorded.
3. **Invalid delta:** the mock `previewCompare()` matches `finding.title` strings; missing names can be misreported as remediation. Use current `consequence-delta-service` via shared authorized access, respect scope/analyzer/release-perimeter comparability and PARTIAL / NOT_AVAILABLE.
4. **Fabricated receipt:** `openReceiptInspector()` creates `rcpt-` from the evaluation ID, a hard-coded digest and named human review. Real output requires exact matching persisted receipt, optionally **NO_RECEIPT** or REVOKED, and must never fall back to an unrelated evaluation's receipt.
5. **False promised unlocks:** fresh AWS IAM export does not independently establish action-level EFFECTIVELY_GRANTED without effective-policy boundaries; an empirical runtime test cannot guarantee prompt-injection resistance, only scoped test observations.
6. **Overbroad negative claim:** "Secrets not present in source" marked Supported though two secret-like patterns were identified in comments. A bounded finding may say "no verified live credential exposure in evaluated paths", NOT universal absence.
7. **No grant reported as nine mismatches:** in mock chain-e1f2-9a3d is DELEGATION_UNVERIFIED; nine missing parent dimensions must be UNKNOWN/NOT_COMPARABLE, not nine proven violations or observed illicit effect.
8. **Inconsistent ALLOW narration:** historical ALLOW copy says no consequential findings but still carries an informational low-severity finding. Disposition is not a zero-findings promise and is not deployment approval.
9. **Later remediation in older snapshot:** older BLOCK's headline includes later remediation. Historical evaluation must stay frozen; show post-eval change as separate current/historical annotation if qualified.
10. **Registered profile ≠ established five planes.** The mock labels a "Full five-plane" profile when IAM remains PARTIAL and empirical runtime data absent. Profile selection and evidence sufficiency are separate.
11. **Preview-only buttons** (Re-evaluate, Export, Verify, Connect) must never claim persistence/evaluation/receipt issuance. Real execution requires authenticated canonical routes, scopes and explicit user approval when appropriate.
12. **Accessibility:** clickable analyzer divs and table rows must become real buttons/links, mobile history access must remain complete, dialogs need focus trap/return and role controls need server-side enforcement.
13. **Static prompt/RAG rule available ≠ run on this source**; runtime empirical prompt/agent testing requires opt-in authorization and source-specific availability.
14. **Exact evidence refs absent in mock:** evidenceCount and synthetic labels do not prove an evidence manifest exists; linked source/digest and as-of must be supplied by canonical owners.

## 4. VERIFIED UI / API / MCP owner map (app Main 80d3e8936)

**Key principle:** UI, REST and MCP are **three access transports to the same evidence/assurance services**. No second AI verdict engine, no MCP-only evaluation model and no duplicate generated next-action logic.

| Intent | Canonical UI/REST owner | Registered MCP tools and boundaries |
|---|---|---|
| Customer goal + availability | `lib/ai-inventory/goal-availability.ts` combines E1 readiness and `lib/mcp/capability-guide.ts`; the Start Here/GoalAvailabilityPanel are established | `haiec_capability_guide` (system:read), optionally `aiSystemId` for customerAvailability. **Metadata is read-only, availability != access entitlement** |
| Tenant & exact system | UI session `requireOrganizationAccess`, system index/workspace | `haiec_preflight` and `haiec_list_systems` (system:read). MCP organization **exclusively from verified API key**, never caller-supplied org |
| Source qualification | E2 source onboarding, connected assets, GitHub App, CI Action/local scan, telemetry, typed binders; held providers excluded | `haiec_github_preflight` → `haiec_list_github_repositories` → `haiec_bind_github_source` (confirmed); alternatively `haiec_submit_local_scan` (scan:submit, qualified bundle). No arbitrary repository URL/secret in tool args |
| Start one evaluation | `lib/assurance/external-api.ts` `handleCreateRun`; `POST /api/v1/assurance/runs`, one canonical orchestrator | `haiec_run_assurance` (scan:create, **WRITE**, exact system, **idempotencyKey required**). Requires VERIFIED source asset for GitHub path or qualified attached scan; runtime test attach separately if bound/complete |
| Poll and select frozen result | run read + `GET /api/assurance/evaluations`, owner `lib/assurance/evaluation-index.ts` | `haiec_get_run`, `haiec_list_evaluations` (report:read), returns exact evaluation ID, as-of, lifecycle, current/historical label and separate NO_RECEIPT |
| Explain result / resolution | canonical Agent Audit, report, Master Report, existing resolutionGroups + E1 next action | `haiec_get_summary`, `haiec_get_agent_audit`, `haiec_get_master_report` / `haiec_get_report` (report:read). **Assistant explains; HAIEC computes verdict** |
| Compare exact frozen pair | `lib/assurance/consequence-delta-service.ts` via shared authorized boundary; Action Map/release comparison | `haiec_list_evaluations` → `haiec_get_consequence_delta` (report:read; aiSystemId + baselineEvaluationId + candidateEvaluationId). PARTIAL and non-comparability never hidden |
| Controls and governance | Control Catalog / Control Proof / operating envelope / human deployment decision server CAS/SoD | `haiec_control_assurance`, `haiec_control_results` / `haiec_control_replay` reads (report:read). No AI approval of its own authority or invented installed target seam |
| Runtime test/re-evaluate | Opt-in runtime preflight, eligible endpoint, user approval, then new frozen evaluation | `haiec_runtime_preflight` (scan:read) → `haiec_run_runtime_test` (scan:create, approval/confinement gates) → attach COMPLETED system-bound test via `haiec_run_assurance`. Denied/held categories stay blocked |
| Master reports & receipts | Persisted report/Agent Audit/Passport, exact evaluation-bound package and verification; private/public/revoked | `haiec_get_master_report` / `haiec_get_passport` (report:read), `haiec_issue_assurance_package` (package:write + userConfirmed), distinct `haiec_publish_package` (userConfirmedPublish), and `haiec_get_package`. Never synthesize receipt or signature |

**MCP transport source-verified:** `app/api/mcp/route.ts` is **POST-only stateless Streamable HTTP JSON-RPC** with `Authorization: Bearer <HAIEC_API_KEY>`, canonical API-key authorization, per-tool scopes, host/origin checks, bounded body and protocol limit; GET/DELETE answer 405. **This HAIEC MCP server is API-key authenticated, not OAuth.** Do not confuse it with the separate KestrelVoice plugin's OAuth. Registered tool ≠ enabled tool for caller; clients can't infer write permission from read metadata.

**Safety/holds:** `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` continues for unqualified producers. User approves upload/connector changes/runtime tests/receipt publication via the canonical gates. `EVIDENCE_INGESTED != ASSURANCE_EVALUATED`; `GITHUB_APP_CONNECTED != ANALYZER_EXECUTED`; `STATIC_CODE_CAPABLE != OBSERVED`; `ALLOW != HUMAN_DEPLOYMENT_APPROVAL`; `DISPATCH_ACK != TARGET_EFFECT_VERIFIED`. No new scanner or write tool for this design.

## 5. Overall program alignment / execution order

- **UX-P03 AI Estate — ACTIVE.** Do not edit or expand P03 during Devin's current sprint; validate output when completed.
- **UX-P04 System Assurance Case** retains comprehensive `SystemWorkspace` tabs and `AssuranceCasePanel` plus current monitoring/Control Proof. Use concise current/frozen evaluation basis, scoped disposition and explicit proof frontier, then link full Evaluate.
- **UX-P05 DAI / Action Path** owns cross-agent per-hop comparison and signed issuer/target proof gating, not the Evaluate mock.
- **UX-P06 Sources & Evidence** owns qualified connectivity and missing-evidence source suggestions. No guaranteed source unlock.
- **UX-P07 HAIEC Assurance Engine Evaluate / Detection Coverage — PRIMARY ADOPTION OWNER for this design**: frozen disposition, explicit not-established section, actual per-run analyzer participation, claim/evidence/finding chain, selected history, correctly comparable Consequence Delta, useful next source/action, exact receipts and MCP-equivalent navigation. Preserve ALL old scan/run/report details.
- **UX-P08 Controls & Operations**, **P09 Human Governance**, **P10 Monitoring**, **P11 Reports/Receipts**, **P12 Provider Usage**, **P13 Global Shell** remain individually owned future page sessions; no mass replacement.
- Existing independent **dashboard P1 data-contract gaps D01/D02/D03** and **P2 rate-limit-tier defense-in-depth D04** remain separate, not silently assigned to P07.

## 6. Future UX-P07 acceptance gates (no current authorization to execute)

1. Inventory old Evaluate/orchestrator/source/run/result/history/Agent Audit/report/receipt/IDE/MCP features before changes; preservation ledger covers every customer and developer path.
2. Query canonical evaluation index for exact IDs; switching snapshot updates title/basis/as-of, all supported claims, analyzer/source list, DAI membership and exact receipt with NO_RECEIPT states; live/current system data stays separate.
3. Show analyzer RAN/PARTIAL/NOT_RUN/HELD/UNKNOWN and accurate source-specific denominators only when actual persisted run manifest supports. Registry-defined rules do not count as run.
4. Claims and findings reference actual source IDs, timestamps and digests; no fabricated confidence, severity, secret-absence proof or unconditional outcome.
5. Use existing canonical Consequence Delta for two exact frozen evaluations and expose scope/analyzer comparability restrictions.
6. Recommend only source/action that E1/E2/source registry + Agent Audit resolutionGroups support; no mock seven-stage ladder, IAM-completes-grant assertion or runtime test-completes-security promise.
7. Existing MCP tool path and permissions remain intact and aligned with UI. No auto-run from capability-read, no hidden scans, no credential or tenant leakage; obey idempotency and explicit human confirmation.
8. Receipt link resolves exact snapshot package; missing/revoked stay honest; issuance/publication separately user-approved.
9. Use accessible semantic buttons/links and mobile 390px evaluation history/analyzer details without clipping, real dialog focus handling and safe browser QA at 1440/1280/768/390.
10. One future scoped P07 PR, tests/CI/production verified at merge SHA, same-session Common Repo update. **Stop after P07**; no forced work in P03.
11. Retired internal numeric engine labels banned from customer-facing new UX.

**Conclusion:** DeepSeek's strongest contribution is *presentation of the proof boundary and the trace from frozen evaluation → exact participating analyzer/source → claim → finding/evidence → permitted next action → existing report/MCP tool*. Every technical and operational result must remain HAIEC-owned, deterministic and shared across UI/API/MCP. This is an additive design reference, not a replacement blueprint.
