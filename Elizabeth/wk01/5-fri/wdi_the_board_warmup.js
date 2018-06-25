// # The Board
//
// Write a program that creates a string that represents an 8×8 grid, using new- line
// characters to separate lines. At each position of the grid there is either a space or
// a “#” character. The characters should form a chess board.
// Passing this string to console.log should show something like this:
// ```
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// ```
// 1. how to create first line?
//get '# ' and repeat them.
// 2. how to create second line?
// 3. is there a pattern there?

// 4. how to repeat it?
// 5. how to combine them?

var symbol1 = '# ';
var line1 = '';
for (var i = 0; i < 8; i = i + 1) {
  line1 = line1 + symbol1;
}
var symbol2 = ' #';
var line2 = '';
for (var i = 0; i < 8; i = i + 1) {
  line2 = line2 + symbol2;
}
var line3 = '\n';
line3 = line1 + line3 + line2;


console.log(line3);


// var line = '';
// for (var i = 0; i < 8; i++) {
//   line = line + '# ';
// }
// var grid =
//
// console.log(line);

// var line1 = '# # # # # # # #\n';
// var line2 = ' # # # # # # # #\n';
// var grid = line1 + line2;
// var newGrid = '';
// for (var i = 0; i < 4; i++) {
//   newGrid = newGrid + grid;
// }
// console.log(newGrid);

// ### Extension
//
// When you have a program that generates this pattern, define a variable `size = 8`
// and change the program so that it works for any size, outputting a grid of the
// given width and height. Then, define a variable `symbol` that generates the board
// using the specified character instead.
