const myLibrary = [];
const addBtn = document.getElementById("add");
const deleteAllBtn = document.getElementById("deleteAll")
const closeBtn = document.getElementById("close")
const submitBtn = document.getElementById("submit")

const bookContainer = document.getElementById("book-container");
const dialog = document.querySelector("dialog");

var editedBook = null;

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

// creates a book after submitting the form
function addBookToLibrary(){
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pageNum = document.querySelector("#pages");
    myLibrary.push(new Book(title.value, author.value, pageNum.value, false));
    displayBooks();
}

// creates DOM elements for the books 
function displayBooks(){
    bookContainer.textContent = "";
    for (const book of myLibrary){
        const newBook = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const page = document.createElement("p");
        const actionBtns = document.createElement("div")
        const hasRead = document.createElement("button");
        const edit = document.createElement("button");
        const del = document.createElement("button");
        hasRead.classList.add("hasRead");
        edit.classList.add("edit");
        del.classList.add("delete");
        actionBtns.classList.add("action-btns");

        actionBtns.append(hasRead);
        actionBtns.append(edit);
        actionBtns.append(del);

        const hasReadImg = document.createElement("img");
        hasReadImg.src = "icons/book-open-variant.svg";
        hasReadImg.classList.add("imageBtn");

        const editImg = document.createElement("img");
        editImg.src = "icons/pencil.svg";
        editImg.classList.add("imageBtn");

        const deleteImg = document.createElement("img");
        deleteImg.src = "icons/trash-can.svg";
        deleteImg.classList.add("imageBtn");

        hasRead.append(hasReadImg);
        edit.append(editImg);
        del.append(deleteImg);

        hasRead.addEventListener("click", () => {
            if (book.hasRead){
                book.hasRead = false;
                hasRead.classList.remove("hasRead-true");
                hasRead.classList.add("hasRead-false");
            } 
            else{
                book.hasRead = true;
                hasRead.classList.remove("hasRead-false");
                hasRead.classList.add("hasRead-true");
            }
        });

        edit.addEventListener("click", () => {
           editedBook = book;
           document.querySelector("#title").value = book.title;
           document.querySelector("#author").value = book.author;
           document.querySelector("#pages").value = book.pageNum;
           dialog.showModal();
        });

        del.addEventListener("click", () => {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayBooks();
        });

        newBook.classList.add("book");
        title.classList.add("title");
        author.classList.add("title");
        page.classList.add("title");
        title.textContent = "Title: " + book.title;
        author.textContent = "Author: " + book.author; 
        page.textContent = "Pages: " + book.pageNum;
        newBook.append(title);
        newBook.append(author);
        newBook.append(page);
        newBook.append(actionBtns);
        bookContainer.append(newBook);
    }
}

// Button Functions 

addBtn.addEventListener("click", () => {
    editedBook = null;
    dialog.showModal();
});

deleteAllBtn.addEventListener("click", () => {
    myLibrary.length = 0;
    bookContainer.textContent = "";
    displayBooks();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", () => {
    if (editedBook == null){
        addBookToLibrary();
    }
    else{
       editedBook.title = document.querySelector("#title").value;
       editedBook.author = document.querySelector("#author").value;
       editedBook.pages = document.querySelector("#pages").value;
       displayBooks();
    }
    dialog.close();
});