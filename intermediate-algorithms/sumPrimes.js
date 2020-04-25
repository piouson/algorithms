function sumPrimes(num) {
  let i = 0, prime = 0;
  while (i <= num) {
    if (isPrime(i)) {
      prime += i;
    }
    i++;
  }
  return prime;
}

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.sqrt(num) + 1; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
}
sumPrimes(10);

/**
 * TESTS
 * sumPrimes(10) should return a number.
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156
 */
