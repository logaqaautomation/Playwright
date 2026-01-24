import {test} from "playwright/test"

test("print all links of google", async({page})=>{
    await page.goto("https://www.google.com/");

    let allLinks = await page.locator("a").all();
    let allLinksCount = await page.locator("a").count();

    for (let link of allLinks){
        console.log( await link.textContent());
    }
    console.log("---------------")
    for (let i=0;i<allLinksCount;i++)
    {
        console.log( await allLinks[i].textContent());
    }

    console.log("---------------")
    let allLinksTextContent = await page.locator("a").allTextContents();
    console.log(allLinksTextContent)
})