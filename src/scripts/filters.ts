import '../styles/search-and-filters.css';
const Books = require('../assets/books.json');

function filterAuthor(index: number) {
    const FilterAuth = document.createElement('li');
    FilterAuth.classList.add('filters-author__item');
    FilterAuth.setAttribute('id', Books[index].author);
    FilterAuth.innerHTML = `${Books[index].author}`;
    if (document.querySelector('.filters-author__list')) {
        (document.querySelector('.filters-author__list') as HTMLUListElement).appendChild(FilterAuth);
    }
}

export function renderFilterAuthor() {
    const AuthorsArray: number[] = [];
    for (let i = 0; i < Books.length; i++) {
        if (!AuthorsArray.includes(Books[i].author)) {
            AuthorsArray.push(Books[i].author);
            filterAuthor(i);
        }
    }
}

function filterGenre(index: number) {
    const FilterGen = document.createElement('li');
    FilterGen.classList.add('filters-genre__item');
    FilterGen.setAttribute('id', Books[index].genre);
    FilterGen.innerHTML = `${Books[index].genre}`;
    if (document.querySelector('.filters-genre__list')) {
        (document.querySelector('.filters-genre__list') as HTMLUListElement).appendChild(FilterGen);
    }
}

export function renderFilterGenre() {
    const GenreArray: number[] = [];
    for (let i = 0; i < Books.length; i++) {
        if (!GenreArray.includes(Books[i].genre)) {
            GenreArray.push(Books[i].genre);
            filterGenre(i);
        }
    }
}

export function filterCover(index: number) {
    const FilterCov = document.createElement('li');
    FilterCov.classList.add('filters-cover__item');
    FilterCov.setAttribute('id', Books[index].cover);
    FilterCov.innerHTML = `${Books[index].cover}`;
    if (document.querySelector('.filters-cover__list')) {
        (document.querySelector('.filters-cover__list') as HTMLUListElement).appendChild(FilterCov);
    }
}

export function renderFilterCover() {
    const CoverArray: number[] = [];
    for (let i = 0; i < Books.length; i++) {
        if (!CoverArray.includes(Books[i].cover)) {
            CoverArray.push(Books[i].cover);
            filterCover(i);
        }
    }
}
