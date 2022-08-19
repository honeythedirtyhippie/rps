let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 0;
let roundResult;
//Rock Button
const rockBtn = document.querySelector('.buttonRock');
rockBtn.addEventListener('click', () => {
    playRound("rock");
    
});
//Paper Button
const paperBtn = document.querySelector('.buttonPaper');
paperBtn.addEventListener('click', () => {
    playRound("paper");
    
});
//Scissors Button
const scissorsBtn = document.querySelector('.buttonScissors');
scissorsBtn.addEventListener('click', () => {
    playRound("scissors");
    
});

// get Computer Choice
function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        computerSelection = "rock";
    }
    else if (randomNumber == 2) {
        computerSelection = "paper";
    }
    else if (randomNumber == 3) {
        computerSelection = "scissors";
    }
    else {
    computerSelection = "ERROR";
    }
    return computerSelection;
}

//determine and score winner of round
function calcRoundResult(pS, cS) {
    if (pS === cS) {
        roundResult = `you both chose ${pS}, this round is tie!`;
        tieScore++;
    }
    else if (pS == "rock" && cS == "scissors" || pS == "paper" && cS == "rock" || pS == "scissors" && cS == "paper") {
        roundResult = `${pS} beats ${cS}, player wins this round!`;
        playerScore++;
    }
    else {
        roundResult = `${cS} beats ${pS}, computer wins this round!`;
        computerScore++;
    }
    roundCount++;
    return roundResult;
}

// play round
function playRound(playerSelect) {
    getComputerSelection();
    calcRoundResult(playerSelect, computerSelection);
    wwcd(playerScore, computerScore);    
    displayInfo(roundCount, playerScore, computerScore, tieScore, roundResult);
}

//display scores
function displayInfo(roundC, playerS, computerS, tieS, roundR) {
    document.getElementById("roundCount").innerHTML = `Round: ${roundC}`;
    document.getElementById("playerScore").innerHTML = `Player Score: ${playerS}`;
    document.getElementById("computerScore").innerHTML = `Computer Score: ${computerS}`;
    document.getElementById("tieScore").innerHTML = `Ties: ${tieS}`;
    document.getElementById("roundResult").innerHTML = `Round Result: ${roundR}`;
}
//winner winner eat some turkey
function wwcd(playerS, computerS) {
    if (playerS >= 5) {
        roundResult = `CONGRATULATIONS YOU'RE A WINNER.. for once.`;
        playAgain();        
    }
    else if (computerS >= 5) {
        roundResult = `YOU LOSE.. again.`;  
        playAgain();      
    }
}
function playAgain() {
    document.getElementById("playAgain").innerHTML = `<button class="playAgainBtn">PLAY AGAIN</button>`;
        const playAgainBtn = document.querySelector('.playAgainBtn');
        playAgainBtn.addEventListener('click', () => {
            location.reload();
         });
    
}