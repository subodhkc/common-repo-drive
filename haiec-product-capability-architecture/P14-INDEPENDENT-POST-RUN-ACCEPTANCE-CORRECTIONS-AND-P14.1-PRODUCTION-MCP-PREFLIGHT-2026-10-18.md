# HAIEC P14 — Independent post-run acceptance corrections and P14.1 production-read preflight

**Independent review 2026-10-18.** **Status:** P14 PR/CI/production SOURCE_VERIFIED; standalone external HTTP/MCP integration LOCAL_DEV_VERIFIED for selected reads; **17/17 original script checks do NOT equal 17 semantic tool successes**. At least one tool (`haiec_get_agent_audit`) demonstrably returned an MCP error. Production URL and authorized KestrelVoice cross-SaaS operation remain NOT_RUN. This source-level reviewer addendum qualifies (does not overwrite) Devin's historical P14 record.

## 1. Exact release and provenance

- [PR #2265](https://github.com/subodhkc/haiec-website/pull/2265) merged `Main` full SHA **07fbb4f4be3b7f6098580e26c97eee896990c6d7**. Verified authenticated Vercel production **[dpl_GvWnSXGJQMQoJDXXRXC7FH5VLBnn](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/GvWnSXGJQMQoJDXXRXC7FH5VLBnn)** READY on exact SHA. Exact-SHA [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39187560011) and [Consolidated CI/CD Pipeline](https://github.com/subodhkc/haiec-website/actions/runs/39187560054) both SUCCESS.
- Scope: four committed artifacts/scripts ONLY, not HAIEC product code. The standalone Node client sent genuine HTTP POST JSON-RPC to `http://localhost:3015/api/mcp`, parsed SSE envelopes, with dev test-user session used to provision a short-lived read-only sandbox key. **Tested a local dev server, not Vercel or public production URL**. The server's code version was previous P13 `d7f88700`; P14 merge shipped only scripts/evidence. Local DB described as a shared Neon tenant dataset; dedicated E2E isolation NOT established.
- Private GitHub repository, not public. `artifacts/_p14-evidence.json` is **297,499 characters**, including full preflight, system list, summary, **both explanation packets** (125 KB) and Master Report (71 KB), not merely a narrow outcome manifest. No HAIEC API-key-shaped plaintext found in a scoped pattern scan, but regex scan **cannot certify absence of every secret/sensitive business datum**. Full tenant-evaluation narratives/private package identifiers should be classified **PRIVATE INTERNAL**, NOT as a sanitized public/customer artifact.
- Original first minted plaintext key reportedly appeared briefly in session output, then revoked; second key used then revoked, according to developer record. No independent database key-revocation read was performed in this review. Never reproduce any key or print key-bearing responses. Rotating/revoking a key does not erase past logs/screenshots/chat output.

## 2. P14-G01 — Confirmed false positive: Agent Audit too large (P1 acceptance integrity)

**Observed exact content from committed `artifacts/_p14-evidence.json`:**
```
agentAudit: "RESULT_TOO_LARGE: the full artifact exceeds the MCP result budget. Use haiec_get_summary or haiec_get_agent_audit, or haiec_get_report with profile \"summary\"."
```
`lib/mcp/tool-context.ts::toToolResult` caps `JSON.stringify(body)` at 160,000 characters and returns **`{isError:true,content:[{text:'RESULT_TOO_LARGE: ...'}]}`** when above the cap. Because Streamable HTTP returns an HTTP 200 enclosing this tool error, the original `artifacts/_p14-mcp-client.js::haiec_get_agent_audit` asserts only `status===200 && !!c.data`, which passes for the nonempty error string; it records misleading `keys=0,1,...` because strings have indexed keys.

**Decision:** Original `17/17` **SCRIPT_ASSERTIONS_PASS** is not equivalent to `17/17 LIVE_TOOL_SUCCESSES`. Record `haiec_get_agent_audit = ERROR_RESULT_TOO_LARGE` for the examined evaluation; all other response checks are at most as strong as their individual assertions, several of which also only check presence or HTTP 200. Do not silently convert 17/17 into 16/17 as no rigorous semantic assertion suite was run. Accepted working outcomes include real external HTTP transport, key rejection, scope denial message, org/eval binding, bounded Master Report, independent explanation packet and private U6 representative results **where source payloads demonstrate the necessary fields**.

**Required P14.1 code owner:** Prefer a small **bounded, read-only Agent Audit display/projection** over `handleGetAgentAudit` output, preserving the canonical frozen source and its exact evaluation identity; or offer a clearly bounded `haiec_get_agent_audit` selector/topic/limit and explain how the agent retrieves remaining sections. Do not change U5 evaluation, full API/PDF and persisted Agent Audit, or increase the global 160k MCP budget to hide the error. The `RESULT_TOO_LARGE` recommendation pointing back to `haiec_get_agent_audit` itself should be corrected to actually available narrow tools. If `haiec_explain_evaluation` already covers normal customer use, label it as recommended primary until Agent Audit is fixed.

**Acceptance script must** check `body.result.isError === false` and parse structuredContent / textual errors; fail on any `RESULT_TOO_LARGE`, `INSUFFICIENT_SCOPE`, `RESOURCE_NOT_FOUND` for positive read cases; negatives assert exact expected code and `isError === true` rather than just non-200 or substring; no-receipt skipped case counts **SKIPPED**, never PASS; compare evaluationId, frozen disposition, as-of and U6 representative ID across actual MCP and real authorized UI result. No raw reporter dump into repository.

## 3. P14-G02 — Evidence minimization/privacy and key-use isolation (P1 operational hygiene)

- Replace HEAD evidence output with a **minimal redacted acceptance manifest** in a focused separate PR: exact code SHA/environment classification, deterministic random run ID, safe tool labels, success/error codes, asserted fields/results, counts, evidence digests/ref IDs (if suitable), source classification and NOT_RUN causes. Mask tenant/system/evaluation/package IDs before sharing externally; keep actual IDs in separately access-controlled run storage. Preserve a cryptographic SHA-256 of locally retained raw private evidence if private original must be traceable.
- **Crucial history rule:** Removing a blob in a new commit does **not** remove it from repository history. Keep raw result restricted; review its content for secret/PII/customer material and use organizational secret incident/historical artifact-retention process if any true sensitive leakage is found. Do not casually rewrite `Main` history or assert the current commit contains no sensitive material based only on a key regex.
- The P14 mint/revoke scripts have **hard-coded test organization/System IDs** and use `PLAYWRIGHT_TEST=true` dev auth with the test account; previous P14 record says DB is `shared Neon Postgres`, while repository `playwright.preflight.config.ts` explicitly mandates isolated `HAIEC_E2E_DATABASE_URL`. Before any repeat, establish and document **DB isolation** or use genuine authenticated admin + authorized production read key. Never use dev test-login to mint API keys against a production/customer shared database. Do not couple production public-URL test to `PLAYWRIGHT_TEST`.
- Credentials reported revoked, but **current DB revocation status NOT independently verified**. Require legitimate authorized readback of both key IDs as inactive before reuse; rotate any other key known to have been copied into logs. No secret printing in scripts, recordings, console, CI or repo.

## 4. Acceptance state after independent review

| Layer / assertion | Qualified status | Evidence boundary |
|---|---|---|
| PR/Main, CI, exact Vercel code deploy | **PRODUCTION_READY VERIFIED** | Deployment exists; no successful production MCP authentication shown |
| External standalone JSON-RPC transport against local dev | **LOCAL_DEV_LIVE_VERIFIED** | Actual HTTP+SSE/client—not mocked, but developer-auth local server |
| Missing/invalid key and read-only write denial | **SOURCE_RESULT_VERIFIED (DEV)** | 401 for no/invalid key; `INSUFFICIENT_SCOPE` returned on attempted write; tests need stricter isError checks |
| Tool registry, source/system read and evaluation summary | **DEV_SOURCE_VERIFIED** | Source tenant test dataset, 61 registry tools; not actual SaaS connection |
| `haiec_get_agent_audit` | **ERROR_RESULT_TOO_LARGE** | Not successfully delivered; previously false positive |
| `haiec_explain_evaluation` exec/auditor and bounded Master Report | **DEV_SOURCE_VERIFIED / PARITY_PARTIAL** | Substantive packet output present, but assertions need exact structural truth locks |
| PRIVATE U6 representative; NO_RECEIPT | **DEV_SOURCE_VERIFIED** | Same canonical selection shown, UI/DB parity reported by developer, not reproduced independently through UI/DB |
| Human approval; KestrelVoice OAuth preview/apply/readback | **NO_LIVE_DECISION / BLOCKED_OAUTH** | No real configured SaaS operation or approved target mutation |
| Source telemetry, PEP, target effect | **NOT_OBSERVED / NOT_WIRED** | Don't infer from empty rows that operations did not happen |
| PUBLIC/REVOKED receipt/production public URL/viewer matrix | **NOT_RUN** | PRIVATE receipt, dev-only key and no viewer client exercise |
| Recorded narrated/edited chapters | **NOT_RUN** | Storyboard only; footage/captions not produced |

## 5. P14.1 narrow engineering and proof sequence

**P14.1-A — fix assertion and payload semantics first (one scoped PR)**

1. Inspect `haiec_get_agent_audit` actual canonical projection size, cause of >160k and the existing bounded `haiec_explain_evaluation` and Master Report selectors. Implement **one narrow source-bound bounded read path** if not already available; maintain exact IDs, selection metadata, omitted count, frozen-versus-current and source qualification.
2. Fix standalone client to interpret MCP `result.isError` and error text; assert structured fields for every positive, precise expected negative code. Make it environment-configurable, avoid hard-coded tenant/system IDs and plaintext-key disk persistence when a secret manager/env handle is available; safe locally permission-restricted credential file only if unavoidable.
3. Write **minimal** test result manifest, no raw Master Report or explanation narrative by default. Separate full PRIVATE response logs from redacted Git artifacts. Update historical status wording in Common Repo so original `17/17` remains visible but qualified.
4. Targeted tests: oversized persisted Agent Audit, 160k boundary; bounded completeness; error/negative statuses; same evaluationId/snapshot across Agent Audit/Explanation/Master; selective depth; no payload leak; tenant/scope checks. No broad engine rewrite.
5. Merge small PR Main, verify exact SHA CI and Vercel READY; Common Repo implementation record; do **not** claim production MCP tested from product CI alone.

**P14.1-B — real production-URL acceptance (after controlled credential preflight)**

1. Securely provision an authorized production **read-only, short-lived, least-scoped** key under legitimate admin process, NOT a dev test-mode login; record DB boundary and tenant/sandbox classification. Test `https://www.haiec.com/api/mcp` from independent external client with actual bearer; no secrets in logs.
2. `initialize`/tools/list exact versions, report:read and system:read, exact system/eval, summary + Agent Audit bounded or explicitly fallback, `haiec_explain_evaluation` executive/auditor, `haiec_get_master_report` bounded and `haiec_get_package`; include exact source-bound parity and read-only scope denial. Failure must remain a failure. Revocation and expiry readback.
3. Real KestrelVoice OAuth tenant status must be verified **separately**. The current developer environment's lack of OAuth does not prove the user's connected ChatGPT KestrelVoice account is unavailable; distinct OAuth identity/approval channel. No live SaaS write without explicit permission.
4. Capture **real** redacted scenes as test is run, chapter by operational layer with captions/VO and edited cut only when footage exists. Do not promise a recording without actual captured source.

**Exit gate:** `DEV_EXTERNAL_READ_PASS`, `PROD_EXTERNAL_READ_PASS`, `SAAS_OPERATION_PASS`, `HUMAN_APPROVAL_PASS`, `MONITOR_RECEIPT_PASS`, `RECORDING_DONE` are **independent**, not a single `LIVE_VERIFIED` badge. Mark each `NOT_RUN`/blocked individually. No customer claim of production target enforcement without installed PEP and qualified target outcome.
