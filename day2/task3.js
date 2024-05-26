// Book constructor
function Book(name, type) {
    this.name = name;
    this.type = type;
  }
  
  // Box constructor
  function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.numOfBooks = 0;
    this.volume = height * width * length;
    this.content = [];
  
    // Method to add a book to the box
    this.addBook = function(book) {
      this.content.push(book);
      this.numOfBooks++;
    };
  
    // Method to delete a book by name or type
    this.deleteBook = function(criteria) {
      this.content = this.content.filter(book => book.name !== criteria && book.type !== criteria);
      this.numOfBooks = this.content.length;
    };
  
    // Override toString() to display box dimensions and book storage
    this.toString = function() {
      return `Box - Dimensions: ${this.height}x${this.width}x${this.length}, Material: ${this.material}, Number of Books: ${this.numOfBooks}`;
    };
  
    // Override valueOf() to get total books in multiple boxes
    this.valueOf = function() {
      return this.numOfBooks;
    };
  }
  
  // Example usage:
  var box1 = new Box(10, 8, 12, "Cardboard");
  var box2 = new Box(15, 10, 18, "Wood");
  
  var book1 = new Book("Book1", "Fiction");
  var book2 = new Book("Book2", "Non-Fiction");
  var book3 = new Book("Book3", "Science");
  
  // Add books to boxes
  box1.addBook(book1);
  box1.addBook(book2);
  box2.addBook(book3);
  
  console.log(box1.toString()); // Output: Box - Dimensions: 10x8x12, Material: Cardboard, Number of Books: 2
  console.log(box2.toString()); // Output: Box - Dimensions: 15x10x18, Material: Wood, Number of Books: 1
  
  // Delete a book from box1
  box1.deleteBook("Book1");
  console.log(box1.toString()); // Output: Box - Dimensions: 10x8x12, Material: Cardboard, Number of Books: 1
  
  // Using valueOf to get total books in both boxes
  var totalBooks = box1 + box2;
  console.log(`Total books in both boxes: ${totalBooks}`); // Output: Total books in both boxes: 2
  