var util = require('util');
var one = " ";
var two = " ";
var three = " ";
var four = " ";
var five = " ";
var six = " ";
var seven = " ";
var eight = " ";
var nine = " ";

var currentPlayer = 1;

let board = ` ${one} | ${two} | ${three} \n-----------\n ${four} | ${five} | ${six} \n-----------\n ${seven} | ${eight} | ${nine} \n`

let drawBoard = () => {
  console.log(board);
}

let recordMove = () => {

}

let gameOver = () => {
  if (one === two === three || four === five === six || seven === eight === nine || one === four === seven || two === five === eight || three === six === nine || one === five === nine || three === five === seven ) {
    console.log("Game Over!");
    return true
  } else {
    return false;
  }
}

let makeMove = () =>  {
  console.log(`It is player ${currentPlayer}\'s move`);
  console.log(`please make a move`);
  console.log('\n');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (text) {
    // if currentPlayer === 1
    if (currentPlayer === 1) {
      // text = "X";
      text = "X"
      console.log(`one = ${text}`);
      console.log(`board = ${board}`);
    // else 
    }
      // text = "O"

    console.log('received data:', util.inspect(text));
    if (text === 'quit\n') {
      done();
    }
  });
  function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}

  if (gameOver()) {
    return;
  }
}

drawBoard()
makeMove();




// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// process.stdin.on('data', function (text) {
//   console.log('received data:', util.inspect(text));
//   if (text === 'quit\n') {
//     done();
//   }
// });

// function done() {
//   console.log('Now that process.stdin is paused, there is nothing more to do.');
//   process.exit();
// }










