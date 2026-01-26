import {test} from "playwright/test"

test("Scroll to view", async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/form.php");


    await page.waitForTimeout(2000);
    await page.getByRole('button',{name:'Submit'}).scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);




})