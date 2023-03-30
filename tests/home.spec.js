import { test, expect } from '@playwright/test';
import HomePage from '../PageObjectModel/home.page';

test.describe('Check Page', () => {
    let getPage;
    test.beforeEach(async ({ page }) => {
        getPage = new HomePage(page);
        await getPage.navToHome()
    })
    test('Checking the about page', async ({ page }) => {
        getPage = new HomePage(page);
        await getPage.navToAbout()
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    });
    test('Clicking get started', async ({ page }) => {
        await getPage.getStarted.click();
        await expect(getPage.page).toHaveURL(/.*#get-started/);
    })
    test('Checking all elements', async ({ page }) => {
        const allLiElements = getPage.allPrimaryList;
        console.log('allLiElements', await allLiElements.allTextContents());
    })
});



