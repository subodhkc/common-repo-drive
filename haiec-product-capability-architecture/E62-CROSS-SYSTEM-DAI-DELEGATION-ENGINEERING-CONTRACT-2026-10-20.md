# Cross-System Delegated Action Integrity — Engineering Contract & Acceptance (2026-10-20)

Status: `PROPOSED` — the next gated engineering build. No implementation claims.
Recorded per E6.2 §8. This is a roadmap requirement with a source-grounded
contract, deliberately NOT folded into a presentation sprint.

## Objective

Deterministically establish:

```
AI System A / Agent A → issuer-qualified delegation → AI System B / Agent B
→ tool/API → consequential target → qualified effect
```

using the existing same-system delegation witness, DAI dimensions, qualified
cross-scan composition, source identity, and target-effect owners.

## Deterministic requirements

All of the following must be established with qualified evidence before any
cross-system delegated-effect link may be presented as proven:

- Organization identity and BOTH AI System identities (tenant-bound).
- Provider-issued agent/principal identities (not display names).
- Delegation issuer and grant provenance.
- Approved root authority (Operating Envelope / policy digest).
- Exact child scope and its policy digest — no scope widening.
- Parent/child invocation and handoff IDs correlated across both systems.
- Operation and resource equivalence between grant and observed action.
- Temporal validity and revocation state at the time of the action.
- All applicable DAI dimensions (9) qualified per-hop.
- Qualified runtime correlation (not display-name or timestamp heuristics).
- Authenticated target acknowledgment.
- Independent target-state readback (independent of the acting agent).

## Required negative cases

The implementation must fail closed on each of:

- Cross-tenant identifiers presented as same-org delegation.
- Same-name agents in different systems/tenants.
- Wrong policy issuer for the claimed delegation.
- Forged or replayed handoff identifiers.
- Expired or revoked delegation.
- Scope widening between grant and observed operation.
- Wrong environment (staging delegation presented against production effect).
- Spoofed trace/correlation identifiers.
- Unverified target effects presented as verified.

## Constraints

- Existing same-system delegation-witness restrictions are NOT relaxed.
- Qualified links are presented as distinct from candidate/unverified links.
- No organization-wide proven delegation graph may be displayed before the
  deterministic cross-system joins exist. A per-agent Delegated Action Chain
  drawer/tab (root authority → each hop → granted vs requested scope →
  observed operation → target identity → verified vs unverified effect →
  source evidence + limitations) is the planned UI.
- Reuse canonical owners: source identity, DAI witness, operating policy,
  target-effect readback. Do NOT create a new authorization or identity
  engine inside this build.

## Engineering dependencies (next blockers)

1. Provider-issued agent identity attestation (not display name) — both sides.
2. Issuer-qualified delegation grant with digest binding to parent authority.
3. Cross-scan identity join: parent invocation ID ↔ child handoff ID with
   tenant binding.
4. Independent target-state readback for the consequential effect.
5. Scope-narrowing verifier (granted ⊇ requested; observed ⊆ granted).

Until all five exist with qualified evidence, cross-system delegated effects
remain `UNVERIFIED` and UI must not render them as proven.
