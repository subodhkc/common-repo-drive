# HAIEC — Delegated Action Integrity (DAI): Dedicated Public Page, Enterprise UX, Source-Based Copy, Navigation & SEO

**Date:** 2026-10-20. **Status:** SOURCE-REVIEWED PUBLIC-PAGE PRODUCT PLAN + INTERACTIVE HTML DESIGN REFERENCE, not a deployed website route. **URL to implement:** https://www.haiec.com/delegated-action-integrity. **Editorial owner:** Platform → Signature Product Proof. **Companion interactive preview:** [DAI Light-First Interactive Page](design-references/dai-2026-10-20/delegated-action-integrity-dai-light-dark-interactive.html).

## 0. Product and audience decision

**Elevate DAI as a major HAIEC differentiator** — a component of the HAIEC deterministic assurance engine, not a standalone paid scanner, seventh six-capability job, new evidence-upload funnel, precondition to ordinary source findings or a certification.

**Primary tension:** Existing scanners, governance records and IAM may each be correct in their own scope, while an AI agent can still select a consequential outcome that those individual checks do not collectively authorize.

**Buyer promise:** “See what an agent can reach, distinguish API permission from business decision authority, identify potential overreach early, and support a defensible decision with deterministic evidence.”

**Findings-first rule, reaffirmed:** Do not hide or delay independently supported source/code/path/capability risks until all five evidence planes or explicit human delegation documents are available. A missing specific authority or runtime fact is a bounded follow-up question, not an enterprise-wide UNKNOWN verdict. Preserve the real canonical evaluator states and proof limits in technical detail. DAI alone does not prove target-side runtime blocks.

**Audience priority:** 1) CISO / executive accountable for high-impact AI; 2) enterprise AI platform and security architects; 3) agent builders and security/assurance engineers; 4) independent assurance firms. Story combines fear of incident and fear of unnecessarily delaying AI deployment without promising universal incident prevention.

## 1. What current HAIEC source establishes

Repository \`subodhkc/haiec-website\` Main reviewed 2026-10-20:

- **No dedicated public route** at \`app/dai/page.tsx\` or \`app/delegated-action-integrity/page.tsx\` (both fetch NOT_FOUND). Search also found no public exact-route ownership.
- **DAI evaluator exists:** \`lib/assurance/dai-evaluation.ts\`, current blob \`36618daaf301de762d151dc554c4803efb3b535b\`. Nine bounded dimensions: \`OPERATION, TARGET, SCOPE, MAGNITUDE, DURATION, APPROVAL, DATA_CLASS, ENVIRONMENT, GEOGRAPHY\`. Seven typed outcomes: \`INSIDE_ESTABLISHED_DELEGATION\`, \`CAPABILITY_OUTSIDE_DELEGATION_MEDIATED\`, \`CAPABILITY_OUTSIDE_DELEGATION_UNMEDIATED\`, \`GRANT_BROADER_THAN_DELEGATION\`, \`OBSERVED_OUTSIDE_DELEGATION\`, \`UNRESOLVED_DELEGATION_EXPOSURE\`, \`NOT_ASSESSED\`. These are canonical typed engine names; **do not infer default violations, runtime prevention or new evaluative capabilities**.
- **Bounded DAI assembler:** \`lib/assurance/dai-assembler.ts\`, blob \`7f6aa852d6b6f9199263da51042bf8d46e4eee2c\`: combines Operating Envelope policy constraints, org-declared delegation evidence, code-capability and provider-grant sources and relevant telemetry, with scope/snapshot guards. Policy→delegation field promotion/union ambiguity has been separately identified. Do not overstate that every approved Operating Envelope establishes explicit authority to choose. Don't gate first-pass technical findings on its remediation.
- **DAI evidence intake already available for authorized customers:** \`components/monitoring/DaiEvidenceIntake.tsx\`, blob \`fe7a56f7f1ff9431f844eef9ac0f832e8482dc58\`. Advisory parser, user review/confirmation, scoped storage. This is **not** the homepage or public DAI first-run funnel; it is optional relevant deep workflow when a consequential delegated decision specifically needs it.
- **Existing distinct pages:** \`/assurance\` describes bounded claim evaluation, \`/methodology\` exact evidence/reachability/proof boundaries, \`/ai-action-access-map\` (System Constellation) agent/resource path mapping, \`/evidence\` provenance, \`/enterprise\` scoped POC, \`/docs/agent-integration\` authenticated MCP. DAI public page must link, not duplicate, their long technical content.
- **Site owner files:** \`components/AutoHideNavigation.tsx\` current Platform → Core Capabilities links: System Constellation, AI Security, Runtime Security Testing, Evidence, Assurance, AI Inventory; no DAI. Resources → Learn already includes Assurance Methodology. \`data/public-site-registry.ts\` and \`data/seo-page-intents.ts\` lack DAI exact route. Both are canonical owners of sitemap/footer/search-intent and must be updated together during real implementation.
- **Existing visual source:** \`public/diagrams/haiec-dai-evidence-relationships.svg\`. May be used as a supporting source-linked deep graphic, not as a cramped hero or substitute for accessible semantic HTML.
- **Brand:** Evidence-Bound Assurance; **Deterministic AI Action Assurance**; **High assurance in every consequence.** Five **independent** evidence planes (Requested, Policy Authorized, Effectively Granted, Code Capable, Observed), with DAI comparison **orthogonal**. Strong findings can predate runtime/instrumentation.

### Copy nuance for current code / outstanding source issue

Use precise, value-led explanations and evidence labels. Approved policy may establish allowed operation/scope/amount; provider grants may establish API reach; code source shows capability; observed data proves only observed supported events. An explicitly delegated choice might be grounded by actual authoritative policy/workflow/task scope; ordinary policy approval does not *always* establish protected discretionary delegation. **Don't overfocus on admission records** or imply missing one upload defeats HAIEC. The marketing design may teach **rule-grounded / bounded delegated / potentially broader** outcomes as **hypothetical examples**; it must not claim the current shipped comparator implements full ISAF v2 “protected-commitment residual-choice” research semantics. A formal DAI state only when actual source supports it. Five evidence planes are peer sources, not a sequence.

## 2. Recommended product positioning and page SEO

**Canonical new URL:** \`/delegated-action-integrity\`. Long, human-readable, crawlable and exact category description. If the product team needs a short share link, redirect \`/dai\` permanently to canonical **only if no existing protected conflicting route**; no second indexable content page.

**SEO distinct from /assurance and /methodology:**
- Primary user intent: \`AI agent delegated authority\`, \`delegated action integrity\`, \`AI agent authorization versus permissions\`.
- Supporting semantic copy: \`agent permission vs delegation\`, \`AI agent access control\`, \`agentic AI consequential actions\`, \`AI authority assurance\`, \`AI agent decision rights\`, \`AI delegated actions evidence\`.
- These are **editorial search intents**, not verified search-volume rankings.
- Suggested unique title: \`Delegated Action Integrity (DAI) for AI Agents | HAIEC\`.
- Suggested meta description: \`Discover when AI agents can reach consequential actions, compare policy, effective access and delegated decision authority, and investigate potential overreach with deterministic, evidence-backed HAIEC assurance.\`
- **H1:** **“Your AI has permission to act. Who authorized it to decide?”**
- Pre-H1 eyebrow: \`DELEGATED ACTION INTEGRITY · DAI\`.
- Deck: \`An AI agent can hold valid credentials and follow an approved workflow yet still reach a consequential choice. HAIEC connects supported action paths, policy, effective access and delegation context to identify what is established, where authority may be broader than intended, and what to investigate next — using deterministic evidence, not AI grading AI.\`
- Proof line: \`Permission ≠ Delegation · Code Capability ≠ Execution · Findings First\`.

### Strong alternative shorter headlines (for future A/B test, not duplicate H1)
- \`A valid credential isn't permission to decide.\`
- \`Know not only what AI can do — but who authorized the choice.\`
Use recommended H1 in main design.

## 3. Header/menu decision (one precise canonical entry)

**Recommend:** **Platform → Core Capabilities → Delegated Action Integrity (DAI)** directly **after System Constellation**, before AI Security. User-facing menu subtitle: \`Know when AI capabilities exceed authorized decisions\`. Use \`routeFor('delegated-action-integrity','/delegated-action-integrity')\`, and existing available \`Shield\` / \`FileCheck\` / \`GitCompareArrows\` icon (import one valid from current Lucide list as needed). The dropdown is shared desktop/mobile; **do not add a seventh button** to the homepage/Platform six-peer selectable capability diagram.

**Why:** DAI is a signature authority/consequence *mechanism*, not a new standalone top-level suite or paper. System Constellation shows action reachability; DAI explains who authorized consequential choice; Assurance yields canonical bounded evaluation. The three should be highly visible from Platform. Do not hide DAI only in Resources → Research or make it a separately billed SKU.

**Canonical registration:**
- \`data/public-site-registry.ts\`: id \`delegated-action-integrity\`, route \`/delegated-action-integrity\`, group \`platform\`, pageRole \`delegated authority / consequential choice assurance\`, \`indexability:'index'\`, \`canonicalRoute\`, \`routeStatus:'canonical'\`, \`llmsVisibility:'public'\`, \`sitemapVisibility:'public'\`; ensure footer group uses registry exactly once.
- \`data/seo-page-intents.ts\`: own one entry, \`parentHub:'/platform'\`, primary intent distinct from general \`/assurance\` and \`/methodology\`, canonical route same.
- Add exactly one Platform dropdown item in \`AutoHideNavigation.tsx\`; avoid fake “New!” sticker that becomes stale.
- Cross-link in homepage new Consequence Gap hero DAI explanation, second feature section, \`/assurance\`, \`/methodology\`, \`/ai-action-access-map\`, \`/evidence\`, \`/enterprise\`, \`/controls\` and enterprise architecture. Do not make another top-level header tab.

## 4. Full standalone page IA — first value before formal mechanics

**P0. Hero — enterprise tension, vivid illustration**
- H1 exactly as above.
- A striking interactive **Permission vs Consequential Choice** refund-recipient action graphic, native HTML + inline accessible SVG.
- One supported source finding always visible, regardless of which independent evidence source is selected.
- Primary CTA **Scope an Enterprise POC** → \`/enterprise\`; secondary **Explore a DAI Example** → \`#dai-lab\`; evidence **See an Assurance Report** → \`/sample-reports/kestrel\`; technical CTA later **Run HAIEC AI Assurance** → \`/docs/agent-integration\`.
- Light first-paint and dark toggle matching public design standard. No award sticker above the H1; compact proof row after hero.

**P1. Why it matters — three tools, one unchecked choice**
- Component scans, IAM, approved workflow policy can each work as intended yet leave a connected consequential choice unexamined.
- Show \`Agent → Tool → Handler → Payment recipient\`; route might be source-capable. Do not call code reachability actual payment execution.
- 3 useful buyer outcomes **Identify consequential exposure / Compare who may choose / Act on a source-backed result**. Do not compare companies with unbenchmarked superiority.

**P2. Signature interactive DAI lab**
Three useful scenario tabs, **one stable technical finding**:
1. \`Rule-grounded\`: approved policy + trusted transaction facts dictate original payment method. If actual selected value matches, independent discretion for recipient choice not needed. This is a **conceptual best-case**, not proof that current evaluator automatically computes this mode.
2. \`Bounded delegation\`: a documented, authorized owner grants the AI bounded recipient choice for eligible customers, amount/time/environment; compare the selected choice to delegation. Source-based capability still visible.
3. \`Potential overreach\`: code may choose a new bank account, but the stated policy may not authorize that recipient and an exact business delegation isn't established; show **“Potential recipient-choice authority gap”** with source/role follow-up. **Do not state a completed fraudulent payment or confirmed violation**.
Interaction updates **risk finding, policy/context, delegated choice, relevant evidence, business next action**; not just one line. Make observations another facet, not a prerequisite.

**P3. Five independent evidence views + DAI orthogonal**
Requested / Policy Authorized / Effectively Granted / Code Capable / Observed displayed as **five peer columns or facets, not pipeline**. Each pill clickable; updates a short buyer explanation and “What this can establish”/“What it does not establish”. DAI runs as cross-cutting comparison line. Show source path + policy grant and choice terms simultaneously rather than branding blanket UNKNOWN.

**P4. Nine DAI dimensions — complexity progressively disclosed**
\`Operation\`, \`Target\`, \`Scope\`, \`Magnitude\`, \`Duration\`, \`Approval\`, \`Data class\`, \`Environment\`, \`Geography\`. Show 3 intuitive example groupings in default view **Action / Authority / Operating context**, and a native disclosure “Explore all nine comparison dimensions.” Do not invent dimensions, regulation certificates, or always-completed scores. State present DAI engine uses nine dimensions, bounded results under typed comparison; not user-customizable policy outcome promises.

**P5. Concrete outputs and decision states**
- \`Source-capable exposure\`: a meaningful early technical finding.
- \`Within supported delegation\`, \`possible capability beyond delegation\`, \`grant broader than delegation\`, \`observed outside delegation\` **ONLY when exact case/evidence supports respective engine result**.
- \`What to investigate next\`: explicit reviewer/source question; not “HAIEC failed to run”.
- Preserve 7 canonical technical DAI states in deep Methodology/API reference, **not a grid of seven colored verdict badges** at marketing-page top.
- Core benefit: **“A finding your security team can investigate. An authority comparison your decision owner can understand. Evidence you can inspect.”**
- Source/claim caveat: DAI engine is deterministic within its bounded input; does not establish universally valid human authority, prove runtime execution from source, or install a customer PEP.

**P6. Real operator entry / MCP**
- Label \`Works with compatible MCP-enabled IDEs and agents\`, public endpoint \`https://www.haiec.com/api/mcp\`, scoped Bearer API key in client's private secret configuration.
- **Four-word starting goal:** \`Run HAIEC AI Assurance\`. Client does read-only preflight then source/permission checks before any actual evaluation. DAI output only if relevant evidence qualified; generic source finding can be surfaced earlier. AI helps operate, canonical evaluator determines bounded result.
- Show a 3-line **illustrative command/story** and \`Connect HAIEC MCP\` CTA, not fake live JSON/credentials.
- Do not claim *every* AI IDE supports Streamable HTTP MCP or that adding MCP runs without approval.

**P7. Enterprise and firm buyer applications**
- Financial recipient manipulation, privileged production change, sensitive-data destination, cross-tenant downstream delegation. Each clearly hypothetical, no fabricated live company findings.
- Enterprise 4–8 week typically readiness-dependent / $25K–$75K scoped POC in full Enterprise page if pricing shown; on DAI page say \`Scope a Consequential AI Decision\` or \`Scope an Enterprise POC\`, not a discount sticker.
- Assurance Firms: document what facts/reviews are supportable, leave professional certification to firms; cross-link \`/assurance-firms\`.

**P8. FAQ & conversion**
Suggested 8–10 succinct SSR-native \`details\`:
1. What is Delegated Action Integrity?
2. Isn't IAM permission enough?
3. Does DAI require an uploaded signed delegation file?
4. Can HAIEC identify action-path risks without runtime monitoring?
5. What if an approved policy already determines the choice?
6. Does a potential exposure prove an unauthorized action happened?
7. How does DAI relate to the five evidence planes?
8. Is DAI a seventh capability or a separate subscription?
9. Does HAIEC automatically block an overreaching agent?
10. Can I access DAI results through MCP or the API?
**FAQ principle:** short positive value answer, then the factual boundary. Avoid repeated “UNKNOWN” and “not assessed” as the main noun. Preserve technical states and detail in deep pages.

**P9. Final CTA** \`Know who authorized the consequential choice.\` **Scope an Enterprise POC** / **See a Real Sample Report** / **Connect HAIEC MCP**.

## 5. Interactive, motion, theme and editorial visual design

- **Design direction:** consistent public light-first premium forest/ink / pale ivory backgrounds, white cards, subtle mineral green accents and deep ink inset for technical code. Dark mode available, contrast-checked; don't reuse protected ws-* as public theme.
- Hero illustration: one honest source path with a choice boundary highlighted (not neon incident alert). Scene progresses from **a reachable action** to **who may choose** to **consequence** over 8–10 seconds, stops on readable result. User may inspect tabs and pause; no sim of real production traffic.
- DAI signature interactive lab: three-mode **Rule-bound / Delegated / Broader capability**; each state reveals the same action's technical source finding with different authority context. Transition ~180–240ms and respects reduced motion.
- Five evidence views are independent, same style and weight. DAI appears as a transverse bridge, not “sixth evidence plane”.
- Technical dimensions are a calm 3×3 index or disclosure, not nine gauges or fake scoring.
- Hero max text width ~600px, paired illustration at 52–58% desktop; mobile meaningful text first then legible action map.
- Do not create a fake live dashboard with invented scores/timestamps or fraudulent enterprise receipts. Inline native SVG and text for crawlability and accessible semantics.
- Light default in static prototype; production site must coordinate \`haiec-theme\` theme without FOUC/hydration or conflicting workspace state.
- Respect no-JS and reduced-motion content; animations enhance clarity, not control reachability/truth.

## 6. Complete link and CTA contract / preserve original pages

| Link role | Destination | Status |
|---|---|---|
| Enterprise conversion | \`/enterprise\` | Existing real engagement |
| Technical demonstration | \`#dai-lab\` | This new page local |
| Sample proof | \`/sample-reports/kestrel\` | Existing public sample |
| Maps/consequence | \`/ai-action-access-map\` | Existing product |
| Assurance evaluator | \`/assurance\` | Existing page |
| Method/exact states | \`/methodology\` | Existing page |
| MCP entry | \`/docs/agent-integration\` | Existing docs |
| Source/adapters | \`/evidence\` | Existing page |
| Firms | \`/assurance-firms\` | Existing page |
| Homepage signature DAI subcopy | \`/delegated-action-integrity\` | New when deployed |

No removal of existing homepage animated terminal, hero compositions, six peer cards, governance playback, sample constellation, original pricing CTAs or page metadata to introduce DAI. The new dedicated page **complements** rather than competes with the current hero and Methodology.

## 7. Implementation handoff to Devin (future, once authorized)

**The current deliverable is Common Repo planning + interactive HTML reference only**. It does not create the new public route in HAIEC Main, trigger Vercel or change Main navigation.

1. Refresh source Main and this Common Repo design. If an active Devin working tree has homepage edits, do not overwrite or push; reconcile this as a new scoped page.
2. Create \`app/delegated-action-integrity/page.tsx\` as SSR semantic Next.js page with canonical Metadata/OG and linked \`DAIInteractiveLab\` isolated client component for tabs; do not embed raw HTML/JS prototype as a full-page string.
3. Use shared public theme tokens: default light first paint; preserve explicit dark preference.
4. Register exactly one canonical route in public site registry, SEO page intents and sitemap/llms where generated; add one dropdown item after System Constellation in Platform; check desktop and mobile, footer duplication.
5. Use existing live DAI/canonical policy terminology; no misleading upgrades of general approved envelope to discretionary-choice confirmation. No new DAI engine or evidence-upload prerequisites just to launch the page.
6. Link to Enterprise, sample report, System Constellation, Assurance, Methodology and real authenticated MCP docs. Keep four-word starting goal.
7. Focused verification: all 3 DAI modes update material fields and CTAs, 5 planes independently inspectable; 9 dimensions as source; content SSR, tabs keyboard, mobile at 390/768/1440, two themes, static reduced-motion view, 10 FAQ answers, canonical schema, no fake live result/closed-world authorization proof.
8. Since latest user instruction on Devin homepage was **“don't push yet”**, keep DAI new-route production changes local until separately authorized. Any future merge to Main triggers Vercel automatically; do not assume this plan authorizes that.

**Launch standard:** A business buyer can explain “permission ≠ authority to choose” within five seconds, see a concrete consequential path, understand that HAIEC finds risks before every source is attached, and know where to buy enterprise assurance or use the MCP-compatible client. DAI is visible in Platform but never presented as a seventh peer product capability.

## Related Common Repo contracts

- [Homepage latest two-composition design](design-references/homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html).
- [DAI findings-first nonblocking UX decision](DAI-FINDINGS-FIRST-UX-AND-NONBLOCKING-ASSURANCE-PRODUCT-CONTRACT-2026-10-20.md).
- [Existing policy/grant vs delegation semantic review](DAI-POLICY-GRANTS-DELEGATION-TRUSTED-FACTS-ADMISSION-DEEP-VERIFICATION-2026-10-20.md).
- [Public theme/copy style](HAIEC-PUBLIC-BRAND-COPY-AND-DUAL-THEME-STANDARD-2026-10-20.md).
- [Seven/eight-page CTA nonregression contract](PUBLIC-WEBSITE-PRIOR-PAGES-COPY-DESIGN-AND-CTA-PRESERVATION-REVIEW-2026-10-20.md).
