// Rectangle Constructor
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  // Incrementing the count of created objects
  Rectangle.count++;
}

// Initializing the count of created objects
Rectangle.count = 0;

// Prototype methods for calculating area and perimeter
Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.calculatePerimeter = function () {
  return 2 * (this.width + this.height);
};

// Overriding toString() method
Rectangle.prototype.toString = function () {
  return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
};

// Class method to retrieve the count of created objects
Rectangle.getCountOfObjects = function () {
  return Rectangle.count;
};

// Example usage:
let rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.toString()); // Output: Rectangle - Width: 5, Height: 10, Area: 50, Perimeter: 30

let rectangle2 = new Rectangle(8, 12);
console.log(rectangle2.toString()); // Output: Rectangle - Width: 8, Height: 12, Area: 96, Perimeter: 40

// Retrieving the count of created objects
console.log(Rectangle.getCountOfObjects()); // Output: 2


////////////////////////////////////////////////////////////////////////////////




// Shape Constructor
function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot create an instance of the Shape class.");
  }
}

// Rectangle Constructor inheriting from Shape
function Rectangle(width, height) {
  Shape.call(this); // Call the parent constructor
  this.width = width;
  this.height = height;

  // Check if a rectangle has already been created
  if (Rectangle.created) {
    throw new Error("Only one rectangle can be created.");
  }

  // Incrementing the count of created rectangles
  Rectangle.created = true;
}

// Inheriting from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Static property to track the created rectangles
Rectangle.created = false;

// Square Constructor inheriting from Rectangle
function Square(side) {
  Rectangle.call(this, side, side);

  // Check if a square has already been created
  if (Square.created) {
    throw new Error("Only one square can be created.");
  }

  // Incrementing the count of created squares
  Square.created = true;
}

// Inheriting from Rectangle
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Static property to track the created squares
Square.created = false;

// Example usage:
let rectangle = new Rectangle(5, 10);
console.log(rectangle.toString()); // Output: Rectangle - Width: 5, Height: 10, Area: 50, Perimeter: 30

let square = new Square(8);
console.log(square.toString()); // Output: Rectangle - Width: 8, Height: 8, Area: 64, Perimeter: 32

// Try to create another rectangle (will throw an error)
// let anotherRectangle = new Rectangle(3, 6); // Error: Only one rectangle can be created.

// Try to create another square (will throw an error)
// let anotherSquare = new Square(4); // Error: Only one square can be created.





///////////////////////////////////////////////////////////////////////////////


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
let box1 = new Box(10, 8, 12, "Cardboard");
let box2 = new Box(15, 10, 18, "Wood");

let book1 = new Book("Book1", "Fiction");
let book2 = new Book("Book2", "Non-Fiction");
let book3 = new Book("Book3", "Science");

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
let totalBooks = box1 + box2;
console.log(`Total books in both boxes: ${totalBooks}`); // Output: Total books in both boxes: 2



//////////////////////////////////////////////////////////////////////////

//task 3 old day


var customObject = {
  getSetGen: function () {
      var self = this;
      Object.keys(self).forEach((property) => {
          if (typeof self[property] !== 'function') {
              // Check if the property is not a function
              var capitalizedProperty = property.charAt(0).toUpperCase() + property.slice(1);

              // Define a getter using Object.defineProperty
              Object.defineProperty(self, property, {
                  get: function () {
                      return self[`_${property}`];
                  },
                  set: function (value) {
                      self[`_${property}`] = value;
                  },
                  enumerable: true, // Make the property enumerable
                  configurable: true, // Make the property configurable
              });
          }
      });
  },
};

var user = { name: "Ali", age: 10 };

customObject.getSetGen.call(user);

console.log(user.name); // Output: Ali
console.log(user.age);  // Output: 10

user.name = "Ahmed";
user.age = 25;

console.log(user.name); // Output: Ahmed
console.log(user.age);  // Output: 25
