import {test} from "playwright/test"

test("get by role",async({page})=>{
    await page.goto("https://www.amazon.in/");

    //.ariaSnapshot() => this will return role.
    console.log(await page.locator('input#twotabsearchtextbox').ariaSnapshot());
    // it prints - searchbox "Search Amazon.in"

    await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill("iphone 17");
    await page.waitForTimeout(3000)

    
})