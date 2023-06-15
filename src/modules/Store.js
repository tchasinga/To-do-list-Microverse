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
    const updatedBooks = books.filter((book) => book.isbn !== isbn);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  static toggleComplete(isbn) {
    const books = Store.getBooks();
    books.forEach((book) => {
      if (book.isbn === isbn) {
        book.completed = !book.completed;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static editBookTitle(isbn, newTitle) {
    const books = Store.getBooks();
    books.forEach((book) => {
      if (book.isbn === isbn) {
        book.title = newTitle;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
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