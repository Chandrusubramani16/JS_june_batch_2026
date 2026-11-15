// import{test,expect} from '@playwright/test'
// test('handlingDropdowns', async({page})=>{
// await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
// await page.getByTestId("hidden-dropdown-toggle-btn").click()
// await page.getByTestId("hidden-dropdown-select").selectOption("Hidden - Advanced")

// })


//selecting dropdown
import{test,expect} from '@playwright/test'
test('handlingDropdowns', async({page})=>{
await page.getByTestId("bootstrap-dropdown-trigger").click()
await page.getByText("Weekend Batch").click()

})
