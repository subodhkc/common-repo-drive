// Batch audit round 2: the six newly added prototypes, dark + light.
const { chromium } = require('playwright-core');
const path = require('path');
const EXE = 'C:/Users/Subodh Kc/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const ROOT = 'C:/Users/Subodh Kc/Desktop/App Building/Github/common-repo-drive/haiec-product-capability-architecture/design-references';
const OUT = 'C:/Users/Subodh Kc/Desktop/App Building/Github/common-repo-drive/artifacts';

const files = [
  'ai-security-2026-10-20/ai-security-agent-action-risk-light-dark-interactive.html',
  'core-capabilities-2026-10-20/six-independent-capabilities-interactive.html',
  'github-integration-2026-10-20/github-app-to-verified-source-assurance-interactive.html',
  'manufacturing-2026-10-20/manufacturing-assurance-station217-interactive.html',
  'solutions-2026-10-20/enterprise-solutions-outcome-led-interactive.html',
  'telecom-2026-10-20/telecom-action-integrity-ontology-tmforum-interactive.html',
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
    const theme = await page.evaluate(() => document.documentElement.dataset.theme);
    await page.screenshot({ path: `${OUT}/_dr2-${name}-dark.png` });
    await page.evaluate(() => {
      const b = document.getElementById('theme') || document.getElementById('theme-toggle') || document.getElementById('themeToggle');
      b?.click();
    });
    await page.waitForTimeout(500);
    const lightTheme = await page.evaluate(() => document.documentElement.dataset.theme);
    await page.screenshot({ path: `${OUT}/_dr2-${name}-light.png` });
    await page.evaluate(() => {
      const b = document.getElementById('theme') || document.getElementById('theme-toggle') || document.getElementById('themeToggle');
      b?.click();
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/_dr2-${name}-dark-mid.png` });
    console.log(name, '| initial:', theme, '| after-toggle:', lightTheme);
  }
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e.message); process.exit(1); });
