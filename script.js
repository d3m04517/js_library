let library = [];
let modal = document.getElementById("modal")
let isModelOpen = false;
let newBookButton = document.getElementById("newBook");
let createBookButton = document.getElementById("create-book");
let main = document.getElementsByClassName('main')[0];


newBookButton.addEventListener("click", () => {
    if (isModelOpen == false) { 

        modal.setAttribute("class", "visible");
        isModelOpen = true;
    } else {
        modal.setAttribute("class", "hidden")
        isModelOpen=false;
    }
});

createBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBook();
    modal.setAttribute("class", "hidden")

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
    
    createCard(book);
}

function createCard(book) {
    let card = document.createElement('div');
    card.classList = 'card';
    main.appendChild(card);

    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList = 'description';

    let title = document.createElement('h4');
    let desc = document.createElement('p');
    title.textContent = book.title;
    desc.innerHTML = "Author: " + book.author + "<br/>Pages: " + book.pages + "<br/> Read: " + book.read;

    card.appendChild(descriptionContainer);
    descriptionContainer.appendChild(title);
    descriptionContainer.appendChild(desc);

    let button = document.createElement('button');
    button.setAttribute('data-bookid', library.length);
    button.textContent = "Remove Book";
    button.addEventListener("click", (event) => {
        let index = event.target.getAttribute('data-bookid');
        removeBook(index);
    });
    card.appendChild(button);
}

function removeBook(index) {
    library.slice(index, 1);
    let button = document.querySelector(`button[data-bookid="${index}"]`);
    let card = button.parentElement;

    main.removeChild(card);
}