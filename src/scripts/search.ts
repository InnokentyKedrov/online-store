import { currentRender } from './filtering';
const BOOKS = require('../assets/books.json');

const Search = document.getElementById('search') as HTMLInputElement;

export function currentSearch() {
    document.addEventListener('DOMContentLoaded', () => {
        const TitleArray: string[] = [];
        const currentTitleArray = document.querySelectorAll('.books__item_title');

        for (let i = 0; i < currentTitleArray.length; i++) {
            TitleArray.push((currentTitleArray[i].textContent as string).toLowerCase());
        }
        Search?.addEventListener('keyup', () => {
            const searchArray: string[] = [];
            for (let i = 0; i < BOOKS.length; i++) {
                if (
                    TitleArray.includes(BOOKS[i].title.toLowerCase()) &&
                    BOOKS[i].title.toLowerCase().indexOf(Search.value.toLowerCase()) != -1
                ) {
                    searchArray.push(BOOKS[i].title);
                }
            }
            localStorage.setItem('searchArray', JSON.stringify(searchArray));
            currentRender();
        });
    });
}

export function currentSearchClear() {
    const FullArray = [];
    for (let i = 0; i < BOOKS.length; i++) {
        FullArray.push(BOOKS[i].title);
    }
    localStorage.setItem('searchArray', JSON.stringify(FullArray));
}

export function searchClean() {
    const Clean = document.querySelector('.search__clean');
    Clean?.addEventListener('click', () => {
        Search.value = '';
        currentSearchClear();
        currentRender();
    });
}
