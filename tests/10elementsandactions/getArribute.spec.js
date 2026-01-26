import {test} from "@playwright/test";

test("get Attribute",async({page})=>{
    test.slow();

    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");

    console.log(await page.locator('input#myCheckbox').getAttribute('type'));
   

    await page.goto("https://www.globalsqa.com/samplepagetest/#google_vignette");
    


})