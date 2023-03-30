import { test, expect } from '@playwright/test';

test.describe('Login attempt with before each', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.automationbro.com/my-account/');
        await page.locator('#username').fill('PracticeMan');
        await page.locator('#password').fill('PracticeMan@1234');
        await page.locator('[value="Log in"]').click();
        page.locator(`li a:has-text("Logout")`)
    })
    test('Go to orders page', async ({ page }) => {
        await page.locator(`li a[href*='orders']`).click()
        await expect(page).toHaveURL(/.*orders/)
    })
    test('Go to downloads page', async ({ page }) => {
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloads/)
    })
});
