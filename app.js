const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

play = () => {
  //getNumberofPlayer();
  showBoard();
  startGame();
  console.log("Enter 0-8");
};
const player1 = "X";
const player2 = "O";
const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
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
  readline.question("What is your move", input => {
    for (i = 0; i < 5; i++) {
      if (input == "X" || input == "Y" || input == "x" || input == "y") {
        console.log("Good Move");
      } else {
        gameOver();
        break;
      }
    }

    console.log("Game over");
  });
};

move = input => {};

play();

gameOver = () => {
  console.log("Thank you for playing!");
  readline.close();
};
