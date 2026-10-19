# P14 — Real-Client Operational Acceptance & Evidence Capture

> **2026-10-18 INDEPENDENT CORRECTION / superseding qualification, original historical 17/17 script result preserved below:** [P14 source-evidence audit, confirmed Agent Audit isError false positive and P14.1 protected follow-up](P14-INDEPENDENT-POST-RUN-ACCEPTANCE-CORRECTIONS-AND-P14.1-PRODUCTION-MCP-PREFLIGHT-2026-10-18.md). Verified HAIEC #2265 exact SHA **07fbb4f4be3b7f6098580e26c97eee896990c6d7**, authenticated Vercel production **dpl_GvWnSXGJQMQoJDXXRXC7FH5VLBnn** READY, primary CI SUCCESS. Dev server/production-derived code HTTP round-trip is real, but **not production URL**. In committed 297,499-character JSON evidence, `agentAudit` is literally `RESULT_TOO_LARGE: the full artifact exceeds the MCP result budget...` from `toToolResult` with `isError:true`, but P14 client only checked `status===200 && !!data`, so its recorded Agent Audit PASS is **a confirmed semantic false positive**. Other tool result assertions vary in strictness. The 17/17 is hence historical PASS of 17 script predicates, not valid all-green semantic acceptance; no independent rerun. Persisted JSON contains full bounded Master Report and executive/auditor explanation packets from the PRIVATE test org; cannot call it merely 'redacted manifest' or treat as publicly shareable. No credential-shaped HAIEC key found in regex scan, but full private-business evidence is still in git history. Dev test login + shared Neon DB need explicit environment isolation verification before another mint, and key revocations still need independent authorized DB readback. No actual Kestrel OAuth operation, human decision, production URL, public U6, PEP effect or narrated video. Accept working bounded summary/packet/private receipt as DEV_SOURCE_VERIFIED with qualified semantic checks; P14.1 focused bounded Agent Audit, proper MCP isError assertions, data-minimized evidence and production preflight follows. Preserve prior record and add this note rather than silently changing historic log.


**Date:** 2026-10-19. **Workstream:** operational acceptance + recording preparation (NOT a feature sprint — zero product code changed). **Deployed basis:** HAIEC `Main` `d7f8870081768cb30cf2a83568f2e94e37e63aa7` (UX-P13 merge; Vercel production `7163493401` SUCCESS, independent Vercel ref `dpl_C8oL589vJtGTiZ5kQ3ztmRYNQdpA` READY). **Plan source:** `UX-P13-INDEPENDENT-ACCEPTANCE-AND-REAL-CLIENT-MCP-KESTRELVOICE-LAYERED-OPERATIONS-RECORDING-PLAN-2026-10-18.md`.

---

## 1. Scope and environment

| Item | Value | Qualification |
|---|---|---|
| Code under test | `Main` `d7f88700` — `app/api/mcp/route.ts`, `lib/mcp/server.ts`, `lib/mcp/ide-tools.ts` | Exact merged production codebase |
| Execution host | `next dev` on `localhost:3015`, `NODE_ENV=development`, `PLAYWRIGHT_TEST=true` | Dev server, **not** the Vercel production URL — production `/api/mcp` round-trip is `NOT_RUN` |
| Tenant dataset | Shared Neon Postgres — the same seeded tenant data the acceptance sessions and dashboard use | Persisted real rows, not fixtures |
| Org | `10231b6b-313a-44ec-83bc-058d8af6a6c6` (test org; `test-user-id` = owner, plus 2 owner + 1 viewer members) | Private acceptance record — redact in public export |
| AI System | `6fb713f8-fe13-4d99-86c9-7c5d06d28f99` — "Kestrel — AI Service Call Agent" | Bound source asset `AI-Service-Call-Agent- (Kestrel)` → `SOURCE_REPOSITORY` → `github.com/subodhkc/ai-service-call-agent-` |
| Frozen evaluation | `5fae3f52-63d2-44b2-8eaa-e57eb398f7a1:assurance:1.1` — REVIEW, snapshotAt `2026-09-18T02:33:31.116Z`, scan `scan_D4fZN47mD8St` | RUN_NOT_EXECUTED — existing frozen evaluation reused per plan §4 layer 03 |
| U6 receipt | Package `20aDwnRjDfZ-9KJ7mOEybNeBqoX-EWoo`, `PRIVATE`, `selection: CANONICAL_REPRESENTATIVE`, `matchingPackageCount: 1` | Never published — public verification not applicable |
| MCP credential | `haiec_test_` sandbox key, `keyType: read-only`, scopes `scan:read,report:read,system:read,source:read`, 7-day expiry, minted via canonical `POST /api/keys/create` | **Revoked after the run** (see §7 credential note) |
| External client | `artifacts/_p14-mcp-client.js` — standalone Node JSON-RPC client over `POST /api/mcp` (Streamable HTTP, SSE-decoded `data:` frames) | Real HTTP round-trip — not a mocked tool call, not an in-process import |

## 2. Credential preflight (required inventory step)

- `.env.local` `HAIEC_API_KEY`/`HAIEC_API_BASE_URL` is a **legacy Modal/FastAPI credential** — fails `haiec_(live|test)_` format, not a valid HAIEC key. Treated as unusable and unrelated to MCP.
- `api_keys` table inventory: prior `read-only`/`assurance-agent` keys for this org and judge orgs are all **expired or inactive** (latest `tmf-2026-*` keys expired 2026-10-13/17). No reusable live credential existed → a **new** least-privileged sandbox key was provisioned for this run and revoked afterwards.
- Key mint path honored: org-admin session → `POST /api/keys/create` `{isSandbox:true, keyType:'read-only'}` — server-derived scope list; plaintext returned once, written to a chmod-600 temp file only.

## 3. External MCP read-only acceptance — `LIVE_VERIFIED` (17/17)

Evidence artifact: `artifacts/_p14-evidence.json` (redacted structured results; no secrets).

| # | Check | Result |
|---|---|---|
| N-auth | No Bearer → `401 UNAUTHORIZED`; invalid key → `401` | PASS |
| L1 | `initialize` → server `haiec-assurance`; `tools/list` → **61 registered tools**; all plan-named read tools present | PASS |
| L2 | `haiec_preflight` → tenant `organizationId` bound to `10231b6b`; `haiec_list_systems` → 5 systems, Kestrel system present | PASS |
| L3 | `haiec_list_evaluations{aiSystemId}` → **22 evaluations**, exact target row carries `receipt.state: PRIVATE_RECEIPT` + `packageId` | PASS |
| L4 | `haiec_get_summary` → `disposition: REVIEW`, `evaluationSnapshotAt 2026-09-18T02:33:31.116Z`, `repositoryCommitSha` present | PASS |
| L4 | `haiec_get_agent_audit` → canonical audit payload | PASS |
| L4 | `haiec_explain_evaluation` → `packet` with `schemaVersion`, `explanationPolicyVersion`, `timeBasis`, `disposition`, `nextActions`, `receipt`, `artifacts`, `completeness`, `limitations` — **both** `executive` and `auditor` depth | PASS |
| L4 | `haiec_get_master_report` bounded → `master-report-product-1.0.0`, `timeBasis: EVALUATED_SNAPSHOT`, `disposition: REVIEW`, `links.html` present | PASS |
| L8 | `haiec_get_package{evaluationId}` → `receiptState: PRIVATE_RECEIPT`, `selection: CANONICAL_REPRESENTATIVE`, `publicationState: PRIVATE`, `publicVerificationId: null`, semantic digests | PASS |
| N1 | `haiec_run_assurance` under read-only key → `INSUFFICIENT_SCOPE … "scan:create"` (scope gate fires, no run consumed) | PASS |
| N2 | `haiec_list_evaluations` on foreign-org system `SYS-DYN412` → `AI_SYSTEM_NOT_FOUND` (tenant fail-closed) | PASS |
| N3 | `haiec_get_summary` on bogus evaluationId → `RESOURCE_NOT_FOUND` | PASS |
| N4 | `haiec_get_package` on evaluation `d660fcd6-…` → `receiptState: NO_RECEIPT` with honest truth text | PASS |

### UI ⇄ MCP parity — `LIVE_VERIFIED`

Same frozen evaluation read through the authenticated UI route `GET /api/inventory/systems/{id}/reports?evaluationId=` returned `receiptState: PRIVATE_RECEIPT` and `representativePackageId: 20aDwnRjDfZ-9KJ7mOEybNeBqoX-EWoo` — **identical** to the MCP `haiec_get_package` result and the persisted `assurance_packages` row (`publicationState: PRIVATE`). Disposition `REVIEW` consistent across `get_summary`, `get_master_report`, `explain_evaluation`, and the DB. No discrepancy recorded.

## 4. Layer-by-layer status

| Layer | Status | Basis |
|---|---|---|
| 00 Scope & identities | `LIVE_VERIFIED` | Exact org/system/evaluation/key pinned above; run manifest = `_p14-evidence.json` |
| 01 Understand / connect | `SOURCE_VERIFIED` | Kestrel system bound to `SOURCE_REPOSITORY` asset `github.com/subodhkc/ai-service-call-agent-`. No live SaaS connector — GitHub source binding is the honest identity; no uploaded-evidence substitution claimed |
| 02 Authority & capability | `LIVE_VERIFIED` | 61-tool registry; per-tool `requiredScope` gate demonstrated (write denied); `haiec_capability_guide` present |
| 03 Deterministic evaluation | `RUN_NOT_EXECUTED` | No new run authorized; existing frozen REVIEW evaluation used — per plan fallback |
| 04 Explain via external MCP | `LIVE_VERIFIED` | §3 — full read path incl. `haiec_explain_evaluation` at two depths |
| 05 Govern / human decision | `NO_LIVE_DECISION` | `deployment_decisions`, `runtime_manual_approvals` = 0 rows for the org — no pending/recorded human decision to replay; honest absence, not simulated |
| 06 Operate / KestrelVoice | `BLOCKED_CREDENTIAL_PRECONDITION` / `NOT_WIRED` | No independently authorized KestrelVoice OAuth test tenant or receptionist config available in this environment; no write attempted or fabricated |
| 07 Monitor / protect | `NOT_OBSERVED` / `NOT_WIRED` | 0 request logs, 0 `runtime_monitoring_alerts`, 0 `system_alerts`; no installed PEP/target enforcement — kill-switch remains `NOT_WIRED` (no installed target), not a defect |
| 08 Verify & publish | `PARTIAL` / `LIVE_VERIFIED` for PRIVATE path | PRIVATE receipt parity MCP⇄UI⇄DB verified; public verification `NOT_RUN` — receipt never published, no `publicVerificationId` exists to check |
| 09 After-action | `LIVE_VERIFIED` | Known frontier recorded below |

## 5. Discrepancies and defects found

**None blocking.** One tooling note (not a product defect): the MCP endpoint answers `responseMode: 'json'` requests with SSE-framed `event: message` envelopes — a client must parse `data:` frames; this is consistent with the Streamable HTTP transport contract and handled in the acceptance client.

## 6. Recording storyboard (for the narrated/edited deliverable — capture NOT_YET_PERFORMED)

| Scene | Layer | Real material to capture | Truth overlay |
|---|---|---|---|
| S00 | Scope | Terminal: git SHA `d7f88700`, key mint (blurred), org/system IDs | "Test org · sandbox read-only key · live tenant data" |
| S01 | Connect | Dashboard → AI Systems → Kestrel system → bound GitHub source asset | "Source = repository binding · no live SaaS connector claimed" |
| S02 | Capability | `tools/list` (61 tools) + capability guide | "Read-only key: write tools present but scope-denied" |
| S03 | Evaluate | Evaluations list → exact `5fae3f52…` REVIEW row | "Frozen evaluation 2026-09-18 · RUN_NOT_EXECUTED" |
| S04 | Explain | MCP client pane: preflight → list_evaluations → get_summary → agent_audit → explain (exec→auditor) → master_report | "Same frozen record, agent-readable packet" |
| S05 | Govern | My Work + deployment-decisions surface | "No live decision in test org — NO_LIVE_DECISION, not simulated" |
| S06 | Operate | — | `BLOCKED_CREDENTIAL_PRECONDITION` — skip or show explicit card |
| S07 | Monitor | Monitoring workspace; empty alert history | "NOT_OBSERVED · no installed PEP — kill-switch NOT_WIRED" |
| S08 | Verify | Receipt section on evaluation page + `haiec_get_package` + public verify attempt | "PRIVATE_RECEIPT — publish/verify is an owner action" |
| S09 | Frontier | This manifest's NOT_RUN table | "What acceptance did not establish" |

**Deliverables owed when footage exists:** master cut (layer chapters), executive cut (only S01/S03/S04/S08 material), VTT/SRT captions, redacted evidence manifest, limitations appendix. **Do not fabricate** — if credentialed prod round-trip is unavailable at recording time, storyboard + this manifest stand alone and the video claim stays `NOT_RUN`.

## 7. NOT_RUN / blocked register

- **Production Vercel `/api/mcp` round-trip** — `NOT_RUN`. Requires a fresh read-only key minted inside production and a client hitting `https://www.haiec.com/api/mcp` (host allow-list already covers it; endpoint would authenticate the same key if the tenant DB is shared — unverified).
- **KestrelVoice OAuth operational write** — `BLOCKED_CREDENTIAL_PRECONDITION`. No authorized test-tenant OAuth account available; nothing simulated.
- **Human decision replay** — `NO_LIVE_DECISION` (no persisted decisions/approvals in org).
- **PUBLIC/REVOKED receipt paths** — `NOT_RUN` (no published or revoked package exists in the org; PRIVATE path verified).
- **PEP / kill-switch target effect** — `NOT_WIRED` (no installed policy enforcement point).
- **Recording/narrated footage** — `NOT_RUN` (storyboard ready; capture requires an authorized session + screen recorder).
- **Viewer-key denial matrix** — `NOT_RUN` (viewer membership exists — `417acde8-…`; a second read-only test could exercise membership-vs-scope denial, deferred).
- **Credential incident (transparent record):** the first minted key's plaintext was briefly emitted into session output by a script bug. It was revoked immediately via the canonical route (`keyId 667a7c14-…`), a fresh key minted (`keyId db356f83-…`), used for acceptance, then revoked. No committed artifacts contain secret material; `artifacts/_p14-key.tmp` deleted. Both keys listed in `api_keys` as inactive.

## 8. Artifacts

- `artifacts/_p14-evidence.json` — redacted run manifest (tool registry, tool outputs, call statuses)
- `artifacts/_p14-mcp-client.js` — external JSON-RPC acceptance client (reusable; reads key from temp file)
- `artifacts/_p14-mint-key.js` / `_p14-revoke.js` — canonical key lifecycle helpers (no plaintext to stdout)

**Status summary:** `LIVE_VERIFIED` external MCP read acceptance (17/17 + UI parity) on the merged production codebase; `NOT_RUN` production-URL round-trip, KestrelVoice OAuth write, human-decision replay, public/revoked receipt paths, PEP effect, and recorded footage. No P1 defect surfaced — no corrective PR required.
