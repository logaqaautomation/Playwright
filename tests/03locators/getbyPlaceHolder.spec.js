import {test} from "playwright/test"

test("get by placeholder",async({page})=>{
    await page.goto("https://demoqa.com/text-box");

    await page.getByPlaceholder('Full Name').fill("loganathan");
    await page.getByPlaceholder('name@example.com').fill("loganathan@test.com");
    await page.waitForTimeout(3000);

    
})