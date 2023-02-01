import { test, expect } from '@playwright/test';
import fs from 'fs';

const LOAD_SUCCESS = 'Page loaded successfully';
const LOAD_FAILURE = 'Page failed to load.';

test.describe('Routes build and render.', () => {
  let routes: string[] = [];

  test.beforeAll(() => {
    routes = [...routes, ...getRoutesList()];
  });

  test('Routes render without error.', async ({ page }) => {
    let loaded = LOAD_SUCCESS;
    for (const route of routes) {
      page.on('pageerror', (err) => {
        console.error(`Failed to load ${route}: ${err.message}`);
        loaded = LOAD_FAILURE;
      });
      await page.goto(`/${route}`);

      expect(loaded).toBe(LOAD_SUCCESS);
    }
  });
});

function getRoutesList(): string[] {
  const routes = fs
    .readdirSync('./src/routes', { withFileTypes: true })
    .filter((i) => i.isDirectory())
    .map((i) => i.name);

  // add home route
  routes.unshift('');

  return routes;
}
