class ProductManager {
    #originalProducts;

    constructor() {
        this.productsContainer = document.querySelector('#products-grid');
        this.originalProducts = [];

        this.typeFilter = filtersRadio;
        this.sortDropdown = document.querySelector('#sort');
        this.priceSlider = priceSlider;
        this.brandFilter = new CheckboxFilter('brand', document.querySelector('#brand-checkbox-container'));
        this.categoryFilter = new CheckboxFilter('category', document.querySelector('#category-checkbox-container'));

        this.#startUp();
    }

    async #startUp() {
        const data = await fetch(`${window.location.origin}/solution/js/products.json`);
        const productsData = await data.json();
        
        productsData.forEach(product => {
            this.originalProducts.push(new Product(product));
        });

        this.brandFilter.updateOptions(this.originalProducts);
        this.categoryFilter.updateOptions(this.originalProducts);

        this.#filterProducts();
        this.#addEventListeners();

        document.querySelector('#loader').style.display = 'none';
    }

    #addEventListeners() {
        document.querySelector('form').addEventListener('submit', e => e.preventDefault());

        this.typeFilter.filtersList.addEventListener('change', () => this.#filterProducts());
        this.sortDropdown.addEventListener('change', () => this.#sortProductsAndDisplay());
        this.priceSlider.minInput.addEventListener('focusout', () => this.#filterProducts());
        this.priceSlider.maxInput.addEventListener('focusout', () => this.#filterProducts());
        this.priceSlider.minRange.addEventListener('change', () => this.#filterProducts());
        this.priceSlider.maxRange.addEventListener('change', () => this.#filterProducts());
        this.brandFilter.checkboxContainer.addEventListener('change', () => this.#filterProducts());
        this.categoryFilter.checkboxContainer.addEventListener('change', () => this.#filterProducts());
    }

    #filterProducts() {
        this.filteredProducts = this.originalProducts;

        if (this.typeFilter.checkedValue.toLowerCase() !== 'all') {
            const type = this.typeFilter.checkedValue;
            this.filteredProducts = this.filteredProducts.filter(product => product.type.toLowerCase() === type);
        }

        const { min, max } = this.priceSlider.values;

        if (min !== 0 || max !== 1000) {
            this.filteredProducts = this.filteredProducts.filter(product => {
                const price = product.discountedPrice ? product.discountedPrice : product.price;
                return price >= min && price <= max;
            });
        }

        this.brandFilter.generateSelectedOptions();
        this.brandFilter.updateOptions(this.filteredProducts);

        if (this.brandFilter.selectedOptions.length > 0) {
            this.filteredProducts = this.filteredProducts.filter(product => this.brandFilter.selectedOptions.includes(product.brand));
        }

        this.categoryFilter.generateSelectedOptions();
        this.categoryFilter.updateOptions(this.filteredProducts);

        if (this.categoryFilter.selectedOptions.length > 0) {
            this.filteredProducts = this.filteredProducts.filter(product => {
                for (const category of product.category) {
                    if (this.categoryFilter.selectedOptions.includes(category)) {
                        return true;
                    }
                }
            });
        }

        this.#sortProductsAndDisplay();
    }

    #sortProductsAndDisplay() {
        const sortValue = this.sortDropdown.value;

        switch (sortValue) {
            case 'popular':
                this.filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
                break;
            case 'price':
                this.filteredProducts.sort((a, b) => (b.discountedPrice ? b.discountedPrice : b.price) - (a.discountedPrice ? a.discountedPrice : a.price));
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        this.#displayProducts();
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