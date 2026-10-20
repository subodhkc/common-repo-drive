# HAIEC Pricing — Commercial Architecture, Entitlement Truth, Buyer Copy, FAQs, Dual-Theme Design & Preservation

**Date:** 2026-10-20 · **Page:** https://www.haiec.com/pricing · **Page #7 in sequential audit**  
**Status:** **COMMERCIAL RECOMMENDATION / EDITORIAL PLAN ONLY.** Current price points, entitlement grants, trial operations and public routes **NOT ALTERED** in the HAIEC production repo. Do not publish hypothetical included systems, seats, add-on pricing, FIRM permissions or Enterprise annual subscription without commercial sign-off and code/Stripe acceptance.

**Primary finding:** The current page already has a sensible **three-buyer-motion commercial architecture** (self-service, founder-led Enterprise POC, FIRM). **Keep it.** Improve what the buyer gets, how they try HAIEC, and how they grow. **Do not turn a consequential Enterprise Assurance POC into a $999 SaaS tier or force all audit firms into a generic seat package.**

## 0. Standards and controlling owners

- [Public HAIEC brand, voice and dual light/dark standard](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md)
- [USP, keywords, four-word descriptor and storytelling](HAIEC-POSITIONING-USP-FOUR-WORD-SEO-AND-STORY-SYSTEM-2026-10-20.md)
- [Source-capability/packaging/MCP inventory](HAIEC-SOURCE-BASED-CAPABILITIES-PACKAGES-MCP-TRYOUT-MATRIX-2026-10-20.md)
- [Enterprise POC offer and conversion enhancements](WEBSITE-ENTERPRISE-PAGE-COPY-DESIGN-SEO-CONVERSION-PLAN-2026-10-20.md)
- [Controls catalog vs qualified proof](WEBSITE-CONTROLS-PAGE-COPY-DESIGN-SEO-PROOF-ENHANCEMENT-PLAN-2026-10-20.md)
- [Methodology exact source/proof and DAI release gate](WEBSITE-METHODOLOGY-PAGE-DETERMINISTIC-DAI-REACHABILITY-EVIDENCE-AND-NAVIGATION-PLAN-2026-10-20.md)
- [Prior CTA/section preservation contract](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md)
- Controlling [Drive Website Positioning/Enterprise v4](https://docs.google.com/document/d/15Syrdh5kjfKaBSDJ8yd26gQvBPfURSgvsm7ujvIGNXU/edit), [Drive site-convergence v4.2](https://docs.google.com/document/d/13ESOED8G9K0g9_lZq9Q7ENObREuw5o-mSNq6yPsl8mc/edit), [Drive trial lifecycle proposal](https://docs.google.com/document/d/14uAII_Jobx5KDCx1W0-kDH7gfTnEeqGQ0pt5aK2FnDE/edit).
- Market reference (public third-party pricing, **not matched scope**): [Credo AI AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-x67krdatcdday) private offer scaled by governed use cases and contract usage; [Vanta Pricing](https://www.vanta.com/pricing) enterprise quote-led / modular tiers; [Drata Plans](https://drata.com/plans) differentiated GRC and Assurance pathways; [Credal Pricing](https://credal.ai/pricing) separate builder/user seats + indexing + usage. These **illustrate selling models**, not credible dollar-for-dollar HAIEC competitor price benchmarks. No measured willingness-to-pay/customer cohort was available in this audit.

### Exact current HAIEC source observed

Source repo \`subodhkc/haiec-website\`, Main \`e4e46c36ce23fe4be5011051558077630abeab5d\` and public HTML fetched October 20, 2026:
- \`app/pricing/page.tsx\`, blob \`cb37d3a19ee9bef5b5c74a75a60c573154a5498f\`: large interactive page, three self-service cards, independently framed Enterprise POC + FIRM sections, three-path chooser, platform-vs-enterprise table, extended side-by-side comparison, **ten FAQs**, trust badges, social-sharing, annual/monthly switch, analytics, multiple CTAs. Current copy is lengthy but substantial; **preserve meaningful content and controls** instead of redesigning from scratch.
- \`app/pricing/metadata.ts\` and \`app/pricing/layout.tsx\` are actual SEO owners, with canonical \`/pricing\` and SoftwareApplication schema; page client component must not duplicate.
- \`data/commercial-offers.ts\`, blob \`7751b3b2fed338502c217df4ed1db315ca96a19a\`: **PRESENTATION owner**, SCAN $99 / 1 seat / 10 pipelines / 500 executions / 10 inventoried systems; DEFEND $349 / 3 seats / 50 pipelines / 2000 executions / 50 systems; ASSURE backend \`certify\` $999 / 10 seats / 200 pipelines / 10000 executions / “unlimited” inventory; 30/90/“unlimited” history displays; 14-day SCAN trial; FIRM custom separate and not checkout. Enterprise typical $25K–$75K bounded POC, 4–8-week initial evaluation after readiness subject to SOW.
- \`lib/pricing-config.ts\`, blob \`710e56faeb3d19a04391cc0dc88b9780e9b21baa\`: **price and Stripe identifier owner**. Exact annual Stripe-config expected cents: SCAN **$950.40/year**, DEFEND **$3,350.40/year**, ASSURE **$9,590.40/year** (20% reduction vs twelve months at full price). Presentation rounds as $950/$3,350/$9,590 and monthly equivalent $79/$279/$799; checkout uses different \`Math.floor(monthly*0.8)\`, creating displayed/quoted mismatches. Stripe Price IDs must be verified separately: source presence of environment key is not proof deployed Stripe prices match.
- \`lib/access-control.ts\`, blob \`84ef1d0967fa86be187fc2bcd4cc65363db09e93\`, and \`lib/feature-access.ts\`, blob \`3c9226dfc686e57c76fb41a11f9e48067d711540\`: canonical **feature entitlement enforcement** (with legacy key mapping), user subscription/usage model; **did not establish seat-specific organization membership enforcement in reviewed owner**. Declaring \`seats:10\` in presentation is not the same as denying an 11th seat; require end-to-end enforcement verification.
- \`lib/pricing-config-NEW-FEATURE-MATRIX.ts\`: file explicitly says future replacement of existing matrix, not proof it is production authority. **Do not source release claims from aspirational replacement.**
- \`app/checkout/page.tsx\`, blob \`5916e08cba556b31122c8b3fa652f60f107dac17\`: separate local price/feature catalog, annual UI calculates floor-based discount, submits to \`/api/stripe/create-subscription\`. Must reconcile with canonical price/entitlement and confirm trial.
- \`app/api/stripe/create-subscription/route.ts\`, blob \`3ada25d5b59ef026e24d37a91f4e751b82e70763\`: authenticated card-required Stripe subscription creation, SCAN monthly conditional 14-day trial, and no FIRM/Enterprise auto-offer. Validate input allow-list and exact recurring amount on live Stripe test mode, no key exposure.
- \`app/api/stripe/create-checkout-session/route.ts\` separate Stripe Checkout path; blocks FIRM/enterprise and SCAN on this route. **Multiple checkout paths ≠ automatically one successful checkout journey**.
- \`app/signup/page.tsx\`, blob \`74841a2831ef8011525db26aa79348ef2ebfac6f\`: **promotes “Start Your Free 14-Day SCAN Trial — no credit card required”**; the **pricing FAQ and /checkout** state **payment method required for SCAN trial**. These are distinct product paths and present a conversion/trust inconsistency that MUST be resolved in copy after checking actual signup API/trial entitlement/expiry.
- [Drive trial lifecycle plan](https://docs.google.com/document/d/14uAII_Jobx5KDCx1W0-kDH7gfTnEeqGQ0pt5aK2FnDE/edit) proposes **no-card 14 + 14 extension, day-30 downgrade** and flags expiry gating, but is **an implementation proposal**, not evidence the 14+14 behavior shipped. Do not publish “28 days free” or ASSURE-level signup entitlement without code acceptance.
- \`app/assurance-firms/page.tsx\`, blob \`1f14c23548d038d65e13f2f0a2f7fabec8edf63e\`: currently offers **reviewer flows where enabled, evidence handoff, authorized API access and framework mapping**. Firm retains professional judgment/certification authority. **Multi-client segmentation, client billing, resale and white labeling are NOT established as turnkey shipped FIRM entitlements** from this page.

## 1. Commercial architecture decision

**Recommended three buying motions — same as already built, stronger naming**:
1. **Self-Service Platform:** recurring workspace subscription, customer-operated tools and qualified capabilities. SCAN / DEFEND / ASSURE are nested capability levels *for self-service only*, not a lifecycle requirement or full company capability list.
2. **Enterprise Assurance:** **sales-led** high-consequence evidence project, typically starts with the **$25K–$75K scoped POC**. After successful POC, propose a distinct **annual Enterprise Platform & Assurance Operations contract** priced on scope, consumption and integration, with SOW. **This annual retainer/contract is a PROPOSAL, not an existing published SKU or price.** The $999 plan is *not* the prerequisite for POC and does not include the POC team.
3. **Assurance Firms:** **FIRM** sales-led professional practice agreement/partner offering, with reviewer evidence and client-specific access established contractually and technically. **No invented “certification” rights** or multi-client portal guarantee.

**Do not frame as “four ascending tiers” or force an enterprise client to sign up at $999 before evaluation.** Different motions address different buying intents.

### Self-service naming and audience — RECOMMENDATION, not implementation

| Backend ID (PRESERVE) | Customer-facing card (KEEP brand, optional audience subtitle) | Current price (KEEP) | Proposed buyer | What buyer gets / supportable promise | Existing indicative seats |
|---|---|---|---|---|---|
| \`scan\` | **SCAN — Developer** | **$99/month** | Startup founder, builder, small dev team beginning evidence collection | Source-backed AI security and action/access **visibility**, basic inventory, web results and bounded source scan, known coverage; no automatic assurance/complete discovery | **1** |
| \`defend\` | **DEFEND — Team** | **$349/month** | SMB engineering lead, AppSec/security team | SCAN plus supported technical security checks, controlled runtime/adversarial checks where ready, CI/CD/SARIF/PDF and team handoff, scoped limits | **3** |
| \`certify\` | **ASSURE — Business Assurance** | **$999/month** | Growth-stage to midmarket teams preparing release/security/assurance decisions | DEFEND plus **qualified** assurance decision/report/evidence package, controlled human review and provenance/receipt workflows **where actual source and tier support them** | **10** |

**Key point:** At $999 an ordinary enterprise team may need proper assurance without being an auditing firm. Keep ASSURE sold to direct customers. A tiny audit shop may choose ASSURE **for its own internal AI environment**, but serving multiple client organizations under contract needs a FIRM agreement and verified tenant/client entitlements.

### Feature promise tiers — truth before upsell

**Common and native foundations across eligible product flows, not guarantees for every price:**
- System setup / supported source admission and provenance; source-visible agent/action context
- Qualified source and selected scan observations within actual feature gates
- Report/evidence access under the plan and actual evaluation availability
- User keeps honest UNKNOWN/NOT_ASSESSED; a tier cannot buy automatic “PASS”, tenant native block or qualified delegation that lacks authority evidence.

**SCAN differentiated value**: “See what your AI can reach in the repository — and what remains unknown”; selected source analysis, scoped inventory, web evidence observations, 14-day entry path (resolved truth). Do not promise every six-platform capability in a $99 tier or independent executive receipt with all evidence sources.

**DEFEND differentiated value**: “Validate engineering boundaries before AI code ships”; CI integration, technical findings/report exports, supported adversarial test where target and consent enable it, triage; **CI/CD ‘block on critical’ only for configured CI gate**, not automatically all running target calls.

**ASSURE differentiated value**: “Put qualified evidence behind a release decision”; eligible U5 deterministic claims, canonical U6 reporting and receipts, review/decision workflows where available, export and retention according to real limits. **MARPP = SHA-256 tamper-evident where implemented, NOT cryptographic signature and not proof of external effect**. Compliance Twin monitoring and Kill Switch must be **marked integration/availability-dependent** until per-deployment acceptance, not marketed as always-active/universal protection.

**FIRM independently sold scope**: client-restricted reviewer workspaces, separation of customers and engagements, peer review queues, signed professional reports (where the firm signs its own artifact), evidence export and provenance, API/MCP integrations, multi-client usage/practice billing — **some of these are future requirements or custom scope**, not proven shipped. Sell the **evidence layer**; CPA/assessor/legal certification role remains theirs.

**Enterprise independently sold scope**: one scoped system + consequence + explicit authority and evidence frontier, selected integration setup and human decision readout; ongoing system counts and additional producers/monitoring/intervention as *separately priced scoped expansions*. No false “unlimited enterprise guarantees”.

## 2. Seat model — an enterprise-friendly answer

**Recommend base platform/workspace fee with seats *included*, NOT per-seat-only revenue model.**
- Current **1/3/10 included seats** are reasonable to retain initially, **subject to org membership, invitation and actual enforcement verification**.
- **Proposed commercial definitions (NOT current contracted entitlement):** “Seat” = human user with recurring interactive access; service/API credentials are not human seats but have *separate governed key quotas*; one seat across all orgs? Define per-org license under contract. Role-based permissions apply. Review-only access and external auditors should be **free/limited viewer or separately scoped, not full builder seats**, if authorization and tenant isolation verified.
- Additional seats: avoid public dollar per-seat until real seat billing and RBAC licensing flows exist. Allow selected **pooled team packs/additional seats** only with approved price/feature entitlement and Stripe add-on implementation. Example pricing hypothesis for experiments, not public claim: +$20–$40/month per builder on DEFEND; +$30–$60 on ASSURE, volume negotiated, **but** prioritize systems/evaluations before maximizing seat ARPU; alternatively one pooled +5 seat pack.
- **Value meters** (define exact billable unit before launching): included AI systems/assigned boundaries, **successful billable evaluations** distinct from scan attempts/duplicate retries, connected sources or repo count, storage/retention and optional runtime/adversarial tests; permit burst/retry/failed operations transparently. Existing 10/50/200 “pipelines” and 500/2000/10000 “executions” should remain **only as currently enforced**; do not relabel to canonical assurance runs or change price metric by copy.
- Annual enterprise model: annually committed workspace/system/baseline evaluation volume + priced technical onboarding/integrations + contracted storage/monitoring/target-native safeguards. Named reviewer viewers allowed at reasonable scope; no per-seat squeeze for security committee.

**Why:** Enterprise procurement budgets around systems/consequential decisions, protected data and reviewed workflows; a large audience reading one report should not make HAIEC uneconomical to adopt. Conversely unconstrained evaluations, expensive runtime tests, 10K runs and infinite retention can harm gross margin. Price should correspond to **evidence collection/computation/evaluation and consequential coverage**, not arbitrary human headcount.

### Self-service vs Enterprise/partner price and sales gates
- **$99** can remain entry price/PLG discovery; do not discount further without conversion data.
- **$349** offers team workflow, APIs, exports and bounded runtime tests; keep as most approachable expansion. Avoid promising “complete security enforcement”.
- **$999** is a meaningful business assurance workspace with provenance/decision outputs, not a certification label, not exclusive to auditors.
- **$25K–$75K POC** is a distinct founder-led professional engagement (and therefore much more enterprise-conversion relevant than 10× more self-service traffic), not prepayment of Enterprise annual SaaS. SOW defines access, 4–8 weeks after readiness typically, outcomes and stop conditions.
- **Enterprise annual subscription**: after a validated POC, custom quote/contract. No invented ACV floor or published tier quote until unit economics, implementation and customer acceptance justify it.
- **FIRM**: custom practice agreement; no public $999 “firm plan”, no default resale/white-label claim without licensing/tenant acceptance.

### Unit economics / pricing validation experiment (30–60 day plan, NOT background task)
- For 3 direct enterprise prospects and 3 firms, record actual buyer problem, number of evaluated systems, connected sources, number of technical/reviewer users, required approved tests, evaluation count, intended integrations and POC conversion gates. Use this to test willingness to pay and segment profitability; **do not use hypothetical $999 for all auditors**.
- COGS model per one exact qualified evaluation: source scanning minutes, runtime test vectors/time, evidence storage/report generation, connector calls, retained history, technical support and onboarding. Set evaluated-system and authorized-test capacity accordingly.
- Track ARR/margin by source/evaluation, not only registered “pipelines”. Validate Stripe annual price against displayed amount for each tier.
- Firm: assess customer client-count (1, 5, 20), segregation, reuse/licensing, authorized auditor viewers, need for white label; quote base practice + number of contracted client workspaces/assurance engagements + usage; price depends on legal resale rights.
- Enterprise: do **not** price a $25K–$75K paid POC as an awkward seven-figure paywall; define exit readout and annual operating contract separately.

## 3. Production claim/trust gaps — high priority before making design prettier

| Gate | Source observation and impact | Exact corrective decision |
|---|---|---|
| **P0: two contradictory trial entry journeys** | /pricing and /checkout say **card required for SCAN 14-day trial**; /signup says **no card required for SCAN 14-day trial**. Drive describes no-card extension but not release-proof. | Choose canonical **“Try HAIEC for 14 days” → no-card /signup** as recommended primary low-friction path, **if** signup API proves the actual plan, trial expiration/entitlement, abuse protection and transition. Keep an explicit separate **“Start trial with card / automatic paid renewal”** checkout option only if deliberate. Do not silently rewrite billing. If no-card trial cannot be verified, current paid checkout must be explicitly described accurately while signup discrepancy resolved. |
| **P0: seat entitlement truth** | 1/3/10 are display fields; reviewed feature/access owner did not prove org membership seat limits, additional-seat payment, reviewer role or firm client ceilings. | Define billable seat precisely; trace org invitation/role and deny case, Stripe subscription/tier, and API; if unverified display “included users subject to plan access” only after confirmed, not an enforceable license promise. |
| **P0: billing amount mismatch** | Pricing presentation annually shows $79, $279, $799 and $950, $3350, $9590; config stores $950.40, $3350.40, $9590.40; checkout uses floor(monthly×0.8), not exact source. | Source all three from \`TIER_PRICES\` in cents, render **$79.20 / $279.20 / $799.20 monthly equivalent, billed $950.40 / $3,350.40 / $9,590.40 annually**, or explicitly label rounded amount as approximate; test actual Stripe recurring prices and quote; retain 20% discount only if Stripe truth matches. |
| **P0: default/missing entitlement may be permissive** | \`getFeatureLimitForTier()\` in pricing-config returns \`limits[legacyKey] ?? limits[tier] ?? null\`; \`null\` is “unlimited” and unknown/missing tiers can therefore collapse to “unlimited”. \`normalizeTier()\` permits arbitrary tier string pass-through. | **Investigate carefully** with code-level negative tests: unknown plan/key must fail closed; preserve *intentional* explicit \`null\` (unlimited) for recognized keys, but never infer unlimited from absent mapping. Check callers before change. |
| **P0: FIRM route eligibility** | FIRM present in backend tier types/Stripe keys, but presentation is explicit engagement-only; separate checkout handler has FIRM price entry though blocks FIRM route and direct create-subscription lacks an explicit strong tier allow-list in inspected section. | Reject self-service \`firm\` and \`enterprise\` at **every** direct subscription endpoint, not UI-only, unless approved custom provisioning/contract. Validate plan/cycle server-side; don't allow a client to request uncontracted FIRM trial or Stripe Price ID by body. |
| **P1: trial lifecycle and renewal FAQ** | /pricing FAQ “payment method required”; /signup “no credit card”; checkout paid auto-renew; proposed Drive trial 14+14 is not verified shipped. | Explain exactly the entry path, trial scope, whether renewal is automatic, card collection, cancellation/refund, expiry and 14+14 only if live; link policies. Preserve funnel behavior until approved. |
| **P1: broad feature flags vs actual effects** | \`data/commercial-offers.ts\` has \`hasKillSwitch,hasComplianceTwin,hasAssurancePackages\` for ASSURE; pricing says 121 rules, 14 runtime categories, full board reports, unlimited scan history, CI block. | Each row must have \`AVAILABLE / REQUIRES_SETUP / TARGET_INTEGRATION / LIMITED / ENGAGEMENT_ONLY / NOT_ESTABLISHED\` derived from actual production+entitlement; no full target-native kill switch, universal monitoring, complete audit certification or unsupported 121 exact rule execution claim. |
| **P1: retention “Unlimited”** | Display says unlimited scan history; data storage, legal retention, per-tier and billing policy not verified here. | Qualify policy-backed retention (e.g. “contractual retention tier”) and cost cap; don't advertise infinite retention until true and supportable. |
| **P1: self-service vs Enterprise story** | Existing copy correctly distinguishes motions but feature comparison can imply every ASSURE buyer has enterprise POC deliverables. | Keep separate distinct sections, POC statement and value/outcome example; no enterprise tier auto-substitution. |
| **P2: SEO/schema / accessible pricing** | Current pricing metadata SoftwareApplication offers, fixed colored cards, many feature abbreviations and FAQs. | One metadata owner; application offer actual pricing only; ensure no double brands / fictional customer logos; theme tokens and mobile comparison/table scroll; native visible FAQ text, accessible annual toggle, no unsupported FAQ rich result promise. |

## 4. Page structure and proposed copy — publishable candidate, must pass product truth

**Framing:** Existing *buyer motions* above the fold are good. Keep them, but expose **a useful “what will I get?” proof unit** and place Enterprise visibly for decision-makers. Do not erase the full detailed comparison or educational FAQ; move dense catalogs lower via accessible disclosure.

### P0 Hero
**Eyebrow:** \`AI AGENT SECURITY & ASSURANCE PRICING\`  
**H1 (recommended, grounded):** \`Choose the assurance your AI decision requires.\`  
**Deck:** \`Start with technical visibility, expand to independent security validation and evidence-bound assurance, or scope a consequential enterprise decision with HAIEC. Your plan determines access and capacity — it never changes what the evidence can prove.\`
**Trust line:** \`Deterministic AI Action Assurance · Qualified evidence · Clear proof boundaries\`.
**Choice toggle (not price/tier toggle):** \`Self-Service Teams\` / \`Enterprise Assurance\` / \`Assurance Firms\` — three anchor-based buyer pathways, each always available in HTML, no content hidden from search.
**Enterprise link primary for serious buyers:** \`Scope an Enterprise POC\` → /enterprise. **Secondary self-serve:** \`Compare self-service plans\` → #self-service. **Technical** \`Run HAIEC AI Assurance\` → /docs/agent-integration, conditional on configured MCP client and credentials.

### P1 Editorial outcome proof
**H2:** \`Start with one consequential question. Choose the evidence depth you need.\`
**Copy:** \`The same agent might have a documented policy, an API credential, and code capable of a high-impact action. None alone establishes delegated decision authority or a confirmed effect. HAIEC exposes each boundary; more expensive plans unlock qualified work and workflow capacity, not automatic trust.\`
Small **FICTIONAL** two-state graphic: \`SCAN: Source-visible capability\`; \`ASSURE: Eligible evaluated claim/report once evidence qualifies\`; \`Enterprise: Hands-on source+policy+decision engagement\`. Avoid illustrating that paying $999 turns UNKNOWN into PASS.

### P2 Three self-service cards — exact labels, no forced rename
**H2:** \`For teams running HAIEC themselves.\`
- **SCAN** subtitle \`Developer / Start with visibility\`; price **$99/mo**; one included seat as currently displayed; existing 14-day checkout and/or signup truth; CTA **Start Free 14 Days** (only after trial route text reconciled), plus secondary \`Run a sample\`.
- **DEFEND** subtitle \`Team / Validate before release\`; **$349/mo**; three included seats currently displayed; existing CTA **Start Defending**. Differentiator *supported engineering validation, CI/CD integration, exports and bounded authorized runtime tests*.
- **ASSURE** subtitle \`Business Assurance / Defend the decision\`; **$999/mo**; ten included seats currently displayed; existing CTA **Start Building Assurance**. Differentiator *qualified evaluation, reports/receipts, human decision context where customer data & entitlement qualify; no certification or universal enforcement*.
- **Preserve current backend plan IDs and checkout links** \`scan\`, \`defend\`, \`certify\`. If altering external copy, don't lose query param \`billing\`, \`trial\`, checkout analytics; no placeholder \`firm\` checkout.
- **Callout within cards** where relevant: \`Includes [N] team members (subject to entitlement verification)\`; \`Source/evaluation usage and target capabilities are scope-dependent\`. Avoid overwhelming cards with ten tech abbreviations.

### P3 Enterprise offer — independent panel, not $999 upgrade
**H2:** \`For enterprise decisions with real consequences.\`
**Commercial copy:** \`Start with one consequential AI system and one priority assurance question. HAIEC works with your team to define the source, authority and evidence boundary, conduct the authorized evaluation, and prepare a technical and executive decision readout.\`
**Existing pricing:** \`Typical Enterprise Assurance POC $25K–$75K. Initial evaluations commonly 4–8 weeks after readiness; SOW sets scope, price and timing.\`
**Primary CTA:** \`Scope an Enterprise POC\` → /enterprise. **Secondary:** \`See POC outputs\` → /enterprise#outputs. **Preserve** founder-led wording where current and factual. **Don't** relabel as a regular SaaS tier or automatic subscription.
**Growth narrative, clearly proposed**: \`After the POC, a tailored annual platform/operations agreement may cover agreed additional systems, evidence sources, evaluation volume, monitoring and integrations.\` Not a publicly available SKU yet.

### P4 Professional / FIRM independent buyer panel
**H2:** \`For firms bringing AI evidence into client assurance.\`
**Body:** \`HAIEC provides a technical evidence layer for qualified auditors, assessors and service providers. Reviewer workflows, evidence export, source-bound findings, framework crosswalks and governed API access are available in approved scope. The firm remains accountable for professional judgment and its own issued opinion.\`
**Price:** Custom. **CTA:** \`Explore Assurance Firms\` → /assurance-firms; retain Talk to HAIEC. No “$999 buys unlimited client audits”, no automatic legal certification or turnkey white-label.
**Scope candidates, not guaranteed shipping**: additional client workspaces, firm reviewer allocation, branded delivery, firm APIs and practice usage, support SLAs.
**Preserve actual Assurance Firms route** and direct qualified-scoping CTA.

### P5 What happens at each plan — comparison kept
**H2:** \`Compare what you can do — not just feature names.\`
Use concise business capability rows **and preserve all underlying technical details** in existing accessible comparison:
- Source discovery & qualified analysis; source/repository limits
- Runtime testing requiring authorized target (not any installed protection)
- CI/report exports; report history and retention
- Control/authority context; eligible deterministic evaluation; receipt availability
- Human review and decision workflows
- API/MCP (authentication vs feature and rate limits)
- Team seats and user roles (if enforceable)
- Systems, source/evaluations, billing units and cost limits
- Support and security boundaries
Keep legacy detailed \`Pipelines/Executions\` definitions with existing capacity **until canonical units and entitlements validated**; don't advertise new “Assurance Evaluation credits” just because the UI uses clearer value language.
**Add availability vocabulary:** Included / requires connection / needs target integration / custom scope / not included. Avoid unqualified green checks for connected monitoring, kill-switch, data residency, certified compliance.

### P6 Practical self-service MCP path
**H2:** \`Already using an AI coding agent? Start there.\`
**Copy:** \`Connect HAIEC's authenticated MCP server to a compatible agent, then say “Run HAIEC AI Assurance.” HAIEC performs eligibility/read-only preflight before any authorized run; the agent guides the workflow but does not determine the official assessment.\`
**CTA:** \`Connect HAIEC MCP\` → /docs/agent-integration; **secondary** \`See a sample AI system\` → /sample-ai-action-access-map. Public endpoint \`https://www.haiec.com/api/mcp\`. Never paste API keys in chat/public HTML. A paid plan is not the same as automatic system connection or granted consent.
**CTA priority:** Enterprise primary where enterprise panel; SCAN primary on individual cards; MCP self-serve technical secondary.

### P7 Preserve platform versus enterprise comparison
**H2:** \`Do you need a subscription — or an evidence-led engagement?\`
Keep existing comparison: who defines scope, how customer-owned source is connected, required partner access, available integrations, time/success criteria, deliverables, subscription vs SOW. Make it editorially legible and do not omit existing important rows. This differentiates $999 from $25K–$75K.

### P8 Trust and buying friction
- Price exact unit/currency, payment frequency, trials, cancellation, taxes, seat/inventory/usage limits; no fake price sticker markdown.
- Stripe powered billing badge; encryption wording only if security proof supports it; SHA-256 artifact digest not signatures/compliance; cancel anytime scoped to recurring subscription, **not** signed Enterprise SOW.
- Offer sample output + POC decision/proof link before prompting long qualification.
- Existing social share component and analytics maintained, but hashtags/copy should emphasize \`AI agent security / deterministic assurance\`, not legacy "weekly compliance" positioning.

### P9 FAQ — review old ten and strengthen with high-value buyer questions
See dedicated FAQ plan below; preserve useful existing questions in a revised coherent content set, no silent deletion.

### P10 Final two-path CTA
**H2:** \`Choose how your team will establish AI assurance.\`
**Primary enterprise:** \`Scope an Enterprise POC\`; self-serve \`Start SCAN Trial\` (route-verified), proof \`Explore a Sample AI System\`; optional \`Talk to HAIEC\` for firms. Keep all visible and clearly labeled, not one blended action.

## 5. FAQ audit: every existing question accounted for

| Existing public FAQ | Keep/change | Correctness / suggested copy direction |
|---|---|---|
| Difference between SCAN, DEFEND, ASSURE | **KEEP, REWRITE** | Sell visibility vs technical verification vs evidence-bound decision, then show current usage/seat/exports; don't say ASSURE makes AI safe or certifies control operation |
| Enterprise or Assurance Firms? | **KEEP, EXPAND** | POC $25–75K SOW vs firm custom partner/practice; $999 remains usable by direct orgs |
| 14-day free SCAN trial? | **KEEP, P0 FIX** | Distinguish no-card \`/signup\` versus card-required \`/checkout\`; actual status/renewal/expiry before any public unified answer. Do NOT assert 14+14 shipped |
| What are Pipelines and Executions? | **KEEP + P0 VERIFY** | Define canonical metered workflow vs run; don't conflate runtime test vectors/assurance evaluations; preserve current limits until enforcement proven |
| What is Runtime Testing? | **KEEP** | Bounded, explicitly authorized and target-dependent; template categories ≠ every customer endpoint protected |
| What is MARPP? | **KEEP + qualify** | SHA-256 tamper-evident where issued; integrity not digital signature, upstream truth or target effect |
| What is Kill Switch SDK? | **KEEP + qualify** | Requires actual customer execution point, permissions and measured effect; entitlement alone ≠ blocking |
| Can I upgrade/downgrade? | **KEEP + verify** | Effective dates only if tested with Stripe and billing owner, time of actual entitlement change |
| Annual pricing? | **KEEP + exact cents** | 20% annual discount confirmed against actual Stripe price, exact amount for each; POC and FIRM are separate scoped offers |
| Do you conduct audits/certify compliance? | **KEEP, strengthen** | HAIEC supplies evidence/assurance software, auditors and accredited bodies issue relevant professional opinions; note firm can conduct its own attestations |

### Additional FAQs to ADD (recommended)
1. **Is $999 for audit firms?** No. ASSURE is a direct organization plan; FIRM is a distinct custom scoped professional practice offering.
2. **How many team members can I add?** Provisional 1/3/10 included seats from presentation; definition, invites and enforcement must be verified before publication; enterprise and firm custom.
3. **Are read-only reviewers billed as seats?** Proposed not counted within contracted viewer capacity; not established entitlement. Don't answer “free” as fact before product proof.
4. **What counts as an AI system, pipeline, execution and evaluated action?** Define each independently and prove counter behavior. Clarify unsuccessful retries/billing, source archives, and scheduled work.
5. **Does a paid plan mean HAIEC automatically monitors or blocks my agents?** No. Passive source analysis, configured monitoring, configured CI gates and target-native intervention are different. Each requires source/integration, access and proof.
6. **Can I start with just a repository or ChatGPT/IDE?** Supported source analysis may start without production credentials where ready; MCP must be configured/authenticated, preflight, then eligible run; no key in prompts.
7. **Can I use HAIEC for multiple client organizations or resell my reports?** Direct ASSURE is not automatic multi-client or resale license; FIRM custom defines tenant boundaries, client ownership and contract rights.
8. **What happens if a scan lacks enough evidence?** Report explicit UNKNOWN/NOT_ASSESSED/review as applicable; upgrading does not fabricate delegation, observed history or protection.
9. **What is included in Enterprise POC vs annual platform agreement?** Paid POC is bounded hands-on evaluation ($25–75K typical); a future annual ongoing contract requires a separate signed scope and is not implied by POC or ASSURE.
10. **Will my AI system data stay in my environment?** Deployment/data residence is technically and contractually qualified. Never promise verified fully local/zero egress without representative release proof.
11. **Are unused monthly credits/limits rolled over or overages charged?** Current source insufficient; add clear answer only after verified billing rules, no surprise auto-overages.
12. **What happens to reports after cancellation?** Establish retention/export policies from actual customer storage/safety implementation; don't promise indefinite storage or data destruction by silence.
13. **What support and SLAs do I get?** Distinguish SCAN/DEFEND email, ASSURE email/calls, firm/enterprise SOW support; no unverified 24×7 promise.

**FAQ hierarchy UX:** payment/trial/seat/usage; product scope and target effects; enterprise/firm; assurance/proof/security; billing/cancel. Original 10 remain in migrated content; new ones progressive disclosure. Use native <details> for SSR accessibility; long wall of 20 open questions is not the answer. Actual source owners and approved wording should drive published version.

## 6. Diagram, animation, dual theme and presentation

**Layout recommendation:**
- First scroll = hero + three buyer paths with clear independent motions, business-value language and accessible anchor nav.
- Next = **Enterprise POC headline + proof specimen and CTA**, not hidden after all feature cards; current Enterprise and FIRM hero placement already supports this, so refine, don't reorder merely for novelty.
- Self-service price cards retain **existing price, checkout links, billing toggle and marketing analytics**, show **1 strong outcome per plan** and four hero bullets. Large detailed comparison remains in semantic table/disclosure lower down.
- Firm as one **independent professional services panel**, **not** fourth ascending SaaS card.
- One tiny **scenario visual**: first a source-visible agent→refund handler (SCAN); second added qualified technical tests (DEFEND); third a scoped evidence dossier and U5 evaluation possibility (ASSURE); fourth the Enterprise hands-on defined POC if complex. This is **ILLUSTRATIVE tier-eligibility, not what an individual customer run proved**. No auto PASS/green badges or fabricated live count.
- Interactions: 1) monthly/annual with exact cents and invoicing sentence, 2) three buyer-motion anchor tabs, 3) “what is a seat/system/evaluation?” selector with no pretend data. **Do not build a fake live configurator or price quote** without real rate/contract engine.
- Light/dark = shared **marketing --site-\*** semantic tokens/toggle from previous plans, not a one-off pricing toggle or authenticated \`ws-*\` theme. Preserve and theme existing interactive cards, tables, FAQ, TrustBadges, CTAs, checkout. Validate 390/768/1440 and reduced motion/keyboard nav.
- Keep no-JS price labels, product explanation and FAQ indexable. An animated terminal on homepage remains untouched. No stock image required; HTML/SVG/text accessible diagrams only.

## 7. SEO and navigation

**Unique intent:** \`AI agent security pricing\` and \`AI assurance software pricing\`. Supporting buyer queries \`AI agent security assessment cost\`, \`AI assurance pricing enterprise\`, \`evidence-bound AI assurance pricing\`, \`AI security scanner cost\`, \`AI assurance software for audit firms pricing\`. **No claimed keyword volume/KD**; external price competition not apples-to-apples.
**Recommended title:** \`AI Agent Security & Assurance Pricing | HAIEC\` (current owner is already close; preserve; root suffix once).  
**Proposed meta:** \`Compare HAIEC SCAN, DEFEND and ASSURE from $99/month, scope a $25K–$75K Enterprise Assurance POC, or discuss a custom professional Assurance Firms engagement.\` Price reference must update whenever canonical prices change.
**Canonical:** \`https://www.haiec.com/pricing\` (retain). Existing SoftwareApplication Offer JSON-LD remains only if prices and cycle truthful; enterprise range not represented as recurring flat Offer, no fabricated “rating/reviews”. Add visible FAQs first, don't over-focus on FAQPage rich result.
**Menu:** keep **Pricing** as top-level entry in \`AutoHideNavigation.tsx\`; keep existing Enterprise in Solutions, Assurance Firms under Solutions, Agent Integration (MCP) in Developers, Resources → Learn → proposed Assurance Methodology from prior plan. **Do not move Enterprise into Pricing dropdown or duplicate methodology item**. On /pricing path chooser adds page-local anchors, not new global navigation complexity.

## 8. All seven page plans: strict copy / CTA / design preservation checkpoint

The reusable [Prior Page CTA & Copy Preservation Review](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md) documents page-by-page KEEP / ENHANCE / REMOVE ONLY AFTER PROOF. Core policy:
- **Keep existing original H1 or strongest copy** when current buyer story is already strong; additions are value amplification, not an empty rewrite.
- Preserve functional anchors, source-backed data, canonical routes, enterprise forms and existing six independently selectable capabilities, evidence-plane definitions, qualified claims, reports and exact example URLs.
- Existing terminal/animated homepage content and architecture explorer remain intact; don't delete effective content because it was not in a prototype.
- Keep every **working CTA to a real destination**, especially Enterprise/POC, sample evidence/report, self-serve signup/checkout, MCP guide and protected dashboard access. CTA hierarchy can change, not drop.
- Pricing separate subscription / POC / firms, no $999 “full Enterprise” confusion, 1/3/10 seats only if enforceable.
- Respect planned public dual theme globally and minimize animated “simulation theater”.
- Every plan is a **proposal in common repo**; no live source mutation or Vercel deploy has occurred from this campaign.

## 9. Future implementation order and precise acceptance tests

1. **Commercial approval:** product owner chooses positioning/names/assurance deliverables and whether trial CTA is no-card signup or card-backed checkout. Until then do not rewrite Stripe/catalog/backends. Preserve grandfathered prices/subscriptions, legacy \`certify\` ID and trialUsedAt.
2. **Entitlement truth reconciliation:** current price config, commercial presentation, feature matrix active vs proposed, seat membership/permissions, metered limits and enforcement in UI/API/MCP; build source-of-truth feature table with status \`ENFORCED\`/\`SHIPPED_LIMITED\`/\`SETUP_REQUIRED\`/\`CUSTOM\`/\`NOT_ESTABLISHED\`. Validate one end-to-end customer seat and eligible billed unit, no broad test suite.
3. **P0 security/billing fixes before launch:** unknown tier/feature fail closed, reject unapproved FIRM direct subscription, verify Stripe Price IDs, annual cent-perfect presentation and checkout, existing trial/new signup/lifecycle effective expiry, cancel/downgrade persistence. **Code tests must use Stripe test mode and synthetic orgs; no customer charges.**
4. **Production /pricing visual + copy:** current source-backed constants, buyer-led headers/card subtitles, POC and FIRM independent panels, detailed comparison and full old FAQ preserved, add qualified new FAQs, MCP entry and evidence specimen. No extra backend features.
5. **Marketing dual theme:** consume shared tokens/toggle; new elements are SSR readable, meaningful accessibility/no-JS and reduced motion.
6. **Narrow QA:** 390/768/1440 both themes, accessibility/keyboard/accordion, 3 checkout links and annual display, 2 enterprise/firm CTAs, analytics, canonical/OG/schema, cancellation/trial FAQ truth and entitlement leak prevention. Manual smoke only through authorized test Stripe.
7. Only when implementation authorized: one HAIEC PR, merge to Main for automatic Vercel deployment; verify pricing route READY, actual form/checkout/trial paths and CTA/SEO; record deployed commit/link in Common Repo. **Current task writes plans/concept to Common Repo only.**

**Launch definition:** enterprise buyer can find POC and sample decision immediately; builder can accurately start trial; direct small business sees strong per-workspace outcomes; auditing firm understands custom rights; 1/3/10 seats and quotas are not falsely promised; FAQ answers match actual billing; no renewal surprise; same marketing light/dark owner; none of six earlier page enhancements are accidentally removed.

**Next after Pricing:** Revisit Homepage integration or remaining high-risk regulatory/framework pages based on risk ranking and user priority. Do not consider plan-completed pages deployed until an authorized site implementation.
