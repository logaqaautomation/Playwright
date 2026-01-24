import {test} from "playwright/test"

test('filter form field container', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  const field = page.locator('.col-md-4')
    .filter({ has: page.locator('#firstName') });

    //.filter({hasText:})
    //.filter({hasNotText:})
    //.filter({hasNot: page.locator('input)})

  await field.locator('input').fill('Loganathan');

  await page.waitForTimeout(3000)
});