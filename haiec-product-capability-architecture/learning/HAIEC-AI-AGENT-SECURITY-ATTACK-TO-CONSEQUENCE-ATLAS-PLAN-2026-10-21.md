> **2026-10-21 HTML BUILT, SOURCE-ALIGNED AND BROWSER-CHECKED.** [Open the interactive Attack-to-Consequence Atlas](HAIEC-AI-Agent-Security-Attack-to-Consequence-Atlas-Interactive-2026-10-21.html). Implemented light-theme standalone offline HTML with 11 navigable sections, 12 source-constrained safe scenarios spanning eight categorical labels (prompt injection, MCP, tenant isolation, privileged agents, RAG and data, delegation, tool schema and release integrity), 36 three-decision learning checks, action-to-target paths, an animated agent/tool/target SVG, five independent evidence views, source/authority/target proof explanations, six evidence counterfactuals, control-ID mappings, safe remediation guidance, selected-case Agent Audit-style educational report packet, Markdown/JSON download and print reference for all 12 cases. Preserved current public Kestrel generated-sample identity and 44 source-backed path distinction. **Automated Chromium Playwright validation:** 12/12 cards, 36/36 authored correct-answer interactions, family and control filter, evidence-plane and counterfactual controls, both downloadable exports, session clear, 12-case print content, desktop/mobile widths 320, 390, 768, 1280 and 1440 with no horizontal overflow, zero JavaScript page errors; no em dashes in HTML. **Release limits:** the current asset has one principal animated path diagram, with other instructional views implemented as interactive DOM flows instead of all six individually animated diagrams in the original plan. The 36 questions use case-specific options but a common three-question pedagogic structure. A full independent SME content review, real print-to-PDF visual QA, screen-reader/200% zoom audit, and anonymous external-link status audit remain outstanding. **Not changed:** HAIEC production website, scanner/detectors, MCP, native target protection or customer evaluations. Historic plan-only statements below are preserved as planning provenance.

# HAIEC Learning Series #4: AI Agent Security, Attack-to-Consequence Atlas

**Reviewed:** 2026-10-21
**Status:** SOURCE-ALIGNED LEARNING AND INTERACTIVE HTML IMPLEMENTATION PLAN ONLY. The Atlas HTML has not been built, and HAIEC code, actual customer security test, scan, finding, API, runtime protection or reporting logic are unchanged.
**Working title:** **From Attack Surface to Business Consequence**
**Subtitle:** *AI Agent Security: Attack-to-Consequence Atlas*
**Audience:** AI application developers, security engineers, AppSec, red teams, enterprise architects and AI platform operators.
**Format:** Light-theme standalone interactive HTML reference and practice lab, using the current learning-series navigation and accessible animated diagrams. All customer copy must avoid em dashes.
**Differentiation:** Attack classes are taught through source-bound agent-to-tool-to-resource-to-business-consequence paths, with five-plane evidence, exact scope, result interpretations, code remediation and independently qualified verification. Never confuse static reachability with a live exploit.

## 1. Executive review and alignment

HAIEC already has:
- [AI Security public overview](https://www.haiec.com/ai-security) and developer/security materials. Atlas is the **deep technical educational lab**, not a duplicate product page or security scanner.
- [Public Kestrel Agent Assurance sample](https://www.haiec.com/sample-reports/kestrel), manifest at [data/sample-reports.ts](https://github.com/subodhkc/haiec-website/blob/Main/data/sample-reports.ts). The sanitized **current generated example** is a frozen, real-repository source evaluation for commit \`5e65843\`, with **44 source-backed consequential action paths**; code-capable paths are established as bounded findings, while policy, runtime permission and observed execution were **not established**. Do NOT portray those 44 paths as 44 vulnerabilities or known attacks.
- [Current Agent Audit frozen report projection](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/agent-audit-report.ts), including \`AgentAuditReportRow\` (questionId, question, answer, status, evidence, limitations, prompts), \`AgentAuditReportNarrative\` (established, unestablished, notAssessed, evidenceGaps, limitations), and verification items with verification needed, basis and affected path IDs. Reuse its **report grammar** for learning output. Never claim the offline educational HTML creates an actual persisted Agent Audit artifact.
- [Current AI Security report engine](https://github.com/subodhkc/haiec-website/blob/Main/lib/reports/engines/ai-security-report.ts), distinguishing rule match, inventory observation and qualified security finding, plus scan coverage/execution limitations. \`REPORT_GENERATED != ANALYSIS_COMPLETE\`, \`ZERO_FINDINGS != CLEAN_REPOSITORY\`, and \`CAPABILITY_SURFACE != ASSURANCE\`.
- [Canonical 45-control manifest](https://github.com/subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts), including relevant S01–S07 security family, A01–A08 agent authority, E01–E05 evidence, R01–R07 runtime and G03/G07 governance. The 45 catalog rows and 11 visibility-supported IDs are **not** assertions that all controls ran or passed.
- [DAI Authority Decision Lab](HAIEC-DAI-Authority-Decision-Lab-Interactive-2026-10-20.html), [45 Controls Practitioner V2](HAIEC-AI-Assurance-Controls-Practitioner-Workbook-Interactive-2026-10-20.html), and [Incident & Monitoring Tabletop](HAIEC-AI-Incident-Response-Monitoring-Tabletop-Interactive-2026-10-21.html). These cover authority, control evaluation and response. The Atlas owns **attack mechanism, code path, exploit preconditions, trust boundary and developer verification**.

**Methodology:** Understand → Assure → Govern & Operate; six core jobs Discover, Evaluate, Authorize, Monitor, Protect, Verify. Peer evidence planes Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. A potential exploit is a risk hypothesis until supporting evidence makes a scoped security finding. Source-backed code capability can be established without live IAM or runtime. Observed invocation does not automatically show customer-side target effect. DAI applies to discretionary consequential choices; not every prompt injection case is a delegated-authority breach.

**Release scope:** Plan, authored scenarios and a follow-on offline educational HTML, not a new scan engine, new detector family, unsafe exploit tooling, new menu, live tester, customer red-team action or duplicate reporting store.

## 2. Learning results

A practitioner finishing this Atlas can:
1. Trace untrusted content → agent decision → selected tool → server-side API → resource → possible consequence.
2. Locate distinct input, interpretation, identity, authorization, tenant and execution trust boundaries.
3. Distinguish code reachability, credential permission, approved policy, delegated choice and observed action.
4. Identify exploit preconditions and select the one evidence producer needed to qualify a candidate.
5. Explain static rule match vs qualified vulnerability vs operational telemetry vs verified target effect.
6. Choose a code/config/IAM remediation at the **exact boundary**, not generic prompt text hygiene.
7. Design an authorized non-destructive negative test and confirm both bypass resistance and target outcome if eligible.
8. Produce an Agent Audit-shaped **educational report packet** with established/unestablished/not-assessed claims, limitations, source version, affected paths, recommended owner and retest.
9. Clearly distinguish what HAIEC currently demonstrates from additional target-specific deployment/integration proof.

**Paths:** Executive technical orientation (12 minutes, 3 paths), developer deep dive (50–70 minutes), AppSec investigation workshop (75–90 minutes with peer challenge), 12-pattern searchable technical atlas self-paced. Duration targets are editorial estimates, not tested timings.

## 3. Attack-to-consequence model

A **case** must show:
- **Entry:** user or external source, retrieved document, tool description/result, plugin/MCP message, web content or compromised upstream principal.
- **Trust boundary:** untrusted content incorrectly treated as instruction, client-supplied tenant ID accepted, server guard missing, indirect credential access or unvalidated target selection.
- **Agent/tool path:** who selects and invokes the tool, precise tool/API name, principal, authorization boundary, resource and business effect.
- **Evidence:** source file/line and analysis boundary, possible dataflow/Joern/Semgrep path, runtime identity and source freshness if present, exact policy and IAM basis, target witness if present.
- **Disposition:** observed fact, code-capable path, qualified security vulnerability finding, missing evidence, test result or actual target effect, with explicit non-established claims.
- **Response:** minimally sufficient code fix, policy/IAM restriction, owner-reviewed change, scoped test, exact source/version/recheck.
- **Control mapping:** applicable HAIEC control IDs, catalog/visibility/test/run/assurance/target states separately.
- **Report:** finding statement, probable consequence, preconditions, confidence in evidence **not one global attack likelihood score**, what the finding does not prove, prioritized owner/next check.

**Five-step skill instruction:** Recognize the surface → trace a specific action path → qualify exploit conditions → fix the relevant boundary → verify and explain.

## 4. Twelve high-value scenario patterns

All educational exercises use fictional benign data/targets and **non-operational attack strings**. The Atlas never conducts intrusion, exfiltrates data or provides ready-to-use tenant attacks.

| # | Pattern and scenario | Consequence path | Minimum evidence | Related controls |
| --- | --- | --- | --- | --- |
| A01 | **Retrieved-document prompt injection:** hostile supplier FAQ asks agent to prefer a newly supplied payout account | Retrieved FAQ → planner → \`updateSupplierBank\` → supplier record | Source retrieval provenance + tool-selection trace + server-side binding/policy | S05, A03, S01, R03 |
| A02 | **Tool-output laundering:** lower-trust invoice parser result contains hidden "operator-approved" routing advice | Parser result → higher-priority decision → payout change | Parser output / trust boundary, verified approver and action-bound server guard | S05, A06, E03 |
| A03 | **MCP tool permission exposure:** read-only intended assistant discovers privileged write tool | MCP descriptor → tool invocation → account mutation | Tool catalog/schema, MCP auth, exact principal IAM, handler checks | S03, S01, A01, A07 |
| A04 | **MCP cross-tool confused deputy:** safe summarizer indirectly calls a more privileged administration endpoint | Tool A → tool B → admin API → resource | End-to-end actor identity, call path, delegated action scope, mediation | S03, A05, A08, A06 |
| A05 | **Tenant scope bypass:** client supplies a different tenant or resource key to a shared tool | Tool request → server query missing tenant-bound predicate → customer record | Trusted org resolver, query authorization and consented two-tenant negative test | S02, E03, S01 |
| A06 | **RAG private-data retrieval and answer leak:** assistant summarizes a private indexed record in an unauthorized response | RAG retrieval → answer generation → outside audience | Index permissions, document tenant ACL, actual authorized audience, output/source trace | S06, L02, S02, E01 |
| A07 | **RAG-to-tool exfil hypothesis:** retrieved document asks assistant to send protected content to an external connector | Retrieval → agent/tool argument → outbound sink | Dataflow/sink path, egress allowlist, credential permission, observation/target witness | S06, S05, S03, E02 |
| A08 | **Privileged service account overreach:** support agent has administrator delete permission | Agent → server handler → delete API → customer data | Effective IAM grant, source path, necessity, scope and negative-test proof | A01, A07, S01, R03 |
| A09 | **Multi-agent delegated authority widening:** child agent receives parent task but stronger permissions than approved scope | Parent agent → delegate → child tool → protected operation | Principal continuity, delegation issue/expiry, target mapping, execution logs | A05, A08, A03, E03 |
| A10 | **Untrusted schema/argument injection:** tool output influences amount/target without server validation | Generated JSON → parser → payment endpoint | Schema/validator code, strict server validation, target authority, bounded negative tests | S01, L05, R02 |
| A11 | **Guard present, bypass path reachable:** one handler checks approval but alternate path bypasses control | Request → alternate code branch → privileged target | Exact reachable route, middleware binding, authentication and customer-native target witness | A06, R03, S01, E04 |
| A12 | **Old clean scan vs changed release:** model/tool deployment changed after static test/evaluation | Commit A scan → commit B deployed handler → new sink | Exact commit/deploy/build links, scan execution truth and newly qualified analysis | G07, S07, E05, A02 |

**Elective domains:** AI support/receptionist, telecom network change, manufacturing ERP and cloud operations. They change the target/resource/impact but preserve the same evidence schema. Use controlled synthetic data. The only actual public-source demonstration should link to Kestrel's frozen generated sample **without fabricating attack events**.

## 5. Scenario evidence and outcome matrix

Every one of the 12 patterns uses **three decision checks** for 36 in-depth questions:
1. **What is actually established?** Select among entry surface, candidate path, source-qualified reachable path, credential permission, observed tool invocation and independently verified effect. A raw scanner match alone must not be asserted as confirmed exploit.
2. **What is the decisive missing proof?** Choose minimal source: code/handler and scope, authenticated IAM principal, current approved policy, tenant binding, qualified runtime action, target effect or release provenance.
3. **What should an engineer change and verify?** Choose exact validation boundary, source owner and authorized non-destructive test, including counterexample.

For 12 cards, keep **three explicit output sections:** *What HAIEC found* (only source/fact established by fixture), *What remains unknown*, *What evidence or safe test would change the answer*. Explanation should not award points based on generic "block all" answers.

### Negative and counterfactual fixtures

- Untrusted retrieval asks for a write, but server policy denies it. Input injection attempt ≠ target write.
- Same untrusted input, client agent's own "ignore" prompt is ineffective, but independent server handler restriction actually denies. Prompt text is not the protected authorization boundary.
- Tool appears in MCP inventory but execution permission absent; discovery ≠ exploit.
- IAM permission exists but delegated business choice unresolved; missing delegation ≠ established violation.
- Source path exists but source analyzer frontier opaque; candidate vs established reachability must differ.
- Tenant query has \`tenantId\` parameter but server binds organization independently; no cross-tenant result shown.
- RAG retrieves a relevant private document for a properly authorized audience, then an untrusted output recipient is proposed; unauthorized output must be separately assessed.
- Clean previous scan, current commit changed; historical no-findings ≠ current assessment.
- Runtime tool invocation is observed but provider rejected, or target effect not independently witnessed.
- A red-team test executes only in the authorized synthetic fixture and never provides real exploit payloads.

## 6. Reporting model aligned to HAIEC report outputs

### Agent Audit-shaped educational report

At the end of each exercise, learner can export:

**Action Path Identification**
- Training case/sector, agent, untrusted entry, tool/handler, actual resource, potential consequence, source snapshot/commit (fictional training ID or real immutable linked report reference).
- \`SOURCE_PATH_CONFIRMED\`, \`CANDIDATE_MAPPING\`, \`RUN_TIME_OBSERVED\`, \`TARGET_EFFECT_VERIFIED\` are **educational claim labels only**, not invented HAIEC engine enums.

**Qualified Findings**
- Control/rule ID and finding class, severity *as scoped hypothesis vs actual report field*, mechanism and exact path.
- Evidence refs with provenance, source/time/scope and known analyzer limitations.
- The problem's necessary preconditions, impact if realized and whether remediation is preventative/detective/compensating.

**Established / Unestablished / Not Assessed**
- Report exactly what eligible source established.
- Explain unestablished authority, target effect and runtime facts.
- Keep not-assessed families visible.

**Actionable Closure**
- Engineer/owner, code or configuration change, least-permissive IAM correction, human review requirement if needed, safe retest and expected no-bypass proof.
- Original scan basis vs fresh re-evaluation/receipt, clear source and coverage bounds.

**Canonical distinctions**
- A generated sample report is not a new analysis; this offline exercise never creates U5/U6 or persisted Agent Audit IDs.
- Raw detection \`TOTAL_RESULTS\` is not a vulnerability count. Catalog presence does not imply execution. Confidence is claim- and evidence-specific, not ungrounded numeric safety score.
- A tool/policy/guard configuration is not proof of interception and independent target outcome.

### Link to existing HAIEC reports and products

- Primary public reference: [Kestrel Agentic AI Assurance](https://www.haiec.com/sample-reports/kestrel) for real source paths and source-frontier limits.
- [AI Security](https://www.haiec.com/ai-security) for scanning concepts, with qualified finding/coverage caveats.
- [HAIEC Reports / sample artifacts](https://www.haiec.com/sample-reports) for source class comparison; link only after public availability check.
- [Evidence](https://www.haiec.com/evidence), [HAIEC methodology](https://www.haiec.com/methodology), [Docs](https://www.haiec.com/docs).
- Authenticated workspace / Agent Audit report / Investigations / Assurance / MCP for real eligible evaluation only. Deep links must be verified and labeled "requires sign-in"; do not redirect unauthenticated users to errors.
- OWASP LLM and MCP security references may be linked to contextual examples, but exact version/taxonomy crosswalk is a reference, not a HAIEC certification or implemented-detector claim.

## 7. Learning HTML UX, architecture and diagrams

**Core interaction:** Choose a pattern → inspect source path and trust boundary → reveal evidence → select severity/claim boundary → choose minimum next source → choose remediation → view finding/report explanation → export bounded review.

**Modes:** Executive developer preview (3 selected patterns), Practitioner path (12 patterns and 36 questions), Instructor comparison (review two case decisions; no learner account needed).

**Ten screen layout:**
1. Hero + select learning mode
2. Attacker influence vs authority boundary
3. Animated Agent-to-Tool-to-Consequence map
4. Twelve-pattern atlas and filters
5. Evidence inspector (five planes + source provenance)
6. Interactive attack case, three decisions
7. Control boundary explorer, guard/bypass vs target effect
8. Counterfactual lab
9. Read a real HAIEC report (Kestrel frozen sample)
10. Export educational Agent Audit-style finding packet

**Six purposeful visual diagrams:**
1. **Trust boundary graph:** outside content → model → tool selection → MCP/server handler → sensitive resource. Animate influence as *possible propagation* until qualified path evidence; use warning-neutral color, not false red "hacked" state.
2. **Attack-to-consequence path:** source/line → operation → resource → consequence; nodes reveal source provenance and preconditions.
3. **Five evidence-plane lens:** peer policy/grant/code/observed/request views, DAI as cross-cutting question rather than sixth plane.
4. **MCP identity and tool-authority fan:** discoverable, authorized, executed and target outcome all separate states.
5. **RAG dataflow and egress gate:** user vs retrieved data vs index ACL vs output recipient/external sink, explicit data classification/tenant.
6. **Guard and verification ladder:** code remediation → deployed version → authorized negative test → interception/target proof if wired → frozen report and re-evaluation. This is conditional, not automatic end-to-end production enforcement.

Animations use CSS/SVG with readable text, pause/reduced-motion equivalent, printable static views and keyboard focus states. Light theme consistent with existing HAIEC DAI/Controls/Incident labs. No em dashes, no fake code console, no moving "hacker attack succeeded" animations. On 320 and 390px widths, cards and diagrams stack and remain readable.

### UI components
- Atlas filter by family (prompt, MCP, tenant, privileged, RAG/data, agent delegation, tool schema, release), control ID, entry type and evidence gap.
- Threat case cards with consequence chain, risk hypothesis, evidence state and next proof.
- Before/after safe pseudocode snippets or visual code patches with server-side checks, not real exploit payloads.
- Three-question exercise with authored deterministic answers, explainable distractors and local progress; no real customer scanners.
- "What if" toggles: only metadata/tool discovered; IAM denied; stale telemetry; actual target denial; alternate handler bypass; source commit changed. Updates justified claim only.
- Read a real HAIEC Kestrel report tab linking to the source artifact, clearly separated from synthetic attack case.
- Developer security review worksheet with notes, save as Markdown/JSON, print all 12 scenarios and selected assessment record.
- Content must be useful offline, no external JS/CDN/telemetry or embedded keys and no fake customer result IDs.

## 8. Exercises, lab fixtures and developer QA

**12 fully authored case fixtures** at least. Each includes:
\`id, caseTitle, category, attackEntry, trustBoundary, agent, identity, tool, API, resource, possibleBusinessConsequence, sourceTruthClass, codePathStatus, effectiveGrantStatus, policyStatus, observedStatus, independentTargetEffectStatus, authorizationRequired, necessaryPreconditions, evidenceSource, analyzerLimitations, safeTest, remediationBoundary, controlIds, threeQuestions, selectedAnswerExplanations, rebuttals, existingReportLink\`.

**Exercise acceptance:**
- All 12 case source paths represent a meaningful path from an untrusted actor/input through a specific agent/tool/API to a protected resource. A generic "prompt injection" card without path is unacceptable.
- 12 cases × 3 questions = **36** graded authored interactions, explain all correct/incorrect answers.
- At least three cases explicitly show a high-confidence source-capable path with unknown runtime or IAM.
- At least three cases show source candidates not promoted into confirmed vulnerabilities.
- At least one case highlights a qualified source finding with runtime evidence absent, one demonstrates a true negative guard test under consent and one shows provider acceptance vs target effect unknown.
- Positive remediation guidance emphasizes authenticated server-side authorization and tenant checks, not relying solely on system prompts.
- No actual private vulnerability reproduction or exfiltration. Authorized synthetic tests only.

**QA and acceptance:**
- Source-truth review of AI Security report engine and Agent Audit current schemas; ensure all sample report numbers/version/limits match public manifest.
- All 12 scenarios correspond to canonical 45-control IDs and educational fixture states; verify no duplicate or invented IDs.
- All 36 answer keys are correct; context or toggles do not create logically invalid outcomes.
- Desktop/mobile 320/390/768/1280/1440, 200% zoom, keyboard access, reduced motion, genuine exported print PDF inspection, all links verified anonymously.
- No em dashes in HTML customer copy, no backend calls, no secret storage or production-side write.
- Source/report actions remain permission-scoped. Never imply production penetration testing, SOC response automation, compliance verification or runtime enforcement.

## 9. Authoring scope and release workstream

1. **Refresh source truth:** Re-read current Main SHA for Agent Audit output, AI Security report transformer/coverage flags, action-path joins, Semgrep/Joern source truth, selected control mapping and sample report manifest. Confirm supported URL/report version. Make a dated snapshot.
2. **Author 12 case fixtures and 36 decision keys:** Review source claim and relevant consequence mapping. Keep test safe and synthetic.
3. **Build one standalone light HTML** in Common Repo at \`haiec-product-capability-architecture/learning/HAIEC-AI-Agent-Security-Attack-to-Consequence-Atlas-Interactive-2026-10-21.html\`, reuse existing learning shell and style.
4. **Add six diagrams and developer code patterns:** semantic accessible SVG, meaningful motion and printable static view.
5. **Verify export and report fidelity:** Learning worksheet mirrors Agent Audit-shaped established/unestablished/not-assessed/limitations/closure fields without generating canonical artifacts.
6. **Focused testing:** 36 answer interactions, 12 path visualizations, search/filter, 6 diagrams, safe counterfactuals, output, mobile, print, accessible navigation, links and no external side effects.
7. **Commit and index:** HTML and this plan in Common Repo, update README and add dated validation. Consider publishing under existing \`/learn\` only with separate authorization; preserve earlier learning pages and current HAIEC product site.

**No broad feature expansion.** This course is an educational reference that demonstrates the value of the existing HAIEC security assurance and Agent Audit concepts, not a request to build new detection products.

## 10. Final editorial definition of success

A learner can answer, for a specific code-backed tool path: **Where does untrusted influence enter? Which actor and authorization boundary are involved? What can reach the protected operation? Which evidence proves actual permission/execution/target consequence? Which finding is source-supported, which is candidate, which remains unassessed? What server-side fix and authorized test can establish the claimed correction?**

And their exported educational report communicates those answers in the same source-limited manner as HAIEC's actual Agent Audit and AI Security outputs.

*Plan status: complete editorial and engineering handoff, HTML not created in this step.*
