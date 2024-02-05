class BankAccount {
    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    public deposit(amount: number) : void {
        if (amount > 0) {
            this.balance += amount;
            
        }
    }
}