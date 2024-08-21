class FiltersRadio {
    constructor(rightButton, leftButton, filtersList, filtersParent) {
        this.rightButton = rightButton;
        this.leftButton = leftButton;
        this.filtersList = filtersList;
        this.filtersParent = filtersParent;

        this.addScroll();
    }

    addScroll() {
        this.rightButton.addEventListener('click', () => {
            const currentPos = parseFloat(this.filtersList.style.transform.match(/-?\d+/)) || 0;
            let newPos = currentPos - this.filtersParent.offsetWidth * 0.8;

            // limit newPos
            if (this.filtersList.offsetWidth + newPos < this.filtersParent.offsetWidth) {
                newPos = this.filtersParent.offsetWidth - this.filtersList.offsetWidth;
            }

            this.filtersList.style.transform = `translateX(${newPos}px`;

            this.#setScrollButtonDisplay(newPos);
        });

        this.leftButton.addEventListener('click', () => {
            const currentPos = parseFloat(this.filtersList.style.transform.match(/-?\d+/)) || 0;
            let newPos = currentPos + this.filtersParent.offsetWidth * 0.8;

            // limit newPos
            if (newPos > 0) {
                newPos = 0;
            }

            this.filtersList.style.transform = `translateX(${newPos}px`;

            this.#setScrollButtonDisplay(newPos);
        });
    }

    #setScrollButtonDisplay(currentPos) {
        if (currentPos < 0) {
            this.leftButton.style.display = 'flex';
        } else {
            this.leftButton.style.display = 'none';
        }

        if (this.filtersList.offsetWidth + currentPos > this.filtersParent.offsetWidth) {
            this.rightButton.style.display = 'flex';
        } else {
            this.rightButton.style.display = 'none';
        }
    }

    get checkedValue() {
        return this.filtersList.querySelector('input:checked').labels[0].textContent.toLowerCase();
    }
}

const rightButton = document.querySelector('.more-filters-right');
const leftButton = document.querySelector('.more-filters-left');
const filtersList = document.querySelector('.filters-absolute');
const filtersParent = document.querySelector('.filters');

const filtersRadio = new FiltersRadio(rightButton, leftButton, filtersList, filtersParent);
