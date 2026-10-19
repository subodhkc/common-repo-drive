# KestrelVoice → HAIEC external-customer MCP acceptance — master operations record
**Initiated:** 2026-10-19. **Status:** PLANNED / NOT_RUN. **Test operator:** Devin in KestrelVoice repo/workspace; NO HAIEC repository or internal database access during primary customer acceptance.
**HAIEC target:** https://www.haiec.com/api/mcp (production Streamable HTTP MCP). **Authorized HAIEC organization:** KestrelVoice Assurance Test. **Target system:** KestrelVoice QA Receptionist, pending confirmed customer-visible identity via `haiec_preflight` and `haiec_list_systems`.
**Supporting playbook:** [MCP operational playbook v2](HAIEC-MCP-USER-CONSULTANT-OPERATIONAL-PLAYBOOK-AND-ACTION-COVERAGE-2026-10-19.md).
**Phase 2 (later, separate comparison):** HAIEC IDE/internal developer-workspace assessment to compare available functionality, detect customer-facing MCP/API parity gaps, and debug source owner behavior. Its deeper access may NOT be silently imported into the external-customer results.

## Primary acceptance principle
Use ONLY external HAIEC MCP, published/authorized API and legitimate customer-visible dashboard access. KestrelVoice Devin may inspect its OWN source and QA tenant. It may package/expose qualified code/evidence through supported HAIEC source intake, but must not substitute its own source interpretation or a test harness assertion for a HAIEC evaluation.
**Never copy API keys, Authorization headers, local secret-file paths, raw ACK links/tokens, customer payload secrets or runtime credentials into this public Common Repo.** Use Devin's protected credentials/secret management. Key purpose/scope should be recorded generically, with identifiers redacted. This is a live production endpoint: authorized, reversible QA only; no default broad mutation.

## Master operator orchestration (prompt to author and run when ready)
A single **supervisory customer-facing Devin instruction** may select and execute the appropriate steps automatically:
1. **Preflight:** discover MCP tools, validate tenant/system identity + actual scopes and capability guide (`haiec_preflight`, `haiec_capability_guide`, `haiec_list_systems`).
2. **Discover/source:** list/bind/verify authorized Kestrel QA source or supported local/CI evidence. Inspect agent/tool/action inventory and source coverage; do not claim source connection from listing alone.
3. **Evaluate:** execute one fresh authorized, engine-enabled HAIEC assurance run via `haiec_run_assurance` (canonical orchestration); inspect engine execution/skips, exact evaluation and U5/U6/Agent Audit/DAI/report. Do not reuse earlier engine-disabled REVIEW as fresh proof.
4. **Observe/monitor:** qualify available telemetry binder/source health. Exercise only independently approved, reversible KestrelVoice QA action(s); bring **genuine** accepted runtime evidence through supported HAIEC ingestion, distinguish observed action vs independently target-verified effect. Do not fabricate OTLP.
5. **Govern/respond:** inspect actual finding, open case only with permitted exact system/subject binding, human ACK/approvals done by authorized human, record remediation and new retest, compare exact evaluation/receipt only when supported. No auto-approval, no self-ACK, no invented closure.
6. **Handover:** redact/capture sources, errors and evidence, produce executive + technical master result, step replay, bounded coverage and unknowns; log UX/API/MCP gaps for later internal HAIEC comparison.

**No single 'scan everything' tool exists.** This is an operator orchestration over currently exposed MCP calls. `haiec_run_assurance` orchestrates its canonical authorized run but does not implicitly install telemetry, create a human approval or enforce a target.

## Required persistent prompt and action journal — append after EVERY actual Kestrel Devin prompt
Record **verbatim operator/Devin user prompt** with sequential ID; never invent missing steps. For each:
- **Record ID / timestamp / session/workspace link:** e.g. `KV-EXT-001`; timestamp UTC and local.
- **Exact prompt text (redacted secrets only):** full copy of what was actually sent, including follow-up prompts and edits.
- **Objective / phase / authorized target:** system/source/branch/QA action; why.
- **MCP / API operations actually invoked:** tool name, sanitized arguments, scope, run/evaluation IDs, response status, exact returned evidence/report link; distinguish `NOT_CALLED` from `FAILED`.
- **Result and proof classification:** `LIVE_VERIFIED` / `SOURCE_VERIFIED` / `TEST_VERIFIED` / `SIMULATED` / `NOT_ASSESSED` / `FAILED` / `BLOCKED`. No claim of real target effect from a synthetic fixture.
- **Human-gate details:** person/role (nonsensitive), explicit consent/approval request and state, no token.
- **Screenshots/video and narration cue:** actual time/URL/step, no sensitive material; planned vs recorded vs edited.
- **Gap / issue owner:** whether Kestrel source/integration, HAIEC public capability, caller permissions, UI or source limitation. Severity and suggested narrow fix.
- **Next action:** one recommended next supported action; stop at unapproved consequential operations.

### Journal entry 000 — setup (not a Devin prompt)
**2026-10-19:** User chose KestrelVoice-side external customer acceptance using HAIEC production MCP, without HAIEC repository access. Plans to supply an existing org-bound, 11-scope `ide-full` credential from a local protected file. Credential value NOT provided to Common Repo; key is production, not sandbox; expires 2027-01-17. **Access, actual authorization, tool list, source link, runs, evidence and recording remain NOT_RUN.** The secret must be transferred only to Devin's private secret store, not through ChatGPT, a PR, test output, or prompts. Use narrow/read-only initial actions; obtain explicit approval for authorized write/run/effect steps.

## Two test populations, kept independent
- **External Kestrel workspace / public MCP:** authoritative customer usability/availability findings, onboarding friction, proof and discovered actions; every failure preserved.
- **Later internal HAIEC IDE workspace:** developer capability reconciliation, code-level root cause and remediation; **never retroactively upgrade** external customer acceptance results.

## Evidence/recording deliverables
Master journal; exact prompt transcripts; redacted MCP tool-call log; source/evaluation/receipt reference inventory; agent and action/consequence-family matrix; qualified monitoring evidence + source health; human case/decision timeline; issues and before/after external replay; narrator script per Understand → Assure → Govern & Operate step; edited video with citations to real screen capture; secrets removed. Synthetic inserts are clearly labeled.

## Readiness decision after HAIEC PR #2278 — source + Vercel verification, 2026-10-19
**Decision:** PROCEED with external KestrelVoice customer acceptance after credential configuration and non-destructive preflight; no additional broad HAIEC implementation sprint required. **This decision is not a HAIEC-in-Kestrel live test PASS.**
- [HAIEC PR #2278](https://github.com/subodhkc/haiec-website/pull/2278) merged into Main at full SHA `4d1b10a851aa538d0387b560b6c6923cdbed6747`. Production Vercel deployment `dpl_3EWsSF76ecru5PJaeFNGqzwRcrbW` is **READY**, points at exactly that SHA and aliases both `www.haiec.com` and `haiec.com`. Vercel is authoritative for deployment readiness, not confirmation of an authenticated external-customer workflow.
- Source review confirms agent-action master/detail `AgentsActionsExplorer` in SystemWorkspace, telemetry AR ingest hook plus persisted metric sample comparison, authoritative system/finding binding, no ACK URL in POST response, org response-case page, remediation + server-verified retest routes, recurrence logic, read-only MCP response-case listing. Review record: `PR2277-HARDENING-COMPLETION-RECORD-2026-10-19.md`.
- PR reports **23 focused tests**, local TypeScript and touched-file eslint clean, desktop/mobile empty-state render. TypeScript and New-Violations CI were **PENDING at merge**, not presumed PASS; live case-modal keyboard interaction remains **NOT_RUN** in authenticated/seeded context.
- Customer-only Kestrel acceptance is the next valid verification of public MCP exposure, scopes, source onboarding, actual engine selection, agent/action coverage, telemetry ingestion, approved QA behavior, user-facing case lifecycle, and report/receipt visibility. Readiness does not mean every one of those has been observed externally.
- Specific likely **evidence prerequisite** to log in acceptance: runtime detection `detf` finding-to-system binding expects producer-provided `haiec.target.id` equal to the registered HAIEC `aiSystemId` (see response-workflow route). Never fake this binding or silently remap arbitrary surface IDs. If external telemetry cannot truthfully provide it, log `SUBJECT_UNBOUND` and escalate as integration/documentation gap. Qualified source connection/consent and persisted metric windows are likewise case-specific external prerequisites.
- Target-native enforcement still **NOT_WIRED** absent a consenting customer PEP/adapter; no expectation of universal interception.
- Do not ask for a full new HAIEC feature sprint before customer test. Only production rollback/broken route/confirmed security defect would warrant an immediate platform hotfix.

### Credential decision: use a DEDICATED short-lived test key; not strictly required to connect
The existing private `ide-full` key reportedly has **11 scopes**, `isSandbox:false`, 90-day lifetime ending 2027-01-17, bound to the right KestrelVoice Assurance Test org. It should be functionally suitable for operations permitted by the server, but it is broad and long-lived. **Recommended:** mint a separate **named Kestrel-external-QA** production-environment key in the **same HAIEC test org**, with only needed scopes and short expiry (e.g. 24–72 hours, renewable); use read-only initial phase, then a separately approved run/evidence-ingest-capable scope when necessary. Single appropriately scoped short-lived key may cover both stages if key issuance is cumbersome. A different key is NOT a different org or HAIEC environment, and is not a technical prerequisite where the existing key already works. Do not transfer key via prompts, Common Repo, PR, chat or screen capture. User's local private temp file is not implicitly mounted in Devin; import via Devin protected secret facility and redact the secret at source. Rotate/revoke the test key after acceptance. Separate documented authorization gates for GitHub source consent, evidence upload, active runtime tests, and human approval are always required irrespective of scopes.

### Next evidence gates (no new Devin test yet)
1. Secret loaded in the **KestrelVoice** Devin workspace only, external MCP endpoint configured, no HAIEC repository access.
2. `haiec_preflight` proves the actual key organization, eligible scopes, supported tools, AI system and source state; compare results to earlier provisioning record rather than assuming.
3. Explicitly record which customer steps are actually possible over public MCP and which require HAIEC UI, org human, qualified Kestrel source/telemetry, or canonical UCP native result.
4. Log the **exact first master orchestration prompt and every later correction/continuation prompt** in the journal with sanitized tool calls and evidence.
5. No direct production Kestrel target mutation, secret display, or synthetic-to-live claim without separate approval.

