// Randomly generated RPS choice
function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) return 'rock';
    if (num <= 0.66) return 'paper';
    if (num > 0.66) return 'scissors';
}

// User inputted RPS choice
function getHumanChoice() {
    sign = prompt('Rock Paper Scissors');
    return sign.trim().toLowerCase();
}

// Score tracker
let humanScore = 0
let computerScore = 0


// Single round
function playRound(humanChoice, computerChoice) {

    // Human wins
    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    
    // Tie
    else if (humanChoice === computerChoice) {
        console.log('Tie!');
    }
    
    // Invalid option
    else if (
        (humanChoice != 'rock') &&
        (humanChoice != 'paper') &&
        (humanChoice != 'scissors')
    ) {
        console.log('Invalid option')
    }
    
    // Computer wins
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

// Repeat for 5 games
function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declaring a winner
    if (humanScore > computerScore) {
        console.log(`You win! Final Score: ${humanScore} to ${computerScore}`)
    }

    else if (humanScore == computerScore) {
        console.log(`Tie! Final Score ${humanScore} to ${computerScore}`)
    }

    else {
        console.log(`You lose! Final Score ${humanScore} to ${computerScore}`)
    }
}

// Tests
playGame();
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);