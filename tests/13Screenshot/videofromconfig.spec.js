import {test} from "@playwright/test";
/*
use: {
    screenshot:"on",
    video:"on",
*/
test("record video",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(2000);
    await page.locator("button.orangehrm-login-button").click();
    await page.waitForTimeout(1000);
});