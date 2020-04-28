function Book(title, author, totalPages, isRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.totalPages} pages total, ${isRead ? "already read" : "not read yet"}.`
    }
}