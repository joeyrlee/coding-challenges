# Gigster coding challenge
## min-window-substring
Have the function `MinWindowSubstring(strArr)` take the array of strings stored in `strArr`, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of `N` that contains all the characters in `K`. For example: if `strArr` is `["aaabaaddae", "aed"]` then the smallest substring of `N` that contains the characters a, e, and d is `"dae"` located at the end of the string. So for this example your program should return the string `"dae"`.

Another example: if `strArr` is `["aabdccdbcacd", "aad"]` then the smallest substring of `N` that contains all of the characters in `K` is `"aabd"` which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of `K`'s characters will exist somewhere in the string `N`. Both strings will only contains lowercase alphabetic characters.
Examples
Input: `["ahffaksfajeeubsne", "jefaa"]`
Output: aksfaje
Input: `["aaffhkksemckelloe", "fhea"]`
Output: affhkkse

== INPUT ==
`["aaffhkksemckelloe", "fhea"]`

== OUTPUT ==
affhkkse

<< CORRECT >>

== INPUT ==
["ahffaksfajeeubsne", "jefaa"]

== OUTPUT ==
aksfaje

## React tic tac toe
We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

You should also implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board. You should also not be able to override the other players move during the game.

You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are.

## React context
Given a languages array and rudimentary parent-child react components, use React context to pass down an active language to the child component. When the button is clicked, the displayed language should toggle between values in the languages array. Set the first languages value as the default context value.