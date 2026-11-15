import{test,expect} from '@playwright/test'
test('Bootstrapdropdown',async({page})=>{

    // await page.goto("https://demoqa.com/select-menu?utm_source=chatgpt.com")
    // await page.locator("//div[@id='withOptGroup']").click()
    // await page.getByText("Group 1, option 2").click()

    // //Multiselect dropdown
    // await page.goto("https://demoqa.com/select-menu?utm_source=chatgpt.com")
    // await page.locator("//div[@id='selectMenuContainer']").click()
    // await page.locator("//div[contains(text,'Green')]").click ()
    // await page.locator("//div[contains(text,'Black')]").click()

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
    // await page.selectOption("#dropdown","Option 2")
    
    //Hidden dropdown practice

    await page.getByTestId('hidden-dropdown-toggle-btn').click()
    await page.getByTestId('hidden-dropdown-select').selectOption('Hidden - Advanced')
    await expect (page.getByText("Hidden dropdown selected: Hidden - Advanced.")).toBeVisible()
    

    })





