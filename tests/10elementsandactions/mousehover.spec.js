import {test} from "@playwright/test";

test("mouse hover",async({page})=>{
    await page.goto("https://www.globalsqa.com/");
    
    await page.locator("(//a[text()='Free Ebooks'])[1]").hover();
    await page.waitForTimeout(2000);

    await page.locator("(//span[.='Free Machine Learning Ebooks'])[1]").click();

    await page.waitForTimeout(2000);
});



test("mouse hover twice" ,async({page})=>{
    await page.goto("https://www.globalsqa.com/");
    
    await page.locator(":nth-match(a:text('Tester’s Hub'),1)").hover();
    await page.waitForTimeout(2000);

    await page.locator(":nth-match(span:text('Demo Testing Site'),1)").hover();
    await page.waitForTimeout(2000);

    await page.locator("span:text('Tooltip')").first().click();

    await page.waitForTimeout(2000);
});