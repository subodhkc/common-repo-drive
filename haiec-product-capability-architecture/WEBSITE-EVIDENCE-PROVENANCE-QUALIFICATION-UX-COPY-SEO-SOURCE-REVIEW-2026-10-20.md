# HAIEC Evidence: Provenance, Coverage, Qualification and Trust | Deep Source, UX, Copy, Diagram and SEO Plan
**Reviewed:** 2026-10-20. **Workstream:** Page #26. **Scope:** Public canonical /evidence enhancement, cross-page factual parity and source-truth research. **Status:** Live page HTML and current haiec-website Main files examined; Common Repo source review and plan only. No site changes, authenticated E2E, screenshots, customer evidence export or new artifacts created.

**Canonical URL:** https://www.haiec.com/evidence
**Primary identity:** HAIEC's Evidence product capability, NOT corporate trust evidence pack (/trust/evidence), NOT /assurance decision engine, NOT /assurance-controls catalog and NOT generic public receipt verification (/verify).

## 1. Strategic recommendation
**Preserve /evidence as the public canonical route and enhance in place.** Make it the most understandable explanation of the difference between collected data and **evidence that can responsibly support a specific assurance question**. The strongest differentiator is not a hash or a long list of records: it is **knowing where a fact came from, which system/time it concerns, what it actually covered, whether it is relevant to the chosen claim, and where the evidence stops**.

**Customer-facing promise:**
- Eyebrow: EVIDENCE-BOUND ASSURANCE
- H1: **Know what your AI evidence proves. And what it does not.**
- Value line: **Trace the source. See the scope. Make a defensible decision.**
- Deck: **HAIEC brings source analysis, identity, policy, runtime and supplied records into a traceable evidence view. It keeps provenance, system binding, coverage, freshness and limitations visible so qualified facts can inform your next AI assurance decision.**
- Key differentiator: A source scan can establish a supported code-capability finding early. Permission, delegation and runtime observation answer independent additional questions; a useful source finding does NOT require all five planes to be present.
- Primary CTA: **Explore Evidence in a Real Evaluation** (verified public /sample-reports/kestrel; when linking to a specific evidence tab anchor verify it exists and is stable).
- Secondary CTA: **Review Your Evidence** (authenticated /dashboard/evidence, with correct login callback for unauthenticated sessions).
- Third small link: **Connect Evidence Sources** (/docs/agent-integration for agent workflow or validated system sources docs).
- Corporate pack CTA **Trust and Security / Request HAIEC Trust Evidence Pack** becomes a small secondary contextual link to /trust/evidence near footer. It asks for vendor HAIEC trust material, not a customer's AI-system evidence.

The style should match light-first website brand, readable semantic explanation, optional bounded dark inspector, no giant warning grid, no fake state, no standalone HTML prototype, no duplicated /assurance or /controls page.

## 2. Direct source review

| Owner | Observed implementation | Implication for public product copy |
|---|---|---|
| app/evidence/page.tsx | 16,868 chars/approx. 390 lines. Dark hero; links Kestrel and Trust Evidence Pack; vertical 5-step Source -> Evidence -> Coverage -> Assurance -> Verify graphic; 6 definition sections; 4 simplistic statuses and 6 What Evidence Is Not cards; footer sample-map CTA. No concrete evidence record rendering on marketing page. | Preserve correct bounded evidence philosophy and routes. Replace abstract repeated definitions with one source-backed, clear evidence inspector and choice architecture. Remove mandatory pipeline implication. |
| app/evidence/layout.tsx | H1 owner in page; SEO title "AI Assurance Evidence & Provenance", description repeats generic Source/Provenance/Coverage/Limitations, canonical /evidence, OG and Twitter summary card. | Outcome-led SEO, more distinct from /assurance, /controls, /verify and /trust/evidence; maintain same canonical, no new slug. |
| lib/evidence/evidence-contract.ts | Versioned transient EvidenceEnvelope, distinct producer execution outcome vs coverage contract; CoverageStatus COMPLETE/PARTIAL/UNKNOWN/NOT_ASSESSED; source/target identity, limitations, ArtifactRef/provenance variants. Prisma normalized evidence, uploaded evidence_documents and EvidenceVault separate owners. Producer source is NOT automatically available just because its enum exists. | Do not call coverage COMPLETE "claim established"; producer completed is not coverage completed; an artifact may have some provenance classes but not all. No universal hash chain/Merkle requirement. |
| lib/evidence/envelope-validation.ts | Fails structurally invalid envelope closed; does not reject legitimate UNKNOWN/PARTIAL simply for incompleteness. | Structural acceptance is distinct from semantic claim relevance or assurance pass. |
| lib/evidence/evidence-persistence-service.ts | Canonical evidence key binds organization + producer + run + evidence type + target; same identity+semantic digest idempotent, conflicting digest is conflict; producer-normalized contentHash is an **envelope semantic digest**. Uploaded evidence_documents contentHash is a **file content digest**. | Do not draw an evidence card claiming every "content hash" is a SHA-256 raw document hash or a public independently verifiable artifact signature. Hash meaning follows artifact type. |
| lib/evidence/adapters/adapter-contract.ts | Source adapter is read-only transform into EvidenceEnvelope, with NO_DATA/TENANT_AMBIGUOUS/NOT_READY/ERROR. Cannot create scans or assurance. | Registered producer/read-adapter != an operating live connection; missing data remains missing. |
| lib/evidence/evidence-presentation.ts and lib/evidence/org-evidence-resolver.ts | Shared presentation for org-wide and system Evidence lists. Distinct THIS_SYSTEM, CURRENT_SOURCE, HISTORICAL, ORGANIZATION_CONTEXT, UNKNOWN_APPLICABILITY and UNBOUND. Collected/observed time distinct from server receipt time. Origin label (Found in code, provider, declared, imported) is an **observation channel**, NOT a verified trust ranking. Org-wide library is tenant-scoped and bounded in paging. | The public sample inspector must distinguish source origin, target binding, claim relevance, collectedAt vs recordedAt, coverage and limitations. "Uploaded to organization" != "bound to this AI System". Retired-source historical record != current proof. |
| lib/ai-inventory/system-evidence-resolver.ts | Deterministic system targeting via explicit AI_SYSTEM target or active/retired Connected Asset binding. Merely metadata.aiSystemId or same org is NOT proof of system association. Unbound items preserved. Direct-system association is not proof current topology. | Do not imply every uploaded policy or run is verified evidence for the chosen agent/system. |
| lib/assurance/evidence-set-builder.ts | Builds claim-specific evidence set, epistemic class, snapshot-time eligibility and roles SUPPORTING, CONTRADICTING, CONTEXT_ONLY, EXCLUDED. Different possible exclusion grounds include stale, self-reported not permitted, after snapshot, producer failure, insufficient coverage, irrelevant claim. Set digest determined from scope and members. | Core signature UX: **one record can be useful but not support every claim**. Qualifying context vs support, contradictory evidence and exclusion is where HAIEC distinguishes itself. Avoid "more data always strengthens assurance". |
| app/api/evidence/ingest/route.ts | Machine ingestion is tenant-bound by scoped bearer evidence:ingest, binder validation, minimization and bounded structured batch, not high-volume telemetry intake. Returns deterministic intake receipt; separate OTLP collectors for telemetry. | An ingest receipt means an admissible operation occurred, NOT the evidence is evaluated, fresh, system-qualified or complete. Exact source identity and authorization required. |
| app/api/evidence/upload/route.ts and app/dashboard/evidence/page.tsx | Uploaded file is an org-level evidence_documents record, separate from normalized evidence records. Upload has file limits/MIME check, content hash, pending status. Dashboard deliberately labels upload != system binding and displays canonical records separately. | Distinguish file upload, admitted evidence, qualified system evidence, exact evaluation inclusion. Do not make upload button look like an Assurance verdict or universal "evidence attached". |
| components/evidence/EvidenceItemCard.tsx | Existing customer UI shows bounded origin, observed timestamp, scope badge, coverage and limitation count with optional details. | Reuse language, vocabulary and visual grammar in public example; do not migrate authenticated code/data or leak private records into public landing. |
| lib/assurance/public-verification-display.ts and /verify/assurance/[publicVerificationId] | PUBLIC record integrity status distinguished from revoked, invalid, unknown; integrity binding to HAIEC recorded package does not certify safety/source authenticity or current approval. | Cross-link real /verify route for published Decision Receipts only. Don't promise that every evidence item can be publicly looked up. Hash verification != truth of underlying claim. |
| /trust/evidence | Separate HAIEC corporate auditor/trust evidence pack request. | Demote from evidence product hero as it answers vendor-risk review, not customer's evidence investigation. Keep truthful supporting link. |
| /sample-reports/kestrel and /sample-ai-action-access-map | Public bounded sample report/case and illustrative relation map. | Use frozen qualified case as result example, distinguish it from teaching schematic and customer's currently connected system. No invented live customer observation or universal coverage. |
| E2 / UX-P06 / E6.2 / UX-P11 Common Repo implementation records | Support independent optional entry points, system source connection ladder, evidence surface convergence, public Decision Receipt verification. | Public design can refer to those existing operations but must not imply every optional connector, operating guard or source is active for a tenant. |

**Implementation note:** Current public page's simple four cards are not the canonical enum: it says Established, Partial, Unavailable/Unknown, Not Evaluated. The technical evidence **coverage** enum uses COMPLETE/PARTIAL/UNKNOWN/NOT_ASSESSED and is scoped to producer output; "supports claim" is a separate evaluation-specific role. Do not silently rename or translate across dimensions without headings.

## 3. Findings and recommended enhancements
| ID | Priority | Finding | Recommendation |
|---|---|---|---|
| EV-01 | P0 | Hero pitches abstract philosophical correctness, not an actionable outcome. | Outcome-led, traceability/consequence headline; clear next action and proof example. Keep rigorous wording. |
| EV-02 | P0 | Five stacked arrows suggest every evidence source must move Source -> Evidence -> Coverage -> Assurance -> Verify. | Replace with parallel independent sources -> evidence record/qualification -> optional evaluation snapshot. Put public receipt verification as separate optional branch after publication. |
| EV-03 | P0 | Coverage card "Established" incorrectly mixes a claim-supported meaning into coverage status. | Separate **Producer execution**, **Coverage**, **System/temporal binding**, **Evidence role for chosen claim**, **Integrity**; only exact owner makes each judgment. |
| EV-04 | P0 | No evidence record with actual field-level specificity. | Add attractive HTML/SVG **Evidence Record Inspector** showing Source, observation time, system scope, coverage, limitations, producer receipt/digest role and one chosen claim disposition, with clearly described teaching example or verified public-safe immutable data. |
| EV-05 | P0 | No visual explanation of relevant vs context-only vs contradicting vs excluded. | Add small **"Does this record support the question?"** selector with 3 realistic questions and bounded static outcomes; results must remain illustrative, never queried from an anonymous tenant. No fake HAIEC evaluation status or production metrics. |
| EV-06 | P0 | Two hero CTAs have unrelated intents: Kestrel proof example and company Trust Evidence Pack. | Kestrel public case remains primary; authenticated /dashboard/evidence or first-source setup as secondary. Vendor Trust Pack contextual bottom resource only. |
| EV-07 | P0 | Provenance language "auditable rather than merely asserted" can make *origin label* seem independent validation. | Distinguish **producer channel / self-report / submitted attribution / proof strength**. A provider-origin record isn't necessarily true or sufficiently relevant; transport credential isn't verified human operator identity. |
| EV-08 | P1 | Coverage/unknown is repeated in three sections and six "what not" cards. | Consolidate in a succinct "What this establishes / What remains open" explanation next to example + reader-friendly FAQ. Keep all legitimate caveats accessible, reduce repeated negative framing. |
| EV-09 | P1 | Integrity copy risks "tamper evident" interpreted as all evidence publicly verifiable, immutable, signed or notarized. | Show hash for file content vs envelope semantic digest vs public decision receipt, each with owner. Link /verify for published record only. |
| EV-10 | P1 | A collected result vs a recorded result vs eligible evidence vs evaluated receipt are treated as conceptual flow not separate states. | Explain supported **registered / received / matched to exact AI system and source / admitted and relevant / evaluated in frozen snapshot**. No mandatory full sequence for every useful early finding. |
| EV-11 | P1 | Five HAIEC evidence planes not shown where relevant. | Small independent evidence-view matrix: Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. Clearly identify distinct meanings and optional sources, no forced all-five "pass" or conflation with artifact lifecycle. |
| EV-12 | P1 | Missing clear freshness/change story. | Show source observation time and collected/ingested time separately, active/historical/unbound relation; report evaluated-at/commit when exact evidence shows it. A later upload doesn't rewrite prior frozen evaluation. |
| EV-13 | P1 | IAM/policy and runtime listed as generic sources imply same strengths. | IAM policy candidate evidence != effective grant; runtime response != observed target-side action; policy document != approved human delegation. Each field answers its own question. |
| EV-14 | P1 | No active first-run UI/deep link beyond sample map and platform. | Add 3 distinct customer paths: **See evaluated case**, **Review evidence library**, **Connect eligible source via HAIEC agent/MCP**. Preserve permission to start with source only or governance documents. |
| EV-15 | P1 | Existing diagram/copy diverges from recent Assurance, Controls, Constellation, DAI and MCP designs. | Shared light-first premium brand tokens with dark reader console, colored statuses with explicit text, same customer vocabulary, architecture diagram reuse by adaptation not replacement. |
| EV-16 | P2 | Generic SEO and Twitter summary understate AI agent evidence and provenance/use case. | Outcome-led search title/description, social card and semantic accessible diagram; preserve canonical/no second page. |
| EV-17 | P2 | Trust/evidence confusion across nav and footer. | Add one unobtrusive cross-link "Looking for HAIEC's own security and trust evidence?" → /trust/evidence; never imply customer Evidence page is a corporate SOC 2 data room. |
| EV-18 | P2 | Current UI uses a simplistic no-data/not-evaluated treatment. | Explain NO_DATA source, not connected, unsupported, partial, not assessed and failed separately where actual code supports them; avoid converting them into adverse security findings or passes. |

## 4. Customer-ready copy and story
**Hero eyebrow:** EVIDENCE-BOUND ASSURANCE  
**H1:** Know what your AI evidence proves. And what it does not.  
**Lead:** Trace the source. See the scope. Make a defensible decision.  
**Deck:** HAIEC brings source analysis, identity, policy, runtime and supplied records into a traceable evidence view. It makes provenance, system binding, coverage, freshness and limitations visible so qualified evidence can support the right assurance question.  
**Primary CTA:** Explore Evidence in a Real Evaluation → /sample-reports/kestrel.  
**Secondary CTA:** Review Your Evidence → /login?callbackUrl=/dashboard/evidence (verify logged-in behavior).  
**Tertiary:** Connect Sources with HAIEC MCP → /docs/agent-integration.

**Section 1. H2:** Evidence you can explain, not just collect.  
**Copy:** A useful evidence record answers: Where did this come from? Which AI system, action or source does it concern? When was it observed? What was actually checked? Which claim can it support, contradict or leave open? HAIEC keeps these answers separate so a finding is useful before every related source is connected.

**Section 2. H2:** See the evidence behind an AI action.  
**Copy:** Consider an agent with source-visible code that could update a payment destination. Code analysis can support that the handler exists. A policy record may describe who should authorize that action. IAM evidence may provide only a partial view of permissions. A runtime response trace may not show the underlying payment change. Each record tells part of the story; none becomes proof of a fact it did not observe.
**Visual:** One semantic Evidence Record Inspector with Source/producer, AI system match, source/evaluation time, coverage and one explicit missing proof; clear label indicating a teaching case, not a customer production event. Direct CTA to real Kestrel frozen source evaluation.

**Section 3. H2:** Five questions. Five independent evidence views.
Requested, Policy Authorized, Effectively Granted, Code Capable, Observed. Their answers may be established, partial, unknown, not assessed or source-specific. DAI delegated authority is a separate decision examination and may be supported by policy only with valid delegator identity, scope, time and provenance. This is not a required five-step onboarding funnel.

**Section 4. H2:** The difference between received evidence and usable proof.
**Copy:** A file can be uploaded. An event can be accepted. A scan can complete. HAIEC records these facts without treating them as the same result. An authorized evaluation asks whether the evidence belongs to the exact system and snapshot, is relevant to the chosen control or question, and has adequate coverage and freshness. A record can be supporting, contradicting, context-only or excluded for that specific claim.
**Useful visual labels:** RECEIVED / SYSTEM MATCH / COVERAGE KNOWN / QUALIFIED FOR CLAIM / EVALUATED. These are **questions/attributes**, not a universal hard-coded evidence pipeline.

**Section 5. H2:** Integrity you can check, within the record's scope.
**Copy:** Supported evidence artifacts and reports can carry content or semantic digests, receipts and proof references. A matching hash helps detect changes to the item being checked. When a HAIEC Decision Receipt is publicly published, its integrity can be verified against HAIEC's published record. Integrity verification does not validate the underlying source's truthfulness, prove an action happened or certify that an AI system is safe. Show a direct /verify link with correct published-receipt expectations.

**Section 6. H2:** From evidence to a responsible assurance decision.
**Copy:** Start with whichever authorized source can establish a useful fact. Add missing authority or observation only when it changes the assurance question. A completed evaluation records the exact evidence basis and unanswered questions. Later events or new uploads can inform a new evaluation; they do not silently rewrite a previous decision.
**CTA:** Read Kestrel evidence-backed Evaluation / Explore HAIEC Assurance (/assurance) / View Source and MCP Integration (/docs/agent-integration).

**Concise FAQ:** Does an uploaded document become proof? Does no runtime observation mean no action occurred? What can a source scan establish alone? Does a hash verify truth? What happens to historical evidence? Does an Assurance result change automatically when evidence arrives? What is the difference between public record verification and a SOC 2 trust pack?

**Footer trust link:** Need to review HAIEC's own vendor-security posture? Request the separate Trust Evidence Pack (/trust/evidence).

Customer copy: no em dash, no internal alpha U-codes, no fake "live" telemetry, no self-referential "fictional/prototype" banners. Frame examples naturally as examples; label evidence scope in context. Maintain the terms "evidence," "qualification," "source," "claim support" in simple customer language rather than overloading technical internals.

## 5. Diagram style and presentation
**Instead of Source -> Evidence -> Coverage -> Assurance -> Verify as mandatory sequence:**
- Left: peer source cards (Code and tool paths / Policy and identity / IAM provider context / Observed runtime / Supplied records). Only evidence actually linked is illustrated as linked, not a mandatory full inventory.
- Center: bounded evidence inspector with fixed readable fields (which producer, target/scope, observed time, coverage, limitations, provenance). No unsupported "verified" green badge.
- Right: one selected assurance question and its evidence roles (supports / contradicts / context only / excluded) from actual claim-specific logic, with an **open proof frontier**.
- Separate optional branch: **Recorded evaluation -> published receipt integrity check** (only if issued/published). Do NOT draw public verification as mandatory successor to ingestion.
- Small independent evidence-plane strip below, not relabeled "layers" or connection steps.
- The illustration must be SSR readable as real text + accessible SVG, not a flattened raster image, and must work for dark and light theme using site tokens and reduced motion.
- Preserve existing Kestrel link and sample map link; no new backend, new evidence engine, extra database tables, or route.

## 6. SEO, cross-link and conversion
**Proposed SEO title:** AI Evidence Provenance & Assurance | HAIEC  
**Proposed description:** See how HAIEC traces AI evidence to its source, scope, coverage and limitations, then determines what can support an evidence-bound assurance decision.  
**Search intents:** AI assurance evidence, AI evidence provenance, evidence quality for AI systems, agent evidence verification, AI governance evidence. Differentiate from SOC2 trust evidence pack and compliance certification. Canonical remains /evidence. Update OG/Twitter coherently, improve internal link text and optional breadcrumb JSON-LD only if policy and site registry permit; no fabricated publication reviews, guarantees, universal immutability or certified controls.

Navigation: preserve Product > Evidence; adjacent capability paths link /assurance, /assurance-controls, /ai-action-access-map, /delegated-action-integrity and /docs/agent-integration only when actual routes exist. Keep /verify a public receipt-verification service, not a substitute for the evidence inspector.

## 7. Implementation sequencing and focused checks
**P0:** Fix coverage/claim-support conflation; reframe CTA split; new evidence inspector; accessible, non-mandatory diagram; concise value-led hero; preserve source-truth boundaries.  
**P1:** five-plane support explanation and qualified-evidence roles; show system/current/historical and timestamps; integrity demonstration with exact public receipt constraints; remove redundant denial grids; cross-page style parity.  
**P2:** SEO/FAQ microcopy, mobile/keyboard/dark mode/print polish.  
Implement one focused website PR using existing theme/read-model vocabulary. Public page can use illustrative static educational fields only; must NEVER fetch tenant-only evidence into a public SSR page.

**Focused acceptance tests**
1. Exactly one H1, same /evidence canonical, public SSR text/indexable diagram; HTML accessible at 390, 768, 1440.
2. A producer COMPLETE with coverage PARTIAL is NOT labeled claim established.
3. A record from same organization but no exact system/asset match is NOT shown "this system"; historical retired asset NOT current source.
4. An uploaded document receipt or structured ingest receipt is never labeled an evaluated control result.
5. Self-reported policy evidence is context until claim/authority qualification supports the relevant role; source origin alone is not a trust rank.
6. A source CODE_CAPABLE finding can be useful on its own and is NOT upgraded to effective permission or observed target effect.
7. A content/semantic digest and public integrity receipt only verify the defined object and comparison, not author authenticity, factual correctness or regulatory certification.
8. Late evidence does not mutate a frozen prior evaluation; use exact evaluation identity for any linked case.
9. Sample inspector never reveals tenant names, tokens, hashes, customer PII or private evidence.
10. Three CTAs route to existing qualified public Kestrel, authenticated evidence library and /docs/agent-integration, with /trust/evidence only corporate pack.
11. Static copy route/link tests, focused typecheck/lint; preserve global nav/footer/analytics/theme and link semantics. No full platform E2E or live ingestion required for public educational page.

## 8. Dependencies and authoritative related Common Repo plans
- WEBSITE-ASSURANCE-PAGE-COPY-DESIGN-SEO-MCP-ENHANCEMENT-PLAN-2026-10-20.md (claim and evaluation owner).
- WEBSITE-ASSURANCE-CONTROLS-AND-EVIDENCE-SIGNATURE-PAGE-UX-COPY-SEO-NAV-PLAN-2026-10-20.md (claim-specific control proof owner; not a duplicate).
- WEBSITE-SYSTEM-CONSTELLATION-DEEP-SOURCE-DIAGRAM-AND-THREE-SURFACE-UX-ENHANCEMENT-2026-10-20.md (source/consequence/action path).
- WEBSITE-MCP-AGENT-INTEGRATION-AGENT-FIRST-AND-EVIDENCE-CONNECTIONS-UX-SOURCE-REVIEW-2026-10-20.md (optional evidence sources and real MCP).
- UX-P06-SOURCES-EVIDENCE-ONBOARDING-IMPLEMENTATION-RECORD-2026-10-20.md and E62-OPERATIONAL-UX-CONTROLS-EVIDENCE-CONVERGENCE-IMPLEMENTATION-RECORD-2026-10-20.md (real onboard and evidence states).
- UX-P11-REPORTS-RECEIPTS-PUBLIC-VERIFICATION-IMPLEMENTATION-RECORD-2026-10-18.md (public record integrity).
- HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md and WEBSITE-SEVEN-PAGE-ENHANCEMENT-IMPLEMENTATION-RECORD-2026-10-20.md (existing site, light-first).
- PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md (no design regression).

**Current status:** Commit Common Repo plan + Devin prompt only. Production /evidence is UNCHANGED until a separate authorized website PR. Deployed build may lag GitHub Main; Devin must refresh before edits.
