# HAIEC NYC LL144: Live Page Review and Prioritized Enhancement Plan

Reviewed: 2026-10-22. Scope: existing canonical `https://www.haiec.com/solutions/nyc-ll144-compliance`, companion service and guide routes, approved 60KB interactive concept already in Common Repo. No website code changed by this review.

## Relevant links and design owner
- Current live buyer URL: https://www.haiec.com/solutions/nyc-ll144-compliance
- Interactive HTML design: [nyc-ll144-enterprise-audit-software-monitoring-interactive.html](nyc-ll144-enterprise-audit-software-monitoring-interactive.html)
- Existing Devin design and form handoff: [NYC-LL144-INTERACTIVE-PAGE-DEVIN-HANDOFF.md](NYC-LL144-INTERACTIVE-PAGE-DEVIN-HANDOFF.md)
- Source-checked broad plan: [WEBSITE-NYC-LL144-ENTERPRISE-SOFTWARE-AUDIT-SERVICE-VERIFIABLE-EVIDENCE-PLAN-2026-10-22.md](../../WEBSITE-NYC-LL144-ENTERPRISE-SOFTWARE-AUDIT-SERVICE-VERIFIABLE-EVIDENCE-PLAN-2026-10-22.md)
- Current alternate sales page https://www.haiec.com/services/nyc-bias-audit
- Old keyword-heavy guide https://www.haiec.com/nyc-ll144-compliance
- Research: https://www.haiec.com/research (NYC bias research DOI 10.5281/zenodo.18056133)
- NYC legal authority: https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
- Public verification UI: https://www.haiec.com/verify/nyc-ll144 (source exists, public web fetch unsuccessful in this research; test actual HTTP/UI)
- Companion `nycll144euaiact.com` did not load through the external reader; do not assume its content or cross-domain SEO role.

## 1. Live audit: keep versus change

### Existing live strengths to PRESERVE
- Helpful accurate introductory coverage of AEDT, independent bias audit, candidate notice, public Summary of Results.
- Three independent technical workflows: formal audit calculations, scheduled monitoring/readiness, notices/disclosure, and an express statement that monitoring is not the formal independent audit.
- Specific webhook adapters (Greenhouse, Lever, Workday), CSV and scoped API list.
- Four-step data-to-publish method, explicit scope and missing-evidence discipline.
- /api/contact based lead form with working server-side Resend, Prisma contact storage, rate limiting, optional captcha, spam controls and issue-ticket creation.
- Existing SEO canonical URL and useful inbound/internal references.

### Buyer conversion gaps CURRENTLY visible
| Severity | Observed current live page | Why it loses buyers | Target enhancement |
|---|---|---|---|
| P0 | H1 is 'Evidence-ready support for NYC Local Law 144 bias audits'; it does not clearly sell HAIEC's professional service | Ready-to-buy HR/legal lead sees only audit preparation | Lead with service + evidence and US / former Fortune 100 professional positioning |
| P0 | One generic 'Request a Local Law 144 Scope Review' CTA/form | Auditor firm software leads and enterprise monitoring buyers are not distinguished | Three buyer intents with distinct CTAs, contextual input fields and follow-up templates |
| P0 | No availability-specific form or pre-booked capacity language | 'Book consultation' elsewhere conflicts with request-only scheduling | **Request Audit Availability**; preferred window, first/renewal, AEDT scope; no slots invented, never auto-confirm booking |
| P0 | No first-class visual of deterministic packet / HAIEC issued public Artifact ID | Differentiator is hidden behind internal concepts | Three-document evidence viewer, real verification portal when runtime-proven, separate public Summary of Results |
| P1 | ATS/API catalog dominates before tangible deliverable and business result | HR / legal / procurement must scroll through tech | Put 'what you get', engagement modes, evidence specimen and form before the full integration appendix |
| P1 | No directed auditor firm offer | Potential software recurring revenue is omitted | 'Software for independent auditors' with actual workflow examples, qualified multi-client demo rather than unverified enterprise feature |
| P1 | Monitoring framed as one three-workflow card, not an enterprise buying path | Hard to evaluate ROI, integrations, operating cadence | Dedicated enterprise monitoring showcase: source coverage, evidence freshness, period comparison, exceptions, renewal evidence |
| P1 | Published methodology paper not featured | Missed research-based trust and unique content | Research card with accurate paper scope: deterministic linguistic bias in job descriptions, NOT formal statutory selection-rate audit |
| P1 | Page promises 24-hour responses in form | Promise needs an actual staffing SLA and conflicts with capacity review | Define response expectations only if operationally committed; default 'we will review and confirm scope' |
| P2 | All intro copy about requirements, little distinction between employer and vendor | Vendor-led enterprise procurement path is hidden | Add one concise 'HR-tech/AEDT vendor' secondary use case under enterprise/auditor offerings |
| P2 | Current visuals and FAQ lack outcome-first audit specimen | Buyer must imagine the output | Show anonymized/illustrative report, transparent method, sample user-controlled ratio and provenance |

### Cross-page blockers: high value but limited scope
- /services/nyc-bias-audit currently markets ten business days, fixed $7,500 and $12,500, nine-file packs, and 'certified' deliverables with dramatic penalty projections. These claims differ from capacity-checked, per-engagement service terms on the canonical solutions page. Review current accepted commercial price/time/artifact contract first, then align the **material** contradictions. Do not create more arbitrary packages.
- /nyc-ll144-compliance (guide) still claims '$299/mo', 'fines being issued now', 'each candidate = separate violation', and calculator-style broad exposure claims. Preserve its informational SEO value but correct material inaccuracies and link to the canonical buyer page; avoid blanket redirect without Google Search Console review.
- /solutions page contains categorical 'candidate data never stored in plaintext' and 'works with any ATS' claims. Qualify against the exact chosen integration/data fields; don't promise properties outside supported ingestion paths.
- /services and legacy documents differ about who issues independent findings; current company service offer is professional bias audit plus platform. Avoid a customer-facing independence defense, but confirm actual assigned professional and signoff internally before issuing any 'signed' artifact.
- Exact public /verify/nyc-ll144 runtime access was not independently observed. Source route does not equal proved valid customer issued artifacts. Include an honest link/explainer and stage a real representative E2E test for issuance, status, redaction and integrity.

## 2. Revised buyer-first storyboard (retain the existing interactive HTML as visual reference)

N0 **Hero**, above fold: 'NYC Local Law 144 bias audits. Evidence you can verify.' Subhead: 'Qualified US-based bias audit service, software for audit practices, and enterprise monitoring. Deterministic calculations, an evidence package, public Summary of Results support, and a HAIEC-issued Artifact ID.' Trust: US-based, former Fortune 100 experience, published method; no false NYC-government accreditation. Primary 'Request Audit Availability'; secondary 'Auditor Software Demo'; small text 'Enterprise Monitoring'.
N1 **Four deliverable outcomes**: Professional audit findings; Deterministic Audit Evidence Package; Public Summary of Results; Verifiable HAIEC Artifact ID. Distinguish independent statutory audit from ongoing software.
N2 **Who are you / choose service**: employer audit, auditor/audit firm software, enterprise continuous monitoring. The selected buyer route should be reflected in the CTA and conditional form with a shared sales attribution. Include small HR technology vendor explanatory row, not a fourth distracting hero offer.
N3 **Inspectable evidence dossier**: three separate tabs: statutory statistical report (selection/scoring/impact ratios and unknown-group counts), deterministic versioned manifest, public reference status. No invented real issued ID; use published approved sample or 'how verification works'.
N4 **Audit-service availability and process**: show five engagement phases and modest near-page form CTA; explicitly request timeframe, audit type and AEDT count, rather than an artificial live booking calendar.
N5 **Auditor professional software**: practitioner needs more than ratios: accepted data basis, rule/version freeze, repeat run manifest, audit pack, reviewer signoff, multi-engagement capabilities ONLY when source-verified, export/review handoff. CTA 'Request Auditor Software Demo'.
N6 **Enterprise monitoring**: source -> scheduled metric/check -> change and signal -> owned review -> renewal evidence. Use clear measured data freshness, actual schedule and gaps. CTA 'Request Enterprise Monitoring Demo'. No live/real-time implication from a static illustrative graph.
N7 **Statistics & method**: mini impact-ratio interactive example under method rather than before key enterprise personas, plus links to official requirements and detailed guide.
N8 **Credibility and paper**: concise US/Fortune 100 experience, Zenodo 2025 technical research with an accurate separation of job-description linguistic bias from legally specified selection-rate categories. Do not manufacture journal-peer review or customer logos.
N9 **Statutory duties + FAQ**: annual independent audit within one year before use, notice at least ten business days, public Summary of Results and relevant record facts. Favor precise answers over fear-based fines.
N10 **Intent-aware short lead form**: keep 3 pathways: audit-availability / auditor demo / monitoring demo, separate required fields. Actual Resend and ticket integration on server. Thank you means REQUEST RECEIVED, not scheduled or legal compliance delivered. Repeat primary CTA after FAQ.

## 3. HTML design review: refinements before production Next.js conversion

- The 60KB self-contained HTML in Common Repo already provides polished light/dark theme, responsive sections, buyer tab selection, three evidence views, calculator, monitoring SVG, research and conditional form. **Do not rebuild visually from scratch.**
- SEO: preview H1 omits 'NYC Local Law 144' but the eyebrow includes it. Consider SEO-explicit H1 'NYC Local Law 144 bias audits. Evidence you can verify.' and keep auditor/monitoring promise in deck. Validate with Search Console before replacing original title.
- Accessibility: current tab panels use one changing content panel; preserve keyboard arrow behavior, but ensure each tab has a stable unique id/aria-controls in Next.js and hidden panels are truly non-focusable. Server-render ALL important buyer text, not only default tab content, so crawler/no-JS users see auditor and monitoring value.
- Small calculator fix: current input allows non-integer counts although helper says whole counts. Reject fractional selected/considered and enforce integer, cap/NaN/out-of-bound rules. Use described reference-group methodology for production formulas and avoid generic two-population teaching as a complete statutory example.
- Sample table includes sex-neutral 'reference/comparison' groups for teaching, but the statutory audit demands relevant sex/race/ethnicity/intersectional categories and source/unknowns; provide a compact rich specimen with unknowns and explain that sample is illustrative.
- The checkbox says 'I agree to be contacted' but is not a privacy policy contract. Link the existing Privacy Policy; do not change broad legal pages without critical issue. The form is presently a design-only front end and shows a preview note, not server-submitted.
- Ensure all CTA links to '#request' select the correct intent, even from footer. Current JS handles data-intent-link, preserve it. For production, include intent in server-side email type and CRM/ticket, not only the browser-selected button.
- Avoid shipping duplicate standalone site navigation/header/footer or client-side-only H1 into the actual Next.js route. Use approved public dual-theme tokens and existing nav. No unnecessary external animation dependencies.
- Keep sophisticated document visual; no generic compliance shield wall, giant speculative fine counters, or fake cryptographic 'VERIFIED' green number.
- Put 'Check Audit Availability' in first screen and ensure good mobile interaction at 390/768/1440. Consider sticky mobile CTA ONLY if it does not obscure content/forms and respects keyboard/focus.

## 4. SEO and content ownership

Canonical `https://www.haiec.com/solutions/nyc-ll144-compliance`: **transactional NYC LL144 audit services + auditor software + enterprise monitoring**.
Proposed title: 'NYC Local Law 144 Bias Audits, Auditor Software & Monitoring | HAIEC'.
Meta: 'Request availability for US-based NYC LL144 bias-audit services. Explore deterministic audit software for auditors, enterprise monitoring, evidence packages, public disclosures and HAIEC Artifact ID verification.'
Suggested one H1 as above. Clear 'Request Audit Availability' CTA.

Supporting search intents / route ownership:
- /services/nyc-bias-audit = deeper signed professional service details (keep unless query-level cannibalization suggests merging).
- /nyc-ll144-compliance = informational legal requirements guide, not a second conflicting pricing/transactional landing page.
- /research = bias-method paper and legitimate technical authority.
- /verify/nyc-ll144 = functional issued-artifact lookup.
- Qualified auditor practitioner demand may merit a separate dedicated '/solutions/auditor-software' page only AFTER Search Console and real inbound demand; do not create now.
- Companion domain nycll144euaiact.com: external fetch unavailable. Keep it separate until actual content/canonical/ownership confirmed. No immediate duplicate HTML publishing or automatic cross-site canonical/redirect.
- Add meaningful links from the research paper topic, the professional service page and the informational guide into the canonical solutions page.
- Use SSR HTML text, accessible table/figures, real first-party artifact references with provenance, current regulation links, Organization metadata only from verified fields. No rich result / top ranking promises.
- Source of law: NYC DCWP official page (annual audit, public disclosure, ten-business-day notice). December 2025 NY State Comptroller 17 potential noncompliance instances among 32 *examined companies*, not a population compliance rate or proof penalties already being issued.

## 5. Measurement and sales operating model

Three funnels:
1. **Professional Audit**: landing -> availability inquiry -> scope+capacity confirmation -> quote/SOW -> signed engagement -> issued reviewer findings -> renewal.
2. **Auditor Software**: landing -> qualified firm demo -> workflow fit and evidence-format validation -> trial/pilot/contract (if product allows) -> seats/firm expansion.
3. **Enterprise Monitoring**: landing -> monitored-system interest -> integration/evidence readiness -> pilot -> licensed monitored workflow -> annual audit renewal and additional systems.

Measure genuinely: nonbrand Search Console impressions/CTR by query and page, lead type mix, form start/completion, qualified lead rate, capacity acceptance, demo held (not just requested), scoped quotes, signed audit service rate, annual renewal and recurring software expansion. Define baseline before proposing numeric performance goals. No candidate personal details, exact evidence hashes, employer confidential context or protected-group data in public analytics.

## 6. Devin focused work order: not deployment authorization

P0: refresh Main; reconcile actual service/price/time/claimed signoff source, verify contact/Resend/honeypot and security routes; test public verification with issued sample; establish approved copy vocabulary.
P1: convert approved 2026-10-22 HTML design into existing Next.js route, SSR primary copy, isolated client controls, shared nav/theme. Keep current good statutory and API material in disclosures rather than deleting.
P1: implement three intent-specific paths via existing /api/contact service with reviewed schema, Resend templates, internal routing and record IDs. Audit service = capacity request, not booking. Preserve spam/CAPTCHA and no-PII analytics.
P1: improve evidence specimen and calculator guard for integer counts; label example clearly and link to real artifact verifier only after end-to-end success.
P2: reconcile only material contradictory commercial/legal language on /services and /nyc-ll144-compliance; no new generic sitewide compliance rewrite.
P2: QA light/dark, desktop/tablet/mobile, keyboard, no-JS content, correct help and state messages, form successes/errors, data sanitization, true backend delivery and SEO/canonical. Stage screenshots and confirm implementation against live.
P3: only after data shows sustained demand, consider niche landing for audit firms or separately maintained professional practice software.

Acceptance:
- HR buyer immediately sees service and availability request.
- Auditor finds software demo without employer-specific AUDT fields.
- Enterprise buyer finds monitoring and scope caveat without implying statutory replacement.
- Artifacts explained precisely: issued signed findings, deterministic package, employer public Summary of Results, HAIEC Artifact ID.
- No fabricated appointment, guaranteed 10-day turn, old stale price, fake verified number or invented ranking effect.
- Actual backend inquiry is recorded, correctly categorized and internal follow-up has enough details.
- Existing route survives, content and links preserved, production release only after explicit authorization.
