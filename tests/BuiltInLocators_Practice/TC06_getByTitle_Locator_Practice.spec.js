import { test, expect } from '@playwright/test';

test.describe('Practicing getByTitle Locator', ()=>{

    //Website
    const url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

    test.beforeEach(async({page})=>{

        //Navigate to the url
        await page.goto(url);

    });


    test.afterEach(async({page})=>{

        //Close the page
        await page.close();

    });

    test('Test the webelements', async({page})=> {

        //Title Messages
        const homeTitle = 'Home page link';
        const htmlTitle = 'HyperText Markup Language';
        const tooltipTitle = 'Tooltip text';
        const saveButtonTitle = 'Click to save your changes';

        
        //Names of the element
        const homeName = 'Home';
        const htmlName = 'HTML';
        const tooltipName = 'This text has a tooltip';
        const saveButtonName = 'Save';


        //getByTitle Section
        const getByTitleSection = page.locator('#title-locators');

        //Web Element Locators
        const homeLocator = getByTitleSection.getByTitle(homeTitle);
        const htmlLocator = getByTitleSection.getByTitle(htmlTitle);
        const tooltipLocator = getByTitleSection.getByTitle(tooltipTitle);
        const saveButtonLocator = getByTitleSection.getByTitle(saveButtonTitle);


        //Verify the titles
        await expect(homeLocator).toHaveAttribute('title', homeTitle);
        await expect(htmlLocator).toHaveAttribute('title', htmlTitle);
        await expect(tooltipLocator).toHaveAttribute('title', tooltipTitle);
        await expect(saveButtonLocator).toHaveAttribute('title',saveButtonTitle);

        
        //Verify the name
        await expect( homeLocator).toContainText(homeName);
        await expect(htmlLocator).toContainText(htmlName);
        await expect(tooltipLocator).toContainText(tooltipName);
        await expect(saveButtonLocator).toContainText(saveButtonName);

    });

});