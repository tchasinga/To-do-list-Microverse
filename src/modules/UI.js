import Store from './Store.js';

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    UI.clearBookList();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.dataset.isbn = book.isbn;
    row.innerHTML = `
      <td><input type="checkbox" class="mybox" ${book.completed ? 'checked' : ''}></td>
      <td class="NameSide"><input type="text" class="Edit" value="${book.title}"></td>
      <td><button class="material-icons delete">delete</button></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    el.parentElement.parentElement.remove();
  }

  static clearCompletedBooks() {
    const completedBooks = document.querySelectorAll('.completed');
    completedBooks.forEach((book) => {
      book.parentElement.parentElement.remove();
    });
  }

  static removeAllBooks() {
    const list = document.querySelector('.book-list');
    list.innerHTML = '';
  }

  static clearBookList() {
    const list = document.querySelector('.book-list');
    list.innerHTML = '';
  }

  static editBookTitle(isbn, newTitle) {
    const row = document.querySelector(`tr[data-isbn="${isbn}"]`);
    const titleElement = row.querySelector('.Edit');
    titleElement.value = newTitle;
  }
}

export default UI;