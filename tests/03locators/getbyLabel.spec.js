import {test} from "playwright/test"

test("get by label",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.getByLabel('Username').fill('Loganathan');
    await page.getByLabel('password').fill('logan@test.com');
    
    await page.waitForTimeout(3000);

    
})  