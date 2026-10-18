# HAIEC — UX-P08 independent acceptance; P08.1 MCP control-result/replay system binding; P09 My Work handoff

**Reviewer date:** 2026-10-18 (America/Chicago). **Disposition:** UX-P08 UI/proof presentation **DEPLOYED_VERIFIED / ACCEPTED**; new contextual MCP investigation flow **CONDITIONALLY ACCEPTED**, with one P1 prompt-scope error and one P1 server tool replay-binding error discovered by independent source audit. **No HAIEC application source changed in this review.** P08.1 is a tightly bounded required closure before claiming exact control-to-system proof from the MCP journey. P09 remains the next dedicated *page* UX after this correction.

## 1. Independent PR/production/CI verification

- [PR #2254](https://github.com/subodhkc/haiec-website/pull/2254) merged HAIEC `Main` exact SHA **`99465e8536cd6d8477e643cd97a59593d38e3f65`**. At review, branch Main matched.
- Independently resolved Vercel **`dpl_3FyW8DyXYAfshpQTwJHUaNqMF7d2`** ([production inspector](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/3FyW8DyXYAfshpQTwJHUaNqMF7d2)), `READY`, target production, alias `haiec.com` and `www.haiec.com`, same git SHA.
- GitHub [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39107343935) and [Consolidated CI/CD Pipeline](https://github.com/subodhkc/haiec-website/actions/runs/39107343955) both `completed/success` on exact SHA.
- PR's five changed files: `components/ai-inventory/ControlCatalogPanel.tsx`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `components/ai-inventory/SystemWorkspace.tsx`, `tests/unit/uxp08-controls-operations.test.ts`, `tests/unit/sprint10-controls-accountability.test.ts`. No newly added endpoint, store, evaluation/approval writer, or detector.

## 2. Features independently source-confirmed: keep

- Existing system Controls page and `ControlCatalogPanel` select + `?control=` remain. `ControlAccountabilitySummary` comes before technical proof and operational context; its establishment string is derived from persistently projected maturity, visibility, native/legacy result row counts and replay status as *separate facts*, not a universal score.
- Existing `ControlProofJourney` details are grouped into Coverage/Evidence → Policy/TestSpec/Approval → Native versus LogSense legacy historical results → independent replay; existing response workflow remains its own owner.
- `OperationsBlock` still labels `Operations & protection — system context` with `Per-control target binding: NOT_ESTABLISHED`. No current target effect is asserted for the selected catalog control.
- Optional `control_proof` path in `InvestigateWithAiAgent`, threaded from exact SystemWorkspace `systemId` and selected `entry.id`; copy-only, unsafe/unbound ID returns no affordance, and repeated inputs use React `useId`. No app-triggered remote MCP client call.
- Devin **reported** 14/14 new SSR tests, affected regression passing, TypeScript/changed-file lint clean and 1440/1280/768/390 browser smoke for selected A02 in one dev org. The independent reviewer verified merged source and prod/CI, **did not rerun** browser/unit fixtures. Catalog-only and replay-VERIFIED live, viewer/multi-org, real MCP key client, and complete keyboard traversal remain **NOT_RUN**.

## 3. New P1 issue: P08-G01 copied MCP control-result prompt omits exact system binding

**Source:** `components/ai-inventory/InvestigateWithAiAgent.tsx` `case 'control_proof'`:
> `haiec_control_assurance` with both `aiSystemId` and `controlId`; **then `haiec_control_results` 'with the same exact controlId'**.

The actual `lib/mcp/server.ts` `haiec_control_results` schema accepts **optional `aiSystemId`**, `controlId` and other filters; omitting system intentionally queries the key's entire authorized organization. Thus an AI agent faithfully following P08's copied prompt might summarize native/legacy results for **other AI systems sharing the same cataloged control ID** as evidence for the selected one. The new P08 test only asserts prompt contains control ID and tool name; it does not assert `aiSystemId` appears as a *parameter of `haiec_control_results`*. This is a reproducible instruction/argument-scope defect **by contract**; no actual leaked/executed result was demonstrated. **Tenant boundary remains enforced**.

**Fix:** Make the control-specific prompt explicitly require exact `aiSystemId=X, controlId=Y` for **BOTH** `haiec_control_assurance` and `haiec_control_results`, and `aiSystemId=X, resultId=...` for replay. Tell agent to check every returned `aiSystemId/controlId` matches selected system and control before attribution; any mismatched result = NOT APPLICABLE, never claim same-system. Ensure links and scope constraints are provenance-bound. Add contract tests that inspect the generated prompt's *per-tool argument requirement*, not just presence of ID somewhere in string. **Do not change `haiec_control_results` globally to require `aiSystemId`**: intentional organization-wide result query must remain available to qualified readers.

## 4. New P1 issue: P08-G02 preexisting replay MCP API accepts a foreign-system result within same org

**Source verified across:** `lib/mcp/server.ts::haiec_control_replay`, `lib/control-test/ucp/replay.ts::replayNativeResult`, `lib/control-test/ucp/native-result.ts::createNativeResultStore`.

- MCP tool requires `aiSystemId` and `resultId`, and calls `verifyAiSystemOwnership(ctx.organizationId, aiSystemId)`. This validates only that the *requested system* exists in the key's org.
- Next calls `replayNativeResult({organizationId:ctx.organizationId,resultId})`, **dropping the requested `aiSystemId`**.
- Replay core calls `deps.resultStore.get(organizationId,resultId)`, and the production native store query scopes by **`id`+ `organizationId`**, *not `aiSystemId`*. It then verifies integrity against the same result's frozen bundle. A valid result from System B in Organization O can therefore yield `VERIFIED` for a tool invocation naming System A in the same O, provided the caller knows the resultId and has `report:read`. This is **identity/provenance misattribution within one org**, **NOT evidence of cross-tenant leakage**; no live negative test yet.
- Native result and replay bundle already have actual persisted `aiSystemId`, so a new engine or schema isn't needed.

**Fix:** Enforce `stored.organizationId===ctx.organizationId && stored.aiSystemId===requestedAiSystemId` **at the MCP server boundary before replay**, using the canonical native result store/read owner; or reuse a verified exact-result-and-system bound helper. Return a bounded NOT_FOUND/NOT_RUN response for nonmatching result without exposing foreign-system metadata; preserve existing foreign-tenant denial. Then use the same exact record in `replayNativeResult` via reused result store. Keep replay core's existing organization-based historical API signature if other consumers require it; no broad refactor of UCP. Add one same-org System-A/System-B negative test (valid System-B result passed under System-A returns no replay verdict), valid positive, foreign tenant, unknown ID, and prompt argument test. Ensure no resultId/other result details returned for mismatches beyond the caller-supplied ID.
- If testing reveals the same misbinding on another public replay/read route, document that distinct route as a separate narrow follow-up; do not invent broader compromise without reproduction.

**Priority:** P1 gate for claiming exact `aiSystemId`-bound MCP Control Proof. The rest of P08's UI stays deployed and accepted. Stop after one small P08.1 correction and production verification.

## 5. P2 observations, do not derail

- `ControlAccountabilitySummary` for no proof says `Cataloged profile only — not implemented, not evaluated`; valid only as scoped to the *Control Visibility slice*, not a global claim the customer's external control isn't deployed/assessed. The surrounding `Catalog maturity` and `SnapshotBlock` qualify this; if copy is touched later, prefer `not implemented/evaluated in HAIEC Control Visibility for this profile`.
- Scanned native/legacy result counts are scans/rows, **not results that passed**; label currently says rows scanned. Preserve.
- `ControlCatalogPanel` keeps local selected/filter state; a system switch that reuses the component may need a selected-control-context reset, but no reproduced cross-system UI leak was found. Track as future lifecycle regression test only.
- P08 summary/proof UI is not a live authenticated Control Test, PEP target or human decision; no certificate/12-level badge may be added.

## 6. Narrow P08.1 execution scope

1. Refresh `Main` and Common Repo; check PR/file ownership.
2. Fix the copied `control_proof` prompt to specify both system and control in **every** relevant read tool and the selected system for replay; keep `report:read`, other contexts and no-write terms.
3. Add exact `aiSystemId` ↔ native `uctr-*` result binding before returning replay. Preserve org-scoped replay for legitimate same-system results; a foreign-system result returns a non-disclosing no-result.
4. Focused tests: two systems one org, positive match, cross-org result, missing id, prompt contract, TypeScript, changed-file lint, affected control MCP/replay regression cone. No full engine redesign.
5. One PR merge HAIEC `Main`; independently verify exact Vercel production SHA and primary CI; update P08.1 Common Repo record, roadmap and handoff. Stop. **P09 follows in a separate session**. Do not modify P09, D01–D03, P07 backlog, E62 graph engine or manufacturer demo.

## 7. UX-P09 My Work / Human Governance actual owner map and plan (separate after P08.1)

Primary existing `/dashboard/my-work`: `app/dashboard/my-work/page.tsx` → `components/my-work/MyWorkInbox.tsx` (four current queues) → `GET /api/inventory/my-work` → `lib/ai-inventory/my-work.ts::assembleMyWorkInbox`. The canonical model retains **every latest-version `requestKey`**, not one per system; assigned-to-me pending, unassigned pending, viewer's own requests, last-25 resolved. No mock persona/role switch. Scope packets from real server-selected entitlement: owner/admin, requester of the record, or assigned reviewer; others get `detailRestricted` summary. `readDegraded` and `effectiveReliability='CONTEXT_UNAVAILABLE'` already withhold a confident current-approval tag when staleness cannot be established; effective context bounded to 50 systems. **Preserve**.

`components/governance/DecisionReviewDialog.tsx` owns exact allowed/prohibited operations, conditions, approval choices, rationale and expectedRequestDigest CAS; 409 conflict must force re-review. `components/governance/DeploymentDecisionActions.tsx::AssignReviewerControl` owns eligible reviewer assignment (admin/owner only, SoD server), `ReviewerDecisionActions` opens a fresh server packet. Assignment/decision writes remain separate server routes, not MCP actions. No instant approval via copied ChatGPT prompt or impersonated persona.

### Source-level P09 UX opportunity

- My Work currently renders **four stacked queues with many row-level details**, with review dialog only on click. For populated enterprise queues, a compact master-detail decision packet on desktop (mobile return-to-list) can reduce scanning cost, **if** server-controlled visibility and current CAS semantics preserved. Do not reduce all current queues to a global list without loss.
- Source shows `load()` is an unsequenced `fetchWithOrg('/api/inventory/my-work')` called on mount and after actions, with no out-of-order response guard and no immediate old inbox invalidation if organization context changes. A P09 evaluation of stale-response and org-switch behavior is warranted; don't claim a reproduced leak. `rowToPacket(r)` on 'Review request' uses the existing inbox row (not a fresh packet fetch); CAS protects changed digest at mutation, but for user trust prefer fresh authorized per-decision packet before rendering review where existing owner/route supports it. Preserve server's digest/assignment/SoD checks and do not send extra writes to refresh.
- When `readDegraded`, the screen displays a warning and still shows `Nothing is assigned` and `No unassigned pending` if arrays are empty. Keep a warning adjacent to these empties or label them **Unknown/partial results**; never imply empty queue is established when backing read failed.
- The new action-topology review's future graph-inspector / deterministic Mermaid proposal is **P13**; not My Work. P09 may link exact system, evaluation/report or control proof for authorized reviewers, but does not fabricate proof of deployed effects.
- Inspect whether the role can truly see packet detail, exact request digest, decision expiry, allowed/prohibited scopes and context freshness. Render one next authorized action (review, assign, await, view receipt), only from actual server rights; approvals are human/SoD gated.
- MCP parallel: assistants can **explain** read-only governance context with authorized `haiec_get_governance`, `haiec_get_agent_audit`, exact reports and source limits when separately connected through a scoped key. **No verified MCP human-approval/assign tool; do not add one.** Dashboard cookie does not authenticate MCP. If user asks an agent about pending actions, explain what awaits a human vs IDE-preparable evidence vs unqualified source; do not copy a packet's restricted rationale into an AI prompt.

### P09 acceptance

- Role/visibility: requestor not own reviewer, owner/admin can assign eligible human, assigned reviewer alone decides; audit/other non-entitled summary-only. 2 requests for one system stay distinct by requestKey; duplicate versions historical and not accidentally actionable.
- Effective state: pending/approved-scoped/conditional/rejected/revoked/expired/superseded/stale policy/stale evaluation, `CONTEXT_UNAVAILABLE` never 'approved current', draft-vs-approved policy semantics, policy approval ≠ deployment decision.
- Review: exact request digest + allowed/prohibited + conditions + expiry, CAS 409 re-review, stale packet, concurrent assignment conflicts, no optimistic approved badge before server confirmation.
- Degraded and context switched: errors vs empty, out-of-order fetch A/B, org identity switch, authorized viewer/readonly, 25 resolved cap disclosed if relevant, 50-system context cap truthful.
- Browser at 1440/390, optionally 768/1280, mobile selected packet/back, keyboard/focus trap only when modal exists, screen reader.
- One P09 PR after P08.1; merge Main and verify exact-SHA production; Common Repo sync then P10 Monitoring separately.

## Product decision

**P08 customer-facing UI is accepted. The new MCP route cannot yet claim exact per-system result binding safely because a copied prompt omits the system filter and the replay tool ignores supplied system identity.** One minimal P08.1 parity correction is justified. Then continue P09, retaining Understand → Assure → Govern & Operate and six jobs without new engines, control scores, automation or human-approval shortcuts. Real external MCP/KestrelVoice narrated operational acceptance remains separately NOT_RUN.
