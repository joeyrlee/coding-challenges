/**
 * Instructions
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse

== INPUT ==
["aaffhkksemckelloe", "fhea"]

== OUTPUT ==
affhkkse

<< CORRECT >>

== INPUT ==
["ahffaksfajeeubsne", "jefaa"]

== OUTPUT ==
aksfaje
 */

// O(n) time, O(N + K) space
function MinWindowSubstring(strArr: string[]) {
    const [N, K] = strArr;
    const KCharToCount = K.split('').reduce<{[char: string]: number}>((acc, char) => {
      acc[char] = 1 + (acc[char] ?? 0);
      return acc;
    }, {});
    const windowCharToCount: {[char: string]: number} = {};
    let charsHave = 0;
    let charsNeeded = K.length;
    let resultIndexStart = 0;
    let resultLength = N.length;
    let windowStartIndex = 0;
    N.split('').forEach((char, index) => {
      windowCharToCount[char] = 1 + (windowCharToCount[char] ?? 0);
      if (char in KCharToCount && windowCharToCount[char] <= KCharToCount[char]) {
        charsHave += 1;
      }
  
      while (charsHave === charsNeeded) {
        const currWindowLength = index - windowStartIndex + 1;
        if (currWindowLength < resultLength) {
          resultIndexStart = windowStartIndex;
          resultLength = currWindowLength;
        }
        const shiftedChar = N[windowStartIndex];
        windowCharToCount[shiftedChar] -= 1;
        if (shiftedChar in KCharToCount && windowCharToCount[shiftedChar] < KCharToCount[shiftedChar]) {
          charsHave -= 1;
        }
        windowStartIndex += 1;
      }
    });
  
    return N.substr(resultIndexStart, resultLength);
  }