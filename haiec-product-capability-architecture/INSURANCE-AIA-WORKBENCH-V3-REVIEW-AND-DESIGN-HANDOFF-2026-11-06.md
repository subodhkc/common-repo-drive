# HAIEC Insurance / AIA Workbench v3 — Review and design handoff

**Status:** Self-contained interactive HTML preview completed and checked. No insurance evaluation engine, insurer/AIA connection, ServiceNow integration, production claims controls, actuarial scoring, or website deployment authorized or implemented.

**Versioned source:** [Insurance Workbench v3 on Drive](https://drive.google.com/file/d/1Wr5jb8nQBqOLA2rb2MM9nBFKVfdmA4lq/view); [Insurance Domain folder](https://drive.google.com/drive/folders/1Ur3Bw8ojyXaD7sUSuNw6yGKbSzSlNF8r).
**Prior v2:** [preserved](https://drive.google.com/file/d/1mRWCWOgcc6sfQGlsVlgjdOeBq7AdN_C0/view).
**Original research:** [Insurance taxonomy and HTML blueprint](https://drive.google.com/file/d/1ARhlR1-Kbqid--VK9UOmnuFit559kQwG/view).

## Critique assessed against actual v2
- Correct: navigation overload, 3-state comparison initially too far down, commercial tracks didn't configure scenarios, repeated POC labels, small captions, need printable/shareable brief and deeper evidence Passport.
- Corrections: v2 has **eight AIA public-name-mapped synthetic scenarios and eight general-domain scenarios**, not the pasted critique's 14+6; source text had **27 case-insensitive 'POC pending' mentions**, not 30+. Initial HTML/hero and static sections are HTML; it is the interactive content, not the entire site, that requires JavaScript. There is no mandatory external Google Fonts CDN.
- The workbench is a **sales/demonstration experience**, not a HAIEC canonical evaluation or production AIA assurance claim.

## V3 enhancements delivered
1. **Entry paths** immediately after hero: Business leadership (4-scene quick tour), Technology (opens AIA claims in technical perspective), Risk / Compliance (governance and technical assurance).
2. **Hero three-state preview**, with animation when motion is allowed and immediate link into full State 00 / 01 / 02 comparison.
3. **Five evidence planes** elevated to a near-top ribbon and workbench header: requested, policy authorized, effectively granted, code capable, observed.
4. **Three commercial tracks now take real actions**: Assure selects claims workflow; Enable selects proposed autonomy and release model; Insure selects the specialist technical-risk dossier model.
5. **Scenario URL state** persists case, illustrative limit, perspective, journey state and insurance-model selection. 'Copy scenario link' works via clipboard/fallback; when local file history is restricted the constructed link still carries the query.
6. **Print / Save one-page brief** opens the browser print-to-PDF flow and populates a focused synthetic report with scope, consequence, threshold, five evidence questions, evidence requirements, POC next steps and non-execution boundaries. Keep raw JSON as optional technical export.
7. **Passport mock-up** now displays version label, unsigned/not-issued state, no real expiry, action scope, evidence availability, runtime status, change record and confidence qualification. It does **not** fabricate hashes, signatures, verification credentials or insurer underwriting decisions.
8. **Platform mechanism:** source/code and IAM evidence, authority comparison, runtime only when connected, repeatable control evidence; preserves initial findings from first eligible source.
9. **Fair GRC/Control Tower comparison:** recognizes third-party discovery, governance, runtime and authority capabilities. HAIEC differentiates through qualified consequence-specific technical path/evidence analysis, subject to real integration availability.
10. **Insurance lifecycle** is a horizontal stage rail with a working 'Inspect this workflow' action; proposed engagement path uses Define → Evaluate → Decide without fictitious success guarantees.
11. Reduced repeated **'POC pending'** to three static-authoritative scope locations; AIA scenario evidence uses **'Not connected'** per source. Added `noscript` static summary, skip link, stronger caption legibility, reduced-motion behavior, and consistent `aria-live` structure.
12. Existing AIA solution mapping, 16 scenarios, ontology, governance, ServiceNow architecture, nine-scene full tour, four-scene quick tour and all original domain content remain available.

## Product truth boundaries
- AIA solution names and published metrics are public. All action paths, thresholds, reachability, policy facts, event traces, assessments, source control evidence and displayed Passport are fictional examples.
- The comparison's State 02 is a **proposed bounded design**. No insurer payment, claim change, protection enforcement, human authorization or HAIEC domain evaluation occurs in this HTML.
- Source availability matters: Not connected does not mean not executable. Dollar thresholds in non-payment scenarios are **illustrative exposure proxies**, not delegated payment authority or actuarially derived risk scores.
- AIA is primarily life/health; specialty AI liability/insurance products require appropriately licensed underwriting/reinsurance partners. HAIEC is a technical evidence contributor, not the insurer.
- ServiceNow AI Control Tower and AI Passport already have governance, inventory, authority and oversight functions; never claim HAIEC uniquely provides those. Integration remains future POC.
- ISAF/DAI/CSM6, risk and control libraries, framework mappings are HAIEC research/technical foundations, **not** certification or insurance suitability results.

## Validation and delivery
- Standalone HTML parsed successfully; inline script passed `node --check`.
- Chromium test with HTML injected directly checked 1440, 768, 390 widths: zero page JavaScript errors, no horizontal overflow, successful executive and technical visitor paths, scenario/threshold switching, quick-tour open/close, insurer model track change, sample brief generation.
- Shared query hydration tested with `case=aia_uw&limit=50000&view=technical&state=2&model=carrier`. Environment blocked local/web navigation, so absolute URL copy/reopen in an actual hosted public origin is **not independently acceptance-tested**.
- Browser `window.print()` is implemented; exact one-page physical pagination remains to be reviewed on the eventual browser/printer, not falsely guaranteed.

## Next.js conversion guidance — separate future authorization
- Preferred routes: `/solutions/insurance` buyer page and `/demo/insurance` deeper workbench. Preserve premium light HAIEC theme, static SSR indexable copy, client-only interactivity, keyboard accessible tour controls, touch-scrolling panel and reduced-motion.
- Move inline script into Next.js client module(s) and generated public UI into stable React components; preserve all behavior instead of wrapping the HTML in one iframe. Validate query state, print layout, actual fonts and 390/768/1440 breakpoints in deployed origin.
- No new insurance semantic engine, AIA integration, risk score, fake AIA receipt, source-hash, insurer certificate, live monitoring claims or ServiceNow connector during HTML conversion.
- No deployment, Main push or production website mutation authorized by this work.
