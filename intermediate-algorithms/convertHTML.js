const regex = /[&<>"']/gi;
const entityName = {
  34: "&quot;",
  38: "&amp;",
  39: "&apos;",
  60: "&lt;",
  62: "&gt;"
}
const entityName2 = {
  "\"": "&quot;",
  "&": "&amp;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;"
}
function convertHTML(str) {
  console.log(str.replace(regex, m => entityName[m.charCodeAt()]));
  return str.replace(regex, m => entityName[m.charCodeAt()]);
}

convertHTML("Dolce & Gabbana");

/**
 * TESTS
 * convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
 * convertHTML("Schindler's List") should return Schindler&apos;s List.
 * convertHTML("<>") should return &lt;&gt;.
 * convertHTML("abc") should return abc.
 */
