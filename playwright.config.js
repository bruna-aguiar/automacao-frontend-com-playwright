module.exports = {
    use: {
        headless: false, // Rodar os testes sem interface gráfica
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://www.seusite.com',
    },
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'always' }]
    ]
};


