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

//build the repeated game :
function game(numberOfRounds, playerSelection, computerSelection) {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < numberOfRounds; i++) {
		let roundResult =  playsOneRound(playerSelection, computerSelection);

		if (roundResult.startsWith("You Win!")) {
			playerScore++;

			result.textContent = roundResult;
			resultDiv.appendChild(result);

			scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
			resultDiv.appendChild(scoreBoard);

		} else if (roundResult.startsWith("You Lose!")) {
			computerScore++;
			result.textContent = roundResult;
			resultDiv.appendChild(result);
			resultDiv.appendChild(scoreBoard);

			scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
			resultDiv.appendChild(scoreBoard);
		} else {
			result.textContent = roundResult;

			resultDiv.appendChild(result);
			resultDiv.appendChild(scoreBoard);

			scoreBoard.textContent = ` Scoreboard => Your score: ${playerScore} , computer score: ${computerScore}`;
			resultDiv.appendChild(scoreBoard);
		}
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

let choice = buttons.forEach(button => button.addEventListener('click', function(e) {
	finalResult.textContent = game(5, e.target.id, getComputerChoice());
	resultDiv.appendChild(finalResult);
}));


