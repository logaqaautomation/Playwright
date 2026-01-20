import {test} from "playwright/test"

test("b c p", async ({browser})=>{
    let c1 = await browser.newContext();
    let p1 = await c1.newPage();
    await p1.goto("https://www.google.com/");
    await p1.waitForTimeout(5000);

    let c2 = await browser.newContext();
    let p2 = await c2.newPage();
    await p2.goto("https://www.facebook.com/");
    await p2.waitForTimeout(5000);


    let p3 = await c1.newPage();
    await p3.goto("https://www.youtube.com/");
    await p3.waitForTimeout(5000);

})