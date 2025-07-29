// Randomly generated RPS choice
function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) return 'rock';
    if (num <= 0.66) return 'paper';
    if (num > 0.66) return 'scissors';
};

// Score tracker
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// Single round
function playRound(humanChoice) {
    if (gameOver) return; // Stops the game if it's over

    // Setting variables
    const computerChoice = getComputerChoice();
    const resultText = document.getElementById('result');
    const scoreText = document.getElementById('score');

    // Calculating a winner
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        resultText.textContent = 'Tie!';
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    };

    if (humanScore === 5 || computerScore === 5) { // Final score
        gameOver = true;
        if (humanScore > computerScore) {
            scoreText.textContent = `You win the game! Final Score: ${humanScore} | ${computerScore}`
        } else if (computerScore > humanScore) {
            scoreText.textContent = `You lost the game! Final Score: ${humanScore} | ${computerScore}`
        };
    } else { // Regular score
        scoreText.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    };
};

// Buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));