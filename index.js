// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const start = document.getElementById("startgame");
const wcontainer = document.getElementById("wcontainer");
const mcontainer = document.getElementById("mcontainer");
const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");



start.addEventListener('click', () => {

    openGame();
});

function openGame() {

    if (playerOneName.value === "" || playerTwoName.value === "") {
        alert("PLayers names are required")
    } else {
        wcontainer.style.display = "none";
        mcontainer.style.display = "block";
        message.textContent = `${playerOneName.value.toUpperCase()}'s Turn`
    }
}

function showResetButton() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

player1Dice.style.display = "block";
player2Dice.style.display = "block";

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;



    if (player1Turn) {
        if (randomNumber === 1) {
            document.getElementById("dice1").style.display = "block";
            document.getElementById("dice2").style.display = "none";
            document.getElementById("dice3").style.display = "none";
            document.getElementById("dice4").style.display = "none";
            document.getElementById("dice5").style.display = "none";
            document.getElementById("dice6").style.display = "none";
            player1Dice.style.display = "none";
        } else if (randomNumber === 2) {
            document.getElementById("dice1").style.display = "none";
            document.getElementById("dice2").style.display = "block";
            document.getElementById("dice3").style.display = "none";
            document.getElementById("dice4").style.display = "none";
            document.getElementById("dice5").style.display = "none";
            document.getElementById("dice6").style.display = "none";
            player1Dice.style.display = "none";
        } else if (randomNumber === 3) {
            document.getElementById("dice1").style.display = "none";
            document.getElementById("dice2").style.display = "none";
            document.getElementById("dice3").style.display = "block";
            document.getElementById("dice4").style.display = "none";
            document.getElementById("dice5").style.display = "none";
            document.getElementById("dice6").style.display = "none";
            player1Dice.style.display = "none";
        } else if (randomNumber === 4) {
            document.getElementById("dice1").style.display = "none";
            document.getElementById("dice2").style.display = "none";
            document.getElementById("dice3").style.display = "none";
            document.getElementById("dice4").style.display = "block";
            document.getElementById("dice5").style.display = "none";
            document.getElementById("dice6").style.display = "none";
            player1Dice.style.display = "none";
        } else if (randomNumber === 5) {
            document.getElementById("dice1").style.display = "none";
            document.getElementById("dice2").style.display = "none";
            document.getElementById("dice3").style.display = "none";
            document.getElementById("dice4").style.display = "none";
            document.getElementById("dice5").style.display = "block";
            document.getElementById("dice6").style.display = "none";
            player1Dice.style.display = "none";
        } else {
            document.getElementById("dice1").style.display = "none";
            document.getElementById("dice2").style.display = "none";
            document.getElementById("dice3").style.display = "none";
            document.getElementById("dice4").style.display = "none";
            document.getElementById("dice5").style.display = "none";
            document.getElementById("dice6").style.display = "block";
            player1Dice.style.display = "none";
        }
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        document.getElementById("player1Dices").classList.remove("active");
        document.getElementById("player2Dices").classList.add("active");
        message.textContent = `${playerOneName.value.toUpperCase()}'s Turn`;
    } else {
        if (randomNumber === 1) {
            document.getElementById("dice2.1").style.display = "block";
            document.getElementById("dice2.2").style.display = "none";
            document.getElementById("dice2.3").style.display = "none";
            document.getElementById("dice2.4").style.display = "none";
            document.getElementById("dice2.5").style.display = "none";
            document.getElementById("dice2.6").style.display = "none";
            player2Dice.style.display = "none";
        } else if (randomNumber === 2) {
            document.getElementById("dice2.1").style.display = "none";
            document.getElementById("dice2.2").style.display = "block";
            document.getElementById("dice2.3").style.display = "none";
            document.getElementById("dice2.4").style.display = "none";
            document.getElementById("dice2.5").style.display = "none";
            document.getElementById("dice2.6").style.display = "none";
            player2Dice.style.display = "none";
        } else if (randomNumber === 3) {
            document.getElementById("dice2.1").style.display = "none";
            document.getElementById("dice2.2").style.display = "none";
            document.getElementById("dice2.3").style.display = "block";
            document.getElementById("dice2.4").style.display = "none";
            document.getElementById("dice2.5").style.display = "none";
            document.getElementById("dice2.6").style.display = "none";
            player2Dice.style.display = "none";
        } else if (randomNumber === 4) {
            document.getElementById("dice2.1").style.display = "none";
            document.getElementById("dice2.2").style.display = "none";
            document.getElementById("dice2.3").style.display = "none";
            document.getElementById("dice2.4").style.display = "block";
            document.getElementById("dice2.5").style.display = "none";
            document.getElementById("dice2.6").style.display = "none";
            player2Dice.style.display = "none";
        } else if (randomNumber === 5) {
            document.getElementById("dice2.1").style.display = "none";
            document.getElementById("dice2.2").style.display = "none";
            document.getElementById("dice2.3").style.display = "none";
            document.getElementById("dice2.4").style.display = "none";
            document.getElementById("dice2.5").style.display = "block";
            document.getElementById("dice2.6").style.display = "none";
            player2Dice.style.display = "none";
        } else {
            document.getElementById("dice2.1").style.display = "none";
            document.getElementById("dice2.2").style.display = "none";
            document.getElementById("dice2.3").style.display = "none";
            document.getElementById("dice2.4").style.display = "none";
            document.getElementById("dice2.5").style.display = "none";
            document.getElementById("dice2.6").style.display = "block";
            player2Dice.style.display = "none";
        }
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        document.getElementById("player2Dices").classList.remove("active");
        document.getElementById("player1Dices").classList.add("active");
        console.log(playerTwoName)
        message.textContent = `${playerTwoName.value.toUpperCase()}'s Turn`;
    }

    if (player1Score >= 20) {
        message.textContent = `${playerOneName.value.toUpperCase()} Won 🥳`;
        showResetButton();
    } else if (player2Score >= 20) {
        message.textContent = `${playerTwoName.value.toUpperCase()} Won 🥳 🎉`;
        showResetButton();
    }
    player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function() {
    reset();
});

function reset() {
    document.getElementById("dice2.1").style.display = "none";
    document.getElementById("dice2.2").style.display = "none";
    document.getElementById("dice2.3").style.display = "none";
    document.getElementById("dice2.4").style.display = "none";
    document.getElementById("dice2.5").style.display = "none";
    document.getElementById("dice2.6").style.display = "none";
    document.getElementById("dice1").style.display = "none";
    document.getElementById("dice2").style.display = "none";
    document.getElementById("dice3").style.display = "none";
    document.getElementById("dice4").style.display = "none";
    document.getElementById("dice5").style.display = "none";
    document.getElementById("dice6").style.display = "none";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    message.textContent = "Player 1 Turn";
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dices.classList.remove("active");
    player1Dices.classList.add("active");
    player1Dice.style.display = "block";
    player2Dice.style.display = "block";
}