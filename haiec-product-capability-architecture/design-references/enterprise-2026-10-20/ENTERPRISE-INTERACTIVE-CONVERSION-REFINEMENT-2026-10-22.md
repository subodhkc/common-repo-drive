# HAIEC /enterprise: interactive conversion refinement
Date: 2026-10-22
Status: DESIGN + IMPLEMENTATION PLAN ONLY. No HAIEC website source changed or deployed.

## Source order and continuity
- Current public https://www.haiec.com/enterprise reviewed 2026-10-22.
- Retain existing controlling plan: ../../WEBSITE-ENTERPRISE-PAGE-COPY-DESIGN-SEO-CONVERSION-PLAN-2026-10-20.md
- Adapt existing interactive reference, do NOT discard: enterprise-dual-theme-decision-story-preview.html
- Cross-page Assurance concept now preserved in Common Repo: ../assurance-2026-10-22/haiec-assurance-interactive-concept.html and companion Devin handoff.
- Product truth and actual code, live app paths, controls and integration capabilities take priority over mockup copy. The existing marketing route is /enterprise; do not add a competing page.

## Decision
Enterprise must be HAIEC's primary **POC conversion page**. Platform explains capabilities, Assurance explains evidence-bound determinations; Enterprise sells a clearly bounded **business and technical decision engagement**.

Keep existing H1: "Can you prove what this AI can actually cause?"
Proposed supporting message:
"Know what your AI can do. Understand where authority and capability diverge. Make deployment decisions with evidence."
Clarifying copy:
"HAIEC evaluates the supported action surface, policy and authority, security/control findings and evidence gaps for one consequential AI system, then provides a technical and executive decision basis within the agreed scope."

Keep **one system, one primary assurance question, minimum sufficient evidence**.
Maintain current scoped price context of $25K–$75K and initial evaluation target of 4–8 weeks **after readiness**, all final scope/deliverables/timing dependent on SOW. Avoid tiers and fictitious guaranteed outputs.

## Live 2026-10-22 findings and what to preserve
Current page already includes a working content structure with hero, five evidence planes, L0-L4 evidence-depth ladder, seven evaluation activities, a list of 12 potential outputs, four possible executive review outcomes, security posture, persona sections, resource links, exact commercial parameters and a two-step qualification form with Step 1 required and Step 2 optional context.

Do not mistake this for a missing feature/route. The enhancement is primarily information hierarchy, buyer comprehension, interactive proof illustration, accessibility, responsive design and conversion.

The chief UX issue is that enterprise resource tiles, nine buying moments, and five evidence-plane descriptions precede the tangible decision artifact. Give buyer outcomes earlier, and disclose methodology deeper rather than removing it.

Previous enterprise reference HTML has a light/dark switch, 4-beat billing/refund decision, four deliverable families, L0–L4 selection and MCP CTA. Reuse rather than rebuilding competing interactions from scratch. Align it with the new Assurance interactive concept, but do NOT embed the entire Assurance lab here.

## Proposed live page storyboard
| Zone | Editorial content and interaction | Primary buyer value |
|---|---|---|
| E0 Hero | Preserve original H1; short business consequence deck; primary CTA "Scope My Enterprise POC" -> #qualify; secondary "See the Decision Example" -> #decision-example; concise price/time qualifier. Right: compact consequence-to-decision dossier | Understand value and commercial intent in 10 seconds |
| E1 Decision Example | Four manually selected views: code-capable path, access facts, qualified delegation evidence, illustrative review outcome. Offer a single scenario by default; optional selector for manufacturing or telecom only if sourced and not redundant with /assurance | Explain permission vs discretion vs observed effect |
| E2 What You Receive | Four visual work-product families: (1) System & Action Baseline, (2) Assurance & Control Findings, (3) Proof Gaps & Next Actions, (4) Executive Decision Readout. Accessible disclosure preserves all current 12 potential contracted outputs; link to /sample-reports | Show deliverable, not list of product functions |
| E3 Why Enterprise HAIEC | Three compact connected capability cards: Security (code paths, boundaries, authorized runtime tests); Governance (policy, delegated authority, human decisions); Assurance (deterministic cross-plane evidence evaluation, gaps, reports). Assurance gets the conclusion, not a promise of universal enforcement | Distinct differentiation, no security/governance erasure |
| E4 Buyer Moments | Three buyer situations: preproduction launch / expansion, risk/procurement review, material change or incident follow-up. Existing nine scenarios and personas remain readable inside collapsed semantic sections | Match buyer urgency and stakeholder ownership |
| E5 Scope Explorer | L0–L4 evidence selector explains what each authorized evidence depth can and cannot establish. It NEVER upgrades UNKNOWN by selection alone or changes entitlement. One system/one question boundary stays always visible | Lower access friction and clarify rigor |
| E6 Method & Timeline | Four grouped engagement phases: Define & authorize; Discover & map; Validate qualified evidence; Technical & executive review. Retain existing seven named steps and accurate overlapping week intervals in accessible details | Predictable project |
| E7 Commercial Boundary | Bounded $25K–$75K, initial 4–8 weeks after readiness, approved scope and written authority. Expansion in three grouped optional families: deeper evidence/validation, connected monitoring/operating governance, integration-specific safeguards/effect verification | Clear offer, no feature sprawl |
| E8 Trust & Enterprise Resources | Compact trust/handling posture; selectively show Architecture Explorer, executive deck, technical annex, decision workshop, technical tables and brief. Preserve every existing resource link | Procurement confidence |
| E9 Qualification | Preserve existing two-step form and API, CAPTCHA, validation, attribution and tracking. Rename Step 2 "Optional Context & Verification" if it includes mandatory verification. Use consistent labels, error focus, autocomplete and mobile field spacing | Friction-reduced lead conversion |
| E10 FAQ & Final CTA | Keep high-signal questions: scope, production access, what UNKNOWN means, data boundary, decision authority, timeframe, non-subscription engagement, MCP eligibility. Final CTA anchors #qualify | Answer objections and convert |

## The two essential interactions
1. **Decision dossier**: on click/focus, highlight a fact and update a plain-English finding, the unresolved authority or observation question, and reviewer next action. Use one clearly named "Illustrative decision example" label; no implied customer engagement result, fake scan, automatic BLOCK or certification.
2. **Evidence-depth selector L0–L4**: describes the scope and proof type possible at a depth; no false score, no inferred automatic verification, and no change to form pricing. Keyboard-operable selection, SSR default text, mobile equivalent.

The four deliverable families can use native <details> as light interaction, not a third custom widget. Keep motion editorial: short click-triggered state transition, no fake active monitoring, obey reduced-motion.

## Non-negotiable architecture and brand
- Light-first polished enterprise editorial using shared HAIEC marketing semantic tokens and a deliberate dark accent on dossier; support actual working dark theme if site-wide system provides it. Do not create another independent theme framework.
- Keep most text in server-rendered Next.js. Implement the mini-dossier and evidence selector as contained client components. Use native accessible headings, links, labeled controls and SEO-readable static defaults.
- Hero should be 45–50% text-safe left, with compact native SVG/HTML dossier on right. Reuse approved evidence and outcome vector language; retain architecture explorer as deeper technical page.
- Mobile 390px, tablet 768px, desktop 1440px; focus rings, WCAG contrast and reduced-motion. No heavy animation libraries, scroll hijacking or new external font packages.
- Prevent dangerous semantics: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed are five **independent** planes, not five stages. DAI delegation is separate qualified comparison. Security findings do not automatically establish authorization. Source-capability is not runtime target effect. Human POC executive recommendation is distinct from HAIEC ALLOW/REVIEW/BLOCK evaluation, and neither proves customer-native enforcement.
- Security and governance features are named concisely but Assurance is the organizing value.
- Preserve exact award identity and link; competition recognition is not regulatory certification.
- Verify marketing statement about fully local Docker and telemetry disabled against an actual supported delivery mode and egress acceptance before carrying forward procurement-grade promise. Confirm /trust and legal/commercial claims against real contracts.

## SEO and measurement
Canonical https://www.haiec.com/enterprise
Suggested SEO title: "AI Agent Security Assessment & Enterprise Assurance POC | HAIEC"
Meta: "Scope an evidence-bound enterprise AI agent assurance POC. Evaluate consequential action paths, delegated authority, security findings and proof gaps for deployment decisions."
Use natural H1/H2 SSR text, accessible figure/figcaption and genuine resource links. No invented structured-data awards, endorsements, reviews or certifications.
Use existing /api/contact flow, source=enterprise-poc, CAPTCHA, consent and analytics pipeline. Recommended non-PII events: hero_poc_cta, decision_example_interaction, evidence_depth_selected, deliverables_expand, sample_report_view, form_started, step1_complete, form_submitted, form_error. Never send respondent content to analytics.

## Implementation work order for Devin (NOT authorized by this plan)
1. Pull current HAIEC Main, inspect the route components, commercial data and current theme; do not work from the old 2026-10-20 source snapshot blindly.
2. Compare current production page vs reference HTML and the Assurance 2026-10-22 concept. Remove duplicated interactions across pages. Preserve all meaningful content and functioning nav/form/CTA contracts.
3. Create one focused /enterprise Next.js PR: editorial reorder, buyer dossier, selective L0–L4 explorer, semantic details for 12 outputs, controlled color/theme reuse and form-accessibility fixes only where verified. Do not inject the standalone HTML verbatim or change backend evaluation contracts.
4. Check source-accurate copy and commercial/award/trust claims; compare current form step and backend payload carefully.
5. QA no-JS/SSR, accessibility, responsive 390/768/1440, both supported theme modes, nav deep links, submission/CAPTCHA and event privacy; confirm SEO/schema/canonical.
6. After explicit deployment authorization, merge and verify production route; log deployed commit and screenshots in Common Repo.

Acceptance: within one viewport buyer sees compelling outcome + POC CTA; in one additional scroll sees the tangible decision dossier; 12 potential deliverables preserved under four clear families; one working buyer exploration interaction; a truthful evidence ladder; functioning lead flow; no invented safety/enforcement/certification claim.
