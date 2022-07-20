import { Ibook } from './books';
import { currentRender } from './filtering';

const BOOKS = require('../assets/books.json');

export function sort() {
    document.addEventListener('DOMContentLoaded', () => {
        const currentSort = localStorage.getItem('sortValue');
        if (currentSort !== null) {
            const option = document.getElementById(currentSort) as HTMLOptionElement;
            option.selected = true;
        }
    });
    let sortValue;
    if (localStorage.getItem('sortValue') === null) {
        sortValue = 'alphabetAZ';
    } else {
        sortValue = localStorage.getItem('sortValue');
    }

    (document.getElementById('sort') as HTMLSelectElement).addEventListener('change', function () {
        sortValue = this.value;
        localStorage.setItem('sortValue', sortValue);
        currentRender();
    });
}

export function sorting() {
    const Select = document.getElementById('sort') as HTMLSelectElement;

    let sortValue;
    if (localStorage.getItem('sortValue') === null) {
        sortValue = 'alphabetAZ';
        if (Select) {
            Select.value = 'alphabetAZ';
        }
    } else {
        sortValue = localStorage.getItem('sortValue');
    }

    if (sortValue === 'alphabetAZ') {
        BOOKS.sort((prev: Ibook, next: Ibook) => {
            if (prev.title > next.title) return 1;
            if (prev.title < next.title) return -1;
        });
    }

    if (sortValue === 'alphabetZA') {
        BOOKS.sort((prev: Ibook, next: Ibook) => {
            if (prev.title < next.title) return 1;
            if (prev.title > next.title) return -1;
        });
    }

    if (sortValue === 'yearUp') {
        BOOKS.sort((prev: Ibook, next: Ibook) => Number(prev.year) - Number(next.year));
    }

    if (sortValue === 'yearDown') {
        BOOKS.sort((prev: Ibook, next: Ibook) => Number(next.year) - Number(prev.year));
    }

    return BOOKS;
}
