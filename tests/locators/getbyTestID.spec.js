import {test} from "playwright/test"

test("get by Test ID",async({page})=>{
    

    //testIdAttribute: 'data-test', in config file

    await page.goto("https://www.saucedemo.com/");
    // data-test="username" attribute
    await page.getByTestId('username').fill("loganathan");
    //data-test="password"
    await page.getByTestId('password').fill("password");
    await page.waitForTimeout(3000);

    page.g
})