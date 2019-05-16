function sum(range) {
  let sum = 0;
  for (let n of range) sum += n;
  return sum;
}

function range(start, end, step) {
  let result = [];
  if (step === undefined) {
    if (start <= end) step = 1;
    else step = -1;
  }

  if (start <= end) {
    while (start <= end) {
      result.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      result.push(start);
      start += step;
    }
  }
  console.log(result);
  return result;
}

function reverseArray(arr) {
  console.log('Normal: ' + arr);
  let reversedArr = [];
  while (arr.length > 0) reversedArr.push(arr.pop());
  console.log('Reversed: ' + reversedArr);
}

function reverseArrayInPlace(arr) {
  // TODO: done last
}

function arrayToList(arr) {
  let result = {};
  let current = result;
  for (let i = 0; i < arr.length; i++) {
    current.value = arr[i];

    // if i is at the end of the arr, assign null
    current.rest = (i + 1 < arr.length) ? {} : null;
    current = current.rest;
  }
  console.log(result);
  return result;
}

function listToArray(list) {
  let current = list;
  let result = [];
  while (current != null) {
    result.push(current.value);
    current = current.rest;
  }
  console.log(result);
  return result;
}

function prepend(list, newHead) {
  return {
    value: newHead,
    rest: list,
  };
}

function nth(list, n) {

}

startExercise('sum of range');
console.log(sum(range(1, 5)));

startExercise('reversing an array');
reverseArray(range(1, 5));

startExercise('array to list');
let rangeList = arrayToList(range(1, 5));
rangeList = prepend(rangeList, 6);
let rangeArr = listToArray(rangeList);


/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}