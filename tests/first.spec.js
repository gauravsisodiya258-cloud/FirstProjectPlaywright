import {test,expect} from "@playwright/test";

test("first test case",async({page})=>{

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=815461296140&hvpos=&hvnetw=g&hvrand=43816920959189899&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299648&hvtargid=kwd-64107830&hydadcr=14452_2462829&mcid=e9c68a2d0f333bcaacd29ec00843c329&hvocijid=43816920959189899--&hvexpln=nav&gad_source=1");
    await page.locator("#twotabsearchtextbox").fill("shoes for men sports");
    await page.locator("#nav-search-submit-button").waitFor();
    await page.locator("#nav-search-submit-button").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("#nav-logo-sprites")).toBeVisible();
    await page.getByRole("button",{name: "Add to cart"}).click();

})