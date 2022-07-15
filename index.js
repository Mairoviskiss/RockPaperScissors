const userChoice = document.getElementById('user');
const result = document.getElementById('result');
const possibility1 = "rock";
const possibility2 = "paper";
const possibility3 = "scissors";
const chosen = document.querySelector('choice');


function send() {
 var computerChoice = [Math.floor(Math.random() * 2)];
    
 for (i = 0; i <= 2; i++) {
   if (computerChoice == 0) {
    /*computerChoice == "rock";*/
    document.getElementById("computer").innerHTML = "rock";
   } else if (computerChoice == 1) {
   /* computerChoice == "paper";*/
    document.getElementById("computer").innerHTML = "paper";
   } else{
    /*computerChoice == "scissors";*/
    document.getElementById("computer").innerHTML = "scissors";
   }
 }

    var userTyped = document.getElementById("user").value;
   
    if ((user.value).toLowerCase() == possibility1 && computerChoice == 0) {
        document.getElementById("result").innerHTML = "It's a Draw"; 
    }  else if ((user.value).toLowerCase() == possibility2 && computerChoice == 0) {
        document.getElementById("result").innerHTML = "You Win! Paper beats rock!"; 
    } else if ((user.value).toLowerCase() == possibility3 && computerChoice == 0) {
        document.getElementById("result").innerHTML = "Computer Wins! Rock beats scissor!"; 
    }  else if ((user.value).toLowerCase() == possibility1 && computerChoice == 1) {
        document.getElementById("result").innerHTML = "Computer Wins! Paper beats rock!";  
    } else if ((user.value).toLowerCase() == possibility2 && computerChoice == 1) {
        document.getElementById("result").innerHTML = "It's a draw!"; 
    }   else if ((user.value).toLowerCase() == possibility3 && computerChoice == 1) {
        document.getElementById("result").innerHTML = "You Win! Scissors beat paper!"; 
    } else if ((user.value).toLowerCase() == possibility1 && computerChoice == 2) {
        document.getElementById("result").innerHTML = "You Win! Rock beats scissor!"; 
    } else if ((user.value).toLowerCase() == possibility2 && computerChoice == 2) {
        document.getElementById("result").innerHTML = "Computer Wins! Scissors beat paper!";  
    } else if ((user.value).toLowerCase() == possibility3 && computerChoice == 2) {
        document.getElementById("result").innerHTML = "It's a Draw!";
    }
   
}

 


