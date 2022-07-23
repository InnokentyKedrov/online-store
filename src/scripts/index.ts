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

function activeItem(item: string) {
    if (localStorage.getItem(item) !== null) {
        const Currents = JSON.parse(localStorage.getItem(item) || '[]');
        for (const Current of Currents) {
            (document.getElementById(Current) as HTMLLIElement).classList.add('active');
        }
    }
}
activeItem('author');
activeItem('genre');
activeItem('cover');

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
