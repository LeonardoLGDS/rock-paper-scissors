//PROJECT: ROCK PAPER SCISSORS

console.log(game());

// Iterates a round 5 times and prints the winner.
function game() {
		let roundResult = "";
    let counterWin = 0;
    let counterLose = 0;
    let computerPlay = ["rock", "paper", "scissors"];
		let playerSelection = "";


	for(let i=0; i<5; i++) {
  	// Randomly selects "rock", "paper" or "scissors" by selecting a number between 0 and 2 and using it as an element in the array of string containing the possible choices..
  	let computerSelection = computerPlay[Math.floor(Math.random() * 3)];

  	do {
			playerSelection = prompt("ROCK PAPER SCISSORS. WHAT'S YOUR PLAY?").toLowerCase();
		}
		while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

    roundResult = playRound(playerSelection,computerSelection);
    counterWin += roundResult.includes("win")
    counterLose += roundResult.includes("lose")

    console.log(roundResult);
    }
    if(counterWin > counterLose) {
    	return("The player won!");
	}
    else if(counterLose > counterWin) {
    	return("The computer won!");
    }
    else return("It's a tie!")
    return 0;
}
// Checks who won the round based on the selection of each player.
function playRound(playerSelection, computerSelection) {
  if(playerSelection == "rock" && computerSelection == "scissors") {
  	return("You win! Rock beats Scissors");
  }
  else if(playerSelection == "rock" && computerSelection == "paper") {
  	return("You lose! Paper beats Rock");
  }
  else if(playerSelection == "paper" && computerSelection == "rock") {
  	return("You win! Paper beats Rock");
  }
  else if(playerSelection == "paper" && computerSelection == "scissors") {
  	return("You lose! Scissors beats Paper");
  }
  else if(playerSelection == "scissors" && computerSelection == "paper") {
  	return("You win! Scissors beats Paper");
  }
  else if(playerSelection == "scissors" && computerSelection == "rock") {
  	return("You lose! Rock beats Scissors");
  }
  else return("It's a tie!");

}
