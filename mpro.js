class Library{
   constructor(){
    this.book = [];
   }
   addBook(books){
    this.book.push(...books);
   }
   listAllBook(){
    this.book.foreach(function (book){
        console.log(`${index+1} ${book.name} by ${book.author}`);
    });
   }
}

class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }
    info(){
        console.log(
            `${this.readStatus ? "✔": "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus} and is avialable at online stores ` 
        );
    }
    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}
let gwlLibrary = new Library();
let book1 = new Book("Rich Dad Poor Dad","2rdbjfsf",150,"Ayush");
let book2 = new Book("69","2rdbjf69sf",1500,"Aayushh");
let book3 = new Book("88","2rdbwe88sf",1500,"Ayu");

gwlLibrary.addBook([book1, book2, book3]);


