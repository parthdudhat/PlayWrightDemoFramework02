import BasePage from './BasePage';
import UserInfoFactory from '../Datafactory/UserInfoFactory';

const firstNameTextox="#first-name"
const lastNameTextBox="#last-name"
const zipCodeTextBox="#postal-code"
const continueButton="//input[@value='CONTINUE']"


export default class UserInfoPo extends BasePage{
    
    async FillUserInfoDetails(){ 
        var userInfo = UserInfoFactory.fillUserInfoData();
        await this.page.locator(firstNameTextox).fill(userInfo.firstName)
        await this.page.locator(lastNameTextBox).fill(userInfo.lastName),
        await this.page.locator(zipCodeTextBox).fill(userInfo.zipCode)
    
    }

    async ClickOnContinueButton(){ 
        await this.page.locator(continueButton).click();
    
    }
}
