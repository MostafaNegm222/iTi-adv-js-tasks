function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
};

Rectangle.prototype.calculatePerimeter = function () {
    return 2 * (this.width + this.height);
};


Rectangle.prototype.displayInfo = function () {
    console.log(`Rectangle Information:
    Width: ${this.width}
    Height: ${this.height}
    Area: ${this.calculateArea()}
    Perimeter: ${this.calculatePerimeter()}`);
};

var myRectangle = new Rectangle(5, 8);

myRectangle.displayInfo();