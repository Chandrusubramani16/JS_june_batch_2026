import {test,expect} from '@playwright/test'
test("handling frames", async ({page})=>{
    test.setTimeout(120000)


await page.goto("https://playwrightlab.github.io/")
 const iframe=  await page.frameLocator("#practiceFrame")
 await iframe.getByTestId("iframe-input-name").fill("Chandru")
await iframe.locator("#iframeMessage").fill("chandru learning playwright")
await iframe.getByTestId("iframe-select").selectOption("Medium")
await iframe.locator("#iframeUrgent").check()
await iframe.locator("#iframeSubmitBtn").click()


})