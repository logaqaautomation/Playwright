import {test} from "@playwright/test";

test("boundingbox",async({page})=>{
    test.slow();

    await page.goto("https://testing.qaautomationlabs.com/form.php");

    let boudaries = await page.locator('input#firstname').boundingBox();

    console.log(boudaries.x)
    console.log(boudaries.y)
    console.log(boudaries.height)
    console.log(boudaries.width)


})


test("boundingbox drag and drop",async({page})=>{
    test.slow();

     await page.goto("https://jqueryui.com/droppable/");

    let source=page.frameLocator(".demo-frame").locator("#draggable")
    let sourceBB = await source.boundingBox();
    let sourceX = sourceBB.x;
    let sourceY = sourceBB.y;

    let target=page.frameLocator(".demo-frame").locator("#droppable");
    let targetBB = await target.boundingBox();
    let targetX = targetBB.x;
    let targetY = targetBB.y;

    await page.mouse.move(sourceX+20, sourceY+20);

    await page.mouse.down()

    await page.mouse.move(targetX+20, targetY+20);

    await page.mouse.up()


    await page.waitForTimeout(2000);


})



test("perform Draggable",async({page})=>{

    await page.goto("https://jqueryui.com/draggable/");
   
    let b=await page.frameLocator("iframe.demo-frame").locator("#draggable").boundingBox();
    let x=b.x;
    let y=b.y;

    await page.mouse.move(x,y);
    await page.mouse.down();
    for(let i=1;i<=10;i++){
        await page.mouse.move(x+(10*i),y+(10*i));
    }
    await page.mouse.up();

    await page.waitForTimeout(2000);

    
});


test("perform resize the element",async({page})=>{
    test.slow();
    await page.goto("https://jqueryui.com/resizable/");
   
    let b=await page.frameLocator("iframe.demo-frame").locator("div.ui-resizable-e").boundingBox();
    let x=b.x;
    let y=b.y;

    //drag to right
    await page.mouse.move(x,y);
    await page.mouse.down();
    for(let i=1;i<=5;i++){
        await page.mouse.move(x+(10*i),y);
    }
    await page.mouse.up();

    b=await page.frameLocator("iframe.demo-frame").locator("div.ui-resizable-s").boundingBox();
    x=b.x;
    y=b.y;

    //drag to down
    await page.mouse.move(x,y);
    await page.mouse.down();
    for(let i=1;i<=5;i++){
        await page.mouse.move(x,y+(10*i));
    }
    await page.mouse.up();

    b=await page.frameLocator("iframe.demo-frame").locator("div.ui-resizable-se").boundingBox();
    x=b.x;
    y=b.y;

    await page.mouse.move(x,y);
    await page.mouse.down();
    for(let i=1;i<=5;i++){
        await page.mouse.move(x+(10*i),y+(10*i));
    }
    await page.mouse.up();

    await page.waitForTimeout(2000);

    
});