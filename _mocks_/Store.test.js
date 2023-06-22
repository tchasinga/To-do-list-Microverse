import Store from '../src/modules/Store.js';

describe('Store', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('addBook should add a book to the storage', () => {
    // Create a mock book object
    const book = { title: 'Test Book', completed: false, isbn: '123456' };

    // Call the addBook function
    Store.addBook(book);

    // Retrieve the books from the storage
    const storedBooks = Store.getBooks();

    // Assert that the book was added to the storage
    expect(storedBooks).toContainEqual(book);
  });

  test('removeBook should remove a book from the storage', () => {
    // Create a mock book object
    const book = { title: 'Test Book', completed: false, isbn: '123456' };

    // Add the book to the storage
    Store.addBook(book);

    // Call the removeBook function
    Store.removeBook(book.isbn);

    // Retrieve the books from the storage
    const storedBooks = Store.getBooks();

    // Assert that the book was removed from the storage
    expect(storedBooks).not.toContainEqual(book);
  });
});
