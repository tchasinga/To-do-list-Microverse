class Book {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.isbn = Date.now().toString();
  }
}
export default Book;