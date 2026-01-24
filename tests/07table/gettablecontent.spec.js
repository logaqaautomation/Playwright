import {test} from "playwright/test"

test("get table content", async({page})=>{

    await page.goto("https://cosmocode.io/automation-practice-webtable/");

    let tableXP = '//table[@id="countries"]'
    let tableheaderXP = '//table/tbody/tr[1]/td'
    let tableRowsXP = '//table/tbody/tr'
    let tableAllCheckBoxesXP = '//table/tbody/tr/td/input'

    let allTableContent = await page.locator(tableXP).allTextContents();
    console.log(allTableContent)

    console.log('----------------------------')

    let headerTexts = await page.locator(tableheaderXP).allTextContents();
    console.log(headerTexts)

    headerTexts = await page.locator(tableheaderXP).all();
    for (let head of headerTexts)
    {
        console.log(await head.textContent())
    }

    console.log('----------------------------')


    let allCheckBoxes = await page.locator(tableAllCheckBoxesXP).all();
    for (let cb of allCheckBoxes)
    {
        await cb.click({force:true});
    }
    await page.waitForTimeout(2000)
})