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
    const EmptyItem = document.querySelector('.books__item_empty');
    if (EmptyItem) {
        EmptyItem.remove();
    }
}

export function currentRender() {
    removeBooks();
    removeEmptyItem();
    const Books = sorting();
    let searchArray;
    if (localStorage.getItem('searchArray') === null) {
        searchArray = [];
    } else {
        searchArray = JSON.parse(localStorage.getItem('searchArray') || '[]');
    }
    const [quantityMin, quantityMax] = checkQuantity();
    const [yearMin, yearMax] = checkYear();

    if (localStorage.getItem('best') === null) {
        for (let i = 0; i < Books.length; i++) {
            if (
                (localStorage.getItem('author')?.includes(Books[i].author) ||
                    localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(Books[i].genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(Books[i].cover) || localStorage.getItem('cover') === null) &&
                // (localStorage.getItem('searchArray')?.includes(BOOKS[i].title) ||
                //     localStorage.getItem('searchArray') === null) &&
                Books[i].quantity <= quantityMax &&
                Books[i].quantity >= quantityMin &&
                Books[i].year <= yearMax &&
                Books[i].year >= yearMin &&
                searchArray.includes(Books[i].title)
            ) {
                renderBook(i);
            }
        }
    } else {
        for (let i = 0; i < Books.length; i++) {
            if (
                (localStorage.getItem('author')?.includes(Books[i].author) ||
                    localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(Books[i].genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(Books[i].cover) || localStorage.getItem('cover') === null) &&
                // (localStorage.getItem('searchArray')?.includes(BOOKS[i].title) ||
                //     localStorage.getItem('searchArray') === null) &&
                Books[i].bestseller === 'true' &&
                Books[i].quantity <= quantityMax &&
                Books[i].quantity >= quantityMin &&
                Books[i].year <= yearMax &&
                Books[i].year >= yearMin &&
                searchArray.includes(Books[i].title)
            ) {
                renderBook(i);
            }
        }
    }

    if (document.querySelectorAll('.books__item')[0] === undefined) {
        const EmptyItem = document.createElement('li');
        EmptyItem.classList.add('books__item_empty');
        EmptyItem.innerHTML = `<p>Sorry, we don't any books that fit your description.</p>`;
        if (document.querySelector('.books__list')) {
            (document.querySelector('.books__list') as HTMLUListElement).appendChild(EmptyItem);
        }
    }
    activeBasket();
    currentSearch();
}

export function filteringAuthor() {
    const Authors = document.querySelector('.filters-author__list') as HTMLUListElement;
    const CurrentAuthorArray: string[] = [];

    if (Authors) {
        Authors.addEventListener('click', (event) => {
            const Target = event.target as HTMLLIElement;
            if (Target.tagName !== 'LI') {
                return;
            }
            if (CurrentAuthorArray.includes(Target.id)) {
                Target.classList.remove('active');
                CurrentAuthorArray.splice(CurrentAuthorArray.indexOf(Target.id), 1);
            } else {
                CurrentAuthorArray.push(Target.id);
                Target.classList.add('active');
            }

            if (CurrentAuthorArray.length !== 0) {
                localStorage.setItem('author', JSON.stringify(CurrentAuthorArray));
            } else {
                localStorage.removeItem('author');
            }

            currentRender();
        });
    }
}

export function filteringGenre() {
    const Genre = document.querySelector('.filters-genre__list') as HTMLUListElement;
    const CurrentGenreArray: string[] = [];

    if (Genre) {
        Genre.addEventListener('click', (event) => {
            const Target = event.target as HTMLLIElement;
            if (Target.tagName !== 'LI') {
                return;
            }
            if (CurrentGenreArray.includes(Target.id)) {
                Target.classList.remove('active');
                CurrentGenreArray.splice(CurrentGenreArray.indexOf(Target.id), 1);
            } else {
                CurrentGenreArray.push(Target.id);
                Target.classList.add('active');
            }

            if (CurrentGenreArray.length !== 0) {
                localStorage.setItem('genre', JSON.stringify(CurrentGenreArray));
            } else {
                localStorage.removeItem('genre');
            }

            currentRender();
        });
    }
}

export function filteringCover() {
    const Cover = document.querySelector('.filters-cover__list') as HTMLUListElement;
    const CurrentCoverArray: string[] = [];

    if (Cover) {
        Cover.addEventListener('click', (event) => {
            const Target = event.target as HTMLLIElement;
            if (Target.tagName !== 'LI') {
                return;
            }
            if (CurrentCoverArray.includes(Target.id)) {
                Target.classList.remove('active');
                CurrentCoverArray.splice(CurrentCoverArray.indexOf(Target.id), 1);
            } else {
                CurrentCoverArray.push(Target.id);
                Target.classList.add('active');
            }

            if (CurrentCoverArray.length !== 0) {
                localStorage.setItem('cover', JSON.stringify(CurrentCoverArray));
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
