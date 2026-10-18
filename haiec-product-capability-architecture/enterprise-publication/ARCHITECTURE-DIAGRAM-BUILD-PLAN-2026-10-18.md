# HAIEC Enterprise Publication — Architecture Diagram System and Build Plan

> **Implementation update (2026-10-18):** D1, D2 and D3 master SVGs have been created as versioned derived assets in [diagrams/](diagrams/) under this plan's own directory; [source, QA, and next-site integration manifest](D1-D3-DIAGRAM-ASSET-MANIFEST-2026-10-18.md). Earlier originals unchanged. Static source QA passed. Browser pixel/render/accessibility/print review, website insertion and live tenant proof remain outstanding. D4–D8/C1–C2 are still planned.


**Prepared:** 2026-10-18 (America/Chicago)  
**Status:** DESIGN/EDITORIAL PLAN ONLY · NOT A NEW IMPLEMENTATION CLAIM · NO DIAGRAMS GENERATED IN THIS CHANGE  
**Scope:** The 12-slide enterprise brief, 20-slide technical capability/control annex, technical reference tables A–F and optional reuse on `/enterprise`.  
**Precedence:** HAIEC main implementation and per-source evidence > verified cases > dated source-qualified common-repo planning > static marketing imagery. Existing diagrams remain preserved.

## 1. Decision: exactly 8 reusable architecture diagram masters + 2 distinct case-evidence visuals

Create **eight diagram masters** and **two evidence-story visuals** (not ten new platform architectures). The eight each answer a different enterprise question. The case visuals are explicitly NOT architecture diagrams and should be based on frozen records/screenshot sources.

**Net new work:** 2 existing masters to refine/reuse (D1, D2); 1 adapted canonical action/consequence projection (D3); 5 new specialized diagrams (D4–D8); 2 case visuals (C1, C2). Do not commission multiple competing hero architectures, one per detector, or a separate flow for each of the 45 controls.

The six current common-repo SVGs are design sources; keep all originals unchanged:
- `diagrams/haiec-platform-workflows.svg` — PRIMARY EXISTING master input for D1
- `diagrams/haiec-technical-evidence-architecture.svg` — PRIMARY EXISTING master input for D2
- `diagrams/haiec-three-pillars-six-capabilities.svg` — supplemental to D1
- `diagrams/haiec-workflow-families-matrix.svg` — supplemental workflow taxonomy, not another architecture master
- `diagrams/haiec-operational-dependency-flow.svg` — supplemental independence/ownership review for D2/D7/D8
- `diagrams/haiec-v3-architecture-corrected.svg` — engineering-domain content source only; its four domains are **not** four HAIEC product pillars

## 2. Eight distinct core masters

| ID | Title and unique executive question | Mandatory contents / boundaries | Source / build decision | Primary uses |
|---|---|---|---|---|
| **D1** | **AI Assurance Platform Map**: “What does HAIEC do across my organization?” | Three pillars **Understand / Assure / Govern & Operate**; six **independent** customer jobs **Discover / Evaluate / Authorize / Monitor / Protect / Verify**; role-based or system/goal/source entry choices; shared qualified evidence foundation, differentiated output. DO NOT depict six required serial stages. | **REFINE/REUSE** `haiec-platform-workflows.svg` + `haiec-three-pillars-six-capabilities.svg`. | Brief slide 3, Annex page 2, website resources overview |
| **D2** | **Technical Reference & Trust-Boundary Architecture**: “How does HAIEC connect to our stack?” | Optional code/GitHub/IDE/MCP/CI, IAM/provider/admin usage, OTLP/runtime, policy/human, secure file/attestation, optional LogSense inputs; org/auth/tenant checks; intake/admission **distinct** from qualification; evidence/provenance + canonical deterministic evaluation when selected; separate monitoring, controls/governance, report and native PEP lanes. Label optional and preview/connection states. | **REFINE/REUSE** `haiec-technical-evidence-architecture.svg`, add explicit trust and deployed/integration boundaries. | Annex pp. 2–3, Enterprise site resource preview, technical sales calls |
| **D3** | **Agent → Consequence & Authority Proof Map**: “What action can this agent cause, and is it authorized?” | Agent/principal → capability → tool/MCP/API → target resource → potential consequence, but **solid edges only when the actual projection qualifies them**; requested, authorized, effectively granted, code capable, observed shown as **parallel evidence facets**; DAI nine-dimension comparison as side panel; first broken/unestablished edge and exact source/time; observed effect-witness separate from code-capability. | **ADAPT** existing deterministic Action Map/AgentTrace projections and explicit source-qualified schematic. For live scoped export reuse `buildTopologyProjection`, `buildEvaluatedActionMapProjection`, `haiec_get_agent_trace(format:'mermaid')`. DO NOT build a second graph or fabricate cross-system handoffs. | Brief slides 2/5, Annex pp. 4–6, live customer assurance case |
| **D4** | **AI Security, Detection & Control Architecture**: “What threats and controls do we actually evaluate?” | Parallel producers: AI AppSec static (standalone), MCP/tenant-isolation static (standalone), authorized adversarial endpoint tests, LLMVerify separate package, canonical/registered control families; output **registered → applicable → source qualified → actually executed → finding/control proof**. Segregate registry counts (176,157,19,31; 45 controls; 26 intake profiles; package detector counts). OWASP/ATLAS as crosswalk labels only, not coverage guarantee. | **NEW**; derive from `DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md`, package manifests and current runtime/test owner. | Brief slide 4, Annex pp. 7–11, Reference A–C |
| **D5** | **Developer-to-Deployment Assurance / CI Gates**: “How does security evidence inform a release?” | Repo/IDE/MCP/GitHub App → scoped source tests and scan artifacts → optional deterministic assurance → separate policy and human decision → **customer-configured** CI/release gate → deployment → eligible re-evaluation. Four distinct results: scanner check / assurance result / human decision / actual deployment gate. GitHub remote vs local/CI preview explicitly differentiated; no invented generic GitHub Action v2 release. | **NEW**, source `lib/developer-integration-source-status.ts`, GitHub App docs, Enterprise POC source scope and actual route contracts. | Brief slide 7, Annex page 12 |
| **D6** | **Runtime Monitoring, Drift & Investigation**: “How can we tell what changed, and what is still invisible?” | Qualified logs/OTLP traces/metrics/events, provider usage snapshots, identity/policy/tool inventory, freshness/source health → comparable baseline vs current → new tools/permissions/delegation, cost/token thresholds, action anomalies, Consequence Delta → alert/triage/evidence and optional investigation; distinguish sourced event, qualified observation, threshold deviation, inference and breach. Missing coverage/expired source stays UNKNOWN; alert delivery ≠ action prevented. | **NEW**, source E4 telemetry/read model and monitoring source contracts, `LogSense` forensic optional path. | Brief slide 8, Annex page 14, Reference D |
| **D7** | **Control Governance, Compliance & Verification**: “Can leadership and auditors prove controls and approvals are operating?” | Framework obligation → scoped/applicable control → configuration/policy → human approval (separate) → source/evidence → test actually executed → receipt/control effectiveness with unknowns → risk/decision owner; demonstrate per-control passport facets (cataloged/configured/approved/connected/monitored/tested/enforced/effect-proved distinct); Compliance Twin and version-to-version comparison. Regulatory mapping NOT certification. | **NEW** based on 45-control catalog, UCP Control Proof, E6 control facets, Compliance Twin, human decision services and reference tables. | Brief slide 10, Annex pp. 11, 16–18, Reference A/C/E |
| **D8** | **Operational Intervention & Kill-Switch Truth Ladder**: “What would really stop a consequential action?” | **Two clearly separated lanes**: supported current HAIEC policy/approval/guard/evidence **versus** integration-dependent runtime target PEP. Exact action attempt and identity → active approved policy/authority if qualified → optional HOLD/reviewer → refreshed narrow permission where implemented → real target dispatch/deny → target acknowledgment → independent effect evidence → recovery/re-evaluation; conditional/dotted for proposed generic hold/resume, PEP integration, effect-proof. If no target adapter, explicitly `NOT_WIRED`; never portray assessment `BLOCK` as verified production interception. | **NEW**, strict source `E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md`; inspect actual `native-enforcement-adapter.ts` and `enforcement-read-model.ts` before diagram creation. | Brief slide 9, Annex page 15, security architect deep dive |

**Design guard:** Evidence qualification in D2 and authority planes in D3 are not the same process. The visual must preserve **source admission ≠ qualified claim ≠ deterministic assessment ≠ human approval ≠ gate configured ≠ native enforcement ≠ effect witness**.

## 3. Two case-evidence visuals — not additional system-architecture masters

| ID | Case / key visual | What to show | Proof and exclusions | Uses |
|---|---|---|---|---|
| **C1** | **Manufacturing Station 217: two-lane action narrative** | Left **HAIEC canonical evaluated synthetic evidence**: declared work order `WO-217-4802` vs observed effect `WO-217-4803`, MFG-EFF-001, scoped REVIEW and report/receipt. Right **fictional operation continuation**: subsequent `DEMO-GW-SYS-217-02` held in browser-local demo, fictional Quality reviewer and monitoring. Show 45 current (all REVIEW) vs 27 historical separately only if space permits. | Never assert live MES/PLC/ERP integration, actual customer action prevented, verified code reachability across all 45, or an actual human authorizer for simulated decisions. Link to existing judge and S217 reports. | Brief slide 6, Annex page 19, demo contextual embed |
| **C2** | **TM Forum scoped control-test evidence** | C16 measured SATISFIED (35,559 vs 60K token cap) and NOT_SATISFIED (106,829); C9 two scoped satisfied results; C7 partial 9/10 event coverage; separate OTLP real telemetry vs synthetic alert canary; evidence package/provenance. | Participant-published archive, not organizer certification; measured C16 fail is not proof gateway blocked; organizer kill switch is not HAIEC native adapter. Cite frozen public register/release, not only pre-event talk. | Brief slide 11 mini-proof, Annex page 20, Reference F |

## 4. Exact placement and visual density

| Publication | Master diagrams to use | Case visuals | Guidance |
|---|---|---|---|
| **Executive Brief (12 slides)** | D1 S3, D4 S4 (simplified), D3 S5 (simplified), D5 S7, D6 S8, D8 S9, D7 S10 | C1 S6, C2 S11 (small) | No D2 full engineering wall. Slides 1/2/12 remain strong written value, risk and POC CTA. Never exceed one **principal** visual per slide. |
| **Technical Annex (20 slides)** | D1/D2 pp.2–3; D3 pp.4–6; D4 pp.7–11; D5 p.12; D6 p.14; D8 p.15; D7 pp.11,16–18 | C1 p.19; C2 p.20 | Reuse diagrams as enlarged crops/lenses; do not generate different truth graphs for each page. Runtime adversarial testing p.13 stays a specialized D4/observed-evidence lens. |
| **Reference Tables A–F** | Small linked D4 at A/B, D7 at C/E, D2 at D | C1/C2 at F | Tables remain primary data. Include a diagram index and text link to full accessible visual rather than reproducing every master. |
| **`/enterprise` website** | Compact D1 product thumbnail, optional D2 technical preview | C1 labeled case preview | Keep existing POC buying motion and three public-resource links. No giant architecture poster inside landing-page hero. |

## 5. Diagram grammar / visual system

One consistent named legend across all diagrams:

- **Solid connector:** source-qualified relationship or implemented service interaction **only when source basis warrants it**; for product conceptual block diagrams, label conceptual rather than interpreted as observed tenant data.
- **Dashed connector:** optional, conditional or integration-dependent interaction; describe actual prerequisite in the caption.
- **Dotted connector:** proposed/future/not independently verified connection; not a shipped control.
- **Unknown/grey:** no qualified evidence; never green-pass or red-failure.
- **Amber:** review/threshold/coverage gap, not necessarily attack or breach.
- **Red:** evidenced unauthorized divergence or test failure in named case, not a generic lack of data.
- **Green:** bounded satisfied finding or confirmed receipt at a named level; not overall AI safety/authorization.

Each diagram must carry: `diagram_id`, human title, audience (executive vs engineer), what the diagram proves/illustrates, dated source pointer, diagram/revision version, production-readiness constraints, exact labels and alt-text. Every source-scoped customer graph must show system/evaluation identity, time basis and proof-frontier. No invented synthetic graph rendered as live customer result.

**Copy conventions:** “HAIEC Assurance Engine”, “Govern & Operate”, “Authorized scope”, “Observed effect”, “Approval decision”, “Evidence frontier” in customer-facing prose. Preserve wire/code IDs only as drill-down details. Show **five independent evidence planes** and **nine DAI dimensions** separately. Do not replace both with ungrounded aggregate green score.

**Design variants, not new truth sources:** Each master can have (a) compact 16:9 executive summary with 12–20 visible labels, (b) full 16:9 or SVG scalable engineering reference with source ownership and qualifiers, (c) 1-column accessible mobile narrative or table. These variants all cite a single master specification, not independent architectures.

**Accessible production assets:** Editable source SVG plus prose/Mermaid source; `title/desc`, `role=img`, `aria-labelledby`, no script, foreignObject or external fetch, no microscopic text on mobile, 200% zoom, sufficient contrast, PDF print not clipped. Render both color and text/status cues. No secrets or private customer data.

## 6. Build order, reuse and verification

### Wave 0 — Evidence/claim lock (docs only)
1. Reconcile all currently claimed edges and module statuses against HAIEC HEAD, 87-row capability matrix, source status, E5.2 adapter contract, 45-control catalog, and manufacturing/TM frozen records. Source dates `2026-10-20` in future-dated implementation records must **not** be assumed shipped as of Oct 18 merely from document filename; verify against code.
2. For each D1–D8/C1–C2 create node/edge ledger: `element | claim | owner | evidence/source ref | connection maturity | depicted line style | caveat | target page`.
3. Review and preserve the six existing SVGs; no premature replacement.
4. Approve copy hierarchy and exact use contexts; avoid diagram feature sprawl.

### Wave 1 — Foundational high-impact (D1, D2, D3, C1)
- Reuse/relabel D1 platform map and D2 technical architecture.
- Adapt D3 from canonical graph/AgentTrace with clear first proof break (static conceptual example remains labeled).
- Design C1 Station 217 as real evaluated synthetic evidence vs illustrative operating response.
- Validate executive readability and technical truth; these four alone establish an intelligible enterprise sales story.

### Wave 2 — Operational platform breadth (D4, D5, D6, D7, D8)
- Build D4 security/detection/control count distinctions; D5 release/CI; D6 monitor/drift; D7 controls/compliance; D8 intervention/kill-switch.
- Give D8 separate current/conditional lanes and **NOT_WIRED** states. Do not imply planned generic resume/intercept implementation exists.
- Where appropriate, use curated subviews/zoom levels rather than many new infographic canvases.

### Wave 3 — Supporting proof (C2) and publication integrations
- Build scoped TM control-test evidence C2; ensure third-party material rights and accurate register/manifest links.
- Integrate diagram variants in the three resource HTML files, not as new dashboard data producers.
- Optional reuse on enterprise page; preserve three document links and existing CTA.
- Validate desktop/mobile/print and source/claim states. PR and merge through existing HAIEC deployment workflow only after verified links/roles/caveats; no product engine changes.

## 7. Architecture-specific acceptance rules

- Exactly **8** master concepts and **2** evidence-story visuals; no duplicate hero, 45 per-control posters or separate graph engine.
- No universal seven-stage deployment/process claim; customer jobs individually available subject to their own prerequisites.
- Every diagram is legible to its audience: executive takeaway within 5–10 seconds; technical path available in zoom/annex.
- Source owners explicit; no static fictitious `ActionProofTrace` mistaken for real HAIEC topology.
- D4 distinguishes control catalog, executable registered producer, evaluated check, and confirmed target action.
- D5 distinguishes scan success, deterministic assurance, human approval, pipeline gate and actual deployment.
- D6 distinguishes signal availability, monitoring freshness, drift/threshold, incident and response.
- D7 distinguishes framework mapping, control configuration, operated control, test/verification and attestation.
- D8 distinguishes status/configuration, decision issued, dispatch applied, effect verified and recovery; no universal production adapter claim.
- C1/C2 have correct provenance/dates, case identity, synthetic/test labels, and URLs.
- All assets have source specs, alternative text, source-linked claim ledger, and browser print/mobile checks. Marketing/social cutdowns derive from existing SVG masters without introducing new claims.

## 8. References (snapshot)

- [Existing image review](../ARCHITECTURE-DIAGRAM-REVIEW.md)
- [Existing diagram specification](../DIAGRAM-SPECIFICATIONS.md)
- [Six current SVGs](../diagrams/)
- [Source-checked diagram and deterministic graph audit](../ACTION-TOPOLOGY-MOCK-DETERMINISTIC-ENGINE-AND-SIX-DIAGRAMS-INDEPENDENT-REVIEW-2026-10-18.md)
- [Full enterprise annex editorial plan](../ENTERPRISE-TECHNICAL-CAPABILITY-CONTROL-ANNEX-PLAN-2026-10-18.md)
- [Enterprise publication kit README](README.md)
- [Detection/control/evidence matrix](../DETECTION-CONTROL-INTAKE-AND-SOURCE-COMBINATION-MATRIX-2026-10-17.md)
- [E5.2 protection and target-proof contract](../E5.2-RUNTIME-ACTION-MEDIATION-HOLD-APPROVAL-AND-TARGET-PROOF-IMPLEMENTATION-PLAN-2026-10-18.md)
- [HAIEC AgentTrace REST + MCP contract](https://github.com/subodhkc/haiec-website/blob/Main/lib/topology/agent-trace-mermaid.ts)
- [Manufacturing case guide](https://github.com/subodhkc/manufacturing-ai-assurance-haiec/blob/main/docs/hackfw/JUDGE-GUIDE.md)
- [TM Forum evidence archive](https://github.com/subodhkc/tmf-2026-evidence)

**Outcome:** Publication-ready diagram planning specification only. No source SVGs, product code, tests, dashboards, or enterprise HTML documents modified by this planning work.
