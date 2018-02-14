//this file holds the logic of the game

//questions:
//in my index.js file, can i put 'inquire' twice?
//where do i put my array of answers??
//do i have to create a seperate file?

var inquire = inquirer('./letter.js');
var secondInquire = inquirer('./word.js');

//questions for game
//inquirer.prompt
//ask user --guess a letter
//question/answers for game
//cities/planets of superheroes
//wakanda,gotham,tamaran,mogo, krypton, mars

//cities/planets of superheroes
//wakanda,gotham,tamaran,mogo, krypton, mars

Programmer.prototype.printInfo = function() {
  console.log
  ("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);

  console.log("---------------");
};

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var answerArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 6) {
    console.log("This is a test");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "one",
        message: "What planet is Superman from?" //krypton
      }, {
        name: "two",
        message: "What planet are all Green Lanterns from?" //mogo
      }, {
        name: "three",
        message: "City where Batman is from?" //gotham
      }, {
        name: "four",
        message: "Planet in the real universe and comic book universe?" //mars
      }, {
        name: "five",
        message: "Planet where starfire is from?" //tamaran
      }, {
        name: "six",
        message: "Planet of Black Panther?" //wakanda
      }
    ]).then(function(answers) {

      // pushes newguy object into our array
      answerArray.push(new Question);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < answerArray.length; x++) {
      //print error message
      //answerArray[x].();
    }
  }
};

// call askQuestion to run our code
askQuestion();


//function with a for loop:
//figure out length of string (for answers)
//print the amount of placeholders '_'
// var gameAnswers = ['gotham', 'mars', 'krypton'];
// function gameQuestions () {
//   var gameAnswers = ['gotham', 'mars', 'krypton'];
//   for(var i = 0; i < gameAnswers.length; i ++) {
//     console.log('_');
//   }
// }
