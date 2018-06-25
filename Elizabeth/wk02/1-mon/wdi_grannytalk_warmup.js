// Write a function 'grannyTalk' what takes a question as an
// argument and returns a string as her response.
//
// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
// toLowerCase
// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
// toUpperCase
// The year will be a random year between 1930 and 1950.
//
// If you say "BYE" to her she'll reply "What's that honey,
// I didn't hear you.."

//the order is important!! the most specific ones should always come first.



var talk = 'HOW ARE YOU';
var grannyTalk = function (response) {
  if (talk1 !== response.toUpperCase()) {
    console.log('SPEAK UP SONNY JIM');
  } else if (talk === 'BYE') {
      console.log('What is that honey, I did not hear you.');
  } else if (talk === response.toUpperCase()) {
      var randomYear = Math.floor((Math.random()* 20 + 1) + 1930);
      //base number on the right * the year increased.
      console.log( 'NO, NOT SINCE ' + randomYear);
  }
}
// grannyTalk(talk);

// bonus: write an additional function 'grandpaTalk' that when
// called, will call
// granny for you and interpret her responses incorrectly by
// swapping vowels (a.e.i.o.u)
// randomly in the words of her responses.

//randomly response in the string.length.


// var grandpaTalk = function (call) {
  // var randomWords = Math.floor((Math.random()* ))
// }
var string = 'SPEAK UP SONNY JIM';
for (var i = 0; i < string.length; i++) {
  var character = string.substr(i, 1);
  console.log(character);
}

var vowels = ['a', 'e', 'i', 'o', 'u'];
var isVowel = function (character) {
  if (vowels.indexOf(character) >= 0){
    return true;
  } else {
    return false;
  }
}
// grandpaTalk(talk);
// sample output of grandpaTalk:
// NO, NOT SINCE __incorrect year__
// whats that sunny
