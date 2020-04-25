const reverse = (arr) => [].concat(arr).reverse();
const getPair = (arr, index) => index === 0 ? arr : reverse(arr);

function pairElement(str) {
  let arr = [];
  if (!/[atcg]/gi.test(str)) {
    return arr;
  }

  let at = ["A", "T"], cg = ["C", "G"];
  for (let e of str) {
    if (at.indexOf(e) >= 0) {
      arr.push(getPair(at, at.indexOf(e)));
    }
    else {
      arr.push(getPair(cg, cg.indexOf(e)))
    }
  }
  console.log(arr);
  return arr;
}

function pairElement2(str) {
  let arr = [];
  if (!/[atcg]/gi.test(str)) {
    return arr;
  }

  let dna = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"]
  };

  for (let e of str) {
    arr.push(dna[e]);
  }
  return arr;
}

pairElement("GCG");

/**
 * TESTS
 * pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
 * pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
 * pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
 */
