const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

  function addBookToLibrary() {
    event.preventDefault();

    const title = form.querySelector('#Title').value;
    const author = form.querySelector('#Aurthor').value;
    const pages = form.querySelector('#Pages').value;
    const read =  form.querySelector('#Read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    saveToLocalStorage();
    displayBooks();
    modle.close();
    form.reset();
}

function displayBooks() {
    const tableBody = document.getElementById('libraryTableBody');
    tableBody.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read ? 'Yes' : 'No'} <button onclick="toggleRead(${index})" class="read-button">✔</button></td>
            <td><button onclick="removeBook(${index})" class="remove-button">x</button></td>
        `;
    });
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    saveToLocalStorage();
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    saveToLocalStorage();
    displayBooks();
}

function saveToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

const openmodle= document.querySelector('.add_button');
const modle = document.querySelector('.modle');
const submitButton= document.querySelector('.sybmit-btn');
const form= document.querySelector('form');
 openmodle.addEventListener('click', ()=>{
    modle.showModal();
    console.log("hello")
 });

displayBooks();