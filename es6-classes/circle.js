/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = Math.PI * this.radius * this.radius;
    this.perimeter = 2 * Math.PI * this.radius;
    this.width = this.radius * 2;
  }

  describe() {
    return `This area is ${this.area} and the perimeter is ${this.perimeter} and the width is ${this.width} and the radius is ${this.radius}`;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.describe());
