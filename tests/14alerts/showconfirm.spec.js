import {test} from "playwright/test"


test('show confirm - handle', async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");

    page.once('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.accept();
    }

    );
    await page.getByText('Show Confirm').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());

   
    page.once('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.dismiss();
    }
    )

    await page.getByText('Show Confirm').click();
    await page.waitForTimeout(2000);
    console.log(await page.locator('div.text-success').textContent());

})