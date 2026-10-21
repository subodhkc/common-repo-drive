# PR #2316 merged | Independent post-merge source review, residual fixes and next HAIEC website work

**Reviewed:** 2026-10-21, immediately following Devin's reported P0 sitewide release-gate work. **Website PR:** https://github.com/subodhkc/haiec-website/pull/2316, merge commit https://github.com/subodhkc/haiec-website/commit/4faeb4ea3e94a832a19b9aaa0518b4da473003bc. GitHub confirmed commit exists, description aligns with changes, and PR #2316 lists 18 changed filenames (some deleted routes and unchanged helper files), despite Devin's report of ESLint checks on "13 touched files" (likely linted remaining source files rather than total PR files). Do not conflate touched file count and lint target count.

## Decision
**Classify W0 SOURCE MERGED / PARTIALLY ACCEPTED, not globally CLOSED.** PR #2316 is a valuable focused corrective release, not a proof every production security/legal claim is operationally true. Devin independently reports that production was already serving updated /what-is-haiec and /why-deterministic, resolving the previously cached crawler concern. This is not by itself proof **the new PR #2316** has deployed. GitHub combined status for merge commit was **Vercel pending** when checked after merge; no workflow run was returned by PR-triggered workflow wrapper. Do not call this a failed build. Require direct alias/deployment readback once CI finishes.

## Verified in post-merge Main
| Topic | Confirmed observation | Status |
|---|---|---|
| PR #2316 | Merge commit 4faeb4ea3e94a832a19b9aaa0518b4da473003bc exists and includes /marpp, /privacy, /evidence-generation, /developer-security, redirect and referrer edits | MERGED |
| /privacy | Seven-year audit and state-transition logs, unverified evidence 90 days, verified evidence 2 years, locked evidence seven years, visible scan-history window per plan now appear in app/privacy/page.tsx | SOURCE COPY FIXED, legal/operational verification remains |
| /marpp | Main removed universal 100% immutability badge, automatic pass-audit guarantees and Business-tier CTA, describes named database controls and ASSURE offer | SOURCE COPY IMPROVED, additional checks below |
| /evidence-generation | Body removed several guessed costs, framework cardinalities and one 95%-saving bullet | PARTIAL, metric remains in hero below |
| /developer-security | H2 "Three Standalone Checks", no mandatory connector arrows in ArchitectureDiagram | SOURCE FIXED |
| /solutions/ai-security -> /ai-security | next.config.js permanent redirect; file implementation removed and internal links updated | SOURCE REDIRECT PRESENT; Devin reports 308 observed |
| /how-to-use -> /docs/getting-started | next.config.js permanent redirect; file implementation removed and internal links updated | SOURCE REDIRECT PRESENT; Devin reports 308 observed; Next.js permanent redirects commonly return 308 and are not failed 301-intent mappings |
| GitHub Action chip | Devin verified existing released v1 (distinct from unreleased v2) | NO FIX NECESSARY, preserve product distinction |
| ISAF v2 | Devin verified public "author-issued manuscript, DOI forthcoming" | NO FIX NECESSARY |
| Runtime testing docs | Devin reported corrections already landed in PR #2311 | Preserve; independently smoke later if critical |

## Three concrete residual defects from independent Main review
### R1 (P0 small, high confidence): unsupported numbers still on /evidence-generation
**Source:** app/evidence-generation/page.tsx lines ~75-94, hero Stats Bar: 
- `10,000+` "Evidence Items Generated"
- `95%` "Time Saved"
- `9+` "Compliance Frameworks"
- `6` "Frameworks Supported"
The 95% saving and cumulative evidence total remain publicly renderable, despite PR summary saying "Save 95%" removed. Even two framework counters conflict as presentation ("9+" versus "6") unless clearly different defined units. Require exact measure, date, denominator, source evidence and approved customer attribution; absent proof, replace entire stat rail with qualitative scope-backed statements (qualified evidence, source provenance, supported framework mapping, explicit limitations). Avoid speculative measured benefit or per-framework counts. Other remaining absolutes include "Cryptographically Verified", "Audit-Ready Format", "Complete audit trail" that need exact producer/release scope qualification. No broad redesign.

### R2 (P1 tiny, high confidence): duplicate route redirect definitions
**Source:** next.config.js: /how-to-use appears at approximately lines 428 and 519; /solutions/ai-security appears at approximately lines 514 and 975, identical destinations/permanent true. Later definitions were appended by PR despite earlier existing ones. Keep exactly one redirect per source, validate single 308 response and destination 200 and no loops, no wider route architecture churn. The duplication is a maintainability/route-lint issue, not currently a confirmed broken redirect.

### R3 (P0 operating proof, owner-gated): retention policy is declarative, not verified as fully enforced
**Source:** lib/audit/data-retention.ts declares `AUDIT_LOG: 2555`, `STATE_TRANSITION_LOG: 2555`, `EVIDENCE_UNVERIFIED: 90`, `EVIDENCE_VERIFIED: 730`, `EVIDENCE_LOCKED: 2555`, and utility helpers `createRetentionMetadata`, `scheduleDeletion`, `findEntitiesForPurge`, etc. This verifies the application's **declared retention policy**, not a running production purge job, correct ORM table/class mapping, exception/legal holds, or independent legal requirement that all logs actually exist for seven years. GitHub search found `scheduleDeletion` only in lib/audit/data-retention.ts and lib/audit/index.ts; this is not a complete proof there is no separate job and does not establish that the policy is enforced. Scope an explicit **read-only retention execution-path trace**: schedule/job -> target Prisma models -> delete/preserve logic -> legal hold -> actual production config/execution outcome when permission allows. Require privacy/legal owner review, and if policy is merely aspirational, revise customer guarantee wording to what is operationally established. Do NOT change retention constants to reconcile marketing. Actual data retention legal obligations need counsel, not guessed default.

### R4 (P1 owner-gated): remaining MARPP universal and regulatory phrasing
**Source:** app/marpp/page.tsx still says "Database enforces for ALL connections" (~267), "Auditors trust DB constraints more than code" (~271), and regulated industries require MARPP-style logs for HIPAA/GDPR/FedRAMP (~311). While narrower than earlier copy, these still deserve qualified source/legal owner review: migrations and table constraints are scope- and privilege-dependent, and frameworks do not demand this proprietary method by name. Also verify "MARPP directly addresses requirements" only as appropriate mapping, not mandatory certification. Avoid overclaiming protection against privileged operators. Can bundle copy with R1/R2 after authorizing precise edits.

## Open owner decisions (unchanged, do NOT close by code review)
- Legal/privacy authorization of amended 7-year vs 90-day data retention, exact contract and purge operations.
- SOC 2 provider-specific attestation, HAIEC own audit posture and evidence owner on /trust.
- /controls vs /assurance-controls route canonical/indexability: distinct DB-backed controls browser, so do not redirect without owner decision.
- /marpp and /evidence-generation indexability/sitemap/legacy route purpose.
- Whether pricing tier "included" Monitor/Kill Switch/MARPP means license enabled or actual controls operating; reuse 76-activity UI/API/MCP evidence/owner inventory, don't re-research whole site.

## Next execution: micro-correction, then W1 enterprise proof journey
1. **Micro PR:** Remove/qualify residual /evidence-generation hero statistics and unfounded absolutes, deduplicate only the two redirect sources, make only legally approved /marpp wording adjustment. Focused lint/type and redirect + SSR page check only. Record exact links and visible textual absence. Do not repeat PR #2316, test entire 61-page site or overwrite improved What Is/Why Deterministic.
2. **Owner-readback** (can occur in parallel): trace operational retention schedules, table targets and real SOC 2 status; record SOURCE_DECLARED vs PRODUCTION_ENFORCED vs LEGAL_APPROVED, do not mark merged doc change sufficient.
3. **W1 acceptance proof journey:** Homepage -> Why Deterministic or What Is HAIEC -> Platform/Assurance -> frozen evaluated Kestrel report -> Enterprise POC form, and eligible authenticated MCP path. Validate direct public/browser production on finalized commit, copy & links, honest source/observation/authority distinctions, no new feature. Emit route-specific acceptance table.
4. **W2 developer open-source** only after W1 or an early blocking discrepancy: Page #25, #27, #28, #29 already have implementation handoffs. No new research plans. Confirm published package/CLI, 3+1 MCP write gate, optional audit, Semgrep requirement and first result. Source package action.yml fix is separate controlled repo task.

## Update the canonical status ledger
Common Repo file WEBSITE-61-PAGE-LIVE-SOURCE-PLAN-RECONCILIATION-AND-NEXT-RELEASE-PRIORITIES-2026-10-20.md should now mark W0 `PR2316_SOURCE_MERGED`, `POST_MERGE_DEPLOY_PENDING`, `RESIDUAL_MINI_PR`, `OWNER_VALIDATION_PENDING`. The 31-page register should retain planning history but never present P0 as untouched or full deployment acceptance completed.
No production change or CI completion was performed in this ChatGPT review. 
