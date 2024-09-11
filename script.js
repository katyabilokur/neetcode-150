//-----  -----
//----- Stack: Valid Parentheses -----
//-----  -----

class Solution {
  isValid(s) {
    if (s.length % 2 !== 0) return false;
    if (s.length === 0) return true;

    const arr = s.split("");
    let openedStack = [];

    const pairingChars = new Map();
    pairingChars.set("{", "}");
    pairingChars.set("(", ")");
    pairingChars.set("[", "]");

    for (let i = 0; i < arr.length; i++) {
      if (pairingChars.has(arr[i])) {
        openedStack.push(arr[i]);
        continue;
      } else {
        if (arr[i] === pairingChars.get(openedStack[openedStack.length - 1])) {
          openedStack.pop();
          continue;
        } else return false;
      }
    }

    return openedStack.length === 0;
  }
}
