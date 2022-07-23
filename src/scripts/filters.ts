import '../styles/search-and-filters.css';
import { Ibook } from './books';
const Books = require('../assets/books.json');

function filterAuthor(Book: Ibook) {
    const FilterAuth = document.createElement('li') as HTMLLIElement;
    FilterAuth.classList.add('filters-author__item');
    FilterAuth.setAttribute('id', Book.author);
    FilterAuth.innerHTML = `${Book.author}`;
    if (document.querySelector('.filters-author__list')) {
        (document.querySelector('.filters-author__list') as HTMLUListElement).appendChild(FilterAuth);
    }
}

export function renderFilterAuthor() {
    const AuthorsArray: number[] = [];
    for (const Book of Books) {
        if (!AuthorsArray.includes(Book.author)) {
            AuthorsArray.push(Book.author);
            filterAuthor(Book);
        }
    }
}

function filterGenre(Book: Ibook) {
    const FilterGen = document.createElement('li') as HTMLLIElement;
    FilterGen.classList.add('filters-genre__item');
    FilterGen.setAttribute('id', Book.genre);
    FilterGen.innerHTML = `${Book.genre}`;
    if (document.querySelector('.filters-genre__list')) {
        (document.querySelector('.filters-genre__list') as HTMLUListElement).appendChild(FilterGen);
    }
}

export function renderFilterGenre() {
    const GenreArray: number[] = [];
    for (const Book of Books) {
        if (!GenreArray.includes(Book.genre)) {
            GenreArray.push(Book.genre);
            filterGenre(Book);
        }
    }
}

export function filterCover(Book: Ibook) {
    const FilterCov = document.createElement('li') as HTMLLIElement;
    FilterCov.classList.add('filters-cover__item');
    FilterCov.setAttribute('id', Book.cover);
    FilterCov.innerHTML = `${Book.cover}`;
    if (document.querySelector('.filters-cover__list')) {
        (document.querySelector('.filters-cover__list') as HTMLUListElement).appendChild(FilterCov);
    }
}

export function renderFilterCover() {
    const CoverArray: number[] = [];
    for (const Book of Books) {
        if (!CoverArray.includes(Book.cover)) {
            CoverArray.push(Book.cover);
            filterCover(Book);
        }
    }
}
