"use strict";

// Створіть клас BankAccount, який буде представляти банківський рахунок. 
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount  {
  constructor(balance) {
    this.balance = this.#validateBalance(balance);
  }

  getBalance() {
    return this.balance;
  }

  deposit(deposit) {
    if (this.#isValidDeposit(deposit)) {
      return this.balance += deposit;
    } 
  }

  withdraw(consumption) {
    if (this.#isValidСonsumption(consumption)) {
      return this.balance -= consumption;
    }    
  }

  #validateBalance(balance) {
    if (typeof balance === 'number') {
      return balance;
    }

    throw new Error("Invalid balance");
  }

  #isValidDeposit(deposit) {
    return (typeof deposit === 'number' && 0 < deposit) ? true : false;
  }

  #isValidСonsumption(consumption) {
    return typeof consumption === 'number';
  }
}
