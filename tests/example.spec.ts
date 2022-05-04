import { test, expect, Page } from '@playwright/test';

const siteurl = 'https://dev-tira-nextpress-testing.pantheonsite.io/';

test.beforeEach(async ({ page }) => {
  await page.goto(siteurl);
});

test.describe('Test 1', () => {
  test('Test A', async ({ request }) => {
    const response = await request.get(siteurl);

    await expect(response).toBeOK();


  });

});

