# HAIEC API Platform | Interactive Page and Integration Plan

**Design baseline:** October 21, 2026  
**Decision:** Improve the **existing** `/api-platform` Next.js route. Do not create `/api` (reserved API namespace) or a competing `/developers/api` canonical page.  
**Status:** Standalone HTML design prototype; **not deployed**, no backend alterations.

## 1. Why this page exists

Convert developer interest into an **authorized first integration** and enterprise inquiries by making the external interfaces understandable before requiring someone to read long API tables.

**Canonical positioning:** **One Deterministic Assurance Engine. Three Ways to Integrate.**  
**Homepage headline:** *Assurance, engineered into your systems.*  
**Company category:** Evidence-Bound Assurance  
**Four-word descriptor:** Deterministic AI Action Assurance  
**Brand promise:** High assurance in every consequence.

Primary customer jobs:

- **Application / CI developer:** Run a source-bound Assurance Evaluation, poll the run, read Master Report and Agent Audit.
- **Platform / operations engineer:** Discover an evidence binder, ingest structured/log/OTLP evidence and attach a receipt to a new run.
- **AI agent / IDE operator:** Connect MCP, preflight, obtain approvals for consequential operations, run the canonical services and explain verified results.
- **Security / enterprise sponsor:** Verify architecture, scopes, proof boundaries and request an enterprise POC.

Important differentiation: AI systems can coordinate the workflow; **HAIEC's deterministic services generate the evaluation**. Evidence Intake produces receipts; evaluation remains a separate step.

## 2. Design deliverables

- `index.html` is the multi-file standalone page.
- `assets/api-platform.css` is the light-first visual system.
- `assets/api-platform.js` owns guided interface switching, code examples, endpoint exploration and clipboard controls.
- `assets/api-convergence.svg` is the original interface-to-engine architecture figure.
- `HAIEC-API-Platform-Standalone.html` is the fully inlined offline preview outside the package.
- Desktop/tablet/mobile screenshots are available separately and in the archive previews folder.

UI modules:

| Module | Visitor question | Primary interaction |
| --- | --- | --- |
| Architecture hero | Why HAIEC APIs vs disconnected scanners? | 3 surfaces converge on one canonical engine |
| Three objective cards | Which interface should I use? | Select REST, Evidence Intake, MCP |
| Integration workbench | What is the workflow and first example? | Tabs, clickable steps, code language selectors, Copy |
| API explorer | What exact operations exist? | Search, family filters, endpoint detail accordion |
| MCP feature | Can an AI assistant run HAIEC? | Copy the four-word prompt, open MCP guide |
| Engineering trust | What scopes and evidence can I rely on? | Links to keys, evidence, methodology |
| Conversion panel | How do I start? | API key or enterprise POC |

**No live API calls are made by this prototype.** The workbench presents code examples only. Keep it that way unless introducing a properly authenticated, explicitly authorized production API console as a separate approved project.

## 3. Contract grounding

Authoritative source files in `subodhkc/haiec-website`:

- `public/openapi/assurance-v1.yaml` — versioned REST contract: **15 method/path operations**.
- The same OpenAPI overview documents **five** machine evidence-intake operations (`/api/ingest/structured`, `/api/ingest/log`, `/api/otlp/v1/{traces,metrics,logs}`). Their full schemas are **not** separately described as OpenAPI `paths` in this contract.
- `app/api/mcp/route.ts` — `POST /api/mcp` as authenticated stateless Streamable HTTP JSON-RPC. GET/DELETE are implemented as **405** responses, not REST APIs for customers.
- `lib/mcp/tool-registry.ts` — canonical MCP tool inventory derived from `lib/mcp/server.ts` and `lib/mcp/ide-tools.ts`. The October 21 source review counted **62** registered tools; do not hardcode an evergreen count in marketing UI.
- `app/api-platform/page.tsx` — existing page; preserve qualified details including source verification, local/IDE/CI boundaries, SDK pilot status and runtime test approval requirements.
- `lib/haiec-public-urls.ts` and `data/public-site-registry.ts` — shared URL conventions and route ownership.
- `components/AutoHideNavigation.tsx`, `components/Footer.tsx`, `app/sitemap.ts`, `data/seo-page-intents.ts` — current site governance.

Primary endpoint `/api/v1/assurance/runs` requires `aiSystemId` and `engines`; API fresh static scan requires a verified source asset, `executionMode: api` and appropriate scopes. POST is asynchronous and supports `Idempotency-Key` for retries.

**Never present the 753 internal Next.js `app/api` route files as 753 supported public endpoints.** Those are a source-code inventory, and many are privileged, tenant-specific, callbacks, or internal operations.

## 4. Recommended Next.js implementation

**Canonical URL:** `https://www.haiec.com/api-platform`  
**Menu:** Preserve current **Developers → Run HAIEC → Assurance API** link to `/api-platform`. No extra top-level navigation entry.

Recommended module structure:

```text
app/api-platform/page.tsx             # Server component: SEO, content, accessible endpoint catalog
components/api-platform/
  ApiPlatformHero.tsx                  # Semantic hero and architecture SVG
  InterfaceSelector.tsx               # Client island for REST / Intake / MCP
  IntegrationWorkbench.tsx            # Client island with steps and sample code
  EndpointExplorer.tsx                 # Client island search/filter; server-render seeded table
  McpFeature.tsx
  ApiSecurityPrinciples.tsx
  ApiPlatformCTA.tsx
lib/api-platform/
  contract-catalog.ts                  # Generated/static typed data validated from OpenAPI
  code-examples.ts                    # Versioned, inspected snippets
public/images/api-platform/
  api-convergence.svg
```

Refine to existing component conventions. **Do not** paste standalone header/footer as duplicates; production uses site-wide navigation/footer and typography tokens. Treat local styles as a reference, not a new design system or global CSS reset. Limit client components to interactive elements; keep all important headings, copy and operations in server-rendered HTML for SEO.

**Keep legacy content** (SDK instrumentation wrappers, GitHub setup, local/IDE/CI limits, optional runtime testing, troubleshooting) accessible as an advanced guide, FAQ or deeper docs section rather than deleting it during visual consolidation. Preserve deep links to existing documentation and the approved key-management route `/dashboard/api-keys`.

## 5. Site links and API navigation contract

| Label | Canonical destination | Expected behavior |
| --- | --- | --- |
| Assurance API / Developers → Run HAIEC | `/api-platform` | Current page, in-app navigation |
| Agent integration (MCP) | `/docs/agent-integration` | Dedicated setup and MCP documentation |
| GitHub integration | `/docs/github-integration` | Source authorization walkthrough |
| OpenAPI 3.1 | `/openapi/assurance-v1.yaml` | Raw machine-readable contract, new tab or download |
| Capability manifest | `/.well-known/haiec-capabilities.json` | Machine-readable discovery, new tab |
| API key management | `/dashboard/api-keys` | Authenticated app handoff, login if required |
| Developer hub | `/developers` | Packages/SDKs and related tools |
| Source/evidence | `/evidence` | Evidence and provenance explanation |
| Enterprise POC | `/enterprise` | Commercial CTA |
| Methodology | `/methodology` | Deterministic evaluation methodology |

Proposed anchor IDs within `/api-platform`: `#interface-selector`, `#api-reference`, `#workbench` (or compatible current IDs; preserve existing deep links and add aliases if needed). Do not hardcode external navigation if Next.js can use `Link`.

## 6. Positioning and vocabulary

Lead with buyer outcomes and technical differentiation, not implementation caveats or disclaimers:

- *Integrate assurance into the systems your team already operates.*
- *A single canonical evaluation can be initiated by REST, coordinated through an agent, and informed by qualified evidence.*
- *Read what was established, inspect supporting evidence, and route unresolved decisions responsibly.*

Keep material boundaries beside the relevant claim:

- A registered asset is not automatically VERIFIED.
- API access is organization- and scope-bound, never an automatic grant to repositories.
- MCP uses HAIEC API-key authentication on this surface; do not claim OAuth for the HAIEC server without source proof.
- Evidence receipt ≠ evaluation result; new evidence can be attached to a **new** evaluation.
- A report is scoped to a persisted evaluation; avoid presenting a report as target-side enforcement proof.
- A runtime test is authorized and may have HELD categories; a client should first run safety preflight.
- Do not imply source scanning runs instantly; start is async and `202` returns an identity for polling.

## 7. Phased production implementation

**P0: source reconciliation and site alignment**
- Compare the prototype against the latest `app/api-platform/page.tsx`, `public/openapi/assurance-v1.yaml`, `app/api/mcp/route.ts`, API key scopes and current route registry.
- Verify all CTA destinations and current account-state handling. Audit pre-existing deep links before redesign.
- Identify which versioned REST operations are included in OpenAPI vs referenced intake descriptions and ensure code examples remain accurate.

**P1: convert UX, preserve product truth**
- Implement hero, 3 selectable integration surfaces, guided steps, code panels and 20-item endpoint explorer.
- Preserve current responsive, light-theme tokens; dark only for terminal/agent diagram contrast.
- Add accessible tabs and keyboard interaction, copy confirmation, search/filter, zero-results, reduced-motion handling.
- Keep machine contract linked, not hand-maintained in two contradictory source lists.

**P2: SEO and conversion**
- Update `/api-platform` metadata within existing `data/seo-page-intents.ts` ownership.
- Add FAQ only where questions are backed by current source behavior.
- Confirm only one canonical page, registry/sitemap remains unchanged unless its contract changed, and add deep links from `/developers`, GitHub docs and Agent Integration where useful.
- Track page → documentation, page → API-key management, page → enterprise inquiry and surface-selection events (no secrets or payload logging).

**P3: QA and publish**
- Test desktop 1440, tablet 768, mobile 390; full keyboard navigation and prefers-reduced-motion.
- Verify all 15 spec operations, 5 intake references, and MCP transport representation.
- Test no frontend credential entry or live API calls, no route regressions, no double header/footer, no layout overflow, no broken links, correct auth handoff.
- Run application build, lint, relevant route-contract tests, preview deployment smoke and production readback. Provide screenshots, before/after content mapping and exact production URL.

## 8. Work not authorized in this design task

No new backend API creation, no new payment tier, no SDK promise beyond shipped status, no browser-side secrets, no unauthenticated API proxy, no automatic agent mutation, no company-wide website redesign. This artifact is the **design source** for a separately reviewed Next.js implementation PR.

## 9. Acceptance criteria

A new visitor should be able to answer within one screen **what HAIEC provides**, select their relevant interface within a few seconds, find a valid first code example, open its formal contract, and understand how to obtain an organization-scoped key. The page should still reward a sophisticated engineer with accurate method/path/scope discovery, proof semantics and direct documentation access.
