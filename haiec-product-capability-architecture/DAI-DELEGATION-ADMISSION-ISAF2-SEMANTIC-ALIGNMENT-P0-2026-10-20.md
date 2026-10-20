# HAIEC — P0 Delegation Admission / ISAF v2 Semantic Alignment

**Found in Methodology page deep audit, 2026-10-20.** **UNRESOLVED ENGINEERING / RELEASE-CLAIM GATE**, not proof of a customer incident, not a production fix and not a request to publish ISAF2.

## Grounded issue

**Research semantics:** [ISAF v2 Canonical Core Freeze v1.0](https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit). The freeze requires \`APPROVED_OPERATING_ENVELOPE != DELEGATION_EVIDENCE\` and independently authoritatively proven delegation for protected choices. This source is **unpublished research core**, not a released public ISAF v2 assurance certification.

**Current HAIEC source inspected:** Main \`e4e46c36ce23fe4be5011051558077630abeab5d\`, \`lib/assurance/dai-assembler.ts\` (blob \`7f6aa852d6b6f9199263da51042bf8d46e4eee2c\`):
- Header still states \`delegated ← operating_envelopes rows (APPROVED only)\`, unioned with org-confirmed delegation documents.
- Function \`delegatedFactsFromEnvelope()\` puts ordinary \`constraints.allowedOperations\` and \`constraints.resourceScopes\` into *delegated* dimension inputs.
- The assembler has meaningful history/scope guardrails and separate confirmed-delegation intake, but these do not by themselves resolve the **policy→delegation category error**.
- Pure \`lib/assurance/dai-evaluation.ts\` is a deterministic comparator over typed inputs with nine dimensions and seven states, but cannot establish authoritative delegation if assembler inputs are semantically over-admitted.

**Inconsistency:** an approved Operating Envelope can be qualified evidence of what policy **allows**; it is not automatically proof of who **delegated the consequential choice**, with what authority, validity and approved domain. An org confirmation of a document alone also does not necessarily establish the confirmer's authority.

## Truth-lock and proposed acceptance

1. Inspect the latest Main (the snapshot here is 2026-10-20), including actual DAI path and test fixtures; reconcile any engineering changes since this source.
2. Make the **POLICY_AUTHORIZED** plane consume approved Operating Envelope constraints. Populate the DAI \`delegated\` comparison region only from typed, admissible, exact authority evidence establishing:
   - authoritative delegator identity and protected choice domain;
   - delegate identity and operation/target/scope/magnitude limits;
   - provenance, approval/authentication and authorization of source actor;
   - validity at evaluated epoch, not revoked/expired/superseded;
   - exact historical system/source/tenant/snapshot; no cross-run fallback.
3. Policy-only case, even with granted credential and code-capable path, yields **NO DELEGATION ESTABLISHED** (NOT_ASSESSED/UNRESOLVED as actual typed contract allows) — no invented “inside delegation” or claimed violation.
4. Qualified positive authoritative delegation fixture supports bounded comparison; qualified out-of-scope operation fixture supports comparison only with actual delegation basis; stale/revoked provenance reverts to unknown. Confirm **MISSING_DELEGATION != VIOLATION**, **DAI_NOT_ASSESSED != BREACH**.
5. Keep DAI orthogonal to exactly five evidence planes and independent from U5 disposition. Do not introduce a sixth plane, second evaluator, new store or AI opinion-verdict.
6. Only when reviewer/owner confirms the implementation and fixtures may public Methodology and Assurance claim alignment to ISAF v2 *semantics*, and **never** represent unpublished ISAF2 as a released standard/certification.

## Safe public copy until verified

> “HAIEC compares qualified code, policy, access, runtime and available delegation evidence. An approved policy or valid credential does not by itself prove delegated authority to make a consequential choice; missing authoritative delegation remains an explicit evidence gap.”

**Prohibited public claim while gate open:** “Every approved HAIEC Operating Envelope proves authorized human delegation”; “HAIEC verifies all delegated decisions”; “ISAF2 certified/fully implemented”; “missing delegation proves a violation”.

## Ownership, linkage and status

- **Engine owner:** \`lib/assurance/dai-assembler.ts\` and \`lib/assurance/dai-evaluation.ts\`.
- **Evidence owner:** actual DAI evidence intake/parser + approved policy and historical source binding.
- **Reporting owner:** canonical U5/U6 and source-qualified Agent Audit, no independent new verdict.
- **Editorial references:** [Methodology plan](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md), [Assurance plan](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md), [Research](https://www.haiec.com/research).
- **Current state:** GAP_OBSERVED_IN_SOURCE / NOT_REMEDIATED / PRODUCT_CLAIM_RESTRICTED / NO_DEPLOYMENT_ACTION.
