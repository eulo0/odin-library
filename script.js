const myLibrary = []

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
    myLibrary.push(new Book("Bob", "Arthur", 23, false));
    /* 
    myLibrary.push(new Book("Bob", "Arthur", 23, false));
    myLibrary.push(new Book("Bob", "Arthur", 23, false));
    */
}

addBookToLibrary();

for (books of myLibrary){
    console.log(books.id);
}