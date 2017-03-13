var assert = require('assert');
var Board = require('../tictactoe.js');
var testBoard = new Board();
var initBoard = '   |   |   \n-----------\n   |   |   \n-----------\n   |   |   \n';
var afterOneMove = ' X |   |   \n-----------\n   |   |   \n-----------\n   |   |   \n';

describe('ticTacToe', function() {

  describe('The game', function() {

    it('should tell who\'s turn it is', function() {
      assert.equal(1, testBoard.curPlayer);
    });
    it('should have an empty board', function() {
      assert.equal(initBoard, testBoard.board);
    });

  });

  describe('Players', function() {
    it('should be able to submit moves', function() {
      assert.equal(afterOneMove, testBoard.logMove(1, one));
    });
  });

  // describe('Someone has won via route #1', function() {
  //   it('should return true when someone wins in this way', function() {
  //     assert.equal(true, testBoard.exists);
  //   });
  // });

});