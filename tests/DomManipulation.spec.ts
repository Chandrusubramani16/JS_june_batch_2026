// import{test,expect} from '@playwright/test'
// test("Dommanipulation", async({page})=>{
// await page.goto("https://playwrightlab.github.io/")
// const date= await page.locator("#datePickerInput")
// await date.evaluate((dom, val)=>{
// const html= dom as HTMLInputElement
// html.value= val as string
// html.dispatchEvent(new Event('input'))
// html.dispatchEvent(new Event('change'))
// }, '3/14/2025')

// await page.waitForTimeout(15000)

// //await expect(page.getByText("Selected: Friday, March 14, 2025")).toBeVisible()

// })




import {test,expect} from '@playwright/test'
test("Dommanipulation", async ({page})=>{

await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")

const date= await page.getByTestId('interview-date-picker')
await date.evaluate((dom, val)=>{
const html= dom as HTMLInputElement
html.value= val as string

html.dispatchEvent(new Event('input'))
html.dispatchEvent(new Event('change'))
}, '2000-03-16')

await expect(page.getByText("Interview Date Selected: 2000-03-16")).toBeVisible()
await page.waitForTimeout(10000)
})

































