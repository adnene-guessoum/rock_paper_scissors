// javascript code Here for RPS game

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
	// randomly returns rps
	return choices[Math.floor(Math.random() * choices.length)]
}

console.log(getComputerChoice());

function playsOneRound(playerSelection, computerChoice)  {
	// return result of single round in form of a string
	// case incencitive input for the player!
	
	playerChoice = playerSelection.toLowerCase();

    switch (playerChoice) {
    	case (computerChoice):
    		//replay
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

// Playing one round :
const playerSelection = 'Rock'
const computerSelection = getComputerChoice();
console.log(playsOneRound(playerSelection, computerSelection)); 










