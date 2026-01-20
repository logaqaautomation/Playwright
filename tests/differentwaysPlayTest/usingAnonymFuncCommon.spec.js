import {test} from "playwright/test"

test("common way", async ({page})=>{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
})