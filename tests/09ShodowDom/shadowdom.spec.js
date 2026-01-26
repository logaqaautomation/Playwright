import {test} from "playwright/test"

test("shadow dom example", async({page})=>{

    await page.goto("https://practice.expandtesting.com/shadowdom");


    //using css we can access the element inside the shadowdom
    console.log(await page.locator("button[type='button']").last().textContent());

    //using get by Role we can access the element inside the shadowdom
    console.log(await page.getByRole('button',{name:'This button is inside a Shadow DOM.'}).textContent());

    //we cannot use xpath for accessing elements inside shadow dom

    //also, only open shadow root elements can be accessed by any tool - if it is closed, talk to developer.

    //salesforce lightning has lot of shadow doms

})

test("element inside the shadow root",async({page})=>{
    await page.goto("https://shop.polymer-project.org/");
    await page.locator("a[href*='mens_outerwear']").first().click();
    await page.waitForTimeout(2000);
});