# Sprint 29 — Full-Platform Showcase & HackFW Judge Experience

**Date:** 2026-10-16 · **Repo:** `subodhkc/manufacturing-ai-assurance-haiec`
**Continues:** Sprint 28 (decision integrity, reviewer roles, record
hardening). HAIEC Main untouched — no shared-contract defect required a
change.

## What changed (presentation only — no new product infrastructure)

- `?report=judge` is now a fixed **Two-Minute Judge Showcase** — seven timed
  scenes, platform-first: three pillars and six selectable capabilities →
  Station 217 divergence (`WO-217-4802` approved / `WO-217-4803` recorded,
  `MFG-EFF-001 MATCH`, disposition REVIEW) → held MES write + permitted
  advisory → live digital factory → two-gate ERP decisions → monitoring +
  evidence → closing CTA. The **Interactive Deep Dive** (guided
  demonstration, 3/40/60-engine reviews, record export) is a separate
  linked section — never required.
- Stale "fixed seven-step sequence"/"nine steps" copy reconciled on the
  Reports Hub tile and in the judge guide.

## Delivered artifact inventory (exact)

In `subodhkc/manufacturing-ai-assurance-haiec`, `docs/hackfw/`:

| Artifact | Path | Status |
|---|---|---|
| Final video | `screens-v29/judge-path-final-v29.mp4` | CREATED — 113.8 s, 1440×900 H.264/AAC, edge-tts narration + burned captions, title + closing cards |
| Source recording | `screens-v29/judge-path-recording.webm` | 93.4 s WebM of real UI interaction |
| Stills | `screens-v29/01-platform.png` … `09-showcase-close.png` | 9 ordered screenshots |
| Thumbnail/cover | `screens-v29/thumbnail-v29.png` | extracted frame |
| Narration | `NARRATION-V29.md` | cue script aligned to scenes |
| Captions | `judge-path-subtitles-v29.vtt` | timed, also burned in |
| Sample record | `demo-record-sample.json` | authentic production-UI export, `SES-0001`, `demo-factory-record-1.0.0`, `BROWSER_LOCAL_DEMONSTRATION_RECORD_NOT_HAIEC_ISSUED` |
| Capture pipeline | `scripts/capture-judge-path.cjs` | updated v29 scene order (playwright) |
| Render pipeline | `scripts/render-judge-video.cjs` | cards + TTS + ffmpeg compose |
| Record export | `scripts/export-demo-record.cjs` | captures real download |
| Prior video | `docs/hackfw/screens/` | preserved unchanged |

## Documentation updated

- `docs/hackfw/JUDGE-GUIDE.md` — two-experience path, expanded URL table
  (`judge`, `exec`, `s217`, `s217-tech`, `case:*`, `demo`, `gov`, `hub`),
  v29 video outline, checklist.
- `docs/hackfw/SUBMISSION.md` — showcase scene table, video inventory,
  "what is working" now reflects the digital factory, role enforcement,
  two-gate POs, monitoring and exportable records; test count updated to
  209/214-line baseline.
- `docs/product-story/SPRINT-29-IMPLEMENTATION-STATUS.md`.

## Validation

- Suite **214/214** (TEST_VERIFIED) — incl. 5 new sprint29 showcase tests and
  one reports-layer deep-link expectation updated for the new copy.
- Local Playwright smoke **21/21** (TEST_VERIFIED): judge page structure,
  all linked report routes, held MES write, 40-engine supervisor review,
  expired-supplier hold + qualified-supplier commit, real record download,
  mobile no-overflow, zero console errors.
- Fixture + industry parity gates green.
- 45 current + 27 historical evaluations and source digests byte-identical.
- NOT_VERIFIED at doc-write time: PR merge, Vercel production redeploy,
  production smoke. Hosted video URL and Devpost submission remain
  human-owned external actions — not claimed.

## Boundaries kept

No new MES/ERP/PLC backend, browser simulation engine, approval or policy
service, native evaluation, telemetry infrastructure, or connectors. No
change to the 45 current / 27 historical evaluations or digests. No HAIEC
Main change; E1/E2 and security PR #2220 work untouched.
