import{test,expect} from '@playwright/test'
// test("newtabhandling", async({browser})=>{
//     //const browser= await chromium.launch()
//     const context= await browser.newContext()
//     const page= await context.newPage()

// await page.goto("https://playwrightlab.github.io/")
 
//  const [newPage] = await Promise.all([
//     context.waitForEvent('page'),
//     await page.getByTestId("new-tab-btn").click()
//  ])
// await page.bringToFront()

// await page.waitForTimeout(5000)
// })

test("dropdown", async({page})=>{
    await page.goto("https://playwrightlab.github.io/")
   // await page.waitForSelector(".custom-dropdown-trigger")
    await page.getByTestId("custom-dropdown-trigger").click()
    await page.getByTestId("custom-opt-medium").click()
    await expect (page.getByText("Selected: medium")).toBeVisible()
})