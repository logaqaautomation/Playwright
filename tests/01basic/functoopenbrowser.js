import {chromium} from "playwright"

async function pTest()
{
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto("https://www.google.com/")
    let title = await page.title();
    console.log(title);
    await browser.close();
}

await pTest();