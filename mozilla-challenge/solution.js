// O(bracket_string) space and time
function solution(bracket_string) {
  const openingBracketStack = [];
  const closeToOpenBracket = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < bracket_string.length; i++) {
    const currBracket = bracket_string[i];
    if (currBracket in closeToOpenBracket) {
      const lastOpenBracket = openingBracketStack.pop();
      if (lastOpenBracket !== closeToOpenBracket[currBracket]) return 0;
    } else {
      openingBracketStack.push(currBracket);
    }
  }
  return openingBracketStack.length === 0 ? 1 : 0;
}

const assertEquals = (expected, actual) => expected === actual;
console.log(assertEquals(1, solution('[{}]')))
console.log(assertEquals(0, solution('[}]')))
console.log(assertEquals(0, solution('[{]')))
console.log(assertEquals(0, solution('[{]}')))
console.log(assertEquals(0, solution('[)')))
console.log(assertEquals(1, solution('()')))
console.log(assertEquals(0, solution('(')))
console.log(assertEquals(0, solution(')')))
console.log(assertEquals(0, solution('([')))
console.log(assertEquals(0, solution(')]')))
  