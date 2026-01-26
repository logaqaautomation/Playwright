import {test} from "playwright/test"


test('show confirm prompt - handle', async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");

    page.once('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.accept('Loganathan');
    }

    );
    await page.getByText('Show Prompt').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());

   
    page.once('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.dismiss();
    }
    )

    await page.getByText('Show Prompt').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());

})


test('show confirm prompt - on example', async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");

    page.on('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.accept('Loganathan');
    }

    );
    await page.getByText('Show Prompt').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());


    await page.getByText('Show Prompt').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());

})