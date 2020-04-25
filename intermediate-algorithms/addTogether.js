function addTogether() {
  const arr = Object.values(arguments);
  if (!arr.every(e => Number.isSafeInteger(e))) {
    return;
  }
  if (arr.length === 2) {
    return arr.reduce((a, e) => a + e);
  }
  return function (e) {
    if (Number.isSafeInteger(e)) {
      return e + arr[0];
    }
    else {
      return;
    }
  }
}

addTogether(2, 3);

/**
 * TESTS
 * addTogether(2, 3) should return 5.
 * addTogether(2)(3) should return 5.
 * addTogether("http://bit.ly/IqT6zt") should return undefined.
 * addTogether(2, "3") should return undefined.
 * addTogether(2)([3]) should return undefined.
 */
