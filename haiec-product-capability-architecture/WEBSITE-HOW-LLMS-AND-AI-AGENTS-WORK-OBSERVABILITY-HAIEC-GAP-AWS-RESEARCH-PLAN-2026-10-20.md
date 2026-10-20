# HAIEC | How LLMs and AI Agents Work
## Source-validated technical research, AWS model-detection status, observable behavior, three-part animation and full public page contract

**Date:** 2026-10-20. **Source & design reviewed; page HTML companion committed separately.** No HAIEC production source, navigation, AWS runtime, credentials or model instrumentation modified. **Proposed URL:** \`/learn/how-ai-systems-work\`. **Design:** [complete interactive light-first page](design-references/how-ai-systems-work-2026-10-20/llm-vs-agent-visibility-consequences-interactive.html).

### Executive product decision

**Two different subjects, one shared explanatory page:** (1) how a **model** is trained, deployed, served and invoked; (2) how an **AI agent application** orchestrates model calls and tools and can cause external effects. A third **HAIEC** view reveals what independent technical evidence can establish about risk, authority and consequence.

**Core enterprise headline:** **"See the model. Follow the agent. Understand the consequence."**
**Differentiating supporting message:** \`An LLM generates outputs from inputs and parameters. An agent turns model outputs into tool requests, application decisions and potentially consequential actions. HAIEC helps you examine the visible evidence at each boundary, identify source-capable paths early, and compare authority and control evidence with deterministic assurance.\`
**Short editorial promise:** \`Where ordinary model monitoring ends, consequence-aware assurance begins.\` Avoid suggesting competing observability products are useless. Complement model observability, runtime guardrails and distributed tracing.

**This is a teaching/explorer page** rather than another HAIEC SKU, model internals debugger, agent chatbot, TensorBoard competitor or regulator certification. The page should be technically correct, premium customer-facing, clear, animated and interactive, no customer-facing internal/prototype/fictional badges, and **no em dashes**. Explain a scenario as \`Explore a refund action\`, not a customer transaction. Show no fake telemetry or completed scans.

## 1. What "inspect an LLM" and "inspect an agent" actually mean

**LLM/model boundary** includes training/provenance, version/hash/weights (where accessible), tokenization and context construction, inference/request settings, serving/runtime metrics and returned text/tool-call proposals. A prompt is not a training update; retrieval augmented generation (RAG) and the instruction stack influence inference context without changing model weights. Fine-tuning and full training are distinct offline jobs with dataset lineage, model artifacts, evaluations and deployment promotion. Fine-tuning is not generally visible or performed for closed managed providers by an app using their inference API.

**Agent/application boundary** includes system and developer instructions, RAG/memory, orchestration controller, available tools, registry/schema and MCP transport, SDK function calls, auth identity, policies and human approvals, tool outputs, worker queues, downstream resource operations and target-side effect evidence. An LLM may **propose** a tool call; application/orchestrator code normally executes the call. An agent can contain **multiple model invocations and loops**, not one linear thought trace. Some deterministic/non-LLM controllers also qualify as agents.

**The model's internal reasoning is not a universal data source.** A self-hosted LLM may expose weights, activations, logits, KV-cache/serving metrics and experimental interpretability probes with explicit access and engineering work; these are not faithful readable private thoughts. Managed providers may supply token counts, error/latency, content where contract allows, and sometimes summaries or omission of thinking; do not treat returned summaries as full raw chain-of-thought. **Agent-owned observable decision traces** (selected tools, arguments, results, approvals and action events) can be instrumented even with a managed LLM. Self-hosting is not required for that.

### The two primary controlled dimensions are independent

| Deployment arrangement | Model-level visibility | Agent-level visibility | HAIEC product relevance |
| --- | --- | --- | --- |
| Managed LLM API + customer-owned agent runtime | Request/response, model IDs, tokens, latency, available log/guardrail signals if collected; no weights/activations | Full *instrumented application side* selection, tools, logs, permission checks, code; exact downstream effects depend on external systems | Source analysis, observed tool spans and effective IAM facts from connected sources, DAI and deterministic assurance |
| Managed LLM API + managed/third-party agent | Provider exposure varies; potentially limited or available via provider-specific logs | What provider SDK/gateway exports plus customer-owned downstream API/identity data; cannot assume access to hidden internal orchestration | Provider OTel/CloudWatch adapters, source info if available, bounded action proof, explicit coverage |
| Self-hosted LLM + customer-owned agent | Serving metrics and model artifacts, potential logits/activation instrumentation, offline evaluation datasets and drift | Full *instrumentable* application and tool boundary plus independent target records | Strongest opportunity to correlate model version and app/tool consequences |
| Self-hosted LLM + external/opaque agent orchestrator | Model-serving data owned locally | Agent logic/tools may be opaque; self-hosted model alone does NOT confer control over external orchestration | Focus on inference observations and any qualified external target witnesses |

**Important:** Even when both model and agent self-hosted, raw thought transparency remains nontrivial and often fundamentally indeterminate. Correct promise: observable computational and business decision boundaries.

## 2. AWS TIP/FYUZ LLM/NLM enhancement: verified status 2026-10-20

Earlier Seattle/TIP planning targeted Model/NLM production evidence and multi-agent assurance; Nov 1–3 2026 event was ahead as of this review. Earlier user event proofs C7/C9/C16 are **TM Forum scoped** and are not by themselves proof a new AWS model-quality/drift product feature was deployed. Don't confuse NLM training/federated-learning research with shipped model-monitoring capability.

**Current HAIEC code directly inspected:**
- \`lib/ai-security/detectors/aml-detector.ts\` (model records) has AR-47..AR-53 classification for model version/hash mismatch, feature drift, prediction variance, OOD, query rate, training source mismatch, output KL divergence, different repeated outputs, unregistered consumer. These are **evidence-driven signal classifiers**, not proof every organization has live telemetry or that ML drift equals an attack.
- \`app/api/runtime-security/drift/baseline/route.ts\` and \`drift/check/route.ts\`: authenticated, persisted endpoints that send up to 10 sample prompts to a customer endpoint expecting \`POST {prompt}\`, calculate response-length, latency and vocabulary/Jaccard drift; not a general large-scale foundation-model semantic benchmarking pipeline. \`baseline\` requires 5+ sample prompts; endpoint integration depends on auth/network support and must be security-reviewed for SSRF/target allowlisting before public "scan any URL" promotion.
- \`app/api/compliance-twin/drift/route.ts\`: PSI and KS style statistical routines and drift contract. Presence of implementation does not establish robust zero-range handling, statistical validity on insufficient data or live re-evaluation.
- \`app/dashboard/runtime-security/drift/page.tsx\`: a real drift baseline/check UI exists, not necessarily fully verified production for each provider.
- \`app/api/otlp/v1/traces/route.ts\` + \`lib/evidence/adapters/otlp-receiver.ts\`: receives trace/metric/log evidence via bounded, authenticated structured ingestion; hashes/refers to raw payload instead of duplicating prompt content as customer canonical evidence. Receipt of OTLP alone is **not** an applied action or evaluated proof.
- \`lib/integrations/aws/normalize.ts\`: AWS AgentCore asset discovery and **raw** CloudWatch event normalization. It explicitly leaves event contents unparsed for later qualification. This is a connector building block, not a Bedrock model-invocation semantics end-to-end detector.
- \`docs/product/CURRENT-PRODUCT-TRUTH.generated.md\` and \`lib/engine-registry/producer-registry.ts\`: product facts indicate active SaaS static/runtime/inventory producers and held MCP package ingestion; LLMVerify and ISAF Logger are standalone packages, not canonical persisted SaaS evidence producers.
- \`docs/how-to/08-llmverify.md\`: documents developer-side content verification and utilities; **does not** upgrade it to HAIEC canonical assurance or install a customer gateway by default.
- \`app/ai-security/page.tsx\` documents static prompt/RAG, source checks and authorized runtime tests.
- User's earlier AWS event work tracked model evidence/telemetry and control demonstrations; no complete, fresh model-evidence ingest → calibrated drift evaluation → signed case → production UI/real Bedrock E2E chain established in the reviewed sources.

**Status call:** **PARTIALLY IMPLEMENTED, END-TO-END NOT VERIFIED.** Foundational detectors/SDK-based integration/routes exist. The **AWS-specific production ready NLM/LLM model observability extension, hosted+managed evidence normalization, calibrated model eval baselines, current evaluation binding, model/agent joined runtime proof, and repeatable production acceptance** are still **not demonstrated by this read-only audit**. Do not change this to DONE because a route, model field, test sample, or planned deck exists. A genuine completion claim needs source-linked evidence of the whole join and eligible live tests for both model-only and agent combinations.

**Previous Drive research also reviewed:**
- \`HAIEC Runtime Instrumentation Gap: What Exists vs What Production Lacks\` (6 Sep): need broader runtime adapters, independently authorized tool decisions, qualified target-side witnesses, queues/handoffs and cross-process evidence.
- \`HAIEC Telemetry, Monitoring & Reporting Consolidated Reference\`: traces, metrics, logs, sensitive raw data stays with source; trace and metric dimensional normalization, owner actions and cross-correlation.
- \`Doc Q v1.3 AI Risk & Monitoring Extension\`: deterministic thresholds, baseline owners, AR model/agent risk taxonomy; explicit \`MODEL_DRIFT != MODEL_POISONED\` and \`TONE_ESCALATION != DRIFT\`. Implementation specifications are **not** deployment evidence.

## 3. Outside technical research and reuse

Use current official docs rather than reinventing instrumentation.

1. **OpenTelemetry GenAI conventions:** https://opentelemetry.io/blog/2026/genai-observability/ and https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md . Inference spans, model/provider, input/output/cache tokens, trace parent, tool/handoff spans. Full content recording is opt-in/privacy-sensitive and may not be needed. Schema may be under development; version mapping must be pinned.
2. **AWS Bedrock invocation logging:** https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html . Invocation logging requires explicit enablement, is endpoint-specific, can include content, model request ID and usage. Manage region, account, CloudWatch vs S3 and endpoint coverage (Bedrock runtime vs mantle caveat).
3. **AWS CloudWatch GenAI:** https://docs.aws.amazon.com/en_en/AmazonCloudWatch/latest/monitoring/GenAI-observability.html . Existing Amazon dashboards cover inference metrics, token cost, AgentCore and trace context. HAIEC should consume/source-link when authorized, not clone raw observability UI.
4. **AWS Guardrails:** https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-how.html . A guardrail check is a bounded provider input/output assessment. It does **not** prove downstream action/authorization for every external tool.
5. **OpenAI Agents SDK tracing:** https://openai.github.io/openai-agents-js/guides/tracing/ . Generation, tool, handoff, guardrail spans are observable in customer instrumentation, regardless of managed model weights. Default/export settings, ZDR requirements and content privacy matter.
6. **Managed model reasoning privacy:** https://platform.claude.com/docs/en/about-claude/models/extended-thinking-models . Some providers return reasoning summaries/omissions; do not promise raw thought access.
7. **Operational guardrail timing:** https://openai.github.io/openai-agents-python/guardrails/ . Parallel input guardrails may trip after tools executed, while blocking preflight guardrails and tool-level guards cover different boundaries. HAIEC must describe actual installed/enforced controls, not just "guardrail exists."

**Build / reuse / defer:**
- REUSE OTel, Bedrock invocation logs and metrics, provider SDK spans, CloudWatch, AgentCore traces, Prometheus for serving metrics, existing enterprise customer sources. Do **not** build an observability lake/LLM training simulator.
- BUILD HAIEC source- and claim-specific normalization, identity/time/correlation binding, model vs agent coverage manifest, evidence to deterministic assertion, DAI and consequence-path comparison, control operating evidence and user-facing proof differences.
- DEFER generalized weight interpretability, hidden chain-of-thought reconstruction, proprietary model fine-tuning automation, independent model research benchmarking without datasets, universal auto-blocking, free-form unsupervised attack verdicts.

## 4. New public page IA and animated narrative

**Canonical path:** \`/learn/how-ai-systems-work\`. Naming: **How LLMs & AI Agents Work**. Header: **Resources → Learn → How LLMs & AI Agents Work** after **How HAIEC Works** (existing). Avoid placing under Platform six independent capability peers, and distinguish from \`/how-it-works\` which is HAIEC's operational onboarding. Cross-links from \`/how-it-works\`, \`/platform\`, System Constellation, DAI, ISAF v2, MCP developer docs and main consequence hero when actually implemented. Do not register an obsolete \`/learn/how-ai-agents-work\` duplicate route; if ever introduced, redirect.

**SEO H1:** **"See the model. Follow the agent. Understand the consequence."**
**Title:** \`How LLMs and AI Agents Work | Model and Agent Assurance | HAIEC\`.
**Meta:** \`Explore how LLMs are trained and invoked, how agents choose and execute tools, what instrumentation can show, and how HAIEC connects consequence, authority and evidence.\`
H1 one, SSR paragraph; other subheadings descriptive.

### A. Hero

Dual-subject composition. Left LLM request pipeline (context → tokenization → model inference → response / structured tool proposal). Right agent action path (trigger → orchestration → model request → tool → gateway → worker → outcome). A separate **HAIEC comparison layer** overlays only facts supported by sources. This is the visual brand USP, not six feature cards.

Customer CTA hierarchy: **Explore the Interactive Flow** anchored to #explorer, **Scope an Enterprise POC** to /enterprise, **Connect HAIEC MCP** to /docs/agent-integration, proof to /sample-reports/kestrel. No "internal preview" mark or invented customer execution.

### B. Three modes control the same long diagram

**1 MODEL | 2 AGENT | 3 HAIEC LENS.** A top segmented selector changes narrative nodes and side panel, not just one-line descriptions. All important titles remain actual HTML text for SEO. User can additionally select **Managed API | Self-hosted** access toggle and **Build | Run | Evaluate** lifecycle.

- MODEL, BUILD: base model training (pretrain) vs fine-tune vs RAG/context (not retraining), prompt template and model version, dataset/model provenance, evaluation.
- MODEL, RUN: request/context construction, tokenization, forward inference, next-token selection (simplified), output text or tool-call proposal, telemetry and response quality checks. Show only external observability, NOT hidden thought transcript. Observability mode changes permitted fields from model API to self-hosted.
- MODEL, EVALUATE: version, regression on controlled tasks, usage/spend, P50/P95 latency, error, quality drift with labels; input/output distribution and model config, case and counterexamples. Drift signal is not attack diagnosis.
- AGENT, BUILD: SDK/orchestrator, prompts, RAG/memory, tool/MCP schemas, auth roles and task permissions, constraints/guardrails and human-review/target execution points; distinguish registration vs actual enforcement.
- AGENT, RUN: trigger → retrieve and prepare context → model proposes response or tool → application validates and authorizes tool request → tool executes → queue/worker → service/DB mutation → new evidence → next loop / final response. Mark direct and derived routes; user can step sequentially.
- AGENT, EVALUATE: code-capable path first, effective IAM, delegated protected choice, trace witnesses and downstream actual effects separately; four guardrail places input, model output, pre-tool / gateway, target-side. Execution statuses are not conflated.
- HAIEC LENS, BUILD: discover code path, configurations and policy, show first technical possible action as useful.
- HAIEC LENS, RUN: model telemetry where available + agent activity + five independent evidence views + DAI + applied effect only when witnessed. New signals must not automatically become canonical PASS/violation.
- HAIEC LENS, EVALUATE: selected claim -> qualified authoritative data -> deterministic rule -> bounded finding/report/next action. A relevant inference signal, threat detection, approved choice and target-side effect have separate sources.

**Two example journeys:**
1. Refund agent: model outputs a proposed recipient tool request, orchestrator has permission, downstream worker processes refund, business recipient choice needs DAI, a policy+facts constraint may already determine the right recipient; five views explain the actual question. Do not claim fraudulent payment occurred.
2. Content/RAG leak: retrieved user-B record returns through a permitted search tool, output may carry unintended customer data into A's answer; model-level content checks vs cross-system tenant authority and egress scope clearly separated.

**HAIEC aha moment:** All individual components look configured: provider metric healthy, API key valid, input safety guardrail enabled, tool in registry. The derived path plus delegated business decision and target effect can still be unaddressed. Show five peer evidence facets under the path and DAI across them, then a grounded **potential consequential action** with a specific review question, not generic "Unknown." No fabricated verified enforcement.

### C. Visibility matrix (show on page, interactive)

Interactive 2×2:
- Managed model + owned agent
- Managed model + managed agent
- Self-hosted model + owned agent
- Self-hosted model + managed agent

For each show **LLM observables**, **Agent observables**, **Not inherently visible**, **HAIEC approach**. Do not suggest self-hosted = actual thoughts readable, nor closed hosted = zero model inputs available. Prompt/output content retention should default off in HAIEC, only source refs/hashes/metadata; content remains in authorized source.

### D. AWS model observability: supported signal vs HAIEC value

A compact **Model Level** proof panel: model ID/version, input/output tokens, latency/error, request ID, prompt/output content only where enabled, guardrail event, source baseline. The public page should **not** claim fully deployed Bedrock connector or self-hosted attention-explanation integration.

A counterpart **Agent Level** panel: agent/actor, task, trace ID, tool name/version, arguments fingerprint, approvals, effective grant, downstream effect witness. Show **“What we can examine”** and **“What strengthens this conclusion”**, not an “UNKNOWN” fail banner.

### E. Learning and conversions

- Seven-step visual **AI agent action** journey is about engineering concepts, not the existing HAIEC seven-phase lifecycle.
- Training vs fine-tuning vs RAG educational group.
- Three distinct guardrail positions: before model, before tool, target/effect (and model output).
- Extended **what HAIEC finds first** case.
- Five independent evidence views and DAI orthogonal.
- Provider instrumentation source, data privacy, data minimization, security guardrails.
- Two-case interactive selector, no auto flow requiring interaction to understand static content.
- FAQs (~10) on hosted visibility, managed model requests, selfhosting, tool execution, model cognition, prompts vs training, drift, guardrails, MCP, why HAIEC.

## 5. Future engineering priority plan, without blocking page

**P0: Exact claim and deployment source matrix** (1 focused code-review workstream)
- Derive for each ML detector / drift route / Bedrock connector: producer ID, active registration, live source, normalization, persistence, version/tenant/source binding, triggered rule, report projection, coverage, capability flags and genuine tests.
- Identify which model metrics/logs are ingested and which only schema-declared. No expensive broad test phase.
- Audit customer-supplied drift endpoints for SSRF/signed allowlists and credentials, baseline statistical guardrails (PSI zero-range, lexical noise, ground truth), source tenancy/time, prompt privacy and personally identifiable data.
- Maintain model-specific status tags **SOURCE_VERIFIED_IMPL**, **REGISTERED_NOT_ACTIVE**, **ADAPTER_ONLY**, **SCOPED_PROOF**, **PROPOSED** internally, not in consumer UI.

**P1: AWS model telemetry adapter (reuse sources)**
- Narrow first Bedrock CloudWatch/Invocation metadata adapter with account/region/model ID/request ID/tokens/latency/invocation/guardrail version and endpoint coverage flags. Source content capture explicit opt-in and kept at source.
- Normalize OTel GenAI span schema via versioned \`gen_ai.*\` mapping and secure binder. Preserve trace IDs and accurate source event vs ingest times, retries and cache accounting.
- Distinguish AgentCore asset discovery vs real model calls vs tool activity. Stable correlation across actual provider, agent and target IDs.
- First value: model-usage version or guardrail configuration drift finding, not false “poisoning detected” from simple metric anomaly.

**P2: Calibrated model-level evaluation and drift**
- Explicit freeze of model, prompt-version, dataset/task cohort, temperature/seed where supported, and baseline time. Per-class reference sets/holdout labels with reviewed quality targets, not just word overlaps.
- Quantitative signals: PSI/KS with sample-size and degenerate distributions handling, token consumption per normalized task, latency P50/P95, error, version hash, embedding distribution with false-positive analysis, accuracy/regression with ground truth where available. Differentiate behavioral regression from model weights changing (managed models can silently change).
- Decisions: observed difference, investigation lead, verified bounded regression, not automatic malicious/unsafe.

**P3: Agent/source and effect join**
- Reuse SDK/OpenInference OTLP for trigger, tool call, handoff, guardrail result, action identity; join applicable policy and IAM, DAI choice and actual target-side event via authoritative source. Async worker/retry lineage explicitly carried. Never equate \`tool_selection\` with \`effect_applied\`.
- Optional dynamic runtime coverage only with installed customer boundary. Preview authority comparisons even with source-only findings.

**P4: UI/report/enterprise demonstration**
- One model-only and one agent+managed model acceptance trajectory with exact source receipts, no simulated producer passed off as live.
- Show **first finding now** + enhanced provenance/authority where connected. No new all-producer onboarding gates.
- Add documentation/mapping to existing \`/methodology\`, \`/assurance\`, \`/delegated-action-integrity\` planned and the new How AI Systems Work page.
- Prioritize scoped unit fixtures/correlation tests, one live controlled Bedrock invocation and one orchestrated agent-to-target trace only if authorized. No arbitrary broad multi-week testing as a page prerequisite.

**Do not allow research page delivery to depend on all P0-P4 engine tasks.** The page educates faithfully now, and documentation should never claim an unverified adapter as connected.

## 6. Publishing and Dev handoff

- Keep existing \`/how-it-works\` as HAIEC's workflow. New \`/learn/how-ai-systems-work\` is neutral education showing **how LLM/agents work** and where evidence comes from.
- Header Resources → Learn → **How LLMs & AI Agents Work** after **How HAIEC Works**. No top-level menu, no seventh product capability, no replacement of homepage V3 animations.
- New \`data/public-site-registry.ts\`, SEO intent and sitemap/llms entry only during authorized HAIEC source implementation. New route is NOT deployed.
- Static page content first, isolated client widgets for mode/access/lifecycle/journey and pause/replay. Default public light first paint. Persist explicit dark mode using existing central theme, not separate uncontrolled localStorage.
- Customer-ready native HTML/SVG, 10-12 section full page, responsive 390/768/1440; no em dashes or internal/fictional/prototype banners. Visual claims must be instructional, not a disguised live dashboard.
- Privacy: secrets redacted, full prompt/model output never sent to HAIEC by default, telemetry consent/config, authorized sources, PII minimization, retention bounds, isolated tenant identity and source ownership.
- Accessibility: focus visible, ARIA pressed state, reduced motion, no autoplay-only information; all actionable buttons do something.
- Site product tests localized only. **Current explicit user constraint: do not commit, push, PR, merge or deploy HAIEC website changes before additional approval.** Commit the Common Repo *research/design artifacts* only as specifically asked.

## 7. Complete source crosswalk

**HAIEC implementation sources**
- https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-security/detectors/aml-detector.ts
- https://github.com/subodhkc/haiec-website/blob/Main/app/api/runtime-security/drift/baseline/route.ts
- https://github.com/subodhkc/haiec-website/blob/Main/app/api/runtime-security/drift/check/route.ts
- https://github.com/subodhkc/haiec-website/blob/Main/app/api/compliance-twin/drift/route.ts
- https://github.com/subodhkc/haiec-website/blob/Main/app/dashboard/runtime-security/drift/page.tsx
- https://github.com/subodhkc/haiec-website/blob/Main/lib/evidence/adapters/otlp-receiver.ts
- https://github.com/subodhkc/haiec-website/blob/Main/lib/integrations/aws/normalize.ts
- https://github.com/subodhkc/haiec-website/blob/Main/lib/engine-registry/producer-registry.ts
- https://github.com/subodhkc/haiec-website/blob/Main/docs/product/CURRENT-PRODUCT-TRUTH.generated.md
- https://github.com/subodhkc/haiec-website/blob/Main/docs/how-to/08-llmverify.md
- https://github.com/subodhkc/haiec-website/blob/Main/AGENTS.md

**Research**
- OTel GenAI official: https://opentelemetry.io/blog/2026/genai-observability/
- OTel agent spans: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md
- Bedrock invocation logging: https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html
- AWS GenAI monitoring: https://docs.aws.amazon.com/en_en/AmazonCloudWatch/latest/monitoring/GenAI-observability.html
- OpenAI Agents tracing: https://openai.github.io/openai-agents-js/guides/tracing/
- Model output/thinking summary limits: https://platform.claude.com/docs/en/about-claude/models/extended-thinking-models
- AWS guardrails: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-how.html
- Agent guardrail placement: https://openai.github.io/openai-agents-python/guardrails/

**Existing Common Repo, not to duplicate**
- [How HAIEC Works page review](WEBSITE-HOW-IT-WORKS-CONSEQUENCE-TO-DECISION-UX-SEO-DESIGN-PLAN-2026-10-20.md)
- [DAI findings-first](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md)
- [ISAF v2 author-issued manuscript](source-research/isaf-v2/README.md)
- [Detection and source combination matrix](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md)
