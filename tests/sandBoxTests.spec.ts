// import{test,expect} from '@playwright/test'
// test('sandBoxTests',async({page})=>{

//      await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
    // await page.getByTestId('single-click-btn').click()
    // await expect (page.getByTestId('single-click-status')).toBeVisible()
    // await page.getByTestId('double-click-btn').dblclick()
    // await expect (page.getByText("Double click completed.")).toBeVisible()
    // await page.getByTestId('hover-btn').hover()
    // await expect(page.getByText("Hover triggered successfully.")).toBeVisible()
    // await page.getByTestId('tooltip-trigger-btn').hover()
    // await expect(page.getByTestId("hover-tooltip")).toBeVisible()
    // await expect(page.getByTestId("hover-tooltip")).toContainText("Tooltip verified")
//     await page.getByTestId('static-practice-select').selectOption("Easy - Basic locator targeting")
//     await expect(page.getByText("Static dropdown selected: Easy.")).toBeVisible()
// })

import{test,expect} from '@playwright/test'
test('sandBoxTests',async({page})=>{

    const name= "Chandrusubramani"
    const email="chandrusubramani16@gmail.com"
    const value="API + UI"

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")

    await page.getByTestId('name-input').fill(name)

    await page.getByTestId('email-input').fill(email)

    await page.locator('[data-testid="track-select"]').selectOption(value)

    await page.getByTestId('remember-checkbox').check()

    await page.getByTestId('mode-api-radio').check()

    await page.getByTestId('submit-form-btn').click()

    await expect(page.getByText(`${name} submitted (${email}) for ${value}.`)).toBeVisible()


})