import {test} from "@playwright/test";

test("perform scroll",async({page})=>{

    await page.goto("https://playwright.dev/");

    await page.waitForTimeout(1000);

    for(let i=1;i<=3;i++){
        await page.mouse.wheel(0,500);
        await page.waitForTimeout(1000);
    }
    
    for(let i=1;i<=3;i++){
        await page.mouse.wheel(0,-500);
        await page.waitForTimeout(1000);
    }

    await page.waitForTimeout(1000);
});





