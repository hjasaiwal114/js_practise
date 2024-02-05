class Bus {
    // Properties
    make: string;
    model: string;
    year: number;
  
    // Constructor
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to start the bus
    start() {
      console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
    }
  }
  
  // Create a Bus object
  const myBus = new Bus("Volvo", "9400 B11R", 2019);
  
  // Call the start method to start the bus
  myBus.start(); 
  