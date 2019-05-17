// min() tests
startExercise('minimum');
console.log(min(1, 2));
console.log(min(3, -1));
console.log(min(1, 'a'));
console.log(min('a', 1));
console.log(min(1));
console.log(min('a'));

// isEven() tests
startExercise('is even');
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// count test
console.log(countBs('BananaboatBoy'));
console.log(countChar('BananaboatBoy', 'B'));
console.log(countChar('BananaboatBoy', 'b'));

/////////////////////////////////////////////////////////////////////

/**
 * Finds the minimum between two numbers
 * @param {Number} num1
 * @param {Number} num2 
 * @return {Number} the minimum between the 2 numbers 
 */
function min(num1, num2) {
  console.log(`${num1}:${typeof num1}    ${num2}:${typeof num2}`);
  return (num1 > num2) ? num2 : num1;
}

/**
 * 
 * @param {Number} num the number to be evaluated
 * @return {Boolean} (after recursion) returns 
 *                    true if the number is even and
 *                    false otherwise
 */
function isEven(num) {
  if (num < 0) return isEven(num * -1);
  if (num === 0) return true;
  if (num === 1) return false
  return isEven(num - 2);
}

/**
 * Counts the number of capital Bs in a given string
 * @param {String} the string to be evaluated
 * @return {Number} total count of 'B'
 */
function countBs(str) {
  return countChar(str, 'B');
}

/**
 * Counts the number of occurences of a specific character
 * in a string
 * @param {String} str the string to be evaluated
 * @param {String} targetChar the character to be counted
 */
function countChar(str, targetChar) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) count++;
  }
  return count;
}

/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}