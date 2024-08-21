class Product {
    constructor(productObj) {
        this.id = productObj.id;
        this.name = productObj.name;
        this.type = productObj.type;
        this.brand = productObj.brand;
        this.category = productObj.category;
        this.picture = productObj.picture;
        this.reviewCount = productObj.reviewCount;
        this.rating = productObj.rating;
        this.price = productObj.price;
        this.discountedPrice = productObj.discountedPrice;
   
        this.#generateHTML();
    }

    #generateHTML() {
        this.article = document.createElement('article');
        
        // product image

        const productImage = document.createElement('figure');
        productImage.classList.add('product-image');
        productImage.style.backgroundImage = `url(${this.picture})`;
        this.article.appendChild(productImage);

        // product title

        const title = document.createElement('h3');
        title.textContent = this.name;
        this.article.appendChild(title);

        // product rating

        const rating = document.createElement('div');
        rating.classList.add('rating');
        
        // rating stars
        const stars = document.createElement('figure');
        stars.classList.add('stars');
        stars.ariaLabel = `${this.rating}/5 stars`;

        const starsOverlay = document.createElement('div');
        starsOverlay.style.width = `${this.rating * 20}%`;
        stars.appendChild(starsOverlay);

        rating.appendChild(stars);
        
        // review count
        const reviewCount = document.createElement('span');
        reviewCount.textContent = `${this.formatNumber(this.reviewCount)} ${this.reviews === 1 ? 'review' : 'reviews'}`;

        rating.appendChild(reviewCount);

        this.article.appendChild(rating);

        // bottom info

        const bottomInfo = document.createElement('div');
        bottomInfo.classList.add('bottom-info');

        // bottom info left
        const bottomInfoLeft = document.createElement('div');
        bottomInfoLeft.classList.add('bottom-info-left');

        // price
        const price = document.createElement('div');
        price.classList.add('price');

        const finalPrice = document.createElement('span');
        finalPrice.classList.add('current-price');

        if (this.discountedPrice) {
            const discountedPrice = document.createElement('span');
            discountedPrice.classList.add('old-price');
            discountedPrice.textContent = this.formatPrice(this.price);

            finalPrice.textContent = this.formatPrice(this.discountedPrice);

            price.appendChild(discountedPrice);
        } else {
            finalPrice.textContent = this.formatPrice(this.price);
        }

        price.appendChild(finalPrice);

        bottomInfoLeft.appendChild(price);

        // delivery info
        const deliveryInfo = document.createElement('div');
        deliveryInfo.classList.add('delivery-info');

        const deliveryIcon = document.createElement('figure');
        deliveryInfo.appendChild(deliveryIcon);

        const deliveryText = document.createElement('span');
        deliveryText.textContent = 'Delivered tomorrow';
        deliveryInfo.appendChild(deliveryText);

        bottomInfoLeft.appendChild(deliveryInfo);

        bottomInfo.appendChild(bottomInfoLeft);

        // buy button
        const buyButton = document.createElement('button');

        const buyIcon = document.createElement('img');
        buyIcon.src = 'images/shopping-cart.svg';
        buyIcon.alt = 'Add to cart';
        buyButton.appendChild(buyIcon);

        bottomInfo.appendChild(buyButton);

        this.article.appendChild(bottomInfo);
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