import {test} from "playwright/test"

test("using text", async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/radio-button.php")


    //getbyText
    await page.locator("(//label/input[@value='Male'])[1]").click();
    await page.getByText('Show Selected Gender').click();
    await page.waitForTimeout(2000);

    //text = value
    await page.locator("(//label/input[@value='Female'])[1]").click();
    await page.locator("text='Show Selected Gender'").click();
    await page.waitForTimeout(2000);

    //text value
    await page.locator("(//label/input[@value='Male'])[1]").click();
    await page.locator("button:text('Show Selected Gender')").click();
    await page.waitForTimeout(2000);

    //using filter //partial match
    await page.locator("(//label/input[@value='Female'])[1]").click();
    await page.locator("button").filter({hasText:'Show Selected Gend'}).click();
    await page.waitForTimeout(2000);



})