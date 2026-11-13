import { test, expect } from '@playwright/test';

test("test",async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await await page.locator(".nw1UBF v1zwn26").click();
    await page.locator(".nw1UBF v1zwn26").fill("spark shoes");
    await page.locator(".nw1UBF v1zwn26").press("Enter");
    await page.getByRole("link", { name:"PUMA Buzz Sneakers" }).nth(1).click();
    await page.getByRole("button",{name:"Add to cart"}).click();
})