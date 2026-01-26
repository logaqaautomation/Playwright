import {test} from "playwright/test"

test("actions on textbox", async({page})=>{

    await page.goto('https://testing.qaautomationlabs.com/form.php');

    await page.locator('input#firstname').fill('loganathan');
    await page.waitForTimeout(1000);

    await page.locator('input#firstname').clear();
    await page.waitForTimeout(1000);

    await page.locator('input#firstname').pressSequentially('Desikachari')
    await page.waitForTimeout(1000);

    
    await page.locator('input#firstname').press('Meta+A');
    await page.waitForTimeout(1000);

    await page.locator('input#firstname').press('ArrowRight');
    await page.waitForTimeout(1000);
    
    for (let i=0; i<5; i++)
    {
        await page.locator('input#firstname').press('ArrowLeft');
        await page.waitForTimeout(1000);
    }

    await page.locator('input#middlename').focus();
    await page.waitForTimeout(1000);

    await page.locator('input#middlename').blur();
    await page.waitForTimeout(1000);


    await page.locator('input#firstname').selectText();
    await page.locator('input#firstname').press('Delete')
    await page.waitForTimeout(1000);


})