import {test} from "playwright/test"

test("get by title",async({page})=>{
    
    await page.goto("https://getbootstrap.com/docs/5.3/components/tooltips/");

    await page.getByTitle('GitHub').click();


    await page.waitForTimeout(3000);

    
})