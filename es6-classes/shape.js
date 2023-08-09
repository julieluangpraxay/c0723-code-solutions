/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const myShape = new Shape(10, 95);

console.log(myShape.describe());
