import{test,expect, firefox, chromium} from '@playwright/test'
test('HandlingNewTab', async()=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()
    const page= await context.newPage()



await page.goto("https://rookienerd.com/tutorial/playwright/playwright-multiple-tabs-windows-java")

const [newPage]= await Promise.all([
context.waitForEvent('page'),
page.getByRole('link', {name: 'http://codeamaze.com'}).click()

])

//await expect (newPage.getByText("Popup Opened Successfully")).toBeVisible()

//await newPage.waitForTimeout(5000)

//await page.bringToFront()

await page.waitForTimeout(5000)

})

