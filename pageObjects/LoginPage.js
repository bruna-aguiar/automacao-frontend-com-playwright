class LoginPage {
    
    

    constructor(page) {
        this.page = page;
        this.userField = '#user-name';
        this.passField = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '.error-message-container';
        
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.userField, username);
        await this.page.fill(this.passField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return this.page.textContent(this.errorMessage);
    }

    
}

module.exports = LoginPage;

