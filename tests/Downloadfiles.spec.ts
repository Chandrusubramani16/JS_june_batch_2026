import{test,expect} from '@playwright/test'
test("Downloadfiles",async({page})=>{

    await page.goto("https://playwrightlab.github.io/")
    const [download]=await Promise.all([
        page.waitForEvent('download'),
            page.getByTestId("download-pdf-btn").click()
    ])
      const filename=await download.suggestedFilename()
      await download.saveAs(`downloads/${filename}`)
})
