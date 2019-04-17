var config = {
    apiKey: "AIzaSyCqfk1liildjvaIx98rXFp75sWjyv_NIV0",
    authDomain: "rock-paper-scissors-29571.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-29571.firebaseio.com",
    projectId: "rock-paper-scissors-29571",
    storageBucket: "",
    messagingSenderId: "783611167588"
  };
  firebase.initializeApp(config);
  
  // Create a variable to reference the database.
  var database = firebase.database();



let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random()* 3));
    
    
    
    return choices[randomNumber];

    
    
} 

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    database.ref().set({
        outcome: "win"
    })
}

function draw() {
    console.log("draw")

    database.ref().set({
        outcome: "draw"
    })
}
function lose() {
   computerScore++;
   computerScore_span.innerHTML = computerScore;

   database.ref().set({
       outcome: "lose"
   })
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice + computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice + computerChoice);
            break;
        case "rs":
        case "pr":
        case "sr":
            win(userChoice + computerChoice);
            break;
    } 
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");

        database.ref().set( {
            userPick: "rock"
            
        })

        // database.ref().set({
        //     computerWins: computerScore,
        // })
    
    })

    paper_div.addEventListener('click', function () {
        game("p");
        
        database.ref().set({
            userPick: "paper",
        })
    } )

    scissors_div.addEventListener('click', function () {
        game("s");
        
        database.ref().set({
            userPick: "scissors",
        });
    } )
}



main();


