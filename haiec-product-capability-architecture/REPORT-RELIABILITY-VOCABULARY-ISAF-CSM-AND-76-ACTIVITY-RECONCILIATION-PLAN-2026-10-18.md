# HAIEC — Reliable Reporting, Controlled Vocabulary, ISAF/CSM Research Alignment and 76-Activity Reconciliation

**Review date:** 2026-10-18. **Scope:** independent planning review with targeted source inspection, research document comparison and an initialized 76-row audit register. **No HAIEC product implementation, receipt mutation, new MCP tool, public pricing or external customer effect claim in this work.**

**Canonical current owners:**
- HAIEC Main \`fc284d5cda14d1cb6e6bd5062bb0b11c75ac216f\` after completed UX-P10; per [independently accepted P10 → P11 report handoff](UX-P10-INDEPENDENT-ACCEPTANCE-AND-P11-REPORT-RECEIPT-PUBLIC-VERIFICATION-DESIGN-HANDOFF-2026-10-18.md).
- [Existing canonical U6 product truth](https://github.com/subodhkc/haiec-website/blob/Main/docs/product/U6-PRODUCT-TRUTH-HANDOFF.md), [public status owner](https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/u6-package-service.ts), [existing public receipt page](https://github.com/subodhkc/haiec-website/blob/Main/app/verify/assurance/%5BpublicVerificationId%5D/page.tsx).
- [76-activity source catalog](POST-ONBOARDING-CONTINUOUS-ASSURANCE-AND-OPERATIONS-CATALOG-2026-10-18.md); [core-vs-optional grouped offering plan](POST-ONBOARDING-CORE-VS-EXTENSIONS-COMMERCIAL-AND-TEMPLATE-PLAN-2026-10-18.md); [existing 87-row capability matrix](HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md) and [matrix completeness charter](MATRIX-COMPLETENESS-AND-RECONCILIATION-PLAN.md).

## I. Audit findings / risk and corrective owner

| Gap | Verified current fact | Priority and scoped action | Do not do |
|---|---|---|---|
| REL-01 Public status enum mismatch | P11 independently documented that public API returns \`INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD\` while public page success branch looks for offline \`INTERNALLY_CONSISTENT\`. Source \`app/verify/assurance/[publicVerificationId]/page.tsx\` confirms the latter comparison. | **P1 / UX-P11:** shared presentation projection over actual public API enum. Test verified, invalid, revoked, private/404, offline, error/unknown. | Do not change U6 verifier engine or repurpose \`INTERNALLY_CONSISTENT\` as online public proof. |
| REL-02 Misleading invalid title | Public page renders \`Decision Receipt Verified\` for all non-revoked statuses, including \`INVALID_PACKAGE\`. | **P1 / UX-P11:** positive heading only after exact valid public evidence; invalid/unknown must never have success styling. | Do not blanket mark integrity, assurance, source authenticity and actual effect as "Verified". |
| REL-03 Status/lifecycle conflation | \`PRIVATE/PUBLIC/REVOKED\`, \`CURRENT/HISTORICAL\`, verification outcome and evaluation \`ALLOW/REVIEW/BLOCK\` answer *different questions*. | **P1/P2 P11:** independent field/label; authorized CURRENT derived from exact latest evaluation association; no old receipt fallback. | No public-current-pose inference or public private-PHI leak. |
| REL-04 Source vs cryptographic proof | SHA/Merkle/public persistence comparison can verify record integrity. An anchored digest is not evidence that all producer facts are independently authentic, all actions were captured or a customer effect occurred. | P11 scope disclosure directly next to primary finding, and persistent report manifest fields for source and qualification. | No certification/production blocking claims from hashes alone. |
| REL-05 Unqualified denominators & snapshots | 76 catalog rows and 87 curated capability entries are not observed/certified product counts. P10 bounded telem reads do not represent total actions. | Report *in-scope, assessed, actionable, not assessed, source missing* denominators; bound window, method, relevant control/rule versions; never infer 0 risk from no signal. | No one estate-wide "100% safe" or universal confidence score. |
| REL-06 Report/UI/MCP copy and lifecycle drift | One canonical U5/U6/producer truth exists, but design copies and historic labels drift; earlier P10 future references already superseded by shipped P10. | Create presentation-only controlled glossary and cross-channel regression; CI source SHA and release ledger; exact generated-at vs refreshed request. | Do not reimplement core evaluator, schema or invent MCP read/write path. |
| REL-07 Operability of optional templates | Fourteen progressive artifacts are *plans/guides or eligible reports*, not fourteen new producers or proof. | Show "Optional operational worksheet" **after** HAIEC result; segregate customer-declared vs source-qualified vs evaluated. | Never position a paid template as necessary to make the engine valid. |
| REL-08 Research/product claim contamination | ISAF v1 paper and v2 manuscript, CSM6 six-function operating framework, LLMVerify mapped control set and HAIEC product have different provenance. | Distinguish research normative model vs implemented engine vs benchmark vs product source and marketing. | No "ISAF-certified", peer-reviewed v2, comprehensive scientific held-out success or 38 CSM6 rules = full six functions. |
| REL-09 False certainty from source defaults | Existing U6 product truth notes \`isaf-logger\` partial standalone, \`llmverify\` partial, some producer IDs registered but not pipeline-connected, and CI exact-run binding gaps. | Source/audited owner per report evidence, unqualified stays unknown, no silent completed claim. | Don't infer from package/docs/registry presence that tests ran or attestations were admitted. |
| REL-10 Reporting dependency on operational handoffs | Target confirmation, event ACK, incident closure, retry idempotency, policy propagation, publication revocation and reader entitlement not uniformly joined. | Layered proof ladder and exact event/action IDs/target readback where relevant; report summaries must say "not established" for unjoined tiers. | A notification is not a response; approved decision is not an applied enforcement action. |
| REL-11 ISAF/CSM vocabulary collision | HAIEC source defines current CSM6 "AI Governance Execution Framework" six functions, while some copy labels "38-rule CSM6 control set" for specialized LLMVerify. Earlier CSM methodology also exists. | Audit copy by referent (CSM management lineage, CSM6 operating functions, LLMVerify specialized mapped controls); document distinct IDs/versions. | Don't silently rename durable F1..F6 IDs, combine unrelated rule denominators or claim all six functions proven by scanner. |

## II. Reporting reliability contract (reuse existing deterministic engine, no second report truth)
All report sections should be derived from one frozen **evaluation identity** and approved U6 package where one exists, with independent **current operational** read models only when explicitly labeled current.

**Minimum report manifest/provenance metadata** (candidate presentation/export fields; do not force DB changes):
- subject: organization (private only), system, environment, scope id/digest, action/target where relevant;
- evaluation: exact evaluation ID, orchestrator run, selected engines, method/profile/rule/control version, frozen evaluatedAt, artifact build/source SHA when available;
- evidence: producer identity/authority, source hash, signed vs recomputed only, admission/qualification, applicable controls, sampling window, freshness/age, conflict and unknown reason;
- result: bounded U5 disposition and reasoning, DAI five independent evidence planes plus **orthogonal** delegation, tested/NOT_ASSESSED/NOT_APPLICABLE, consequences/proof frontier;
- governance: owner, valid human decision/conditions/expiry only if proven, no conflation with assurance result;
- operational effect: native PEP installed policy digest, dispatch and provider ACK, independent target effect *each separate tier*, if requested and actually verified;
- receipt: exact U6 package ID/digest, private/public/revoked, anchored public verification status vs internally consistent offline status, timestamps and synthetic classification;
- distribution: current/historical *authorized* association, audience/redaction, privacy/export permission, schema version; distinguish report generation time from evaluation time and source receipt time.

**Six questions the first viewport should answer, in this order:** (1) What was evaluated? (2) What decision did the engine reach in that scope? (3) What specific evidence and controls support it? (4) What remains unknown or unassessed? (5) What can be verified about the receipt or operation? (6) What next action is useful, if any?

**Reliability gates:**
1. Snapshot-determinism: same frozen evaluation+evidence+schema reproducibly yields same canonical claims, within explicitly documented nondeterministic presentation metadata (generation timestamp or localized display).
2. Exact joins: no cross-tenant, cross-system, cross-run, cross-attempt or historical fallback masquerading as current; verify each ID binding.
3. Four-axis state machine: evaluation disposition, human decision, target enforcement, report-integrity result always independently rendered.
4. Evidence loss/degradation: missing service/timeout/quarantine maps UNKNOWN/READ_UNAVAILABLE; do not map to PASS, no findings, 0 errors or valid integrity.
5. Negative test-first public receipt: invalid/404/revoked/unknown/PRIVATE and synthetic cases precede UI polish.
6. Privacy: public strict allowlist, publication and revocation enforced server side; exports/print/MCP restricted separately; verify role reassignment and org switch.
7. Known as-of: frozen evaluatedAt vs generatedAt vs last qualified source receipt vs verificationCheckedAt vs publishedAt; report historical does not auto become "current posture".
8. Disposition provenance: UI, PDF, HTML, public endpoint, MCP and offline package may use different audiences/projections but cannot contradict canonical evaluation/result/receipt status.
9. Change invalidation: change in code/model/policy/IAM/agent/delegation or revoked receipt creates changed/expired context indication when comparable; never mutate historical evaluation.
10. Auditability: each customer-facing conclusion links to exact source/test/evaluation and excludes unverifiable benchmark/demos; optional extension offer not embedded inside the formal verifier result.

**P11 scoped tests:** genuine PUBLIC anchored-valid, invalid tamper, REVOKED, unpublished/private 404, unknown status, server failure; generated vs evaluated timestamps; latest evaluation NO_RECEIPT, old PUBLIC still historical; synthetic reference; offline INTEGRITY self-consistency not public proof; permissive/denied tenant authorizations; source contradiction, missing artifact and degraded UI; public data exfil negative; PDF/HTML/UI parity; mobile/keyboard/print; optional next-step not a gating form. Reuse current U6 tests and P11 handoff; do not expand P11 into operations service families.

## III. Controlled vocabulary v0.1 — customer label / internal canonical meaning

| Ambiguous expression to avoid | Approved plain-language label | What it *actually* asserts |
|---|---|---|
| "AI is safe/trusted/fully compliant" | "Evaluation result for [specific system and scope]" | evidence-bound U5 assessment, not regulatory certification |
| "Verdict: ALLOW" interpreted as runtime permit | "Assurance disposition: ALLOW (within assessed scope)" | assessed evidence supports bounded claim, not a PEP allow command |
| "Approved" by evaluator | "Human deployment decision: approved / rejected / pending / expired" | only actual scoped human approval owner |
| "Protected" from config | "Target enforcement: not connected / configured / applied / effect-verified" | named customer target PEP evidence, not inferred from Kill Switch code |
| "Verified" without object | "HAIEC record integrity verified" / "Target effect independently verified" / "Evidence source qualified" | one exact verification object only, NEVER generic blanket assertion |
| "Public receipt verified" | "Published receipt integrity verified against HAIEC's stored record" | actual API status \`INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD\` |
| "Internally consistent" | "Offline package internally consistent" | recomputation within package, NOT anchored online record comparison |
| "Not found (revoked?)" | "No published public receipt found for this ID" | private/not published/invalid ID possible; REVOKED has separate status |
| "Continuous protection" | "Observed signals within the stated collection window" | E4 source health and qualifying cadence, independent from target protection |
| "Source active" from old receipt | "Recently received qualifying signals" / "Signal stale" / "Freshness unknown" | P10 E4-qualified \`DELIVERING/STALE/FRESHNESS_UNKNOWN\` |
| "Control coverage 45/45 PASS" | "45 control catalog entries; N applicable, M evaluated, K with demonstrated effectiveness" | catalog vs applicability vs execution, with real denominators |
| "Reachability confirmed" for static potential | "Code-capable path identified; target reachability [assessed state]" | distinguish code capability from actual executable target and observed effects |
| "No alerts = compliant" | "No qualified alerts recorded in [covered window]; source gaps [N]" | absence of observed signals is not safety |
| "Incident resolved" at notification | "Alert delivered" → "Owner acknowledged" → "Remediation tested" → "Closure verified" | exact response and retest proof ladder |
| "High-confidence report" as paid unlock | "Additional evidence could resolve [specific unknown]" | current deterministic result is already correct for supported scope |
| "Signed report" when only SHA | "Hash-bound package" vs "signature verified with trusted signer" | hashes alone do not provide issuer authenticity |
| "ISAF compliant/certified" | "Mapped to selected ISAF checkpoints (applicable/evaluated/unknown)" | HAIEC mapping and actual test evidence, not external certification |
| "ISAF v2 validated" | "ISAF v2 author-issued research: bounded benchmark qualification; held-out validation pending" | different scientific confidence tier from product release |
| "CSM6 scanner validated governance" | "Scanner evidence relevant to CSM6 F3/F4; governance F1/F5 reviewed separately" | governance function vs code rule mapping |
| "CSM6 (38 rules)" unqualified | "LLMVerify specialized 38-rule set (verify exact active rule inventory)" | specific package rule catalog, not six operating functions |
| "Last updated" from user click | "Refresh requested [time]" vs "Snapshot generated [time]" | source of timestamp |
| "Report current" without basis | "Receipt for evaluation [ID], issued [time]; current-association [status]" | historical artifact stays historical |

**Hard coding rule:** display label changes must not rename DB enum/API identifiers, merge distinct verifiers or invalidate existing report consumers. Add glossary references to P11 copy/marketing/MCP guides and tests. Use "AI System" as the object, "operation/action" as consequential effect, "source/producer" as evidence origin, "proof frontier" internally and "What remains unverified" externally. Preserve system's public brand terminology and explain on first use; avoid legacy internal U5/U6 acronyms in customer first view.

## IV. ISAF / CSM mapping with provenance boundaries

**ISAF v1:** Instruction Stack Audit Framework nine abstraction layers, 127-checkpoint protocol; Zenodo preprint DOI [10.5281/zenodo.18080355](https://doi.org/10.5281/zenodo.18080355). Technical source/lineage checklist, not law or automatically executed detector suite. Record per checkpoint: \`APPLICABLE, NOT_APPLICABLE, EVALUATED, NOT_ASSESSED, EVIDENCE_QUALIFIED, DECLARED_ONLY, CONTRADICTED\`, with revision and citation to exact test/evidence; adapt to preexisting persisted state values rather than invent database enums.

**ISAF v2:** Final author-issued "From Instruction to Consequence", dated October 9, 2026, **not peer reviewed**. Personal research source (restricted Drive, do NOT publish its private URL in public Common Repo). Research semantics include authority/delegation and effect, epistemic proof/frontiers, temporality, source qualification, frozen-policy/test identity. Final paper documents DCD-Bench v0.2 bounded reference conformance and hardened v0.3; independent held-out generalization remains unperformed. Selected semantic invariants for report/tests:
- PolicyAuthorized != DelegationComplete; Permission != Delegation.
- Registered != SessionReachable.
- ConfirmationMetadata != EnforcedMediation.
- RuntimeActivity != AppliedEffect.
- MissingEvidence != Alignment and != Violation.
- Source authenticity != digest-only reproducibility.
- Five evidence planes remain FIVE; delegation is an **orthogonal** relation, not a sixth plane.
Do not advertise 127 checkpoints "executed" without per-control evidence. ISAF v2 mapping can add *research context* to the report annex, never replace canonical HAIEC engine, change measured outcomes or imply independent scientific validation.

**CSM and CSM6 naming:** Prior Cognitive System Management (CSM) is methodological lineage. HAIEC's actual source at \`lib/ai-security/csm6-mapping.ts\` and \`app/csm6/metadata.ts\` states **CSM6 AI Governance Execution Framework** with SIX recurring functions (F1 purpose/scope/accountability, F2 systems/data/dependencies, F3 risk/evaluation/monitoring, F4 controlled delivery/change, F5 human oversight/feedback/learning, F6 compliance/evidence/assurance). They are concurrent operating responsibilities, not six sequential engineering gates, and scanner evidence does not fill F1/F5.
**Naming decision needed before public copy edits:** prior brand guidance mentioned retiring "CSM6" as standalone umbrella in favor of CSM lineage, but the current HAIEC website still intentionally uses CSM6. Preserve deployed name and machine IDs while researching canonical brand policy; do not silently retire or rebrand.
Where published enterprise material says "LLMVerify · 38-rule CSM6 controls," clarify whether 38 is an independently verified versioned LLMVerify rulepack, **not** CSM6's six-function governance definition. The rule-set count is a historical marketing statement until active implementation/release is checked.

**Research relationship and narrative:** HAIEC is the deployed deterministic assessment/qualification platform; ISAF provides research provenance and checkpoint semantics; CSM6 supplies human operating functions; NIST AI RMF governs external optional mapping (four Govern/Map/Measure/Manage functions). All are *reference lenses*, not preconditions and not certifications. Domain applicability controls whether a mapping belongs in client report appendix.

## V. Research protocol to reconcile all 76 activities to REAL UI / API / MCP / owner / availability

**Companion working register:** [POST-ONBOARDING-76-ACTIVITY-SOURCE-TRUTH-REGISTER-v0.1.csv](reconciliation/POST-ONBOARDING-76-ACTIVITY-SOURCE-TRUTH-REGISTER-v0.1.csv). All 76 original activity IDs A01–I08 and original operation, candidate client artifact, source/test and suggested UI are **preserved**. Candidate cells are explicitly **UNVERIFIED**, while verified UI route/API/MCP/owner/entitlement/test/effect columns are unpopulated. Every row starts \`NOT_REVIEWED\`; this is preparation for research, **not completed reconciliation**. The 87 capability matrix and 20 OP joins are separate evidence sets, not row-count substitutes.

**Evidence proof for one row (all required to promote status):**
1. Exact HAIEC source SHA and source module/route at which action is implemented. Distinguish \`IMPLEMENTED_SOURCE\`, \`AVAILABLE_TO_SCOPE\`, \`CUSTOM_ADAPTER_REQUIRED\`, \`HELD/PREVIEW\`, \`PROPOSED\`, \`DEMO_ONLY\` rather than inferring deployed from filenames.
2. Exact **UI** path and component with readable customer action; if only design/mock, \`UI_NOT_AVAILABLE\`; verify route under correct role/system/org and actual state.
3. Exact **REST** method/path/auth policy/entitlement and service body, or \`NO_REST_EXPOSURE\`; REST can legitimately be internal to UI.
4. Exact **MCP** registered canonical tool and schema, auth/tenant scope and actual read/write capability, or \`NO_MCP_TOOL\`; availability parity means same truth, not identical exposed mutating actions. Never register a phantom tool to fill cell.
5. Canonical **producer/qualifier** and evidence storage/lineage, stale/declared/quarantined/no-signal behavior, source clock and service owner.
6. Applicable **control/test** vs executable test and last actual run with evidence link; after-code and selected runtime sources can have \`NOT_ASSESSED\`.
7. **Customer operation/owner**: human approval, actual provider IAM/PEP/effect/incident response, offline fail mode if relevant; do not confuse assessment with target execution.
8. **Report/receipt join**: U5 evaluation ID or native control/test ID, U6 package/receipt eligibility, report field provenance and authorized public disclosure.
9. **Commercial ownership** product-native/customer-owned/optional scoped extension + family only on documented incremental value; report health/truth is never an upsell.
10. Outcome **validation**: source inspection, type checks and focused tests, safe sample tenant/role checks when needed, exact production SHA/deploy and honest NOT_RUN. Independent external MCP client qualifies remote usability, not by tool registry count.

**Mechanical research plan, batched to avoid repetitive heavy tests:**
- **R0 Freeze baseline:** capture current HAIEC Main SHA, product status matrix, source/producer registry, current route/UI inventory, U5/U6 reports owner and registered MCP tool list. Establish controls \`same org + same system + exact eval\`; note NOT_AVAILABLE properly.
- **R1 Machine inventory (no app changes):** source-list UI pages and API route paths; extract auth/permission wrapper types; pull MCP tool registrations/schema; inventory E4 sources, control catalog/active TestSpec, U5/U6, production/native adapter registry, CI distribution state. Store source index. Do not assume one path per feature.
- **R2 Reconcile all 76 IDs:** batch nine families A–I, with a narrow source trace \`UI → REST/MCP → auth → canonical service → producer/evidence → test → result/receipt\`. Use current 30-column CSV, group into reusable owner clusters; **do not re-run full test suite 76 times**.
- **R3 Negative critical spot tests:** representative cohort of read, decision, monitor, public verify, target Protect, provider usage and report, covering missing source, wrong tenant/system/role, stale proof, invalid/revoked receipt, unsupported tool, PEP NOT_WIRED. Only real customer target negative cases after consent. Source-level checks first, small unit/integration cones next.
- **R4 Report-integrity crosscheck:** check each activity's result/evidence semantics vs canonical reporting; tests for U5/U6 identity binding, public allowlist, private package, current/historical and confidence/effect/frontier. Detect fabricated labels and counts.
- **R5 ISAF/CSM mapping (optional):** map relevant A–I rows by ISAF applicable checkpoint group and CSM6 F1–F6; attach provenance (v1 published vs v2 author-issued vs product implemented) and status. Do not generate a filled 127-checkpoint pass matrix, and do not treat 38 LLMVerify rules as a CSM6 certification.
- **R6 Approval and result:** each row adjudicated VERIFIED_AVAILABLE / VERIFIED_CONDITIONAL / VERIFIED_SOURCE_ONLY / VERIFIED_HELD / EXTERNAL_CUSTOM_INTEGRATION / PROPOSED / DEMO_ONLY / UNKNOWN. Include last evaluated source SHA, reviewer, proof URL; explain blockers. Unreviewed is not "unsupported".
- **R7 Maintain:** git-diff based update when new UI/API/MCP/producer/report release changes affected rows; require stable ID and 1:1 evidence trace in a PR review. No trigger from static marketing modifications if canonical backend unchanged unless the marketing claim itself changes.

**Start order by customer risk (not SKU):**
- **P0 P11/report:** I01-I04, I08; B01-B06 source/qualification; D01/D11/D12; current vs historical; public/private verification. P11 owns UI fixes, R0/R1 source mapping is independent docs-only and should not collide.
- **P1 parity, authorization, target claim:** C01-C06, E01-E07, F01-F06, G01/G03/G09/G11, H01-H04. Production PEP pilot separately gated.
- **P2 broader domains:** A01-A10, other D/G, F07 budgets, I05-I07, domain/quality/sector-specific and extended monitoring, while still documenting all 76 before claiming exhaustive completeness.

**Progress metrics with actual denominators (proposed audit metrics):** rows source-reviewed / 76; rows with fully traced canonical owner / 76; native customer-available and verified role/tenant/entitlement / applicable rows; MCP tool exposure of user goals / goals that require MCP (NOT 76/76); qualified report joins / report-relevant rows; critical negative cases passed / executed cases; unverified external customer targets tracked separately. No "100% feature coverage" from the completed spreadsheet.

**Exit criteria:**
- Every row has a defensible status and at least one source-linked exact owner or a documented reason none is available.
- All actual UI/REST/MCP paths match *registered* source at reviewed SHA; missing parity and human-only/privileged actions explicitly recorded.
- For every row with report output, confidence/effect/receipt semantics are compatible with source-grounded U5/U6.
- Review classifies product native vs client action vs optional enterprise delivery without hiding core findings or upselling report truth.
- Artifact citations, action/tenant identity and clock semantics audited; no "unknown => pass", synthetic => production, generic CSM6 scanner => governance.
- A limited regression harness tests representative high-risk paths and negative boundaries; full-suite only if cross-cutting code actually changes.
- Approve a published sanitized capability view only AFTER code owner review; keep working register internal/public-safe (no customer IDs, keys, exploit strings or private research drafts).

## VI. Recommended next deliverables after this plan
1. **UX-P11 implementation** (existing workstream): fix public verification status truth FIRST, then improve report/receipt history and consistent plain-language source disclosures. Don't preempt with upsell UI or extra paperwork.
2. **Code-backed 76-row research register**: inventory current branch, fill 30 columns and evidence links progressively with above gates; do not make 76 separate Devin prompts.
3. **Glossary contract**: presentation-only status mapping and automated copy checks for ALLOW vs runtime, verified record vs target effect, NO_SIGNAL vs zero, source freshness and public/private lifecycle.
4. **Research mapped annex**: attach selected ISAF/CSM relationships as optional appendix with applicability, current v1/v2 status and citation; no independent scientific/regulated claim.
5. **Optional client operating worksheet** remains existing [v0.1](templates/CLIENT-OPERATIONS-EXTENSION-WORKSHEET-v0.1.md). Source-prefill only after 76 reconciliation; never mandatory; never a substitute for U6.

**Implementation freeze preserved:** three pillars, six independently available jobs, five evidence planes, deterministic engine, P09/P10 delivered, P11 next, P12 Usage after, E5.2 native pilot separate. Documentation does not change HAIEC runtime, API, public receipts or commercial pricing.
