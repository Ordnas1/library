// Global vars
let myLibrary = [];

//Book object and constructor
function Book(title, author, totalPages, isRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.totalPages} pages total, ${isRead ? "already read" : "not read yet"}.`
    }
}

function addBooktoLibrary(title, author, totalPages, isRead) {
    let newBook = new Book(title, author, totalPages, isRead);
    myLibrary.push(newBook);
}

function renderBook(Book) {
    const container = document.querySelector("#container")
    let card = document.createElement('div');
    let cardTitle = document.createElement('h2');
    let cardHRule = document.createElement('hr');
    let cardAuthor = document.createElement('p');
    let cardPages = document.createElement('p');
    let cardIsRead = document.createElement('p');

    card.classList.add("library-card");
    cardAuthor.classList.add("author");
    cardPages.classList.add("pages");
    cardIsRead.classList.add("isread");

    cardTitle.textContent = Book.title;
    cardAuthor.textContent = `Written by ${Book.author}`;
    cardPages.textContent = Book.totalPages;
    cardIsRead.textContent = Book.isRead ? "Already read" : "Not read yet"

    card.appendChild(cardTitle);
    card.appendChild(cardHRule);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardIsRead);

    container.appendChild(card);
}

function render() {
    let container = document.querySelector("#container")
    container.querySelectorAll('*').forEach(n => n.remove())
    myLibrary.forEach(book => renderBook(book))
}

// Form functions

let formbtn = document.querySelector('#btn-add-book');
let hideform = document.querySelector('#hideform');

formbtn.addEventListener('click', () => {
    hideform.classList.toggle('addbook--hidden')
    console.log("click")
})

let form = document.querySelector("#form-main")
let formSubmit = document.querySelector("#form-submit") 

formSubmit.addEventListener('click',() => {
    addBooktoLibrary(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value,
        form.elements["isread"].value === "true" ? true : false
    )
    render();
    hideform.classList.toggle('addbook--hidden')
})

form.addEventListener("click", e => {
    console.log(e)
    console.log(e.elements)
})

// Helper functions for console debugging
