import BasePage from './BasePage';
const checkoutButton="//a[text()='CHECKOUT']";
const selectedProductName="//div[text()='Sauce Labs Backpack']";




export default class YourCartPo extends BasePage{
    
    async GetSelectedProductVisible(){
        return await this.page.locator(selectedProductName).textContent();
    }


    async ClickOnCheckoutButton(){ 
        await this.page.locator(checkoutButton).click();
    
    }
}
