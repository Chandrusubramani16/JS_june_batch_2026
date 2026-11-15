import{test,expect} from '@playwright/test'
test("dropAndDrag", async({page})=>{

await page.goto("https://playwrightlab.github.io/")
await page.getByTestId("dnd-item-4").dragTo(page.getByTestId("dnd-item-3"))

})