// This is the main controller for the products
// it oversees all the other classes and basically controls the products (filtering, sorting, displaying)
class ProductManager {
    

    // You might need to add some things here
    constructor() {
        this.productsContainer = document.querySelector('#products-grid');
        this.originalProducts = [];

        this.#startUp();
    }


    // You might need to add some things here
    async #startUp() {

        // This fetches the products from the JSON file. Don't touch
        const data = await fetch(`${window.location.origin}/excersise/js/products.json`);
        const productsData = await data.json();
        
        productsData.forEach(product => {
            // we create a new product object and push it to the originalProducts array
            // note that we pass the product object to the Product class
            this.originalProducts.push(new Product(product));
        });

        this.#filterProducts();
        this.#addEventListeners();

        document.querySelector('#loader').style.display = 'none';
    }

    #addEventListeners() {
        document.querySelector('form').addEventListener('submit', e => e.preventDefault());

        
    }

    #filterProducts() {
        // Put your filter logic here
    }

    #displayProducts() {
        this.productsContainer.innerHTML = '';

        this.filteredProducts.forEach(product => {
            this.productsContainer.appendChild(product.article);
        });

        document.querySelector('#product-count').textContent = this.filteredProducts.length;
    }
}

const productManager = new ProductManager();