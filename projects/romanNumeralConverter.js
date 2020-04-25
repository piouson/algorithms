let romanNumerals = {
  0: "",
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

let pivot = 5;

const floor = (number, firstDigit) => number / firstDigit;

const getRomanFigure = (before, after, unit) => romanNumerals[before] + romanNumerals[after].repeat(unit);

// for 4s or 9s
const getBeforeLargerRoman = (number, firstDigit) => {
  let before = floor(number, firstDigit);
  let after = before + number;
  return getRomanFigure(before, after, 1);
}

// for 2s, 3s, 6s, 7s, 8s
const getAfterLargerRoman = (number, firstDigit) => {
  let after = floor(number, firstDigit);
  let before = 0;

  let unit = firstDigit;
  if (unit > pivot) {
    unit -= pivot;
    before = number - (after * unit);
  }

  return getRomanFigure(before, after, unit);
}

const convertToRoman = (num) => {
  if (num > 3999) {
    return "Error: only numbers 3999 and lower implemented...";
  }

  let result = [];
  let ten = 10;
  let factor = 1;
  let digits = num;

  while (digits) {
    let digit = digits % ten;
    let value = digit * factor;

    if (value == 0 || romanNumerals[value]) { // exact match, 1, 5s or 10s
      result.unshift(romanNumerals[value]);
    } else if (romanNumerals[digit + 1]) { // 4s or 9s
      result.unshift(getBeforeLargerRoman(value, digit));
    } else { // multiples of one symbol, 2s, 3s, 6s, 7s or 8s
      result.unshift(getAfterLargerRoman(value, digit));
    }

    digits = Math.floor(digits / ten);
    factor *= ten;
  }

  return result.join("");
}

let testNums = ["2", "3", "4", "5", "9", "12", "16", "29", "44", "45", "68", "83", "97", "99", "400", "500", "501", "649", "798", "891", "1000", "1004", "1006", "1023", "2014", "3999", "4000"];
let romanNums = ["II", "III", "IV", "V", "IX", "XII", "XVI", "XXIX", "XLIV", "XLV", "LXVIII", "LXXXIII", "XCVII", "XCIX", "CD", "D", "DI", "DCXLIX", "DCCXCVIII", "DCCCXCI", "M", "MIV", "MVI", "MXXIII", "MMXIV", "MMMCMXCIX", "guess"];
testNums.forEach(e => {
  convertToRoman(e);
});

/**
 * TESTS
 * convertToRoman(2) should return "II".
 * convertToRoman(3) should return "III".
 * convertToRoman(4) should return "IV".
 * convertToRoman(5) should return "V".
 * convertToRoman(9) should return "IX".
 * convertToRoman(12) should return "XII".
 * convertToRoman(16) should return "XVI".
 * convertToRoman(29) should return "XXIX".
 * convertToRoman(44) should return "XLIV".
 * convertToRoman(45) should return "XLV"
 * convertToRoman(68) should return "LXVIII"
 * convertToRoman(83) should return "LXXXIII"
 * convertToRoman(97) should return "XCVII"
 * convertToRoman(99) should return "XCIX"
 * convertToRoman(400) should return "CD"
 * convertToRoman(500) should return "D"
 * convertToRoman(501) should return "DI"
 * convertToRoman(649) should return "DCXLIX"
 * convertToRoman(798) should return "DCCXCVIII"
 * convertToRoman(891) should return "DCCCXCI"
 * convertToRoman(1000) should return "M"
 * convertToRoman(1004) should return "MIV"
 * convertToRoman(1006) should return "MVI"
 * convertToRoman(1023) should return "MXXIII"
 * convertToRoman(2014) should return "MMXIV"
 * convertToRoman(3999) should return "MMMCMXCIX"
 */
