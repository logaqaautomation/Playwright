import {test} from "playwright/test"

test("keyboard down and up", async({page})=>{

    await page.goto("https://www.google.com/");

    await page.keyboard.down('Meta');

    await page.locator("input[value*='m Feeling Lucky']").last().click({force:true});
    await page.waitForTimeout(2000);


    await page.keyboard.up('Meta');

})