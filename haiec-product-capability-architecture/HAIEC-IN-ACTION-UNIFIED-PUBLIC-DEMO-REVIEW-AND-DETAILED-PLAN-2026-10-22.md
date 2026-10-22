# HAIEC in Action: unified public demo review and detailed implementation plan

**Date:** 2026-10-22
**Status:** Reviewed assets and implementation plan only. No production changes authorized by this document.
**Primary decision:** Introduce one public, unauthenticated, app-like **HAIEC in Action** guided sample under proposed `/demo/ai-system`. It complements `/explore`, replaces the homepage "Explore a Sample AI System" destination after approval, and preserves the current sample Action & Access Map, Manufacturing, telecom and report links.

## 1. Product/design directive

This is an engaging PRODUCT DEMONSTRATION, not a proof exercise or sales page of static diagrams. It can use a coherent synthetic scenario, pre-populated example systems, fabricated *sample* events, simulated approvals, simulated operational outcomes, and sample reports. Do not require canonical report digests, customer source provenance, public verification numbers, live instrumentation, real GitHub App installation, or external-system side effects merely to render the demo.

**Truth boundary:** Mark the overall experience "Interactive sample | Fictional data" once in persistent UI and in a compact "About this demo" explanation. Clearly distinguish simulated actions from actual customer actions when a button is used. Do not invent actual customer assessments, real alerts, real production enforcement, customer-specific certifications, external API calls, or verified integrations. UI demonstration is allowed without technical proof, but production product claims on adjacent links must still be accurate.

**Commercial focus:** Show *what a buyer can do with HAIEC* and *the decisions it helps them make*, not a long list of controls or a no-coverage disclaimer. Explain technical terms only contextually.

## 2. Reviewed inventory and reuse policy

1. **Current homepage** `app/page.tsx`: hero already links to Try HAIEC with Your AI Agent, Kestrel report, Manufacturing dashboard and `/explore`. A lower section links "Explore a Sample AI System" to `/sample-ai-action-access-map`. **Do not add a fifth competing hero CTA.**
2. **Sample Action & Access Map** `/sample-ai-action-access-map`, `components/ai-inventory/SampleMapClient.tsx`, `lib/topology/sample-projection.ts`. Existing fictional **Northstar Commerce Operations Copilot**, task **AI-assisted refund processing**. It has interactive/static views, lenses and nodes; preserves its synthetic-only topology. Keep URL working. Use it as the system graph/detail affordance; avoid forcing every visitor into the full graph first.
3. **Legacy HTML Assurance Workspace** `/demo/assurance-workspace-sample.html` = `public/demo/assurance-workspace-sample.html`. Interactive sample UI with Assessment Workspace, source/telemetry/IAM setup wizards, coverage, model inventory, evaluation, monitoring, findings, reports, controls, alerts, settings, etc. Five-step welcome tour. **Reuse: dashboard navigation hierarchy, setup visualization, stepper, good microinteractions, report density. Do not copy** its outdated statistics, plans/pricing, contradictory Acme/Kestrel/telecom identities, "live streaming" indicators, generalized kill-switch claims, or all 36 historical menu views into the main demo.
4. **Telecom/TM Forum public HTML** `/reports/agentic-assurance-sample-report.html` = `public/reports/agentic-assurance-sample-report.html`, plus HAIEC website `docs/DASHBOARD-CONVERGENCE-PROJECT-CHARTER.md`, `docs/DASHBOARD-CONVERGENCE-PROJECT-PLAN.md`, TM Forum archive `subodhkc/tmf-2026-evidence`. Provides executive summary, AL0/AL1/AL2, source binder, agent path map, authority planes, case forensics, remediation, reporting. **Reuse** inspector, before/after contrast and report navigation; keep as an advanced industry example. An additional HAIEC TM Forum judge/guest environment is historically referenced at `/dashboard/assurance-lab`; its public guest access URL/current session availability have not been independently confirmed. Do not assume it is anonymously accessible or make it the main CTA.
5. **Manufacturing** `https://haiec-manufacturing-demo.vercel.app`, `subodhkc/manufacturing-ai-assurance-haiec/dashboard/index.html`, public `/solutions/manufacturing`. The guided judge view `?report=judge`, focused Station 217 `?report=s217`, Dashboard and Digital Factory, simulated reviewers/ERP/MES/PO work, Reports Hub. Manufacturing is the strongest end-to-end case. **Reuse** story pacing, replay, visual response to clicks, split operations and reports. Keep its nine-system data and case identities isolated from the Northstar demo. Manufacturing is an advanced featured "Explore a full industry scenario" link or a separately launched scenario.
6. **Platform Explorer** `/explore`, repo design reference `design-references/explore-2026-10-21/`: educational guided objectives, evidence planes, capability overview, learning. Keep separate; link contextually as "Understand HAIEC".
7. **Real reports** `/sample-reports`, `/sample-reports/kestrel`, `/verify`, etc. Leave in place as proof paths for buyers who request them. The sample demo itself does NOT need verification.

## 3. Proposed route and information architecture

New public `/demo/ai-system` ("HAIEC in Action"), no authentication, no backend mutations. Existing `/sample-ai-action-access-map` remains for deep technical topology; `/explore` remains overview education. Use shared header/footer and site design system without creating a third incompatible website shell.

Landing has two modes:
- **Guided tour** (default): 6 coherent decisions in ~90 to 150 seconds. User can skip, back, pause and open an inspectable view.
- **Explore workspace**: 6 persistent navigation views sharing the same fictional scenario state.

Primary default system: **Northstar Commerce Operations Copilot**, AI-assisted refund processing, since it already exists in `SAMPLE_SCENARIO`/ `SAMPLE_PROJECTION`. This is deliberately generic and cross-industry.
Featured adjacent industry journeys: **Manufacturing Station 217** (opens existing industry dashboard / judge deep link) and **Enterprise Telecom** (opens public interactive sample report and, after validation, a public guest view).
Do not splice Manufacturing order IDs or telecom slice telemetry into the Northstar fictional world.

## 4. Six-screen storyboard (actual interaction requirements)

**00 Welcome / Overview**
- App-like dashboard: Northstar Copilot, enterprise objective, agents/tools/resources overview, most material example question.
- Card: "An AI agent can issue refunds. What keeps a customer-requested refund within company policy?"
- Primary: Start guided scenario; secondary: Explore workspace; side chips for Manufacturing and Telecom deep dives.
- Show sample badge in header and compact walkthrough progress.

**01 Connect / Setup**
- First-run setup visual from HTML workspace with two choices: "GitHub App" and "Sample source upload", plus optional policy/IAM and runtime evidence cards.
- GitHub App illustration: choose authorized repositories -> bind source to named AI System -> see available source analysis. The public demo must not actually request GitHub permissions or secrets.
- Interactive click moves sample state from "Not connected" to "Sample source ready"; reflects in sidebar and subsequent views.
- Make connected optional context, not a mandatory seven-stage gate; explain extra sources deepen insight.

**02 Discover / Action & Access**
- A crisp visual journey: request -> AI agent -> refund tool -> payment provider API -> financial consequence.
- Click agent, tool or permission to open right-hand inspector: "what it can reach / approved boundary / potential business consequence".
- Reuse `SAMPLE_PROJECTION` for technical action map details; avoid writing a separate supposedly equivalent topology dataset.
- In main guided mode show digestible 3 to 5 node overview; "Open full Action Map" opens existing route. Can use map component locally if not awkward.
- Trigger: "Show an exception" with a sample refund outside approved threshold, not a real payment.

**03 Evaluate / Material Finding**
- Reveal one meaningful issue: operation is technically reachable but requires an authorized business decision. Highlight code reachability vs business authority.
- Show matched source/config fact, policy expectation, sample observed/unknown state, potential consequence. Plain-language "Why this matters / What should happen next".
- Interactive toggle between "As configured", "Proposed action", "What HAIEC highlights" without implying a real engine ran.
- Reuse mature report inspector design from telecom and report components; do not dump giant rule tables.

**04 Govern / Decide**
- Simulated approval queue with "Approve within policy", "Request review", "Reject exception" (actions update demonstration state only).
- User chooses reviewer disposition and watches the timeline update. For an unauthorized exception, approving the *request* does not automatically grant an external payment credential or execute a refund.
- Optional branch "What if the control is not configured?" shows a gap/decision path, not an automatic invisible block.
- Link from view to real HAIEC approval/DAI capabilities without claiming the sample invoked them.

**05 Operate / Monitor / Response**
- Mock sequence of 4–6 operational events with step/pause/next/replay and a change-of-state illustration. Possible review notification, attempted action, held/reviewed action, next steps.
- Show an "Operations" tab with activity timeline, finding changes, approval status, and monitoring signals. All are illustrative; do not label pseudo telemetry as live or imply a universal inline PEP.
- Pull replay pacing and subtle activity animations from Manufacturing rather than implementing broad real-time stream.

**06 Report / Outcome**
- Generate (locally, not backend) a sample executive-ready one-page report card from the scenario state: what was requested, exposed path, decision status, sample next actions, and link to deeper report/real samples.
- Download/print "Sample walkthrough summary" can be client-only HTML/PDF print if simple. Do not make a fake SHA/verification token. Use friendly report tabs: Executive / Technical / Next steps.
- CTA: "Try HAIEC with your own system" (existing signup/onboarding or GitHub integration), "Scope an enterprise POC", "See an actual report".

All six screens should tell ONE story and keep navigation/progress synchronized. The demo may use fully authored sample fixtures.

## 5. Full-workspace navigation

Suggested six tabs: **Overview, Connect, Action Map, Investigate, Operate, Report**. The guided story moves through them, but direct exploration does not require completing a preceding step. Add a contextual header with sample system, present scenario state and "Reset demo". Avoid top-level duplicate /explore tutorials.

Show the three HAIEC pillars subtly: Understand (Connect/Action Map), Assure (Investigate/Report), Govern & Operate (Decision/Operate). Six HAIEC capabilities Discover, Evaluate, Authorize, Monitor, Protect, Verify are independent capabilities; do not tell the user the demo tour stages are HAIEC's only operating sequence.

## 6. Visual/design direction

- Premium light-first enterprise dashboard with existing HAIEC shell; restrained dark inspector for activity/technical detail.
- Borrow clean workspace shell, navigation grouping and stepper from the HTML; borrow full-page fluidity and event replay from Manufacturing; borrow compact incident/story and split-panes from telecom; borrow topology from existing Action Map.
- Desktop: 200–240px left navigation, central activity scene, right contextual inspector 280–330px (collapsible). Mobile: system switcher + compact step bar, main pane, inspector drawer. Sticky scenario progress not sticky 30-view navigation.
- Two animation intensities: guided cinematic step highlights and restrained static free-explore. Respect reduced motion.
- Visible actual interactive controls for scenario selection, setup, entity inspection, decision choice, replay and report tabbing. No decorative click targets or inert buttons.
- Keep sample numbers few and consistent; avoid fake counts of deployed systems, ungrounded customer logos, badges and revenue impact.

## 7. Product boundaries and external link map

No public demo action may:
- Read or mutate customer data, create a production AI System, install GitHub App, save secrets, run costly scans, approve production change, charge refunds, send notifications, revoke credentials, alter org settings, issue verification receipts, or trigger runtime test.
- Leak real organization IDs, credentials or signed links.
- Present "simulated APPROVED" as a real approval record or "sample report" as an independently certified deliverable.

Actual workflow entry links point only to verified current HAIEC routes: `/login`/onboarding or `/get-started` as selected by actual app, `/docs/github-integration`, `/sample-ai-action-access-map`, `/sample-reports`, `/explore`, `/enterprise`, `/solutions/manufacturing`. Keep auth callback if needed.

For industry deep links:
- Manufacturing `https://haiec-manufacturing-demo.vercel.app/?report=judge`
- Manufacturing focused `https://haiec-manufacturing-demo.vercel.app/?report=s217`
- Telecom public HTML `https://www.haiec.com/reports/agentic-assurance-sample-report.html`
- TM Forum public archive `https://github.com/subodhkc/tmf-2026-evidence`
- Separate TM Forum guest session only after exact public URL/access verified.

## 8. Landing/homepage conversion

Existing homepage has links to `/explore`, manufacturing dashboard and current sample map plus real report. Avoid replacing every CTA.

Proposal:
- Keep primary homepage commercial CTA(s) unchanged.
- Change the mid-page CTA currently **Explore a Sample AI System** -> **See HAIEC in Action** (or retain label if that fits context) and link to new `/demo/ai-system` after it is deployed.
- In hero, existing `/explore` stays a learning link; manufacturing dashboard stays as optional industry example or move its deep link to the new experience when design reviewed, not before.
- From new demo, show explicit **View Manufacturing Dashboard**, **Explore Telecom Investigation**, **Open Action Map**, and **See Sample Reports**.
- Keep old URL `/sample-ai-action-access-map`; do not redirect away the detail map or break backlinks.

## 9. Implementation model

- Prefer one new Next.js public page + focused client island components; do not iframe old 600KB manufacturing dashboard or 130KB HTML workspace into new page.
- Put new fictional Northstar sample state in a *single typed demo scenario module* and derive all UI views, totals, status changes, timeline, next-step messages, and report summary from one state machine. Import or link existing `SAMPLE_PROJECTION` wherever its data is used. No duplicate graph truth sources.
- Store simulation state in React/context and optionally URL query (`?mode=guided&step=action`). Default refresh resets scenario. Do not store personal information.
- Modules: `DemoShell`, `GuidedStepNav`, `ConnectSimulation`, `ConsequenceMap`, `FindingInspector`, `DecisionSimulator`, `ActivityReplay`, `SampleReportView`, `ScenarioSwitcher`, `DemoModeLabel`.
- A single small events array can drive 90–150s guided sequence with next/back/scrub; no timers needed for transitions beyond optional autoplay.
- SSR static introduction, scenario explanation and links for SEO; JS enhances interactive panels.
- Reuse HAIEC global header/footer and design tokens; no duplicate shell.

## 10. Implementation priority and stages

**Stage P0, asset alignment (short):** Validate /demo route slots; inventory exact current files and reusable components; verify TM Forum public guest link only if promoted. Decide whether to link to existing report rather than guest. Freeze story names (Northstar for main, Station 217 separate, TM Forum separate). No redesign.

**Stage P1, guided MVP:** Landing + six-view shell + setup + action + finding + decision + sample report; basic reset/back/skip behavior. No backend and no additional integrated products.

**Stage P2, optional polish:** Activity replay, screenshot-quality transitions, refined report tabs, helpful deep links, responsive mobile inspector, light/dark handling in accordance with current brand standard. Cross-link to existing Manufacturing and Telecom experiences.

**Stage P3, release:** One focused PR for review, native Next.js components, basic route/link/build/accessibility/mobile checks. No broad platform acceptance suite, no merge or push directly to Main. After an approved release, update the homepage CTA. Do not block on production-grade source/canonical verification.

## 11. Acceptance goals and measurement

Visitor can reach a meaningful consequential risk scene in at most two clicks and within ~15 seconds. Visitor can complete the guided tour without signup in ~90–150 seconds or skip directly to any panel. The three simulation controls (source connection, sample approval, replay) visibly change state. Report summary updates with selected scenario choices. Industry demos open distinct destinations and are not confused with Northstar data. No dead CTAs, no page-wide horizontal scrolling at 320/390/768/1440, keyboard navigable.

Instrument lightweight privacy-safe events: demo_started, step_viewed, scenario_selected, action_map_opened, decision_simulated, report_viewed, industry_deepdive_opened, demo_completed, demo_to_signup, demo_to_enterprise. Compare discovery-to-completion and CTA rates, not just clicks.

## 12. Deliverables

- New public /demo/ai-system Next.js guided demo.
- Reusable sample UI components and typed scenario data/state.
- Consistent mobile/desktop designs and keyboard interactions.
- Clear cross-links to existing Action Map, manufacturing, telecom and sample reports.
- One concise demo voiceover script (60–90 seconds) based on same step order, optional recording later.
- Focused PR with screenshots and a short manual smoke checklist.
- No changes to canonical engines, evidence qualification, approvals, control logic, or customer organizations.

**Final principle:** *One compelling story first. The full HAIEC platform and deep industry investigations remain one click away.*
