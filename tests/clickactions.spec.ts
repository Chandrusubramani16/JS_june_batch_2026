import{test,expect} from '@playwright/test'
test("clickactions", async ({page})=>{
//single click
// await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
// await page.getByTestId("single-click-btn").click()

// await expect(page.getByText("Single click completed.")).toBeVisible()

//Double click action

// await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
// await page.getByTestId("double-click-btn").dblclick()

// await expect(page.getByText("Double click completed.")).toBeVisible()

//hover
// await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
// await page.getByTestId("hover-btn").hover()
// await expect(page.getByText("Hover triggered successfully.")).toBeVisible()

//tooltip verified
await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
await page.getByTestId("tooltip-trigger-btn").hover()
await expect (page.getByTestId("hover-tooltip")).toContainText("Tooltip verified")
await expect(page.getByText("Tooltip verified successfully.")).toBeVisible()
})