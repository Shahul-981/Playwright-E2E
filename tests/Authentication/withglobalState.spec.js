import { test, expect } from '@playwright/test';

test.describe('Log-In with global state', () => {
    test('Go to orders page', async ({page}) => {
        await page.goto('https://practice.automationbro.com/my-account/');
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
        await page.waitForTimeout(5000);
    })
    test('Go to downloads page', async ({page}) => {
        await page.goto('https://practice.automationbro.com/my-account/');
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
})
