import {test} from "@playwright/test";

test("double click",async({page})=>{

    await page.goto("https://www.plus2net.com/javascript_tutorial/ondblclick-demo.php");
   
    console.log(await page.locator("#box").textContent());
    await page.waitForTimeout(2000);

    await page.locator("input[type='button']").dblclick();
    

    console.log(await page.locator("#box").textContent());

    await page.waitForTimeout(2000);
});