# HAIEC NYC LL144 Enterprise Solution: Audit Service, Software and Verifiable Evidence

Date: 2026-10-22
Status: Source-reviewed page plan only. Common Repo record, no website edits or deployment.

## 1. Executive decision

Reposition https://www.haiec.com/solutions/nyc-ll144-compliance as the primary **enterprise procurement page** for a combined offering:
1. Qualified professional NYC Local Law 144 bias-audit service, with signed auditor findings when engagement conditions are met.
2. HAIEC NYC LL144 compliance software: ATS/API/CSV intake, deterministic calculation, monitoring/readiness, notices and disclosure.
3. Deterministic Audit Evidence Package with identifiable frozen inputs, method/version, calculated ratios, exceptions, manifest and SHA-256 integrity references.
4. Public Summary of Results publishing support and independently accessible HAIEC Public Evidence Reference (Artifact ID).

**Suggested first-screen H1**: NYC Local Law 144 Bias Audits. Expert Service, Compliance Software, Verifiable Evidence.
Alternative editorial H1: Your bias audit. Your evidence. Publicly verifiable.
Support: US-based NYC LL144 bias-audit professionals bringing former Fortune 100 experience. Complete the engagement or equip your in-house team with HAIEC software. Every scoped result connects calculations, evidence, publication and artifact integrity.
Credibility line: US-based | Qualified NYC LL144 Bias Audit Professionals | Former Fortune 100 Experience | Published Bias Audit Research.
Do not publish city-accredited, DCWP-certified, or regulator-approved auditor labels. Do not place a lengthy justification of professional qualification on the buyer page. Confirm the assigned audit owner and service signoff internally before selling a signed engagement.

Primary CTA: Request NYC LL144 Bias Audit.
Secondary CTA: See Compliance Software.
Tertiary functional CTA: Verify an Evidence Reference, using /verify/nyc-ll144 only after its deployed endpoint is tested.

## 2. Enterprise sales and decision-maker review

| Buyer | Purchasing question | Show on page | Desired next step |
|---|---|---|---|
| CHRO / Talent | Can we keep using hiring AI with current required audit and notices? | AEDT scope, audit freshness, publication/notice workflows | Professional audit |
| Employment counsel | What will stand up to review, and who signed? | Data sources, methods, required rate and impact tables, exclusions, auditor findings | Audit scoping |
| Risk / Internal Audit | Can we later prove which result and method we relied on? | Frozen evidence package, version, digest, public reference status | Both |
| CIO / HR tech | Can it connect to our ATS and keep evidence current? | CSV, scoped API, documented webhook integrations, tenant handling | Software demo |
| Procurement / CFO | What is the deliverable, timeframe, data effort and contract scope? | Service/software comparison, owner and responsibility matrix, scope-based pricing | Sales-qualified inquiry |
| ATS software vendor | Can we streamline evidence for multiple customers? | Versioned AEDT boundary, data provenance, employer responsibility | Vendor discussion |

Buyer outcome emphasis: reduce manual preparation and rework, support timely independent audit, preserve traceability, make public disclosures and repeat review easier. Never invent time or monetary savings.

## 3. Repository-verified product claims and corrected terminology

Primary implementation reviewed in subodhkc/haiec-website:
- app/solutions/nyc-ll144-compliance/page.tsx and metadata.ts: existing page focuses on audit SUPPORT, calculation, monitoring, candidate notices, public hosted summaries, integrations and scope-review form.
- app/services/nyc-bias-audit/page.tsx and metadata.ts: independently positioned managed bias-audit service with signed report and packaged offering, but commercial speed/price needs current sales validation.
- lib/nyc-audit/run-spec.ts: deterministic RunSpec, RunManifest, SHA-256 evidence hashes, methodology identity, bundleId and EvidenceBundle. Determinism is bounded by frozen inputs/config/analysis date and rule/method version.
- app/api/v1/nyc-hiring/audit-pack/route.ts: scoped audit-pack generation, JSON output, persisted pack metadata; verify selected PDF/export path independently.
- lib/nyc-ll144/disclosure-enforcement.ts: hash, final snapshot and publication locking.
- app/api/v1/nyc-public-disclosure/[publicId]/route.ts: public disclosure readback; publicId is distinct from evidence artifact verification ID.
- app/verify/nyc-ll144/page.tsx and app/api/verify/nyc-ll144/[artifactId]/route.ts: public Artifact ID lookup and status including valid, expired, revoked, not_found and tampered, with evidence hash and verification timestamp.
- docs/NYC-AI-HIRING-SYSTEM-OF-RECORD.md and older readiness docs contain historic software-only language that conflicts with newer service marketing and stated qualified audit-service model. A single updated service owner and audit/signature contract should supersede this in source truth; preserve prior documents as historical, do not conceal contradiction by deleting files.
- app/research/page.tsx links paper by HAIEC Lab and KC, S. (2025): "Deterministic Bias Detection for NYC LL144: Why Reproducibility Matters More Than Accuracy", Zenodo DOI 10.5281/zenodo.18056133. The work is an archived technical paper, not described as peer-reviewed.

**Canonical public terms:**
- "Independent NYC LL144 Bias Audit Service" = scoped professional assessment and signed findings when independently reviewed, not just software-generated numerical output.
- "NYC LL144 Compliance Software" = collection, calculations, monitoring/readiness, disclosure and notice workflow.
- "Deterministic Audit Evidence Package" = documented normalized input/source, dates, method version, results, exclusions, manifest and integrity hashes. Do not imply 9 fixed files without confirming actual export branch.
- "HAIEC Public Evidence Reference (Artifact ID)" = an auditable identifier returned for a qualifying artifact and independently checkable through HAIEC. NOT a number assigned by NYC government, legal certification or auditor license.
- "Published Summary of Results" = the employer's distinct statutorily required public disclosure; separate from evidence package and verify-by-ID page.
- "Reproducible" = with fixed admitted dataset, config, method/rule version and date. Not proof hiring model is deterministic, input source is truthful or target environment compliant.

## 4. Official law source and content accuracy

Primary sources:
https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-138530
https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools

Covered employers/agencies using qualifying AEDTs for NYC employment decisions need:
- An independent bias audit within one year before use, with selection/scoring rates, impact ratios across required sex and race/ethnicity and intersectional groups, known unknown-group counts, source description and methodological limitations.
- Public summary with required rates/ratios/source, audit date and AEDT distribution date as specified by rule, hosted/linked from employer employment website and retained appropriately.
- Required AEDT candidate/employee notice at least TEN BUSINESS DAYS prior to use where applicable, and required data/process disclosures.

Four-fifths ratio is a statistical assessment tool, not automatic legal judgment. Chi-square/Fisher may extend methodology but are not universally required by LL144. Avoid "LL144 requires age and disability disparity tables", "intersectional optional", universal "12 months historical data", blanket "30-day public posting" or automatic "fully compliant" claims.

Penalties under local law vary by count/type/circumstance; avoid dramatic ungrounded millions-in-fines calculators, false "$500K per violation", unsupported "fines being issued now", or imagined enforcement acceleration. The Dec 2025 Comptroller report notes 17 potential compliance concerns in a 32-company sample, not a broad measured industry violation rate.

## 5. Landing page storyboard: executive value before method

N0: **Hero** with service + software + public proof. Light-first editorial design with a three-layer document visual: Audit Finding / Evidence Manifest / Public Reference. First CTA requests audit, second software demo. Trust line and current paper credibility.
N1: **What you receive** four short equal-weight benefit chips: scoped professional findings, required audit statistics, deterministic evidence package, public publication and verification reference.
N2: **Choose delivery model** interactive selector: Managed Bias Audit; Compliance Software; Both. Each shows responsibilities, contracted output and suitable CTA, preserving server-rendered text without JS.
N3: **Evidence you can inspect** interactive document viewer with tabs: Audit Results table (sample sex/race/intersectional selection/impact ratio, unknown count, data source); Evidence Package (methodology identity, hash manifest, dataset scope, exclusions, auditor field only when issued); Public Verification (what Artifact ID verifies, validity state and independent link). Do not fabricate real IDs or a green verified badge.
N4: **A complete audit engagement** step cards: AEDT scope/data intake, data quality/normalization, deterministic statistical evaluation, professional independent review and signed conclusions where issued, publication and notice/annual renewal support.
N5: **Software platform** supported Greenhouse, Lever, Workday, generic webhooks, CSV upload, REST API, controls, bias monitoring between audits, notice/disclosure workflow, versioning. Name availability and permissions accurately; avoid blanket "works with any ATS" without configuration.
N6: **LL144 requirements** three independent obligations, annual audit, 10-business-day candidate notice, public Summary of Results. Concise detailed explanation in accessible disclosures.
N7: **Determinism** data -> versioned run spec -> metrics -> SHA-256 manifest -> auditor-review boundary. Link /research paper.
N8: **Credibility** US-based, former Fortune 100 leadership experience, publication with title and DOI, actual capabilities, no fake logos or endorsements.
N9: **Engagement and outcomes** scoped services vs software pricing and evidence owner, no fixed "$7,500 / 10 days" unless approved by sales/service owner.
N10: **Lead form** lightweight intent-aware Audit Service / Software Demo / Both plus company/work email, AEDT type and deadline optional. Preserve /api/contact contract and security controls. Offer privacy-conscious follow-up.
N11: **FAQ and close** coverage, independence, vendor-provided audit, history needed, what happens if disparate results found, public artifact ID vs publication, ongoing monitoring/renewal, data minimization.

Interactive elements:
- Delivery-mode selector, no fake purchase checkout.
- Three-sided evidence document viewer, with accessible HTML tables, provenance and status.
- Optional small deterministic impact ratio explainer on plainly labeled example data.
- No fabricated active scan, automatic compliance claim, or published evidence ID.

## 6. Cross-page and domain SEO reconciliation

Primary commercial buyer page: /solutions/nyc-ll144-compliance
Proposed title: NYC Local Law 144 Bias Audits & Compliance Software | HAIEC
Description: US-based NYC LL144 bias audit services and compliance software. Deterministic statistical analysis, verifiable evidence packages, public disclosures and ATS integrations.
Keywords (volume not verified): NYC local law 144 bias audit; NYC independent AEDT auditor; LL144 compliance software; hiring AI bias audit service; AEDT impact ratio audit; NYC LL144 public disclosure.

Distinct roles:
- /solutions/nyc-ll144-compliance: combined buyer conversion owner
- /services/nyc-bias-audit: deep commercial signed audit service information
- /nyc-ll144-compliance and /nyc-local-law-144: informational requirement guides, should link to buyer owner without near-duplicate transactional copy
- /nyc-hiring-bias: narrower preliminary screening software
- /nyc-hiring-compliance: hiring decision/explanation software but contains old unsupported "$500K" and "100%" claims, must align to law before reuse
- /verify/nyc-ll144: public artifact verification (test deployed behavior before linking prominently)
- /research: paper and technical method

Audit conflicting messages across NYC pages before publishing: /solutions says "support only", /services says "signed independent service", old developer system-of-record says "not auditor"; several older pages disagree on LL144 required intersectional categories, penalty sizes and plan pricing ($299/mo, $349/mo, $99+). Keep research and explanatory material; correct facts and identify one canonical commercial source rather than deleting useful history.

Companion domain nycll144euaiact.com: user-supplied, but both WWW and apex fetch were unavailable and no matching code references surfaced. Treat as companion/possible industry content hub until ownership/actual content and indexing inspected. Do not invent features or copy, or apply cross-domain canonical/redirect without proof. Link only once confirmed; if it covers both NYC LL144 and EU AI Act, separate legal requirements and distinct search intent.

Accessibility and SEO: server-rendered headings, evidence table, plain-text FAQ, one H1, relevant author/review references, shared Next marketing theme, mobile at 390/768/1440, reduced-motion and keyboard. Do not duplicate global header/footer, no heavy client-side indexable text.

## 7. Sales implementation and validation gates

P0 source truth and commercial:
- Confirm service assignment/signature workflow, qualified independent auditor and authorized service owner in actual engagement contract; use affirmative concise marketing without qualifications debate.
- Test real evidence generation/run date/replay/hash, output shape and signed artifact conditions; do not confuse data package, audit pack and public disclosure.
- Verify public Artifact ID creation, redaction, public access, integrity readback and all valid/expired/revoked/tampered statuses on staging then production. The existence of a route alone is not a completed acceptance test.
- Check official LL144 required public summary fields and candidate notices for selected hiring model.
- Reconcile on-site conflicting public prices and legal claims, without gratuitous unrelated privacy/legal edits.
- Ensure buyer intents route to live contact process with proper referral and validation.

P1 design:
- One focused existing Next.js route enhancement, preserving functional form, data integrations and all meaningful prior content.
- Separate SSR editorial sections from client-only evidence and delivery selectors.
- Publish correct title/canonical/internal links and companion link only if verified.

P2 go-to-market:
- Genuine public sample packet/verification identifier after customer-approved/public or synthetic representative data is qualified and verification is actually functional.
- Targeted technical paper backlink, original factual case writeup and procurement FAQ.
- Renewal/ongoing monitoring and software upsell funnel.

Acceptance: visitor sees managed service, software, public proof and US/fortune 100 leadership in first viewport; understands difference between signed audit, versioned evidence package, public summary and artifact ID; sees clear audit vs demo CTA; no fabricated regulator number, official auditor accreditation or legal verdict; no broken/PII-leaking public verifier; all current useful product functions retained.
