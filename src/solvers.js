/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var length = n;
  board.togglePiece(0, 0);
  for (var i = 1; i < length; i++) {
    board.togglePiece(i, i);
  }
  var returnArray = Object.values(board.attributes);
  returnArray.pop();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(Object.values(board.attributes)));
  return returnArray;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({'n': n});

  var solutionCount = 0;
  var length = n;
  var rookCounter = 0;


  var findSolution = function(row) {

    if (row === n && rookCounter === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < length; i++) {
      board.togglePiece(row, i);
      rookCounter++;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i);
        rookCounter--;
      } else {
        findSolution(row + 1);
        board.togglePiece(row, i);
        rookCounter--;
      }

    }

    // for (var i = 0; i < length; i ++) {
    //   board.togglePiece(rowCounter, i);
    //   if (board.hasAnyRooksConflicts()) {
    //     board.togglePiece(rowCounter, i);
    //   } else {
    //     rowCounter++;
    //     colCounter++;
    //     //board.togglePiece(rowCounter, i);
    //     innerFunc();
    //   }
    // }
  };
  findSolution(0);

  // for (var j = 0; j < length; j++) {
  //   board.togglePiece(0, j);
  //   rowCounter = 1;
  //   colCounter = 1;
  //   innerFunc(0);
  //   if (j > length) {
  //     return solutionCount;
  //   }
  // }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});

  var length = n;
  var rowCounter = 1;
  var colCounter = 1;

  var innerFunc = function() {

    if (rowCounter > n && colCounter > n) {
      var returnArray = Object.values(board.attributes);
      returnArray.pop();
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(Object.values(board.attributes)));
      return returnArray;
    }
    for (var i = 0; i < length; i ++) {
      board.togglePiece(rowCounter, i);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(rowCounter, i);
      } else {
        rowCounter++;
        colCounter++;
        innerFunc();
      }
    }
  };

  for (var j = 0; j < length; j++) {
    board.togglePiece(0, j);
    rowCounter = 1;
    colCounter = 1;
    innerFunc(rowCounter);
    // if (j > length) {
    //   return solutionCount;
    // }
  }




};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// var rowIndex = 0;
// var colIndex = 0;
// var counter = 0;
// for (var i = 0; i < board.attributeslenth; i++) {
//   for (var j = 0; j < board.attributes.length; j++) {
//     board[i][j].togglePiece(i, j);
//     board[i][j + 1].togglePiece(i, j + 1);
//     if (!board.hasAnyRowConflicts() || !board.hasAnyColConflicts()) {
//       solution.push(board);
//     }



//   }

// }
