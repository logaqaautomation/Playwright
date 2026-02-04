import {test} from "@playwright/test";


test("simple File Download-multiple times",async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/file-download.php");
    await page.locator('textarea').fill("this is a test file");
    await page.getByText('Generate File').click();

    page.once('download',(download)=>{download.saveAs("./doc/first.txt")});
    await page.locator("#downloadLink").click();

    page.once('download',(download)=>{download.saveAs("./doc/second.txt")});
    await page.locator("#downloadLink").click();


});




test("File Download",async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/file-download.php");
    await page.locator('textarea').fill("this is a test file");
    await page.getByText('Generate File').click();




    page.on('download',(download)=>{
        let filename=download.suggestedFilename();//get the actual file naeme
        console.log(filename);
        let originalName=filename;
    const now = new Date();
    const extension = originalName.substring(originalName.lastIndexOf("."));
    const baseName = originalName.substring(0, originalName.lastIndexOf("."));
    const newFileName = `${baseName}_${now}${extension}`;
    const savePath = `./image/doc/${newFileName}`;

    console.log(`Downloading as: ${savePath}`);
    
    //download.saveAs(`./image/doc/${filename}`);
    download.saveAs(savePath);
    });

    await page.waitForTimeout(1000);

    await page.locator("#downloadLink").click();

    await page.waitForTimeout(3000);

});




function getFormattedDateTime() {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months start from 0
  const yyyy = now.getFullYear();

  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  return `${dd}_${mm}_${yyyy}_${hh}_${min}_${ss}`;
}
test("File Download with timestamp", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/file-download.php");
    await page.locator('textarea').fill("this is a test file");
    await page.getByText('Generate File').click();

  page.on("download", async (download) => {
    const originalName = download.suggestedFilename();
    let timeStamp=getFormattedDateTime();
    let savePath=originalName.replaceAll(".txt",timeStamp+".txt");
    
    console.log(savePath);
    await download.saveAs(savePath);
  });

  await page.locator("#downloadLink").click();

  await page.waitForTimeout(3000);
});