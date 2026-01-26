import {test} from "@playwright/test";
/*
listbox <select>
items--><option>
*/
test("handling listbox query",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
   
    let listBox=page.locator("select#list1");
    await listBox.selectOption("Ryan");
    await page.waitForTimeout(1000);

    await listBox.selectOption({index:2});
    await page.waitForTimeout(1000);

    await listBox.selectOption({label:'Mohit'});
    await page.waitForTimeout(1000);

    await page.goto("https://demoqa.com/select-menu");
    listBox=page.locator("select#cars");
    await listBox.scrollIntoViewIfNeeded();
    await listBox.selectOption({value:'opel'});
    await page.waitForTimeout(1000);    
});

test("handling listbox using query handler",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
   
    let listBox=page.locator("select#list1");
    await listBox.selectOption("Ryan");
    await page.waitForTimeout(1000);

    let option = await page.$("//option[text()='Yash']");

    await listBox.selectOption(option);
    await page.waitForTimeout(1000);    
});