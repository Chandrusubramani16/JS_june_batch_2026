import{test, expect} from '@playwright/test'
test('loginpage',async({page})=>{

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
    await page.screenshot({path: 'Screenshots/fullPage-screenshot.png',fullPage: true})

})