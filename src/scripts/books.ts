import '../styles/book-style.css';
const BOOKS = require('../assets/books.json');

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

export function renderBook(index: number) {
    const book = document.createElement('li');
    book.classList.add('books__item');
    book.setAttribute('id', String(index));
    book.innerHTML = `<div class='books__item_container'>
                        <h3 class='books__item_title'>${BOOKS[index].title}</h3>
                        <div class='books__item_image' id='${BOOKS[index].img}'></div>
                        <table class='books__item_table'>
                          <tr><th>Year of release: </th><td>${BOOKS[index].year}</td></tr>
                          <tr><th>Author: </th><td>${BOOKS[index].author}</td></tr>
                          <tr><th>Genre: </th><td>${BOOKS[index].genre}</td></tr>
                          <tr><th>Cover: </th><td>${BOOKS[index].cover}</td></tr>
                          <tr><th>Quantity: </th><td>${BOOKS[index].quantity}</td></tr>
                        </table>
                        <button class='books__item_button'>In basket</button>
                      </div>`;
    if (document.querySelector('.books__list')) {
        (document.querySelector('.books__list') as HTMLUListElement).appendChild(book);
    }
}
