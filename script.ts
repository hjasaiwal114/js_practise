// Inheritance

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
     start() {
        console.log(`The ${this.make} ${this.model} {Year: ${this.year}} is starting.`);
     }
}

class SUV extends Car {
    offRoadCapable: boolean;

    constructor(make:string, model: string, year: number , offRoadCapable: boolean) {

        super (make, model, year);

        this.offRoadCapable = offRoadCapable;
    }
    toggleOffRoadMore() {
        if (this.offRoadCapable) {
            console.log(`The ${this.make} ${this.model} is now in off mode.`);
        } else {
            console.log(`The ${this.make} ${this.model} is not suitable for off-road drivinf`)
        }
    }
 }

 const mySuv  = new SUV('kndfb', "kshf", 2023, true);

 mySuv.start();

 mySuv.toggleOffRoadMore()