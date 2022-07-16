const possibility1 = "rock";
const possibility2 = "paper";
const possibility3 = "scissors";

/* ======================== DIDN'T WORK ===============
function computer() { 
    var computerChoice = [Math.floor(Math.random() * 2)];

    if (computerChoice == 0) {
       computerChoice = possibility1;
       document.getElementById("computer").innerHTML = computerChoice;
    } else if (computerChoice == 1) {
       computerChoice = possibility2;
       document.getElementById("computer").innerHTML = computerChoice;
    } else if (computerChoice == 2) {
       computerChoice = possibility3
       document.getElementById("computer").innerHTML = computerChoice;
    }

}*/


function send() { // =============================== WORKS JUST FINE ============================
 var computerChoice = [Math.floor(Math.random() * 2)];

 if (computerChoice == 0) {
    computerChoice = possibility1;
    document.getElementById("computer").innerHTML = computerChoice;
 } else if (computerChoice == 1) {
    computerChoice = possibility2;
    document.getElementById("computer").innerHTML = computerChoice;
 } else if (computerChoice == 2) {
    computerChoice = possibility3
    document.getElementById("computer").innerHTML = computerChoice;
 }

var userTyped = document.getElementById("user").value;
    
   if (((user.value).toLowerCase() != possibility1) && ((user.value).toLowerCase() != possibility2) && ((user.value).toLowerCase() != possibility3)) {
    window.alert("Please refresh the page and choose between 'Rock', 'Paper' or 'Scissors'")
   } else if ((user.value).toLowerCase() == possibility1 && computerChoice == possibility1) {
        document.getElementById("result").innerHTML = "It's a Draw"; 
    }  else if ((user.value).toLowerCase() == possibility2 && computerChoice == possibility1) {
        document.getElementById("result").innerHTML = "You Win! Paper beats rock!"; 
    } else if ((user.value).toLowerCase() == possibility3 && computerChoice == possibility1) {
        document.getElementById("result").innerHTML = "Computer Wins! Rock beats scissor!"; 
    }  else if ((user.value).toLowerCase() == possibility1 && computerChoice == possibility2) {
        document.getElementById("result").innerHTML = "Computer Wins! Paper beats rock!";  
    } else if ((user.value).toLowerCase() == possibility2 && computerChoice == possibility2) {
        document.getElementById("result").innerHTML = "It's a draw!"; 
    }   else if ((user.value).toLowerCase() == possibility3 && computerChoice == possibility2) {
        document.getElementById("result").innerHTML = "You Win! Scissors beat paper!"; 
    } else if ((user.value).toLowerCase() == possibility1 && computerChoice == possibility3) {
        document.getElementById("result").innerHTML = "You Win! Rock beats scissor!"; 
    } else if ((user.value).toLowerCase() == possibility2 && computerChoice == possibility3) {
        document.getElementById("result").innerHTML = "Computer Wins! Scissors beat paper!";  
    } else if ((user.value).toLowerCase() == possibility3 && computerChoice == possibility3) {
        document.getElementById("result").innerHTML = "It's a Draw!";
    }
   
    document.getElementById("refresh").innerHTML = "Don't forget to refresh the page &#128512";

    console.log("User chose: "+userTyped)
    console.log("Computer chose: " + computerChoice)
}

 


