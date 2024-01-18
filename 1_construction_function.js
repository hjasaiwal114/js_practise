function BankAccount(custormerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance  = balance; 

    this.deposite = function(amount) {
        this.balance  += amount;
    };

    this.withdraw = (amount) => {
        this.balance += amount;
    };
}

// const rakeshAccount = new BankAccount('Himanshu,', 1000);
// const johnAccount  = new BankAccount('John Doe');
// rakeshAccount.deposite(5000);

// console.log(rakeshAccount);

const accounts = [];
const accountForm = document.querySelector('#accountFrom');
const customerName = doucment.querySelector('#customerName');
const balance  = document.querySelector('#balance');