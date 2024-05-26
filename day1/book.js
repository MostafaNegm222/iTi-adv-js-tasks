function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
  }

  function Author(name, email) {
    this.name = name;
    this.email = email;
  }

  function createBookForm() {
    const numberOfBooks = document.getElementById('numberOfBooks').value;
    const booksContainer = document.getElementById('booksContainer');
    const bookForm = document.createElement('form');

    for (let i = 0; i < numberOfBooks; i++) {
      const bookFields = document.createElement('div');
      bookFields.innerHTML = `
        <label for="bookName${i}">Book Name:</label>
        <input type="text" id="bookName${i}" required>
        <label for="bookPrice${i}">Book Price:</label>
        <input type="number" id="bookPrice${i}" required>
        <label for="authorName${i}">Author Name:</label>
        <input type="text" id="authorName${i}" required>
        <label for="authorEmail${i}">Author Email:</label>
        <input type="email" id="authorEmail${i}" required>
        <br>
      `;
      bookForm.appendChild(bookFields);
    }

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    submitButton.onclick = submitForm;

    booksContainer.innerHTML = '';
    booksContainer.appendChild(bookForm);
    booksContainer.appendChild(submitButton);
  }

  function submitForm() {
    const numberOfBooks = document.getElementById('numberOfBooks').value;
    const books = [];

    for (let i = 0; i < numberOfBooks; i++) {
      const bookName = document.getElementById(`bookName${i}`).value;
      const bookPrice = document.getElementById(`bookPrice${i}`).value;
      const authorName = document.getElementById(`authorName${i}`).value;
      const authorEmail = document.getElementById(`authorEmail${i}`).value;

      // Validation using regular expressions
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(authorEmail)) {
        alert('Invalid email format');
        return;
      }

      const author = new Author(authorName, authorEmail);
      const book = new Book(bookName, bookPrice, author);
      books.push(book);
    }

    displayTable(books);
  }

  function displayTable() {
    const booksTable = document.getElementById('booksTable');
    const booksTableBody = document.getElementById('booksTableBody');
    booksTable.style.display = 'table';
    booksTableBody.innerHTML = '';

    booksData.forEach((book, index) => {
      const row = booksTableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      cell1.innerHTML = book.name;
      cell2.innerHTML = book.price;
      cell3.innerHTML = book.author;

      const editButton = document.createElement('button');
      editButton.className = 'edit';
      editButton.textContent = 'Edit';
      editButton.onclick = () => editRow(index);
      cell4.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteRow(index);
      cell4.appendChild(deleteButton);
    });
  }

function editRow(index) {
const book = booksData[index];

const updatedName = prompt('Enter new book name:', book.name);
if (updatedName !== null) {
  book.name = updatedName;
}

const updatedPrice = prompt('Enter new book price:', book.price);
if (updatedPrice !== null) {
  book.price = updatedPrice;
}

const updatedAuthor = prompt('Enter new author name:', book.author);
if (updatedAuthor !== null) {
  book.author = updatedAuthor;
}

displayTable();
}

function deleteRow(index) {
const confirmDelete = confirm('Are you sure you want to delete this book?');
if (confirmDelete) {
  booksData.splice(index, 1);
  displayTable();
}
}