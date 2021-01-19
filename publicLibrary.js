class LibraryObject {
  constructor(objectName) {
    this.name = objectName;
  }
}
class Library extends LibraryObject {
  constructor(objectName) {
    super(objectName);
  }
}
class Shelf extends LibraryObject {
  books = [];
  constructor(objectName) {
    super(objectName);
  }
  shelfLimit() {
    if (this.books.length >= 5) {
      return true;
    }
  }
  addBookToShelf(book) {
    if (this.shelfLimit()) throw Error("this shelf is full!! try another one");
    else {
      this.books.push(book);
    }
  }
  displayBooksInShelf() {
    console.log(`Number of Books in the ${this.name}: ${this.books.length}`);
    for (var book of this.books) book.print();
  }
  moveBook(shelf, book) {
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i] === book) {
        this.books.splice(i, 1);
      }
    }
    shelf.books.push(book);
    if (this.shelfLimit()) throw Error("this shelf is full!! try another one");
    else {
    }
  }
}

class Book extends LibraryObject {
  constructor(objectName, pages, author, publishYear) {
    super(objectName);
    this.pages = pages;
    this.author = author;
    this.publishYear = publishYear;
  }
  print() {
    console.log(`Book name: ${this.name}`);
  }
}

class Novel extends Book {
  constructor(objectName, pages, author, publishYear) {
    super(objectName, pages, author, publishYear);
  }
}
class TextBook extends Book {
  constructor(objectName, pages, author, publishYear) {
    super(objectName, pages, author, publishYear);
  }
}
class Author extends LibraryObject {
  constructor(firstName, lastName, age, city) {
    super(firstName + " " + lastName);
    this.age = age;
    this.cityOfResidence = city;
  }
}

var firstShelf = new Shelf("First Shelf");
var secondShelf = new Shelf("Second Shelf");
var book1 = new Book("Broken Glass", 238, "Alain Mabanckou", 2005);
var book2 = new Book("I Feel Bad About My Neck", 500, "Nora Ephron", 2006);
var book3 = new Book(
  "The Girl With the Dragon Tattoo",
  340,
  "Stieg Larsson",
  2005
);
var book4 = new Book("A Little Life", 344, "Hanya Yanagihara", 2005);
var book5 = new Book("The Tipping Point", 445, "Malcolm Gladwell", 2000);
var novel1 = new Novel("Darkmans", 400, "Nicola Barker", 2007);
var novel2 = new Novel("Visitation", 350, "Jenny Erpenbeck", 2009);
var novel3 = new Novel("Bad Blood", 560, "Lorna Sage", 2000);
var novel4 = new Novel("Noughts & Crosses", 400, "Malorie Blackman", 2001);
var textBook1 = new TextBook("Math Book", 200, "Patricia Lockwood ", 2017);
var book6 = new Book();
firstShelf.addBookToShelf(book1);
firstShelf.addBookToShelf(book2);
firstShelf.addBookToShelf(book3);
firstShelf.addBookToShelf(book4);
firstShelf.addBookToShelf(book5);
firstShelf.displayBooksInShelf();
secondShelf.addBookToShelf(novel1);
secondShelf.addBookToShelf(novel2);
secondShelf.addBookToShelf(novel3);
secondShelf.addBookToShelf(textBook1);
secondShelf.displayBooksInShelf();
// firstShelf.addBookToShelf(book6)
// firstShelf.displayBooksInShelf()
firstShelf.moveBook(secondShelf, book4);
// firstShelf.displayBooksInShelf();
secondShelf.displayBooksInShelf();
// firstShelf.addBookToShelf(novel4);
