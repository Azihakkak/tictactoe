$(document).ready(function() {

  setTimeout(function () {
    $('#main-header').removeClass('hidden').addClass('zoomIn');
  }, 1000);


  let currentPlayer = 'X';

  let  board = ['_','_','_','_','_','_','_','_','_'];

  const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


  $('button').on('click', function () {
    $('.box').text('');
    $('#game-status').text('');
    board = ['_','_','_','_','_','_','_','_','_'];
    start_game();
  });


const start_game = function() {
  $('.box').on('click', function () {
      const id = this.id;
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

  });
};

  start_game();



  const findWinner = function (currentPlayer) {

    for (let i = 0; i < winCombo.length; i++) {
      const current = winCombo[i];
      const first = current[0];
      const middle = current[1];
      const last = current[2];

      if (board[first] === board[middle] && board[middle] === board[last] && board[first] !== '_') {
       $('#game-status').text(`Player ${currentPlayer} Won`);
       $('#game-status').addClass('flipInX');
       $('.box').off('click');
      }

      else {
        if (!board.includes('_')) {
         $('#game-status').text('Draw');
         $('#game-status').addClass('flipInX');
        }
      }
    }
  }
});
