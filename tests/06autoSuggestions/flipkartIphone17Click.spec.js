import {test} from "playwright/test"

test("auto suggestions using xpath - select flipkart iphone 17", async({page})=>{

 await page.goto("https://www.flipkart.com/");
 //await page.getByPlaceholder('Search for Products, Brands and More').fill('iPhone');
 await page.locator("input[name='q']").fill('iphone')
 await page.waitForTimeout(4000)

 // use comman shift p in the browser
 // type focus
 // emulate a focused page
 // then type and use inspect cursor to inspect
 let allSuggestion = await page.locator("//span[text()='iphone']/..").all();

 for (let each of allSuggestion)
 {
    console.log( await each.textContent())
 }
 //console.log(await page.locator("//span[contains(text(),'iphone')]/..").allTextContents());
let allSuggestionCount = await page.locator("//span[text()='iphone']").count();
 console.log(allSuggestionCount)

 for (let each of allSuggestion)
 {
    let sugText = await each.textContent();
    if (sugText === "iphone 17 pro")
    {
        await each.click();
        console.log('iphone 17 pro clicked');
        break;
    }
 }

 await page.waitForTimeout(3000)

})