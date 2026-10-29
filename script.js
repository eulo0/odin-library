const myLibrary = [];
const addBtn = document.getElementById("add");
const deleteAllBtn = document.getElementById("deleteAll")
const closeBtn = document.getElementById("close")
const submitBtn = document.getElementById("submit")

const bookContainer = document.getElementById("book-container");
const dialog = document.querySelector("dialog");

const deleteBtn = document.getElementById("delete");
const hasRead = document.getElementById("hasRead");
const edit = document.getElementById("edit");

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
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pageNum = document.querySelector("#pages");
    myLibrary.push(new Book(title.value, author.value, pageNum.value, false));
    displayBooks();
}

function displayBooks(){
    for (book of myLibrary){
        var newBook = document.createElement("div");
        var title = document.createElement("p");
        var author = document.createElement("p");
        var page = document.createElement("p");
        var actionBtns = document.createElement("div")
        var hasRead = document.createElement("button");
        var edit = document.createElement("button");
        var del = document.createElement("button");
        hasRead.classList.add("hasRead");
        edit.classList.add("edit");
        del.classList.add("delete");
        actionBtns.classList.add("action-btns");

        actionBtns.append(hasRead);
        actionBtns.append(edit);
        actionBtns.append(del);

        var deleteImg = document.createElement("img");
        deleteImg.src = "icons/trash-can.svg";
        deleteImg.classList.add("imageBtn");

        del.append(deleteImg);

        del.addEventListener("click", () => {
        });

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
        newBook.append(actionBtns);
        console.log(author);
        bookContainer.append(newBook);
    }
}

addBtn.addEventListener("click", () => {
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
    /* preventDefault(); */
    addBookToLibrary();
    dialog.close();
});



// addBookToLibrary();
// displayBooks();