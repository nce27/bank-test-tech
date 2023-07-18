const Account = require('./account');

describe('Account', () => {

  it ('deposits the a chosen amount and displays the total balance', () =>{
    const account = new Account();
    account.deposit(10);
    expect(account.balance).toBe(10);
  });

});