class Shape  {
    calaculateArea() {
        throw new Error("Method 'CalculateArea()' must be over overidden in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calaculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.heigth = height;
    }
    calaculateArea() {
        return this.width = this.height;
    }
}

const circle = new Circle(7);
const circleArea = circle.calaculateArea();
console.log(`Circle Area: ${circleArea}`);

const rectangle = new Rectangle(8, 9);
const rectangleArea = rectangle.calaculateArea();
console.log(`Rectangle area: ${rectangleArea}`);