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
     //   console.log("It's a draw! Nobody get points.");
        document.getElementById('result').innerHTML = "It's a draw! Nobody get points." 
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    } else if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
     //   console.log("You win!");
        playerCounter++;
        document.getElementById('result').innerHTML = "User wins!";
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    } else if ((computerChoice == 'rock' && userChoice == 'scissors') || (computerChoice == 'paper' && userChoice == 'rock') || (computerChoice == 'scissors' && userChoice == 'paper')) {
     //   console.log("Computer wins");
        compCounter++;
        document.getElementById('result').innerHTML = "Computer wins!"
        document.getElementById('points').innerHTML = "You: "+ playerCounter + " x Computer: " + compCounter;
    }

    
    winner();
    
    
  
} // end of function result




 