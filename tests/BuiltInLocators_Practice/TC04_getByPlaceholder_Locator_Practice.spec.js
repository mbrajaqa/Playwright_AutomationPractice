import { test, expect } from '@playwright/test';

test.describe('Practicing getByPlaceholder Locator', ()=>{

    //Website url
    const url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#'

    test.beforeEach(async({page})=>{  

        //Navigate to the url
        await page.goto(url);

    });

    test.afterEach(async({page})=>{

        //close the page
        await page.close();
        
    });

    test('Fill the Form', async({page})=>{

        //Data for Testing
        const name = 'Manobharathiraja M';
        const phoneNumber = '1234567890';
        const message = 'Thank You';
        const product = 'iPhone';


        //getByPlaceholder section locator
        const getByPlaceholderSection = page.locator('#placeholder-locators');

        
        //Locators for name, phone number, message, products
        const nameLocator = getByPlaceholderSection.getByPlaceholder('Enter your full name');
        const phoneNumberLocator = getByPlaceholderSection.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
        const messageLocator = getByPlaceholderSection.getByPlaceholder('Type your message here...');
        const productsLocator = getByPlaceholderSection.getByPlaceholder('Search products...');


        //Enter name, phone number, message, products
        await nameLocator.fill(name);
        await phoneNumberLocator.fill(phoneNumber);
        await messageLocator.fill(message);
        await productsLocator.fill(product);


        //Verify the entered values
        await expect(nameLocator).toHaveValue(name);
        await expect(phoneNumberLocator).toHaveValue(phoneNumber);
        await expect(messageLocator).toHaveValue(message);
        await expect(productsLocator).toHaveValue(product);

    });

});