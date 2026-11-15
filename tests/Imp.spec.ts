import{test, expect} from '@playwright/test'
test('loginpage',async({page})=>{
    await page.goto("https://sso.internal.eportal.mastercard.int/imp-ui/CCMBasket")


})