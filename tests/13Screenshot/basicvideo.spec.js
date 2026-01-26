import {test} from "@playwright/test";

test("record video",async({browser})=>{
    const context=await browser.newContext({
        recordVideo:{dir:'./image/videos/'}
    });


    let page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(2000);
    await page.locator("button.orangehrm-login-button").click();
    await page.waitForTimeout(2000);
    await page.close();
    await context.close();

});




import path from 'path';
import fs from 'fs';

test("record video rename",async({browser})=>{
    const context=await browser.newContext({
        recordVideo:{dir:'./image/videos/'}
    });


    let page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(2000);
    await page.locator("button.orangehrm-login-button").click();

    let video=page.video();
    await page.close();
    await context.close();

    let videoPath=await video.path();//cuurent path of the video
    console.log('Auto generated video path',videoPath);
    let newVideoPath=path.join('image/videos','orangelogin_videos.webm');
    console.log('Constructed video path',newVideoPath);
    fs.renameSync(videoPath,newVideoPath);
    console.log('Video is renamed');

});