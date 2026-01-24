import {test} from "playwright/test"

test("auto suggestions using xpath - select playwright python", async({page})=>{

 await page.goto("https://www.google.com/");
 await page.locator('textarea').first().fill('playwright');
 await page.waitForTimeout(2000)
 let allSuggestion = await page.locator('span:text("playwright")').all()
 console.log(allSuggestion.length)

 for (let each of allSuggestion)
 {
    let sugText = await each.textContent();
    if (sugText === "playwright python")
    {
        await each.click();
        console.log('playwright python clicked');
        break;
    }
 }

 await page.waitForTimeout(3000)

})