import { activeBasket } from './basket';
import { renderBook } from './books';
import { checkQuantity, checkYear } from './nouisliderinit';
import { currentSearch } from './search';
import { sorting } from './sort';

function removeBooks() {
    const BooksArray = document.querySelectorAll('.books__item') as NodeListOf<Element>;
    for (const Book of BooksArray) {
        Book.remove();
    }
}

function removeEmptyItem() {
    const EmptyItem = document.querySelector('.books__item_empty') as HTMLLIElement;
    if (EmptyItem) {
        EmptyItem.remove();
    }
}

export function currentRender() {
    removeBooks();
    removeEmptyItem();
    const Books = sorting();
    const [QuantityMin, QuantityMax] = checkQuantity();
    const [YearMin, YearMax] = checkYear();

    let searchArray: string[];
    if (localStorage.getItem('searchArray') === null) {
        searchArray = [];
    } else {
        searchArray = JSON.parse(JSON.stringify(localStorage.getItem('searchArray')));
    }

    if (localStorage.getItem('best') === null) {
        for (const Book of Books) {
            if (
                (localStorage.getItem('author')?.includes(Book.author) || localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(Book.genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(Book.cover) || localStorage.getItem('cover') === null) &&
                Book.quantity <= QuantityMax &&
                Book.quantity >= QuantityMin &&
                Book.year <= YearMax &&
                Book.year >= YearMin &&
                searchArray.includes(Book.title)
            ) {
                renderBook(Book);
            }
        }
    } else {
        for (const Book of Books) {
            if (
                (localStorage.getItem('author')?.includes(Book.author) || localStorage.getItem('author') === null) &&
                (localStorage.getItem('genre')?.includes(Book.genre) || localStorage.getItem('genre') === null) &&
                (localStorage.getItem('cover')?.includes(Book.cover) || localStorage.getItem('cover') === null) &&
                Book.bestseller === 'true' &&
                Book.quantity <= QuantityMax &&
                Book.quantity >= QuantityMin &&
                Book.year <= YearMax &&
                Book.year >= YearMin &&
                searchArray.includes(Book.title)
            ) {
                renderBook(Book);
            }
        }
    }
    checkEmpty();
    activeBasket();
    currentSearch();
}

function checkEmpty() {
    if (document.querySelectorAll('.books__item')[0] === undefined) {
        const EmptyItem = document.createElement('li') as HTMLLIElement;
        EmptyItem.classList.add('books__item_empty');
        EmptyItem.innerHTML = `<p>Sorry, we don't any books that fit your description.</p>`;
        if (document.querySelector('.books__list')) {
            (document.querySelector('.books__list') as HTMLUListElement).appendChild(EmptyItem);
        }
    }
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
    const CheckBestseller = document.getElementById('best') as HTMLDivElement;

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
