// @ts-check
import { test, expect } from '@playwright/test';


test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('example-test-1-chromium-darwin.png');
});

