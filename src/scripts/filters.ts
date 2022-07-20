import '../styles/search-and-filters.css';
const BOOKS = require('../assets/books.json');

// Filter of Authors

function filterAuthor(index: number) {
    const filterAuth = document.createElement('li');
    filterAuth.classList.add('filters-author__item');
    filterAuth.setAttribute('id', BOOKS[index].author);
    filterAuth.innerHTML = `${BOOKS[index].author}`;
    if (document.querySelector('.filters-author__list')) {
        (document.querySelector('.filters-author__list') as HTMLUListElement).appendChild(filterAuth);
    }
}

export function renderFilterAuthor() {
    const AUTORS_ARRAY: number[] = [];
    for (let i = 0; i < BOOKS.length; i++) {
        if (!AUTORS_ARRAY.includes(BOOKS[i].author)) {
            AUTORS_ARRAY.push(BOOKS[i].author);
            filterAuthor(i);
        }
    }
}

// Filter of Genre

function filterGenre(index: number) {
    const filterGen = document.createElement('li');
    filterGen.classList.add('filters-genre__item');
    filterGen.setAttribute('id', BOOKS[index].genre);
    filterGen.innerHTML = `${BOOKS[index].genre}`;
    if (document.querySelector('.filters-genre__list')) {
        (document.querySelector('.filters-genre__list') as HTMLUListElement).appendChild(filterGen);
    }
}

export function renderFilterGenre() {
    const GENRE_ARRAY: number[] = [];
    for (let i = 0; i < BOOKS.length; i++) {
        if (!GENRE_ARRAY.includes(BOOKS[i].genre)) {
            GENRE_ARRAY.push(BOOKS[i].genre);
            filterGenre(i);
        }
    }
}

// Filter of Cover

export function filterCover(index: number) {
    const filterCov = document.createElement('li');
    filterCov.classList.add('filters-cover__item');
    filterCov.setAttribute('id', BOOKS[index].cover);
    filterCov.innerHTML = `${BOOKS[index].cover}`;
    if (document.querySelector('.filters-cover__list')) {
        (document.querySelector('.filters-cover__list') as HTMLUListElement).appendChild(filterCov);
    }
}

export function renderFilterCover() {
    const COVER_ARRAY: number[] = [];
    for (let i = 0; i < BOOKS.length; i++) {
        if (!COVER_ARRAY.includes(BOOKS[i].cover)) {
            COVER_ARRAY.push(BOOKS[i].cover);
            filterCover(i);
        }
    }
}
