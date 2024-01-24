class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance  = balance;
        console.log(`A/C No.: ${accountNumber}`);
    }
    deposite(amount) {
        this.balance += amount;
        console.log(`Deposite: $${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        }
        else
        {
            console.log(`Want to withdrawn: ${amount}`);
            console.log('Insufficient balance');
        }
    }
    displayBalance() {
        console.log(`Account Blaance: $${amount}`);
    }
}

const account  = new BankAccount('SB-123', 1500);

account.deposite(500);
account.withdraw(400);
account.displayBalance();
account.withdraw(1800);
account.displayBalance();