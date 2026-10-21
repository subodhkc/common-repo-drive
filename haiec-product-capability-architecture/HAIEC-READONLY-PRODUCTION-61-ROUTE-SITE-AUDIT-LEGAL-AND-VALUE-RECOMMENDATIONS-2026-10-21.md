# HAIEC Main Website Read-Only Audit, Production, Plans and Recommendations

Reviewed 2026-10-21. READ-ONLY on HAIEC public website, GitHub repo and Vercel. No HAIEC code edits, commits, PR, test execution, deployment or configuration change. Authorized writes limited to Common Repo documentation.

## Verified current production baseline

Vercel owner-connected inspection of www.haiec.com: production READY, deployment dpl_3EtwkaZQv4SUy4xBfKD2FG75Fn3E, source Main commit 677de7a703b36e1b1abdd1cc125ef05509d133cd, PR #2321 Restructure footer as discovery surface; eliminate nav duplication. This supersedes prior PR #2320 SHA 12ffe445. Commit: https://github.com/subodhkc/haiec-website/commit/677de7a703b36e1b1abdd1cc125ef05509d133cd . PR2321 changed Footer.tsx, public-site-registry.ts, footer-governance test. Preserve it.

61 canonical routes in deployed public registry: Company 7, Platform 9, Solutions 7, Developers 17, Resources 21, plus /security redirect. Registry is not the exhaustive list of indexable legacy/child pages.

Inspection methods: live public rendered HTML/SSR read today on high-intent pages, GitHub source at deployed SHA, Vercel deployment metadata and prior Common Repo plans. CRITICAL LIMIT: No actual graphical browser/computer/screenshot capability was available; cannot certify responsive 390/768/1440 screenshots, keyboard focus, hydration/tabs, after-JS receipt validity, form submission, active runtime control, provider audit or 61-route live E2E. Status is SOURCE IMPLEMENTED / PRODUCTION READY / LIVE SSR SEEN, not BROWSER ACCEPTED.

## Main menu grouped route-by-route recommended dispositions

### Company (7 canonical routes)
| Route | Recommended classification | Evidence or next action |
|---|---|---|
| / | PRESERVE / POLISH | Rich consequence/action story and original animations: preserve. |
| /about | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /contact | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /trust | OWNER APPROVAL | Provider SOC2, source data handling, retention require operational + legal signoff. |
| /privacy | OWNER APPROVAL | 7-year audit vs 90d/2y/7y evidence now differentiated; enforcement/cookies require verification. |
| /terms | OWNER APPROVAL | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /pricing | OWNER APPROVAL | Entitlement vs active Monitor/Protect/MARPP and legacy MARPP name need product approval. |

### Platform (9 canonical routes)
| Route | Recommended classification | Evidence or next action |
|---|---|---|
| /platform | PRESERVE / POLISH | Three pillars and six independent jobs: preserve. |
| /ai-action-access-map | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /delegated-action-integrity | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /ai-security | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /products/runtime-security | TARGETED ENHANCE | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /ai-inventory | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /evidence | TARGETED ENHANCE | Evidence states present; optional claim-specific worked example, only if distinct. |
| /assurance-controls | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /assurance | PRESERVE / POLISH | Scope-specific decision illustrative case; preserve. |

### Solutions (7 canonical routes)
| Route | Recommended classification | Evidence or next action |
|---|---|---|
| /enterprise | PRESERVE / POLISH | Deep priced scope and outputs; form behavior untested. |
| /enterprise/architecture | PRESERVE / POLISH | 12 views; do not duplicate in vertical pages. |
| /assurance-firms | PRESERVE / POLISH | Reviewer workflow now included, preserving independent assessor judgment. |
| /partners/advisory | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /solutions | PRESERVE / POLISH | Four buyer routes, action rail, proof tiles. Legacy Industry Overview link is P0 hazard. |
| /solutions/telecom | PRESERVE / POLISH | Updated SSR: buyer action diagram, four concerns, semantic/AL/TMF selectors; browser tabs untested. |
| /solutions/manufacturing | PRESERVE / POLISH | Updated SSR: Station 217 mismatch, three episodes, four questions, five evidence planes, nine systems; browser tabs untested. |

### Developers (17 canonical routes)
| Route | Recommended classification | Evidence or next action |
|---|---|---|
| /developers | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developer-security | CORRECT | Three independent MIT tools; check links and descriptions. |
| /ai-appsec | CORRECT | New hero present, verify published npm/Semgrep/CLI truth. |
| /mcp-tenant-isolation | CORRECT | Old signed-report, CI and universal SAST-comparison claims remain. |
| /llmverify | CORRECT | Overstated injection guardrails and local audit/PII/runtime claims remain. |
| /packages | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/detections | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/frameworks | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/playbooks | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/ingest | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/relations | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/entities | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/agents | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/guides | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/mcp-playbook | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /developers/changelog | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /api-platform | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |

### Resources (21 canonical routes)
| Route | Recommended classification | Evidence or next action |
|---|---|---|
| /learn | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /resources | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /what-is-haiec | PRESERVE / POLISH | New company/evidence-first narrative live. |
| /why-deterministic | PRESERVE / POLISH | New deterministic evaluation narrative live. |
| /how-it-works | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /methodology | TARGETED ENHANCE | Worked scenario present; no rewrite by size alone. |
| /research | PRESERVE / POLISH | Publication and research/software distinctions stated; preserve. |
| /frameworks/isaf-v2 | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /learn/how-ai-systems-work | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /research/hugging-face-agent-breach | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /research/out-of-the-box-assurance | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /regulations | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /frameworks | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /sample-ai-action-access-map | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /sample-reports | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /blog | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /tools | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /docs | PRESERVE / POLISH | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /solutions/nyc-ll144-compliance | OWNER APPROVAL | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /colorado-ai-act | OWNER APPROVAL | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |
| /frameworks/eu-ai-act | OWNER APPROVAL | Present in canonical registry; only source/route census confirmed in this pass. Focused link/copy QA when on buyer path. |

## Prior plan vs current deployed reality

Solutions page now has four buyer routes, a consequence-to-decision explanation and Kestrel/Manufacturing/Telecom proof tiles. Manufacturing includes native wrong-target source and MFG-EFF-001 REVIEW, separate later held demonstration, selector modules, nine systems, evidence views and case links. Telecom no longer uses a developer shell; has a buyer network action flow, four operator contexts, ontology, AL-state and TMF evidence selector. Assurance Firms now has reviewer workflow. These embody most of approved Common Repo plans #16/#17/#19. DO NOT commission duplicate implementation, standalone HTML conversion or word-count padding.

Live HTML shows those sections plus enterprise POC and Enterprise Architecture 12-view reader. Source shows selector state/useState and accessible button aria-pressed. Browser interaction was NOT actually tested. Recommend specific browser acceptance later and targeted adjustments only for demonstrated problems.

## P0: Legacy industry route chain, not merely a short page

- Canonical /solutions explicitly links /solutions/industries (source page.tsx about line 250). Industry Overview is outside primary canonical registry, but remains public and is linked. Live shows unsupported 100% Automated Evidence, 10x Faster Compliance, HIPAA-compliant AI, guaranteed auditor acceptance, and 20+ regulations without measurement provenance. No new claims should be added.

- Child /small-business-ai-compliance/finance exists and advertises ECOA / Regulation B testing, automated FCRA-compliant notices, SHAP/LIME explainability and unsupported finance penalty examples. Child /healthcare exists in Main and makes HIPAA-compliant AI, pass audits, $49/month and timelines. Child /saas-startups exists with 70%/80% time and cost improvements, $490/month, millionaire ROI and compliance timelines. All need product-operating source plus qualified legal/regulatory owner review.

- The HR/Recruiting child link has no page file in deployed GitHub source and public lookup reports 404. Recommendation: remove it from public navigation or retarget only after identifying a genuine relevant canonical HR/NYC LL144 destination.

- /self-audit is a legitimate redirect to /compliance-readiness-assessment, a questionnaire. A real free questionnaire is NOT a regulatory audit or enterprise POC. Recommend relabel to Free Readiness Self-Assessment and explicitly say outcome is informational, not a certification.

- Owner decision: Keep + correct source-specific factual use cases, review Search Console/backlinks before redirect/noindex/deletion, and consider de-linking Industry Overview from /solutions until inaccurate claims are resolved. Remove unbenchmarked statistics, unsupported legally-sufficient adverse action/HIPAA claims, stale subscription prices. Ask counsel and product owner to approve proposed exact public copy. Legal disclaimer does NOT cure false capability claims.

## P0/P1 Legal, privacy, trust and pricing owner recommendations

| Question | Source/public observation | Recommendation for decision owner |

|---|---|---|

| Retention | Trust/Privacy now state 7y audit/state transitions; evidence 90d unverified/730d verified/2555d locked; pricing scan visibility 30/90/unlimited. data-retention.ts holds constants. | Privacy counsel and engineering should trace deployed purge/hold/ORM jobs and actual execution; contract-specific exclusions. Constants and public text are not operational enforcement proof. Keep visible scan-history windows separate from physical deletion. |

| SOC 2 | Trust says HAIEC own certification in progress, lists end-to-end certified vendors, March 2026 review date. | Security/legal obtain up-to-date vendor assurance reports and exact covered services/periods, distinguish provider certifications from HAIEC certification. Recommend scoped wording and updated date after owner readback. |

| Source/PII | Trust says no source and sensitive production data stored; Privacy includes authorized source processing, optional evidence and public-site RB2B analytics. | Map actual optional uploads, runtime excerpts, source retention and visitor tracking, then publish workflow-specific data processing boundaries and cookie/notice rights; avoid global no-PII claims. |

| Pricing | MARPP, Monitor, Kill Switch SDK, Vault and plan windows promised; FAQ distinguishes paid entitlement from active operation. | Product/commercial owner reconcile 76-activity UI/API/MCP availability, active integration requirements, actual billing and contract. Show Included, Requires Setup, Requires Connected Control, Enterprise Scope as needed. |

| MARPP | Pricing expands Metadata-Anchored Retention & Proof, but historical docs differ; /marpp says ALL database connections. | Product/security owner choose canonical public name, scope specific tables/triggers/privileged exceptions, separate artifact hash from issued Decision Receipt; legal review of compliance mappings. |

| Regulatory pages | NYC LL144, Colorado, EU AI Act and Finance/Health branches require current dates and jurisdiction applicability. | Qualified legal counsel to verify obligations and effective dates; HAIEC offering supports scoped evidence review, not automatically satisfaction or certification. |

| Privacy consent | Public Privacy documents RB2B cookies/company identification. | Privacy counsel validate actual consent/opt-out/data-sharing/subprocessor and retention implementation by geography; do not assert compliant from posted words. |

Sample owner-reviewable positive copy (NOT approved policy): 'HAIEC can evaluate supported technical and governance evidence relevant to a selected control or regulatory question. Framework mapping is not independent audit, certification or legal compliance.' 'Authorized source analysis may use transient processing; separately configured evidence uploads or telemetry follow the disclosed permissions, handling and retention contracts.'

## Corrections to previous audit backlog

Previously flagged /evidence-generation hero numerical 95%/10k was removed in current deployed source. Remaining phrases 'court-defensible documentation' and 'auto-generated policies that match actual implementation' need qualification; don't re-report removed numbers as current. Previous duplicate /how-to-use and /solutions/ai-security redirect definitions NOW have one source entry each in deployed next.config.js; remove that stale task. PR #2321 repaired footer orphan/duplicate navigation issue. All are read-only verified source checks, not changed by this audit.

## Developer product truth (use existing Common Repo plans, do not restart)

Developer Security correctly positions independent MIT packages. AI AppSec new hero is live; verify exact published npm distribution, external Semgrep dependency, stdio MCP and real CLI. MCP Tenant Isolation marketing still claims PROVENANCE SIGNED and broad superiority; clarify package publisher attestation vs scan receipt integrity, 3 read-only MCP tools and optional gated suppression, and actual composite action validity. LLMVerify still uses broad guardrail/blocks injection phrasing; clarify regex/heuristic and PII limits, local audit write semantics and optional unauth HTTP exposure. Already specified in Page #25/#27/#28/#29 detailed audits. No source scanner package feature development suggested.

## Buyer path & remaining evidence accessibility

Actual main public SSR shows Home > Solutions > Manufacturing or Telecom > proof CTA and Enterprise POC route. Also Home > Platform/Assurance > Kestrel real repo REVIEW headline > POC. Live Kestrel SSR initially says Loading sanitized evaluation; telecom forensic case says Loading forensic case; issued receipt page says Verifying decision receipt; manufacturing external Vercel demo renders shell before JS. This DOES NOT establish a broken hydrated experience. Recommend a small source-grounded server-rendered case synopsis for any proof page whose initial HTML has no substantive evidence. Do not duplicate external dashboards or invent digest.

First two viewports of Manufacturing/Telecom already contain consequential domain questions, source scope, record mismatch, authority gap and CTA. Added word count for SEO is not recommended. Visual/browser QA at 390/768/1440, tab selectors/ARIA/keyboard, real report links, reduced-motion and contact form remains pending because no real graphical browser here. Do not claim BROWSER_ACCEPTED.

## SEO and next prioritized work, recommendations only

R0: Legacy regulated industry sales pages and HR 404, with counsel/product signoff and Google Search Console/backlink owner data before URL disposition.

R1: Trust/Privacy/Pricing/MARPP record-class operating proof and SOC2 data handling/owner review; do not mutate policy constants.

R2: Developer three-package accuracy using current plans only.

R3: One real-browser two-path buyer acceptance with responsive screenshots and link clicks, without invented production form submissions.

R4: Optional source-backed SSR proof summaries for Kestrel/telecom forensic/receipt and narrowly scoped Evidence/Methodology explanation. Preserve core home/platform/architecture.

SEO: register canonical intent only after URL decisions. Current root registry does not automatically govern legacy nested industry pages; no arbitrary redirects or search-volume forecasts. New footer discovery structure from PR2321 must remain.

## Status and boundaries

HAIEC site changed files: NONE. HAIEC PR: NONE. Vercel deployment triggered: NONE. Tests actually executed by this auditor: NONE. Read-only tools: Vercel production info, GitHub source at deployed SHA, public web SSR. Common Repo only: this report and separately written recommendations/status index. Do not mark active Monitor/Protect, authority delegation, actual plant/carrier effects, SOC2 readiness or other legal controls as operationally verified by website text.