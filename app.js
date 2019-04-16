const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

play = () => {
  //getNumberofPlayer();
  showBoard();
  console.log("Enter 0-8");
  startGame();
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
      if (
        input == "0" ||
        input == "1" ||
        input == "2" ||
        input == "3" ||
        input == "4" ||
        input == "5" ||
        input == "6" ||
        input == "7" ||
        input == "8"
      ) {
        console.log("Good Move, move again");
        move(input);
      } else if (input == "-1") {
        gameOver();
        break;
      } else {
        console.log("Wrong move, please enter a number between 0 and 8");
        startGame();
        break;
      }
    }
  });
};

move = input => {
  if (input == "0") {
  } else if (input == "1") {
  } else if (input == "2") {
  } else if (input == "3") {
  } else if (input == "4") {
  } else if (input == "5") {
  } else if (input == "6") {
  } else if (input == "7") {
  } else if (input == "8") {
  }
};

play();

gameOver = () => {
  console.log("Thank you for playing!");
  readline.close();
};
