// ommmit for exculdinfg the property
interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonWithoutAge = Omit<Person, 'age'>;

const john: PersonWithoutAge = {
    name: 'john',
    address: '123 main set',
}