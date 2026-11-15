import{test,expect} from '@playwright/test'
test('uploads',async({page})=>{

    await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced")
    await page.getByTestId('multi-file-upload-input').setInputFiles(['Uploads/practice-data.csv', 'Uploads/practice-data.xml', 'Uploads/practice-notes.txt', 'Uploads/practice-report.pdf'])
    await expect(page.getByText("4 files uploaded")).toBeVisible()

})

