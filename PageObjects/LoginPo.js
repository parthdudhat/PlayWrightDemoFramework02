import BasePage from './BasePage';
const UserNameTextBox="#user-name"
const PasswordTextBox='#password';
const SubmitButton="//input[@type='submit']";


class LoginPO extends BasePage{
    
    async LoginToSite(login){
        await this.page.locator(UserNameTextBox).fill(login.email);
        await this.page.locator(PasswordTextBox).fill(login.password);
        await this.page.locator(SubmitButton).click();
    }
}
export default LoginPO;