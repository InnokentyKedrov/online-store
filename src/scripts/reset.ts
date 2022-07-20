// import { basket } from './basket';
import { basket } from './basket';
import { currentRender } from './filtering';
import { rangeInit } from './nouisliderinit';
import { currentSearchClear } from './search';

function resetActive(array: NodeListOf<Element>) {
    array.forEach(function (el) {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
}

function resetBest() {
    document.getElementById('best')?.classList.remove('checked');
}

// function resetBasket() {
//     const Buttons = document.querySelectorAll('.books__item_button');
//     for (let i = 0; i < Buttons.length; i++) {
//         if (Buttons[i].classList.contains('active')) {
//             Buttons[i].classList.remove('active');
//         }
//     }
// }

// function resetBasketCount() {
//     const Basket = document.getElementById('basket') as HTMLElement;
//     Basket.dataset.after = '0';
// }

// function resetSearch() {
//     const Search = document.getElementById('search') as HTMLInputElement;
//     Search.value = '';
// }

export function resetFilters() {
    const resetFiltersButton = document.querySelector('.button__filters');
    const AuthorsArray = document.querySelectorAll('.filters-author__item');
    const GenreArray = document.querySelectorAll('.filters-genre__item');
    const CoverArray = document.querySelectorAll('.filters-cover__item');

    resetFiltersButton?.addEventListener('click', () => {
        localStorage.removeItem('author');
        localStorage.removeItem('genre');
        localStorage.removeItem('cover');
        localStorage.removeItem('quantityMin');
        localStorage.removeItem('quantityMax');
        localStorage.removeItem('yearMin');
        localStorage.removeItem('yearMax');
        localStorage.removeItem('best');
        localStorage.removeItem('searchArray');

        resetActive(AuthorsArray);
        resetActive(GenreArray);
        resetActive(CoverArray);
        resetBest();
        currentSearchClear();

        rangeInit();
        currentRender();
    });
}

export function resetAll() {
    const ButtonAll = document.querySelector('.button__sort');
    // const AuthorsArray = document.querySelectorAll('.filters-author__item');
    // const GenreArray = document.querySelectorAll('.filters-genre__item');
    // const CoverArray = document.querySelectorAll('.filters-cover__item');

    ButtonAll?.addEventListener('click', () => {
        localStorage.clear();
        // resetActive(AuthorsArray);
        // resetActive(GenreArray);
        // resetActive(CoverArray);
        // resetBest();
        // resetBasket();
        // resetSearch();
        // resetBasketCount();
        // currentSearchClear();
        location.reload();
        basket();
        rangeInit();
        currentRender();
    });
}
