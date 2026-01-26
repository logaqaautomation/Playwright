import {test} from "playwright/test"

test("iFrame contentFrame", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();

  
    await page.locator("iframe[name='employeetable']").contentFrame().locator('input#nameInput').fill("contentFrame");
    await page.waitForTimeout(3000);
})


test("iFrame FrameLocator", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();


    await page.frameLocator("iframe[name='employeetable']").locator('input#nameInput').fill("FrameLocator");
    await page.waitForTimeout(3000);
})


test("iFrame using Frame", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();

    //using contentFrame
    await page.frame({name:'employeetable'}).locator('input#nameInput').fill("using Frame");
    await page.waitForTimeout(3000);
})


test("iFrame using FrameSS", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();

    let allFrames = page.frames();

    for (let frame of allFrames){
        
        if (frame!=page.mainFrame())
        {
        await frame.locator('input#nameInput').fill("using FrameSS");
        console.log("entered the name")
        break;
        }
    }
    await page.waitForTimeout(3000);
   
})



test("iFrame partial match using Frame", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();

    await page.frame({url:(url)=>url.href.includes('webtable')}).locator("input#nameInput").fill("Partial Match 01");
    await page.waitForTimeout(3000);

    await page.frameLocator("//iframe[contains(@name,'employeetab')]").locator("//input[contains(@id,'nameIn')]").fill("partial 02")
    await page.waitForTimeout(3000);  
   
})


test("iFrame childFrames", async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/");
    await page.waitForLoadState();

    let allIframes = page.mainFrame().childFrames();
    console.log(allIframes.length);

    await allIframes[0].locator("//input[contains(@id,'nameIn')]").fill("Child Frames")

    await page.waitForTimeout(3000);
   
})