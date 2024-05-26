function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    Rectangle.count++;
  }
  
  Rectangle.count = 0;
  
  Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
  };
  
  Rectangle.prototype.calculatePerimeter = function () {
    return 2 * (this.width + this.height);
  };
  
  Rectangle.prototype.toString = function () {
    return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
  };
  
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
  