# KestrelVoice Secure SaaS Infrastructure + HAIEC Assurance: Detailed Architecture, Control and Remediation Study

**Date:** 2026-10-16  
**Disposition:** Research and engineering design, **NOT** a deployed architecture, passed audit, compliance certification, or penetration test.  
**Implementation restriction:** This session performed read-only source research. It did not test, modify, merge, deploy or provision KestrelVoice, HAIEC, TM Forum or manufacturing systems. A separate Devin/code owner will implement later.
**Source review:** Private KestrelVoice repository `subodhkc/AI-Service-Call-Agent-`, main `aafce1d15e6a3f9dbc69307c57c95eb03993eca7`; HAIEC platform Main `75ffb329cb75b35280456884299bfd16a9e7a0e8`. These are point-in-time snapshots.
**Disclosure rule:** `common-repo-drive` is **PUBLIC**; KestrelVoice code is **PRIVATE**. Accordingly this report contains defensible architecture, observed classes of control gaps, and acceptance criteria, but **does not publish exploitation conditions, private security implementation snippets, secrets, tenant identifiers or detailed private vulnerability reproductions**. Security engineers must carry restricted route-level findings in a private access-controlled tracker. Do not copy a full private security assessment into this repo.

**Catalog-to-control completeness companion:** [37-feature Kestrel security/assurance crosswalk](KESTRELVOICE-37-CAPABILITY-SECURITY-HAIEC-COVERAGE-CROSSWALK-2026-10-16.csv) covers every current catalog entry (29 available, 3 requires setup, 3 planned, 2 unsupported) with provider mandatory controls and tenant optional HAIEC handling. “Catalog-complete” is not equivalent to runtime/path-complete.

**Concurrent update notice:** During this document's authoring, HAIEC Main advanced to `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1` (Sprint 25 PR #2221). Kestrel research references its own fixed Main snapshot. No integration/runtime parity was reverified against the newer HAIEC commit. Future implementer must re-read both HEADs; no code was modified here.

## 1. Executive product decision

KestrelVoice's value proposition must be **secure, reliable AI business automation by default**. HAIEC must be a **proof-producing governance and assurance layer** embedded into the existing operating model, not a substitute for engineering fixes, native security features, or baseline tenant protection.

**Non-negotiable operating rule:** discover weakness → prioritize → repair underlying Kestrel control → measure security coverage and operating effect → attach qualified HAIEC evidence → expose current status and historical remediation in appropriate reports.

- **Mandatory platform baseline:** identity and tenant isolation; hardened MCP and API transports; webhook/telephony/payment authentication; authorization of consequential effects; secret protection; input/content isolation; fraud/cost safeguards; incident monitoring; backup and recovery; privacy, retention and audit. **Every tenant receives it**, regardless of optional HAIEC tier.
- **Provider-wide HAIEC assurance:** Kestrel security team integrates authorized metadata and operational receipts, assesses Kestrel's own AI capability paths and platform change drift. This is not dependent on individual customer purchases.
- **Tenant-specific HAIEC assurance:** optional additional observability, evidence-backed tenant reports, tailored action boundaries, human decisions and selected enforcement. May be enabled during onboarding **or later** without migration or agent redeployment where connectors/hook wiring already exists.
- **Tenant preference cannot override mandatory safeguards.** Existing policies are inherited: `effective authority = provider mandatory baseline ∩ tenant approved envelope ∩ actor-specific delegation ∩ target-side permission`. Missing inputs must never silently expand authority.
- **No blanket promises:** “secured platform”, “24/7 monitoring”, “all actions blocked”, “SOC 2 certified” or “independently audited” are not acceptable as unqualified claims without corresponding scope, independent review where applicable, deployment proof and time-bounded evidence. Marketing may describe a security architecture and validated control coverage once factual.

**Architecture stance:** Kestrel executes business operations; Kestrel controls its own security floor; HAIEC independently computes deterministic assurance from qualified facts, evaluates authority/effect gaps, tracks boundaries, and produces exact evidence/report projections. The affiliated companies' separation is *technical*, not a claim of unaffiliated third-party audit independence.

## 2. Source inventory and what is already valuable

Kestrel's code-level product capability catalog includes **37 defined entries**, comprising **29 cataloged available, 3 requires-setup, 3 planned and 2 unsupported** at the inspected revision. The catalog is a product/source assertion, **not** proof that all features are enabled for every plan, tenant or production deployment.

Review families:
1. Voice and telephony: inbound receptionist, call handling/voice choices, human transfer, sequential ring, voicemail, number acquisition/provisioning, emergency addressing, spam/abuse, call intelligence and conditional recordings.
2. Customer action effects: calendar/appointment creation and updates, lead/CRM records, restaurant ordering and other selected business workflows.
3. MCP: v1/v2 OAuth resources, tenant-bound read/write scopes, preview/approval/apply transactions, workflow enablement, source onboarding, business profile updates, dynamic approved-metric dashboard creation and tenant operational reads.
4. Async automation: event-driven workflows, SMS/email, outgoing webhooks, scheduled jobs, retries, queue and post-call action generation.
5. Admin/product lifecycle: subscription/billing/credit recharge, service and model/provider configuration, tenant membership, deployment readiness, secrets, template/catalog and observability surfaces.
6. Website chat and knowledge: scraping/intake, customer content, FAQs/RAG, business profiles, chat widget and generated configuration.

**Existing foundations to retain:** OAuth audience-bound MCP with grant scope/revocation checks; proposed changes with durable human approval; confirmed Stripe/Twilio webhook signature checking at supported paths; tenant resolution; existing role checks; call confirmation; deterministic command allowlist; operational logging/MCP request telemetry; workflow execution records and retries; spam/cost control modules; recording-consent service; service status routes and admin visibility; existing structured HAIEC evidence/OTLP and deterministic DAI/U6 owners.

**Do not rebuild:** authentication provider, existing workflow runner, billing engine, generic SIEM, Twilio abstraction, full tracing backend, RAG vendor, generic guardrail LLM judge, HAIEC core verdict engine, or separate Kestrel control catalog truth service.

## 3. First-pass execution-and-effect architecture: multiple real lanes

Kestrel has **separate** action writers, so there is no credible universal coverage by wrapping one dispatcher:

```mermaid
flowchart TB
  SOURCES[Voice / chat / MCP / dashboard / events / API clients]
  AUTH[Authenticate actor and service; resolve tenant]
  INTENT[Classify action intent + exact resource + requested scope]
  POLICY[Mandatory provider control + tenant policy + human authorization]
  GATE{Local target-bound policy enforcement point}
  TARGET[Business-effect writer / third-party provider]
  RECEIPT[Provider receipt + target readback when available]
  LOG[Redacted structured telemetry + source-health]
  HAIEC[HAIEC qualified evidence / DAI / control evaluation]
  REPORT[Customer & provider assurance views]
  SOURCES --> AUTH --> INTENT --> POLICY --> GATE
  GATE -->|Allowed| TARGET --> RECEIPT
  GATE -->|Denied or held| LOG
  AUTH --> LOG
  POLICY --> LOG
  RECEIPT --> LOG --> HAIEC --> REPORT
  ```

**Target coverage families and distinct truth conditions:**

| Consequential lane | Action outcomes to establish | Coverage question |
| --- | --- | --- |
| Voice AI booking / reservations | caller intent, exact confirmation, booking request, internal database write, external calendar readback | Do all realtime/hybrid/tool-handler and direct booking paths use the same tenant-bound authorizer? |
| Lead capture and CRM | source consent, create/update, exact tenant+record identity, downstream sync receipt | Which actions merely acknowledge a callback instead of committing a lead? |
| MCP settings and workflow operations | OAuth client/tenant, scope, exact diff, preview, owner approval, durable apply, active effective configuration | Does approval precede mutation and do alternate dashboard/API calls have equivalent server authorization? |
| Webhooks/email/SMS | requested recipient/target, validated egress destination, queue/retry/dedupe, provider acceptance, delivery receipt where available | Does the platform conflate “queued” with “delivered”? |
| Transfers/routing/call control | caller+tenant, authorized destination, provider attempt, Twilio effect and state | Can a destination be changed or applied outside the approved tenant scope? |
| Workflow runner/scheduled automation | trigger identity, tenant, template version, action preconditions, retry attempt, actual effect(s) | Are partial successes, timeouts, retries and duplicate deliveries represented separately? |
| Provider deployment and lifecycle | configured vs marked deployed vs live runtime available vs successful real inbound/callback | Are rollout/health metrics sourced from real checks and fresh evidence? |
| Billing/credit/phone provisioning | authenticated customer and provider actor, Stripe/Twilio event, idempotent ledger, provider receipt, tenant state | Can tenant users act outside their billing/operational scope? |
| RAG / website intake / agent setup | untrusted content, trusted configuration owner, tool capability policy, content/provenance digest | Can externally sourced instructions influence protected tool invocation or secret exposure? |
| Custom dashboards/reporting | authorized metric catalog, data projection, publishing approval, tenant read grants | Are billing, PII and fleet statistics properly compartmentalized? |

**Important boundary:** policy decision, a configured guard, a server-side state change, a queued notification, a provider response, and an independently verified target effect are six different observations. HAIEC must not collapse them into “protected.”

## 4. Security posture: prioritized gap CLASSES and engineering outcomes

The private source exhibits a mixture of mature security foundations, older compatibility paths and uneven enforcement/read-model behavior. This public-safe assessment records **control objectives**, not exploit instructions. The restricted engineering tracker should preserve exact file/line, impacted endpoint, condition, current source SHA, potential scope, assigned owner, and safe verification method.

| Risk area | Priority | Source-status assessment | Repair objective | HAIEC verification/report evidence |
| --- | --- | --- | --- | --- |
| Fleet/tenant administrative separation | **P0** | Multiple administrative roles and privileged maintenance operations exist; scope consistency needs review | Global jobs and fleet data require platform-level identity; tenant admins limited to their tenant | Actor/role/organization scope, approved operation, denied unauthorized request, audit record |
| Internal service identities and tenant trust | **P0** | Legacy service credentials and tenant-context propagation coexist with OAuth/JWT | Bind workload identity to explicit authorized tenant, action and route; prohibit trusting asserted tenant alone | Identity continuity across ingress/service/DB and negative scope proof |
| Voice action confirmation | **P0** | Both conversational confirmation and dispatch logic exist; coverage and missing-context handling need review | Consequential writes require deterministic approval/confirmation predicates or a safe hold; no model inference of assent | Bound caller/action digest, consent mode, confirmation receipt, outcome |
| Effect outcome semantics | **P0** | Acknowledgment, accepted request, execution and committed effect have separate sources | Fix status mapping; no successful effect event without matching target record, mark partial/pending | Reconciled requested → dispatched → target-committed → readback chain |
| External webhook destinations | **P0** | Configurable tenant URLs and webhook deliveries exist | HTTPS public-address egress policy, DNS/redirect checks, endpoint signatures, key rotation, tenant authorization | Destination classification, rejected unsafe endpoint, delivery and retry evidence |
| Synthetic operational health indicators | **P0 product truth** | An administrative operational display contains demonstration-style metrics alongside real measurements | Replace invented health/uptime status with actual collectors; if unavailable show NOT_MEASURED; isolate any demo view | Real source ID, freshness, probe result and claim mapping |
| Cross-lane enforcement bypass | **P0** | Multiple booking, background, MCP and API writers are implemented | Put mandatory controls at actual effect-writer boundaries; inventory alternate authorized paths | Coverage map showing covered/uncovered paths, denial and exact target proof |
| Telephony/webhook request authenticity | P0 | Signature validation exists on main channels; compatibility/debug routes require deployment configuration review | Production must always validate authenticated origin, prevent replay and limit inbound routes | Signature result, URL/config class, rejection counts, signed origin |
| Personal information and voice consent | P1 | Call, SMS, recording and contact data have different workflows | Consent/notice, least collected PII, restricted retention, per-tenant data access and user deletion/export | Consent scope, collector data classification, redaction proof, retention evidence |
| Usage/cost protection | P1 | Cost/spam/credit safeguards present across modules | Consistent distributed limits, no silent failed-open high-cost branches, per-tenant alerts and abuse response | Cost envelope, quota action, throttling/hold outcome, review history |
| Idempotency / retries / ordering | P1 | Async workflow/telephony/billing jobs implement varied retries and dedupe | Stable effect-key per actionable occurrence; partial failure-safe retries; no duplicate external commits | Correlation, attempt count, final provider outcome, duplicate suppression |
| MCP OAuth and human approvals | P1 | Existing strong foundation with client scopes, approval diffs and revocation | Preserve exact role/scopes/consent across v1/v2, refresh and provider operations; guard alternative non-MCP writers | Grant revocation, tool authority, human approval, exact applied mutation |
| Secrets and privileged credentials | P1 | Service-level credentials and environment-specific transports exist | Short-lived workload identities where possible; scoped vault, rotation, no browser/provider secret propagation | Credential lifecycle and access metadata only, never key bytes |
| Security data preservation | P1 | Logs and archive/cleanup paths exist | Protect required security/audit records from silent deletion, retain exact provenance and deletion reason | Source integrity, receipt chains, retention schedule |
| Operational continuity | P1 | Vercel, Modal, Supabase, Twilio and third parties form multi-provider chain | Incident response, service degradation, retry control, backups/restore rehearsals and dependency failure alerts | Source-health status, incident evidence, recovery records |
| AI/data content boundaries | P1 | Website intake, knowledge, prompts and tool workflows coexist | Treat retrieval/scraped/chat content as data; deterministic tools/resource allowlists; minimize secret/tool exposure | Prompt source, tool allow/deny, effective capability, evidence limitations |

**Finding severity policy:** These are engineering review priorities based on source observation and consequence, **not confirmed production vulnerabilities**. Confirm exposure, reachability and existing compensating controls in a restricted private issue. The plan must **not** normalize high-impact weaknesses as “accepted for HAIEC reporting” where a viable fix exists. Any residual risk requires explicit owner approval, expiry and mitigation.

## 5. Platform-owned controls versus tenant choices

| Actor | Mandatory ownership and authority | Optional HAIEC services and scope |
| --- | --- | --- |
| Kestrel platform superadmin/security | Fleet identity, cross-tenant operational diagnostics, Kestrel shared provider controls, hardened integrations, audit retention, incident coordination, critical provider emergency controls | Platform-wide source inventory, deterministic assurance, control/delta review, fleet coverage and remediation proof |
| Kestrel tenant owner/admin | Tenant members and delegation, receptionist/configuration, billing approvals, approved business destinations, tenant workflow policy and accepted HAIEC consent | Tenant agent/source inventory, optional action envelopes, human approvals, monitoring, reports, scoped integration control where supported |
| Tenant staff/reviewer | Only granted case/action evidence and delegated decisions, with separation of duties | Action-review work queue and scoped evidence read; no fleet control |
| End customer/caller | Submit voluntary requests and confirm their own permitted actions; consent as applicable | No tenant/admin policy management, no independent HAIEC control authority |
| Kestrel service workload | Route/tenant/action-specific machine authority and bound token; no broad self-assigned superadmin | Emits redacted source events and enforces locally compiled mandatory policies |
| HAIEC tenant-bound service principal | Explicitly consented minimal metadata/evidence access to a mapped tenant partition | Deterministic read/evaluation and optional rule compilation/verification, not unrestricted Kestrel write credentials |

**Tenancy model:** Kestrel tenant ID is an externally bound resource claim, not a trusted arbitrary request field. Kestrel platform org and each customer HAIEC org must be isolated by explicit verified mapping; for platform wide administrative evaluations, record an access-purpose and policy boundary. A customer cannot discover other tenants through HAIEC cross-account reports, source IDs or service metadata. Provider-admin viewing across tenants needs independent staff authorization and audit, not the tenant portal token.

**Mandatory vs optional:** The Kestrel baseline is not a feature flag that customers can disable. A tenant may add stricter business action policy or choose provider-approved automation, but never expand the provider safety ceiling. A customer may turn off the optional HAIEC add-on, not the mandatory security floor.

## 6. Enforcement engineering: do not put HAIEC availability in the live-call critical path

**Correct architecture:** enforce minimal deterministic Kestrel baseline **locally** at the consequential writer; HAIEC is a qualified assurance/control-plane consumer and may publish approved, versioned policy artifacts once separately integrated.

- At effect time, Kestrel local guard receives exact actor/tenant/system/operation/resource/approved context with time-bound policy version.
- A **mandatory Kestrel safety floor** runs regardless of HAIEC subscription or connectivity.
- Optional HAIEC-enhanced rules are compiled/validated and distributed ahead of time, with policy issuer, version, digest, expiry and revocation. Kestrel validates locally; no LLM as verdict authority.
- High-consequence writes with absent required authority must **HOLD/DENY or route to human**, not “allow because HAIEC unavailable.”
- Low-risk informational actions may continue in a clearly documented degraded state. Choosing fail-open or fail-closed requires threat and availability analysis **per action class**, not one global switch.
- HAIEC monitors observed attempts/decisions/target effects asynchronously; its own downtime must not prevent the receptionist from answering ordinary inquiries.
- Do not require universal online round trips to HAIEC on every voice token/tool attempt. Keep latencies bounded; transport failures must be visible and measured.
- **Smallest initial coverage:** one calendar/CRM effect boundary in an isolated environment; then protect other actual writers in dependency order. Audit all direct and asynchronous paths before claiming uniform enforced scope.

**Operational state must expose:** NOT_CONNECTED; SOURCE_UNAVAILABLE; OBSERVING; POLICY_CONFIGURED; REVIEW_REQUIRED; AUTHORIZED_ACTION; DISPATCH_DENIED; TARGET_CONFIRMED; EFFECT_UNKNOWN. These are **suggested display labels only**; do not duplicate HAIEC canonical stored disposition enums.

## 7. Telemetry: collect once at Kestrel, qualify once in HAIEC

**Use existing producers**, not a second SIEM:
- Kestrel: structured runtime logs, MCP request telemetry, consequential-action audit, call/session lifecycle, booking/CRM target records, workflow execution ledger, webhook/Twilio delivery, billing/credit/number status, admin/security events and existing provider health views.
- Standards transport: OpenTelemetry trace/log/metric SDKs or a small exporter/Collector adapter where justified; leverage existing Vercel/Modal logs and vendor observability first. Filter/redact before transfer. Semantic conventions for MCP/GenAI are versioned and may be development status.
- HAIEC: existing EvidenceEnvelope/OTLP ingress, source qualification, five evidence planes, deterministic DAI/control evaluations, monitoring read model, U6/passport/history. **Received != qualified; tool called != action committed; absence of telemetry != no action**.
- Customer assurance: read-only tenant-scoped projection from HAIEC, or Kestrel cache of approved summary/verification link. No copy of all customer phone transcripts/audio or database into HAIEC by default.

### Event contract (proposed fields, not persisted schema)

```text
event_id / event_type / event_time / source_clock
provider_organization_id / tenant_id_pseudonym / agent_id / deployment_version
actor_class / authenticated_subject_ref / service_principal_ref / oauth_client_ref
channel = voice | chat | mcp | dashboard | api | job
trace_id / parent_span_id / call_ref / action_id / attempt_id / idempotency_key
tool_or_operation / target_type / target_id_pseudonym / requested_scope_digest
policy_issuer / policy_version / policy_digest / approval_ref / approval_state
source_state = configured | attempted | received | qualified | stale | missing
effect_state = proposed | confirmation_pending | allowed | denied | queued |
               dispatched | acknowledged | committed | delivered | failed | unknown
enforcement_point_id / enforcement_mode / decision_ref / receipt_ref
source_identity / producer_version / ingestion_batch / evidence_digest
latency_ms / retry_count / limitations[] / privacy_classification
```

**Privacy controls:** encrypt in transit/at rest; redact identity secrets and payloads, avoid names/phone/email/speech/audio and full LLM prompts by default; hash/pseudonymize external IDs only if stable join is necessary; preserve tenant mapping in Kestrel-controlled vault; purpose-limit exports, apply per-source TTL and deletion holds. Telemetry access itself is a privileged audited action.

### High-value signals before broad analytics

| Signal | Owner | Expected action |
| --- | --- | --- |
| Unauthorized tenant/resource attempt or privilege escalation | Kestrel security | Block operation; scoped security alert; source-bound HAIEC control evidence |
| Consequential write without required confirmation/approved scope | Kestrel dispatch guard | Safe hold/deny and human review; no “success” receipt |
| Model/tool request outside approved capability/effect envelope | Kestrel + HAIEC | Deterministic comparison and evidence-qualified drift alert |
| Acknowledged operation without committed effect | Kestrel operations | Pending/failure classification, reconciliation or operator follow-up |
| Direct/uninstrumented action path detected | Kestrel security + HAIEC | Mark control coverage gap; prioritize writer integration |
| Source collector silent, delayed or tampered | Kestrel operations | Source-health alert; mark observed plane degraded, never zero activity |
| Unexpected tenant token/call/billing/number consumption | Kestrel billing/fraud | Throttle/hold per policy, review causes, cost recovery |
| SMS/webhook/booking failure or retry/duplicate anomaly | Kestrel operations | DLQ/reconcile; alert impacted tenant when material |
| Consent/retention/access violation | Kestrel privacy/security | Contain data, suspend unapproved processing, preserve restricted incident evidence |
| Provider degradation / backup failure | Kestrel SRE | Vendor incident and customer-visible availability state |

### Health measurement integrity

**Do not mix invented graph values with real platform metrics.** The available source includes at least one administrative health summary assembled from generated/demo-style health numbers alongside actual sourced call metrics. Replace with real metrics or label **NOT_MEASURED**; reserve demonstration playback for a separately identified presentation view. In an assurance product, fabricated infrastructure health invalidates trust even if a non-public dashboard is the only consumer.

### Alert ownership

Security/operations alerts go to Kestrel platform responders, not arbitrary customers. Tenant-specific event alerts go only to entitled tenant admins/reviewers, with controls for frequency, severity and data exposure. HAIEC may expose findings, coverage, drift and remediation status; it does not become the primary paging, message delivery or incident command platform.

## 8. Controls program: how HAIEC and Kestrel coexist

See companion `KESTRELVOICE-SECURE-SAAS-CONTROLS-REMEDIATION-REGISTER-2026-10-16.csv` for discrete control requirements.

**Per control maintain:** ID, family, owner, platform_floor, tenant_option, observed_source_state, desired mechanism, expected evidence, severity/sequence, gap owner, and claim boundary. States must separate `DESIGNED`, `SOURCE_PRESENT`, `WIRED_TO_PATH`, `ENFORCED_ON_TARGET`, `EVIDENCE_QUALIFIED`, `CUSTOMER_VISIBLE`. These are planning/implementation states, not alternate HAIEC verdict types.

**Minimum control families:** tenancy/authorization; authentication/credentials; telephony/webhook authenticity; voice and MCP approval; consequential effects; data/recording privacy; payments/cost/abuse; workflow resilience/idempotency; AI prompt/tool boundaries; deployment/SBOM/CI; operational health/telemetry; incident recovery; historical evidence and customer trust.

**One report per evaluated source/time boundary:** HAIEC could record Kestrel platform findings and remediations under private provider HAIEC organization, and project a different tenant-specific read model for users. Never surface fleet vulnerabilities, another tenant's information, or provider security internals in customer portals.

## 9. Remediation evidence and a future “what HAIEC helped fix” report

A defensible remediation record should contain:
- `issue_id` internal private reference and security owner; affected control/operation and business consequence.
- Initial source revision, evidence producer, observed condition, applicability and uncertainty. Do **not** allege past exploitation without incident evidence.
- Code/config correction and approval, linked PR/release revision; exact **effective deployment** to Vercel/Modal/Supabase/Twilio as appropriate. Merge/DB update alone is not deploy proof.
- Evidence demonstrating corrected authorization/denial/target effect or source freshness where claimed, independently read from authorized target.
- Before/after comparison using matching source, policy version, actor/tenant, operation and evaluation scope. Historic results remain historic.
- Residual paths, compensating controls, owner and due date. Close only when a repair **and its coverage proof** are established; UI hiding or logging-only is not remediated enforcement.
- External/public summary: precise scope and date, e.g. **“Scope-bound booking authorization was strengthened and verified for the tested integration.”** Avoid disclosing exploit details, security source code or a blanket “all customer agents secured.”

**Provider posture report:** Platform Security Overview; Control Coverage by action family; Coverage Unknowns; Incident/Change Response; Verified Remediation History; Evidence Method; Third-Party Assurance (only when independently obtained).

**Tenant report:** Tenant AI System Inventory; Selected Tool/Action Authority; Human Approvals; Monitored Activity and Data Freshness; Applied Protection by covered action path; Recent Changes; Limitations; Exact verification links. Tenant report content must be generated from tenant-owned evidence, not fleet averages.

## 10. Adoption and account model

1. **Kestrel baseline always active:** no mandatory HAIEC signup; default data minimization.
2. **Provider security team** configures Kestrel's private HAIEC organization and controlled ingestion/verification of non-PII evidence.
3. **Tenant onboarding:** show optional “AI Action Assurance powered by HAIEC”, with a source-permission preview and plain-language scope. The tenant can skip.
4. **Later activation:** `Settings → AI Assurance`; same tenant and agent identities, no infrastructure migration; past coverage only as far as qualified historical records actually exist.
5. **Tiered optional experiences:** Observe (verified data feeds); Govern (tenant policy/approval UI); Enforce (only verified integrated consequential-action hooks, limited to named actions). These are proposed product UX tiers and must not be presented as already shipped.
6. **Tenant control:** scoped grant revocation, selected data categories, source visibility and retention, authorized viewer roles, separate billing consent if a paid add-on is introduced. Turning off optional HAIEC **never** disables platform safety.
7. **Brand:** “KestrelVoice — AI business communications with evidence-backed action oversight.” HAIEC power attribution in evidence views and reports, not fake third-party certification.

**Security governance:** Kestrel owns production runtime and obligations to customers, including support/security incident response. HAIEC owns evidence qualification/verdict logic and may provide a contracted assurance service. Shared corporate ownership should be disclosed where independence could be implied.

## 11. Sequenced implementation design (no tests requested now)

**Wave 0 — source/decision freeze (research only; this packet):** confirm code snapshot and private security tracker owner; catalog consequential writers, current controls and trust boundaries. Define no-go public claims. No code or test work authorized by this packet.

**Wave 1 — platform security floor (FIRST code sprint later):** fix high-consequence tenant/fleet authorization inconsistencies, machine identity binding, mandatory voice confirmation at effect writer, webhook egress restrictions, generated health indicators, and inaccurate effect-success signals. Define sensitive data retention and privileged change approval. Limited code-level checks until any changes reach production; security acceptance cannot be skipped indefinitely.

**Wave 2 — high-value telemetry and source quality:** extend existing event producers and vendor logs to a normalized, privacy-safe envelope, source-health, lag, missing/partial witness semantics and a small set of deterministic alerts. Collect instrumented paths before marketing full coverage. Preserve Kestrel operation during HAIEC downtime.

**Wave 3 — HAIEC platform governance + tenant projection:** bind provider organization, then tenant subscopes, with no raw PII default; evaluate configured source/action policy, drift and residual unknowns. Add tenant-scoped read views, action envelopes/approval where needed, consent/revocation and historical report chain.

**Wave 4 — per-effect enforcement and verified trust evidence:** one appointment/CRM path, then SMS/webhook/call transfer/workflow/paid operations as demand justifies. Only claim protection for exact covered writers and validated target effects; publish remediation history with scope/limits. AWS is optional and not needed for Kestrel on Vercel/Modal/Supabase.

**Dependency order:** first ensure tenant and service identity correctness; then source truthful events and effects; then control decisions/human authority; then optional HAIEC tenant enforcement; lastly audited “verified” marketing. No broad testing or production deployment performed in this research session, but engineering cannot call a fix customer-ready without focused negative/positive checks in the proper controlled implementation phase.

## 12. Resource and tradeoff decisions

- **Use OpenTelemetry / existing providers** for traces, not a costly parallel observability platform. Avoid storing all token or audio streams; prefer lifecycle and actual-effects receipts.
- **No generic model-driven policy decisions.** Deterministic typed operation control should protect customer actions. AI may help users configure drafts and explain evidence, subject to approval.
- **No online HAIEC call for every voice action.** Minimize latency and outage coupling, distribute verified/versioned local decisions.
- **Do not build 37 individual connectors now.** Prioritize high-consequence families and canonical downstream writers; document uncovered paths.
- **No AWS migration, no new IAM platform, no mandatory compliance wizard.** Kestrel's actual hosting stack and third-party trust remain unchanged.
- **Trust cost tradeoff:** Security baseline is a Kestrel obligation funded by the service; optional HAIEC advanced governance/reporting is separately billable only for genuine incremental customer value. Do not paywall mandatory protections.

## 13. Completion criteria for the future secure-platform claim

1. Platform/fleet admin operations are accessible only with appropriate company authority; tenant admins cannot operate global systems.
2. Machine identities carry verifiable tenant/resource purpose; service-role DB calls cannot silently become generic cross-tenant operations.
3. All **claimed covered** consequential writers check approved scope at the effect seam, and adverse unknowns are handled safely.
4. Voice/MCP human authorization proves exact scope; no signature/consent inference from model text alone.
5. Effect receipts separate acknowledged, queued, target accepted, committed, readback and unknown; no fabricated success.
6. Webhook/telephony/Stripe paths authenticate and protect egress/replay/billing as applicable.
7. Security/operational metrics have real producers, freshness and known gaps; no disguised placeholders.
8. Alerts, incident response and backup/recovery have named Kestrel owners.
9. Mandatory floor is always active; tenant views cannot read fleet or other tenant sources; optional HAIEC can be revoked safely.
10. Platform HAIEC report and tenant HAIEC report preserve exact source/issuer/snapshot/method limitations; remediation is proved and scoped.
11. Source-vs-runtime distinction is explicit. A source review cannot establish production customer security or certification.

## 14. Required standards and external references

- [OWASP ASVS 5.0.0](https://github.com/OWASP/ASVS/blob/master/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.json) — app authentication, tenant authorization, APIs, logging, security verification.
- [OWASP LLM06 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) — least functionality, least authority and least autonomy for agent tools.
- [OWASP Webhook Security](https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html) and [SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — trusted callback URLs and signed event handling.
- [OWASP Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — sensitive-field redaction and event/response/integrity controls.
- [Supabase RLS/Service Key](https://supabase.com/docs/guides/database/postgres/row-level-security) — grants, RLS, and service-role bypass.
- [OpenTelemetry GenAI spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md), [MCP spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md), [Collector processors](https://opentelemetry.io/docs/collector/components/processor/) — versioned tooling and privacy-respecting transform.
- [NIST AI RMF resource hub](https://airc.nist.gov/) — governance/evaluation/measurement context.

**Document boundary:** This is a detailed prescriptive study suitable for public architecture planning. It deliberately excludes restricted exploit details from the private KestrelVoice source. It is neither a full penetration test nor a verified remediation report.
