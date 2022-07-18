var computerChoice;
var userChoice;
const buttons = document.querySelectorAll('button');
let playerCounter = 0;
let compCounter = 0;


buttons.forEach(button => button.addEventListener('click', (e) => {
  userChoice = e.target.id;
 // console.log("userChoice at forEach: " + userChoice);
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
  //  console.log("ComputerChoice at computerPlay(): " + computerChoice);
    document.getElementById("computer").innerHTML = computerChoice;

} // end of function computerPlay()

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

    for (let i = 0; i < 6; i++) {
       if (playerCounter == 5 || compCounter == 5) {
            break;
         if (playerCounter > compCounter) {
            document.getElementById('result').innerHTML = "The winner is YOU! Congrats!"
         } else if (compCounter > playerCounter) {
            document.getElementById('result').innerHTML = "The winner is the Computer! Bad luck today!"
         }
        }
    } 
    
} // end of function result
 