let library = [];
let modal = document.getElementById("modal")
let isModelOpen = false;
let newBookButton = document.getElementById("newBook");

newBookButton.addEventListener("click", () => {
    if (isModelOpen == false) { 

        modal.setAttribute("class", "visible");
        isModelOpen = true;
    } else {
        modal.setAttribute("class", "hidden")
        isModelOpen=false;
    }
});

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read == true ? "read" : "not read yet"
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

function addBook() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked ? true : false;
    let book = new Book(title, author, pages, read);
    library.push(book);
}