import { test, expect } from '@playwright/test';

test.describe('Go to contact page and fill the form and submit it', () => {
    test('Click contact-link and go to contact page', async ({ page }) => {
        await page.goto('https://practice.automationbro.com');
        const contactLink = page.locator('#primary-menu li[id*=menu-item-]').nth(4);
        expect(await contactLink.textContent()).toEqual('Contact');
        await contactLink.click();
        await expect(page).toHaveURL('https://practice.automationbro.com/contact/');
        //finding labels in form contact screen
        const formsLablels = page.locator('//*[@class="everest-form"]//*[@class="evf-field-container"]//*[@class="evf-frontend-row"]//*[@class="evf-frontend-grid evf-grid-1"]//*[@class="evf-label"]');
        expect(await formsLablels.nth(0).textContent()).toEqual('Name');
        expect(await formsLablels.nth(1).textContent()).toEqual('Email');
        expect(await formsLablels.nth(2).textContent()).toEqual('Phone');
        expect(await formsLablels.nth(3).textContent()).toEqual('Message');
        await page.locator('.contact-name input').fill('Shahul Hameed');
        await page.locator('.contact-email input').fill('afridi@mailinator.com');
        await page.locator('.contact-phone input').fill('9678987656');
        await page.locator('.contact-message textarea').fill('Not able place an order');
        await page.locator('.everest-forms-submit-button').click();
        console.log('gettext', await page.locator('.everest-forms-submission-scroll').textContent())
        const successMessage = page.locator('.everest-forms-submission-scroll');
        await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});