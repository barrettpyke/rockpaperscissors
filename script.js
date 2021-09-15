//Selection Array and Score Variables
const selections = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let computerPoints = 0;
let ties = 0;
let result = null;

//Randomizes number and chooses selections Array value
function computerPlay() {
    const random = selections[Math.floor(Math.random() * selections.length)];
    return random;
    }

//Compares user vs computer selection and adds point to scoreboard
function comparison (userSelection, computerSelection) {
    if ((userSelection === 'rock' && computerSelection === 'scissors') ||    
        (userSelection === 'paper' && computerSelection === 'rock') ||
        (userSelection === 'scissors' && computerSelection === 'paper')) {             
                
                userPoints += 1;              
                result = "Player Wins! :)"
                resultSelector.textContent = result;
                playerScore.textContent = userPoints;
        }
    else if ((userSelection === 'scissors' && computerSelection === 'rock') ||
            (userSelection === 'rock' && computerSelection === 'paper') ||
            (userSelection === 'paper' && computerSelection === 'scissors')) {
                
                computerPoints += 1;
                result = "Computer Wins! :("
                resultSelector.textContent = result;
                computerScore.textContent = computerPoints;
    }
    else if ((userSelection === 'scissors' && computerSelection === 'scissors') ||
            (userSelection === 'rock' && computerSelection === 'rock') ||
            (userSelection === 'paper' && computerSelection === 'paper')) {
                
                ties += 1;
                result = "Tie!"
                resultSelector.textContent = result;
                tieScore.textContent = ties;
    }
}

function playerImage() {
    if (userSelection === 'rock') {
        rockPlayer.classList.remove('hide');
    } 
    else if (userSelection === 'paper') {
        paperPlayer.classList.remove('hide');
    }
    else if (userSelection === 'scissors') {
        scissorsPlayer.classList.remove('hide');
    }
}

function computerImage() {
    if (computerSelection === 'rock') {
        rockComputer.classList.remove('hide');
    } 
    else if (computerSelection === 'paper') {
        paperComputer.classList.remove('hide');
    }
    else if (computerSelection === 'scissors') {
        scissorsComputer.classList.remove('hide');
    }
}

function imageReset() {
    rockPlayer.classList.add('hide');
    paperPlayer.classList.add('hide');
    scissorsPlayer.classList.add('hide');
    rockComputer.classList.add('hide');
    paperComputer.classList.add('hide');
    scissorsComputer.classList.add('hide');
}

//Plays a round
function playRound(userSelect) {
    imageReset();
    userSelection = userSelect;
    computerSelection = computerPlay();
    comparison(userSelection, computerSelection);
    playerImage();
    computerImage();
    userSelection = null;
    computerSelection = null;
    resultSelector.classList.remove('hide');
    vsHeader.classList.remove('hide');
}

//User Selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function() { playRound('rock'); });
paper.addEventListener('click', function() { playRound('paper'); });
scissors.addEventListener('click', function() { playRound('scissors'); });

//Scoreboard Selectors
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const tieScore = document.querySelector('#ties');
const resultSelector = document.querySelector('#resultHeader');
const rockPlayer = document.querySelector('#rockPlayer');
const paperPlayer = document.querySelector('#paperPlayer');
const scissorsPlayer = document.querySelector('#scissorsPlayer');
const rockComputer = document.querySelector('#rockComputer');
const paperComputer = document.querySelector('#paperComputer');
const scissorsComputer = document.querySelector('#scissorsComputer');
const vsHeader = document.querySelector('#vsHeader');

//TO-DO
// add images of selections above result with vs. in between, add wait between the animation running and when you can click the buttons again to achieve result
// hide result box before anything is clicked
//add disclaimer for images