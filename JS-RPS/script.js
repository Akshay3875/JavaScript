document.addEventListener("DOMContentLoaded", function() {
    const choices = document.getElementById("choices");
    const playBtn = document.getElementById("play-btn");
    const resultDisplay = document.getElementById("result");

    playBtn.addEventListener("click", playGame);

    function playGame() {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        resultDisplay.textContent = `You chose: ${userChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`;
    }

    function getUserChoice() {
        const selectedButton = choices.querySelector(".selected");
        return selectedButton ? selectedButton.textContent : null;
    }

    function getComputerChoice() {
        const choicesArray = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choicesArray[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (!userChoice) {
            return "Please select a choice.";
        }

        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    choices.addEventListener("click", function(e) {
        const selectedButton = e.target;
        if (selectedButton.tagName === "BUTTON") {
            resetSelection();
            selectedButton.classList.add("selected");
        }
    });

    function resetSelection() {
        const selectedButton = choices.querySelector(".selected");
        if (selectedButton) {
            selectedButton.classList.remove("selected");
        }
    }
});
