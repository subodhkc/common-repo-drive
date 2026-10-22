# HAIEC Regulations: interactive requirement-to-evidence enhancement plan
Date: 2026-10-22
Canonical URL: https://www.haiec.com/regulations
Status: read-only review and design plan. No public website, backend regulation engine or billing change.

## Summary
Preserve the canonical /regulations page and the newer source-aligned regulatory reference registry. Convert the current preliminary finder + jurisdiction/reference directory into a visual, evidence-led Regulatory Navigator. The customer promise is: "Understand which AI obligations may affect your systems, what evidence you can prepare, and which decisions still need your team." The page must provide education and links to actual HAIEC technical evidence, not automated legal advice, completion certificates or universal compliance verdicts.

## Source review
Reviewed 2026-10-22:
- HAIEC Main app/regulations/page.tsx, app/regulations/layout.tsx
- HAIEC Main data/regulatory-references.ts, source review date 2026-10-20
- public https://www.haiec.com/regulations, which may be cached/older than Main
- official European Commission EU AI Act enforcement and AI Omnibus sources
- Colorado SB26-189 state legislature and Attorney General
- California Privacy Protection Agency ADMT regulations

Important: A public crawl still shows older "15+ jurisdictions", "Updated daily", "3 questions" and broad compliance-service claims. Current Main instead has 4 inputs (region, industry, system use, optional role), official references, explicit source-review date, applicability caveats, an evidence contribution section, and framework categorization. Confirm deployed commit and actual browser render before creating correction tasks.

## Confirmed high-priority gaps
P0-1: Optional role selector is captured in selectedRole but getResults() does not use it. Do not imply role-adapted relevance until it changes the result or clearly changes supporting guidance.
P0-2: The finder is an educational relevance screen based mostly on broad region and AI use. Avoid "applicable"/"not applicable" rulings, over-filtering and false negatives; present "potential relevance", "more information needed" and "not assessed" with explained reasons.
P0-3: The shared classification includes UK sector-led approach and Canada's unpassed AIDA under broad 'law' references. Avoid counting them as enacted active obligations or implying the unpassed Canadian bill is law.
P0-4: Regulation-effective dates require official-source and amendment truth. EU AI Omnibus Regulation (EU) 2026/1744 changed high-risk dates to Dec 2027 and Aug 2028; Colorado SB26-189 enacted for Jan 1 2027; California ADMT rules have Jan 1 2027 compliance timeline for significant decisions. Source links and per-record reviewed dates must be retained.
P1-1: Page still lacks interactive requirement -> HAIEC evidence -> evidence owner / next action view.
P1-2: Finder result cards route immediately to long legal pages; add compact requirement inspector showing role, legal status, deadline, potential records, official source, HAIEC owner and independent external obligations.
P1-3: No shareable view/context or saved inputs; support URL-encoded public filters but never imply a private saved evaluation or persist personal/compliance details in query strings.
P1-4: Make distinctions among laws, voluntary frameworks, attestation criteria and HAIEC-authored methodology visible and accessible.
P1-5: Design currently relies on a large dark hero and vertically repetitive generic cards; introduce premium light-first editorial theme, restrained dark technical evidence panel, accessible semantic SVG and clear mobile layout without redesigning site navigation.

## Proposed information architecture
1. Hero: "From AI regulations to evidence you can act on." Supporting copy: identify potentially relevant rules, understand upcoming milestones and see which parts HAIEC technical assurance can support. Primary CTA: Explore applicable requirements (jumps to finder); secondary: See evidence examples; tertiary: Scope enterprise review.
2. Regulatory Navigator: four short inputs, progressively interpreted; jurisdiction, industry, AI use/impact, builder/deployer/supplier roles. Results explain potential relevance plus missing determining factors. No score indicating compliance.
3. Obligation and evidence inspector: choose one reference/obligation and reveal WHY it matters, WHAT records reviewers want, WHAT HAIEC may establish (source, agent path, authorization, runtime observation, control evaluation, receipt), and WHO owns final legal/human obligations. Interactive statuses: technical evidence available in principle / requires a qualified connection or review / outside product determination. Do not label an actual customer as compliant.
4. Regulatory timeline: source-linked effective dates and future milestones with enacted vs proposed distinction. Include EU AI Act phases, NYC LL144, Colorado ADMT, California ADMT on supported source. No daily-update claim without maintenance automation.
5. Regulations library: curated filterable tiles, official source, applicability roles, instrument and review date. Maintain links to existing regulation-specific pages.
6. Frameworks versus laws: explain EU AI Act/Colorado/NYC/GDPR/CCPA vs NIST AI RMF/ISO/SOC2/OWASP/ISAF v2. Link /frameworks and /frameworks/isaf-v2; no confusion between research and statutory obligations.
7. How HAIEC contributes: inventory & System Constellation, source and authorized runtime, DAI/authority, controls/evidence, bounded deterministic Assurance, reports/receipts; distinguish technical signals from customer operational records, legal analysis, external audit and filing.
8. CTA section: Start with AI System / Explore HAIEC (if deployed) / Request enterprise assurance scope. Preserve valid site signup routes and enterprise CTA. Do not add fictional auto-compliance checkout.

## UI contract
- Native Next.js page under existing /regulations route, SSR law summaries and semantic HTML with accessible client explorer.
- Reuse HAIEC shared marketing header/footer, approved light visual tokens and restrained SVG art; no duplicated site chrome.
- White/off-white/sage cards, forest typography, controlled emerald accent, dark inset only for evidence illustration. One focal interactive diagram, not endless carousels.
- Mobile 320/390/768 and desktop 1440; keyboard tab/accordion, reduced-motion, no horizontal overflow.
- Link to existing canonical /frameworks/eu-ai-act, /colorado-ai-act, /solutions/nyc-ll144-compliance, /evidence, /assurance-controls, /assurance, /enterprise, /frameworks, /regulations.
- Avoid generic compliance certifications, invented completeness metrics, new backend decision engines, auto-import from legal articles or ungrounded legal advice.
- On legal text, note current source review date and distinguish enacted, in-effect, future, proposal; do not rely on model-generated legal updates without verification.

## Suggested delivery order
P0: confirm live-deploy drift, official dates, reference ownership, role-filter semantics and classification parity.
P1: create standalone interactive design prototype for approval; use meaningful reference-based example with explicit informational purpose.
P2: convert only approved interactions to current Next.js page, preserving existing sources, internal links and canonical URL.
P3: accessibility, UI and link validation, legal source citations/review dates, design alignment, deploy/commit parity, typecheck and regression checks.

## Related asset committed alongside planning
Previous AI Security interactive HTML: design-references/ai-security-2026-10-22/haiec-ai-security-interactive.html. It is a design prototype including the GitHub App source onboarding journey, not a deployed production implementation.

## Official validation references
- https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act
- https://eur-lex.europa.eu/eli/reg/2026/1744/oj
- https://leg.colorado.gov/bills/sb26-189
- https://coag.gov/ai/
- https://cppa.ca.gov/regulations/ccpa_updates
