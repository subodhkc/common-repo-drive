# HAIEC UX-P08 / UX-P09 — DeepSeek Controls & Operations + My Work Review, Additive Adoption and Canonical Reference Archive

**Review date:** 2026-10-17. **Status:** Design curation + review **only**. No HAIEC app changes; **UX-P03 AI Estate is already in progress with Devin**. DeepSeek's static HTML is **non-authoritative, synthetic and intentionally excluded from application production routes**.  
**Code compared:** HAIEC Main `80d3e893680c9df6afd3c628779315d5c25a8f06`, especially `components/ai-inventory/ControlCatalogPanel.tsx`, `lib/control-visibility/control-proof.ts`, `lib/control-visibility/types.ts`, `components/my-work/MyWorkInbox.tsx`, `components/governance/DecisionReviewDialog.tsx`, `lib/ai-inventory/my-work.ts`, `lib/assurance/deployment-decision.ts`, `lib/mcp/server.ts`, `lib/mcp/capability-guide.ts` and `lib/ai-inventory/goal-availability.ts`.  
**Read with:** [Page-by-page UX program](HAIEC-PAGE-BY-PAGE-UX-DESIGN-AND-VALIDATION-PROGRAM-2026-10-17.md), [Evaluate reference and MCP flow](UX-P07-DEEPSEEK-STANDALONE-EVALUATE-MOCK-REVIEW-AND-UI-MCP-ASSURANCE-FLOW-ALIGNMENT-2026-10-17.md), [E6 E2 control/evidence design](E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md), and [E6.2 implementation record](E62-OPERATIONAL-UX-CONTROLS-EVIDENCE-CONVERGENCE-IMPLEMENTATION-RECORD-2026-10-20.md).

## 0. Decision — preserve originals, but do NOT treat prototypes as implementation truth

The user correctly noted that earlier HTML shared in ChatGPT **was not originally in the repositories**, so Devin could not inspect layout, states or interactions directly. The written reviews captured the decisions but **not all visual/layout value**. Therefore archive **only five current useful full-fidelity HTML reference files** under `haiec-product-capability-architecture/design-references/deepseek/`, each as GitHub source view; Devin can check out the common repo and open locally. This is a curated *reference archive*, NOT a migration of DeepSeek design into HAIEC. Exclude earlier partial/superseded atlas variants. Preserve source **unchanged**, including known defects, with explicit reject/adapt decision notes below.

| Source role | File (in this repo) | Original upload | SHA256 of original upload (UTF-8 bytes) |
|---|---|---|---|
| Latest complete cross-page atlas, navigation/layout inspiration | [Unified UX Atlas](design-references/deepseek/2026-10-17-unified-ux-atlas-synthetic.html) | Pasted text(20261017-111712).txt | `6646b4a0ef25d7562c2e2e8f890bebc7f2f8430c3c6956e93f0f04bc03defc43` |
| System Assurance Case P04 | [Assurance Case](design-references/deepseek/2026-10-17-assurance-case-synthetic.html) | Pasted text(20261017-112139).txt | `b25a4a80e60c7c062a4881cd5368400a53dad03a52410b1f9387c8bd4dfa87b7` |
| Evaluation & Detection P07 | [Evaluate](design-references/deepseek/2026-10-17-evaluate-synthetic.html) | Pasted text(20261017-113416).txt | `48e4beaf52df8fe18fcf6c6de5613623891abbbb41d25bfbf9f93862e324388f` |
| Controls & Operations P08 **NEW** | [Controls & Operations](design-references/deepseek/2026-10-17-controls-operations-synthetic.html) | Pasted text(20261017-114603).txt | `58e257caf160669e14cac452cbb71bb21ce53fb9a459dc382eaaf39b1eb542fe` |
| My Work / Human Governance P09 **NEW** | [My Work](design-references/deepseek/2026-10-17-my-work-governance-synthetic.html) | Pasted text (2)(2).txt | `03876c935f497b2680dcc666de8c9143ae601c3a792d215be41b2613b0d2e2b3` |

**Do not import to HAIEC production /public**, and never use demo fixture actor names, digests, evidence refs or verdicts as customer facts. DO NOT create screenshots-only handoffs when interactivity and responsive layout need inspection; Devin should use the source alongside this reviewed decision matrix. Future design uploads get added to this archive only if unique, current and useful, not every generated revision. If a mock no longer helps, retain the extracted decision record and omit the redundant raw mock.

**Product invariants:** Understand → Assure → Govern & Operate; independent jobs Discover/Evaluate/Authorize/Monitor/Protect/Verify; five evidence planes; DAI, Agent Audit, Control Proof, system workspace, governance and telemetry all remain existing canonical products. DeepSeek enhancements are strictly **additive**. Never duplicate a control-evaluation engine, visibility registry, role policy service, MCP tool registry, or audit/receipt issuer. Do not put retired internal numeric engine labels in new UI.

## 1. UX-P08 Controls & Operations: what is worth adopting

The prototype has **four synthetic scenarios**: A03 "fully executed", R03 "mixed", A04 "awaiting approval" and S02 "finding detected". Each shows 12 facets: (1) applicability/catalog, (2) configured versioned policy, (3) human policy approval, (4) human deployment decision, (5) target integration, (6) source monitoring, (7) threshold/guard/alert, (8) kill-switch, (9) actual target enforcement, (10) independently verified target effect, (11) TestSpec + execution/replay, (12) change/revalidation.

**Adopt only as a navigation / evidence checklist, never a 12/12 risk score or universal obligation**:

| Pattern | Decision / where it lands | Proof caveat |
|---|---|---|
| 12-facet **operational compass** and condensed control summary | **ADAPT** within existing system `Controls` / `ControlCatalogPanel` as collapsible grouped operational lenses, not another huge dashboard / new mandatory tabs | Facets are conditional; observational controls legitimately have N/A target enforcement. Missing join stays UNRESOLVED. |
| Each facet shows established state, source ID, actor, time basis, limitation, next link | **ADOPT** the explanatory *structure*; reuse Control Proof and operational context, no client-derived qualification | System-wide policy/telemetry/kill status cannot automatically be attributed to a particular control |
| Scenario contrast (qualified, target unwired, pending human approval, finding/retest) | **ADOPT for synthetic demos only** if fixture provenance and state labels remain visible. In real UI actual controls come from tenant's canonical registry | Don't claim any of these demo codes/target effects are proven in production |
| Independent policy approval vs human deployment decision | **STRONGLY ADOPT/RETAIN** as separate lanes; existing E6.2 decision model already distinguishes them | Approval ≠ grant, dispatch, mediation or target enforcement |
| Target NOT_WIRED vs configured source and monitoring STALE | **ADOPT** a first-class reason/action when canonical source proves it; useful to convey why "Protect" can't enforce | No automatic "no alerts ever fire" guarantee from stale collector; absence of signal is not absence of action |
| TestSpec version/digest → approval → execution → frozen result → replay → remediation/retest | **ADOPT as progressive disclosure** inside existing Control Proof; replay verifies reproducibility, **not current target execution or no finding** | `PENDING_ACTIVATION` reflects exact dependency state, not inferred from generic database migration |
| Incident/response timeline and "delivery ≠ acknowledgment ≠ remediation" | **ADAPT if real events and workflow joins exist**, otherwise show explicit unavailable and retain existing response view | Do not fabricate a seven-step workflow, notification success, or automatic RETEST_VERIFIED state |
| Framework mappings | **RETAIN** as context only, never certification | Mapping is not evidence of control pass or independently validated control effectiveness |

**Operational facets are not the five evidence planes, not DAI dimensions, not Control Catalog profiles, and not an objective numeric maturity score.** The HAIEC truth currently distinguishes catalog metadata, the limited set of actually implemented Control Visibility profiles, Control Proof historical native/legacy results and replay eligibility, and system operational context. Do not create a universal 12-facet-to-control verified join without source/target binding, timestamp and provenance.

### Controls mock: demonstrated defects and rejected assertions

- **Browser-confirmed fatal scenario switching:** scenario state keys are `executed / mixed / awaiting / failed` but tabs call `setScenario('a03' / 'r03' / 'a04' / 's02')`; `SCENARIOS[state.scenario]` becomes undefined on click; JS throws reading `facets`. No tab is active in initial render. Initial page renders; click does not.
- **Summary counts are fabricated/misaligned:** actual facet tones vs summary numbers: R03 **3 green / 8 amber / 1 red** vs summary "4 qualified / 7 attention / 1 blocked"; A04 **1 green / 2 amber / 9 neutral** vs "2 qualified / 4 attention / 6 blocked"; S02 **9 green / 2 amber / 1 red** vs "8 qualified / 2 attention / 2 blocked". A03 has 12 green but that is still a synthetic claim. N/A must never be automatically red/blocked.
- **Browser-confirmed horizontal overflow at 390px:** 12-column compass compressed into three small mobile columns with clipped labels; a 390px viewport overflows. Responsive layout must keep complete text accessible; consider grouped accordion/anchor index rather than 12 tiny chips on mobile.
- **Overclaim in S02:** "independent query log confirms no data left tenant" is broader than a matching query-log observation; absence-of-exfiltration requires actual boundary evidence and scope. PEP installed/ACK alone ≠ native enforced effect.
- **A03's fully qualified target/Stripe readback, KMS approvals, receipt, actor/digest and dry-run kill switch are invented fixtures.** A dry-run is NOT evidence of actual emergency dispatch or enforcement. Never copy these into product demo as verified.
- **R03 "PENDING_ACTIVATION due to durable-store migration"** must only appear when that exact canonical dependency is detected; do not hardcode a migration blocker or imply the whole system is blocked.
- **A04 observational control** appropriately makes PEP, kill switch, guard and readback N/A; don't count those as failure, and do not force install work on observational-only controls.
- Repeated identical control IDs and family labels are *demo illustrations only*; canonical Control Catalog IDs/profiles, implemented set and exact applicability win.

## 2. UX-P09 My Work: what is worth adopting

This mock shows nine request fixtures across reviewer, requester, admin and auditor roles, with a **master-detail queue / decision packet** layout and mobile return-to-queue. HAIEC already has a server-guarded E6.1/E6.2 My Work inbox, review dialog, reviewer assignment, SoD/digest/CAS and fail-honest current-state reliability. **Do not rebuild** that foundation.

| Pattern | Decision / where it lands | Proof and security caveat |
|---|---|---|
| Compact inbox + selected **decision packet** visible side by side on desktop | **ADOPT UX pattern** if it reduces clicks without hiding existing queue states; mobile drill-in/back | Display visibility and mutation rights must come from server membership and assignment |
| Role-specific "Assigned to me", "I requested", "Unassigned", "Resolved", "Stale" filters | **ADAPT** existing E6.2 canonical queue buckets and entitlement checks; clear empty states | **Never** use client role-toggle logic or all-org requester packet access |
| Exact proposed **allowed vs prohibited operations**, actor/reviewer + SoD status | **STRONGLY ADOPT** from persisted allowed/prohibited scope, decision request, verified reviewer identity | SoD is server validated, not green because client compares two strings |
| Decision context: policy digest, evaluation ID/as-of, expiration, conditions, evidentiary links | **ADOPT** if returned by authorized canonical read; stale/unreliable must show indeterminate | PENDING state ≠ "current approved". Never substitute latest evaluation for frozen decision basis |
| Conditional approval, rejected, expired, revoked and stale as distinct states | **RETAIN/ADAPT** from actual decision owner; warn when staleness context cannot be read | Active policy change may differ from newer **draft**. Condition satisfaction cannot be inferred from label |
| Preview of deliberate decision with rationale, exact scope, expiry, digest and affirmative consent | **RETAIN existing E6.2 DecisionReviewDialog; improve context only**; real server CAS and re-review on conflict mandatory | Do not copy disabled demo modal or launch approval from MCP |
| Notification delivery vs human acknowledgment, request audit timeline | **ADAPT only if persisted receipts/events exist**; otherwise mark as unknown / not connected | Do not promise automated delivery/escalation/SLA/withdrawal without an authorized owner |
| Auditors read-only, admins assign eligible reviewer | **ADOPT presentation only** of server capabilities; requester never self-approves | Existing My Work is narrower than mock's arbitrary role switcher and all-org peek |

### My Work mock: demonstrated defects and rejected assertions

- **Browser-confirmed filter-state corruption:** in `renderFilters()`, for every chip `state.filter = f.id` is set to count, but then code sets `state.filter = filtersForRole(state.role)` (an **array**). After render, `state.filter` is an array; no chip is selected and subsequent `applyFilter` returns all visible rows, not chosen subset. Initial approver "Assigned to me 1" filter nevertheless shows **9 rows**. This must NOT be ported.
- Prototype role switcher is a fake security model: `setRole('admin')` changes client state and grants all nine fixture requests. In HAIEC, org/session membership, reviewer assignment, SoD and full-scope packet exposure must all be checked server-side and tenant-bound; **no production impersonation toggle**.
- Synthetic `PENDING` requests carry an effectiveState `CURRENT`, which must never be interpreted as current *approval*. The real implementation has a distinct `PENDING` effective status and `CONTEXT_UNAVAILABLE` reliability for unverified stale context.
- A proposed `v9-draft` is described as making an earlier approval stale; a draft does not automatically supersede an **approved** policy. Only canonical version/digest status and explicit authorizing semantics can determine staleness.
- `APPROVED_CONDITIONAL` is shown `CURRENT` while its own conditions remain unmet. Do not present conditional decisions as fully effective, claim automatic invalidation, or authorize dispatch unless the canonical owner explicitly confirms conditions and scope.
- The mock tags a REJECTED request as `REVOKED`, conflating a rejection (no approval issued) with revocation (an existing approval withdrawn). Existing status semantics win.
- It shows a record `EXPIRED` with a stated 48-hour end but its rationale quotes a different expiry instant; rely on persisted `expiresAt` and server time rather than cosmetic dates.
- It mixes policy approval and deployment decisions in one array. HAIEC's existing My Work deployment-decision model is scoped; **do not silently claim it already provides a generic policy-approval queue** or create a second authorization engine for visual parity.
- Demo preview actions for escalating, withdrawing, emailing, approval or assigning do not persist anything. Do not wire fake success to production.
- Mobile queue-detail structure is valuable; button focus/trap/back-navigation must be tested with real role/permission edges.

## 3. MCP parity — preserve, do not expand privileges

**UI, REST and MCP share product truth but have different authorization transports**: UI is session/org/role bound. HAIEC MCP is API-key organization bound via `POST /api/mcp` and per-tool scopes, **not** implicit human login, reviewer status, or OAuth for this endpoint.

| Customer job | Current source of truth / UI | MCP path and safe behavior |
|---|---|---|
| Inspect control catalog/proof, TestSpec/approval/historical native results/replay | `ControlCatalogPanel` + `lib/control-visibility/control-proof.ts`; control proof is read-only and evidence-bound | `haiec_capability_guide`(check_controls) → `haiec_control_assurance` → `haiec_control_results` / `haiec_control_replay`; requires report:read; **replay is historical reproducibility, not a real new test** |
| Understand operational context and evidence readiness | Existing E6.2 control operations context, `GoalAvailabilityPanel`; policy/telemetry source owner and monitoring read models | `haiec_preflight`, `haiec_get_telemetry_status`, `haiec_get_operating_envelope`, `haiec_get_agent_audit`, subject to exact key scopes; **never invent a per-control join** |
| Request and decide scoped deployment authorization | `GET /api/inventory/my-work`, reviewer assignment routes, `DecisionReviewDialog` and server-side CAS/SoD; no client-auth trust | **No MCP human-approval/assign tool verified** on current canonical surface. The guide can explain a workflow and point to authorized dashboard destination, but **must not impersonate a human or issue a decision through a new generic write tool** |
| Prove control effect, enforcement, monitoring and response | Source/target/control result qualified evidence, target mediation receipts and actual readbacks if available | Read-only factual inspection through existing control/evaluation/telemetry tools. **MCP transport does not magically make a guard install, dry-run kill or target readback real.** |
| Re-evaluate after changed evidence | Canonical Assurance run creation and frozen history | `haiec_run_assurance` only with `scan:create`, exact system, qualified source, idempotency key and consent where applicable; then exact report and receipt. **No automation from opening Controls/My Work** |

**Non-negotiables:** `POLICY_APPROVED != HUMAN_DEPLOYMENT_APPROVAL != EFFECTIVE_GRANTED != NATIVE_PEP_INSTALLED != GUARD_DECISION != DISPATCH != TARGET_EFFECT_VERIFIED`. `ALERT_DELIVERED != ALERT_ACKNOWLEDGED != REMEDIATED != RETEST_VERIFIED`. `CATALOGED != IMPLEMENTED != EVALUATED != REPLAY_VERIFIED`. Observation-only control N/A is not failed. Source fail/staleness is evidence limitation, not established absence. Preserve `MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD` and required read/write scopes. Independent human decision stays in dashboard auth, not in MCP agent inference.

## 4. UX session allocation, no feature sprawl

- **UX-P03 ACTIVE (AI Estate): do not edit or create competing PRs while Devin is already implementing it.**
- **UX-P04 Assurance Case** and **UX-P05 DAI** remain distinct. Only link contextual proof and actions from Controls/My Work.
- **UX-P07 Evaluate** remains owner of analyzer participation and frozen Evaluation, not Controls P08.
- **UX-P08 Controls** will review existing complete ControlCatalogPanel/Control Proof, operational context from E6.2 and current result/replay before making a **preservation ledger**; implement only the strongest collapsible operational-lifecycle facets and source/role-bound drill-throughs. No universal score, new schema, fake native PEP, or forced 12-step checklist.
- **UX-P09 My Work** will review E6.2 `MyWorkInbox`, review modal, assignment, read reliability, scoped org visibility and policy/evaluation context; adapt master-detail queue, focus states and scope comparison only where supported. No simulated role switching, invented notification pipeline, guessed effective state or broad MCP write access.
- **P10 Monitoring, P11 Receipts, P12 Provider Usage, P13 shell** remain separately scoped.

**Validation acceptance for later P08/P09**: targeted existing-source unit tests, real org/role/tenant authenticated browser smoke, 1440/1280/768/390 viewport check, keyboard focus/back navigation and read-degraded path, negative CAS/reviewer/SoD cases. Preserve existing technical view, navigation, scan/result/report paths and relevant developer/MCP docs. Produce one scoped PR per page session (not a single multi-page redesign), merge to HAIEC Main only after completion and verify automated Vercel deployment; update Common Repo with actual implementation record then. **Nothing in this review authorizes current app implementation or changes to Devin's running prompt.**

## 5. Bottom line for Devin

**Study the five archived originals for layout and interaction ideas. Then follow the reviewed decision records, existing HAIEC app code and canonical API/MCP contracts as the source of truth.** Copying the prototype source literally would introduce real UX bugs and false evidence. The already extracted design decisions are enough to scope tasks, **but originals are worth archiving** for full visual/reference fidelity, especially the two new interactive Controls and My Work examples. One page owner at a time, no new engines, no regression and no broad feature sprawl.


## 6. Layer-by-layer operational journey and narrated evidence capture

**Scope:** A future demonstration/acceptance script only. This adds **no feature**, permission, UI implementation, fixture or deployment now; the P03 workstream retains ownership of its active changes. Use this for the user's operations-first narrated and edited recording deliverable and, later, external KestrelVoice-through-HAIEC MCP acceptance. Until those tests actually run, mark external tenant proof as **NOT_TESTED**.

| Step / layer in recording | Operator sees in HAIEC UI | Companion IDE/MCP observation, if permitted | What the narration must NOT infer |
|---|---|---|---|
| 1. Identify & qualify | Exact organization + AI System, source binder, qualification/freshness, selected evidence basis | `haiec_capability_guide` → `haiec_preflight`; source/read checks with caller's actual scopes | Registered/connected ≠ qualified/observed |
| 2. Evaluate | Start canonical assurance only after eligible input/consent; record run, frozen evaluation ID/time, participated sources/analyzers, unknowns | `haiec_run_assurance` (explicit write scope/idempotency) → `haiec_get_run` → `haiec_get_summary` / Agent Audit | Evaluation disposition ≠ human authorization or universal test completion |
| 3. Inspect control | Existing Controls / Control Proof: applicability, versioned policy, binding, source monitoring, test and replay status, PEP/target effect **only when specifically qualified** | `haiec_control_assurance`, `haiec_control_results` / `haiec_control_replay`, authorized telemetry read | Control cataloged/configured/replayed ≠ installed, enforced, fresh retest or independently verified target effect |
| 4. Human decision | My Work assignment, exact request digest, allowed/prohibited operations, reviewer identity/SoD, scope/conditions/expiry; authorized human confirms via server CAS | MCP may describe and link the dashboard; **no machine/human-impersonating approval tool** | Request approval ≠ policy approval, effective grant, dispatch, or execution |
| 5. Operate & observe | Separately show mediation/guard state, actual dispatch/target readback if integrated, monitoring source as-of, incident/ack/remediation status, and unknown/not-wired paths | Read current approved scope and qualified telemetry via existing scoped tools; no assumed per-control binding | Installed PEP ≠ active enforcement; notification delivery ≠ acknowledgment; no alert ≠ no incident |
| 6. Verify & close | Compare exact frozen evaluations where comparable; show source-specific retest, remediation limitations, canonical report/receipt and public verification boundary | `haiec_list_evaluations` → `haiec_get_consequence_delta` (when eligible) → exact report/receipt reads | Historical replay ≠ present target proof; new receipt cannot be invented from a run; resolved ≠ retested without fresh qualified result |

**Capture rules:** frame one step per operational layer; use actual system/evaluation/request/source/receipt identifiers or unmistakable `SYNTHETIC DEMONSTRATION` overlays; narrate *who authorized, what was allowed, what actually executed, what was independently observed, and what is still unknown*. Record UI and MCP as two views of the **same canonical object** rather than alternating incompatible sample states. Show one approved-scoped, one rejected and one pending review as **synthetic walkthrough cases only** unless real records prove those states. Ensure edited voiceover and captions are non-overlapping and synchronized to visible steps. Keep tenant tokens, personal data and private request payloads out of recording assets and this public repo.

**P08/P09 release gate after P03 completes:** owner prepares a preserve-existing-features ledger; checks authorized org/role/server assignment including requester/auditor visibility, CAS conflict, expired/revoked/conditional states, stale/failed reads and observational N/A; verifies 1440/1280/768/390px and keyboard/mobile flow. Validate actual UI/API/MCP output against the same source identifiers where those transports offer equivalent reads; document *no MCP equivalent* explicitly for human decisions. No regression claims based only on synthetic HTML. A separate future Kestrel external-client recording requires rotated least-privilege credentials, approved test tenant and captured real evidence.
