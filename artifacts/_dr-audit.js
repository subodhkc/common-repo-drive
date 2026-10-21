// Batch audit: screenshot each design-reference prototype in dark + light.
const { chromium } = require('playwright-core');
const path = require('path');
const EXE = 'C:/Users/Subodh Kc/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const ROOT = 'C:/Users/Subodh Kc/Desktop/App Building/Github/common-repo-drive/haiec-product-capability-architecture/design-references';
const OUT = 'C:/Users/Subodh Kc/Desktop/App Building/Github/common-repo-drive/artifacts';

const files = [
  'assurance-controls-2026-10-20/assurance-controls-and-evidence-dual-theme-interactive.html',
  'controls-2026-10-20/controls-proof-light-dark-editorial-preview.html',
  'dai-2026-10-20/delegated-action-integrity-dai-light-dark-interactive.html',
  'developers-2026-10-20/developers-ide-to-deterministic-assurance-interactive.html',
  'enterprise-2026-10-20/enterprise-dual-theme-decision-story-preview.html',
  'homepage-2026-10-20/homepage-light-first-first-findings-enterprise-editorial-preview.html',
  'homepage-2026-10-20/homepage-v2-hero-dai-mcp-playback-interactive-design.html',
  'how-ai-systems-work-2026-10-20/llm-vs-agent-visibility-consequences-interactive.html',
  'how-it-works-2026-10-20/how-it-works-consequence-to-decision-interactive.html',
  'isaf-v2-2026-10-20/isaf-v2-framework-light-dark-interactive.html',
  'methodology-2026-10-20/methodology-deterministic-proof-light-dark-preview.html',
  'platform-products-2026-10-20/platform-products-light-dark-editorial-preview.html',
  'pricing-2026-10-20/pricing-enterprise-first-dual-theme-preservation-preview.html',
];

(async () => {
  const browser = await chromium.launch({ executablePath: EXE });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  for (const f of files) {
    const name = path.basename(f, '.html').slice(0, 40);
    const url = 'file:///' + path.join(ROOT, f).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${OUT}/_dr-${name}-dark.png` });
    // toggle to light
    await page.evaluate(() => {
      const b = document.getElementById('theme') || document.getElementById('theme-toggle');
      b?.click();
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/_dr-${name}-light.png` });
    // also capture a mid-page scroll in dark to audit below-fold contrast
    await page.evaluate(() => {
      const b = document.getElementById('theme') || document.getElementById('theme-toggle');
      b?.click(); // back to dark
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/_dr-${name}-dark-mid.png` });
    console.log('captured', name);
  }
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e.message); process.exit(1); });
