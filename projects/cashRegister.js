class RegisterStatus {
  constructor(status, change = []) {
    this.status = status;
    this.change = change;
  }
}

const getStatus = (leftToPay, balance, register, change) => {
  const STATUS = {
    "OPEN": "OPEN",
    "CLOSED": "CLOSED",
    "INSUFFICIENT_FUNDS": "INSUFFICIENT_FUNDS"
  };

  if (!leftToPay && !balance) {
    return new RegisterStatus(STATUS.CLOSED, register);
  }
  if (leftToPay) {
    return new RegisterStatus(STATUS.INSUFFICIENT_FUNDS);
  }
  return new RegisterStatus(STATUS.OPEN, change);
}

const calculateChange = (amount, cashRegister, currency) => {
  let leftToPay = amount;
  let balance = 0;
  let change = cashRegister.reduceRight((bal, [bill, value]) => {
    if (currency[bill] < amount && value > 0) {
      let payable = Math.floor(leftToPay / currency[bill]) * currency[bill];
      if (payable > value) {
        bal.push([bill, value]);
        leftToPay = Math.round((leftToPay - value) * 100) / 100;
      }
      else if (payable) {
        bal.push([bill, payable]);
        leftToPay = Math.round((leftToPay - payable) * 100) / 100;
        balance = Math.round((balance + value - payable) * 100) / 100;
      }
      else {
        balance += value;
      }
    }
    return bal;
  }, []);
  return getStatus(leftToPay, balance, cashRegister, change);
}

function checkCashRegister(price, cash, cid) {
  const UNIT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  let change = cash - price;
  return calculateChange(change, cid, UNIT);
}

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
checkCashRegister(19.5, 20, cid);

/**
 * TESTS
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
 * checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
 */
