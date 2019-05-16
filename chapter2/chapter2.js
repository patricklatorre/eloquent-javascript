// Script
loopingATriangle();
fizzBuzz();
console.log(chessboard(8));


function loopingATriangle() {
  startExercise('looping a triangle');
  let row = '';
  while (row.length < 7) {
    row += '#';
    console.log(row);
  }
}

function fizzBuzz() {
  startExercise('fizzbuzz');
  for (let i = 1; i <= 100; i++) {
    let str = '';
    if (i % 3 == 0) str += 'fizz';
    if (i % 5 == 0) str += 'buzz';
    if (str) console.log(`[${i}] ${str}`);
  }
}

function chessboard(size) {
  startExercise('chessboard');
  let boardStr = '';        // output string
  let row1 = '';            // string of 1st template row
  let row2 = '';            // string of 2nd template row


  // Build template rows that alternate each other
  // e.g. #_#_ and _#_#

  for (let col = 0, blackCell = false; col < size; col++) {
    row1 += blackCell ? '#' : ' ';
    row2 += blackCell ? ' ' : '#';
    blackCell = !blackCell;
  }

  // append newlines to rows
  row1 += '\n';
  row2 += '\n';

  for (let row = 0, alternator = true; row < size; row++) {
    boardStr += alternator ? row1 : row2;
    alternator = !alternator;
  }

  return boardStr;
}


/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}