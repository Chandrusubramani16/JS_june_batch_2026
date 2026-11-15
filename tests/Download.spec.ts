import{test,expect} from '@playwright/test'
test("Handling downloads", async({page})=>{
    await page.goto("https://playwrightlab.github.io/")


    const [download]= await Promise.all([
     page.waitForEvent('download'),
     await page.locator("#downloadPdfBtn").click()
    ])

    const filename = await download.suggestedFilename()
    await download.saveAs(`Downloads/${filename}`)

    
})