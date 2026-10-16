# Product Truth Gate: Reachable Workflows, Legacy Evidence, UI/MCP/API and Operational Claims
**Review:** October 16, 2026. **HAIEC baseline:** `Main` `b2c1489773bd95b9e361714fbf7c808bbc866ffb`. **Implementation branch:** `fix/product-truth-workflow-audit-20261016`, [draft PR #2220](https://github.com/subodhkc/haiec-website/pull/2220). **Production status:** NOT DEPLOYED; validation gates pending.

## Decision impact
This gate **changes the implementation order**, not the three-pillar product vision. Before the flagship enterprise action-integrity demonstration, make tenant-bound operational controls and secret handling a P0 release prerequisite. The other customer journeys remain independently accessible; no additional universal setup stage is justified.

### Code changes staged in PR #2220 (not yet in Main)
1. **Legacy provider evidence quarantined:** AWS/Azure/GCP/Atlassian scanner exports and the old multi-source orchestrator now throw explicit `LEGACY_SIMULATED_PROVIDER_DISABLED`. This makes 17 public function entry points fail closed, preventing fabricated affirmative controls. Their original credential-accepting method shapes and result types are kept for compatibility. **Canonical** AWS and other evidence producers are unaffected.
2. **Kill Switch tenant identity:** `POST /api/kill-switch/trigger` now checks that the authenticated API key's organization owns the requested system **before** RBAC, SoD checks, idempotency, notification, or mutation. Foreign-system IDs and missing systems both yield 404. The `recover` route already had an equivalent tenant gate.
3. **Privileged key handling:** the Kill Switch dashboard no longer persists its API key to localStorage, removes the historically persisted browser value at mount, keeps the key in page memory, and clears its input field. This is **risk reduction**, not yet an HttpOnly/session-backed privileged control channel. Keys saved by older versions should be rotated.
4. **Public runtime protection copy:** the 555-line product page was replaced with a clear integration-bound capability overview. Removed blanket 1-second SLA, EU AI Act certification claim, simulated saving outcomes and unsupported out-of-the-box integrations; updated SEO metadata to reflect scope. Targets outside the verified guard perimeter are never portrayed as protected.
5. **Monitoring transparency:** overview explicitly separates telemetry receipt, qualified action/effect evidence and 30-second UI refresh. This did **not** disable the separate monitoring stream API, which can stream persisted high/critical findings; a feed is not a completeness guarantee.
6. **Focused tests staged:** 17 provider/quarantine behavior cases plus one early cross-org trigger denial case. **CI execution and client/production smoke tests not yet confirmed**.

## 1. Reachability verification, not guesswork
- Indexed current source search finds `scanAllSources` only in the legacy orchestration definition. Individual stub scan functions similarly have no verified production import sites apart from that aggregator; docs can reference them. A dynamic or unindexed import was **not** ruled out. This is `NO_CALLER_FOUND_BY_INDEXED_SEARCH`, not proof of impossibility.
- `lib/mcp/tool-registry.ts` derives canonical MCP tools from `TOOL_DEFS` (server) and `IDE_TOOL_DEFS` (IDE). `lib/mcp/capability-guide.ts` contains **13** named customer goal families, validated against registered tool definitions by existing focused tests.
- MCP is a stateless HTTP endpoint with HAIEC API-key bearer and explicit scope/tenant checks. It is **not OAuth** today. A platform-ready goal does not mean every caller can execute it; scopes, system ownership, source readiness, entitlement, evaluated snapshots and held producers remain independent.
- System workspace and session APIs retain server-side organization binding; public website existence is not a substitute for per-feature entitlement and authorization.
- `POST /api/kill-switch/trigger` had a source-observed missing explicit `authResult.organizationId===systemCheck.organizationId` check before actions. Unlike general runtime evidence gaps, this required an immediate code fix. No exploitation or actual cross-tenant mutation was attempted. This remains a P0 security regression test and deployment gate.

## 2. User intent → UI / MCP / API availability reconciliation

The **entry point** existence is source verified, but production entitlement and operational prerequisites are not established by existence of a route. `read` is never permission to execute a mutation. Exact tool names below follow `CAPABILITY_GOALS`; direct UI/API-only actions do not automatically become MCP tools.

| User goal | UI route / component | MCP via canonical guide | Canonical API family | Grounded availability boundary |
|---|---|---|---|---|
| Discover systems, agents and tools | `/dashboard/ai-inventory` / system explorer | `haiec_preflight`, `haiec_list_systems`, `haiec_get_agent_trace` | `/api/inventory/systems/[id]/action-map`, `/agent-trace` | Existing or verifiable connected source; identity conflicts visible |
| Run source assurance | `/dashboard/audit-orchestrator` / system | `haiec_run_assurance`, `haiec_submit_local_scan`, `haiec_github_preflight` | `/api/v1/assurance/runs`, `/api/inventory/systems/[id]/assurance` | GitHub remote available; local CLI/CI preview only; source coverage bounded |
| Examine five planes, action path and DAI | system Action Map / `/monitoring/dai` | `haiec_get_summary`, `haiec_get_agent_audit` and policy reads | `/api/inventory/systems/[id]/assurance`, `/action-map` | Observed/granted planes may be NOT_ASSESSED; no synthetic grant or effect |
| Declare intended capability | System authority and boundaries | `haiec_get_capability_declaration`, `haiec_submit_capability_declaration` | `/api/inventory/systems/[id]/requested-capabilities` | Requested context is not approved policy |
| Propose/approve Operating Envelope | System authority and reviewer | `haiec_submit_operating_envelope` creates **DRAFT**; get reads | `/api/inventory/systems/[id]/operating-envelope`, `/approve`, `/revoke` | Approval is human/session governed, not exposed as automatic assistant permission |
| Human deployment review | system deployment decisions | No approved write tool identified in 13-goal guide; use UI | `/api/inventory/systems/[id]/deployment-decisions/[decisionId]/decide` and `/revoke` | Reviewer identity, policy scope, separation of duties; approval != runtime grant |
| Set up/inspect telemetry | `/monitoring/sources/onboard`, `/monitoring/telemetry` | `haiec_setup_telemetry`, `haiec_get_telemetry_status`, authorized evidence ingestion | `/api/monitoring/telemetry`, existing OTLP intake | NOT_CONFIGURED/CONFIGURED_NO_SIGNAL/SIGNAL_RECEIVED; receipt != effect |
| Runtime observation and risk signals | `/monitoring`, `/monitoring/risks`, `/monitoring/alerts/history` | MCP telemetry status/tools, not a global live-enforcement verdict | `/api/monitoring/stream`, `/api/monitoring/risks` | Persisted evidence/alerts; sampling, source gaps, freshness, and scope explicit |
| Guardrail manifest and operational coverage | `/monitoring/guardrails` | Not confirmed as general mutating goal in MCP guide | `/api/guardrails/manifest/verify`; existing persisted ladder | Configured != evaluated != applied != mediated |
| Kill Switch trigger/recover | `/kill-switch/dashboard` | No direct kill/recover tool established by goal catalog | `/api/kill-switch/trigger`, `/recover` | API-key role, org ownership, SoD, actual target integration; operational effects separately proven |
| Evaluate controls and replays | `/dashboard/assurance`, system Control Test | `haiec_control_assurance`, `haiec_control_test_query`, `haiec_control_replay` | `/api/control-test/evaluate`, `/api/control-test/results` | Applicable/executable controls differ from registered catalog entries |
| Compliance Twin / change | Compliance Twin routes and system release comparisons | `haiec_get_consequence_delta`, `haiec_list_evaluations` for consequence snapshots; not general Twin mutator | `/api/compliance-twin/snapshots`, `/api/inventory/systems/[id]/consequence-delta` | Qualified comparable snapshots; Twin and Consequence Delta are distinct |
| Exact reports/passports/U6 | `/dashboard/reports` | `haiec_get_master_report`, `haiec_get_passport`, `haiec_issue_assurance_package` | `/api/assurance/packages`, `/api/verify/assurance/[publicVerificationId]` | exact evaluation ownership, package/publication permissions; digest != certification |
| Investigate evidence states | System investigation / scenario | `haiec_scenario_preflight`, `haiec_reconstruct_scenario` | `/api/inventory/systems/[id]/investigations/[scenarioRunId]/snapshot` | scenario reconstruction is not a general incident-response center or LogSense HAIEC verdict |

**Parity conclusion:** The core developer assurance life cycle has canonical UI/API/MCP pathways; **human policy approval, deployment decisions and Kill Switch remain separate authorized UI/API operational paths**, rather than a one-prompt automatic MCP write flow. Maintain that distinction; it is a safety feature unless the user explicitly authorizes a future approved integration.

## 3. Protection and monitoring claims to use everywhere
- Say **“Configured guard is available at customer-integrated dispatch points”**, not “all AI execution is protected.”
- Say **“Trigger request and execution guard state are recorded”**, not “every downstream operation stopped in under one second.”
- Say **“Guardrail ladder is persisted and evidentiary”**, not “every decision is enforced.”
- Say **“Monitoring projects persisted qualified observations and detection findings”**, not “complete live runtime action coverage.”
- Say **“A received OTLP signal can extend observed-plane assessment”**, not “OTLP connected proves an action occurred.”
- Say **“Control mappings and applicability are assessed where evidence supports them”**, not “EU AI Act Article 14 compliant.”

## 4. Planning changes versus unchanged scope
**Updated P0:** operational control tenant check; remove long-lived browser-stored privileged API key; isolate simulated affirmative provider controls; negative security/legacy tests; user-facing product truth.

**Still P0:** route/registry/producer/executable-rule inventory and source-backed customer-availability state. Existing matrix of 87 curated capability entries + 20 specialist candidates still does not establish exhaustive scope.

**P1 remains:** one thin UI/MCP objective and evidence-needs resolver built from existing owners; same canonical Assurance and exact evaluation outputs; one governed action end-to-end.

**P1 condition added:** before selling automatic intervention, prove target-level execution mediation and recovery, enforce scopes, make failures observable, and keep an independent operator path. API-key-in-browser dashboard is **not** the desired durable production auth architecture.

**Not changed:** 3 product pillars / 6 independent workflow choices; no global manifests; no new DAI engine, identity provider, SIEM, policy engine, GRC clone or multi-cloud scanner; LogSense remains an independent forensic source.

## 5. Safe merge/verification gate
1. Inspect PR #2220 changed file diff, confirm no canonical AWS/OTLP/MCP evaluators were replaced.
2. Run focused tests `npx vitest run tests/unit/legacy-simulated-provider-quarantine.test.ts tests/security/kill-switch-trigger-tenant-boundary.test.ts`.
3. Targeted typecheck, page smoke/navigation, authenticated correct-org and foreign-org Kill Switch behavior. Verify historical localStorage removal and document key rotation.
4. Evaluate edge cases: missing orgId, foreign system, invalid/expired key, SoD, cooldown, drill, blocked attempt and recovery role.
5. Update any remaining product pages using strong unqualified claims in a **separate** tracked copy-review, not blind global replacement.
6. Only after approval and passing gates merge to Main; then verify automatic Vercel production deployment and exact Main SHA. PR #2217 visual redesign stays separate.

## 6. Follow-on concern (not fixed here)
The Kill Switch dashboard still accepts a bearer key from JavaScript. The current correction stops its persistence, but a **server-side, session-authorized proxy with HttpOnly authentication and dedicated operational RBAC** is a stronger long-term design. Do not implement that as an unreviewed UI patch.

**No verified live provider integrations, enforcement receipts, CI passing status, or production deployment is claimed in this document.**
