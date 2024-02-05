class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.age = age;
    }
}

class Employee extends Person {
    employeeId: string;

    constructor(name: string, age: number, employeeId: string) {
        super(name, age);
         this.employeeId = employeeId;
    }
}

const myEmployeee = new Employee("Elimra Ugochi", 40, "EPM-0012");