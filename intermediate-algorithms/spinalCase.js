function spinalCase(str) {
  const regex = /[^(a-zA-Z)]|(\w)(?=[A-Z])/g;
  return str.replace(regex, "$1-").toLowerCase();
}

spinalCase("thisIsSpinalTapThe_Andy_Griffith_Show");

/**
 * REGEX explanation
 * [a-zA-Z] = match any case (lower/upper) alphabets
 * [^a-zA-Z] = match everything but alphabets
 * ab|cd = match ab or cd
 * (\w) = match any alphabets assign capture group $1
 * (?=[A-Z]) = lookahead for uppercase alphabets
 * (?<=[a-zA-Z])(?=[A-Z]) = match between an alphabet and an uppercase alphabet,
 * e.g. match between aB = a|B, AB = A|B, ab = no match
 *
 * TESTS
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 * spinalCase("AllThe-small Things") should return "all-the-small-things"
*/
