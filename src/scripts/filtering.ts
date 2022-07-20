import { activeBasket } from './basket';
import { renderBook } from './books';
import { checkQuantity, checkYear } from './nouisliderinit';
import { currentSearch } from './search';
import { sorting } from './sort';

function removeBooks() {
    const BooksArray = document.querySelectorAll('.books__item');
    for (let i = 0; i < BooksArray.length; i++) {
        BooksArray[i].remove();
    }
}

function removeEmptyItem() {
    const emptyItem = document.querySelector('.books__item_empty');
    if (emptyItem) {
        emptyItem.remove();
    }
}

export function currentRender() {
    removeBooks();
    removeEmptyItem();
    const BOOKS = sorting();
    let searchArray;
    if (localStorage.getItem('searchArray') === null) {
        searchArray = [];
    } else {
        searchArray = JSON.parse(localStorage.getItem('searchArray') || '[]');
    }
    const [quantityMin, quantityMax] = checkQuantity();
    const [yearMin, yearMax] = checkYear();

    if (localStorage.getItem('best') === null) {
        for (let i = 0; i < BOOKS.length; i++) {
            if (
                (localStorage.getItem('author')?.includes(BOOKS[i].author) ||
                    localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(BOOKS[i].genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(BOOKS[i].cover) || localStorage.getItem('cover') === null) &&
                // (localStorage.getItem('searchArray')?.includes(BOOKS[i].title) ||
                //     localStorage.getItem('searchArray') === null) &&
                BOOKS[i].quantity <= quantityMax &&
                BOOKS[i].quantity >= quantityMin &&
                BOOKS[i].year <= yearMax &&
                BOOKS[i].year >= yearMin &&
                searchArray.includes(BOOKS[i].title)
            ) {
                renderBook(i);
            }
        }
    } else {
        for (let i = 0; i < BOOKS.length; i++) {
            if (
                (localStorage.getItem('author')?.includes(BOOKS[i].author) ||
                    localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(BOOKS[i].genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(BOOKS[i].cover) || localStorage.getItem('cover') === null) &&
                // (localStorage.getItem('searchArray')?.includes(BOOKS[i].title) ||
                //     localStorage.getItem('searchArray') === null) &&
                BOOKS[i].bestseller === 'true' &&
                BOOKS[i].quantity <= quantityMax &&
                BOOKS[i].quantity >= quantityMin &&
                BOOKS[i].year <= yearMax &&
                BOOKS[i].year >= yearMin &&
                searchArray.includes(BOOKS[i].title)
            ) {
                renderBook(i);
            }
        }
    }

    if (document.querySelectorAll('.books__item')[0] === undefined) {
        const emptyItem = document.createElement('li');
        emptyItem.classList.add('books__item_empty');
        emptyItem.innerHTML = `<p>Sorry, we don't any books that fit your description.</p>`;
        if (document.querySelector('.books__list')) {
            (document.querySelector('.books__list') as HTMLUListElement).appendChild(emptyItem);
        }
    }
    activeBasket();
    currentSearch();
}

export function filteringAuthor() {
    const Authors = document.querySelector('.filters-author__list') as HTMLUListElement;
    const currentAuthorArray: string[] = [];

    if (Authors) {
        Authors.addEventListener('click', (event) => {
            const target = event.target as HTMLLIElement;
            if (target.tagName !== 'LI') {
                return;
            }
            if (currentAuthorArray.includes(target.id)) {
                target.classList.remove('active');
                currentAuthorArray.splice(currentAuthorArray.indexOf(target.id), 1);
            } else {
                currentAuthorArray.push(target.id);
                target.classList.add('active');
            }

            if (currentAuthorArray.length !== 0) {
                localStorage.setItem('author', JSON.stringify(currentAuthorArray));
            } else {
                localStorage.removeItem('author');
            }

            currentRender();
        });
    }
}

export function filteringGenre() {
    const Genre = document.querySelector('.filters-genre__list') as HTMLUListElement;
    const currentGenreArray: string[] = [];

    if (Genre) {
        Genre.addEventListener('click', (event) => {
            const target = event.target as HTMLLIElement;
            if (target.tagName !== 'LI') {
                return;
            }
            if (currentGenreArray.includes(target.id)) {
                target.classList.remove('active');
                currentGenreArray.splice(currentGenreArray.indexOf(target.id), 1);
            } else {
                currentGenreArray.push(target.id);
                target.classList.add('active');
            }

            if (currentGenreArray.length !== 0) {
                localStorage.setItem('genre', JSON.stringify(currentGenreArray));
            } else {
                localStorage.removeItem('genre');
            }

            currentRender();
        });
    }
}

export function filteringCover() {
    const Cover = document.querySelector('.filters-cover__list') as HTMLUListElement;
    const currentCoverArray: string[] = [];

    if (Cover) {
        Cover.addEventListener('click', (event) => {
            const target = event.target as HTMLLIElement;
            if (target.tagName !== 'LI') {
                return;
            }
            if (currentCoverArray.includes(target.id)) {
                target.classList.remove('active');
                currentCoverArray.splice(currentCoverArray.indexOf(target.id), 1);
            } else {
                currentCoverArray.push(target.id);
                target.classList.add('active');
            }

            if (currentCoverArray.length !== 0) {
                localStorage.setItem('cover', JSON.stringify(currentCoverArray));
            } else {
                localStorage.removeItem('cover');
            }

            currentRender();
        });
    }
}

export function filteringBestseller() {
    const CheckBestseller = document.getElementById('best');

    if (CheckBestseller) {
        CheckBestseller?.addEventListener('click', () => {
            if (CheckBestseller.classList.contains('checked')) {
                CheckBestseller.classList.remove('checked');
                localStorage.removeItem('best');
            } else {
                CheckBestseller.classList.add('checked');
                localStorage.setItem('best', 'checked');
            }
            currentRender();
        });
    }
}
