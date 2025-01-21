const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const ProductsPage = require('../pageObjects/ProductsPage');

test('Login com usuário válido', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Espera o redirecionamento para a página de produtos
    expect(await productsPage.getTitle()).toBe('Products');
});
