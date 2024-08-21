// When created it should generate the HTML for the product and keep it as an attribute called article
class Product {
    article;



    // <----- start editing here ----->

    constructor(productObj) {
        
        // takes in the product object. Link all the properties to attributes of the class
        // To see what the product object looks like, check the products.json file
   
        this.#generateHTML();
    }

    #generateHTML() {
        this.article = document.createElement('article');
        
        
    }

    // <----- end editing here ----->



    // formats price to $ X.XX or $ X.- if no decimal
    formatPrice(price) {
        return `$ ${price % 1 === 0 ? `${this.formatNumber(price)}.-` : this.formatNumber(price)}`;
    }

    // makes sure if number is higher than 1000, it will be formatted with commas
    // e.g. 1000 -> 1,000
    // only god knows what this regex means
    formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}