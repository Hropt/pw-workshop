import { test, expect } from '@playwright/test'

test.describe('cat api -  ', () => {
  const baseUrl = "https://api.thecatapi.com/v1/"
  
  test('get cats', async ({ request }) => {
    // get random cat
    const getCat = await request.get(`${ baseUrl }images/search`)
    expect(getCat.ok()).toBeTruthy()
    const cat = await getCat.json()
    
    // get favourite cats
    const favouriteCats = await request.get(`${ baseUrl }favourites/`, {
      headers: {
        "x-api-key": `${process.env.CAT_API_TOKEN}`
      },
    });
    expect(favouriteCats.ok()).toBeTruthy()
  });
});
