class PriceSlider {
    
    // Most difficult challenge.
    // Make the visuals work and make it functional.
    // It's fun but maybe a little hard.
    
    // You can skip it if you want.

}


const minValue = document.querySelector('#min-price');
const maxValue = document.querySelector('#max-price');
const rangeFill = document.querySelector('.range-slider-fill');
const minRange = document.querySelector('#min-range');
const maxRange = document.querySelector('#max-range');

const priceSlider = new PriceSlider(minValue, maxValue, rangeFill, minRange, maxRange);