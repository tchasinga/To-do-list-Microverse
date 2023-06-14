class Store {
  static getBooks() {
    let books = [];
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    const index = books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static toggleComplete(isbn) {
    const books = Store.getBooks();
    const book = books.find((book) => book.isbn === isbn);
    if (book) {
      book.completed = !book.completed;
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static editBookTitle(isbn, newTitle) {
    const books = Store.getBooks();
    const book = books.find((book) => book.isbn === isbn);
    if (book) {
      book.title = newTitle;
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static clearCompletedBooks() {
    const books = Store.getBooks();
    const updatedBooks = books.filter((book) => !book.completed);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  static removeAllBooks() {
    localStorage.removeItem('books');
  }
}

export default Store;
