import{test,expect} from '@playwright/test'
test("HttpsMethods", async ({request})=>{
const response= await request.get(
  "https://reqres.in/api/users/7")
  expect (response.status()).toBe(200)
  expect (response.status()).toBe(200)
  
   //console.log(response)
// const responsebody= await response.json()
// expect(responsebody.data[0].id).toBe(7)


})