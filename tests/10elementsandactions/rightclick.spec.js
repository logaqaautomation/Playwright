import {test} from "@playwright/test";

test("right click",async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
   
    await page.locator("span.context-menu-one").click({button:"right"});
    await page.waitForTimeout(2000);

    await page.locator("span:text-is('Copy')").hover();
    await page.waitForTimeout(2000);

    await page.locator("span:text-is('Copy')").click();

    await page.waitForTimeout(2000);
});


test("right click and print all options present in context menu",async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
   
    await page.locator("span.context-menu-one").click({button:"right"});

    let all_menu_item=await page.locator("li.context-menu-icon").all();

    console.log(await page.locator("li.context-menu-icon").count());

    console.log(all_menu_item.length);

    for(let menu of all_menu_item){
        await menu.hover();
        console.log(await menu.textContent());
    }

    await page.waitForTimeout(2000);
});