import {test} from "playwright/test"

async function pTest({page}){
    await page.goto("https://www.google.com/");
    console.log(await page.title());
}

test("first test", pTest)