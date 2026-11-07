# HAIEC Insurance Domain — Standalone HTML Website Integration v4
Date: November 6, 2026 (US Pacific); GitHub merge on November 7 UTC.

## Decision
Publish a self-contained, static insurance AI assurance demonstration in HAIEC's canonical website project, **without converting to Next.js or implementing a domain evaluator**.

- **Published code:** `subodhkc/haiec-website` `Main` @ `6ac5b9ef1995873431eb9621884e6d2381b657ff` (squash merge PR #2434).
- **Site path:** `/demo/insurance.html` = `public/demo/insurance.html` (127,321 characters).
- **Site navigation:** Solutions → Insurance & Health AI, and Solutions overview/Industries, configured to **open in a new tab**.
- **Artifact:** [Insurance Domain HTML v4 in Drive](https://drive.google.com/file/d/1U7i91AExwnP_Z7AiaBKMYgmO2pzJbEc8/view), [Insurance Domain Drive folder](https://drive.google.com/drive/folders/1Ur3Bw8ojyXaD7sUSuNw6yGKbSzSlNF8r).
- **Source PR:** https://github.com/subodhkc/haiec-website/pull/2434.
- **Production site target:** https://www.haiec.com/demo/insurance.html . **Verify Vercel READY and anonymous access before claiming live.** Code merge alone is not deployment proof.

## V4 editorial/design updates from v3
- Cleaned site header, insurance context and explicit link back to HAIEC Solutions; compact navigation.
- Executive four-scene tour and full guided tour remain; scenario/deep links and one-page print brief preserved.
- Five evidence-plane narrative, AIA public-solution references, claims/underwriting/health scenarios, ontology, release pathway, ServiceNow context and potential AI insurance evidence models retained.
- Prominent independent-source boundary: AIA module names from its own public investor deck; scenario thresholds, event traces, action paths and Passport examples are synthetic; not an AIA partnership or approved integration.
- Public workbench `noindex,follow` until a generic indexed `/solutions/insurance` buyer landing is separately approved; don't publish unverified AIA-specific claims in site search.
- Removed manufacturing/telecom internal design link from buyer-facing section; linked to HAIEC DAI methodology instead.
- Single self-contained HTML with inline script remains eligible for existing scoped CSP exception for `/demo/*.html`. No new CSP-wide relaxation.

## Implemented vs future
- **Implemented:** front-end interactive synthetic demo and website navigation.
- **Proposed POC:** insurance-specific ontology/control binding, insurance evaluator/rules, claims/policy data adapters, live IAM and runtime observation integration, ServiceNow API integration, insurer-risk evidence underwriting support.
- **Not claimed:** actual AIA assessments, full evaluated insurance estate, live blocking, AIA/ServiceNow integration, insurance certificate, risk coverage or premium.

## Review/QA
- HTML parsed successfully; inline JavaScript syntax checked by Node.
- Chromium browser `set_content` checks at desktop 1440, tablet 768, mobile 390: zero script pageerrors or horizontal overflow, executive tour opened as expected.
- GitHub Main source of all 4 files inspected after merge.
- Page is HTML-only and opens from nav in a new tab; no Next.js conversion or canonical HAIEC assurance engine change.
- Vercel build status to be verified by GitHub commit CI or Vercel project before asserting the URL is live.

## Future enhancements only if requested
- When ready for broad search indexing, create SSR `/solutions/insurance` landing page with generic insurance-first copy and a new-tab link to `/demo/insurance.html`.
- After a customer-backed POC, connect actual insurer sources and preserve evidence owner/source truth distinctions. Never populate fictional signed receipts.
