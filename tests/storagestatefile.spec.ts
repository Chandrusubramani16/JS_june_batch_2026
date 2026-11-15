import{test,expect} from '@playwright/test'
test("storagestatefile", async({page})=>{

await page.goto("https://www.saucedemo.com/inventory.html")
//await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html")
//await page.getByTestId("add-to-cart-sauce-labs-fleece-jacket").click()
await page.waitForTimeout(5000)

})