const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

play = () => {
  //getNumberofPlayer();
  showBoard();
  console.log("Enter 0-8 \nEnter '-' to quit");
  readline.question(
    "How many players? (Press '1' or '2' then Enter)\n",
    input => {
      if (input == 1) {
        console.log("You've picked a one player game... it's coming soon");
        readline.close();
      }
      if (input == 2) {
        startGame();
      }
    }
  );
};
const player1 = "X";
const player2 = "O";
const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

showBoard = () => {
  console.log(
    " " +
      board[0] +
      " |" +
      " " +
      board[1] +
      " |" +
      " " +
      board[2] +
      "\n---+---+---\n" +
      " " +
      board[3] +
      " |" +
      " " +
      board[4] +
      " |" +
      " " +
      board[5] +
      "\n---+---+---\n" +
      " " +
      board[6] +
      " |" +
      " " +
      board[7] +
      " |" +
      " " +
      board[8]
  );
};

startGame = () => {
  console.log("You're playing two player... make your first move");
  process.openStdin().on("data", answer => {
    if (movePlayerOne(answer) == 1) {
      console.log("\ngood move");
    } else if (movePlayerOne(answer) == 2) {
      gameOver();
    } else if (movePlayerOne(answer) == 3) {
      console.log("\nwrong move");
    }
  });
};

movePlayerOne = input => {
  console.log("\n");
  if (
    input == 0 ||
    input == 1 ||
    input == 2 ||
    input == 3 ||
    input == 4 ||
    input == 5 ||
    input == 6 ||
    input == 7 ||
    input == 8
  ) {
    displayBoardAfterPlayerOne(input);
    return 1;
  } else if (input == "-") {
    return 2;
  } else {
    return 3;
  }
};

computerMove = () => {};

checkWinner = () => {
  return true;
};

function displayBoardAfterPlayerTwo(input) {
  if (input == 0) {
    board[0] = "O";
    showBoard();
  } else if (input == 1) {
    board[1] = "O";
    showBoard();
  } else if (input == 2) {
    board[2] = "O";
    showBoard();
  } else if (input == 3) {
    board[3] = "O";
    showBoard();
  } else if (input == 4) {
    board[4] = "O";
    showBoard();
  } else if (input == 5) {
    board[5] = "O";
    showBoard();
  } else if (input == 6) {
    board[6] = "O";
    showBoard();
  } else if (input == 7) {
    board[7] = "O";
    showBoard();
  } else if (input == 8) {
    board[8] = "O";
    showBoard();
  }
}

function displayBoardAfterPlayerOne(input) {
  if (input == 0) {
    board[0] = "X";
    showBoard();
  } else if (input == 1) {
    board[1] = "X";
    showBoard();
  } else if (input == 2) {
    board[2] = "X";
    showBoard();
  } else if (input == 3) {
    board[3] = "X";
    showBoard();
  } else if (input == 4) {
    board[4] = "X";
    showBoard();
  } else if (input == 5) {
    board[5] = "X";
    showBoard();
  } else if (input == 6) {
    board[6] = "X";
    showBoard();
  } else if (input == 7) {
    board[7] = "X";
    showBoard();
  } else if (input == 8) {
    board[8] = "X";
    showBoard();
  }
}

gameOver = () => {
  console.log("\nThank you for playing!");
  readline.close();
};

play();
