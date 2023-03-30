import { chromium } from '@playwright/test';

async function globalState() {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://practice.automationbro.com/my-account/');
    await page.context().storageState({ path: 'nonloggedin.json' })
    await page.locator('#username').fill('PracticeMan');
    await page.locator('#password').fill('PracticeMan@1234');
    await page.locator('[value="Log in"]').click();

    await page.context().storageState({ path: 'loggedin.json' });
    await browser.close()
}

export default globalState;