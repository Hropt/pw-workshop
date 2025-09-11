import { test, expect } from '@playwright/test'

test.describe('check that cat is', () => {
  const baseUrl = "https://api.thecatapi.com/v1/"
  
  test('added to favourite cats', async ({ request }) => {
    // get random cat
    const getCat = await request.get(`${ baseUrl }images/search`)
    expect(getCat.ok()).toBeTruthy()
    const cat = await getCat.json()
    
    // get favourite cats
    const favourites = await request.get(`${ baseUrl }favourites/`, {
      headers: {
        "x-api-key": `${process.env.CAT_API_TOKEN}`
      },
    });
  });
});
