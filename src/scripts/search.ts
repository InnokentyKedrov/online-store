import { currentRender } from './filtering';
const Books = require('../assets/books.json');

const Search = document.getElementById('search') as HTMLInputElement;

export function currentSearch() {
    document.addEventListener('DOMContentLoaded', () => {
        const TitleArray: string[] = [];
        const CurrentTitleArray = document.querySelectorAll('.books__item_title') as NodeListOf<Element>;

        for (const CurrentTitle of CurrentTitleArray) {
            TitleArray.push((CurrentTitle.textContent as string).toLowerCase());
        }
        Search?.addEventListener('keyup', () => {
            const SearchArray: string[] = [];
            for (const Book of Books) {
                if (
                    TitleArray.includes(Book.title.toLowerCase()) &&
                    Book.title.toLowerCase().indexOf(Search.value.toLowerCase()) != -1
                ) {
                    SearchArray.push(Book.title);
                }
            }
            localStorage.setItem('searchArray', JSON.stringify(SearchArray));
            currentRender();
        });
    });
}

export function currentSearchClear() {
    const FullArray: string[] = [];
    for (const Book of Books) {
        FullArray.push(Book.title);
    }
    localStorage.setItem('searchArray', JSON.stringify(FullArray));
}

export function searchClean() {
    const Clean = document.querySelector('.search__clean') as HTMLDivElement;
    Clean?.addEventListener('click', () => {
        Search.value = '';
        currentSearchClear();
        currentRender();
    });
}
