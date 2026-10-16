# Sprint 29.1 — Showcase QC & Submission Readiness

Date: 2026-10-16 · Scope: `subodhkc/manufacturing-ai-assurance-haiec` only
(HAIEC Main, E1/E2 and security work untouched)

## What changed

Focused quality pass on the Sprint 29 deliverables — no new product
capability:

1. **Capture bug fixed (root cause).** The Sprint 29 video capture reached
   the demonstration-record scene via `page.goto('?report=demo')`, which
   reloaded the application and discarded the accumulated browser-local
   factory session — the record scene showed an empty/generic record.
   `scripts/capture-judge-path.cjs` now navigates in-document
   (`RPT.view='demo'; STATE.page='reports'; render()`), preserving the live
   session.

2. **Re-recorded + re-rendered.** New same-session capture (~95s WebM)
   composed into `docs/hackfw/screens-v29/judge-path-final-v29.mp4`
   (**113.8s**, under the 120s limit) with narration, burned captions and
   title/closing cards.

3. **Representative record regenerated.** `scripts/export-demo-record.cjs`
   now drives the full video scenario through the real production UI and
   asserts the intended outcomes before saving:
   `docs/hackfw/demo-record-sample.json` — `SES-0001`, **35 events, 2 review
   requests** — denied MES write, permitted advisory, denied held-stock
   release, `REQ-2026-8842` financially approved but
   `HELD_SUPPLIER_QUALIFICATION`, `REQ-2026-8855` committed, torque anomaly +
   signal interruption. Still `demo-factory-record-1.0.0` /
   `BROWSER_LOCAL_DEMONSTRATION_RECORD_NOT_HAIEC_ISSUED`; passes the hardened
   import validator.

4. **Video QC on the rendered artifact.** Frames extracted at each narration
   cue (`qc-t*.png` committed): platform pillars + six capabilities, Station
   217 target divergence (REVIEW), held write + advisory, live factory state,
   both PO outcomes, monitoring observations, record screen carrying real
   session activity, Know·Govern·Verify close with public-receipt CTA.
   Subtitle text matches narration (generated from the same script).

5. **Docs reconciled.** New `docs/hackfw/FINAL-PACKAGE.md` — one artifact
   index with direct links, split into *ready* vs *human action required*.
   Test counts corrected: 214/214 repo tests; Sprint 28 production checks
   (24/24) vs Sprint 29 judge-path smoke (21/21) distinguished.

## Post-merge correction — narration overlap (same day)

Review of the rendered MP4 found edge-tts clips longer than their scheduled
windows: cue0→cue1 overlapped ~2s, cue1→cue2 ~3.3s, cue2→cue3 ~0.1s (the
fixed `adelay` starts let the amix overlap speech).
`render-judge-video.cjs` now probes each clip's real duration and schedules
cues sequentially (≥0.6s gap, never earlier than the intended scene), and
regenerates `judge-path-subtitles-v29.vtt` from the same schedule so burned
captions track the actual audio. Re-rendered: `judge-path-final-v29.mp4`
still **113.8s** (<120), every cue inside its scene, no overlap by
construction. `NARRATION-V29.md` and `SUBMISSION.md` scene timings updated;
copy-ready Devpost fields added to SUBMISSION.md.

## Verification

| Claim | Status |
|---|---|
| Same-session record navigation (no reload) | TEST_VERIFIED — 13/13 production smoke, zero console errors |
| Record mirrors video scenario (both POs, both anomalies, denials) | TEST_VERIFIED — script assertions + sprint29 suite 5/5 |
| Video < 120s, narration/caption sync, branding | TEST_VERIFIED — 113.8s probe + frame review |
| 45 + 27 persisted evaluations unchanged | TEST_VERIFIED — no `data/` changes in the PR |
| Final links | LIVE_VERIFIED — all FINAL-PACKAGE URLs return 200; public receipt renders |

## Remaining human-owned steps (not claimed complete)

Hosted video upload (YouTube/Vimeo) → Devpost submission before
Oct 30 2026 11:00 a.m. CDT → participant registration (talent.fwtx.city) →
North Texas eligibility attestation → Demo Day RSVP (luma.com/ygyxb4yy) and
in-person attendance Oct 30, 9:30 a.m.–3:00 p.m. CDT.
