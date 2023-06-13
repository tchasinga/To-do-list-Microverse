import Store from './Store.js';

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.dataset.isbn = book.isbn;
    row.innerHTML = `
        <td><input type="checkbox" class="mybox" ${book.completed ? 'checked' : ''}></td>
        <td class="NameSide">${book.title}</td>
        <td><button class="material-icons delete">delete</button></td>
      `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    el.parentElement.parentElement.remove();
  }
}

export default UI;

