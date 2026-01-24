import {test} from "playwright/test"

test("navigation", async ({page})=>{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
})