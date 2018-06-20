InstantClick.on('change', function() {
    
  //initialize a random seed color in the pastel range
  window.color_origin = [
    Math.round(Math.random() * 7),
    Math.round(Math.random() * 7),
    Math.round(Math.random() * 7)
  ]

  window.drawn = false;
  drawSquares(color_origin);
  window.addEventListener('resize', function(){
    var parent = document.getElementById('background-grid');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    drawSquares(color_origin);
  }, false);
});



function drawSquares(color_origin){
  num_squares = 10;
  num_rows = 20;
  var colors_ranges = [
    [
      '80', '88', '90', '98', 'a0', 'a8', 'b0', 'a8', 'a0', '98', '90', '88', '80', '78', '70', '68', '60'
    ],
    [
      '90', '88', '80', '78', '70', '68', '60', '68', '70', '78', '80', '88', '90', '98', 'a0', 'a8', 'b0', 'a8', 'a0', '98'
    ]
  ];
  var colors_range = colors_ranges[Math.round(Math.random() * 1)];
  // var colors_range = [
  //     '1', '2', '3', '4', '5', '6', '7', '8', '7', '6', '5', '4', '3', '2', '1'
  // ];

  var width = window.innerWidth;
  var height = window.innerHeight;
  var squareWidth = Math.round(width / num_squares);
  //var drawn = false;
  //var parent = document.getElementById('background_grid');

  var parent = document.getElementById('background-grid');
  parent.style.backgroundColor = '#' + colors_range[color_origin[0]] || '60' + colors_range[color_origin[1]] || '60' + colors_range[color_origin[2]] || '60';

  //if (drawn) return;
  for (var i = 0; i < num_rows; i++) {
    var color_row = '#' +
      colors_range[color_origin[0]+i] || '60';

    var row = document.createElement('div');
    row.className = 'background-grid__row';
    parent.appendChild(row);

    for (var ii = 0; ii < num_squares; ii++) {
      var color_square = 
        color_row + 
        (colors_range[color_origin[1]+ii] || '50') + 
        (colors_range[color_origin[2]+i] || '60');
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
      if (!drawn) {
        div.style.opacity = 0; 
      }
      row.appendChild(div);
      //div.style.opacity = ((num_squares - i) / num_squares);
      div.width = squareWidth * 2;// = 
    }
    
  }
  if (!drawn) setTimeout(animateSquares, 100);
  window.drawn = true;
  
}

function animateSquares(){
  var parent = document.getElementById('background-grid');
  var rows = parent.childNodes;
  for (var i = 0; i < rows.length; i++) {
    var squares = rows[i].childNodes;
    for (var ii = 0; ii < squares.length; ii++) {
      squares[ii].style.opacity = ((num_rows - i) / (num_rows-2.0));
    }
  }

  //  div.style.opacity = ((num_squares - i) / num_squares);
}
