import {test,expect} from "@playwright/test";

//test('test', async ({ page }) => {
  //await page.goto('https://www.amazon.in/');
  //await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  //await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('samsung');
  //await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  //const page1Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Galaxy M36 5G Mobile (Velvet' }).click();
  //const page1 = await page1Promise;
  //await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
//});

test("Test", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon").click();

    await page.getByPlaceholder("Search Amazon").fill("samsung");

    await page.getByPlaceholder("Search Amazon").press("Enter");

  

   await page.getByRole("link", { name: /Galaxy S26 Ultra/i }).nth(1).click();
   await page1.getByRole("button", { name: "Add to cart" }).click();
});