# Review of Six Uploaded HAIEC Architecture Images

> **2026-10-18 independent current-SVG and live-topology addendum:** [Six tracked corrected architecture SVGs checked against current HAIEC Action Map engine, uploaded Action Topology mock and existing Mermaid exporter](ACTION-TOPOLOGY-MOCK-DETERMINISTIC-ENGINE-AND-SIX-DIAGRAMS-INDEPENDENT-REVIEW-2026-10-18.md). This original review of SIX HISTORICAL PNGs remains valid and unchanged below. Current six **corrected vector** assets under `diagrams/` were fetched separately: static title/desc/aria present, no script/foreignObject/external links/event handlers/duplicate IDs, and conceptual non-linear/source-qualified constraints substantially aligned. Preferred final official product taxonomy: Understand / Assure / Govern & Operate; Discover / Evaluate / Authorize / Monitor / Protect / Verify. Present four domains in `haiec-v3-architecture-corrected.svg` explicitly as engineering groupings; do not mistake static diagrams for live system evidence or E62 cross-system action proof. Existing actual scoped Action Map and `haiec_get_agent_trace(format:'mermaid')` can already generate deterministic source-bound diagrams — see addendum. The new HTML is NOT in repo; this doc is the curated decision record. No old PNG status upgraded.


**Date:** 2026-10-16. **Scope:** All six user-supplied PNGs; five unique SHA-256 designs. These are reference artefacts, not the primary capability inventory. See `HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md` for code anchors.

## Overall verdict

The images successfully communicate HAIEC's breadth, five authority evidence planes, reachability, policy boundaries, DAI, monitoring and verifiable outputs. Their **architecture and several product claims are materially overstated**, however. None should be deployed to haiec.com unchanged. The largest structural error is treating HAIEC as a four-stage mandatory pipeline with DAI as the terminal product and runtime enforcement as an automatic consequence.

### Mandatory corrections

1. **Never depict a universal sequential journey.** Users can enter through developer scanning, compliance controls, IAM authority review, monitoring, forensic investigation, deployment review, or protection. A selected assurance run is orchestrated; operational Kill Switch/guardrails have separate activation and authorization paths. Components have local prerequisites, not an all-modules dependency.
2. **Evidence planes are independent analytical bases, not a mandatory transformation chain.** `REQUESTED`, `POLICY_AUTHORIZED`, `EFFECTIVELY_GRANTED`, `CODE_CAPABLE`, `OBSERVED` can be `PARTIAL`/`NOT_ASSESSED` or unsupported without preventing an unrelated scoped assessment.
3. **Fix IAM claims.** AWS observations are partial. A mapped identity policy or simulated permission is not complete effective authority (resource policies, session policies, VPC endpoint policies and other layers may constrain access). Do not draw effective permission as universally established from IAM connection.
4. **No zero false-assurance-rate claim.** `FAR=0`, `zero false assurance`, and `zero false misses` require a measured benchmark and explicitly defined denominator. The defensible invariant is `UNKNOWN ≠ PASS`, `DECLARED ≠ VERIFIED`, and same qualified evidence under the same versions yields the same deterministic assessment.
5. **Do not promise universal DAI enforcement.** DAI is a nine-dimension evidence-qualified comparator, not a sixth plane, global gate, or runtime dispatcher. The slide's `C ⊆ D` is a *desired authorized-capability relationship* not an established invariant that the engine enforces on arbitrary customer runtimes. `DCD=C\\(R∩P∩G)` is not a general valid production finding when any set is unknown or partial. Preserve exact path identity, unknown/mapping limitations, and mediation evidence.
6. **Explicit runtime protection qualification.** Existing HAIEC Kill Switch guard/SDK, guardrail decision ladder and monitoring read models do not prove a particular customer's dispatch path is mediated or physically blocked. Distinguish `CONFIGURED_ONLY`, `EVALUATED`, `DECISION_ISSUED`, `ENFORCEMENT_APPLIED`, `MEDIATION_OUTCOME_ESTABLISHED` by exact receipts.
7. **SHA-256 is not immutability or a signature.** Hashes support integrity comparison, provenance and content binding. Independent verification depends on who controls the reference digest and publication mechanism. `Cryptographic payload-bound receipts` is safer language than `immutable SHA-256 attestation` without proof of signing and storage properties.
8. **44/44 is a scoped reference result only.** The 44 Kestrel paths are not all HAIEC paths, all repos, or 100% scanner coverage; no universal result follows from the old slide.
9. **Avoid raw secret ingestion copy.** Replace `identity tokens` with `read-only IAM configuration, workload identity context and credential references`. Never advertise forwarding raw credentials or secret-bearing telemetry.
10. **Marketing claims must match release status.** Local CLI is preview/unpublished, GitHub Action v2 not released, Joern qualified external producer not universal in-pipeline execution, manufacturing screenshots synthetic, LogSense forensic output separate from HAIEC verdict.

## Image-by-image disposition

| Original | Useful visual basis | Critical correction | Disposition |
|---|---|---|---|
| `haiec-architecture-infographic-v2.png` | Clean four-band capability grouping and strong contrast | Recast four stages as optional capability families. Remove false universal DAI invariant, `FAR=0`, general `44/44`, generic 60-second replay. Move policy approval ahead of specific operations when relevant but not ahead of all assessment types. | HISTORICAL_REFERENCE_ONLY |
| `haiec-architecture-infographic-v2(1).png` | Same as above | Exact byte-identical duplicate of v2. Preserve provenance, use one visual during future design work. | DUPLICATE_REFERENCE |
| `haiec-simplified-architecture-infographic.png` | Strong compact architecture map | The arrows imply ingestion→core→governance→DAI→report, which incorrectly forces every workflow through deployment governance and makes DAI terminal. DAI belongs in the assurance comparator family. | REDRAW |
| `haiec-combined-capability-architecture.png` | Most promising technical capability grouping | Evidence Core is foundational, not a final stage under product outputs. The five middle modules independently use qualified sources and selected orchestrator paths. `Immutable Telemetry Log Store`, `deterministic non-substitution enforcement`, and universal `SHA256 truth receipts` overstate separate claims. | REUSE_STRUCTURE_WITH_CORRECTIONS |
| `haiec-architecture-diagram.png` | Clearest role→workspace→workflow concept | Audit Orchestrator is not a required child for every operational feature. Kill Switch, telemetry collection, and control mediation must run independent of a queued audit. Reports and evidence are not always terminal outputs of DAI/Twin. | BEST_UX_STARTING_POINT_WITH_REWORK |
| `HAIEC_Architecture_and_Capability_Engine.png` | High visual polish and clear illustrations for marketing | Overclaims universal full IAM and runtime protection, `FAR = 0`, enforced C ⊆ D, active ODC, universal Joern CPG and physical containment. Uses formula without qualification; poster lacks persona/org/entitlement routing. | MARKETING_INSPIRATION_ONLY |

## What is missing from the old diagrams

- Organization entitlement, authenticated role and reviewer authority; scope can differ by system and tenant.
- Open-ended entry points: source check, monitoring, governance, compliance, forensic case, demo, release compare and delegated authority review.
- Evidence health and epistemic state: registered/verified source, received/admitted/qualified/evaluated, current vs historical snapshots, partial vs not assessed.
- Source identity, normalization ownership, strict tenant binding, redaction, no-secret transport and conditional qualification.
- Requested declarations versus **approved** Operating Envelope versus **human deployment decision** versus **runtime enforcement receipt**.
- Independent Change Intelligence families: Consequence Delta, Compliance Twin and runtime differential are not synonyms.
- LogSense as an offline forensic sidecar producing qualified candidate evidence, not an alternate HAIEC verdict engine.
- Manufacturing as synthetic evidence/prototype dashboard, not universal industrial production integration.
- Disclosure of customer connection gaps versus HAIEC-side unsupported producers or held connectors.
- Separate product and platform readiness: implemented code may be preview, bounded, specialized or not connected to the SaaS pipeline.

## Replacement decisions

1. **Homepage:** Use `diagrams/haiec-platform-workflows.svg` and the narrative `Understand what the system can do. Evaluate what the evidence establishes. Decide what to allow. Monitor and protect where connected.` No fixed stages or universal readiness claim.
2. **Technical product page / architecture section:** Use `diagrams/haiec-technical-evidence-architecture.svg` with independently operable ingestion, policy, evaluation and runtime-control lanes, no forced Kill Switch path.
3. **Developer MCP page:** Render `Check my AI app.` as a *workflow initiation* after connection; do not invent a `haiec_check` registered tool until implemented. The existing tools remain truthful.
4. **Industry pages:** Use distinct customer-evaluated and synthetic-lab modes, with truth labels close to every diagram.
5. **Use source-preserving diagrams** in GitHub (SVG + Mermaid specifications). Do not embed the original uncorrected PNGs on HAIEC homepages.

## Re-verification gates before release

- Product owners reconcile every diagram claim against the canonical product status registry and currently connected producer set.
- Engineering verifies each linked CTA, ACL, tenancy and entitlement; no synthetic result appears as a live customer verdict.
- Content/UX validates 320px mobile, 200% zoom, keyboard, screen-reader title/description and reduced-motion fallback.
- QA verifies that no SVG link runs untrusted JS and that dark/light design integration is responsive.
- A/B measurements: first meaningful insight, evidence acquisition completion, referral to deeper reports, and decision routing time. No invented conversion metrics.
