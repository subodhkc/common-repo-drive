# Capability Matrix Completeness Review & Audit Boundaries
**Date:** 2026-10-16. **Conclusion:** The matrix is **NOT yet complete/exhaustive**. It contains 87 curated cross-product rows plus a separate 20-module candidate register. The snapshot is valuable for UX design and prioritization, not a signed or fully reconciled enumeration of everything users can do.

## Snapshot of checked Git trees
Inspected the GitHub recursive trees (untruncated):
| Repo and inspected tree | Git blobs | Relevant file groups |
|---|---:|---|
| HAIEC `Main` `b2c1489773bd95b9e361714fbf7c808bbc866ffb` | 12,560 | 749 files under `app/api/`; 1,893 under `lib/`; 3,737 under `packages/`; 1,001 under `tests/` |
| LogSense `main` `c7491ba9124e5df72d250f1b32a4b2c77ccc2993` | 769 | 304 under `src/logsense/`; 113 under `tests/` |
| Manufacturing `main` `31948dab5fd65bc4e007d2e833796955f8f3489e` | 989 | 28 under `dashboard/`; 28 under `packages/`; 875 under `data/` |

**Caution:** Files are not capabilities. The counters above include library utilities, fixtures, generated outputs and possibly non-route files. They establish the *inspection denominator*, not the customer-feature denominator. Conversely, one source module can implement many independently useful workflows.

## Gaps in current matrix contract
Columns still needing evidence-based population or explicit unknown:
1. Canonical code owner and producer identity/lifecycle; executable/registered-only/held distinction.
2. Exact UI route(s), menu visibility and deep links; existence of actual registered MCP tool(s), API transport, CLI package and release status.
3. Organization entitlement, account role, tenant-bound permission scope and user mutation authorization.
4. Source/connector readiness, least-privilege connection requirements, admissible manual/manifest fallback and qualification status.
5. Applicability rules by system/industry/jurisdiction and independent evidence prerequisites.
6. Required human reviewer role, approval scope/expiry/revocation, and whether policy authorization is distinct from deployment decision.
7. Evaluation status, exact evidence/output basis, expected unknown/fail/unavailable behavior and status vocabulary.
8. Runtime dispatch/control integration, enforcement evidence tier, recovery and safety conditions.
9. Actual dashboard surfaced behavior and whether help/demo copy overstates ready/not-ready code.
10. Verified tests/contracts, deployment/build status and last production-validation result.

## Specific overlooked or under-represented product families
- Tenant/org account lifecycle, invitation, roles, authentication, access and billing/trial UX; these must not become prerequisites for unrelated analyses beyond authentication/entitlement.
- Source and producer activation pipeline (connected vs observed vs mapped vs qualified), data freshness, replay-safe intake, connector revoke/decommission.
- Agent context integrity (prompt/context influence), trust boundaries, RAG/MCP/skills/computer-use/delegation safety, tenant isolation and supply chain.
- Incident cases, alerting/notification delivery, remediation ownership, human escalation, closure and recovery records.
- Scheduled or change-triggered reassessment and baseline comparison; monitoring must not be confused with periodic scanned snapshots.
- Developer products: limited local CLI, held GitHub Action v2, autonomous agent guidance, API/MCP transport parity and refusal paths.
- Specialized regulatory and risk products (NYC LL144, LLMVerify, ISAF/lineage, AIRRD, OSNIT, policy generation) requiring separate customer availability and provenance checks.
- Multi-industry profiles and controls where manufacturing is currently a **synthetic reference**, not production plant/OT connector proof.
- Operator-focused consent/confirmation for writes, kill/recovery, guardrail decisions, separation of duties and verified target effects.
- Independent forensic LogSense integration as a supported evidence producer only after HAIEC admissibility and provenance contract.

## Audit procedure to close
**Gate A: Mechanical census**: enumerate HTTP routes, dashboard pages, source service modules, MCP registered tools, producer/rule catalogs, npm/Python package entry points, controls and adapters. No inferencing a feature from a filename alone. Record a route/owner index.
**Gate B: Contract review**: for each candidate user-visible action, trace `UI/MCP/API → auth/entitlement → canonical service → evidence requirements → source/decision/result`; create explicit unknowns for dead code and unregistered/held producers.
**Gate C: Persona/org routing**: evaluate developer, AppSec, SRE, governance, compliance, executive, auditor and tenant admin under startup/AI-native/regulated/manufacturing/telecom presets. Presets must not affect deterministic assurance truth.
**Gate D: Operational depth**: independently inspect scan, human approvals, source ingestion, tenant ownership, deployment decision, runtime guard, kill/recovery, verification and incident response.
**Gate E: Publication/UX proof**: only promote capabilities to `AVAILABLE` when relevant release state, actual UI/MCP route, role/tenant checks, output and qualifying evidence are verified. Unavailable is not customer fault.
**Gate F: Regression maintenance**: re-run census on main head changes; changed routes/registry require matrix review, not automatic scope inflation.

## Critical product claims to correct
- `app/(dashboard)/kill-switch/page.tsx` contains hard-coded claims about sub-second controls, integrations and broad prevention. These are not universal target-side evidence. Qualify and reconcile with real integration/receipt capabilities before public marketing.
- Historic “three steps, full compliance” presentation is overly universal, even where source scan, controls, regulatory policy or runtime are independently selectable.
- Locally installed scanners and CI actions must follow `lib/developer-integration-source-status.ts` (local CLI preview, GitHub Action v2 not released).
- Evidence connection ≠ qualified source; policy approval ≠ human deployment approval; human decision ≠ operational enforcement.
- Avoid any universal `FAR=0`, `C ⊆ D` enforcement and `44/44` scanner coverage claims.

## Reuse and ownership
**HAIEC** owns canonical assurance, evidence ingestion, policy authority, comparisons, reports, user grants, reviews and runtime contracts. **LogSense** owns deterministic offline forensic reconstruction. **Manufacturing** owns labeled synthetic estate and independently generated acceptance inputs. Neither auxiliary repo should duplicate HAIEC canonical evaluations or purport to control customer equipment.

**Bottom line:** 87 rows are the *initial decision inventory*; 20 more are candidate families. Exhaustiveness remains an explicit audit deliverable, not a completed property.
