import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic")
    await page.getByTestId('keyboard-input').fill("Playwright")
    await page.getByTestId('keyboard-input').press("Enter")
    await expect(page.getByText("Command submitted: Playwright")).toBeVisible()
    

  


})