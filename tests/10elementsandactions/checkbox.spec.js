import {test} from "playwright/test"

test("actions on textbox", async({page})=>{

    await page.goto('https://testing.qaautomationlabs.com/checkbox.php');

    //check when it is unchecked
    await page.locator('input#myCheckbox').click();
    await page.waitForTimeout(2000);

    //Uncheck when it is checked
    await page.locator('input#myCheckbox').click();
    await page.waitForTimeout(2000);

    //check if it is unchecked / checked
    await page.locator('input#myCheckbox').check();
    await page.waitForTimeout(2000);

    //Uncheck if it is checked / checked
    await page.locator('input#myCheckbox').uncheck();
    await page.waitForTimeout(2000);


})