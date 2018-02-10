var require = ('./letter.js');

// function Word (value) {
//   this.value = value;
//   //array representing the letters of the underkying word
//   this.newLetters = [];
//
//   this.userGuesses = " ";
//   // for(var 1 = 0 ; i <this.value.length;i++) {
//   //     this.newLetters.push;
//   // }
//   //will return a string representing word
//   this.wrd = showLetter();
// }


//second attempt
//constructor represents the current word user is trying to guess
function Word(value) {
  //storing the string word
    this.value = value;

  //array of objects representing letters
    this.newLetters = [];
    //this key will requal false until user inputs correct answer
    this.wordFound = false;


    //1st function calls on each letter of the object
    this.getLetters = function() {

    //populate the collection above with new Letter objects
    for(var i = 0; i<that.value.length; i++){

      //newLetr is equal to a new object
      var newLetr = new Letter(that.value[i]);

      //pushing the letters from user input to the array
      this.letters.push(newLetter);

    } //end first function in constructor

  };


  //2nd function in constructor
  //found the current word
  //function for if found correct and/or current word
  this.correctWord = function() {

    //through code suggestion using .every() method
    //.every will check if all the elements in the arry pas
    //a test.
    //if argument of function is true, then show the letter
    //if this.correctWord is true, return true which wil also show letter
    if(this.letters.every(function(lttr){

      return lttr.show === true;

    })){

      this.correctWord = true;

      return true;

    }



  }; //end second function in constructor


  //3rd function in constructor
  this.checkIfLetterFound = function(guessedLetter) {
    //creating variable to count letters
    var whatToReturn = 0;

    //iterates through each letter to see if it matches the guessed letter
    //using .forEach method
    this.letters.forEach(function(lttr){
      //if it matches the guess letter, then print letter
      if(lttr.letter === guessedLetter){
        //also, boolean value of key 'lttr' will also be true.
        lttr.show = true;
        //is true, letters will be counted up or increased
        whatToReturn++;

      }

    })

    //if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;

  };


  //begin 4th function
  this.wordProvided = function() {

    var display = ''; //variable equal to empty string

    //provide the word based on if letters are found or not
    //again using .forEach method like previous function
    that.letters.forEach(function(lttr){
      //variable currentLetter is equal to function word provided
      var currentLetter = lttr.wordProvided();
        //display will be greater than or equal to the currentLetter
      display+= currentLetter;

    }); //end 4th function

    return display;
    //testing console.log too just in case
    console.log(display);

  };
    //test to see if anything prints
    console.log("purple elephant");
    //update:console statement is NOT printing
}


//exporting word for it to be used in file with main  game logic
module.exports = Word;
