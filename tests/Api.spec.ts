import{test,expect} from '@playwright/test'
import { ok } from 'node:assert'
test('ApiResponse',async({request})=>{

const response= await request.get("https://automationexercise.com/api/productsList")
//console.log(await response.json())

const body= await response.json()
expect(response.status()).toBe(200)
expect(response.statusText()).toBe('OK')
})

