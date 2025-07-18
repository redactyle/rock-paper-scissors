let computerScore = 0;
let humanScore = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

function getComputerChoice() {
    const randomNumber = getRandomInt();
    return randomNumber % 3;
}

function getHumanChoice() {
    const input = prompt("Choose: Rock, Paper or Scissors", "Rock").toLowerCase();

    return input === "rock" ? 0 :
           input === "paper" ? 1 :
           input === "scissors" ? 2 :
           null;
}

function getChoiceName(choiceNumber) {
    return choiceNumber === 0 ? "Rock" :
           choiceNumber === 1 ? "Paper" :
           "Scissors";
}

function playRound() {
    const computer = getComputerChoice();
    const human = getHumanChoice();

    if (human == null) {
        console.log("Invalid Choice");
        return;
    }

    const result = (3 + human - computer) % 3;

    if (result === 0) {
        console.log("It's a draw.")
    } else if (result === 1) {
        humanScore++;
        console.log(`You win! ${getChoiceName(human)} beats ${getChoiceName(computer)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${getChoiceName(computer)} beats ${getChoiceName(human)}.`);
    }
}

function playGame() {
    console.log("Welcome to Rock-Paper-Scissors.")
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("Final Score: ");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    humanScore > computerScore ? console.log(`Congratulations, you beat the computer by ${humanScore - computerScore} points.`) : 
    computerScore > humanScore ? console.log(`Too bad, the computer beat you by ${computerScore - humanScore} points.`) :
                                 console.log("Not bad, you tied with the computer.");
}

playGame();