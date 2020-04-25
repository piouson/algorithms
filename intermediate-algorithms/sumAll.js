const sumRange = (a, b) => {
  if (a > b) {
    return 0;
  }
  return a + sumRange(a + 1, b);
}

const sumAll = arr => {
  let [a, b] = arr;
  if (a < b) {
    return sumRange(a, b);
  }
  return sumRange(b, a);
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);

/**
 * TESTS
 * sumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45.
 */