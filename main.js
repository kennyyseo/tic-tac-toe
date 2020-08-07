/*----- constants -----*/
// maxMoves = 9;
// winningCombos = [
//   [0, 1, 2],
//   [0, 4, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 4, 5],
//   [6, 7, 8],
//   [2, 4, 6],
// ];

/*----- app's state (variables) -----*/
let board;
let turn;

/*----- cached element references -----*/
let squares = document.querySelectorAll(".gameSquare");

/*----- event listeners -----*/
//squares
document.querySelector("#reset").addEventListener("click", initialize);
document.querySelector(".gameBoard").addEventListener("click", handleClick);

/*----- functions -----*/

//initialize game:
function initialize() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = true;
  render();
}

function render() {
  board.forEach(function (move, idx) {
    if (move === true) {
      squares[idx].textContent = "X";
    } else if (move === false) {
      squares[idx].textContent = "O";
    } else {
      squares[idx].textContent = "";
    }
  });
}

function handleClick(e) {
  let idx = parseInt(e.target.id.replace("sq", ""));
  if (board[idx] !== null) return;
  board[idx] = turn;
  turn = !turn;
  render();
}

initialize();
