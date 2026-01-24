import {test} from "playwright/test"

test("and and or example", async({page})=>{

    await page.goto("https://www.naukri.com/");
    await page.locator("a#register_Layer").click();
    await page.waitForTimeout(2000);

    await page.locator("input[type='text']").first().fill("Loganathan");
    //index starts from 0
    await page.locator("input[type='text']").nth(1).fill('test@test.com', {force: true});
    await page.locator("input[type='text']").last().fill("7708554993");

    await page.waitForTimeout(2000)


});     


test("and and or example - all reverse", async({page})=>{

    await page.goto("https://www.naukri.com/");
    await page.locator("a#register_Layer").click();
    await page.waitForTimeout(2000);

    let inputs = page.locator("input[type='text']");
    console.log(inputs.count())


    let allInputs = await inputs.all();

    for (let input of allInputs.reverse())
    {
        await input.fill('test', {force: true});
        await page.waitForTimeout(1000)
    }
    await page.waitForTimeout(2000)


});     


test("and and or example - count length", async({page})=>{

    await page.goto("https://www.naukri.com/");
    await page.locator("a#register_Layer").click();
    await page.waitForTimeout(2000);

    let allInputs = await page.locator("input[type='text']").all();
    console.log(allInputs);
    console.log("length: " + allInputs.length);

    let allInputsCount = await page.locator("input[type='text']").count();
    console.log("count: "+allInputsCount);

    for (let i=0; i< allInputsCount; i++)
    {
        await allInputs[i].fill('test', {force: true});
        await page.waitForTimeout(1000)
    }


    // for (let input of allInputs)
    // {
    //     await input.fill('test', {force: true});
    //     await page.waitForTimeout(1000)
    // }
    // await page.waitForTimeout(2000)


});     


test("and and or example - all", async({page})=>{

    await page.goto("https://www.naukri.com/");
    await page.locator("a#register_Layer").click();
    await page.waitForTimeout(2000);

    let allInputs = await page.locator("input[type='text']").all()

    for (let input of allInputs)
    {
        await input.fill('test', {force: true});
        await page.waitForTimeout(1000)
    }
    await page.waitForTimeout(2000)


});     