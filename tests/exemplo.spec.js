const { test, expect } = require('@playwright/test');

test('Exemplo de teste simples', async ({ page }) => {
    // A palavra-chave await é usada para aguardar que a navegação seja concluída antes de prosseguir com a execução do código.
    await page.goto('https://playwright.dev/');
    const title = await page.title();
    // Verifica se o título contém a palavra 'Playwright'
    expect(title).toContain('Playwright');
});
