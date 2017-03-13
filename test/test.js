var assert = require('assert');
var Board = require('../tictactoe.js');
var testBoard = new Board();

describe('ticTacToe', function() {

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