var computerChoice;
var userChoice;
const buttons = document.querySelectorAll('button');
let playerCounter = 0;
let compCounter = 0;


buttons.forEach(button => button.addEventListener('click', (e) => {
  userChoice = e.target.id;
  document.getElementById("userclicked").innerHTML = userChoice;
  computerPlay();
  result();
 })); // end of forEach


function computerPlay() {
    random = [Math.floor(Math.random() * 3)];
    if (random == 0) {
       computerChoice = 'rock';
    } else if (random == 1) {
       computerChoice = 'paper';
    } else if (random == 2) {
       computerChoice = 'scissors'
    }

    document.getElementById("computer").innerHTML = computerChoice;

} // end of function computerPlay()


function winner() {
 
    if (playerCounter == 5) {
     document.getElementById('points').innerHTML = "You are the best! Congratulations! You won by " + playerCounter + " x " + compCounter + " points"
     window.alert("You are the best! Congratulations! You won by " + playerCounter + " x " + compCounter + " points"); 
      if (confirm("Click 'ok' to reload the page") == true) {
       location.reload();
      } 
    } //end of first if condition
    
      
    if (compCounter == 5) {
      document.getElementById('points').innerHTML = "Sorry, you lost. Computer won by " + compCounter + " x " + playerCounter + " points"
      window.alert("Sorry, you lost. Computer won by " + compCounter + " x " + playerCounter + " points");
      if (confirm("Click 'ok' to reload the page") == true) {
       location.reload();
      }
    
    } //end of second if condition

} //end of winner()



function result() {
    console.log("At result: " + userChoice + " x " + computerChoice)

    if (userChoice == computerChoice) {
        document.getElementById('result').innerHTML = "It's a draw! Nobody get points." 
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    } else if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
        playerCounter++;
        document.getElementById('result').innerHTML = "User wins!";
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    } else if ((computerChoice == 'rock' && userChoice == 'scissors') || (computerChoice == 'paper' && userChoice == 'rock') || (computerChoice == 'scissors' && userChoice == 'paper')) {
        compCounter++;
        document.getElementById('result').innerHTML = "Computer wins!"
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    }

    /*
/* ======================= code for the images NOT WORING ================================================================================================================

  var img = document.createElement("img");

  /* ================================ DRAWS ============================================================================================= 
    if (userChoice == 'rock' && computerChoice == 'rock') {
     img.src = "./images/drawrock.jpg";
    var div = document.getElementById("resultimg");
    div.appendChild(img);
    } else if (userChoice == 'paper' && computerChoice =='paper') {
        img.src = "./images/drawpaper.png";
        var div = document.getElementById("resultimg");
        div.appendChild(img);
    } else if (userChoice == 'scissors' && computerChoice =='scissors') {
        img.src = "./images/drawscissors.png";
        var div = document.getElementById("resultimg");
        div.appendChild(img);
    } else if

 /* =============================== PAPER BEATS ROCK ========================================================================================================
    (userChoice == 'rock' && computerChoice == 'paper'|| computerChoice == 'rock' && userChoice == 'paper') {
     img.src = "./images/paperbeatsrock.jpg";
     var div = document.getElementById("resultimg");
     div.appendChild(img);
    } else if 

 /* ===========================================  ROCK BEATS SCISSORS ========================================================================================
    (userChoice == 'rock' && computerChoice == 'scissors'|| computerChoice == 'rock' && userChoice == 'scissors') {
    img.src = "./images/rockbeatsscissors.jpg";
    var div = document.getElementById("resultimg");
    div.appendChild(img);
    } else if

/* ============================================== SCISSORS BEAT PAPER =========================================================================================
   (userChoice == 'paper' && computerChoice == 'scissors'|| computerChoice == 'paper' && userChoice == 'scissors') {
    img.src = "./images/scissorsbeatpaper.jpg";
    var div = document.getElementById("resultimg");
    div.appendChild(img);
    }

*/
    winner();
    
    
  
} // end of function result




 