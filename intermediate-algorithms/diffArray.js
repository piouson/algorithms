const diffArray = (arr1, arr2) => {
  var newArr = arr1.filter(e => arr2.indexOf(e) < 0);
  return arr2.reduce((a, e) => {
    if (arr1.indexOf(e) < 0) {
      a.push(e);
    }
    return a;
  }, newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

/**
 * TESTS
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
 * [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
 * [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
 * [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
 * [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/
