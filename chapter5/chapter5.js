startExercise('flattening');
let preFlat = [[3, 1, 0], [5, 6], [-1]];
console.log('Before: ', preFlat);
console.log('After: ', flattening(preFlat));

startExercise('your own loop');
loop(0,
  i => i < 5,
  i => { return i + 1 },
  i => {
    console.log(`[${i}]: Higher order loop`);
  }
);

startExercise('everything');
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


/////////////////////////////////////////////////////////////

/**
 * Converts an array of arrays into a single array containing
 * all the elements in order. 
 * @param {Array} outerArray array containing all the subarrays
 */
function flattening(outerArray) {
  result = [];
  outerArray.forEach(arr => {
    arr.forEach(n => result.push(n));
  });
  return result;
}

/**
 * For loop as a higher order function 
 * @param {Number} i Iterator
 * @param {Object} test Test condition for proceeding/terminating loop
 * @param {Object} update Function executed at the end of each iteration
 * @param {Object} body Main function to be repeated
 */
function loop(i, test, update, body) {
  while (test(i)) {
    body(i);
    i = update(i);
  }
}

/**
 * Tests if each element of an array satisfies a given condition
 * @param {Array} arr Array to be tested
 * @param {Object} test Tests each element for this condition
 */
function every(arr, test) {
  return arr.filter(e => test(e)).length == arr.length;
}


/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}