import { test, expect } from '@playwright/test';

test.describe('Practicing getByAltText Locator', ()=>{

    //Website url
    const url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

    test.beforeEach(async({page})=>{

        //Navigate to url
        await page.goto(url);

    });

    test.afterEach(async({page})=>{

        //Close the page
        await page.close();

    });

    test('Verify the image by using getByAltText locator', async({page})=>{

        //getByAltText section 
        const getByAltTextSection = page.locator('#alttext-locators');

        //Image locator
        const image = getByAltTextSection.getByAltText('logo image');

        //Verification
        await expect(image).toBeVisible();
    });
});