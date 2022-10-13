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
function game(numberOfRounds) {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < numberOfRounds; i++) {
		let playerSelection = prompt("what's your pick for this round?");
		let computerSelection = getComputerChoice();
		let roundResult =  playsOneRound(playerSelection, computerSelection);

		if (roundResult.startsWith("You Win!")) {
			playerScore++;
			console.log(roundResult);
		} else if (roundResult.startsWith("You Lose!")) {
			computerScore++;
			console.log(roundResult);
		} else {
			console.log(roundResult);
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
	
let choice = buttons.forEach(button => button.addEventListener('click', function(e) {
	console.log(playsOneRound(e.target.id, getComputerChoice()))
}));


