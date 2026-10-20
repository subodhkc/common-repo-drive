> **Companion delivery references:** [Interactive Methodology proof-frontier and DAI light/dark design concept](design-references/methodology-2026-10-20/methodology-deterministic-proof-light-dark-preview.html); [exact Resources → Learn menu placement and audited-page navigation ownership](PUBLIC-WEBSITE-NAVIGATION-PLACEMENT-AND-METHODOLOGY-CROSS-LINK-CONTRACT-2026-10-20.md); [P0 DAI policy-vs-delegation admission engineering/release claim gate](DAI-DELEGATION-ADMISSION-ISAF2-SEMANTIC-ALIGNMENT-P0-2026-10-20.md). This editorial plan is committed to Common Repo only; **no HAIEC production change**.

# HAIEC Methodology — Deterministic Evidence, Delegated Authority, Reachability & Proof Boundaries

**Audit date:** 2026-10-20 · **Route:** https://www.haiec.com/methodology  
**State:** PROPOSED EDITORIAL + DESIGN + NAVIGATION PLAN / HAIEC PRODUCTION **UNCHANGED**. Page #6 in sequential public-site review after Platform, Products, Assurance, Enterprise and Controls.  
**Primary decision:** Make this the definitive public **How HAIEC Reaches a Defensible Conclusion** technical explanation, without inventing a new evaluation engine, overpromising proof or repeating the full marketing catalog. **Retain the current H1** as the direct scientific question: **How does HAIEC reach a conclusion?**

## 0. Canonical context, hierarchy and source precedence

Relevant preapproved Common Repo:
- [Brand, copy and dual-theme standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md)
- [Positioning and four-word USP](HAIEC-POSITIONING-USP-FOUR-WORD-SEO-AND-STORY-SYSTEM-2026-10-20.md)
- [Source-based capability, packaging and MCP](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md)
- [Assurance page](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md)
- [Controls page](WEBSITE-CONTROLS-PAGE-COPY-DESIGN-SEO-PROOF-ENHANCEMENT-PLAN-2026-10-20.md)
- [Enterprise page](WEBSITE-ENTERPRISE-PAGE-COPY-DESIGN-SEO-CONVERSION-PLAN-2026-10-20.md)
- [Existing editable architecture SVGs](design-references/hero-architecture-2026-10-19/light-theme/WEBSITE-PLACEMENT-AND-DEVIN-HANDOFF.md)

Evidence precedence: **Current qualified HAIEC Main implementation and exact evaluation contract → available live acceptance/producer state → authoritative published documents → Drive reference methodology/design → Common Repo explanatory proposals.** Research proposals never silently become shipping capabilities.

**Source baseline:** HAIEC \`subodhkc/haiec-website\` Main commit \`e4e46c36ce23fe4be5011051558077630abeab5d\` and live \`/methodology\` retrieved 2026-10-20. Source-specific owners and risk signals listed in §§1–3. Google Drive cross-check:
- [HAIEC Technical Primer — Architecture, Evidence & Assurance](https://docs.google.com/document/d/1qcK7O6J4EaZK743wLUz7xaRrg8Wkw7fbq8RpKGJ_Nbk/edit), validated 2026-09-10: strong direct explanation and refund analogy; older source baseline, NOT proof of current release.
- [Website Positioning, SEO & Enterprise POC — v4 FINAL](https://docs.google.com/document/d/15Syrdh5kjfKaBSDJ8yd26gQvBPfURSgvsm7ujvIGNXU/edit): high-priority consequence path, exact unknowns and POC.
- [Public Website Convergence v4.2](https://docs.google.com/document/d/13ESOED8G9K0g9_lZq9Q7ENObREuw5o-mSNq6yPsl8mc/edit): explicit /methodology search intent and contextual IA.
- [ISAF v2 Canonical Core Freeze](https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit): **research semantics**, not published ISAF2 product conformance; contains an engineering alignment blocker detailed in §3.
- [HAIEC Reporting Convergence v1.7](https://docs.google.com/document/d/1nrEBU7NavI4pCBR-LzA9p7wwnOHpkELBE1KhkOFFIvA/edit): proposed enhancements subordinate to canonical U5, U6 and reachability owners; do not describe as shipped.

### Positioning decision (strong without exaggeration)
- **Company:** HAIEC, Human AI Evidence Company.
- **Category:** **Evidence-Bound Assurance**.
- **Four-word product descriptor:** **Deterministic AI Action Assurance**.
- **Retain tagline:** **High assurance in every consequence.**
- **Primary scientific differentiator:** HAIEC applies documented claim rules to qualified, evaluation-bound evidence; it does not use an LLM's free-form opinion as the canonical assurance verdict.
- **Technical distinction:** **what code could do ≠ what policy allowed ≠ what a credential granted ≠ what an authoritative delegator chose ≠ what runtime observations showed ≠ whether the target effect actually occurred**.
- **Competitive framing:** Governance records policy, scanners find selected capabilities, IAM records permissions, observability records instrumented behavior, runtime controls can mediate installed boundaries. HAIEC's focused position is **reconciling which consequence/authority statements are supported across those sources and explicitly where proof stops**. These markets overlap. Never claim unique first-mover status, universal superiority, or unmeasured benchmark lift.

## 1. Page and nav source inspection (what exists, preserve it)

**\`app/methodology/page.tsx\` blob \`fe9631d0b430b913ff1185674f775fcbbfef5295\`, ~4.9k chars**, already accurate:
- H1 **“How does HAIEC reach a conclusion?”** with consequence path, scope and evidence boundary.
- Six numbered *illustrative method phases*: Question → Scope → Reconstruct → Compare → Bound → Assure.
- Short defensibility bullets: repository-first (capability not execution), runtime optional, exact identity, historical binding, explicit producer frontier.
- Honest exclusions: no universal discovery/safety/compliance certificate, UNKNOWN ≠ pass.
- CTAs to /assurance and /enterprise. App Router metadata and canonical already present.
- **Gaps:** almost no proof specimen, no real evidence qualification examples, no DAI delegation-admission test, no exact reachability/ambiguity example, no U5 claim status/disposition vocabulary, no report/receipt integrity distinction, no six-capability contextual navigation, no MCP trial, no light/dark public theme. Fixed dark hero + white sections.
- **Critical UI semantics:** six phases describe one *illustrative method*, NOT six independent selectable product capabilities, which are Discover / Evaluate / Authorize / Monitor / Protect / Verify. Don't imply every evaluation has all phases/evidence producers.

**\`data/public-site-registry.ts\`** declares \`id:'methodology'\`, route \`/methodology\`, \`group:'resources'\`, \`pageRole:'evidence methodology'\`, indexable/canonical; footer auto-renders it.
**\`data/seo-page-intents.ts\`** assigns primary \`AI assurance methodology\`, \`parentHub:'/resources'\`, provisional search intent. The page's published meta is close, should enrich prose, not manufacture new SEO keyword statistics.
**\`components/AutoHideNavigation.tsx\`** currently has **Resources → Learn** items What is HAIEC / How HAIEC Works / Documentation / Research — **Methodology is absent** from that primary dropdown, despite being in public registry/footer.
**\`components/Footer.tsx\`** consumes the public route registry; current /methodology footer is already present — no extra footer string or new public route required.
**\`/enterprise/architecture\`** already owns the deep interactive architecture explorer; do not create a duplicate diagram gallery inside Methodology.

## 2. Concrete code-backed method — all required subjects

### M1. Scope, version and admissible producer evidence

**Grounding:** \`lib/assurance/evidence-set-builder.ts\`, \`lib/assurance/epistemic-classifier.ts\`, \`lib/assurance/types.ts\`, \`lib/assurance/claim-catalog.ts\`, \`lib/assurance/claim-evaluator.ts\`, \`capabilities/engine-qual/producer-qualification-matrix.ts\`.

Explain these **distinct questions**, with a small native HTML row for each:
1. **What is the question?** One AI system, exact evaluated subject, consequence, ownership, roles and exclusions.
2. **What was the source?** Authenticated repo/commit or qualified source, producer/run identity, timestamps, version, exact match and source scope; do not infer all assets from one repo.
3. **Does the evidence apply to this claim?** Canonical producer identity, evidence method/class, matching rule/capability IDs, source and scope requirements. **Unrelated findings excluded**.
4. **How is it treated?** A claim-specific set assigns evidence **SUPPORTING / CONTRADICTING / CONTEXT_ONLY / EXCLUDED**. Reason codes include stale, wrong scope, self-report insufficient, low coverage, producer failed and after-snapshot.
5. **Can the claim be supported?** Technical claim cannot be supported solely by self-report; unknown coverage and zero findings do not become technical PASS; contradictions take precedence. \`NOT_APPLICABLE\` requires positive applicability basis, never simply absent evidence.
6. **What is frozen?** Evaluation snapshot time, exact source/evidence membership, relevant profile/methodology, deterministic ordering and digest. Later evidence must not silently rewrite a historical evaluation.

**Key intellectual property/message:** A named scanner result is not automatically admissible proof for a different question. **Source provenance and relevant capability coverage are decision inputs, not footnotes.**

**Caution:** Producer qualification matrix was frozen 2026-08-30 and includes QUALIFIED_WITH_LIMITATIONS/PARTIAL/HELD/NOT_CONNECTED. Use *current* source and actual tenant run for public availability, not the matrix as proof all producers operate today.

### M2. Reachability from source, including weak links and exact identity

**Grounding:** \`lib/ai-inventory/action-proof-trace.ts\`, \`action-proof-reachability.ts\`, \`agent-reachability-projection.ts\`, \`source-reachability-read-model.ts\`, \`lib/evidence/endpoint-join.ts\`, \`lib/assurance/u6-agent-reachability-section.ts\`.

Explain agent → tool registration/model exposure/dispatch → implementation → handler → operation → resource/service → potential business consequence. Support direct paths, **selected transitive resource/service chains**, shared substrate **potential channels**, deferred paths and identity/evaluation exposure where actually qualified. Mark last established stage; show unresolved “remote not in repository”, candidate, unknown, truncated, scan mismatch and missing edge as frontiers, not hallucinated continuity.

**Hard locks:**
- Same display name or handler text **does not** establish same canonical entity.
- \`SAME_COMMIT != SAME_SCAN_PROOF\`; join only exact persisted relation/scan/snapshot identity.
- A unique qualified endpoint join may establish a *static relation*; multiple candidates remain UNKNOWN; unmatched is a visible frontier.
- A potential shared-resource channel ≠ observed agent communication or authorized influence.
- Source reachability projection ≠ a five-plane evidence claim ≠ a U5 decision; **read projections explain evidence and are not new evidence**.
- Current repo/source trace ≠ exact historical evaluated scan; U6 Agent Reachability section loads **evaluated scan**, else NOT_AVAILABLE, never substitutes latest.
- Bounded views carry shown/total/truncated metadata; never interpret truncated as exhaustive.
- \`CODE_CAPABLE != OBSERVED\`; static path does not establish actual execution or successful target effect.

**High-value illustration:** A source analyzer establishes agent→tool→handler and a possible refund call. A background worker link is ambiguous across two identical display names, so HAIEC ends the line at an **UNKNOWN frontier**, even if the diagram could be aesthetically completed by guessing. This is stronger scientific differentiation than a large node-count claim.

### M3. Authority, DAI and admission: distinguish policy, permission and delegated choice

**Grounding:** \`lib/assurance/dai-evaluation.ts\`, \`lib/assurance/dai-assembler.ts\`, \`lib/assurance/dai-evidence-parser.ts\`, \`lib/ai-security/delegated-authority.ts\`, \`app/developers/agents/page.tsx\`, \`lib/assurance/assurance-question-projection.ts\`.

**Five independently evidenced planes:** REQUESTED / POLICY_AUTHORIZED / EFFECTIVELY_GRANTED / CODE_CAPABLE / OBSERVED. No mandatory causal sequence; absent runtime does not prove no action. **Delegation is orthogonal**, NOT the sixth plane.

The pure DAI engine has **nine comparison dimensions**: OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY. For a given dimension it compares separately-evidenced \`delegated\`, \`codeCapable\`, \`effectivelyGranted\`, \`observed\`; conditional candidate-only semantic mapping is UNKNOWN. It emits seven bounded states, e.g. INSIDE_ESTABLISHED_DELEGATION, CAPABILITY_OUTSIDE_DELEGATION_{MEDIATED,UNMEDIATED}, GRANT_BROADER_THAN_DELEGATION, OBSERVED_OUTSIDE_DELEGATION, UNRESOLVED_DELEGATION_EXPOSURE and NOT_ASSESSED.

**Hard negatives:** Missing delegation evidence ≠ delegation violation; NOT_ASSESSED ≠ violation; observed outside delegation requires **qualified exact delegation**. An approved Operating Envelope describes POLICY_AUTHORIZED scope; it does **not by itself** prove the human/business delegation of consequential choice. Source-declared delegation can be input/context but doesn't automatically prove authoritative delegator or valid lifecycle.

**CRITICAL RESEARCH/IMPLEMENTATION GAP — source confirmed, no public conformance claim:**
[ISAF v2 Canonical Core Freeze](https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit) explicitly forbids \`APPROVED_OPERATING_ENVELOPE == DELEGATION_EVIDENCE\`. **Current Main \`lib/assurance/dai-assembler.ts\` still documents \`delegated ← operating_envelopes (APPROVED only)\` and maps ordinary \`allowedOperations\` and \`resourceScopes\` through \`delegatedFactsFromEnvelope()\`.** This is a substantive semantic alignment defect relative to the *research freeze*. Its pure DAI comparator is a valid deterministic comparator **over admitted facts**, but claim **“HAIEC already verifies delegated human authority whenever envelope is approved” is NOT release-safe**.

**Must be an explicit pending engineering/source-qualification release gate, not concealed by stronger marketing copy:**
1. Define authoritative delegation admission (delegator's authority, identity, source provenance, protected decision class and scope, current validity/revocation at evaluated epoch) separate from policy.
2. Ensure ordinary approved envelope constraints feed POLICY_AUTHORIZED only, absent typed, admissible delegation. Org-confirmation alone is not proof of delegator authority.
3. Reconcile DAI assembly/tests/dimensions/historical basis with ISAF v2 freeze, without changing canonical U5.
4. Validate a positive/negative fixture: valid policy+grant+code but **no delegation** should give UNRESOLVED/NOT_ASSESSED, not establish delegated choice; true authoritative delegation within scope may support comparison; expired/invalid delegation excluded; no cross-scan/current fallback.
5. Only after code owner and acceptance sign-off may site state ISAF v2 delegation-conformance, full delegation-validation coverage or automatic proof of unapproved choices. Until then: **“HAIEC compares available policy, permission, code, runtime and delegation evidence where qualified, and keeps missing delegation explicit.”**

**Research must stay separate:** ISAF published preprint and ISAF Logger are distinct; **ISAF v2 is unpublished** (even if semantic core frozen). CSM6 is a governance execution framework, not an automatic HAIEC test producer; framework mapping ≠ certification. Cross-link /research, /csm6, /isaf contextually with labels, not “ISAF2 certified runtime engine”.

### M4. Deterministic evaluation: exact claim facts, not generated opinion

**Grounding:** \`lib/assurance/claim-evaluator.ts\`, \`evidence-set-builder.ts\`, \`types.ts\`, \`assurance-question-projection.ts\`, \`master-report-product.ts\`.

The canonical evaluator is deterministic **when source/evidence membership, interpretation/rule/method version, scope, snapshot and validated producer outputs are held fixed**:
- Evidence assigned roles, evidence relevance and exclusion are rules-driven; source-derived claims separated from context.
- Claim states are **SUPPORTED / PARTIALLY_SUPPORTED / INSUFFICIENT_EVIDENCE / CONTRADICTED / REVIEW_REQUIRED / NOT_ASSESSED / NOT_APPLICABLE**. These are not full legal control-certification states.
- A system-scoped \`ALLOW / REVIEW / BLOCK\` disposition is from those evaluated claims/configured conditions and means **ALLOW WITHIN EVALUATED SCOPE**, **REVIEW**, **BLOCK disposition** respectively. **BLOCK ≠ actual customer gateway stopped an action**. Do not present an illustrative U5 verdict as a real evaluated output.
- \`UNKNOWN coverage + 0 findings != PASS\`; \`SELF_REPORTED != TECHNICAL PROOF\`; stale evidence, producer failure, contradictory producer and missing mandatory dimensions can require REVIEW. \`NOT_APPLICABLE\` must have scope basis.
- The AI IDE/MCP assistant can help scope, fetch an authorized tool and explain results; **the LLM does not generate or change canonical determination**. Re-executing a mutable repo, updating a profile or adding evidence is not the “same input.”
- Deterministic doesn't mean **perfect**, zero false positives, universally correct semantic mapping or universally exhaustive coverage. Traceability and falsifiability are the value.

**One strong demonstration:** identical **frozen evidence and rule set** produces unchanged qualified evaluation output. Add one **authorized** new evidence item → new evaluation/version, with changed basis and inspectable delta; **do not mutate the historical record**. This demonstrates the scientific method: controlled inputs, reproducible logic and explicit changed evidence.

### M5. Proof boundary, artifacts and verification

**Grounding:** \`lib/assurance/assurance-question-projection.ts\`, \`evaluation-summary.ts\`, \`master-report-product.ts\`, \`u6-agent-reachability-section.ts\`, evidence lineage and receipt APIs.

Four report questions based on the **same exact Evaluation**:
1. **What can it actually reach?** Supported source/qualified path within evaluated scan.
2. **Under whose authority?** Policy, IAM/effective grant and *qualified* delegation are separate; unresolved where absent.
3. **What has it actually done?** Only observed within connected qualified runtime evidence. Source code is not runtime.
4. **Where does the proof stop?** Unmatched source/graph relations, missing producer, untested scope, limits/truncation/latency and historical/current mismatch.

Report owner \`master-report-product.ts\` is **one canonical server-side report composition** shared by JSON API, MCP read, dashboard and PDF, tied to one exact persisted Evaluation. Report assembly **does not recompute** the canonical disposition, silently include newer evidence or use “latest scan” for the historical basis. Some current-state context, where included, must be explicitly labeled as **not part of frozen truth**.

Use **source state vocabulary** in a legible proof-frontier figure: ESTABLISHED / PARTIAL / UNKNOWN / NOT_ASSESSED / NOT_AVAILABLE / candidate as type-specific. **Do not merge** visibility states, claim state, read-model coverage or native Control Tests into one “traffic light.”

**Receipt/integrity semantics:** SHA-256 hashes/tamper-evident recorded artifacts can help verify identity/integrity where actually issued; **hash does not prove upstream evidence was true, a policy was enforced, or a target effect occurred**. Do not claim “cryptographically signed” without actual signature and verification. Treat public examples as *example*; only exact real independently inspectable artifacts get “verified” language.

## 3. Recommended page structure and exact editorial copy

**Editorial concept:** A reader should understand *the impossibility of an answer from a single “green” scanner result* before any dense technical graph. Then teach how HAIEC qualifies each fact and stops exactly where proof stops. Preserve the strong current H1.

### S0 — Hero, 8-second understanding
**Eyebrow:** \`HAIEC METHODOLOGY · DETERMINISTIC AI ACTION ASSURANCE\`  
**H1:** \`How does HAIEC reach a conclusion?\` (retain canonical and SEO intent)
**Subhead:** \`HAIEC examines supported paths from AI requests through tools, code and potential consequences, then evaluates qualified evidence about authority, capability and observation. A conclusion is bounded to the exact system, source, scope and version — and unanswered questions remain visible.\`
**Hero proof line:** \`Qualified evidence · Deterministic evaluation · Explicit proof boundaries\`.
**Primary CTA:** \`Explore the method\` → \`#method-in-action\`. **Secondary:** \`See an Assurance Report\` → \`/sample-reports\`. Small commercial \`Scope an Enterprise POC\` → \`/enterprise\`. Do not lead with sales on a technical trust page.
**Hero visual:** concept editorial split (question, four report answers, visible UNKNOWN) with light/dark shared semantic tokens, not a new mandatory pipeline.

### S1 — Core question / buyer puzzle
**H2:** \`The scanner passed. What did it actually prove?\`
**Copy:** \`Imagine an AI refund agent with a valid API credential, a source-visible refund path and a policy limit. Those are separate facts. None alone establishes whether an authorized person delegated the recipient choice or whether a payment happened. HAIEC asks the same question of each fact: what source supports this claim, and how far does that proof reach?\`
**Visual:** clearly marked FICTIONAL teaching fixture; user reveals Source / IAM / Policy / Delegation / Runtime / Actual effect; no live simulated test or green “all safe.” Link \`/assurance\`.

### S2 — Evidence qualification (major new methodology depth)
**H2:** \`Not every signal is evidence for every claim.\`
**Copy:** \`Evidence is admitted for an exact system, source, producer, run and evaluation snapshot. HAIEC classifies the source and method, checks relevance and coverage for the claim, separates supporting from contradicting or context-only records, and records why something was excluded. An unsupported claim stays unresolved.\`
**Native six-row microtable:** Source identity / Method & epistemic class / Relevance / Scope & freshness / Supporting vs contradicting / Exclusions & digest.
**Proof comparison:** A dependency scan may be technically valid but **EXCLUDED as support** for “human-approved refund choice” if it doesn't measure that claim. An authenticated approval artifact may support governance only within its actor/scope/time; neither is a blank PASS.
**Micro-CTA:** \`See evidence and provenance\` → \`/evidence\`.

### S3 — Reachability and explicit frontier
**H2:** \`Follow the consequence path. Stop where the evidence stops.\`
**Copy:** \`The route from agent to effect often crosses registration, model exposure, tool code, handlers, queues, shared resources and external services. HAIEC reconstructs supported links using exact persisted relation identities. Where names are ambiguous, source is absent or a path is truncated, that boundary is visible — not silently connected by probability.\`
**Diagram**: progressive source diagram with selectable link; left portions ESTABLISHED / right edge \`AMBIGUOUS JOIN — UNKNOWN\`; distinguish \`potential reachability\` vs \`observed call\` vs \`confirmed target effect\`. A separate small shared-resource/channel overlay should say \`potential channel ≠ communication\`.
**No arbitrary speculative graph edges from JS**. Links \`/ai-action-access-map\` and existing \`/enterprise/architecture\`.

### S4 — Five-plane authority + DAI as orthogonal comparison
**H2:** \`Permission is not delegation. Reachability is not execution.\`
**Copy:** \`Requested, policy-authorized, effectively granted, code-capable and observed answer five different questions. Delegated Action Integrity separately compares the actual delegation of consequential choice to what code permits, what access is evidenced and what runtime signals show. Missing delegation cannot be inferred from an approved policy or a valid API credential.\`
**Five equal cards**, no waterfall arrows. One separate **DAI cross-cutting ribbon** with the nine dimensions only as expandable labels, not nine new mandatory product requirements.
**Critical public safe word:** \`Where an authoritative delegation record is not qualified, the comparison remains unresolved. Research-alignment work on policy-versus-delegation admission is an explicit boundary.\`
**Avoid:** “HAIEC proves all AI decisions were human-authorized” / “approved operating envelope proves delegation”.

### S5 — Deterministic evaluation, not AI scoring AI
**H2:** \`Same evaluated evidence. Same rule version. Same conclusion.\`
**Copy:** \`The canonical HAIEC evaluator applies explicit, versioned claim rules to qualifying evidence. It keeps excluded evidence, contradictions and missing source coverage visible. An AI assistant can navigate tools or explain the findings, but it cannot write the official verdict.\`
**Example slider/selection (not a real scan):** “Frozen basis A” vs “Basis B with a new qualified approval record.” A is REVIEW for a **synthetic** example; B requires **new evaluation**, not editing an old decision. Can leave B unresolved if qualified delegation still absent. “Same inputs” requires frozen timestamp/methodology/policy/source, not identical prose alone.
**States:** Claim SUPPORTED/PARTIAL/INSUFFICIENT/CONTRADICTED/REVIEW/NOT_ASSESSED/NOT_APPLICABLE separately from System ALLOW/REVIEW/BLOCK. Clarify **BLOCK is evaluation recommendation/disposition not installed runtime enforcement**.
**CTA:** \`See Assurance mechanics\` → \`/assurance\`, \`View sample report\` → \`/sample-reports\`.

### S6 — Four proof questions and output artifact
**H2:** \`A conclusion you can inspect, challenge and reproduce within its scope.\`
**Copy:** \`HAIEC delivers the recorded evaluation, applicable claim basis, source and evidence provenance, visibility/reachability limitations and decision context. Reports and verification receipts can bind the exact evaluated facts without upgrading untested paths or current-state context into historical proof.\`
**Native answer boxes:** Reach / Authority / Observed / Frontier. Show \`EVALUATED SNAPSHOT\`, evaluation ID placeholder clearly fictional, evidence digest only if really computed for the fixture — otherwise show generic “versioned evidence basis.” **Never invent a real ID or hash**.
**CTA:** \`Explore real examples\` → \`/sample-reports\`, technical \`/enterprise/architecture\`.

### S7 — Scope and falsifiability, not buried caveats
**H2:** \`The limits make the conclusion useful.\`
**Body:** \`Unknown does not mean safe, failed or never occurred. One legitimate source may establish code capability while runtime, delegated authority or target effect remain unassessed. HAIEC makes those proof limits inspectable so the next reviewer knows which evidence would change the decision.\`
Link a short “What this does not establish”: no universal inventory/execution, no certification, no implicit target-native block, no complete cross-tenant joins, no ISAF v2 conformance claim pending admission alignment.

### S8 — Research context (small, clearly separated)
**H2:** \`Research informs the method. Shipped capabilities establish the product.\`
**Body:** \`HAIEC's ISAF work examines instruction-to-consequence assurance and delegation; CSM6 organizes governance functions. These are methodological references, not proof that every conceptual control or research predicate is implemented. ISAF Logger is a separate evidence utility. The canonical platform evaluation uses the current, qualified production contracts.\`
**Links:** \`/research\` (published research), \`/csm6\` (framework explainer), \`/isaf\` (logger utility). **ISAF2 unpublished / no published standalone “ISAF2 released” navigation link.** Only link directly when current text is confirmed and avoid oversized research section cannibalizing /research.

### S9 — Developer/enterprise next step
**H2:** \`Run the same assurance from your existing workflow.\`
**Developer:** \`Run HAIEC AI Assurance\` four-word prompt; link \`/docs/agent-integration\`, copy safe endpoint \`https://www.haiec.com/api/mcp\`. Compatible MCP client + user-scoped API key in secure client storage; agent performs \`haiec_preflight\` read-only; eligible system/source + consent required for authorized run. AI guides, evaluator decides.
**Enterprise:** \`Scope an Enterprise POC\` → \`/enterprise\`.
**Secondary:** \`See Assurance\` → \`/assurance\`, \`Inspect controls\` → \`/controls\`. A no-credential one-shot backend evaluation claim is prohibited.

## 4. Diagram and motion — original, understandable, and not performance theater

**Proposed single flagship new microdiagram:** \`Evidence claim → exact sources → accepted/excluded facts → bounded conclusion → frontier\`, with a **sidecar** reachability path whose final join is UNKNOWN and **five independent plane chips**. Use **native HTML + restrained SVG connections**. This is a *composite teaching graphic* needed for methodology; do **not** commission five more architecture diagrams or paste the complete 12-view explorer.

**Interactive sequence (user-driven):**
1. \`What is the question?\` highlights a fictional consequential refund choice.
2. \`What evidence qualifies?\` toggles a source from CONTEXT_ONLY/EXCLUDED to relevant *only if* a different genuine source is selected; nothing magically changes.
3. \`How far can source reach?\` exact handler relation highlighted, ambiguous service join gets **UNKNOWN frontier**; distinguish path inference from executed transaction.
4. \`Who delegated the choice?\` policy allowed yet delegation **NOT ESTABLISHED**; nine dimensions in expandable detail.
5. \`What does evaluator conclude?\` illustrative REVIEW tied to fictional claim/scope.
6. \`What changes with new evidence?\` a **new evaluation** basis may change after admissible proof, never old record mutation.

**Motion limit:** 150–350ms focus/edge reveal on user click; no live graph crawl, AI reasoning animation, animated “blocked” icon, or auto-completing unknown states. Include always-on \`Illustrative, not a live HAIEC finding\`. Reduced motion static fallback, keyboard buttons/aria-pressed, distinct focus, robust no-JS SSR copy, accessible colors in public **light and dark** mode.

**Use existing assets:** [02 DAI relationships light](design-references/hero-architecture-2026-10-19/light-theme/02-homepage-dai-evidence-relationships-light.svg), [03 consequence outcome flow light](design-references/hero-architecture-2026-10-19/light-theme/03-enterprise-evidence-outcome-flow-light.svg), [04 six capability workflow matrix light](design-references/hero-architecture-2026-10-19/light-theme/04-platform-workflow-matrix-light.svg) as *background technical references/links*, NOT three repeated hero murals. Embed an image only if readable at 390px and status semantics survive dark theme; otherwise use native diagram.

## 5. MENU / IA — specific existing owner and exact placement

**Implement only one new PRIMARY MENU ENTRY, no new top-level category:**

| Where | Current | Proposed | Reason |
|---|---|---|---|
| Desktop + mobile **Resources → Learn** | What is HAIEC / How HAIEC Works / Documentation / Research | **Add “Assurance Methodology” immediately after “How HAIEC Works”** → \`routeFor('methodology','/methodology')\`, description **“How HAIEC qualifies evidence and reaches bounded conclusions”**, icon FileCheck or BookOpen | Existing canonical Resources/SEO owner; discovery and trust; no new route |
| **Resources footer** | Methodology already listed by public registry | **Keep existing automatic item**, do not add duplicate hard-coded row | Prevent split navigation authority |
| **Platform → Core Capabilities** | Evidence, Assurance in present block | **Keep Evidence and Assurance; enhance their child page links to Methodology** and optionally add one contextual “How conclusions are reached” link in Platform body | Don't overload nav with a duplicate primary route |
| **Controls / Assurance / Enterprise page body** | Limited reciprocal links | Add contextual \`How HAIEC proves it\` → /methodology near credible output/claim; preserve page-level CTA | Coherent buyer journey without keyword cannibalization |
| **System Constellation** | existing Platform menu item | Keep route /ai-action-access-map for reachability **product**; methodology explains its *proof admissibility* | Avoid redundant “Reachability Methodology” primary page |
| **ISAF research / CSM6** | /research, /isaf, /csm6 existing pages | Short contextual links only; **do not promote unpublished ISAF2** or add a new primary menu | Preserve framework vs shipped capability |
| **Developers** | “Agent Integration (MCP)” already in Developers → Run HAIEC | Keep it; methodology uses secondary self-serve link | Don't bury trial behind a research menu |

**Exact implementation owner:** \`components/AutoHideNavigation.tsx\` contains a handwritten nav tree; \`data/public-site-registry.ts\` already contains the canonical \`methodology\` route and should remain its href/source; \`components/Footer.tsx\` already derives the Resources footer. Update desktop/mobile via **shared nav config** (not two separate menu branches), avoid another navigation source. Preserve header primary Enterprise/Standard Validation CTA and public theme toggle. Confirm actual UI at desktop/mobile after implementation.

**Other audited pages' menu positioning (no immediate source edits):**
- Platform, products catalog: use current Platform navigation and source-authoritative product links (do not add another top-level Products tab until broader menu IA approved).
- Assurance + Evidence: existing Platform → Core Capabilities (strong).
- Enterprise: existing Solutions → For Organizations and primary CTA.
- Controls: its legacy public registry has different intent; decide later whether a *single* “Controls & Evidence” link should sit beside Assurance in Platform or remain a Resources/Assurance contextual entry after final /controls page owner is reconciled. Do not insert it as “Control Enforcement”.
- Methodology: Resources → Learn as above, distinct from product and research.

## 6. SEO, exact copy ownership and metadata

**Primary intent:** \`AI assurance methodology\`. **Suggested secondary topical language** (editorial, NOT measured keyword data): \`deterministic AI assurance\`, \`AI agent delegated authority evidence\`, \`AI action reachability analysis\`, \`AI agent proof boundary\`, \`evidence qualification for AI systems\`, \`AI assurance evaluation methodology\`, \`source-based AI action proof\`.

**Proposed metadata title:** \`AI Assurance Methodology | Deterministic Evidence & Authority\` (append \`| HAIEC\` **once**, only if root template does not). Preserve root \`/methodology\`, no shadow \`/why-deterministic\` page or duplicated SEO doorway. Proposed meta description: \`See how HAIEC qualifies AI evidence, reconstructs supported action paths, evaluates delegated authority and produces deterministic, scope-bound assurance conclusions with explicit proof limits.\`
**H1:** \`How does HAIEC reach a conclusion?\` unchanged.
**FAQ (SSR, visible):** How is HAIEC deterministic? / What proves reachability? / Does a valid IAM credential establish delegated business authority? / What happens when a producer fails? / Is missing telemetry proof that no action happened? / Does ALLOW mean AI is safe? / Can a receipt prove enforcement? All answers must explain bounded evidence, not legal/general certification.
**Link ownership:** /assurance = evaluated outputs/claims, /methodology = admissibility/how, /controls = specific controls, /evidence = lineage/evidence objects, /ai-action-access-map = graphical product, /research = research, /enterprise = paid decision assessment. Support with native SSR headings, HTML tables, exact image alt/figcaption, anchored section nav and schema only where facts supported. \`data/seo-page-intents.ts\` needs copy alignment but remains owner; keyword scores require actual quantitative validation.

## 7. Product-truth / publication gates — cannot be solved by better words alone

| Gate | Exact source | Must qualify before public stronger claim |
|---|---|---|
| **Delegation admission (P0)** | \`lib/assurance/dai-assembler.ts\` vs ISAF v2 Core Freeze | Stop promoting plain APPROVED envelope policy to delegated choice. Separate authoritative delegation evidence and lifecycle. Until proven: do not claim full ISAF2 delegation conformance or all delegation decisions checked |
| **Source qualification (P0)** | evidence-set builder, epistemic classifier, claim evaluator, active producers | Claim must identify valid producer, method, claim relevance, scope, coverage, snapshot and excluded evidence; a registered producer is not an executed producer |
| **Reachability exactness (P0)** | action-proof-trace, ARI, endpoint-join, U6 evaluated-scan loader | Same-scan exact identity, candidate vs ESTABLISHED, no name-only joins, no current fallback, report total/truncated, no false observed target effect |
| **Determinism language (P0)** | deterministic serializer, U5 claims, report product | “same evidence” specifically means **same qualified frozen evidence, profile/methodology and snapshot**, not new scan or mutable repo; do not promise perfect accuracy |
| **Proof boundary (P0)** | U5 claim vocabulary and U6 exact report | UNKNOWN not pass; no current/latest re-derivation, hash not signed truth, BLOCK ≠ actually enforced |
| **Current producer status (P1)** | producer qualification matrix frozen 2026-08-30 + current Main | Check current actual producer and tenant/source availability before saying all modalities operate |
| **ISAF/CSM6 mapping (P1)** | ISAF published v1, ISAF v2 unpublished freeze, ISAF Logger, CSM6 separate | Research terminology informs method; independent published claims and deployed features only if supported |

## 8. Implementation workflow when authorized

1. Refresh HAIEC Main and current public nav/theme state. Validate /methodology current SSR, metadata, registry, footer, route redirects \`/why-deterministic\` and /docs/determinism.
2. Perform **targeted code-level check of DAI policy→delegation admission** and classify as unresolved until verified correction. This page plan itself **does not** change engine implementation. Create one P0 product-truth acceptance item and update release claim matrix.
3. Replace sparse six-numbered-card methodology only as an *example method*; preserve important sentences. Add S0–S9 core sections and a single short interactive synthetic example, exact relationship/proof-frontier panels, truthful actual report links. Use client island only for optional teaching interaction; essential content SSR.
4. Reuse **shared public marketing light/dark design tokens and single accessible toggle** designed for Platform/Products/Assurance/Enterprise/Controls. The workspace \`ws-*\` toggle is separate and cannot be assumed to style public pages. Add no new brand/theme provider.
5. Add **Resources → Learn → Assurance Methodology** in **AutoHideNavigation** once; retain PUBLIC_SITE_REGISTRY and auto-footer; update contextual links in relevant page components only, with no new top-level menu.
6. SEO title/template, canonical, JSON-LD if applicable, anchored headings, no duplicate content, accurate research links and version scope.
7. Fast focused checks: lint/typecheck affected files, compile/static route smoke, two modes at 390/768/1440, keyboard/reduced motion, no-JS method text, real links, nav desktop/mobile, actual report sample target, no backend fake run. Include semantic state/claim review and a delegation admission negative fixture; avoid wide unrelated regression testing.
8. Upon **separate implementation authorization**: one PR into HAIEC Main and automatic Vercel deploy; verify public route/theme/menu/SEO/CTAs + source gates, record commit/PR/READY and screenshot evidence into Common Repo. Current task is **planning and design in Common Repo only**.

## 9. Acceptance contract

A technically literate reader can explain:
- **What is evidenced vs merely asserted**: source, method, qualification, relevant claim, snapshot;
- **Why valid access is not delegated decision authority**;
- **Why reachability is not execution** and exact/ambiguous links stop at visible frontier;
- **What deterministic evaluation means** under fixed inputs and version;
- **Why a SHA digest does not prove that a target action was prevented**;
- **What is unknown, not assessed or not available** without invented PASS;
- **Where Methodology lives in the navigation**, and how Assurance/Controls/Enterprise/MCP relate;
- **What current ISAF2 implementation admission work remains**, without describing it as a released standard feature.

**Next sequential audited page:** Pricing. Keep the same brand/SEO/dual-theme/page-tracker pattern, reconcile true entitlement/plan owners before any new price/benefit statement.
