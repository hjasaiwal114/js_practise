// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name  = name;
        this.age  =  age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Nmae: ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

// create instance of the person class
const person1  = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'Netherland');

console.log('Perosn-1 Details:');
person1.displayDetails();

console.log('\nPerson-2 Details:');
person2.displayDetails()