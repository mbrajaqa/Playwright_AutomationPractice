import { test, expect } from '@playwright/test';


test.describe('Practicing getByTestId Locator', ()=>{

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


    test('Practicing getByTestId locator in profile card section', async({page})=>{
         
        //Test Ids
        const profileCard_testId = 'user-profile-card';
        const name_testId = 'profile-name';
        const email_testId = 'profile-email';
        const editButton_testId = 'edit-profile-btn';


        //Values for the Elements
        const profileName = 'John Doe';
        const profileEmail = 'john.doe@example.com';
        const editButtonText = 'Edit Profile';


        //Locators
        const getByTestId_section = page.locator('#testid-locators');

        const profileCard_locator = getByTestId_section.getByTestId(profileCard_testId);
        const profileName_locator = profileCard_locator.getByTestId(name_testId);
        const profileEmail_locator = profileCard_locator.getByTestId(email_testId);
        const editButton_locator = profileCard_locator.getByTestId(editButton_testId);


        //Verify the Web Elements
        await expect(profileName_locator).toContainText(profileName);
        await expect(profileEmail_locator).toContainText(profileEmail);
        await expect(editButton_locator).toContainText(editButtonText);


    });

    
    test('Practicing getByTestId locator in products section', async({page})=>{
         
        //Test Ids
        const productGrid_testId = 'product-grid';
        const product1_testId = 'product-card-1';
        const product2_testId = 'product-card-2';
        const product3_testId = 'product-card-3';
        const productName_testId = 'product-name';
        const productPrice_testId = 'product-price';


        //Values for the Elements
        const product1Name = 'Product A';
        const product2Name = 'Product B';
        const product3Name = 'Product C';

        const product1Price = '$19.99';
        const product2Price = '$29.99';
        const product3Price = '$39.99';


        //Locators
        const getByTestId_section = page.locator('#testid-locators');

        const productGrid_locator = getByTestId_section.getByTestId(productGrid_testId);
        const product1_locator = productGrid_locator.getByTestId(product1_testId);
        const product2_locator = productGrid_locator.getByTestId(product2_testId);
        const product3_locator = productGrid_locator.getByTestId(product3_testId);

        const product1Name_locator = product1_locator.getByTestId(productName_testId);
        const product1Price_locator = product1_locator.getByTestId(productPrice_testId);

        const product2Name_locator = product2_locator.getByTestId(productName_testId);
        const product2Price_locator = product2_locator.getByTestId(productPrice_testId);

        const product3Name_locator = product3_locator.getByTestId(productName_testId);
        const product3Price_locator = product3_locator.getByTestId(productPrice_testId);


        //Verify the Web Elements
        await expect(product1Name_locator).toContainText(product1Name);
        await expect(product1Price_locator).toContainText(product1Price);

        await expect(product2Name_locator).toContainText(product2Name);
        await expect(product2Price_locator).toContainText(product2Price);

        await expect(product3Name_locator).toContainText(product3Name);
        await expect(product3Price_locator).toContainText(product3Price);


    });

    
    test('Practicing getByTestId locator in navigation section', async({page})=>{
         
        //Test Ids
        const navigation_testId = 'main-navigation';
        const homeNavigation_testId = 'nav-home';
        const productsNavigation_testId = 'nav-products';
        const contactNavigation_testId = 'nav-contact';


        //Values for the Elements
        const homeNavigation_text = 'Home';
        const productsNavigation_text = 'Products';
        const contactNavigation_text = 'Contact';


        //Locators
        const getByTestId_section = page.locator('#testid-locators');

        const navigation_locator = getByTestId_section.getByTestId(navigation_testId);
        const homeNavigation_locator =  navigation_locator.getByTestId(homeNavigation_testId);
        const productsNavigation_locator = navigation_locator.getByTestId(productsNavigation_testId);
        const contactNavigation_locator = navigation_locator.getByTestId(contactNavigation_testId);

        
        //Verify the Web Elements
        await expect(homeNavigation_locator).toContainText(homeNavigation_text);
        await expect(productsNavigation_locator).toContainText(productsNavigation_text);
        await expect(contactNavigation_locator).toContainText(contactNavigation_text);

    });


});