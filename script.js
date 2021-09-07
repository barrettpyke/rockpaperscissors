//Selection Array and Score Variables
const selections = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let computerPoints = 0;
let ties = 0;

//Randomizes number and chooses selections Array value
function computerPlay() {
    const random = selections[Math.floor(Math.random() * selections.length)];
    return random;
    }

//Runs the 5 rounds
function game() {
    for (let i = 1; i <= 5; i++) {
        let userSelection = prompt("Enter Rock, Paper, or Scissors.");
        let computerSelection = computerPlay();
        playRound(userSelection, computerSelection);
        userSelection = null;
        computerSelection = null;
    }
}

//Compares user vs computer selection and adds point to scoreboard
function playRound (userSelection, computerSelection) {
    let userSelectionLower = userSelection.toLowerCase();
    if ((userSelectionLower === 'rock' && computerSelection === 'scissors') ||    
        (userSelectionLower === 'paper' && computerSelection === 'rock') ||
        (userSelectionLower === 'scissors' && computerSelection === 'paper')) {
                console.log(`User: ${userSelectionLower}`);
                console.log(`Computer: ${computerSelection}`);
                
                userPoints += 1;
                let score = `User: ${userPoints} Computer: ${computerPoints} Ties: ${ties}`;
                let result = 'User wins!';
                
                console.log(result);
                console.log(score);
                
                return result;
        }
    else if ((userSelectionLower === 'scissors' && computerSelection === 'rock') ||
            (userSelectionLower === 'rock' && computerSelection === 'paper') ||
            (userSelectionLower === 'paper' && computerSelection === 'scissors')) {
                console.log(`User: ${userSelectionLower}`);
                console.log(`Computer: ${computerSelection}`);
                
                computerPoints += 1;
                let score = `User: ${userPoints} Computer: ${computerPoints} Ties: ${ties}`;
                let result = 'Computer wins!';
                
                console.log(result);
                console.log(score);
                
                return result;
    }
    else if ((userSelectionLower === 'scissors' && computerSelection === 'scissors') ||
            (userSelectionLower === 'rock' && computerSelection === 'rock') ||
            (userSelectionLower === 'paper' && computerSelection === 'paper')) {
                console.log(`User: ${userSelectionLower}`);
                console.log(`Computer: ${computerSelection}`);
                
                ties += 1;
                let score = `User: ${userPoints} Computer: ${computerPoints} Ties: ${ties}`;
                let result = 'Tie!';
                
                console.log(result);
                console.log(score);
                
                return result;
    }
}
