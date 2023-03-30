import { test, expect } from '@playwright/test';

//serial will run the test by one after one
test.describe.serial('Login attempt with before each', () => {
    //create a common page and using it in all the sub test
    let page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto('https://practice.automationbro.com/my-account/');
        await page.locator('#username').fill('PracticeMan');
        await page.locator('#password').fill('PracticeMan@1234');
        await page.locator('[value="Log in"]').click();
        page.locator(`li a:has-text("Logout")`)
    })
    test('Go to orders page', async () => {
        await page.locator(`li a[href*='orders']`).click()
        await expect(page).toHaveURL(/.*orders/)
    })
    test('Go to downloads page', async () => {
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloads/)
    })
})
