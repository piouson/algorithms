function sumFibs(num) {
  let fib = 0, first = 0, second = 0, index = [];
  for (let i = 0; first + second < num; i++) {
    if (i > 1) {
      first = index[i - 1 - 1];
      second = index[i - 1];
      index.push(first + second);
    }
    else {
      index.push(1);
    }
    if (index[i] & 1 && index[i] <= num) {
      fib += index[i];
    }
  }
  console.log(index + ", fib = " + fib);
  return fib;
}

const sumFibs2 = num => fibs([], 0, 0, num);

const fibs = (arr, index, fib, num) => {
  if (arr[index - 1] + arr[index - 1 - 1] > num) {
    return fib;
  }
  if (index > 1) {
    arr.push(arr[index - 1] + arr[index - 1 - 1]);
  }
  else {
    arr.push(1);
  }
  if (arr[index] & 1 && arr[index] <= num) {
    fib += arr[index];
  }
  return fibs(arr, index + 1, fib, num)
}

sumFibs(10);

/**
 * TESTS
 * sumFibs(1) should return a number.
 * sumFibs(1000) should return 1785.
 * sumFibs(4000000) should return 4613732.
 * sumFibs(4) should return 5.
 * sumFibs(75024) should return 60696.
 * sumFibs(75025) should return 135721.
 */
