import {test} from 'playwright/test';

test('Basic Navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

test('Interacting with web element on GitLab', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.locator('').getByRole('link', {name: 'Get free trial'}).click();
})


test('Use different locator methods', async ({page})=>{
    await page.goto('https://gitlab.com/');

    //await page.click('[data-nav="logo"]')
    await page.click(':has-text("Sign in")')
})