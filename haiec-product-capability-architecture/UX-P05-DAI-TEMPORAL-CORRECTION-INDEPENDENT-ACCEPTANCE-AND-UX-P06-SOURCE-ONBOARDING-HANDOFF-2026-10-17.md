# HAIEC — UX-P05 DAI temporal correction independent acceptance and UX-P06 source/evidence handoff

**Review date:** 2026-10-17. **Release status:** PR #2249 independently **DEPLOYED_VERIFIED** (merged exact SHA, CI success, production READY); **developer-reported behavioral tests** and no real MCP client acceptance. **No HAIEC app code modified during this independent review.** Original developer implementation record has a future-dated archival filename `2026-10-20`; retain its original filename, do not conflate with reviewer observation date.

## 1. Exact release facts

[PR #2249](https://github.com/subodhkc/haiec-website/pull/2249), merged into `Main` at **`13c09ba6533d66b3076b65d53b3d1ee4e572d99a`**. Main branch fetched at same SHA. Independently queried Vercel deployments by exact SHA for project `prj_rCjyzowigh7ysi59sfFtRtF3tvqW`: production deployment **`dpl_Cwso4SYoKpJprcBcP5GyDeJRUK4u`** [deployment inspector](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/Cwso4SYoKpJprcBcP5GyDeJRUK4u), `READY`, `Main` merge SHA exact. Devin's numeric deployment identifier `7149603001` did not resolve in authenticated get_deployment; the real verified deployment ID above supersedes that shorthand. GitHub workflows [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39094902074) and [Consolidated CI/CD](https://github.com/subodhkc/haiec-website/actions/runs/39094902115) both `completed/success` on exact SHA.

Seven changed files: `lib/assurance/dai-assembler.ts`, `lib/mcp/server.ts`, `lib/mcp/capability-guide.ts`, `components/ai-inventory/InvestigateWithAiAgent.tsx`, `app/(workspace)/monitoring/dai/[surfaceId]/page.tsx`, `tests/unit/mcp-investigation-bridge.test.ts`, `tests/unit/dai-rule-confirmation.test.ts`. The work did not add new MCP tools/engines/ingestion/authorization/approval routes.

Developer reports new bridge 27/27, broader regression 256/257 with the pre-existing single `get_telemetry_status` baseline failure, TypeScript and touched-file lint clean, and no real external MCP client roundtrip. **These test claims are developer-reported, not independently rerun**; independent verification covers actual changed source, PR, exact-SHA CI and prod Vercel.

## 2. Source-verified closure of original P1

Prior finding: `haiec_get_dai_report({aiSystemId,assuranceEvaluationId})` could return `EVALUATION_BOUND` while silently reading latest current approved operating envelope and unbounded after-snapshot delegation evidence.

Shipped:
- `assembleDaiEvaluations` requires the bound `assurance_evaluations.evaluationStatus==='COMPLETED'`, and still enforces `surfaceId===evaluation.aiSystemId` with org binding.
- Bound policy recovers exact recorded `operatingEnvelopeId + operatingEnvelopeVersion` from `assurance_evaluation_profile_bindings` using `findFirst` with tenant/system and checks the recorded `operatingEnvelopeDigest` when available plus recorded state `APPROVED`. Current superseded envelope row is intentionally retrievable by exact version; it cannot be substituted by current APPPROVED v2.
- Missing/inconsistent historical envelope withheld; `HISTORICAL_POLICY_NOT_ESTABLISHED` flows through `DAIEvaluation.limitations` to `projectDaiReport` and the MCP response. No invented protected state.
- Bound delegation evidence query uses `collectedAt <= evaluationSnapshotAt`. Rule declarations still cutoff by confirmedAt; bound telemetry comes through run-attached producerRunIds; capable facts come from exact completed evaluation profile binding.
- Completed bound evaluation emits a surface even if all fact families withheld, yielding `NOT_ASSESSED` and explicit limits rather than no record.
- MCP handler returns `found:false` / `BOUND_EVALUATION_NOT_COMPLETED` for a same-system non-completed bound eval and preserves indistinguishable 404 for foreign/mismatched identities. Current-assembled branch retains latest approved behavior.
- UI uses `DAI evidence digest` label (no bare `eval`), and copy prompt instructs comparing MCP returned `daiEvaluationDigest` with displayed DAI digest before narrating. Guide requirements now correctly distinguish current assembled DAI from completed U5 reads.

**Acceptance judgment:** Original *current approved/post-snapshot authority borrowing* code path is closed. No need for automatic P05.2 redesign; proceed to P06.

## 3. Honest residual qualifications (not a new blocker)

1. **EVALUATION_BOUND is a scoped recomputed DAI projection, not a stored immutable DAI snapshot.** Snapshot cutoff on delegation rows qualifies them chronologically but does not by itself prove those records were members of the original evaluation's evaluated evidence set; `evidence.collectedAt` is the stored collection date, not an exact membership proof. Treat older DAI recomputation as evaluation-bound/contextual, not automatically byte-identical to the original U5 report. The binding-recorded envelope/digest is stronger provenance for its own family. Verify exact membership only from a canonical frozen evidence set if the product later requires it. This is a **boundary statement, not evidence of a new observed production leak.**
2. **Additional integrity hardening opportunity (P2):** bound envelope resolution checks identity, recorded digest if present, and recorded state, but does not explicitly check the saved `operatingEnvelopeApprovedAt` / actual envelope `approvedAt` are no later than `evaluationSnapshotAt`. A legitimately persisted binding at evaluation normally implies appropriate temporal provenance, but a direct time bound would defend malformed/legacy rows. Add a targeted test during a later scoped integrity pass if encountered; don't spawn another broad sprint or block P06 on this potential malformed-state edge.
3. `EVALUATION_BOUND` on a `found:false` pending/failed response labels the **requested basis**, not a proven frozen result. Keep `found:false` and `BOUND_EVALUATION_NOT_COMPLETED` visible to clients, never describe that result as a completed evaluated DAI report.
4. **Outstanding real acceptance:** external MCP client roundtrip with rotated limited-scope test key, Agent Audit browser experience on an actually bundled evaluation, viewer/multi-org, live OTLP; all still NOT_RUN. Scope-qualified IDE/agent assistance is shipped as read-only mechanism, not yet confirmed as real-client end-to-end customer acceptance. Keep the private layer-by-layer recording plus narrated/captioned edited version separate, not marked delivered.

## 4. UX-P06 actual source owner and existing implemented capability (code-inspected)

**One primary customer surface:** System Workspace **Sources** tab, canonical `/dashboard/ai-inventory/systems/{aiSystemId}?tab=assets`; adjacent **Evidence** tab remains `?tab=evidence` and must be preserved. Do not create a competing `?tab=sources` surface.

**Existing code:**
- `components/ai-inventory/SystemWorkspace.tsx` already owns `Tab='assets'| 'evidence'|...`.
- `components/ai-inventory/SourceOnboardingGuide.tsx` already displays real `sourceOnboarding` from `GET /api/inventory/systems/{id}/capabilities` with four optional paths, a permission-qualified next action and detailed evidence limitations. It is already a full working shell worth enhancing, not replacing.
- `lib/ai-inventory/source-onboarding.ts` is a pure E2 read-model owner, `computeSourceOnboarding`, four paths `github_connected`, `local_source`, `runtime_only`, `declared_artifact`. SourcePathState labels `READY/ACTION_REQUIRED/NOT_CONNECTED/UNAVAILABLE/NOT_RELEASED/UNKNOWN`, distribution `available/preview/not_released`, and `nextAction.permitted`. All are source/permissions projections, not evidence qualification verdicts.
- Verified GitHub branch/repo consent via `evaluation-source-preflight.ts` and `github-app-source-access.ts`; canonical source identity/consent, exact branch; do not auto-connect.
- `lib/evidence/telemetry-readiness.ts` and E4 source health; `/monitoring/sources`, `/monitoring/sources/onboard`, `/monitoring/adapters`; source statuses reflect binder/accepted signal rather than assessed runtime effect.
- `lib/developer-integration-source-status.ts` describes preview/not released local CLI & CI Action v2. The UI already lists SARIF, structured JSON/JSONL/CSV, OTLP, IAM/policy export, manual evidence, runtime testing, provider Admin API, CI bundles. Catalog entries are not live source connectivity or unlimited release claims.
- Existing MCP `haiec_capability_guide`, `haiec_preflight`, `haiec_get_telemetry_status`, `haiec_list_evidence_binders`, `haiec_github_preflight`, `haiec_list_connectors`, source/evidence tools remain canonical. Existing shared `InvestigateWithAiAgent` copy-only UI may be offered for real source blockers, with appropriate source-specific read tools, not universal AI execution.

**Source truth ladder (independent stages):**
1. Registered/declared source or connector capability (not yet live).
2. Connected/consented and verified source identity (where actual path supported).
3. Evidence received/accepted, with binder/producerRunId and qualification limits (not evaluated).
4. Evidence qualified into explicit evidence plane / bound to exact Evaluation.
5. Evaluation completed, with frozen report and still-unknown areas.
**Monitoring:** config generated != configured != signal received != fresh/qualified observed; **enforcement:** source status is never deployed PEP/kill-switch proof.

**P06 first-viewport design:** system and org context, plain answer “What sources can HAIEC use here?”, sources currently known, four peer optional paths, one real eligible next action with permission/readiness explanation, current E4 freshness, explicit evidence-stage and source basis; collapsible technical details and supported intake catalog. Existing tabs and URLs untouched. Avoid repeat giant form or graph; 390/768/1280/1440 and keyboard.

**MCP helper in P06:** optional context-specific CTA such as “Use your AI agent to inspect source readiness” when an honest NOT_CONNECTED/ACTION_REQUIRED/UNKNOWN state; copy only exact validated `aiSystemId` and a fixed goal/path enum, then agent calls `haiec_preflight`/source-read tool first. For permitted IDE-local source inspection, the agent may prepare files/configuration; uploads and tests always require explicit user approval, scoped binder and correct tool permissions. Do not imply dashboard session unlocks MCP API key or that disconnected client is connected. **No new generic prompt backend.**

## 5. Implementation work order

Proceed **directly to dedicated UX-P06 Sources/Evidence page** after checking active PR/file ownership. Inventory real current tab components/rights and source loader first; identify specifically what is missing in UI. Do small additive UI work, reuse canonical source status/goal availability, one default next step, focus on current source vs eligibility/qualification; only add shared MCP context affordance where it materially assists. Don't edit DAI historical engine in P06. Existing P03.1 search-clear, P04 selection reset, Dashboard D01–D03, P07–P13 are separate lanes. One PR, merge Main after gates, exact-SHA Vercel verify, Common Repo implementation record. No new ingestion, native protection or approval rearchitecting. KestrelVoice real tenant MCP acceptance remains a future separate private capture + narrated edited video.

**Decision:** Historical authority borrowing corrected and deployed; no further automatic P05 correction required. UX-P06 is next. Preserve all existing features and evidence boundaries.
