# HAIEC — UX-P09 independent acceptance and UX-P10 Monitoring handoff

**Review date:** 2026-10-18. **Disposition:** P09 PR #2257 **independently DEPLOYED_VERIFIED, read-boundary source ACCEPTED**. Developer tests/browser counts inspected in records/diff, **not rerun independently**. P09 request-dialog in-flight org switch is a **P2 code-level lifecycle risk for a future scoped regression**, not reproduced leakage or a basis to block P10. **Next:** UX-P10 already implemented Monitoring experience; additive truth and usability improvements. No app code modified in this review.

## 1. Release accepted

- [PR #2257](https://github.com/subodhkc/haiec-website/pull/2257) merged to HAIEC **Main** exact commit \`47af59ef8a614b67e9300a7c2453d3f2cb72da0a\`. At the time of this review, live Main **has advanced** through separate marketing-only [PR #2258](https://github.com/subodhkc/haiec-website/pull/2258) to \`cef737258f84a67d0fcee24204b6a93b995c6e87\`; this is **not** a P09 code change. The P09 committed deployment remains exactly attributable.
- Authenticated Vercel exact-SHA lookup confirmed **\`dpl_9dcxSEz6Zvwo9e3NLKSrt3Mp89v3\`** [inspector](https://vercel.com/suvodkc-7643s-projects/haiec-website-vercel/9dcxSEz6Zvwo9e3NLKSrt3Mp89v3) at \`READY\`, \`target:production\`, \`githubCommitRef:Main\`, exact SHA. Developer \`7152817170\` is the **GitHub deployment ID**, not the Vercel \`dpl_\` ID.
- Exact commit GitHub [Lint Baseline Gate](https://github.com/subodhkc/haiec-website/actions/runs/39116228314) and [Consolidated CI/CD Pipeline](https://github.com/subodhkc/haiec-website/actions/runs/39116228335) both completed **success**.
- Source diff confirms **8 files**, no decision writer/approval/SoD schema changes.
- P09-G01 CLOSED: \`lib/assurance/decision-read-entitlement.ts\` shared authenticated role/requester/persisted-assigned-reviewer predicate + **field allowlist** for non-entitled members. Applied to \`GET /api/inventory/my-work\`, system decision **list GET** and **detail GET**; detail history not even read for restricted viewers. Every org member does not automatically receive full packet.
- Inbox: \`loadSeq\` + returned organizationId check, old-queue clear on org change; fail-closed reviewer packet fetch on opening dialog, restricted/digestless response refused; degraded empty queue says UNKNOWN. Server CAS, requestKey, version, expiry, human decision and SoD unchanged.
- Developer-reported: 12/12 new entitlement tests, 32/32 s22 route tests (10 privacy cases), 14/14 My Work, 104/104 governance cone, TypeScript/touched lint clean, authenticated UI at 1440/768/390. No independent rerun. **NOT_RUN:** live dialog on a seeded pending request, actual viewer/multi-org real session, external MCP client, full keyboard.

## 2. Independent residual observation — P09-R01 (P2, keep separate)

\`components/my-work/MyWorkInbox.tsx::openReview\` does a **fresh authorized GET**, but its completion does **not** check a per-review request generation token, the current \`organizationId\`, or the returned exact system+decision against the selection before calling \`setPacket\`. Its parent effect closes \`packet\` when the org changes, yet an older request **may resolve after the reset** and call \`setPacket\` anew. The queue load itself is sequence/org-guarded, so this is a *different async operation*. A cross-organization stale modal after switch is **plausible code-level**, **not live reproduced** and still constrained by the server GET's request-time authority; do not characterize as a demonstrated tenant ACL bypass.

**Later optional bounded patch:** close pending reviewer packet request on org change, request-token/mounted guard, assert response \`data.id/aiSystemId\` exact to clicked row, and a browser/unit test with delayed A/B review fetch and org switch. Keep system mutation CAS and per-request server rights intact. This is separate from P10.

## 3. P10 actual existing technical owners (refreshed at HAIEC Main)

**Primary route:** \`app/(workspace)/monitoring/page.tsx\` = **\`/monitoring\`**, a real server page. Do **not** invent \`/dashboard/monitoring\` or rewrite neighboring UX. The Monitoring subroutes already include \`/monitoring/sources\`, \`/monitoring/telemetry\`, \`/monitoring/risks\`, \`/monitoring/alerts/rules\`, \`/monitoring/alerts/history\`, \`/monitoring/runtime-security\`, \`/monitoring/dai\`, \`/monitoring/canary\`, \`/monitoring/differentials\`, \`/monitoring/thresholds\` and other supported operations pages.

**Truth owner:** \`lib/assurance/monitoring-read-model.ts::getTenantMonitoringProjection\` reads tenant-bound environment binders, accepted E4 evidence + quarantines, detection finding store, risk finding register, Joern informative projections and approved envelopes; \`lib/evidence/telemetry-readiness.ts::computeSourceHealth\` gives independent source freshness and validity; \`lib/assurance/monitoring-page-projection.ts\` resolves session/org and returns null rather than fabricated data when unavailable. \`lib/assurance/monitoring-projection.ts\` holds bounded display-only types. **This is a read projection, not a new collector/anomaly engine.**

**Already implemented product components:**
- \`SourceHealthTable.tsx\`: binder registration/status, source authority/coverage, \`qualification.freshness\`, receipt age, Joern unknown frontiers and source detail/health/quarantine links.
- \`GuardrailCoverageMatrix.tsx\`, \`DetectionCoverageGrid.tsx\`, \`RiskRegistryGrid.tsx\`, \`TelemetryPanel.tsx\`, \`TelemetryStreamView.tsx\`, \`MonitoringRefreshControls.tsx\`, \`FilterBar.tsx\`.
- Alert source: \`lib/ai-security/alerting/alert-rule.ts\` persisted rules/dedup/rate-limit and \`lib/ai-security/alerting/alert-dispatcher.ts\` webhook/Slack/email attempt+delivery. Alert history \`app/(workspace)/monitoring/alerts/history/page.tsx\` renders persisted events and **delivery ≠ acknowledgement**. Existing UCP response workflow is separate and may not join to a particular alert without exact event/subject identity.
- Existing runtime test pages are authorized empirical probes; passive E4 telemetry is different. Existing Guardrail Insights are detection/evaluation; customer/native E5.1 enforcement is separate, often NOT_WIRED; E5.2 customizable intervention reference remains **non-production**. E62 cross-system committed effect is not established.

## 4. P10 priority evidence/readability gaps (qualified)

**P10-R01 (P2 — confirmed logic risk):** \`lib/assurance/monitoring-projection.ts::deriveTelemetryStatus\` renders \`CONFIGURED_ACTIVE\` if **any historical telemetry event** exists or any adapter has \`lastEventAt\`/nonzero throughput, **without checking bounded freshness and cadence**. The monitoring source owner's \`qualification.freshness\` already separates FRESH/STALE/NO_SIGNAL. On the overview, the status string can therefore imply active collection from stale historical receipt. **Fix presentation semantics or compute effective connection status strictly from owner-qualified source freshness, not from mere receipt history.** Preserve historical event counts and do not claim source silence = no risk.

**P10-R02 (P2 — confirmed UI timestamp semantics):** \`MonitoringRefreshControls.tsx::refresh\` sets \`lastUpdated\` at click time **before** \`router.refresh\`; initial component mount sets it too. Label \`Last updated\` can be mistaken for confirmed new data collection. Prefer \`Last refresh requested\` separately from canonical server \`projection.generatedAt\` and last qualified source receipt; don't assert continuous real-time stream by poll interval.

**P10-R03:** Monitoring first viewport groups “Static Analysis”, “Telemetry” and “Detection Signals” but does not give a clear *four-way* distinction: (1) passive telemetry; (2) **authorized active runtime testing**; (3) evaluated/configured guardrails; (4) actually **installed target-native enforcement**. Reuse existing source/routes and E5.1 read, not mixed synthetic cards. One fact may have NO_DATA/NOT_ASSESSED/NOT_WIRED on a tenant. No universal green protection card.

**P10-R04:** Alert dispatch records prove attempted/delivered/suppressed **notification**, not actual human ACK, incident creation, remediation or change. Create navigation to existing rule/history and UCP response cases **only if exact existing join**; otherwise show “response/ACK not established” and actionable next owner. Don't fabricate escalation SLAs/cases.

**P10-R05:** The overview generates counts from bounded current projection and uses \`Generated at\`; this is a **read snapshot**, not a streaming or complete estate coverage statistic. \`MAX_TELEMETRY_EVENTS=200\` is a read bound, other stores/counts may be bounded; never say 0 incidents or 100% covered. Distinguish list limit/window/filter from true total. \`lib/assurance/monitoring-filters.ts\` URL filters intentionally narrow only supported scopes; no cosmetic filter state or reporting “0 events” when unavailable.

**P10-R06:** Source freshness, exact action/actor/target correlation (\`correlationBasis\`), upstream producer attribution (\`ATTESTED_V2\` vs declared), target effect and policy drift should not get collapsed into one “monitored” indicator. Existing E4 monitor contract already separates these. Absent exact authenticated target receipt = observed signal, not verified committed effect.

**P10-R07:** Source health, quarantined evidence, source onboarding, threshold baselines, drift and alerts must offer one exact allowed next step, with same session/org/source identity as corresponding existing pages and MCP read operations (do not fabricate a \`monitor_start\` MCP write). Runtime-source onboarding is optional and need not block static assurance/approvals.

**P10-R08:** Validate selected organization and viewer read-scope in every server page, client API and filter URL; no fake viewer role switch; no invocation of runtime tests without authorized explicit confirmation. \`resolveSessionOrganizationId\` uses session \`organizationId\` then active-membership fallback; inspect real org-switch behavior as part of bounded browser test before claiming parity.

## 5. P10 recommended one PR, source-driven

1. Verify all above owners, existing alert/risk/telemetry and actual current page before edits. Adopt only the curated four-state distinction from [UX reference atlas](HAIEC-DEEPSEEK-COMPLETED-UX-ATLAS-REVIEW-AND-UXP03-ALIGNMENT-2026-10-17.md); DeepSeek examples are presentation fixtures, not canonical source.
2. On **existing \`/monitoring\` page**, make source freshness and real availability the first question: what is connected? is it actually delivering recently? what qualified findings/alerts exist? what was tested independently? is any target enforcement installed and verified? what remains unknown and one eligible next source/workflow?
3. Use source-qualified grouping, optional details/links. Prefer existing \`SourceHealthTable\`, subroutes and read-only projections over new models/charts; do not modify critical collector adapters, dispatch rules, decision engines, E5.1 or E5.2 unless a *small proven source-truth projection* correction strictly necessary. Document any unowned data as UNKNOWN/NOT_AVAILABLE rather than invent it.
4. Tighten \`CONFIGURED_ACTIVE\` wording/freshness source as necessary, distinguish data generated vs refresh requested. If existing \`deriveTelemetryStatus\` consumers rely on historic semantics, do not silently change their backend state contract—add a qualified display projection with tests and document semantics.
5. Monitoring/agent/IDE: Use only actually registered read tools and current org/system/source identity; no permission to create human approvals, auto-trigger Kill Switch, or run active runtime test from passive monitor CTA.
6. Scope tests: no sources; configured-no-signal; stale historical receipt/lagging cadence; fresh authenticated V2 event; quarantined/declared only; failed projection vs zero findings; count/limit/filter; alert attempted/suppressed/succeeded vs not ACK; active probe outcome vs passive signal vs native guard NOT_WIRED; org role/key, 1440/390; 768/1280 if cheap, keyboard controls. Preserve tests / types. One scoped PR, Main merge, exact SHA CI/Vercel production and Common Repo sync; stop at P10. Next P11 Reports/Receipts, P12 Usage, P13 shell.

## 6. Decisions

- **P09 accepted. No P09.1 required** solely for unproven async modal race; carry P2 lifecycle test to later My Work owner/cross-page polish.
- **P10 is Monitoring clarity and evidence integrity**, **not** new detection/telemetry engine or native enforcement claim.
- Keep runtime-action-mediation marketing PR #2258 and E5.2 reference outside P10, except transparent \`NOT_WIRED\` / “custom integration” where true.
- Keep six independent jobs, three pillars, five evidence planes; no mandatory waterfall, no false 'safe' from absent events or protection from historical data.
