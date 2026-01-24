import {test} from "playwright/test"

test("get by Text",async({page})=>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill("Admin");

    await page.getByPlaceholder('Password').fill("admin123");

    //using get by text
    await page.getByText('Login').first().click();

    await page.waitForTimeout(3000);

    
})