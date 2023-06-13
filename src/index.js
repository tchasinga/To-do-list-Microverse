import UI from './modules/UI.js';
import Store from './modules/Store.js';
import Book from './modules/Book.js';
import './style/styles.css';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  if (title !== '') {
    const book = new Book(title);
    UI.addBookToList(book);
    Store.addBook(book);
    document.querySelector('#title').value = '';
  }
});

document.querySelector('.book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    UI.deleteBook(e.target);
    const { isbn } = e.target.parentElement.parentElement.dataset;
    Store.removeBook(isbn);
  } else if (e.target.classList.contains('mybox')) {
    const row = e.target.parentElement.parentElement;
    row.classList.toggle('completed');
    const { isbn } = row.dataset;
    Store.toggleComplete(isbn);
  }
});
