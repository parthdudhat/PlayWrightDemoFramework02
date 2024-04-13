const { test, expect } = require('@playwright/test');

import LoginPage from '../PageObjects/LoginPo';
import ProductPage from '../PageObjects/ProductPo';
import UserInfoPage from '../PageObjects/UserInfoPo';
import YourCartPage from '../PageObjects/YourCartPo';
import LoginFactory from '../Datafactory/LoginFactory';

test('Login test', async ({ page }) => {
  const loginData = LoginFactory.fillLoginData()
  var loginPage=new LoginPage(page);
  var productPage=new ProductPage(page);
  var userInfoPage=new UserInfoPage(page);
  var yourCartPage=new YourCartPage(page);

  await page.goto('https://www.saucedemo.com/v1/index.html');
  await loginPage.LoginToSite(loginData);

  await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');  

  await productPage.ClickOnAddToCartButton("Sauce Labs Backpack");
  expect(await productPage.GetRemoveButtonText()).toBe("REMOVE");

  await productPage.ClickOnCartIcon();
  expect(await yourCartPage.GetSelectedProductVisible("Sauce Labs Backpack")).toBe("Sauce Labs Backpack");
  await yourCartPage.ClickOnCheckoutButton();

  await userInfoPage.FillUserInfoDetails();
  await userInfoPage.ClickOnContinueButton();

  await expect(page).toHaveURL('https://www.saucedemo.com/v1/checkout-step-two.html'); 


  // var store=await dashboardPage.GetDashboardData();
  // console.log(store.taskList)

  // expect(store.taskList).toContain("Task List123")

 
});

