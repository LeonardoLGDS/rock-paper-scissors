//PROJECT: ROCK PAPER SCISSORS

// let counterWin = 0; 
// let counterLose = 0;
// let arrayOfResults = game(3);

// for (var i = 0; i < arrayOfResults.length; i++) {
//   counterWin += arrayOfResults[i].includes("win");
//   counterLose += arrayOfResults[i].includes("lose");
// }

// if(counterWin > counterLose) {
//   alert("The player won!");
// }
// else if(counterLose > counterWin) {
//   alert("The computer won!");
// }
// else alert("It's a tie!");

let computerPlay = ["rock", "paper", "scissors"];
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerSelection = computerPlay[Math.floor(Math.random() * 3)];

        const containerCompResults = document.querySelector('#computer-result');
        containerCompResults.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        const containerPlayerResults = document.querySelector('#player-result');
        containerPlayerResults.textContent = playRound(playerChoice, computerSelection);
    });
});




// Iterates a round X times, then return an array with the result of each round.
function game(times) {
    let computerPlay = ["rock", "paper", "scissors"];
    let playerSelection = "";
    let roundResult = [];
    for (let i = 0; i < times; i++) {
        // Randomly selects "rock", "paper" or "scissors" by selecting a number between 0 and 2 and using it as an element in the array of string containing the possible choices..
        let computerSelection = computerPlay[Math.floor(Math.random() * 3)];

        do {
            playerSelection = prompt("ROCK PAPER SCISSORS. WHAT'S YOUR PLAY?").toLowerCase();
        }
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

        roundResult[i] = playRound(playerSelection, computerSelection);
    }
    return roundResult;
}
// Checks who won the round based on the selection of each player.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats Scissors.");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! Paper beats Rock.");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats Rock.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You lose! Scissors beats Paper.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win! Scissors beats Paper.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! Rock beats Scissors.");
    } else return ("It's a tie!");

}