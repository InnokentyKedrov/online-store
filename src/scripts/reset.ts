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

export function resetFilters() {
    const ResetFiltersButton = document.querySelector('.button__filters');
    const AuthorsArray = document.querySelectorAll('.filters-author__item');
    const GenreArray = document.querySelectorAll('.filters-genre__item');
    const CoverArray = document.querySelectorAll('.filters-cover__item');

    ResetFiltersButton?.addEventListener('click', () => {
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

    ButtonAll?.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
        basket();
        rangeInit();
        currentRender();
    });
}
