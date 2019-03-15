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
}

function draw() {
    console.log("draw")
}
function lose() {
   computerScore++;
   computerScore_span.innerHTML = computerScore;
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
    })

    paper_div.addEventListener('click', function () {
        game("p");
    } )

    scissors_div.addEventListener('click', function () {
        game("s");
    } )
}

main();
