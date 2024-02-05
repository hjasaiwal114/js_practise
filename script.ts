// class compostion

class Engine {
    horsePower: number;
    fuelType: string;

    constructor(horsepower: number, fuelType: string) {
        this.horsePower = horsepower;
        this.fuelType  = fuelType;
    }
}

class Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;

    constructor(make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    start () {
        console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
    }

    printCarDetails() {
        console.log(`Car Details:`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Engine Details:`);
        console.log(`Horsepower: ${this.engine.horsepower}`);
        console.log(`Fuel Type: ${this.engine.fuelType}`);
      }
    }

const myEngine=  new Engine(200, "Gasoline");

const myCar = new Car("Audi", "A3", 2023, myEngine);

myCar.start();

myCar.printCarDetails();