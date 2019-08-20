// Golabal Vaiables
var urbanCitiesArr =["new york", "philadlephia", "dallas", "atlanta", "washington"];
var winsScore = 0;
var lossScore=0;
var wrongLetter=[];
var guessesLeft=9;
var underScores=[]
var userGusses=[];

 var urbanCity;
 
 
 var urbanCity =  Math.floor(Math.random() * urbanCitiesArr.length);
//  DOM 
var wordblank = document.getElementById('word-blanks');
var winsScore = document.getElementById('Wins');
var lossScore = document.getElementById("Loses");
 var choosenWord = urbanCitiesArr[urbanCity];
 
  var createUnderscore = () =>{
  for(var i=0; i < choosenWord.length; i++){
      
      underScores.push('_');
      
      
  }
     return underScores;

  }
 console.log(createUnderscore());
document.addEventListener('keypress', (event) => {
    var x = event.which || event.keyCode; 
    var keyword = String.fromCharCode(event.keyCode);
    // if users guess is right
     if(choosenWord.indexOf(keyword) > -1){
    // add to Users Gusses
     userGusses.push(keyword);
     underScores[choosenWord.indexOf(keyword)] = keyword;
     wordblank[i].innerHTML = underScores.join('');
      userGusses.innerHTML = winsScore;
    
      if (underScores.join('')=== choosenWord) {
         alert("You win");
         
    }
        
     else{
        wrongLetter.push(keyword);
        console.log(wrongLetter);
    }
          
      } 
    

});


 // Function to Start Game
//  function startGame(){


//   Print underscores to screen
    // document.getElementById('word-blanks').textContent =underScores.join(" ");
    
//    Reset 
//    wrongLetter=[];
//    guessesLeft=9;
   

   //HTML Print
//    document.getElementById('guesses-left').textContent = guessesLeft;

//  }
 
// }
// Win or lose function
// function winLose()
// {
    // if(winCounter === urbanCity.length){

        // alert('winner');
    // }
    // else if (guessesLeft===0){
        // alert('Loser');
        
// }
// }

// User Guesses
// document.onkeyup = function(event){
// userGusses = event.key;


// checking if letter exist inside of the word.
//  if(urbanCity.indexOf(userGusses) > -1 ){
    //  for( var i=0; i < urbanCity.length; i++){
    // if(urbanCity[i]===userGusses){
        // underScores[i]=userGusses;
        // console.log(underScores);
        // winCounter++;
        // winLose();
    // }
    //  }
//  }

//  else{
    //  wrongLetter.push(userGusses);
    //  guessesLeft--;
    //  winLose();
     
     
//  }
// }
// startGame();

