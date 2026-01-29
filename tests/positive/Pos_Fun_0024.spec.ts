import { test, expect } from '@playwright/test';

test('translate singlish to sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  
  await page.locator('textarea').fill('machan mata adha meeting ekee Zoom link eka email ekak widihata evanna puluvandha? Please send it before 3pm. Mana office yana kalin chek karanna oone. WhatsApp message ekak dhaapan. Thanks!');

  // Wait for real-time translation
  await page.waitForTimeout(2000);

  // Get translated output (same textarea updates)
  const output = await page.locator('textarea').inputValue();

});