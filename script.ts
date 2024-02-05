class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
}

class Tiger extends Animal {
    // Method to roar
     roar () {
        console.log(`The tigger named ${this.name} is roaring.`);
     }
}

const myTigger = new Tiger('aber', 'hg');

myTigger.roar();