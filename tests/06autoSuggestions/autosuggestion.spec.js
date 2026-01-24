import {test} from "playwright/test"

test("auto suggestions using xpath", async({page})=>{

 await page.goto("https://www.google.com/");
 await page.locator('textarea').first().fill('playwright');
 await page.waitForTimeout(2000)
 //await page.locator("input[value='Google Search']").click();
 let xp = "//span[contains(text(),'playwright')]"
 let allAutoSuggestions = await page.locator(xp).all();
 console.log (allAutoSuggestions.length);
 console.log(await page.locator(xp).allTextContents());
})

test("auto suggestions using css", async({page})=>{

 await page.goto("https://www.google.com/");
 await page.locator('textarea').first().fill('playwright');
 await page.waitForTimeout(2000)
 //await page.locator("input[value='Google Search']").click();
 let css = "span:text('playwright')" //this is playwright css
 let allAutoSuggestions = await page.locator(css).all();
 console.log (allAutoSuggestions.length);
 console.log(await page.locator(css).allTextContents());
})


test("auto suggestions using filter", async({page})=>{

 await page.goto("https://www.google.com/");
 await page.locator('textarea').first().fill('playwright');
 await page.waitForTimeout(2000)
 //await page.locator("input[value='Google Search']").click();
 let allAutoSuggestions = await page.locator('span').filter({hasText:'playwright'}).all();
 console.log (allAutoSuggestions.length);
 console.log(await page.locator('span').filter({hasText:'playwright'}).allTextContents());
})