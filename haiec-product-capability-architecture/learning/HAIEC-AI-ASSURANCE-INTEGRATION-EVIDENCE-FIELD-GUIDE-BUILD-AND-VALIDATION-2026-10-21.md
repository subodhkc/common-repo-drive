# HAIEC AI Assurance Integration & Evidence Field Guide: build and validation

**Date:** 2026-10-21
**Status:** Standalone light-theme HTML BUILT and committed to Common Repo. **Not deployed to the production HAIEC website.** No backend engine, MCP runtime, connector, customer integration or decision record was altered.
**HTML:** [Open the interactive guide](HAIEC-AI-Assurance-Integration-Evidence-Field-Guide-Interactive-2026-10-21.html)
**Proposed public route, not yet live:** `/learn/ai-assurance-integration-evidence-field-guide.html`.

## Content and design scope

- Source-first opening diagram and a question-led evidence guide with **8 buyer/practitioner questions**.
- **10 independent evidence path cards**: authorized GitHub repository, local/declared source, AWS IAM, AWS AgentCore/CloudWatch, ServiceNow, OpenTelemetry/OTLP, MCP-assisted workflow, approved policy/human records, native business target records and provider administrative inventory.
- Interactive family filters, text search and source-specific five-step onboarding guidance, with source and qualification limits exposed alongside positive capability.
- Five peer evidence planes, with DAI operating across relevant authority claims rather than as another plane.
- Educational source lifecycle, keeping configured, authorized, data observed, qualified and evaluated conceptually separate. Labels are **instructional**, not invented universal backend states.
- Four illustrated consequential-action cases: procurement payments, vendor CRM agent, telecom operations and manufacturing ERP/MES.
- **12 manually authored, source-specific practice questions** with correct-choice explanations.
- Editable one-page evidence plan with proposed sources and explicit limitations, user-defined system/owner/question and Markdown/JSON download; local-only export and print.

## Source alignment, actual HAIEC contracts

Reviewed on the HAIEC default branch before authoring:

| HAIEC owner | Specific bounded product truth |
| --- | --- |
| `components/docs/EvidenceSourceAdvisor.tsx` | Six source questions and their limitations; the guide expands these without modifying their owning UI |
| `lib/ai-inventory/source-onboarding.ts` | Connected source, local source, runtime-only and declared artifact are optional non-coercive paths; self-reported data is not verified |
| `lib/ai-inventory/evaluation-source-preflight.ts` | Repository access depends on verified bound source, branch and consent |
| `lib/iam-grant/effective-grant-observation.ts` | Current AWS principal/policy observation is partial, not canonical effective authorization by itself |
| `lib/integrations/aws/contract.ts` | Read-only bounded AWS AgentCore/CloudWatch operations; configuration and raw cloud events are not qualified control verdicts |
| `lib/integrations/servicenow/contract.ts`, `preflight.ts` | Read-only per-instance read surfaces, credential/ACL preflight, NOT_AUTHORIZED and NOT_PROBED are not empty source |
| `lib/evidence/adapters/otlp-receiver.ts` | Accepted traces, logs and metrics are evidence intake, not an applied action or independently witnessed effect |
| `lib/mcp/capability-guide.ts`, `lib/mcp/guided-assurance.ts` | MCP helps select and read authorized actions; actual caller scopes/source preflight determine availability, and no new evaluation truth is invented |
| `lib/assurance/master-report-product.ts` | Frozen evaluation report and current investigation are distinct; this guide does not create a Master Report or Decision Receipt |

All case data are **educational illustrations**, not real production incidents or customer authorization evidence. An uploaded report, connection setting or source event must not be promoted to safety certification or customer target enforcement.

## Focused browser validation

Test engine: installed Chromium via Playwright `set_content` with full standalone HTML. Local `file://` navigation is restricted by the test environment; browser opening from a user file is not separately verified.

| Acceptance | Result |
| --- | --- |
| Questions displayed | 8/8 |
| Source cards displayed | 10/10 |
| Family filter | Correct 2 authority/identity results |
| Source search | One ServiceNow result |
| Source detail view | Five numbered steps |
| Five evidence planes and readiness | Correct state-changing panels |
| Four scenarios | Telecom switch and source selection verified, all authored cases present |
| Quiz | 12/12 correct answer interactions |
| Markdown/JSON brief | Both downloaded successfully |
| Browser JS page errors | Zero |
| Responsive 320/390/768/1024/1280/1440px | No horizontal overflow |
| Print | Source reference and all 10 page sections present in print media |
| Customer copy | Zero Unicode em dashes |
| Script dependency | No external scripts, no application backend call and no API keys |

Desktop 1440px and mobile 390px hero screenshots visually inspected.

**Outstanding before production publication:** Real print-to-PDF page quality; independent screen reader, keyboard-only and 200% zoom review; site-specific analytics/consent; anonymous live status check for authenticated routes; final owner source-truth signoff; page route and navigation implementation. The HTML has draft canonical metadata for the proposed route; it must not be treated as already deployed.

## Recommended publication

Consistent with existing HAIEC `/learn/*.html` resources, publish the standalone document as a static learning asset if desired, with its own metadata, canonical URL and sitemap entry. Link from Resources > Learn, and also from `/docs/agent-integration` and source onboarding. Preserve the current evidence source advisor and connection screens; this is an expanded tutorial, not their replacement. Do not give the resource its own top-level product menu or a new connector service.

**Not yet built in this turn:** The separate short Executive AI Deployment Decision Workshop and the separate Can You Trust This AI Assurance Report? audit reader.
