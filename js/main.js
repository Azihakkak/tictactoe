$(document).ready(function() {

  setTimeout(function () {
    $('#main-header').removeClass('hidden').addClass('zoomIn');
  }, 1000);


  let currentPlayer = 'X';

  let  board = ['_','_','_','_','_','_','_','_','_'];

  const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  $('button').on('click', function () {
    // $('button').addClass('shadow');
    $('.box').text('');
    $('#game-status').text('');
    board = ['_','_','_','_','_','_','_','_','_'];
  });



  $('.box').on('click', function () {
      const id = this.id;
      // console.log( id );
      // use that number as the index into board
      console.log( board[id] );
      if (board[id] === '_') {
          board[id] = currentPlayer;
          $(this).html(`<p>${currentPlayer}</p>`);
          $('p').addClass('fadeIn');

          findWinner(currentPlayer);

      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      }

      else {
        currentPlayer = 'X';
      }
    }

      console.log( board );
});


    const findWinner = function (currentPlayer) {
    // console.log('findWinner');
    for (let i = 0; i < winCombo.length; i++) {
      const current = winCombo[i];
      // get the indexes from current into their own variables
      const first = current[0];
      const middle = current[1];
      const last = current[2];

      if (board[first] === board[middle] && board[middle] === board[last] && board[first] !== '_') {
       console.log('you won');
       $('#game-status').text(`Player ${currentPlayer} Won`);
       $('#game-status').addClass('flipInX');

     } else {
       if (!board.includes('_')) {
         $('#game-status').text('Draw');
         $('#game-status').addClass('flipInX');
       }
     }
    }
  }



});






// const board = ['_','_','_','_','_','_','_','_','_'];
//
// const findWinner = function(currentPlayer) {
//   console.log(currentPlayer);
//   if (currentPlayer === board[0] && board[0] === board[1] && board[1] === board[2]) {
//     console.log("WIN 1");
//   } else if (currentPlayer === board[3] && board[3] === board[4] && board[4] === board[5]) {
//     console.log("WIN 2");
//   }



// };


  // if (board[0] && board[1] && borad[2] === 'X' || 'O') {
  //   console.log('winner');


// $('#pos-1').on('click', function() {
//   if(board[0] === true || board[0] === false ){
//     return;
// }
//   board[0] = currentPlayer;
//
//   currentPlayer = !currentPlayer;
//   console.log(board);
//
//   findWinner();
// });
//
// $('#pos-2').on('click', function() {
//   if(board[1] === true || board[1] === false ){
//     return;
// }
//   board[1] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-3').on('click', function() {
//   if(board[2] === true || board[2] === false ){
//     return;
// }
//   board[2] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-4').on('click', function() {
//   if(board[3] === true || board[3] === false ){
//     return;
// }
//   board[3] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-5').on('click', function() {
//   if(board[4] === true || board[4] === false ){
//     return;
// }
//   board[4] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-6').on('click', function() {
//   if(board[5] === true || board[5] === false ){
//     return;
// }
//   board[5] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-7').on('click', function() {
//   if(board[6] === true || board[6] === false ){
//     return;
// }
//   board[6] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-8').on('click', function() {
//   if(board[7] === true || board[7] === false ){
//     return;
// }
//   board[7] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// $('#pos-9').on('click', function() {
//   if(board[8] === true || board[8] === false ){
//     return;
// }
//   board[8] = currentPlayer;
//   currentPlayer = !currentPlayer;
//   console.log(board);
//   findWinner();
// });
//
// const findWinner = function () {
//   if ( board[0] && board[1] && board[2] === true || board[0] && board[1] && board[2] === false ) {
//     console.log('line 1 winner');
//     console.log(board[0],board[1],board[2]);
//
//   }else if( board[3] && board[4] && board[5] === true || board[3] && board[4] && board[5] === false ) {
//     console.log('line 2 winner');
//     console.log(board[3],board[4],board[5]);
//
//   } else if (board[6] && board[7] && board[8] === true  || board[6] && board[7] && board[8] === false) {
//     console.log('line 3 winner');
//     console.log(board[6],board[7],board[8])
//
//   } else if (board[0] && board[3] && board[6] === true || board[0] && board[3] && board[6] === false) {
//     console.log('line 4 winner');
//     console.log(board[0],board[3],board[6])
//
//   } else if (board[1] && board[4] && board[7] === true || board[1] && board[4] && board[7] === false) {
//     console.log('line 5 winner');
//     console.log(board[1],board[4],board[7])
//
//   } else if (board[2] === board[5] && board[8] === true || board[2] === board[5] && board[8] === false) {
//     console.log('line 6 winner');
//     console.log(board[2],board[5],board[8])
//
//   } else if (board[0] && board[4] && board[8] === true || board[0] && board[4] && board[8] === false) {
//     console.log('line 7 winner');
//     console.log(board[0],board[4],board[8])
//
//   } else if ( board[2] === board[4] && board[6] === true || board[2] === board[4] && board[6] === false ){
//     console.log('line 8 winner');
//     console.log(board[2],board[4],board[6])
//
//   } else if ( !board.includes('_')) {
//     console.log('Draw');
//
//   }

// }


// create a bord
// const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
// // create a winning pattern
// const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//
// //create a function to find the winner
// const findWinner = function(currentPlayer) {
//   for (let i = 0; i < winCombo.length; i++ ) {
//     //have to get indexes out
//     const current = winCombo[i];
//     //breaking down the index and give each a name
//     const first = current[0];
//     const second = current[1];
//     const last = current[2];
//
//     if (board[first] === board[second] && board[second] === board[last] && board[first] !== '_') {
//
//     }
//   }
// }
