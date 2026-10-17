# E6.2 — Enterprise Operational UX, Controls & Evidence Convergence — Implementation Record (2026-10-20)

Status: `TEST_VERIFIED` locally; deployment recorded below once confirmed on the merge SHA.
HAIEC branch: `feat/e62-operational-ux`
Base: `Main` @ `8880e17f7` (E6.1, PR #2229)
PR: #2230 — https://github.com/subodhkc/haiec-website/pull/2230

## Scope delivered

### P0 §2 — remaining E6.1 approval-UX truth gaps

- **Context-unreliable effective approval state.** The My Work read model now surfaces
  indeterminate effective state when comparison context is missing: unreadable/missing/
  changed operating envelope, unavailable latest evaluation, orgs exceeding the bounded
  effective-context query, and partial backing-read failures. Persisted decision history
  and canonical effective-state owner semantics are unchanged — the read model makes
  uncertainty explicit instead of letting a missing comparison read as confident CURRENT.
- **Inbox refresh.** `MyWorkInbox` extracts its fetch into `load()` and re-invokes it
  after successful assign/decide operations (dialog close + assignment control `onDone`).
  `router.refresh()` alone cannot refresh `useEffect`-managed state; the canonical
  inbox projection is reloaded so counts, assignments and states reflect the server.
  Conflict (409) and failure paths render honestly — no phantom success.
- **Least-privilege display.** Requester: own requests. Assigned reviewer: assigned
  packets. Admin/owner: assignment and oversight affordances. Viewer roles get
  read-only summaries without unnecessary scope/rationale disclosure. Server-side
  authorization remains authoritative; no new organization roles were created.

### P0 §3 — Controls & Operations first-class context

`buildControlCatalogSection` now composes a system-level **operations context**
(operating-envelope status, enforcement-seam binding, monitoring/source freshness)
alongside the existing Control Catalog and Control Proof journey in the same
Controls tab. Facts are presented independently — a control may be configured but
not deployed, monitored without verified enforcement, etc. No new evaluator,
no new badge semantics; `NOT_ESTABLISHED` is rendered where no binding exists.

### P0 §4 — detection/intake capability coverage (evidence-bound)

The governance projection `authority` block and `AssuranceCasePanel` expose
per-action **authority-plane coverage**: requested action/resource match,
policy-operation-allowed, code-capable, effectively-granted, observed — with
source location/evidence IDs where available. A single aggregate authority label
can no longer hide a missing plane. Action/resource match is NOT presented as
full capability equivalence; policy action allowance is NOT capability
authorization.

### P1 §5 — intake choice reconciliation

`SourceOnboardingGuide` gains an **intake-options disclosure** enumerating
supported source categories (source scan, CI bundle/SARIF, structured
JSON/JSONL/CSV, raw logs, OTLP telemetry, IAM/policy export, manual/attested
evidence, provider usage data) with the explicit boundary: **accepted source
input is intake, not an assurance result**. No mandatory sequence was added;
the four existing independent paths remain.

### §6 — GitHub App vs CI Action doc honesty

`app/docs/ci-pipeline` now distinguishes the GitHub App (installed,
consent-scoped PR binding) from the standalone CI Action, notes that a
published `@v1` tag is not a GA guarantee, and states that a produced
bundle is evidence intake, not a HAIEC Assurance Engine disposition.
No legacy credential flow is recommended (docs use `HAIEC_API_KEY`).

### Simulated-upload trap neutralized

`components/wizard-v2/EvidenceUpload.tsx` (unreferenced picker) contained a
`simulateUpload` that fabricated `/uploads/{questionId}/{file.name}` URLs and
marked files `success` with no persistence. Converted to honest
`staged`-locally semantics: no fabricated URL, no green "uploaded" claim,
explicit "persists only after submission through canonical intake" notice.
Canonical upload routes (`/api/evidence/upload` et al.) untouched.

## Validation

- `TEST_VERIFIED` — 136/136 focused tests: my-work truth locks (14),
  control-catalog ops-context mocks (10), s22 SoD/digest (36),
  estate-summary (8), estate-diff (10), control-proof-journey (18),
  control-visibility-a02 (35), ux5-section-batch (5).
- `CODE_VERIFIED` — `tsc --noEmit` clean; changed-file ESLint clean
  (3 pre-existing exhaustive-deps warnings in EvidenceUpload remain).
- Link-check warnings: same 4 pre-existing baseline errors in untouched files.
- `NOT_RUN` — authenticated interactive click-through (no authorized
  browser session available); API boundary + render verified via HTTP in E6.1.
- CI/deployment: recorded in PR #2230 checks; Vercel preview "blocked" is the
  same pre-existing baseline condition as #2229; production deployment verified
  separately on merge SHA.

## Not delivered (honestly deferred)

- Provider Admin API usage/cost card — no verified display surface exists;
  recorded in the deferred backlog rather than fabricated.
- Cross-system Delegated Action Integrity — see
  `E62-CROSS-SYSTEM-DAI-DELEGATION-ENGINEERING-CONTRACT-2026-10-20.md`;
  presentation-only work for a new authorization/identity engine was not
  folded into this sprint.
- Org-wide topology graph — no grounded join source exists.
- Sidebar calm-IA consolidation — remains P1 deferred.
