class BankAccount {
    constructor(){
        this.balance = 0;
        this.transactions  = [];
    }

    deposit(amount) {
        if(amount > 0){
            this.transactions.push({
                type:"deposit",
                amount: amount
            }) 
            this.balance += amount

            return `Successfully deposited $${amount}. New balance: $${this.balance}`
            
        }  else {
            return "Deposit amount must be greater than zero."
        }
        

    }

    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.transactions.push({
                type:"withdraw",
                amount: amount
            }) 
            this.balance -= amount

            return `Successfully withdrew $${amount}. New balance: $${this.balance}`
            
        } else {
            return "Insufficient balance or invalid amount."
        }
    }

    checkBalance(){
        return `Current balance: $${this.balance}`
    }

    listAllDeposits(){

        const despositTransaction = this.transactions.filter((trancsactionObj) => trancsactionObj.type == "deposit")

        const depositTransactionAmount = despositTransaction.map(trancsactionObj => trancsactionObj.amount)

        return `Deposits: ${depositTransactionAmount.join(",")}`

    }

    listAllWithdrawals(){

        const withdrawlsTransaction = this.transactions.filter(trancsactionObj => trancsactionObj.type == "withdraw")
        
        const withdrawlsTransactionAmount = withdrawlsTransaction.map(trancsactionObj => trancsactionObj.amount)

        return `Withdrawals: ${withdrawlsTransactionAmount.join(",")}`

    }
}

const myAccount = new BankAccount()

myAccount.deposit(100)
myAccount.deposit(150)
myAccount.deposit(250)

console.log(myAccount.withdraw(50))
console.log(myAccount.withdraw(90))
console.log(myAccount.withdraw(120))

console.log(myAccount)
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())