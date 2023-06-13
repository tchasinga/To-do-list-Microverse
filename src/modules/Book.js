class Book {
  constructor(title) {
    this.title = title;
    this.isbn = Date.now().toString(); // Generate a unique identifier for each book
    this.completed = false;
  }
}

export default Book;