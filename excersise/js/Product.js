class Product {
    constructor(productObj) {
        
   
        this.#generateHTML();
    }

    #generateHTML() {
        this.article = document.createElement('article');
        
        
    }

    // formats price to $ X.XX or $ X.- if no decimal
    formatPrice(price) {
        return `$ ${price % 1 === 0 ? `${this.formatNumber(price)}.-` : this.formatNumber(price)}`;
    }

    // makes sure if number is higher than 1000, it will be formatted with commas
    // only god knows what this regex means
    formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}