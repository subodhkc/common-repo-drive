# HAIEC — DeepSeek Light Entry Mock: Independent Product Review, Validated V2 Reference and Implementation Contract

**Date:** 2026-10-17. **Decision:** **ACCEPT design concepts selectively; reject a mandatory four-step onboarding funnel and unsupported evidence/assessment claims.**  
**Status:** Design reference reviewed and updated in Common Repo; **HAIEC production UI NOT modified**, no browser/runtime acceptance executed.  
**Original exact link (now V2 in place):** [sample-light entry additional](sample-light%20entry%20additional).  
**Preserved original:** [DeepSeek mock as received](sample-light-entry-original-deepseek-reference-2026-10-17.html).  
**Design basis:** [Product Entry, Consequence Ontology, Jobs and Inspector UX](HAIEC-PRODUCT-ENTRY-CONSEQUENCE-ONTOLOGY-JOBS-AND-INSPECTOR-UX-DECISION-2026-10-17.md), [Enterprise UX and dependency review](E6-ENTERPRISE-UX-ROLE-OPERATIONS-CONTROL-EVIDENCE-DEPENDENCY-DESIGN-REVIEW-2026-10-17.md), [Detection, Intake and Controls Matrix](DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md). HAIEC app source at last rechecked E6.1 commit \`8880e17f7\`; subsequent E6.2 release not independently verified.

## 1. Product decision: one initial layer, three peer entries, optional contextual depth

**Lead with the value HAIEC produces, not a question that asks the customer to perform HAIEC's work.**

- Headline/value: **Discover what HAIEC can establish.**
- Underlying promise: **Know what your AI can do**; show source-qualified operation, target/resource, authority, code reachability, observation, target effect, limitations and changes.
- Entry choices, equal and non-sequential: **Explore an AI system** / **Choose a goal** / **Connect a source or provide evidence**.
- For a returning user in an established system, prioritize the existing System Assurance Case and My Work/alerts; this chooser is optional, not a mandatory dashboard interruption.
- When the user chooses a goal, show the six independent jobs and their \`minimum to start / what you may get / what remains unknown\` contract. When they choose a source, provide available methods and preflight in the same context. Existing-system entry should reveal consequence and action path facts as established by the actual source projections.
- **No compulsory second layer**: the contextual section appears inline only as needed. Preserve choices across switching paths. Avoid nested wizards and generic four-stage progress rails. A separate, *explicit* external provider consent/credential/target-risk confirmation flow remains mandatory where security or safety requires it.
- A source-first or goal-first user may register/choose a system *only where needed by that particular operation*, not merely to enter the app.
- The mock's example system choices are fictional and clearly marked; production uses an org/role-scoped real AI system selector.

**Why two mandatory layers add friction:** HAIEC users have multiple starting contexts: source-first developer with a CI artifact, reviewer with an assigned request, security operator investigating an alert, executive scanning the estate, auditor opening a frozen Assurance Receipt. Imposing job→sources→preview→run delays those needs and risks losing context. Progressive detail does not add friction when it responds to the chosen objective and is skippable.

## 2. What the original DeepSeek mock got right

| Valuable element | Verdict | Final design use |
|---|---|---|
| Six customer jobs rather than a mandatory assessment funnel | **Keep** | E1 goal availability / MCP capability guide as source of readiness/permission |
| Alternative GitHub/source, SARIF, logs, OTLP, IAM, policy and document sources | **Keep and expand** | Include GitHub App **and separately CI Action**, local archive, Admin API usage, runtime endpoint test with truthful release/consent states |
| Minimum input and unsupported/unknown outcomes in preflight | **Keep and sharpen** | Per-goal facts; unknowns cannot become PASS and source selection alone cannot establish a fact |
| One-source-away suggested additions | **Keep conditionally** | Only as **potential next eligible input**, not a guaranteed discovered relation or assured outcome |
| Preset source packages | **Keep** | Reusable source-type comparison, not an assessment profile or fixed evaluation result |
| Illustrative consequence examples | **Keep with re-label** | Customer investigation questions, not a substitute for canonical technical consequence ontology |
| Clear whitespace, restrained card hierarchy, progressive technical detail | **Keep** | Reconcile with HAIEC shell, typography, colors, status systems and existing contextual inspectors |

## 3. Original high-risk overclaims corrected in the V2 reference

| Original behavior in source | Why it was misleading | V2 correction |
|---|---|---|
| **Four compulsory screens:** job → sources → preview → “assessment” | Forces unnecessary work, particularly for My Work, existing system and receipt-only entry | Three peer first-screen paths with immediate contextual in-place detail |
| Seven-dot “highest ceiling” sourced from a chosen file type | Inaccurately models evidence types as one additive hierarchy; max of file ceiling not assurance quality | **Removed**. Display independent conditional source topics and missing evidence/identity qualifiers |
| “N consequences established” pre-run | Equates source selection with qualified established consequence facts | **Removed**. “Possible investigation themes (not findings)” |
| Job rule \`requires.some(...)\` for multi-source comparison | Could suggest code-to-policy or observed-authority join with only one of the required sources | Removed the false promise; combined hints explicitly require exact policy/identity/producer correlation; no data qualifies from this mock |
| “What this run will establish” and always-filled consequence bucket | Hides non-wired, incomplete, unqualified and evaluation-profile differences | Preview is phrased “could support”; unqualified stays unknown |
| Self-advancing fake parsing/IAM/detector pipeline | Appears to run protected operations/produce assessment | **Removed entirely**; no mock “assessment started” success state |
| “Evidence is in,” “receipt attaches,” “results in ~2m” | No upload or real endpoint/receipt call exists | **Removed**; explicit no-connection/no-upload/no-run notice |
| Fixed ~1–10 minute source setup and ~2-minute execution | Unsupported estimates across CI, cloud authorization, schema and plan tiers | **Removed**; show source-specific authorization/qualification prerequisite |
| Source card “establishes” even for human upload/IAM export | Blurs human attestation, declared policy, provider auth and effective grant | Source-specific “could support” and evidence authority warnings |
| “Protect” target mediation implied by runtime test/OTLP | Runtime empirical probe/trace != native target enforcement | Explicit PEP native integration/approval and NOT_WIRED gap |
| “Verify” assumed replay/receipt from runtime-test choice | No guaranteed eligible frozen report/control result | Exact prior evaluation/result required; selection is not proof |
| Context switch control had no real action | Empty affordance | V2 sample-system picker works, with illustrative identity and no real tenant query |
| Uncontrolled number of source cards | Cognitive burden | Initial short recommended source panel, expand optional source types |
| UI “compare” and added source recommendations absent | Lost ability to reason about cost of richer evidence | V2 conditional, reversible source-set comparisons and explanatory previews |

**All V2 content is labeled fictional / design-only**. It does **not** modify the application, tenant stores or live provider state. It is not an acceptance test and must not be cited as detection proof.

## 4. DeepSeek’s nine extra suggestions: disposition

| # | Suggestion | Decision | Why / backend gate |
|---:|---|---|---|
| 1 | Hover preview “what this adds” | **ADD NOW, but no “+2 consequence facts”** | Explain *type* of potentially supported question and minimum qualifiers. V2 shows a visible description and hover title. Production should also expose keyboard-focus/accessible details and derive from E1/E2. |
| 2 | Compare packaged starting point | **ADD NOW** | V2 comparison modal shows sources shared, only in selected, only in starter; no promised coverage score. Reuse native dialog/accessible close/focus rules in production. |
| 3 | Context-aware system picker | **ADD NOW as visual convention** | V2 switches among clearly fictional samples. In live app only show real tenant-visible \`aiSystemId\` and source/coverage from canonical inventory/readiness; never leak other organizations. |
| 4 | Connected-source chips | **ADD WHEN CANONICAL FEED AVAILABLE** | E2 connection/binder, E4 source health, last qualified event. Do not label “Connected” from config-only and do not hardcode example freshness as real. |
| 5 | Draft & resume | **LATER, only if data loss is a demonstrated issue** | Existing user/system state often obviates server-side preflight persistence. Avoid new DB; temporary non-sensitive local UI state may suffice. Never cache credentials/tenant raw files. |
| 6 | Team contribution view | **LATER** | Requires verified uploader/producer attribution, membership/RBAC and source hashes; existing evidence uploader provides partial owner context, not a universal colleague counter. |
| 7 | Integration health at a glance | **HIGH VALUE; hook up when E4 current signals exist** | Fresh/stale/unknown from real source, last seen, clock and source coverage; absence of telemetry is not no risk. |
| 8 | Similar-systems-added source suggestion | **DEFER UNTIL REAL, PRIVACY-QUALIFIED TELEMETRY** | Do not fabricate product analytics or leak cross-tenant behavior. A deterministic local “missing prerequisite” suggestion is okay and distinct from popularity. |
| 9 | “Unlocks in the next phase” based on evaluation roadmap | **DEFER UNTIL QUALIFIED DEPENDENCY/EVAL SIGNAL** | Show deterministic *potential eligible analysis* only; never guarantee a more favorable assessment, more consequences or verified target effect. |

## 5. Actual E1–E7 layer alignment

- **Architecture:** Understand / Assure / Govern & Operate; six independent jobs Discover/Evaluate/Authorize/Monitor/Protect/Verify, 13 canonical guide goals plus 4 workflow-only goal projections. No new job engine.
- **AI Estate hierarchy:** org → system → agent/action/control/decision; qualified topology/Consequence Flow and System Assurance Case stay authoritative, untouched by example gallery.
- **Source alternatives:** GitHub App, held/validated CI Action version, archive, SARIF, OTLP, JSON/JSONL/logs, policy/IAM live-vs-export, human upload/attestation, Admin usage, runtime test; never conflate connection, qualification, scheduled detector and result. Retain \`MCP_TO_SAAS_EVIDENCE_INGESTION_HOLD\`.
- **Five evidence planes independent:** REQUESTED, POLICY_AUTHORIZED, EFFECTIVELY_GRANTED, CODE_CAPABLE, OBSERVED. File types do not correspond to a cumulative seven-rung progress score. DAI's nine dimensions remain independent.
- **Operations:** control applicable vs configured vs human-approved vs target-bound vs monitored vs actual guard decision vs verified effect vs control replay. Native provider adapter is not generally wired, so never implied by selecting “Protect”.
- **Identity/consent:** returning sessions and role-aware default views; production step invocation resolves system from server-verified org scope, never from arbitrary client text. Connecting a source may require independent OAuth/admin consent/secret handling.
- **Independent verification:** provider-signed lineage, native dispatch ack and target readback require real source; “uploaded and human-attested” never means effect-verified or cryptographically provider-authenticated.
- **Navigation:** reuse System Workspace, source-onboarding, GoalAvailabilityPanel, Controls/Proof, My Work, HelpDrawer and MCP/API contracts; one contextual inspector pattern, no drawer stack proliferation.
- **Marketing/copy:** HAIEC Assurance Engine, DAI, Controls & Operations, Assurance Receipts, Evidence Verification. Keep old serialized numeric codes as internal compatibility only.

## 6. Recommended implementation handshake for the active UX effort

**Do not interrupt current E6.2 code owner, do not blindly port V2 static arrays into production.** Use the HTML only to validate interaction concepts and design spacing. In the actual app:

1. **P0 read-only composition:** reuse \`lib/ai-inventory/goal-availability.ts\`, \`lib/ai-inventory/source-onboarding.ts\`, MCP capability guide and current System Assurance Case; three entry choices are route/selector shortcuts, no new durable workflow.
2. **P0 per-job contract:** source-derived minimum, output, unknowns and exact available next action; distinguish role/entitlement denial from assurance disposition.
3. **P0 source readiness:** real bound source/producer freshness and as-of, CI version/hold, Admin API cost/source basis, attested document status, and instrumentation. Prefer existing qualified read projections over static strings.
4. **P0 consistency:** use one inspection grammar “Why? → Established → Unknown → Evidence → Next action”; no new nested drawers; privileged writes use authenticated dialogs/confirmations.
5. **P1 comparison and suggestions:** only show source-set delta and local missing prerequisites where deterministic and read-side; avoid mock “finding count”, overall score or source-ceiling metrics.
6. **P1 consequence example patterns:** human-readable navigation aids; real cases still identify exact action, resource, relation ID, scope, code/authority/observed and target-effect frontier.
7. **P1 role/system personalization:** existing org picker, system picker, My Work, alerts, receipt-first auditor path. Don't make every user choose an objective on every visit.
8. **Future guarded engineering:** qualified cross-AI-System delegation and target-effect chain remains separately gated; no wizard UI can upgrade uncertain joins.

**Focused acceptance:** new org with no systems, direct link into existing system, reviewer's assigned approval, CI-first developer, IAM-JSON-only assessor, OTLP-only monitoring, human upload candidate, archived report auditor, target NOT_WIRED, expired policy, no budgeted source, two-systems cross-tenant test, source not actually connected, changed goal without lost selections, starter modal comparison reversible, keyboard and mobile use, no simulated actual assessment, and parity with authorized MCP capability guide. No broad redundant E2E.

### Explicit non-goals

No new assurance engine; no source-scoring ladder; no universal upload router; no live target action; no numeric consequence “unlocks”; no mandatory four-stage wizard; no graph-proof claim from names/timestamps; no rewrite/removal of existing HAIEC dashboards; no new raw operational-data persistence in this planning mock. If E6.2 changes conflict with this decision, prefer a scoped follow-up after verifying current canonical owners.
