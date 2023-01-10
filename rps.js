var playerWins = 0;
var computerWins = 0;

var rockElement, paperElement, scissorsElement;


document.addEventListener('DOMContentLoaded', () => {
    rockElement = document.getElementById('rock');
    paperElement = document.getElementById('paper');
    scissorsElement = document.getElementById('scissors'); 

    pwinElement = document.getElementById('pwins');
    cpuwinElement = document.getElementById('cpuwins');
    winnerElement = document.getElementById('winner');

    rockElement.addEventListener("click", function () {
        playRound('rock');
    });

    paperElement.addEventListener("click", function () {
        playRound('paper');
    });

    scissorsElement.addEventListener("click", function () {
        playRound('scissors');
    });
});

function getComputerChoice() {
    const min = Math.ceil(1);
    const max = Math.floor(4);

    var choice = Math.floor(Math.random() * (max - min) + min);

    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
}

function playRound(playerSelection) {
    console.log(playerSelection);

    winnerElement.textContent = "";
    
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    var winner;
    
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        winnerElement.textContent = "Tie - Try again!";
        return;
    }

    if (playerSelection === rock) {
        if (computerSelection === paper) {
            winner = 0;
        }
        if (computerSelection === scissors) {
            winner = 1;
        }
    }

    if (playerSelection === paper) {
        if (computerSelection === scissors) {
            winner = 0;
        }
        if (computerSelection === rock) {
            winner = 1;
        }
    }

    if (playerSelection === scissors) {
        if (computerSelection === rock) {
            winner = 0;
        }
        if (computerSelection === paper) {
            winner = 1;
        }
    }

    winner == 0 ? cpuWin() : pWin();

    if (computerWins === 5 || playerWins === 5) {
        var winnerName = "";

        computerWins === 5 ? winnerName = "Computer" : winnerName = "Player";

        winnerElement.textContent = winnerName + " wins!";

        cpuwinElement.textContent = "";
        pwinElement.textContent = "";
        computerWins = 0;
        playerWins = 0;
    }
}

function cpuWin() {
    computerWins += 1;
    cpuwinElement.textContent = "CPU: " + computerWins;
}

function pWin() {
    playerWins += 1;
    pwinElement.textContent = "Player: " + playerWins;
}