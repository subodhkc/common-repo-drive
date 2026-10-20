# Devin prompt | Runtime Security Testing product page, safety-truth and evidence-first UX
**Approved plan source:** [Page #24 deep audit](WEBSITE-RUNTIME-SECURITY-TESTING-DEEP-SOURCE-SAFETY-EVIDENCE-UX-DIAGRAM-PLAN-2026-10-20.md). Review full findings RT-01 through RT-16, exact current code owners, copy constraints, design and test gates before implementation.

## Task
Enhance **existing** public `/products/runtime-security` page in `subodhkc/haiec-website` in place. Focus on meaningful product value: what authorized runtime security tests can observe, what was eligible/held and why, the bounded evidence produced, and how that evidence can contribute to HAIEC Assurance. Introduce a light-first, accessible HTML/SVG "scope → safety gate → executed vs held → evidence/result" explanatory diagram. Preserve all real code, existing test wizard/report integrations and canonical URL. No new runtime engine, broad backend work, route or separate HTML reference page.

Do NOT change the production endpoint/evaluator just to validate marketing, do NOT run live external adversarial tests, do NOT make a new monitoring/protection feature.

## 1. Refresh Main, reconcile before modifying
Inspect:
- `app/products/runtime-security/{page,layout}.tsx`
- `capabilities/engine-qual/runtime-capability-truth.ts`, `runtime-effect-safety-gate.ts`, `template-effect-metadata.ts`
- `lib/ai-security-runtime/safety/runtime-safety-policy.ts`, `runtime-test-service.ts`, `runtime-accounting.ts`, `runtime-aggregation.ts`, `finalize-runtime-test.ts`
- `app/api/runtime-security/test/route.ts`, `preflight/route.ts`, `report/[testId]/route.ts`
- `app/dashboard/runtime-security/test/page.tsx`, `app/dashboard/runtime-security/test/[testId]/page.tsx`
- `lib/evidence/adapters/runtime-tests-adapter.ts`, `lib/mcp/capability-guide.ts`, registered `haiec_runtime_preflight` / `haiec_run_runtime_test` / `haiec_get_runtime_test` tool owners
- `app/docs/engines/ai-security-runtime/page.tsx`, `app/docs/engines/ai-security-runtime/process-flow/page.tsx`, `components/runtime-security/RuntimeSecurityFlowDiagram.tsx`
- public route registry and site theme, SEO and actual commercial-offer data.

Document all existing sections and link/form owners to preserve. Current website Main and verified behavior outrank old static design docs.

## 2. Resolve content-truth issues first
- **Acknowledgement != verified ownership**: canonical create uses `authorizationAcknowledged`, currently does NOT require domain verification. Replace public "Authorization and target ownership verification" with accurate user authorization / explicit acknowledgement. Fix inaccurate `layout.tsx` SoftwareApplication features.
- **Response-only category != confined target**: only supported model-output/read-only categories with response oracle and acceptable target context execute. For external targets `responseOnlyTargetAcknowledged` without contradictory declared tool/DB/payment/email/file effects is a bounded user declaration + contradiction gate, NOT independently verified isolation or third-party tool-call witness. Unsupported/effect-capable categories are held. Use customer-ready wording, with explicit selected vs held vs executed.
- **Categories != individual templates**: the actual test API selects `attackCategories` and `maxAttacksPerEndpoint`. `templatesSelectable` counts templates belonging to API-selectable categories, not a JSON request listing template IDs. Update text and avoid making catalog numbers the hero proof.
- **Runtime tests != full AI safety, native PEP or autonomous monitoring**: Observed response findings have scope and limitations. No target-side action witness, effect interception, RAG state witness or universal blocking. Don't promise real-time protection or that zero findings means safe.
- **SEO schema**: remove `offers.price=0` absent exact approved commercial proof; preserve truthful SoftwareApplication + Breadcrumb JSON-LD and canonical URL.
- **Docs parity**: correct explicit misleading active claims in old `/docs/engines/ai-security-runtime` and process-flow doc about mandatory domain verification, signed attestations and fully automatic blocking/monitoring. Only update actual contradictory text and graphics, not a doc site rewrite. Never copy old `RuntimeSecurityFlowDiagram` showing inline monitor/check blocking as a Runtime Testing hero diagram.
- **Wizard copy parity**: review phrase "Safe Production Mode" and response-only assertion help; make modest editorial adjustment in existing UI only if needed and technically approved, preserving mode enum and underlying capabilities.

## 3. In-place public page composition
Suggested H1: "Test how your AI responds. Know what the evidence proves." Eyebrow: "Authorized Runtime Security Testing". Two-sentence deck and primary CTA "Start an Authorized Test" → existing auth-aware wizard. Secondary CTA to an **actually verified owned example report** or view-results explanation, third small link "Use with my AI agent" → `/docs/agent-integration`. Do not link to arbitrary fixture as customer proof.

A. First screen: **semantic HTML/SVG split-path diagram** of requested scope → target+attack safety plan → EXECUTABLE branch (supported input → endpoint response → actual trace/finding) and HELD branch (not executed → stated reason → unmet witness/scope); converge at run record with selected, held, executed, findings and limitations. No fictional live counts in graphic. Distinguish findings (security observations) from selection/coverage (workflow states).

B. "What can I establish?" established executed responses vs not-established downstream tool effects, unrun categories, full production coverage, authority or source code path. Explain source vs runtime vs governance and optional exact-scope Observed plane attachment in HAIEC.

C. "How testing works" as five readable process checkpoints (authorize target, select, safety gate, execute eligible, interpret results), retain seven-step detailed content in accessible advanced disclosure where substantive. Don't portray runtime process as six HAIEC independent capabilities or a mandatory all-sources journey.

D. "Coverage and test types": six concern families preserved, but show **Catalog / Selectable category / Eligible for this target / Executed this run** as four distinct classifications. Source-derived category/template and safety-property figures moved below first-screen value.

E. "What report contains": meaningful preview as source-bounded educational example or actual verifiable public sample only; show executable/held/coverage/finding/inconclusive as separate statuses; links to authenticated results and actual report downloads. No invented successful security score or actual customer result.

F. "Where it fits": link existing `/ai-security`, `/assurance`, `/evidence`, `/assurance-controls`, `/delegated-action-integrity`, `/docs/agent-integration`, `/enterprise`; use short customer outcome reasoning not a duplicate product hub. CTA clear: first permitted test, then read actual report, optionally new exact evaluation.

G. Natural short FAQ: Do I need source code? Can it trigger real-world effects? Why were categories held? What does zero findings mean? How does runtime differ from continuous monitoring / DAI / Assurance? Answer exactly within current service scope.

## 4. Design/engineering constraints
- Use the current public HAIEC theme, light-first, restrained dark example code inset only as secondary. Accessibility 390/768/1440, keyboard focus, reduced motion, readable font floor. Render valuable content in server HTML for SEO; native SVG + textual representation for diagrams; no raster-only value.
- No client code can fetch private user data on anonymous marketing page. No action button pretending to run a test or implying preflight passes.
- Respect exact report/evidence source identity, same-system authorization, freshness, source scan and runtime test status; no invented evidence-plane upgrades.
- Preserve all existing CTA/deep links and conversion/analytics where valid; verify login callback, tutorial route and viewer permissions.
- Avoid internal release/sprint acronyms, reviewer caveats or em dash punctuation in public-facing customer copy. Confinement and test limitations can be explained positively but precisely.

## 5. Deliver and validate
Target focused page + minimal real contradiction fixes, **one PR**. Focused checks:
1. API Zod selectable categories match the source truth summary; no API-selectable individual-template claim.
2. Read-only unit tests demonstrate selected=3, executable=1, held=2; all-held returns no dispatch; unsupported target effect and contradictory capabilities held; `ZERO_FINDINGS != CLEAN`.
3. Public SSR H1/title/canonical/OG/schema no unverified $0 Offer or mandatory verified domain.
4. diagram describes real branching conditions, correctly distinguishes source CODE_CAPABLE vs observed response vs unknown effect; test page and technical docs share terminology.
5. Targeted typecheck/lint and public-route smoke at 390/768/1440; keyboard navigation, anchor/CTA, source excerpt parity. No live external targets tested.
6. Confirm no auth secrets or raw traces copied into public sample.
7. Summarize preserved sections, before/after proof, corrected claim references, tests, exact changed files and remaining test/readiness blockers.

Keep two decisions separate: **Marketing/doc editorial** may proceed now; any product engine change, target-witness integration or extended safety-policy interpretation should become a separate reviewed scope. Merge Main after checks and repo policy permit, no manual production deployment.
