const INTERFACES = {
  rest: {
    heading:'Make assurance part of delivery.',
    lead:'Start an evidence-bound run from your application or CI workflow, then retrieve the exact persisted evaluation, Agent Audit, Master Report and passport.',
    link:'/docs/github-integration', linkLabel:'Read connected GitHub guide',
    file:'assurance-run.sh', foot:'Bearer auth · scope scan:create',
    steps:[
      {title:'Identify',detail:'Select your organization-bound AI System and a verified, system-bound source asset. Discovery endpoints help you confirm eligibility.'},
      {title:'Authorize',detail:'Use an API key with scan:create and a new Idempotency-Key for the intended run. Keep credentials in server-side secrets.'},
      {title:'Evaluate',detail:'POST the run, then poll its runId until the evaluation identity becomes available. HAIEC uses the canonical assurance services.'},
      {title:'Retrieve',detail:'Read the evaluation summary, Agent Audit, Master Report and passport for the exact persisted evaluation.'}
    ],
    code: {
      curl:`# Example: use a fresh UUID for each intended run\ncurl -X POST 'https://www.haiec.com/api/v1/assurance/runs' \\\n  -H "Authorization: Bearer $HAIEC_API_KEY" \\\n  -H 'Content-Type: application/json' \\\n  -H "Idempotency-Key: $NEW_RUN_UUID" \\\n  --data '{\n    "aiSystemId": "YOUR_AI_SYSTEM_ID",\n    "engines": {\n      "static": {\n        "enabled": true,\n        "executionMode": "api",\n        "sourceAssetId": "YOUR_VERIFIED_SOURCE_ID"\n      }\n    }\n  }'`,
      ts:`// TypeScript / Node 18+\nconst result = await fetch(\n  'https://www.haiec.com/api/v1/assurance/runs',\n  {\n    method: 'POST',\n    headers: {\n      Authorization: \`Bearer \${process.env.HAIEC_API_KEY}\`,\n      'Content-Type': 'application/json',\n      'Idempotency-Key': crypto.randomUUID()\n    },\n    body: JSON.stringify({\n      aiSystemId: process.env.HAIEC_AI_SYSTEM_ID,\n      engines: { static: {\n        enabled: true,\n        executionMode: 'api',\n        sourceAssetId: process.env.HAIEC_SOURCE_ASSET_ID\n      }}\n    })\n  }\n);\nconst run = await result.json();`,
      python:`# Python 3 · requires requests\nimport os, uuid, requests\n\nurl = 'https://www.haiec.com/api/v1/assurance/runs'\nheaders = {\n  'Authorization': f"Bearer {os.environ['HAIEC_API_KEY']}",\n  'Idempotency-Key': str(uuid.uuid4())\n}\nbody = {\n  'aiSystemId': os.environ['HAIEC_AI_SYSTEM_ID'],\n  'engines': {'static': {\n    'enabled': True, 'executionMode': 'api',\n    'sourceAssetId': os.environ['HAIEC_SOURCE_ASSET_ID']\n  }}\n}\nr = requests.post(url, headers=headers, json=body)\nr.raise_for_status()\nrun = r.json()`
    }
  },
  intake: {
    heading:'Bring operational evidence into view.',
    lead:'Discover an approved evidence destination, submit supported structured records, logs or OpenTelemetry data, then attach the receipt to a new evaluation.',
    link:'/openapi/assurance-v1.yaml',linkLabel:'Review evidence intake contract',
    file:'evidence-binders.sh', foot:'Binder discovery · scope source:read',
    steps:[
      {title:'Discover',detail:'GET available environment binders for your organization. A configured binder identifies where qualified evidence can be received.'},
      {title:'Submit',detail:'Use the evidence:ingest scope and a configured binder to upload supported events, raw logs, or OTLP data through the appropriate intake route.'},
      {title:'Receipt',detail:'The intake response records a producerRunId. This confirms ingestion, not that assurance findings or gaps have changed.'},
      {title:'Evaluate',detail:'Attach the ingestion receipt to a NEW assurance run using producerId structured-ingress, then compare persisted evaluations.'}
    ],
    code: {
      curl:`# Step 1: discover your eligible intake destinations\ncurl -X GET \\\n  'https://www.haiec.com/api/v1/evidence/binders' \\\n  -H "Authorization: Bearer $HAIEC_API_KEY"\n\n# Next: choose a configured binder and route.\n# POST /api/ingest/structured  · JSON / JSONL / CSV\n# POST /api/ingest/log         · raw log lines\n# POST /api/otlp/v1/traces    · OTLP traces\n# POST /api/otlp/v1/metrics   · OTLP metrics\n# POST /api/otlp/v1/logs      · OTLP logs\n\n# Intake receipt != completed Assurance Evaluation.`,
      ts:`// TypeScript / Node 18+\n// Discover binders before uploading evidence.\nconst response = await fetch(\n  'https://www.haiec.com/api/v1/evidence/binders',\n  { headers: {\n      Authorization: \`Bearer \${process.env.HAIEC_API_KEY}\`\n  }}\n);\nif (!response.ok) throw new Error('Binder discovery failed');\nconst binders = await response.json();\n\n// Select a configured environment binder first.\n// Evidence uploads require evidence:ingest scope.\n// A new Assurance Run evaluates attached receipts.`,
      python:`# Python 3 · requires requests\nimport os, requests\n\nr = requests.get(\n  'https://www.haiec.com/api/v1/evidence/binders',\n  headers={\n    'Authorization': f"Bearer {os.environ['HAIEC_API_KEY']}"\n  }\n)\nr.raise_for_status()\nbinders = r.json()\n\n# Choose the configured destination from the response.\n# Ingestion requires an evidence:ingest-scoped key.\n# Link the receipt to a NEW Assurance Run for evaluation.`
    }
  },
  mcp: {
    heading:'Let the agent coordinate the work.',
    lead:'An MCP-capable assistant can discover HAIEC tools, guide scoped preparation, request approval for supported writes and retrieve the same canonical reports.',
    link:'/docs/agent-integration',linkLabel:'Read agent integration guide',
    file:'.cursor/mcp.json',foot:'MCP Streamable HTTP · Bearer API key',
    steps:[
      {title:'Connect',detail:'Configure https://www.haiec.com/api/mcp in a supported MCP client and supply a scoped HAIEC API key through its secret storage.'},
      {title:'Preflight',detail:'Start with haiec_preflight when setup is unclear. The agent checks the available AI System, source and exact scopes.'},
      {title:'Approve',detail:'Before any supported write or runtime test, the agent describes the consequential action and obtains your approval.'},
      {title:'Explain',detail:'The agent retrieves exact HAIEC outputs, including the summary, Agent Audit, Master Report and unresolved verification items.'}
    ],
    code: {
      curl:`// Cursor: .cursor/mcp.json\n// Store HAIEC_API_KEY in the client's secret environment.\n{\n  "mcpServers": {\n    "haiec": {\n      "url": "https://www.haiec.com/api/mcp",\n      "headers": {\n        "Authorization": "Bearer \${env:HAIEC_API_KEY}"\n      }\n    }\n  }\n}\n\n// After connecting, ask your agent:\n// "Run HAIEC AI Assurance"`,
      ts:`# MCP interface for clients with generic HTTP transport\nURL = https://www.haiec.com/api/mcp\nTRANSPORT = Streamable HTTP\nAUTH = Authorization: Bearer <HAIEC_API_KEY>\n\n# First, verify the client's MCP HTTP + header\n# configuration against its current instructions.\n\n# Typical tool sequence:\nhaiec_preflight\nhaiec_list_systems\nhaiec_list_sources\nhaiec_run_assurance   # after authorization\nhaiec_get_agent_audit\nhaiec_get_master_report\n\n# Exact tool list: /.well-known/haiec-capabilities.json`,
      python:`# Prompt to use in a connected MCP-capable agent\n"Run HAIEC AI Assurance"\n\n# Expected conversation flow:\n# 1. Discover setup and scopes (read-only preflight).\n# 2. Select the AI System and verified source.\n# 3. Ask permission for an authorized evaluation.\n# 4. Trigger HAIEC's deterministic Assurance engine.\n# 5. Return an exact summary, Agent Audit, and links.\n\n# Your agent coordinates the workflow.\n# HAIEC issues the evaluation and evidence results.`
    }
  }
};

const ENDPOINTS = [
  ['POST','/api/v1/assurance/runs','Start a new asynchronous assurance run','scan:create','runs','Organization-bound AI System and verified source; supports idempotent retries.'],
  ['GET','/api/v1/assurance/runs','List assurance runs','scan:read','runs','Paginated inventory of runs visible to the API key.'],
  ['GET','/api/v1/assurance/runs/{runId}','Poll run status and evaluation identity','scan:read','runs','Returns run status, stage and resulting evaluation identity when available.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/summary','Read the exact evaluation summary','report:read','reports','Compact disposition, sections and evidence-qualified conclusion.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/agent-audit','Retrieve deterministic Agent Audit','report:read','reports','What was established, what remains open and which evidence is needed next.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/master-report','Get the canonical Master Assurance Report','report:read','reports','Bounded by default; detail=full for the complete projection.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/master-report/pdf','Get canonical Master Report PDF','report:read','reports','PDF presentation of the same persisted Master Assurance Report product.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/report','Get Assurance Evidence bundle','report:read','reports','Secondary evidence artifact retained for backwards compatibility.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/report/pdf','Get Assurance Evidence PDF','report:read','reports','Profile-based executive, technical or auditor PDF representation.'],
  ['GET','/api/v1/assurance/evaluations/{evaluationId}/passport','Get the evaluation passport','report:read','reports','Portable, machine-readable record bound to one persisted evaluation.'],
  ['GET','/api/v1/systems','Discover AI Systems','system:read','discovery','Lists systems within the organization associated with the API key.'],
  ['GET','/api/v1/systems/{systemId}/evaluation-sources','List eligible evaluation sources','source:read','discovery','Preflight for verified and system-bound Source Assets.'],
  ['POST','/api/v1/scans','Submit a qualified local or CI scan','scan:submit','runs','Admits a bounded, already-generated Evidence Bundle. Does not initiate a second analyzer.'],
  ['GET','/api/v1/scans/{scanId}','Inspect a qualified scan record','scan:read','runs','Returns provenance and attachable source identity for the existing scan.'],
  ['GET','/api/v1/evidence/binders','Discover approved evidence destinations','source:read','discovery','Lists configured environment binders for canonical Evidence Intake.'],
  ['POST','/api/ingest/structured','Submit structured evidence events','evidence:ingest','intake','Accepts supported structured payloads through a configured environment binder.'],
  ['POST','/api/ingest/log','Submit raw log lines','evidence:ingest','intake','Raw log ingestion through the supported evidence intake route.'],
  ['POST','/api/otlp/v1/traces','Ingest OTLP traces','evidence:ingest','intake','OpenTelemetry traces provided through configured HAIEC evidence binding.'],
  ['POST','/api/otlp/v1/metrics','Ingest OTLP metrics','evidence:ingest','intake','OpenTelemetry metrics provided through configured HAIEC evidence binding.'],
  ['POST','/api/otlp/v1/logs','Ingest OTLP logs','evidence:ingest','intake','OpenTelemetry logs provided through configured HAIEC evidence binding.']
].map(([method,path,desc,scope,group,detail])=>({method,path,desc,scope,group,detail}));

let activeSurface = 'rest', activeLanguage='curl', activeStep=0, activeFilter='all', searchTerm='', expandedEndpoint = null;
const $ = (q)=>document.querySelector(q); const $$=(q)=>[...document.querySelectorAll(q)];
const escapeHTML=(s)=>String(s).replace(/[&<>\"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function syntaxHighlight(text){return escapeHTML(text).replace(/(^|\n)(#[^\n]*|\/\/[^\n]*)/g,'$1<span class="code-comment">$2</span>');}
function showSurface(name,focusTab=false){activeSurface=name;activeStep=0;const model=INTERFACES[name];$('#workbench-panel').setAttribute('aria-labelledby','tab-'+name);$$('.choice').forEach(x=>{const yes=x.dataset.interface===name;x.classList.toggle('active',yes);x.setAttribute('aria-pressed',String(yes));});$$('[role="tab"][data-tab]').forEach(x=>{const yes=x.dataset.tab===name;x.classList.toggle('tab-active',yes);x.setAttribute('aria-selected',String(yes));x.tabIndex=yes?0:-1;});$('#interfaceContent').innerHTML=`<div class="inline-eyebrow">${name==='rest'?'REST INTEGRATION':name==='intake'?'EVIDENCE INTEGRATION':'AGENT INTEGRATION'}</div><h3>${escapeHTML(model.heading)}</h3><p>${escapeHTML(model.lead)}</p>`;$('#guideLink').href=model.link;$('#guideLink').innerHTML=escapeHTML(model.linkLabel)+' <span aria-hidden="true">↗</span>';$$('.lang').forEach(el=>{el.textContent=name==='mcp'?{curl:'Cursor',ts:'Transport',python:'Agent prompt'}[el.dataset.lang]:{curl:'cURL',ts:'TypeScript',python:'Python'}[el.dataset.lang];});activeLanguage='curl';renderSteps();renderCode();if(focusTab){$(`[data-tab="${name}"]`).focus()}};
function renderSteps(){const m=INTERFACES[activeSurface];$('#flowSteps').innerHTML=m.steps.map((step,i)=>`<button type="button" class="step-button ${i===activeStep?'current':''}" aria-label="Step ${i+1}: ${escapeHTML(step.title)}" aria-pressed="${i===activeStep}" data-step="${i}"><span>${String(i+1).padStart(2,'0')}</span> ${escapeHTML(step.title)}</button>`).join('');const step=m.steps[activeStep];$('#stepDetail').innerHTML=`<strong>${String(activeStep+1).padStart(2,'0')} / ${escapeHTML(step.title)}</strong><p>${escapeHTML(step.detail)}</p>`;$$('[data-step]').forEach(btn=>btn.addEventListener('click',()=>{activeStep=Number(btn.dataset.step);renderSteps()}));}
function renderCode(){const m=INTERFACES[activeSurface];let code=m.code[activeLanguage];code=code.replaceAll('\`','`').replaceAll('\${','${');$('#codeBlock').innerHTML=syntaxHighlight(code);$('#codeFilename').textContent=activeSurface==='mcp'?{curl:'.cursor/mcp.json',ts:'connection-overview.txt',python:'suggested-prompt.txt'}[activeLanguage]:activeLanguage==='curl'?m.file:activeLanguage==='ts'?'integration.ts':'integration.py';$('#codeFooterText').textContent=m.foot;$$('.lang').forEach(el=>{const yes=el.dataset.lang===activeLanguage;el.classList.toggle('active',yes);el.setAttribute('aria-pressed',String(yes));});$('#copyCode').querySelector('span').textContent='Copy';}

async function copyText(text,button,label){try{await navigator.clipboard.writeText(text);if(button)button.textContent='Copied ✓';setTimeout(()=>{if(button)button.textContent=label},1600)}catch(e){const textarea=document.createElement('textarea');textarea.value=text;textarea.style.position='fixed';textarea.style.left='-9999px';document.body.appendChild(textarea);textarea.select();try{document.execCommand('copy');if(button)button.textContent='Copied ✓'}catch(_) {if(button)button.textContent='Select to copy'}textarea.remove();setTimeout(()=>{if(button)button.textContent=label},1600)}}
$$('.choice').forEach(btn=>btn.addEventListener('click',()=>{showSurface(btn.dataset.interface);$('#workbench').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}));
$$('[role="tab"][data-tab]').forEach(btn=>{btn.addEventListener('click',()=>showSurface(btn.dataset.tab));btn.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const tabs=['rest','intake','mcp'];const idx=tabs.indexOf(activeSurface);showSurface(tabs[(idx+(e.key==='ArrowRight'?1:2))%3],true)}})});
$$('.lang').forEach(btn=>btn.addEventListener('click',()=>{activeLanguage=btn.dataset.lang;renderCode()}));
$('#copyCode').addEventListener('click',()=>copyText(INTERFACES[activeSurface].code[activeLanguage].replaceAll('\`','`').replaceAll('\${','${'),$('#copyCode').querySelector('span'),'Copy'));
$('#copyPrompt').addEventListener('click',()=>copyText('Run HAIEC AI Assurance',$('#copyPrompt'),'Copy ↗'));

function renderEndpointList(){const filtered=ENDPOINTS.map((e,index)=>({...e,index})).filter(e=>(activeFilter==='all'||e.group===activeFilter)&&`${e.method} ${e.path} ${e.desc} ${e.scope} ${e.detail}`.toLowerCase().includes(searchTerm));const holder=$('#endpointList');holder.innerHTML=filtered.map(e=>`<div class="endpoint-entry"><button type="button" class="endpoint-row" aria-expanded="${expandedEndpoint===e.index}" aria-controls="endpoint-detail-${e.index}" data-ep="${e.index}"><span class="endpoint-path"><span class="verb verb-${e.method.toLowerCase()}">${e.method}</span>${escapeHTML(e.path)}</span><span class="endpoint-desc">${escapeHTML(e.desc)}</span><span class="scope">${escapeHTML(e.scope)}</span><span class="endpoint-arrow" aria-hidden="true">${expandedEndpoint===e.index?'−':'+'}</span></button><div class="endpoint-detail" id="endpoint-detail-${e.index}" ${expandedEndpoint===e.index?'':'hidden'}><p>${escapeHTML(e.detail)} <strong>Authorization:</strong> ${escapeHTML(e.scope)}.</p><a href="/openapi/assurance-v1.yaml" target="_blank" rel="noopener">View versioned documentation ↗</a></div></div>`).join('');$('#endpointCount').textContent=`${filtered.length} of ${ENDPOINTS.length} operations`;$('#endpointEmpty').hidden=filtered.length!==0;holder.querySelectorAll('[data-ep]').forEach(btn=>btn.addEventListener('click',()=>{const idx=Number(btn.dataset.ep);expandedEndpoint=expandedEndpoint===idx?null:idx;renderEndpointList();const b=holder.querySelector(`[data-ep="${idx}"]`);b?.focus({preventScroll:true});}));}
$$('.ref-filter').forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;expandedEndpoint=null;$$('.ref-filter').forEach(x=>{let on=x===btn;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on))});renderEndpointList()}));
$('#endpointSearch').addEventListener('input',event=>{searchTerm=event.target.value.trim().toLowerCase();expandedEndpoint=null;renderEndpointList()});
$('#mobileMenu').addEventListener('click',()=>{const button=$('#mobileMenu'),menu=$('#mobileNav'),open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));menu.hidden=!open;});
showSurface('rest');renderEndpointList();
