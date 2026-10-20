# HAIEC Self-Learning HTML Crash Course: Independent Validation and Release Review

**Date:** 2026-10-20  
**Reviewed artifact:** [HAIEC Complete Crash Course](HAIEC-Complete-Crash-Course-2026-10-20.html)  
**Status:** REVIEW ONLY, deck unchanged. **Verdict: good internal training draft; address P1 fixes before a public learner-facing release.**

## Evidence and checks performed

- Read the full 171,135-character standalone HTML and inspected all slide titles, specific technical chapters, the nine DAI dimensions, seven DAI statuses, ISAF v2, 45-control list, monitoring, MCP, service links and quiz answers.
- **59 slides across eight chapters**, with **132 minutes of indicated reading time** summed from the slide labels, **35 unique outbound URLs**, 119 linked instances and three answer-explanation quizzes. Contains a capstone worksheet, glossary, chapter index, source links and print styling.
- Structural: exactly 59 slide sections and unique slide IDs; no missing headings; HTML `lang=en`; slide-progress and selected chapter; no externally loaded scripts or fonts; external links use `noopener noreferrer`.
- Executed HTML JavaScript in Chromium using Playwright `set_content`, verified starting slide, index modal, title search, Next navigation, quiz answer feedback/explanation and no page JavaScript errors during those tests. Browsers executing from `about:blank` cannot use the actual hash `history.replaceState`; navigation tests therefore stubbed history only. Deep-link/refresh behavior under real HTTP origin was not independently verified.
- Screenshot/viewport visual spot checks at 1440 × 900 and 390 × 844. Desktop cover, G/S controls, Monitoring, Integrations; mobile five planes, A/R controls, Integrations. Mobile internal slide scroll is needed for dense grids and tables.
- Print-media Chromium computed layout exposes all 59 slides and showed no `.slide-body` scroll-height excess beyond the content box at the tested print viewport. This does **not** replace an actual 59-page PDF print/export visual pass; the browser closed unexpectedly afterward, so PDF output was NOT rendered and individually inspected.
- Compared slide claims to actual HAIEC Main catalog/DAI types and current website docs for agents, telemetry/assurance boundary, CSM6, runtime testing, report verification and MCP.

## Technical/content validation

**Supported and correctly framed:**
1. Pillars **Understand / Assure / Govern & Operate**, with six independently selectable jobs **Discover, Evaluate, Authorize, Monitor, Protect, Verify**.
2. Five independent evidence planes: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. No automatic substitution.
3. Current DAI v1 nine dimensions and seven result states agree with `lib/assurance/dai-evaluation.ts`. Deck correctly distinguishes present engine scope from ISAF v2 research, planned protected-commitment semantics and unverified cross-system delegated effects.
4. Canonical `lib/control-visibility/catalog.ts` defines **45 total control entries = 42 G/S/A/R/L/E/P profiles plus C7, C9, C16**, not 45 plus 3. Atlas across slides 30-33 covers all entries; atlas currently gives abbreviated prompts rather than detailed per-control source, status and executed proof.
5. Monitoring and runtime chapters separate signal/configuration/freshness, approval, interception, target effect, consumer permission and uncertainty. External native PEP and full protection are not advertised as installed generally.
6. Public HAIEC MCP docs confirm API-key Bearer, `haiec_preflight`, `haiec_run_assurance`, user authorization/idempotency and a separate underlying deterministic evaluation. Usage and receipt content correctly warns that provider snapshots != SDK call counts and receipt integrity != certification.
7. Slide 50's CSM6 six layers match the public CSM6 guide: Scope Alignment, System Mapping, Signal Monitoring, Structured Delivery, Strategic Learning, Compliance Oversight.

**Teaching/claim caveats:** The course is a high-level product/method reference, not a complete end-user operating manual: there is one general 7-step lab, no reproducible UI screenshots and no direct source-qualified sample output walkthrough spanning an actual fixed evaluation ID through DAI/control/report. Several technical tables are dense at small font sizes. Every control is *listed* but not every control receives a source/status/risk/proof teaching example.

## Prioritized findings

| ID | Priority | Finding | Recommended correction / acceptance |
| --- | --- | --- | --- |
| LINK-01 | **P1** | Slide 36 links `https://www.haiec.com/runtime-security-testing`, but current Main has no `app/runtime-security-testing/page.tsx`; the live, indexed authorized runtime testing page is `https://www.haiec.com/products/runtime-security`. No known redirect was verified. | Replace link with current source-backed URL, verify real anonymous open. |
| LINK-02 | **P1** | Eight references point directly to private `subodhkc/haiec-website/blob/Main/lib/control-visibility/catalog.ts`. External learners without GitHub permissions cannot use these as source material. | Replace learner links with verified public `/assurance-controls` or `/controls` and include authenticated source appendix for internal users only. Validate exact live route and coverage before choosing. |
| LINK-03 | **P1** | ISAF v2 slide 23 links a Google Drive learning overview whose public-sharing entitlement was not confirmed. Main has public web implementation owner `app/frameworks/isaf-v2/page.tsx`, but public route fetch was cache-missed in sampled web retrieval. | Verify public anonymous availability, prefer official public ISAF v2 framework page; optionally retain Drive as explicitly internal reference. |
| UX-01 | **P1** | Mobile media CSS sets `.source-links{display:none}`; every slide's footer source references disappear on narrow screens. Tested at 390px. | Preserve references in a compact collapsible Sources drawer or linked footer on mobile. |
| UX-02 | **P1** | After clicking Next, keyboard focus stays on a navigation `button`; global keyboard handler intentionally ignores ArrowRight/Space when the focused tag is button or anchor. Actual ArrowRight test stayed on same slide, despite navigation instructions. | Handle ArrowLeft/Right on focused nav buttons, while exempting quiz controls or other interactive elements appropriately; test keyboard and screen-reader semantics. |
| EDU-01 | **P1** | User requested a brief complete **crash course**, but cumulative slide read badges total **132 minutes**. This is a reference course, not a fast primer. | Add explicit Quick Path (12-15 slides, ~15-25 minutes) + Complete Course mode; retain all 59 slides in optional technical path, with completion visibility. |
| EDU-02 | **P2** | Only 3 quiz slides for 8 chapters and no specific assessment after core capability, control and operational themes. | Add low-friction mini checks, one end-to-end case with exact artifacts, exercise completion/answers and glossary explanations. |
| UX-03 | **P2** | Mobile control/integration tables require internal vertical scrolling; source links hidden and readable small type can still be challenging. | Increase dense body/table text contrast/size and add a swipe/scroll indication; test 320/390/768px and keyboard zoom. |
| ACC-01 | **P2** | Dialogs have correct `role=dialog`, `aria-modal` and labels, but no focus-trap/restoration-to-actual-trigger test; changing a slide does not visibly use live status to announce the new slide heading. | Run WCAG audit with focus management, announcements, magnification and screen reader. |
| PRINT-01 | **P2** | Print CSS structurally displays 59 slides with no measured body overflow in print-media layout, but printed PDF not tested. | Export actual print PDF and visually inspect sample busy pages and page count. |
| LINKS-04 | **P2** | 35 unique outbound URLs were extracted, but only selected current website destinations were confirmed in web retrieval. New site pages may have crawl cache misses. | Run a real HTTP status/redirect audit for every unique link, as an anonymous learner, with evidence timestamp. |

## Self-learning instructional recommendations

1. Lead with **one slide containing a learner's chosen outcome**: Understand an AI system, evaluate a source finding, authorize/review a decision, inspect monitoring, confirm protect coverage, or verify report.
2. Build an optional **15-25 minute fast lane** from current slides: 1, 4-6, 9-12, 16-19, 25-26, 37, 43-46, 51-53, 59 (reconcile duration and exact selection).
3. Use a single *frozen, publicly inspectable Kestrel evaluation* as an evidence-carrying storyboard with stable proof links, one real action path, a meaningful unknown, a specific DAI facet, a control application/result and its receipt. Cross-link `/sample-reports/kestrel` and its Constellation.
4. Keep the 45-entry atlas as linked reference, but add one worked control from **each** family, showing risk, exact eligible source, whether test actually ran, result and next action. Avoid implying 45 active customer-target controls.
5. Distinguish executable scan/rule, catalog-only, preview, integration and research in a small consistent status legend.
6. Add optional two-minute guided interaction per full technical chapter: what to inspect, what a valid result means, what remains unknown.
7. Source labels should link to public pages first. Explain which actions require authentication.

## Release acceptance order

**P1 fixes first:** LINK-01/02/03, UX-01/02, EDU-01.  
**P2 before an accessibility-claimed or downloadable polished public course:** EDU-02, UX-03, ACC-01, PRINT-01, LINKS-04.  
**Release classification:** **internal/shareable draft now; public-grade complete self-learning course after P1 and anonymous-access link checks**.

**No edits to HTML or website were made during this review.**
