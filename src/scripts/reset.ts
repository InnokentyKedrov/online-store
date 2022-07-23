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
    const ResetFiltersButton = document.querySelector('.button__filters') as HTMLButtonElement;
    const AuthorsArray = document.querySelectorAll('.filters-author__item') as NodeListOf<Element>;
    const GenreArray = document.querySelectorAll('.filters-genre__item') as NodeListOf<Element>;
    const CoverArray = document.querySelectorAll('.filters-cover__item') as NodeListOf<Element>;

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
    const ButtonAll = document.querySelector('.button__sort') as HTMLButtonElement;

    ButtonAll?.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
        basket();
        rangeInit();
        currentRender();
    });
}
