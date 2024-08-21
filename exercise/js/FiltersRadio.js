class FiltersRadio {
    constructor(rightButton, leftButton, filtersList, filtersParent) {
        this.rightButton = rightButton;
        this.leftButton = leftButton;
        this.filtersList = filtersList;
        this.filtersParent = filtersParent;

        this.#addScroll();
    }

    // <---- start editing here ---->

    #addScroll() {
        
        // use event listeners to add scroll functionality with the right and left buttons

    }

    #setScrollButtonDisplay(currentPos) {
        
        // based on the current position of the filters list, show or hide the right and left buttons
        // hint: display is either 'flex' or 'none'

    }

    get checkedValue() {
        
        // return the value of the checked radio button
        // hint: every input element has a .labels property that contains the labels linked to the input element. this is handy for getting the text of the label

    }

    // <---- end editing here ---->
}

const rightButton = document.querySelector('.more-filters-right');
const leftButton = document.querySelector('.more-filters-left');
const filtersList = document.querySelector('.filters-absolute');
const filtersParent = document.querySelector('.filters');

const filtersRadio = new FiltersRadio(rightButton, leftButton, filtersList, filtersParent);
