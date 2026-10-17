# HAIEC — Detection, Controls and Evidence Intake Source Requirements Map

**Prepared:** 2026-10-17 · **Status:** Source-checked product/engineering reference, NOT production-per-customer acceptance.  
**HAIEC source revision:** [14b6b1912405fd3c03ebbb9b52df1b351f350c8d](https://github.com/subodhkc/haiec-website/commit/14b6b1912405fd3c03ebbb9b52df1b351f350c8d) · **Shared matrix:** [87 curated capability rows](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) (not exhaustive) · [E6 UX dependency review](E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md).  
**Registry extraction:** 176 catalog rules / 31 families (157 registered EXECUTABLE, 19 REGISTER_ONLY); 45 control catalog entries (11 listed in visibility projection); 26 registered typed intake profiles, including `log`. Counts are code-registration facts, **not** universal customer availability, independent detections or proof of executed tests.


> **Latest UX positioning clarification (2026-10-17):** [Product Entry, Consequence Ontology, Six Jobs and Shared Inspector Contract](HAIEC-PRODUCT-ENTRY-CONSEQUENCE-ONTOLOGY-JOBS-AND-INSPECTOR-UX-DECISION-2026-10-17.md) refines the sequence described below. **"What can this AI system cause?" is the analysis result HAIEC establishes**, not a required input question. Support three alternative starting points: choose the system, choose the goal, or connect/provide existing evidence. Keep technical consequence relationships and source qualifications authoritative; patterns are optional navigation examples. Minimum sources, output contracts and unknowns derive from E1/E2/MCP capability owners, not an additional intake engine. This note does not change the detector/control catalog snapshot.

## 2026-10-17 correction and expansion — Evidence intake, assurance, operational controls, CI, admin usage, runtime and delegation

**Current review basis:** HAIEC `Main` source inspection at commit `8880e17f7f45145801561f6de4cd174490a76fcb`. This dated addendum supersedes broad claims in the prior source-intake introductory sections; original 176-rule / 45-control / 26-profile appendix stays intact as a catalog snapshot. **Do not infer production deployment or a working tenant feed from source existence.**

### Product positioning: consequence-first, not three intake questions as the homepage structure

**Recommended customer journey:** **AI Estate / selected AI System → What can it cause? → Which job do you want to accomplish? → What evidence/integration do you already have? → What will this evidence establish, and what is missing? → Assurance, human governance, monitoring, operation or verifiable proof.** This preserves the product's differentiation. Six independently accessible customer jobs remain **Discover / Evaluate / Authorize / Monitor / Protect / Verify**; they are **not** six mandatory steps. Provide alternative **Start from evidence** for developers and auditors, and **Start from CI** for DevSecOps. The prior three questions are useful as a *contextual preflight assistant*, **not** HAIEC's top-level information architecture.

Customer copy: “Show us an AI system or the evidence you already have. HAIEC helps establish what it can cause, where its authority comes from, which controls actually operate, what has been observed, and what remains unproven.” Avoid “we need GitHub + IAM + telemetry before you may start.”

**Canonical naming:** product-facing **HAIEC Assurance Engine**, architecture-facing **Assurance Decision Engine**, legacy internal `U5` only in compatibility/code references. Use this in developer docs and new UI text without changing persisted/API identifiers.

### Human upload is already implemented; extend and converge, do not recreate

| Existing pathway | Source file / purpose | Honest state and limitation |
|---|---|---|
| File evidence | `app/api/evidence/upload/route.ts` uploads PDF, Office, TXT, CSV and image files up to 10 MB into Blob and `evidence_documents`, SHA-256, org-authenticated, `status=pending`; report immutability protects referenced files | Real stored upload, **not** universal JSON/YAML semantic detector ingestion or independently verified technical claim |
| Manual/link/attestation | `app/api/evidence/submit/route.ts` stores hashed control/assessment-linked notes, URL or attestation JSON | Existing human-submitted attestation record; **not** automatic verified digital signature or source-authenticated producer claim |
| Compliance control upload | `components/compliance-wizard/EvidenceUpload.tsx` and `app/api/compliance/evidence`, control association and status | Has its own assessment-evidence semantics; verify actual backend/storage flow, don't merge with Control Proof state |
| DAI document upload | `app/api/dai/evidence-upload/route.ts` privately stores PDF/MD/YAML/JSON/TXT, deterministic advisory parse and content hash; separate `POST /api/dai/evidence` user confirmation | **Two-step human confirmation exists**, but is declared delegation evidence, not issuer-authenticated delegation |
| Preview-only widget | `components/wizard-v2/EvidenceUpload.tsx` `simulateUpload()` returns fake `/uploads/...` URL | **Not an actual persistent upload**; must not promote into customer evidence proof |
| Structured/typed intake | registered binder / profile, JSON/JSONL/CSV, OTLP and additional sources | Typed evidence qualification required before registered detector consumes fields |

**Enhancement is a shared intake *presentation/orchestration bridge*, not a new upload service:** provide “Add evidence” in System → Evidence and relevant Controls/DAI views; allow safe document upload to existing stores; preserve MIME/size/quarantine/retention and tenant-binding checks; preview schema mapping against registered adapters; explicitly show `FILE_STORED / HUMAN_ATTESTED / TYPED_MAPPING_CONFIRMED / PRODUCER_AUTHENTICATED / DETECTOR_EXECUTED / ASSURANCE_EVALUATED / REPORT_HUMAN_REVIEWED` as **independent facets**, not invented persisted enum or one status progression. Unknown schemas remain attached candidate evidence, not automatically consumed. For JSON IAM policy or runtime JSONL, use registered typed intake and declared authority ceilings. Bind authenticated uploader attestation to exact digest + origin + environment + collection interval; preserve signed statement/audit trail where actually supported. Report-review attestation separately binds immutable report hash and named actor; do not label evidence “independently verified by human” from click alone.

### HAIEC Assurance Engine (exact requirements)

The canonical `lib/assurance/assurance-evaluator.ts`, selected runner and `lib/assurance/claim-catalog.ts` evaluate an exact organization/`aiSystemId`/run/snapshot, resolved **Assurance Profile**, versioned Claim + Claim Evidence Sets, selected qualified producer results and captured scope. Approved Operating Envelope is required for claims of authoritative POLICY_AUTHORIZED, not a universal prerequisite to every claim. Output `ALLOW / REVIEW / BLOCK` is **within evaluated scope**, never an operational execution grant. Five evidence planes remain `REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED`. Every profile claim has local evidence needs; no mandatory all-five-plane upload wizard.

### DAI requirements

`lib/assurance/dai-assembler.ts` + `dai-evaluation.ts` compare delegated authority (approved policy or user-confirmed delegation), code-capable source paths, effective-grant facts and observed telemetry. Nine dimensions: OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY. Minimum useful check = exact agent/delegation scope + one comparable code/grant/action fact. Strongest = explicit delegation and issuer identity, source capability, relevant IAM, correlated runtime agent/tool/handoff trace and target action. Missing declaration ≠ breach. Recorded handoff ≠ authorized delegation.

### Controls means operational governance as well as control tests

The controls experience must reflect: **configured versioned policy → approved by human → bound/deployed target enforcement point where available → monitored source/source health → threshold/guardrail/alert/kill decision → actual target mediation/ack → independently qualified effect → control test/replay + remediation/retest**. These are independent facets; some controls are governance-only, so target PEP not applicable. **Do not compress into “control passed”.**

Source owners: `lib/assurance/envelope-persistence.ts` (Operating Envelope); scoped human deployment-decision persistence/API; `lib/assurance/guardrail-decision-persistence.ts` (guardrail state/manifest/probes); `lib/ai-security/alerting/alert-rule.ts` (alert rule edit, dedup/delivery); `lib/ai-security/threshold-evaluate.ts` (bounded threshold with baseline; monitoring thresholds route has `CONTRACT_REGISTRY_ONLY` limitation); canary monitoring config/schedules; `lib/kill-switch/execution-guard.ts` and kill-switch API; `lib/kill-switch/native-enforcement-adapter.ts` (production native adapter registry empty); Control Visibility, UCP TestSpec/results/replay/response. **Org-scoped kill switch is not automatically bound to the selected `aiSystemId`.** In existing Controls UI the currently visible `ControlAccountabilitySummary` and `ControlProof` are valuable; inspect whether deployed policies, native integration, threshold configuration, runtime guard status, alerting and kill-switch binding are actually displayed for each applicable control (they are not proven by Control Proof alone). **Add a collapsible “Operations & Protection” tab/slide-out in control detail**, linking existing owner routes; never replace Control Proof.

### CI/CD and GitHub App are real intake choices

- **GitHub App** has a real PR diff/full static executor (`lib/github-app/pr-static-executor.ts`), policy packs and comment/evidence flow for authorized linked installations. Treat installation/PR scan/permission/binding as actual readiness.
- **Standalone GitHub Action** implementation exists in `github-action-repo/action.yml`, and internal `.github/actions/haiec-scan/action.yml`. Existing `github-action-repo/README.md` warns v1 PAT-era flow is LEGACY/DEPRECATED, despite separate `@v1` recommendations in that older file. **Reconcile current distributable action identity, version, permissions, CI provider and any v2 release hold before recommending copy/paste setup**; never expose deprecated PAT upload as the recommended customer path. A self-contained local/CI scan does not automatically equal the SaaS's full qualified HAIEC Assurance Engine evaluation.
- **UI exposure:** System → Sources → “GitHub App / CI Action / API or local bundle”, each with genuine readiness, last successful run, PR/commit/source scope, SARIF/bundle provenance, next step and specific unsupported/held state. Existing global navigation remains intact.
- Developer docs plan: explain **GitHub App vs CI Action vs local API/SARIF** decision matrix, supported example workflow, minimal required scopes, artifact semantics, exact HAIEC ingestion/evaluation attachment and troubleshooting, deprecation/hold warnings, and clear distinction `CI_GATE_RESULT != ASSURANCE_ENGINE_DISPOSITION != DEPLOYMENT_APPROVAL`.

### Admin provider API usage is another independent product capability

Existing `app/dashboard/ai-inventory/admin-api/page.tsx`, `lib/ai-inventory/providers/openai-admin.ts` and `anthropic-admin.ts`, `app/api/v1/inventory/admin-keys`, `app/api/v1/inventory/usage` provide provider Admin API credential validation/sync, cost snapshots and inventory discovery, plus SDK/per-request usage logs where instrumented. This is a **separate input class** from IAM permission snapshots, agent tool traces, and runtime security test outcomes. The usage endpoint falls back to cost snapshots with `dataSource=admin_api` and `totalTokens=0` where actual token counts aren't available; **UI must label “Token count unavailable from this data source”, NOT display actual zero-token usage**. Cost/project/model summaries do not prove agent behavior, prompt content, IAM authority or individual target effects. Admin credential handling must be least-privilege, encrypted, never exposed or passed into MCP prompt/URL/log.

**UI exposure:** AI Estate → “Provider usage & spend” contextual card; AI System → “Usage & cost” tab/detail where exact provider project/system binding exists; view last-synced, dataSource, window and attribution basis. Place token drift and cost anomalies under Monitor **only with comparable authenticated usage baseline**.

### Runtime testing and static engine breadth should not be invisible

- Source scanner includes actual prompt-injection `R1` and indirect RAG/prompt boundary `R4` rule definitions in `lib/ai-security/rules/prompt-injection-rules.ts`, plus tool/API risks, tenant isolation, secrets, dependencies, configuration and agentic reachability where producers/analysis are active.
- **Important distinction:** `lib/github-app/policy-packs.ts` U3-G says its PR pack leaves some RAG poisoning, unsafe MCP tool and SSRF detections absent/partial. **A static rule existing in another analyzer does not prove the GitHub App's PR path exercises it**. Per-scan UI should show which analyzer and rules actually participated; missing source category/producer ≠ clean result. Never infer successful prompt injection from a static R1/R4 exposure rule.
- Runtime Security supports consented **empirical AI endpoint attack simulation** (documented as BETA in `docs/how-to/04-runtime-security.md`), including prompt injection, RAG poisoning, tool forcing, cost and agent attacks under authorized endpoint scope; this is not the same as passive telemetry/monitoring. Verify actual endpoint/domain authorization and live runner state before claiming customer-ready. Keep safe/targeted modes and simulated vs customer targets visibly separate.
- **UI exposure:** existing Assurance Case or scan result → expandable “Detection coverage by source/engine” facets **Code Security**, **Agent/Tool Paths**, **Prompt/RAG**, **Identity & Access**, **Supply Chain**, **Runtime Test**, **Telemetry**, **Governance/Controls**. Use real run-level producer participation/capability and qualifier, NOT an auto-green “all scans run” checklist. Avoid more top-level menu items.

### Cross-source versus cross-AI-System delegation and effect proof

**Already available:** multi-producer run/evaluation evidence selection, bounded `lib/evidence/qualified-cross-scan-composition.ts` grouping, five-plane comparison, DAI and a **same-org, same-aiSystemId, same-run** caller-asserted parent/child `lib/control-test/ucp/delegation-witness.ts`. Correlation grouping ≠ shared agent identity; `CONSISTENT` declared lineage ≠ independently authorized delegated grant. `lib/control-test/ucp/effect-witness.ts` presently establishes bounded provider-reported token usage comparison, not arbitrary cross-system ERP effects.

**Build a bounded deterministic cross-system delegation join (new, independently gated work; not a UI-only query):**
1. Define canonical agent runtime identity: org, aiSystemId, environment, provider-issued principal/issuer, agent instance/definition, exact stable tool/target IDs; namespace every external identifier.
2. Model separate `DelegationGrant` (issuer, parent agent, child agent/principal, operation/resource/scope, expiry, delegation depth, policy digest and signature/attestation state); `Handoff` (parentInvocationId, childInvocationId, handoffId, trace context, qualified producer, as-of); `Invocation` and `TargetEffectWitness` records. Reuse existing UCP/DAI/action witness contracts, add only genuinely missing fields/transport; do not copy/replace the engines.
3. Deterministic join gates: same authorized org; explicit participating AI System IDs; independently qualified issuer and parent/child identities; grant matches governing approved root and narrows operation, resource, data, geography, magnitude, time, environment, approvals; exact immutable policy version/digest; signed/qualified chain; bounded event ordering and as-of/correlation; no cycles/replay/spoof; source producer/provenance independent of claimant where needed.
4. Effect gates: distinct parent delegation witnessed → child dispatch attempted → target acknowledged/denied → authenticated provider outcome → appropriately independent exact target readback (before/after, record ID, causation ref and supported scope); where missing show **DELEGATION_UNVERIFIED / HANDOFF_OBSERVED_ONLY / EFFECT_NOT_VERIFIED**, never “safe”.
5. Cross-boundary tests: same ID in another org, system, environment, signer or time window; name-only join; handoff without grant; parent scope widening; token expired/revoked; unknown issuer; partial chain; repeated event/replay; swapped target; provider result without independent readback; producer-lineage alias; missing or malformed source; unknown/granted IAM; multi-hop A→B→C no false truncation.
6. **UI:** AI Estate → qualified relationship graph with candidate dashed edges and exact proven joins; AI System → “Delegated Actions” collapsible or tab view; Agent Action Path → per-hop identity/approved root/scope narrowing/observed action/effect frontier; drawer “Why joined / Why not joined?” with source references and time. Add table/text alternative. Multi-system graph summary counts must distinguish candidate/qualified delegation/target-effect verified, and protect other tenants.

**Dependencies:** This requires at least one truly issuer-authenticated cross-agent authority record and actual distributed runtime/target source; GitHub+IAM+policy+telemetry are useful but do **not** by themselves prove target causal effects. Implement as separate POC/increment with controlled 2-agent/2-system sandbox; do not silently widen existing same-aiSystemId UCP join. Gate release on exact identity/authorization tests and consumer parity. Mark production/provider-independent claims NOT_WIRED until integrated.

### Developer documentation enhancement plan (do not quietly modify existing public claims in this doc)

Developers should get a **source→capability→controls→proof cookbook**, not just a listing of endpoints. Update, after implementation verification:
- `app/developers/ingest/page.tsx` and `app/docs/agent-integration/page.tsx`: file upload/attestation vs typed binder, recognized JSON/JSONL/CSV/OTLP schema, mapping preview, immutable evidence refs, why a raw file may remain evidence-only.
- CI developer onboarding (`docs/CI-ACTION-ANALYSIS-AND-ENHANCEMENTS.md`, `docs/how-to/07-ci-pipeline.md`, `github-action-repo/README.md`, website CI guides): live GitHub App recommended branch, legacy/held Action truth, inline/CI vs full engine outputs, sample approved GitHub permissions, SARIF imports and troubleshooting.
- `docs/AI-INVENTORY-ADMIN-API-GUIDE.md` and AI Inventory developer docs: admin provider key scopes, cost/usage data-source basis, sync interval, accurate unknown token counts and difference from IAM/telemetry.
- `docs/how-to/04-runtime-security.md` and `docs/how-to/17-code-paths-and-dai.md`: authorized runtime tests vs continuous monitoring; static prompt/RAG/source coverage by run; DAI prerequisites and uncertain permissions.
- New/extended developer examples for 2-agent cross-system issuer grant, handoff trace, target readback, expected/negative results, and separate attested-source / authenticated-producer / independently established effect roles.
- Each guide must use **HAIEC Assurance Engine**, a tested versioned API shape, safe no-secret copy/paste examples, role & tenant scopes, and "supported/partial/held" gates. Avoid fake credential samples that look live, exported sensitive raw prompt copies, or framework “certification” claims.

**Roadmap ordering:** preserve active E6.1 ownership. First source truth reconciliation and contextual surfacing (reuse), then optional upload/mapping bridge and controls operational slider, then bounded cross-system delegation-and-effect POC requiring new authoritative producer, with E7 remote MCP acceptance and recorded T1 Kestrel separate. Do not reopen Main PRs or change other repos as part of this *documentation* review.

---

## 1. Customer answer

> HAIEC can start from source code, configuration, policy/IAM evidence, logs, or structured runtime traces. Not every source is necessary: a code scan finds source-visible weaknesses and reachable capabilities; policy and grant evidence establish *claimed or qualified authority*; qualified telemetry establishes *observed actions*; exact target-side readbacks can establish a narrowly scoped effect. More sources permit more questions, but do not automatically make a verdict stronger. We explicitly report what was NOT_ASSESSED, UNQUALIFIED, NOT_WIRED or unsupported.

**Short version:** *Send us a repository or a supported export—JSON/JSONL/CSV/logs/SARIF/OTLP/policy documents—and HAIEC will preflight what can really be assessed from it. Qualified binding and source identity, not a file extension, determine the assurance claim.*

## 2. Which HAIEC engine is strongest?

- **Best low-friction breadth for initial detection:** source-code/static analysis (supported code language, analyzed paths, source config and dependencies). Particularly strong for code-visible app security, tool/API sinks, tenant isolation and AI reachability where established. No source-only claim proves production deployment, effective IAM or observed target effect.
- **Best assurance synthesis:** deterministic U5 and DAI over selected, qualified five-plane evidence. Neither guarantees all five planes are supplied.
- **Best observation-specific risk detection:** [unified detection runner](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detection-runner.ts) with typed `DetectionEvidenceBatch` records. Registered executable catalog rules are not automatically fed by arbitrary raw files.
- **Best bounded technical control result:** executable UCP specialized/native Control Test with qualified evidence, TestSpec, approval if required, actual activation and replay/receipt. Catalog/Control Visibility is not a test.
- **Best externally observed action and effect:** E4 monitoring/evidence qualification plus E5.1 target-native, correlated outcome (real provider adapter not universally wired).
- **Do not say** “static is the most capable assurance engine” or “all 176 checks execute on every scan.” Scanner's post-scan detection hook only maps a narrow, allowlisted subset of secret findings; runtime/ingestion need their **own typed data**.

## 3. Source channels and what they prove

| Source channel | Real supported path | Most useful for | Input prerequisites and qualification | Boundary / fallback |
|---|---|---|---|---|
| GitHub App repository | Connected, explicitly consented repository + exact branch/revision → scanner | Static app/API/MCP/RAG/source paths; manifests | Installation authorization, repo access, parser/analyzer coverage; consent, commit identity | Local source archive or eligible local scan bundle; not all parser language semantics equal |
| Local source archive | `POST /api/scan/source-upload`, ZIP or tar.gz; bounded unpack (archive limit 200 MB, decompressed 512 MB) | Private code review without GitHub integration | Session, accepted archive safety, eligible scan; evidence of exact source revision | Do not treat document-only JSON as a complete codebase |
| Local/CI scan result | `haiec_submit_local_scan` / `POST /api/v1/scans`, required qualified bundle; CI evidence adapters | External or local source findings | Scan/source identity, qualified expected manifest and write scope | CLI distribution is preview, GitHub Action v2 held; not automatic SaaS execution |
| SARIF | `POST /api/sarif/import`, external_scan_imports + SARIF evidence adapter | Third-party static scan evidence | SARIF schema and importer, tool identity, scan scope | Imported claim ≠ HAIEC independently detected/verified exploitability |
| Generic structured JSON/JSONL/CSV | `/api/ingest/structured` + registered environment binder and `detectionClass` for typed sweep | Observations, API events, config drift, token, agent actions IF recognized/qualified | Machine credential org, binder scope, accepted schema, event/target identity, field mapping, recorded source authority | An unmarked event persists as raw observation only; no magic detector routing |
| Raw text logs | `/api/ingest/log`, common web/RFC5424/JSONL/auto parser | Sign-in/API/DNS/K8s/messaging/data-access patterns **when fields are mapped** | Parsed line, timestamp, source/target, typed declared detection marker and relevant fields | Free-form log string not enough for all rules |
| OTLP traces/metrics/logs | `/api/otlp/v1/*` receiver, JSON/protobuf → Evidence; recognized `gen_ai.*`, `mcp.*`, `haiec.*` span attributes → agent-rule sweep | Prompt, RAG, tool, handoff, memory, usage and observed action candidates | Collector/source binder, instrumented attrs, source cadence, target identity, upstream provenance | Trace ≠ effect; configured collector ≠ signal received/complete |
| OTEL/observability JSON export | Typed `otel`, `model_gateway`, `kpi` or `aws_cloudwatch` intake profile | Offline runtime evidence and historical investigation | Correct declared profile plus schema/binder | Can avoid always-on connection but not prove continual monitoring |
| AWS live IAM | `GET/POST /api/inventory/systems/[id]/effective-grants` with approved bound AWS credential; AWS IAM observer | Principal/policy observation and candidate permission qualification | Tenant-bound system, admin/owner for trigger, single valid bound credential, STS identity and IAM policy reads / resource qualification | Missing SCP, resource policies, session/boundary and simulator context can keep effective grants unestablished; no general per-action grant truth today |
| AWS IAM JSON policy/document export | `/api/ingest/policy` or source/delegation upload (JSON/PDF/MD/YAML/TXT) | Declared policy rules; policy review and evidence request | Export provenance, source role and exact policy/identity/environment metadata, user confirmation where required | **Not** a drop-in equivalent of live IAM observation; never mark EFFECTIVELY_GRANTED from this alone |
| User-written capability or operating policy | Requested manifest and draft envelope UI/MCP; explicit human approval UI | REQUESTED intent and POLICY_AUTHORIZED boundary when approved | Exact system, action/resource/scope, version/digest, eligible human actor | Self-report/draft cannot confer authority |
| DAI delegation documents | `POST /api/dai/evidence-upload`, PDF/MD/YAML/JSON/TXT up to 2 MB; confirm separate `POST /api/dai/evidence` | Declared delegation chain and scopes, advisory extraction | Authenticated upload, deterministic parse, explicit user review and confirm, eligible downstream evidence | Parsed document isn't independently authenticated runtime delegation |
| SBOM / dependency | `/api/ingest/cyclonedx`: CycloneDX **JSON 1.4–1.6 only**; repository lockfiles and manifests; typed supply-chain batch | Dependency drift, artifact/supply chain | Dependency/asset identity, version, hash/baseline and supply-chain typed markers | XML/SPDX/VEX/CSAF not accepted by CycloneDX mapper; static manifests ≠ loaded runtime artifact |
| Specialized domain JSON/CSV | 5G/O-RAN/TMF, manufacturing scenario, ServiceNow exports, AgentCore/CloudWatch, LogSense competition bundle | Relevant sector-specific selected checks | Exact typed intake profile, binder, domain fields, qualified source authority | Profile support isn't native provider authentication or live industrial integration |
| External forensic LogSense | Separate forensic product; `logsense_bundle` strict adapter for competition bundle | Reconstructed logs, chain of custody, selected control evidence | LogSense producer record/run, evidence qualification, import contract | No automatic LogSense → HAIEC assurance verdict |

**Source qualifier:** all intake routes use canonical binding and deterministic receipts. Import success never means U5 assessed the source, target effect occurred or a streaming monitor is active.

## 4. Source combination decision map

| Customer supplies | Supported assessment opportunity | What remains NOT_ASSESSED/conditional |
|---|---|---|
| Repo or ZIP only | Code-visible app security, MCP/API/reachability, code-capable actions, manifest/secret patterns | Effective policy authorization, actual grants, runtime activity and effect |
| Repo + lockfiles/SBOM + config files | Code paths, dependency/manifest security, config/K8s source findings, supply-chain context | Deployed infrastructure and actual runtime usage |
| Repo + user-declared boundary | REQUESTED vs code-capable paths, proposed operating envelope and gaps | DRAFT/self-report not approved policy, no observed behavior |
| Repo + **approved** versioned policy | Capability-to-policy comparison within exact operation/resource source mapping, selected U5 | Actual cloud grants and observed execution absent without IAM/telemetry |
| IAM JSON export alone | Declared policy contents, candidate dangerous grants/condition review | Principal-effective permission not established automatically; scope, SCP and session may be unknown |
| Live bound AWS IAM observation | Observed AWS principal/policy candidate grants, partial effective-permission context | IAM evaluator explicitly emits no canonical per-action EFFECTIVELY_GRANTED declaration until unmodeled layers resolved |
| JSON/JSONL/CSV/logs alone | Typed observed anomalies, API events, agent traces or forensic timeline if fields and binder supported | Baseline, owner authority, proof of completeness or target causal effect may be unavailable |
| Logs + baseline or config/registry | Drift, undeclared tool/peer, usage spikes, disallowed operation candidates | Comparison quality depends on exact identities, time windows and trusted baseline |
| Logs + explicit approved policy/delegation + stable identity | Observed action vs authorized/delegated scope, DAI-eligible evidence | Code reachability and effective cloud IAM may remain unknown |
| Repo + approved policy + IAM + telemetry | Richest conditional U5/DAI: requested, authorized, granted (if qualified), code-capable and observed | Full five-plane proof not guaranteed; AWS effective IAM and exact runtime principal joins often partial |
| Above + authenticated provider ack + target readback | Separate dispatch accepted / target-applied / verified-effect candidates | Native adapter and exact correlation must exist; current generic live provider wiring not generally available |
| Two comparable evaluations + change history | Consequence Delta / Compliance Twin or runtime differential where appropriate | No meaningful delta without compatible frozen/versioned baselines |
| Qualified Control Test bundle + TestSpec + approval | Bounded executable UCP result, replay/receipt and UCP human response | 42 general catalog profiles not automatically executable, missing durable activation blocks results |

**Best initial customer intake recommendation:** (1) repository/archive OR structured log export; (2) declared/approved policy, optional; (3) relevant IAM JSON/live observation, optional; (4) telemetry, optional; (5) narrowly qualified target readback only when the customer wants action-effect assurance.

## 5. Detector family → required typed source matrix

The **registered detector rule catalog**, not the entire HAIEC static U5/rulepack, currently has 31 families. Counts are metadata. `EXECUTABLE` means a producer was registered for the rule; the requested scoped `DetectionEvidenceBatch` class must actually be supplied. Some registered rules have no wired producer path from an arbitrary customer file; especially certificate/time/CICD below are REGISTER_ONLY.

| Family | E / R | Registered required source data (illustrative exact catalog dataSource values) | Practical intake / missing combination |
|---|---:|---|---|
| K8S | 7 / 0 | Kubernetes pod spec; RBAC bindings; Kubernetes manifests; Kubernetes audit log | K8s pod/RBAC manifest or audit event; raw YAML alone may need normalization |
| API_AUTH | 6 / 0 | API access logs; Gateway logs | Typed API/gateway access events; per-principal/IP/status and optional baseline |
| DNS | 5 / 0 | DNS logs; DNS zone data | Parsed DNS query/response logs and trusted registrar/TTL context |
| CERT | 0 / 5 | TLS inspection; TLS inspection + CRL/OCSP | REGISTER_ONLY: no certificate producer wired |
| TIME | 0 / 5 | NTP configuration; Time sync telemetry; Event timestamps | REGISTER_ONLY: no clock/time producer wired |
| MSG_BUS | 6 / 0 | Message bus logs; Message bus metrics; Schema registry; Queue metrics | Typed topic/publisher/subscriber events + declared topics/schema/baseline |
| SECRETS | 5 / 0 | Static source scan; Repo file inventory; Log inspection; Secret metadata | Source scan allowlisted secret IDs or typed secret metadata/events |
| CONFIG_DRIFT | 4 / 0 | Config history; Config vs runtime read; Flag audit log | Current vs approved config/history + change request/flag audit |
| DATA_ACCESS | 5 / 0 | Data access logs; Query telemetry; Export logs | Typed read/export logs + tenant/resource identity and thresholds |
| AI_AGENT | 6 / 4 | Agent runtime telemetry; Tool-call telemetry; Memory access logs; Delegation records | Agent spans/tool/handoff/memory; 4 AI_AGENT rules remain REGISTER_ONLY |
| SUPPLY_CHAIN | 8 / 0 | Lockfile/SBOM diff; SBOM vs vulnerability feed; SBOM vs lockfile; Build provenance | Typed SBOM/package records, hashes, baseline/registries; CycloneDX source may require transformation into batch contract |
| CICD | 0 / 5 | Pipeline config history; Pipeline run logs; Pipeline audit logs; Deploy records | REGISTER_ONLY catalog family despite separate CI/SARIF producer intake |
| PROMPT | 5 / 0 | Agent prompt events (gen_ai.* attributes); Agent prompt events; Agent prompt events with turn position; Agent prompt events with context size | GenAI prompt spans with text/turn/context attrs; limited matched-signal, not proven injection |
| RAG | 4 / 0 | Retrieval events + declared knowledge-source registry; Retrieval chunk text; Retrieval events + declared embedding signature; Retrieval events with session ids | Retrieval events + trusted source registry/embedding/session context |
| MEMORY | 2 / 0 | Memory operations + declared channel list; Memory operations + declared scope list | Memory op records + declared channels/scopes and session identity |
| MULTI_AGENT | 4 / 0 | Agent handoff records per session; Agent handoff records + declared handoff flags; Agent handoff records + registration flags; Agent handoff records per session and surface | Handoff spans or typed records + declared target/agent registry |
| MCP_TOOL | 4 / 0 | Agent tool calls + declared tool registry; Agent tool calls + declared server registry; Agent tool calls + registered tool schemas; Agent tool calls + declared agent registry | Tool-call spans + declared MCP server/tool/schema/agent registry |
| EXFIL | 4 / 0 | Agent output events; Agent output events + system-prompt signature; Agent tool-call payloads; Agent tool calls + egress allowlist | Model outputs/tool payload + secret/sig/egress reference, not proven exfil |
| COST | 4 / 0 | Agent usage metrics + baselines; Agent usage metrics; Agent usage metrics + handoff records; Agent usage metrics + declared model-call surfaces | Tokens/retry/model usage spans + baseline, optional handoff loop |
| AGENT_AUTH | 3 / 0 | Delegation records vs declared chains; Delegation records vs declared scopes; Tool calls vs declared delegation chains | Delegation records/tool actors + declared actor/scope chain |
| RAPP_A1 | 5 / 0 | A1 policy events + approved baseline; A1 policy events + registered applications; A1 policy distributions + threshold; A1 policy events + change requests | A1 policy typed JSON + approved baseline, app registry, scope |
| SBI | 8 / 0 | SBI call events + NF profiles; SBI call events + baseline flows; SBI message validation; SBI call events + registration registry | 5G SBI transaction records + NF profile/flow baseline |
| SLICE | 6 / 0 | Slice traffic events; Slice attachment events + RAN subnets; Slice usage metrics + quota; Slice SLA metrics | Network slice events + allocation/tenant/UE/metric baseline |
| AML | 10 / 0 | ML inference records + approved version; ML inference records + approved hash; ML inference records + drift baseline; ML inference records + variance baseline | ML inference records + approved model hash/version, OOD/drift baseline |
| DELEGATION | 8 / 0 | Delegation chain events + declared scopes; Delegation chain events; Delegation chain events + response text; Delegation chain events + token claims | Delegation-chain scope, actions, act-claims and per-action context |
| IDENTITY | 10 / 0 | Identity records + agent registry; Identity records + client mapping; Identity records + SPIFFE expectations; Identity records + chain state | Agent identity records + registry, OAuth/SPIFFE/attestation baseline |
| TOWER | 5 / 0 | Handover records + declared cell scope; Handover records + chain baseline; Handover records + session window; Handover records + agent declared scope | RAN handovers + declared cell scope / OAM topology |
| RAPP_SC | 5 / 0 | Onboarding manifest + artifact hash; Onboarding pipeline signature check; Package manifest vs approved SBOM; Runtime integrity check | WG11 artifacts, hashes, signatures and SBOM manifest |
| RAPP_EX | 4 / 0 | Egress metrics + baseline; Egress logs + allowlist; Query logs + declared selection; Access-control logs | WG11 egress events + allowlist and baseline |
| RAPP_LM | 4 / 0 | Service-mesh logs + baseline peers; Identity logs + credential ids; Network flow logs + expected peers; Runtime authorization logs | WG11 mesh/peer flow + trusted peer baseline/credential identity |
| MANUFACTURING | 10 / 0 | Manufacturing scenario-phase records; Pinned static capability + approved policy claims; Approved policy + observed dispatch + native readback claims; Observed dispatch + collector continuity + readback coverage claims | Qualified synthetic/OT domain typed records + immutable target/policy/actual-action binding; not real plant proof |

## 6. Full registered detector rule inventory (176 rows)

This appendix is **mechanically extracted from the catalog**, including true `EXECUTABLE` versus `REGISTER_ONLY` metadata after `EXECUTION_OVERRIDES`; it does not indicate these rules ran for a tenant. Rule hard-negative qualifiers remain in the [canonical source](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/risk-registry/detection-rule-catalog.ts).

| Rule ID | Family | Registration | Exact catalog check | Required named source |
|---|---|---|---|---|
| K8S-001 | K8S | EXECUTABLE | A pod is running as the root user | Kubernetes pod spec |
| K8S-002 | K8S | EXECUTABLE | A container has a privileged security context | Kubernetes pod spec |
| K8S-003 | K8S | EXECUTABLE | A service account holds cluster-admin role | RBAC bindings |
| K8S-004 | K8S | EXECUTABLE | No network policy covers a sensitive workload | Kubernetes manifests |
| K8S-005 | K8S | EXECUTABLE | A secret is mounted without encryption | Kubernetes pod spec |
| K8S-006 | K8S | EXECUTABLE | Pod exec/attach came from an unexpected principal | Kubernetes audit log |
| K8S-007 | K8S | EXECUTABLE | Pod uses host network, PID, or IPC access | Kubernetes pod spec |
| API-001 | API_AUTH | EXECUTABLE | Repeated 401/403 responses from the same principal | API access logs |
| API-002 | API_AUTH | EXECUTABLE | Many different accounts tried from the same IP address | API access logs |
| API-003 | API_AUTH | EXECUTABLE | An API key was used from an unusual location | API access logs |
| API-004 | API_AUTH | EXECUTABLE | Rate limit exceeded repeatedly | Gateway logs |
| API-005 | API_AUTH | EXECUTABLE | A deprecated authentication method is still in use | API access logs |
| API-006 | API_AUTH | EXECUTABLE | The same token was used across tenant boundaries | API access logs |
| DNS-001 | DNS | EXECUTABLE | Subdomain queries carry unusually high entropy | DNS logs |
| DNS-002 | DNS | EXECUTABLE | A CNAME points to an untrusted registrar | DNS zone data |
| DNS-003 | DNS | EXECUTABLE | A zone transfer was attempted | DNS logs |
| DNS-004 | DNS | EXECUTABLE | A flood of NXDOMAIN responses from one source | DNS logs |
| DNS-005 | DNS | EXECUTABLE | A stable name resolved with an unusually short TTL | DNS logs |
| CERT-001 | CERT | REGISTER_ONLY | An expired certificate is still active on an endpoint | TLS inspection |
| CERT-002 | CERT | REGISTER_ONLY | A certificate issuer changed without a recorded change | TLS inspection |
| CERT-003 | CERT | REGISTER_ONLY | A public endpoint presents a self-signed certificate | TLS inspection |
| CERT-004 | CERT | REGISTER_ONLY | A revoked certificate is still being presented | TLS inspection + CRL/OCSP |
| CERT-005 | CERT | REGISTER_ONLY | A certificate uses a weak signature algorithm | TLS inspection |
| TIME-001 | TIME | REGISTER_ONLY | The time source changed without a matching config update | NTP configuration |
| TIME-002 | TIME | REGISTER_ONLY | Clocks on different sources disagree beyond the threshold | Time sync telemetry |
| TIME-003 | TIME | REGISTER_ONLY | An event carries a timestamp in the future | Event timestamps |
| TIME-004 | TIME | REGISTER_ONLY | Events arrived out of order by timestamp | Event timestamps |
| TIME-005 | TIME | REGISTER_ONLY | Multiple time sources disagree | Time sync telemetry |
| MSG-001 | MSG_BUS | EXECUTABLE | A producer published to a topic it never declared | Message bus logs |
| MSG-002 | MSG_BUS | EXECUTABLE | A consumer subscribed to an unexpected topic | Message bus logs |
| MSG-003 | MSG_BUS | EXECUTABLE | A message is far larger than the baseline pattern | Message bus metrics |
| MSG-004 | MSG_BUS | EXECUTABLE | Message rate spiked above baseline | Message bus metrics |
| MSG-005 | MSG_BUS | EXECUTABLE | A message does not match the declared schema | Schema registry |
| MSG-006 | MSG_BUS | EXECUTABLE | The dead-letter queue is growing past the threshold | Queue metrics |
| SEC-001 | SECRETS | EXECUTABLE | A secret value appears in source code | Static source scan |
| SEC-002 | SECRETS | EXECUTABLE | An environment file was committed to the repo | Repo file inventory |
| SEC-003 | SECRETS | EXECUTABLE | A secret-bearing environment variable appeared in logs | Log inspection |
| SEC-004 | SECRETS | EXECUTABLE | A secret is older than the rotation policy allows | Secret metadata |
| SEC-005 | SECRETS | EXECUTABLE | A secret was read by a principal that never declared it | Secret access logs |
| DRIFT-001 | CONFIG_DRIFT | EXECUTABLE | A config file changed without a change request | Config history |
| DRIFT-002 | CONFIG_DRIFT | EXECUTABLE | A declared value no longer matches the observed value | Config vs runtime read |
| DRIFT-003 | CONFIG_DRIFT | EXECUTABLE | A default value changed from the approved baseline | Config history |
| DRIFT-004 | CONFIG_DRIFT | EXECUTABLE | A feature flag was toggled without an approval record | Flag audit log |
| DATA-001 | DATA_ACCESS | EXECUTABLE | A large volume of sensitive records was read at once | Data access logs |
| DATA-002 | DATA_ACCESS | EXECUTABLE | A query scanned a full table instead of using an index | Query telemetry |
| DATA-003 | DATA_ACCESS | EXECUTABLE | Data was read by a principal that never declared it | Data access logs |
| DATA-004 | DATA_ACCESS | EXECUTABLE | Data belonging to another tenant was accessed | Data access logs |
| DATA-005 | DATA_ACCESS | EXECUTABLE | An export moved an unusual volume of data | Export logs |
| AI-001 | AI_AGENT | REGISTER_ONLY | An agent invoked a model outside its declared set | Agent runtime telemetry |
| AI-002 | AI_AGENT | EXECUTABLE | An agent used a tool it never declared | Tool-call telemetry |
| AI-003 | AI_AGENT | EXECUTABLE | An agent wrote to memory outside its declared scope | Memory access logs |
| AI-004 | AI_AGENT | EXECUTABLE | An agent delegated to another agent with no recorded delegation chain | Delegation records |
| AI-005 | AI_AGENT | EXECUTABLE | An agent handed work to an agent with no registered identity | Handoff logs |
| AI-006 | AI_AGENT | REGISTER_ONLY | A prompt template changed without a change record | Prompt/config history |
| AI-007 | AI_AGENT | EXECUTABLE | An agent contacted a tool server not in the registry | Tool-call telemetry |
| AI-008 | AI_AGENT | EXECUTABLE | Context was pulled from a knowledge source that was never declared | Retrieval logs |
| AI-009 | AI_AGENT | REGISTER_ONLY | An agent exceeded its declared step or action budget | Agent runtime telemetry |
| AI-010 | AI_AGENT | REGISTER_ONLY | An agent acted for a user with no matching session record | Session/delegation records |
| SC-001 | SUPPLY_CHAIN | EXECUTABLE | A dependency version changed without a change record | Lockfile/SBOM diff |
| SC-002 | SUPPLY_CHAIN | EXECUTABLE | A package in the bill of materials carries a known vulnerability | SBOM vs vulnerability feed |
| SC-003 | SUPPLY_CHAIN | EXECUTABLE | A dependency appeared that is not in the declared bill of materials | SBOM vs lockfile |
| SC-004 | SUPPLY_CHAIN | EXECUTABLE | A built artifact does not match the recorded bill of materials | Build provenance |
| SC-005 | SUPPLY_CHAIN | EXECUTABLE | A dependency was pulled from an unapproved registry | Package install logs |
| SC-006 | SUPPLY_CHAIN | EXECUTABLE | An exploitability statement downgraded a vulnerability with no fix applied | VEX/CSAF records |
| SC-007 | SUPPLY_CHAIN | EXECUTABLE | A package publisher or maintainer changed | Registry metadata |
| SC-008 | SUPPLY_CHAIN | EXECUTABLE | A transitive dependency gained new network permissions | Dependency manifest diff |
| CICD-001 | CICD | REGISTER_ONLY | A pipeline definition changed without a change request | Pipeline config history |
| CICD-002 | CICD | REGISTER_ONLY | A pipeline ran from an unexpected trigger or branch | Pipeline run logs |
| CICD-003 | CICD | REGISTER_ONLY | A pipeline accessed a secret it never declared | Pipeline audit logs |
| CICD-004 | CICD | REGISTER_ONLY | A pipeline deployed to an environment outside its declared targets | Deploy records |
| CICD-005 | CICD | REGISTER_ONLY | A pipeline step ran with broader permissions than declared | Pipeline config vs run |
| PROMPT-001 | PROMPT | EXECUTABLE | Prompt text asks the model to reveal its system instructions | Agent prompt events (gen_ai.* attributes) |
| PROMPT-002 | PROMPT | EXECUTABLE | Prompt text matches a known jailbreak pattern | Agent prompt events |
| PROMPT-003 | PROMPT | EXECUTABLE | A later conversation turn uses "established fact" phrasing to manipulate context | Agent prompt events with turn position |
| PROMPT-004 | PROMPT | EXECUTABLE | Prompt text tries to override prior instructions | Agent prompt events |
| PROMPT-005 | PROMPT | EXECUTABLE | Input context exceeds the declared context limit | Agent prompt events with context size |
| RAG-001 | RAG | EXECUTABLE | A retrieved chunk came from a source outside the declared knowledge registry | Retrieval events + declared knowledge-source registry |
| RAG-002 | RAG | EXECUTABLE | A retrieved chunk contains instruction-like text | Retrieval chunk text |
| RAG-003 | RAG | EXECUTABLE | Retrieved-set embedding signature differs from the declared signature | Retrieval events + declared embedding signature |
| RAG-004 | RAG | EXECUTABLE | A chunk from one session surfaced in a different session | Retrieval events with session ids |
| MEM-001 | MEMORY | EXECUTABLE | A memory write arrived through an undeclared channel | Memory operations + declared channel list |
| MEM-002 | MEMORY | EXECUTABLE | A memory access touched a scope outside the declared scopes | Memory operations + declared scope list |
| MULTI-001 | MULTI_AGENT | EXECUTABLE | Two agents handed control back and forth in a loop | Agent handoff records per session |
| MULTI-002 | MULTI_AGENT | EXECUTABLE | An agent handoff happened without a declared handoff | Agent handoff records + declared handoff flags |
| MULTI-003 | MULTI_AGENT | EXECUTABLE | A handoff target has no registered agent identity | Agent handoff records + registration flags |
| MULTI-004 | MULTI_AGENT | EXECUTABLE | Different agents acted on the same target in one session | Agent handoff records per session and surface |
| MCP-001 | MCP_TOOL | EXECUTABLE | A tool was invoked that is not in the declared tool registry | Agent tool calls + declared tool registry |
| MCP-002 | MCP_TOOL | EXECUTABLE | A call reached an MCP server outside the declared server registry | Agent tool calls + declared server registry |
| MCP-003 | MCP_TOOL | EXECUTABLE | A tool presented a schema version different from its registered schema | Agent tool calls + registered tool schemas |
| MCP-004 | MCP_TOOL | EXECUTABLE | A tool call came from an unregistered agent | Agent tool calls + declared agent registry |
| EXFIL-001 | EXFIL | EXECUTABLE | Model output matched a sensitive-content pattern (key/identifier shape) | Agent output events |
| EXFIL-002 | EXFIL | EXECUTABLE | Model output contained text matching the system-prompt signature | Agent output events + system-prompt signature |
| EXFIL-003 | EXFIL | EXECUTABLE | A tool-call payload matched a sensitive-content pattern | Agent tool-call payloads |
| EXFIL-004 | EXFIL | EXECUTABLE | A model-chain call reached a destination outside the egress allowlist | Agent tool calls + egress allowlist |
| COST-001 | COST | EXECUTABLE | Token usage spiked above its declared baseline | Agent usage metrics + baselines |
| COST-002 | COST | EXECUTABLE | Retry volume crossed the retry-storm threshold | Agent usage metrics |
| COST-003 | COST | EXECUTABLE | Token usage spiked inside a session containing an agent handoff loop | Agent usage metrics + handoff records |
| COST-004 | COST | EXECUTABLE | A model call originated from an undeclared surface | Agent usage metrics + declared model-call surfaces |
| AGENT-AUTH-001 | AGENT_AUTH | EXECUTABLE | An observed actor is not in the declared delegation chain | Delegation records vs declared chains |
| AGENT-AUTH-002 | AGENT_AUTH | EXECUTABLE | An observed scope exceeds the declared delegation scopes | Delegation records vs declared scopes |
| AGENT-AUTH-003 | AGENT_AUTH | EXECUTABLE | A tool-call actor appears in no declared delegation chain | Tool calls vs declared delegation chains |
| RAPP-A1-001 | RAPP_A1 | EXECUTABLE | A policy diff exceeded the approved baseline threshold | A1 policy events + approved baseline |
| RAPP-A1-002 | RAPP_A1 | EXECUTABLE | A policy came from an application that is not in the registered set | A1 policy events + registered applications |
| RAPP-A1-003 | RAPP_A1 | EXECUTABLE | Policy distribution divergence crossed the declared threshold | A1 policy distributions + threshold |
| RAPP-A1-004 | RAPP_A1 | EXECUTABLE | A policy changed without a matching change request | A1 policy events + change requests |
| RAPP-A1-005 | RAPP_A1 | EXECUTABLE | A policy targets a scope outside the issuing application declared scope | A1 policy events + declared scopes |
| SBI-001 | SBI | EXECUTABLE | A consumer NF called a service outside its registered profile | SBI call events + NF profiles |
| SBI-002 | SBI | EXECUTABLE | A call flow deviated from the recorded baseline pattern | SBI call events + baseline flows |
| SBI-003 | SBI | EXECUTABLE | A service-interface message failed schema validation | SBI message validation |
| SBI-004 | SBI | EXECUTABLE | A consumer function called without ever registering with the discovery service | SBI call events + registration registry |
| SBI-005 | SBI | EXECUTABLE | A call router sent traffic to a producer outside the expected set | SBI routing events + expected producers |
| SBI-006 | SBI | EXECUTABLE | Service discovery request rate crossed the declared threshold | Discovery request metrics + threshold |
| SBI-007 | SBI | EXECUTABLE | A deregistered function was still active on the interface | SBI call events + registration registry |
| SBI-008 | SBI | EXECUTABLE | A service-interface call crossed slice boundaries | SBI call events + slice ids |
| SLICE-001 | SLICE | EXECUTABLE | Traffic from one slice appeared on another slice | Slice traffic events |
| SLICE-002 | SLICE | EXECUTABLE | A UE attached to a cell outside the slice RAN subnet | Slice attachment events + RAN subnets |
| SLICE-003 | SLICE | EXECUTABLE | Slice resource usage exceeded its allocated quota | Slice usage metrics + quota |
| SLICE-004 | SLICE | EXECUTABLE | A slice SLA metric breached its declared threshold | Slice SLA metrics |
| SLICE-005 | SLICE | EXECUTABLE | A data access crossed tenant boundaries inside a slice | Slice data-access events |
| SLICE-006 | SLICE | EXECUTABLE | A slice isolation policy was disabled or modified | Slice policy records |
| AML-001 | AML | EXECUTABLE | A served model version differs from the approved baseline | ML inference records + approved version |
| AML-002 | AML | EXECUTABLE | A served model hash differs from the approved hash | ML inference records + approved hash |
| AML-003 | AML | EXECUTABLE | Input feature distribution drift crossed the declared threshold | ML inference records + drift baseline |
| AML-004 | AML | EXECUTABLE | Prediction variance exceeded baseline plus three standard deviations | ML inference records + variance baseline |
| AML-005 | AML | EXECUTABLE | Out-of-distribution score crossed the threshold | ML inference records + OOD scores |
| AML-006 | AML | EXECUTABLE | Model query rate crossed the declared threshold | ML query metrics + threshold |
| AML-007 | AML | EXECUTABLE | The training data source changed without an approval record | Training provenance records |
| AML-008 | AML | EXECUTABLE | Output distribution divergence crossed the declared threshold | ML inference records + output baseline |
| AML-009 | AML | EXECUTABLE | The same input produced different outputs across repeated inferences | ML inference records with fingerprints |
| AML-010 | AML | EXECUTABLE | A model was accessed by a consumer outside the registered set | ML inference records + consumer registry |
| DEL-001 | DELEGATION | EXECUTABLE | A delegation chain expanded its observed scope | Delegation chain events + declared scopes |
| DEL-002 | DELEGATION | EXECUTABLE | A delegation chain head was not authenticated | Delegation chain events |
| DEL-003 | DELEGATION | EXECUTABLE | Delegation chain continuity was broken | Delegation chain events |
| DEL-004 | DELEGATION | EXECUTABLE | A sub-agent response carried a hidden command pattern | Delegation chain events + response text |
| DEL-005 | DELEGATION | EXECUTABLE | A cross-agent privilege change was observed | Delegation chain events |
| DEL-006 | DELEGATION | EXECUTABLE | An RFC 8693 act-claim splice was detected in a chain | Delegation chain events + token claims |
| DEL-007 | DELEGATION | EXECUTABLE | An action was taken outside the declared delegation scope | Delegation chain events + declared actions |
| DEL-008 | DELEGATION | EXECUTABLE | A delegation justification gap exceeded the declared threshold | Delegation chain events + justification timing |
| ID-001 | IDENTITY | EXECUTABLE | An agent identity is unknown to the registry | Identity records + agent registry |
| ID-002 | IDENTITY | EXECUTABLE | An OAuth client id is not mapped to a registered agent | Identity records + client mapping |
| ID-003 | IDENTITY | EXECUTABLE | A presented SPIFFE id differs from the expected identity | Identity records + SPIFFE expectations |
| ID-004 | IDENTITY | EXECUTABLE | A delegation chain was not preserved across the hop | Identity records + chain state |
| ID-005 | IDENTITY | EXECUTABLE | A scope reduction was not enforced down-chain | Identity records + scope state |
| ID-006 | IDENTITY | EXECUTABLE | An agent attestation is missing or invalid | Identity records + attestation |
| ID-007 | IDENTITY | EXECUTABLE | An agent profile does not match its execution surface | Identity records + surface |
| ID-008 | IDENTITY | EXECUTABLE | An agent trust profile is expired | Identity records + trust profile expiry |
| ID-009 | IDENTITY | EXECUTABLE | An agent lineage chain is broken | Identity records + lineage |
| ID-010 | IDENTITY | EXECUTABLE | A just-in-time grant was used as a standing privilege | Identity records + grant type |
| TOWER-001 | TOWER | EXECUTABLE | A handover moved a device to a cell outside the declared scope | Handover records + declared cell scope |
| TOWER-002 | TOWER | EXECUTABLE | A device handover chain exceeded the declared baseline maximum | Handover records + chain baseline |
| TOWER-003 | TOWER | EXECUTABLE | The same device appeared on multiple cells inside an implausible window | Handover records + session window |
| TOWER-004 | TOWER | EXECUTABLE | An agent accessed a cell outside its declared scope | Handover records + agent declared scope |
| TOWER-005 | TOWER | EXECUTABLE | A device moved to a cell that is not in the declared topology | Handover records + declared topology snapshot |
| RAPP-SC-001 | RAPP_SC | EXECUTABLE | An application artifact hash differs from the approved baseline | Onboarding manifest + artifact hash |
| RAPP-SC-002 | RAPP_SC | EXECUTABLE | An application artifact is missing a signature or the signature is invalid | Onboarding pipeline signature check |
| RAPP-SC-003 | RAPP_SC | EXECUTABLE | Observed dependencies drifted from the approved set | Package manifest vs approved SBOM |
| RAPP-SC-004 | RAPP_SC | EXECUTABLE | An application binary was modified after onboarding | Runtime integrity check |
| RAPP-SC-005 | RAPP_SC | EXECUTABLE | An unsigned application came from a third-party registry | Registry metadata + signature state |
| RAPP-EX-001 | RAPP_EX | EXECUTABLE | Egress volume exceeded baseline plus the declared threshold | Egress metrics + baseline |
| RAPP-EX-002 | RAPP_EX | EXECUTABLE | An egress destination sits outside the approved allowlist | Egress logs + allowlist |
| RAPP-EX-003 | RAPP_EX | EXECUTABLE | A data selection was broader than the declared pattern | Query logs + declared selection |
| RAPP-EX-004 | RAPP_EX | EXECUTABLE | Telemetry was read by an application that is not authorized for it | Access-control logs |
| RAPP-LM-001 | RAPP_LM | EXECUTABLE | Traffic flowed between two applications never paired in the baseline | Service-mesh logs + baseline peers |
| RAPP-LM-002 | RAPP_LM | EXECUTABLE | The same credential was reused across application boundaries | Identity logs + credential ids |
| RAPP-LM-003 | RAPP_LM | EXECUTABLE | East-west traffic reached a peer outside the expected set | Network flow logs + expected peers |
| RAPP-LM-004 | RAPP_LM | EXECUTABLE | A privilege escalation was observed inside the service mesh | Runtime authorization logs |
| MFG-001 | MANUFACTURING | EXECUTABLE | An operation was recorded as capable or executed with no qualified delegated-authority evidence in the same run | Manufacturing scenario-phase records |
| MFG-002 | MANUFACTURING | EXECUTABLE | The observed effect landed on a different resource than the declared request or approval target | Manufacturing scenario-phase records |
| MFG-003 | MANUFACTURING | EXECUTABLE | An executed operation has no downstream readback or consequence evidence in the same run | Manufacturing scenario-phase records |
| MFG-004 | MANUFACTURING | EXECUTABLE | A downstream readback names a different resource than the recorded action | Manufacturing scenario-phase records |
| MFG-005 | MANUFACTURING | EXECUTABLE | A gate decision denied the operation but an execution record still exists in the same run | Manufacturing scenario-phase records |
| MFG-AUTH-001 | MANUFACTURING | EXECUTABLE | A verified callable write path is reachable but excluded from the approved delegated scope | Pinned static capability + approved policy claims |
| MFG-EFF-001 | MANUFACTURING | EXECUTABLE | A transaction-bound commit and independent qualified readback name a different resource than the approved target | Approved policy + observed dispatch + native readback claims |
| MFG-EFF-002 | MANUFACTURING | EXECUTABLE | A qualified dispatch has no consequence witness after qualified coverage and an elapsed deadline | Observed dispatch + collector continuity + readback coverage claims |
| MFG-QMS-001 | MANUFACTURING | EXECUTABLE | A committed release-class operation is excluded by the complete effective approved roster/scope | Observed dispatch + approved policy claims |
| MFG-OBS-001 | MANUFACTURING | EXECUTABLE | A registered collector exceeded its qualified heartbeat tolerance with no qualified planned pause | Collector continuity claims |

## 7. All 45 control profiles: individual evidence requirements and activation truth

Canonical [control catalog](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts). `Visibility` below means the catalog lists a projection implementation; NOT a successful test or effective control. Only C7/C9/C16 have `SPECIALIZED_TEST` kind in this manifest; other UCP infrastructure may be separately activated and must be checked before claim.

| Control | Family | Objective | Cataloged intended evidence/source | Visibility in code | Supported result claim |
|---|---|---|---|---|---|
| C7 | TMF | Audit trail completeness | Frozen run with required event categories and policy | Not listed | Specialized bounded test only when qualified case/run (priority) |
| C9 | TMF | Duration anomaly threshold | Frozen qualified timing bundle and threshold | Not listed | Specialized bounded test only when qualified case/run (priority) |
| C16 | TMF | Token expenditure cap | Frozen qualified run/usage bundle and policy | Not listed | Specialized bounded test only when qualified case/run (priority) |
| G01 | G | AI estate inventory completeness | Inventory / source discovery | Not listed | Profile/reference; check Control Proof activation |
| G02 | G | Accountable ownership and responsibility | Governance records | Not listed | Profile/reference; check Control Proof activation |
| G03 | G | AI acceptable use and approval | Approved use policy | Not listed | Profile/reference; check Control Proof activation |
| G04 | G | AI risk and impact assessment | Risk registry | Not listed | Profile/reference; check Control Proof activation |
| G05 | G | Regulatory applicability and obligations | Framework mappings | Not listed | Profile/reference; check Control Proof activation |
| G06 | G | Third-party AI and vendor assurance | Vendor inventory | Not listed | Profile/reference; check Control Proof activation |
| G07 | G | Change and lifecycle governance | Build provenance / CI | Not listed | Profile/reference; check Control Proof activation |
| S01 | S | Privileged tool authorization paths | Static security analysis | Not listed | Profile/reference; check Control Proof activation |
| S02 | S | Multi-tenant isolation | Tenant-isolation analyzer | Not listed | Profile/reference; check Control Proof activation (priority) |
| S03 | S | MCP and tool exposure | MCP/AI AppSec analysis | Not listed | Profile/reference; check Control Proof activation (priority) |
| S04 | S | Secrets and credential protection | Static and LLM heuristics | Not listed | Profile/reference; check Control Proof activation (priority) |
| S05 | S | Prompt and input trust boundaries | Static and runtime probes | Not listed | Profile/reference; check Control Proof activation (priority) |
| S06 | S | RAG retrieval and exfiltration paths | RAG/dataflow analysis | Not listed | Profile/reference; check Control Proof activation |
| S07 | S | Secure AI SDLC and build provenance | CI/SARIF provenance | Not listed | Profile/reference; check Control Proof activation |
| A01 | A | Excessive effective authority | Five-plane IAM/policy | Not listed | Profile/reference; check Control Proof activation (priority) |
| A02 | A | Undeclared executable capability | U5 five-plane + static source | Listed | Profile/reference; check Control Proof activation (priority) |
| A03 | A | Delegated Action Integrity | DAI nine dimensions | Listed | Profile/reference; check Control Proof activation (priority) |
| A04 | A | Observed action outside approved policy | Qualified action witness | Listed | Profile/reference; check Control Proof activation (priority) |
| A05 | A | Agent and principal identity continuity | Identity continuity | Listed | Profile/reference; check Control Proof activation (priority) |
| A06 | A | Human approval and mediation integrity | Approval / mediation | Listed | Profile/reference; check Control Proof activation (priority) |
| A07 | A | Least privilege and unused grants | IAM plus capability | Not listed | Profile/reference; check Control Proof activation |
| A08 | A | Cross-agent delegation propagation | Delegation lineage | Listed | Profile/reference; check Control Proof activation |
| R01 | R | Action lifecycle and side-effect traceability | Action lifecycle witness | Not listed | Profile/reference; check Control Proof activation |
| R02 | R | Consequential effect envelope | Effect bound comparator | Listed | Profile/reference; check Control Proof activation (priority) |
| R03 | R | Runtime guardrail enforcement evidence | Decision + denial witness | Listed | Profile/reference; check Control Proof activation |
| R04 | R | Emergency intervention effectiveness | Kill-switch witnesses | Not listed | Profile/reference; check Control Proof activation |
| R05 | R | Recovery and resumption authorization | Recovery audit | Not listed | Profile/reference; check Control Proof activation |
| R06 | R | AI incident response and recovery | Incident workflow | Not listed | Profile/reference; check Control Proof activation |
| R07 | R | Continuous runtime monitoring | OTel and source continuity | Not listed | Profile/reference; check Control Proof activation |
| L01 | L | Prompt-injection resistance under test | Runtime / LLMVerify | Not listed | Profile/reference; check Control Proof activation |
| L02 | L | Sensitive output leakage | PII/secret signal | Not listed | Profile/reference; check Control Proof activation |
| L03 | L | Hallucination risk and grounding | LLMVerify heuristics | Not listed | Profile/reference; check Control Proof activation |
| L04 | L | Unsafe output risk | LLM risk indicator | Not listed | Profile/reference; check Control Proof activation |
| L05 | L | Structured output and consistency | Schema / consistency | Not listed | Profile/reference; check Control Proof activation |
| E01 | E | Evidence integrity and provenance | Evidence Core | Listed | Profile/reference; check Control Proof activation (priority) |
| E02 | E | Event stream coverage and continuity | OTel continuity | Not listed | Profile/reference; check Control Proof activation |
| E03 | E | Source authority and plane correlation | Environment binder | Listed | Profile/reference; check Control Proof activation |
| E04 | E | Contradiction and source reconciliation | Evidence projections | Not listed | Profile/reference; check Control Proof activation |
| E05 | E | Independent deterministic replay | Replay manifest | Listed | Profile/reference; check Control Proof activation |
| P01 | P | Bias and fairness evaluation coverage | Bias testing | Not listed | Profile/reference; check Control Proof activation |
| P02 | P | Transparency and explainability | Documentation review | Not listed | Profile/reference; check Control Proof activation |
| P03 | P | Training data governance and lineage | ISAF lineage | Not listed | Profile/reference; check Control Proof activation |

## 8. Every canonical typed intake profile (23 registered routes)

These are **format/transport adapters** and preserve declared profile semantics; none issues a HAIEC verdict at intake. A route existing in source does not prove external SaaS authorization, live provider integration or producer qualification. Authoritative mapping: [intake-profiles.ts](https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/adapters/intake-profiles.ts). `haiec_ingest_structured` dispatches these named intake profiles through the same mapper, where its required permissions and binder exist.

| Profile | Route | Evidence type | Accepted / expected shape |
|---|---|---|---|
| generic | `/api/ingest/structured` | `'competition_structured_event'` | JSON object/array, JSONL, CSV + columnMapping |
| log | `/api/ingest/log` | `'competition_log_line'` | Plain log lines: RFC5424, common web, JSONL, auto |
| api_transaction | `/api/ingest/api-transaction` | `'api_transaction_event'` | Typed API request/response JSON |
| alarm | `/api/ingest/alarm` | `'alarm_event'` | Alarm JSON or CSV |
| kpi | `/api/ingest/kpi` | `'kpi_snapshot'` | KPI JSON or CSV |
| policy | `/api/ingest/o1` | `'o1_record'` | Policy/IAM text or JSON document |
| oran_wg11 | `/api/ingest/oran-wg11` | `oran_wg11_threat_feed` | O-RAN WG11 typed JSON or supported CSV with column mapping |
| a1_policy | `/api/ingest/a1-policy` | `a1_policy_event` | A1 policy event JSON |
| o1 | `/api/ingest/o1` | `o1_record` | O1 configuration/performance/fault event JSON with subtype |
| ran_handover | `/api/ingest/ran-handover` | `'ran_handover'` | RAN handover JSON or CSV |
| slice_flow | `/api/ingest/slice-flow` | `'slice_flow'` | Network slice JSON |
| sbi_transaction | `/api/ingest/sbi-transaction` | `'sbi_transaction'` | 5G SBI transaction JSON |
| tmf | `/api/ingest/tmf` | `'tmf_record'` | TMF Open API JSON |
| oam_topology | `/api/ingest/oam-topology` | `'oam_topology_snapshot'` | Topology snapshot JSON |
| cyclonedx | `/api/ingest/cyclonedx` | `'sbom_cyclonedx'` | CycloneDX JSON v1.4/1.5/1.6 only |
| logsense_bundle | `/api/ingest/logsense-bundle` | `LOGSENSE_BUNDLE_EVIDENCE_TYPE` | Validated LogSense competition JSON bundle |
| otel | `/api/ingest/otel` | `'otlp_trace'` | OTel export JSON (bounded mapped profile) |
| model_gateway | `/api/ingest/model-gateway` | `'model_gateway_call'` | Model gateway call JSON |
| digital_twin | `/api/ingest/digital-twin` | `'kpi_snapshot'` | KPI/digital twin JSON or CSV |
| scenario_run | `/api/ingest/scenario-run` | `'scenario_run_event'` | Scenario-run JSON |
| manufacturing_source | `/api/ingest/structured` | `'manufacturing_scenario_event'` | Typed synthetic manufacturing JSON |
| servicenow_aict | `/api/ingest/servicenow-aict` | `'servicenow_aict_asset'` | ServiceNow AI Control Tower exported JSON |
| servicenow_agent_execution | `/api/ingest/servicenow-agent-execution` | `'servicenow_execution_record'` | ServiceNow agent-execution JSON |
| servicenow_table | `/api/ingest/servicenow-table` | `'servicenow_table_row'` | ServiceNow table export JSON |
| aws_agentcore | `/api/ingest/aws-agentcore` | `'aws_agentcore_asset'` | AWS AgentCore exported JSON |
| aws_cloudwatch | `/api/ingest/aws-cloudwatch` | `'aws_cloudwatch_log_event'` | AWS CloudWatch exported log JSON |

## 9. Workarounds — what works, and what does NOT transfer evidence authority

| Customer lacks | Valid lower-friction path | What HAIEC can truthfully say | What cannot be claimed |
|---|---|---|---|
| GitHub installation | Local ZIP/tar.gz source upload, or eligible local scan bundle | Source-scoped scan with provided revision and limitations | No repository branch/commit verified unless separately qualified |
| Live IAM credentials | Export JSON of IAM identity policy/roles/boundary/SCP/resource policy where available, submit via typed policy document/intake; optionally signed producer export after contract validation | Review declared policy, missing conditions; compare context if canonical owner supports source basis | **No automatic EFFECTIVELY_GRANTED fact** or universal AWS permission equivalence |
| Continuous telemetry | Upload JSONL/CSV/log/OTLP export with timestamps and explicit source identity, binder + typed schema | Historical selected events and bounded anomalies; qualify provenance | Not “continuous monitoring enabled”, complete stream or observed event absence |
| Agent instrumentation | Static repo + tool/MCP manifests; optionally manually confirmed requested/delegation documents | Declared+code-capable candidates and gaps | No observed action/DAI execution proof |
| Executable control producer | Applicable catalog/control profile + evidence checklist or existing visibility projection | NOT_ASSESSED / coverage limitation / control context | No UCP pass/fail result until real runner and durable stores active |
| Target action readback | Provider dispatch/audit export with exact transaction + target state, authenticated V2 producer if supported | Candidate action lifecycle / observed assertions with explicit quality | Effect verified by logs or timestamps alone |
| Sector-native connector | Convert source export to supported strict typed profile (ServiceNow, CloudWatch, TMF, O-RAN, etc.) | Accepted bounded external source records | Native live integration, effect mediation, or independent verification |

**Minimum useful event record (conceptual, not a guaranteed accepted schema):** organization is derived from authenticated API key; `binderId` is separately registered; `eventTime`, authoritative stable `sourceSystem`, exact `aiSystemId`/`surfaceId`/`target`, `recordId`, `actor/principal`, `action/operation`, `resource`, `result`, `correlationId/traceId`, relevant `detection.class` and source producer lineage. This is a field checklist, **not** a request payload to submit verbatim; each exact typed mapper has its own documented contract. Avoid credentials, raw sensitive prompts and PII unless scoped/minimized.

## 10. Cross-system joins — current state and necessary data

E6 introduced the [organization estate summary](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/estate-summary.ts) and system Assurance Case. **It did not deliver a qualified organization-wide agent/tool/target relationship graph.** Existing Constellation is scan/evaluation-bound. Owner-scoped counts and same-org systems **are not** equivalent to a proved shared agent, principal, tool or target. For a real cross-system effect/delegation join need independent source-qualified: stable org/system/agent IDs, provider-issued principal or agent runtime identity, exact resource/tool server IDs, delegation chain and policy scope, correlation/transaction IDs, event window and trusted source coverage. If unavailable, show candidate/unverified, never a solid graph edge.

## 11. Practical first-client intake packages

- **Code-first (lowest friction):** repo with consent or source ZIP/tar.gz, relevant config/manifests, `package-lock.json`/`requirements.txt`/`go.mod` etc, scoped business intent optionally. Deliver static findings, qualified reachable actions where supported and evidence gap list.
- **Audit-first/no repo:** applicable control/framework + approved policy and signed/typed evidence exports, optional SARIF and control result. Deliver assessment coverage/unknowns and control context, not certified compliance.
- **Runtime-first:** OTLP GenAI/MCP traces, logs JSONL and source binder/interval, agent/tool registry or known policy to establish deviations. Deliver monitored source health and bounded rule findings; observed ≠ effect.
- **Authority-first:** approved Operating Envelope + declared delegation/identity + AWS IAM observer or exported IAM JSON (as declared), plus source/trace if available. Deliver difference/unknowns; never promote import to effective grant.
- **Target-effect-focused:** all relevant request/permission/delegation plus provider native dispatch acknowledgement, independent signed source readback and exact correlation. This remains NOT_WIRED where target integration absent.

## 12. Customer UX/product gaps found while constructing the map

1. **One intake navigator:** ask what customer can provide, select the smallest accepted source path and show eligibility/owner. Do not force a GitHub repo, all five planes, or a compliance wizard.
2. **File-to-capability preflight:** distinguish file parsed, schema recognized, binder qualified, typed detector scheduled, results executed, U5 evaluated, and target effect proven. A successful upload can stop at the first rung.
3. **Export templates:** deterministic schemas and sample commands for IAM exports, log JSONL, tool/handoff traces, source registration and approval scope; explicit export provenance. Never label a hand-authored JSON as provider-observed IAM.
4. **Control requirements matrix:** filter control by *needed evidence source*, mapping maturity, exact test readiness and required human approval. Reuse the catalog / UCP Control Proof; no second engine.
5. **Evidence coverage map:** system/action/plane/source/readiness matrix with source last-seen, identity match, qualified coverage, limitations and next step, not a green score.
6. **Cross-system identity transport:** candidate matching and explicit corroboration in later scoped project; no org-wide graph claim today.

## 13. Source references and update rule

- [Detection registry / 176 rule definitions](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/risk-registry/detection-rule-catalog.ts), [typed batch shape](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detection-evidence-batch.ts), [runner](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detection-runner.ts), [ingest sweep](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detection-ingest-hook.ts), [OTLP sweep](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detection-otlp-hook.ts).
- [Intake profile owner](https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/adapters/intake-profiles.ts), [structured ingest](https://github.com/subodhkc/haiec-website/blob/Main/app/api/ingest/structured/route.ts), [policy ingest](https://github.com/subodhkc/haiec-website/blob/Main/app/api/ingest/policy/route.ts), [raw logs](https://github.com/subodhkc/haiec-website/blob/Main/app/api/ingest/log/route.ts), [canonical evidence intake](https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/ingest-service.ts).
- [Source scan orchestrator](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/ci/scan-orchestrator.ts), [source ZIP/tar transport](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/source-upload-transport.ts), [SARIF import adapter](https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/adapters/sarif-import-adapter.ts).
- [AWS effective-grant observer](https://github.com/subodhkc/haiec-website/blob/Main/lib/iam-grant/effective-grant-observation.ts), [AWS observation route](https://github.com/subodhkc/haiec-website/blob/Main/app/api/inventory/systems/[id]/effective-grants/route.ts), [DAI document upload](https://github.com/subodhkc/haiec-website/blob/Main/app/api/dai/evidence-upload/route.ts), [current system-authority read model](https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/system-action-authority.ts).
- [Control catalog](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts), [Control Visibility](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/types.ts), [Control Proof](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/control-proof.ts), [UCP response](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-test/ucp/response-workflow.ts), [producer registry](https://github.com/subodhkc/haiec-website/blob/Main/lib/engine-registry/producer-registry.ts).

**Do not promote catalog changes, discovered code, source adapters or generated charts into “deployed/ready/verified” without tenant-scoped execution evidence. Rebuild this mechanical appendix on canonical changes and preserve original revision identity.**
