> **2026-10-21 CASE BLUEPRINT AUTHORED:** [Twelve source-bound report-trust cases with thirty-six reviewed answer keys and explanations](HAIEC-REPORT-TRUST-AND-AUDIT-READINESS-12-CASE-EXERCISE-BLUEPRINT-2026-10-21.json). Two cases link to actual public Kestrel report/comparison sources; remaining cases are clearly educational fixtures. The quiz distinguishes warranted claim, minimum missing evidence and permissible audit wording. Use it for the future interactive HTML. The answer feedback is authored course content, never a new HAIEC engine disposition, independent verification or audit opinion.

# HAIEC Learning Series #5: Can You Trust This AI Assurance Report?

**Working title:** Can You Trust This AI Assurance Report?
**Subtitle:** A practical guide to findings, evidence quality, limitations, verification receipts, source provenance and missing evidence.
**Audience:** Internal auditors, assurance firms, enterprise risk/GRC, CISOs, vendor-risk teams, procurement committees, technical reviewers.
**Status (2026-10-21):** Source-reviewed **curriculum and HTML design plan only**. No HTML built, no HAIEC engine or product website modified, no live receipt verified.
**Customer-facing copy:** No em dashes, internal ticket IDs or unsupported certification claims.
**Central message:** Verify the record. Challenge the claim. Understand the limits.

## 1. Why the course matters

A report can be real, deterministic, digest-bound and cryptographically intact without establishing that the analyzed AI system is safe, correctly authorized, continuously monitored, production approved or compliant.

The lab teaches a customer or independent reviewer to answer seven separate questions rather than accept a single badge:
1. **Identity:** Exact AI system, organization, evaluation, source commit, environment, time and report version.
2. **Provenance:** Evidence and analyzer producers, actual execution versus registered availability, source authority and timestamps.
3. **Claims:** U5 result, source-qualified finding, five-plane support, negative findings and contradictions.
4. **Coverage:** What was tested, scanned, sampled, excluded, unavailable, stale, candidate or not assessed.
5. **Integrity:** How a published receipt binds the issued package and which verification against the issuer actually succeeded.
6. **Current relevance:** What changed after the frozen evaluation, and whether policy, grants, code or observed effects were newly established.
7. **Reliance:** What a named reviewer can responsibly claim for a particular risk, procurement, audit or deployment decision.

This is a **report-reading and evidence-reliance course**, not another HAIEC scanner, risk score, external auditor, certification, trust seal or parallel report engine.

## 2. Source-verified HAIEC report inventory and scope boundaries

| Product artifact | Canonical source | Reader takeaway | False inference |
| --- | --- | --- | --- |
| Master Assurance Report, exact evaluation | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/master-report-product.ts | One persisted evaluation is read consistently by HTML, PDF, JSON and MCP; frozen membership is unchanged by later intake | Current investigation equals historic evaluation |
| Four Assurance Questions | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/assurance-question-projection.ts | Reach, authority, observed and proof boundary; Requested/Policy Authorized/Effectively Granted/Code Capable/Observed are peer evidence planes | A source path means target executed or IAM granted |
| U5 claims and dispositions | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/types.ts | Seven claim states; ALLOW / REVIEW / BLOCK are evidence-bounded assurance dispositions | ALLOW means safe; BLOCK means customer target runtime was stopped |
| Agent Audit | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/agent-audit-report.ts | Per-question answer, status, evidence, limitations, verification prompts; established/unestablished/notAssessed/evidenceGaps | Candidate or missing evidence counts as a passed negative test |
| Agent Audit status owner | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/agent-audit-status.ts | Ten reporting states, distinct from U5 claim states | Convert all missing/partial answers into "No" |
| Explanation packet | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/report-explanation-packet.ts | Read-only executive/technical/auditor report interpretation with completeness/omitted sections, bounded verification items, owner actions, receipt resolution status | Explanation is a fresh verdict, receipt, external approval or full proof |
| U6 output and package | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/u6-package.ts ; https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/u6-types.ts | Versioned report, evidence bundle, decision receipt, semantic/package digests, membership, evaluated-scope binding where available | Hash validates every underlying source fact or deployed outcome |
| Receipt projection | https://github.com/subodhkc/haiec-website/blob/Main/lib/ai-inventory/system-receipt-projection.ts | NO_RECEIPT, PRIVATE_RECEIPT, PUBLIC_RECEIPT, REVOKED_RECEIPT, selected for exact evaluation; multiple schema-versioned packages can coexist | Summary badge runs full cryptographic verification |
| Public receipt verifier | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/public-verification-display.ts | INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD distinct from INVALID_PACKAGE, REVOKED, unknown, and offline INTERNALLY_CONSISTENT | Any integrity-verified receipt implies safety, certification or current system protection |
| Analyzer provenance | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/evaluation-execution-provenance.ts | Record of which analyzers actually ran, execution artifact identity and basis-bound provenance gaps | Catalogued/selected means executed, missing record means no analyzers ran |
| Master claim reporting grammar | https://github.com/subodhkc/haiec-website/blob/Main/lib/assurance/master-report-claim.ts | ESTABLISHED/PARTIAL/CONTRADICTED/UNKNOWN/NOT_ASSESSED, evidence strength, source currentness, explicit not-claimed | STRONG is a probability, WEAK means false, MISSING means FAIL |
| Current public examples | https://www.haiec.com/sample-reports ; https://github.com/subodhkc/haiec-website/blob/Main/data/sample-reports.ts | Distinguish current generated, synthetic demonstration, historical, and partial-capability samples | All sample types are current, audited, comparable and certified |
| Kestrel real-source sample | https://www.haiec.com/sample-reports/kestrel | Public sanitized real-repository evaluation, commit 5e65843, 44 source-backed consequential paths and REVIEW. Policy/runtime grant/observed evidence absent | 44 paths = 44 attacks, frauds, vulnerabilities or confirmed runtime actions |
| Kestrel comparison | https://www.haiec.com/sample-reports/kestrel/compare | Two frozen source releases with qualified control changes and unresolved additions/removals under partial coverage | INCONCLUSIVE means no changes or automatically unsafe |

The Kestrel report's dynamic detail should be consulted in a browser when final screenshots are made. The public samples hub and source manifest suffice for the source commit, 44 paths, REVIEW and stated missing authority/runtime evidence. Do not fabricate any Kestrel receipt ID or real target effect.

The current public sample hub presented **17 sample deliverables** at review time; do not hardcode that catalog size in the eventual static HTML, because the sample hub is updated independently.

### Editorial claim-alignment gap

The broad public page https://www.haiec.com/verify uses simplified "Trust the Results" and references SHA-256 as a signature. The specific U6 Decision Receipt display code correctly states INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD is **not CERTIFIED, SAFE or CURRENT**. A SHA-256 digest is a content-integrity check against a trusted reference, **not a digital signature** and not independent verification of the truth or authority of the upstream source.

Teach the specific U6 contract without asserting every legacy Trust Artifact shares U6 versioning or verification semantics. Record this as a **separate website copy-review recommendation**, not a code/website edit in this course planning task.

## 3. Canonical result meanings, taught exactly

**U5 claim states:**
- SUPPORTED: qualifying evidence satisfies the deterministic claim within scope, never globally safe.
- PARTIALLY_SUPPORTED: supportive but incomplete evidence.
- INSUFFICIENT_EVIDENCE: required proof not sufficient.
- CONTRADICTED: qualified evidence directly conflicts.
- REVIEW_REQUIRED: conflict, ambiguity, stale, external-only or human judgment.
- NOT_ASSESSED: no qualifying evaluation for this claim, neither PASS nor FAIL.
- NOT_APPLICABLE: objectively excluded from this scope, not a favorable assessment.

**U5 assurance dispositions:**
- ALLOW = **ALLOW within evaluated scope**, with required claims supported and no blocking contradiction.
- REVIEW = further evaluation/human judgment needed, including incomplete mandatory claims, stale sources or provenance conflict.
- BLOCK = qualifying critical contradiction or configured blocking assurance criterion; **not evidence a customer-native target guard actually blocked the action**.

**Agent Audit statuses:** ESTABLISHED, MIXED, PARTIAL, CANDIDATE, NO_QUALIFYING_EVIDENCE, NOT_ASSESSED, EVIDENCE_NEEDED, UNKNOWN, UNSUPPORTED, NOT_APPLICABLE. These are **different vocabulary from U5 claim states**. Never automatically translate one into another.

**Evidence member roles:** SUPPORTING, CONTRADICTING, CONTEXT_ONLY, EXCLUDED. Source exclusion reasons include WRONG_SCOPE, STALE, SELF_REPORTED_NOT_ALLOWED, COVERAGE_INSUFFICIENT, PRODUCER_FAILED, EXTERNAL_ONLY, AFTER_SNAPSHOT, DUPLICATE and NOT_RELEVANT_TO_CLAIM. Unknown and excluded facts do not vanish from the reporting limitations.

**Five peer evidence planes:** Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. DAI discretion is cross-cutting, not a sixth plane. A target-side external effect is additional independent proof, not inferable from an HTTP 200 or an invocation.

**Receipt record states:** NO_RECEIPT, PRIVATE_RECEIPT, PUBLIC_RECEIPT, REVOKED_RECEIPT for a **resolved exact system and evaluation**. If the Explanation Packet reports NOT_RESOLVED_NO_SYSTEM_BINDING, an apparent NO_RECEIPT placeholder is **not a negative established fact**.

**Receipt verification:** INTERNALLY_CONSISTENT is local/offline computed integrity only. INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD compares to issuer-backed persisted record when service returns that result. INVALID_PACKAGE, REVOKED, NOT_FOUND and UNKNOWN remain separate. Publication state and integrity are separate axes.

**Report versions:** Old versioned packages continue to verify under their own recorded schema. An additive Action Proof, Agent Reachability or five-plane feature in newer reports is not retroactive proof for older reports.

**Current vs frozen:** Later investigation events are not silently inserted into a report for the earlier snapshot. A new evaluation/change comparison is required where the change is material.

## 4. Learning outcomes and course modes

**Main promise:** A skeptical reviewer can inspect an unfamiliar report and state **exactly which claim can be relied on, for which scope and date, what the issuer's record integrity establishes, and what the smallest missing proof is**.

Executive 10 to 15 minutes: one genuine Kestrel-type REVIEW example, one scope/verification challenge, one one-page conclusion.

Auditor practitioner 45 to 60 minutes: twelve exercises, 36 decision questions, provenance/receipt labs, reviewer evidence request.

Technical/assurance engineer 60 to 90 minutes: execution provenance, bundle membership, evaluated scope, report versions, cross-plane source joins, change comparison and bounded export.

Facilitated audit/risk review 70 to 90 minutes: two roles, discrepancy review, specific reliance decision and assigned evidence owner.

These are editorial time targets, not tested completion data.

## 5. Ten screen sections in the standalone interactive HTML

1. **Can You Trust This Report?** Reader selects one specific decision/reliance purpose, sees a report card and an interactive Trust Stack.
2. **Know What You Are Reading.** Source-labeled Master Report, Agent Audit, Evidence Bundle, U6 receipt, verification output and historic/synthetic/partial special-purpose samples.
3. **Four Assurance Questions.** Reach, authority, observed, proof frontier linked to the five separate evidence planes and code/permission/target distinctions.
4. **Interpret U5 Correctly.** Seven claim states, ALLOW/REVIEW/BLOCK, bounded evidence and human deployment decision vs actual runtime enforcement.
5. **Inspect Source Provenance.** Source reference, actor/system/commit, producer/actual analyzer execution, evidence role/exclusion, time, scope and coverage.
6. **Read the Limitations.** Source-based established / unestablished / not-assessed / missing-evidence texts, Agent Audit verification items and exact next source.
7. **Verify the Receipt.** Package digest, receipt hash, Merkle membership concept, scope/version, private/public/revoked lifecycle, issuer-anchored vs offline verification.
8. **Report Reader Challenge Lab.** Twelve case cards with three authored decisions each. Reasonable wrong choices explained.
9. **Read a Real HAIEC Sample.** Kestrel frozen REPORT and its independent release comparison shown as links with exact public source facts, not invented live event data.
10. **Build the Audit Review Packet.** User notes and selected source-bound conclusion with printable summary, evidence annex and Markdown/JSON export.

**Progress is learning completion only.** No trust score, system safety score, maturity certificate or simulated real receipt verification.

## 6. Twelve required practical review cases

| ID | Case | Key learner distinction |
| --- | --- | --- |
| T01 | Kestrel 44 source-backed action paths / REVIEW | A legitimate code-capable source finding is not a proven attack or actual runtime execution |
| T02 | U5 ALLOW for an explicitly bounded scope | ALLOW is not production deployment approval or universal safety |
| T03 | U5 BLOCK due to an established critical contradiction | An assurance verdict is not an executed customer-native target block |
| T04 | Evidence-only evaluation without source scan | No code-capable scan cannot become "no risky paths" |
| T05 | CANDIDATE cross-plane source mapping | Candidate is not a qualified path or vulnerability |
| T06 | Stale event and after-snapshot evidence | The frozen historical evaluation remains unchanged |
| T07 | Registered analyzer whose execution identity is missing | Cataloged/selected does not establish executed |
| T08 | Offline digest check without issuer-record verification | INTERNALLY_CONSISTENT is not an issuer-anchored verification |
| T09 | Two schema-versioned receipt records, one revoked | Exact evaluation/receipt version and publication state matter |
| T10 | Valid digest with absent IAM/target fact | Integrity is not independent upstream authenticity or verified effect |
| T11 | Kestrel A/B release delta with partial reachability | Qualified control change can coexist with inconclusive addition/removal |
| T12 | Procurement/audit reliance committee | Narrow claims, exact scope, owner, unassessed evidence and remediations before reliance |

**36 authored questions:** for each case: (a) which claim is supported, (b) which source or verification could change conclusion, and (c) what language is permissible in a named audit/deployment/vendor-risk review. Correctness derives from pre-authored answer keys, not a new model verdict.

**Truth classes:** REAL_PUBLIC_REFERENCE, EDUCATIONAL_REPORT_FIXTURE, HISTORICAL_OR_OTHER_PRODUCT_SAMPLE, RESEARCH_CONTEXT. Do not blend artificial events into published Kestrel report as though they were real.

## 7. Six meaningful diagrams and interactive affordances

**Diagram A, Trust Stack:** Report identity, evidence producers, claim, coverage, integrity and current applicability shown as **independent inspectable layers**, not a sequential green score.

**Diagram B, Five Evidence Lenses:** Requested / Policy Authorized / Effectively Granted / Code Capable / Observed, with separately qualified source/limitations. DAI not a sixth plane.

**Diagram C, Claim-to-Source Lineage:** Selected report sentence → supporting/contradicting/context/excluded evidence → producer → source snapshot → U5 evaluated claim → report display.

**Diagram D, Frozen Report to Receipt:** Exact U5 evaluation → U6 report/bundle/receipt → PRIVATE/PUBLIC/REVOKED state → issuer verification. Animation is educational and **does not run a real cryptographic check**.

**Diagram E, Evidence Time Slider:** Evaluated source commit and snapshot vs after-snapshot log or current code release; an old report cannot be rewritten.

**Diagram F, Reviewer Decision:** Established / Unestablished / Not Assessed / Next source / Owner / Appropriate reliance statement.

Each diagram is light-themed, accessible as DOM/SVG with readable text, reduced-motion fallback, no fake green "certified" badge, static print and mobile stacked view. All six add pedagogic value rather than decoration.

**Key interactions:**
- Mode switch Executive / Auditor / Technical.
- Specimen selector: actual published Kestrel summary vs explicitly educational sample claim/receipt.
- Select a source and inspect producer, basis, coverage, role, exclusion and currentness.
- Reveal the correct source needed to qualify a report claim.
- Report state selector and receipt state/copy explanation.
- Counterfactuals for scan absent, policy stale, agent identity missing, observed runtime after snapshot, no target witness, revoked package, and unsupported analyzer provenance.
- Twelve practical three-question challenges, local progress.
- Reviewer packet fields and optional evidence/link registry, Markdown/JSON local export and printable all-scenarios appendix.
- Link to real public Kestrel report and comparison, and to specific public receipt verifier, but no invented verification IDs or outbound customer data.

## 8. Audit review packet output contract

A user-authored training review contains:
- Exact report artifact kind, sample provenance and evaluation basis, **NOT_SUPPLIED** for absent identity.
- Reviewer purpose / intended audience / exact decision question.
- Source commit/scope/version/snapshot, U5 status where valid, known schema version.
- Evidence producers and roles (supporting, contradicting, excluded, context), source freshness, actual analyzer execution proof or unknown.
- Claim matrix: what is established, unestablished, not assessed, contradicted, or merely candidate.
- Receipt resolution status, lifecycle state, issuer verification status, package version and checkedAt independently, no inferred "verified" badge.
- Source/target effect/actual deployment limitations and bounded next evidence.
- Reviewer reliance: RELIANCE_SUPPORTED_FOR_STATED_CLAIM / RELIANCE_CONDITIONAL / ADDITIONAL_EVIDENCE_REQUIRED / RELIANCE_NOT_SUPPORTED, **clearly educational reviewer labels, not canonical HAIEC engine states**.
- Assigned owner, change/retest trigger, human sign-off draft if needed. Educational notes do not themselves establish human approval.
- Public/authenticated/not-provided links; no raw tokens, actual customer private evidence or fabricated receipt IDs.

Export a short executive statement and separate technical evidence annex to Markdown/JSON. This is a learning assessment, **not** U6 package issuance, actual independent audit opinion, verified receipt or customer compliance certification.

## 9. Build and acceptance sequence

1. Freeze current Main source and public sample claims at build time. Preserve exact evaluation, sample class, snapshot and report version. Recheck public Kestrel comparison figures.
2. Author a source-linked JSON scenario blueprint of 12 cases and 36 fully explained decisions, plus evidence source and receipt lifecycle fixtures. Do not invent a publicVerificationId.
3. Build one offline HTML at **haiec-product-capability-architecture/learning/HAIEC-Can-You-Trust-This-AI-Assurance-Report-Interactive-2026-10-21.html**. No backend, API keys, customer data or remote scripts. Preserve HAIEC light-theme academy style, printable diagrams and role modes.
4. QA all 36 decisions, claim source truth, 12 cases, six views, receipt state distinctions, report exports, print and zero page JS errors. Test widths 320, 390, 768, 1280, 1440, 200% zoom, focus and reduced motion. Verify live links and final printed PDF.
5. Commit HTML, scenario blueprint and verification record to Common Repo, update README. Consider user-approved publication on existing HAIEC Learn/Resources. **Do not create another competing platform product page or modify U5/U6.**

### Definition of success

A reader can inspect an unfamiliar HAIEC report and explain, without exaggeration:
**What exact persisted evaluation was read? What claim did qualified evidence establish? Where does the evidential frontier end? Which source is absent or stale? Does the receipt match the issuer's record and remain active? Is the report's frozen snapshot relevant to today's named decision? What evidence and human ownership would make a narrow reliance statement defensible?**

*Planning deliverable only. Interactive HTML not yet created and no production HAIEC changes performed.*
