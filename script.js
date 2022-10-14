// javascript code Here for RPS game

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
	// randomly returns rps
	return choices[Math.floor(Math.random() * choices.length)]
}

function playsOneRound(playerSelection, computerChoice)  {
	// return result of single round in form of a string
	// case incencitive input for the player!

	playerChoice = playerSelection.toLowerCase();

	switch (playerChoice) {
		case (computerChoice):
			return "It's a Draw!"
			break;

		case ('rock'):
			if (computerChoice === 'paper') {
				return "You Lose! Paper beats Rock"
			} else {
				return "You Win! Rock beats Scissors"
			}
			break;

		case ('paper'):
			if (computerChoice === 'rock') {
				return "You Win! Paper beats Rock"
			} else {
				return "You Lose! Scissors beats Paper"
			}
			break;

		case ('scissors'):
			if (computerChoice === 'paper') {
				return "You Win! Scissors beats Paper"
			} else {
				return "You Lose! Rock beats Scissors"
			}
			break;
	}
}

function displayRoundResult(roundResult) {

	let winner;

	if (roundResult.startsWith("You Win!")) {
		result.textContent = roundResult;
		resultDiv.appendChild(result);
		winner = 'player';

	} else if (roundResult.startsWith("You Lose!")) {
		result.textContent = roundResult;
		resultDiv.appendChild(result);
		winner = 'computer';

	} else {
		result.textContent = roundResult;
		resultDiv.appendChild(result);
		winner = 'none';
	}

	return winner;
}

function updateScoreBoard(winner) {

	if (winner === 'computer') {
		computerScore++;
		scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
		resultDiv.appendChild(scoreBoard);
	} else if (winner === 'player'){
		playerScore++;
		scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
		resultDiv.appendChild(scoreBoard);
	} else {
		scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
		resultDiv.appendChild(scoreBoard);
	}
}
//build the repeated game :
function displayFinalResult(playerScore, computerScore) {

	if (playerScore < 5 && computerScore < 5) {
		return "No winner Yet !"
	}

	if (playerScore > computerScore) {
		return `Congrats! you have scored ${playerScore} points! You won the game !`
	} else if (computerScore > playerScore) {
		return `You suck! you only scored ${playerScore} points! You lost the game !`
	} else {
		return `It's a Draw. You both scored ${playerScore} points!`
	}

}

// invoke the game to play 5 rounds: removed for the ui tests (assignement)

// get the selection from button click:

const buttons = document.querySelectorAll('.playerSelection > button');
const resultDiv = document.querySelector("#display-result");
const result = document.createElement('p');
const scoreBoard = document.createElement('div');
const finalResult = document.createElement('h3');

let playerScore = 0;
let computerScore = 0;

let choice = buttons.forEach(button => button.addEventListener('click', function(e) {

	let round = playsOneRound(e.target.id, getComputerChoice());
	let roundWinner = displayRoundResult(round);

	updateScoreBoard(roundWinner); 

	finalResult.textContent = displayFinalResult(playerScore, computerScore);

	resultDiv.appendChild(finalResult);
}));

