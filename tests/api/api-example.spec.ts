import { test, expect } from '@playwright/test';

test.describe('check if nrk is', () => {
  test.beforeEach(async ({ page }) => {
    // we'll see what we put here
  });

  test('ok', async ({ request }) => {
    const state = await request.get('https://www.nrk.no', {
    });
    expect(state.ok()).toBeTruthy();
    expect(state.status()).toBe(200);
  });
});