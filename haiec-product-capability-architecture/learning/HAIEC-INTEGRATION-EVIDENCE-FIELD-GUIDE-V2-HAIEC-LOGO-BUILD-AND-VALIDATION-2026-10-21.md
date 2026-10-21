# HAIEC Integration and Evidence Field Guide V2, Official HAIEC Logo, Build and Validation

**Date:** 2026-10-21
**Status:** **BUILT AND COMMITTED TO THE EXISTING CANONICAL COMMON REPO HTML PATH.** **Not published to the HAIEC production website.**
**Canonical file:** [AI Assurance Integration & Evidence Field Guide, V2 interactive HTML](HAIEC-AI-Assurance-Integration-Evidence-Field-Guide-Interactive-2026-10-21.html)
**SME audit and source truth plan:** [V2 audit and enhancement requirements](HAIEC-AI-ASSURANCE-INTEGRATION-EVIDENCE-FIELD-GUIDE-V2-SME-AUDIT-AND-ENHANCEMENT-PLAN-2026-10-21.md)
**Prior V1 QA:** [Original build and validation](HAIEC-AI-ASSURANCE-INTEGRATION-EVIDENCE-FIELD-GUIDE-BUILD-AND-VALIDATION-2026-10-21.md)
**V2 Commit:** `21f6c6b1129754ec4c020a12bbea16cdbba3fba2`

## Actual delivery

The V2 HTML **updates the original committed file** and preserves the 8 question selectors, 10 source categories, 4 educational scenarios, 12 knowledge checks, 5 peer evidence lenses, existing light-theme interactions, local-only editable brief and Markdown/JSON exports.

The supplied official HAIEC PNG logo was incorporated as embedded, optimized transparent WebP images. One crop displays the wordmark in the navigation on a dark background; the full logo and company strapline appears in the footer on a dark background. Images are self-contained base64 within the HTML, not dependent on public image hosting, CDNs or additional files.

**Sales and practitioner copy enhancements:** Shorter actionable hero, "Find the first source I need", minimum useful evidence route for each of 8 questions, separately described first source, exact scope/preflight and follow-up only when necessary. The original guide and explanatory teaching cases remain.

**New diagrams/visually structured explanations:** static accessible source → qualified evidence → scoped claim map, and identity/version/target-correlation checklist. Existing animated hero pipeline, source explorer and evidence lenses remain. The diagrams explicitly reject status promotion from configuration, provider acknowledgment or agent-inferred interpretation.

**Source truth enhancements:** 10 sources now carry a source-specific evidence class, eligibility/preflight check, expected record and incomplete/failure condition; the UI displays them in source detail and source cards, and includes the same facts in Markdown/JSON exports.

**Five evidence planes remain separate:** 
- AWS IAM observation is explicitly partial and no longer automatically suggested as a complete Effective Grant proof.
- Provider administrative inventory is contextual, not a Requested action witness.
- Local user-provided declarations are not mapped directly to qualified Code Capability.
- AWS CloudWatch activity is not a direct Effectively Granted source.
- ServiceNow inventory/execution/table evidence is differentiated; ACL/NOT_PROBED states are not empty records.
- MCP remains a workflow/transport interface, with **no** evidence-plane mapping.
- Customer-native target outcome needs exact record/correlation and customer authorization.
- Selecting a source is an **educational hypothetical** and not a live connection, evaluated claim, or verified result.

**SEO/progressive rendering:** The 8 complete buyer question cards, 10 complete source cards, 10 source-to-proof comparison rows and four illustrative case summaries are included as visible initial HTML, generated from the same authoring fixtures as the interactive source data. Search/filter enhancements continue working after hydration; no separate hidden keyword blocks.

**Brand and content:** No em dashes in the final HTML. No change to HAIEC's source engine, data ingestion, MCP tool registry or real tenant authentication.

## Focused browser acceptance results

Test: locally installed Chromium via Playwright with full HTML loaded using `page.set_content`, because this automation environment blocks direct `file://` navigation.

| Validation | Result |
| --- | --- |
| Source records and questions | 10 source cards and 8 questions, initial static HTML and interactive views |
| Actual user-provided branding | Both embedded header and footer logos decoded and rendered with nonzero naturalWidth |
| Correct quiz responses | 12 of 12 author-keyed decisions |
| Question recommendation changes | 8 of 8 tested |
| AWS IAM incomplete source details | Correct partial evidence, preflight and next source, not a sufficient effective grant |
| Five evidence-plane selector | Effectively Granted view excludes AWS IAM from a qualified source list |
| Four case selectors | 4 of 4 switched and source narrative updated |
| Search and filtering | ServiceNow query matched one card; clear restored all ten |
| Markdown export | Downloaded, contained entered system and added preflight/evidence class |
| JSON export | Downloaded and retained educational/selected source distinctions |
| Viewports without overflow | 320, 390, 768, 1024, 1280, 1440 px |
| JavaScript page errors | Zero |
| External script and CDN dependencies | None |
| Unicode em dashes | Zero |
| Print smoke | Print-media HTML and 15-page A4 Chromium PDF generated. First rendered page visually inspected. No full page-by-page PDF QA |

**Not independently verified:** comprehensive keyboard-only and screen-reader testing, 200% zoom, every external and authenticated documentation link, all printed PDF pages, cross-browser support and live HAIEC production route status.

## Next publication handoff

This is a learning resource, not a new product or connector service. When separately authorized, publish via the existing HAIEC Resources → Learn standalone HTML asset convention and link from /docs/agent-integration and source onboarding. Use the proposed canonical URL `/learn/ai-assurance-integration-evidence-field-guide.html` only once route and sitemap are implemented and verified. Preserve the exact existing source contracts and do not claim connected customer integrations or live receipt verification.

*The deliverable is a V2 source-aligned educational HTML. It does not issue any HAIEC Assurance disposition, human deployment approval, public verification record or native target action.*
