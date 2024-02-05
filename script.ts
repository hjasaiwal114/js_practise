class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw() {
        console.log(`Drwaing a ${this.color} shape.`);
    }
}

class Circle extends Shape {
    constructor(color: string) {
        super(color);
    }

    draw() {
        console.log(`Drawing a ${this.color} circle.`);
    }
}

const myCricle = new Circle("RED");

myCricle.draw();