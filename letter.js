var letter = function (letra) {
  //letra is 'letter' in spanish
  //property for storing the letter
  this.letter = letra;
  //boolean that stores whether the letter has been guessed
  this.show = false;
  //function that returns placeholder or character
  this.showLetter = function () {
    if(this.letter === ' ') {
      //updating stored boolean value if guessed right
      this.show = true;
      console.log(" ");
    } else if (this.appear === false) {
      //if answer wrong, print placeholder
      return '_';
    } else {
      //just print the letter
      return this.letter
    }
  }
}

//export to use in word.js
module.exports = letter;
