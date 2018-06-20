//js-day2-else-if.md
var d = new Date();
var year = d.getFullYear();
if (year > 2019) {
console.log("future");
}else if (year === 2018) {
console.log("present");
}else {
console.log("past");
}


var userName = prompt("what's your name?");
var userAge = prompt("how old are you?");
var name = "slackers";
console.log("hello " + userNameu + " you are " + userAge);

//console.log("ex vars");

//The Fortune Teller
var numOfChildren = 2;
var partnerName = "sexy";
var geographic = "NY";
var jobTitle = "manager";
console.log("You will be a " + jobTitle + " in " + geographic
 + "," + "and married to " + partnerName +
" with " + numOfChildren +" kids." );

//The Age Calculator
var year = 2018;
var birthYear = 1983;
var olderAge = year - birthYear;
var youngerAge = olderAge - 1;
console.log("They are either " + olderAge + " or " + youngerAge);


//The Lifetime Supply Calculator
var currentAge = 18;
var maxAge = 160;
var estPerDay = 3;
var restOfDays = maxAge-currentAge;
var eatSnack = estPerDay*365*restOfDays
console.log("You will need " + eatSnack + " to last you until the ripe old age of " + maxAge);


//The even/odd reporter
for (var i = 0; i < 21; i++) {
  if (i % 2 ===0){
    console.log(i + " is even");
  }
}

//Multiplication Tables
for (var i = 1; i < 10; i++) {
  console.log("multiplication for " + i);
  for (var j = 1; j < 10; j++ ) {
    console.log(i*j);
  }

//Your top choices
var topcolors = ["blue", "yellow", "red"];
for (var i = 0; i < topcolors.length; i++) {
  console.log("My #" + (i+1) + " choice is " + topcolors[i]);
}
