import {test} from "@playwright/test";

//playwright config js
// export default defineConfig({
//   /* Run tests in files in parallel */
//   fullyParallel: true,
// })


//npx playwright test /Users/logan/Documents/workspace/Playwright0120206/Playwright/tests/12ParallelExecution --workers=2


test("s1",async({page})=>{

    let url = "https://logaqaautomation.github.io/playwright-practice-app/index.html"
    await page.goto(url);
    console.log(await page.title());
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Enter email").fill("logan@test.com");
    await page.getByText("Password").fill("test");
    await page.waitForTimeout(3000);
    await page.locator("button#loginBtn").click();

    await page.waitForTimeout(3000);
});