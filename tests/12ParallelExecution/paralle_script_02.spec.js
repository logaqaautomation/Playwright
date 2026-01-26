import {test} from "@playwright/test";

test("s2",async({page})=>{

    let url = "https://logaqaautomation.github.io/playwright-practice-app/index.html"
    await page.goto(url);
    console.log(await page.title());
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Enter email").fill("logan@test.com");
    await page.getByText("Password").fill("test");
    await page.waitForTimeout(3000);
    await page.locator("button#loginBtn").click();

    await page.waitForTimeout(3000);
});


test("s3",async({page})=>{

    let url = "https://logaqaautomation.github.io/playwright-practice-app/index.html"
    await page.goto(url);
    console.log(await page.title());
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Enter email").fill("logan@test.com");
    await page.getByText("Password").fill("test");
    await page.waitForTimeout(3000);
    await page.locator("button#loginBtn").click();

    await page.waitForTimeout(3000);
});