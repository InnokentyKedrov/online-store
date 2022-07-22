import '../styles/book-style.css';
const Books = require('../assets/books.json');

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
    const Book = document.createElement('li');
    Book.classList.add('books__item');
    Book.setAttribute('id', String(index));
    Book.innerHTML = `<div class='books__item_container'>
                        <h3 class='books__item_title'>${Books[index].title}</h3>
                        <div class='books__item_image' id='${Books[index].img}'></div>
                        <table class='books__item_table'>
                          <tr><th>Year of release: </th><td>${Books[index].year}</td></tr>
                          <tr><th>Author: </th><td>${Books[index].author}</td></tr>
                          <tr><th>Genre: </th><td>${Books[index].genre}</td></tr>
                          <tr><th>Cover: </th><td>${Books[index].cover}</td></tr>
                          <tr><th>Quantity: </th><td>${Books[index].quantity}</td></tr>
                        </table>
                        <button class='books__item_button'>In basket</button>
                      </div>`;
    if (document.querySelector('.books__list')) {
        (document.querySelector('.books__list') as HTMLUListElement).appendChild(Book);
    }
}
