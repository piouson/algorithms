function myReplace(str, before, after) {
  const pattern = new RegExp(before, "gi");
  const upperCase = /[A-Z]/;
  const match = pattern.test(str) ? str.match(pattern)[0] : "";
  if (upperCase.test(match.charAt(0))) {
    let sub = after.charAt(0).toUpperCase() + after.substr(1);
    return str.replace(pattern, sub);
  }
  return str.replace(pattern, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

/**
 * TESTS
 * myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
 * myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
 * myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
 * myReplace("His name is Tom", "Tom", "john") should return "His name is John".
 * myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
 */