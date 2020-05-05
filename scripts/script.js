// Global vars


let myLibrary = [];

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

function render(Book) {
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

function debugRender() {
    myLibrary.forEach(book => render(book))
}