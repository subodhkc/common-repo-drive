# HAIEC — DeepSeek Unified Product UX Atlas: Partial Output Review, Validation and Additive Adoption

**Date:** 2026-10-17. **Status:** **PARTIAL DESIGN REFERENCE — NOT A VALID DELIVERABLE, NOT PRODUCTION IMPLEMENTATION.**  
**Reviewed source:** User-supplied two unfinished HTML variants (`Pasted text(20261017-103846).txt`, 94,113 characters / ~779 lines; `Pasted text (2)(1).txt`, 129,349 characters / ~1,971 lines). These files were reviewed in the conversation sandbox, **not** committed to the Common Repo. Do not misattribute them to a completed or current authoritative atlas.  
**Current implementation baseline:** UX-P01 [PR #2231](https://github.com/subodhkc/haiec-website/pull/2231) merged at `75ea4ef11f5f43477376966d88f8f918a0cf4ded`; UX-P02 is the next bounded dashboard session, unless a separate active Devin owner has already begun it.  
**Related reviews:** [Original DAI + System Assurance reference validation](HAIEC-DEEPSEEK-DAI-AND-ASSURANCE-UX-REFERENCES-VALIDATION-AND-ADDITIVE-DESIGN-2026-10-17.md), [DeepSeek Detection Coverage drawer review](UX-P07-DETECTION-COVERAGE-DRAWER-REFERENCE-VALIDATION-AND-UX-P01-REVIEW-2026-10-17.md), [per-page UX program](HAIEC-PAGE-BY-PAGE-UX-DESIGN-AND-VALIDATION-PROGRAM-2026-10-17.md).  

## 1. Validity / completeness gate

**Version A** (94k): has broader aspirational sidebar routes for Start, Overview, Estate, Assurance Case, Constellation, Evaluate, Sources, Reports, Controls, Governance, Monitoring and Usage, but ends **mid JavaScript string** in `alertRules` with `delivery:'`. No closing `</script>`/`</html>`, no executable router/render functions: **unusable as standalone HTML**.

**Version B** (129k): closes the document and includes real JavaScript rendering for **Start, Overview, Estate, Assurance Case, Evaluate, Controls** and four inspector kinds (DAI chain, Control facets, Detection Coverage, Source Navigator). **Original JS fails `node --check`:** in the Recent Evaluations `flatMap(...map(...))` template at line ~1247, extra `)` raises `SyntaxError: Missing } in template expression`. Therefore original HTML **does not initialize in the browser**. In a private, temporary review-only copy, remove exactly that extra `)`; thereafter `node --check` passed and Chromium rendered all six existing pages and opened the DAI inspector at 1440px and 390px without JavaScript page errors. **This is not a repaired deliverable** and no code changes were committed.

**Version B incomplete screens:** Sources, Reports, My Work/Governance, Monitoring, Usage & Cost, Constellation, Developer/API/MCP and standalone DAI Action page are absent or called **stage 2**. Navigation omits most screens rather than giving a fully working 14-screen atlas. **The design mission was not completed**, notwithstanding the impressive initial 6-screen layout. Role selection only stores a persona and re-renders; it does **not** demonstrate real role-specific decisions/privacy/eligibility. The basis selector changes labels/as-of but often shows the **same underlying per-system fixtures** rather than separate immutable snapshot/current models. System and org pickers/search include toast-only behavior. Buttons for upload, export, receipt, re-evaluation and My Work often preview without completing anything; retain this only with explicit synthetic labels.

**QA classification:** CSS and design partially reviewed, temporary browser rendering **VISUAL_PREVIEW_AFTER_LOCAL_SYNTAX_CORRECTION**; actual original prototype **JS_INVALID**; production authenticated experience **NOT_RUN**. Do not claim a successful all-screen Atlas or production feature delivery.

## 2. Highest-value design ideas, independently of code completeness

1. **Calm 3-pillar navigation:** Understand / Assure / Govern & Operate, with a restrained sidebar and org/system identity in a persistent topbar. Better than dozens of competing product groups. Do **not** immediately replace the existing global shell: adopt after each production page proves it retains all current destinations, support/developer links, and keyboard/mobile alternatives.
2. **Organization command center:** small factual KPI strip + **Systems requiring attention** + **Recent evaluations** + **Source coverage gaps** + a focused **Next action / Assigned to you / Change since last visit** secondary column. This is the strongest immediate reference for **UX-P02**, layered over existing CommandCenterDashboard, EstateAttentionStrip, AssuranceJourneySection, EngineStatusGrid, QuickActionsStrip, system rows and lifecycle.
3. **Consequential system hero:** concise actual consequence statement, qualified source/path details, action/target identity, current vs exact frozen evaluation selector, readable five evidence-plane tiles, and deep links. Strong **UX-P04** pattern; preserve System Workspace tabs and technical depth. The user-facing question "What can this AI system cause?" works **on a resulting Assurance Case**, not as a mandatory user input. Entry page should still **lead with what HAIEC can establish**.
4. **One contextual inspector:** all source gaps, consequence facts, detector coverage, DAI hops and controls use one visual grammar. This increases coherence while avoiding drawer proliferation. Reuse existing accessible HAIEC controls (focus, URL/deep link, Escape, mobile) rather than porting the mock's `innerHTML` implementation.
5. **DAI first material pivot:** human-readable grant/handoff/child/tool/provider/effect chain, status-qualified connector styling, root-vs-child nine-dimension table, expandable per-hop source refs and a next action. Use **UX-P05** with canonical DAI disposition and future cross-system qualification gating.
6. **Operational-control evidence facets:** Applicability → Configuration → Human decision → Target integration → Monitoring/threshold → Guard/provider/target effect → TestSpec/replay → review/response. Use **UX-P08** beside current Control Proof and Operations; do not replace its canonical control lifecycle or assume a universally sequential eight-step completion model.
7. **Detector participation inspector:** group actual scan families and show exact analyzer participation/limitations, source-specific gaps and source suggestions. Use **UX-P07**; the earlier independent Detection Coverage drawer is a richer domain reference.
8. **Synthetic role/persona preview and multiple evidence scenarios** are good **education** devices but must be separate from authenticated customer decisions and should not make a selected persona appear to grant permissions.
9. **Source-to-next-evidence navigation:** "Why this source could help / what is supported / what remains unknown / eligible action" is useful in **UX-P01 (already delivered)** and UX-P06. Keep current E1/E2 source/permission/goal projections.
10. **Current vs evaluated basis visible in chrome:** strong consistency idea for a system workspace, but **not every org/dashboard screen has one global exact evaluation**. Scope basis to the selected AI System and exact evaluation; on organization view use appropriate summary timestamps and no misleading global snapshot switch.

## 3. Critical semantic, correctness and design issues to fix before adapting

| Problem in partial DeepSeek atlas | Required HAIEC contract | Session |
|---|---|---|
| **Universal 7-dot evidence 'ladder'** `FILE_STORED → ... → ASSURANCE_EVALUATED`, shown in estate/case/source navigator and called "maturity" | **REJECT.** Evidence intake/review stages are independent provenance/workflow facets, not an ordered safety ladder; five authority/evidence planes also are independently qualified. One system could have human review without authenticated target effect. The mock's `ladder(count)` also uses `i<=count`, so **zero visually fills one dot** (off-by-one). | P03/P04/P06; prohibit everywhere |
| **Current vs evaluation switch reuses the same source arrays/summary** | Frozen evaluation must bind immutable evaluationId + scopeDigest + policy/producer versions; current source view must be a separate read model, with independently stated as-of/last refreshed. No stale/historical data borrowed into current posture. | P04/P07/P11, system chrome |
| **Invoice Agent "all five planes" → "no unresolved consequences"** | Plane coverage != safety/completeness; even fully known selected paths do not establish absence of unobserved operations or qualified protection. Show scope-limited conclusions. | P02/P04 |
| **Cross-system delegation sample claims independent completed refund** | Cross-system issuer, grant, trace, per-action effective authority, provider and target readback are gated. Synthetic demo only until source-qualified. No observed handoff or signed webhook alone establishes authorization/target effect. | P05 engineering dependency |
| **Handoff with absent grant flags 9/9 as mismatches; labels "outside scope"** | `MISSING_DELEGATION_EVIDENCE != PROVEN_DELEGATION_VIOLATION`. DAI dimensions must support MATCHES/BROADER/NARROWER/MISSING/UNKNOWN, with true scope widening separately established. | P05 |
| **Static code source "can issue refund" phrased as unconditional authority** | Clearly qualify **source-reachable effect path** vs operational permission vs observed dispatch vs independently established refund. Keep consequence statement grounded and scoped. | P02/P04/P05 |
| **Controls `EXECUTED` / "8 of 8 qualified" implies actual live PEP installation & guard effects** | Catalog, deployment decision, adapter installed/authorized, target-wired, monitoring, guard, replay and effect must be independently sourced. E5.1 reports **LIVE_PROVIDER_NOT_WIRED** on current production path; fictional PEP v2.1 is synthetic only. | P08 |
| **Evidence tiles say clicking a plane shows analyzers ran** | Five authority/evidence planes **are not** the same as detector coverage. Plane inspector must show evidence source and action-relation qualification; detection inspector shows exact-run producer/engine/rule execution. | P04/P07 |
| **`source coverage gap` could imply attaching IAM JSON makes per-action EFFECTIVELY_GRANTED** | JSON/policy exports may establish *declared or candidate* IAM scope, not full effective permission absent SCP/resource/session boundaries. Telemetry doesn't prove causal effects or uninstrumented completeness. | P06/P07 |
| **"fully evaluated" KPI counted by presence of any `lastEval`** | Distinguish has frozen evaluated record, completeness of its selected scope, claim sufficiency, and current protection. Existing canonical system-list summary is authoritative. | P02 |
| **Seven-stage ladder and "Planes 4/5" become quasi scores** | Counts only as labeled denominators for a scoped comparison; no safety or assurance grade. | All |
| **`Next best action` hard-coded from synthetic DAI sample** | Use canonical permitted next action, existing My Work, attention context and role entitlement; no separate UI ranking engine. | P02 |
| **Static fake statuses, rule totals, freshness, source counts and usage** | Synthetic fixtures are only for design. Production numerical facts must come from exact system/source/producer/evaluation with evidence and as-of. | All |
| **Viewer/approver persona changes labels, not permissions** | Real access rules remain server authoritative; exact reviewer packet, SoD, digest CAS and freshness checks preserved in My Work. Persona is preview-only. | P09 |
| **Broken standalone HTML, missing pages and nonfunctional routes** | Fix syntax, implement actual intended screens, check all routes/inspectors at 1440/390 and real keyboard semantics, then label as design-only and upload 1 HTML only if this atlas assignment is resumed. Do not delay independently scheduled page sprints for incomplete artifact. | Atlas design follow-up |

## 4. Visual/interaction QA findings from repaired *review-only* copy

**Desktop ~1440:** Organization Overview has an effective hierarchy, whitespace and narrow right rail for next action/My Work; Assurance Case has a strong hero, then five planes and consequential facts. The four-pillar *look* can teach HAIEC how to make complex information calm. Hero reads well. Some information is too small or low contrast (10–11px uppercase labels, faint timestamps/borders); production accessibility should improve typographic scale, contrast, focus and density. There is excessive instructional prose ("How to read this page") above real content; prefer concise just-in-time help and progressive disclosure.

**Mobile ~390:** The main card stacks reasonably and text reflows, but the **sidebar simply disappears without an alternative mobile menu**. The global current/evaluation basis control also disappears, removing vital evidence context. Persist compact basis/as-of within page and accessible mobile nav. Long DAI nine-dimensional table requires alternate layout or horizontal scroll with headers. Modal/inspector lacks demonstrated focus trap/return, aria-expanded, accessible nav/tab states and scroll locking/escape restoration. Controls and clickable pseudo-links need semantic buttons/anchors with keyboard support.

**Data presentation:** The static sample sometimes treats source coverage as analyzer coverage, marks “Complete” when absent planes count is zero, and uses text/green numbers that suggest a stronger security outcome than evidence. Avoid that visual semantic drift.

**Interaction truth:** The original B is syntax-invalid, so *all* original controls fail. In repaired review copy, six screen renderers work and DAI inspector renders, but My Work, Sources, Monitoring, Reports, Usage, API/MCP and standalone Action/Constellation remain unimplemented, and some controls show preview-toasts instead of real operations. This is a **visual seed**, not a complete working product atlas.

## 5. Updated future per-page work order — additive only

| Existing program session | Adopt this output's useful ideas | Preserve / gate |
|---|---|---|
| **UX-P01 Start Here — DONE** | Nothing needs replacing; preserve three independent entries and actual canonical readiness; optional lighter card spacing can be considered in separately scoped maintenance. | Fix A→B capabilities async race narrowly; authenticated role-based browser walkthrough remains `NOT_RUN`. |
| **UX-P02 Dashboard Overview — NEXT** | Desktop organization command center two-column hierarchy; attention grouping, exact recent frozen evaluations, one source-limited next action/My Work rail. | Existing KPI, attention, journey, engine activity, Quick Actions, org scope and canonical roles; not hardcoded synthetic stats or a new ranking engine. |
| UX-P03 AI Estate | Clear system table, environment/source status and evidence drilldown | Reject fake ladder; use actual per-system statuses and exact identity; retain filters and existing navigation |
| UX-P04 Assurance Case | Consequence first, exact snapshot/current basis, 5 planes, change context, inspector | Existing SystemWorkspace tabs, current and frozen projections and provenance; do not conflate five planes and executed analyzers |
| UX-P05 DAI/Constellation | Multi-hop timeline, qualified edges, first mismatch/unknown, nine-dimension comparison, table alternative | Preserve existing Constellation lenses, canonical exact action paths; independent cross-system target proof not yet wired |
| UX-P06 Evidence/Sources | Source-to-claim gap actions, connected/stale labels and qualification limitations | Existing E2 typed onboarding and human attestation; source selected != analyzed and IAM exports != effective permission |
| UX-P07 Evaluate + Detection Coverage | Eight facets, analyzer participation and result/unknowns | Executed producer/read model; selected/frozen exact scan, no static catalog-as-run mislabeling |
| UX-P08 Controls & Operations | Independent facets with conditional next step, not `% passed` | Control Catalog & Proof, human approval, actual guard/PEP, monitoring, target effect and disabled NOT_WIRED |
| UX-P09 My Work | Reviewer-centric packet clarity and role-aware entry | Already shipped decision request/assign/decide/SoD/CAS, pending and indeterminate context |
| UX-P10 Monitoring | Change/alert context and actor/target correlation inspector | Existing E4 telemetry/freshness, observed does not imply target applied |
| UX-P11 Receipts | Frozen evaluation basis + evidence source explorer | Existing exact receipts and integrity, no fake export |
| UX-P12 Provider Usage | Compact provider/cost views with source/time basis | Exact attribution; unavailable token counts never zero |
| UX-P13 Global shell | Reduced 3-pillar IA and consistent org/system picker | No route loss; make mobile nav and basis fully accessible; needs a dedicated shell review, not piggyback changes |

**Implementation order remains:** per-page production changes; UX-P02 is next if not already owned. Keep separate DeepSeek design atlas ongoing. Do not mass rewrite HAIEC using the broken HTML.

## 6. Atlas rescue / DeepSeek handoff (only if asked to resume atlas)

If revisiting the one-file design atlas, take the **later Version B** as design seed, but repair its syntax and build all previously required screens rather than discarding Version A's broader intended coverage; migrate only well-defined design patterns and synthetic fixtures. Enforce:
1. **One complete standalone HTML** with no external dependencies; no missing stages/placeholders, all visible nav routes have a renderer.
2. `node --check` clean, browser preview works on original file unchanged, interactive clicks tested, no pretend success/toast states.
3. Eliminate universal evidence ladder; separate qualification facts, five planes, analyzer participation, operations and target effect.
4. Basis switch uses truly **different scoped synthetic snapshots** and correctly freezes as-of, profile, sources, approval and findings (for demo only).
5. DAI supports MISSING/UNKNOWN without treating no grant as 9 violations; cross-system verified only explicitly synthetic learning fixture.
6. Control proof shows native PEP NOT_WIRED on current deployment unless synthetic training mode clearly labeled.
7. Accessible mobile navigation, keyboard/focus return, actual tab/picker/inspector behaviors, contrast and readable labels.
8. Preserve all prior validated DeepSeek patterns and existing HAIEC page functions in the later real implementation, **additive not replacement**.

**This review updates the design program only. No HAIEC production code, evidence engine, MCP/transport, or original DeepSeek mock files were changed.**
