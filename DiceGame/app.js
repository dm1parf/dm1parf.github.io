let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const rollButton = document.getElementById("roll-button");
const playerDices = document.getElementById("player-result");
const computerDices = document.getElementById("computer-result");
const resultMessage = document.getElementById("result-message");
const firstPlayerDice_img = document.getElementById("player-dice-img1");
const secondPlayerDice_img = document.getElementById("player-dice-img2");
const firstComputerDice_img = document.getElementById("computer-dice-img1");
const secondComputerDice_img = document.getElementById("computer-dice-img2");

function displayDice(diceValue, element){
	switch(diceValue){
		case 1:
			element.style.backgroundPosition = "top left";
			break;
		case 2:
			element.style.backgroundPosition = "top center";
			break;
		case 3:
			element.style.backgroundPosition = "top right";
			break;
		case 4:
			element.style.backgroundPosition = "bottom left";
			break;
		case 5:
			element.style.backgroundPosition = "bottom center";
			break;
		case 6:
			element.style.backgroundPosition = "bottom right";
			break;
		
	}
}

function getRandomDice(){
	let dice = Math.floor(Math.random() * 6 + 1);
	return dice;
}

function game(){
	let firstPlayerDice = getRandomDice();
	let secondPlayerDice = getRandomDice();
	let firstComputerDice = getRandomDice();
	let secondComputerDice = getRandomDice();
	let computerDices = firstComputerDice + secondComputerDice;
	let playerDices = firstPlayerDice + secondPlayerDice;
	
	displayDice(firstPlayerDice, firstPlayerDice_img);
	displayDice(secondPlayerDice, secondPlayerDice_img);
	displayDice(firstComputerDice, firstComputerDice_img);
	displayDice(secondComputerDice, secondComputerDice_img);

	console.log("First player dice: " + firstPlayerDice);
	console.log("Second player dice: " + secondPlayerDice);
	console.log("First computer dice: " + firstComputerDice);
	console.log("Second computer dice: " + secondComputerDice);
	console.log("Player score: " + playerDices);
	console.log("Computer score: " + computerDices);
	
	if (playerDices > computerDices){
		playerScore++;
		playerScore_span.innerHTML = playerScore;
		resultMessage.innerHTML = "You win!!!";
	} else if (playerDices < computerDices){
		computerScore++;
		computerScore_span.innerHTML = computerScore;
		resultMessage.innerHTML = "You lost((( T_T";
	} else 
		resultMessage.innerHTML = "Draw... Boring";
}

rollButton.addEventListener('click', game);