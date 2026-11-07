# HAIEC Insurance v9 — Executive Value & Workbench Refinement

**Date:** 2026-11-07
**Repository:** `subodhkc/haiec-website`
**PR:** https://github.com/subodhkc/haiec-website/pull/2463
**Main merge:** `d822ad0e7a3c6c2da093cf6b3c7bc95e0ca8ec5a`
**URLs:** https://www.haiec.com/solutions/insurance · https://www.haiec.com/demo/insurance.html

## Changes implemented
- Public insurance page shows an inspectable Kestrel real-repository result (44 code-capable paths, bounded REVIEW disposition), along with manufacturing and telecom proof links. It does not present these as real insurer results.
- Executive economics model now takes eligible annual actions, additional bounded automation (percentage points), avoided manual handling per action, annual oversight/operating costs, and incremental review cost per action. Displays additional actions, gross annual handling value, operating/review costs, and illustrative **net annual operating value**. Default example: 5,000,000 × 1% × $15 - $120,000 - (50,000 × $2) = $530,000 illustrative net. One-time implementation costs and other economic effects are separated from this example.
- Site workbench offers 3-step guidance; insurer-neutral navigation precedes optional AIA public references. Top-level repetitive "not connected" and "POC pending" headlines replaced with capability-positive, still factually qualified language. Fine-grained evidence-state labels and illustrative case disclosures retained.
- Vercel Analytics events (without personal details): `insurance_workflow_selected`, `insurance_workbench_open`, `insurance_poc_intent`, `insurance_value_model_adjusted`, `insurance_deck_requested`, `insurance_deck_name_check`, `insurance_poc_submitted`.
- Shared ContactForm now submits signed MathCaptcha token and existing honeypot value to `/api/contact`; preserves stable callback to avoid challenge-reset loops. Backend preexisting token verifier used, no new API or auth behavior.
- AIA 16-/55-slide presentation links remain behind existing client-name gate. No underlying insurer engine, policy, payment or ServiceNow integration added.

## Checks and release
- Pre-merge source checks: all five calculator controls present; model calculation correct; 5 source paths and 4 original gated deck actions present; all landing JSX sections/articles balanced; standalone HTML script tag structure intact; general workbench default and per-evidence statuses preserved; backend signature-verification path exists.
- Post-merge, seven changed files verified on Main.
- Production Vercel status: **pending** at first post-merge read; check READY separately. Feature-branch status failure is associated with Main-only deployment policy.
