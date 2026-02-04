import {test} from "@playwright/test";



test.use({
        permissions:['geolocation'],
        geolocation:{latitude:12.1234,longitude:77.5678},
});

test("geo location permission",async({page})=>{
    //await page.context().grantPermissions(['geolocation']);
    //await page.context().grantPermissions(['camera']);

    let url="https://practice.expandtesting.com/geolocation";
    await page.goto(url);
    await page.getByText("Where am I?").click();
    await page.waitForTimeout(5000);

});
