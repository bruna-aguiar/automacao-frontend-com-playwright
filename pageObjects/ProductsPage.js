class ProductsPage {
     
    constructor(page) {
        this.page = page;
        this.productTitle = '.title';
        //this.botaoAdicionarItem = '#add-to-cart-sauce-labs-backpack'; 
        //this.botaoCarrinho = page.locator('role=link[name="link"]')
    }

    async getTitle() {
        return this.page.textContent(this.productTitle);
    }

    async adicionarItemNoCarrinho(){
        // Mapeando o elemento dentro de um método da classe
        const botaoAddItemNoCarrinho = this.page.locator('#add-to-cart-sauce-labs-backpack');
        await botaoAddItemNoCarrinho.click();

    }

    async cliclarNoCarrinho(){
        const botaoCarrinhoDeCompras = this.page.locator('.shopping_cart_link');
        await botaoCarrinhoDeCompras.click();
    }

    async removerItemDoCarrinho(){
        // Mapeando o elemento dentro de um método da classe
        const botaoRemoverItemDoCarrinho = this.page.locator('#remove-sauce-labs-backpack');
        await botaoRemoverItemDoCarrinho.click();

    }

    async ClicarEmContinuarComprando(){
        // Mapeando o elemento dentro de um método da classe
        const botaoContinuarComprando = this.page.locator('#continue-shopping');
        await botaoContinuarComprando.click();

    }

}

    


module.exports = ProductsPage;
