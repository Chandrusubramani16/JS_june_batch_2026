import{test,expect} from '@playwright/test'
const users=[
    
        {username: 'standard_user',password: 'secret_sauce',expectedText : 'Sauce Labs Backpack'},
        {username:'problem_user',password: 'secret_sauce',expectedText: 'Sauce Labs Bike Light'}
]
    for (const user of users)
    {


test(`Datadriventesting ${user.expectedText}`, async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator("#user-name").fill(user.username)
await page.locator("#password").fill(user.password)
await page.locator("#login-button").click()
await expect(page.getByText(user.expectedText)).toBeVisible()

})










    }