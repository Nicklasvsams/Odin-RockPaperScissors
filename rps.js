var playerWins = 0;
var computerWins = 0;

console.log(game());

function getComputerChoice() {
    const min = Math.ceil(1);
    const max = Math.floor(4);

    var choice = Math.floor(Math.random() * (max - min) + min);

    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
}

function playRound() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    do {
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        console.log(playerSelection);
    } while (playerSelection != rock && playerSelection != paper && playerSelection != scissors)
    
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("Tie - Go again!")
        return playRound();
    }

    if (playerSelection === rock) {
        if (computerSelection === paper) {
            return cpuWin();
        }
        if (computerSelection === scissors) {
            return pWin();
        }
    }

    if (playerSelection === paper) {
        if (computerSelection === scissors) {
            return cpuWin();
        }
        if (computerSelection === rock) {
            return pWin();
        }
    }

    if (playerSelection === scissors) {
        if (computerSelection === rock) {
            return cpuWin();
        }
        if (computerSelection === paper) {
            return pWin();
        }
    }
}

function game() {
    var result = "";

    for (let index = 0; index < 5; index++) {
        console.log(playRound());
    }

    if (playerWins > computerWins) return "Player wins " + playerWins + " to " + computerWins;
    else if (computerWins > playerWins) return "Computer wins " + computerWins + " to " + playerWins;
    else return "The game is a tie!";
}

function cpuWin() {
    computerWins += 1;
    return "Computer wins!";
}

function pWin() {
    playerWins += 1;
    return "Player wins!";
}