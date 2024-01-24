// Parent constructor function
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log(`Hello, I'am ${this.name}`);
};

function Dog(name, breed) {
    Animal.call(this, name);

    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.construtor = Dog;

Dog.prototype.bark  = function() {
    console.log("WOof! Woof!")
}

const myAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

myAnimal.sayHello();
myDog.sayHello();
myDog.bark();