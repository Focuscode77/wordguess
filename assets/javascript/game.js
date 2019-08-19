
var userText = document.getElementById("user-text");
 var str = "This string is kind of spacey.";
 var wins = 0;
 var loses = 0;
 
 str = str.replace(" ", "_");

 // List of Rapper to chose in game!
 var rapperList =["Jayz", "lil Wayne", "Kyane West", "Nicki Minaj" ];

 var directionsText = document.getElementById("directions-text");
 var userChoiceText= document.getElementById("userchoice-text");
 var winsText= document.getElementById("wins-text");
 var lossesText= document.getElementById("losses-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };

      

      