class Book {
  constructor(title) {
    this.title = title;
    this.isbn = Date.now().toString();
    this.completed = false;
  }
}

export default Book;
