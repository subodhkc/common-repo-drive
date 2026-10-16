# KestrelVoice × HAIEC: SaaS action-to-effect and assurance adoption plan

**Decision brief, 2026-10-16 — RESEARCH / IMPLEMENTATION PROPOSAL ONLY.** No changes to KestrelVoice, HAIEC, manufacturing or LogSense. Snapshot KestrelVoice `subodhkc/AI-Service-Call-Agent-` Main `aafce1d15e6a3f9dbc69307c57c95eb03993eca7`; HAIEC Main `75ffb329cb75b35280456884299bfd16a9e7a0e8`. Concurrency: another Devin session owns production; check HEADs before any engineering work.

## Product decision

**KestrelVoice is the service operator. HAIEC is an independently implemented, deterministic evidence-and-consequence assurance layer for the service and, optionally, its tenant workspaces.** HAIEC does not replace KestrelVoice's application logic, billing, Twilio, agent models, MCP OAuth, Supabase, Modal, Vercel, workflow runner or guardrails. This is a **technical separation**, not a corporate-independent audit or certification claim; both products are related and a formal third-party independent assessment would require an outside assessor.

**Preferred adoption:** Platform-wide HAIEC baseline operated by KestrelVoice; optional per-tenant assurance dashboard/enhancement that customers can enable at onboarding or later. Existing customers should be able to attach their tenant to HAIEC without redeploying the agent, migrating the database or moving infrastructure to AWS. Onboarding should be low friction and non-blocking for tenants that decline the optional add-on. Keep KestrelVoice platform safety controls mandatory regardless of tier.

## 1. Complete first-pass action-family coverage map

This is a **source-anchored first pass**, not a proven exhaustive callgraph. A single wrapper cannot cover all lanes.

| Lane and product scope | Representative source owner | Request→decision→effect boundaries and primary risk | HAIEC integration |
| --- | --- | --- | --- |
| Inbound phone AI / tool calls / hybrid | `hvac_agent/app/routers/twilio_gather.py`; `hybrid_conference.py`; `hvac_agent/app/utils/tool_handlers.py` | Caller intent / confirmation, tool invocation, action dispatcher OR direct calendar/lead operation, target effect | Capture call-scoped tenant/agent/tool/call SID/args digest and approved scope; intercept one target-bound consequential operation |
| Action dispatcher & booking/CRM | `hvac_agent/app/services/action_dispatcher.py`; `calendar_manager.py`; `crm_integration.py` | Request→calendar event or CRM row; `status=success` sometimes means callback acknowledgment with `db_success=false`; `ACTION_DISPATCHED` log not committed effect | Pilot target: `demo_scheduling` to sandbox calendar; source observation+guard before commit+readback; preserve UNKNOWN |
| Dashboard/API actions bypassing dispatcher | `frontend/app/api/appointments/book/route.ts`; `hvac_agent/app/routers/extraction_booking.py`; `frontend/app/api/calls/intelligence/actions/[actionId]/status/route.ts` | Direct Supabase writes, booking actions, status mutation or proxy requests have independent auth & idempotency requirements | Record bypass/alternative paths, assess server ownership and source of tenant claim; route future coverage to reusable target-facing control, not just action_dispatcher |
| MCP (ChatGPT, other clients) | `frontend/app/api/mcp/v2/route.ts`, `frontend/lib/mcp/server.ts`, `write-tools.ts`, `confirm.ts`, `workflow-enable-tools.ts` | OAuth identity / mcp:read,mcp:write; preview creates durable approval proposal, human approves exact diff, apply persists config; **configuration approval is not agent runtime authorization** | Observe tool identity, client, tenant, change digest, approval issuer, applied row & effect; reuse existing Kestrel approvals, no duplicate HAIEC approval in front of a write |
| Background automations / CRM / email / webhook / SMS | `hvac_agent/app/services/workflow_runner.py`; `action_engine.py`; `transactional_sms.py` | Event source→template scope→async/retries/dedupe→webhook/SMS/email/CRM effect; scheduled/retry duplication risk | Capture separate trigger, queued, attempted, committed/delivered/failed receipts; source continuity and idempotency across retries |
| Website chat / catalog / agent settings | Kestrel MCP capability catalog `frontend/lib/mcp/capabilities.ts`; `frontend/lib/mcp/business-info-tools.ts`, dashboard config | User-provided/website/RAG content→agent configuration / profile→later model behavior; does not necessarily cause external side effects at configuration time | Analyze prompt/data/tool capability exposure and configuration changes; govern actual external actions separately |
| Human telephony / transfers, voicemail, orders, personal assistance | `hvac_agent/app/services/operator_command_executor.py`; `command_guardrail.py`; `hvac_agent/app/routers/personal_guard/actions.py`; restaurant tools | Call transfer, order, custom action, notification, possible payment workflow; consequences and target owners differ | Prioritize transfer destination allowlist and order commitment as later per-effect profiles; do not claim pilot proves these paths |
| Platform lifecycle: provisioning, billing, subscription, call modes, E911 | `frontend/app/api/billing/auto-recharge/route.ts`, `frontend/app/api/ai-setup/deploy/route.ts`, phone provisioning APIs | Operator/tenant changes, payments, phone numbers, billing, deployment readiness, and regulatory contact data | Kestrel platform-owned operational governance/security audit. Tenant assurance may show limited readiness proofs with consent but must not mutate global provider controls |
| Tenant custom dashboards / metrics and previews | `frontend/lib/mcp/dashboard-tools.ts` | Metrics query, PII/billing role gating, exact schema validated, human-approved publish/unpublish | Monitor security of template publication, tenant-specific read rights, and provenance; not an arbitrary HTML/SQL renderer |

**Current catalog:** `frontend/lib/mcp/capabilities.ts` enumerated 37 capability records at snapshot: 29 `available`, 3 `requires_setup`, 3 `planned`, 2 `unsupported`. These are catalog declarations, not proof of every tenant's entitlement or live delivery. Examples explicitly not to advertise as live: outbound campaigns (planned), BYOK call execution (planned), MCP purchases/charges (unsupported), call transcript/recording access via MCP (unsupported). Source supports v1/v2 endpoint distinction and no arbitrary expansion of v1 tool set.

## 2. Source-level risk/reuse findings — validation questions, NOT incidents

1. `hvac_agent/app/services/action_dispatcher.py`: error handlers may return `status:success` and `db_success:false` (acknowledgment instead of committed booking). Outer audit currently maps any non-error `status` to success. Independently qualify acknowledgment vs stored effect and correct evidence semantics in pilot.
2. `hvac_agent/app/services/confirmation_gate.py::gate_consequential_action`: returns `None` (proceed) when `call_sid` is missing; `CONFIRMATION_UNBOUND` is logged. Decide whether any consequential action may execute without an authenticated action-bound conversation context. The two-invocation handshake alone is not independent proof that a caller actually assented.
3. `frontend/app/api/calls/intelligence/actions/[actionId]/status/route.ts`: first-layer `verifyActionOwnership` checks tenant membership but does not itself compare the particular action ID to the authenticated tenant. It relies on downstream ownership; verify it really performs the bound check and the forwarding mode is appropriately authenticated.
4. `hvac_agent/app/routers/fast_actions_api.py` and `extraction_booking.py` have internal-key fallback to query/body tenant IDs. Review the internal credential authority and downstream binding; a service credential alone must not silently grant cross-tenant action rights.
5. `frontend/app/api/ai-setup/deploy/route.ts`: marks configuration deployed in database; notes that triggering Modal deploy is future work. Distinguish “marked deployed” from a verified live runtime instance and inbound real-call receipt.
6. Workflow worker `workflow_runner.py` maintains its own async/prerequisite/retry/dedupe logic. A dispatch-level guard in `action_dispatcher.py` will not mediate every workflow webhook/email/SMS side effect. Separate action family readiness is required.
7. Existing command whitelist, MCP OAuth and human approval are reusable controls; no need for a second model-based AI safety judge. Per-user MCP OAuth scope and preview do NOT prove the downstream action effect.

All require source-to-runtime confirmation and targeted security review; no exploitation, authorization bypass or customer impact has been established.

## 3. Smallest high-value live enforcement demonstration

**Choose ONE non-production Kestrel tenant, one operation: `demo_scheduling` -> calendar create -> test-calendar event readback.** No customer calls, billing, live external SMS, real bookings or sensitive recordings in the test.

Contract: `tenantId, agentId, actor/clientId, callSid/traceId if present, toolOrOperationId, targetId, canonicalArgsDigest, requestedScope, approvedScopeDigest/version, actionId/idempotencyKey, decision, decisionEvidenceRef, dispatchReceipt, targetReadbackRef, eventTime, enforcementMode`.

- **ALLOW**: approved exact request; bounded deterministic check returns allow; calendar accepts creation; event ID and readback establish the committed effect.
- **DENY**: a deliberately out-of-scope calendar/action/target is refused **before** API/DB side effects. Verify no event exists. A deny log by itself does not establish attempted target prevention.
- **UNKNOWN/HOLD**: scope missing, attempted write acknowledged with `db_success:false`, missing target readback, or unavailable evidence => no fabricated PASS or effect witness. A customer policy may permit explicit safe manual review.
- Add independent integration evidence: exact sender/receiver identity, versioned policy, dispatch event, target-side result, prior/post target state, leak/bypass checks. No HAIEC LLM as decision authority.
- **Placement tradeoff:** `action_dispatcher.py` is the shortest *single-flow* proof, but not an enterprise-wide guard. For durable coverage, identify the true commit seam in `calendar_manager.create_event` and alternative `frontend/app/api/appointments/book` as separate paths. A future shared policy enforcement point (PEP) should be invoked by **every covered consequence writer** (not every informational read); gateway-bypass checks become required acceptance. Avoid a wholesale middleware rewrite now.
- **Scope:** HAIEC reads qualified non-PII envelopes first. KestrelVoice keeps customer phone numbers, transcripts, call audio, full message contents and credentials in its tenant systems by default.

## 4. SaaS authority separation: platform-admin vs customer-admin vs end user

| Role / trust domain | Must own / be allowed | Must NOT acquire |
| --- | --- | --- |
| KestrelVoice platform security/admin | Fleet controls: baseline threat policies, infrastructure security, provider keys, Twilio/Modal/Vercel/Stripe operation, regional data controls, platform security alerting, deployment integrity, source health, cross-tenant *aggregated* assurance governance | Free access to customer call/transcript content; blanket ability to bypass tenant policy without logged, restricted emergency access |
| KestrelVoice tenant owner/admin | Enable optional HAIEC workspace, approve their AI agent operating envelope, select protected action classes, assign reviewers, authorize evidence sharing, review scoped receipts, use tenant reports, revoke connector | Change global KestrelVoice safety floor, view other tenants, configure other customers' HAIEC evidence or authorize provider-wide emergency operations |
| Tenant delegated staff / reviewer | Read assigned cases and scoped outcomes; approve actions only when explicitly delegated and not requester, report or appeal | Billing, ownership, Kestrel platform control, cross-tenant data, self-approve prohibited operations |
| Visitor/caller/website chat participant | Provide booking/contact requests, consent to services, receive confirmations | Admin or HAIEC configuration, delegated policy authoring, cross-customer data |
| HAIEC service principal / HAIEC tenant reviewer | Scoped, explicit permitted source reads, source-qualified policy/coverage analysis, exact evaluation and receipts; isolated HAIEC customer partition by Kestrel tenant | Kestrel production super-admin keys, raw transcripts by default, open-ended execute-anything permission, unilateral tenant approvals |
| Kestrel internal workload (Modal / webhook / job) | Signed short-lived service identity, derived tenant context, target-bound task intent and replay protection | Trust arbitrary caller-supplied tenant_id from a generic master key or bypass human approval where required |

**Policy inheritance:** `effectiveConstraints = Kestrel mandatory platform baseline ∩ permitted tenant envelope ∩ exact delegated action scope`. Tenant policies can narrow (or choose added requirements), not weaken platform mandatory safety. Record separate operator versus customer policy owners and the decision provenance. Support managed service exceptions only through an audited, time-bound procedure.

**Authentication posture:** platform admins use hardened employee identities and step-up for global control changes; tenant owners use existing Kestrel authentication + per-org role, MFA/passkey on sensitive changes; HAIEC connectors use tenant-scoped OAuth/service credentials; no provider-master token in a customer-facing browser. Kestrel MFA/HAIEC reviewer identity is not the same as caller spoken consent.

## 5. HAIEC customer adoption lifecycle — no forced migration/redeployment

**Baseline for every Kestrel tenant** (provider-operated; no HAIEC tenant activation required):
- Existing Kestrel controls plus provider-side AI change governance and qualifying aggregate evidence where legitimately collected. Kestrel may show a public transparent security/assurance methodology page **with date, tested product/version, coverage and limitations**, not a blanket badge guaranteeing all customer agents safe.
- Provider HAIEC inventory must use permitted operational metadata only. Default no raw call data sharing.

**Optional tenant HAIEC Assurance** (enabled during onboarding or added later):
1. **Offer** at setup: “Standard KestrelVoice safeguards included. Add AI Action Assurance by HAIEC for evidence-backed monitoring, scoped decisions and reports.” Keep a later **Settings → AI Assurance** entry point. Do not block standard receptionist deploy.
2. **Preview** exact enabled sources, actions, retention and any metered/billing implications. Owner/admin accepts consent and (if applicable) a separate paid add-on.
3. **Bind** stable Kestrel tenant ↔ isolated HAIEC organization/system/agent identity with scoped credentials; each tenant/agent isolated. Instrument via publisher/adapter; no copying full customer DB, mandatory manifests or duplicated agent. Treat onboarding in Kestrel as a connection to HAIEC, not a second SaaS sign-up unless independent ownership desired.
4. **Assess** current configuration and available past qualified evidence; compute independent HAIEC disposition with explicit UNKNOWN and no assumed historical completeness. Past events pre-instrumentation remain out of scope; avoid retroactive “all clear”.
5. **Choose mode:** `OBSERVE` (default optional), `GOVERNED` (request/reviewer/approval workflow), `ENFORCE` only after exact target hook preflight and deny/readback drill. These are **product operating modes to design**, not current persisted Kestrel/HAIEC enums. Read-only mode does not block.
6. **Manage/revoke** tenant consent, reduce scope and detach connector; archive/restrict evidence under stated policy. Tenant disabling optional HAIEC does not disable Kestrel mandatory guards or platform control.
7. **Expose** per-tenant dashboard and report deep-links inside Kestrel via token-scoped server-side launch; prefer least-privilege delegated session and Kestrel UX continuity, not sharing super-admin credentials. Display source age, coverage, action proof and human queue.

**Trust positioning:**
- KestrelVoice to buyer: **“Your AI receptionist, with evidence-backed oversight for consequential actions.”**
- HAIEC as add-on: **“See what your AI is permitted to do, which actions occurred, and what the available evidence proves.”**
- Avoid “certified”, “independently audited”, “all calls protected” or “blocked” when only policy configured or telemetry observed. Corporate relationship between HAIEC and Kestrel should not be hidden.
- Distinguish labels: **Platform controls documented** / **Tenant monitoring connected** / **Action evaluated** / **Enforcement verified for [specific operation and target]**. No blanket green trust seal.
- Auditable evidence, exact timestamps, limits and missing-source disclosures are a stronger differentiator than generic “safe AI” claims.
- Kestrel branding remains primary; HAIEC appears as “AI Action Assurance powered by HAIEC” in settings, case view, and tenant exports. Optional upgrade can be included in enterprise tier or as a paid add-on, not a compulsory conversion gate.

## 6. Bounded research / build work-order (no code in this session)

| Work item | Objective | Exit criterion |
| --- | --- | --- |
| R1. Action/surface census | Map six+ action families including all 37 current capability statuses and consumer types; enumerate direct writers, independent workers and MCP v1/v2 | Caller → auth → guard → target → effect owner matrix, including alternative/bypass paths and current unsupported features |
| R2. SaaS trust & identity map | Model Kestrel platform admin, tenant owner, delegated reviewer, end user, HAIEC service, internal workload and contractor | Tenant identity/consent, explicit access diagram and least-privilege sharing fields |
| R3. Confirmation/approval review | Verify call SID gate behavior, proof of actual assent, MCP durable approval, direct-action authorizations, conditional deployment flags | Small prioritized security risk register, not a new LLM guard |
| R4. Effect truth | Distinguish accepted/acknowledged vs attempted vs committed vs delivered; identify exact calendar/event IDs, webhook/SMS receipts and failure modes | Minimal versioned evidence envelope and no false SUCCESS evidence |
| R5. PEP seam and bypass analysis | Compare `action_dispatcher` pilot vs calendar-manager commit seam vs direct Next API, workflow runner and SMS | One safe pilot PEP choice plus explicit uncovered paths; future adapters only as justified |
| R6. Pilot and adoption contract | Three outcomes (allow, deny, unknown); selectable observe/govern/enforce UX, offboarding/retention | Approved sandbox, no production customer side-effects, exact claim/receipt criteria |
| Devin (later) | Implement narrowly one sandbox action, target receipt and UI transparency | Reproducible allow/deny/unknown with no silent alternate path in *pilot scope* |

**Effort priority:** R1–R5 first; only then authorize a real test tenant/target and minimal PEP implementation. Complete TM Forum and manufacturing materials remain separate supporting evidence/simulation, not deployed Kestrel control proof.

## References
- KestrelVoice source: https://github.com/subodhkc/AI-Service-Call-Agent- (private, authorized read-only source)
- HAIEC: https://github.com/subodhkc/haiec-website
- OWASP LLM Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- MCP transport authorization (current official spec): https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/authorization/index.mdx

**No production edit, connector provisioning, code test or HAIEC verdict generated by this document.**
