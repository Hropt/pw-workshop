import { test, expect } from '@playwright/test';

test.describe('go to login', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://www.saucedemo.com/');
  });

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});