# E2 — Low-Friction Source Onboarding and Evidence Qualification: Implementation Contract

**Reviewed:** 2026-10-16. **Status:** Implementation-ready planning, not shipped.  
**HAIEC Main source:** `66f5208613c3b5cd7e38ca1a5d9fa1d0aa2d1ff1`.  
**Work ownership:** the separate authorized HAIEC Devin implementation session; all research/documentation updates in `common-repo-drive` only. No source code, tests or external Kestrel tenant acceptance executed in this workstream.

## 1. User proposition and independent entry points

**A customer should be able to start with what they actually possess**—source repository, local evidence bundle, reachable endpoint, API/MCP integration, OTLP or log producer, cloud identity-policy data, versioned governance policy, vendor reports, or human-provided documentation—without inventing missing telemetry, requiring AWS/SSO, or forcing a fixed scan → governance → monitor sequence.

Three separate customer choices must remain visible:

1. **Analyze source code**: GitHub App-connected remote repository or supported/qualified local scan bundle establishes bounded CODE_CAPABLE facts. Does not establish deployment, effective IAM, delegation, runtime execution or committed effects.
2. **Monitor a running system**: register a supported AI System/endpoint/source binder and configure an actual telemetry producer. The E4 owner owns source-health, correlation and effect evidence, not E2.
3. **Assess governance or supplied artifacts**: choose a relevant approved policy/control profile and submit verifiable scoped evidence under applicable intake. User-provided descriptions, screenshots, crawled web pages, diagrams, forms and declarations are **DECLARED/DRAFT input** unless separately verified by a trusted source/producer. A source's claimed `qualified=true` field never promotes itself to established authority.

**Do not make repo connection a prerequisite for an operator whose only legitimate source is runtime telemetry or for a compliance user who has source-qualified control evidence.**

## 2. Source owners to compose—not rebuild

| Canonical Main code | Trust/source fact | E2 job |
| --- | --- | --- |
| `lib/ai-inventory/connection-choices.ts` + `connected-assets.ts` | System connection choice maps to canonical **Asset type**; source connection and identity are independent; uploaded evidence is not a Connected Asset | Reuse choice cards without inventing a new `uploaded evidence asset` type |
| `lib/ai-inventory/evaluation-source-preflight.ts` | Lists active `SOURCE_REPOSITORY` assets; `CONNECTED` + `VERIFIED` plus source-specific consent and branch constitute static assessment readiness | Render exact per-source status, trust basis, branch and steps; no alternate readiness logic |
| `lib/ai-inventory/evaluation-source-selection.ts` | Switching sources resets branch selection to that source's verified default or empty; no invented `main` | Reuse source-selection helper; require exact branch when not known |
| `lib/ai-inventory/github-app-source-access.ts` | Server checks tenant-bound GitHub App repo installation/authorization and source canonical identity | Trust server-authoritative install/repo list, not customer-submitted arbitrary URL alone |
| `lib/ai-security/consent-enforcement.ts` | Source consent integrity, expiration/revocation and exact caller/execution authority | Show browser consent action and status; no silent private-repo grant |
| `lib/mcp/ide-tools.ts`: `haiec_github_preflight`, `haiec_list_github_repositories`, `haiec_bind_github_source`, `haiec_verify_source` | Actual scope-gated **remote GitHub App** setup; binding mutates only after explicit approval | Explain which actor/browser step is required and preserve source/tenant identity |
| `lib/mcp/ide-tools.ts`: `haiec_preflight`, `haiec_submit_local_scan` | Tenant/target/permission setup; local scan bundle validation via existing canonical POST scan API; **scan bundle != Assurance Evaluation** | Provide local fallback only where distribution is actually available; surface preview state |
| `lib/developer-integration-source-status.ts` | Remote GitHub analysis AVAILABLE; local CLI PREVIEW; GitHub Action v2 NOT_RELEASED (at inspected source) | Display exact distribution truth; do not market a preview-only CLI as universally installable |
| `app/api/inventory/systems/[id]/evaluation-sources/route.ts` | Read-only, session/organization-bound preflight | Reuse endpoint and its existing response shape; keep backwards compatibility |
| `lib/evidence/adapters/intake-route-shared.ts`, `lib/evidence/adapters/otlp-receiver.ts` | Accepted route-bound source intake and canonical evidence ingestion | E2 may link to available mechanisms; E4 owns instrumentation and qualified runtime-readiness |
| `lib/mcp/guided-assurance.ts` | Remediation instructions as read-only projection over actual missing verification items | Reuse exact recommendation; never mark evidence gap closed from user explanation |

## 3. Exact source status vocabulary and decision rules

Source preflight's existing `EvaluationSourceStatus` enum is:
`READY`, `CONSENT_REQUIRED`, `CONSENT_TAMPERED`, `BRANCH_REQUIRED`, `SOURCE_NOT_VERIFIED`, `SOURCE_CONFLICTED`, `SOURCE_UNAVAILABLE`.

Its source-resolution failure codes include:
`NO_SOURCE_REPOSITORY`, `ASSET_NOT_FOUND`, `SOURCE_NOT_VERIFIED`, `SOURCE_CONFLICTED`, `SOURCE_UNAVAILABLE`, `REPOSITORY_IDENTITY_UNRESOLVED`, `REPOSITORY_MISMATCH`, `AMBIGUOUS_SOURCE`.

- **READY** only comes from canonical verified connection/access/branch/consent checks for the exact selected repository; do not infer readiness because UI OAuth shows connected.
- **CONSENT_REQUIRED** must lead to the proper authorized user/browser consent action. No agent installs a private repo without explicit user approval.
- **CONSENT_TAMPERED** is a real security/verification failure, not a “please retry” auto-approval route; preserve alert/audit and re-authorization.
- **BRANCH_REQUIRED** means verified source but no established specific branch for the selected asset. Do not default to `main`; the customer must select an allowed branch.
- **SOURCE_NOT_VERIFIED/CONFLICTED/UNAVAILABLE** must not be papered over by a free-text repo URL. Use original trusted source identity/installation resolution.
- **AMBIGUOUS_SOURCE** must ask the user to select an **exact stable source asset ID**, never choose first/last repo or merge branches.
- **No repo source** must not force a registry/no-code goal to fail. It merely blocks claims requiring SOURCE_REPOSITORY.

**One-source-per-run truth:** A given source scan is bounded to a named selected asset, branch and source revision; multiple repositories require explicit separate evaluations or a canonical supported compound-scope contract (if ever approved). Switching selected source never retains the prior source's branch or consent as authority.

## 4. Four adoption routes with distinct source/effect semantics

| Entry choice visible to customer | Prerequisites | Use existing API/MCP owners | Immediate value | Must remain unknown |
| --- | --- | --- | --- | --- |
| **A. Connect GitHub repository** (recommended source-security onboarding) | HAIEC authenticated tenant, authorized GitHub App installation, selected listed repo, explicit consent, verified asset, selected branch | `haiec_preflight` → `haiec_github_preflight` → `haiec_list_github_repositories` → `haiec_bind_github_source` → `haiec_verify_source` → canonical `haiec_run_assurance` | Source/reachability finding from exact code producer if evaluation completed | Runtime effect, permitted delegation, current deployment, effective grants |
| **B. Submit supported local scan bundle** | Legitimately available released/local scan producer, exact sourceIdentity, bundle integrity, consent to upload, scoped `scan:submit`, selected AI System | `haiec_submit_local_scan` → attach returned scan reference via `haiec_run_assurance` | Bounded SOURCE/CODE_CAPABLE input; results only after U5 | Remote scanner equivalence, undeclared files, runtime and full authority |
| **C. Connect running endpoint/telemetry** | AI System, per-tenant protected binder, real source producer and `evidence:ingest` permission | Existing `haiec_get_telemetry_status`, `haiec_setup_telemetry`, OTLP/structured intake | Monitoring setup/source health and observed event facts | A trace or binder alone does not prove action blocked, allowed effect or full coverage |
| **D. Supply governance/evidence documentation** | Applicable profile, selected AI System, explicit upload/consent, verifiable source format/schema | Existing controlled intake, operating-envelope draft, or typed declaration owner as relevant | Draft controls, source assertions and missing-evidence guidance | Verified identity, IAM grants, code execution, actually enforced result or compliance certification |

**Remote versus local product truth:** GitHub remote analysis was marked `available`, local CLI `preview`, GitHub Action v2 `not_released` in `lib/developer-integration-source-status.ts` at Main. Never instruct a cloud assistant to execute a local filesystem scan via HAIEC when no local access exists. A qualifying external client can upload a precomputed bundle only after customer runs an actually available producer through an authorized environment.

## 5. One coherent customer flow; do NOT build an intake megawizard

**Generic first three interactions:**
1. **What would you like HAIEC to do?** Show independent goals, not all mandatory stages. If caller has no system, offer creating/choosing an AI System under existing permissions.
2. **What do you have available?** “GitHub repository”, “Existing agent/API”, “Runtime events/telemetry”, “Assessment/evidence file”, “Not sure—guide me.” Each choice is a bounded path, not a universal form.
3. **Show one qualified next step.** Prefer existing OAuth/connector state, or user-approved source listing/consent, accepted qualified bundle, or minimally sufficient declaration. Explain what that path **can** prove and what it **cannot**.

**GitHub branch (implementation priority):** API key/session eligibility → `haiec_preflight` → GitHub App tenant install/status → authorized repos only → select exact repo ID → `haiec_bind_github_source` with explicit confirmation → source verification → source preflight `READY`/reason → branch/consent selection → canonical run → qualified report/readiness. Avoid duplicate OAuth login steps when user already consented through supported integration.

**Local/source bundle branch:** Show source-producer installation scope (PREVIEW if so), bundle digest and expected file/records, sensitivity preview, upload consent, supported validation result, then separate evaluation run. Do not invent passing findings if the bundle is rejected.

**Runtime-only branch:** System/agent identity and tenant scope, choose supported telemetry producer, configure existing binder with confirmation, instrument customer service, observe real signal and source freshness. No static source claim, no automatic complete plane, no daemon guarantee without producer uptime proof. This path is coordinated with E4; do not alter OTLP receiver during E2.

**Non-code intake branch:** Users may use ChatGPT or another assistant to inspect their public website or offer screenshots/diagrams as **user-supplied provisional input** for draft business configuration, identity discovery candidates and requested-capability proposals. Such extraction is not independently validated code capability, approved authority or observed runtime. A customer must verify consequential settings and provide stronger sources before HAIEC upgrades evidence. Never scrape private systems or infer tenant approval from a screenshot.

**No surprise enrollment:** KestrelVoice is a separate SaaS; creating a Kestrel tenant does **not** automatically authorize HAIEC source inspection, report disclosure, transcript ingestion or control writes. Optional HAIEC activation at onboarding or later requires explicit tenant-scoped consent and map to separate HAIEC organization/system identity. Do not transfer full call logs/recordings by default.

## 6. UI and MCP compatibility contract

- Existing `/dashboard/ai-inventory`, AI System workspace, source-choice cards, source-selection helpers, `/api/inventory/systems/[id]/evaluation-sources`, and `haiec_*` names are the **owners**; E2 should enhance guidance and wiring only.
- Never add a new persisted `isVerified` or `isReady` field independent of canonical source/consent/branch checks.
- Every connect/verify/upload command is handled server-side with org/system binding, existing per-action scopes and explicit human confirmation. The MCP wrapper delegates canonical APIs; it must not bypass auth.
- Browser installation and private-repository consent remain browser-only human actions; MCP can offer URL/instructions and poll readiness, not perform unauthorized installation.
- Preserve existing JSON response contracts when feasible; add optional typed presentation fields only if canonical route owner consents and both UI/MCP use the same semantics.
- E1 availability projection may **read** source preflight and recommend E2, but does not own source verification/mutation or force it for unrelated goals.
- E2 must not change default policy decisions, historical evaluations, runtime outcomes, DAI verdicts, guardrail state or U6 package hashes. New source/evidence requires a **new evaluation** to affect assurance.

## 7. Edge cases to design before writing implementation

| Case | Expected treatment |
| --- | --- |
| User has two identical repo names across organizations | Select only by verified installation/repository identity and stable source asset ID |
| Connected repository loses GitHub App access | `SOURCE_UNAVAILABLE` / access failure; no stale “connected means ready” |
| Customer switches repo A to repo B | Branch resets to B's trusted default or empty; consent is rechecked for B |
| Default branch cannot be proven | `BRANCH_REQUIRED`, not assumed main/master |
| Private source with expired/revoked/invalid consent | Prompt authorized reconsent; no auto-grant |
| API key has read-only scope | See discovery only; no bind/run/upload CTA |
| Local bundle producer not available to this client | Describe supported alternative, not pretend cloud assistant has filesystem |
| Runtime-only customer has no repository | Monitoring onboarding still accessible; SOURCE/code claims unavailable |
| Screenshot or scraped-page claim says “production enforced” | Treat as customer declaration until trustworthy gate/effect receipts exist |
| Local scan bundle passes schema but lacks observation | Source findings only; OBSERVED remains unknown |
| User lacks HAIEC system ownership | Existing indistinguishable NOT_FOUND boundary; never leak other tenant asset |

## 8. File reservation and implementation handoff

**E2 owner should reserve:** `lib/ai-inventory/evaluation-source-preflight.ts`, `evaluation-source-selection.ts`, `connection-choices.ts`, current source-connection UI, `app/api/inventory/systems/[id]/evaluation-sources/route.ts`, GitHub customer guidance/onboarding UI. Only modify canonical source verification/consent logic if a real gap is found; prefer presentation/flow repair.

**E1 owner reserves:** goal availability read projection, registry consumption and goal UI; E2 may expose a read-only `sourceReadiness` view to E1 but no additional entitlement calculations.

**E3 owner reserves:** `lib/org-context.ts`, `lib/api-auth.ts`, session/role, privileged Kill Switch and PR #2220. E2 must consume E3's verified identity and restrict its mutations through existing endpoints.

**E4 owner reserves:** OTLP receiver, source binder, streaming collector, telemetry-readiness and monitoring read model. E2 links to the existing onboarding interface but never claims that telemetry reception equals runtime effect.

**Manufacturing and diagram lane:** `app/page.tsx`, shared demo fixture/playback, draft #2217 diagrams and Sprint 26 manufacturing work are not in E2's scope.

**E2 acceptance criteria for later code work:** optional independent source paths; legitimate single source and branch/consent enforcement; no implicit Kestrel/other cloud access; honest local-preview status; no source fact elevation from screenshots; consistent existing MCP/UI/API tools/CTA and minimal friction.

**Deferred external acceptance:** After E1–E7 actual implementation and controlled release, Devin creates a Kestrel test tenant, separate HAIEC test org/key and uses an isolated remote MCP workspace **outside HAIEC source** to record all actual operations/screenshots. Nothing in E2 planning runs that acceptance now.

**No code changes or tests were conducted by the research activity that authored this contract.**

---

## 9. Implementation record — DEPLOYED_VERIFIED (2026-10-17)

**Status: `DEPLOYED_VERIFIED`.** Same merge as E1: HAIEC commit `847df3d41f5112a273e7987b9a9be7994619a6ab`, PR [#2222](https://github.com/subodhkc/haiec-website/pull/2222), Vercel production deployment `7132729971` (2026-10-17T01:00:48Z).

### New composition (the only new code)

| File | Role |
|---|---|
| `lib/ai-inventory/source-onboarding.ts` | Pure read-only projection of the four source paths with canonical statuses, facts, next step and limitations. Served inside `GET /api/inventory/systems/[id]/capabilities`. |
| `components/ai-inventory/SourceOnboardingGuide.tsx` | Sources-tab "What source do you have?" guide — expandable per-path facts/limitations; fails to a non-blocking notice. |

### Four paths and their owners (all existing — presentation composition only)

- **A. GitHub connected** — `evaluation-source-preflight.ts`, `github-app-source-access.ts`, `consent-enforcement.ts`, `haiec_github_preflight`/`haiec_list_github_repositories`/`haiec_bind_github_source`/`haiec_verify_source`. Exact per-source statuses (`READY`, `CONSENT_REQUIRED`, `CONSENT_TAMPERED`, `BRANCH_REQUIRED`, `SOURCE_NOT_VERIFIED`, `SOURCE_CONFLICTED`, `SOURCE_UNAVAILABLE`) pass through verbatim; a blocked source's reason drives the next action. No branch guessing, no consent auto-grant — those semantics were already canonical and are unchanged.
- **B. Local scan bundle** — bounded submission guidance with `developer-integration-source-status.ts` truth: local CLI = `preview`, Action v2 = `not_released`, bundle = evidence input not an Assurance Evaluation.
- **C. Runtime/telemetry** — `RUNTIME_ENDPOINT` assets + `telemetry-readiness.ts` three-state truth; `CONFIGURED != ENFORCED`, `SIGNAL_RECEIVED != EVALUATED`. No repository required.
- **D. Documents & declarations** — `POLICY_SOURCE` assets + declared-artifact guidance; claims stay `DECLARED`/`DRAFT`, never promoted to `CODE_CAPABLE`/`EFFECTIVELY_GRANTED`/`OBSERVED`.

### Source qualification safeguards retained

Server-side tenant+ownership checks via `getSystemWorkspace`/`verifyAISystemOrgBinding`; consent read through the canonical `inspectRepositoryAccessConsent` twin of `requireConsent`; `evaluation-source-selection.ts` branch-reset semantics untouched; indistinguishable-404 for foreign systems; uploaded evidence never becomes a Connected Asset (it isn't a connection choice — unchanged).

### Gaps / limitations

- The guide is a read projection — the actual connect/upload/verify mutations still run through the existing routes (`?tab=assets`, GitHub App flow, `/monitoring/sources/onboard`, local-scan submission). No new mutation paths were added.
- Declared-artifact intake UX beyond `POLICY_SOURCE` registration (e.g., rich document upload wizards) is a later UI increment, not added here.
- E4-owned producer health/freshness depth is consumed only as the three-state `telemetryReadiness` projection.
