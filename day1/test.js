function Author(name, email) {
    this.name = name;
    this.email = email;
  }

  function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
  }

  var booksData = [];
 

  function createBookForm() {
    var numberOfBooks = document.getElementById('numberOfBooks').value;
    var bookInputForm = document.getElementById('bookInputForm');
    var booksTableBody = document.getElementById('booksTableBody');
    
    bookInputForm.style.display = 'block';
    booksTableBody.innerHTML = '';

    
   
      var row = booksTableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = `<input type="text" name="bookName" required>`;
      cell2.innerHTML = `<input type="number" name="bookPrice" required>`;
      cell3.innerHTML = `<input type="text" name="authorName" required pattern="[a-zA-Z]{3,10}">`;
      cell4.innerHTML = `<input type="email" name="authorEmail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">`;
      cell5.innerHTML =`<button type="button" id="submit">Submit</button>`;
        do{
            var cel1 = cell1.value;
            if(!cel1 || !isNaN(cel1) || cel1.length>3 || cel1.length<10){
                var error = createElement("div");
                error.innerHTML="<p>please input valid name</p>";

            }
        }
            while(!cel1 || !isNaN(cel1) || cel1.length>3 || cel1.length<10);


            do{
                var cel2 = cell2.value;
                if(!cel2 || isNaN(cel2)){
                    var error = createElement("div");
                    error.innerHTML="<p>please input valid name</p>";
    
                }
            }
                while(!cel2 || isNaN(cel2) );

        
                do{
                    var cel3 = cell3.value;
                    if(!cel3 || !isNaN(cel3) || cel3.length>3 || cel3.length<10){
                        var error = createElement("div");
                        error.innerHTML="<p>please input valid name</p>";
        
                    }
                }
                while(!cel3 || !isNaN(cel3) || cel3.length>3 || cel3.length<10);


                
                do{
                    var cel4 = cell4.value;
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(cel4)){
                        var error = createElement("div");
                        error.innerHTML="<p>please input valid name</p>";
        
                    }
                }
                while(!cel4 ||!emailRegex.test(cel4));
                var sub = getElementById("submit");
                for(var i=0;i < numberOfBooks;i++){
                   if(onclick(sub)=="true"){
                    displayTable();
                   }
                  }
       
  }


  function submitForm() {
    var form = document.getElementById('bookInputForm');
    var formData = new FormData(form);

    booksData = [];
    for (let i = 0; i < formData.getAll('bookName').length; i++) {
      var bookName = formData.getAll('bookName')[i];
      var bookPrice = formData.getAll('bookPrice')[i];
      var authorName = formData.getAll('authorName')[i];
      var authorEmail = formData.getAll('authorEmail')[i];

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