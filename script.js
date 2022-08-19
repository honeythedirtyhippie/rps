let playerSelection;
let computerSelection;
let tieScore;
let playerScore;
let computerScore;
let rockCount;
let scissorsCount;
let paperCount;
playGame();

//RPS

//1. get Computer Choice
function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        rockCount++;
        computerSelection = "rock";
    }
    else if (randomNumber == 2) {
        paperCount++;
        computerSelection = "paper";
    }
    else if (randomNumber == 3) {
        scissorsCount++;
        computerSelection = "scissors";
    }
    else {
    computerSelection = "ERROR";
    }
    return computerSelection;
}

//2. get Player Choice
function getPlayerSelection() {    // this function has been altered to randomly make a player selection. original code is commented out.

//    playerSelection = prompt("rock, paper, scissors?").toLowerCase();
//    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
//        return playerSelection;
//   }
//    else {
//        getPlayerSelection();
//   }
const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        rockCount++;
        playerSelection = "rock";
    }
    else if (randomNumber == 2) {
        paperCount++;
        playerSelection = "paper";
    }
    else if (randomNumber == 3) {
        scissorsCount++;
        playerSelection = "scissors";
    }
    else {
    playerSelection = "ERROR";
    }
    return playerSelection;
}

//3. determine and score winner of round
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
    return roundResult;
}

//4. play round
function playRound() {
    getComputerSelection();
    getPlayerSelection();
    calcRoundResult(playerSelection, computerSelection);
    
}

//5. play Game (5 rounds) with new user input each Round
function playGame() {
    rockCount = 0;
    scissorsCount = 0;
    paperCount = 0;
    tieScore = 0;
    playerScore = 0;
    computerScore = 0;
    const rounds = prompt("How many rounds would you like to play?", "5");
    for(i = 1; i <= rounds; i++) {
        playRound();
        console.log(`Round ${i}: ${roundResult} Score: Player ${playerScore} Computer ${computerScore} Ties ${tieScore}`);
        console.log(`Rock: ${rockCount} Paper: ${paperCount} Scissors: ${scissorsCount}`);
    }
    playerScore > computerScore ? (result = "Player Wins the Game!") : playerScore == computerScore ? (result = "Tie Game!") : (result = "Computer Wins the Game!");
    console.log(`${result}`);
    playAgain();
    
}

//6. play again? 
function playAgain() {
   if (confirm("play again?") == true) {
    playGame();
   }
   else
   return;   
}