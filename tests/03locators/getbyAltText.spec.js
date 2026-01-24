import {test} from "playwright/test"

test("get by alt text",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let brandingSource = await page.getByAltText('company-branding').getAttribute('src');
    console.log (brandingSource);
    await page.waitForTimeout(3000);

    
})