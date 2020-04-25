const flatten = arr => {
  return arr.reduce((a, e) => {
    if (Array.isArray(e)) {
      a.push(...flatten(e));
    }
    else {
      a.push(e);
    }
    return a;
  }, []);
}

function steamrollArray(arr) {
  return flatten(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);

/**
 * TESTS
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */