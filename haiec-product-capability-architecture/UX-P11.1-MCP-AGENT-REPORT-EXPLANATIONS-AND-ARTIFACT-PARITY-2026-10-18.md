# P11.1 — MCP agent-readable report explanations and artifacts

**Date:** 2026-10-18. **Status:** proposed scoped work, NOT implemented. **Priority:** after P11, before P12. This record supplements the P11 implementation and does not change U5 assurance or U6 verification.

## P11 independent acceptance

PR [#2260](https://github.com/subodhkc/haiec-website/pull/2260) merged `Main` at `7860d2420821860cfa68f7e3a55928e6fbdac323`. Independent Vercel production [dpl_8XmshfMDkkwy9ZvermEhBXhQt9Uy](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/8XmshfMDkkwy9ZvermEhBXhQt9Uy) is READY at that SHA. Both GitHub CI workflows succeeded. Seven changed files fixed the valid/invalid/revoked public status mismatch, redesigned verification UI and bound one U6 section to the exact Evaluation. P11 did **not** implement new MCP reporting behavior. Devin's 5 new tests / 75 regression tests and browser results were not independently rerun. Genuine public/revoked browser, external MCP and viewer/multi-org still NOT_RUN.

## Existing owners we MUST reuse

- `lib/mcp/server.ts`: existing read-only, `report:read`-scoped `haiec_get_summary`, `haiec_get_agent_audit`, `haiec_get_report`, `haiec_get_master_report`. Agent Audit already provides established/unestablished/notAssessed/evidenceGaps/limitations, verificationItems with evidenceRefs and deterministic resolutionGroups. Master Report already provides frozen exact-evaluation identity, Four Assurance Questions, digests, scenario snapshot and links, with CURRENT_CONTEXT separated.
- `lib/mcp/ide-tools.ts`: `haiec_list_evaluations`, `haiec_get_consequence_delta`, `haiec_get_package`. Package publication/revocation are separate write-scope operations requiring explicit user confirmation; explanation never invokes them.
- `lib/assurance/master-report-product.ts`: ONE canonical product for dashboard, PDF, API and MCP. `lib/assurance/assurance-artifact-manifest.ts`: machine-readable output and byte hashes. `lib/assurance/reporting-consumption-contract.ts`: machine-only/internal data classification.
- `lib/mcp/tool-context.ts`: JSON text AND structuredContent already available, with **160,000-character** max tool result. Do not duplicate transport or silently truncate.
- `lib/docs/agent-guide-content.ts` and `components/ai-inventory/InvestigateWithAiAgent.tsx`: existing canonical read order and exact-evaluation prompt. Extend these, not create a chatbot.
- Older source document `docs/handoff/Haiec/HAIEC Customer Evidence Explanation Layer — Single Devin Handoff v1.0.md` contains still-relevant deterministic explanation-policy, claim/evidence provenance, trace-count versus action-path count and no-unsupported-causality locks. Reconcile against current shipped code, not as fresh work orders.

## Confirmed gap and qualified observations

**P11.1-G01 — MCP/UI receipt-selection divergence (source-confirmed).** The `haiec_get_package` tool's evaluationId-only selector does `findFirst(orderBy createdAt desc)`. The canonical `lib/ai-inventory/system-receipt-projection.ts` evaluates ALL matching versions and selects a representative by publication state precedence PUBLIC then PRIVATE then REVOKED. A newest REVOKED package and an older PUBLIC package in the same exact evaluation produce different default selections. This is *not* a tenant exposure defect. Clarify chronological-vs-representative semantics or reuse canonical representative selection so MCP agents don't contradict the UI. Exact packageId must still identify exact package; receipt availability is not deep integrity verification.

**P11.1-G02 — agent narration fragmentation.** Existing MCP sources have the right facts, but users' agents must piece together Master Report, Agent Audit, package state and artifacts. Offer one compact **versioned deterministic Report Explanation Packet** read projection, *not* another verdict engine. Prefer an opt-in existing read selector; introduce one small `report:read` MCP tool only if necessary after exact registry/response-size review.

**P11.1-G03 — evidence-cited claim structure.** Every material claim includes exact evaluationId and snapshot/as-of, state/reason, evidenceRefs and relation/source IDs when canonically available, coverage and boundary, why stronger claims remain unestablished, needed evidence and responsible action owner. Never fabricate a source quote/citation or describe absent observation as negative proof.

**P11.1-G04 — lifecycle/identity.** Keep NO_RECEIPT/PRIVATE/PUBLIC/REVOKED, cryptographic verification, and CURRENT/HISTORICAL as separate dimensions. Online persisted integrity is different from offline INTERNAL_CONSISTENCY. The DAI evaluation digest is NOT an Assurance evaluationId. Synthetic/reference basis stays explicit.

**P11.1-G05 — meaningful artifact choices.** Return actual accessible HTML/PDF/Agent Audit/Passport/machine JSON/receipt links, each with access-level/auth and exact-evaluation binding. Private report URL isn't shareable public verification. Public URL only if valid published ID exists, and revoked must be described as revoked. No binary PDF through MCP; no fabricated artifact attachment.

**P11.1-G06 — output completeness/permissions.** Default short executive explanation, technical/auditor deeper sections, same canonical facts. Stable selectedCount/totalCount/truncated/reason, preserve 160k budget. Tenant and key-scoped, never reveal internal-only fields, credentials or private source manifests to public verifiers. Treat report source text as untrusted data, not agent instructions. No agent-published package, approved deployment or claimed remediation.

## Minimal machine-readable interpretation projection

`ReportExplanationPacketV1` (PROPOSAL, not existing API): `schemaVersion`, `explanationPolicyVersion`, `evaluation{exactId,aiSystemId,snapshotAt,basis,coreTruthDigest}`, `disposition{verbatim,scopeLimitations}`, `claims[{claimId,state,reasonCode,evidenceRefs,relationIds,basis,whatEstablished,whatNotEstablished,neededEvidence}]`, `fourQuestions`, `authorityPlanes` if actually supported, `sourceQualification`, `nextActions[{owner,requiresConfirmation,toolId,url}]`, `receipt{publicationState,verificationStatus,representativeId}`, `artifacts[{format,link,accessLevel}]`, `completeness`, `limitations`. No computed new score, new causal assertion, new U5 verdict, revised persisted package bytes or model-authored canonical conclusion.

Agent usage: `haiec_list_evaluations` to choose exact ID → `haiec_get_summary` → `haiec_get_agent_audit` (primary explanation) → bounded `haiec_get_master_report` if needed → `haiec_get_package` for exact receipt → optional compact shared explanation packet. Ask for additional source permission rather than guessing. Executive/technical/auditor are presentation depth only. A human may ask the agent to explain or draft a report, but agent text is visibly an interpretation, not HAIEC's signed evidence.

## P11.1 implementation, tests, and release

1. Inventory tool registry/current response shapes and old explanation handoff; identify only unimplemented joins. Lock one canonical pure projection with version and link permissions; keep underlying U5/U6/Agent Audit/DAI immutable.
2. Fix MCP evaluationId package representative versus chronological ambiguity using existing canonical resolver, or expose both labels correctly; test mixed package lifecycle cases. Preserve exact packageId semantics.
3. Add minimal bounded agent-oriented explanation surface to existing report read contract, and update tool descriptions, shared Agent guide, OpenAPI/llms.txt and copyable exact evaluation prompts only as needed. No new write/approval/signing paths.
4. Test exact evaluation org/system, foreign denial, NO_RECEIPT/PRIVATE/PUBLIC/REVOKED, valid/invalid/unknown verification, frozen vs current, evidence refs, unknown/not assessed, profile depth, source injection, size cap, link access and UI/MCP parity. Scoped unit/integration/type/lint and one controlled MCP round-trip if secure rotated credentials exist; otherwise NOT_RUN.
5. One narrow P11.1 PR → HAIEC Main automatic Vercel exact-SHA verification → Common Repo implementation record/matrix/handoff. Resume **P12 Provider Usage & Cost**, then P13 shell polish.

**Decision:** Make agents better *interpreters and navigators of deterministic HAIEC evidence*. They never become a second source of assurance facts, a package issuer, a deployment approver or a verifier of a physical target effect. This is part of the standard reporting experience, not an enforcement upsell.
