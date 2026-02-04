import {test} from "@playwright/test";


test("File upload popup-absolute path",async({page})=>{

    let url="https://testing.qaautomationlabs.com/file-upload.php";

    await page.goto(url);

    await page.waitForTimeout(2000);

    let filePath="/Users/logan/Documents/workspace/Playwright0120206/Playwright/inputfiles/test.txt";

    await page.locator("#fileInput").setInputFiles(filePath);

    await page.waitForTimeout(5000);

});

test("File upload popup-relative path",async({page})=>{

    let url="https://testing.qaautomationlabs.com/file-upload.php";

    await page.goto(url);

    await page.waitForTimeout(2000);

    let filePath="./inputfiles/test.txt";

    await page.locator("#fileInput").setInputFiles(filePath);

    await page.waitForTimeout(5000);

});