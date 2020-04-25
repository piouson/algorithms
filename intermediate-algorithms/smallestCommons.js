// ref: https://www.edplace.com/blog/edplace-explains/what-is-the-highest-common-factor
const hcf = (a, b) => {
  if (b < 1) {
    return;
  }
  if (a === b) {
    return a;
  }
  if (a < b) {
    return hcf(b, a);
  }
  if (a % b === 0) {
    return b;
  }
  else {
    return hcf(b, a % b);
  }
}

// ref: https://byjus.com/lcm-formula/
const lcm = (a, b) => {
  if (a % b === 0) {
    return a;
  }
  return a * b / hcf(a, b);
}

function smallestCommons(arr) {
  let [first, last] = arr;
  if (first > last) {
    [last, first] = arr;
  }

  let commons = 1;
  while (first <= last) {
    commons = lcm(commons, first);
    first++;
  }
  return commons;
}

smallestCommons([1, 5]);

/**
 * TESTS
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([2, 10]) should return 2520.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 */
