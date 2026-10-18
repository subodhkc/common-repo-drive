# E5.2 — Reusable Action Mediation Skeleton (Non-production Reference)

**Built:** 2026-10-18. **Status: SOURCE_SCAFFOLD_READY / CUSTOMER_ENFORCEMENT_NOT_CONNECTED.** Executable, framework-neutral TypeScript + 12 standalone synthetic tests, NOT a deployed HAIEC API, npm SDK, hosted product or actual customer protection. It lives in the **Common Repo**, not the HAIEC application runtime.

## Why this exists

This supplies an adaptable **pre-dispatch control seam** for enterprise customization. The host gateway or application must mediate the customer operation. Existing HAIEC deterministic policy/approval, Kill Switch, native adapter and E4/E5 evidence owners remain authoritative; this code does not duplicate them.

1. The customer agent attempts an action and its trusted host computes an **exact digest covering every decision-relevant field**. The host authenticates actor and target. Callers cannot supply a forged approval/policy decision.
2. A trusted server-side `TrustedAuthorizationPort.decide()` consults current approved policy + human decision (when applicable) and emits bound `ALLOW`, `DENY`, `REQUIRES_HUMAN` or `INDETERMINATE`. **This reference does not implement authorization logic.**
3. DENY, HOLD, unknown, invalid and mismatched/expired decisions **do not call the target**. HOLD does **not queue or replay**; request human approval through existing HAIEC My Work, then **re-submit** after fresh exact policy, scope and revocation checks.
4. A real integration supplies a **durable and atomic** `AtomicDispatchClaimPort` across workers. Refused/unavailable claims prevent target execution; the mock is not a real atomic store.
5. Only the trusted `AuthorizedExecutionPort.dispatch()` can execute the target operation. Its return is `DISPATCH_ATTEMPTED` and effect `NOT_VERIFIED`; a timeout/exception is `DISPATCH_UNKNOWN`, not safe-to-retry.
6. Production deployment must separately verify mandatory interception, no bypass, customer permissions, receipt/readback, policy distribution and recovery.

## Files and tests

- [action-mediation.ts](action-mediation.ts): provider-neutral typed contract, exact bound authorization, fail-closed, claim before dispatch, bounded outcome.
- [action-mediation.test.cjs](action-mediation.test.cjs): 12 synthetic negative/positive tests, no customer service required.

Requires Node.js and TypeScript `tsc`. Run in this directory:

```sh
tsc --target ES2022 --module commonjs --strict --skipLibCheck --outDir dist action-mediation.ts
node action-mediation.test.cjs
```

**Local reviewer verification:** TypeScript 5.8.3 compiled clean and **12/12** synthetic tests passed. Covered permit, deny, hold, unknown, foreign system, changed digest, expired decision, refused/failed claim, target exception, bad attempt and unavailable authorization. GitHub CI, customer execution and external MCP were **not** run on this reference.

## Customer customization options

| Integration | Customer prerequisite | HAIEC customization |
|---|---|---|
| Tool/MCP/API gateway | Sensitive calls forced through customer-owned controlled route | Exact operation/actor/target mapping, source/policy/receipt adapter |
| OPA + Envoy, AgentCore Gateway Policy/Cedar, IAM or native policy | Approved target-native permission, verified PEP configured and unbypassable | Policy translation, integration configuration, source-qualified decision/outcome witness |
| Application middleware or SDK bridge | Wrap every consequential handler, including retries/background jobs | Minimal host hook + scoped credentials, fail mode and target receipt, package compatibility review |

Use **one reusable core plus minimal customer-specific adapters**, not a separate runtime engine for each business. Do not infer an uninstrumented app is protected.

## Not yet built or verified

- Production target adapter (the HAIEC registry currently returns a nonprod fixture or empty list).
- Real `TrustedAuthorizationPort` binding approved envelope + current scoped human decision, required conditions and target-effective permissions.
- Verified canonical digest creation from the full actual action; trusted caller supplies fields in this skeleton.
- Durable atomic claim implementation, cross-worker replay and payload-conflict checks.
- Production gateway/network/identity isolation, signed versioned policy distribution, revocation, availability and provider receipt/readback.
- Publicly released integration package, production API, auto-approval, target-side block proof or cross-system delegation closure.

**Customer-facing offer** is integration design and scoped pilot customization, not a released universal enforcement product. See [Customizable Integration Positioning and Operations Gaps](../../E5.2-CUSTOM-INTEGRATION-POSITIONING-AND-OPERATIONS-GAP-REGISTER-2026-10-18.md) and [original E5.2 implementation plan](../../E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md).
