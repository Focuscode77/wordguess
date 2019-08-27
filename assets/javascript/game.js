// Golabal Vaiables
var urbanCitiesArr = ["new york", "portland", "baltimore", "austin", "phoenix"];
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var wrongLetter = [];
var underScore = []
var userGuesses = [];

var urbanCity;
urbanCity = Math.floor(Math.random() * urbanCitiesArr.length);

var choosenWord = urbanCitiesArr[urbanCity];
// Sound




//  DOM 
var docUnderScore = document.getElementById('underscore');
var winsScore = document.getElementById('win-counter');
var lossScore = document.getElementById("loss-counter");
var guessCounter = document.getElementById("guess-counter");

//  function to put array in underscores
console.log(docUnderScore);

for (var i = 0; i < choosenWord.length; i++) {
    underScore[i] = " _ "
}


function render() {
    docUnderScore.innerHTML = underScore.join('');
    winsScore.innerText = wins;
    guessCounter.innerText = guessesLeft;
    lossScore.innerText = loss;
}

//  Listens to event puts code on the page
document.addEventListener('keypress', function (event) {
    var x = event.which || event.keyCode;
    var keyword = String.fromCharCode(event.keyCode);


    for (var i = 0; i < choosenWord.length; i++) {
        if (keyword === choosenWord[i]) {
            underScore[i] = keyword
        }
    }

    if (underScore.join('') === choosenWord) {
        wins++;
        alert("You win");
    }
    else {

        guessesLeft--;
        wrongLetter.push(keyword)
        if(keyword !== choosenWord){
          wrongLetter[i] = keyword


        }


        if (guessesLeft === 0) {
            loss++;
            alert("You lose");
        }
    }

    render()
})

render()
