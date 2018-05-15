InstantClick.on('change', function() {
    
  //initialize a random seed color in the pastel range
  window.color_origin = [
    Math.round(Math.random() * 7),
    Math.round(Math.random() * 7),
    Math.round(Math.random() * 7)
  ]

  drawSquares(parent, color_origin);
});


function drawSquares(ctx, color_origin){
  num_squares = 10;
  var colors_range = [
      '8', '9', 'a', 'b', 'c', 'd', 'e', 'd', 'c', 'b', 'a', '9', '8', '7', '6'
  ];
  var colors_range = [
      '80', '88', '90', '98', 'a0', 'a8', 'b0', 'a8', 'a0', '98', '90', '88', '80', '78', '70'
  ];
  // var colors_range = [
  //     '1', '2', '3', '4', '5', '6', '7', '8', '7', '6', '5', '4', '3', '2', '1'
  // ];

  var width = window.innerWidth;
  var height = window.innerHeight;
  var squareWidth = Math.round(width / num_squares);
  var drawn = false;
  //var parent = document.getElementById('background_grid');

  var parent = document.getElementById('background_grid');

  //if (drawn) return;
  for (var i = 0; i < num_squares; i++) {
    var color_row = '#' +
      colors_range[color_origin[0]+i];

    var row = document.createElement('div');
    row.className = 'background-grid__row';
    parent.appendChild(row);

    for (var ii = 0; ii < num_squares; ii++) {
      var color_square = 
        color_row + 
        colors_range[color_origin[1]+ii] + 
        colors_range[color_origin[2]+i];
      var div = document.createElement('DIV');
      div.style.width = 100.0 / num_squares + '%'; //squareWidth;
      div.style.height = squareWidth+'px';
      //div.style.left = (i / num_squares * 100.0) + '%';
      //div.style.top = (ii / (num_squares * 2) * 100.0) + '%';
      div.className = 'background-grid__grid-square';
      if (ii == 0) {
        div.className += ' clear';
      }
      div.style.backgroundColor = color_square;
      div.style.opacity = 0; 
      row.appendChild(div);
      //div.style.opacity = ((num_squares - i) / num_squares);
      div.width = squareWidth * 2;// = 
    }
    
  }
  drawn = true;
  setTimeout(animateSquares, 100);
}

function animateSquares(){
  var parent = document.getElementById('background_grid');
  var rows = parent.childNodes;
  for (var i = 0; i < rows.length; i++) {
    var squares = rows[i].childNodes;
    for (var ii = 0; ii < squares.length; ii++) {
      squares[ii].style.opacity = ((num_squares - i) / (num_squares-2.0));
    }
  }

  //  div.style.opacity = ((num_squares - i) / num_squares);
}
