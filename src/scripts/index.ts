import '../styles/header.css';
import '../styles/index.css';
import '../styles/footer.css';
import '../styles/about.css';
import '../styles/search-and-filters.css';
import '../styles/images.css';
import '../styles/nouislider.css';
import '../styles/search.css';
import '../styles/nouislider.css';
import '../styles/nouisliderinit.css';

import { renderFilterCover, renderFilterGenre, renderFilterAuthor } from './filters';
import { currentRender, filteringAuthor, filteringBestseller, filteringCover, filteringGenre } from './filtering';
import { rangeInit } from './nouisliderinit';
import { resetAll, resetFilters } from './reset';
import { sort } from './sort';
import { basket } from './basket';
import { currentSearchClear, searchClean } from './search';

currentSearchClear();
currentRender();
renderFilterAuthor();
renderFilterGenre();
renderFilterCover();

if (localStorage.getItem('author') !== null) {
    const Current = JSON.parse(localStorage.getItem('author') || '[]');
    for (let i = 0; i < Current.length; i++) {
        (document.getElementById(Current[i]) as HTMLLIElement).classList.add('active');
    }
}
if (localStorage.getItem('genre') !== null) {
    const Current = JSON.parse(localStorage.getItem('genre') || '[]');
    for (let i = 0; i < Current.length; i++) {
        (document.getElementById(Current[i]) as HTMLLIElement).classList.add('active');
    }
}
if (localStorage.getItem('cover') !== null) {
    const Current = JSON.parse(localStorage.getItem('cover') || '[]');
    for (let i = 0; i < Current.length; i++) {
        (document.getElementById(Current[i]) as HTMLLIElement).classList.add('active');
    }
}
if (localStorage.getItem('best') !== null) {
    (document.getElementById('best') as HTMLLIElement).classList.add('checked');
}

filteringAuthor();
filteringGenre();
filteringCover();
filteringBestseller();
resetFilters();
resetAll();
rangeInit();
sort();
basket();
searchClean();
