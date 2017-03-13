var assert = require('assert');
var Board = require('../tictactoe.js');
var testBoard = new Board();
var initBoard = '   |   |   \n-----------\n   |   |   \n-----------\n   |   |   \n';

describe('ticTacToe', function() {

  describe('game initialization', function() {
    it('should tell who\'s turn it is', function() {
      assert.equal(1, testBoard.curPlayer);
    });

    it('should have an empty board', function() {
      assert.equal(initBoard, testBoard.board);
    });

  });

  describe('Board should exist', function() {
    it('should return true if board exists', function() {
      assert.equal(true, testBoard.exists);
    });
  });

  // describe('Someone has won via route #1', function() {
  //   it('should return true when someone wins in this way', function() {
  //     assert.equal(true, testBoard.exists);
  //   });
  // });

});