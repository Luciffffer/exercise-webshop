class CheckboxFilter {
    #options;

    constructor(productsKey, checkboxContainer) {
        this.checkboxContainer = checkboxContainer;
        this.#options = new Map();
        this.productsKey = productsKey;
        this.selectedOptions = [];
    }

    updateOptions(products) {
        this.#options.clear();

        products.forEach(product => {
            const productProperty = product[this.productsKey];

            if (productProperty instanceof Array) {
                productProperty.forEach(option => {
                    if (this.#options.has(option)) {
                        this.#options.set(option, this.#options.get(option) + 1);
                    } else {
                        this.#options.set(option, 1);
                    }
                });

                return;
            }

            if (this.#options.has(product[this.productsKey])) {
                this.#options.set(product[this.productsKey], this.#options.get(product[this.productsKey]) + 1);
            } else {
                this.#options.set(product[this.productsKey], 1);
            }  

        });

        this.#options = new Map([...this.#options.entries()].sort());
        this.selectedOptions.filter(option => this.#options.has(option));

        this.#updateHTML();
    }

    #updateHTML() {
        this.checkboxContainer.innerHTML = '';
        this.inputs = [];

        this.#options.forEach((count, option) => {
            const div = document.createElement('div');
            div.classList.add('form-line', 'checkbox');

            // input & label
            const inputDiv = document.createElement('div');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = option;
            input.checked = this.selectedOptions.includes(option);
            input.name = option;
            input.value = option;

            this.inputs.push(input);

            const label = document.createElement('label');
            label.htmlFor = option;
            label.textContent = option.charAt(0).toUpperCase() + option.slice(1);

            inputDiv.appendChild(input);
            inputDiv.appendChild(label);

            div.appendChild(inputDiv);

            // count
            const countSpan = document.createElement('span');
            countSpan.textContent = count;

            div.appendChild(countSpan);

            this.checkboxContainer.appendChild(div);
        });
    }

    generateSelectedOptions() {
        this.selectedOptions = this.inputs.filter(input => input.checked).map(input => input.value);
    }
}