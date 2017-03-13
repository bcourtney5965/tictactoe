class Board {
  constructor(init) {
    init = ' ';
    this.curPlayer = 1;
    this.exists = true;
    this.board = ` ${this.one = init} | ${this.two = init} | ${this.three = init} \n-----------\n ${this.four = init} | ${this.five = init} | ${this.six = init} \n-----------\n ${this.seven = init} | ${this.eight = init} | ${this.nine = init} \n`;
  }
  logBoard(){
    console.log(`it is player ${this.curPlayer}'s turn`);
    console.log(this.board);
    console.log(`Please make your move player: ${this.curPlayer}`);
    console.log(`\n`);
    return;
  }
}

var myBoard = new Board();
myBoard.logBoard();













module.exports = Board;
