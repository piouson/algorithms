const unit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

const STATUS = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED",
  "INSUFFICIENT_FUNDS": "INSUFFICIENT_FUNDS"
}

class RegisterStatus {
  constructor(status, change) {
    this.status = status;
    this.change = change;
  }
}

class CashRegister {
  constructor(register) {
    this.balance = register.slice();
  }
  static Units() {
    return {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
  }

  #indexOf = bill => this.balance.findIndex(e => e[0] === bill);

  get balance() {
    return this.balance;
  }
  totalBalance() {
    return this.balance.reduce((acc, [, value]) => acc + value, 0);
  }
  setBalance(bill, amount) {
    const index = this.#indexOf(bill);
    this.balance[index][1] = amount;
    return this.balance;
  }
  deposit(bill, amount) {
    const index = this.#indexOf(bill);
    this.balance[index][1] += amount;
    return this.balance;
  }
  #

  processWithdrawal = (amount, register, change) => {
    let index = register.splice().reverse().findIndex(
      ([b, v]) => CashRegister.Units[b] < amount && v > 0
    );
    if (index < 0) { // cannot provide change
      return [];
    }

    let [bill, value] = register[index];
    let leftToPay = amount % CashRegister.Units[bill]
    if (leftToPay === 0) { // this bill can process all/some amount
      if (amount > value) { // not enough balance to pay all amount
        // deduct total value of bill - set to 0
        register[index][1] -= value;
        // add deducted to change
        change.push([bill, value]);
        // process remaining amount
        leftToPay = amount - value;
        change.push(...this.#processWithdrawal(leftToPay, register, change));
      } else {
        // deduct all amount from balance
        register[index][1] -= amount;
        // add deducted to change
        change.push([bill, amount]);
        // return change amount in coins/bills
        return change;
      }
    } else { // other bills required to pay rest
      // deduct payable value of bill
      // add deducted to change
      // process remaining amount
    }
  }
  withdraw(amount) {
    let register = this.balance.splice();
    let value = this.#processWithdrawal(amount, register, []);
  }
}

const formatMoney = amount => Number(parseFloat(amount).toFixed(2));

const getRegisterBalance = cid => {
  let amt = cid.reduce((a, [, value]) => a + value, 0);
  return formatMoney(amt);
}

const calculateChange = (change, cashRegister, currency) => {
  let [bill, value] = [].concat(cashRegister).reverse().find(([bill,]) =>
    currency[bill] < change);

  let result = [];
  let balance = change % currency[bill];
  if (value === 0) { // no change
    return result;
  }
  if (balance === 0) { // no more cash in register
    console.log("change = " + change + ", value = " + value)
    result.push([bill, value]);
    return result;
  } else {
    if (change > value) {
      balance = formatMoney(change - value);
      result.push([bill, value]);
    } else {
      balance = formatMoney(balance);
      result.push([bill, formatMoney(change - balance)]);
    }

    result.push(...calculateChange(balance, cashRegister, currency));
    return result;
  }
}

const getChange = (change, cashRegister, currency) => {
  let registerBalance = getRegisterBalance(cashRegister);

  if (registerBalance < change) {
    return [];
  }
  if (registerBalance === formatMoney(change)) {
    return cashRegister;
  }
  return calculateChange(change, cashRegister, currency);
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = getChange(change, cid, unit);
  let status = STATUS.OPEN;

  if (result.length === 0) {
    status = STATUS.INSUFFICIENT_FUNDS;
  }
  if (result === cid) {
    status = STATUS.CLOSED;
  }
  console.log(JSON.stringify(new RegisterStatus(status, result)));
  return new RegisterStatus(status, result);
}
// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]);
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
