// This is the main controller for the products
// it oversees all the other classes and basically controls the products (filtering, sorting, displaying)
class ProductManager {
    

    // <----- start editing here ----->

    constructor() {
        this.productsContainer = document.querySelector('#products-grid');
        this.originalProducts = []; // array of product class instances. Never edit this array

        this.#startUp();
    }

    async #startUp() {

        // <----- don't edit this ----->
        const data = await fetch(`${window.location.origin}/exercise/js/products.json`);
        const productsData = await data.json();
        
        productsData.forEach(product => {
            this.originalProducts.push(new Product(product)); // passed product object to Product class
        });
        // <----- end don't edit this ----->

        
        this.#addEventListeners();
    }

    #addEventListeners() {
        document.querySelector('form').addEventListener('submit', e => e.preventDefault());

        
    }

    #filterProducts() {

        // Put your filter logic here
  
    }

    #displayProducts() {
        
        // add products to this.productsContainer.

    }

    // <----- end editing here ----->


}

const productManager = new ProductManager();