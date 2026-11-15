import{test, expect} from '@playwright/test'
test('loginpage',async({page})=>{
    await page.goto("https://www.freshmenu.com/")
   const plusButton = page.locator('button[aria-label="Add one"]').nth(1)
    for(let i=0; i<29; i++)
        {
        await plusButton.click()
}



})