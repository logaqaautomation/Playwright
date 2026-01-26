import {test} from "@playwright/test";

test("scroll to the bottom",async({page})=>{

    await page.goto("https://playwright.dev/");

    await page.waitForTimeout(1000);

    await page.evaluate("window.scrollBy(0,document.body.scrollHeight)");
  
    await page.waitForTimeout(1000);

    await page.evaluate("window.scrollBy(0,-document.body.scrollHeight)");

    await page.waitForTimeout(2000);
});
