import{test,expect} from '@playwright/test'
test("searchbox", async({page})=>{
    await page.goto ("https://playwrightlab.github.io/")
    // await page.locator("#searchableDropdownInput").click()
    // await page.locator("#searchableDropdownInput").type("Paris")
    // await page.getByTestId("city-paris").click()
    // await expect (page.getByText("Selected: paris")).toBeVisible()

    //   await page.getByTestId("cascade-continent").selectOption("Americas")
    //   await page.getByTestId("cascade-country").selectOption("Brazil")
    //   await page.getByTestId("cascade-city").selectOption("Rio de Janeiro")
    //   await expect (page.getByText("Selected: Americas → Brazil → Rio de Janeiro")).toBeVisible()

   //await page.getByTestId("grouped-select").selectOption("Pickup")

//    await page.getByTestId("checkbox-dropdown-trigger").click()
//    await page.getByText("Mushrooms").check()
//     await page.getByText("Onions").check()
//     await page.getByText("Pepperoni").check()
//     await expect (page.getByText("Selected: pepperoni, mushrooms, onions")).toBeVisible()

//    await page.waitForTimeout(10000)


await page.getByTestId("volume-value").fill("74")
await page.locator('[for="priceRange"]').fill("850")

await page.waitForTimeout(10000)



})

