function translatePigLatin(str) {
  const vowels = /[aeiou]/;
  const consonants = /^[^aeiou]+/g;
  if (str.charAt(0).match(vowels)) {
    return str + "way";
  }
  else {
    let s = str.match(consonants)[0];
    return str.substr(s.length) + s + "ay";
  }
}

translatePigLatin("schwartz");

/**
 * translatePigLatin("california") should return "aliforniacay".
 * translatePigLatin("paragraphs") should return "aragraphspay".
 * translatePigLatin("glove") should return "oveglay".
 * translatePigLatin("algorithm") should return "algorithmway".
 * translatePigLatin("eight") should return "eightway".
 * Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
 * Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
 */