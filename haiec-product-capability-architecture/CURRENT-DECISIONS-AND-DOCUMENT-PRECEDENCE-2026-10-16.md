# START HERE — Current Decisions, Document Precedence and Source Status

**Updated:** 2026-10-16 after 52-file audit. **This is the governing READ ME for future planning; it does not supersede canonical code or persisted evidence truth.**  
**Current audit:** [52-file alignment report](COMMON-REPO-FULL-52-FILE-ALIGNMENT-AUDIT-2026-10-16.md) · [20 findings / resolution backlog](COMMON-REPO-52-FILE-ALIGNMENT-FINDINGS-2026-10-16.csv).

## 1. Truth and authority precedence

When two documents disagree:

1. **Deployed application plus exact authenticated runtime receipts**, when independently checked for the claimed operation and scope.
2. **Current canonical implementation and persisted contracts** in the product-owning repository at a documented commit; real server resource/tenant authorization decides access, not marketing.
3. **Canonical in-repo registries and current generated product truth** (e.g. HAIEC MCP registry, evidence producer registry, product integration status; Kestrel canonical capability catalog).
4. **The current execution decision in this page and the latest release gate**, for *future implementation priority only*.
5. **Current E0/R1, E1 and E2 contracts**, E3/E4 ownership handoff, and the enhancement-first roadmap.
6. **Historical pre-Devin recommendations, marketing design, visual diagram studies, curated 87-row capability matrix, prior PR states and demonstration reports**, retained as provenance but NOT latest source status.

The common repository is a planning index, **not** a tenant-scoped production evidence database, source-code authority, or a replacement for the target runtime. GitHub snapshots must remain explicitly timestamped.

## 2. Current engineering decision

**HAIEC enhancement owner:** The separately active authorized Devin/code owner, not this planning/chat workstream. Ask that owner to confirm touched files/active branches; the source audit cannot identify a live Devin agent assignment.

**Ordering for upcoming work:**
- **E0/R1:** Read-only source/owner research COMPLETE for **16 priority workflows**. Release gates and staff ownership still OPEN.
- **E1:** Compose goal-specific read-only user availability from 13 canonical guide goals, 58 source-declared registered tool definitions, existing system nextAction and entitlement/source owner read models. **Implementation spec done; code NOT shipped by this planning lane.**
- **E2:** Compose independent GitHub, eligible local bundle, runtime-only and document evidence onboarding. Honest branch/consent/release readiness, no new evidence engine. **Spec done; code NOT shipped by this planning lane.**
- **E3 (separate Security owner):** Tenant/system/session/machine principal access and the [#2220 security/product-truth correction](https://github.com/subodhkc/haiec-website/pull/2220) (OPEN at inspected time), including safe targeted merge validation. **Privileged security release claims are BLOCKED until needed fixes are actually deployed and scope-checked.** E1/E2 may proceed in non-overlapping composition while E3 runs independently; do not silently bypass existing production authorization.
- **E4 (separate Telemetry owner):** Qualified OTLP/evidence source freshness, correlation, producer health and actual effects. **Proposed implementation interface, not broad live telemetry proof.**
- **E5–E7:** Governance-to-target proof, unified U5/U6 experience and remote customer MCP interoperability once the above ownership/interfaces are stable.
- **T1 external Kestrel acceptance:** **DEFERRED until relevant E1–E7 enhancements and security/release gates.** Devin creates an authorized isolated Kestrel test tenant plus separate HAIEC test org/key; operates HAIEC through deployed MCP from a directory/repo outside HAIEC/Kestrel source; records operation chronology, result/evaluation IDs and redacted screenshots; produces an evidence-bound illustrated user-flow report. Manufacturing replay does not substitute for real SaaS verification.

**Security/testing rule:** do not run the dedicated external Kestrel acceptance now. Focused code-level and negative authorization checks required to safely merge later security fixes are distinct and not waived.

## 3. Separate product owner lanes

| Repository | Its product responsibility | Current work constraint |
| --- | --- | --- |
| `subodhkc/haiec-website` (`Main`) | HAIEC canonical deterministic evidence/U5, U6, approval, tenancy, policy/effect and MCP | Implementation in existing Devin session. No edits by this research session. Do not rebuild canonical modules. |
| `subodhkc/AI-Service-Call-Agent-` (`main`) | KestrelVoice secure SaaS, baseline tenant isolation, privileged operations, voice/MCP/workflow guards, native runtime telemetry | Mandatory Kestrel platform hardening/health truth comes before “secured platform” claims, **independent of paid optional HAIEC**. Do not require AWS to do this. |
| `subodhkc/manufacturing-ai-assurance-haiec` (`main`) | Fictional evidence-bound manufacturing judging/demo, deterministic browser-local MES/ERP/equipment simulation | 25/26/27 demo work is NOT production MES/PLC/ERP enforcement. No new HAIEC Assurance Evaluation inferred from demo operations. |
| `subodhkc/Enterprise-AI-Forensic-Log-Analyzer-` (`main`) | Independent deterministic forensic LogSense and evidence production | Proposed source producer; never own HAIEC verdict/authorization engine. |
| `subodhkc/common-repo-drive` (`main`) | Research, audit, approved handoffs, diagrams, provenance and planning registers | Public as checked 2026-10-16. Private security details require restricted GitHub visibility or separate private tracker; credentials never go in Git. |

The two **security-first** and **enhancement-first** priorities apply to **different execution domains**, not competing priorities for the same sprint:
- HAIEC product: compose E1/E2 first while P0 security release work proceeds in E3.
- Kestrel product: repair mandatory controls/telemetry before promising tenant security; opt-in HAIEC adds incremental, scoped assurance.
- Independent Kestrel × HAIEC external test: only **after** relevant enhancements, not now.

## 4. Latest source heads actually rechecked at audit

| Source | Observed commit | Qualification |
| --- | --- | --- |
| HAIEC `Main` | `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1` | Includes merged Sprint 25 PR #2221; not proof current Vercel deployment |
| Manufacturing `main` | `1fa4c6405808edea64540021df8b1d261cd43c3d` | Sprint 28 PR #49 merged in GitHub; supersedes Sprint 27 simulated commit semantics, actual Vercel release **NOT VERIFIED HERE** |
| HAIEC PR #2220 | head `32e54c58d9622fb26c5b035fcf471b1886109964` | **OPEN, unmerged**, earlier ESLint/new-violations gate failed |
| Common repo pre-audit tree | `9178573a4cf19598f740d30b22419d99820c4013` | 52 tracked files audited; later documentation commits add audit artifacts |
| KestrelVoice `main` | `aafce1d15e6a3f9dbc69307c57c95eb03993eca7` | Earlier source inspection, **not rechecked** in this 52-file docs-only audit |
| LogSense `main` | `c7491ba9124e5df72d250f1b32a4b2c77ccc2993` | Historical source inspection, **not rechecked** in this audit |

**Sprint 28 source correction and evidence boundary:** [Sprint 28 status](SPRINT-28-DECISION-INTEGRITY-STATUS-2026-10-16.md) documents that the prior synthetic PO path could change a cumulative total before supplier qualification was checked. Its later GitHub-merged code addresses the commit gate and adds fictional reviewer-role restrictions, but source assertions of 209/209 and 24/24 tests were not rerun here, nor was Vercel deployment verified. Preserve Sprint 27 as prior-version history; no simulated role is HAIEC authenticated operator authorization.

**No continuous monitoring is implied.** Re-query HEAD/PR states before any code edit, PR merge, deployment or public feature claim.

## 5. Which files to use

**CURRENT — source-backed handoff:**
1. [E0/R1 source/owner reconciliation](E0-R1-READ-ONLY-SOURCE-PR-AND-OWNERSHIP-RECONCILIATION-2026-10-16.md)
2. [E1 implementation contract](E1-CUSTOMER-GOAL-AVAILABILITY-AND-WORKFLOW-COMPOSITION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
3. [E2 implementation contract](E2-LOW-FRICTION-SOURCE-ONBOARDING-AND-EVIDENCE-QUALIFICATION-IMPLEMENTATION-CONTRACT-2026-10-16.md)
4. [E3/E4 separate security and telemetry ownership](E3-E4-SEPARATE-SECURITY-TELEMETRY-OWNERSHIP-AND-E1-E2-HANDOFF-2026-10-16.md)
5. [17-item implementation tasks](E1-E2-IMPLEMENTATION-READY-SUBTASKS-AND-OWNER-GATES-2026-10-16.csv)
6. [22-item enhancement/research/later-test backlog](HAIEC-ENHANCEMENT-FIRST-DEFERRED-TEST-BACKLOG-2026-10-16.csv)
7. [PR #2220 staged release status](PRODUCT-TRUTH-RELEASE-GATE-STATUS.json)
8. [Kestrel secure SaaS study](KESTRELVOICE-SECURE-SAAS-INFRASTRUCTURE-HAIEC-ASSURANCE-REMEDIATION-STUDY-2026-10-16.md), [38 control baseline](KESTRELVOICE-SECURE-SAAS-CONTROLS-REMEDIATION-REGISTER-2026-10-16.csv), [37-feature feature control map](KESTRELVOICE-37-CAPABILITY-SECURITY-HAIEC-COVERAGE-CROSSWALK-2026-10-16.csv)

**HISTORICAL / SPECIALIZED — retain as reference, not latest instruction:**
- `PRE-DEVIN-EXECUTION-GATE-AND-LAYER-ALIGNMENT...`: the older **Task A before Task B** sprint ordering is superseded **as a general work schedule**; PR #2220 security gate persists as a release prerequisite for affected privileged capabilities.
- `KESTREL-FIRST-PILOT-AUTH...`: Kestrel real-action pilot direction preserved, **testing deferred**.
- `CAPABILITY-MATRIX.csv/json` (87 rows): curated old source snapshot, internally consistent but not current tenant availability. `CAPABILITY-MATRIX-V2-SCHEMA.json` is **proposed/unmigrated**.
- `DIAGRAM-SPECIFICATIONS.md`, `V3-AND-GENERATED-DIAGRAM-VALIDATION.md`, the six tracked SVGs: illustrations may use technical domain/family groupings, but **3-pillars/6-customer-jobs remains the top-level product story**.
- Sprint 25/26/27/28 status: versioned demo implementation evidence; Sprint 28 fixes a simulated PO partial-mutation defect from the earlier source. No real Kestrel/MES/PLC enforcement or HAIEC-issued demo-record certification.

## 6. Nonnegotiable user/engineering constraints

- Preserve deterministic engine, source qualification, distinct evidence planes, historical/current separation and explicit UNKNOWN.
- Never authorize a customer using a navigation badge, source registration or optional HAIEC commercial tier.
- One real source owner and one eligible actor per mutation. Tenant/role/resource scopes checked at canonical server route/effect boundary.
- Normal HAIEC merging to Main automatically triggers Vercel; verify actual deployment rather than assuming CI check equals production.
- Avoid broad test explosions now, but do not skip focused security checks to release high-consequence changes.
- No test Kestrel account created or used by this documentation audit. Later external acceptance uses newly issued limited-scope secrets in secure storage, independent workspace, exact remote MCP and numbered redacted screenshots.
- No newly introduced capability, integration or control is customer-ready by virtue of appearing in this repository.

**This index resolves reader priority. It does not modify historic documents' source snapshots or replace any deployed source truth.**
