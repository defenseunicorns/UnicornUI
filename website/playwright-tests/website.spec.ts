import { test, expect } from '@playwright/test';

test.describe('unicorn ui website e2e tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4173');
  });

  test('load home page', async ({ page }) => {
    expect(page.url()).toEqual('http://localhost:4173/');
    expect(page.getByText('Unicorn UI')).toBeTruthy();
    expect(page.getByText('Installation')).toBeTruthy();
  });

  test('nav to /theme', async ({ page }) => {
    const pageNav = page.waitForNavigation({ url: '**/theme' });
    page.getByText(/^theme$/i).click();
    await pageNav;
    expect(page.url()).toContain('/theme');
  });
});
