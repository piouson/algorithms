function palindrome(str) {
  let s = alphaNumCharsAsLowerCase(str);
  for (let x = 0; x < s.length / 2; x++) {
    if (s[x] !== s[s.length - 1 - x]) {
      return false;
    }
  }
  return true;
}

function alphaNumCharsAsLowerCase(str) {
  let regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, "").toLowerCase();
}

words = ["eye", "_eye", "race car", "RaceCar", "race CAR", "not a palindrome", "A man, a plan, a canal. Panama", "never odd or even", "nope", , "almostomla", "My age is 0, 0 si ega ym.", "1 eye for of 1 eye.", "0_0 (: /-\ :) 0-0", "five|\_/|four"];
words.forEach(element => {
  palindrome(element);
});

/**
 * TESTS
 * palindrome("eye") should return a boolean.
 * palindrome("eye") should return true.
 * palindrome("_eye") should return true.
 * palindrome("race car") should return true.
 * palindrome("not a palindrome") should return false.
 * palindrome("A man, a plan, a canal. Panama") should return true.
 * palindrome("never odd or even") should return true.
 * palindrome("nope") should return false.
 * palindrome("almostomla") should return false.
 * palindrome("My age is 0, 0 si ega ym.") should return true.
 * palindrome("1 eye for of 1 eye.") should return false.
 * palindrome("0_0 (: /-\ :) 0-0") should return true.
 * palindrome("five|\_/|four") should return false.
 */
