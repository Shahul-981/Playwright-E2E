import { test, expect } from '@playwright/test';

test.describe('Go to Blog page and check Recent posts', () => {
    test('Click blog link and go to blog page', async ({ page }) => {
        await page.goto('https://practice.automationbro.com');
        const BlogLink = page.locator('#primary-menu li[id*=menu-item-]').nth(3);
        expect(await BlogLink.textContent()).toEqual('Blog');
        await BlogLink.click();
        await expect(page).toHaveURL('https://practice.automationbro.com/blog/');
        const RecentPostsLiLength = await page.locator('#recent-posts-3 ul li').count();
        expect(RecentPostsLiLength).toBe(5);
        const RecentPostsFirstRow = await page.locator('#recent-posts-3 ul li a').nth(0).textContent();
        expect(RecentPostsFirstRow.length).toBeGreaterThan(10);
        const RecentPostsSecondRow = await page.locator('#recent-posts-3 ul li a').nth(1).textContent();
        expect(RecentPostsSecondRow.length).toBeGreaterThan(10);
        const RecentPostsThirdRow = await page.locator('#recent-posts-3 ul li a').nth(2).textContent();
        expect(RecentPostsThirdRow.length).toBeGreaterThan(10);
        const RecentPostsFourthRow = await page.locator('#recent-posts-3 ul li a').nth(3).textContent();
        expect(RecentPostsFourthRow.length).toBeGreaterThan(10);
        const RecentPostsFifthRow = await page.locator('#recent-posts-3 ul li a').nth(4).textContent();
        expect(RecentPostsFifthRow.length).toBeGreaterThan(10);
    });
});