import { test, expect } from "@playwright/test";

test("User should be able to add Sauce Labs Bike Light to cart", async ({ page }) => {

    // 1. Open application
    await page.goto("https://www.saucedemo.com/");

    // 2. Enter username
    await page.locator("#user-name").fill("standard_user");

    // 3. Enter password
    await page.locator("#password").fill("secret_sauce");

    // 4. Click Login
    await page.getByRole("button", { name: "Login" }).click();

    // 5. Verify user is successfully logged in
    await expect(page).toHaveURL(/inventory.html/);

    // 6. Verify Products page is displayed
    await expect(
        page.getByText("Products", { exact: true })
    ).toBeVisible();

    // 7. Select Sauce Labs Bike Light
    await page.getByText("Sauce Labs Bike Light", { exact: true }).click();

    // 8. Verify Add to Cart button is visible
    await expect(
        page.getByRole("button", { name: "Add to cart" })
    ).toBeVisible();

    // 9. Add product to cart
    await page.getByRole("button", { name: "Add to cart" }).click();

    // 10. Verify cart has 1 item
    await expect(
        page.locator(".shopping_cart_badge")
    ).toHaveText("1");
});