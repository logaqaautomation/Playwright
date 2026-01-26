import {test} from "@playwright/test";

test("example for is visiblem hidden enabled ...etc",async({page})=>{
    test.slow();

    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");

    console.log(await page.locator('input#myCheckbox').isVisible());
    console.log(await page.locator('input#myCheckbox').isHidden());
    console.log(await page.locator('input#myCheckbox').isEnabled());
    

    console.log(await page.locator('input#chk3').isDisabled());

    console.log(await page.locator('input#myCheckbox').isChecked());
    await page.locator('input#myCheckbox').check();
    console.log(await page.locator('input#myCheckbox').isChecked());


})