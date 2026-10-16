# Common Repo Drive — Full 52-File Alignment, Security and Documentation Integrity Audit

**Assessed:** 2026-10-16  
**Scope:** 52 / 52 tracked blobs from `subodhkc/common-repo-drive` tree **`9178573a4cf19598f740d30b22419d99820c4013`**: 28 Markdown, 10 CSV, 4 JSON, 6 SVG, 3 Python, 1 `.gitignore`. No untracked files, old commit history, archived PR attachments, local ZIP contents or binary PNGs were audited.  
**Method:** Direct GitHub source retrieval and structural/semantic review of all tracked files, GitHub branch/PR state checks, current HAIEC/manufacturing branch revisions, internal Markdown path checks, cross-matrix row/key/source consistency, and inspection of diagram labels and supporting scripts. **No production code change, product test, user account, deployment or runtime validation.** The present audit's conclusions are limited to content and source registration.  
**Machine-readable companion:** [20 audit findings and remediation register](COMMON-REPO-52-FILE-ALIGNMENT-FINDINGS-2026-10-16.csv).  
**Updated reader order:** [Current Decisions and Document Precedence](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md).

## 1. Executive verdict

**Architecture: ALIGNED. Document authority and implementation-readiness: PARTIALLY ALIGNED. Public/private boundary: NEEDS ACTION BEFORE PRIVATE FINDINGS.**

There is no reason to start another HAIEC verdict engine, policy engine, OTLP ingestion store, model-based assurance arbiter, MCP tool registry, or manufacturing control engine to resolve this audit.

The strongest consistent invariants:
- Three *explanatory* pillars — **Understand; Assure; Govern & Operate**.
- Six independently chosen *customer* jobs — **Discover; Evaluate; Authorize; Monitor; Protect; Verify**. They are not required sequential steps.
- Five independent *evidence planes* — **REQUESTED; POLICY_AUTHORIZED; EFFECTIVELY_GRANTED; CODE_CAPABLE; OBSERVED**; no automatic promotion between planes.
- HAIEC evidence admission/qualification, deterministic evaluation/U5 disposition, approved policy, human deployment decision, operational gate/effect, and U6 verification have different owners and proof requirements.
- LogSense is a possible external forensic producer, not the source of canonical HAIEC dispositions. Manufacturing is a versioned, explicitly labeled synthetic showcase, not live ERP/MES/PLC or actual HAIEC target blocking. Kestrel operates its own platform safety floor, with optional additional tenant-scoped HAIEC assurance.
- Deployed service availability/authorized operation, source module presence, registered MCP tool, human approval, configured control, imported synthetic demonstration, and actual target effect are distinct claims.

**Work-order decision:** HAIEC E0/R1 source reconciliation is complete; proceed with **E1 goal availability and E2 source onboarding implementation by the authorized Devin owner**, preserving E3 privileged security/PR #2220 and E4 telemetry as separately owned code lanes. **Do not run the external Kestrel MCP tenant journey yet.** Focused safe code checks necessary for E3/merge decisions remain legitimate implementation checks, not the deferred external acceptance.

## 2. Mechanical completeness and data alignment

| Inspected resource | Result | Qualification |
| --- | --- | --- |
| Tracked snapshot | **52 of 52 read**: 28 MD, 10 CSV, 4 JSON, 6 SVG, 3 Python, 1 gitignore | Github tracked tree untruncated; untracked and historic prior versions not included |
| Markdown relative references | **1 broken tracked relative link** (found in E1 handoff); other inspected relative Markdown links pointed at tracked files | Web URLs and fragment anchors were not HTTP-checked; links embedded as plain prose/backticks weren't exhaustively traversed |
| CSV structure | All **10 CSV** files readable with consistent column counts at sampled parser review; no CSV structural blocker found | CSV source rows not independently executed as product |
| JSON parsing | **4 of 4** parsed successfully: capability source matrix, proposed V2 schema, PR #2220 release status, source-image manifest | Does not prove schema adoption or deployment |
| Main matrix | `CAPABILITY-MATRIX.csv` **87 rows**, JSON entries **87**, declared rowCount **87**, common fields **match**, no duplicate capability IDs observed | Curated source inventory, NOT a complete customer-callable catalog |
| Proposed V2 census | `CAPABILITY-MATRIX-V2-SCHEMA.json`: **PROPOSED_FIELD_MODEL_NOT_MIGRATED** | Essential organization scope, entitlement, applicability, permission, source-health fields are not yet populated for the full matrix |
| Core research and backlog | **16** priority UI/API workflow records; **6** customer acceptance journeys; **22** top-level work items (**8 E + 10 R + 4 T**); **17** E1/E2 subitems (**6 E1, 8 E2, 1 E3, 1 E4, 1 T**) | Distinct denominators; not additive counts of shipped features |
| Kestrel catalogs | **37** feature records: 29 `available`, 3 `requires_setup`, 3 `planned`, 2 `unsupported`; **38** security controls (10 P0, 20 P1, 8 P2) | Catalog states from a fixed private-source snapshot; proposed controls ≠ deployed controls |
| SVG diagrams | **6 vector SVG** files tracked; no embedded script/image tags found in inspected text; source text reviewed for claim boundaries | Not a browser/visual QA or full SVG/XML parser validation |
| Python scripts | Three helper scripts present: file/source census, original-image import verification, capability-matrix integrity checks | Helpers were **inspected only**, not executed; common repo has **no tracked GitHub Actions workflow** to run them automatically |
| Original PNGs | Six historical files and five unique hashes in `source-images/MANIFEST.json`; all six images absent from tracked tree | Explicit **PENDING_BINARY_UPLOAD**; correct SVG versions exist separately |

**Source inventory does not equal release evidence:** Earlier E0/R1 verified all 16 UI path families and API paths and the corresponding canonical MCP names exist in HAIEC source. It found 58 source-declared `haiec_*` definitions. No authenticated remote client check, tenant/role execution or human-action target effect was performed.

## 3. Highest-priority misalignments: explicit decisions

### P0 — Confidentiality is not inherited from the private product repositories

`common-repo-drive` GitHub visibility was verified **PUBLIC**. Source-backed vulnerability classes and route-owner names may have appeared in older public research documents. User consent to store private findings does **not** convert this repository into a restricted file room. **Do not add exploit instructions, detailed non-public weakness reproductions, secrets or raw private customer data while it is public.** Security owners should review older published artifacts and Git history for inappropriate disclosures. If a shared confidential research archive is desired, deliberately make this repo private with verified collaborator access or use a dedicated restricted security tracker. Switching visibility cannot retract earlier public clones or third-party copies.

Even after making the repo private, bearer tokens, live passwords, auth cookies, provider credentials, full customer voice recordings and raw personal data belong in an access-controlled secrets/evidence system—not Git.

### P0 — Several documents simultaneously call themselves “current”

`DEVIN-HANDOFF.md` opens with older `PRE-DEVIN-EXECUTION-GATE`/PR #2220-first precedence, then later calls E1→E2 the current work order. `PRE-DEVIN-EXECUTION-GATE-AND-LAYER-ALIGNMENT` instructs Devin to execute PR #2220 P0 before the next source/UX phase; newer documents call for E1 and E2 with E3 separately owned. In a concurrent Devin environment this is an actionable ambiguity.

**Resolution:** A single top-level [Current Decisions and Document Precedence](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md) must override old sequencing **for future work only**, without rewriting historical research. Product-truth P0 PR #2220 remains a **separate security/release gate**, never silently merged into E1. E1 read-only composition and E2 design can progress under existing authorization, but **no privileged customer protection claim can be released** while corresponding P0 identity/tenant/control gaps remain unclosed. An implementation owner must resolve live file ownership before any code edit.

### P0 — A staged security fix is not a released fix

At GitHub checks on 2026-10-16:
- HAIEC `Main` `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`.
- [PR #2220](https://github.com/subodhkc/haiec-website/pull/2220) **OPEN, not merged**, head `32e54c58`; old Main base `b2c14897`.
- Previously recorded typecheck succeeded but repo ESLint / new-violations failed. New PR tests/tenant negative smoke, functional preview, Main merge and Vercel production deployment remain unverified.
- PR #2217 homepage diagram draft is not merged; it has path conflict potential with already merged Sprint 24 homepage work.
- Current GitHub branch protection/rules were **not verifiable** using connector (403), so do not assert either enforced or unprotected based only on older comments.

**Resolution:** keep PR #2220's release-gate JSON explicitly source/staged, not `PROTECTION_ACTIVE`, and record merge/deployment separately when verified. No broad forced test campaign now, but focused security checks are required when the owner elects to merge privileged changes.

## 4. Product and data consistency gaps

### Capability cardinality: these are different things

| Denominator | Owner | Meaning | Misuse to prevent |
| --- | --- | --- | --- |
| 3 | Marketing/product architecture | Explanatory pillars | Not three engines or required steps |
| 6 | Customer product navigation | Discover/Evaluate/Authorize/Monitor/Protect/Verify | Not six MCP method names or universally available actions |
| 13 | `lib/mcp/capability-guide.ts` | Canonical goal IDs read by MCP guide at Main | Not necessarily 13 sold product modules or guaranteed for every tenant |
| 16 | Shared workflow reconciliation CSV | Priority customer journeys with documented UI/API/MCP paths | Not all HAIEC routes nor fully authenticated acceptance |
| 12 | SVG workflow-family illustration | Illustrative user-intent families | Not the canonical registry; should map to 6 and 13 |
| 87 | `CAPABILITY-MATRIX.csv/json` | Curated cross-repo capability/source rows | 60 `IMPLEMENTED` in source does **not** mean 60 customer-ready, deployed or tenant-callable experiences |
| 20 | Specialist discovery register | Additional candidate specialty modules | Not new shipped capabilities |
| 37 | Kestrel catalog | Kestrel SaaS features, including planned/unsupported | Not HAIEC capability entries |
| 38 | Kestrel control register | Desired controls and existing foundations | Not 38 independently verified tenant controls |

**Required addition:** a **source-backed mapping** from six customer jobs → 13 canonical guide goals → 16 prioritized journeys → illustrative twelve diagram workflow families, with existing UI/MCP/API and eligible evidence/tenant requirements. Do not mechanically force all 87 curated rows into six stages. E1's customer status must be a read-only projection, not an alternate authority table.

### Proposed V2 schema still not implemented

The proposed 17-field V2 model is not populated or governed. The old 87-row matrix is internally aligned (87 CSV/JSON entries), but lacks customer-specific entitlement, role, producer reachability, delivery transport, actionable next steps and evidence-basis assurance across the full catalog.

**Resolution:** E1 should first make the 16 priority routes verifiably readable and scoped through **existing** `capability-guide.ts`, `tool-registry.ts`, `system-next-action.ts`, `next-action-access.ts`, `evaluation-source-preflight.ts` and auth; do not migrate the full 87-row matrix as a prereq or create another entitlement registry. Later derive V2 source-anchored metadata selectively and mark unsupported/held components explicitly.

### UI display states need a single owner

Older docs propose `READY_TO_RUN`, `CAN_RUN_WITH_LIMITATIONS`, `SOURCE_NEEDED`, etc.; newer E1 docs propose `READY_TO_OPEN`, `ACTION_REQUIRED`, `NOT_ENTITLED`, `NOT_CONNECTED`, `UNKNOWN`. All describe *presentation*, but a consumer may mistakenly persist one list as truth.

**Resolution:** E1 defines one forward-compatible **display-only** mapping with exact reason and source: underlying canonical `GoalReadiness`, `NextActionStage`, `EvaluationSourceStatus`, `TelemetryReadinessState`, U5/Evidence/Guardrail outcomes stay verbatim. If source is absent, display UNKNOWN/NOT_ASSESSED, not BLOCK/PASS/SAFE. No new readiness DB enum.

### E2 needs a proven customer transport, not only a menu choice

GitHub App verification, source consent and per-branch preflight are implemented in source; `haiec_submit_local_scan` is registered; local CLI remains **PREVIEW**, GitHub Action v2 **NOT_RELEASED** in inspected product status. User-supplied website/screenshot content is declaration, not verified source-capable code or enforced operation. E2 still has a release/UX gap until the customer can follow an actually available path under their own tenant.

**Resolution:** one honest supported `GitHub App → trusted repo → exact branch/consent → evaluation` experience plus a clearly qualified local-bundle and runtime-only option. Keep a non-code controls/evidence path independent; avoid an enormous initial setup wizard.

## 5. Diagrams, originals and manufacturing showcase

**Visual model drift:** `haiec-three-pillars-six-capabilities.svg` uses the accepted 3/6 language, but `haiec-v3-architecture-corrected.svg` says “Four capability domains,” `haiec-workflow-families-matrix.svg` says “12 workflow families,” and `haiec-platform-workflows.svg` says “Assure/Govern” in the six-workflow row where the latest product lexicon is “Evaluate/Authorize”. These diagrams can coexist as **different abstractions only if labeled explicitly**. For one coherent customer homepage, use **three pillars and exact six independent job names**; technical four-domain decomposition and twelve user-intent families belong in deeper documentation, not competing hero narratives.

**Original PNGs:** the six original owner image filenames and hashes are correctly inventoried but **not** in the repo. Any handoff requiring binary originals remains blocked until exact bytes are available and verified with `import-source-images.py`. The tracked corrected SVGs need no binary originals for their own basic use.

**Sprint 25/26/27:** newer manufacturing-only Sprint 26 and Sprint 27 reports remain correctly classified **simulation**, not verified MES/ERP/PLC integration. Their fixture actions, browser-local event ledger and portable demo record cannot be described as HAIEC-issued U6 control/effect receipts. Sprint 27 status document was authored with merge/deploy verification still open. At audit time the manufacturing `main` branch was GitHub-confirmed at **`44dbe7e4bcc029448300a356835d559790a47ed2`**, merged Sprint 27 PR #48; **Vercel production deploy was not checked**. Report this later observation separately rather than rewriting the original snapshot.

## 6. Source, operational and privacy/release gaps remain

- **E3 operator security** and [#2220](https://github.com/subodhkc/haiec-website/pull/2220) are proposed and partially staged, not verified released. Server-role/org checks, browser privileged operations, exact external enforcement and effect receipts need implementation owner proof.
- **E4 telemetry** should compose OTLP/streaming readiness/monitoring read model; source configured/received/qualified/evaluated/target effect statuses and stale/missing producer alerts remain contract work, not a verified always-on monitoring product.
- **Kestrel** needs mandatory platform-level control repairs and telemetry for all tenants before “secured by default” operational claims. Optional HAIEC tenant add-on can strengthen scoped governance/visibility but must not paywall base platform safety.
- **External Kestrel MCP customer test is DEFERRED:** only after HAIEC E1–E7 enhancements and product security gates, authorized Kestrel test tenant, separate HAIEC test org/credential, external workspace outside HAIEC/Kestrel source, operation/screenshot journal and final illustrated evidence report. Manufacturing browser record is not a substitute.
- **Privacy:** public planning repo may retain non-sensitive findings/control requirements; it must not become a secrets store or a repository for raw customer voice/financial evidence.

## 7. Documentation maintenance and automated guardrails

**Confirmed low-level issue:** One broken internal Markdown link in the E1 contract points to a nonexistent E3/E4 handoff filename; the intended E3/E4 source document exists with a longer name. Correct just that link without changing historical contracts.

**Automated validation missing:** no tracked `.github/workflows/` action in this common repository. Existing scripts could be reused or wrapped by lightweight CI to validate:
1. relative Markdown and diagram/source-image references;
2. JSON parse, CSV column integrity, 87 CSV ↔ JSON/source URL/Markdown equivalence;
3. 37 and 38 Kestrel register schema/uniqueness and status counts;
4. declared V2 schema **still proposed**, not silently substituted as released;
5. no embedded secrets/identifiers or public-private unsafe disclosures;
6. diagram SVG/XML structure and unsupported universal assurances;
7. latest source SHA references as warnings for dated historical snapshots, not retroactive rewrites;
8. repo-wide handoff cross-reference to a **single current decisions index**.

Do not treat an internal docs test as the deferred external Kestrel operation acceptance. Do not trigger a new HAIEC production CI/Devin sprint just to validate this planning repo.

## 8. Recommended 3-level clean-up

**Now — no product code/testing:**
1. Publish one [current precedence/decision page](CURRENT-DECISIONS-AND-DOCUMENT-PRECEDENCE-2026-10-16.md), link from root README, folder README and Devin handoff.
2. Record this audit and [issue register](COMMON-REPO-52-FILE-ALIGNMENT-FINDINGS-2026-10-16.csv).
3. Fix one broken E1 internal link.
4. Update current checked repo states and original-image/archive notes without overwriting previous source snapshots.
5. Keep private security issue details out of PUBLIC GitHub; repository owner must decide visibility/access before new confidential material.

**Next E1/E2 Devin implementation (other session):**
- E1 read-only goal/tenant readiness and scoped CTA; unified display status and 6→13→16 taxonomy crosswalk, no new engine.
- E2 low-friction GitHub/branch/consent/release-truth workflow plus qualifying evidence alternatives; no mandatory source scan.
- E3 and E4 remain distinct high-risk code-owner lanes. Confirm ownership and release sequencing; PR #2220 cannot be “fixed” by documentation.

**Later, only when user authorizes the acceptance gate:** externally create isolated Kestrel tenant, read HAIEC MCP from separate workspace, capture every step with redacted screenshots and signed/source-bound result references, then write illustrated customer report. No customer acceptance tests executed during this audit.

## 9. Final status and limitations

**52 tracked files reviewed.** Structural CSV/JSON consistency verified; one relative link discrepancy identified. This is a **documentation/source-alignment audit**, not a new live authentication test, repository history secret scan, complete source code line audit, SVG visual accessibility acceptance, or public-domain link-checking service.

**Finding closure policy:** A document being corrected is not product remediation. Mark a finding CLOSED only when its stated artifact and, if required, source release/deployment evidence exist. Preserved historic source snapshots should never be rewritten to pretend future code was present at their original capture.

**Sources:** GitHub-tracked `common-repo-drive` snapshot stated above; HAIEC Main `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`; manufacturing Main `44dbe7e4bcc029448300a356835d559790a47ed2`; PR #2220 as observed open/unmerged. All dates/SHAs are historical reference points that need reinspection before implementation.
