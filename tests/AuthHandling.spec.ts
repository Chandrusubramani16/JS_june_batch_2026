import{test,expect,Page,Browser,BrowserContext, chromium} from '@playwright/test'



test.describe("AuthHandling",async()=>{
    //test.setTimeout(60000)
let browser: Browser
let context: BrowserContext
let page: Page


    test.beforeEach(async()=>{
     browser= await chromium.launch()
     context= await browser.newContext()
     page= await context.newPage()
    
     await page.goto("https://testcms.reco-claims.ca/Login?redirectUrl=application-roles")
     await page.getByRole("textbox",{name: "Username"}).fill("info+programmanager@xlgclaims.com")
     await page.getByRole("textbox",{name: "Password"}).fill("Test1234!")
     await page.getByRole("button",{name: 'Login'}).click()
     //await page.waitForURL("**/application-roles")
     //await page.waitForTimeout(30000)


    })

    test('handling dropdown', async()=>{
        await page.getByRole('link', { name: 'Claims' }).click()
       // await page.waitForTimeout(60000)
    await expect(page.getByPlaceholder("Search")).toBeVisible()
    

    

    })
    
    


})