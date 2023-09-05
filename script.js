let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read == true ? "read" : "not read yet"
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

Book.prototype.getBook = function() {
    console.log(this.title);
}

const user = new Book("JK Rowling","Bob Kim","100",true);
user.info();
user.getBook();
