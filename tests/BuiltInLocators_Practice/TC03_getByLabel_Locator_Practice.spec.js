import { test, expect } from '@playwright/test';

test.describe('Practicing getByLabel Locator', ()=>{

  test.beforeEach(async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
  });

  test.afterEach(async({page})=>{
    await page.close();
  });

  test('Fill the form', async({page})=>{
    //Get by Label Section locator
    const getByLabelSection = page.locator('#label-locators');

    //Locators for email address, password, age, standard shipping method and express shipping method
    const emailAddressLocator = getByLabelSection.getByLabel('Email Address:');
    const passwordLocator = getByLabelSection.getByLabel('Password:');
    const ageLocator = getByLabelSection.getByLabel('Your Age:');
    const standardLocator = getByLabelSection.getByLabel('Standard');
    const expressLocator = getByLabelSection.getByLabel('Express');


    //Fill the email, password, age
    await emailAddressLocator.fill('Mano');
    await passwordLocator.fill('mano$20M');
    await ageLocator.fill('27');

    //Verify that both shipping method are unchecked
    expect(await standardLocator.isChecked()).toBeFalsy();
    expect(await expressLocator.isChecked()).toBeFalsy();

    //Select standard shipping method
    await standardLocator.check();

    //Verify standard shipping menthod is checked and express shipping method is unchecked
    expect(await standardLocator.isChecked()).toBeTruthy();
    expect(await expressLocator.isChecked()).toBeFalsy();

    //Select express shipping method
    await expressLocator.click();

    //Verify standard shipping menthod is unchecked and express shipping method is checked
    expect(await standardLocator.isChecked()).toBeFalsy();
    expect(await expressLocator.isChecked()).toBeTruthy();

  });
})