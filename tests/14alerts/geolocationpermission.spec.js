import {test} from "@playwright/test";

//accept browser as input arg
test("Geolocation -allow",async({browser})=>{
    let context=await browser.newContext();
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({latitude:12.9712,longitude:77.5976});
    let page=await context.newPage();

    await page.goto("https://aksharatraining.com/sample18.html");
    
    await page.getByText("Geolocation Permission").click();

    await page.waitForTimeout(1000);

    console.log(await page.locator("#message").textContent());
});


//accept browser as input arg
test("Geolocation -never allow",async({browser})=>{
    let context=await browser.newContext();
    await context.grantPermissions([]);//remove permission
    let page=await context.newPage();

    await page.goto("https://aksharatraining.com/sample18.html");
    
    await page.getByText("Geolocation Permission").click();

    await page.waitForTimeout(1000);

    console.log(await page.locator("#message").textContent());
});

//        permissions:['geolocation'],
//        geolocation:{latitude:12.9712,longitude:77.5976},
test("Geolocation -from config",async({page})=>{

    await page.goto("https://aksharatraining.com/sample18.html");
    
    await page.getByText("Geolocation Permission").click();

    await page.waitForTimeout(1000);

    console.log(await page.locator("#message").textContent());
});