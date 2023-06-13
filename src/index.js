import UI from './modules/UI.js';
import Store from './modules/Store.js';
import Book from './modules/Book.js';
import './style/styles.css';

// Event display output
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;

  // instantiate book
  const book = new Book(title);
  // add book to books array
  UI.addBooklist(book);

  // add book to local storage
  Store.addBook(book);

  // clear fields after saving
  document.querySelector('#title').value = '';
});

// Event : remove a book
document.querySelector('.book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  // remove book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
