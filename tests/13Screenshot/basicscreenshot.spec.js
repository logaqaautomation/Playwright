import {test} from "@playwright/test";

test("take screenshot of element",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
    await page.getByText("Remove All").screenshot({path:'./image/go.png'});
});



test("take screenshot of page",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
    await page.screenshot({path:'./image/list_box.png'});
});

test("take screenshot in string format-base64",async({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/list-box.php");
    let s=await page.screenshot();
    let image_as_base64=s.toString("base64");
    console.log(image_as_base64);
    //verify it in--> https://base64.guru/converter/decode/image/png
});


test("take screenshot of complete page",async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.screenshot({
        path:'./image/complete_page.jpeg',
        type:'jpeg',
        fullPage:true,
        quality:80
    });
});


test("take screenshot and store it in PDF",async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.pdf({
        path:'./image/pos_page.pdf',
        format:'A4',
        landscape:false,
        
    });
});