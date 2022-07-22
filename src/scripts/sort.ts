import { Ibook } from './books';
import { currentRender } from './filtering';

const Books = require('../assets/books.json');

export function sort() {
    document.addEventListener('DOMContentLoaded', () => {
        const CurrentSort = localStorage.getItem('sortValue');
        if (CurrentSort !== null) {
            const Option = document.getElementById(CurrentSort) as HTMLOptionElement;
            Option.selected = true;
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
        Books.sort((prev: Ibook, next: Ibook) => {
            if (prev.title > next.title) return 1;
            if (prev.title < next.title) return -1;
        });
    }

    if (sortValue === 'alphabetZA') {
        Books.sort((prev: Ibook, next: Ibook) => {
            if (prev.title < next.title) return 1;
            if (prev.title > next.title) return -1;
        });
    }

    if (sortValue === 'yearUp') {
        Books.sort((prev: Ibook, next: Ibook) => Number(prev.year) - Number(next.year));
    }

    if (sortValue === 'yearDown') {
        Books.sort((prev: Ibook, next: Ibook) => Number(next.year) - Number(prev.year));
    }

    return Books;
}
