import { test, expect } from '@playwright/test';

test.describe( 'Practicing getByText Locator', ()=>{
    
    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
    });

    test.afterEach(async({page})=>{
        await page.close();
    });

    test('Verify the bold text and colored text', async({page})=>{
        //Locators for bold text and colored text
        const boldTextLocator = page.locator('#text-locators').getByText('important text');
        const coloredTextLocator = page.locator('#text-locators').getByText('colored text for');

        //Bold text and colored text message
        const boldTextMessage = 'This paragraph contains some important text that you might want to locate.';
        const coloredTextMessage = 'Another paragraph with colored text for demonstration.';

        //Verify the bold text and colored text message
        await expect(boldTextLocator).toContainText(boldTextMessage);
        await expect(coloredTextLocator).toContainText(coloredTextMessage);
    });

    test('Verify the list items', async({page})=>{
        //List item locator
        const listItem1Locator = page.locator('#text-locators').getByText('item 1');
        const listItem2Locator = page.locator('#text-locators').getByText('item 2');
        const listItemSpecialLocator = page.locator('#text-locators').getByText('Special');

        //List item message
        const listItem1Text = 'List item 1';
        const listItem2Text = 'List item 2 with link';
        const listItemSpecialText = 'Special: Unique text identifier';

        //Verify the list item message
        await expect(listItem1Locator).toContainText(listItem1Text);
        await expect(listItem2Locator).toContainText(listItem2Text);
        await expect(listItemSpecialLocator).toContainText(listItemSpecialText);

    });

    test('Verify the submit form', async({page})=>{
        //Submit locator
        const submitFormButtonLocator = page.locator('#text-locators').getByText('Submit Form');
        const submitInfoLocator = page.locator('#text-locators').getByText('Click');

        //Submit message
        const submitFormButtonText = 'Submit Form';
        const submitInfoText = 'Click the button above to submit your information.';

        //Verify the submit message
        await expect(submitFormButtonLocator).toContainText(submitFormButtonText);
        await expect(submitInfoLocator).toContainText(submitInfoText);
    });
} );