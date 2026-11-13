import { test, expect } from "@playwright/test";

test("User should be able to add Sauce Labs Bike Light to cart", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("problem_user");

    await page.locator("#password").fill("secret_sauce");

    await page.getByRole("button", { name: "Login" }).click();

    // Verify URL
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Verify Products page
    await expect(
        page.getByText("Products", { exact: true })
    ).toBeVisible();

    // Select sorting option
    await page.locator('[aria-label="Sort products"]').selectOption("za");
});