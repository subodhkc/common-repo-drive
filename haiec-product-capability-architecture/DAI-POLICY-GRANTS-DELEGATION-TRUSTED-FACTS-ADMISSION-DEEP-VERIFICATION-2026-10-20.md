> **2026-10-20 PRODUCT PRIORITY UPDATE:** [Findings-first DAI customer experience, precise follow-up language and no universal pre-evaluation gates](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md) is the controlling UX/product direction. The source accuracy recommendations below remain useful **only as scoped engineering correctness**, not a barrier to early scanning, candidate risk findings or homepage improvements. Minimize new user evidence collection burdens.

# HAIEC DAI — Deep Source Verification: Keep Policy Proven, Admit Genuine Delegation, Avoid Blanket UNKNOWN

**Date:** 2026-10-20. **Status:** READ-ONLY SOURCE VERIFICATION + IMPLEMENTATION RECOMMENDATION, NO HAIEC ENGINE CHANGE.  
**User correction accepted:** Do not label POLICY_AUTHORIZED UNKNOWN merely because independently admitted delegated authority is not yet established. The policy evidence is real and relevant. A separate delegation requirement arises only for an agent's *consequential discretionary choices* that are not already fixed by qualified trusted facts. This is **not** a blanket unknown classification.

## 1. Evidence reviewed

- **Product source:** \`subodhkc/haiec-website\` Main, \`lib/assurance/dai-assembler.ts\`, \`lib/assurance/dai-evaluation.ts\`, \`lib/assurance/dai-evidence-parser.ts\`, \`app/api/dai/evidence/route.ts\`, \`components/monitoring/DaiEvidenceIntake.tsx\`, \`lib/ai-security/delegated-authority.ts\`, \`app/(workspace)/monitoring/dai/page.tsx\`.
- **Canonical research/semantic freeze:** [ISAF v2 — Canonical Core Freeze v1.0, 2026-09-26](https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit). **Unpublished research model, not deployed feature conformance.**
- **Prior finding:** [P0 DAI delegation admission alignment](DAI-DELEGATION-ADMISSION-ISAF2-SEMANTIC-ALIGNMENT-P0-2026-10-20.md).
- **Existing Methodology plan:** [Methodology page review](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md).

**Key exact source facts and status:**

1. \`lib/assurance/dai-assembler.ts\` still calls \`delegatedFactsFromEnvelope()\` on ordinary approved Operating Envelope constraints (allowedOperations, destinations, resourceScopes, approvalRequirements, data classes, environment, geography, magnitude). In the assembler's DAI comparison, those constraints are fed into \`delegated\`; although approval can be established, **a policy boundary is not automatically delegation of discretionary choice**.
2. This is **not** the claim that approved envelopes are useless: their ordinary constraints are appropriate, qualified **POLICY_AUTHORIZED** evidence and must remain so. The risk is **claim-type promotion**, not missing policy.
3. \`app/api/dai/evidence/route.ts\` already has authenticated org-scoped POST, typed \`confirmed:true\`, system ownership validation, source reference, provenance \`confirmedBy\`, document ref and time, and existing evidence storage. Good foundation to retain. However, the \`ConfirmedFieldsSchema\` lacks authoritative **delegator identity/authority**, specific **delegate principal**, protected discretionary choice bindings and independent lifecycle validation. \`validityWindow\` is admitted but not visibly applied as a canonical expiry/revocation test before merging into DAI; \`confirmedBy\` proves who confirmed intake, **not automatically who was authorized to delegate**.
4. Current \`dai-assembler.ts\` merges org-confirmed evidence into already envelope-derived \`delegated\` values by set union; magnitude is \`Math.max(...)\`. **This can widen a claimed delegation boundary instead of restricting it to the most authoritative applicable record**. Where contradictory records overlap, rules for intersection/precedence and lifecycle must be defined. Under frozen semantics, neither simple union nor arbitrary max is a safe automatic authority-admission policy.
5. \`lib/assurance/dai-evaluation.ts\` is a deterministic **nine-dimension bounded comparison** on caller-admitted delegated/capable/granted/observed facts. It has important hard negatives \`MISSING_DELEGATION != VIOLATION\`, \`DAI_NOT_ASSESSED != VIOLATION\`, \`OBSERVED_OUTSIDE_DELEGATION\` requires exact delegation. Keep the comparator and its version/receipt contracts; do not claim it is already the research model's complete protected-commitment residual classifier.
6. \`lib/ai-security/delegated-authority.ts\` already distinguishes \`PERMISSION != DELEGATION\`, \`DELEGATION_DECLARED != DELEGATION_ACTIVE\`, \`CONTROL_PRESENT != PATH_BOUND\`, \`PATH_BOUND != TRIGGERED\`, \`TRIGGERED != ACTION_EXECUTED\`. Its explicit upstream delegation relation producer reports \`EXPLICIT_DELEGATION_UPSTREAM_PRODUCER_NOT_AVAILABLE\` in present source. Thus the platform has **some** evidence intake/comparison logic, but must not imply every source path establishes active delegation.
7. Evaluated-run history guards exist in the assembler: bound envelope ID/version, snapshot cutoff and attached observed producer batches. **Retain**; do not substitute current approved envelope, newer delegation record or current source for old evaluation.
8. The evidence upload parser is **advisory only**, with user review before persistence; UI currently calls a confirmed row \`declared delegation\`, not verified authority. This distinction is a positive existing safeguard.

## 2. The conceptual fix: three authority questions, not one generic pass

The ISAF v2 semantic model separates these independent predicates:

| Question | Correct source/evidence | Product answer when supported source qualifies | What must not be inferred |
|---|---|---|---|
| **PolicyAuthorized(action)** | APPROVED Operating Envelope, org policy, signed configuration and version | \`WITHIN_POLICY\` / \`OUTSIDE_POLICY\` / \`POLICY_NOT_ASSESSED\` as **proposed explanatory labels**, not new U5 enum | This does not say human delegated choices |
| **DelegationComplete(action \| K,D)** | Trusted facts K fix some choices; for remaining discretionary protected commitments, typed authoritative delegation D | Per-choice \`GROUNDED\` / \`DELEGATED\` / \`UNAUTHORIZED\` only with closed valid negative authority basis / \`INDETERMINATE\` (research formalism, **not** existing full product output) | Absence of separate delegation does not make a fully rule-grounded choice UNKNOWN, and absence of evidence does not prove violation |
| **ExecutionAuthorizedNow(action,state)** | Current approvals, budgets, constraints, revocations, rate limits, protective guardrails, reservations, customer gateway authorizations | Only within actual connected provider/target/tested integrations | Standing policy/DAI comparison cannot prove currently allowed execution or successful target block |

**Five evidence planes stay five:** REQUESTED, POLICY_AUTHORIZED, EFFECTIVELY_GRANTED, CODE_CAPABLE, OBSERVED. Delegation is a cross-cutting relation, **not** a sixth plane.

**Key nuance:** Trusted policy plus authenticated business facts may deterministically *fully fix* a protected commitment: no discretionary delegation proof is necessary **for that choice** because the agent was not authorized to decide it independently. Verify that the implementation really applies the constraint and that the chosen value agrees with the rule; policy existence alone does not prove the actual code/target enforced it. For residual choices not fixed by trusted facts, authoritative delegation evidence is required to say \`DELEGATED\`.

### Example: refund agent

**Rule-bound case:**
- Approved policy: refunds only to the original verified payment method, up to $500. System's exact authenticated original-payment facts bind a unique recipient, and selected refund amount derived from verified transaction balance.
- \`PolicyAuthorized\`: established **for choices that conform**, assuming policy is current.
- \`Recipient choice\`: can be \`GROUNDED\` by policy+trusted original-payment facts **once exact selected recipient is shown to match**, without separate discretionary delegation.
- \`EffectivelyGranted\`: provider IAM/source may show it can access refund endpoint; this is independent.
- \`CodeCapable\`: selected implementation path may be reachable; does not imply executed.
- \`Observed\`: remains NOT_ASSESSED if telemetry absent.
- \`Target enforcement\`: cannot claim blocked alternate-account refunds absent gateway/effect proof.

**Discretionary case:**
- Same $500 policy grants an API ability to refund but lets agent choose *new bank account* from arbitrary candidate recipients.
- \`PolicyAuthorized\` can still be established for the amount/operation. \`EffectivelyGranted\` may be established for the API operation. **Recipient choice delegation** is a separate question.
- If an authorized business owner signed a current, scope-matched delegate instruction granting this agent recipient-selection rights for a specific refund cohort, decision class, budget and validity window, DAI may compare the delegated recipient scope.
- If no such admissible authority evidence is present and trusted facts don't fix recipient, state **delegation not established for recipient choice** while retaining all known policy/grant/code facts. **Not automatically a violation.**
- If a valid complete authoritative delegation **explicitly disallows** the chosen recipient, or an authoritative closed-world denial exists, the supported inconsistency may be a violation/out-of-scope finding; still distinguish possible code-capable path from actual observed violation.

## 3. What “delegated access” must contribute, and what it cannot

Review at least these independent evidence owners before declaring “delegation established”:
1. **Who owns the decision?** A human, organization, service role, workflow or delegated administrator with verifiable authority for that business choice; record delegator ID/role/authority source. A signed doc from any logged-in user is insufficient.
2. **To whom?** Agent principal, service identity, agent/workflow version, delegated service account, tenant/system/role/session as appropriate. IAM principal granting API access alone does not settle protected business decision authority.
3. **What choice?** Refund recipient, beneficiary, data recipient, contract counterparty, amount, geography, customer/tenant data scope, protected selector, termination/budget, and applicable environments.
4. **What authorization event?** Immutable change request, organization approval, signed delegation, authorized task/work order, API-scoped mandate, workflow assignment, attributable approval record, or governance policy that **explicitly delegates** a protected decision class. A policy **can** be delegation evidence when its actual authenticated text/actors/role/scope satisfy that contract; an ordinary APPROVED envelope is not automatically one.
5. **When does it apply?** Effective time, expiration, revocation/supersession, version and **evaluation snapshot**; current actor rights, approval requirements and system/environment must match.
6. **What was granted and technically possible?** Provider IAM and credentials + code reachability / tool implementation / exact graph joins (source). Helps compare divergence, not prove business delegation.
7. **What happened?** Signed/qualified runtime traces and actual receipts when available; source presence not execution; downstream business-state verification distinct.
8. **Did a mediation/approval actually operate?** Source path-bound control vs triggered human approval vs target-native gate/execution effect are separate. No claim of runtime block until proved.

Sources potentially reusable: IAM/IdP group+role with authoritative workflow grants, approved business work orders, ticket/approval trails, ERP/MES delegated roles, workflow policy, versioned operating envelope explicit delegation attachment, signed mandates, API authorization policies, signed contract rules, existing DAI uploaded evidence, MCP tool capability/scope and runtime log attachments. **Do not blindly combine them**; each producer requires typed relevance and scope qualification.

## 4. Minimal implementation path (avoid redesigning DAI)

**P0 — correct the admission layer, preserve results and provenance:**
1. Separate ordinary APPROVED envelope fields into **POLICY_AUTHORIZED** context. Stop \`delegatedFactsFromEnvelope()\` from automatically filling canonical delegated inputs. Permit only **explicitly typed, independently qualified delegation subobjects** in an envelope to enter DAI if actor/authority/scope/time verified.
2. Reuse existing \`delegation_evidence\` storage and \`/api/dai/evidence\` route. Add *additive* admission metadata rather than second authority engine/table: \`delegationAdmission: { state:'ESTABLISHED'|'UNRESOLVED'|'NOT_PROVIDED', delegatorIdentityRef, delegatorAuthorityRef, delegateIdentityRef, protectedChoiceScope, validity, provenanceRefs, lifecycleState, limitations }\`. Validate authenticated delegator authority using an existing verified org/role/approval source; org intake confirmation remains \`DECLARED\` until this.
3. Make admission deterministic per exact choice, system, tenant and evaluated time. Expired/revoked/unverifiable actors or missing context should not populate established delegated comparison. Preserve uncertainty in a named, inspectable reason, not a blanket UNKNOWN over the whole action.
4. **No permissive union** of policy envelope values and org-declared delegation or widening \`Math.max\` amounts. Define deterministic overlap/precedence and conflict handling; if scope disjoint, keep separate evidence records and choose exact applicable authority. Conflicting scopes: explicit named review. Never silently broaden authority.
5. Expose independent \`policyAuthorized\`, \`effectivelyGranted\`, \`codeCapable\`, \`delegationAdmission\`, \`observed\` and \`targetEffect\` in report as applicable. **Do not change existing U5 verdict enum** or pretend new ISAF2 research per-commitment classifier shipped.
6. Ensure frontend labels distinguish \`Policy established; delegation missing for discretionary recipient choice\` from \`No evidence of policy\`, \`Outside established delegation\`, \`Delegation not necessary — choice grounded\` (the last only if implemented and qualified), \`Control path observed\`, \`Target effect verified\`.
7. Make current evaluation epoch snapshot and relation identity carry through U6 report/provenance and API/MCP; no latest-evidence fallback.
8. Update safe public Methodology and Assurance messaging **after** release-gated tests, not ahead of source truth.

**Recommended two-step development scope:** First **correct Policy→Delegation admission and test existing DAI v1** (small P0 fix). Separately consider **ISAF v2 residual-choice classification** (P1 research/product extension), not a silent big-engine rewrite in the public website PR.

## 5. Bounded acceptance fixtures (fast tests, not extensive end-to-end)

| Fixture | Expected correct independently qualified result |
|---|---|
| Approved envelope allows refund and $500 cap; no typed delegation, no fixed recipient facts | Policy established; delegation for discretionary recipient **NOT_PROVIDED/UNRESOLVED**, not violation and not fully delegated |
| Approved policy fixes original card; authenticated facts and exact selected recipient conform | Policy established; rule-grounded recipient **only if grounded-choice classifier implemented**, otherwise DAI v1 reports bounded/incomplete delegation state, **not invented PASS** |
| Valid authoritative business owner delegates recipient class to matching agent for valid time & amount | Delegation admission \`ESTABLISHED\`, DAI bounded comparison supported for exact dimensions |
| Org user uploads text declaring delegation without proof they can delegate this choice | \`DECLARED/UNRESOLVED\`, not ESTABLISHED |
| Two contradictory delegation documents, one permissive one narrow | Explicit provenance conflict/review; **not union + \`Math.max\` widening** |
| Delegation valid yesterday but expired/revoked at evaluation snapshot | Not active/delegated at evaluated epoch, existing historical evaluation unchanged |
| IAM permits recipient change but delegation not established | Grant established, decision authority unresolved; not automatically a real-world breach |
| Code can invoke another API, but no runtime traces and no gateway integration | Code capability possible, OBSERVED NOT_ASSESSED, target effect NOT_VERIFIED |
| Runtime shows actual chosen recipient outside an established exact valid delegated bound | May support \`OBSERVED_OUTSIDE_DELEGATION\` if source/scope/identity qualified; not just inferred from name |
| Re-read old evaluation after new delegation evidence confirmed | Old evaluation's frozen membership unchanged; new evidence only affects new evaluation |

**Proof requirement:** Build unit tests around admission/snapshot/overlap, plus one focused authenticated API/MCP report read path. No broad tests or production writes without specific authorization.

## 6. Safe copy for website and decision outputs, now

**Company positioning unchanged:** **Deterministic AI Action Assurance** / Evidence-Bound Assurance.

> “HAIEC evaluates policy authorization, effective access, source-visible capability and qualified observed behavior separately. For decisions involving material discretion, it also examines the provenance and scope of delegated authority. Where trusted rules fully determine the choice, separate discretionary delegation may not be necessary. Unknowns are specific to the missing evidence, not the entire system.”

**Avoid:** “HAIEC assumes there is no delegation whenever no separate signed doc exists”; “An approved Operating Envelope always proves delegated business choice”; “Policy evidence is UNKNOWN until humans delegate”; “No observed runtime = no action”; “DAI v1 already implements full ISAF2 completion residual”; “absence of delegation document means security violation.”

**Status:** Source gap verified; recommended semantic admission correction and acceptance contract written to Common Repo. **No HAIEC engine or production website code changed by this document.**
