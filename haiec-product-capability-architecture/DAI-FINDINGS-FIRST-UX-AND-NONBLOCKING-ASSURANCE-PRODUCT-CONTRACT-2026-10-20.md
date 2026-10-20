# HAIEC DAI — Findings-First Product Contract, Not a New Evidence Admission Funnel

**Status 2026-10-20:** User-directed **product and UX decision** to accompany [Homepage UX V2](WEBSITE-HOMEPAGE-PRODUCT-UX-V2-HERO-DAI-MCP-PLAYBACK-DESIGN-2026-10-20.md). No HAIEC engine, monitoring, IAM or target runtime code changed.

## Executive product decision

**HAIEC should find risk on the first eligible source pass and progressively sharpen the conclusion.** Do not convert a source-visible action, code capability or configuration exposure finding into a global UNKNOWN just because one authority/delegation/runtime source is absent. The most useful experience is **what was found → why it matters → what is known → what to investigate next**, not “we cannot assess anything until you upload more evidence.”

**Strong public USP:** “Find consequential AI action paths, compare the authority behind the choice, and support repeatable assurance decisions.”  
**DAI headline:** **“A credential permits an action. Who authorized the AI to make that choice?”**  
**Tagline:** High assurance in every consequence.

DAI is a **differentiating insight in the common product's assurance experience**, not a seventh capability, a compulsory wizard, a standalone evidence-upload gate, or a prerequisite for showing a static risk.

## The practical evidence model (fewer hurdles, not fewer standards)

| User-facing fact | What we should show immediately | What it does NOT automatically prove |
|---|---|---|
| Source-visible action path found | A concrete agent/tool/handler/resource reachability finding + source link and likely consequence, with candidate/established relation distinction | Executed action |
| Approved Operating Envelope/policy found | **“Policy scope available”**, allowed operation/amount/recipient rule and policy version, if applicable | Standing permission alone ≠ discretionary choice delegation |
| Effective IAM/provider grant found | **“Access grant confirmed”** and relevant principal/operation/scope, where connected | Human/business decision rights |
| Explicit authorized workflow/role/task delegation found | **“Delegated choice available”** for exact principal, protected choice, scope and time where the source supports it | Universal authority over every action |
| Trusted policy+transaction facts fully fix the protected choice | **“Rule-grounded choice”** *when actual chosen value matches verified fixed rule*; no separate discretionary choice evidence needed for this aspect | Runtime effect or other independent choices |
| Some required facet not supported | **“Recipient authority needs review”**, **“No runtime source connected”**, **“Exact target effect not assessed”** — a precise action, not a blanket engine failure | Safety, violation or permission |
| Actual runtime/target event connected | Show only the observed event and qualified effect support, if present | Effects outside the source scope |

### First-pass disclosure model
1. **Find:** as soon as selected source evidence supports it, show technical exposure, potential consequence, severity/impact assessment as a *bounded analytic output*, source IDs and affected path.
2. **Explain:** use known approved policy/access/declared authority/facts **where available**. Enrich a finding, don't suppress one.
3. **Prioritize:** surface meaningful mismatch or unusual capability/authority expansion as a **review candidate** even if every plane isn't wired. Differentiate a hypothesized mismatch from an exact confirmed violation.
4. **Assure:** apply current deterministic U5 claims/DAI comparator to the supported evidence basis, with exact typed result codes at API/report level and open-source limitations. Do not invent a “universal all green” or reinterpret NOT_ASSESSED as PASS.
5. **Operate:** suggest a bounded next question: “Inspect grant,” “Confirm who can choose recipient,” “Connect monitoring if you need to establish actual execution,” or “Review policy exception.” No required all-source checklist.
6. **Verify:** reports/receipts retain exact evaluated scope; installed runtime mediation/actual target effect remains independently evidenced.

**No extra preflight friction for a static scan:** Authentication and permission to analyze an authorized repo remain required. A canonical assurance evaluation needs its documented minimal eligible inputs, but do not impose every possible producer, runtime adapter or manual delegation upload as mandatory **for the earlier first finding**.

## DAI user-facing vocabulary (technical enums remain unchanged)

**Preferred**
- “Found in source”
- “Possible consequential action”
- “Policy permits this operation”
- “Grant confirmed”
- “Rule determines the recipient”
- “Delegated recipient choice recorded” (when actually established)
- “Source path needs investigation”
- “Specific recipient-choice authority needs review”
- “No runtime connection for this question”
- “Observed action in connected scope”
- “Effect not verified”
- “Evidence needed for this decision”

**Avoid as hero/result headline**
- “UNKNOWN ≠ PASS”
- “All delegation UNKNOWN”
- “Not enough evidence to do anything”
- “Cannot perform assurance”
- “REVIEW — missing runtime data” where the source finding was established independently
- “Automatic protection/approval succeeded” without customer-side integration/effect evidence

**Important:** UNKNOWN, INSUFFICIENT_EVIDENCE, NOT_ASSESSED, REVIEW_REQUIRED and related enums retain their technical meaning in actual canonical U5/DAI outputs, APIs, MCP and historical reports. Marketing copy should explain their *specific question and useful next action*, not bury them or change persisted results.

## DAI scenarios customers understand

**A. Rule-grounded:** Policy says “refund only original verified payment method” and verified payment facts identify that method. If actual chosen value matches, the recipient can be grounded in policy+facts. No separate discretionary recipient authorization is required *for this protected selector*. A refund still must satisfy amount/source constraints; actual target effect is a separate fact.

**B. Bounded delegation:** A validated business owner delegates recipient exception handling to an exact agent/workflow for specified orders, time and amount. If scope matches, DAI compares code capability, effective grant and relevant observations with that delegation. “Registered role” by itself may be enough for an explicitly authorized task class only when the scope/actor contract establishes it.

**C. Needs follow-up:** Source shows the agent could choose a new bank account, policy allows certain refunds and IAM permits the API, but exact recipient-choice delegation is unverified. The technical possible-money-movement finding is still real in scope; the site reads **“Policy and path known. Who can select a new recipient needs review.”** This is not a proven policy violation or universal engine UNKNOWN.

**D. Established mismatch:** A qualified policy explicitly forbids a selected bank account, while an exact source path permits arbitrary recipient changes. Show **“Code capability may exceed permitted recipient boundary”** based on comparable policy and source scope, even before runtime logs exist. Distinguish code capability mismatch from observed breach.

**E. Observed deviation:** With a qualified source/identity/time basis, runtime records action outside a genuinely established approved/delegated scope. Then a strongly worded **observed out-of-scope** result may be justified for that facet; target-side effect still separate.

## DAI technical alignment — narrowly scoped, not a priority hijack

The verified assembler issue remains: ordinary approved envelope constraints currently feed \`delegatedFactsFromEnvelope()\`, then mix with uploaded confirmed delegation through union/max widening. This **can overstate business choice authority**, which is a substantive accuracy concern.

**Recommended response:**
- **Do not block initial source findings**, homepage publication or general legitimate risk discovery to fix this.
- **Do not impose universal delegation upload/identity validation wizard** or novel “admission pipeline” before basic results.
- **Do preserve** exact approved policy, IAM grants and code facts; do not downgrade them to UNKNOWN.
- If a specific product decision genuinely needs a verified delegated protected choice, allow existing trusted records/workflows including explicit policy delegation to support it; show precise uncertainty otherwise.
- A focused engine follow-up should ensure **ordinary policy values don't silently inflate delegated choice claims** and avoid permissive evidence union. This can be an internal correctness ticket with bounded unit cases, separate from UI enhancement.
- Avoid hard-blocking the full DAI journey on unpublished ISAF v2 research residual-classifier semantics. That is future research alignment, not the launch gate for detecting a code-exposed mutation path.

**Implementation priority:** user-facing first finding + hero DAI insight + consistent source-based consequence copy now; bounded DAI authority admission accuracy follow-up on the affected claim path, not a new product-wide precondition. If stronger claim cannot be supported yet, mark just that claim's decision open, while preserving what is known.

## Homepage, IDE and playback copy contract

**Hero:** “Find the path first. Understand its delegated authority. Make the decision with evidence.”  
**DAI hero interaction:** Rule-grounded / Delegated choice / Needs follow-up; never seventh equal peer card.  
**MCP terminal first result:** “POTENTIAL CONSEQUENCE FOUND — source-visible refund path” rather than leading with “UNKNOWN”.  
**Demo playback:** “Policy and access put the finding in context” rather than “cannot proceed silently.” Review only when consequence/policy requires it; in-scope work continues; simulated scenario never sends notifications or blocks an actual target.

**Status lock:** **DESIGN / PRODUCT COMMUNICATION DECISION ONLY**, no API enum rewrite, customer runtime effect, delegated proof or live report changes represented.
