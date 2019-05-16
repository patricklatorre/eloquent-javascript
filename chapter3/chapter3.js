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

function min(num1, num2) {
  console.log(`${num1}:${typeof num1}    ${num2}:${typeof num2}`);
  return (num1 > num2) ? num2 : num1;
}

function isEven(num) {
  if (num < 0) return isEven(num * -1);
  if (num === 0) return true;
  if (num === 1) return false
  return isEven(num - 2);
}

function countBs(str) {
  return countChar(str, 'B');
}

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