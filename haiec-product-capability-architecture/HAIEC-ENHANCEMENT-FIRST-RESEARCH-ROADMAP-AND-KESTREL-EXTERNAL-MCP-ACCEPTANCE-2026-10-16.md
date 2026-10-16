# HAIEC Enhancement-First Roadmap and External KestrelVoice MCP Acceptance Design

**Date:** 2026-10-16  
**Decision status:** RESEARCH / PLANNING / HANDOFF; **NO TEST EXECUTION AND NO PRODUCTION CODE CHANGE BY THIS WORKSTREAM**.  
**Planning home:** `subodhkc/common-repo-drive`. Implementation source: `subodhkc/haiec-website`, independent Kestrel source: `subodhkc/AI-Service-Call-Agent-`.  
**Observed HAIEC Main:** `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`, including manufacturing Sprint 25 PR #2221. **PR #2220 is open/unmerged**, based on older Main and should be reconciled by its separate owner. **PR #2217 draft** is not a platform-security release dependency. Kestrel Main reference `aafce1d15e6a3f9dbc69307c57c95eb03993eca7`. Refresh all refs before execution.

## 0. Executive decision

**First enhance HAIEC. Then execute one independently sourced, recorded, tenant-scoped acceptance journey using a newly created KestrelVoice tenant.** No further synthetic-engine expansion, massive test suite, or live Kestrel test is requested now.

HAIEC must demonstrate its whole enterprise assurance offering rather than being reduced to the manufacturing demo or a single action-control test. Preserve:
- **Three product pillars:** Understand; Assure; Govern & Operate.
- **Six selectable jobs:** Discover; Evaluate; Authorize; Monitor; Protect; Verify. They are **not** six mandatory sequential onboarding steps.
- **Five evidence planes:** Requested; Policy Authorized; Effectively Granted; Code Capable; Observed. Do not collapse missing evidence into `No`, `PASS` or implicit `ALLOW`.
- **Independent facts:** qualified evidence, deterministic DAI/evaluation, operating policy, human deployment decision, operational guard state, target action and U6 verification are **different records**.
- **Separate owners:** HAIEC owns canonical evidence qualification/verdicts; external producer/Kestrel owns execution and native protections; shared planning repo owns research; external test workspace owns black-box acceptance artifacts.
- **Reuse foundations**, no duplicate platform assurance engines, collectors, decision databases, policy interpreters, SaaS voice agents or agent builders.

The final result should be a customer-visible HAIEC workflow with truthful actionable gaps and a reproducible evidence package, **not** another static showcase.

## 1. Enhancement sequence — implementation before external test

### E0 — Concurrent-work integration and source-truth gate (RESEARCH / COORDINATION FIRST)

**Objective:** prevent conflicting Devin work and prevent release claims based on unmerged code.
- Verify current HAIEC Main, active PR ownership and overlapping touched files. Keep existing Sprint 25 manufacturing implementation as its own source/demo lane.
- Track [HAIEC PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) as the active product-truth/security correction: tenant-bound Kill Switch, simulated legacy path quarantine, and protected/monitoring claim qualification. Its current head is **not** Main and its CI previously had lint/new-violations failures; do not assume newer merges fixed them.
- Confirm which previously planned UX/read models, evidence APIs, tenant guards, dashboards, and source adapters already shipped at new Main; mark `SOURCE_PRESENT`, `CONNECTED`, `RELEASED`, `EXTERNALLY_VERIFIED` separately.
- Refresh the common repository's 16-workflow availability crosswalk, 87-entry curated capability matrix and 21-item issue register without turning them into three independent registries.
- Fix stale or unproven customer claims in the actual owner implementation, not by relabeling unknown evidence as unsupported.
- **Exit:** one mutually exclusive code-owner plan; exact source SHAs; remediation/release dependencies. No claim that source review is runtime proof.

### E1 — Goal-first, tenant-aware Capability Availability (HIGHEST CUSTOMER-UX LEVERAGE)

**Objective:** one supported customer entry point per legitimate job.
- Compose existing `lib/mcp/capability-guide.ts`, `lib/mcp/tool-registry.ts`, `lib/ai-inventory/system-next-action.ts`, `lib/ai-inventory/next-action-access.ts` and scope/entitlement from canonical auth owners. No second capability registry or alternate verdict engine.
- For a given organization, system, caller and requested goal, display the concrete UI/API/MCP route **only if callable**, and why it is not callable otherwise.
- Distinguish `not supported`, `not included in plan`, `insufficient role/key scope`, `not connected`, `source unavailable`, `evidence missing`, `rule register only`, `evaluation not run`, `draft policy`, and `not applied at target`.
- An ordinary developer may start with an authorized repository. A compliance user may start with supported evidence. An operator may start with runtime telemetry, without prerequisite repository scan. A tenant may deploy an agent without first completing every HAIEC capability.
- **Exit (implementation contract):** six representative persona workflows and all 16 priority entries have one accurate next step/availability reason, referencing actual source and registered MCP name. No new prerequisites by default.

### E2 — Frictionless, trustable external-source intake and MCP guidance

**Objective:** a new SaaS customer can use HAIEC with legitimate sources, without rebuilding their platform.
- Compose existing source/consent/identity preflight, SDK/CLI ingestion, connected integrations, evidence-envelope contract and `lib/mcp/guided-assurance.ts`.
- For Kestrel later, support **customer-consented source inspection** (e.g. authorized repository or qualified bounded bundle) and optionally a tenant-scoped telemetry producer; do not require source-code migration or an AWS environment.
- Provide a minimum-information next-action prompt: existing connector if present, authorized GitHub/source integration, supported upload/CLI, then **optional** explicit owner declaration if no machine source exists. Declarations remain drafts, not verified grants/effects.
- Expose exact source provenance, asset/agent identity, technical reachability, scan capabilities, limits and unknowns as a coherent interface. Scope all source reads to the authenticated HAIEC organization.
- **Exit:** source qualification and human consent can be explained and completed without assuming private repository access, cloud credentials, or a mandatory manifest.

### E3 — Identity, delegation and privileged operations boundary

**Objective:** enterprise operators can trust the platform's authorization model.
- Server-bound organization/system resource ownership, permission and scope checks for API/UI/MCP, with unchanged canonical tool access controls. Protect privileged actions under an authenticated session, per-operation authority, anti-CSRF/Origin checks, auditable step-up where warranted; static HAIEC API keys remain service/MCP credentials, **not** browser super-admin tokens.
- Record the distinction between human review, machine-issued service credential, agent execution identity, target account and exact delegated action. OAuth connection by itself never proves permission to mutate a consequential target.
- Keep Kill Switch “configured/state-changed/applied/target-denied” labels truthful; no universal remote-stop claim until exact target wiring exists. PR #2220 implementation and deployment belong to its current code owner.
- **Exit:** one clear privilege map covering platform operator, HAIEC customer tenant, Kestrel test tenant, external producer, assigned reviewer, API key and delegated system action; correct fail-safe decisions per consequential action.

### E4 — Evidence and telemetry source continuity

**Objective:** real agent/action evidence can flow into HAIEC without new vendor-specific backends.
- Reuse `lib/evidence/adapters/otlp-receiver.ts`, `lib/assurance/monitoring-read-model.ts`, existing evidence ingestion, source binder, qualification and source-health owners. Prefer OTel/HTTP adapters and existing vendor logs over a new SIEM.
- Define an **external evidence contract**: producer/source version; organization/system/agent/tenant mapping; trace/call/action/attempt IDs; tool and resource; requested, policy-authorized, effectively granted, code-capable and observed facts where legitimately available; bounded redacted argument digest; approval/version/expiry; outcome/witness; event time/ingestion time/freshness; coverage and limitation.
- Separate **source configured / received / qualified / correlated / evaluated / enforcement observed / target effect verified**. Telemetry can reveal unfamiliar tools, anomalous action paths, volume/token/drift or missing expected source; anomaly is a triage signal, not proof of a forbidden mutation.
- For Kestrel, plan telemetry from **voice tool calls, chat, MCP request/approval/apply, direct booking APIs, CRM, workflow workers, provider callback/notifications, tenant admins and spend/phone events**, with actual writer/bypass map. Use metadata-only by default; no audio/transcript/PII copy without specific consent.
- Add stable source-health and freshness UI, alert linking to qualified evidence, and privacy/retention limits. Do not infer “all agents monitored”.
- **Exit:** one defined, interoperable event/receipt schema and source-health lifecycle; observed cases remain UNKNOWN where effect witness is missing.

### E5 — Governance-to-protection proof, not protection-by-UI

**Objective:** connect existing decisions and controls without inventing a new authority engine.
- Reuse versioned operating envelopes, signed/request-digested human decisions, guardrail decision persistence, Kestrel's own deterministic guardrails and target-side local enforcement points.
- Show statuses separately: `assurance outcome`, `approved operating envelope`, `human decision`, `requested dispatch`, `native gate outcome`, `provider acceptance`, `target committed/readback`. A permitted user can still produce unknown effects; approved deployment is not runtime authority.
- Define **generic action adapter contract** for external SaaS/agent runtimes, not AWS-specific and not requiring Kestrel/HAIEC co-deployment; each provider remains responsible for its actual enforcement. Offline/compiled local policies should not make live-call latency depend on HAIEC availability.
- Native Kestrel mandatory baseline must continue if optional HAIEC is disabled. Optional tenant overlays may tighten, never relax platform protection.
- **Exit:** implementer has clear per-operation scope, exact target, optional enforcement and receipt requirements, and explicit `NOT_WIRED` state where no control is present.

### E6 — Complete customer workspace and report chain

**Objective:** one convincing HAIEC product, not fragmented reports.
- Compose existing AI System workspace, consequence/delta views, U5 evaluations, applicable control evidence, U6 packages/passports, source status, human decisions and guardrail/monitoring status.
- Show six goals as independent callable actions; source preflight, agent capabilities, requested/approved/delegated authority, evaluations, action traces, alerts, monitoring, approval decisions and change history have contextual deep links.
- Read-only reports: **what HAIEC observed; what is unknown; what was approved; what was prevented by which target; what changed; what was remediated after deployment**. Preserve evaluated snapshot vs current code/source vs synthetic replay as separate immutable contexts.
- Embed qualified before/after remediation history: issue/control, source revision, correction PR/release, deployed version, target proof, residual gaps. Never rewrite prior historical verdicts.
- **Exit:** six customer narratives can be followed end-to-end through UI and MCP API with accurate next actions, no forced questionnaire or empty “safe” states.

### E7 — Distribution and external-client readiness (last enhancement, BEFORE black-box acceptance)

**Objective:** support **real customers outside HAIEC source checkout**, including Kestrel tenant.
- Confirm actual MCP tool names from the **deployed server** with `tools/list`/tool registry; do **not** author invented aliases. Confirm plan/role/tool-specific scopes; preserve resource ownership.
- Current HAIEC `/api/mcp` uses organization-scoped static bearer **HAIEC API keys**; it does **not** currently claim OAuth. Design thin OAuth/resource-discovery interoperability for specific clients if needed, without replacing the token/tenant authority or the MCP registry. Review API-token issuance/revocation and secure out-of-band storage.
- Ensure independent remote MCP client can discover goals, preflight, register/connect supported source, run qualified assessment, read results and U6 output with **bounded existing tools**. Privileged human deployment decisions stay in human session/API until scoped MCP mutation is explicitly authorized.
- Publish one customer guide requiring **no import** from HAIEC internal packages for the black-box acceptance harness.
- **Exit:** written remote MCP contract, auth/scopes/onboarding sequence and screenshot-ready customer journey, without claiming that tests have run.

**Sequencing:** E0 → (E1 + E2) → (E3 + E4) → E5 → E6 → E7 → **ONLY THEN T1 external acceptance**. Some E1–E6 can be done in parallel by non-overlapping code owners, but tenant/security invariants are not optional. Focused checks required to safely merge security changes are part of implementing a fix; they are **not** the deferred full external acceptance campaign.

## 2. Further research that can be completed before code or tests

| Study | Precise question | Deliverable / scope boundary |
| --- | --- | --- |
| R1 — Current source census and collisions | Which proposed services/route/tool names exist at current HAIEC Main and are currently owned by the separate Devin session? | SHA-anchored capability/owner/no-duplicate matrix |
| R2 — External Kestrel access path | What minimum Kestrel tenant metadata or legitimately authorized repo/bundle can HAIEC analyze, given separated SaaS environments? | Exact access and consent design, no auto-access to private Kestrel source |
| R3 — Credential/tenant binding | How should a Kestrel tenant map to a HAIEC organization/system while provider fleet admins remain isolated? | Issuer/tenant/actor/RBAC/delegation model, session vs machine key |
| R4 — Existing UI/MCP/API parity | Which of the six jobs have customer-usable entry points, actual tool IDs, plan/role gates and missing source evidence? | Existing 16-row reconciliation refreshed |
| R5 — Telemetry producer and effect semantics | Where does each producer attest to request, dispatch, commit, provider acceptance, delivery or unknown? | Small versioned evidence schema and freshness/correlation rules |
| R6 — Target/local guard contract | Which action classes can use native deterministic enforcement and where must HAIEC abstain from block claims? | Target-specific policy and effect receipt interface, no universal kill fiction |
| R7 — Report and remediated-history contract | How to combine current vs historical evaluations, changed sources, qualified incidents and real repairs? | One case/report storyboard with evidence references and clear methodology |
| R8 — Distribution/client portability | How can a clean remote MCP client authenticate to production safely, without workspace/local imports? | User-oriented connection handbook + tool discovery protocol |
| R9 — Security/privacy/capture architecture | How to capture screen-by-screen journey without secrets, phone numbers, tokens, transcript PII or customer records? | Redaction, secure artifact storage, reviewer approval, screenshot rules |
| R10 — Adoption and competitive differentiation | Which customer promises are differentiating versus implemented externally by native vendor tools? | Own/integrate/reuse/defer and 3-tier customer value, exact proof threshold |

**Research priority:** R1–R6 first, then R7–R9. R10 should refine claims after evidence and user journeys, not trigger a new engine backlog.

## 3. Deferred T1: KestrelVoice test tenant via HAIEC MCP from a separate directory

**This is an instruction package for a FUTURE Devin acceptance run AFTER E0–E7 implementation/merge/deploy, NOT a request to run it now.**

### T1A — Create authorized non-production Kestrel tenant and HAIEC customer context
- Responsible Devin/Kestrel product owner provisions **one real, isolated non-production KestrelVoice tenant** using sanctioned Kestrel UI/admin operations with explicit test-owner permission. No real customer data, billing, purchased number or outbound call unless separately approved.
- Create tenant owner/admin and, only if needed, a restricted ordinary member/reviewer identity; use role separation. Keep credentials in a trusted secret manager, never in Devin prompt, Git, MCP tool args, screenshot, file names or stdout.
- Create or select a separately authorized HAIEC **test organization/system** with scoped tenant-linked API key. HAIEC MCP requires a HAIEC identity/token **in addition to** the Kestrel tenant identity: Kestrel login ≠ HAIEC MCP authentication. Map Kestrel tenant resource and HAIEC organization/system as explicit consented identifiers, not by matching display names.
- If any previously shared judge/test credentials were present in chat or logs, rotate before reuse and issue new limited-scope credentials.
- Grant HAIEC only supported and needed Kestrel source visibility (e.g., an expressly consented GitHub repo/source bundle, vetted API metadata, or later a bounded telemetry feed). Do not infer HAIEC can open Kestrel's private code just because both products are owned by the same company.

### T1B — Independent black-box workspace OUTSIDE the HAIEC source directory
- Suggested isolated work path: `/workspace/haiec-mcp-external-acceptance/` or an independent **private test repository**, subject to Devin's environment and permissions. **NOT** `haiec-website/tests`, `haiec-website/scripts`, Kestrel's test subdirectory, or any local HAIEC import.
- Use only deployed **remote** HAIEC MCP endpoint and authenticated customer-facing HAIEC dashboard/API permitted for the test account. No direct DB writes, no invoking private internal HAIEC modules, no executing source-internal fixtures to make the test pass.
- Discover protocol, tool names and required scopes from real `initialize`/`tools/list` and `haiec` goal discovery as actually deployed. Only invoke registered methods. A registration or capability assertion is not an operational result.
- Plan non-production source actions first; defer actual calendar/CRM/voice enforcement proof to a separately approved safe fixture and only if the local Kestrel enforcement integration is present.

### T1C — Record the user journey as a sequential replayable case
1. Versioned test charter: purpose, source revisions, deployment version, consent, exact actor/roles and exclusions.
2. Kestrel tenant onboarding and actual tenant-scoped role view; screenshot with synthetic fields.
3. Kestrel agent configured and effective/deployed state (do not treat a DB “deployed” flag as runtime proof).
4. HAIEC customer login/org/system and selected Discover/Evaluate goal.
5. Remote MCP client connection and **redacted** `tools/list` result; capture tool availability and scopes, never bearer string.
6. Source consent/identity/binder preflight, selected source scope and limitations.
7. Qualified static source or supported bounded evidence ingestion; capture source digest and true producer.
8. Deterministic HAIEC assessment and consequence/DAI/evidence-plane findings; capture real evaluation ID.
9. Human approval/operating policy views where legitimately supported; distinguish absent/pending/approved.
10. Monitoring source-health view and alert if genuinely wired; otherwise record `NOT_CONNECTED` / `NO_SOURCE` and the user-facing next step.
11. Guardrail/protection view showing only actual configured/evaluated/applied proof; do not create a fictitious blocked outcome.
12. Applicable control report, current vs historic, U6/canonical report and verification link.
13. Evidence change/delta after an approved source revision or strictly versioned fixture; preserve before and after.
14. Logout/revoke/detach or clean tenant test resources without impacting other users.
15. Produce **one customer narrative report** and **one machine-readable evidence manifest**, including unverified coverage.

### T1D — Capture requirements and final evidence deliverables
- Record **every material user step**, including alternate decisions, validation messages, missing-evidence next actions and error states, not only attractive dashboard screenshots.
- Capture **screen shots** at each major boundary (setup, OAuth/session consent, remote MCP tool discovery, source preflight, evaluation, authority, monitoring, optional protection, controls, verification, cleanup). Use timestamped numbered filenames `001-tenant-setup.png` etc. Store original and **redacted public-safe** copies separately. No snapshots with tokens, secret headers, real personal information, recordings/transcripts, billing details or privileged Kestrel internals.
- Record tool operations as redacted structured events: `step_id`, `actor_class`, `tenant_ref`, `haiec_org_ref`, `tool_name`, `request_digest`, `response_digest`, `result_code`, `started_at`, `completed_at`, `source_sha`, `deployment_id`, `evaluation_id`, `evidence_ref`, `screenshot_ids`, `qualification`, `redactions`. **Never retain API keys or full confidential request/response bodies.**
- Artifact structure suggested:
  ```text
  external-mcp-acceptance/
    charter.md
    tools-discovered.redacted.json
    steps.redacted.jsonl
    source-and-deployment-manifest.json
    screenshots/redacted/001-...png
    screenshots/private-originals/ (restricted separately; no public Git)
    evidence-map.csv
    user-journey-report.md
    limitations-and-next-actions.md
  ```
- The **external workspace** owns raw operation traces/screenshot originals and is access controlled. Common-repo-drive receives only approved, sanitized planning and summary assets unless its GitHub visibility and allowed-reader policy are deliberately changed and verified first.
- Use a deterministic step/evidence ID and replay order; screenshots provide a user story, not engine proof; bind each material UI claim to qualified MCP tool response/evaluation/effect receipt where available.
- Later, Devin can use browser automation for full-page screenshots and explicit step capture as supported by their environment, while avoiding authenticated session/state leakage.
- Release gate for T1: E0–E7 relevant changes merged/deployed and owner-approved, safe Kestrel tenant and separately scoped HAIEC credentials, independent workspace, consented source, privacy plan and trusted artifact destination. No automatic test if any mandatory gate is missing.

## 4. Customer-facing outcome and trust positioning

The customer should see **HAIEC's full product** through a real SaaS context: discovery, static evidence assessment, consequence and delegated authority reasoning, required approvals, monitoring readiness, scoped protection status and verifiable reports. Do **not** portray the Kestrel pilot as only a manufacturing/MAA correction or equate dashboard playback with an external live operation.

Kestrel's mandatory security floor remains Kestrel's responsibility. Optional HAIEC tenant assurance can be added during Kestrel onboarding or later, with explicit consent and unchanged deployment, and eventually include Observe/Govern/Enforce only where wired/verified. HAIEC neither proxies all caller traffic nor becomes another voice vendor.

A responsible report says: “HAIEC assessed [exact scope] using [source+version]; produced [evaluated findings]; observed [available action effects]; verified [exact report/receipt], and did not assess [gaps].” “Secured”, “monitored”, “enforced” and “remediated” need their own source-backed proof.

## 5. Confidentiality and common-repo-drive visibility

**Observed GitHub repository visibility:** `common-repo-drive` is **PUBLIC** (verified 2026-10-16), whereas HAIEC and KestrelVoice source repos are **PRIVATE**. User authorization to include private findings here does **not** make those findings private from the public. Therefore:
- The currently public common repo may hold architectural control requirements, sanitized risk summaries, severity/ownership labels and selected approved report screenshots.
- Route-specific unpatched vulnerabilities, exploit conditions, private customer identities, operational access details, confidential source excerpts and raw evidence **should not be added while visibility is public**.
- If the user wants this same repository to be an internal security archive, first use GitHub repository settings to **change its visibility to Private**, verify intended collaborators, and assess existing forks/clones/history. Changing visibility cannot retract material previously publicly cloned. A separate private `KestrelVoice/HAIEC-security` repository or restricted tracker is preferable when selected common docs remain public.
- Even in private GitHub, **never store live credentials, bearer tokens, raw voice/transcript PII or production customer secrets**. Keep such data in an authorized encrypted evidence store, with linkable redacted manifests and retention rules.

**No test account created, no credentials acquired, no source repo changed and no external test invoked during preparation of this plan.**
