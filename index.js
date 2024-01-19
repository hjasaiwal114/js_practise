let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return basseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 30_000,
    ovetitme: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage();