import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4177', { waitUntil: 'networkidle' });
await page.getByRole('tab', { name: 'Frontend Developer' }).click();
await page.waitForTimeout(1000);

const activeTab = await page.locator('.tab--active');
const color = await activeTab.evaluate(el => getComputedStyle(el).color);
const bg = await activeTab.evaluate(el => getComputedStyle(el).backgroundColor);
console.log('active tab color:', color);
console.log('active tab background:', bg);
await activeTab.screenshot({ path: '/tmp/active-tab.png' });
await browser.close();
