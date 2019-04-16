play = () => {
  //getNumberofPlayer();
  showBoard();
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

play();
