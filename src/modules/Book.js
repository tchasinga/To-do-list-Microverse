class Book {
  constructor(title) {
    this.title = title;
    this.isbn = Date.now().toString(); // Generate a unique identifier for each book and manager it
    this.completed = false;
  }
}

export default Book;
