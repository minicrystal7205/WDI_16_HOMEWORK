//function
// week1-js-functions2.js

///function
// week1-js-functions2.js/ 1. Build your own concatenation
// Write a function named combineWords that:
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

// var combineWords = function(word1, word2) {
//   return word1 + word2;
// }

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function (birthYear, currentYear) {
  var olderAge = currentYear - birthYear;
  var youngerAge = olderAge - 1;
console.log('you are either ' + olderAge + ' or ' + youngerAge);
};


//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.


var fruit = ['banana', 'apple', 'pineapple', 'strawberry'];
var lengths = function(strings) {
  var result = [];
  for (i = 0; i < strings.length; i++) {
    result.push(strings[i].length);
  }
  return result;
}
console.log(lengths(fruit));


// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(first, second, third) {
  var product = first * second;
  return Math.pow(product, third);
}



// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

var string = 'we are good friends';
var wordReverse = function(words) {
  var splitWord = words.split(' ');
  var string2 = splitWord.reverse();
  return string2.join(' ');
}
console.log(wordReverse(string));
