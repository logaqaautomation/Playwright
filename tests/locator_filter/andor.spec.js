import {test} from "playwright/test"

test("and and or example", async({page})=>{

    await page.goto("https://login.yahoo.com/");

    let usernameAnd = page.locator("input[name='username']").and(page.locator("input[id='login-username']"));

    await usernameAnd.fill("loganathan AND");

    await page.waitForTimeout(2000)


    let usernameOR = page.locator("input[name='username']").or(page.locator("invalid"));

    await usernameOR.fill("loganathan OR");

    await page.waitForTimeout(2000)
})