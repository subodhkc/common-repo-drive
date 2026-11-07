# HAIEC Insurance / AIA Interactive Workbench v2 — design review and Next.js handoff
Date: 2026-11-06
Status: HTML-only, synthetic scenarios. Insurance engine, domain-specific rules, insurer connectors, runtime protection, and ServiceNow connection **POC pending**. No public production website change.

## Source artifact
- Editable self-contained interactive HTML (Drive): https://drive.google.com/file/d/1mRWCWOgcc6sfQGlsVlgjdOeBq7AdN_C0/view
- Folder: https://drive.google.com/drive/folders/1Ur3Bw8ojyXaD7sUSuNw6yGKbSzSlNF8r
- Earlier v1: maintained in same Drive folder; preserve it as a prior design.

## Reference experiences reviewed
1. Manufacturing actual dashboard and tour: https://github.com/subodhkc/manufacturing-ai-assurance-haiec — nine fictional factory systems and a differentiated evidence-adapter read path, three-state evaluation/replay, held/approved operational demonstrations, quick 5-scene/full 10-scene guided tours and inspector. Its original Station 217 persisted HAIEC finding on synthetic evidence is distinct from a later browser-local held action. **Never imply insurance v2 has the manufacturing engine's persisted evaluation proof.**
2. Manufacturing public design reference: `design-references/manufacturing-2026-10-20/manufacturing-assurance-station217-interactive.html`
3. Telecom design reference: `design-references/telecom-2026-10-20/telecom-action-integrity-ontology-tmforum-interactive.html` — telecom typed semantics and AL0/AL1/AL2 source-informed scenario comparisons; synthetic example distinct from workshop evidence.
4. HAIEC in Action: `design-references/haiec-in-action-2026-10-22/haiec-in-action-interactive.html` — guided versus free explore, persistent scenario, contextual inspector and reports.

## What insurance v2 now demonstrates
- AIA-mapped public solution explorer across **Agency, Customer, Operations, Functions** (AIA analyst presentation FY2025, 19 March 2026, p.61) with eight **invented** action/assurance examples: Gen AI Claims Copilot, Gen AI Underwriting Copilot, Real Time FWA Tool, iMedical Record Summariser, Agent Sales Copilot, Customer Delighted Service Copilot, ONE AUDIT and AIA Copilot (risk/compliance).
- Eight original general insurance cases preserved: claims, underwriting, policy changes, medical-data AI, agency, third-party agents, document retrieval risks and insurer AI-risk evidence.
- Scenario perspectives: business, technical, evidence; requested / policy-authorized / effectively granted / code-capable / observed fields; synthetic threshold sliders; POC scoping checklist and JSON sample brief export.
- **Three-state insurance narrative** with baseline (human-owned action), proposed AI reachability, and proposed bounded release. Event trace is entirely browser-authored, not live telemetry or HAIEC canonical verdict. Avoid claim that any previous action was prevented.
- Quick four-scene and full nine-scene tours, optional presenter notes, autoplay, Next/Back, keyboard navigation, movable minimizable overlay, and pauseable three-state playback.
- Insurance lifecycle, ontology and roles; AI release modes; three AI assurance/risk-transfer business models; HAIEC cross-domain platform vs insurance POC pending; standalone versus ServiceNow AI Control Tower concept; source/provenance references.

## Critical fact and claim locks
- AIA's actual 2025 report describes 83% underwriting automation, 75% claims auto-adjudication and AIA Copilot support for over 14,000 employees. Automation percentages **are not synonymous with AI model decisions**.
- AIA product/module names are public facts. Every financial threshold, authority defect, reachable action, event, control result and risk case is **fictional**. Do not imply HAIEC accessed AIA source, IAM, policy, systems or logs.
- Non-payment thresholds are **synthetic impact/materiality proxies**, not monetary delegation or an actuarial model.
- No HAIEC insurance engine evaluation was run; no proof of actual payment, denial, policy edit, fraud outcome, or clinical assessment. Domain-specific testing and connectors remain POC pending.
- ServiceNow has AI Control Tower, AI Passport authority, discovery, observability and security; do not claim HAIEC uniquely offers those. HAIEC could complement with independent qualified consequence/authority evidence if integrations are approved and built.
- AI insurance risk evidence is an exploratory technical dossier. A licensed carrier or reinsurer makes all policy, coverage, pricing and claims decisions. AIA life/health market fit needs special analysis; broad commercial AI liability belongs to a suitable insurer/reinsurer partner.

## Proposed Next.js conversion, not authorized by this record
- Buyer landing `/solutions/insurance`, workbench `/demo/insurance`. Light HAIEC aesthetic and existing navigation/theme; preserve HTML charts, scenario state, scenario selection, tour presets and responsive inspector, with clear mock-data labeling.
- Preserve standalone HTML as design baseline; do not replace the universal HAIEC engine or create an insurance verdict engine from frontend fixtures.
- A11y and responsive 390/768/1440, reduce-motion, source links, no secret requests, no backend mutations, no misleading platform activity status.
- Next.js conversion, PR and production deployment require new authorization. No engine build, insurance connector, or live ServiceNow integration in this workstream.

## Public-source references
- AIA analyst presentation (page 61): https://www.aia.com/content/dam/group-wise/en/docs/investor-relations/2026/AIA%20Group%202025%20Annual%20Results%20Analyst%20Presentation%20%28FINAL%29.pdf
- ServiceNow Oct 15, 2026 AI Passport / AI Control Tower: https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-advances-its-operational-harness-for-enterprise-AI-with-AI-Passport-and-expanded-governance-capabilities/default.aspx
