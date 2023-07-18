const Account = require('./account');

describe('Account', () => {

  it ('deposits the a chosen amount and displays the total balance', () =>{
    const account = new Account();
    account.deposit(10);
    expect(account.balance).toBe(10);
  });

  it ('withdraws the a chosen amount and displays the total balance', () =>{
    const account = new Account();
    account.withdraw(10);
    expect(account.balance).toBe(-10);
  });

  it ('prints the total balance', () =>{
    const account = new Account();
    account.print(10);
    expect(account.balance).toBe(0);
  });
});



// const BankAccount = require('./BankAccount');

// describe('BankAccount', () => {
//   let account;

//   beforeEach(() => {
//     account = new BankAccount();
//   });

//   test('should correctly deposit an amount and update balance', () => {
//     account.deposit(1000, '10-01-2023');
//     expect(account.calculateBalance()).toBe(1000);

//     account.deposit(2000, '13-01-2023');
//     expect(account.calculateBalance()).toBe(3000);
//   });

//   test('should correctly withdraw an amount and update balance', () => {
//     account.deposit(3000, '13-01-2023');
//     account.withdraw(500, '14-01-2023');
//     expect(account.calculateBalance()).toBe(2500);
//   });

//   test('should print bank statement in the correct format', () => {
//     account.deposit(1000, '10-01-2023');
//     account.deposit(2000, '13-01-2023');
//     account.withdraw(500, '14-01-2023');
//   }
// )});