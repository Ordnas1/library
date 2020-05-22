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
    this.toggleRead = function() {
        this.isRead ? this.isRead = false : this.isRead = true;
    }
}

function addBooktoLibrary(title, author, totalPages, isRead) {
    let newBook = new Book(title, author, totalPages, isRead);
    myLibrary.push(newBook);
}

function renderBook(Book, index) {
    const container = document.querySelector("#container")
    let card = document.createElement('div');
    let cardTitle = document.createElement('h2');
    let cardHRule = document.createElement('hr');
    let cardAuthor = document.createElement('p');
    let cardPages = document.createElement('p');
    let cardIsRead = document.createElement('p');
    let btnDiv = document.createElement('div');
    let btnRemove = document.createElement('button');
    let btnToggleRead = document.createElement('button');

    card.classList.add("library-card");
    cardAuthor.classList.add("author");
    cardPages.classList.add("pages");
    cardIsRead.classList.add("isread");
    btnDiv.classList.add("btnDiv")
    btnRemove.classList.add("library_btn");
    btnRemove.classList.add("library_btn_remove");
    btnToggleRead.classList.add("library_btn");
    btnToggleRead.classList.add("library_btn_toggleRead")

    cardTitle.textContent = Book.title;
    cardAuthor.textContent = `Written by ${Book.author}`;
    cardPages.textContent = Book.totalPages;
    cardIsRead.textContent = Book.isRead ? "Already read" : "Not read yet"
    btnRemove.textContent = "Remove Book"
    btnToggleRead.textContent = "Toggle Read"

    card.appendChild(cardTitle);
    card.appendChild(cardHRule);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardIsRead);
    card.appendChild(btnDiv);
    btnDiv.appendChild(btnRemove);
    btnDiv.appendChild(btnToggleRead);

    container.appendChild(card);

    card.setAttribute("data-index",index)
    btnRemove.setAttribute("data-index",index)
    btnToggleRead.setAttribute("data-index",index)
}

let cardbtnrmv = document.querySelectorAll("library_btn_remove")
let cardbtntoggle = document.querySelectorAll("library_btn_toggleRead")
function render() {
    let container = document.querySelector("#container")
    container.querySelectorAll('*').forEach(n => n.remove())
    for (let i = 0; i < myLibrary.length; i++) {
        renderBook(myLibrary[i],i)
    }

    cardbtnrmv = document.querySelectorAll(".library_btn_remove")
    cardbtnrmv.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let removeIndex = e.target.dataset.index
            myLibrary.splice(removeIndex,1)
            render();
        } )
    })

    cardbtntoggle = document.querySelectorAll(".library_btn_toggleRead")
    cardbtntoggle.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let toggleIndex = e.target.dataset.index
            myLibrary[toggleIndex].toggleRead()
            render()
        })
    })
    
}

// Form functions

let formbtn = document.querySelector('#btn-add-book');
let hideform = document.querySelector('#hideform');

formbtn.addEventListener('click', () => {
    hideform.classList.toggle('addbook--hidden')
    
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
    form.elements[0].value = ""
    form.elements[1].value = ""
    form.elements[2].value = ""
    form.elements["isread"].value = "true"
})

form.addEventListener("click", e => {
    console.log(e)
    console.log(e.elements)
})

// Card functions


