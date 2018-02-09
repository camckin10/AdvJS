 var Letter = function (letra) {
//   //letra is 'letter' in spanish
//   //property for storing the letter
    this.letter = letra;
//   //boolean that stores whether the letter has been guessed
    this.guess = false;
//   //function that returns placeholder or character
    this.showLetter = function () {
     if(this.letter === ' ') {
//       //updating stored boolean value if guessed right
       this.guess = true;
//       console.log("yellow ");
     } else if (this.show === false) {
//       //if answer wrong, print placeholder
       return '_';
//       console.log("green");
     } else {
//       //just print the letter
       return this.letter;
     };
//     //calling this function to test
     this.showLetter();
   };
 };

//exporting to use in word.js
//module.exports = Letter;

//testing show letter function
this.showLetter();

//simple console.log statement for testing purposes
//console.log("is this printing anything?");
