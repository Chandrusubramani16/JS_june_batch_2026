import { test, expect } from '@playwright/test'
test('Dialogboxhandler', async ({ page }) => {

    await page.goto("https://qaplayground.com/ui-practice/dialog")

    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept("Chandru Subramani")

    })

    await page.getByTestId("prompt-action").click()

    await expect(page.getByText("Hello, Chandru Subramani! Welcome aboard.")).toBeVisible()


})