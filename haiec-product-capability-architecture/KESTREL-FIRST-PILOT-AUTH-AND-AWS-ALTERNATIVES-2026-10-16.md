# HAIEC pilot selection and next research — 2026-10-16

Research-only; do not edit HAIEC, KestrelVoice, manufacturing or LogSense code. Code owners continue in their separate Devin sessions.

## Decision (pilot deferred after 2026-10-16 security review)
Plan to use KestrelVoice in an isolated test tenant on its existing Vercel / Modal / Supabase stack. Do not require AWS for the first verified live action example. Reuse the TM Forum packs for forensic/delegation regressions and the manufacturing pack for full-platform synthetic demonstrations. AWS AgentCore becomes an optional second-provider interoperability proof.

## Source-supported KestrelVoice target
Inspected `subodhkc/AI-Service-Call-Agent-` Main at `aafce1d15e6a3f9dbc69307c57c95eb03993eca7`.

- `hvac_agent/app/services/action_dispatcher.py::dispatch_action` forwards `demo_scheduling` to `calendar_manager.create_event` and `crm_lead_capture` to a CRM insert. Inputs include tenant ID, call SID, trace ID, action type.
- `hvac_agent/app/services/consequential_audit.py` provides structured event logging.
- **Research concern:** dispatch exception handlers may return `status=success` with `db_success=false` and a callback acknowledgement. The outer audit currently infers success from `status != error`, which may overstate committed effects. This is a source finding, not a validated incident. Distinguish "acknowledged", "attempted", "dispatched", "committed" and "read-back verified".
- The Kestrel MCP already has a durable `preview → human approval → apply` pattern bound to tenant, actor and exact arguments (`frontend/lib/mcp/write-tools.ts`, `confirm.ts`). This is a reusable governance design example, but not proof that a calendar action is mediated.

**Preferred exact pilot:** KestrelVoice `demo_scheduling` into an isolated test calendar. Produce (1) authorized scheduled event and matching calendar ID/readback; (2) unauthorized request denied *before* calendar mutation, with no event; (3) incomplete witness or `db_success=false` that remains unknown. The second case would require a later authorized dispatcher control integration; do not claim it exists today. Use synthetic contacts and suppress outbound notifications. If calendar cannot be isolated, try sandbox Supabase CRM lead insert instead.

## Privileged operator authentication decision
Recommend HAIEC's existing authenticated organization session as the browser authorization context, using HttpOnly/Secure/SameSite cookies, CSRF controls, server-side org/system ownership, role and action scope, explicit confirmation, short-lived step-up WebAuthn/passkey for critical changes, plus audit and idempotency. No persistent privileged API keys in browsers. For service-to-service, use managed short-lived scoped workload credentials with rotation and audit. Emergency stop can be available to an explicitly authorized operator without introducing two-person latency; **recovery and reduction of protections** should require stronger confirmation and dual control when warranted. Keep authorization, control-state change and actual target-effect receipts separate.

References: https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html ; https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html

## How to get an AWS target — without migrating Kestrel
**Option A — new AWS sandbox:** Follow https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-getting-started.html to create a sample Lambda refund tool behind AgentCore Gateway with Cedar policy. Requires a test AWS account, IAM/AgentCore permissions and resource cleanup. AWS charges per use; budget first (https://aws.amazon.com/bedrock/agentcore/pricing/). No guaranteed free, preinstalled public target.

**Option B — hybrid:** AgentCore Gateway supports an **external HTTPS OpenAPI target** using a stored API key or OAuth credential. A specifically isolated Vercel test endpoint could be used without hosting Kestrel on AWS; only traffic actually passing through Gateway is covered. Sources: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-schema-openapi.html and https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-enforcement-modes.html . Engine LOG_ONLY is observation, ENFORCE with applicable ACTIVE policy is actual gateway-level mediation. Both options require an AWS account. Defer until a real-action HAIEC pilot or customer requires AWS.

## Next research workstreams (planning only)
1. **Kestrel action census** — exact callers of dispatch_action, tenant/call/trace identity, booking/CRM event lifecycle.
2. **Effect evidence quality** — committed vs acknowledged result; event/lead ID; target readback, partial failures and freshness.
3. **Authority mapping** — requested action, approved envelope, resource, scope, delegation and actors; preserve missing evidence as unknown.
4. **Security design** — interactive vs machine auth, tenant access, step-up, recovery and separation of duties.
5. **Dispatch coverage** — identify one governed operation and unmediated alternative paths, select an enforcement seam; no new policy engine.
6. **Pilot evidence contract** — exactly three cases: allow, deny, unknown; source stamps, immutable case identities and test cleanup plan.
7. **UI/MCP/API readiness** — six sample personas and existing 16-workflow inventory; avoid redundant orchestrators.
8. **Replays** — TM Forum AL0/AL1/AL2 plus nine-system manufacturing synthetic fixture are evidence demonstrations, not live effects.
9. **Standards transport** — OpenTelemetry and MCP interoperability only for concrete field gaps; no new generic tracing product.
10. **Enterprise result** — one credible business-value case/report with explicit verified versus synthetic descriptions.

**Sequence:** Do research 1–6 first. 7–10 can follow pilot viability and customer demand. No new catalogs, universal connectors, or mandated manifests.

## Decision for future Devin handoff
Pilot target: KestrelVoice sandbox `demo_scheduling`; authentication: session-backed interactive operator with step-up for higher risk; AWS: optional later benchmark. Other active Devin sessions retain exclusive code ownership. No code or AWS infrastructure was changed by this document.
