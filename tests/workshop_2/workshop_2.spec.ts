import {test, expect} from '@playwright/test'

test('Automation form submission', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    const newToDo = await page.getByPlaceholder('What needs to be done?')
    await newToDo.fill('John Doe');
    await newToDo.press('Enter');
    await newToDo.fill('JJJ Doe');
    await newToDo.press('Enter');

    await page.waitForTimeout(3000);

    const firstTodo = page.getByTestId('todo-item').nth(0)
    await firstTodo.getByRole('checkbox').check();
    await page.waitForTimeout(3000);

    await expect(firstTodo).toHaveClass('completed');

})

test.only('Handling Form', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder, 'Joohn Doe');
    await page.locator(placeholder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();

    await page.waitForTimeout(3000);


})