import Store from './Store.js';

class UI {
  static displayBooks() {
    const books = Store.getBook();
    books.forEach((book) => UI.addBooklist(book));
  }

  static addBooklist(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="checkbox" class="mybox"></td>   
         <td class="NameSide"><input type="text" class="Edit" value="${book.title}"></td>
         <td><button  class=" material-icons delete">delete</button></td>
         `;
    list.appendChild(row);

    const CheckBox = list.querySelector('.mybox');
    CheckBox.addEventListener('change', () => {
      list.querySelector('.Edit').classList.add('completed');
    });
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) { el.parentElement.parentElement.remove(); }
  }
}

export default UI;