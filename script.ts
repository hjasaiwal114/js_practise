// oops
class Bus {
    // Properties
    make: string;
    model: string;
    year: number
// Constructor
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Crete a bus object
const myBus = new Bus("Volvo", "93784 B11R", 2019);

console.log("Make:", myBus.make);     // Output: Make: Volvo
console.log("Model:", myBus.model);   // Output: Model: 9400 B11Rr
console.log("Year:", myBus.year); 