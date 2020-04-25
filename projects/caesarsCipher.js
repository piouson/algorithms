function rot13(str) {
  const rot13Offset = 13;
  const alphabethLength = 26;
  const charCodeAtZ = "Z".charCodeAt();
  return str.replace(/[A-Z]/g, match => {
    let charCode = match.charCodeAt() + rot13Offset;
    if (charCode > charCodeAtZ) {
      charCode -= alphabethLength;
    }
    return String.fromCharCode(charCode);
  });
}

rot13("SERR PBQR PNZC");

/**
 * TESTS
 * rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
 * rot13("SERR CVMMN!") should decode to FREE PIZZA!
 * rot13("SERR YBIR?") should decode to FREE LOVE?
 * rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 */
