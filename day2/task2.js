// Shape Constructor
function Shape() {
  if (this.constructor === Shape) {
      throw new Error("Cannot create an instance of the Shape class.");
  }
}

// Override toString method for Shape
Shape.prototype.toString = function () {
  return "Shape";
};

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

// Override toString method for Rectangle
Rectangle.prototype.toString = function () {
  return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.width * this.height}, Perimeter: ${2 * (this.width + this.height)}`;
};

// Static property to track the created rectangles
Rectangle.created = false;

// Square Constructor inheriting from Rectangle
function Square(side) {
  Shape.call(this); // Ensure Square doesn't inherit from Rectangle
  this.width = this.height = side;

  // Check if a square has already been created
  if (Square.created) {
      throw new Error("Only one square can be created.");
  }

  // Incrementing the count of created squares
  Square.created = true;
}

// Inheriting from Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Override toString method for Square
Square.prototype.toString = function () {
  return `Square - Side: ${this.width}, Area: ${this.width * this.width}, Perimeter: ${4 * this.width}`;
};

// Static property to track the created squares
Square.created = false;

// Example usage:
let rectangle = new Rectangle(5, 10);
console.log(rectangle.toString());

// Try to create another rectangle (will throw an error)
var anotherRectangle = new Rectangle(3, 6);

let square = new Square(8);
console.log(square.toString());

// Try to create another square (will throw an error)
// var anotherSquare = new Square(4);