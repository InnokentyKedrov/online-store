import '../styles/book-style.css';

export interface Ibook {
    title: string;
    img: string;
    year: string;
    author: string;
    genre: string;
    cover: string;
    quantity: string;
    bestseller: string;
}

export function renderBook(Books: Ibook) {
    const Book = document.createElement('li') as HTMLLIElement;
    Book.classList.add('books__item');
    // Book.setAttribute('id', String(index));
    Book.innerHTML = `<div class='books__item_container'>
                        <h3 class='books__item_title'>${Books.title}</h3>
                        <div class='books__item_image' id='${Books.img}'></div>
                        <table class='books__item_table'>
                          <tr><th>Year of release: </th><td>${Books.year}</td></tr>
                          <tr><th>Author: </th><td>${Books.author}</td></tr>
                          <tr><th>Genre: </th><td>${Books.genre}</td></tr>
                          <tr><th>Cover: </th><td>${Books.cover}</td></tr>
                          <tr><th>Quantity: </th><td>${Books.quantity}</td></tr>
                        </table>
                        <button class='books__item_button'>In basket</button>
                      </div>`;
    if (document.querySelector('.books__list')) {
        (document.querySelector('.books__list') as HTMLUListElement).appendChild(Book);
    }
}
