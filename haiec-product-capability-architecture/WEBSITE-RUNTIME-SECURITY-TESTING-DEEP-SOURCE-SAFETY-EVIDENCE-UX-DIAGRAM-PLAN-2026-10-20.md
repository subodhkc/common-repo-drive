# HAIEC Runtime Security Testing: Source, Safety, Evidence, UX, Diagram and Cross-Page Audit
**Reviewed:** 2026-10-20 | **Website workstream:** Page #24 | **Status:** GitHub Main source inspected, plan only. Not a live target run, authenticated E2E validation, visual-browser screenshot review or HAIEC website change.

**Canonical:** https://www.haiec.com/products/runtime-security  
**Existing source:** `app/products/runtime-security/page.tsx` (474 lines when reviewed), `app/products/runtime-security/layout.tsx`.  
**Adjacent public owners:** `/ai-security` (application security overview); `/assurance` (canonical evaluation); `/assurance-controls` (control catalog); `/docs/engines/ai-security-runtime` (advanced engine guide); `/docs/engines/ai-security-runtime/process-flow`; `/docs/agent-integration` (MCP); `/evidence` (provenance/coverage); `/enterprise`.  
**Actual authenticated owners:** `/dashboard/runtime-security`, `/dashboard/runtime-security/test`, `/dashboard/runtime-security/test/[testId]`, `/dashboard/runtime-security/monitoring`; API `/api/runtime-security/test`, `/api/runtime-security/preflight`, `/api/runtime-security/report/[testId]`.

## 1. Recommendation
**Enhance the existing canonical page in place. Do NOT create a new URL or a bespoke standalone HTML prototype, replace the runtime engine, merge runtime testing into always-on protection, or make unsafe attack categories appear executable.** It already has good honest fundamentals: first-party safety restrictions, server-derived capability summary, explicit executed versus held versus not-run, and a defensible Observed plane handoff where evaluation actually consumes same-system qualified evidence.

**Primary change:** convert a long seven-step/category inventory into a **finding-first, test-status-first, consequence-aware** customer experience:
- "See how your AI responds when tested. Know exactly what was executed, what was held and what the evidence proves."
- Primary CTA: **Start an Authorized Test**, exact authenticated test wizard path. Secondary: **See an example runtime test report** (validated owned source, artifact status clearly example); tertiary: **Connect an AI agent** or **Understand how it complements source assurance**.
- Within 5 seconds, a buyer sees: **Test scope selected → Safety gate decides allowed vs held → Executed inputs and observed responses → Findings, coverage and next assurance question**. Runtime does **not** establish what code is capable of or certify comprehensive safety. Separate optional qualified runtime evidence path into HAIEC Assurance.
- Premium light-first public site with restrained technical canvas, semantic text/SVG diagram, accessible keyboard and mobile alternative, dark technical inset only when deliberate.

**Public product audience:** AI AppSec engineers, AI application owners, platform/security leaders, governance reviewers and enterprise POC buyers. Address their goal (what happens when adversarial input reaches my endpoint?), not a vendor-style exploit catalogue.

## 2. Source reviewed and exact boundaries

| Code owner | Confirmed behavior | Public copy must reflect |
|---|---|---|
| `app/products/runtime-security/page.tsx` | White/light public page; accurate source-derived category/template/property summary; 7 cards for a linear run flow; 6 risk families; honest limitations; safety reminder; login/test CTA; NO inline diagram or run artifact example | Preserve existing good explanations and deep links, add compelling first-screen diagram + outcome, reduce repetitive blocks. Seven steps are **runtime testing process**, not HAIEC's six independent capabilities or required 7-stage universal assurance workflow. |
| `capabilities/engine-qual/runtime-capability-truth.ts` | Catalog categories, catalog templates, safety properties are derived from registry. **API-selectable categories list is a separate manually maintained whitelist mirroring the route.** "TemplatesSelectable" means templates belonging to selectable categories, not necessarily individually selectable via API request. | Say **templates in selectable categories**, not "N templates individually selectable via API". Verify whitelist parity with `app/api/runtime-security/test/route.ts`; counts do not establish executable attacks or successful customer run. |
| `app/api/runtime-security/test/route.ts` | Session/org gate, schema `endpoints`, `attackCategories`, `mode`, `maxAttacksPerEndpoint`, `authorizationAcknowledged`, `responseOnlyTargetAcknowledged`; domain-verification import explicitly disabled for current create path; delegates create to shared service. No `templateIds` selection. | **Critical:** don't call domain verification a mandatory precondition or call the acknowledgement independent endpoint-ownership **verification**. Customer authorization is attested. |
| `lib/ai-security-runtime/runtime-test-service.ts` | Sole creation/dispatch service shared by dashboard and MCP; requires user acknowledgement; safety plan before dispatch; all-held -> 422 without executing; tier checks; persists executionSafetyPlan; dispatches executable categories only. Current domain auth is acknowledgement, not verified DNS/attestation. | Distinguish **authorized by user acknowledgement** from proven ownership; selected vs executable vs executed; kept/held reasons. Don't guarantee eligibility solely from "Run Authorized Test". |
| `lib/ai-security-runtime/safety/runtime-safety-policy.ts` | Sole production-domain effect/safety owner. Explicit `AUTHORIZATION != CONFINEMENT`, `ATTACK_CATEGORY_EFFECT != TARGET_EFFECT`, `SELECTED != EXECUTED`, `ZERO_FINDINGS != CLEAN`. Only response-only/read-only categories with response oracle and appropriate target context are executable. HAIEC demo endpoint is confined; for external targets, runtime uses explicit `responseOnlyTargetAcknowledged` plus no contradictory declared DB/email/payment/file/tool capabilities. `TOOL_INTERCEPTION_AVAILABLE`, `ACTION_WITNESS_AVAILABLE`, `EXTERNAL_EFFECT_INTERCEPTION_AVAILABLE`, `RAG_STATE_WITNESS_AVAILABLE`, `STATE_WITNESS_AVAILABLE` are FALSE. | **Important wording:** user-supplied response-only assertion **does not independently prove real target isolation**. The service enforces an acknowledgement and contradiction checks; avoid "automatically verifies target confinement", "tool-effects witnessed" or "we safely test arbitrary production agents". No automatic on-target interception. |
| `capabilities/engine-qual/runtime-effect-safety-gate.ts` / `template-effect-metadata.ts` | Qualification/readiness projections from shared runtime safety owner; blocked/held/unsupported metadata; templates/category count not dispatch evidence. | Catalog selection isn't successful execution; disabled effect-capable tests must not be marketed as generally available scans. |
| `app/api/runtime-security/preflight/route.ts` | Optional authenticated transport check; supported LLM/webhook/voice/Twilio/custom HTTP configurations; auth refs; `preflight_missing != scan_forbidden` in source comment; does not itself prove legal authorization or target confinement. | Preflight is **optional connectivity/setup**, not permission-to-test or safety certification. Don't conflate with `haiec_runtime_preflight` MCP permission checks without verifying both tool contracts. |
| `app/dashboard/runtime-security/test/page.tsx` | Actual wizard: endpoint configuration, 23 categories, safe/aggressive/targeted, terms acknowledgement, separate response-only target acknowledgement, tier limits, demo endpoint and safety-held errors. **UI title "Safe Production Mode" + language "response-only tests" may sound automatically safe**, while target behavior remains conditional. Domain-verify modal/routes remain but currently not required to create test. | Preserve functionality and admission gates. A separate focused copy/hint parity fix may be necessary. Show safety plan to user before dispatch when available; don't invent a new execution engine. |
| `app/dashboard/runtime-security/test/[testId]/page.tsx` | Run-status details, selected/executable/held counts, actual executed count, request-scope coverage state, findings/risk, report links (HTML, JSON, PDF), retry/cancel. | Sample result visualization should use exactly these concepts and respect complete/partial/unknown; never treat "completed" as "safe". |
| `lib/ai-security-runtime/finalize-runtime-test.ts`, `runtime-accounting.ts`, `runtime-aggregation.ts` | Atomic persistence of attack records, findings, execution traces; accounting invariants; coverage/risk separated and inconclusive where evidence incomplete; aggregate is deterministic, with bounded details. | Show selected, held, actually executed, finding, inconclusive as separate fields. Zero findings doesn't establish clean. |
| `lib/evidence/adapters/runtime-tests-adapter.ts` | Producer read/transformation of persisted canonical `runtime_tests`, org-bound; missing/null-org quarantined, failed/cancelled produced as limitation evidence, bounded history, selected/held coverage kept distinct; raw sensitive request/response bodies not moved into generic evidence envelopes. | **Raw test transcript is not universally present in the Assurance evaluation**. Eligible source references and qualified observation have their own scope. A received artifact isn't automatically an evaluated Observed claim. |
| `app/docs/engines/ai-security-runtime/page.tsx` and `process-flow/page.tsx` | Older public tech guides still describe mandatory verified domain ownership, signed attestation, all 23 attack categories as executable, universal real-time monitoring/"blocks attacks", automatic score/compliance, and unbounded target-side side effects. | **Cross-page contradiction requiring editorial correction.** Keep detailed technical docs, remove or qualify stale guarantees using current service. Existing `RuntimeSecurityFlowDiagram` in `components/runtime-security/RuntimeSecurityFlowDiagram.tsx` depicts inline protection blocking prompts and should NOT be reused as a public Runtime TESTING hero diagram. Distinguish test from protect/monitor. |
| `app/products/runtime-security/layout.tsx` | SEO/OG/canonical and SoftwareApplication JSON-LD. `featureList` says "Authorized endpoint registration and verification" and "confinement checks", while create route uses acknowledgement; `offers.price:'0'` embedded without explicitly grounded offer/tier applicability. | Fix metadata feature claims; **remove $0 Offer or derive legitimate publicly approved offer with exact tier semantics**. Remove implication target isolation is technically proven just because a checkbox is ticked. |
| `lib/mcp/server.ts`, `lib/mcp/capability-guide.ts` | Registered MCP workflow: `haiec_runtime_preflight`, confirmation-gated `haiec_run_runtime_test`, `haiec_get_runtime_test`. Tool eligibility depends on key scopes and user consent. Runtime tools share canonical test-service, not a distinct MCP evaluation engine. | Link to existing `/docs/agent-integration`, explain agent-guided preview/test/retrieve, user authorization required; don't suggest MCP bypasses confinement or safety plan. |

**Confirmed distinction:** the standalone Runtime Security engine tests selected running endpoint behavior; `/ai-security` integrates security context; `/assurance` decides from eligible evidence; `/monitoring` describes operational observation; `/protect`/native PEP (only where actually integrated) mediates target side effects. None of these is an automatic result of simply running a runtime test.

## 3. Findings and decisions, prioritized

| ID | Priority | Misalignment | Resolution |
|---|---|---|---|
| RT-01 | P0 correctness | Product page "Authorization and target ownership verification" is **not implemented as implied** by the canonical create flow. Runtime service accepts explicit owner/permission acknowledgement; domain verification not required. | Use "Explicit testing authorization acknowledgement"; add optional verification only if proven active in the selected path. Align JSON-LD accordingly. |
| RT-02 | P0 correctness | "Confinement checks for effect-capable tests" can imply HAIEC technically proves customer target isolation. External self-declared response-only status + contradictory capability checks is a **bounded safety gate**, not independent target effect instrumentation. Effect-capable categories currently remain held without required witness. | Customer-friendly "The test is restricted to supported response-only behavior and your declared target setup. Potentially effectful categories remain held unless the required execution controls are available and verified." This must remain outcome-bounded. |
| RT-03 | P0 correctness | `runtimeSummary.templatesSelectable` shown as "selectable via API" even though API schema accepts category names, not individual `templateIds`. | Relabel "**templates belonging to API-selectable categories**" or remove secondary metric from hero. Compare `RUNTIME_CATEGORIES_API_SELECTABLE` mirror to create route whitelist via focused test. |
| RT-04 | P0 cross-page | Runtime-engine docs and process-flow docs describe mandatory domain ownership verification + signed attestation vs runtime service's attested create path; docs imply generalized prompt blocking/monitoring. | Narrow parity correction in those docs rather than importing legacy diagram. Avoid touching unrelated production policy/engine. Make current source truth consistent across public product, advanced docs and wizard. |
| RT-05 | P0 SEO/commercial | JSON-LD asserts free `Offer: price 0` without proving that any organization may run all tests at no cost, and lists automatic ownership verification. | Remove ungrounded pricing Offer, or use exact approved public offer source. Keep SoftwareApplication and Breadcrumb only with grounded attributes. |
| RT-06 | P0 comprehension | Hero is text-only plus registry counters. No concrete picture of what customer learns; seven-card process dominates; concern-area descriptions make held attack categories look fully runnable. | Add a light-native **adversarial test / safety gate / observed response / result** diagram with a split at "Allowed"/"Held". Put outcome-first copy and a minimum ready-to-try self-service path before the full process. |
| RT-07 | P1 model clarity | Page conflates category catalog, selectable categories, template count and actual executed requests in four hero counters. More numbers ≠ more proof. | Keep source-derived counts in technical "Coverage details" section; make hero proof hierarchy "Test behavior, scoped observations, explicit held tests and coverage". |
| RT-08 | P1 value | Page lists output objects but never shows a believable scope-bound example and selected/held/executed accounting. | Reuse a real public example **only after identifying verifiable source artifact and labeling its evidence provenance**; otherwise a static educational scenario with no fabricated actual test run and a clear link to official sample report. Illustrate one attack-category result + one held category + what remains unknown. |
| RT-09 | P1 result semantics | Product wording "Observed behavior" could be misread as target tool effects, not just endpoint request/response. Runtime current policy lacks action/side-effect witnesses. | Say "observed endpoint responses under executed tests", not "verified agent action outcome". Separate Response Observation, Runtime Tool/Action Witness (not established unless wired) and source capability. |
| RT-10 | P1 workflow | Page describes seven universal numbered steps, including Observed-to-Assurance as though it's always done. Runtime preflight optional, selected test may be completely held, attachment only when bounded. | Convert to **five readable decision stages** (1 choose authorized endpoint, 2 select scope, 3 safety eligibility, 4 execute allowed tests + record holds, 5 review result), plus optional "Use qualifying evidence in HAIEC Assurance" branch. Keep expanded technical 7-step sequence accessible. This is not an eighth/seventh platform capability. |
| RT-11 | P1 UX | Primary CTA redirects via `/login?callbackUrl=/dashboard/runtime-security/test` every time; test UI has demo endpoint path; other relevant MCP route not mentioned. | Verify login return flow and logged-in handling, link safe demo entry only if real route/limits confirmed; optional "Try using your AI agent" opens canonical guide; do not imply browser CTA executes tests. |
| RT-12 | P1 integration | Missing explicit link and contrast for source assurance/DAI, dedicated MCP runtime testing, reporting and controls/monitoring. | Add three concise outcomes: **Test observed response**, **Compare with source action path**, **Include qualified result in assurance** with linked owners; don't claim native control intercept. |
| RT-13 | P1 diagram reuse | Legacy `components/runtime-security/RuntimeSecurityFlowDiagram.tsx` visualizes inline `monitor/check` and generic real-time blocking; not the runtime test workflow. Runtime engine docs diagrams reflect old architecture. | **Do not copy old "real-time protection" diagram** into product page. Use new small native HTML/SVG explanatory diagram sourced from canonical safety flow, no second evaluator. |
| RT-14 | P1 accessibility | Long marketing sections and small secondary metric copy; no actual test output inspector or visual architecture; page's repeated two large CTA sections creates friction. | Light-first restrained hero, helpful schematic, optional "What will this test establish?" Q&A and a concise coverage legend; responsive 390/768/1440; reduced motion. Keep copy in SSR. |
| RT-15 | P2 framing | Attacks against RAG / agent tools / exfiltration/DoS listed as selectable "coverage areas" despite some categories requiring witness/confinement and held in default execution. | Distinguish **Areas in catalog / Eligible to execute / Held for target safety**. Never portray held feature as absent from catalog or already tested. |
| RT-16 | P2 claims & security | Running adversarial probes involves confidential prompts/responses. Main page says traceable artifacts but no explanation that generic evidence envelope uses hashed/provenance refs and raw bodies remain producer-native. | Short trust explanation: evidence is organization-scoped, sensitive request/response remains under authorized runtime-test access; downstream Assurance uses qualified references not global body replication. No claim of zero storage or guaranteed redaction. |

## 4. Recommended customer-readable diagram (not a new engine)

### Hero adjacent native SVG + semantic HTML
Use an accessible compact **split-path flow**, landscape on desktop, stacked responsive:

```text
YOU AUTHORIZE TARGET + SELECT TEST GOAL
                  |
       TARGET & ATTACK SAFETY PLAN
           /                 \
     ELIGIBLE               HELD
        |                      |
  Send supported input     Not executed
        |                      |
  Observe endpoint         Record exact reason
        |                      |
  Validate response         Open proof gap
        \                    /
       RUN RECORD: selected | held | executed | findings | limitations
                  |
    OPTIONAL: qualify for Assurance Observed evidence
```

- Clearly show **example flows as education**, not actual runtime or fabricated run. No progress timer or "Connected" chip unless a genuine testId and verified session-backed read supplies status.
- Distinguish *selected, eligible, actually executed, held, inconclusive* as lifecycle states; independent of severity or good/bad outcome. A runtime "no findings" result still says what was tested, not "AI secure".
- Any user-selected category adviser is client-side pedagogical only; does not indicate tenant permissions, per-template eligibility or target confinement. Implement interactive tabs at most when all controls work.
- Semantic SVG nodes and adjacent accessible list, no raster-only graphic or artificial neon cyber-art. Design tokens aligned with latest HAIEC Homepage/Platform/DAI/AI Security/Constellation: light-first, generous space, clear evidence labels, optional dark terminal inside.
- Show how runtime result can *augment*, not replace, static CODE_CAPABLE or policy/DAI permission context. Five evidence planes remain independent. No implication HAIEC deploys a passive runtime sensor or PEP by default.

### Suggested final public content hierarchy
1. **Hero**: "Test how your AI responds. Know what the evidence proves." Eyebrow "Authorized Runtime Security Testing." Crisp one-paragraph deck and CTA Start Authorized Test, secondary "See example results" (verified public route), tertiary "Run with my AI agent" (/docs/agent-integration).
2. **What does HAIEC actually test?** 3 choice cards: Model responses; Prompt/context/instruction misuse; Agent/tool behavior **only within supported safe scope**. Group customer questions rather than unqualified promises.
3. **The diagram and an illustrative result:** requested target/scope → eligibility gate → response/held branches → measured coverage/findings/limitations. An accessible "example finding" must be marked as illustrative, never a report.
4. **What can the test establish?** Compared columns: Established with executed responses / Not established with held categories, unknown targets, unseen downstream actions, absent source or actual IAM/DAI authority. Zero findings ≠ universal assurance.
5. **How to run safely:** consent, declared target confinement, category selection, safety planning, execution, results; expand seven-step operational reference.
6. **Coverage library (secondary):** accurate code-derived counts and limitations, categories and template enrollment; no artificial "500 supported executions" messaging.
7. **How runtime evidence strengthens HAIEC:** runtime report → qualified same-system Evidence → optionally attached fresh canonical Assurance Evaluation; link AI Security, DAI, Evidence, Assurance and MCP, plus Enterprise POC where customer-native effect witnesses required.
8. **Trust & frequently asked questions:** target does not need source-code access for standalone runtime test; which credentials/data are needed; can it mutate a system; why was a category held; does this mean compliant/safe; is testing always available; source vs runtime distinctions.
9. **One final CTA:** exact login/test route and supporting docs; no second redundant large feature grid.

## 5. Source-count and classification rules
- Do not hardcode observed executed template/category counts on public hero. Only the actual selected `runId` has execution record.
- Category whitelist mirrors public runtime create schema; review `RUNTIME_CATEGORIES_API_SELECTABLE` when code changes to avoid hard-coded drift.
- "Available catalog category" ≠ "API accepts category" ≠ "safety plan eligible" ≠ "request executed" ≠ "finding triggered" ≠ "target effect observed" ≠ "control enforced".
- Runtime test safety classifier is not a proof of full external target isolation when based on user declaration; target-side action witnesses unavailable in current policy.
- An authorized endpoint can be inaccessible; optional transport preflight checks endpoint connectivity, not consent/confined execution. The API can reject all-held selection before dispatch.
- Do not assert regular/continuous monitoring, real-time blocking, policy remediation, provider privileges, cross-tenant scans, legal compliance, certification or native PEP from this test flow.
- Customer copy should not expose sprint codenames/locks, `PROTOTYPE`, `FICTIONAL`, reviewer comments or em dash punctuation. Operational limitations belong in relevant section naturally, not plastered as internal warnings.

## 6. Priorities, implementation constraints, focus checks
**P0:** fix incorrect *verified domain/ownership* and *confinement proven* claims; correct selectable-template label; remove ungrounded JSON-LD zero-price Offer; reconcile legacy runtime engine docs. Add a first-use diagram and 1 clear example under canonical page.  
**P1:** source-derived coverage explorer, optional route to result/agent/evidence, trust FAQ, accessible diagram, verified links. Rename potentially misleading "Safe Production Mode" copy only if cross-page owner confirms scope; avoid changing API identifiers or tests.  
**P2:** additional editorial polish and developer guide copy where actually inconsistent. No new integrations, passive monitoring engine or runtime protection layer.

**Focused validation** (not broad E2E required):
- Parse `runtime-capability-truth` category whitelist and actual Zod enum; compare equality and fail if diverged.
- Attempt no authenticated live external attack; instead unit-level demonstrate `selected=3, executable=1, held=2`, and `allHeld` prevents dispatch. One case of response-only acknowledgement contradicted by declared tool capability; another no acknowledgement; an eligible HAIEC demo endpoint case if existing fixture supports.
- Ensure a selected held category is never labeled "executed" or "passed"; zero findings with incomplete traces is inconclusive.
- Read-only route smoke/metadata: no bogus $0 Offer, true product title/canonical, accessible SVG/HTML, no duplicate H1, responsive 390/768/1440 and keyboard.
- All CTAs point to actual exact owner; login callback preserves target route, no secrets in public UI.
- Runtime test details page/advanced docs maintain correct current terms; no unsupported domain verification or signed attestation promise.
- Preserve existing test wizard, test results, reports, tier enforcement, authorized event generation and controls. No request/response fixture exported to public JSON.

## 7. Related plans / dependencies
- [AI Security public page](WEBSITE-AI-SECURITY-INTEGRATED-APPLICATION-RAG-MCP-STANDARDS-PAGE-UX-SEO-PLAN-2026-10-20.md)
- [Runtime and action mediation provenance / not automatic PEP](E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md)
- [System Constellation design and source-bound proof](WEBSITE-SYSTEM-CONSTELLATION-DEEP-SOURCE-DIAGRAM-AND-THREE-SURFACE-UX-ENHANCEMENT-2026-10-20.md)
- [MCP Agent Integration source/parity](WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md)
- [Assurance and five evidence planes](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md)
- [Public brand/light-first](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md)
- [Existing website preservation](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md)

**Critical workflow boundary:** A runtime result may be attached to a new exact same-system evaluation only through existing qualified service and consent checks. The page should NEVER tell users a test automatically changes previously issued Assurance verdict, deploys monitoring or enforces a target-side block.

**No website PR has been created by this review.** Refresh Main and deployed build commit before implementation. Diagram is a design specification, not an evaluated test result.
