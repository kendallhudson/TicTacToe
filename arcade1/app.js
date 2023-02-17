// empty player array
const playerNamesArr = ["player1", "player2"]

// current player
let currentPlayer = playerNamesArr[0];

// show inputted player names player 1
const player1Name = document.getElementById("player1Input")

player1Button.addEventListener('click', whoIsPlaying)

function whoIsPlaying () {
    alert("Player 1: " + player1Name.value + " is playing!");
    playerNamesArr.splice(0, 1, player1Name.value);
}

// add functionality to "Play Again" button
const playGameAgain = document.getElementById("playAgainButton")

playAgainButton.addEventListener('click', playAgainFunc);

// show inputted player names player 2
const player2Name = document.getElementById("player2Input")

player2Button.addEventListener('click', whoElseIsPlaying)

function whoElseIsPlaying () {
    if(player2Name.value === "") {
        alert(player1Name.value + " will play against the Computer! GOOD LUCK!!");
        playerNamesArr.splice(1, 1, player2Name.value);
    } else {
        alert("Player 2: " + player2Name.value + " is playing! " + player1Name.value + " & " + player2Name.value + " will play together! GOOD LUCK!!");
        playerNamesArr.splice(1, 1, player2Name.value);
    }
}

// select square and mark "X" or "O" 
let table = document.getElementsByTagName('table')[0]
table.addEventListener("click", currentPlayerMark) 

// main function to make each click alternate between marking "X" and "O"
function currentPlayerMark(event) {
    if(currentPlayer === playerNamesArr[0]) {
    markX(event);
    } else {
        markO(event);
    }
}

// this marks "X" specifically 
function markX(event) {
    const target = event.target
    // prevents the background table from selecting/changing a color
    if(target.tagName !== "TD") {
        return
    }
    if(target.className.length) {
        target.className = ''
    } else {
        target.className = 'xMark';
    }
    checkWinningMoveAllDirections() 
    checkTiedGame()
    stopClicking()
    currentPlayer = playerNamesArr[1];
}
// this marks "O" specifically
function markO(event) {
    const target = event.target
    
    // prevents the background table from selecting/changing a color
    if(target.tagName !== "TD") {
        return
    }
    if(target.className.length) {
        target.className = ''
    } else {
        target.className = 'oMark' 
    }
    checkWinningMoveAllDirections()
    checkTiedGame()
    stopClicking();
    currentPlayer = playerNamesArr[0];
}

// define each square
// squares in row 1
const square1 = document.getElementById("row1Col1") 
const square2 = document.getElementById("row1Col2") 
const square3 = document.getElementById("row1Col3") 
// squares in row 2
const square4 = document.getElementById("row2Col1") 
const square5 = document.getElementById("row2Col2") 
const square6 = document.getElementById("row2Col3") 
// squares in row 3
const square7 = document.getElementById("row3Col1") 
const square8 = document.getElementById("row3Col2") 
const square9 = document.getElementById("row3Col3") 

// disable clicking for background table once game is over 
function gameOverFunc() {
    table.classList.add("gameOver");
    alert("Game Over, play again!");
}

// disable clicking for each square
function stopClicking() {
    if(square1.className === "xMark" || square1.className === "oMark" ){
        square1.classList.add("clicked")
    }
    if(square2.className === "xMark" || square2.className === "oMark" ){
        square2.classList.add("clicked")
    }
    if(square3.className === "xMark" || square3.className === "oMark" ){
        square3.classList.add("clicked")
    }
    if(square4.className === "xMark" || square4.className === "oMark" ){
        square4.classList.add("clicked")
    }
    if(square5.className === "xMark" || square5.className === "oMark" ){
        square5.classList.add("clicked")
    }
    if(square6.className === "xMark" || square6.className === "oMark" ){
        square6.classList.add("clicked")
    }
    if(square7.className === "xMark" || square7.className === "oMark" ){
        square7.classList.add("clicked")
    }
    if(square8.className === "xMark" || square8.className === "oMark" ){
        square8.classList.add("clicked")
    }
    if(square9.className === "xMark" || square9.className === "oMark" ){
        square9.classList.add("clicked")
    }
}

// reset game to play again
function playAgainFunc() {
    if(square1.className === "xMark clicked" || square1.className === "oMark clicked" ){
        square1.className = "";
    }
    if(square2.className === "xMark clicked" || square2.className === "oMark clicked" ){
        square2.className = "";
    }
    if(square3.className === "xMark clicked" || square3.className === "oMark clicked" ){
        square3.className = "";
    }
    if(square4.className === "xMark clicked" || square4.className === "oMark clicked" ){
        square4.className = "";
    }
    if(square5.className === "xMark clicked" || square5.className === "oMark clicked" ){
        square5.className = "";
    }
    if(square6.className === "xMark clicked" || square6.className === "oMark clicked" ){
        square6.className = "";
    }
    if(square7.className === "xMark clicked" || square7.className === "oMark clicked" ){
        square7.className = "";
    }
    if(square8.className === "xMark clicked" || square8.className === "oMark clicked" ){
        square8.className = "";
    }
    if(square9.className === "xMark clicked" || square9.className === "oMark clicked" ){
        square9.className = "";
    }
    if(table.className === "gameOver" || table.className === "xMark gameOver" ||table.className === "oMark gameOver") {
        table.className = "";
    }
}

// check for the winning move///////////////////////////////
// helper functions to check if each --ROW-- is a winner for "X" or "O"
function checkWinningMoveRow1() {
    if(square1.className === "xMark clicked" && square2.className === "xMark clicked" && square3.className === "xMark clicked") {
        alert("Player 2 wins! Start a new game!")
        gameOverFunc();
        return ("Player 2 wins! Start a new game!");
    } else if(square1.className  === "oMark clicked" && square2.className  === "oMark clicked" && square3.className  === "oMark clicked") {
        alert("Player 1 wins! Start a new game!")
        gameOverFunc();
        return ("Player 1 wins! Start a new game!")
    }
}

function checkWinningMoveRow2() {
    if(square4.className === "xMark clicked" && square5.className === "xMark clicked" && square6.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square4.className  === "oMark clicked" && square5.className  === "oMark clicked" && square6.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

function checkWinningMoveRow3() {
    if(square7.className === "xMark clicked" && square8.className === "xMark clicked" && square9.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square7.className  === "oMark clicked" && square8.className  === "oMark clicked" && square9.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

// condensed function that calls all --ROW-- helper functions
function checkWinningMoveAllRows() {
    checkWinningMoveRow1();
    checkWinningMoveRow2();
    checkWinningMoveRow3();
}

// helper functions to check if each --COLUMN-- is a winner for "X" or "O"
function checkWinningMoveColumn1() {
    if(square1.className === "xMark clicked" && square4.className === "xMark clicked" && square7.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square1.className  === "oMark clicked" && square4.className  === "oMark clicked" && square7.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

function checkWinningMoveColumn2() {
    if(square2.className === "xMark clicked" && square5.className === "xMark clicked" && square8.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square2.className  === "oMark clicked" && square5.className  === "oMark clicked" && square8.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

function checkWinningMoveColumn3() {
    if(square3.className === "xMark clicked" && square6.className === "xMark clicked" && square9.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square3.className  === "oMark clicked" && square6.className  === "oMark clicked" && square9.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

// condensed function that calls all --COLUMN-- helper functions
function checkWinningMoveAllColumns() {
    checkWinningMoveColumn1();
    checkWinningMoveColumn2();
    checkWinningMoveColumn3();
}

// helper functions to check if each --DIAGONAL-- is a winner for "X" or "O"
function checkWinningMoveDiagonal1() {
    if(square1.className === "xMark clicked" && square5.className === "xMark clicked" && square9.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square1.className  === "oMark clicked" && square5.className  === "oMark clicked" && square9.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

function checkWinningMoveDiagonal2() {
    if(square3.className === "xMark clicked" && square5.className === "xMark clicked" && square7.className === "xMark clicked") {
        alert("Player 2 wins!")
        gameOverFunc();
        return ("Player 2 wins!");
    } else if(square3.className  === "oMark clicked" && square5.className  === "oMark clicked" && square7.className  === "oMark clicked") {
        alert("Player 1 wins!")
        gameOverFunc();
        return ("Player 1 wins!");
    }
}

// condensed function that calls all --DIAGONAL-- helper functions
function checkWinningMoveAllDiagonals() {
    checkWinningMoveDiagonal1();
    checkWinningMoveDiagonal2();
}

// condensed function that calls all --CONDENSED-- helper functions
function checkWinningMoveAllDirections() {
    checkWinningMoveAllRows();
    checkWinningMoveAllColumns();
    checkWinningMoveAllDiagonals();
}

// check if game ends in a tie
function checkTiedGame() {
    if((square1.className === "xMark clicked" || square1.className === "oMark clicked") && (square2.className === "xMark clicked" || square2.className === "oMark clicked") && (square3.className === "xMark clicked" || square3.className === "oMark clicked" ) && (square4.className === "xMark clicked" || square4.className === "oMark clicked" ) && (square5.className === "xMark clicked" || square5.className === "oMark clicked" ) && (square6.className === "xMark clicked" || square6.className === "oMark clicked" ) && (square7.className === "xMark clicked" || square7.className === "oMark clicked" ) && (square8.className === "xMark clicked" || square8.className === "oMark clicked" ) && (square9.className === "xMark clicked" || square9.className === "oMark clicked" ) && (table.className !== "gameOver" || table.className !== "xMark gameOver" ||table.className !== "oMark gameOver")){
       alert("It's a Tie!")
       gameOverFunc();
    }
    
}
