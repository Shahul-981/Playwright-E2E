import { test, expect } from '@playwright/test';
const path = require('path');
import CartPage from '../PageObjectModel/cart.page';

test.describe('Go to cart and upload file', () => {
    let getPage;
    test.beforeEach(async ({ page }) => {
        getPage = new CartPage(page);
        await getPage.navToHome()
    })
    test('Go to cart page from home page', async ({ page }) => {
        await getPage.cartImage.click()
        //go to cart page
        await expect(getPage.Page).toHaveURL('https://practice.automationbro.com/cart/');
        await getPage.Page.waitForLoadState('networkidle');
        //get image path
        const filePath = path.join(__dirname, '../Data/sample.pdf');
        //upload file
        await getPage.uploadFile(filePath)
        // //getSucces text
        await getPage.successDiv.waitFor();
        expect(await getPage.successDiv.textContent()).toContain('uploaded successfully');
    })

});