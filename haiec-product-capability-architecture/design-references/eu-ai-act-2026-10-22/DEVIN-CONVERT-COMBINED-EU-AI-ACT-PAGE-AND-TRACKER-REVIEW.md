# HAIEC EU AI Act: combined HTML, minimal Devin conversion and tracker finding
Date: 2026-10-22. This is a ready-to-convert design reference, **not a deployment request**.

## Main reference

**Complete combined HTML**: [eu-ai-act-combined-readiness-evidence-interactive.html](eu-ai-act-combined-readiness-evidence-interactive.html)

**Existing target**: `app/frameworks/eu-ai-act/page.tsx` → `https://www.haiec.com/frameworks/eu-ai-act`.

This is **one integrated composition**, not a second proposal to merge with the old page. It contains existing roles, prohibited practices, transparency, GPAI, Annex III/Annex I families, amended timeline, Article 9–15 mapping including Article 11, evidence families and formal external obligations, combined with new readiness copy, role/use-case selector, interactive Article map, executive dossier, software/consultation/ongoing assurance paths, evidence-badge explainer and regulatory-intelligence reference.

### Minimal Devin request

> Convert **the linked combined HTML** into the existing `/frameworks/eu-ai-act` Next.js route. Use the HTML as the final section structure and copy, preserve the shared HAIEC navigation/footer/tokens and SSR indexable text, isolate the two small interactive selectors, and reuse the current `data/regulatory-references.ts` for dates and `data/developer-products.ts` for any live counts. Keep the existing authenticated `/compliance/eu-ai-act/wizard` CTA and working `/contact` conversion path. Badge, tracker and dossier are evidence-scoped, not legal-certification claims. Do not rebuild the page from scratch, invent more offers, introduce a new legal/compliance engine or publish an automatic compliance percentage. **Small focused PR only. No deploy, no push/merge to main, and no broad test suite.** A build/syntax pass and a quick responsive/links/forms check are sufficient for the PR handoff.

Commercial CTA hierarchy: **Check Readiness in Software** (existing authenticated and plan-gated wizard), **Explore a Scoped Readiness Review** (existing contact, not an invented new pricing tier), and optional **Ongoing Enterprise Assurance**. Do not claim the readiness questionnaire performs evidence-connected Article compliance tests by itself. Human technical review and actual issued artifacts are separate products.

Public copy: positive, confident, source-qualified. No defensive qualification language dominating the hero. Preserve amended dates and official EUR-Lex/EC reference links. Badge example uses **EXAMPLE ONLY**, not issued evidence, and must not claim EU certification. If a real issued artifact badge is later used, it must derive from the exact actual artifact ID and its current status.

### Source-verified offering
- `app/compliance/eu-ai-act/wizard/page.tsx` exists: authenticated, session and tier gated, allows new/resumed assessments and uses `/api/eu-ai-act/assessment/create`.
- `lib/eu-ai-act/scoring-engine.ts`: provider/deployer/importer/distributor role-scored questionnaire readiness, **product heuristic not legal conformity**.
- `lib/eu-ai-act/artifact-generator.ts`: report artifact/hash/ID with MARPP hook. Test end-to-end issuance and applicable verifier before claiming an external record is validated.
- `app/api/badge/[id]/route.ts` and `app/artifact/[id]/badge/page.tsx`: artifact-specific badge and embedding implementation. Do not repurpose for a blanket EU AI Act "compliant" badge.
- `app/frameworks/eu-ai-act/page.tsx` and `metadata.ts` both define marketing metadata; select one actual Next.js metadata owner when converting.

## Tracking and public violation systems: what was found

### 1. Public AI Penalty Tracker: real, deployed, **cross-jurisdictional**, not EU-only
- Public page: https://www.haiec.com/penalty-tracker, rendered and browsable October 22.
- Source: `app/penalty-tracker/page.tsx` loads `public/data/ai-penalty-tracker.json` from disk, rendered by `PenaltyTrackerClient.tsx`.
- Dataset metadata last updated **2026-07-28**, with **10 final/verified enforcement-event entries, 1 active litigation entry, 5 statutory exposure entries**, collectively 16 items. These are distinct event types and should NOT be summed as "16 issued penalties".
- The EU AI Act item is in **statutory penalty_exposure**, NOT the enforcement-events array: no recorded actual EU AI Act fine is established by this dataset. Public text presently says "Full enforcement from Aug 2 2026" and Annex III rules due then. This is **outdated** after EU 2026/1744. Treat as P0 factual/content fix if the tracker remains publicly accessible. Replace with source-linked current phased timeline; do not invent EU fines. Remove/unqualify the ungrounded generic "HAIEC Prevention YES" causal attribution for statutory exposure.
- Updater exists: `tools/article-generator/scripts/update-penalty-tracker.mjs` consumes FrontOfAI/RSS and modifies JSON, but repository presence does NOT prove automated recurrence is enabled or publishing fresh data. Inspect actual workflow, source review and refresh job before promising daily/continuous monitoring.

### 2. Recent Violations API: not the tracker database
- `app/api/violations/recent/route.ts` contains **hard-coded RECENT_VIOLATIONS** from GDPR, U.S. discrimination cases and other statutes; the label "real AI violation data from penalty tracker" in code does not make it live/synchronized. Search confirmed no live `findMany` fetching those events in this route. Its live public response was not verified via anonymous web access.
- Do not use this endpoint to generate an EU AI Act violation counter or real-time incident ticker without reconciliation and source governance.

### 3. Regulatory Alerts / FrontOfAI news: adjacent working source components
- `app/dashboard/regulatory-alerts/page.tsx` is a client dashboard intended for authenticated news/regulation alerts, not a public enforcement registry.
- `app/api/regulatory-news/route.ts` proxies the FrontOfAI briefing API, using an environment key, deterministic relevance scoring and categories including governance-regulation/security-riskwatch. Source exists but public production fetch/runtime/auth was not established in this review. Treat as **conditional feed**, not guaranteed alerts, live enforcement discovery, authoritative classification or every EU violation.
- This is the appropriate *regulatory-intelligence* platform direction if source relevance, publication date, status, editorial human review and owner notifications are qualified later. Do not embed stale or unmoderated news in the main EU buyer hero.

### 4. The EU AI Act artifact system is distinct
The existing `lib/eu-ai-act/...` questionnaire, assessment states, scored gaps, reporting and artifact generation are NOT a live public EU AI Act infringement-tracking or fine-detection engine. Keep roles and product boundaries separate.

**Recommendation:** Put a compact "Regulatory Intelligence" card on the page linking the existing /penalty-tracker after its P0 EU item correction and pointing to /regulations for authority. Do not build another tracker, do not place an unsupported EU violation-count badge, and do not make dynamic data part of the initial Next.js conversion.

## Small acceptance
- Article 9–15 and all current obligation families remain in SSR-readable text.
- The roles and Article controls change visible content and work by keyboard.
- Amended AI Act milestones are correct: Aug 2026 general/transparency, Dec 2026 specified transitions, Dec 2027 Annex III and Aug 2028 Annex I. Keep official references.
- Software CTA goes to actual `/compliance/eu-ai-act/wizard` and consultation to actual `/contact`.
- Badges reflect evidence/issued artifact scope, never EU accreditation.
- No real-time violation claim, no inferred fines, no auto-certification.
- No deployment. No wide regression/testing request.

## Vercel handling
The user requested adding the design in Vercel **without deploying**. The available Vercel design-import tool requires URLs hosted on `claudeusercontent.com` and rejected the GitHub Raw HTTPS URL. Do not silently claim a Vercel import succeeded. The self-contained HTML is committed and ready for Devin to add to the Vercel-connected Next.js repository as source in one focused PR. Do not deploy or merge automatically.
