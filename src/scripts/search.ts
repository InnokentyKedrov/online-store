import { currentRender } from './filtering';
const Books = require('../assets/books.json');

const Search = document.getElementById('search') as HTMLInputElement;

export function currentSearch() {
    document.addEventListener('DOMContentLoaded', () => {
        const TitleArray: string[] = [];
        const CurrentTitleArray = document.querySelectorAll('.books__item_title');

        for (let i = 0; i < CurrentTitleArray.length; i++) {
            TitleArray.push((CurrentTitleArray[i].textContent as string).toLowerCase());
        }
        Search?.addEventListener('keyup', () => {
            const SearchArray: string[] = [];
            for (let i = 0; i < Books.length; i++) {
                if (
                    TitleArray.includes(Books[i].title.toLowerCase()) &&
                    Books[i].title.toLowerCase().indexOf(Search.value.toLowerCase()) != -1
                ) {
                    SearchArray.push(Books[i].title);
                }
            }
            localStorage.setItem('searchArray', JSON.stringify(SearchArray));
            currentRender();
        });
    });
}

export function currentSearchClear() {
    const FullArray = [];
    for (let i = 0; i < Books.length; i++) {
        FullArray.push(Books[i].title);
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
