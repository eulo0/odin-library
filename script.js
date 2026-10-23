const myLibrary = [];
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete")
const closeBtn = document.getElementById("close")
const submitBtn = document.getElementById("submit")

const bookContainer = document.getElementById("book-container");
const dialog = document.querySelector("dialog");

function Book(title, author, pageNum, hasRead){
    if (!new.target) {
        throw Error("You must use the 'new operator to call the constructor");
    }
    this.title = title;
    this.author = author; 
    this.pageNum = pageNum; 
    this.hasRead = hasRead; 
    this.id = crypto.randomUUID();
}

function addBookToLibrary(){
    myLibrary.push(new Book("title", "author", 123, false));
    console.log("hi");
    displayBooks();
}

function displayBooks(){
    for (book of myLibrary){
        var newBook = document.createElement("div");
        var title = document.createElement("p");
        var author = document.createElement("p");
        var page = document.createElement("p");
        newBook.classList.add("book");
        title.classList.add("title");
        author.classList.add("title");
        page.classList.add("title");
        title.textContent = book.title;
        author.textContent = book.author; 
        page.textContent = book.pageNum;
        newBook.append(title);
        newBook.append(author);
        newBook.append(page);
        console.log(author);
        bookContainer.append(newBook);
    }
}

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

deleteBtn.addEventListener("click", () => {
    myLibrary.length = 0;
    bookContainer.textContent = "";
    displayBooks();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", () => {
    /* preventDefault(); */
    addBookToLibrary();
    dialog.close();
});

// addBookToLibrary();
// displayBooks();