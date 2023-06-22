import UI from '../src/modules/UI.js';

describe('UI', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <table class="book-list">
        <tr>
          <td><input type="checkbox" class="mybox"></td>
          <td class="NameSide"><input type="text" class="Edit" value="Book 1"></td>
          <td><button class="material-icons delete">delete</button></td>
        </tr>
      </table>
    `;
  });

  test('deleteBook should remove a book row from the DOM', () => {
    // Arrange
    const deleteButton = document.querySelector('.delete');

    // Act
    UI.deleteBook(deleteButton);

    // Assert
    const bookRow = document.querySelector('tr');
    expect(bookRow).toBeNull();
  });
});