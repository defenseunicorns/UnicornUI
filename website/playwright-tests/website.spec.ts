import { test, expect, Page, Locator } from '@playwright/test';

const testLink = async (linkLocator: Locator, page: Page): Promise<void> => {
  const linkUrl = await linkLocator.getAttribute('href');
  if (linkUrl!.includes('https://')) return;
  const pageNav = page.waitForNavigation({ url: `**${linkUrl}` });
  linkLocator.click();
  await pageNav;
  expect(page.url()).toContain(linkUrl);
};

const resetToHome = async (page: Page) => {
  const pageNav = page.waitForNavigation({ url: `**/` });
  page.getByText(/home/i).click();
  await pageNav;
};

test.describe('unicorn ui website e2e tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4173');
  });

  test('load home page', async ({ page }) => {
    expect(page.url()).toEqual('http://localhost:4173/');
    expect(page.getByText('Unicorn UI')).toBeTruthy();
    expect(page.getByText('Installation')).toBeTruthy();
    expect(page.getByText(/github/i)).toBeTruthy();
  });

  test('test links', async ({ page }) => {
    for (const link of await page.getByRole('link').all()) {
      await testLink(link, page);
      await resetToHome(page);
    }
  });
});
