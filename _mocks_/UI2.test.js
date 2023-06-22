import UI from '../src/modules/UI.js';
import Book from '../src/modules/Book.js';

describe('UI', () => {
  beforeEach(() => {
    // Mock localStorage
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };

    // Clear any mock calls and instances
    jest.clearAllMocks();
  });

  describe('addBookToList', () => {
    test('should add a book to the list', () => {
      // Prepare
      document.body.innerHTML = `
        <table>
          <tbody class="book-list"></tbody>
        </table>
      `;

      const book = new Book('Title');
      const expectedRow = `
        <tr data-isbn="${book.isbn}">
          <td><input type="checkbox" class="mybox"></td>
          <td class="NameSide"><input type="text" class="Edit" value="${book.title}"></td>
          <td><button class="material-icons delete">delete</button></td>
        </tr>
      `;

      // Execute
      UI.addBookToList(book);

      // Verify
      const list = document.querySelector('.book-list');
      expect(list.innerHTML.replace(/\s/g, '')).toEqual(expectedRow.replace(/\s/g, ''));
    });
  });