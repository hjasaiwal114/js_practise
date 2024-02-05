var Bus = /** @class */ (function () {
    // Constructor
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to start the bus
    Bus.prototype.start = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " (Year: ").concat(this.year, ") is starting."));
    };
    return Bus;
}());
// Create a Bus object
var myBus = new Bus("Volvo", "9400 B11R", 2019);
// Call the start method to start the bus
myBus.start();
