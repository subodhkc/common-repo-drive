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
