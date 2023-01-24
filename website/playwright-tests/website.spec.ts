import { test, expect, Page, Locator } from '@playwright/test';

test.describe('unicorn ui website e2e tests', () => {
  test.beforeEach(async ({ page }) => {
    page.on('pageerror', (err) => console.log(err.message));
    await page.goto('http://localhost:4173');
  });

  test('load home page', async ({ page }) => {
    expect(page.url()).toEqual('http://localhost:4173/');
    await expect(page.getByText('Unicorn UI')).toBeVisible();
    await expect(page.getByText('Installation')).toBeVisible();
    await expect(page.getByText(/github/i)).toBeVisible();
  });

  test('test links for proper navigation and uui component rendering (catching non-relative imports)', async ({
    context,
    page
  }) => {
    for (const link of await page.getByRole('link').all()) {
      const pageForLink = await context.newPage();
      await pageForLink.goto('http://localhost:4173');
      if (!(await link.innerText()).includes('GITHUB')) {
        const linkLocator = pageForLink.getByRole('link', {
          name: new RegExp(`^${await link.innerText()}`, 'i')
        });
        await testLinkNav(linkLocator, pageForLink);
        await testAccordions(pageForLink);
      }
    }
  });
});

async function testLinkNav(linkLocator: Locator, page: Page) {
  const linkUrl = await linkLocator.getAttribute('href');
  await linkLocator.click();
  await page.waitForURL(`**${linkUrl}`);
  expect(page.url()).toContain(linkUrl);
  expect(await page.getByRole('heading').allInnerTexts()).not.toContain('500');
}

async function testAccordions(page: Page) {
  const accordions = await page.locator('.accordion').all();
  if (accordions.length > 0) {
    for (const acc of accordions) {
      await acc.locator('.icon-button').click();
      expect(await acc.locator('.accordion-content').innerHTML()).toBeDefined();
      expect(await acc.locator('.accordion-content').innerText()).not.toContain('internal error');
    }
  }
}
