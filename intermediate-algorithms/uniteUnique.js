function uniteUnique(arr, ...rest) {
  let arr2 = [];
  for (let element of arguments) {
    element.reduce((a, e) => {
      if (a.indexOf(e) < 0) {
        a.push(e);
      }
      return a;
    }, arr2);
  }
  return arr2;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/**
 * TESTS
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
 */
