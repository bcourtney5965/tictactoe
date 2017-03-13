class Board {
  constructor() {
    this.curPlayer = 1;

    this.one = ' ';
    this.two = ' ';
    this.three = ' ';
    this.four = ' ';
    this.five = ' ';
    this.six = ' ';
    this.seven = ' ';
    this.eight = ' ';
    this.nine = ' ';

    this.board = ` ${this.one} | ${this.two} | ${this.three} \n-----------\n ${this.four} | ${this.five} | ${this.six} \n-----------\n ${this.seven} | ${this.eight} | ${this.nine} \n`;
  }
  logBoard(){
    console.log(`it is player ${this.curPlayer}'s turn`);
    console.log(this.board);
    return;
  }
  logMove(curPlayer, position) {
    if (curPlayer === 1) {
      this[position] = "X";
    } else {
      this[position] = "O"
    }
    return;
    // is already taken (edge case)
  }
}

var myBoard = new Board();
myBoard.logMove(1, "one");
myBoard.logBoard();
console.log(myBoard.board);





module.exports = Board;
