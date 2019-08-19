// Golabal Vaiables
var urbanCitiesArr =["new york", "philadlephia", "dallas", "atlanta", "washington"];
var wins = 0;
var loss=0;
var wrongLetter=[];
var guessesLeft=9;
var underScores=[]
var userGusses=[];
 var urbanCity;
 var winCounter = 0;
 
 
 

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
// Win or lose function
function winLose()
{
    if(winCounter === urbanCity.length){

        alert('winner');
    }
    else if (guessesLeft===0){
        alert('Loser');
        
}
}
// User Guesses
document.onkeyup = function(event){
userGusses = event.key;
// checking if letter exist inside of the word.
 if(urbanCity.indexOf(userGusses) > -1 ){
     for( var i=0; i < urbanCity.length; i++){
    if(urbanCity[i]===userGusses){
        underScores[i]=userGusses;
        console.log(underScores);
        winCounter++;
        winLose();
    }
     }
 }

 else{
     wrongLetter.push(userGusses);
     guessesLeft--;
     winLose();
     
 }
}
startGame();

console.log(urbanCity);
