// Golabal Vaiables
var urbanCitiesArr =["New York", "Philadlephia", "Dallas", "Atlanta", "Washington"];
var wins = 0;
var loss=0;
var wrongLetter=[];
var guessesLeft=9;
var underScores=[]
var userGusses=[];
 var urbanCity;
 
 
 

 // Function to Start Game
 function startGame(){
  urbanCity = urbanCitiesArr[Math.floor(Math.random() * urbanCitiesArr.length)];

  for(var i=0; i < urbanCity.length; i++){

      underScores.push('_');
//   Print underscores to screen
   document.getElementById('word-blanks').textContent =underScores.join(" ");
//    Reset 
   wrongLetter=[];
   guessesLeft=9;

   //HTML Print
   document.getElementById('guesses-left').textContent = guessesLeft;

 }
 
}
// User Guesses
document.onkeyup = function(event){
userGusses = event.key;
// checking if letter exist inside of the word.
 if(urbanCity.indexOf(userGusses) > -1 ){
     
 }
 else{
     wrongLetter.push(userGusses);
     console.log(wrongLetter);
 }
}
startGame();