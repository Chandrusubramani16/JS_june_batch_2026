// import{test, expect} from '@playwright/test'
// test('login test',async({page})=> {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.getByPlaceholder("Username").fill("Admin")
//     await page.locator('[name="password"]').fill("admin123")
//     //await page.waitForSelector(".oxd-form-actions orangehrm-login-action")
//     await page.locator('[type="submit"]').click()
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     //await page.waitForTimeout(5000)
//     await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").getByText("Dashboard")).toBeVisible()

// })

import{test, expect} from '@playwright/test'
test('loginpage',async({page})=>{

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/locator-arena")
    //click button
    await page.getByRole('button', {name: 'Start Practice',exact: true}).click()
    //click link
    await page.getByTestId('easy-link-guide').click()
    //enter username
    await page.locator("#easy-name").fill("Chandru Subramani")
    //enter value
    await page.getByPlaceholder('Search by batch').fill('2024')
    //to check logo is visible
    const logo= await page.getByAltText('Practice section logo')
    await expect (logo).toBeVisible()

    await expect (page.getByAltText('Practice section logo')).toBeVisible()
})