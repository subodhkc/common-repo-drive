# HAIEC Enterprise Architecture Explorer — V4 Editorial & Visual Polish

**Date:** 2026-10-18 · **Status:** Standalone browser-tested review candidate. **Not deployed to HAIEC.com.** V3 remains preserved.

## What changed

- Kept all **12 views** (executive guide, D1–D8, C1 manufacturing, C2 TM Forum, evidence/adoption), all underlying HAIEC evidence-truth boundaries, and all live-source links.
- Tightened the hero, one-sentence takeaways, and executive language; removed repetitious marketing phrasing and made outcomes conditional and evidence-backed.
- Added a collapsible “How to read this explorer” note distinguishing optional jobs, qualified evidence, synthetic scenarios and external enforcement.
- Added **view count** and **deep link to current view**, including keyboard arrow navigation and browser hash-change support.
- Changed the split source HTML to load the exact committed `architecture-explorer.css` and `architecture-explorer.js` names; source and standalone now agree.
- Corrected the TM Forum C16 meter scale: **0–120,000 tokens**, **60,000 policy threshold**, **35,559 → 29.6%**, **106,829 → 89.0%**. The chart is a presentation of historical test results, *not* evidence requests were blocked.
- Improved light-theme hierarchy, compact initial fold, mobile font sizes, detail-panel line spacing, touch targets, and reduced-motion behavior. Preserved the same CSS visual design system.
- Preserved `UNKNOWN != PASS`, `assessment != deployment gate`, `approval != enforcement`, manufacturing synthetic records vs simulated factory action, and participant-published TM Forum archive limits.

## Files

- `index.html` — CSP-friendly split entry; load the CSS and JS siblings.
- `architecture-explorer.css` — presentation, responsive/print rules.
- `architecture-explorer.js` — local explainer interactions only, no API calls.
- `HAIEC-Enterprise-Architecture-Explorer-V4-Polished.html` — self-contained shareable preview. Its inline CSS/JS are for offline sharing only; use split source to adapt for website CSP.
- `previews/*` — review screenshots.

## Verification (in this source session)

- Chromium Playwright `set_content` checks at **1440 px, 768 px, 390 px**: **12 tabs**, default inspectors, source explanations, link/counter state, D6 scenario switching, keyboard arrow navigation and URL-fragment navigation passed; no page-level JS errors or document horizontal overflow.
- Print-media DOM verification: print-all displays 12 panels and print-selected displays one panel. **Full page-by-page PDF pagination, real print output, screen-reader audit, and live CSP deployment remain open**.
- HTML is an educational architecture explorer, not a report generated from a customer tenant.
- Marketing/product-source states were preserved from V3's cited canonical contracts. This pass **did not** rerun live product acceptance or independently review a new repository HEAD; recheck readiness when publishing externally.

## Repository and deploy boundary

Copy the four source files (and approved preview assets if useful) into a **versioned folder in `common-repo-drive/haiec-product-capability-architecture/enterprise-publication/interactive-v4/`**. Keep the pre-existing `interactive/` V3 intact. This is a source/editing and review handoff only; **do not deploy to HAIEC.com**, change the enterprise POC offer, or modify Assurance/DAI/MCP/enforcement engines.

Before site publication: fit-check all views in Chromium at 390/768/1440 px, inspect printed pages, test with a screen reader, enforce current CSP with split assets, verify external links/public rights, and reconcile feature readiness to HAIEC Main. Preserve original manufacturing and TM case disclosures.