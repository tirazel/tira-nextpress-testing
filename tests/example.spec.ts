import { test, expect, Page } from '@playwright/test';

const siteurl = 'https://dev-tira-nextpress-testing.pantheonsite.io/';

test.beforeEach(async ({ page }) => {
  await page.goto(siteurl);
});

test.describe('Test 1', () => {
  test('Test A', async ({ page }) => {
    // Create 1st todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);

    // Make sure the list only has one todo item.
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[0]
    ]);

    const response = await request.get(siteurl, {});

    await expect(response).toBeOK();


  });

});

