# ISAF v2.0 Framework | Public Research and Methodology Page, Manuscript Distribution, IA, SEO, Customer-Ready Copy

**Prepared 2026-10-20. Scope:** Common Repo page design and publication integration guidance only. No HAIEC production website, Google Drive research manuscript or external publication changed. **Proposed canonical:** \`https://www.haiec.com/frameworks/isaf-v2\`.
**Companion interactive HTML:** [ISAF v2 Framework, light and dark design](design-references/isaf-v2-2026-10-20/isaf-v2-framework-light-dark-interactive.html).
**Research authority:** Final author-issued ISAF v2.0 paper issued 9 October 2026, revised print edition 16 October 2026. User confirms Zenodo release is outstanding.

## Product positioning: framework, not Logger or mandatory evidence intake

**ISAF v2.0: From Instruction to Consequence**, an evidence-bound framework for AI agent governance, authorization, delegation and consequential action, extends the historical ISAF instruction stack with a consequence path and evidence-bound assurance.

Core research formulation from frozen paper:
\`Instruction Stack + Consequence Path + Five Evidence Planes + Delegation Relation + Evidence Spine + Evaluation Epoch + Proof Frontier\`.

**Main value:** Understand what shaped an AI action, where it can lead, whose authority governs the consequential choice, which independent evidence views support the question and how far a conclusion can be defended. The research offers an accountability method. HAIEC is a reference implementation of selected concepts, not the normative standard itself.

**Do not** market ISAF v2 as an additional HAIEC paid plan, a universal deployed control suite, a peer-reviewed international standard, a runtime monitoring product, or a required upload/certification gate for getting source findings. Early source-capable consequence findings remain a supported first step where source is eligible. Full conclusions and external effect claims remain claim-specific.

## Source-of-truth review

### Authoritative Drive research documents, directly read

1. **Final author-issued paper, v2.0, 9 October 2026**
   https://docs.google.com/document/d/1jUfpcbXifVKLm0CBNCB_86bQeAeTOoxSq2nHiRA4egs/edit
   Paper title: **ISAF v2.0: From Instruction to Consequence**. Subheading: **An Evidence-Bound Framework for AI Agent Governance, Authorization, Delegation and Consequential Action**. Intro explicitly says author-issued final research, not peer reviewed. Historical instruction-stack layers 0 to 8. Seven-element v2 semantic core. Preserves five independent evidence planes, Delegation as orthogonal relation, Evaluation Epoch and Proof Frontier. **78 checkpoint** research catalog; benchmark validation is scoped.
2. **Print edition, 16 October 2026**, https://drive.google.com/file/d/1XoTyaCMszrl_dODYkcx28k1H46kdm3es/view . Print QA from gate ledger: 68 US-Letter pages, author-ready print and review copy, publication archive and external evidence rights not yet cleared. Do not assume this Drive URL is safe for anonymous public users.
3. **Executive Evidence Brief, final v1.2**, https://docs.google.com/document/d/1sQF2xbcxSO9sKTBzFA7nBb5_Iz_ar2rwGJ7_7Al7Zqc/edit
   C16 shows 35,559 SATISFIED versus 106,829 NOT_SATISFIED against frozen 60,000 cap (separate genuine scoped runs). C9 is retrospective window-based assessment, not inline prevention. C7 separate original 9/10 and later 10/10 different policy-system remediation, not same-system retest. Use these results sparingly as named limited examples in deeper research, not big homepage marketing counters.
4. **ISAF v2 Canonical Core Freeze**, https://docs.google.com/document/d/1akyF5gjh-qYrHSK5aRlBIcIob0xWHVea45KAXS7ZuX8/edit
   Separates permission, delegation and permission to execute *now*, and freezes exactly five independent planes. Does not authorize conflation of approved policy and delegated business discretion.
5. **Standalone publication runbook**, https://docs.google.com/document/d/1Go2Gb9pL-RBDI4s4NNrMLyIwOu4d3QlS_jdGwSxoTOQ/edit
   Staged standalone publication candidate, source/claim and version freezes, publication disclosure rights and final filename/DOI gate. No automatic website-to-Zenodo linkage should be claimed.
6. **Publication consistency and gate ledger**, https://docs.google.com/document/d/1X-HQZph5kNs5r6hLDSiZIhCX6_roOPgCzpmj0SQM72I/edit
   Historical status entries superseded by final 9 October paper; 16 October print QA says author-ready print, but research archive release, external evidence-pack rights and independent held-out validation are not confirmed.
7. **Research learning overview**, https://docs.google.com/document/d/1Z2_xa3X1rFgFh3qWbEjOsVCrrOsPJdNHhqCAcIHTPQo/edit
   Plain-English evidence-plane and Delegation teaching material. Treat as secondary; master paper wins in inconsistencies.
8. **Standalone public release surface alignment audit**, https://docs.google.com/document/d/14YKw-eUwObNjb2VG6Rj8JaTGwtFCnJDPO7sbtTUtdzQ/edit
   Consult during implementation as a cross-check of the archived release artifact and website integration.

### Website source read

- **\`app/isaf/page.tsx\`** remains the **ISAF Logger** page with Python decorators, training lineage, hash chain and PyPI CTA. It has its own canonical route and must be preserved, not overwritten.
- \`app/isaf/content.tsx\` is a legacy explanatory layer tied to the earlier training-lineage narrative. Do not reuse its "3 lines logs everything" scope as a description of v2.
- \`app/isaf/metadata.ts\` references older ISAF/Zenodo statements. It is separate from \`app/isaf/page.tsx\` metadata and must not be used to imply **v2** is on Zenodo. **Check which metadata module the live route actually exports before changing any claim**. Preserve real older-version publication history where verified, correct misleading v2 references.
- \`app/research/page.tsx\` already discusses delegated authority, research and published papers. New framework page should link to it and gain a research card after release.
- \`components/AutoHideNavigation.tsx\`: Resources → Learn currently contains **Assurance Methodology** and **Research**. Proposed add **ISAF v2 Framework** after Assurance Methodology, before Documentation, with short description "From instruction to consequential action and evidence".
- \`data/public-site-registry.ts\`, \`data/seo-page-intents.ts\`: new canonical must be added at implementation time.
- Verified \`app/frameworks/isaf-v2/page.tsx\` **does not exist** at this review date.

## Menu, URL and distinct intent

**Canonical:** \`/frameworks/isaf-v2\`. Secondary legacy \`/isaf\` continues to mean **ISAF Logger**. Avoid relabeling \`/isaf\` as v2 or duplicating canonical content at \`/isaf-v2\` without an actual redirect.

**Header:** **Resources → Learn → ISAF v2 Framework** immediately after **Assurance Methodology**. Reasons:
- Research framework, not a seventh core production capability.
- Separate from ordinary compliance/regulatory framework listings, which could wrongly imply regulatory endorsement.
- Learn is the right destination for conceptual education, diagrams, the manuscript, and evidence/validation.
- Search links from /research and /frameworks and /methodology keep it discoverable.

**Cross-links:**
- \`/research\` => ISAF v2 framework; include manuscript section when publicly released.
- \`/methodology\` => "Explore research foundation, ISAF v2".
- \`/delegated-action-integrity\` once published => ISAF v2 authority background.
- \`/assurance\`, \`/evidence\`, \`/ai-action-access-map\`, \`/enterprise\` => contextual links, not duplicate large articles.
- \`/isaf\` Logger => small "Looking for the ISAF research framework? Explore ISAF v2" cross-link. On new ISAF v2 page show "Need the Python training lineage utility? ISAF Logger" as footer/resource aside.

**Primary SEO:** AI agent accountability framework, Instruction Stack Audit Framework v2, AI delegated authority evidence, instruction-to-consequence methodology, AI agent evidence planes. Search-volume not verified. One H1, indexable SSR main text, article metadata with \`dateCreated\`/version only if accurate, NOT \`datePublished\` as a Zenodo publication date.

**Title:** \`ISAF v2 Framework | From Instruction to Consequence | HAIEC\`.
**Meta:** \`Explore ISAF v2, an evidence-bound AI agent accountability framework connecting instruction lineage, consequence paths, five evidence views, delegated authority and proof boundaries. Read the research overview from HAIEC.\`
**Hero H1:** **"From what shaped the AI to what its actions can cause."**
**Deck:** **"ISAF v2 traces the path from instructions and system context to agent capabilities, consequential choices and observable effects. It separates policy, permission, delegated authority, implementation and runtime evidence, so conclusions stay grounded in what can be established."**
**Eyebrow:** \`ISAF v2.0 · INSTRUCTION STACK AUDIT FRAMEWORK\`.
**Proof line:** \`Follow the consequence. Compare the authority. Know the evidence.\`

## Full editorial page IA and exact design behavior

### 1. High-value hero
Light-first, editorial serif-free dark-forest typography with near-white cards and moving paper/ink layered effect.
Interactive **"From Instruction to Consequence"** story map shows four readable object groups:
\`INSTRUCTION STACK\` → \`AGENT & TOOL ACTION\` → \`DECISION AUTHORITY\` → \`POTENTIAL / OBSERVED CONSEQUENCE\`.
- Motion: one dotted path illuminates 8 seconds, stops on last visible source-based action, supports pause and reduced motion; never animates actual target effect unless observed evidence shown.
- Header CTA: **Explore the Framework** local \`#framework\`. Secondary **Read Research Overview** \`#research\`. Third **How HAIEC Applies It** \`/methodology\`.
- Optional "Manuscript" link only to approved website-hosted PDF; don't link unpublished external archive or inaccessible Drive.

### 2. Research differentiator
A real question: **"A valid tool call is not the whole answer."** What shaped the action, what it can reach, who authorized the choice, what occurred and what the evidence actually establishes. Source finding first, specific proof limits later.
No false comparison implying every other security product misses these categories.

### 3. Seven-element framework explorer
Interactive **seven** research constructs, all native HTML; each selected card changes a question, one concrete action example, what it establishes and a public deep link:
Instruction Stack; Consequence Path; Five Evidence Planes; Delegation Relation; Evidence Spine; Evaluation Epoch; Proof Frontier.
This is research architecture, not the HAIEC six separate commercial capabilities.
Initial SSR text should explain Consequence Path or Instruction Stack meaningfully without JS.

### 4. Five peers and Delegation
Five independent evidence-plane cards. When clicked, details change to demonstrate Request, Policy Authorized, Effectively Granted, Code Capable or Observed in a familiar refund-recipient case. Delegation orthogonal, not sixth plane. A targeted "needs recipient decision-right context" note can be shown without turning independent source facts into generic UNKNOWN.
This is a **scientific model**; public story stays plain-English, not an evidence-admission checklist.

### 5. What is new over historical ISAF
Nine historic Instruction Stack abstraction layers (0 to 8) remain as ancestry; ISAF v2 **extends** this into consequential operations and authority/effect analysis. The Logger only logs selected training-lineage fields; **not equivalent** to full ISAF v2 deployment. Callout "Framework vs Logger" without suggesting Logger was abandoned.

### 6. How research becomes a defensible conclusion
One consequence case panel:
- Source shows path agent -> tool -> handler -> payment routing API, potential consequence.
- Approved operating policy establishes eligible refund operation or expected recipient if supported.
- IAM grant may show technical API reach.
- Delegated choice question separate.
- Observed effect only from actual qualified observation.
- Proof Frontier describes the precise unanswered question and useful next action.
- Epoch says which code/policy/grant versions are comparable.
No simulated "PASS" stamped by the browser. This is an instructional research example, not a production integration.

### 7. Validation and evidence track
**Do not sell raw number counts as universal success or certification.**
Publication-scope examples:
- 78-checkpoint **research catalog**, distinct from HAIEC 45 cataloged control profiles and 88 framework mapping entries.
- DCD-Bench v0.2 achieved 20/20 **on internally prepared frozen reference-suite expected results**.
- Hardened v0.3 34/34 scoped qualification reported under separate version. Prior v0.2 red-team did expose broader failed properties. No held-out independent generalization claim.
- Joern qualified benchmark and TM Forum evidence provide scoped reproducibility/policy/run evidence, not blanket industrial certification or peer-review.
- C16, C9, C7 are applied cases with exact scope and known limitations. Links to public TM Forum archive if publishing rights are already cleared. Avoid presenting the competition tests as current continuous prevention.
- Main ISAF v2 paper openly distinguishes research design, internal replay and applied external evidence.

### 8. Manuscript release on HAIEC website (publication sequencing)

**Source artifacts already prepared:**
- Final author-issued editable Google Doc 9 Oct, link above.
- **Print edition PDF 16 Oct** Drive file id \`1XoTyaCMszrl_dODYkcx28k1H46kdm3es\`. Current Drive access permissions and rights for public redistribution unknown. Do not scrape into public HTML or expose private Drive file inadvertently.
- Final applied annex and executive summary are separate downloadable pieces once approved.

**Release phases:**
- **Phase A: Public framework explainer** at \`/frameworks/isaf-v2\`. Clearly state **"Author-issued research manuscript, v2.0"** and **"Archive publication forthcoming"** where reader expects publication details. No DOI invented. CTA to current \`/research\` until a public downloadable asset is authorized.
- **Phase B: HAIEC-hosted manuscript** after explicit author/legal artifact review. Export from the **approved final print edition** without changing paper/figures, verify PDF rendering, filename/version/date, checksum, source license, coauthor/advisor attributions and public-rights scope, sanitize any restricted appendices. Host under e.g. \`/research/isaf-v2/manuscript.pdf\` or \`/publications/isaf-v2-2026.pdf\` (pick one stable filename and redirect others). Link primary **Read the ISAF v2 Manuscript** from the framework page and Research hub; preserve existing source doc as private editorial master. Website hosting is a distinct publication/distribution milestone from Zenodo archiving.
- **Phase C: Zenodo** only after upload, DOI live and verified. Add exact DOI / "Cite ISAF v2" links, \`citation_pdf_url\`, structured scholarly metadata with DOI and actual \`datePublished\` then; do not retroactively assert one. Keep website manuscript canonical presentation and Zenodo archival DOI in distinct places.

**No automatic Drive-to-public upload is authorized by this design task.** User says Zenodo not published; treat that as controlling and avoid copying an unrelated ISAF v1 DOI from \`app/isaf/metadata.ts\`.

### 9. FAQ and conversions
Eight to ten customer-ready FAQ:
- What is ISAF v2?
- How is ISAF v2 different from the ISAF Logger?
- What are the five evidence planes?
- Why is delegation separate from permission?
- Does it require runtime monitoring to identify a source risk?
- What is a Proof Frontier?
- Is the framework an official compliance standard or certification?
- Has the v2 paper been released on Zenodo?
- How does HAIEC apply ISAF v2?
- Where can I find the research manuscript?
Answers are confident and factual; no "fictional", "internal", "QA", "prototype", em dash or implementation status codes in customer-visible copy. A single compact provenance statement at bottom may identify research status. Navigation and CTAs operational.

## Customer-ready styling rules from user

- **No em dash (U+2014)** in public text, markup, microcopy or visible menu labels. Use sentence splits, commas or a colon.
- **No internal/QA/fictional/sample runner banners** in customer-visible design. Teaching interaction may use "Explore an example" as ordinary UX, and must not imply a real HAIEC/customer run.
- Avoid engineering notes such as "actual control operation has been verified", all-caps internal states as value proposition, and fake badges.
- Preserve substantive proof distinctions through positive claims: "Shows what the selected source establishes", "Compare the relevant authority", "See what was recorded", "Review the question that needs more evidence".
- Crisp premium light default with dark-mode toggle; contrast, mobile 390px and SSR text first; subtle guided animations and reduced-motion.
- No fake DOI, peer-review seal, standards logo endorsement, certification or blanket production runtime claims.
- No front-end required upload wizard before a reader can explore the framework, source path or DAI.

## Implementation checklist and do-not-push constraint

1. Before implementation, refresh latest HAIEC Main and active Devin local work; preserve \`/isaf\` Logger route and cross-link.
2. Create \`app/frameworks/isaf-v2/page.tsx\` SSR with canonical metadata and isolated client \`ISAFFrameworkExplorer\` interaction.
3. Add registry + SEO intent and Resources → Learn nav entry. Do not place alongside statutory compliance regulation pages as equivalent legal standard.
4. Include manuscript publication status as authored / archive forthcoming; link to actual public website PDF only after approved file is placed and verified. Pre-publication use real \`/research\` link, not disabled download button.
5. Cross-link existing methodology, Assurance, DAI, evidence, System Constellation and Logger. Preserve existing apps, terminal and homepage V3.
6. Focused checks: seven research constructs, five planes, delegation distinction, preview animation pause/play, first-paint light and explicit dark, mobile/desktop, FAQ, SEO HTML, link availability, no em dashes, no synthetic live claims, publication status.
7. User's latest Devin constraint remains **local changes only, do not commit/push/PR/merge/deploy without a new explicit approval**. This common repo design write is planning deliverable, not HAIEC source action.

**Research claim ownership:** ISAF v2 paper/print edition wins over early ledgers or older Logger page. Product facts from current HAIEC source govern claims about shipped functionality. The paper does not turn incomplete product pathways into research conformance claims.

## References and related Common Repo pages

- DAI page design: [DAI plan](WEBSITE-DELEGATED-ACTION-INTEGRITY-DAI-PUBLIC-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md)
- HAIEC Assurance: [Assurance enhancement](WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md)
- Homepage hero: [consequence-led homepage HTML](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html)
- ISAF2 nonblocking findings: [DAI findings-first product contract](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md)
