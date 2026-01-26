import {test} from "@playwright/test";

test("drag and drop",async({page})=>{
    test.slow();

    await page.goto("https://testing.qaautomationlabs.com/drag-and-drop.php");
    await page.waitForTimeout(2000);
    let source=page.locator("//li/strong[contains(text(),'Item 1')]");
    let target=page.locator("//li/strong[contains(text(),'Item 5')]");
    await source.dragTo(target);
    await page.waitForTimeout(2000);
});


test("drag and drop example",async({page})=>{
    test.slow();
    await page.goto("https://www.w3schools.com/html/html5_draganddrop.asp");
    let source=page.locator("#img1");
    let target=page.locator("#div2");
    await source.dragTo(target);
    await page.waitForTimeout(2000);
});


test("drag and drop across frame",async({page})=>{
    await page.goto("https://jqueryui.com/droppable/");

    let source=page.frameLocator(".demo-frame").locator("#draggable")
    let target=page.frameLocator(".demo-frame").locator("#droppable");
    
    await source.dragTo(target);
    await page.waitForTimeout(2000);
});