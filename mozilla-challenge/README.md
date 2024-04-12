# Instructions
You will be validating strings consisting of brackets: ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘, ‘]’. Languages like Java, C or C++ usually utilize these brackets in balanced pairs, so the following rules are always followed:
1. Every opening bracket has a corresponding closing bracket: ‘(‘ with ‘)’, ‘{‘ with ‘}’ and ‘[‘ with ‘]’.
2. Two brackets form a pair if they have no unpaired bracket of any type between them. For example: ‘[{}]’ is valid, ‘[}]’, ‘[{]’, and ‘[{]}’ are invalid,
3. The closing bracket of a pair must be of the same type as the opening bracket, e.g. ‘( )’ is valid, but ‘[ )’ is not valid.

Write an efficient JavaScript function that tells us whether or not an input string correctly follows the above bracketing rules. The function takes in a single string parameter named “bracket_string” that represents the input string to be validated, returns 1 if the string follows the bracketing rules and returns 0 otherwise.

Be sure to perform your own testing! A few automated test cases are as follows:
| Arguments | Expected result |
| -- | -- |
| [{}] | 1 |
| [}] | 0 |
| [{] | 0 |
| [{]} | 0 |
| [) | 0 |
| () | 1 |

Good luck!
