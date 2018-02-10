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

//best option to set up like answer object?
inquirer.prompt([
  {
    //question 1
    type: list,
    message: "home planet of Black Panther",
    name: "wakanda" //7 lines or characters
  }, {
    //question 2
    type : list,
    message: "city where Batman is from",
    name : "gotham" //6 lines or characters
  }, {
    //question 3
    type:list,
    message:"home planet of starfire",
    name: "tamaran" //7 lines or characters
  }, {
    //question 4
    type:list,
    message:"home planets of all Green Lanterns",
    name: "mogo" //4 lines or characters
  }, {
    //question 5
    type: list,
    message: "home planet of superman",
    name: "krypton" //7 lines or characters
  }, {
    //question 6
    type: list,
    message:"planet in the real universe and superhero universe",
    name: "mars" //4 lines or 4 characters
  }

])

//create a for loop to loop through empty spaces?
//print empty lines are strings?
