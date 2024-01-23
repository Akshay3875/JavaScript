let words = ["python", "hangman", "javascript", "html", "css", "code"];
let chosenWord = "";
let guessedWord = [];
let attemptsLeft = 6;
let gameOver = false;

function initializeGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(chosenWord.length).fill("_");
    attemptsLeft = 6;
    gameOver = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("word-display").innerText = guessedWord.join(" ");
    document.getElementById("attempts-left").innerText = "Attempts Left: " + attemptsLeft;
    document.getElementById("hangman-img").src = "hangman_" + (6 - attemptsLeft) + ".png";

    if (gameOver) {
        document.getElementById("game-over-message").innerHTML =
            guessedWord.join("") === chosenWord
                ? "<p>Congratulations! You guessed the word!</p>"
                : "<p>Game Over! The word was \"" + chosenWord + "\".</p>";
        document.getElementById("input-form").innerHTML =
            "<button onclick=\"initializeGame()\">Play Again</button>";
    }
}

function checkLetter() {
    if (!gameOver) {
        let letter = document.getElementById("letter").value.toLowerCase();

        if (!chosenWord.includes(letter)) {
            attemptsLeft--;
        }

        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }

        if (!guessedWord.includes("_") || attemptsLeft === 0) {
            gameOver = true;
        }

        updateDisplay();
    }
}

// Initialize the game on page load
initializeGame();
