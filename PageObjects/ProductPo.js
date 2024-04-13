import BasePage from './BasePage';

const Removeutton="//div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item']//div//button[text()='REMOVE']";
const CartIcon="//div[@id='shopping_cart_container']//a";


class ProductPo extends BasePage{
    
       async ClickOnAddToCartButton(productName){
        await this.page.locator(`//div[text()='${productName}']//ancestor::div[@class='inventory_item']//div//button[text()='ADD TO CART']`).click();
    }

    async GetRemoveButtonText(){
        return await this.page.locator(Removeutton).textContent()

    }

    async ClickOnCartIcon(){
        return await this.page.locator(CartIcon).click()

    }
}
export default ProductPo;