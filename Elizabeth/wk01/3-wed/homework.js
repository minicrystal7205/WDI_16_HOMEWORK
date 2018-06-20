//The Recipe Card
var seaFood = {
  title: "Stir Fried Shrimp",
  servings: 2,
  ingredients: ["salt", "garlic", "spring"]
}
console.log(seaFood.title);
console.log(seaFood.servings);
console.log(seaFood.ingredients[0]);
console.log(seaFood.ingredients[1]);
console.log(seaFood.ingredients[2]);


//The reading list
var Books = [
{
  title: "Emma",
  author: "Jane Austin",
  alreadyRead: true,
},
{
  title: "Pride and Prejusdice",
  author: "Jane Austin",
  alreadyRead: false,
},
{
  title: "Sense and Sensibility",
  author: "Jane Austin",
  alreadyRead: true
}
];
for (var i = 0; i < Books.length; i++) {
  console.log(Books[i].title + " by " + Books[i].author);
}

for (var i = 0; i < Books.length; i++) {
if (Books[i].alreadyRead === true) {
console.log("You already read" + Books[i].title);
}else {
  console.log("You still need to read" + Books[i].title);
  }
}

//The movie database
var List = [
{
  title: 'Avengers',
  duration: 2018,
  stars: ['Robert Downey Jr., Chris Hemsworth, Mark Ruffalo']
},
{
  title: 'Incredibles',
  duration: 2018,
  stars: ['Craig T. Nelson, Holly Hunter, Sarah Vowell']
},
{
  title: 'Deadpool',
  duration: 2018,
  stars: ['Ryan Reynolds, Josh Brolin, Morena Baccarin']
}
];
for (var i = 0; i < List.length; i++) {
  for (var j = 0; i < List[i].stars; i++) {
  }
console.log('Best movie ' + List[i].title + 'in' + List[i].duration + '. ' + 'Stars: ' + List[i].stars);
}

//Title: Guess The Number
var userGuess = prompt('guessing a number');
var secretNum = 7;
while (userGuess != secretNum)  {
  // guess again
  console.log(userGuess = prompt('guessing a number'));
}
console.log('you win');


var userGuess = prompt('guessing a number');
var randomNum = Math.floor((Math.random()*10000)+1);
while (userGuess != randomNum) {
  if (userGuess > randomNum) {
    console.log("Wrong, guess lower");
  }else {
    console.log("Wrong, guess highter!");
  }
userGuess = prompt('guessing a number');
}
console.log("you win");
