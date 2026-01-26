import {test} from "@playwright/test";

test("element selection one by one",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
   
    let all_items=await page.locator("//select[@id='list1']/option").all();
    console.log (all_items.length)
    for(let item of all_items){
       await item.click();
       await page.waitForTimeout(1000);

    }
    await page.waitForTimeout(2000);

    
});

test("element selection alternate",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
   
    let all_items=await page.locator("//select[@id='list1']/option").all();
    console.log (all_items.length)
    let alternative = all_items.filter((item,index)=>index%2==0)

    await page.keyboard.down('Meta');
    for(let item of alternative){
       await item.click();
       await page.waitForTimeout(1000);

    }
    await page.keyboard.up('Meta');
    await page.waitForTimeout(2000);

    
});

test("element selection all",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
   
    let all_items=await page.locator("//select[@id='list1']/option").all();
    console.log (all_items.length)
    await page.keyboard.down('Meta');
    for(let item of all_items){
       await item.click();
       await page.waitForTimeout(1000);

    }
    await page.keyboard.up('Meta');
    await page.waitForTimeout(2000);

    
});