document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const board = document.querySelector(".board");
  const result = document.getElementById("result");
  let currentPlayer = "X";
  let boardArray = ["", "", "", "", "", "", "", "", ""];

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
        // Ganti latar belakang kotak yang menang
        board.children[a].style.backgroundColor = "#32cd32"; // Warna hijau
        board.children[b].style.backgroundColor = "#32cd32";
        board.children[c].style.backgroundColor = "#32cd32";
        return boardArray[a];
      }
    }

    if (boardArray.includes("")) {
      return null;
    }

    return "Tie";
  }

  function handleClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(board.children).indexOf(cell);

    if (boardArray[cellIndex] === "" && !checkWinner()) {
      boardArray[cellIndex] = currentPlayer;
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";

      const winner = checkWinner();
      if (winner) {
        if (winner === "Tie") {
          result.textContent = "It's a tie!";
        } else {
          result.textContent = `${winner} wins!`;
        }
      }
    }
  }

  function startGame() {
    boardArray = ["", "", "", "", "", "", "", "", ""];
    board.textContent = "";
    result.textContent = "";
    currentPlayer = "X";

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.addEventListener("click", handleClick);
      board.appendChild(cell);
    }

    // Hapus latar belakang dari semua kotak
    const cells = board.children;
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "#eee";
    }
  }

  startButton.addEventListener("click", startGame);
});
