function Author(name, email) {
    this.name = name;
    this.email = email;
  }

  function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
  }
  

  let booksData = [];
  var tab = document.getElementById("form-container");
  tab.style.display="none";
  function createBookForm() {
    var numberOfBooks = document.getElementById('numberOfBooks').value;
    var bookforms = document.getElementById("form-container")
      var bookFields = document.createElement('div');
      bookFields.innerHTML = `
      <div class="form">    
          <div class="error-message" id="global-error"></div>
          <form id="userForm" method="get">
              <div class="form-field">
                  <label for="name">Book Name:</label>
                  <input type="text" id="name" placeholder="Enter your book name" name="name">
                  <div class="error-message" id="name-error"></div>
              </div>
      
              <div class="form-field">
                  <label for="price">price:</label>
                  <input type="text" id="price" placeholder="Enter your price" name="price">
                  <div class="error-message" id="age-error"></div>
              </div>

              <div class="form-field">
                  <label for="author_name">Author Name:</label>
                  <input type="text" id="author_name" placeholder="Enter your author name" name="author">
                  <div class="error-message" id="name-error"></div>
              </div>
      
              <div class="form-field">
                  <label for="email">Author Email:</label>
                  <input type="text" id="email" placeholder="Enter your  Author email" name="email">
                  <div class="error-message" id="email-error"></div>
              </div>
      
              <button type="button" onclick="addData()">Add</button>
              <button type="button" onclick="resetForm()">Reset</button>
          </form>
      </div>
      `;
      bookforms.appendChild(bookFields);
        
      }
      function toggleForms() {
        var container = document.getElementById("container");
        var formContainer = document.getElementById("form-container");
    
        container.style.display = "none";
        formContainer.style.display = "block";
    
        createBookForm();
      }
    // createBookForm();
    
function addData() {
    var bookname = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var authorName = document.getElementById("author_name").value;
    var email = document.getElementById("email").value;

    var globalErrorDiv = document.getElementById("global-error");
    
    if (validateForm(bookname, price,authorName ,email)) {
        hideError("global-error");

        displayTable();

        resetForm();
    } else {
        globalErrorDiv.style.display = "block";
    }
}

function resetForm() {
  document.getElementById("userForm").reset();
  hideError("global-error");
}

function validateForm(name, price, authorName ,email) {
  var nameRegex = /^[A-Za-z]{3,10}$/;
  var ageRegex = /^[0-9]{1,2}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  hideError("name-error");
  hideError("price-error");
  hideError("email-error");
  hideError("global-error");

  if (!nameRegex.test(name)) {
      showError("Please enter a valid name (3-10 characters).", "name-error");
      return false;
  }

  if (!ageRegex.test(price)) {
      showError("Please enter a valid age (between 3 and 60).", "age-error");
      return false;
  }

  if (!nameRegex.test(authorName)) {
    showError("Please enter a valid name (3-10 characters).", "name-error");
    return false;
}

  if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.", "email-error");
      return false;
  }

  return true;
}

function showError(message, errorDivId) {
  var errorDiv = document.getElementById(errorDivId);
  errorDiv.innerHTML = message;
  errorDiv.style.display = "block";
}

function hideError(errorDivId) {
  document.getElementById(errorDivId).style.display = "none";
}



function submitForm() {
  var form = document.getElementById('bookInputForm');
  var formData = new FormData(form);

  booksData = [];
  for (let i = 0; i < formData.getAll('name').length; i++) {
    var bookName = formData.getAll('name')[i];
    var bookPrice = formData.getAll('price')[i];
    var authorName = formData.getAll('author')[i];
    var authorEmail = formData.getAll('email')[i];

    var author = new Author(authorName, authorEmail);
    var book = new Book(bookName, bookPrice, author);
    booksData.push(book);
  }

  displayTable();
}

function displayTable() {
  var booksTableBody = document.getElementById('booksTableBody');
  booksTableBody.innerHTML = '';

  booksData.forEach((book, index) => {
    var row = booksTableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = book.name;
    cell2.innerHTML = book.price;
    cell3.innerHTML = book.author.name;
    cell4.innerHTML = book.author.email;

    var editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.type ="button";
    editButton.onclick = () => editRow(index);
    cell5.appendChild(editButton);

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.type ="button";
    deleteButton.onclick = () => deleteRow(index);
    cell5.appendChild(deleteButton);
  });
}

function editRow(index) {
  var row = document.getElementById('booksTableBody').rows[index];

  for (let i = 0; i < row.cells.length - 1; i++) {
    var content = row.cells[i].textContent;
    var input = document.createElement('input');
    input.value = content;
    row.cells[i].innerHTML = '';
    row.cells[i].appendChild(input);
  }

  var saveButton = document.createElement('button');
  saveButton.className = 'save';
  saveButton.textContent = 'Save';
  saveButton.type ="button";
  saveButton.onclick = () => saveChanges(index);
  row.cells[row.cells.length - 1].appendChild(saveButton);

  var cancelButton = document.createElement('button');
  cancelButton.className = 'cancel';
  cancelButton.textContent = 'Cancel';
  cancelButton.type ="button";
  cancelButton.onclick = () => cancelChanges(index);
  row.cells[row.cells.length - 1].appendChild(cancelButton);
}

function saveChanges(index) {
  var row = document.getElementById('booksTableBody').rows[index];

  var updatedBook = new Book(
    row.cells[0].querySelector('input').value,
    row.cells[1].querySelector('input').value,
    new Author(
      row.cells[2].querySelector('input').value,
      row.cells[3].querySelector('input').value
    )
  );

  booksData[index] = updatedBook;
  displayTable();
}

function cancelChanges(index) {
  displayTable();
}

function deleteRow(index) {
  var confirmDelete = confirm('Are you sure you want to delete this book?');
  if (confirmDelete) {
    booksData.splice(index, 1);
    displayTable();
  }
}

