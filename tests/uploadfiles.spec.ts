import{test,expect} from '@playwright/test'
test("uploadfiles", async({page})=>{

    await page.goto("https://playwrightlab.github.io/")

    await page.locator("#uploadBrowseLabel").setInputFiles(["tests/practice-notes (2).txt","tests/practice-data (2).xml"])
    

    await expect(page.getByText("practice-notes (2).txt (0.0 KB)")).toBeVisible()
    await expect(page.getByText("practice-data (2).xml (0.0 KB)")).toBeVisible()
}) 