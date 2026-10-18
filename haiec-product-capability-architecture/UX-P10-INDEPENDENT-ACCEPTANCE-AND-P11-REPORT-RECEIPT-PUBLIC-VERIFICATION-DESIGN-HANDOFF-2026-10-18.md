# HAIEC — P10 acceptance and P11 Reports, Receipts & Public Verification design / evidence-truth handoff

**Review: October 18, 2026. Status:** P10 DEPLOYED_VERIFIED; P11 SOURCE_REVIEWED / DESIGN_PLANNED, application code NOT modified. This is the canonical additive P11 design work order. Customer audiences: enterprise owner, reviewer, auditor, external recipient.

## I. P10 independent production acceptance

- [PR #2259](https://github.com/subodhkc/haiec-website/pull/2259) merged Main exact SHA **fc284d5cda14d1cb6e6bd5062bb0b11c75ac216f**. Independent Vercel production deployment [dpl_8VMfibLozu2g96eaSik2fdLEkYtD](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/8VMfibLozu2g96eaSik2fdLEkYtD) READY matching SHA. [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39120958300) and [Consolidated CI/CD](https://github.com/subodhkc/haiec-website/actions/runs/39120958378) succeeded at exact SHA. Developer's 7153557793 refers to GitHub deployment, NOT authenticated Vercel ID.

- Seven changed files. E4 qualification-driven deriveSignalOverview correctly differentiates stale/historic receipts from qualified recent signals; four independent Monitoring overview lanes for passive signal, persisted active tests, guardrail policy/evaluation and E5.1 native enforcement; refresh controls truthfully say Refresh requested. Existing deriveTelemetryStatus preserved, no new monitor engine.

- Developer-reported 8/8 new tests, 21/21 source-health tests, 29/29 enforcement tests, TypeScript and touched lint clean, 1440/1280/390 authenticated browser; not independently rerun. NOT_RUN: live fresh DELIVERING source, cross-role/org, alert-history live, actual MCP and keyboard focus. P10 accepted, do not reopen for P11.

- Minor future P2: the native-enforcement summary labels lack of any verified/applied effects as Not wired, although some other systems might be at CONFIGURED/AUTHORIZED intermediate levels. It accurately says no verified effect, but avoid flattening intermediate levels to universal NOT_WIRED; separate polish, not another P10 sprint.

## II. Existing application source truth and audiences

| Surface | Actual owner and constraints |

|---|---|

| Authenticated Reports Hub | app/dashboard/reports/page.tsx; lists exact completed Evaluations even with NO_RECEIPT; separate current representative receipts, historical packages, repository groupings, legacy compliance reports; independent load/error states; existing pagination, download, master/report links. |

| Evaluation details | app/dashboard/assurance/evaluations/[evaluationId]/page.tsx plus AssuranceBundleReport and Master Report routes; frozen identity, as-of, source/DAI/evidence limits; do not fabricate an evaluation or a receipt. |

| Public verification selector | app/verify/page.tsx; THREE distinct existing verifiers: legacy trust artifact, Compliance Twin evidence bundle, and published Decision Receipt. Preserve individual backend/API semantics and no-account paths only where supported. |

| Published receipt page | app/verify/assurance/[publicVerificationId]/page.tsx; currently has disposition, public-safe scope, receipt hash/Merkle, method/profile versions, synthetic classification, revoked state and conditional assuranceMark. |

| Authoritative public status | lib/assurance/u6-package-service.ts getPublicVerification via GET app/api/verify/assurance/[publicVerificationId]/route.ts. Statuses INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD for valid PUBLIC, INVALID_PACKAGE for failed integrity, REVOKED for terminal revocation; private package NOT_FOUND publicly. Strict public field allowlist. |

| Receipt state/current versus historical | lib/ai-inventory/system-receipt-projection.ts; latest completed evaluation matching packages, PRIVATE/PUBLIC/REVOKED, representative exact package and no older receipt fallback; availability is NOT cryptographic validity. |

| Offline verification | scripts/verify-offline-package.ts, dedicated U6 offline API; internally consistent offline is not independent comparison to HAIEC persisted public record. |

## III. Confirmed public receipt defects — FIX FIRST

**P11-G01 (P1 UI STATUS MISMATCH):** Public API returns INTEGRITY_VERIFIED_AGAINST_HAIEC_RECORD for verified published receipt. The page chooses green/success branch only when verificationStatus === INTERNALLY_CONSISTENT (the offline status). Thus genuine valid public results fall into amber not-fully-established branch. Correct component state mapping to EXACT live API states, without changing verification engine.

**P11-G02 (P1 FALSE SUCCESS HEADING):** Public page heading prints 'Decision Receipt Verified' for every non-REVOKED result including INVALID_PACKAGE. Replace with precise headings: 'Recorded package integrity verified' only for anchored public VERIFIED; 'Receipt integrity could not be verified' for INVALID_PACKAGE; 'Receipt revoked' for REVOKED; 'Public receipt not found' for 404; 'Verification unavailable' for transport failures. Unrecognized status must be UNKNOWN, never green.

**P11-G03 (P2 NOT-FOUND COPY):** Page 404 suggests 'may have been revoked'. In fact canonical REVOKED public IDs continue to resolve as REVOKED; PRIVATE ID is not public. Say 'No published public receipt matches this ID; confirm the ID or ask the issuer whether it was published'.

**P11-G04 (P2 NEAR-FIELD SEMANTICS):** Current title/banner over-emphasizes verified while scope/source caveats appear lower. Put what verified/what not directly under actual integrity status; hash integrity != real-world safety, source authenticity, human deployment approval, native enforcement or legal certification. SYNTHETIC_REFERENCE/UNKNOWN disclosure must be prominent even with a correctly verified hash.

**P11-G05 (P2 CURRENCY AND LIFECYCLE):** Public package PUBLIC/REVOKED and VALID/INVALID are separate axes; authenticated report can also classify CURRENT vs HISTORICAL from an exact evaluation. Do not infer public 'latest/current posture' without an authorized read source. A revoked historical record may remain viewable for transparency, but cannot be presented as active.

**P11-G06 (P2 ROUTE VISUAL INCONSISTENCY):** Public /verify uses a dark marketing hero, /verify/assurance detail uses light theme and different status hierarchy. Harmonize restrained light theme, content width, typography, accessible controls, calm outlined evidence chips while keeping all three distinct verifier modalities.

**P11-G07 (P2 REPORTS HUB DENSITY):** Existing report hub is valuable but dense (evaluation listing, current/historical receipts, legacy compliance). Improve information hierarchy and exact selected-row inspector without dropping data, filtering, exports, pagination, active user permissions, or NO_RECEIPT evaluations.

**P11-G08 (P2 NO SECURITY/PROTECTION OVERCLAIM):** ALLOW / REVIEW / BLOCK are bounded assurance dispositions, NOT runtime action permit/physical block or human deployment decisions. Assurance mark is conditional record-mark eligibility, not certification. A Merkle root and SHA-256 ensure integrity properties, not that a target effect occurred.

## IV. Curated OTHER design review (not production evidence)

Compared the current routes with [2026-10-17 DeepSeek unified UX atlas synthetic](design-references/deepseek/2026-10-17-unified-ux-atlas-synthetic.html), [completed atlas reviewer notes](HAIEC-DEEPSEEK-COMPLETED-UX-ATLAS-REVIEW-AND-UXP03-ALIGNMENT-2026-10-17.md) and [partial atlas critique](HAIEC-DEEPSEEK-UNIFIED-ATLAS-PARTIAL-OUTPUT-REVIEW-AND-ADDITIVE-UX-PLAN-2026-10-17.md).

**Adopt:** calm light background, narrower readable paragraphs, clear eyebrow/breadcrumb, exact-scope status line, compact as-of metadata, current/historical segmentation, keyboard-accessible selected-row details, anchored why/what-not disclosure, mobile-stacked detail, low-noise accent colors and source-bound next actions.

**Do not copy:** synthetic RECIEPTS count or issuedTo fixtures, made-up immutable guarantees, fictional signing, static completion scores, onclick table rows without keyboard support, toast-only verify/download fake actions, role/persona toggles, HTML innerHTML and fake provider verification. Atlas reports screen has a synthetic receipt-only table/inspector and **does not implement public verification**. Current real Reports Hub is evaluation-first and must not lose evaluations without receipts.

## V. UX-P11 design blueprint across THREE real views

### A. Authenticated Reports Hub — /dashboard/reports

Header: 'Reports & Decision Receipts'; subheading 'Review completed evaluations, issued receipts, and precisely what each record establishes.' Include a compact distinction: Evaluation = scoped analysis; Decision Receipt = package integrity/record; Public = external lookup; none alone is deployment approval or target enforcement.

Visible non-destructive section tabs/anchors: **Evaluations / Current receipts / Receipt history / Compliance reports**. Keep original full sections, source groupings, filters, pagination and independent read/error states.

Evaluation row fields: actual system; exact evaluation ID with copy affordance; frozen as-of, origin/source basis; bounded disposition; independent NO_RECEIPT/PRIVATE/PUBLIC/REVOKED receipt state; one prominent exact Master Report CTA. Never substitute an older package for latest evaluation's missing receipt.

Selected detail inspector/drawer: exact package ID, evaluation ID, CURRENT association vs historical, publication state, issued/published/revoked times; proof frontier/exact report sources when available; only show verified integrity after actual verification API result; public verification link only for PUBLIC with persisted publicVerificationId; download only if authenticated and authorized. Mobile stacked card replaces inaccessible wide table; keyboard focus return on close.

Separate legacy compliance reports as self-assessments, not equivalent to verified U6 packages. Empty/loading/failure/unknown/incomplete counts remain honest.

### B. Exact Assurance report / Decision Receipt detail

First viewport: system display label; **exact selected frozen evaluation ID**; snapshot as-of; basis and synthetic classification; ALLOW/REVIEW/BLOCK within evaluated scope; receipt issue/publication state independent; 'Not a deployment authorization or live protection' nearby.

Readable sections: Decision & scope; Evidence lineage & producer participation; five authority planes / DAI and proof frontier; package receipt digest/lifecycle and relevant authorized verification; historical comparisons and current posture as separate projections (Consequence Delta only). Do not duplicate engine or rewrite Master Report/PDF.

### C. Public verification hub + published receipt

Public /verify: neutral light theme. Lead with **Published Decision Receipt** option, then existing Trust Artifact, Evidence Bundle. Three input schemas and endpoints remain separate; no private evidence leak or fake generic verification endpoint.

Public /verify/assurance/[publicVerificationId]: compact HAIEC identity + clear record-integrity state; public ID copyable; time checked distinct from evaluation time and publication date; near-field 'What verified / not verified'. Show public-safe profile/scope, bounded disposition, method/schema version, published/revoked dates and synthetic provenance. Put digests/Merkle in progressive accessible 'Technical integrity details' disclosure. Assurance mark only if returned as eligible, explained without certification. Printing and copying link do not expose private identifiers.

**Exact title matrix:** VERIFIED_AGAINST_HAIEC_RECORD → 'Recorded package integrity verified' + no safety implication; INVALID_PACKAGE → 'Integrity verification failed'; REVOKED → 'Receipt revoked' + terminal state; missing ID/PRIVATE lookup → 'No public receipt found'; server/network error → 'Verification unavailable' + retry. UNKNOWN and offline-internally-consistent cannot turn into a public-verified badge.

Visual: calm white/surface-light, slate type and HAIEC-compatible restrained accent, 16px+ readable body, no massive green 'certification' stamp, no ungrounded 100% secure. Responsive 1440/1280/768/390, keyboard-focus on real buttons/links, accessible disclosures, screen reader status, semantic date and print styles.

## VI. Implementation order and tests

1. Status truth FIRST. Inspect actual PublicVerificationResult and test explicit valid PUBLIC, INVALID_PACKAGE, REVOKED, NOT_FOUND/PRIVATE, unknown transport/error. Assert invalid never renders 'Verified', real valid status never amber not-established. Server/API must remain unchanged unless independently reproduced bug.

2. Adopt visual curation in existing three pages and exact evaluation report owner. Preserve all existing links, reports, exports, legal/synthetic/source caveats. Choose a small shared presentation helper for status/labels; no second receipt store/issuer/verifier.

3. Validate server strict public safe allowlist, no org/system/actor/envelope/private IDs in response; exact publicVerificationId only, publication/revocation lifecycle and offline-vs-public distinction. Avoid public latest-state inference.

4. Focused P11 regression: valid/revoked/invalid/unknown/404/status and synthetic cases; evaluation without receipt; latest versus historical representative, privacy, keyboard/mobile/print, route target and legacy report access, 1440/390 browser + 768/1280 if easy; TypeScript/touched lint, scoped U6 and UI tests.

5. One scoped PR merged to HAIEC Main if gates pass, exact SHA Vercel READY and primary CI, sync Common Repo. If truth fix small but visual scope unsafe, ship public status truth first and leave cosmetic work separately documented; never leave invalid-success title live while expanding design. Stop after P11. P12 usage/cost next, P13 shell/graph later.

## VII. User-requested cross-flow alignment and product decisions

Three distinct audiences and scopes. Assure runs produce bounded evaluation; Verify checks actual frozen record; Authorize human deployment is separate; Protect enforcement/E5.2 custom integration only claims true target effect when bound; Monitoring signal freshness is separate. Use already-shipped engines. The archived visual atlas is curated inspiration only, not source data. This work updates Common Repo planning only; no public receipt ID generated, no customer package exported, no HAIEC app code deployed by this independent review.
