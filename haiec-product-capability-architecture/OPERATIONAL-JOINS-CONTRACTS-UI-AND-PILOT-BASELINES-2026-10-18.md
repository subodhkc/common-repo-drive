# HAIEC Operational Joins: Evidence Contracts, UI Placement, Reuse and Pilot Baselines

**Date:** 2026-10-18. **State:** architecture / acceptance baseline, NOT deployment certification. **Primary gap register:** [E5.2 OP-01..OP-20](E5.2-CUSTOM-INTEGRATION-POSITIONING-AND-OPERATIONS-GAP-REGISTER-2026-10-18.md). **Existing nonproduction reference:** [Action Mediation Skeleton](reference-implementations/action-mediation-skeleton/README.md). **P10 source-truth owner:** [Independent P09 acceptance / P10 handoff](UX-P09-INDEPENDENT-ACCEPTANCE-AND-UX-P10-MONITORING-HANDOFF-2026-10-18.md).

## 1. Decision and simple mental model

The HAIEC product is NOT missing 20 standalone engines. It has *between-capability assurance obligations*: prove that the next operation got the same authoritative actor, target, time, decision, scope and qualified evidence. There are 20 tracked joins; the 16 highlighted by the founder are included in the existing OP-01..OP-20 register. Reuse and close the joins; do not invent a competing policy engine, approval engine, telemetry product, generic gateway or new menu.

**Three pillars:** Understand → Assure → Govern & Operate. **Six independently selectable jobs:** Discover, Evaluate, Authorize, Monitor, Protect, Verify. **Five evidence planes:** Requested → Policy Authorized → Effectively Granted → Code Capable → Observed. The five planes compare distinct evidence; they are NOT a required sequential processing pipeline. The operations can begin from any supported source and must show gaps/unknowns without false green state.

**Simple example:** HAIEC discovers an agent can update a greeting; evaluation compares this to approved scope; a human may permit a bounded change; customer-controlled middleware actually blocks or dispatches; provider acknowledgment and authenticated readback determine whether the greeting changed; Monitoring links the event to an incident/owner if necessary; Verify records exactly what was proven. A HAIEC approval by itself does **not** stop a provider API request.

## 2. Canonical operational graph (conditional, not a mandatory waterfall)

~~~text
ENTER: Discover / Evaluate / Authorize / Monitor / Protect / Verify
Source identity + health → Evidence admission/provenance → Five-plane comparison
             ↘                                         ↘
       capability/target mapping                  finding + owner/change
             ↓                                         ↓
      exact target PEP ← approved policy envelope + scoped human decisions
             ↓
Trusted pre-dispatch: identity, scope, policy digest, effect fingerprint, expiry
             ├─ DENY / INDETERMINATE → no target dispatch + evidence
             ├─ HOLD → nonexecutable My Work packet → independent HUMAN decision
             │          → fresh resubmission and full revalidation, never auto-replay
             └─ ALLOW → durable atomic claim → target-owned dispatch
                                                   ↓
             target ACK ≠ confirmed effect → independent readback/effect evidence
                                                   ↓
              Monitoring → incident/owner/escalation → remediation → fresh Verify
                                                   ↓
     drift/revocation/kill → on-target containment → gated recovery/requalification
Cross-cutting: org/tenant; agent + delegated principal; resource; time; policy version;
operation fingerprint; attempts; receipts; availability; degraded operation; UI/API/MCP.
~~~

The graph describes target-state obligations, not delivered customer protection. Generic HOLD/production PEP/customer-native readback/atomic claim are not integrated. Native enforcement registry is empty in production (nonproduction fixture only). E5.2 is Common Repo source scaffold with 12 local synthetic cases. P09 is accepted; P10 existing Monitoring UX is the next primary workstream.

## 3. Per-join disposition and UI ownership

Legend: **C** = define shared contract or mapping now; **V** = independent target-specific verification; **M** = P10 presentation/monitoring work; **L** = later scoped engineering. Priorities indicate *gate to make a claim*, not permission to disrupt P10.

| Existing OP | User-identified transition / missing link | Next concrete baseline or proof | Where visible in existing UI | Track |
|---|---|---|---|---|
| OP-01 | Discover → Protect: exact action, target and interception | Operation/PEP inventory; prove all consequential paths routed, including background/retry/direct API | System Action Path / Connections / Protect detail | C,V |
| OP-02 | Source → Evidence: authenticated producer + freshness | Producer attestation, credential/issuer/audience, source clock, qualification state and quarantine | Monitoring > Sources / Evidence | C,M |
| OP-03 | Evaluate → Authorize: finding to accountable policy change | Finding→change proposal→owner→version/digest→fresh evaluation link, no automatic policy edit | System Controls / My Work / Change | C,L |
| OP-04 | Policy → Execution: approved version installed in target | Target policy install ACK, digest/version, expiry, revocation and propagation check | System Controls & Operations / Connections | C,V |
| OP-05 | Human approval → Execution: safe HOLD and resubmission | Exact action fingerprint, scope and conditions; nonexecuting HOLD; fresh authorization after human decision | My Work packet → Action execution proof | C,V |
| OP-06 | DAI → Target permissions: actual effective grant | Provider account, workload/service principal, resource-specific grant, delegation, credential effective scope | System Authority / Evidence planes | C,V |
| OP-07 | Allow/Deny → Target: true enforcement and bypass control | Customer native PEP/host adapter, blocked-call test, direct-route deny and egress/credential restrictions | Protect / Kill Switch / Enforcement state | V |
| OP-08 | Dispatch → Outcome: once-only effect handling | Cross-worker atomic reservation, request digest conflict, timeout UNKNOWN, provider idempotency capability | Operation proof / Investigations | C,V |
| OP-09 | Outcome → independent target receipt (separate extra join) | Provider-authenticated ACK and exact-resource readback; effect qualifier; preserve UNKNOWN | Operation detail / Evidence / Verify | C,V |
| OP-10 | Monitor → Incident: correlated incident case | Qualified signal → finding/control/system mapping; dedup, source window and owner; do not invent case ID | /monitoring > Alerts/history / response link | C,M |
| OP-11 | Alert → human response (separate extra join) | Delivery vs opened vs acknowledged vs action recorded; existing UCP response contract, actual join only | /monitoring/alerts/history / My Work | C,M |
| OP-12 | Response → Verify: remediation and closure | Exact changed asset/policy, owner signoff, fresh retest, closure condition and qualified evidence | Controls / Investigations / Verify & Reports | C,L |
| OP-13 | Drift → Governance: invalidate affected decisions | Changed-policy/target/capability dependency map; targeted stale marking + revoke propagation | /monitoring/differentials / Change / My Work | C,L,V |
| OP-14 | Emergency stop → Recovery: actual containment | Each reachable target path blocked; in-flight handling; clearance, fresh approval, compensation if effect committed | Kill Switch / Protect / Recovery proof | C,V |
| OP-15 | Execution → Verification/report (extra join) | Exact outcome evidence identity, as-of basis, independent-effect tier and report-binding; no invented new evaluation | Evidence / Master Report / Verification | C,L |
| OP-16 | Delegation → cross-system effect | Issuer→delegate→target narrowing; linked exact signed identity/attempt IDs, target ACK, revocation | System Action/Authority Map / Investigations | C,V |
| OP-17 | UI → REST → MCP parity | Per-operation permission+entitlement+org+API+registered MCP+effect availability matrix; no synthetic write tool | Contextual action links / Connections / MCP capability guide | C,L |
| OP-18 | Provider usage → budget prevention | Provider billing basis vs provisional tokens; atomic reservation+settlement and concurrent limit tests | Monitoring / Usage & Budgets (existing owner) | C,V |
| OP-19 | Integration → Operations: lifecycle | Connection owner, health, credential rotation, scoped permission change, failure, offboarding and deletion verification | Connections Center / Monitoring Sources | C,L |
| OP-20 | Offline/degraded → safe behavior (extra join) | Per-consequential-action fail mode, policy max age, no silent success, alert on untrusted decision/receipt | Protect readiness / Monitoring degraded | C,V |

**UI policy:** do not add 20 navigation items, a new Workflow Engine page, global readiness score or fake action buttons. Put a *small linked proof/status projection* on the actual System Action Path/Authority, My Work, Controls, Connections, Monitoring, Kill Switch and Verification surfaces. Drill down to exact source record with qualified state: CONNECTED / NO_SIGNAL / STALE / UNKNOWN; DECISION_ONLY / TARGET_NOT_WIRED / DISPATCH_ATTEMPTED / EFFECT_UNVERIFIED / EFFECT_VERIFIED. These labels are presentation proposals, not persistence enum changes.

**MCP policy:** share server-side read entitlement and canonical queries; an assistant may explain, preflight, request an authorized user's confirmation, or deep-link to a human-only page. Do not turn human approval into an MCP auto-approve tool. Do not mint an absent action API, proxy call, arbitrary policy write or monitoring-start command. Persisted data, qualified UNKNOWN and tenant rules must agree across UI, REST and actual registered MCP tools.

## 4. Baseline templates to author before adapters

### A. Integration Capability Profile (one per target/connector)

- target system / tenant / environment / resource namespace / owner; provider and supported operation IDs
- authenticating workload principal and delegated actor; token issuer/audience; effective target role, resource grant, readback scopes
- actual PEP location (customer gateway, host middleware, native IAM), mandatory-route coverage, bypass inventory and upstream direct credentials
- approved policy version/digest; distribution method; target install acknowledgment; offline TTL/fail mode; revocation check
- source producer identity, clock/freshness, coverage window, signal qualification and quarantine rule
- effects: reversible or irreversible, idempotency support, provider request reference, provider event/query for independent readback
- operational owner, SLO candidate (not published guarantee), key rotation, failure mode, offboarding/compensation
- evidence and risk: known / qualified / unknown, links and owner; customer consent boundary

### B. Exact Action / Authorization / Dispatch Contract

**Identity:** tenant_id, ai_system_id, environment_id, agent_id, authenticated_actor_id, delegated_principal_chain, target_account_id, resource_id, operation_id.

**Action join:** correlation_id, logical_action_id, attempt_id (unique for each retry), canonical_action_digest (cover all consequential fields and target), trace context, requested_at, validated_at. Never rely on an agent-provided actor or arbitrary string digest as authenticated proof.

**Decision join:** policy_bundle_id + digest + validity, operating_envelope_id, actual human_decision_id with actor/conditions/expiry/revocation, trusted_decision_issuer, target-effective permissions, decision=ALLOW/DENY/HOLD/INDETERMINATE.

**Effect join:** atomic_claim_id and reservation outcome, native_pep_id, target_policy_digest, target_dispatch_id, provider_ack_id, callback/source attestation, readback_observation_id + as-of timestamp, result tier.

**Security:** system/org cross-check, source freshness, fail-closed unavailable authorizer, one-time claim, payload collision refusal, no dispatch on HOLD/DENY/unknown, fresh request after human approval, redaction of tokens and sensitive payloads. A provider ACK alone is not independent business-effect proof.

### C. Outcome / Evidence Receipt

Record *separate* claims: (1) authorization decision made; (2) PEP mediation verified; (3) dispatch attempted; (4) provider ACK accepted; (5) target effect independently read back; (6) follow-up re-evaluation/recovery complete. Each has source, authority, timestamp, scope, event ID, digest, qualification, and evidence pointer. Preserve explicit UNKNOWN / NOT_ASSESSED / NOT_WIRED; no pseudo-single VERIFIED bool.

For transport normalization, CloudEvents 1.0 id/source/type/time can be a **wire envelope only**, with HAIEC operation/subject and evidence linkage extensions. OTel execute_tool spans are **telemetry**, not native authorization or business-effect receipts. Neither standard by itself authenticates the producer.

### D. Response / Remediation / Recovery Case

Persist correlation_id, evidence_id, exact system/control/target, case owner, notification attempts/delivery/ACK separately, severity basis, allowed response action, approver (if needed), containment attempt and native proof, remedy/change digest, retest evaluation identity, verified closure basis, reopen/escalation logic. Never infer remediation from alert delivery or an incident label.

### E. UI/API/MCP Operation Parity Row

One row per existing customer operation: objective → canonical backend owner → current route/REST → existing *registered* MCP read/tool name or NOT_AVAILABLE → required org+role+entitlement+source+target PEP → mutability and human-only decision → outcomes + verification tier → degraded behavior → next eligible action. Version by source SHA and target integration; no synthetic tools.

## 5. Prioritized adoption: reuse first

| When | Scope | Exit |
|---|---|---|
| Now, docs / P10-safe | Publish this join contract and profile/receipt/parity templates; attach OP IDs and source owners; P10 shows qualified freshness, signals, alert delivery vs ACK, and NOT_WIRED enforcement | No new backend and no false ACTIVE/protected state |
| Next bounded S0/S1 fixture | Apply the existing E5.2 contract to **one** reversible, explicitly authorized QA action; connect one real durable claim, deny, HOLD and fresh resubmit, dispatch/readback; preserve HAIEC authority | Replayable deny/HOLD/ALLOW/timeout/revocation/changed digest/direct-bypass negatives |
| Later opt-in S2 target | Customer-owned PEP or native gateway chosen by customer; target credential restricted; installed policy digest and independent readback; scope verified across UI/API/MCP | Scoped pilot proven for named action/target/environment only |
| Subsequent | Incident response joins, drift invalidation, recovery, usage atomic budgets, cross-system delegation and connector lifecycle | Each has its own target-qualified acceptance; no product-wide promotion |

**Suggested fixture:** a nonproduction KestrelVoice QA greeting-change operation *only after QA consent and the independent external-MCP E7 client acceptance preflight*. Show (a) denied scope no mutation, (b) HOLD no mutation, (c) human-reviewed exact action and fresh re-submission, (d) a provider-side authoritative readback, (e) revoked/changed request still denied. This must not silently change a live receptionist or use exposed credentials. Record separate raw private proof and edited layer-by-layer narration for future demo; never frame fixture as production customer protection. Avoid making this fixture a dependency for P10.

## 6. Vendor interoperability research (do not rebuild)

- **Native PEP options:** [OPA + Envoy External Authorization](https://www.openpolicyagent.org/docs/envoy) for controlled HTTP ingress; [AWS Bedrock AgentCore Policy](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-core-concepts.html) with Gateway/Cedar and actual IAM roles; customer IAM/authorization system or existing SDK middleware. Research bypass routes, pre-dispatch host coverage, policy digests, all effects vs only gateway-mediated effects and targeted failure modes. **Pick one target per pilot.**
- **MCP:** [2026-07-28 Authorization Security Considerations](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/authorization/security-considerations.mdx) for token audience, protected-resource authorization and no token passthrough; transport authorization is not resource/action authorization.
- **Signals:** [OpenTelemetry GenAI execute-tool convention](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md) for trace join; convention under development, not default certified proof; avoid raw prompt or secret retention. [CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) can normalize source event envelopes.
- **Build/reuse boundary:** Use provider-native PEP, IAM, authorization, observability and notification. HAIEC adds deterministic cross-plane comparison, evidence admission, human decision binding, qualified consequence, reusable contract and report. Do not clone OPA, AgentCore, Envoy, OTel, incident ticketing or billing systems.

## 7. P10 owner-safe UI handoff

P10 is an existing read-only truth/clarity project at **/monitoring**. Source: [P10 handoff](UX-P09-INDEPENDENT-ACCEPTANCE-AND-UX-P10-MONITORING-HANDOFF-2026-10-18.md). It should show four distinct tiers: passive evidence, explicitly authorized active probe, evaluated/configured guardrail, actually installed customer PEP. Current code-level display risks: stale historical receipt may render CONFIGURED_ACTIVE; "Last updated" reflects refresh *request*, not completed collection. Alert delivery does not prove an incident owner/ACK. One P10 PR, tests scoped to source freshness/unknown/read limits/org access, Main merge and exact-SHA deployment. E5.2 live adapter, P09 follow-up, P11 Reports, P12 Usage and P13 shell remain separate workstreams.

## 8. Stop/go acceptance for any protective promise

No phrase "blocks/holds this customer action" until **all** have evidence: target operation and actor/permissions identified; every relevant execution route intercepted or explicitly bounded; target PEP actually deployed and digest verified; human decision tied to *that* exact request; fail-closed if decision unavailable; no HOLD auto-execution; multiworker retry/claim tested; targeted bypass negatives; provider ACK and independent effect/readback as needed; drift/kill/recover boundaries; owner and incidents; tenant-safe UI/REST/MCP parity. If any is absent, report NOT_WIRED / OUT_OF_SCOPE / NOT_VERIFIED rather than projecting customer protection.

**Do not promote** 12 synthetic E5.2 tests, an approved U6 decision packet, an MCP tool listing, a successful alert send, a C16 provisional budget decision or a polished UI to an equivalent real target proof.
