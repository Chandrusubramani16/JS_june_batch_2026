import{test,expect} from '@playwright/test'
test('DragAndDrop',async({page})=>{

    // await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
    // await page.getByTestId('drag-source').dragTo (page.getByTestId('drop-target'))
    // await expect(page.getByText('Drop completed successfully.')).toBeVisible()
    

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
   const iframe= page.frameLocator("#practice-iframe")
   await iframe.locator("#frame-input").fill("Playwright")
   await iframe.locator("#frame-save").click()
   await expect (iframe.getByText("Playwright saved")).toBeVisible()

   await page.waitForTimeout(10000)
})

