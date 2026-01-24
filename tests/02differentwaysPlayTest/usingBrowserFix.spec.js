import {test} from "playwright/test"

test("browser fixture", async ({browser})=>{
    let b = await browser.newContext();
    let p = await b.newPage();
    await p.goto("https://www.google.com/");
    console.log(await p.title());
})