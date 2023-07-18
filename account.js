class Account {

  constructor() {
    this.balance = 0;
  }

  print(amount) {
    this.balance
  }
    
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    
    this.balance -= amount;
  }

//   calculateBalance() {
//     if (this.transactions.length === 0) {
//       return 0;
//     }
//     return this.transactions[this.transactions.length - 1].balance; //looks at the most recent balance log
//   }
// }

}

module.exports = Account;



