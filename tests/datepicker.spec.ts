// import{test,expect} from '@playwright/test'
// test("datepicker", async({page})=>{
// await page.goto("https://playwrightlab.github.io/")
// await page.locator("#typedDateInput").type("16-03-2000")
// await expect(page.getByText("Thursday, March 16, 2000")).toBeVisible()




// })

import { test, expect } from '@playwright/test';

test('Set date using DOM manipulation', async ({ page }) => {

    await page.goto('https://playwrightlab.github.io/');

    await page.locator('#monthYearInput').evaluate((element) => {
        (element as HTMLInputElement).value = '2026-10-25'
    })
    await expect (page.getByText("Selected: Sunday, October 25, 2026")).toBeVisible()
    await page.waitForTimeout(20000)
    

})