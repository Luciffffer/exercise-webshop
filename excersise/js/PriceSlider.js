class PriceSlider {
    constructor(minInput, maxInput, rangeFill, minRange, maxRange) {
        this.minInput = minInput;
        this.maxInput = maxInput;
        this.rangeFill = rangeFill;
        this.minRange = minRange;
        this.maxRange = maxRange;

        this.previousValue = {
            min: this.minInput.value,
            max: this.maxInput.value
        };

        this.validateInputChange();
        this.#addEventListeners();
    }

    get values() {
        return {
            min: parseInt(this.minRange.value),
            max: parseInt(this.maxRange.value)
        };
    }

    validateInputChange() {
        let min = parseInt(this.minInput.value.slice(1));
        let max = parseInt(this.maxInput.value.slice(1));

        if (min < 0) {
            min = 0;
            this.minInput.value = '$0';
        }

        if (max > 1000) {
            max = 1000;
            this.maxInput.value = '$1000';
        }

        if ((max - min) < 100) {
            min = this.previousValue.min;
            max = this.previousValue.max;

            this.minInput.value = '$' + min;
            this.maxInput.value = '$' + max;
        }

        this.previousValue.min = min;
        this.previousValue.max = max;

        this.#setSliderFill(min, max);

        // set slider balls
        this.minRange.value = min;
        this.maxRange.value = max;
    }

    #setSliderFill(min, max) {
        const leftPercent = min / 10;
        const rightPercent = max / 10;

        this.rangeFill.style.left = `${leftPercent}%`;
        this.rangeFill.style.width = `${rightPercent - leftPercent}%`;
    }

    #addEventListeners() {
        this.minInput.addEventListener('focusout', () => this.validateInputChange());
        this.maxInput.addEventListener('focusout', () => this.validateInputChange());

        this.minRange.addEventListener('input', () => this.validateRangeChange());
        this.maxRange.addEventListener('input', () => this.validateRangeChange());
    }

    validateRangeChange() {
        let min = parseInt(this.minRange.value);
        let max = parseInt(this.maxRange.value);

        if ((max - min) < 100) {
            min = this.previousValue.min;
            max = this.previousValue.max;

            this.minRange.value = min;
            this.maxRange.value = max;
        }

        this.previousValue.min = this.minRange.value;
        this.previousValue.max = this.maxRange.value;

        this.#setSliderFill(min, max);

        // set slider values
        this.minInput.value = '$' + min;
        this.maxInput.value = '$' + max;
    }
}


const minValue = document.querySelector('#min-price');
const maxValue = document.querySelector('#max-price');
const rangeFill = document.querySelector('.range-slider-fill');
const minRange = document.querySelector('#min-range');
const maxRange = document.querySelector('#max-range');

const priceSlider = new PriceSlider(minValue, maxValue, rangeFill, minRange, maxRange);