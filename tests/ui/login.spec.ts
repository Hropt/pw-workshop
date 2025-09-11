import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../support/page-object-models/saucedemo-login-page';

test.describe('login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
  });
  

  test('as standard user', async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("standard_user")
    await page.getByTestId("password").fill("secret_sauce")
    await page.getByTestId("login-button").click()
    await expect(page.getByTestId("inventory-item-name").first()).toBeVisible()
  });

    test('as standard user using POM', async ({ page }) => {
    const loginPage = new SauceDemoLoginPage(page);
    loginPage.logIn("standard_user", "secret_sauce")
    await expect(page.getByTestId("inventory-item-name").first()).toBeVisible()
  });

  test('log out as standard user', async ({ page, context }) => {
    // Normally this would be set up through APIs
    context.addCookies([{name: "session-username", value: "standard_user", domain: "www.saucedemo.com", path: "/"}])
    await page.goto('https://www.saucedemo.com/inventory.html')
    await expect(page.getByTestId("inventory-item-name").first()).toBeVisible()
    await page.click("#react-burger-menu-btn")
    await page.getByTestId("logout-sidebar-link").click()
    await expect(page.getByTestId("login-button")).toBeVisible()
  });
});