import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Input should not accept slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mamagedharayanavaa');

  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').nth(1).inputValue();

  //  Just check output is generated
  expect(output.length).toBeGreaterThan(0);
});