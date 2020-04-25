function fearNotLetter(str) {
  let found,
    index = 0,
    charCode = str.charCodeAt();

  while (str.charCodeAt(index) === charCode) {
    charCode++;
    index++;
  }
  if (/[a-z]/i.test(String.fromCharCode(charCode)) &&
    str.charCodeAt(index) !== charCode) {
    found = String.fromCharCode(charCode);
  }

  return found;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");

/**
 * TESTS
 * fearNotLetter("abce") should return "d".
 * fearNotLetter("abcdefghjklmno") should return "i".
 * fearNotLetter("stvwx") should return "u".
 * fearNotLetter("bcdf") should return "e".
 * fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */
