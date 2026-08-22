import {test, expect} from '@playwright/test';
import { link } from 'node:fs';

test.describe('Practicing getByRole Locator', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        
    });

    test.afterEach(async({page})=>{
        await page.close();
    });

    test('Verify the Primary Button', async({page})=>{
        await expect(page.getByRole('button',{name:'Primary Action'})).toBeVisible();
        expect(await page.getByRole('button',{name:'Primary Action'}).textContent()).toEqual('Primary Action');
    });
    
    test('Verify the Toggle Button', async({page})=>{
        await expect(page.getByRole('button',{name:'Toggle Button'})).toBeVisible();
        expect(await page.getByRole('button',{name:'Toggle Button'}).textContent()).toEqual('Toggle Button');
    });

    test('Verify the Div with button role', async({page})=>{
        await expect(page.getByRole('button',{name:'Div with button role'})).toBeVisible();
        expect(await page.getByRole('button',{name:'Div with button role'}).textContent()).toEqual('Div with button role');
    });

    test('Verify the username textbox',async({page})=>{
        await expect(page.getByRole('textbox', {name: 'Username'})).toBeVisible();
        await page.getByRole('textbox', {name: 'Username'}).fill('Manobharathiraja M');
        await expect(page.getByRole('textbox', {name: 'Username'})).toHaveValue('Manobharathiraja M');
        
    });

    test('Verify the checkbox', async({page})=>{
        await expect(page.getByRole('checkbox',{name:' Accept terms'})).toBeVisible();
        expect(await page.getByRole('checkbox',{name:'  Accept terms'}).isChecked()).toBeFalsy();
        await page.getByRole('checkbox',{name:'  Accept terms'}).check();
        expect(await page.getByRole('checkbox',{name:'  Accept terms'}).isChecked()).toBeTruthy();
    });

    test('Verify the Navigation', async({page})=>{
        expect(await page.locator('#role-locators').getByRole('link', { name: 'Home' }).textContent()).toEqual('Home');
        expect(await page.locator('#role-locators').getByRole('link', { name: 'Products' }).textContent()).toEqual('Products');
        expect(await page.locator('#role-locators').getByRole('link', { name: 'Contact' }).textContent()).toEqual('Contact');
    });
});