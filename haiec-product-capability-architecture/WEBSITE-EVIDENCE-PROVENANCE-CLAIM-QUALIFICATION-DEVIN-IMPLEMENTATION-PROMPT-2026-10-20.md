# Devin implementation handoff | HAIEC Evidence Page
**Source audit and design plan:** WEBSITE-EVIDENCE-PROVENANCE-QUALIFICATION-UX-COPY-SEO-SOURCE-REVIEW-2026-10-20.md (Page #26, Common Repo). Read all findings EV-01 to EV-18, verified source paths, proposed customer copy and preservation rules before edits.

## Objective
Enhance the EXISTING public /evidence page on subodhkc/haiec-website Main. Position it as HAIEC's source-to-claim evidence provenance and qualification capability, not a vendor Trust Evidence Pack, file upload store, compliance certification or duplicate Assurance page.

Customer question: **Can I tell which evidence actually supports this decision, what system/time it applies to and where the proof stops?**
Preferred H1: **Know what your AI evidence proves. And what it does not.**
Value line: **Trace the source. See the scope. Make a defensible decision.**
No new public URL, backend evidence engine, database model, source integration, SaaS tool or standalone HTML page.

## Step 1. Refresh code and preserve working surfaces
Read latest Main and current rendered page/route ownership, including:
- app/evidence/page.tsx, app/evidence/layout.tsx.
- lib/evidence/evidence-contract.ts, envelope-validation.ts, evidence-persistence-service.ts, evidence-presentation.ts, org-evidence-resolver.ts; lib/evidence/adapters/adapter-contract.ts.
- lib/ai-inventory/system-evidence-resolver.ts, lib/assurance/evidence-set-builder.ts and relevant epistemic-classifier.
- app/dashboard/evidence/page.tsx, components/evidence/EvidenceItemCard.tsx, app/api/evidence/records/route.ts, app/api/evidence/upload/route.ts, app/api/evidence/ingest/route.ts.
- lib/assurance/public-verification-display.ts, app/verify/assurance/[publicVerificationId]/page.tsx, app/verify/page.tsx.
- app/trust/evidence/page.tsx, app/sample-reports/kestrel/page.tsx, app/sample-ai-action-access-map/page.tsx.
- Existing public theme/tokens nav/footer, /assurance, /assurance-controls, /ai-action-access-map, /delegated-action-integrity and /docs/agent-integration.
- Previous Common Repo plans and implemented UX-P06 / E6.2 / UX-P11 cross-page evidence and receipts.
Make a small source-observed preservation inventory before touching components. Main and current deployed readiness outrank older mocks.

## Step 2. Prioritize evidence truth before styling
1. **Producer result != coverage:** Producer outcome COMPLETE means production job completed; it does not guarantee full coverage. The canonical coverage statuses are COMPLETE / PARTIAL / UNKNOWN / NOT_ASSESSED. "Established/Supporting" is a separate evidence-to-claim role, not a general coverage badge.
2. **Received != qualified != evaluated:** Accepting an uploaded org file, source event, telemetry payload or source scan record is not itself a finding pass, approval, claim support or new Assurance result. Only a fresh authorized evaluation may consume an eligible exact-scope record.
3. **Same org != this AI system:** Use real evidence presentation scope states only. Org-wide records, unbound records, historical retired-source records, and direct system records are not interchangeable or proof of current topology.
4. **Observed time != upload/receipt time:** Distinguish source collection time, persisted-at time and exact evaluation snapshot time. New evidence never changes prior frozen evaluation.
5. **Provenance source channel != independent truth:** Provider-sourced, imported, self-reported and tool-produced metadata must keep their epistemic differences. "Found in code" doesn't establish a tool ran or a user authorized an operation.
6. **One record, multiple roles:** Claim-specific relevance logic may classify a record as supporting, contradicting, context-only or excluded; stale/after snapshot/failed producer/self-report not allowed are meaningful reasons. No broad green evidence score or universal trust badges.
7. **Hash-specific meaning:** Producer-normalized evidence contentHash is an envelope semantic digest, uploaded file may use file digest, published Decision Receipt integrity binds to HAIEC record. Hash verification does not establish source authenticity, claim truth, certification or universal immutability.
8. **IAM/DAI/Runtime:** IAM policy sources may be PARTIAL not canonical EFFECTIVELY_GRANTED, document delegation may be declared not approved, observed endpoint response may not prove target-side effect. Five evidence planes are distinct views, not compulsory onboarding steps.

## Step 3. In-place product layout / customer-ready copy
**Hero, light-first:** eyebrow EVIDENCE-BOUND ASSURANCE. H1 above. Supporting line "HAIEC brings source analysis, identity, policy, runtime and supplied records into a traceable evidence view. It keeps provenance, system binding, coverage, freshness and limitations visible so qualified facts can inform the next assurance decision."
Primary CTA: "Explore Evidence in a Real Evaluation" -> existing /sample-reports/kestrel; confirm case details and exact link. Secondary "Review Your Evidence" -> auth-aware /dashboard/evidence (preserve login callback). Small link "Connect Evidence Sources" -> /docs/agent-integration. Move corporate "Request HAIEC Trust Evidence Pack" to small dedicated footer vendor-trust resource, not hero.

**Signature first-viewport evidence inspector** (semantic HTML, optional native SVG/accessible relation list; no screenshot): sample source; matched system/scope; collection date; producer coverage; one limitation; what it does/doesn't establish; matching claim role and reason. If example is explanatory rather than real public case, label naturally "For example" rather than product-sounding real customer scan. No fake hashes, report IDs, current connection status or success claims.

**Evidence flow: independent sources not forced pipeline:** five optional source families (code, identity/policy, IAM, runtime, supplied records) converge only via exact, established evidence/binding. From a record, show distinct claim-specific support/context/contradiction/exclusion and optional new evaluation; separate optional published receipt verification. Do not reuse old forced Source -> Evidence -> Coverage -> Assurance -> Verify vertical arrows.

**Make meaning understandable:** show "Where from? Which system? When observed? What checked? Which question supported?" and an expandable details region with producer coverage and limits. Do not turn five evidence planes into evidence lifecycle stages. Show compact five independent views: Requested / Policy Authorized / Effectively Granted / Code Capable / Observed with appropriate qualification and link to DAI.

**Qualification story:** explain multiple levels of evidence: source collected, valid structure, bound to target, relevant for exact claim, in evaluation snapshot. Preserve existing correct arguments (evidence not assurance, absence not pass, integrity not truth, framework mapping not certification) but consolidate six repetitive warning cards into a positive explanatory block and FAQ.

**Integrity story:** show content digest versus envelope semantic digest versus Decision Receipt integrity. Point to /verify for supported **published** receipts only. Do not promise every generic uploaded file gets public verification or cryptographic signing.

**Relationship to rest of HAIEC:** optional accurate links to /assurance (evaluation), /assurance-controls (control test/evidence), /ai-action-access-map (action reachability), /delegated-action-integrity (decision authority), /docs/agent-integration (MCP/source setup). Mention each in one sentence at most; don't duplicate their content.

**Finish:** One clear CTA with real case and auth-aware evidence library. Separate small "Need HAIEC's own vendor trust evidence?" to /trust/evidence.

## Step 4. UX/brand and code limits
- Premium light-first and dark-compatible; preserve global nav/footer and theme conventions from merged website changes. This page already has meaningful text, keep its content structure but reduce vertically repetitive definitions.
- Semantic accessible HTML text supports SEO. Native SVG can enhance explanation but must not be sole source of text. Responsive 390/768/1440, keyboard, focus, reduced-motion, no color-only status.
- SSR public page must NEVER query org-scoped /dashboard/evidence or API/evidence/records without permission; don't copy tenant data into marketing. Make no new client API calls or fake demo accounts.
- No internal reviewer or sprint labels, "fictional/prototype" banners or em dashes in public copy. Customer limitations remain precise and relevant without giant bright-warning boxes.
- Preserve all existing working links and actual relevant copy; verify existence of /sample-reports/kestrel page and identity. Don't blindly link an anchor that does not exist.
- Use existing site style and available diagrams as visual reference; avoid importing giant static HTML and creating duplicate components.

## Step 5. SEO
Keep exact canonical https://www.haiec.com/evidence. Suggested title "AI Evidence Provenance & Assurance | HAIEC". Suggested description "See how HAIEC traces AI evidence to its source, scope, coverage and limitations, then determines what can support an evidence-bound assurance decision." Update OG/Twitter coherence and semantically relevant FAQ if useful. Preserve distinct intent from /trust/evidence (HAIEC corporate trust), /verify (public receipt check), /assurance (deterministic decision) and /assurance-controls (control catalog). No fabricated metric, cert, global immutable guarantee or item count.

## Step 6. Focused tests (not broad E2E)
- SSR H1, metadata, sample/owner links and authentic CTA. Scoped auth callback verified.
- Producer COMPLETE / coverage PARTIAL cannot imply claim established. UNKNOWN / NOT_ASSESSED not PASS; no blanket coverage COMPLETE.
- Same org but no exact system match remains org/unbound, not "this system".
- Historical retired asset stays historical and display never says current policy authority automatically.
- Recorded-at and observed-at distinguished; evidence received later doesn't rewrite historical evaluation.
- Claim evidence role context/contradict/support/excluded illustrated without claiming public UI actually executed tests.
- Uploaded document and evidence:ingest receipt not automatically claim-qualified.
- Public receipt integrity never equals safety, underlying source authenticity or certification; revoked/unknown states not "verified".
- Code finding can stand alone without IAM and runtime; IAM partial source not auto Effective Granted, runtime response not external effect witness.
- Responsive/mobile/theme/keyboard/copy/SEO check, static no-private-data, basic lint/typecheck and in-place public page smoke only.
- One focused PR, no backend/engine expansion, report changed files, before-after explanatory story, verified source constraints, targeted checks, remaining blockers, no manual production deployment.

The current task is a Common Repo plan, not authorization to modify or deploy website. Implement later only after latest Main refresh and required repo checks.
