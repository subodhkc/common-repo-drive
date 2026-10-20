# HAIEC AI Security: Application, Agent, RAG, MCP, Packages and Regulatory Evidence

**Reviewed:** October 20, 2026  
**Public route:** https://www.haiec.com/ai-security (existing; enhance, do not replace its product truth or rewrite from zero)  
**Status:** Common Repo research/design handoff only. No production HAIEC website changes.  
**Companion concept:** design-references/ai-security-2026-10-20/ai-security-agent-action-risk-light-dark-interactive.html

## 1. Source-based decision

The live /ai-security page already correctly separates **static source analysis** and **authorized runtime tests**, documents coverage, outputs, evidence boundaries and canonical lifecycle. Its basic rebuild from the September developer handoff is substantially visible at https://www.haiec.com/ai-security. Keep that foundation. The next enhancement is NOT another generic scanner catalog. Lead with the hidden exposure around the model, then show explicit producer ownership for RAG, prompts, MCP, data, actions, cost and supply chain, and finally show how qualified findings can support controls, assurance, SOC 2 and EU AI Act-related assessments.

**Primary customer question:** “Can our AI application, agents, RAG sources and MCP tools be manipulated into accessing data or taking actions they should not?”

**Search ownership:** /ai-security owns broad AI application security. /products/runtime-security owns authorized runtime attack testing. /developer-security owns developer-package family. /ai-appsec, /mcp-tenant-isolation and /llmverify each own the applicable standalone package; /assurance-controls owns control operating proof; /controls owns framework reference; /assurance owns bounded evaluation. Preserve /solutions/ai-security redirect.

**Commercial outcome:** persuade the buyer to investigate a consequential AI action with scoped technical evidence, not sell “100% secure” or an invented certification.

## 2. Hero and customer-ready editorial

Eyebrow: **AI APPLICATION & AGENT SECURITY**  
H1: **Secure the AI application around the model.**  
Lead: **A prompt can look harmless. The tool call it triggers may not be.**  
Body: **See security risk across prompts, RAG data, model inputs and outputs, MCP tools, application code, tenant boundaries and downstream actions. HAIEC brings together supported source findings and authorized runtime observations, then connects qualified evidence to the controls, access and assurance decisions that matter.**  
Primary CTA: **Run Standard Validation** (verify destination in current Main; preserve current “Analyze Source Code” CTA if conversion ownership requires it).  
Secondary CTA: **Explore Runtime Testing** -> /products/runtime-security.  
Proof link: **See Sample Evidence** -> existing working sample-report route.

**Positioning line:** “Detect the exposure. Follow the action. Keep the proof.”  
**Value language:** actionable technical findings first; bounded authority/assurance where evidence supports it; no assurance gate before showing a source-visible risk.

## 3. Page structure / UX concept

1. **Hero and Action Exposure Map:** accessible native SVG/CSS/semantic HTML, not raster-only. Left inputs: prompts, uploaded documents, retrieval/RAG, memory, model/tool metadata. Center agent. Right MCP/API handler, credential/policy, resource, possible consequence. Under diagram independent evidence lenses: Source, Tenant Boundary, Model I/O, Authorized Runtime, Controls/Assurance. Visible text version for SEO and screen readers. Light-first shell with working dark toggle. No fake event streaming.
2. **The unexpected gap:** “A secure model can still connect to an insecure application.” Distinguish input-content detection, code-path risk, observed test behavior and control operation. One case: untrusted retrieved document influences an agent to invoke a privileged export tool.
3. **What HAIEC checks:** grouped accessible selectable tabs, 8 families: Prompt & instruction attacks; RAG & retrieval context; MCP & tenant isolation; Agent tools & privileges; Sensitive data & secrets; Unsafe output & downstream use; Availability, cost & abuse; Supply chain & operational control context. Keep copy for each family in SSR HTML even if enhanced with client interactions. Each family describes checked surfaces, responsible evidence producer(s), and exactly what qualifies as a finding versus unassessed coverage.
4. **Four complementary producer views:** (A) Hosted static security analysis, (B) Authorized runtime security testing, (C) Standalone developer packages, (D) HAIEC access/control/evidence and Assurance. These are NOT four interchangeable scanners and not a mandatory waterfall. Source-visible findings should appear early.
5. **Developer security stack with useful crosslinks:** AI AppSec (source security; Python/JS/TS), MCP Tenant Isolation (JS/TS source/tenant-boundary signals), LLMVerify (local model input/output heuristic signals); additional llmverify-mcp is an adapter to LLMVerify, not another detector. Link to /developer-security, /ai-appsec, /mcp-tenant-isolation, /llmverify (verify live route owner and redirects), /packages. Do not imply independent package output is automatically ingested as qualified SaaS evidence.
6. **What framework mappings can help review:** versioned OWASP LLM 2026, OWASP Agentic 2026 / Agent Control Standard, MITRE ATLAS, NIST AI RMF / GenAI Profile, EU AI Act requirements, SOC 2 Trust Services Criteria and relevant ISO/IEC 27001 and 42001. Four labels in actual platform/UI contract: Technical signal; Evidence mapped; Human review required; Not assessed. A mapping is not a completed SOC 2 examination, ISO certification or EU AI Act legal determination.
7. **What the evidence establishes:** separate static Source/Code-Capable, runtime Observed, tenant-source risk signals, identity/policy/grant evidence, and downstream control/Assurance evaluation. Show provenance, run coverage, exceptions and proof boundary; do not collapse Unknown, Partial, Not Run or Held into Passed.
8. **Outcomes:** source-linked risk findings, explicit support/coverage, SARIF where supported, scoped runtime behavior, remediation/baseline comparison, Action & Access Map, eligible control-evidence and verifier/report/receipt links. No fabricated universal availability.
9. **Close:** Run Standard Validation / Explore Runtime Testing / Scope Enterprise Assurance POC. Preserve working current CTAs/routes while evolving positioning.

## 4. Package-to-security evidence ownership (critical source truth)

| Component | Good customer-facing value | Boundary |
| --- | --- | --- |
| Hosted AI Security static scanner | Source/config security patterns and scoped source evidence | Separate engine from public AI AppSec npm package; completion != full semantic coverage |
| Authorized Runtime Security Testing | Observed responses to authorized, safety-gated tests | 30 catalog categories, 23 API-selectable, 283 templates and 14 safety properties are **different**; only persisted executed scope counts as executed |
| AI AppSec npm | Standalone local security analysis for agent/app code, receipts, MCP scan tool, supported JS/TS/Python | Independent package; static only; current public npm metadata shows v0.1.0 (older research draft claims v0.1.1); do not conflate with hosted scanner |
| MCP Tenant Isolation npm | Source-level JS/TS MCP/tenant leakage risk patterns, 57 specialized rules in verified earlier manifest | Intra-procedural; no guarantee of real middleware/RLS or cross-file enforcement; producer-to-SaaS ingress previously held |
| LLMVerify npm | Local, configured model I/O/prompt/PII risk signals | Regex/pattern/heuristic signals, not truth verification or an unbreakable guardrail; older website v1.6.1 and newer research v1.8.0 diverge |
| llmverify-mcp | Local MCP adapter exposing existing LLMVerify operations | Adapter, not separate detector or additional download subtotal unless explicitly recalculated |
| @haiec/openai / @haiec/anthropic | Optional AI Inventory/provider usage instrumentation | Not source security scanners, runtime attack testers or assurance engines |
| ISAF Logger / ISAF v2 | Lineage metadata utility / separately published methodology manuscript | Logger != ISAF v2 framework and does not prove AI security or compliance |
| HAIEC GitHub Action / IDE/MCP | Developer workflow entry and evidence/status consumption where supported | Must respect current allowed tools, scoped credential/tenant, production source, and any held/unsupported integration |

**No duplication:** Packages are developer utilities, not separately priced enterprise SKUs. Surface as supporting technical entry paths and adoption credibility. Do not turn LogSense into a separate marketed product.

## 5. 100K+ download evidence and release gate

Founder reports **100,000+ combined npm downloads** for exactly: llmverify + ai-appsec + mcp-tenant-isolation. This is useful social proof, but the dated npm downloads-API export with definition and interval has not been archived in the reviewed research. Do not claim “100,000 developers”, “100,000 customers”, active installs, unique organizations, or an independently verified total. The npm API endpoint could not be accessed in this research session. **Before publishing any 100K+ counter:** obtain dated per-package npm downloads/point or downloads/range export, interval and method (sum packages, count duplicates as npm events, no llmverify-mcp double count); archive JSON in a safe public evidence location; wire the counter to a shared stats owner. If total is verified >=100,000, customer-facing text:

**100K+ combined npm downloads**  
*Across LLMVerify, AI AppSec and MCP Tenant Isolation. Download events are not unique users. As of [verified date].*

The preview may show this editorial example, but release should omit/hide the metric until verified. Source observations are not a substitute for export.

## 6. Standards / assessment taxonomy and claims

**New as of 2026:** OWASP released the LLM Application Top 10 2026 and Agent Control Standard, in addition to its agentic work. Update references from “OWASP 2025 only” only after mapping rule IDs and edition. Do not assert “tests all OWASP 2026 categories” because a scanner has a text label. Show applicable concerns and uncovered categories honestly.

- OWASP Top 10 LLM Applications **2026** and Agentic 2026/Agent Control Standard: threat taxonomy, scenario and detector/control mapping with version.
- MITRE ATLAS: adversarial tactics/techniques mapping, not claim every ATLAS technique executed.
- NIST AI RMF / GenAI Profile: risk management outcomes and review evidence; not certified compliance.
- EU AI Act: Article 9 risk management; Article 10 data governance; Article 12 record-keeping; Article 14 human oversight; Article 15 accuracy/robustness/cybersecurity, **when role, risk tier, applicability and effective date make them relevant**. Technical results can support review but cannot replace legal assessment or required documentation. Recheck current AI Act Service Desk amended timeline on release.
- SOC 2: map technical evidence to applicable AICPA Trust Services Criteria (security, confidentiality, availability, etc.) only where source/criterion link exists; preserve required organization policy/process, operating period and independent CPA examination boundaries.
- ISO/IEC 27001 and 42001: selected controls and AIMS evidence pointers; no certification claim. Add GDPR/data protection mapping only with specific support.

**Example crosswalk shape:** Risk family → test/check identity → producer → actual execution scope → finding/provenance → control or framework reference → coverage/evidence status → evidence owner → human next action. Labels should never pretend every standard article is an automated check.

Official references:
- https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/
- https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/
- https://atlas.mitre.org/
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-15
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-does-enforcement-start
- https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022
- https://www.iso.org/standard/81230.html

## 7. SEO, navigation, and page contracts

**Keep canonical:** /ai-security.  
**Proposed title:** AI Application & Agent Security | Prompt, RAG, MCP | HAIEC  
**Meta:** Assess AI application security across prompts, RAG, MCP tools, agent actions and runtime behavior with scoped technical evidence and assurance-ready findings.  
**H1:** Secure the AI application around the model.  
**Structured data:** Organization/WebPage/BreadcrumbList based on shared site machinery; avoid unsupported Product offers/ratings/certifications. FAQ only when fully visible and version-true.  
**Links:** /products/runtime-security, /developer-security, /ai-appsec, /mcp-tenant-isolation, LLMVerify's verified canonical route, /packages, /delegated-action-integrity, /assurance-controls, /evidence, /assurance, /regulations or /compliance/eu-ai-act, /enterprise, /sample-reports. Confirm route health rather than invent redirects.  
**Navigation:** Retain Platform > AI Security and Runtime Testing. Do not add 8 risk family top-level menu items; anchor sections inside existing page.  
**Page aesthetic:** preserve existing working sections and meaningful animations. Light-first presentation, dark toggle where approved site-wide, white/sage/slate, strong typography, meaningful anchored diagram, accessible keyboard/radio/hover, prefers-reduced-motion, WCAG AA, responsive ~390/768/1440. No emojis/em dashes or INTERNAL / FICTIONAL / NOT LIVE banners in customer copy. Conceptual diagrams must not masquerade as operational evidence.
**Canonical six jobs:** Discover, Evaluate, Authorize, Monitor, Protect, Verify are independent capabilities, not this page's forced seven-step process. Preserve existing Define → Connect → Collect Evidence → Assure → Verify → Monitor as the page's existing process if retained; do not turn five evidence planes into sequential mandatory stages.

## 8. Implementation and code review contract

1. Refresh HAIEC Main. Read current /ai-security/page, metadata, shared nav/footers, /products/runtime-security, developer package pages, product manifests, run-coverage, producer registry, controls/evidence/Assurance owners, SEO and sitemap. Preserve previous September page rebuild rather than replacing it wholesale.
2. Confirm actual route and manufacturer claims for each package; fix version drift through canonical manifest/data owner, not patch copy in five places. Map package-to-SaaS ingestion states and never bypass HELD.
3. Extend the existing hero with an accessible agent-action exposure diagram and one strong example. Add 8 risk-family panels and evidence source/standards layers while compressing duplicate marketing-card content; ensure SSR crawlable copy.
4. Add standards crosswalk separated from technically executable tests and independent assessments. Update OWASP edition by source crosswalk version, not a global string replace.
5. Add combined download credibility only after release gate in §5. Never hard-code dynamic stats in /ai-security TSX.
6. Review every CTA, canonical route, structured-data, sitemaps, mobile, contrast, theme persistence, keyboard access, reduced motion and external links.
7. Use focused typecheck/lint and available route/content contract checks; avoid full expensive system acceptance for an editorial page change. Record actual changed owners and files in Common Repo.
8. **Current authorization is design/planning only:** do not commit, push, PR, merge or deploy production HAIEC website as part of this Common Repo page-design work.

## 9. Distinctive value

The market has many prompt filters, scanner catalogs and red-team tools. HAIEC should NOT claim others cannot do these tasks. Its useful combination is: **technical finding now, consequential path where supported, independent authority comparison, evidence qualification, control-operation proof when connected, decision/receipt.** The security page must help visitors distinguish what was found from what actually happened and what was authorized.