const minValue = document.querySelector('#min-price');
const maxValue = document.querySelector('#max-price');
const rangeFill = document.querySelector('.range-slider-fill');

const minRange = document.querySelector('#min-range');
const maxRange = document.querySelector('#max-range');

let previousValue = {
    min: minValue.value,
    max: maxValue.value
};

function validateRangeChange() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);

    if ((max - min) < 100) {
        min = previousValue.min;
        max = previousValue.max;

        minRange.value = min;
        maxRange.value = max;
    }

    previousValue.min = minRange.value;
    previousValue.max = maxRange.value;

    console.log(min, max);

    // set slider fill
    const leftPercent = min / 10;
    console.log(leftPercent);
    const rightPercent = max / 10;

    rangeFill.style.left = `${leftPercent}%`;
    rangeFill.style.width = `${rightPercent - leftPercent}%`;

    // set slider values
    minValue.value = '$' + min;
    maxValue.value = '$' + max;
};

const inputs = document.querySelectorAll('.range-slider input');

inputs.forEach(input => input.addEventListener('input', validateRangeChange));