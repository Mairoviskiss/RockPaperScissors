const userChoice = document.getElementById('user');
const result = document.getElementById('result');
const possibility1 = "rock";
const possibility2 = "paper";
const possibility3 = "scissors";
const chosen = document.querySelector('choice');




chosen.array.forEach(chosen => chosen.addEventListener(String, (e) => {
  //  userTyped = e.target.id;
    userChoice.console.log(userTyped);
    generateComputerChoice();
    
}));

function print() {
 submission = document.getElementById('user');
 submission.console.log ('submission');
};

const handleClick = (e) => {
 const computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
 const userChoice = document.getElementById('user');
 getResults(userChoice, computerChoice);
}

function send() {
    var userTyped = document.getElementById("user").value;
    document.getElementById("printSubmission").innerHTML = "<strong>You</strong> chose " + userTyped + " and the <strong>Computer</strong> chose "  ;
   // document.getElementById("printsubmission").innerHTML = "<strong>You</strong> chose " + userTyped + "and the <strong>Computer</strong> chose " + computerChoice;
  
   if ((user.value).toLowerCase() != possibility1.toLowerCase()) {
    window.alert("peee");   
   } else if ((user.value).toLowerCase() == possibility1.toLowerCase()) {
    window.alert("ihaaa");
} 
}

if (computerChoice == possibilities[1]) {
    computerChose == "rock";
} else if (computerChoice == possibilities[2]) {
    computerChose == "paper";
} else{
    computerChose == "scissors";
}

