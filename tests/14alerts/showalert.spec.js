import {test} from "playwright/test"

test('show alert', async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");
    await page.getByText('Show Alert').click();
    // by default playwright handles dialogs and they are auto dismissed    
    await page.waitForTimeout(2000);
    console.log(await page.getByText('Alert shown.').isVisible());

})


test('show alert - handle', async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/javaScript-alert.php");

    page.once('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.accept();
    }

    );
    await page.getByText('Show Alert').click();
    await page.waitForTimeout(2000);
    console.log(await page.getByText('Alert shown.').isVisible());

    page.once('dialog',(dialog)=>{
         console.log(dialog.message());//get the msg of alert
         dialog.accept(); //click on OK button of alert
    });
    await page.getByText("Show Alert").click();
    await page.waitForTimeout(1000);

})