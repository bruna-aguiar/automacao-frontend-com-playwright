class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productTitle = '.title';
    }

    async getTitle() {
        return this.page.textContent(this.productTitle);
    }
}

module.exports = ProductsPage;
